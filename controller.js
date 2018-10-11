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
    resposne.ok('konek sukses dari node js Resfull side',res) 
};