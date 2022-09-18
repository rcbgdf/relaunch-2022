module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        database: 'rcb_relaunch_2022',
        username: 'strapi',
        password: 'strapi',
        port: 3306,
        host: 'localhost',
      },
      options: {
      },
    },
  },
});
