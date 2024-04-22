const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'postgres11!',
  port: 5433,
});

module.exports = pool;