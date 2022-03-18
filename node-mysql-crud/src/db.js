const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  database: "nodecrudmysql",
  host: "localhost",
  user: "root",
  password: "123456",
});

connection.connect((err) => {
  if (err) {
    console.log("Error in \n: ", err);
  }
  console.log("connection successfully");
});

module.exports = connection;
