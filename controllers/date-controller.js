var con = require('./../config/config');
passwordHash = require('password-hash');

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

module.exports.dateinput=function(req,res){

    let date1 = req.body.a;

    localStorage.setItem("date",date1);
    console.log(date1);


// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);
};