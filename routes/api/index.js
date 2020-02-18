
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const auth = require('../auth');
const Users = mongoose.model('Users');

const Category = require('../../model/category');
const Item = require('../../model/item');


router.use('/users', require('./users'));



router.get('/',(req,res)=>{
            //найти Category
    
    
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
            })
            .catch(err=>console.log(err));
        
        
    });
    
router.post('/category/new', auth.required, (req,res)=>{   // NEW CATEGORY
        console.log(req.body); 
        if(req.body){
            console.log(req.body);    
                // console.log(catt);
        
                
                cat =  new Category(req.body);
        
                cat.save()
                    .then(categ=>{
                        // console.log("OK!!");
                        res.status(200).send(categ);
                    });
                
                // res.redirect('/')
        }else{
            res.send('ничего не получилось')
        }
    })

router.post('/category/:idCat/item/new',auth.required , (req,res)=>{     //новая ИТЕМ в Категории
            
        Category.findById(req.params.idCat) ///находим нужный Камп
                .then((foundCateg)=>{
                    console.log(req.body);
                    Item.create(req.body)    //создаем коммент из того что прилетело из формы
                    .then((newItem)=>{
                    
                        newItem.save();
                        // console.log(newComments);
                        foundCateg.values.push(newItem);                 //добавляем к нужному Кампу созданный комент
                        foundCateg.save();   //Сохраняем запись в БД что комент пренадлежит этому Кампу
                        console.log('newItem ADDD');
                        res.status(200).send(foundCateg);
                    })
                    .catch(err=>{
                        console.log(err)
                        res.status(400).send('error');
                    });
                })
                .catch(err=>{
                    console.log(err);
                    res.redirect('/camp')
                });
        
        
        });
        
router.delete('/category/:id', auth.required, (req,res)=>{  //DELLL CATEGORY
                console.log(req.params.id);
            
                if(req.params.id){
                    Category.findByIdAndDelete(req.params.id)
                        .then(el=>{
                            
                            res.status(200).json({'categoryName':req.params.name});
                            
                        })
                        .catch(err=>console.log(err));
                }
            });

router.delete('/category/:idCat/item/:idItem', auth.required,  (req,res)=>{   //DEL ITEMMMMM
        if(req.params.idItem){
            Item.findByIdAndDelete(req.params.idItem)
                .then(el=>{
                    res.status(200).json({'item ID is Del':req.params.idItem});
                })
                .catch(err=>console.log(err));
        }
    });


router.put('/category/:id', auth.required, (req,res)=>{    //EDIT CATEGORY
            console.log(req.body); 
            console.log(req.params.id);
            // res.status(200).json({
            //     'body':req.body,
            //     'params.id':req.params.id,      
            // });
            if(req.params.id && req.body){
                Category.findByIdAndUpdate(req.params.id, req.body)
                    .then(el=>{
                        
                        res.status(200).json({'sucsses!!':req.body.name});
                        
                    })
                    .catch(err=>console.log(err));
            }
        });

router.put('/category/:idCat/item/:idItem', auth.required, (req,res)=>{    //EDIT ITEM
    console.log(req.body); 
    // console.log(req.params.idCat);
    // console.log(req.params.idItem);
    if(req.params.idItem && req.body){
        Item.findByIdAndUpdate(req.params.idItem, req.body)
            .then(el=>{
                
                res.status(200).json({'sucsses!!':req.body.name});
                
            })
            .catch(err=>console.log(err));
    }
});

module.exports = router;