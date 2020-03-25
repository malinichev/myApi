
const express = require('express');
const router = express.Router();
const Category = require('../../model/category');



//GET ALL category
router.get('/',(req,res)=>{
    //найти Category


Category.find()
      //Это название поля которое хочешь чтоб добавилось
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
    })
    .catch(err=>console.log(err));


});


router.use('/users', require('./users'));
router.use('/title-slider', require('./titleSlider'));
router.use('/category', require('./category'));


module.exports = router;