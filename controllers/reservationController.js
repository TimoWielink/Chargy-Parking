var Cryptr = require('cryptr');
var express = require("express");
var con = require('./../config/config');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.insertTime = function (req, res) {

    let begin = req.body.begin;
    let eind = req.body.eind;


    let statement = "INSERT INTO `time` (begin_time, end_time) VALUES (?, ?)";
    con.query(statement, [begin, eind], function (error, results, fields) {

        if (error) throw error;
        console.log("1 record inserted");

    });

    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

    res.redirect('/home');
};