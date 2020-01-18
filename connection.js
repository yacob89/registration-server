var mysql = require('mysql');

var con = mysql.createConnection({
  host: "database-1.cfewdcbpyzxm.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "mitraistest",
  database: "mitrais"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;