var mongoose = require('mongoose');

const scrImgForItemSchema = new mongoose.Schema({
    im: String,
    name: String
});
const ScrImgForItem = mongoose.model('scrImgForItem', scrImgForItemSchema);

module.exports = ScrImgForItem;
// srcIm: [{ id: 111, id2: 2111, im: `${require('../../images/it1.jpeg')}`},
//             { id: 112, id2: 2112, im: `${require('../../images/it2.jpeg')}`},
//             { id: 113, id2: 2113, im: `${require('../../images/it3.jpeg')}`},
//             { id: 114, id2: 2114, im: `${require('../../images/it4.jpeg')}`},
//             ],