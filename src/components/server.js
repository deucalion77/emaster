const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'emaster'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});
