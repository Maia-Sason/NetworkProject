(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(26),s=n.n(r),i=(n(47),n.p,n(48),n(11)),o=n(21),u=n(41),l=n(42),j=n(6),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",h="LOGIN_FAIL",O="LOGOUT_SUCCESS",m="LOGOUT_FAIL",x="AUTHENTICATE_SUCCESS",f="AUTHENTICATE_FAIL",v={isAuthenticated:null,username:"",email:""},g=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case x:case f:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,username:c});case O:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,username:""});case p:case h:case m:default:return e}}}),N=[l.a],y=Object(o.createStore)(g,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,N))),_=n(13),w=n(4),k=n(0);var A=function(){return Object(k.jsx)("div",{className:"compose_container",children:Object(k.jsxs)("div",{className:"compose_section",children:[Object(k.jsxs)("div",{className:"image_circle",children:[Object(k.jsx)("div",{className:"inner_image"}),Object(k.jsx)("div",{className:"inner_image2"})]}),Object(k.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},S=n(5),C=n.n(S),E=n(16),T=n(15),F=n(17),I=n(18);var L=function(e){var t=e.body,n=e.username,c=e.likes;return Object(k.jsxs)("div",{className:"post_container",children:[Object(k.jsxs)("div",{className:"profile_section",children:[Object(k.jsxs)("div",{className:"image_circle",children:[Object(k.jsx)("div",{className:"inner_image"}),Object(k.jsx)("div",{className:"inner_image2"})]}),Object(k.jsx)("div",{className:"username_post",children:Object(k.jsx)("p",{children:n})})]}),Object(k.jsx)("div",{className:"break"}),Object(k.jsxs)("div",{className:"body_section",children:[Object(k.jsx)("span",{children:t}),Object(k.jsxs)("span",{children:[Object(k.jsx)(F.a,{icon:I.b,color:"grey"})," ",c]})]})]})},U=n(14),R=n.n(U);var q=function(){return Object(k.jsxs)("div",{className:"load",children:[Object(k.jsx)("p",{children:" loading "}),Object(k.jsx)(F.a,{className:"load_spin",icon:I.c})]})};var G=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(T.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(T.a)(i,2),u=o[0],l=o[1],j=function(){var e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("http://localhost:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,l(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),s(!0)}),[]);var d=u.map((function(e,t){return Object(k.jsx)(L,{body:e.content,username:e.username,likes:e.likes})}));console.log(u);var p=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A,{}),Object(k.jsx)("div",{className:"break_out"})]});return Object(k.jsxs)("div",{className:"postBox_container",children:[t&&p,r?d:Object(k.jsx)(q,{})]})}));var J=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(F.a,{icon:I.a})})},P=n(22),D=n.n(P);var H=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t){var n,c,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":D.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,R.a.post("".concat("http://localhost:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:m})):t({type:O}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:m});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(k.jsxs)("div",{className:"navbar_wrapper",children:[Object(k.jsx)(_.b,{exact:!0,to:"/",children:"Home"}),Object(k.jsx)(_.c,{exact:!0,to:"/follow",children:"Follow"}),Object(k.jsx)(_.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(k.jsx)(J,{})]}),a=Object(k.jsxs)("div",{className:"navbar_wrapper",children:[Object(k.jsx)(_.b,{exact:!0,to:"/",children:"Home"}),Object(k.jsx)(_.c,{exact:!0,to:"/login",children:"Log In"}),Object(k.jsx)(_.c,{exact:!0,to:"/register",children:"Register"})]});return Object(k.jsx)("div",{className:"navbar_container",children:n?c:a})}));var B=function(){return Object(k.jsx)("div",{className:"footer",children:Object(k.jsx)("span",{children:"Footer"})})},X=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.get("http://localhost:8000/network/authenticated",n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:f,payload:!1}):"success"===c.data.isAuthenticated&&t({type:x,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:f,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.children,n=e.checkAuthenticated;return Object(c.useEffect)((function(){n()}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(H,{}),Object(k.jsx)("header",{className:"App-header",children:t})]})})),K=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(G,{})})},M=n(20),W=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(E.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),a(function(e){var t=null;if(document.cookie&&""!==document.cookie){for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}console.log(t)}return t}("csrftoken")),console.log(D.a.get("csrftoken"))}),[]),Object(k.jsx)("input",{type:"text",name:"csrfmiddlewaretoken",value:n})},z=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(E.a)(C.a.mark((function n(c){var a,r,s;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":D.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,R.a.post("http://localhost:8000/network/login",r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:h})):c({type:b,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:h});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(T.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(M.a)({},e.target.name,e.target.value)))};return a?Object(k.jsx)(w.a,{to:"/"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Log Into your Account."}),Object(k.jsx)("div",{className:"form_container",children:Object(k.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(k.jsx)(W,{}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(k.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),Q=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(E.a)(C.a.mark((function a(r){var s,i,o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,R.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(T.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(T.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,h=s.password,O=s.confirmation,m=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(M.a)({},e.target.name,e.target.value)))};return l?Object(k.jsx)(w.a,{to:"/login"}):n?Object(k.jsx)(w.a,{to:"/"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Register for an Account."}),Object(k.jsx)("div",{className:"form_container",children:Object(k.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),h===O&&(t(p,h,b,O),d(!0))}(e)},children:[Object(k.jsx)(W,{}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{type:"text",onChange:function(e){return m(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Email"}),Object(k.jsx)("input",{type:"email",onChange:function(e){return m(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Password:"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"password",className:"registration_input",value:h,required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Re-enter password:"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"confirmation",className:"registration_input",value:O,required:!0})]}),Object(k.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var V=function(){return Object(k.jsxs)("div",{className:"notify_box",children:[Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})})]})};var Y=function(){return Object(k.jsx)(i.a,{store:y,children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(_.a,{children:Object(k.jsxs)(X,{children:[Object(k.jsx)(J,{}),Object(k.jsx)(V,{}),Object(k.jsx)(w.b,{exact:!0,path:"/",component:K}),Object(k.jsx)(w.b,{exact:!0,path:"/register",component:Q}),Object(k.jsx)(w.b,{exact:!0,path:"/login",component:z})]})}),Object(k.jsx)(B,{})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[76,1,2]]]);
//# sourceMappingURL=main.974df056.chunk.js.map