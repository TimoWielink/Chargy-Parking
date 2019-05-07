'use strict';

// ================================================================
// get all the tools we need
// ================================================================
let express = require('express');
let routes = require('./routes/index.js');
let port = process.env.PORT || 1001;
// let con = require('./config/config');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');


var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ================================================================
// setup routes
// ================================================================
routes(app);

app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);


// ================================================================
// start our server
// ================================================================
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});
