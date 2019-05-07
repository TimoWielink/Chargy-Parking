var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');

var con = require('./../config/config');
module.exports.authenticate=function(req,res){
    var username=req.body.username;
    var password=req.body.password;


    con.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{

            if(results.length >0){
                // decryptedString = cryptr.decrypt(results[0].password);
                if(password==password){
                    res.json({
                        status:true,
                    },res.redirect('/home')
                )
                }else{
                    res.json({
                        status:false,
                        message:"Username and password does not match"
                    });
                }

            }
            else{
                res.json({
                    status:false,
                    message:"Username does not exits"
                });
            }
        }
    });
// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

}
