// require(['dbcondig'],function(mysql) {
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


        var test = {testPrimary: 'jquerytest6', test1: 'jquerytest6', test2: 'jquerytest6', test3: 'jquerytest6'};


        con.query('INSERT INTO Test SET ?', test, (err, res) => {
            if (err) throw err;

            // console.log('Last insert ID:', res.insertId);
        });
        con.end();
    });
// });