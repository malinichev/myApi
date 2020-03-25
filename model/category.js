var mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: String,
    categoryName: String,
    newCat: String,
    srcCat: String,
    catFor: String,
    linkCat: String,
    values: [
        {
            type: mongoose.Schema.Types.ObjectId,     //позволяет добавлять к пользователю не сам пост а тоько ИД поста
            ref: 'items'
        }
    ]
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
// {
//     id: 1,
//     name: "Бревнозахваты",
//     categoryName: "brevnozahvat",
//     newCat: true,
//     srcCat: `${require('../../images/brevnozah.jpeg')}`,
//     catFor: 'для перегрузки сортимента',
//     linkCat: '/catalog/brevnozahvat',
//     values: [
