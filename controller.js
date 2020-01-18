'use strict';

var response = require('./res');
var connection = require('./connection');

exports.users = function(req, res) {
    connection.query('SELECT * FROM mitrais.registration', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var phone_number = req.body.phone_number;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var gender = req.body.gender;
    var email = req.body.email;

    connection.query('INSERT INTO mitrais.registration (phone_number, first_name, last_name, birth_date, gender, email) VALUES (?, ?, ?, NOW(), ?, ?)',
    [ phone_number ,first_name, last_name, gender, email ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};