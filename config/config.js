var mysql = require('mysql');
    con = mysql.createConnection({
    host: '185.224.138.70',
    database: 'u844582952_pad',
    user: 'u844582952_pad19',
    password: 'pad2019',
});
con.connect((err) => {
    if (err) throw err;
    console.log('Connected with database')
});

// Voert elke 5 sec een query uit zodat de connectie open blijft (niet idle gaat)
setInterval(function () {
    con.query('SELECT 1');
}, 5000);

module.exports = con;
