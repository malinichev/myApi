const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');

// const passport = require('passport');
// const LocalStrategy = require('passport-local');
const session = require('express-session');

const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'myApi';
const startport = 2222;

const isProduction = process.env.NODE_ENV === 'production';
// console.log(isProduction)
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;




const seedDB = require('./seedDB.js');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(require('morgan')('dev'));

app.use(session({ 
                secret: 'passport-serg', 
                cookie: { maxAge: 60000 }, 
                resave: false, 
                saveUninitialized: false 
}));

if(!isProduction) {
    app.use(errorHandler());
  }



mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })   // указываем имя БД
      .then(() => console.log('campDB Connected!'))
      .catch(err => {
      console.log(`DB Connection Error: ${err.message}`);
      });
mongoose.set('debug', true);  

require('./model/user');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if(!isProduction) {
    app.use((err, req, res) => {
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      });
    });
  }

app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });

seedDB();

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));
  //чтоб пользоватся put
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
    
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
//       next();
//   });


// app.get('/logout', (req,res)=>{
//     req.logout();
//     res.status(200).json({'sucsses!!':'User logOut'});
// });

app.listen(startport,process.env.localhost, ()=>{
    console.log(`serv is start in ${startport} ...`);
})