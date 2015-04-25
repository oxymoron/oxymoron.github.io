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
    }];
});