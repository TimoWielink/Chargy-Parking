var db = require('./../../public/Javascript/dbconfig')

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