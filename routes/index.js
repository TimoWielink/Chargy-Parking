'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
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
        res.render('pages/res');
    });

    app.get('/template', function(req, res) {
        res.render('pages/template');
    });
    app.get('/day', function(req, res) {
        res.render('pages/day');
    });
};
