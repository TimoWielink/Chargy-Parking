let LocalStrategy = require("passport-local").Strategy;

let mysql = require('mysql');
let bcrypt = require('bcrypt-nodejs');
let dbconfig = require('./database');
let connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);
/*** LOGIN/REGISTER INITIALIZATION ***/
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.User_Id);
    });

    passport.deserializeUser(function (User_Id, done) {
        connection.query("SELECT *,DATE_FORMAT(BirthDate,'%d/%m/%Y') BirthDate, DATE_FORMAT(Registered,'%d/%m/%Y') Registered FROM User WHERE User_Id = ? ", [User_Id],
            function (err, rows) {
                done(err, rows[0]);
            });
    });

    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            function (req, email, password, done) {
                connection.query("SELECT *, DATE_FORMAT(BirthDate,'%d/%m/%Y') BirthDate, DATE_FORMAT(Registered,'%d/%m/%Y') Registered FROM User WHERE Email = ? ", [email],
                    function (err, rows) {
                        if (err)
                            return done(err);
                        if (rows.length) {
                            return done(null, false, req.flash('signupMessage', 'The email was already used.'));
                        } else {
                            var newUserMysql = {
                                email: email,
                                password: bcrypt.hashSync(password, null, null)
                            };

                            var insertQuery = "INSERT INTO User (Email, Password) values (?, ?)";

                            connection.query(insertQuery, [newUserMysql.email, newUserMysql.password],
                                function (err, rows) {
                                    newUserMysql.User_Id = rows.insertId;

                                    return done(null, newUserMysql);
                                });
                        }
                    });
            })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true
            },
            function (req, email, password, done) {
                connection.query("SELECT * FROM User WHERE Email = ? ", [email],
                    function (err, rows) {
                        if (err) {
                            return done(err);
                        }
                        if (!rows.length) {
                            return done(null, false, req.flash('loginMessage', 'The email or password is wrong.'));
                        }
                        if (!bcrypt.compareSync(password, rows[0].Password)) {
                            return done(null, false, req.flash('loginMessage', 'The email or password is wrong.'));
                        }

                        return done(null, rows[0]);
                    });
            })
    );
};