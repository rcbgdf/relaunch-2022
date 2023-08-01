#/bin/bash

# Siehe auch
# https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/data/mongo.html#prepare-the-migration-locally
#

. ./.env

set -x
set -e

BASEDIR="./dump"
MYSQL_DB_NAME="rcb_relaunch_2020"
mkdir -p $BASEDIR

#sudo mysqladmin create -uroot $MYSQL_DB_NAME
sudo mysql -uroot <<EOF
grant all privileges on $MYSQL_DB_NAME.* to 'strapi'@'localhost' identified by 'strapi';
flush privileges;
EOF

make_id_column() {
mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
   alter table $1 add __v int(10);
   alter table $1 add mongo_id varchar(24);
   alter table $1 add mongo_created_by varchar(24);
   alter table $1 add mongo_updated_by varchar(24);
   alter table $1 add created_by varchar(24);
   alter table $1 add updated_by varchar(24);
   alter table $1 add created_at timestamp;
   alter table $1 add updated_at timestamp;
EOF
}

# https://mariadb.com/kb/en/importing-data-into-mariadb/
# mariadb-import --user='marie_dyer' --password='angelle1207' \
# --fields-terminated-by=0x09 --lines-terminated-by=0x0d0a \
# --replace --low-priority --fields-enclosed-by='"' \
#  --fields-escaped-by='#' --ignore-lines='1' --verbose \
# --columns='name_last, name_first, telephone' \
# sales_dept '/tmp/prospect_contact.txt'

import_mysql_table() {
echo "import mysql table $1 - columns=$2"
CSV_FILE=`realpath $BASEDIR/$1.csv`
#sudo mariadb-import --user=root $MYSQL_DB_NAME \
# --fields-terminated-by=0x09 --lines-terminated-by=0x0d0a \
# --replace --low-priority --fields-enclosed-by='"' \
#  --fields-escaped-by='#' --ignore-lines='1' --verbose \
# --columns="$2" \
# "$CSV_FILE"
sudo mysql -uroot $MYSQL_DB_NAME <<EOF
LOAD DATA LOCAL INFILE '$CSV_FILE'
INTO TABLE $1
FIELDS TERMINATED BY ','
ENCLOSED BY '"' LINES
TERMINATED BY '\n'
IGNORE 1 LINES ($2);
EOF
}

