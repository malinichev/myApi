### Backend часть 
Представляет из себя Node.js + Express + Mongo.DB(отдельно docker container) сервер развернуый в Docker
</br>
Cсылка на сам развернутый контейнер https://react24.site:2222/api
</br>

Ссылка на использующий АПИ проект https://react24.site/react-redux
</br>

Для POST запроса кроме  login и register нужен Token который генерируется на сервере и сохраняется у Вас в LocalStorage</br>
</br>


В этом проекте я использовал следующие блиотеки npm :</br>
**+ express**</br>
**+ express-jwt**</br>
**+ mongoose**</br>
**+ passport-local-mongoose**</br>



Варианты запроса: </br>
**+Для получения всех категорий и обьектов в них GET:**  https://react24.site:2222/api </br></br>
**+Для получения всех слайдов на домашней странице GET:**  https://react24.site:2222/api/title-slider </br></br></br>

**+Для LogIn POST:**  https://react24.site:2222/api/users/login </br></br>
**+Для Register POST:**  https://react24.site:2222/api/users </br></br></br>

**+Для delete One Title Slider POST:**  https://react24.site:2222/api/title-slider/${idDeletedSlider}?_method=DELETE </br></br>
**+Для add One New Title Slider POST:**  https://react24.site:2222/api/title-slider/new </br></br>
**+Для edit Title Slider POST:**  https://react24.site:2222/api/title-slider/${_id}?_method=PUT </br></br></br>



**+Для add One New Category POST:**  https://react24.site:2222/api/category/new </br></br>
**+Для del One Category POST:**  https://react24.site:2222/api/category/${categId}?_method=DELETE </br></br>
**+Для edit One Category POST:**  https://react24.site:2222/api/category/${categId}?_method=PUT </br></br>
**+Для add One New Item POST:**  https://react24.site:2222/api/category/${categId}/item/new </br>
**+Для update One Item POST:**  https://react24.site:2222/api/category/${categId}/item/${itemId}?_method=PUT </br></br>
**+Для del One Item POST:**  https://react24.site:2222/api/category/${categId}/item/${itemId}?_method=DELETE </br></br>
**+Для add One New Image POST:**  https://react24.site:2222/api/category/${categId}/item/${itemId}/im/new </br></br>
**+Для del One Image POST:**  https://react24.site:2222/api/category/${categId}/item/${itemId}/im/${imageId}?_method=DELETE </br></br>




