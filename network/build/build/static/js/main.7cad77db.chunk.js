(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),i=(n(48),n.p,n(49),n(9)),o=n(23),u=n(41),l=n(42),j=n(7),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",m="LOGOUT_FAIL",f="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="POST_SUCCESS",g="POST_FAIL",N={isAuthenticated:null,username:"",email:""},y=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0,username:c});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1,username:""});case v:case g:case p:case O:case m:default:return e}}}),w=[l.a],_=Object(o.createStore)(y,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,w))),k=n(15),S=n(4),A=n(20),C=n(10),E=n(17),T=n.n(E),F=n(5),I=n.n(F),L=n(16),R=n(14),U=n.n(R),q=function(e){return function(){var t=Object(L.a)(I.a.mark((function t(n){var c,a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":T.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,U.a.post("".concat("http://localhost:8000","/network/create"),a,c);case 5:t.sent,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(2);case 10:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()},P=n(0),G=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(L.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:a(T.a.get("csrftoken")),console.log("successfully fetched csrf"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),console.log(n)}),[]),Object(P.jsx)("input",{type:"text",name:"csrfmiddlewaretoken",value:n})};var J=Object(i.b)(null,{create:q})((function(){var e=Object(c.useState)({content:""}),t=Object(C.a)(e,2),n=t[0],a=t[1],r=n.content;return Object(P.jsx)("div",{className:"compose_container",children:Object(P.jsxs)("div",{className:"compose_section",children:[Object(P.jsxs)("div",{className:"image_circle",children:[Object(P.jsx)("div",{className:"inner_image"}),Object(P.jsx)("div",{className:"inner_image2"})]}),Object(P.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),q(r),console.log(r)}(e)},children:[Object(P.jsx)(G,{}),Object(P.jsx)("input",{type:"text",onChange:function(e){return function(e){return a(Object(j.a)(Object(j.a)({},n),{},Object(A.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:r,placeholder:"What's on your mind?",required:!0}),Object(P.jsx)("input",{type:"submit"})]})]})})})),D=n(21),H=n(22);var X=function(e){var t=e.body,n=e.username,c=e.likes;return Object(P.jsxs)("div",{className:"post_container",children:[Object(P.jsxs)("div",{className:"profile_section",children:[Object(P.jsxs)("div",{className:"image_circle",children:[Object(P.jsx)("div",{className:"inner_image"}),Object(P.jsx)("div",{className:"inner_image2"})]}),Object(P.jsx)("div",{className:"username_post",children:Object(P.jsx)("p",{children:n})})]}),Object(P.jsx)("div",{className:"break"}),Object(P.jsxs)("div",{className:"body_section",children:[Object(P.jsx)("span",{children:t}),Object(P.jsxs)("span",{children:[Object(P.jsx)(D.a,{icon:H.b,color:"grey"})," ",c]})]})]})};var B=function(){return Object(P.jsxs)("div",{className:"load",children:[Object(P.jsx)("p",{children:" loading "}),Object(P.jsx)(D.a,{className:"load_spin",icon:H.c})]})};var K=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(C.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(C.a)(i,2),u=o[0],l=o[1],j=function(){var e=Object(L.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get("".concat("http://localhost:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var e=Object(L.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,l(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),s(!0)}),[]);var d=u.map((function(e,t){return Object(P.jsx)(X,{body:e.content,username:e.username,likes:e.likes})}));console.log(u);var p=Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J,{}),Object(P.jsx)("div",{className:"break_out"})]});return Object(P.jsxs)("div",{className:"postBox_container",children:[t&&p,r?d:Object(P.jsx)(B,{})]})}));var M=function(e){return e.open,Object(P.jsxs)("div",{className:"notify_box",children:[Object(P.jsx)("div",{className:"notification_item",children:Object(P.jsx)("p",{children:"notification"})}),Object(P.jsx)("div",{className:"notification_item",children:Object(P.jsx)("p",{children:"notification"})}),Object(P.jsx)("div",{className:"notification_item",children:Object(P.jsx)("p",{children:"notification"})}),Object(P.jsx)("div",{className:"notification_item",children:Object(P.jsx)("p",{children:"notification"})})]})},W=n(79);var z=function(e){e.children;var t=Object(c.useState)(!1),n=Object(C.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(P.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(P.jsx)("div",{className:"bell",children:Object(P.jsx)(D.a,{icon:H.a})}),Object(P.jsx)(W.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(P.jsx)("div",{ref:i,children:Object(P.jsx)(M,{})})})]})};var Q=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(L.a)(I.a.mark((function e(t){var n,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":T.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,U.a.post("".concat("http://localhost:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:m})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:m});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(P.jsxs)("div",{className:"navbar_wrapper",children:[Object(P.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(P.jsx)(k.c,{exact:!0,to:"/follow",children:"Follow"}),Object(P.jsx)(k.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(P.jsx)(z,{children:Object(P.jsx)(M,{})})]}),a=Object(P.jsxs)("div",{className:"navbar_wrapper",children:[Object(P.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(P.jsx)(k.c,{exact:!0,to:"/login",children:"Log In"}),Object(P.jsx)(k.c,{exact:!0,to:"/register",children:"Register"}),Object(P.jsx)(z,{children:Object(P.jsx)(M,{})})]});return Object(P.jsx)("div",{className:"navbar_container",children:n?c:a})}));var V=function(){return Object(P.jsx)("div",{className:"footer",children:Object(P.jsx)("span",{children:"Footer"})})},Y=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(L.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,U.a.get("http://localhost:8000/network/authenticated",n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:f,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.children,n=e.checkAuthenticated;return Object(c.useEffect)((function(){n()}),[]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Q,{}),Object(P.jsx)("header",{className:"App-header",children:t})]})})),Z=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(K,{})})},$=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(L.a)(I.a.mark((function n(c){var a,r,s;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":T.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,U.a.post("http://localhost:8000/network/login",r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):c({type:b,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(C.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(A.a)({},e.target.name,e.target.value)))};return a?Object(P.jsx)(S.a,{to:"/"}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h1",{children:"Log Into your Account."}),Object(P.jsx)("div",{className:"form_container",children:Object(P.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(P.jsx)(G,{}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Username"}),Object(P.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Password"}),Object(P.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(P.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ee=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(L.a)(I.a.mark((function a(r){var s,i,o;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":T.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,U.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(C.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(C.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,m=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(A.a)({},e.target.name,e.target.value)))};return l?Object(P.jsx)(S.a,{to:"/login"}):n?Object(P.jsx)(S.a,{to:"/"}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h1",{children:"Register for an Account."}),Object(P.jsx)("div",{className:"form_container",children:Object(P.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(P.jsx)(G,{}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Username"}),Object(P.jsx)("input",{type:"text",onChange:function(e){return m(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Email"}),Object(P.jsx)("input",{type:"email",onChange:function(e){return m(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Password:"}),Object(P.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(P.jsxs)("div",{className:"input_field",children:[Object(P.jsx)("label",{children:"Re-enter password:"}),Object(P.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(P.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var te=function(){return Object(P.jsx)(i.a,{store:_,children:Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(k.a,{children:Object(P.jsxs)(Y,{children:[Object(P.jsx)(S.b,{exact:!0,path:"/",component:Z}),Object(P.jsx)(S.b,{exact:!0,path:"/register",component:ee}),Object(P.jsx)(S.b,{exact:!0,path:"/login",component:$})]})}),Object(P.jsx)(V,{})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(te,{})}),document.getElementById("root")),ne()}},[[77,1,2]]]);
//# sourceMappingURL=main.7cad77db.chunk.js.map