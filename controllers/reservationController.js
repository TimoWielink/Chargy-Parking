var con = require('./../config/config');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = LocalStorage('./scratch');

module.exports.insertTime = function (req, res) {

    let from = req.body.jedi;
    let till = req.body.java;
    let date = req.body.a;


    // let insert = "UPDATE resTime SET t01 = ?, t02 = ?,t03 = ?,t04 = ?, t05 = ?, t06 = ?, t07 = ?, t08 = ?, t09 = ?, t10 = ?, t11 = ?, t12 = ?, t13 = ?, t14 = ?, t15 = ?, t16 = ?, t17 = ?, t18 = ?, t19 = ?, t20 = ?, t21 = ?, t22 = ?, t23 = ?, t00 = ? WHERE email = 'oz@oz.nl'";
    // con.query(insert, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x], function (error) {


    let person = localStorage.getItem("user");
    // let datum = localStorage.getItem("date");




    let resTimeUpdate = "UPDATE resTime SET datum = ?, from_time = ?, to_time = ? WHERE email = ?";
    con.query(resTimeUpdate, [date,from,till,person], function (error) {

        if (error) throw error;
        console.log("1 record inserted");
        res.redirect('/home');
        console.log("Reservation controller date: " + date);

    });



    // Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);



    //---------------------------------------------------------------------------------------------------------------------
    const accountSid = 'ACf77fa76b5fd41dd528fbe269ca785ba4';
    const authToken = 'f72a77cdb69ba36750825e527fa440e2';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Er is zojuist een reservering gemaakt op u naam. Open de app om de reservering te bekijken',
            from: '+31 97014201853',
            to: '+31648444810'
        })
        .then(message => console.log(message.sid));

};
