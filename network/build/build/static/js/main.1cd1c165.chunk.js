(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),s=n.n(r),i=(n(49),n.p,n(50),n(12)),o=n(23),u=n(41),l=n(42),j=n(5),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",f="LOGOUT_FAIL",m="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="USER_SUCCESS",g="USER_FAIL",y="POST_SUCCESS",N="POST_FAIL",_={isAuthenticated:null},w={isAuthenticated:null,username:"",email:""},k=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case y:case N:case p:case O:case f:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case v:return Object(j.a)(Object(j.a)({},e),{},{id:c.id,username:c.username,email:c.email});case g:return Object(j.a)(Object(j.a)({},e),{},{id:"",username:"",email:""});default:return e}}}),S=[l.a],A=Object(o.createStore)(k,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,S))),C=n(17),E=n(6),T=n(20),F=n(9),R=n(43),I=n(15),U=n.n(I),L=n(4),P=n.n(L),q=n(11),J=n(10),G=n.n(J),D=n(0),X=function(){var e=Object(c.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(q.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("".concat("http://127.0.0.1:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(D.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})};var H=Object(i.b)(null,{create:function(e){return function(){var t=Object(q.a)(P.a.mark((function t(n){var c,a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":U.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,G.a.post("".concat("http://127.0.0.1:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:N})):n({type:y}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:N});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=e.createdPost,a=Object(c.useState)({content:""}),r=Object(F.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(F.a)(o,2),l=(u[0],u[1],s.content);return Object(D.jsx)("div",{className:"compose_container",children:Object(D.jsxs)("div",{className:"compose_section",children:[Object(D.jsxs)("div",{className:"image_circle",children:[Object(D.jsx)("div",{className:"inner_image"}),Object(D.jsx)("div",{className:"inner_image2"})]}),Object(D.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(l),console.log(s),n(),Object(R.a)("content"),l=""}(e)},children:[Object(D.jsx)(X,{}),Object(D.jsx)("input",{type:"text",onChange:function(e){return function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(T.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:l,placeholder:"What's on your mind?",required:!0})]})]})})})),B=n(21),M=n(22);var W=function(e){var t=e.body,n=e.username,c=e.likes,a=e.timestamp;return Object(D.jsxs)("div",{className:"post_container",children:[Object(D.jsxs)("div",{className:"profile_section",children:[Object(D.jsxs)("div",{className:"image_circle",children:[Object(D.jsx)("div",{className:"inner_image"}),Object(D.jsx)("div",{className:"inner_image2"})]}),Object(D.jsxs)("div",{className:"header_post",children:[Object(D.jsx)("div",{className:"username_post",children:Object(D.jsx)("p",{children:n})}),Object(D.jsx)("div",{className:"date_post",children:Object(D.jsx)("p",{children:a})})]})]}),Object(D.jsx)("div",{className:"break"}),Object(D.jsxs)("div",{className:"body_section",children:[Object(D.jsx)("span",{children:t}),Object(D.jsxs)("div",{className:"like_container",children:[Object(D.jsx)("span",{children:Object(D.jsx)(B.a,{icon:M.b,color:"grey"})}),Object(D.jsx)("span",{children:c})]})]})]})};var K=function(){return Object(D.jsxs)("div",{className:"load",children:[Object(D.jsx)("p",{children:" loading "}),Object(D.jsx)(B.a,{className:"load_spin",icon:M.c})]})};var z=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(F.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(F.a)(i,2),u=o[0],l=o[1],j=Object(c.useState)(!1),d=Object(F.a)(j,2),p=(d[0],d[1]),b=function(){var e=Object(q.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("".concat("http://127.0.0.1:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(q.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,l(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O(),s(!0)}),[]);var h=u.map((function(e,t){return Object(D.jsx)(W,{body:e.content,username:e.creator,likes:e.likes,timestamp:e.timestamp})}));console.log(u);var f=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(H,{createdPost:function(){p(!0),O(),p(!1)}}),Object(D.jsx)("div",{className:"break_out"})]});return Object(D.jsxs)("div",{className:"postBox_container",children:[t&&f,r?h:Object(D.jsx)(K,{})]})}));var Q=function(e){return e.open,Object(D.jsxs)("div",{className:"notify_box",children:[Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})})]})},V=n(80);var Y=function(e){e.children;var t=Object(c.useState)(!1),n=Object(F.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(D.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(D.jsx)("div",{className:"bell",children:Object(D.jsx)(B.a,{icon:M.a})}),Object(D.jsx)(V.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(D.jsx)("div",{ref:i,children:Object(D.jsx)(Q,{})})})]})},Z=function(e){return function(){var t=Object(q.a)(P.a.mark((function t(n){var c,a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":U.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,G.a.post("".concat("http://127.0.0.1:8000","/network/user"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:g})):n({type:v,payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:g});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()};var $=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(q.a)(P.a.mark((function e(t){var n,c,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":U.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,G.a.post("".concat("http://127.0.0.1:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:f})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:f});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(D.jsxs)("div",{className:"navbar_wrapper",children:[Object(D.jsx)(C.b,{exact:!0,to:"/",children:"Home"}),Object(D.jsx)(C.c,{exact:!0,to:"/follow",children:"Follow"}),Object(D.jsx)(C.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(D.jsx)(Y,{children:Object(D.jsx)(Q,{})})]}),a=Object(D.jsxs)("div",{className:"navbar_wrapper",children:[Object(D.jsx)(C.b,{exact:!0,to:"/",children:"Home"}),Object(D.jsx)(C.c,{exact:!0,to:"/login",children:"Log In"}),Object(D.jsx)(C.c,{exact:!0,to:"/register",children:"Register"}),Object(D.jsx)(Y,{children:Object(D.jsx)(Q,{})})]});return Object(D.jsx)("div",{className:"navbar_container",children:n?c:a})}));var ee=function(){return Object(D.jsx)("div",{className:"footer",children:Object(D.jsx)("span",{children:"Footer"})})},te=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(q.a)(P.a.mark((function e(t){var n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,G.a.get("".concat("http://127.0.0.1:8000","/network/authenticated"),n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:m,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_user:Z})((function(e){var t=e.children,n=e.get_user,a=e.checkAuthenticated;return Object(c.useEffect)((function(){a(),n()}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($,{}),Object(D.jsx)("header",{className:"App-header",children:t})]})})),ne=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(z,{})})},ce=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(q.a)(P.a.mark((function n(c){var a,r,s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":U.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,G.a.post("".concat("http://127.0.0.1:8000","/network/login"),r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):(c({type:b}),c(Z())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(F.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(T.a)({},e.target.name,e.target.value)))};return a?Object(D.jsx)(E.a,{to:"/"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"Log Into your Account."}),Object(D.jsx)("div",{className:"form_container",children:Object(D.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(D.jsx)(X,{}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Username"}),Object(D.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(D.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ae=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(q.a)(P.a.mark((function a(r){var s,i,o;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":U.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,G.a.post("".concat("http://127.0.0.1:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(F.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(F.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,f=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(T.a)({},e.target.name,e.target.value)))};return l?Object(D.jsx)(E.a,{to:"/login"}):n?Object(D.jsx)(E.a,{to:"/"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"Register for an Account."}),Object(D.jsx)("div",{className:"form_container",children:Object(D.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(D.jsx)(X,{}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Username"}),Object(D.jsx)("input",{type:"text",onChange:function(e){return f(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Email"}),Object(D.jsx)("input",{type:"email",onChange:function(e){return f(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Password:"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Re-enter password:"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(D.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var re=function(){return Object(D.jsx)(i.a,{store:A,children:Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(C.a,{children:Object(D.jsxs)(te,{children:[Object(D.jsx)(E.b,{exact:!0,path:"/",component:ne}),Object(D.jsx)(E.b,{exact:!0,path:"/register",component:ae}),Object(D.jsx)(E.b,{exact:!0,path:"/login",component:ce})]})}),Object(D.jsx)(ee,{})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(re,{})}),document.getElementById("root")),se()}},[[78,1,2]]]);
//# sourceMappingURL=main.1cd1c165.chunk.js.map