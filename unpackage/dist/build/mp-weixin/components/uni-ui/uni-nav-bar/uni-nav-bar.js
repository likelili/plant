(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-nav-bar/uni-nav-bar"],{"03e0":function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},"168d":function(t,n,e){"use strict";e.r(n);var u=e("03e0"),i=e("6155");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("918e");var a,o=e("f0c5"),l=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=l.exports},4019:function(t,n,e){},6155:function(t,n,e){"use strict";e.r(n);var u=e("ea09"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=i.a},"918e":function(t,n,e){"use strict";var u=e("4019"),i=e.n(u);i.a},ea09:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/uni-ui/uni-status-bar/uni-status-bar").then(e.bind(null,"961b"))},i=function(){return e.e("components/uni-ui/uni-icon/uni-icon").then(e.bind(null,"9365"))},r={name:"UniNavBar",components:{uniStatusBar:u,uniIcon:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-ui/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("168d"))
        })
    },
    [['components/uni-ui/uni-nav-bar/uni-nav-bar-create-component']]
]);