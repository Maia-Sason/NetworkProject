(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),i=(n(47),n(5)),o=n.n(i),u=n(14),l=n(13),j=(n.p,n(49),n(19)),b=n(20),d=n(41),p=n(42),O=n(8),m="REGISTER_SUCCESS",h="REGISTER_FAIL",x="LOGIN_SUCCESS",f="LOGIN_FAIL",v="LOGOUT_SUCCESS",g="LOGOUT_FAIL",N={isAuthenticated:null,username:"",email:""},_=Object(b.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case x:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!0,username:c});case v:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1,username:""});case h:case f:case g:default:return e}}}),w=[p.a],y=Object(b.createStore)(_,{},Object(d.composeWithDevTools)(b.applyMiddleware.apply(void 0,w))),k=n(12),S=n(4),A=n(1);var C=function(){return Object(A.jsx)("div",{className:"compose_container",children:Object(A.jsxs)("div",{className:"compose_section",children:[Object(A.jsxs)("div",{className:"image_circle",children:[Object(A.jsx)("div",{className:"inner_image"}),Object(A.jsx)("div",{className:"inner_image2"})]}),Object(A.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},E=n(17),L=n(18);var F=function(e){var t=e.body,n=e.username,c=e.likes;return Object(A.jsxs)("div",{className:"post_container",children:[Object(A.jsxs)("div",{className:"profile_section",children:[Object(A.jsxs)("div",{className:"image_circle",children:[Object(A.jsx)("div",{className:"inner_image"}),Object(A.jsx)("div",{className:"inner_image2"})]}),Object(A.jsx)("div",{className:"username_post",children:Object(A.jsx)("p",{children:n})})]}),Object(A.jsx)("div",{className:"break"}),Object(A.jsxs)("div",{className:"body_section",children:[Object(A.jsx)("span",{children:t}),Object(A.jsxs)("span",{children:[Object(A.jsx)(E.a,{icon:L.b,color:"grey"})," ",c]})]})]})};var I=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(A.jsx)(F,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(A.jsxs)("div",{className:"postBox_container",children:[Object(A.jsx)(C,{}),Object(A.jsx)("div",{className:"break_out"}),n]})};var U=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(E.a,{icon:L.a})})};var R=function(e){return e.login,e.logout,e.follow,Object(A.jsx)("div",{className:"navbar_container",children:Object(A.jsxs)("div",{className:"navbar_wrapper",children:[Object(A.jsx)(k.b,{exact:!0,to:"/",children:"Home"}),Object(A.jsx)(k.c,{exact:!0,to:"/login",children:"Log In"}),Object(A.jsx)(k.c,{exact:!0,to:"/follow",children:"Follow"}),Object(A.jsx)(k.c,{exact:!0,to:"/logout",children:"Log Out"}),Object(A.jsx)(k.c,{exact:!0,to:"/register",children:"Register"}),Object(A.jsx)(U,{})]})})};var T=function(){return Object(A.jsx)("div",{className:"footer",children:Object(A.jsx)("span",{children:"Footer"})})},q=function(e){var t=e.children;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R,{}),t]})},G=function(){return Object(A.jsx)("div",{children:"Home"})},D=n(16),P=n(27),B=n.n(P),J=n(21),H=n.n(J),M=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("".concat("http://localhost:8000","/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),r(H.a.get("csrftoken")),console.log("console log cookie "+H.a.get("csrftoken"))}),[]),Object(A.jsx)("input",{type:"text",name:"csrfmiddlewaretoken",value:n})},W=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function e(t){var n=t.login,r=t.isAuthenticated,a=Object(c.useState)({username:"",password:""}),s=Object(l.a)(a,2),i=s[0],o=s[1],u=i.username,j=i.password,b=function(e){return o(Object(O.a)(Object(O.a)({},i),{},Object(D.a)({},e.target.name,e.target.value)))};return r?Object(A.jsx)(S.a,{to:"/"}):Object(A.jsxs)("div",{className:"form_container",children:[Object(A.jsx)("h1",{children:"Log Into your Account."}),Object(A.jsxs)("form",{onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,j)}(t)},children:[Object(A.jsx)(M,{}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"text",onChange:function(e){return b(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return b(e)},name:"password",className:"registration_input",value:j,placeholder:"Enter Password",required:!0})]}),Object(A.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})})),X=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var r=Object(u.a)(o.a.mark((function r(a){var s,i,u;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":H.a.get("csrftoken"),"Set-Cookie":"csrftoken="+H.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,email:n,confirmation:c}),r.prev=2,r.next=5,B.a.post("".concat("http://localhost:8000","/network/register"),i,s);case 5:(u=r.sent).data.error?(console.log(u.data.error),a({type:h})):a({type:m}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),a({type:h});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.register,n=(e.isAuthenticated,Object(c.useState)({username:"",email:"",password:"",confirmation:""})),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),u=(o[0],o[1]),j=a.username,b=a.email,d=a.password,p=a.confirmation,m=function(e){return s(Object(O.a)(Object(O.a)({},a),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)("div",{className:"form_container",children:[Object(A.jsx)("h1",{children:"Register for an Account."}),Object(A.jsxs)("form",{onSubmit:function(e){return function(e){console.log(a),e.preventDefault(),d===p&&(t(j,d,b,p),u(!0))}(e)},children:[Object(A.jsx)(M,{}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Username"}),Object(A.jsx)("input",{type:"text",onChange:function(e){return m(e)},name:"username",className:"registration_input",value:j,placeholder:"Enter Username",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Email"}),Object(A.jsx)("input",{type:"email",onChange:function(e){return m(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Password:"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"password",className:"registration_input",value:d,required:!0})]}),Object(A.jsxs)("div",{className:"input_field",children:[Object(A.jsx)("label",{children:"Re-enter password:"}),Object(A.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"confirmation",className:"registration_input",value:p,required:!0})]}),Object(A.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})}));var z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],b=s[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,r(t),b(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)(j.a,{store:y,children:Object(A.jsxs)("div",{className:"App",children:[Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)(k.a,{children:Object(A.jsxs)(q,{children:[Object(A.jsx)(S.b,{exact:!0,path:"/",component:G}),Object(A.jsx)(S.b,{exact:!0,path:"/register",component:X}),Object(A.jsx)(S.b,{exact:!0,path:"/login",component:W})]})}),1==i?Object(A.jsx)(I,{posts:n}):Object(A.jsxs)("p",{children:["loading ",Object(A.jsx)(E.a,{className:"load_spin",icon:L.c})]})]}),Object(A.jsx)(T,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(z,{})}),document.getElementById("root")),K()}},[[76,1,2]]]);
//# sourceMappingURL=main.e625347b.chunk.js.map