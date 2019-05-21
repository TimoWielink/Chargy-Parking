var con = require('./../config/config');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = LocalStorage('./scratch');

module.exports.insertTime = function (req, res) {




    //
    // console.log("GELUKT");
    //
    // let user = localStorage.getItem("user");
    //
    // let getusers = "SELECT * FROM resTime";
    //
    // con.query(getusers,[user], function (error, results, fields) {
    //
    //     let resultArray = Object.values(JSON.parse(JSON.stringify(results)));
    //
    //     resultArray.forEach(function (getString) {
    //
    //         // console.log(getString.from_time);
    //         // console.log(getString.to_time);
    //
    //
    //     });
    //
    //
    //
    //
    //
    //
    //
    //     console.log("---------------------------------")
    //
    //
    // });




    //----------------------------TIJD PRIKKER--------------------------------------
    let date = req.body.a;
    let from = req.body.jedi;
    let till = req.body.java;

    let person = localStorage.getItem("user");

    let resTimeUpdate = "INSERT INTO resTime (email,datum , from_time , to_time) VALUES (?,?,?,?)";
    // let resTimeUpdate = "UPDATE resTime SET datum = ?, from_time = ?, to_time = ? WHERE email = ?";
    con.query(resTimeUpdate, [ person, date, from, till], function (error) {
        if (error) throw error;
        console.log("1 record inserted");
        console.log("Reservation controller date: " + date);
        console.log("Reservation from time: " + from);
        console.log("Reservation till time: " + till);
        res.redirect('/time')
    });




    // Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);



    //---------------------------------------------------------------------------------------------------------------------
    // const accountSid = 'ACf77fa76b5fd41dd528fbe269ca785ba4';
    // const authToken = 'f72a77cdb69ba36750825e527fa440e2';
    // const client = require('twilio')(accountSid, authToken);
    //
    // client.messages
    //     .create({
    //         body: 'Er is zojuist een reservering gemaakt op u naam. Open de app om de reservering te bekijken',
    //         from: '+31 97014201853',
    //         to: '+31648444810'
    //     })
    //     .then(message => console.log(message.sid));

};
