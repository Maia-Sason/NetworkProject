(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),i=(n(49),n.p,n(50),n(10)),o=n(23),u=n(41),l=n(42),j=n(7),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",m="LOGOUT_FAIL",f="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="POST_SUCCESS",g="POST_FAIL",y={isAuthenticated:null,username:"",email:""},N=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,username:c});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,username:""});case v:case g:case p:case O:case m:default:return e}}}),_=[l.a],w=Object(o.createStore)(N,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,_))),k=n(16),S=n(5),A=n(20),C=n(9),T=n(43),E=n(17),F=n.n(E),I=n(4),L=n.n(I),R=n(13),U=n(12),P=n.n(U),q=n(0),G=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(R.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(q.jsx)("input",{type:"text",name:"csrfmiddlewaretoken",value:n})};var J=Object(i.b)(null,{create:function(e){return function(){var t=Object(R.a)(L.a.mark((function t(n){var c,a,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":F.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,P.a.post("".concat("http://localhost:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:g})):n({type:v}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:g});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=e.createdPost,a=Object(c.useState)({content:""}),r=Object(C.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(C.a)(o,2),l=(u[0],u[1],s.content);return Object(q.jsx)("div",{className:"compose_container",children:Object(q.jsxs)("div",{className:"compose_section",children:[Object(q.jsxs)("div",{className:"image_circle",children:[Object(q.jsx)("div",{className:"inner_image"}),Object(q.jsx)("div",{className:"inner_image2"})]}),Object(q.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(l),console.log(s),n(),Object(T.a)("content"),l=""}(e)},children:[Object(q.jsx)(G,{}),Object(q.jsx)("input",{type:"text",onChange:function(e){return function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:l,placeholder:"What's on your mind?",required:!0}),Object(q.jsx)("input",{type:"submit"})]})]})})})),D=n(21),H=n(22);var X=function(e){var t=e.body,n=e.username,c=e.likes;return Object(q.jsxs)("div",{className:"post_container",children:[Object(q.jsxs)("div",{className:"profile_section",children:[Object(q.jsxs)("div",{className:"image_circle",children:[Object(q.jsx)("div",{className:"inner_image"}),Object(q.jsx)("div",{className:"inner_image2"})]}),Object(q.jsx)("div",{className:"username_post",children:Object(q.jsx)("p",{children:n})})]}),Object(q.jsx)("div",{className:"break"}),Object(q.jsxs)("div",{className:"body_section",children:[Object(q.jsx)("span",{children:t}),Object(q.jsxs)("span",{children:[Object(q.jsx)(D.a,{icon:H.b,color:"grey"})," ",c]})]})]})};var B=function(){return Object(q.jsxs)("div",{className:"load",children:[Object(q.jsx)("p",{children:" loading "}),Object(q.jsx)(D.a,{className:"load_spin",icon:H.c})]})};var K=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(C.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(C.a)(i,2),u=o[0],l=o[1],j=Object(c.useState)(!1),d=Object(C.a)(j,2),p=(d[0],d[1]),b=function(){var e=Object(R.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat("http://localhost:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(R.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,l(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O(),s(!0)}),[]);var h=u.map((function(e,t){return Object(q.jsx)(X,{body:e.content,username:e.username,likes:e.likes})}));console.log(u);var m=Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(J,{createdPost:function(){p(!0),O(),p(!1)}}),Object(q.jsx)("div",{className:"break_out"})]});return Object(q.jsxs)("div",{className:"postBox_container",children:[t&&m,r?h:Object(q.jsx)(B,{})]})}));var M=function(e){return e.open,Object(q.jsxs)("div",{className:"notify_box",children:[Object(q.jsx)("div",{className:"notification_item",children:Object(q.jsx)("p",{children:"notification"})}),Object(q.jsx)("div",{className:"notification_item",children:Object(q.jsx)("p",{children:"notification"})}),Object(q.jsx)("div",{className:"notification_item",children:Object(q.jsx)("p",{children:"notification"})}),Object(q.jsx)("div",{className:"notification_item",children:Object(q.jsx)("p",{children:"notification"})})]})},W=n(80);var z=function(e){e.children;var t=Object(c.useState)(!1),n=Object(C.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(q.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(q.jsx)("div",{className:"bell",children:Object(q.jsx)(D.a,{icon:H.a})}),Object(q.jsx)(W.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(q.jsx)("div",{ref:i,children:Object(q.jsx)(M,{})})})]})};var Q=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(R.a)(L.a.mark((function e(t){var n,c,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":F.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,P.a.post("".concat("http://localhost:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:m})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:m});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(q.jsxs)("div",{className:"navbar_wrapper",children:[Object(q.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(q.jsx)(k.c,{exact:!0,to:"/follow",children:"Follow"}),Object(q.jsx)(k.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(q.jsx)(z,{children:Object(q.jsx)(M,{})})]}),a=Object(q.jsxs)("div",{className:"navbar_wrapper",children:[Object(q.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(q.jsx)(k.c,{exact:!0,to:"/login",children:"Log In"}),Object(q.jsx)(k.c,{exact:!0,to:"/register",children:"Register"}),Object(q.jsx)(z,{children:Object(q.jsx)(M,{})})]});return Object(q.jsx)("div",{className:"navbar_container",children:n?c:a})}));var V=function(){return Object(q.jsx)("div",{className:"footer",children:Object(q.jsx)("span",{children:"Footer"})})},Y=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(R.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,P.a.get("http://localhost:8000/network/authenticated",n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:f,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.children,n=e.checkAuthenticated;return Object(c.useEffect)((function(){n()}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{}),Object(q.jsx)("header",{className:"App-header",children:t})]})})),Z=function(){return Object(q.jsx)("div",{children:Object(q.jsx)(K,{})})},$=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(R.a)(L.a.mark((function n(c){var a,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",mode:"same-origin",HTTP_X_CSRFTOKEN:F.a.get("csrftoken"),headers:{Accept:"application/json","Content-Type":"application/json"}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,P.a.post("http://localhost:8000/network/login",r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):c({type:b,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(C.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(A.a)({},e.target.name,e.target.value)))};return a?Object(q.jsx)(S.a,{to:"/"}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h1",{children:"Log Into your Account."}),Object(q.jsx)("div",{className:"form_container",children:Object(q.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(q.jsx)(G,{}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Username"}),Object(q.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Password"}),Object(q.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(q.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ee=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(R.a)(L.a.mark((function a(r){var s,i,o;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":F.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,P.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(C.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(C.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,m=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},e.target.name,e.target.value)))};return l?Object(q.jsx)(S.a,{to:"/login"}):n?Object(q.jsx)(S.a,{to:"/"}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h1",{children:"Register for an Account."}),Object(q.jsx)("div",{className:"form_container",children:Object(q.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(q.jsx)(G,{}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Username"}),Object(q.jsx)("input",{type:"text",onChange:function(e){return m(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Email"}),Object(q.jsx)("input",{type:"email",onChange:function(e){return m(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Password:"}),Object(q.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(q.jsxs)("div",{className:"input_field",children:[Object(q.jsx)("label",{children:"Re-enter password:"}),Object(q.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(q.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var te=function(){return Object(q.jsx)(i.a,{store:w,children:Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(k.a,{children:Object(q.jsxs)(Y,{children:[Object(q.jsx)(S.b,{exact:!0,path:"/",component:Z}),Object(q.jsx)(S.b,{exact:!0,path:"/register",component:ee}),Object(q.jsx)(S.b,{exact:!0,path:"/login",component:$})]})}),Object(q.jsx)(V,{})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(te,{})}),document.getElementById("root")),ne()}},[[78,1,2]]]);
//# sourceMappingURL=main.f7a6a36c.chunk.js.map