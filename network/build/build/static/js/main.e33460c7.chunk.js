(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(26),s=n.n(r),i=(n(47),n.p,n(48),n(11)),o=n(22),l=n(41),u=n(42),j=n(6),d="REGISTER_SUCCESS",b="REGISTER_FAIL",p="LOGIN_SUCCESS",h="LOGIN_FAIL",O="LOGOUT_SUCCESS",x="LOGOUT_FAIL",m="AUTHENTICATE_SUCCESS",f="AUTHENTICATE_FAIL",v={isAuthenticated:null,username:"",email:""},g=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:case f:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case p:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,username:c});case O:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,username:""});case b:case h:case x:default:return e}}}),N=[u.a],y=Object(o.createStore)(g,{},Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,N))),_=n(14),w=n(4),k=n(0);var A=function(){return Object(k.jsx)("div",{className:"compose_container",children:Object(k.jsxs)("div",{className:"compose_section",children:[Object(k.jsxs)("div",{className:"image_circle",children:[Object(k.jsx)("div",{className:"inner_image"}),Object(k.jsx)("div",{className:"inner_image2"})]}),Object(k.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},S=n(5),C=n.n(S),E=n(16),T=n(12),F=n(17),I=n(18);var L=function(e){var t=e.body,n=e.username,c=e.likes;return Object(k.jsxs)("div",{className:"post_container",children:[Object(k.jsxs)("div",{className:"profile_section",children:[Object(k.jsxs)("div",{className:"image_circle",children:[Object(k.jsx)("div",{className:"inner_image"}),Object(k.jsx)("div",{className:"inner_image2"})]}),Object(k.jsx)("div",{className:"username_post",children:Object(k.jsx)("p",{children:n})})]}),Object(k.jsx)("div",{className:"break"}),Object(k.jsxs)("div",{className:"body_section",children:[Object(k.jsx)("span",{children:t}),Object(k.jsxs)("span",{children:[Object(k.jsx)(F.a,{icon:I.b,color:"grey"})," ",c]})]})]})},U=n(15),R=n.n(U);var q=function(){return Object(k.jsxs)("div",{className:"load",children:[Object(k.jsx)("p",{children:" loading "}),Object(k.jsx)(F.a,{className:"load_spin",icon:I.c})]})};var G=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(T.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(T.a)(i,2),l=o[0],u=o[1],j=function(){var e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("http://localhost:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,u(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),s(!0)}),[]);var d=l.map((function(e,t){return Object(k.jsx)(L,{body:e.content,username:e.username,likes:e.likes})}));console.log(l);var b=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A,{}),Object(k.jsx)("div",{className:"break_out"})]});return Object(k.jsxs)("div",{className:"postBox_container",children:[t&&b,r?d:Object(k.jsx)(q,{})]})}));var B=function(){return Object(k.jsx)("div",{className:"bell",children:Object(k.jsx)(F.a,{icon:I.a})})},J=n(19),P=n.n(J);var D=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t){var n,c,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":P.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,R.a.post("".concat("http://localhost:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:x})):t({type:O}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:x});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=e.toggleNotificationBox,a=Object(k.jsxs)("div",{className:"navbar_wrapper",children:[Object(k.jsx)(_.b,{exact:!0,to:"/",children:"Home"}),Object(k.jsx)(_.c,{exact:!0,to:"/follow",children:"Follow"}),Object(k.jsx)(_.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(k.jsx)(B,{onClick:c}),Object(k.jsx)("button",{onClick:c,value:"hi"})]}),r=Object(k.jsxs)("div",{className:"navbar_wrapper",children:[Object(k.jsx)(_.b,{exact:!0,to:"/",children:"Home"}),Object(k.jsx)(_.c,{exact:!0,to:"/login",children:"Log In"}),Object(k.jsx)(_.c,{exact:!0,to:"/register",children:"Register"})]});return Object(k.jsx)("div",{className:"navbar_container",children:n?a:r})}));var H=function(){return Object(k.jsx)("div",{className:"footer",children:Object(k.jsx)("span",{children:"Footer"})})};var X=function(){return Object(k.jsxs)("div",{className:"notify_box",children:[Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})}),Object(k.jsx)("div",{className:"notification_item",children:Object(k.jsx)("p",{children:"notification"})})]})},K=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.get("http://localhost:8000/network/authenticated",n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:f,payload:!1}):"success"===c.data.isAuthenticated&&t({type:m,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:f,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.children,n=e.checkAuthenticated,a=Object(c.useState)(!0),r=Object(T.a)(a,2),s=r[0],i=r[1];Object(c.useEffect)((function(){n()}),[]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(D,{toggleNotificationBox:function(){i(!s)}}),Object(k.jsxs)("header",{className:"App-header",children:[s&&Object(k.jsx)(X,{}),t]})]})})),M=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(G,{})})},W=n(21),z=function(){var e=Object(c.useState)(""),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(E.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:a(P.a.get("csrftoken")),console.log("successfully fetched csrf"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),console.log(n)}),[]),Object(k.jsx)("input",{type:"text",name:"csrfmiddlewaretoken",value:n})},Q=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(E.a)(C.a.mark((function n(c){var a,r,s;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":P.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,R.a.post("http://localhost:8000/network/login",r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:h})):c({type:p,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:h});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(T.a)(r,2),i=s[0],o=s[1],l=i.username,u=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(W.a)({},e.target.name,e.target.value)))};return a?Object(k.jsx)(w.a,{to:"/"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Log Into your Account."}),Object(k.jsx)("div",{className:"form_container",children:Object(k.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(l,u)}(t)},children:[Object(k.jsx)(z,{}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:l,placeholder:"Enter Username",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Password"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:u,placeholder:"Enter Password",required:!0})]}),Object(k.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),V=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(E.a)(C.a.mark((function a(r){var s,i,o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":P.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,R.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:b})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:b});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(T.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),l=Object(T.a)(o,2),u=l[0],d=l[1],b=s.username,p=s.email,h=s.password,O=s.confirmation,x=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(W.a)({},e.target.name,e.target.value)))};return u?Object(k.jsx)(w.a,{to:"/login"}):n?Object(k.jsx)(w.a,{to:"/"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Register for an Account."}),Object(k.jsx)("div",{className:"form_container",children:Object(k.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),h===O&&(t(b,h,p,O),d(!0))}(e)},children:[Object(k.jsx)(z,{}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Username"}),Object(k.jsx)("input",{type:"text",onChange:function(e){return x(e)},name:"username",className:"registration_input",value:b,placeholder:"Enter Username",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Email"}),Object(k.jsx)("input",{type:"email",onChange:function(e){return x(e)},name:"email",className:"registration_input",value:p,placeholder:"Enter email address",required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Password:"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"password",className:"registration_input",value:h,required:!0})]}),Object(k.jsxs)("div",{className:"input_field",children:[Object(k.jsx)("label",{children:"Re-enter password:"}),Object(k.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"confirmation",className:"registration_input",value:O,required:!0})]}),Object(k.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var Y=function(){return Object(k.jsx)(i.a,{store:y,children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(_.a,{children:Object(k.jsxs)(K,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(X,{}),Object(k.jsx)(w.b,{exact:!0,path:"/",component:M}),Object(k.jsx)(w.b,{exact:!0,path:"/register",component:V}),Object(k.jsx)(w.b,{exact:!0,path:"/login",component:Q})]})}),Object(k.jsx)(H,{})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[76,1,2]]]);
//# sourceMappingURL=main.e33460c7.chunk.js.map