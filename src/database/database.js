import knex from 'knex';

class Database {
  constructor(config) {
    this.config = config;
  }

  connect() {
    return knex(this.config);
  }
}

export default Database;
