#/bin/bash

# Siehe auch
# https://docs.strapi.io/developer-docs/latest/update-migration-guides/migration-guides/v4/data/mongo.html#prepare-the-migration-locally
#

. ./.env

set -x

BASEDIR="./dump"
MYSQL_DB_NAME="rcb_relaunch_2022"
mkdir -p $BASEDIR

#sudo mysqladmin create -uroot $MYSQL_DB_NAME
sudo mysql -uroot <<EOF
grant all privileges on $MYSQL_DB_NAME.* to 'strapi'@'localhost' identified by 'strapi';
flush privileges;
EOF

migrate_data() {
mysql -ustrapi -pstrapi $MYSQL_DB_NAME <<EOF
truncate table upload_file_morph;
insert into upload_file_morph (upload_file_id,related_id,related_type,field)
select f.id,c.id,'clubabende','beitragsbild' from upload_file f, clubabende c where c.beitragsbild=f._id;
EOF
}


migrate_data



