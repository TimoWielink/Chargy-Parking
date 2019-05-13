var con = require('./../config/config');

var passwordHash = require('password-hash');



module.exports.register = function (req, res) {


    let username = req.body.username;
    // let password = req.body.password;
    let password = passwordHash.generate(req.body.password);
    let email = req.body.email;
    let licensePlate = req.body.licensePlate;

    let statement = "INSERT INTO `users` (username, password, email, licensePlate) VALUES (?, ?, ?, ?)";
    con.query(statement, [username, password, email, licensePlate], function (error, results, fields) {

        if (error) throw error;
        console.log("1 record inserted");

    });
// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

    res.redirect('/home');
};