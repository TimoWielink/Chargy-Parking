let con = require('./../config/config');
passwordHash = require('password-hash');
let express = require('express');
let app = express();


let LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


let user;
// Authenticates if credentials are known in DB and correct
module.exports.getRes = function (req, res) {
    // let username = localStorage.getItem("user");
    let username = localStorage.getItem("user");
    console.log(username);


    // con.query('SELECT from_time FROM resTime WHERE email = ?', [username], function (error, results, rows)
    // con.query("SELECT json_object('from_time', from_time, 'to_time)', to_time) FROM resTime WHERE email = 'ozcan23'", function(error, results, rows)
    // con.query("SELECT from_time AS 'From:', to_time AS 'Till:' FROM resTime WHERE email ='oz@oz.nl'", function(error, results, rows)


    con.query("SELECT * FROM resTime WHERE email = ?", [username], function (error, results, rows) {

        {
            if (error) throw error;
            if (results.length > 0) {

                var resultArray = Object.values(JSON.parse(JSON.stringify(results)));
                resultArray.forEach(function(getString) {
                    console.log(getString);
                    console.log(getString.from_time);
                    console.log(getString.to_time);

                    res.render('pages/myRes', {
                        name: "",
                        fromTime: getString.from_time,
                        toTime: getString.to_time
                    })
                });

            } else {
                results = null;
                console.log("error: maybe null")
            }
        }




        // give EJS file the data

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
        setInterval(function () {
            con.query('SELECT 1');
        }, 5000);
    });
};
