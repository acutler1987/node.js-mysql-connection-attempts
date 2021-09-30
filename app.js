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
const person = "jack@yahoo.com";

var q = `INSERT INTO join_us.users (email)
  VALUES ('${person}');`;
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();
