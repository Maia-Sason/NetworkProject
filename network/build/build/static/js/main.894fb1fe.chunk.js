(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{47:function(e,t,n){},49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(22),a=n.n(s),i=(n(47),n(10)),o=n.n(i),l=n(13),j=n(12),u=(n.p,n(49),n(27)),d=n(17),b=n(41),p=n(42),O=n(18),m="REGISTER_SUCCESS",x="REGISTER_FAIL",h={isAuthenticated:null,username:"",email:"",password:"",confirmation:""},f=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case m:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!1});case x:default:return e}}}),v=[p.a],g=Object(d.createStore)(f,{},Object(b.composeWithDevTools)(d.applyMiddleware.apply(void 0,v))),_=n(11),N=n(4),w=n(1);var k=function(){return Object(w.jsx)("div",{className:"compose_container",children:Object(w.jsxs)("div",{className:"compose_section",children:[Object(w.jsxs)("div",{className:"image_circle",children:[Object(w.jsx)("div",{className:"inner_image"}),Object(w.jsx)("div",{className:"inner_image2"})]}),Object(w.jsx)("span",{role:"textbox",className:"compose_in",type:"text",placeholder:"What's on your mind?",contentEditable:!0})]})})},y=n(15),S=n(16);var E=function(e){var t=e.body,n=e.username,c=e.likes;return Object(w.jsxs)("div",{className:"post_container",children:[Object(w.jsxs)("div",{className:"profile_section",children:[Object(w.jsxs)("div",{className:"image_circle",children:[Object(w.jsx)("div",{className:"inner_image"}),Object(w.jsx)("div",{className:"inner_image2"})]}),Object(w.jsx)("div",{className:"username_post",children:Object(w.jsx)("p",{children:n})})]}),Object(w.jsx)("div",{className:"break"}),Object(w.jsxs)("div",{className:"body_section",children:[Object(w.jsx)("span",{children:t}),Object(w.jsxs)("span",{children:[Object(w.jsx)(y.a,{icon:S.b,color:"grey"})," ",c]})]})]})};var C=function(e){var t=e.posts.posts,n=t.map((function(e){return Object(w.jsx)(E,{username:e.creator,body:e.content,likes:e.likes})}));return console.log(t[1]),Object(w.jsxs)("div",{className:"postBox_container",children:[Object(w.jsx)(k,{}),Object(w.jsx)("div",{className:"break_out"}),n]})};var R=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(y.a,{icon:S.a})})};var T=function(e){return e.login,e.logout,e.follow,Object(w.jsx)("div",{className:"navbar_container",children:Object(w.jsxs)("div",{className:"navbar_wrapper",children:[Object(w.jsx)(_.b,{exact:!0,to:"/",children:"Home"}),Object(w.jsx)(_.c,{exact:!0,to:"/login",children:"Log In"}),Object(w.jsx)(_.c,{exact:!0,to:"/follow",children:"Follow"}),Object(w.jsx)(_.c,{exact:!0,to:"/logout",children:"Log Out"}),Object(w.jsx)(_.c,{exact:!0,to:"/register",children:"Register"}),Object(w.jsx)(R,{})]})})};var A=function(){return Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)("span",{children:"Footer"})})},F=function(e){var t=e.children;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,{}),t]})},I=function(){return Object(w.jsx)("div",{children:"Home"})},L=function(){return Object(w.jsx)("div",{children:"Login"})},P=n(24),D=n(25),U=n.n(D),H=n(26),W=n.n(H),q=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/network/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),r(function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return console.log("console logging cookieValue: "+t),t}("csrftoken")),console.log("console log cookie"+U.a.get("csrftoken"))}),[]),Object(w.jsx)("input",{name:"csrfmiddlewaretoken",value:n})},B=Object(u.b)(null,{register:function(e,t,n,c){return function(){var r=Object(l.a)(o.a.mark((function r(s){var a,i,l;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":U.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:n,email:c}),r.prev=2,r.next=5,W.a.post("http://localhost:8000/network/register",i,a);case 5:(l=r.sent).data.error?(console.log(l.data.error),s({type:x})):s({type:m}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),s({type:x});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.register,n=Object(c.useState)({username:"",password:"",confirmation:"",email:""}),r=Object(j.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1],d=s.username,b=s.password,p=s.confirmation,m=s.email,x=function(e){return a(Object(O.a)(Object(O.a)({},s),{},Object(P.a)({},e.target.name,e.target.value)))};return l?Object(w.jsx)(N.a,{to:"/"}):Object(w.jsxs)("div",{className:"registration_container",children:[Object(w.jsx)("h1",{children:"Register for an Account."}),Object(w.jsxs)("form",{onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),b===p&&(t(d,b,m,p),u(!0))}(e)},children:[Object(w.jsx)(q,{}),Object(w.jsxs)("div",{className:"input_field",children:[Object(w.jsx)("label",{children:"Username"}),Object(w.jsx)("input",{type:"text",onChange:function(e){return x(e)},name:"username",className:"registration_input",value:d,placeholder:"Enter Username",required:!0})]}),Object(w.jsxs)("div",{className:"input_field",children:[Object(w.jsx)("label",{children:"Email"}),Object(w.jsx)("input",{type:"email",onChange:function(e){return x(e)},name:"email",className:"registration_input",value:m,placeholder:"Enter email address",required:!0})]}),Object(w.jsxs)("div",{className:"input_field",children:[Object(w.jsx)("label",{children:"Password:"}),Object(w.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"password",className:"registration_input",value:b,required:!0})]}),Object(w.jsxs)("div",{className:"input_field",children:[Object(w.jsx)("label",{children:"Re-enter password:"}),Object(w.jsx)("input",{type:"password",onChange:function(e){return x(e)},name:"confirmation",className:"registration_input",value:p,required:!0})]}),Object(w.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})]})}));var J=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(j.a)(s,2),i=a[0],d=a[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r(t),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/network/posts/1");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(u.a,{store:g,children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)(_.a,{children:Object(w.jsxs)(F,{children:[Object(w.jsx)(N.b,{exact:!0,path:"/",component:I}),Object(w.jsx)(N.b,{exact:!0,path:"/register",component:B}),Object(w.jsx)(N.b,{exact:!0,path:"/login",component:L})]})}),1==i?Object(w.jsx)(C,{posts:n}):Object(w.jsxs)("p",{children:["loading ",Object(w.jsx)(y.a,{className:"load_spin",icon:S.c})]})]}),Object(w.jsx)(A,{})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),K()}},[[76,1,2]]]);
//# sourceMappingURL=main.894fb1fe.chunk.js.map