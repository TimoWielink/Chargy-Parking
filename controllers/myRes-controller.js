let con = require('./../config/config');
passwordHash = require('password-hash');
let express = require('express');
let app = express();


let LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


let user;
// Authenticates if credentials are known in DB and correct
module.exports.getRes = function (req, res) {
    let username = localStorage.getItem("user");
    console.log(username);

    con.query("SELECT * FROM resTime WHERE email = ?", [username], function (error, results, rows) {
            if (error) throw error;
            if (results.length > 0) {

                let resultArray = Object.values(JSON.parse(JSON.stringify(results)));
                resultArray.forEach(function(getString) {
                    console.log(getString);
                    console.log(getString.from_time);
                    console.log(getString.to_time);

                    res.render('pages/myRes', {
                        name: username,
                        fromTime: getString.from_time,
                        toTime: getString.to_time
                    })
                });

            } else {
                let nullFromTime = "No reservation";
                let nullToTime = "scheduled yet";
                results = null;
                console.log("error: maybe null");
                res.render('pages/myRes',{
                    name: username,
                    fromTime: nullFromTime,
                    toTime: nullToTime
                })
            }
        // give EJS file the data

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
        setInterval(function () {
            con.query('SELECT 1');
        }, 5000);
    });
};
