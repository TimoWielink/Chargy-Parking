var con = require('./../config/config');

var passwordHash = require('password-hash');


// Get data from the registration form and send it to database
module.exports.register = function (req, res) {


    let username = req.body.username;
    let password = passwordHash.generate(req.body.password);
    let email = req.body.email;
    let licensePlate = req.body.k;

    let userInsert = "INSERT INTO `users` (username, password, email, licensePlate) VALUES (?, ?, ?, ?)";
    con.query(userInsert, [username, password, email, licensePlate], function (error, results, fields) {
        if (error) throw error;
        console.log("1 record inserted");

    });

    ///--------------------------------INSERT INTO RESTIME---------------------------------------------------------

    let resTimeInsert = "INSERT INTO `resTime` (email) VALUES (?)";
    con.query(resTimeInsert, [username], function (error, results, fields) {

        if (error) throw error;
        console.log("1 record inserted");

    });

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

    res.redirect('/login');
};