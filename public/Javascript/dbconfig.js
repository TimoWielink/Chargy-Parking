var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '185.224.138.70',
    database: 'u844582952_pad',
    user: 'u844582952_pad19',
    password: 'pad2019',
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Succes!')
});

// // Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
// setInterval(function () {
//     connection.query('SELECT 1');
// }, 5000);

module.exports = connection;

// const mysql = require('mysql');
//
// var connection;
//
// module.exports = {
//
//     dbConnection: function () {
//
//         connection = mysql.createConnection({
//     host: '185.224.138.70',
//     database: 'u844582952_pad',
//     user: 'u844582952_pad19',
//     password: 'pad2019',
//         });
//         connection.connect();
//         return connection;
//     }
//
// };
