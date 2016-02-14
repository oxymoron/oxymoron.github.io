---
layout: post
title: Заказы на Amazon.com в первые месяцы
description: В первое время после переезда людям нужны примерно похожие вещи.
---

В первое время после переезда мы подписались на [Amazon Prime](https://www.amazon.com/prime) 
и многие вещи заказывали через [Amazon](http://www.amazon.com). Так как недавно
в нашем ряду выигравших гринкарту прибыло, хочу поделиться списком наших
покупок в первые месяцы:

{% raw %}

<div ng-controller="AmazonCtrl">

    <div class="amazon-list list-group">
        <a href="http://www.amazon.com/gp/product/{{item[2]}}" ng-repeat="item in items" class="list-group-item">
             <div class="media">
               <div class="media-left media-top">
                   <img class="media-object" src="http://images.amazon.com/images/P/{{item[2]}}.01.THUMBZZZ.jpg">
               </div>
               <div class="media-body small">
                 {{item[1]}}
                 <div class="price">{{item[3] | currency}}</div>
               </div>
             </div>
        </a>
    </div>

</div>
{% endraw %}
