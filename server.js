'use strict';

// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 1001;
// var db = require('./public/Javascript/dbconfig')
var app = express();
var bodyParser = require('body-parser');

// ================================================================
// Database verbinden
// ================================================================
var mysql = require('mysql');
var con = mysql.createConnection({
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

    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var licensePlate = req.body.licensePlate;
    var htmlData = "hello " + username;

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


