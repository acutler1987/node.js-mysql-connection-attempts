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

// Setting up the data for insertion...
let peopleData = [];
for (let i = 0; i < 500; i++) {
  peopleData.push([faker.internet.email(), faker.date.past()]);
}
// console.log(peopleData);

// Run a MYSQL query...
var q = `INSERT INTO join_us.users (email, created_at) VALUES ?;`;
connection.query(q, [peopleData], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();
