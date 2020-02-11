const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGO_USERNAME = 'serg';
const MONGO_PASSWORD = '31415926535Ss';
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'myApi';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })   // указываем имя БД
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })   // указываем имя БД
    .then(() => console.log('campDB Connected!'))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });

// mongoose.connect('mongodb://mongo/myApi',{ useNewUrlParser: true, useUnifiedTopology: true });
//export MODELS
const Category = require('./model/category.js');
const Item = require('./model/item.js');
const ScrImgForItem = require('./model/scrImgForItem.js');

const seedDB = require('./seedDB.js');

seedDB();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//       next();
//   });
app.get('/api',(req,res)=>{
        //найти пользователя
    //найти все посты пользователя

    Category.find()
        // .populate('values')  //Это название поля которое хочешь чтоб добавилось
        .populate([{
            path:'values',
            model:'items',
            populate:{
                model:'scrImgForItem',
                path:'srcIm'
            }
            
        }]) //Это название поля которое хочешь чтоб добавилось
        .exec()
        .then(categ=>{
            console.log("OK!!");
            res.status(200).send(categ);
             
            // res.statusCode(200);
            // res.json({"status": "success"});
            // res.json(categ);
        })
        .catch(err=>console.log(err));
    
    
});
app.post('/api/category/new', (req,res)=>{
    console.log(req.body);
    if(req.body){
        
            // console.log(catt);
    
            
            cat =  new Category(req.body);
    
            cat.save();
        
            res.redirect('/')
    }else{
        res.send('ничего не получилось')
    }
})
app.delete('/api/category/:name', (req,res)=>{
    console.log(req.params.name);
    // if(req.body){
        
    //         // console.log(catt);
    
            
    //         cat =  new Category(req.body);
    
    //         cat.save();
        
    //         res.redirect('http://localhost:8080/')
    // }else{
    //     res.send('ничего не получилось')
    // }
})

app.listen(3333,process.env.localhost, ()=>{
    console.log('serv is start...');
})