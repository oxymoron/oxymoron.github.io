/*
 * Developer: Andrey Zubkov
 * Date: 2025-10-12
 */

var azBlog = angular.module('azBlog', []);

azBlog.controller('AmazonCtrl', function($scope){
   $scope.items = [
        ['06/19/15', 'Galaxy Note 4 case, Caseology® [Envoy Series] [Charcoal Black] Premium Leather Bumper Cover [Leather Bound] Samsung Galaxy Note 4 case','B00PV6JO7S', 15.99],
        ['06/19/15', 'Galaxy Note 4 case, Caseology® [Envoy Series] [Carbon Fiber White] Premium Leather Bumper Cover [Leather Bound] Samsung Galaxy Note 4 case','B00OM90E7Y', 15.99],
        ['06/20/15', 'Petsafe Drinkwell Platinum Pet Fountain with Bonus Filters','B00MH8DZ3M', 37.59],
        ['06/20/15', 'Google Chromecast HDMI Streaming Media Player','B00DR0PDNE', 31.89],
        ['06/20/15', 'TVPower USB Power Cable for Chromecast','B00NDOIZ2K', 5.49],
        ['06/21/15', 'Koomus CD-Air CD Slot Mount Universal CD Slot Smartphone Car Mount Holder Cradle for iPhone 6 6+ 5S, 5C, 5, 4S, 4, iPod touch, Samsung Galaxy S5, S4,','B00HRKI5V2', 19.99],
        ['06/24/15', 'Gray and White Meridian King / Cal-king 3-piece Duvet-Cover-Set, 100 % Egyptian Cotton 300 TC','B00TICU91G', 69.99],
        ['06/24/15', 'HP 83A (CF283A) Black Original LaserJet Toner Cartridge','B00FW1N1IU', 51.99],
        ['06/24/15', 'HP M127FW Wireless Monochrome Laserjet Printer with Scanner and Copier','B00EELU4ES', 129.99],
        ['06/24/15', 'Hadoop: The Definitive Guide','1491901632', 33.16],
        ['06/24/15', 'ARRIS / Motorola SurfBoard SB6121 DOCSIS 3.0 Cable Modem - Retail Packaging - Black','B004XC6GJ0', 69.99],
        ['06/26/15', 'Sleep Innovations 12-Inch SureTemp Memory Foam Mattress 20-Year Warranty, King','B003CT37LA', 671.22],
        ['06/26/15', 'Crown Mark Barlow Bicast Headboard, King','B00474KW3K', 198.49],
        ['06/26/15', 'Samsung UN55JU7100 55-Inch 4K Ultra HD 3D Smart LED TV','B00T48CVVK', 1497.99],
        ['06/26/15', 'Sleep Master 4-Piece Bracket Set and Bed Skirt for Platform Bed Frame, King','B006MKJIWI', 39.03],
        ['06/26/15', 'Safety 1st Heavenly Dreams White Crib Mattress','B004044LD4', 52.99],
        ['06/26/15', 'Orbelle 3-6T Toddler Bed, Espresso','B0031ARQLC', 67.98],
        ['06/27/15', 'UpBright® New AC / DC Adapter For Netgear Nighthawk AC1900 Smart Dual Band WiFi Gigabit Router R7000 Power Supply Cord Cable PS Charger PSU','B00KDYTAOK', 12.99],
        ['06/28/15', 'BLACK + DECKER CHV1410L 16 volt Lithium Cordless Dust Buster Hand Vac','B006LXOJC0', 59.88],
        ['06/28/15', 'Dyson DC65 Animal Complete Upright Vacuum Cleaner','B00HNUFSLG', 508.00],
        ['06/28/15', 'Black & Decker LDX120C 20-Volt MAX Lithium-Ion Cordless Drill/Driver','B005NNF0YU', 54.88],
        ['06/28/15', 'Disney Mickey Mouse Space Adventures 4 Piece Toddler Set, Blue','B005CMI404', 36.08],
        ['06/28/15', 'Toddler Pillow - Soft Hypoallergenic - Best Pillows for Kids! Better Neck Support and Sleeping! They Will Take a Better Nap in Bed, a Crib, or Even on','B00KDKKD1I', 18.95],
        ['06/28/15', 'Black & Decker BDA91109 Combination Accessory Set, 109-Piece','B009QYLOD8', 18.71],
        ['06/29/15', 'Sleep Master Platform Metal Bed Frame/Mattress Foundation, King','B006MIVR06', 114.73],
        ['06/29/15', 'T-fal C770SF Signature Hard Anodized Nonstick Thermo-Spot Heat Indicator Cookware Set, 15-Piece, Gray','B00DVZGSOI', 164.89],
        ['06/29/15', 'Ginsu 7108 Chikara 8-Piece Stainless Steel Knife Set with Bamboo Block','B0016J4230', 65.00],
        ['06/29/15', 'Fire TV Stick','B00GDQ0RMG', 39.00],
        ['06/29/15', 'Google Chromecast HDMI Streaming Media Player','B00DR0PDNE', 30.58],
        ['07/26/15', 'Mount-it! 32- 60-Inch Flat Panel TV Mount and Glass Entertainment Center Combo (3 Shelf)','B00LOW2ZP6', 145.99],
        ['07/26/15', 'Withings Wireless Blood Pressure Monitor for Apple and Android','B00H43WOAK', 129.95],
        ['07/26/15', 'AmazonBasics High-Speed HDMI Cable - 6.5 Feet (2 Meters) Supports Ethernet, 3D, 4K and Audio Return','B003L1ZYYM', 5.49],
        ['07/26/15', 'Withings WS-50 Smart Body Analyzer, Black','B00BKRQ4E8', 149.95],
        ['07/28/15', 'HDTV Antenna, 1byone Super Thin Digital Indoor HDTV Antenna - 25 Miles Range, 10ft High Performance Coax Cable, Extreme Soft Design and Lightweight, M','B00IF70QCW', 12.99],
        ['07/28/15', 'Ovente KG83W Glass Electric Kettle, 1.5 L, White','B00I32GPVK', 24.99],
        ['07/28/15', 'Ambient Weather WS-07 Big Digit 8-Channel Wireless Thermo-Hygrometer','B00BWUOVE8', 24.29],
        ['07/31/15', 'Strider Knee and Elbow Pad Set, Black','B00766HCUM', 20.46],
        ['07/31/15', 'Mini Micro Scooter - Orange','B0026H1J1Y', 79.99],
        ['07/31/15', 'Giro Me2 Bike Helmet - Matte Glowing Red Camo - Toddler','B00FN5X540', 29.95],
        ['07/31/15', 'Norpro 282 Stainless Steel Double Covered Butter Dish, Silver','B0093J4CU8', 10.65],
        ['07/31/15', 'Samsung SSG-5150GB 3D Active Glasses','B00INO6JX2', 17.44],
        ['07/31/15', 'RSVP Endurance Sugar Bowl','B000F7HWEK', 15.45],
        ['07/31/15', 'Electrohome Projection Alarm Clock with AM/FM Radio, Battery Backup, Auto Time Set, Dual Alarm, Sleep Timer, Indoor Temperature/Day/Date Display with','B003WGRUQQ', 29.99],
        ['07/31/15', 'Arctic Silver 5 High-Density Polysynthetic Silver Thermal Compound, 3.5 Grams','B000OGX5AM', 7.05],
        ['07/31/15', '10 Energizer CR1620 Lithium Batteries','B00N43CADA', 7.05],
        ['08/01/15', 'BLACK + DECKER CHV1410L 16 volt Lithium Cordless Dust Buster Hand Vac','B006LXOJC0', 0.00],
        ['08/01/15', 'Google Chromecast HDMI Streaming Media Player','B00DR0PDNE', 0.00],
        ['08/02/15', 'Fosmon Cat6 Flat Snagless Network Ethernet Patch Cable (50 Feet, White)','B00F3ID2F4', 12.95],
        ['08/02/15', 'Foam Pad Ear Cover 4 Philips Sony Headphone-3pr 60mm','B0040FLTKQ', 4.39],
        ['08/02/15', 'Maxhood Self Adhesive Cable Tie Mounts Cable Clips Cable Drop Wire Holder Cable Base Holder (Pack of 20pcs)','B00PLXB924', 4.99],
        ['08/10/15', 'Instant Pot IP-DUO60 7-in-1 Programmable Pressure Cooker, 6Qt/1000W, Stainless Steel Cooking Pot and Exterior, Latest 3rd Generation Technology','B00FLYWNYQ', 132.45],
        ['08/10/15', 'Kids and Baby Adjustable Elastic Solid Color Suspenders (22"", Grey)','B00JI82ZXK', 4.81],
        ['08/12/15', 'Spring in Action','161729120X', 45.97],
        ['08/12/15', 'Effective Java (2nd Edition)','321356683', 38.43],
        ['08/12/15', 'Pro AngularJS (Expert\'s Voice in Web Development)','1430264489', 42.74],
        ['08/20/15', 'Ferrari Scuderia Red Eau De Toilette Spray, 4.2 Ounce','B00DEZZEEK', 18.99],
        ['08/20/15', 'Advance Time Technology 1.8"" LED Alarm Clock With Red Display, Gray','B002JINY90', 16.99],
        ['08/20/15', 'Watch Band Dark Brown Genuine Leather 22 millimeter Tech Swiss','B0047ERWNS', 19.00],
        ['08/21/15', 'Philips Norelco S9721/87,  Shaver 9700 - Frustration Free Package','B00M1E55HQ', 319.95],
        ['08/24/15', 'Bentgo All-in-One Stackable Lunch/Bento Box, Grey','B00B78UBO4', 14.99],
        ['09/03/15', 'Weatherproof Little Boys Hooded Down Alternative Fleece Lined Winter Parka Coat - Blue (Size 3T)','B00PUX7UVO', 16.47],
        ['09/03/15', 'Mustela Stelaker Purifying Scalp Cream for Kids, 1.3 Ounce','B000PJ2R0C', 13.73],
        ['09/03/15', 'Kolumbo Travel Umbrella - BLACK - Auto Open/Close - Windproof - UltraSlim, Compact For Easy Carrying - Wind Tested 55MPH - Won\'t Flip Inside Out - Dur','B00UR0EFEK', 24.99],
        ['09/03/15', 'Lock & Lock Rectangular Food Container with Divider, Short, 4.1-Cup, 34-Fluid Ounces','B000FDXB2G', 10.48],
        ['09/03/15', 'Apple Wired Keyboard with Numeric Keypad MB110LL/B [NEWEST VERSION]','B005DLDTAE', 48.49],
        ['09/03/15', 'mStand Laptop Stand','B000OOYECC', 43.00],
        ['09/03/15', 'Columbia Little Boys\' Toddler Steens Mt Ii Fleece, Rocket, 3T','B00ND5KTY6', 13.57],
        ['09/12/15', 'Canon SELPHY CP910 Black Portable Wireless Compact Photo Color Printer','B00HK8V4NC', 85.99],
        ['09/12/15', 'Neiko 60166A Heavy Duty All-Angle Power Toilet Plunger, Patented','B000MAXASM', 13.99],
        ['09/12/15', 'Toddler Pillow WITH PILLOWCASE by Dreamtown Kids. CHIROPRACTOR RECOMMENDED for Best Kids Neck Support. Great for Sleep or Travel. Hypoallergenic Cotto','B00KWR2BCQ', 14.95],
        ['09/12/15', 'Canon KP-108IN Color Ink Paper Set 3115B001','B001BJKO3M', 29.89],
        ['09/17/15', 'Coghlan\'s 8501 Featherweight Mirror','B000RZQI68', 5.03],
        ['09/22/15', 'CY USB 2.0 A Male to Dual Data USB 2.0 A Female + Power Cable USB 2.0 A Female Extension Cable 20cm','B00L4XZY94', 4.75],
        ['09/23/15', 'VIVO Dual LCD Monitor Desk Mount Stand Heavy Duty Fully Adjustable fits 2 /Two Screens up to 27"" (STAND-V002)','B009S750LA', 42.95],
        ['09/25/15', 'Student Driver Magnets (Set of 3) - Reflective Vehicle Car Sign 12 X 3 X 0.1 Inches','B00YML13OU', 8.06],
        ['09/26/15', 'CY USB 2.0 A Male to Dual Data USB 2.0 A Female + Power Cable USB 2.0 A Female Extension Cable 20cm','B00L4XZY94', 0.00],
        ['10/02/15', 'Sony MDR10RBT Bluetooth Wireless Headphones','B00FJISZ8M', 199.99],
        ['10/07/15', 'Alexstudio Best For Home Use Handy Easy-to-use Style 110-220V ABS Electric Cord Clothes Lint Pill Fluff Remover Fabrics Sweater Fuzz Shaver','B013JO03XC', 10.99],
        ['10/07/15', 'Simplicity® Unisex Structured Gangster Trilby Wool Fedora Hat, 3071_Bk/Charcoal','B00M1LE4JY', 11.99],
        ['10/11/15', 'Spider-Man Dress-Up Box Set','B00KTYWMGW', 26.94],
        ['10/11/15', 'Evenflo Tribute LX Convertible Car Seat, Saturn','B006PB2B6O', 59.98],
        ['10/12/15', 'Hair Care 4-Pack Comb - Not Breakable','B00E669N0M', 6.99],
        ['10/12/15', 'Pinzon Egyptian Cotton 6-Piece Towel Set, Grey','B002S52ZKS', 21.99],
        ['10/13/15', 'Future 4 package: Student Book (with Practice Plus CD-ROM) and Workbook','013245579X', 34.19]
    ];
});

