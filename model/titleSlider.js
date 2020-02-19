// titile = [
//     {
//       id: 1,
//       srcCat: `${require('../../images/main2.jpg')}`,
//       catFor: 'для перегрузки сортимента',
//     }
    

//   ]
var mongoose = require('mongoose');

const titleSliderSchma = new mongoose.Schema({
    srcCat: String,
    catFor: String
});
const TitleSlider = mongoose.model('titleSlider', titleSliderSchma);

module.exports = TitleSlider;
