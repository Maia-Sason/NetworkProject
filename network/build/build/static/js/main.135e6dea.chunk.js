(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),s=n.n(a),i=(n(47),n(5)),o=n.n(i),u=n(14),l=n(13),j=(n.p,n(49),n(15)),d=n(20),p=n(41),b=n(42),O=n(8),h="REGISTER_SUCCESS",m="REGISTER_FAIL",x="LOGIN_SUCCESS",f="LOGIN_FAIL",v="LOGOUT_SUCCESS",g="LOGOUT_FAIL",y={isAuthenticated:null,username:"",email:""},w=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case x:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,username:c});case v:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1,username:""});case m:case f:case g:default:return e}}}),N=[b.a],_=Object(d.createStore)(w,{},Object(p.composeWithDevTools)(d.applyMiddleware.apply(void 0,N))),k=n(12),S=n(4),C=n(0);var A=function(){return Object(C.jsx)("div",{className:"compose_container",children:Object(C.jsxs)("div",{className:"compose_section",children:[Object(C.jsxs)("div",{className:"image_circle",children:[Object(C.jsx)("div",{className:"inner_image"}),Object(C.jsx)("div",{className:"inner_image2"})]}),Object(C.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},E=n(18),T=n(19);var I=function(e){var t=e.body,n=e.username,c=e.likes;return Object(C.jsxs)("div",{className:"post_container",children:[Object(C.jsxs)("div",{className:"profile_section",children:[Object(C.jsxs)("div",{className:"image_circle",children:[Object(C.jsx)("div",{className:"inner_image"}),Object(C.jsx)("div",{className:"inner_image2"})]}),Object(C.jsx)("div",{className:"username_post",children:Object(C.jsx)("p",{children:n})})]}),Object(C.jsx)("div",{className:"break"}),Object(C.jsxs)("div",{className:"body_section",children:[Object(C.jsx)("span",{children:t}),Object(C.jsxs)("span",{children:[Object(C.jsx)(E.a,{icon:T.b,color:"grey"})," ",c]})]})]})};var L=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(C.jsx)(I,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(C.jsxs)("div",{className:"postBox_container",children:[Object(C.jsx)(A,{}),Object(C.jsx)("div",{className:"break_out"}),n]})};var U=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(E.a,{icon:T.a})})},F=n(27),R=n.n(F),q=n(21),G=n.n(q);var J=Object(j.b)(null,{logout:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,G.a.post("".concat("http://localhost:8000","/network/logout"),c,n);case 5:(r=e.sent).data.error?(console.log(r.data.error),t({type:g})):t({type:v}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:g});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout;return e.follow,Object(C.jsx)("div",{className:"navbar_container",children:Object(C.jsxs)("div",{className:"navbar_wrapper",children:[Object(C.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(C.jsx)(k.c,{exact:!0,to:"/login",children:"Log In"}),Object(C.jsx)(k.c,{exact:!0,to:"/follow",children:"Follow"}),Object(C.jsx)(k.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(C.jsx)(k.c,{exact:!0,to:"/register",children:"Register"}),Object(C.jsx)(U,{})]})})}));var B=function(){return Object(C.jsx)("div",{className:"footer",children:Object(C.jsx)("span",{children:"Footer"})})},P=function(e){var t=e.children;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(J,{}),t]})},D=function(){return Object(C.jsx)("div",{children:"Home"})},K=n(17),M=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),r(function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken"))}),[]),Object(C.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})},Q=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(c){var r,a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":R.a.get("csrftoken")}},a=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,G.a.post("http://localhost:8000/network/login",a,r);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:f})):c({type:x,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:f});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,r=t.isAuthenticated,a=Object(c.useState)({username:"",password:""}),s=Object(l.a)(a,2),i=s[0],o=s[1],u=i.username,j=i.password,d=function(e){return o(Object(O.a)(Object(O.a)({},i),{},Object(K.a)({},e.target.name,e.target.value)))};return r?Object(C.jsx)(S.a,{to:"/"}):Object(C.jsxs)("div",{className:"form_container",children:[Object(C.jsx)("h1",{children:"Log Into your Account."}),Object(C.jsxs)("form",{onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,j)}(t)},children:[Object(C.jsx)(M,{}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Username"}),Object(C.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Username"}),Object(C.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:j,placeholder:"Enter Password",required:!0})]}),Object(C.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})})),W=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var r=Object(u.a)(o.a.mark((function r(a){var s,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":"OQQe4OdvdL2jMZJKoKvlTLkQk6qhvKzT30baPmUdtepI8r4yhG5E5UoWUIB1smBS"},credentials:"same-origin"},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),r.prev=2,r.next=5,G.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:r.sent.data.error?a({type:m}):a({type:h}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),a({type:m});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,r=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),a=Object(l.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],p=s.username,b=s.email,h=s.password,m=s.confirmation,x=function(e){return i(Object(O.a)(Object(O.a)({},s),{},Object(K.a)({},e.target.name,e.target.value)))};return j?Object(C.jsx)(S.a,{to:"/login"}):n?Object(C.jsx)(S.a,{to:"/"}):Object(C.jsxs)("div",{className:"form_container",children:[Object(C.jsx)("h1",{children:"Register for an Account."}),Object(C.jsxs)("form",{onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),h===m&&(t(p,h,b,m),d(!0))}(e)},children:[Object(C.jsx)(M,{}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Username"}),Object(C.jsx)("input",{type:"text",onChange:function(e){return x(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"email",onChange:function(e){return x(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Password:"}),Object(C.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"password",className:"registration_input",value:h,required:!0})]}),Object(C.jsxs)("div",{className:"input_field",children:[Object(C.jsx)("label",{children:"Re-enter password:"}),Object(C.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"confirmation",className:"registration_input",value:m,required:!0})]}),Object(C.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})}));var X=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],d=s[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(t),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)(j.a,{store:_,children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)(k.a,{children:Object(C.jsxs)(P,{children:[Object(C.jsx)(S.b,{exact:!0,path:"/",component:D}),Object(C.jsx)(S.b,{exact:!0,path:"/register",component:W}),Object(C.jsx)(S.b,{exact:!0,path:"/login",component:Q})]})}),1==i?Object(C.jsx)(L,{posts:n}):Object(C.jsxs)("p",{children:["loading ",Object(C.jsx)(E.a,{className:"load_spin",icon:T.c})]})]}),Object(C.jsx)(B,{})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),H()}},[[76,1,2]]]);
//# sourceMappingURL=main.135e6dea.chunk.js.map