(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(22),s=n.n(r),i=(n(51),n.p,n(52),n(53),n(11)),o=n(24),u=n(44),l=n(45),j=n(5),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",h="LOGOUT_SUCCESS",f="LOGOUT_FAIL",m="AUTHENTICATE_SUCCESS",x="AUTHENTICATE_FAIL",v="USER_SUCCESS",g="USER_FAIL",k="POST_SUCCESS",y="POST_FAIL",_="UPDATE_FAIL",N="UNLIKE_SUCCESS",w="LIKE_SUCCESS",S="LIKE_FAIL",C={isAuthenticated:null},A={isAuthenticated:null,username:"",email:"",likes:"",post:""},E=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case m:case x:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case p:case O:case f:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case v:return Object(j.a)(Object(j.a)({},e),{},{id:c.id,username:c.username,email:c.email,likes:c.likes});case g:return Object(j.a)(Object(j.a)({},e),{},{id:"",username:"",email:"",likes:""});case w:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.concat(c)});case N:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.filter((function(e){return e!==c}))});case k:return Object(j.a)(Object(j.a)({},e),{},{post:c});case y:case S:default:return e}}}),T=[l.a],F=Object(o.createStore)(E,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,T))),L=n(13),P=n(9),U=n(18),I=n(4),R=n(15),q=n.n(R),D=n(30),J=n(3),X=n.n(J),G=n(8),K=n(10),H=n.n(K),B=n(0),W=function(){var e=Object(c.useState)(""),t=Object(I.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(G.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("http://127.0.0.1:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(B.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})};var M=Object(i.b)(null,{create:function(e){return function(){var t=Object(G.a)(X.a.mark((function t(n){var c,a,r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":q.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:y})):n({type:k,payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:y});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=e.updatePost,a=Object(c.useState)({content:""}),r=Object(I.a)(a,2),s=r[0],i=r[1],o=s.content,u=function(e){o.length>0&&(t(o),i({content:""}),n())};return Object(B.jsx)("div",{className:"compose_container",children:Object(B.jsxs)("div",{className:"compose_section",children:[Object(B.jsx)("div",{className:"profile",children:Object(B.jsxs)("div",{className:"image_circle",children:[Object(B.jsx)("div",{className:"inner_image"}),Object(B.jsx)("div",{className:"inner_image2"})]})}),Object(B.jsxs)("form",{className:"flex_compose",children:[Object(B.jsx)(W,{}),Object(B.jsx)(D.a,{maxRows:4,onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),u())}(e)},type:"text",onChange:function(e){return function(e){i(Object(j.a)(Object(j.a)({},s),{},Object(U.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:o,placeholder:"What's on your mind?",required:!0})]})]})})})),V=n(23),z=n(19),Q=n(20);var Y=Object(i.b)((function(e){return{sessionUser:e.user,sessionLikes:e.user.liking,isAuthenticated:e.auth.isAuthenticated}}),{update:function(e,t){return function(){var n=Object(G.a)(X.a.mark((function n(c){var a,r,s,i;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":q.a.get("csrftoken")}},r=JSON.stringify({content:e}),s=t,n.prev=3,n.next=6,H.a.put("".concat("http://127.0.0.1:8000","/network/create/").concat(s),r,a);case 6:(i=n.sent).data.error?(console.error(i.data.error),c({type:_})):c({type:"UPDATE_SUCCESS"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),c({type:_});case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}()},like:function(e){return function(){var t=Object(G.a)(X.a.mark((function t(n){var c,a,r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":q.a.get("csrftoken")}},a=JSON.stringify({withCredentials:!0}),t.prev=2,t.next=5,H.a.put("".concat("http://127.0.0.1:8000","/network/like/").concat(e),a,c);case 5:"liked"===(r=t.sent).data.isLiked?(console.error(r.data.isLiked),n({type:w,payload:e})):"unliked"===r.data.isLiked?n({type:N,payload:e}):n({type:S}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:S});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.body,n=e.id,a=e.username,r=e.likes,s=e.timestamp,i=e.sessionUser,o=(e.sessionLikes,e.update),u=e.isAuthenticated,l=e.like,d=Object(c.useState)(!1),p=Object(I.a)(d,2),b=p[0],O=p[1],h=Object(c.useState)(!1),f=Object(I.a)(h,2),m=f[0],x=f[1],v=Object(c.useState)(!1),g=Object(I.a)(v,2),k=g[0],y=g[1],_=Object(c.useState)(t),N=Object(I.a)(_,2),w=N[0],S=N[1],C=Object(c.useState)({content:t}),A=Object(I.a)(C,2),E=A[0],T=A[1];Object(c.useEffect)((function(){void 0!==i.likes&&x(i.likes.includes(n))}),[]);var F=E.content,P=function(e){F.length>0&&(console.log(E),o(F,n),S(F),y(!k))},R=function(e){O(!b),l(n)},q=Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("form",{className:"flex_compose",children:Object(B.jsx)(D.a,{maxRows:4,onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),P())}(e)},type:"text",onChange:function(e){return function(e){return T(Object(j.a)(Object(j.a)({},E),{},Object(U.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:F,placeholder:"What's on your mind?",required:!0})})}),J=Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{children:Object(B.jsx)(z.a,{className:"like_auth ".concat(b?"":"like_auth_active"),onClick:function(e){return R()},icon:Q.b,color:"grey"})}),Object(B.jsx)("span",{className:"likes_space",children:b?r-1:r})]}),X=Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{children:Object(B.jsx)(z.a,{icon:Q.b,color:"grey"})}),Object(B.jsx)("span",{className:"likes_space",children:r})]}),G=Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("span",{children:Object(B.jsx)(z.a,{className:"like_auth ".concat(b&&"like_auth_active"),onClick:function(e){return R()},icon:Q.b,color:"grey"})}),Object(B.jsx)("span",{className:"likes_space",children:b?r+1:r})]});return Object(B.jsxs)("div",{className:"post_container",children:[Object(B.jsxs)("div",{className:"profile_section",children:[Object(B.jsxs)("div",{className:"image_circle",children:[Object(B.jsx)("div",{className:"inner_image"}),Object(B.jsx)("div",{className:"inner_image2"})]}),Object(B.jsxs)("div",{className:"header_post",children:[Object(B.jsxs)("div",{className:"post_name_date",children:[Object(B.jsx)(L.b,{exact:!0,to:"/profile/".concat(a),className:"username_post",children:a}),Object(B.jsx)("div",{className:"date_post",children:s})]}),Object(B.jsx)("div",{className:"edit_container_custom",children:i.username===a&&Object(B.jsxs)("button",{className:"edit_button_custom",onClick:function(e){return y(!k),void T({content:t})},value:"edit",children:[" ",k?"X":"Edit"]})})]})]}),Object(B.jsx)("div",{className:"break"}),Object(B.jsxs)("div",{className:"body_section",children:[k?q:Object(B.jsx)("span",{className:"body_content",children:w}),Object(B.jsx)("div",{className:"like_container",children:u?m?J:G:X})]})]})}));var Z=function(){return Object(B.jsxs)("div",{className:"load",children:[Object(B.jsx)("p",{children:" loading "}),Object(B.jsx)(z.a,{className:"load_spin",icon:Q.c})]})};var $=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.user,newPost:e.user.post}}),null)((function(e){e.isAuthenticated,e.user,e.updatePost;var t=e.loaded,n=(e.setPosts,e.posts),c=(e.newPost,e.hasNext),a=e.hasPrev,r=e.setPageLoad,s=e.page,i=e.maxPage,o=n.map((function(e,t){return Object(B.jsx)(Y,{body:e.content,username:e.creator,likes:e.likes,timestamp:e.timestamp,id:e.id},t)})),u=Object(B.jsx)("div",{className:"pagination_location",children:Object(B.jsxs)(V.a,{children:[1!=s&&Object(B.jsx)(V.a.First,{onClick:function(){return r(1)}}),a&&Object(B.jsx)(V.a.Prev,{onClick:function(){return r(s-1)}}),Object(B.jsx)(V.a.Item,{active:!0,children:s}),c&&Object(B.jsx)(V.a.Next,{onClick:function(){return r(s+1)}}),s!=i&&Object(B.jsx)(V.a.Last,{onClick:function(){return r(i)}})]})});return Object(B.jsx)("div",{children:Object(B.jsxs)("div",{className:"postBox_container",children:[t?o:Object(B.jsx)(Z,{}),u]})})}));var ee=function(e){return e.open,Object(B.jsxs)("div",{className:"notify_box",children:[Object(B.jsx)("div",{className:"notification_item",children:Object(B.jsx)("p",{children:"notification"})}),Object(B.jsx)("div",{className:"notification_item",children:Object(B.jsx)("p",{children:"notification"})}),Object(B.jsx)("div",{className:"notification_item",children:Object(B.jsx)("p",{children:"notification"})}),Object(B.jsx)("div",{className:"notification_item",children:Object(B.jsx)("p",{children:"notification"})})]})},te=n(83);var ne=function(e){e.children;var t=Object(c.useState)(!1),n=Object(I.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(B.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(B.jsx)("div",{className:"bell",children:Object(B.jsx)(z.a,{icon:Q.a})}),Object(B.jsx)(te.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(B.jsx)("div",{ref:i,children:Object(B.jsx)(ee,{})})})]})},ce=function(e){return function(){var e=Object(G.a)(X.a.mark((function e(t){var n,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,H.a.get("".concat("http://127.0.0.1:8000","/network/user"),n);case 4:(c=e.sent).data.error?(console.error(c.data.error),t({type:g})):t({type:v,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};var ae=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(G.a)(X.a.mark((function e(t){var n,c,a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":q.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:f})):t({type:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:f});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(B.jsxs)("div",{className:"navbar_wrapper",children:[Object(B.jsx)(L.b,{exact:!0,to:"/",children:"Home"}),Object(B.jsx)(L.c,{exact:!0,to:"/follow",children:"Follow"}),Object(B.jsx)(L.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(B.jsx)(ne,{children:Object(B.jsx)(ee,{})})]}),a=Object(B.jsxs)("div",{className:"navbar_wrapper",children:[Object(B.jsx)(L.b,{exact:!0,to:"/",children:"Home"}),Object(B.jsx)(L.c,{exact:!0,to:"/login",children:"Log In"}),Object(B.jsx)(L.c,{exact:!0,to:"/register",children:"Register"}),Object(B.jsx)(ne,{children:Object(B.jsx)(ee,{})})]});return Object(B.jsx)("div",{className:"navbar_container",children:n?c:a})}));var re=function(){return Object(B.jsx)("div",{className:"footer",children:Object(B.jsx)("span",{children:"Footer"})})},se=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(G.a)(X.a.mark((function e(t){var n,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,H.a.get("".concat("http://127.0.0.1:8000","/network/authenticated"),n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:x,payload:!1}):"success"===c.data.isAuthenticated&&t({type:m,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:x,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_user:ce})((function(e){var t=e.children,n=e.get_user,a=e.checkAuthenticated,r=Object(c.useState)(!1),s=Object(I.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){a(),n(),o(!0)}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ae,{}),Object(B.jsx)("header",{className:"App-header",children:i?t:Object(B.jsx)(Z,{})})]})})),ie=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(I.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(I.a)(i,2),u=o[0],l=o[1],j=Object(c.useState)(1),d=Object(I.a)(j,2),p=d[0],b=d[1],O=Object(c.useState)(1),h=Object(I.a)(O,2),f=h[0],m=h[1],x=Object(c.useState)(!1),v=Object(I.a)(x,2),g=v[0],k=v[1],y=Object(c.useState)(!1),_=Object(I.a)(y,2),N=_[0],w=_[1],S=function(){var e=Object(G.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("http://127.0.0.1:8000","/network/posts/").concat(t));case 3:n=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(G.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,l(n.data.posts),m(n.data.max),b(n.data.page),w(n.data.previous),k(n.data.next),m(n.data.max);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C(1),s(!0)}),[]),Object(c.useEffect)((function(){s(!0),console.log(u),console.log(p),console.log(N),console.log(g)}),[u]);var A=function(){var e=Object(G.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1),b(p-1),C(1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(G.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1),C(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(M,{updatePost:A}),Object(B.jsx)("div",{className:"break_out"})]});return Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:"compose_home_container",children:t&&T}),Object(B.jsx)("div",{className:"postbox_home_container",children:r?Object(B.jsx)($,{maxPage:f,hasNext:g,hasPrev:N,page:p,setPageLoad:E,getPosts:C,updatePost:A,setPosts:l,posts:u,loaded:r}):Object(B.jsx)(Z,{})})]})})),oe=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(G.a)(X.a.mark((function n(c){var a,r,s;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":q.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/login"),r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):(c({type:b}),c(ce())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(I.a)(r,2),i=s[0],o=s[1],u=i.username,l=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(U.a)({},e.target.name,e.target.value)))};return a?Object(B.jsx)(P.a,{to:"/"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{children:"Log Into your Account."}),Object(B.jsx)("div",{className:"form_container",children:Object(B.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(u,l)}(t)},children:[Object(B.jsx)(W,{}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Username"}),Object(B.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:u,placeholder:"Enter Username",required:!0})]}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Password"}),Object(B.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:l,placeholder:"Enter Password",required:!0})]}),Object(B.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),ue=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(G.a)(X.a.mark((function a(r){var s,i,o;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":q.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,H.a.post("".concat("http://127.0.0.1:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(I.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(I.a)(o,2),l=u[0],d=u[1],p=s.username,b=s.email,O=s.password,h=s.confirmation,f=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(U.a)({},e.target.name,e.target.value)))};return l?Object(B.jsx)(P.a,{to:"/login"}):n?Object(B.jsx)(P.a,{to:"/"}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h1",{children:"Register for an Account."}),Object(B.jsx)("div",{className:"form_container",children:Object(B.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===h&&(t(p,O,b,h),d(!0))}(e)},children:[Object(B.jsx)(W,{}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Username"}),Object(B.jsx)("input",{type:"text",onChange:function(e){return f(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Email"}),Object(B.jsx)("input",{type:"email",onChange:function(e){return f(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Password:"}),Object(B.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(B.jsxs)("div",{className:"input_field",children:[Object(B.jsx)("label",{children:"Re-enter password:"}),Object(B.jsx)("input",{type:"password",onChange:function(e){return f(e)},name:"confirmation",className:"registration_input",value:h,required:!0})]}),Object(B.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})})),le=function(){var e=Object(c.useState)(!1),t=Object(I.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)(!1),r=Object(I.a)(a,2),s=(r[0],r[1]),i=Object(c.useState)([]),o=Object(I.a)(i,2),u=(o[0],o[1]),l=Object(c.useState)(1),j=Object(I.a)(l,2),d=(j[0],j[1]),p=Object(c.useState)(1),b=Object(I.a)(p,2),O=(b[0],b[1]),h=Object(c.useState)(!1),f=Object(I.a)(h,2),m=(f[0],f[1]),x=Object(c.useState)(!1),v=Object(I.a)(x,2),g=(v[0],v[1]),k=Object(P.f)(),y=function(){var e=Object(G.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("".concat("http://127.0.0.1:8000","/network/profile/").concat(k,"/").concat(t));case 3:n=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return console.log(n),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(G.a)(X.a.mark((function e(t){var c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:c=e.sent,n(c),u(c.data.posts),O(c.data.max),d(c.data.page),g(c.data.previous),m(c.data.next),O(c.data.max);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(k.id),_(1),s(!0)}),[]),Object(B.jsx)("div",{children:"Profile View."})};var je=function(){return Object(B.jsx)(i.a,{store:F,children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(L.a,{children:Object(B.jsxs)(se,{children:[Object(B.jsx)(P.b,{exact:!0,path:"/",component:ie}),Object(B.jsx)(P.b,{exact:!0,path:"/register",component:ue}),Object(B.jsx)(P.b,{exact:!0,path:"/login",component:oe}),Object(B.jsx)(P.b,{exact:!0,path:"/profile/:id",component:le})]})}),Object(B.jsx)(re,{})]})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(je,{})}),document.getElementById("root")),de()}},[[81,1,2]]]);
//# sourceMappingURL=main.a9da4e0a.chunk.js.map