azBlog.controller('SaleCtrl', function($scope){

    $scope.order = '-price';
    $scope.filter = 'all';

    $scope.setOrder = function (order) {
        $scope.order = order;
    };

    $scope.setFilter = function (filter) {
        $scope.filter = filter;
    };

    $scope.items = [{
        name: 'Увлажнитель воздуха',
        img: 'http://i.imgur.com/tTDDd4Cl.jpg',
        sold: true,
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
        sold: true,
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
        price: 99000
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
        price: 49000
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
        sold: true,
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
        sold: true,
        price: 50000
    },{
        name: 'Медведь усталый',
        sold: true,
        img: 'http://i.imgur.com/0aX4mgvl.jpg',
        price: 20000
    },{
        name: 'Велотренажер (торг уместен)',
        img: 'http://i.imgur.com/GIA2tQ0l.jpg',
        sold: true,
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
        sold: true,
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
        sold: true,
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
        sold: true,
        price: 20000
    },{
        name: 'Автокресло',
        img: 'http://i.imgur.com/K9hYOTel.jpg',
        sold: true,
        price: 10000
    },{
        name: 'Вешалка',
        img: 'http://i.imgur.com/2BQj4Jcl.jpg',
        sold: true,
        price: 10000

    },{
        name: 'Книги',
        info: "Просто раздаем",
        sold: true,
        img: 'http://i.imgur.com/XGc8QPLl.jpg',
        price: 0
    },{
        name: 'Тумбочка-полка',
        img: 'http://i.imgur.com/5W9OJqDl.jpg',
        price: 5000
    },{
        name: 'Полка кабута из ИКЕИ (2 шт.)',
        sold: true,
        img: 'http://i.imgur.com/VXNFkItl.jpg',
        price: 5000
    },{
        name: 'Переноска для ребенка (горный вариант)',
        sold: true,
        img: 'http://i.imgur.com/HWG5O64l.jpg',
        price: 20000

    }];

    var sum = 0;
    var availableNum = 0;
    for (var i=0; i < $scope.items.length; i++){
        var item = $scope.items[i];
        sum += item.price;
        if (!item.sold && !item.hide) availableNum++;
    }
    $scope.availableNum = availableNum;
    $scope.totalPrice = sum;
});
