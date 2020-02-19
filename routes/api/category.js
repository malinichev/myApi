// const mongoose = require('mongoose');
// const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');


const Category = require('../../model/category');
const Item = require('../../model/item');
const ScrImgForItem = require('../../model/scrImgForItem');

//POST new user route (optional, everyone has access)
// router.post('/', auth.optional, (req, res, next) => {
//   console.log(req.body)
//   const { body: { user } } = req;

  

//   if(!user.password) {
//     return res.status(422).json({
//       errors: {
//         password: 'is required',
//       },
//     });
//   }

  //CREATE CATEGORY
router.post('/new', auth.required, (req,res)=>{   // NEW CATEGORY
  if(!req.body.name) {
    return res.status(422).json({
      errors: {
        name: 'is required',
      },
    });
  }
  if(!req.body.categoryName) {
    return res.status(422).json({
      errors: {
        categoryName: 'is required',
      },
    });
  }
  if(!req.body.srcCat) {
    return res.status(422).json({
      errors: {
        srcCat: 'is required',
      },
    });
  }
  if(req.body){
          cat =  new Category(req.body);
          // console.log("+++++++++++++++++++++++++++++++++++++"); 
          // console.log(cat); 
          // console.log("+++++++++++++++++++++++++++++++++++++"); 
          cat.save()
              .then(categ=>{
                  res.status(200).json(categ);
              });
  }else{
    res.status(400).json({
        errors: {
          category: 'не получилось!',
        },
      });
  }
})
//CREATE ITEM
router.post('/:idCat/item/new',auth.required , (req,res)=>{     //новая ИТЕМ в Категории
      
  Category.findById(req.params.idCat) ///находим нужный Камп
          .then((foundCateg)=>{
              // console.log('newItem ADDD');
              // console.log(req.body);
              // console.log('newItem ADDD');
              Item.create(req.body.dummyItem)    //создаем коммент из того что прилетело из формы
              .then( (newItem)=>{
                      
                      ScrImgForItem.create(req.body.dummyScrIm)
                      .then( newScrImg=>{
                          newScrImg.save();
                          console.log('elIm+++++++++++++++++++++++++++++')
                          console.log(newScrImg)
                          console.log('elIm+++++++++++++++++++++++++++++')
                          newItem.srcIm.push(newScrImg);
                          newItem.save();
                          foundCateg.values.push(newItem);
                          foundCateg.save();
                          res.status(200).send(foundCateg);
                      })
                      .catch(err=>{
                          console.log(err)
                          res.status(400).send('error');
                      })
             
                  
                  
              })
              .catch(err=>{
                  console.log(err)
                  res.status(400).send('error');
              });
          })
          .catch(err=>{
              console.log(err);
              res.status(400).send('error');
          });
  
  
  });
//CREATE IM in ITEM
router.post('/:idCat/item/:idItem/im/new',auth.required , (req,res)=>{     //новая ИТЕМ в Категории
      
Category.findById(req.params.idCat) ///находим нужный Камп
  .then(foundCateg=>{
          console.log(req.body);
          Item.findByIdAndUpdate(req.params.idItem)
              .then(findItem=>{
                      ScrImgForItem.create(req.body)
                          .then(newScr=>{
                              newScr.save();
                              // console.log(newScr);
                              findItem.srcIm.push(newScr);
                              findItem.save();
                           
                              
                              console.log('newSRC ADDD');
                              res.status(200).send(foundCateg);
                          })
                          .catch(err=>{
                              console.log(err)
                              res.status(400).send('error');
                          });
              })
              .catch(err=>{
                  console.log(err)
                  res.status(400).send('error');
              })
  })
  .catch(err=>{
      console.log(err)
      res.status(400).send('error');
  });   
});
      
  
  
router.delete('/:id', auth.required, (req,res)=>{  //DELLL CATEGORY
          // console.log(req.params.id);
      
          if(req.params.id){
              Category.findByIdAndDelete(req.params.id)
                  .then(el=>{
                      
                      res.status(200).json({'categoryName':req.params.name});
                      
                  })
                  .catch(err=>console.log(err));
          }
      });

router.delete('/:idCat/item/:idItem', auth.required,  (req,res)=>{   //DEL ITEMMMMM
  if(req.params.idItem){
      Item.findByIdAndDelete(req.params.idItem)
          .then(el=>{
              res.status(200).json({'item ID is Del':req.params.idItem});
          })
          .catch(err=>console.log(err));
  }
});


router.put('/:id', auth.required, (req,res)=>{    //EDIT CATEGORY
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

router.put('/:idCat/item/:idItem', auth.required, (req,res)=>{    //EDIT ITEM
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