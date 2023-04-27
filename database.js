const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'autobombapp.mysql.database.azure.com',
  user: 'autobomb',
  password: '{Ricardo07=}',
  database: '{autobombapp}',
  port: 3306,
  ssl: { ca: fs.readFileSync('{ca-cert filename}') },
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

module.exports = connection;
