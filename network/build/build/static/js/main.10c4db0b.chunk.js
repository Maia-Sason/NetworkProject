(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(22),s=n.n(a),i=(n(47),n(5)),o=n.n(i),u=n(11),l=n(13),j=(n.p,n(49),n(26)),b=n(17),d=n(40),p=n(41),O=n(18),x="REGISTER_SUCCESS",m="REGISTER_FAIL",f={isAuthenticated:null,username:"",email:""},h=Object(b.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case x:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case m:default:return e}}}),v=[p.a],g=Object(b.createStore)(h,{},Object(d.composeWithDevTools)(b.applyMiddleware.apply(void 0,v))),w=n(12),k=n(4),N=n(1);var _=function(){return Object(N.jsx)("div",{className:"compose_container",children:Object(N.jsxs)("div",{className:"compose_section",children:[Object(N.jsxs)("div",{className:"image_circle",children:[Object(N.jsx)("div",{className:"inner_image"}),Object(N.jsx)("div",{className:"inner_image2"})]}),Object(N.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},y=n(15),S=n(16);var E=function(e){var t=e.body,n=e.username,c=e.likes;return Object(N.jsxs)("div",{className:"post_container",children:[Object(N.jsxs)("div",{className:"profile_section",children:[Object(N.jsxs)("div",{className:"image_circle",children:[Object(N.jsx)("div",{className:"inner_image"}),Object(N.jsx)("div",{className:"inner_image2"})]}),Object(N.jsx)("div",{className:"username_post",children:Object(N.jsx)("p",{children:n})})]}),Object(N.jsx)("div",{className:"break"}),Object(N.jsxs)("div",{className:"body_section",children:[Object(N.jsx)("span",{children:t}),Object(N.jsxs)("span",{children:[Object(N.jsx)(y.a,{icon:S.b,color:"grey"})," ",c]})]})]})};var C=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(N.jsx)(E,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(N.jsxs)("div",{className:"postBox_container",children:[Object(N.jsx)(_,{}),Object(N.jsx)("div",{className:"break_out"}),n]})};var R=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(y.a,{icon:S.a})})};var F=function(e){return e.login,e.logout,e.follow,Object(N.jsx)("div",{className:"navbar_container",children:Object(N.jsxs)("div",{className:"navbar_wrapper",children:[Object(N.jsx)(w.b,{exact:!0,to:"/",children:"Home"}),Object(N.jsx)(w.c,{exact:!0,to:"/login",children:"Log In"}),Object(N.jsx)(w.c,{exact:!0,to:"/follow",children:"Follow"}),Object(N.jsx)(w.c,{exact:!0,to:"/logout",children:"Log Out"}),Object(N.jsx)(w.c,{exact:!0,to:"/register",children:"Register"}),Object(N.jsx)(R,{})]})})};var A=function(){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsx)("span",{children:"Footer"})})},I=function(e){var t=e.children;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(F,{}),t]})},T=function(){return Object(N.jsx)("div",{children:"Home"})},L=function(){return Object(N.jsx)("div",{children:"Login"})},q=n(24),U=n(42),B=n.n(U),D=n(25),J=n.n(D),P=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("http://localhost:8000/network/csrf_cookie");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),r(function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return console.log("console logging cookieValue: "+t),t}("csrftoken")),console.log("console logging csrftoken"+n)}),[]),Object(N.jsx)("input",{name:"csrfmiddlewaretoken",value:n})},G=Object(j.b)(null,{register:function(e,t,n,c){return function(){var r=Object(u.a)(o.a.mark((function r(a){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return{headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":B.a.get("csrftoken")}},JSON.stringify({username:e,password:t,confirmation:n,email:c}),r.prev=2,r.next=5,J.a.post("http://localhost:8000/network/register");case 5:r.sent.data.error?a({type:m}):a({type:x}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),a({type:m});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.register,n=Object(c.useState)({username:"",password:"",confirmation:"",email:""}),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),u=o[0],j=o[1],b=a.username,d=a.password,p=a.confirmation,x=a.email,m=function(e){return s(Object(O.a)(Object(O.a)({},a),{},Object(q.a)({},e.target.name,e.target.value)))};return u?Object(N.jsx)(k.a,{to:"/"}):Object(N.jsxs)("div",{className:"registration_container",children:[Object(N.jsx)("h1",{children:"Register for an Account."}),Object(N.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),d===p&&(t(b,d,x,p),j(!0))}(e)},children:[Object(N.jsx)(P,{}),Object(N.jsxs)("div",{className:"input_field",children:[Object(N.jsx)("label",{children:"Username"}),Object(N.jsx)("input",{type:"text",onChange:function(e){return m(e)},name:"username",className:"registration_input",value:b,placeholder:"Enter Username",required:!0})]}),Object(N.jsxs)("div",{className:"input_field",children:[Object(N.jsx)("label",{children:"Email"}),Object(N.jsx)("input",{type:"email",onChange:function(e){return m(e)},name:"email",className:"registration_input",value:x,placeholder:"Enter email address",required:!0})]}),Object(N.jsxs)("div",{className:"input_field",children:[Object(N.jsx)("label",{children:"Password:"}),Object(N.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"password",className:"registration_input",value:d,required:!0})]}),Object(N.jsxs)("div",{className:"input_field",children:[Object(N.jsx)("label",{children:"Re-enter password:"}),Object(N.jsx)("input",{type:"password",onChange:function(e){return m(e)},name:"confirmation",className:"registration_input",value:p,required:!0})]}),Object(N.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})}));var H=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(l.a)(a,2),i=s[0],b=s[1],d=Object(c.useState)(),p=Object(l.a)(d,2),O=p[0],x=p[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(O)}),[]),Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,r(t),b(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/csrf_cookie");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)(j.a,{store:g,children:Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("header",{className:"App-header",children:[Object(N.jsx)(w.a,{children:Object(N.jsxs)(I,{children:[Object(N.jsx)(k.b,{exact:!0,path:"/",component:T}),Object(N.jsx)(k.b,{exact:!0,path:"/register",component:G}),Object(N.jsx)(k.b,{exact:!0,path:"/login",component:L})]})}),1==i?Object(N.jsx)(C,{posts:n}):Object(N.jsxs)("p",{children:["loading ",Object(N.jsx)(y.a,{className:"load_spin",icon:S.c})]})]}),Object(N.jsx)(A,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(H,{})}),document.getElementById("root")),M()}},[[76,1,2]]]);
//# sourceMappingURL=main.10c4db0b.chunk.js.map