module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        database:  env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USER', 'strapi'),
        password: env('DATABASE_PASSWD', 'strapi'),
        port: env('DATABASE_PORT', 3307),
        host: env('DATABASE_HOST', 'strapi'),
      },
      options: {
      },
    },
  },
});
