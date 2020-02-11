var mongoose = require('mongoose');
var scrImgForItem = require('./scrImgForItem.js');

const scrImgForItemSchema = new mongoose.Schema({
    im: String,
    name: String
});

const ItemSchema = new mongoose.Schema({
    label: String,
    newest: String,
  
    srcIm: [{
        type: mongoose.Schema.Types.ObjectId,     //позволяет добавлять к пользователю не сам пост а тоько ИД поста
        ref: 'scrImgForItem'
    }],
    shortRead: String,
    fullRead: String,
  
    
});
const Item = mongoose.model('items', ItemSchema);

module.exports = Item;
// {
//     label: 'Трактор 11',
//     newest: false,
//     srcIm: {[ id: 111, id2: 2111, im: `${require('../../images/it1.jpeg')}`},
//             { id: 112, id2: 2112, im: `${require('../../images/it2.jpeg')}`},
//             { id: 113, id2: 2113, im: `${require('../../images/it3.jpeg')}`},
//             { id: 114, id2: 2114, im: `${require('../../images/it4.jpeg')}`},
//             ],
//     shortRead : <span><p>Вес: 270 - 1850 кг<br/> Раскрытие челюсти: 1400 - 2500 мл<br/>Рабочее давление челюстей: 180 - 220 Бар<br/>Гидропоток челюстей: 40 - 200 л/м<br/>Рабочее давление ротора: 130 - 170 Бар<br/>Гидропоток ротора: 40 - 200 л/м<br/></p></span>,
//     fullRead : <span><h3>Описание</h3><p>- Гидравлический привод неограниченного вращения в 360О в обе стороны.<br/>- Надежная система вращения Swing Bearing.<br/>- Используется особо износостойкая сталь от мирового металлургического лидера «POSCO».<br/>- Рабочие поверхности не потребуют восстановления усиления за всё время службы.<br/>- Усиленные гидроцилиндры (по одному на каждую челюсть) для увеличения мощности сжатия.<br/>- Предохранительный клапан предотвращает произвольное разжатие челюстей.<br/>- Возможен монтаж на все виды экскаваторов от мини до экскаваторов весом в 50 т.<br/></p><h3>Применение</h3><p>· перевалка металлолома, камней;<br/>· разбор завалов после демонтажа;<br/>· уборка строительного мусора и отходов;<br/>· устройство канализации и трубопровода;<br/>· погрузка и сортировка леса;<br/>· прочие строительные работы.<br/></p></span>,
//     id: 11,
//   },