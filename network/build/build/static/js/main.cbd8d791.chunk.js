(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),i=(n(48),n.p,n(49),n(11)),o=n(23),u=n(41),l=n(42),j=n(5),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",f="LOGOUT_FAIL",m="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="USER_SUCCESS",g="USER_FAIL",y="POST_SUCCESS",k="POST_FAIL",N={isAuthenticated:null},_={isAuthenticated:null,username:"",email:""},w=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case y:case k:case p:case O:case f:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case v:return Object(j.a)(Object(j.a)({},e),{},{id:c.id,username:c.username,email:c.email});case g:return Object(j.a)(Object(j.a)({},e),{},{id:"",username:"",email:""});default:return e}}}),S=[l.a],A=Object(o.createStore)(w,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,S))),C=n(17),E=n(7),T=n(18),F=n(6),U=n(14),R=n.n(U),I=n(3),L=n.n(I),P=n(9),q=n(12),J=n.n(q),D=n(0),G=function(){var e=Object(c.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(P.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://127.0.0.1:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(D.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})};var X=Object(i.b)(null,{create:function(e){return function(){var t=Object(P.a)(L.a.mark((function t(n){var c,a,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,J.a.post("".concat("http://127.0.0.1:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:k})):n({type:y}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:k});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=e.createdPost,a=Object(c.useState)({content:""}),r=Object(F.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(F.a)(o,2),l=(u[0],u[1],s.content);return Object(D.jsx)("div",{className:"compose_container",children:Object(D.jsxs)("div",{className:"compose_section",children:[Object(D.jsxs)("div",{className:"image_circle",children:[Object(D.jsx)("div",{className:"inner_image"}),Object(D.jsx)("div",{className:"inner_image2"})]}),Object(D.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(l),console.log(s),n(),i({content:""})}(e)},children:[Object(D.jsx)(G,{}),Object(D.jsx)("input",{type:"text",onChange:function(e){return function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(T.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:l,placeholder:"What's on your mind?",required:!0})]})]})})})),H=n(21),B=n(22);var M=Object(i.b)((function(e){return{sessionUser:e.user,isAuthenticated:e.auth.isAuthenticated}}),{update:function(e,t){return function(){var n=Object(P.a)(L.a.mark((function n(c){var a,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},r=JSON.stringify({content:e}),s=t,n.prev=3,n.next=6,J.a.put("".concat("http://127.0.0.1:8000","/network/create/").concat(s),r,a);case 6:n.sent,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(3);case 11:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.body,n=e.id,a=e.username,r=e.likes,s=e.timestamp,i=e.sessionUser,o=e.update,u=e.isAuthenticated,l=Object(c.useState)(!1),d=Object(F.a)(l,2),p=d[0],b=d[1],O=Object(c.useState)(!1),h=Object(F.a)(O,2),f=h[0],m=h[1],x=Object(c.useState)(t),v=Object(F.a)(x,2),g=v[0],y=v[1],k=Object(c.useState)({content:t}),N=Object(F.a)(k,2),_=N[0],w=N[1],S=_.content,A=Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("form",{onSubmit:function(e){return function(e){console.log(_),e.preventDefault(),o(S,n),y(S),m(!f)}(e)},children:Object(D.jsx)("input",{name:"content",className:"registration_input",value:S,onChange:function(e){return function(e){return w(Object(j.a)(Object(j.a)({},_),{},Object(T.a)({},e.target.name,e.target.value)))}(e)}})})});return Object(D.jsxs)("div",{className:"post_container",children:[Object(D.jsxs)("div",{className:"profile_section",children:[Object(D.jsxs)("div",{className:"image_circle",children:[Object(D.jsx)("div",{className:"inner_image"}),Object(D.jsx)("div",{className:"inner_image2"})]}),Object(D.jsxs)("div",{className:"header_post",children:[Object(D.jsx)("div",{className:"username_post",children:Object(D.jsx)("p",{children:a})}),Object(D.jsx)("div",{className:"date_post",children:Object(D.jsx)("p",{children:s})})]})]}),Object(D.jsx)("div",{className:"break"}),Object(D.jsxs)("div",{className:"body_section",children:[f?A:Object(D.jsx)("span",{children:g}),Object(D.jsxs)("div",{className:"like_container",children:[Object(D.jsxs)("span",{children:[" ",u?Object(D.jsx)(H.a,{className:"like_auth"+(p&&"like_auth_active"),onClick:function(e){b(!p)},icon:B.b,color:"grey"}):Object(D.jsx)(H.a,{icon:B.b,color:"grey"})]}),Object(D.jsx)("span",{children:p?r+1:r}),i.username===a&&Object(D.jsxs)("button",{onClick:function(e){return m(!f),void console.log(n)},value:"edit",children:[" ",f?"X":"Edit"]})]})]})]})}));var W=function(){return Object(D.jsxs)("div",{className:"load",children:[Object(D.jsx)("p",{children:" loading "}),Object(D.jsx)(H.a,{className:"load_spin",icon:B.c})]})};var K=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=e.loaded,a=e.posts,r=e.getPosts,s=Object(c.useState)(!1),i=Object(F.a)(s,2),o=(i[0],i[1]),u=a.map((function(e,t){return Object(D.jsx)(M,{body:e.content,username:e.creator,likes:e.likes,timestamp:e.timestamp,id:e.id})})),l=Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(X,{createdPost:function(){o(!0),r(),o(!1)}}),Object(D.jsx)("div",{className:"break_out"})]});return Object(D.jsxs)("div",{className:"postBox_container",children:[t&&l,n?u:Object(D.jsx)(W,{})]})}));var z=function(e){return e.open,Object(D.jsxs)("div",{className:"notify_box",children:[Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})}),Object(D.jsx)("div",{className:"notification_item",children:Object(D.jsx)("p",{children:"notification"})})]})},Q=n(79);var V=function(e){e.children;var t=Object(c.useState)(!1),n=Object(F.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(D.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(D.jsx)("div",{className:"bell",children:Object(D.jsx)(H.a,{icon:B.a})}),Object(D.jsx)(Q.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(D.jsx)("div",{ref:i,children:Object(D.jsx)(z,{})})})]})},Y=function(e){return function(){var e=Object(P.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,J.a.get("".concat("http://127.0.0.1:8000","/network/user"),n);case 4:(c=e.sent).data.error?(console.error(c.data.error),t({type:g})):t({type:v,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};var Z=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(P.a)(L.a.mark((function e(t){var n,c,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":R.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,J.a.post("".concat("http://127.0.0.1:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:f})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:f});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(D.jsxs)("div",{className:"navbar_wrapper",children:[Object(D.jsx)(C.b,{exact:!0,to:"/",children:"Home"}),Object(D.jsx)(C.c,{exact:!0,to:"/follow",children:"Follow"}),Object(D.jsx)(C.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(D.jsx)(V,{children:Object(D.jsx)(z,{})})]}),a=Object(D.jsxs)("div",{className:"navbar_wrapper",children:[Object(D.jsx)(C.b,{exact:!0,to:"/",children:"Home"}),Object(D.jsx)(C.c,{exact:!0,to:"/login",children:"Log In"}),Object(D.jsx)(C.c,{exact:!0,to:"/register",children:"Register"}),Object(D.jsx)(V,{children:Object(D.jsx)(z,{})})]});return Object(D.jsx)("div",{className:"navbar_container",children:n?c:a})}));var $=function(){return Object(D.jsx)("div",{className:"footer",children:Object(D.jsx)("span",{children:"Footer"})})},ee=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(P.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,J.a.get("".concat("http://127.0.0.1:8000","/network/authenticated"),n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:m,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_user:Y})((function(e){var t=e.children,n=e.get_user,a=e.checkAuthenticated;return Object(c.useEffect)((function(){a(),n()}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Z,{}),Object(D.jsx)("header",{className:"App-header",children:t})]})})),te=function(){var e=Object(c.useState)(!1),t=Object(F.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(F.a)(r,2),i=s[0],o=s[1],u=function(){var e=Object(P.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://127.0.0.1:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,o(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l(),a(!0)}),[]),Object(D.jsx)("div",{children:Object(D.jsx)(K,{getPosts:l,posts:i,loaded:n})})},ne=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(P.a)(L.a.mark((function n(c){var a,r,s;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,J.a.post("".concat("http://127.0.0.1:8000","/network/login"),r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):(c({type:b}),c(Y())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(F.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(T.a)({},e.target.name,e.target.value)))};return a?Object(D.jsx)(E.a,{to:"/"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"Log Into your Account."}),Object(D.jsx)("div",{className:"form_container",children:Object(D.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(D.jsx)(G,{}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Username"}),Object(D.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(D.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ce=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(P.a)(L.a.mark((function a(r){var s,i,o;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,J.a.post("".concat("http://127.0.0.1:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(F.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(F.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,f=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(T.a)({},e.target.name,e.target.value)))};return l?Object(D.jsx)(E.a,{to:"/login"}):n?Object(D.jsx)(E.a,{to:"/"}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{children:"Register for an Account."}),Object(D.jsx)("div",{className:"form_container",children:Object(D.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(D.jsx)(G,{}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Username"}),Object(D.jsx)("input",{type:"text",onChange:function(e){return f(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Email"}),Object(D.jsx)("input",{type:"email",onChange:function(e){return f(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Password:"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(D.jsxs)("div",{className:"input_field",children:[Object(D.jsx)("label",{children:"Re-enter password:"}),Object(D.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(D.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var ae=function(){return Object(D.jsx)(i.a,{store:A,children:Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(C.a,{children:Object(D.jsxs)(ee,{children:[Object(D.jsx)(E.b,{exact:!0,path:"/",component:te}),Object(D.jsx)(E.b,{exact:!0,path:"/register",component:ce}),Object(D.jsx)(E.b,{exact:!0,path:"/login",component:ne})]})}),Object(D.jsx)($,{})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(ae,{})}),document.getElementById("root")),re()}},[[77,1,2]]]);
//# sourceMappingURL=main.cbd8d791.chunk.js.map