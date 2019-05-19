var con = require('./../config/config');
passwordHash = require('password-hash');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


// Authenticates if credentials are known in DB and correct
module.exports.authenticate=function(req,res){
    let username=req.body.username;
    let enteredPassword=req.body.password;

    con.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
        if (results[0] && passwordHash.verify(enteredPassword, results[0].password)) {
            localStorage.setItem("user", username);

            req.flash("Welcome",username);
            return res.render('pages/home');

            // res.redirect('/home');

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