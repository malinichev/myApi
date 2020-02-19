// const mongoose = require('mongoose');
// const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const TitleSlider = require('../../model/titleSlider');

// all title
router.get('/',(req,res)=>{
  TitleSlider.find()
    .exec()
    .then(titSlide=>{
        console.log("OK!!");
        res.status(200).send(titSlide);
    })
    .catch(err=>console.log(err));

});
  //CREATE TitleS Slider
router.post('/new', auth.required, (req,res)=>{   // NEW CATEGORY
  if(!req.body.srcCat) {
    return res.status(422).json({
      errors: {
        srcCat: 'is required',
      },
    });
  }
  if(!req.body.catFor) {
    return res.status(422).json({
      errors: {
        catFor: 'is required',
      },
    });
  }
 
 
    console.log(req.body);
    TitleSlider.create(req.body)
      .then(tit=>{
        tit.save();
        res.status(200).json(tit);
      })
      .catch(err=>{res.status(400).json({
          errors: {
              TitleSlider: err + 'не получилось!'
          }
        })}
      );
})
router.delete('/:id', auth.required, (req,res)=>{  //DELLL


  TitleSlider.findByIdAndDelete(req.params.id)
                  .then(el=>{
                      
                      res.status(200).json({'TitleSlider':"is del"});
                      
                  })
                  .catch(err=>console.log(err));
});
router.put('/:id', auth.required, (req,res)=>{  //Edit
  if(req.params.id && req.body){
    TitleSlider.findByIdAndUpdate(req.params.id, req.body)
        .then(el=>{
            
            res.status(200).json({'sucsses!!':"is Ok"});
            
        })
        .catch(err=>console.log(err));

      }
});



module.exports = router;