var mysql = require('mysql');
var con = mysql.createConnection({
    host: '185.224.138.70',
    database: 'u844582952_pad',
    user: 'u844582952_pad19',
    password: 'pad2019',
});
con.connect((err) => {
    if (err) throw err;
    console.log('Succes!')
});