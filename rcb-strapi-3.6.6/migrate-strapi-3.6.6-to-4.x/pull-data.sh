#/bin/bash

# Siehe auch
# https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/data/mongo.html#prepare-the-migration-locally
#

. ./.env

set -x

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
EOF
}

import_mysql_table() {
    echo "import mysql table $1 - columns=$2"
CSV_FILE=`realpath $BASEDIR/$1.csv`
sudo mysql -uroot $MYSQL_DB_NAME <<EOF
-- truncate table $1;
drop table if exists $1;
LOAD DATA INFILE '$CSV_FILE'
INTO TABLE $1
FIELDS TERMINATED BY ','
ENCLOSED BY '"' LINES
TERMINATED BY '\n'
IGNORE 1 LINES
($2);
EOF
}

pull_collection() {
    echo "collection=$1 fields=$2"
    MYSQL_COLUMNS=`echo "$2" | sed -r 's/_id/mongo_id/' | sed -r 's/createdAt/created_at/' | sed -r 's/createdBy/mongo_created_by/' | sed -r 's/updatedAt/updated_at/' | sed -r 's/updated_by/mongo_updated_by/' | sed -r 's/updatedBy/mongo_updated_by/' | sed -r 's/created_by/mongo_created_by/'`
    echo "$MYSQL_COLUMNS"
    mongoexport -c "$1" --type=csv --fields "$2" $IMPORT_MONGO_DB_URI | sed -r 's/ObjectId.([^\)]+)./\1/g' | sed -r 's/createdAt/created_at/' | sed -r 's/createdBy/mongo_created_by/' | sed -r 's/updatedAt/updated_at/' | sed -r 's/updatedBy/mongo_updated_by/' | sed -r 's/T[0-9]{2}\:[0-9]{2}\:[0-9]{2}\.[0-9]{1,3}Z//g'> $BASEDIR/$1.csv
    make_id_column $1
    import_mysql_table $1 "$MYSQL_COLUMNS"
}

mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
    alter table clubabende add beitragsbild varchar(24);
EOF
pull_collection "clubabende" "_id,titel,datum,inhalt,createdAt,updatedAt,__v,beitragsbild,created_by,updatedBy"

#pull_collection "core_store" "_id,key,environment,tag,value,type,createdAt,updatedAt,__v"
#pull_collection "naechster_clubabends" "_id,Datum,inhalt,createdAt,updatedAt,__v,created_by,updated_by"
##pull_collection singletype1s --type=csv --fields "" $IMPORT_MONGO_DB_URI
#pull_collection "strapi_administrator" "_id,isActive,blocked,roles,username,registrationToken,firstname,lastname,email,password,createdAt,updatedAt,__v,resetPasswordToken,preferedLanguage"
#pull_collection "strapi_permission" "_id,action,subject,conditions,fields,createdAt,updatedAt,__v,role"
#pull_collection "strapi_role" "_id,name,code,description,createdAt,updatedAt,__v"
#pull_collection "strapi_webhooks" "_id,name,url,headers,events,enabled,createdAt,updatedAt,__v"
#pull_collection "termines" "_id,inhalt,createdAt,updatedAt,__v,created_by,updated_by"

#pull_collection "upload_file" "_id,name,alternativeText,caption,hash,ext,mime,size,width,height,url,formats,provider,createdAt,updatedAt,__v,created_by,updated_by,provider_metadata"

##pull_collection users-permissions_permission --type=csv --fields "" $IMPORT_MONGO_DB_URI
##pull_collection users-permissions_role --type=csv --fields "" $IMPORT_MONGO_DB_URI
##pull_collection users-permissions_user --type=csv --fields "" $IMPORT_MONGO_DB_URI


#mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
#    alter table vorstand add avatar varchar(24);
#EOF
#pull_collection "vorstand" "_id,ord,name,Rolle,createdAt,updatedAt,__v,avatar,created_by,updated_by,emailadresse"




