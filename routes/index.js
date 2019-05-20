'use strict';
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = LocalStorage('./scratch');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index',{
            verwijder: "hidden",
            parkeren: "hidden",
            set: "",
            login: "login",
            regist: "register",
            myRes: "",
            profile: "",
            loguit: ""
        });
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });

    app.get('/login', function(req, res) {
        res.render('pages/login');
        });

    app.get('/register', function(req, res) {
        res.render('pages/register');
    });

    app.get('/home', function(req, res) {
        res.render('pages/home');
    });
    app.get('/res', function(req, res) {
        res.render('pages/res',{
            verwijder: "",
            parkeren: "",
            set: "hidden",
            login: "",
            regist: "",
            myRes: "my reservation",
            profile: "profile",
            loguit: "log uit"
        });
    });

    app.get('/template', function(req, res) {
        res.render('pages/template');
    });
    app.get('/day', function(req, res) {
        res.render('pages/day');
    });
    app.get('/time', function(req, res) {
        res.render('pages/time',{
            verwijder: "",
            parkeren: "",
            set: "hidden",
            login: "",
            regist: "",
            myRes: "my reservation",
            profile: "profile",
            loguit: "log uit"
        });
    });


    app.get('/profile', function(req, res) {
        res.render('pages/profile',{
            verwijder: "",
            parkeren: "",
            set: "hidden",
            login: "",
            regist: "",
            myRes: "my reservation",
            profile: "profile",
            loguit: "log uit"
        });
    });



    app.get('/myRes', function(req, res) {

        res.render('pages/myRes',{
            name:"asss",
            datum: "empty",
            fromTime:"Click the button below to ",
            toTime:"show your reservations",
            verwijder: "",
            parkeren: "",
            set: "hidden",
            login: "",
            regist: "",
            myRes: "my reservation",
            profile: "profile",
            loguit: "log uit"
        });


    });

    app.get('/verwijder', function (req,res) {
        res.render('pages/verwijder')
    })

};
