(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var o=e(4),r=e.n(o),c=e(3),a=e(5),s=e(6),i=e(1),u=(e(11),e(0)),d=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(i.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(a.a)(Object(c.a)().mark((function t(n){var e;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("index"!==n){t.next=6;break}return t.next=3,l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 3:e=t.sent,t.next=15;break;case 6:if("color"!==n){t.next=12;break}return t.next=9,l().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 9:e=t.sent,t.next=15;break;case 12:return t.next=14,l();case 14:e=t.sent;case 15:o(e);case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r()},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r("index")},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r("color")},children:"Load red goods"}),Object(u.jsx)(d,{goods:e})]})};r.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.41eb368f.chunk.js.map