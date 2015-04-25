/*
 * Developer: Andrey Zubkov
 * Date: 2015-04-25
 */

var azBlog = angular.module('azBlog', []);

azBlog.controller('SaleCtrl', function($scope){
    $scope.items = [{
        name: 'Увлажнитель воздуха',
        img: 'http://i.imgur.com/tTDDd4Cl.jpg',
        price: 10000
    },{
        name: 'Отпариватель',
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
        img: 'http://i.imgur.com/y6Ofytzl.jpg',
        price: 20000
    },{
        name: 'Коляска Bebecar',
        sold: true,
        img: 'http://i.imgur.com/UxBwqp7l.jpg',
        price: 350000
    },{
        name: 'Детский велосипед',
        img: 'http://i.imgur.com/SZwaClOl.jpg',
        price: 20000
    },{
        name: 'Тумба',
        img: 'http://i.imgur.com/fr6F03wl.jpg',
        price: 30000
    },{
        name: 'Детский комод',
        img: 'http://i.imgur.com/vPSmw4ql.jpg',
        price: 30000
    },{
        name: 'Светильник',
        img: 'http://i.imgur.com/WclIAZrl.jpg',
        price: 5000
    },{
        name: 'Часы вокзальные',
        img: 'http://i.imgur.com/GqI7YSIl.jpg',
        price: 5000
    },{
        name: 'Детская горка',
        img: 'http://i.imgur.com/KpE1At6l.jpg',
        price: 100000
    },{
        name: 'Подставка',
        img: 'http://i.imgur.com/WKTnikbl.jpg',
        price: 0
    },{
        name: 'Горшок детский',
        img: 'http://i.imgur.com/7JKZRgzl.jpg',
        price: 10000
    },{
        name: 'Стул складной',
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
        img: 'http://i.imgur.com/bbmuvFTl.jpg',
        price: 0
    },{
        name: 'Елка новогодняя со светопроводом',
        img: 'http://i.imgur.com/LTkPTJfl.jpg',
        price: 0
    },{
        name: 'Санки',
        img: 'http://i.imgur.com/2ayhdtFl.jpg',
        price: 0
    },{
        name: 'Елка новогодняя',
        img: 'http://i.imgur.com/1mO2oWrl.jpg',
        price: 0
    },{
        name: 'Тренажер для пресса',
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
        img: 'http://i.imgur.com/DWLq4U2l.jpg',
        price: 50000
    },{
        name: 'Насос',
        img: 'http://i.imgur.com/dShsI0Dl.jpg',
        price: 0
    },{
        name: 'Баскетбольный мяч',
        img: 'http://i.imgur.com/uPaa4Xbl.jpg',
        price: 0
    },{
        name: 'Утя для игрушек',
        img: 'http://i.imgur.com/7pqSrZTl.jpg',
        price: 0
    },{
        name: 'Спасательный жилет',
        info: 'На 70-90 кг',
        img: 'http://i.imgur.com/5I3ylnYl.jpg',
        price: 10000
    },{
        name: 'Газовая плита (походная)',
        img: 'http://i.imgur.com/dPoFyFUl.jpg',
        price: 0
    },{
        name: 'Подстилка',
        img: 'http://i.imgur.com/zBVIJ8Ol.jpg',
        price: 0
    },{
        name: 'Походные стульчики',
        img: 'http://i.imgur.com/OJYANibl.jpg',
        price: 10000
    },{
        name: 'Два пляжных трона',
        img: 'http://i.imgur.com/Kn577Wjl.jpg',
        price: 10000
    },{
        name: 'Кухонный комбайн',
        img: 'http://i.imgur.com/Jrrc7Ztl.jpg',
        price: 50000
    },{
        name: 'Игрушка-застежка "Жираф" (Монтессори)',
        img: 'http://i.imgur.com/D2wZeIhl.jpg',
        price: 10000
    },{
        name: 'Металлофон',
        img: 'http://i.imgur.com/Vy9eWohl.jpg',
        price: 0
    },{
        name: 'Сортер',
        img: 'http://i.imgur.com/wVeU3S7l.jpg',
        price: 5000
    },{
        name: 'Ноутбук детский',
        img: 'http://i.imgur.com/3Frgjzol.jpg',
        price: 0
    },{
        name: 'Игрушка собака',
        img: 'http://i.imgur.com/Q4OruB1l.jpg',
        price: 0
    },{
        name: 'Игрушка лев',
        img: 'http://i.imgur.com/5CKazyhl.jpg',
        price: 0
    },{
        name: 'Пазлы',
        img: 'http://i.imgur.com/X5du6STl.jpg',
        price: 0
    },{
        name: 'Чумачечая лошадь',
        img: 'http://i.imgur.com/H1fqbyEl.jpg',
        price: 0
    }];
});