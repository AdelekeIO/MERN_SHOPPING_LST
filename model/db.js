var mysql = require('mysql'); 
const config = require('config');



// const host = require('../config/key').host;


con = mysql.createConnection({
    host:  config.get('host'),
    user:  config.get('user'),
    password:  config.get('password'),
    database:  config.get('database')
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
