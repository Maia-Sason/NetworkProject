(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(26),s=n.n(r),i=(n(47),n(5)),o=n.n(i),u=n(14),l=n(13),j=(n.p,n(49),n(20)),d=n(21),b=n(41),p=n(42),O=n(8),m="REGISTER_SUCCESS",h="REGISTER_FAIL",x="LOGIN_SUCCESS",f="LOGIN_FAIL",v="LOGOUT_SUCCESS",g="LOGOUT_FAIL",N={isAuthenticated:null,username:"",email:""},_=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case x:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,username:c});case v:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1,username:""});case h:case f:case g:default:return e}}}),w=[p.a],y=Object(d.createStore)(_,{},Object(b.composeWithDevTools)(d.applyMiddleware.apply(void 0,w))),k=n(12),S=n(4),A=n(0);var C=function(){return Object(A.jsx)("div",{className:"compose_container",children:Object(A.jsxs)("div",{className:"compose_section",children:[Object(A.jsxs)("div",{className:"image_circle",children:[Object(A.jsx)("div",{className:"inner_image"}),Object(A.jsx)("div",{className:"inner_image2"})]}),Object(A.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},E=n(18),F=n(19);var L=function(e){var t=e.body,n=e.username,c=e.likes;return Object(A.jsxs)("div",{className:"post_container",children:[Object(A.jsxs)("div",{className:"profile_section",children:[Object(A.jsxs)("div",{className:"image_circle",children:[Object(A.jsx)("div",{className:"inner_image"}),Object(A.jsx)("div",{className:"inner_image2"})]}),Object(A.jsx)("div",{className:"username_post",children:Object(A.jsx)("p",{children:n})})]}),Object(A.jsx)("div",{className:"break"}),Object(A.jsxs)("div",{className:"body_section",children:[Object(A.jsx)("span",{children:t}),Object(A.jsxs)("span",{children:[Object(A.jsx)(E.a,{icon:F.b,color:"grey"})," ",c]})]})]})};var I=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(A.jsx)(L,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(A.jsxs)("div",{className:"postBox_container",children:[Object(A.jsx)(C,{}),Object(A.jsx)("div",{className:"break_out"}),n]})};var T=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(E.a,{icon:F.a})})};var R=function(e){return e.login,e.logout,e.follow,Object(A.jsx)("div",{className:"navbar_container",children:Object(A.jsxs)("div",{className:"navbar_wrapper",children:[Object(A.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(A.jsx)(k.c,{exact:!0,to:"/login",children:"Log In"}),Object(A.jsx)(k.c,{exact:!0,to:"/follow",children:"Follow"}),Object(A.jsx)(k.c,{exact:!0,to:"/logout",children:"Log Out"}),Object(A.jsx)(k.c,{exact:!0,to:"/register",children:"Register"}),Object(A.jsx)(T,{})]})})};var U=function(){return Object(A.jsx)("div",{className:"footer",children:Object(A.jsx)("span",{children:"Footer"})})},q=function(e){var t=e.children;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R,{}),t]})},G=function(){return Object(A.jsx)("div",{children:"Home"})},D=n(17),J=n(22),P=n.n(J),B=n(15),H=n.n(B),M=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),a(H.a.get("csrftoken")),console.log("console log cookie "+H.a.get("csrftoken"))}),[]),Object(A.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})},W=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(u.a)(o.a.mark((function n(c){var a,r,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":H.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,P.a.post("http://localhost:8000/network/login",r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:x,payload:s.data.username})):c({type:f}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:f});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(l.a)(r,2),i=s[0],o=s[1],u=i.username,j=i.password,d=function(e){return o(Object(O.a)(Object(O.a)({},i),{},Object(D.a)({},e.target.name,e.target.value)))};return a?Object(A.jsx)(S.a,{to:"/"}):Object(A.jsxs)("div",{className:"form_container",children:[Object(A.jsx)("h1",{children:"Log Into your Account."}),Object(A.jsxs)("form",{onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,j)}(t)},children:[Object(A.jsx)(M,{}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:j,placeholder:"Enter Password",required:!0})]}),Object(A.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})})),X=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(u.a)(o.a.mark((function a(r){var s,i,u;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":H.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,email:n,confirmation:c}),a.prev=2,a.next=5,P.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(u=a.sent).data.error?(console.log(u.data.error),r({type:h})):r({type:m}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:h});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],b=s.username,p=s.email,m=s.password,h=s.confirmation,x=function(e){return i(Object(O.a)(Object(O.a)({},s),{},Object(D.a)({},e.target.name,e.target.value)))};return j?Object(A.jsx)(S.a,{to:"/login"}):n?Object(A.jsx)(S.a,{to:"/"}):Object(A.jsxs)("div",{className:"form_container",children:[Object(A.jsx)("h1",{children:"Register for an Account."}),Object(A.jsxs)("form",{onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),m===h&&(t(b,m,p,h),d(!0))}(e)},children:[Object(A.jsx)(M,{}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"text",onChange:function(e){return x(e)},name:"username",className:"registration_input",value:b,placeholder:"Enter Username",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Email"}),Object(A.jsx)("input",{type:"email",onChange:function(e){return x(e)},name:"email",className:"registration_input",value:p,placeholder:"Enter email address",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Password:"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"password",className:"registration_input",value:m,required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Re-enter password:"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(A.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})}));var z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),i=s[0],d=s[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a(t),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)(j.a,{store:y,children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)(k.a,{children:Object(A.jsxs)(q,{children:[Object(A.jsx)(S.b,{exact:!0,path:"/",component:G}),Object(A.jsx)(S.b,{exact:!0,path:"/register",component:X}),Object(A.jsx)(S.b,{exact:!0,path:"/login",component:W})]})}),1==i?Object(A.jsx)(I,{posts:n}):Object(A.jsxs)("p",{children:["loading ",Object(A.jsx)(E.a,{className:"load_spin",icon:F.c})]})]}),Object(A.jsx)(U,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(z,{})}),document.getElementById("root")),K()}},[[76,1,2]]]);
//# sourceMappingURL=main.a682353e.chunk.js.map