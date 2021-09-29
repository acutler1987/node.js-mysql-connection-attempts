"use strict";
const faker = require("faker");
const mysql = require("mysql");

// Connect to MYSQL...

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Paddys2021pub",
  database: "join_us",
});

// Run a MYSQL query...

var q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});
connection.end();
