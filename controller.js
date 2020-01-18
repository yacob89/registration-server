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
    var birth_date = new Date(req.body.birth_date);
    var gender = req.body.gender;
    var email = req.body.email;

    connection.query('INSERT INTO mitrais.registration (phone_number, first_name, last_name, birth_date, gender, email) VALUES (?, ?, ?, ?, ?, ?)',
    [ phone_number ,first_name, last_name, birth_date, gender, email ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("success", res)
        }
    });
};

exports.emails = function(req, res) {
    connection.query('SELECT email FROM mitrais.registration', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.mobiles = function(req, res) {
    connection.query('SELECT phone_number FROM mitrais.registration', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Node JS RESTful mitrais test", res)
};