var con = require('./../config/config');
passwordHash = require('password-hash');

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

module.exports.authenticate=function(req,res){
    let username=req.body.username;
    let loginPassword=req.body.password;




    con.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
        if (results[0] && passwordHash.verify(loginPassword, results[0].password)) {

            res.redirect('/home');

            localStorage.setItem("user", username);
            console.log("LocalStorage username = " + localStorage.getItem("user"));
        } else {
            req.session.error = 'Incorrect username or password';
            res.render('pages/login', { error: req.session.error });
        }
    });

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);
};