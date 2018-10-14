var mysql = require('mysql');

var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"codelabs"
});


con.connect(function (error) {
    if (error) throw error;
});

module.exports= con;