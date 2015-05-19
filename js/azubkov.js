/*
 * Developer: Andrey Zubkov
 * Date: 2015-04-25
 */

var azBlog = angular.module('azBlog', []);

azBlog.controller('SaleCtrl', function($scope){

    $scope.order = '-price';
    $scope.filter = 'available';

    $scope.setOrder = function (order) {
        $scope.order = order;
    };

    $scope.setFilter = function (filter) {
        $scope.filter = filter;
    };

    $scope.items = [{
        name: 'Увлажнитель воздуха',
        img: 'http://i.imgur.com/tTDDd4Cl.jpg',
        price: 0
    },{
        name: 'Отпариватель',
        sold: true,
        info: 'Tefal IS5200 KO',
        origPrice: {
            price: 119000,
            comment: 'Цена на Gmarket',
            link: 'http://item2.gmarket.co.kr/Item/detailview/Item.aspx?goodscode=262769037&GoodsSale=Y&jaehuid=200002657&service_id=elecdn'
        },
        img: 'http://i.imgur.com/uiusX1el.jpg',
        price: 50000
    },{
        name: 'Газовая плита',
        info: 'Дополнительно: формы для хлеба и противень.',
        img: 'http://i.imgur.com/lrHlNxsl.jpg',
        sold: true,
        price: 80000
    },{
        name: 'Подставка для купания',
        img: 'http://i.imgur.com/7W4xxA9l.jpg',
        price: 0
    },{
        name: 'Кровать полуторка на ножках',
        sold: true,
        img: 'http://i.imgur.com/Er9kkb9l.jpg',
        price: 40000
    },{
        name: 'Холодильник для пикника',
        sold: true,
        img: 'http://i.imgur.com/y6Ofytzl.jpg',
        price: 20000
    },{
        name: 'Коляска Bebecar',
        img: 'http://i.imgur.com/UxBwqp7l.jpg',
        price: 200000
    },{
        name: 'Детский велосипед',
        sold: true,
        img: 'http://i.imgur.com/SZwaClOl.jpg',
        price: 10000
    },{
        name: 'Тумба',
        origPrice: {price: 100000},
        img: 'http://i.imgur.com/fr6F03wl.jpg',
        sold: true,
        price: 10000
    },{
        name: 'Детский комод',
        sold: true,
        img: 'http://i.imgur.com/vPSmw4ql.jpg',
        price: 30000
    },{
        name: 'Светильник',
        sold: true,
        img: 'http://i.imgur.com/WclIAZrl.jpg',
        price: 5000
    },{
        name: 'Часы вокзальные',
        hide: true,
        img: 'http://i.imgur.com/GqI7YSIl.jpg',
        price: 5000
    },{
        name: 'Детская горка',
        info: 'На горке еще есть баскетбольное кольцо и в придачу мешок шариков.',
        img: 'http://i.imgur.com/KpE1At6l.jpg',
        price: 80000
    },{
        name: 'Подставка',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/WKTnikbl.jpg',
        price: 0
    },{
        name: 'Горшок детский',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/7JKZRgzl.jpg',
        price: 10000
    },{
        name: 'Стул складной',
        sold: true,
        img: 'http://i.imgur.com/XLoxTDHl.jpg',
        price: 5000
    },{
        name: 'Вентилятор Electrica (малый)',
        img: 'http://i.imgur.com/QNkPtDKl.jpg',
        sold: true,
        price: 20000
    },{
        name: 'Домик камуфляжный',
        info: 'Кот попал случайно, в комплект не входит',
        img: 'http://i.imgur.com/Im4ZFYOl.jpg',
        sold: true,
        price: 0
    },{
        name: 'Барный стул',
        sold: true,
        img: 'http://i.imgur.com/bbmuvFTl.jpg',
        price: 0
    },{
        name: 'Елка новогодняя со светопроводом',
        sold: true,
        img: 'http://i.imgur.com/LTkPTJfl.jpg',
        price: 0
    },{
        name: 'Санки',
        sold: true,
        img: 'http://i.imgur.com/2ayhdtFl.jpg',
        price: 0
    },{
        name: 'Елка новогодняя',
        sold: true,
        info: 'Игрушки прилагаются (шары и мишура).',
        img: 'http://i.imgur.com/1mO2oWrl.jpg',
        price: 0
    },{
        name: 'Тренажер для пресса',
        sold: true,
        img: 'http://i.imgur.com/ZxpORiAl.jpg',
        price: 0
    },{
        name: 'Гантели (сменный вес)',
        info: '10 блинов на каждую. Каждый блин 0,55кг.',
        img: 'http://i.imgur.com/FZjQS1Nl.jpg',
        price: 10000
    },{
        name: 'Груша',
        img: 'http://i.imgur.com/V1tC7SLl.jpg',
        sold: true,
        price: 30000
    },{
        name: 'Кошачья вилла',
        sold: true,
        img: 'http://i.imgur.com/9nTE3yEl.jpg',
        price: 40000
    },{
        name: 'Очиститель воздуха',
        img: 'http://i.imgur.com/0Q3CBcyl.jpg',
        origPrice: {
            price: 403000,
            comment: 'Цена на Gmarket',
            link: 'http://gmkt.kr/gY4r5s'
        },
        sold: true,
        price: 80000
    },{
        name: 'Пылесос Electrolux Supercyclone',
        img: 'http://i.imgur.com/gJkqQUcl.jpg',
        price: 50000
    },{
        name: 'Медведь усталый',
        sold: true,
        img: 'http://i.imgur.com/0aX4mgvl.jpg',
        price: 20000
    },{
        name: 'Велотренажер (торг уместен)',
        img: 'http://i.imgur.com/GIA2tQ0l.jpg',
        price: 90000
    },{
        name: 'Палатка (4-5 местная)',
        info: "Размер: 210 x 210x 150",
        img: 'http://i.imgur.com/PDbO7ki.jpg',
        sold: true,
        price: 30000
    },{
        name: 'Теннисная ракетка',
        img: 'http://i.imgur.com/rKf9C2yl.jpg',
        price: 0
    },{
        name: 'Гитара',
        info: 'Гитара аккустическая со звукоснимателем и приборчиком для настройки',
        img: 'http://i.imgur.com/DWLq4U2l.jpg',
        sold: true,
        price: 100000
    },{
        name: 'Насос',
        info: 'Бронь',
        sold: true,
        img: 'http://i.imgur.com/dShsI0Dl.jpg',
        price: 0
    },{
        name: 'Баскетбольный мяч',
        sold: true,
        img: 'http://i.imgur.com/uPaa4Xbl.jpg',
        price: 0
    },{
        name: 'Утя для игрушек',
        sold: true,
        img: 'http://i.imgur.com/7pqSrZTl.jpg',
        price: 0
    },{
        name: 'Спасательный жилет',
        info: 'На 70-90 кг',
        img: 'http://i.imgur.com/5I3ylnYl.jpg',
        price: 0
    },{
        name: 'Газовая плита (походная)',
        sold: true,
        img: 'http://i.imgur.com/dPoFyFUl.jpg',
        price: 0
    },{
        name: 'Подстилка',
        sold: true,
        img: 'http://i.imgur.com/zBVIJ8Ol.jpg',
        price: 0
    },{
        name: 'Походные стульчики',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/OJYANibl.jpg',
        price: 10000
    },{
        name: 'Два пляжных трона',
        sold: true,
        img: 'http://i.imgur.com/Kn577Wjl.jpg',
        price: 10000
    },{
        name: 'Кухонный комбайн',
        sold: true,
        img: 'http://i.imgur.com/Jrrc7Ztl.jpg',
        price: 50000
    },{
        name: 'Игрушка-застежка "Жираф" (Монтессори)',
        sold: true,
        img: 'http://i.imgur.com/D2wZeIhl.jpg',
        price: 10000
    },{
        name: 'Металлофон',
        sold: true,
        img: 'http://i.imgur.com/Vy9eWohl.jpg',
        price: 0
    },{
        name: 'Сортер',
        sold: true,
        img: 'http://i.imgur.com/wVeU3S7l.jpg',
        price: 5000
    },{
        name: 'Игрушка собака',
        sold: true,
        img: 'http://i.imgur.com/Q4OruB1l.jpg',
        price: 0
    },{
        name: 'Игрушка лев',
        sold: true,
        img: 'http://i.imgur.com/5CKazyhl.jpg',
        price: 0
    },{
        name: 'Пазлы',
        sold: true,
        img: 'http://i.imgur.com/X5du6STl.jpg',
        price: 0
    },{
        name: 'Чумачечая лошадь',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/H1fqbyEl.jpg',
        price: 0
    },{
        name: 'Детский компьютер',
        sold: true,
        img: 'http://i.imgur.com/HRSN4Wcl.jpg',
        price: 10000
    },{
        name: 'Лего конструктор',
        sold: true,
        img: 'http://i.imgur.com/01phdCvl.jpg',
        price: 0

    },{
        name: 'Дрель BOSCH',
        sold: true,
        img: 'http://i.imgur.com/h2pdNPwl.jpg',
        price: 40000
    },{
        name: 'Гладильная доска',
        img: 'http://i.imgur.com/MaqZDuxl.jpg',
        origPrice: {price: 40000},
        price: 10000
    },{
        name: 'Шуруповерт BOSCH',
        sold: true,
        img: 'http://i.imgur.com/IHp58jTl.jpg',
        origPrice: {price: 90000},
        price: 40000
    },{
        name: 'Дартс',
        sold: true,
        info: 'Оригинальный дартс с острова Гавайи',
        img: 'http://i.imgur.com/QDYUpTEl.jpg',
        origPrice: {price: 300000},
        price: 100000
    },{
        name: 'Писуар детский',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/XC06WUzl.jpg',
        price: 0
    },{
        name: 'Стол корейский походный',
        img: 'http://i.imgur.com/T19ByJRl.jpg',
        price: 0
    },{
        name: 'Стол складной походный',
        sold: true,
        img: 'http://i.imgur.com/NLBItfjl.jpg',
        price: 20000
    },{
        name: 'Массажер для ног',
        img: 'http://i.imgur.com/HPqObGOl.jpg',
        origPrice: {price: 100000},
        price: 20000
    },{
        name: 'Принтер лазерный',
        sold: true,
        info: 'Проблема: печатает по 1 странице. Бронь',
        img: 'http://i.imgur.com/u2azRT9l.jpg',
        price: 10000
    },{
        name: 'Подстилка',
        sold: true,
        img: 'http://i.imgur.com/3msdx51l.jpg',
        price: 0
    },{
        name: 'Штатив',
        sold: true,
        info: 'Бронь',
        img: 'http://i.imgur.com/HrzcnMYl.jpg',
        price: 10000
    },{
        name: 'Подстилка',
        sold: true,
        img: 'http://i.imgur.com/WxLqDBZl.jpg',
        price: 0
    },{
        name: 'Деревянный конструктор',
        info: 'Без книжек',
        img: 'http://i.imgur.com/xdjV8SRl.jpg',
        sold: true,
        price: 0
    },{
        name: 'Принтер лазерный ML-1660K',
        hide: true,
        img: 'http://i.imgur.com/Byrpms9l.jpg',
        price: 20000
    },{
        name: 'Детское и обувь на мальчика от 0 до 2,5 лет',
        sold: true,
        info: 'По запросу. Цена договорная'
    },{
        name: 'Пальто мужское',
        sold: true,
        info: 'Размер 110. Рост 180-185. 91% - шерсть, 9% - кашемир',
        img: 'http://i.imgur.com/YNoYZ8zl.jpg',
        price: 100000
    },{
        name: 'Пазлы "Транспорт" на 5, 6, 7 деталек',
        info: '10 - полных, 2 - без одной детали',
        img: 'http://i.imgur.com/v5phYBkl.jpg',
        sold: true,
        price: 3000
    },{
        name: 'Струйный принтер и сканер HP Deskjet F2280',
        info: 'Как принтер его лучше не использовать, но сканер вполне нормальный.',
        hide: true,
        img: 'http://i.imgur.com/r8FpPvEl.jpg',
        price: 10000
    },{
        name: 'New Carens LPI 2.0',
        info: '2011, Auto, LPG, 59000+km',
        img: 'http://i.imgur.com/XK3h7JNl.jpg',
        sold: true,
        price: 11000000
    },{
        name: 'Телевизор Samsung 40" LN40B621',
        info: '2009 г. / DLNA',
        sold: true,
        origPrice: {price: 1000000},
        img: 'http://i.imgur.com/jUcafeLl.jpg',
        price: 150000
    },{
        name: 'Фен-щетка Philips',
        img: 'http://i.imgur.com/PQ79Hjnl.jpg',
        price: 20000
    },{
        name: 'Автокресло',
        img: 'http://i.imgur.com/K9hYOTel.jpg',
        price: 10000
    },{
        name: 'Вешалка',
        img: 'http://i.imgur.com/2BQj4Jcl.jpg',
        price: 10000

    },{
        name: 'Книги',
        info: "Просто раздаем",
        img: 'http://i.imgur.com/XGc8QPLl.jpg',
        price: 0
    },{
        name: 'Тумбочка-полка',
        img: 'http://i.imgur.com/5W9OJqDl.jpg',
        price: 5000
    },{
        name: 'Полка кабута из ИКЕИ (2 шт.)',
        img: 'http://i.imgur.com/VXNFkItl.jpg',
        price: 5000

    }];

    var sum = 0;
    var availableNum = 0;
    for (var i=0; i < $scope.items.length; i++){
        var item = $scope.items[i];
        sum += item.price;
        if (!item.sold) availableNum++;
    }
    $scope.availableNum = availableNum;
    $scope.totalPrice = sum;
});
