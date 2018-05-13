var express = require('express');
var path = require('path');
// // var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var config = require('config')

var partials = require('express-partials');
// var session = require('express-session')
// var MongoStore = require('connect-mongo')(session);

// var passport = require('passport')
// var passportLocalStrategy = require('passport-local').Strategy;

//mongo
// var mongo = require('mongodb');
// var monk = require('monk');
// // var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ksphere2';
// var mongoUri = config.get('mongo.uri');
// var db = monk(mongoUri);

var index = require('./routes/index');
// var users = require('./routes/users');
// var admin = require('./routes/admin');
// var google = require('./routes/google');
//var admin = require('./routes/admin');

// var cors = require('cors')

var app = express();

// app.use(session({
// 	secret: config.get('app.cookie_secret'),
// 	resave: false,
// 	saveUninitialized: false,
// 	store: new MongoStore({
// 		url: mongoUri,
// 		autoReconnect: true
// 	})
// }));

// enforce ssl on production
// if (app.get('env') === 'production') {
// 	app.get('*',function(req,res,next){
// 	  if(req.headers['x-forwarded-proto']!='https')
// 	    res.redirect('https://' + config.get('app.domain') + req.url)
// 	  else
// 	    next() /* Continue to other routes if we're not redirecting */
// 	})
// }

app.use(partials());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json({
// 	verify: function(req, res, buf, encoding) {
// 		req.rawBody = buf.toString(encoding);
// 	}
// }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'build/contracts')));
app.use(express.static(path.join(__dirname, 'build')));


// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });


// app.use(cors());
// app.options('*', cors()) // include before other routes

// PASSPORT START

// app.use(passport.initialize());
// app.use(passport.session());
//
// var usersModel = require('./models/users');
// var passworder = require('./app_modules/passworder');
// passport.use(new passportLocalStrategy(
// 	{
//     usernameField: 'email',
//     passwordField: 'password'
//   },
//   function(username, password, done) {
//     usersModel.getByEmail(db,username, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!passworder.verify(password,user.password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
// app.post('/login',
// 	passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: false })
//
// );
//
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
//
// // maintain the old req.session.user format...
// app.use(function(req,res,next){
// 	if(req.user && !req.session.user){
// 		req.session.user = req.user;
// 	}
//   next();
// });
// // PASSPORT END
//
//
//
app.use('/', index);
// app.use('/', users);
// app.use('/admin', admin);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
console.log('env is: ' + app.get('env'));
