(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsLiuyan/add-or-update"],{"0fb2":function(e,n,t){"use strict";var r=t("5bbb"),o=t.n(r);o.a},"3d9d":function(e,n,t){"use strict";t.r(n);var r=t("e7f9"),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},"49f1":function(e,n,t){"use strict";(function(e){t("b6f1");r(t("66fd"));var n=r(t("e4da"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"5bbb":function(e,n,t){},"71e3":function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var o=function(){var e=this,n=e.$createElement;e._self._c},u=[]},e4da:function(e,n,t){"use strict";t.r(n);var r=t("71e3"),o=t("3d9d");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("0fb2");var a,c=t("f0c5"),i=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"5daaffe2",null,!1,r["a"],a);n["default"]=i.exports},e7f9:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,o,u,a){try{var c=e[u](a),i=c.value}catch(s){return void t(s)}c.done?n(i):Promise.resolve(i).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e2cf"))}.bind(null,t)).catch(t.oe)},i={data:function(){return{cross:"",ruleForm:{goodsId:"",userid:"",nickname:"",shouhouCommentbackText:"",reply:""},user:{},ro:{goodsId:!1,yonghuId:!1,nickname:!1,shouhouCommentbackText:!1,reply:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return a(r.default.mark((function o(){var u,a,c,i;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return u=e.getStorageSync("nowTable"),o.next=3,t.$api.session(u);case 3:if(a=o.sent,t.user=a.data,t.ruleForm.yonghuId=e.getStorageSync("userid"),n.goodsId&&(t.ruleForm.goodsId=n.goodsId,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){o.next=13;break}return t.ruleForm.id=n.id,o.next=11,t.$api.info("goodsLiuyan",t.ruleForm.id);case 11:a=o.sent,t.ruleForm=a.data;case 13:if(t.cross=n.cross,!n.cross){o.next=41;break}c=e.getStorageSync("crossObj"),o.t0=r.default.keys(c);case 17:if((o.t1=o.t0()).done){o.next=41;break}if(i=o.t1.value,"goodsId"!=i){o.next=23;break}return t.ruleForm.goodsId=c[i],t.ro.goodsId=!0,o.abrupt("continue",17);case 23:if("yonghuId"!=i){o.next=27;break}return t.ruleForm.yonghuId=c[i],t.ro.yonghuId=!0,o.abrupt("continue",17);case 27:if("nickname"!=i){o.next=31;break}return t.ruleForm.nickname=c[i],t.ro.nickname=!0,o.abrupt("continue",17);case 31:if("shouhouCommentbackText"!=i){o.next=35;break}return t.ruleForm.shouhouCommentbackText=c[i],t.ro.shouhouCommentbackText=!0,o.abrupt("continue",17);case 35:if("reply"!=i){o.next=39;break}return t.ruleForm.reply=c[i],t.ro.reply=!0,o.abrupt("continue",17);case 39:o.next=17;break;case 41:t.styleChange();case 42:case"end":return o.stop()}}),o)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.shouhouCommentbackText){t.next=3;break}return n.$utils.msg("评论内容不能为空"),t.abrupt("return");case 3:return t.next=5,n.$api.add("goodsLiuyan",n.ruleForm);case 5:e.setStorageSync("goodsLiuyanState",!0),n.$utils.msgBack("提交成功");case 7:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,o=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,o=o>9?o:"0"+o,"".concat(t,"-").concat(r,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};n.default=i}).call(this,t("543d")["default"])}},[["49f1","common/runtime","common/vendor"]]]);