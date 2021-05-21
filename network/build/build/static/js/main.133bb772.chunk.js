(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(22),s=n.n(r),i=(n(48),n.p,n(49),n(12)),o=n(23),u=n(41),l=n(42),j=n(3),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",f="LOGOUT_FAIL",m="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="USER_SUCCESS",g="USER_FAIL",k="POST_SUCCESS",y="POST_FAIL",_="UPDATE_FAIL",N="UNLIKE_SUCCESS",S="LIKE_SUCCESS",w="LIKE_FAIL",C={isAuthenticated:null},A={isAuthenticated:null,username:"",email:"",likes:""},E=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case k:case y:case p:case O:case f:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case v:return Object(j.a)(Object(j.a)({},e),{},{id:c.id,username:c.username,email:c.email,likes:c.likes});case g:return Object(j.a)(Object(j.a)({},e),{},{id:"",username:"",email:"",likes:""});case S:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.concat(c)});case N:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.filter((function(e){return e!==c}))});case w:default:return e}}}),T=[l.a],F=Object(o.createStore)(E,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,T))),L=n(17),U=n(7),I=n(18),R=n(6),P=n(14),D=n.n(P),J=n(4),q=n.n(J),X=n(10),G=n(9),H=n.n(G),K=n(0),B=function(){var e=Object(c.useState)(""),t=Object(R.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(X.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("http://127.0.0.1:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(K.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})};var M=Object(i.b)(null,{create:function(e){return function(){var t=Object(X.a)(q.a.mark((function t(n){var c,a,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:y})):n({type:k}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:y});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=Object(c.useState)({content:""}),a=Object(R.a)(n,2),r=a[0],s=a[1],i=r.content;return Object(K.jsx)("div",{className:"compose_container",children:Object(K.jsxs)("div",{className:"compose_section",children:[Object(K.jsxs)("div",{className:"image_circle",children:[Object(K.jsx)("div",{className:"inner_image"}),Object(K.jsx)("div",{className:"inner_image2"})]}),Object(K.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(i),s({content:""})}(e)},children:[Object(K.jsx)(B,{}),Object(K.jsx)("span",{role:"textbox",contentEditable:!0,onChange:function(e){return function(e){return s(Object(j.a)(Object(j.a)({},r),{},Object(I.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:i,placeholder:"What's on your mind?",required:!0}),Object(K.jsx)("span",{role:"textbox",contentEditable:!0})]})]})})})),W=n(19),z=n(20);var Q=Object(i.b)((function(e){return{sessionUser:e.user,sessionLikes:e.user.liking,isAuthenticated:e.auth.isAuthenticated}}),{update:function(e,t){return function(){var n=Object(X.a)(q.a.mark((function n(c){var a,r,s,i;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},r=JSON.stringify({content:e}),s=t,n.prev=3,n.next=6,H.a.put("".concat("http://127.0.0.1:8000","/network/create/").concat(s),r,a);case 6:(i=n.sent).data.error?(console.error(i.data.error),c({type:_})):c({type:"UPDATE_SUCCESS"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),c({type:_});case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}()},like:function(e){return function(){var t=Object(X.a)(q.a.mark((function t(n){var c,a,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},a=JSON.stringify({withCredentials:!0}),t.prev=2,t.next=5,H.a.put("".concat("http://127.0.0.1:8000","/network/like/").concat(e),a,c);case 5:"liked"===(r=t.sent).data.isLiked?(console.error(r.data.isLiked),n({type:S,payload:e})):"unliked"===r.data.isLiked?n({type:N,payload:e}):n({type:w}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:w});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.body,n=e.id,a=e.username,r=e.likes,s=e.timestamp,i=e.sessionUser,o=(e.sessionLikes,e.update),u=e.isAuthenticated,l=e.like,d=Object(c.useState)(!1),p=Object(R.a)(d,2),b=p[0],O=p[1],h=Object(c.useState)(!1),f=Object(R.a)(h,2),m=f[0],x=f[1],v=Object(c.useState)(!1),g=Object(R.a)(v,2),k=g[0],y=g[1],_=Object(c.useState)(t),N=Object(R.a)(_,2),S=N[0],w=N[1],C=Object(c.useState)({content:t}),A=Object(R.a)(C,2),E=A[0],T=A[1];Object(c.useEffect)((function(){void 0!==i.likes&&x(i.likes.includes(n))}),[]);var F=E.content,L=function(e){O(!b),l(n)},U=Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("form",{onSubmit:function(e){return function(e){console.log(E),e.preventDefault(),o(F,n),w(F),y(!k)}(e)},children:Object(K.jsx)("input",{name:"content",className:"registration_input",value:F,onChange:function(e){return function(e){return T(Object(j.a)(Object(j.a)({},E),{},Object(I.a)({},e.target.name,e.target.value)))}(e)}})})}),P=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("span",{children:Object(K.jsx)(W.a,{className:"like_auth ".concat(b?"":"like_auth_active"),onClick:function(e){return L()},icon:z.b,color:"grey"})}),Object(K.jsx)("span",{children:b?r-1:r})]}),D=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("span",{children:Object(K.jsx)(W.a,{icon:z.b,color:"grey"})}),Object(K.jsx)("span",{children:r})]}),J=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("span",{children:Object(K.jsx)(W.a,{className:"like_auth ".concat(b&&"like_auth_active"),onClick:function(e){return L()},icon:z.b,color:"grey"})}),Object(K.jsx)("span",{children:b?r+1:r})]});return Object(K.jsxs)("div",{className:"post_container",children:[Object(K.jsxs)("div",{className:"profile_section",children:[Object(K.jsxs)("div",{className:"image_circle",children:[Object(K.jsx)("div",{className:"inner_image"}),Object(K.jsx)("div",{className:"inner_image2"})]}),Object(K.jsxs)("div",{className:"header_post",children:[Object(K.jsx)("div",{className:"username_post",children:Object(K.jsx)("p",{children:a})}),Object(K.jsx)("div",{className:"date_post",children:Object(K.jsx)("p",{children:s})})]})]}),Object(K.jsx)("div",{className:"break"}),Object(K.jsxs)("div",{className:"body_section",children:[k?U:Object(K.jsx)("span",{children:S}),Object(K.jsxs)("div",{className:"like_container",children:[u?m?P:J:D,i.username===a&&Object(K.jsxs)("button",{onClick:function(e){y(!k)},value:"edit",children:[" ",k?"X":"Edit"]})]})]})]})}));var V=function(){return Object(K.jsxs)("div",{className:"load",children:[Object(K.jsx)("p",{children:" loading "}),Object(K.jsx)(W.a,{className:"load_spin",icon:z.c})]})};var Y=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=e.loaded,c=e.posts,a=(e.getPosts,c.map((function(e,t){return Object(K.jsx)(Q,{body:e.content,username:e.creator,likes:e.likes,timestamp:e.timestamp,id:e.id})}))),r=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(M,{}),Object(K.jsx)("div",{className:"break_out"})]});return Object(K.jsxs)("div",{className:"postBox_container",children:[t&&r,n?a:Object(K.jsx)(V,{})]})}));var Z=function(e){return e.open,Object(K.jsxs)("div",{className:"notify_box",children:[Object(K.jsx)("div",{className:"notification_item",children:Object(K.jsx)("p",{children:"notification"})}),Object(K.jsx)("div",{className:"notification_item",children:Object(K.jsx)("p",{children:"notification"})}),Object(K.jsx)("div",{className:"notification_item",children:Object(K.jsx)("p",{children:"notification"})}),Object(K.jsx)("div",{className:"notification_item",children:Object(K.jsx)("p",{children:"notification"})})]})},$=n(79);var ee=function(e){e.children;var t=Object(c.useState)(!1),n=Object(R.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(K.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(K.jsx)("div",{className:"bell",children:Object(K.jsx)(W.a,{icon:z.a})}),Object(K.jsx)($.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(K.jsx)("div",{ref:i,children:Object(K.jsx)(Z,{})})})]})},te=function(e){return function(){var e=Object(X.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,H.a.get("".concat("http://127.0.0.1:8000","/network/user"),n);case 4:(c=e.sent).data.error?(console.error(c.data.error),t({type:g})):t({type:v,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};var ne=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(X.a)(q.a.mark((function e(t){var n,c,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":D.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:f})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:f});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(K.jsxs)("div",{className:"navbar_wrapper",children:[Object(K.jsx)(L.b,{exact:!0,to:"/",children:"Home"}),Object(K.jsx)(L.c,{exact:!0,to:"/follow",children:"Follow"}),Object(K.jsx)(L.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(K.jsx)(ee,{children:Object(K.jsx)(Z,{})})]}),a=Object(K.jsxs)("div",{className:"navbar_wrapper",children:[Object(K.jsx)(L.b,{exact:!0,to:"/",children:"Home"}),Object(K.jsx)(L.c,{exact:!0,to:"/login",children:"Log In"}),Object(K.jsx)(L.c,{exact:!0,to:"/register",children:"Register"}),Object(K.jsx)(ee,{children:Object(K.jsx)(Z,{})})]});return Object(K.jsx)("div",{className:"navbar_container",children:n?c:a})}));var ce=function(){return Object(K.jsx)("div",{className:"footer",children:Object(K.jsx)("span",{children:"Footer"})})},ae=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(X.a)(q.a.mark((function e(t){var n,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,H.a.get("".concat("http://127.0.0.1:8000","/network/authenticated"),n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:m,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_user:te})((function(e){var t=e.children,n=e.get_user,a=e.checkAuthenticated,r=Object(c.useState)(!1),s=Object(R.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){a(),n(),o(!0)}),[]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne,{}),Object(K.jsx)("header",{className:"App-header",children:i?t:Object(K.jsx)(V,{})})]})})),re=function(){var e=Object(c.useState)(!1),t=Object(R.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(R.a)(r,2),i=s[0],o=s[1],u=function(){var e=Object(X.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("http://127.0.0.1:8000","/network/posts"));case 3:t=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(X.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,o(t.data.iterate[1]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l(),a(!0)}),[]),Object(K.jsx)("div",{children:Object(K.jsx)(Y,{getPosts:l,posts:i,loaded:n})})},se=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(X.a)(q.a.mark((function n(c){var a,r,s;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/login"),r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):(c({type:b}),c(te())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(R.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(I.a)({},e.target.name,e.target.value)))};return a?Object(K.jsx)(U.a,{to:"/"}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h1",{children:"Log Into your Account."}),Object(K.jsx)("div",{className:"form_container",children:Object(K.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(K.jsx)(B,{}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Username"}),Object(K.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Password"}),Object(K.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(K.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ie=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(X.a)(q.a.mark((function a(r){var s,i,o;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":D.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(R.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(R.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,f=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return l?Object(K.jsx)(U.a,{to:"/login"}):n?Object(K.jsx)(U.a,{to:"/"}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("h1",{children:"Register for an Account."}),Object(K.jsx)("div",{className:"form_container",children:Object(K.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(K.jsx)(B,{}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Username"}),Object(K.jsx)("input",{type:"text",onChange:function(e){return f(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Email"}),Object(K.jsx)("input",{type:"email",onChange:function(e){return f(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Password:"}),Object(K.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(K.jsxs)("div",{className:"input_field",children:[Object(K.jsx)("label",{children:"Re-enter password:"}),Object(K.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(K.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var oe=function(){return Object(K.jsx)(i.a,{store:F,children:Object(K.jsxs)("div",{className:"App",children:[Object(K.jsx)(L.a,{children:Object(K.jsxs)(ae,{children:[Object(K.jsx)(U.b,{exact:!0,path:"/",component:re}),Object(K.jsx)(U.b,{exact:!0,path:"/register",component:ie}),Object(K.jsx)(U.b,{exact:!0,path:"/login",component:se})]})}),Object(K.jsx)(ce,{})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(K.jsx)(a.a.StrictMode,{children:Object(K.jsx)(oe,{})}),document.getElementById("root")),ue()}},[[77,1,2]]]);
//# sourceMappingURL=main.133bb772.chunk.js.map