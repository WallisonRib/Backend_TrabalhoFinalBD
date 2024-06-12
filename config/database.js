const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST ,
  user: process.env.USER,
  password: process.env.PASSWORD ,
  database: process.env.DATABASE
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
