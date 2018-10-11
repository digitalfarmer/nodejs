'use strick';

var resposne =require('./res');
var connection = require('./conn');

exports.users= function (req,res) {
    connection.query('SELECT*FROM person', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            resposne.ok(rows,res)            
        }
    });
};

exports.index =function (req,res) {
    resposne.ok('Welcome To Ades RestAPI made with NodeJs',res) 
};

exports.findUsers = function name(req,res) {
  
    var user_id= req.params.user_id;
    connection.query('SELECT*FROM person where id=?',
    [user_id],
    function (error) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows,res)
        } 
    });
};

exports.createUsers = function (req,res) {
  
    var first_name= req.body.first_name;
    var last_name= req.body.last_name;

    connection.query('INSERT INTO peson(first_name,last_name) value (?,?)',
    [first_name,last_name],
    function (error,rows,fields) {
        if (error) {
            console.log(error)
        } else {
            resposne.ok("Register suksesfully", res)
        }
        
    });
};


exports.updateUsers= function (req,res) {
    
        var user_id=req.body.user_id;
        var first_name=req.body.first_name;
        var last_name= req.body.last_name;

        connection.query('UPDATE person SET first_name=?,last_name =? WHERE id=?',
        [first_name,last_name,user_id],
        function (error,rows,fields) {
            if (error) {
                Console.log(error)
            } else {
                response.ok("Update user Berhasil",res)
            }
        });
};

exports.deleteUser = function name(params) {
    
    var user_id= req.body.user_id;
    connection.query('',[],
    function (error,rows,fields) {
         if (error) {
             console.log(error)
         } else {
             response.ok("Berhasil Hapus user!", res)
         }   
    });
};