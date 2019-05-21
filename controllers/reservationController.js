var con = require('./../config/config');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = LocalStorage('./scratch');

module.exports.insertTime = function (req, res) {

    let date = req.body.a;
    let from = req.body.jedi;
    let till = req.body.java;



    let arraydatum = [];
    let arrayfrom = [];
    let arraytill = [];
    // '%d/%m/%Y'

    con.query("SELECT *, DATE_FORMAT(datum, '%Y/%m/%d') AS nicedate FROM resTime", function (error, results, rows) {
        if (error) throw error;
        if (results.length > 0) {

            let resultArray = Object.values(JSON.parse(JSON.stringify(results)));
            resultArray.forEach(function (getString) {

                arraydatum.push(getString.nicedate);
                arrayfrom.push(getString.from_time);
                arraytill.push(getString.to_time);

                // console.log(getString.nicedate);


            });

        }
    });

    


    //----------------------------TIJD PRIKKER--------------------------------------


    let person = localStorage.getItem("user");

    let resTimeUpdate = "INSERT INTO resTime (email,datum , from_time , to_time) VALUES (?,?,?,?)";
    // let resTimeUpdate = "UPDATE resTime SET datum = ?, from_time = ?, to_time = ? WHERE email = ?";
    con.query(resTimeUpdate, [ person, date, from, till], function (error) {
        if (error) throw error;
        console.log("1 record inserted");
        console.log("Reservation controller date: " + date);
        console.log("Reservation from time: " + from);
        console.log("Reservation till time: " + till);
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