pull_collection() {
    echo "collection=$2 fields=$3"
    MYSQL_COLUMNS=`echo "$3" | sed -r 's/_id/mongo_id/' | sed -r 's/createdAt/created_at/' | sed -r 's/createdBy/mongo_created_by/' | sed -r 's/updatedAt/updated_at/' | sed -r 's/updated_by/mongo_updated_by/' | sed -r 's/updatedBy/mongo_updated_by/' | sed -r 's/created_by/mongo_created_by/'`
    echo "$MYSQL_COLUMNS"
    mongoexport -c "$2" --type=csv --fields "$3" $IMPORT_MONGO_DB_URI | sed -r 's/ObjectId.([^\)]+)./\1/g' | sed -r 's/createdAt/created_at/' | sed -r 's/createdBy/mongo_created_by/' | sed -r 's/updatedAt/updated_at/' | sed -r 's/updatedBy/mongo_updated_by/' | sed -r 's/T[0-9]{2}\:[0-9]{2}\:[0-9]{2}\.[0-9]{1,3}Z//g' > $BASEDIR/$2.csv
    TBL=${2//-/_}

sudo mysql -uroot $MYSQL_DB_NAME <<EOF
$1
EOF
    make_id_column $TBL
    import_mysql_table $TBL "$MYSQL_COLUMNS"
}

#mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
#    alter table clubabende add beitragsbild varchar(24);
#EOF
# _id,inhalt,created_at,updated_at,__v,created_by,updated_by

PRE_STMT="drop table if exists singletype1s;\
create table singletype1s (\
    id int(10) unsigned not null auto_increment,\
    inhalt varchar(10000),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" singletype1s "_id,inhalt,createdAt,updatedAt,__v,created_by,updated_by" 

# _id,username,registrationToken,firstname,lastname,email,password,created_at,updated_at,__v,resetPasswordToken,preferedLanguage
# 5f25e7a5a0536c001712d60d,,,Tilo,Thiele,tilo.thiele@hamburg.de,$2a$10$XFn0vrMqrh5blfM6OcouFekuNqTMchfCMePUGCybAnGli4Q3N2LCm,2020-08-01,2020-08-01,0,,de

PRE_STMT="drop table if exists strapi_administrator;\
create table strapi_administrator (\
    id int(10) unsigned not null auto_increment,\
    inhalt varchar(10000),\
    username varchar(50),\
    firstname varchar(50),\
    lastname varchar(50),\
    email varchar(50),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "strapi_administrator" "_id,username,firstname,lastname,email,createdAt,updatedAt,__v"

PRE_STMT="drop table if exists termines;\
create table termines (\
    id int(10) unsigned not null auto_increment,\
    inhalt varchar(10000),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "termines" "_id,inhalt,createdAt,updatedAt,__v,created_by,updated_by"

PRE_STMT="drop table if exists upload_file;\
create table upload_file (\
    id int(10) unsigned not null auto_increment,\
    name varchar(100),\
    alternativeText varchar(100),\
    caption varchar(100),\
    ext varchar(10),\
    mime varchar(100),\
    size float,\
    width int,\
    height int,\
    url varchar(500),\
    formats varchar(200),\
    provider varchar(100),\
    provider_metadata varchar(1000),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "upload_file" "_id,name,alternativeText,caption,ext,mime,size,width,height,url,formats,provider,createdAt,updatedAt,created_by,updated_by,provider_metadata"

PRE_STMT="drop table if exists naechster_clubabends;\
create table naechster_clubabends (\
    id int(10) unsigned not null auto_increment,\
    datum timestamp,\
    inhalt varchar(10000),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "naechster_clubabends" "_id,Datum,inhalt,createdAt,updatedAt,__v,created_by,updated_by"

PRE_STMT="drop table if exists core_store;\
create table core_store (\
    id int(10) unsigned not null auto_increment,\
    key_ varchar(100),\
    environment varchar(100),\
    tag varchar(100),\
    value varchar(10000),\
    type varchar(20),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "core_store" "_id,key_,environment,tag,value,type"

PRE_STMT="drop table if exists clubabende;\
create table clubabende (\
    id int(10) unsigned not null auto_increment,\
    titel varchar(255) not null,\
    datum date not null,\
    inhalt text not null,\
    beitragsbild varchar(100),\
    primary key (id)\
) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;"
pull_collection "$PRE_STMT" "clubabende" "_id,titel,datum,inhalt,createdAt,updatedAt,__v,beitragsbild,created_by,updatedBy"


# wird nicht benötigt
##pull_collection "strapi_permission" "_id,action,subject,conditions,fields,createdAt,updatedAt,__v,role"
##pull_collection "strapi_role" "_id,name,code,description,createdAt,updatedAt,__v"
##pull_collection "strapi_webhooks" "_id,name,url,headers,events,enabled,createdAt,updatedAt,__v"

# wird nicht benötigt
##pull_collection users-permissions_permission --type=csv --fields "" $IMPORT_MONGO_DB_URI
##pull_collection users-permissions_role --type=csv --fields "" $IMPORT_MONGO_DB_URI
##pull_collection users-permissions_user --type=csv --fields "" $IMPORT_MONGO_DB_URI



#mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
#    alter table vorstand add avatar varchar(24);
#EOF
#pull_collection "vorstand" "_id,ord,name,Rolle,createdAt,updatedAt,__v,avatar,created_by,updated_by,emailadresse"




