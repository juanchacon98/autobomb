const mysql = require('mysql2');
const fs = require('fs');

const mysql = require('mysql2');
const connectionString = process.env.DB_CONNECTION_STRING;

const connection = mysql.createConnection(connectionString);

// Tu código para trabajar con la base de datos aquí


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

module.exports = connection;
module.exports = pool.promise();
