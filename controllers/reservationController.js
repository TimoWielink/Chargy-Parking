var Cryptr = require('cryptr');
var express = require("express");
var con = require('./../config/config');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.insertTime = function (req, res) {

    // var arrayChecked = new Array(aantalUren);

    var b1 = req.body.b0;

    console.log(req.body.b0);


    // var insert = "UPDATE resTime SET t0100 = ?, t0200 = ?, t0300= ?, t0400 = ?, t0500 = ?, t0600 = ?";
    // con.query(insert, [arrayChecked[0],arrayChecked[1],arrayChecked[2],arrayChecked[3],arrayChecked[4]], function (error) {
    //

    var insert = "UPDATE resTime SET t0100 = ?";
    con.query(insert, [b1], function (error) {


        if (error) throw error;
        console.log("1 record inserted");

    });

    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

    res.redirect('/home');

};