(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),i=(n(47),n(5)),o=n.n(i),u=n(15),l=n(14),j=(n.p,n(49),n(13)),d=n(21),p=n(41),b=n(42),h=n(6),O="REGISTER_SUCCESS",m="REGISTER_FAIL",x="LOGIN_SUCCESS",f="LOGIN_FAIL",v="LOGOUT_SUCCESS",g="LOGOUT_FAIL",y="AUTHENTICATE_SUCCESS",N="AUTHENTICATE_FAIL",w={isAuthenticated:null,username:"",email:""},_=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:case N:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:a});case O:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1});case x:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,username:a});case v:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!1,username:""});case m:case f:case g:default:return e}}}),k=[b.a],A=Object(d.createStore)(_,{},Object(p.composeWithDevTools)(d.applyMiddleware.apply(void 0,k))),S=n(12),C=n(4),E=n(0);var T=function(){return Object(E.jsx)("div",{className:"compose_container",children:Object(E.jsxs)("div",{className:"compose_section",children:[Object(E.jsxs)("div",{className:"image_circle",children:[Object(E.jsx)("div",{className:"inner_image"}),Object(E.jsx)("div",{className:"inner_image2"})]}),Object(E.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},F=n(19),I=n(20);var L=function(e){var t=e.body,n=e.username,a=e.likes;return Object(E.jsxs)("div",{className:"post_container",children:[Object(E.jsxs)("div",{className:"profile_section",children:[Object(E.jsxs)("div",{className:"image_circle",children:[Object(E.jsx)("div",{className:"inner_image"}),Object(E.jsx)("div",{className:"inner_image2"})]}),Object(E.jsx)("div",{className:"username_post",children:Object(E.jsx)("p",{children:n})})]}),Object(E.jsx)("div",{className:"break"}),Object(E.jsxs)("div",{className:"body_section",children:[Object(E.jsx)("span",{children:t}),Object(E.jsxs)("span",{children:[Object(E.jsx)(F.a,{icon:I.b,color:"grey"})," ",a]})]})]})};var U=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(E.jsx)(L,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(E.jsxs)("div",{className:"postBox_container",children:[Object(E.jsx)(T,{}),Object(E.jsx)("div",{className:"break_out"}),n]})};var R=function(){return Object(E.jsx)("div",{children:Object(E.jsx)(F.a,{icon:I.a})})},q=n(23),G=n.n(q),H=n(16),J=n.n(H),P=function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":G.a.get("csrftoken")}},a=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,J.a.post("".concat("http://localhost:8000","/network/logout"),a,n);case 5:(c=e.sent).data.error?(console.log(c.data.error),t({type:g})):t({type:v}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:g});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},D=Object(E.jsxs)("div",{className:"navbar_wrapper",children:[Object(E.jsx)(S.b,{exact:!0,to:"/",children:"Home"}),Object(E.jsx)(S.c,{exact:!0,to:"/follow",children:"Follow"}),Object(E.jsx)(S.c,{exact:!0,to:"/logout",onClick:P,children:"Log Out"}),Object(E.jsx)(R,{})]}),B=Object(E.jsxs)("div",{className:"navbar_wrapper",children:[Object(E.jsx)(S.b,{exact:!0,to:"/",children:"Home"}),Object(E.jsx)(S.c,{exact:!0,to:"/login",children:"Log In"}),Object(E.jsx)(S.c,{exact:!0,to:"/register",children:"Register"}),Object(E.jsx)(R,{})]});var K=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:P})((function(e){e.login,e.logout,e.follow;var t=e.isAuthenticated;return Object(E.jsx)("div",{className:"navbar_container",children:t?D:B})}));var X=function(){return Object(E.jsx)("div",{className:"footer",children:Object(E.jsx)("span",{children:"Footer"})})},M=Object(j.b)(null,{checkAuthenticated:function(){return function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,J.a.get("http://localhost:8000/network/authenticated",n);case 4:(a=e.sent).data.error||"error"===a.data.isAuthenticated?t({type:N,payload:!1}):"success"===a.data.isAuthenticated&&t({type:y,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:N,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.children,n=e.checkAuthenticated;return Object(a.useEffect)((function(){n()}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(K,{}),Object(E.jsx)("header",{className:"App-header",children:t})]})})),W=function(){return Object(E.jsx)("div",{children:"Home"})},z=n(18),Q=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),c(function(e){var t=null;if(document.cookie&&""!==document.cookie){for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}console.log(t)}return t}("csrftoken"))}),[]),Object(E.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})},V=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(a){var c,r,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":G.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,J.a.post("http://localhost:8000/network/login",r,c);case 5:(s=n.sent).data.error?(console.log(s.data.error),a({type:f})):a({type:x,payload:s.data.username}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a({type:f});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,c=t.isAuthenticated,r=Object(a.useState)({username:"",password:""}),s=Object(l.a)(r,2),i=s[0],o=s[1],u=i.username,j=i.password,d=function(e){return o(Object(h.a)(Object(h.a)({},i),{},Object(z.a)({},e.target.name,e.target.value)))};return c?Object(E.jsx)(C.a,{to:"/"}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:"Log Into your Account."}),Object(E.jsx)("div",{className:"form_container",children:Object(E.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,j)}(t)},children:[Object(E.jsx)(Q,{}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Username"}),Object(E.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Password"}),Object(E.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:j,placeholder:"Enter Password",required:!0})]}),Object(E.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),Y=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,a){return function(){var c=Object(u.a)(o.a.mark((function c(r){var s,i,u;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":G.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:a,email:n}),c.prev=2,c.next=5,J.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(u=c.sent).data.error?(console.error(u.data.error),r({type:m})):r({type:O}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:m});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,c=Object(a.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],p=s.username,b=s.email,O=s.password,m=s.confirmation,x=function(e){return i(Object(h.a)(Object(h.a)({},s),{},Object(z.a)({},e.target.name,e.target.value)))};return j?Object(E.jsx)(C.a,{to:"/login"}):n?Object(E.jsx)(C.a,{to:"/"}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{children:"Register for an Account."}),Object(E.jsx)("div",{className:"form_container",children:Object(E.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===m&&(t(p,O,b,m),d(!0))}(e)},children:[Object(E.jsx)(Q,{}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Username"}),Object(E.jsx)("input",{type:"text",onChange:function(e){return x(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Email"}),Object(E.jsx)("input",{type:"email",onChange:function(e){return x(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Password:"}),Object(E.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(E.jsxs)("div",{className:"input_field",children:[Object(E.jsx)("label",{children:"Re-enter password:"}),Object(E.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"confirmation",className:"registration_input",value:m,required:!0})]}),Object(E.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})}));var Z=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],d=s[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(t),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsx)(j.a,{store:A,children:Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(S.a,{children:Object(E.jsxs)(M,{children:[Object(E.jsx)(C.b,{exact:!0,path:"/",component:W}),Object(E.jsx)(C.b,{exact:!0,path:"/register",component:Y}),Object(E.jsx)(C.b,{exact:!0,path:"/login",component:V})]})}),1==i?Object(E.jsx)(U,{posts:n}):Object(E.jsxs)("p",{children:["loading ",Object(E.jsx)(F.a,{className:"load_spin",icon:I.c})]}),Object(E.jsx)(X,{})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(Z,{})}),document.getElementById("root")),$()}},[[76,1,2]]]);
//# sourceMappingURL=main.e2c3f4e2.chunk.js.map