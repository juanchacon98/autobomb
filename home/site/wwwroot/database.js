const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'autobombapp.mysql.database.azure.com',
  user: 'autobomb',
  password: '{Ricardo07=}',
  database: '{agua}',
  port: 3306,
  ssl: { ca: fs.readFileSync('{certs/DigiCertGlobalRootCA.crt.pem}') },
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

const pool = connection.promise();

module.exports = {
  connection: connection,
  poolPromise: pool,
};
