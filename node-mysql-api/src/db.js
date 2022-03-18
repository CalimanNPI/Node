const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "company",
  //multipleStatements: false,
});

connection.connect((err) => {
  if (err) {
    console.log("error in", err);
    return;
  } else {
    console.log("db is connected");
  }
});

module.exports = connection;
