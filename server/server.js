// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

// ------ Dependencies
const express = require("express");
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database
const routes = require("./routes");
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;

// ------ Define middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  }));

// ------ Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ------ Serve static assests
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// // If its production environment!
// if (process.env.NODE_ENV === 'production') {
// 	const path = require('path');
// 	// console.log('YOU ARE IN THE PRODUCTION ENV');
// 	app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
// 	app.get('/', (req, res) => {
// 		res.sendFile(path.join(__dirname, '../client/build/'))
// 	});
// }

// Add routes, both API and view
app.use(routes);

// Error handler
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// ------ Connect to Database and start server
app.listen(PORT, function() {
    console.log(`------ App running on port ${PORT} ------`);
});