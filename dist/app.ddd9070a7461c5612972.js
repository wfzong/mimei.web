webpackJsonp([3],{11:function(t,e,n){"use strict";function r(){return new p.a.Store({state:{activeType:null,itemsPerPage:20,items:{},lists:{}},actions:g,mutations:E,getters:S.a})}function o(){return new b.a({mode:"history",fallback:!1,scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/list"},{path:"/list",component:w},{path:"/details/:id",component:y}]})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=(n(14),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v("\n  App.vue Content\n  "),n("router-view",{staticClass:"view"})],1)}),u=[],s=n(10),c={},l=Object(s.a)(c,a,u,!1,null,null,null),f=l.exports,p=n(16),d=n(17),v=n.n(d);v.a.interceptors.response.use(function(t){return console.log("axios.interceptors.response: ",t.data),t.data},function(t){return console.log("发生 error: ",t.response),Promise.reject(t)});var h=v.a,m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";if(n=n.toUpperCase(),t="https://api.mimei.net.cn/api/v1"+t,"GET"===n&&Object.keys(e).length){var r=[];for(var o in e)r.push(o+"="+e[o]);t=t+"?"+r.join("&")}return h({method:n,url:t,data:e})},T=function(t){return m("/article/",t)},_=function(t){return m("/article/"+t.id)},g={FETCH_LIST_DATA:function(t,e){var n=t.commit;t.dispatch,t.state;return T(e).then(function(t){return console.log("list: ",t),n("SET_LIST","info",t)})},FETCH_ITEM:function(t,e){var n=t.commit;return _(e).then(function(t){console.log("#######",t),n("SET_ITEM",{id:e.id,item:t})})}},E={SET_LIST:function(t,e,n){i.a.set(t.lists,e,n)},SET_ITEM:function(t,e){var n=e.id,r=e.item;i.a.set(t.items,n,r)}},I=n(36),S=n.n(I);i.a.use(p.a);var b=n(37);i.a.use(b.a);var w=function(){return n.e(0).then(n.bind(null,39))},y=function(){return n.e(1).then(n.bind(null,40))},A=n(38);i.a.mixin({beforeRouteUpdate:function(t,e,n){var r=this.$options.asyncData;r?r({store:this.$store,route:t}).then(n).catch(n):n()}});var C=function(){var t=r(),e=o();return Object(A.sync)(t,e),{app:new i.a({router:e,store:t,render:function(t){return t(f)}}),router:e,store:t}}(),j=C.app,M=C.router,L=C.store;window.__INITIAL_STATE__&&(L.replaceState(window.__INITIAL_STATE__),console.log("**************store.state: ",L.state)),M.onReady(function(){M.beforeResolve(function(t,e,n){var r=M.getMatchedComponents(t),o=M.getMatchedComponents(e),i=!1,a=r.filter(function(t,e){return i||(i=o[e]!==t)}),u=a.map(function(t){return t.asyncData}).filter(function(t){return t});if(!u.length)return n();Promise.all(u.map(function(e){return e({store:L,route:t})})).then(function(){n()}).catch(n)}),j.$mount("#app")})},36:function(t,e){}},[11]);