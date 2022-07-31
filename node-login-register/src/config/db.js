const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: 'localhost',
  password:'123456',
  user:'root',
  database:'listusers',
});

connection.connect((err)=>{
  if(err){
    console.log('Error in connection:', err);
    return;
  }
  console.log('DB is connected');

})

module.exports = connection;
