var mysql = require('mysql'); 

const host = require('../config/key').host;
const password = require('../config/key').password;
const user = require('../config/key').user;
const database = require('../config/key').database;


con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
  })
  

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  function select(table) {
    let sql=`SELECT * FROM ${table} ORDER BY id DESC`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    })
  }
  module.exports = con;
