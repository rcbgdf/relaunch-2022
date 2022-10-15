# Strapi application

A quick description of your strapi application

https://mailing.openssl.users.narkive.com/2JPbdw4z/conf-load-bio-missing-equal-sign

NODE_ENV=production npm run build --production

docker build --build-arg NODE_ENV=production -t tilothiele/rcb_backend:latest .
docker push tilothiele/rcb_backend:latest


trigger:

POST https://api.github.com/repos/rcbgdf/relaunch-2022/dispatches

Accept: application/vnd.github+json
Authorization: token <apikey>
Content-Type: application/json

body:
{"event_type": "webhook"}