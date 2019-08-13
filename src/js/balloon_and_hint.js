ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.611409, 37.201122],
            zoom: 13,

        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.611409, 37.201122], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Ремонт квартир",
            balloonContentBody: "Потрясающий ремонт квартир, офисов, и чего только пожелаете",
            balloonContentFooter: "г. Москва, ул. Ленина, д. 10 корпус 2, оф. 308",
            hintContent: "Ремонт квартир"
        },
        {
            preset: 'islands#orangeGlyphIcon',
            iconGlyph: 'home',
            iconGlyphColor: 'grey'
        });
    myMap.geoObjects.add(myPlacemark);
    
    // Открываем балун на карте (без привязки к геообъекту).
    // myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
    //     // Опция: не показываем кнопку закрытия.
    //     closeButton: false
    // });

    // Показываем хинт на карте (без привязки к геообъекту).
    // myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
    //     // Опция: задержка перед открытием.
    //     openTimeout: 1500
    // });
}