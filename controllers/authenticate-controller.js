var con = require('./../config/config');
passwordHash = require('password-hash');

module.exports.authenticate=function(req,res){
    let username=req.body.username;
    let loginPassword=req.body.password;


    con.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
        if (results[0] && passwordHash.verify(loginPassword, results[0].password)) {

            req.session.regenerate(function () {
                req.session.login = true;
                req.session.username = username;
                req.session.data = results[0];
                res.redirect('/home');
                console.log(req.session.username);


            });
        } else {
            req.session.error = 'Incorrect username or password';
            // res.redirect('pages/login');
            res.render('pages/login', { error: req.session.error });
            // delete res.session.error; // remove from further requests
        }
    });

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);
};