var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )

require('dotenv').config();
const connectionString = process.env.MONGO_CON
console.log(connectionString);
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


  var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

var tickets = require('./models/tickets');




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ticketsRouter = require('./routes/tickets');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tickets', ticketsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter);


var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  await tickets.deleteMany();

  let t1 = new tickets({
    eventName: 'ABC Concert',
    venue: 'Amb',
    price: 3000,
    location: 'Omaha',
    ticketType: 'VIP'
  });

  t1.save().then(doc => {
    console.log("First ticket saved");
  }).catch(err => {
    console.error(err);
  });

  let t2 = new tickets({
    eventName: 'dancing',
    venue: 'bnb',
    price: 4000,
    location: 'nebraska',
    ticketType: 'VIP'
  });

  t2.save().then(doc => {
    console.log("Second ticket saved");
  }).catch(err => {
    console.error(err);
  });

  let t3 = new tickets({
    eventName: 'Singing',
    venue: 'hayat',
    price: 9000,
    location: 'kansas',
    ticketType: 'Standard'
  });



  t3.save().then(doc => {
    console.log("Third ticket saved");
  }).catch(err => {
    console.error(err);
  });

}

let reseed = true;
if (reseed) {
  recreateDB();
}




module.exports = app;
