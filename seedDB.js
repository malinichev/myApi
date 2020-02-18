const Category = require('./model/category.js');
const Item = require('./model/item.js');
const ScrImgForItem = require('./model/scrImgForItem.js');
const User = require('./model/user.js');




const dummyCateg = [
    {
        name: "Бревнозахваты",
        categoryName: "brevnozahvat",
        newCat: true,
        srcCat: `../../images/brevnozah.jpeg`,
        catFor: 'для перегрузки сортимента',
        linkCat: '/catalog/brevnozahvat',  
    },
    {
        name: "Мультизахваты",
      categoryName: "multizahvati",
      srcCat: '../../images/multi-zahvat.jpeg',

      catFor: 'для перегрузки 222',
      newCat: true,
      linkCat: '/catalog/multizahvati',

      
    },
    {
        name: "Остальные захваты и механизмы",
      categoryName: "others",      
      srcCat: '../../images/other-mechnizm.jpeg',
      catFor: 'для перегрузки rrrr',
      
      newCat: false,
      linkCat: '/catalog/others',
    },
    {
        name: "Ковш-захваты",
        categoryName: "kow-zahvati",      
        srcCat: '../../images/cow-zahvat.jpeg',
        catFor: 'для перегрузки ggggggg',
        newCat: false,
        linkCat: '/catalog/kow-zahvati',
    }
    
  ];

  const dummyItems = 
  
    {
        label: 'Трактор 11',
        newest: false,
        shortRead : `<span><p>Вес: 270 - 1850 кг<br/> Раскрытие челюсти: 1400 - 2500 мл<br/>Рабочее давление челюстей: 180 - 220 Бар<br/>Гидропоток челюстей: 40 - 200 л/м<br/>Рабочее давление ротора: 130 - 170 Бар<br/>Гидропоток ротора: 40 - 200 л/м<br/></p></span>`,
        fullRead : `<span><h3>Описание</h3><p>- Гидравлический привод неограниченного вращения в 360О в обе стороны.<br/>- Надежная система вращения Swing Bearing.<br/>- Используется особо износостойкая сталь от мирового металлургического лидера «POSCO».<br/>- Рабочие поверхности не потребуют восстановления усиления за всё время службы.<br/>- Усиленные гидроцилиндры (по одному на каждую челюсть) для увеличения мощности сжатия.<br/>- Предохранительный клапан предотвращает произвольное разжатие челюстей.<br/>- Возможен монтаж на все виды экскаваторов от мини до экскаваторов весом в 50 т.<br/></p><h3>Применение</h3><p>· перевалка металлолома, камней;<br/>· разбор завалов после демонтажа;<br/>· уборка строительного мусора и отходов;<br/>· устройство канализации и трубопровода;<br/>· погрузка и сортировка леса;<br/>· прочие строительные работы.<br/></p></span>`,
    };
      
      const dummyScrImgForItem = 
    {
         im: '../../images/it1.jpeg',
         name:'weweweew'
    }
;

 const  seedDB = async ()=>{
    console.log('DB CLINEDDD!!!');
    // ScrImgForItem.deleteMany({})
    // .then(()=>console.log('ScrImgForItem del'))
    // .catch(err=>console.log(err));

    // Item.deleteMany({})
    //     .then(()=>console.log('Item del'))
    //     .catch(err=>console.log(err));

  
    // Category.deleteMany({})
    //     .then(()=>console.log('Category del'))
    //     .catch(err=>console.log(err));
    // User.deleteMany({})
    //     .then(()=>console.log('User del'))
    //     .catch(err=>console.log(err));

   
        let myScr ;
        let myItem ;
        let cat;

  //создание категорий
    // dummyCateg.map(catt => {
    //     // console.log(catt);

        
    //     cat =  new Category(catt);

    //     cat.save();
    // });
    

   
   
   //Добавление Итемс


        // Category.find() 
        // .then((foundCat)=>{
        //     ScrImgForItem.create(dummyScrImgForItem)
        //         .then(newScr=>{
                    
        //             Item.create(dummyItems)
        //                 .then(newItem=>{
        //                     newItem.srcIm.push(newScr);
        //                     newItem.save();
        //                     foundCat.map(fcat=>{
        //                         fcat.values.push(newItem)
        //                         fcat.save();
        //                     })
                            
        //                 })
        //         }) 
            
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //         // res.redirect('/camp');
        //     });
        





    };

      



module.exports = seedDB;
  
