/*
 * Developer: Andrey Zubkov
 * Date: 2015-04-25
 */

var azBlog = angular.module('azBlog', []);

azBlog.controller('SaleCtrl', function($scope){

    $scope.order = 'price';
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
        price: 10000
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
        info: 'Дополнительно: формы для хлеба и противень. Можем помочь с доставкой по Сувону и окрестностям',
        img: 'http://i.imgur.com/lHZaFvnl.jpg',
        price: 100000
    },{
        name: 'Подставка для купания',
        img: 'http://i.imgur.com/7W4xxA9l.jpg',
        price: 10000
    },{
        name: 'Кровать полуторка на ножках',
        img: 'http://i.imgur.com/Er9kkb9l.jpg',
        price: 40000
    },{
        name: 'Холодильник для пикника',
        sold: true,
        img: 'http://i.imgur.com/y6Ofytzl.jpg',
        price: 20000
    },{
        name: 'Коляска Bebecar',
        hide: true,
        img: 'http://i.imgur.com/UxBwqp7l.jpg',
        price: 350000
    },{
        name: 'Детский велосипед',
        sold: true,
        img: 'http://i.imgur.com/SZwaClOl.jpg',
        price: 10000
    },{
        name: 'Тумба',
        origPrice: {price: 100000},
        img: 'http://i.imgur.com/fr6F03wl.jpg',
        price: 30000
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
        img: 'http://i.imgur.com/GqI7YSIl.jpg',
        price: 5000
    },{
        name: 'Детская горка',
        info: 'На горке еще есть баскетбольное кольцо и в придачу мешок шариков.',
        img: 'http://i.imgur.com/KpE1At6l.jpg',
        price: 100000
    },{
        name: 'Подставка',
        info: 'Бронь',
        img: 'http://i.imgur.com/WKTnikbl.jpg',
        price: 0
    },{
        name: 'Горшок детский',
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
        price: 20000
    },{
        name: 'Домик камуфляжный',
        info: 'Кот попал случайно, в комплект не входит',
        img: 'http://i.imgur.com/Im4ZFYOl.jpg',
        price: 5000
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
        price: 15000
    },{
        name: 'Груша',
        img: 'http://i.imgur.com/V1tC7SLl.jpg',
        price: 20000
    },{
        name: 'Кошачья вилла',
        info: 'Бронь',
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
        price: 100000
    },{
        name: 'Пылесос Electrolux Supercyclone',
        img: 'http://i.imgur.com/gJkqQUcl.jpg',
        price: 80000
    },{
        name: 'Медведь усталый',
        img: 'http://i.imgur.com/0aX4mgvl.jpg',
        price: 20000
    },{
        name: 'Велотренажер',
        img: 'http://i.imgur.com/GIA2tQ0l.jpg',
        price: 150000
    },{
        name: 'Палатка (2-3 местная)',
        img: 'http://i.imgur.com/vi5dvMwl.jpg',
        price: 50000
    },{
        name: 'Теннисная ракетка',
        img: 'http://i.imgur.com/rKf9C2yl.jpg',
        price: 5000
    },{
        name: 'Гитара',
        info: 'Гитара аккустическая со звукоснимателем и приборчиком для настройки',
        img: 'http://i.imgur.com/DWLq4U2l.jpg',
        price: 100000
    },{
        name: 'Насос',
        info: 'Бронь',
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
        price: 10000
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
        img: 'http://i.imgur.com/D2wZeIhl.jpg',
        price: 10000
    },{
        name: 'Металлофон',
        sold: true,
        img: 'http://i.imgur.com/Vy9eWohl.jpg',
        price: 0
    },{
        name: 'Сортер',
        img: 'http://i.imgur.com/wVeU3S7l.jpg',
        price: 5000
    },{
        name: 'Игрушка собака',
        sold: true,
        img: 'http://i.imgur.com/Q4OruB1l.jpg',
        price: 0
    },{
        name: 'Игрушка лев',
        img: 'http://i.imgur.com/5CKazyhl.jpg',
        price: 0
    },{
        name: 'Пазлы',
        sold: true,
        img: 'http://i.imgur.com/X5du6STl.jpg',
        price: 0
    },{
        name: 'Чумачечая лошадь',
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
        info: 'Бронь',
        img: 'http://i.imgur.com/h2pdNPwl.jpg',
        price: 40000
    },{
        name: 'Гладильная доска',
        img: 'http://i.imgur.com/MaqZDuxl.jpg',
        origPrice: {price: 40000},
        price: 20000
    },{
        name: 'Шуруповерт BOSCH',
        info: 'Бронь',
        img: 'http://i.imgur.com/IHp58jTl.jpg',
        origPrice: {price: 90000},
        price: 40000
    },{
        name: 'Дартс',
        info: 'Оригинальный дартс с острова Гавайи',
        img: 'http://i.imgur.com/QDYUpTEl.jpg',
        origPrice: {price: 300000},
        price: 100000
    },{
        name: 'Писуар детский',
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
        price: 30000
    },{
        name: 'Принтер лазерный',
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
        info: 'Бронь',
        img: 'http://i.imgur.com/HrzcnMYl.jpg',
        price: 10000
    },{
        name: 'Подстилка',
        sold: true,
        img: 'http://i.imgur.com/WxLqDBZl.jpg',
        price: 0
    },{
        name: 'Развивающие деревянные наборы',
        info: 'Без книжек',
        img: 'http://i.imgur.com/xdjV8SRl.jpg',
        price: 30000
    },{
        name: 'Принтер лазерный ML-1660K',
        hide: true,
        img: 'http://i.imgur.com/Byrpms9l.jpg',
        price: 30000
    },{
        name: 'Струйный принтер и сканер HP Deskjet F2280',
        info: 'Как принтер его лучше не использовать, но сканер вполне нормальный.',
        hide: true,
        img: 'http://i.imgur.com/r8FpPvEl.jpg',
        price: 10000
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