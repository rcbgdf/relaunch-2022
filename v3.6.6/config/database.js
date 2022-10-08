module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        database:  env('DATABASE_NAME', 'rcb_relaunch_2020'),
        username: env('DATABASE_USER', 'strapi'),
        password: env('DATABASE_PASSWD', 'strapi'),
        port: env('DATABASE_PORT', 3306),
        host: env('DATABASE_HOST', 'localhost'),
      },
      options: {
      },
    },
  },
});
