var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var registrationRouter = require('./routes/registration_route');
var loginRouter = require('./routes/login_route');
var shopRouter = require('./routes/shop_route');
var productRouter = require('./routes/product_route');
var cartRouter = require('./routes/cart_route');
var checkoutRouter = require('./routes/checkout_route');
var footerRouter = require('./routes/footer_route');
var profileRouter = require('./routes/profile_route');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const {
  SESS_NAME = 'sid'

} = process.env


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  name: SESS_NAME,
  cookie:
  { 
    maxAge: 60000 
    
    

  }
}))



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', shopRouter);
app.use('/', productRouter);
app.use('/', cartRouter);
app.use('/', checkoutRouter);
app.use('/', footerRouter);
app.use('/', profileRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//create server

app.listen(3000, () =>{
  console.log('serveur demarrer');
});
module.exports = app;

app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
