var con = require('./../config/config');


module.exports.delete = function (req,res) {

    let username=req.body.username;
    let enteredPassword=req.body.password;

    let verwijderUser = "DELETE FROM users WHERE username = ?";
    let verwijderRes = "DELETE FROM resTime WHERE email = ?";

    con.query(verwijderUser, [username], function (result , error) {
        console.log(result)
    });


    con.query(verwijderRes, [username], function (error , result) {
        if (error) throw error;
        console.log(result);
        res.redirect('/');
    });




// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

};