const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'recipebook'
});

const execute = async () => {
  try {
    await client.connect();
    console.log('Connected successfully.');
    const results = await client.query('SELECT * FROM recipes');
    console.table(results.rows);
  } catch (e) {
    console.log(`Error: ${e}`);
  } finally {
    await client.end();
    console.log('Client disconnected successfully');
  }
};

execute();
