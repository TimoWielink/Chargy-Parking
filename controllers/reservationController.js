// var Cryptr = require('cryptr');
var express = require("express");
var con = require('./../config/config');
// cryptr = new Cryptr('myTotalySecretKey');

module.exports.insertTime = function (req, res) {

    // var arrayChecked = new Array(aantalUren);

    let a = req.body.a;
    let b = req.body.b;
    let c = req.body.c;
    let d = req.body.d;
    let e = req.body.e;
    let f = req.body.fa;
    let g = req.body.g;
    let h = req.body.p;
    let i = req.body.i;
    let j = req.body.k;
    let k = req.body.l;
    let l = req.body.m;
    let m = req.body.qq;
    let n = req.body.y;
    let o = req.body.fab;
    let p = req.body.leaf;
    let q = req.body.backdrop;
    let r = req.body.s;
    let s = req.body.cache;
    let t = req.body.calendar;
    let u = req.body.calculator;
    let v = req.body.fadeIn;
    let w = req.body.vaadin;
    let x = req.body.valHooks;

    let from = req.body.fadeIn;
    let to = req.body.fadeOut;



    // let insert = "UPDATE resTime SET t01 = ?, t02 = ?,t03 = ?,t04 = ?, t05 = ?, t06 = ?, t07 = ?, t08 = ?, t09 = ?, t10 = ?, t11 = ?, t12 = ?, t13 = ?, t14 = ?, t15 = ?, t16 = ?, t17 = ?, t18 = ?, t19 = ?, t20 = ?, t21 = ?, t22 = ?, t23 = ?, t00 = ? WHERE email = 'oz@oz.nl'";
    // con.query(insert, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x], function (error) {



    let insert = "UPDATE resTime SET from_time = ?, to_time = ? WHERE email = 'oz@oz.nl'";
    con.query(insert, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x], function (error) {

        if (error) throw error;
        console.log("1 record inserted");

    });

    setInterval(function () {
        con.query('SELECT 1');
    }, 5000);

    res.redirect('/home');

};