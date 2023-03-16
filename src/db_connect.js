
const Express = require("express");
const mysql = require("mysql");

const db = mysql.createconnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "emaster"
  });
  
  App.listen(3001, () => {
    console.log("running on port 3001");
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });