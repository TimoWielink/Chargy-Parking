'use strict';

// ================================================================
// get all the tools we need
// ================================================================
let express = require('express');
let routes = require('./routes/index.js');
let port = process.env.PORT || 1001;
// var db = require('./public/Javascript/dbconfig')
let app = express();
let bodyParser = require('body-parser');

// ================================================================
// Database verbinden
// ================================================================
let mysql = require('mysql');
let con = mysql.createConnection({
    host: '185.224.138.70',
    database: 'u844582952_pad',
    user: 'u844582952_pad19',
    password: 'pad2019',
});


// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});

app.post('/register', function (req, res) {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let licensePlate = req.body.licensePlate;
    let htmlData = "hello " + username;

    let statement = "INSERT INTO `users` (username, password, email, licensePlate) VALUES (?, ?, ?, ?)";
    con.query(statement, [username, password, email, licensePlate], function (err, result) {

        if (err) throw err;
        console.log("1 record inserted");

        setInterval(function () {
            con.query('SELECT 1');
        }, 5000);
    });

    res.send(htmlData);
});

app.post('/login', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    con.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {

        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            // console.log('The solution is: ', results);
            if(results.length >0){
                if(results[0].password == password){
                    res.send({
                        "code":200,
                        "success":"login sucessfull"
                    });
                }
                else{
                    res.send({
                        "code":204,
                        "success":"Username and password combination does not match"
                    });
                }
            }
            else{
                res.send({
                    "code":204,
                    "success":"Username does not exits"
                });
            }
        }
        setInterval(function () {
            con.query('SELECT 1');
        }, 5000);

    });
});

// app.post('/login', function (req, res) {
//
//     let username = req.body.username;
//     let password = req.body.password;
//     let htmlData = "Logged in as: " + username;
//
//     let loginQuery = `select * from users where password = '${password}' and username = '${username}';`;
//     console.log(loginQuery);
//     con.query(loginQuery)
//
//     if (data.length === 1) {
//                 session.clear();
//                 session.set("user", data[0]);
//                 window.location = "https://www.google.com";
//             }
//             if (data.lenth === 0) {
//                 res.send("Wachtwoord of gebruikersnaam komt niet overeen")
//             }
//         })
//     res.send(htmlData)
// });