(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsOrder/confirm"],{"0cd2":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"29d6":function(e,t,r){"use strict";r.r(t);var n=r("0cd2"),a=r("463b");for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r("816a");var s,u=r("f0c5"),d=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=d.exports},"463b":function(e,t,r){"use strict";r.r(t);var n=r("d04c"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"816a":function(e,t,r){"use strict";var n=r("a8b0"),a=r.n(n);a.a},a8b0:function(e,t,r){},d04c:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r,n,a,o,s){try{var u=e[o](s),d=u.value}catch(i){return void r(i)}u.done?t(d):Promise.resolve(d).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function u(e){o(s,n,a,u,d,"next",e)}function d(e){o(s,n,a,u,d,"throw",e)}u(void 0)}))}}var u={data:function(){return{user:{},orderGoods:{},addresszhi:{},total:0}},onLoad:function(t){var r=this;return s(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.orderGoods=e.getStorageSync("orderGoods"),0==r.total?r.total=parseFloat(r.orderGoods.goodsNewMoney)*r.orderGoods.buyNumber:r.total=parseFloat(r.total)+parseFloat(r.orderGoods.goodsNewMoney)*r.orderGoods.buyNumber,r.total=r.total.toFixed(2),e.removeStorageSync("orderGoods");case 4:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this;return s(n.default.mark((function r(){var a,o,s,u;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=e.getStorageSync("nowTable"),r.next=4,a.$api.session(o);case 4:if(s=r.sent,a.user=s.data,u=e.getStorageSync("address"),e.removeStorageSync("address"),null==u||""==u){r.next=12;break}a.addresszhi=u,r.next=16;break;case 12:return r.next=14,a.$api.list("address",{yonghuId:a.user.id,isdefaultTypes:2});case 14:s=r.sent,s.data.list.length>0?a.addresszhi=s.data.list[0]:a.addresszhi=null;case 16:case"end":return r.stop()}}),r)})))()},methods:{onSubmitTap:function(){var t=this;return s(n.default.mark((function r(){var a;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=t,e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var e=s(n.default.mark((function e(t){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=12;break}if(null==a.addresszhi){e.next=10;break}return a.orderGoods.goodsOrderUuidNumber=(new Date).getTime(),a.orderGoods.addressId=a.addresszhi.id,a.orderGoods.goodsOrderPaymentTypes=1,e.next=7,a.$api.add("goodsOrder",a.orderGoods);case 7:a.$utils.tab("/pages/goodsOrder/list"),e.next=12;break;case 10:return a.$utils.msg("请选择地址"),e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 3:case"end":return r.stop()}}),r)})))()},onAddressTap:function(){var e=this;return s(n.default.mark((function t(){var r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,r.$utils.jump("/pages/address/list");case 2:case"end":return t.stop()}}),t)})))()}}};t.default=u}).call(this,r("543d")["default"])},d8d2:function(e,t,r){"use strict";(function(e){r("b6f1");n(r("66fd"));var t=n(r("29d6"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])}},[["d8d2","common/runtime","common/vendor"]]]);