webpackJsonp([1],{40:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n  details: "+t._s(t.item)+" -\n  "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "+t._s(t.msg)+"\n")])},n=[],r={data:function(){return{msg:"mmm"}},asyncData:function(t){var e=t.store,s=t.route;return console.log("################# route.params.id:",s.params.id),e.dispatch("FETCH_ITEM",{id:s.params.id})},computed:{item:function(){return console.log("#######this.$store.state: ",this.$store.state),this.$store.state.items[this.$route.params.id]}}},o=r,i=s(10),u=Object(i.a)(o,a,n,!1,null,null,null);e.default=u.exports}});