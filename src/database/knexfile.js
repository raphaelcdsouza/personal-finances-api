module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'personal-finances',
      user: 'personal-finances',
      password: 'postgres',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },
};
