var con = require('./../config/config');
passwordHash = require('password-hash');

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


// Authenticates if credentials are known in DB and correct
module.exports.getRes=function(req,res){
    let username = localStorage.getItem("user");
    console.log(username);

    con.query('SELECT * FROM resTime WHERE email = ?',[username], function (error, results, fields) {
        if (results[0]) {

            console.log(results)
        }else {
            console.log("error")
        }
    });

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);
};