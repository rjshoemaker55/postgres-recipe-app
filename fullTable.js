const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'recipebook'
});

client
  .connect()
  .then(() => console.log('Connected to Postgres database.'))
  .then(() => client.query(`SELECT * from recipes`))
  .then(res => console.log(console.table(res.rows)))
  .catch(e => console.log(e))
  .finally(() => client.end());
