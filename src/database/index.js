import Database from './database';
import config from './knexfile';

const db = new Database(config.development).connect();

export default db;
