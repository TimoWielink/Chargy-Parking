'use strict';

// ================================================================
// get all the tools we need
// ================================================================
let express = require('express');
let routes = require('./routes/index.js');
let port = process.env.PORT || 1001;
let app = express();
let flash = require('express-flash');


let bodyParser = require('body-parser');
let session = require('express-session');

let LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');


let authenticateController=require('./controllers/authenticate-controller');
let registerController=require('./controllers/register-controller');
let reservationController=require ('./controllers/reservationController');
let myResController=require('./controllers/myRes-controller');
let verwijderAccController=require('./controllers/verwijderAccController');


// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());


// ================================================================
// Session stuff
// ================================================================
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// ================================================================
// setup routes
// ================================================================
routes(app);

app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);
app.post('/res', reservationController.insertTime);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.post('/myRes',  myResController.getRes);
app.post('/verwijder', verwijderAccController.delete);




// ================================================================
// start our server
// ================================================================
app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});


