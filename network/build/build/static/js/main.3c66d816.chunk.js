(this.webpackJsonpnetworkreact=this.webpackJsonpnetworkreact||[]).push([[0],{54:function(e,t,n){},56:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(22),s=n.n(r),i=(n(54),n.p,n(55),n(56),n(11)),o=n(25),l=n(47),u=n(48),j=n(5),d="REGISTER_SUCCESS",p="REGISTER_FAIL",b="LOGIN_SUCCESS",O="LOGIN_FAIL",f="LOGOUT_SUCCESS",h="LOGOUT_FAIL",x="AUTHENTICATE_SUCCESS",m="AUTHENTICATE_FAIL",v="USER_SUCCESS",g="USER_FAIL",w="POST_SUCCESS",k="POST_FAIL",_="UPDATE_FAIL",y="UNLIKE_SUCCESS",N="LIKE_SUCCESS",S="LIKE_FAIL",C="FOLLOW_SUCCESS",A="UNFOLLOW_SUCCESS",F="FOLLOW_FAIL",E={isAuthenticated:null},L={isAuthenticated:null,username:"",email:"",likes:"",post:"",follows:""},P=Object(o.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case x:case m:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:c});case d:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!0});case f:return Object(j.a)(Object(j.a)({},e),{},{isAuthenticated:!1});case p:case O:case h:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case v:return Object(j.a)(Object(j.a)({},e),{},{id:c.id,username:c.username,email:c.email,likes:c.likes,follows:c.follows});case g:return Object(j.a)(Object(j.a)({},e),{},{id:"",username:"",email:"",likes:"",follows:""});case N:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.concat(c)});case y:return Object(j.a)(Object(j.a)({},e),{},{likes:e.likes.filter((function(e){return e!==c}))});case w:return Object(j.a)(Object(j.a)({},e),{},{post:c});case C:return Object(j.a)(Object(j.a)({},e),{},{follows:e.follows.concat(c)});case A:return Object(j.a)(Object(j.a)({},e),{},{follows:e.follows.filter((function(e){return e!==c}))});case F:case k:case S:default:return e}}}),T=[u.a],U=Object(o.createStore)(P,{},Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,T))),I=n(14),R=n(9),J=n(18),q=n(4),D=n(13),X=n.n(D),G=n(32),K=n(2),W=n.n(K),H=n(8),B=n(10),M=n.n(B),z=n(0),Q=function(){var e=Object(c.useState)(""),t=Object(q.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=null;if(document.cookie&&""!==document.cookie){var n=document.cookie.split(";");console.log(n);for(var c=0;c<n.length;c++){var a=n[c].trim();if(console.log(a.substring(0,e.length+1)),a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}}else console.log("error with document.cookie");return console.log(t),t};(function(){var e=Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat("http://127.0.0.1:8000","/network/csrf_cookie"));case 3:console.log("successfully fetched csrf"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("an error occured fetching csrf");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}})()(),a(e("csrftoken")),console.log(e("csrftoken")),console.log(n)}),[]),Object(z.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:n})};var V=Object(i.b)(null,{create:function(e){return function(){var t=Object(H.a)(W.a.mark((function t(n){var c,a,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},a=JSON.stringify({content:e}),t.prev=2,t.next=5,M.a.post("".concat("http://127.0.0.1:8000","/network/create"),a,c);case 5:(r=t.sent).data.error?(console.error(r.data.error),n({type:k})):n({type:w,payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:k});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.create,n=e.updatePost,a=Object(c.useState)({content:""}),r=Object(q.a)(a,2),s=r[0],i=r[1],o=s.content,l=function(e){o.length>0&&(t(o),i({content:""}),n())};return Object(z.jsx)("div",{className:"compose_container",children:Object(z.jsxs)("div",{className:"compose_section",children:[Object(z.jsx)("div",{className:"profile",children:Object(z.jsxs)("div",{className:"image_circle",children:[Object(z.jsx)("div",{className:"inner_image"}),Object(z.jsx)("div",{className:"inner_image2"})]})}),Object(z.jsxs)("form",{className:"flex_compose",children:[Object(z.jsx)(Q,{}),Object(z.jsx)(G.a,{maxRows:4,onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),l())}(e)},type:"text",onChange:function(e){return function(e){i(Object(j.a)(Object(j.a)({},s),{},Object(J.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:o,placeholder:"What's on your mind?",required:!0})]})]})})})),Y=n(24),Z=n(19),$=n(20);var ee=Object(i.b)((function(e){return{sessionUser:e.user,sessionLikes:e.user.liking,isAuthenticated:e.auth.isAuthenticated}}),{update:function(e,t){return function(){var n=Object(H.a)(W.a.mark((function n(c){var a,r,s,i;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},r=JSON.stringify({content:e}),s=t,n.prev=3,n.next=6,M.a.put("".concat("http://127.0.0.1:8000","/network/create/").concat(s),r,a);case 6:(i=n.sent).data.error?(console.error(i.data.error),c({type:_})):c({type:"UPDATE_SUCCESS"}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),c({type:_});case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}()},like:function(e){return function(){var t=Object(H.a)(W.a.mark((function t(n){var c,a,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},a=JSON.stringify({withCredentials:!0}),t.prev=2,t.next=5,M.a.put("".concat("http://127.0.0.1:8000","/network/like/").concat(e),a,c);case 5:"liked"===(r=t.sent).data.isLiked?(console.error(r.data.isLiked),n({type:N,payload:e})):"unliked"===r.data.isLiked?n({type:y,payload:e}):n({type:S}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:S});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.body,n=e.id,a=e.username,r=e.likes,s=e.timestamp,i=e.sessionUser,o=(e.sessionLikes,e.update),l=e.isAuthenticated,u=e.like,d=Object(c.useState)(!1),p=Object(q.a)(d,2),b=p[0],O=p[1],f=Object(c.useState)(!1),h=Object(q.a)(f,2),x=h[0],m=h[1],v=Object(c.useState)(!1),g=Object(q.a)(v,2),w=g[0],k=g[1],_=Object(c.useState)(t),y=Object(q.a)(_,2),N=y[0],S=y[1],C=Object(c.useState)({content:t}),A=Object(q.a)(C,2),F=A[0],E=A[1];Object(c.useEffect)((function(){void 0!==i.likes&&m(i.likes.includes(n))}),[]);var L=F.content,P=function(e){L.length>0&&(console.log(F),o(L,n),S(L),k(!w))},T=function(e){O(!b),u(n)},U=Object(z.jsx)(z.Fragment,{children:Object(z.jsx)("form",{className:"flex_compose",children:Object(z.jsx)(G.a,{maxRows:4,onKeyPress:function(e){return function(e){"Enter"===e.key&&(e.preventDefault(),P())}(e)},type:"text",onChange:function(e){return function(e){return E(Object(j.a)(Object(j.a)({},F),{},Object(J.a)({},e.target.name,e.target.value)))}(e)},name:"content",className:"compose_in",value:L,placeholder:"What's on your mind?",required:!0})})}),R=Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{children:Object(z.jsx)(Z.a,{className:"like_auth ".concat(b?"":"like_auth_active"),onClick:function(e){return T()},icon:$.b,color:"grey"})}),Object(z.jsx)("span",{className:"likes_space",children:b?r-1:r})]}),D=Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{children:Object(z.jsx)(Z.a,{className:"like_auth ".concat(b&&"like_auth_active"),onClick:function(e){return T()},icon:$.b,color:"grey"})}),Object(z.jsx)("span",{className:"likes_space",children:b?r+1:r})]}),X=Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("span",{children:Object(z.jsx)(Z.a,{icon:$.b,color:"grey"})}),Object(z.jsx)("span",{className:"likes_space",children:r})]});return Object(z.jsxs)("div",{className:"post_container",children:[Object(z.jsxs)("div",{className:"profile_section",children:[Object(z.jsxs)("div",{className:"image_circle",children:[Object(z.jsx)("div",{className:"inner_image"}),Object(z.jsx)("div",{className:"inner_image2"})]}),Object(z.jsxs)("div",{className:"header_post",children:[Object(z.jsxs)("div",{className:"post_name_date",children:[Object(z.jsx)(I.b,{exact:!0,to:"/profile/".concat(a),className:"username_post",children:a}),Object(z.jsx)("div",{className:"date_post",children:s})]}),Object(z.jsx)("div",{className:"edit_container_custom",children:i.username===a&&Object(z.jsxs)("button",{className:"edit_button_custom",onClick:function(e){return k(!w),void E({content:t})},value:"edit",children:[" ",w?"X":"Edit"]})})]})]}),Object(z.jsx)("div",{className:"break"}),Object(z.jsxs)("div",{className:"body_section",children:[w?U:Object(z.jsx)("span",{className:"body_content",children:N}),Object(z.jsx)("div",{className:"like_container",children:l?x?R:D:X})]})]})}));var te=function(){return Object(z.jsxs)("div",{className:"load",children:[Object(z.jsx)("p",{children:" loading "}),Object(z.jsx)(Z.a,{className:"load_spin",icon:$.c})]})};var ne=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.user,newPost:e.user.post}}),null)((function(e){e.isAuthenticated,e.user,e.updatePost;var t=e.loaded,n=(e.setPosts,e.posts),c=(e.newPost,e.hasNext),a=e.hasPrev,r=e.setPageLoad,s=e.page,i=e.maxPage,o=n.map((function(e,t){return Object(z.jsx)(ee,{body:e.content,username:e.creator,likes:e.likes,timestamp:e.timestamp,id:e.id},t)})),l=Object(z.jsx)("div",{className:"pagination_location",children:Object(z.jsxs)(Y.a,{children:[1!=s&&Object(z.jsx)(Y.a.First,{onClick:function(){return r(1)}}),a&&Object(z.jsx)(Y.a.Prev,{onClick:function(){return r(s-1)}}),Object(z.jsx)(Y.a.Item,{active:!0,children:s}),c&&Object(z.jsx)(Y.a.Next,{onClick:function(){return r(s+1)}}),s!=i&&Object(z.jsx)(Y.a.Last,{onClick:function(){return r(i)}})]})});return Object(z.jsx)("div",{children:Object(z.jsxs)("div",{className:"postBox_container",children:[t?o:Object(z.jsx)(te,{}),l]})})}));var ce=function(e){return e.open,Object(z.jsxs)("div",{className:"notify_box",children:[Object(z.jsx)("div",{className:"notification_item",children:Object(z.jsx)("p",{children:"notification"})}),Object(z.jsx)("div",{className:"notification_item",children:Object(z.jsx)("p",{children:"notification"})}),Object(z.jsx)("div",{className:"notification_item",children:Object(z.jsx)("p",{children:"notification"})}),Object(z.jsx)("div",{className:"notification_item",children:Object(z.jsx)("p",{children:"notification"})})]})},ae=n(86);var re=function(e){e.children;var t=Object(c.useState)(!1),n=Object(q.a)(t,2),r=n[0],s=n[1],i=a.a.useRef(null);return Object(z.jsxs)("div",{onClick:function(){return s(!r)},children:[Object(z.jsx)("div",{className:"bell",children:Object(z.jsx)(Z.a,{icon:$.a})}),Object(z.jsx)(ae.a,{in:r,nodeRef:i,classNames:"menu-primary",timeout:1e3,unmountOnExit:!0,children:Object(z.jsx)("div",{ref:i,children:Object(z.jsx)(ce,{})})})]})},se=function(e){return function(){var e=Object(H.a)(W.a.mark((function e(t){var n,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,M.a.get("".concat("http://127.0.0.1:8000","/network/user"),n);case 4:(c=e.sent).data.error?(console.error(c.data.error),t({type:g})):t({type:v,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:g});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};var ie=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(H.a)(W.a.mark((function e(t){var n,c,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFTOKEN":X.a.get("csrftoken")}},c=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,M.a.post("".concat("http://127.0.0.1:8000","/network/logout"),c,n);case 5:(a=e.sent).data.error?(console.log(a.data.error),t({type:h})):t({type:f}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:h});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.login;var t=e.logout,n=(e.follow,e.isAuthenticated),c=Object(z.jsxs)("div",{className:"navbar_wrapper",children:[Object(z.jsx)(I.b,{exact:!0,to:"/",children:"Home"}),Object(z.jsx)(I.c,{exact:!0,to:"/follow",children:"Follow"}),Object(z.jsx)(I.c,{exact:!0,to:"/logout",onClick:t,children:"Log Out"}),Object(z.jsx)(re,{children:Object(z.jsx)(ce,{})})]}),a=Object(z.jsxs)("div",{className:"navbar_wrapper",children:[Object(z.jsx)(I.b,{exact:!0,to:"/",children:"Home"}),Object(z.jsx)(I.c,{exact:!0,to:"/login",children:"Log In"}),Object(z.jsx)(I.c,{exact:!0,to:"/register",children:"Register"}),Object(z.jsx)(re,{children:Object(z.jsx)(ce,{})})]});return Object(z.jsx)("div",{className:"navbar_container",children:n?c:a})}));var oe=function(){return Object(z.jsx)("div",{className:"footer",children:Object(z.jsx)("span",{children:"Footer"})})},le=n(28);var ue=function(e){var t=e.sessionUser,n=e.alreadyFollowing,a=e.isAuthenticated,r=e.followAction,s=e.username,i=e.following,o=e.followers,l=(e.follow,e.id),u=Object(c.useState)(!1),j=Object(q.a)(u,2),d=j[0],p=j[1],b=function(e){p(!d),r(),console.log(n)},O=Object(z.jsx)(z.Fragment,{children:d?Object(z.jsx)(le.a,{variant:"outline-primary",onClick:function(e){return b()},children:" Follow"}):Object(z.jsx)(le.a,{variant:"outline-primary",onClick:function(e){return b()},active:!0,children:" Unfollow "})}),f=Object(z.jsx)(z.Fragment,{children:d?Object(z.jsx)(le.a,{variant:"outline-primary",onClick:function(e){return b()},active:!0,children:" Unfollow "}):Object(z.jsx)(le.a,{variant:"outline-primary",onClick:function(e){return b()},children:" Follow"})}),h=Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("p",{children:["Followers: ",Object(z.jsxs)("p",{children:[" ",d?o-1:o]})]})}),x=Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("p",{children:["Followers: ",Object(z.jsxs)("p",{children:[" ",d?o+1:o]})]})}),m=Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"profile_container",children:[Object(z.jsxs)("div",{className:"profile_header",children:[Object(z.jsx)("div",{className:"profile_image_container",children:Object(z.jsx)("div",{className:"profile_image",children:Object(z.jsxs)("div",{className:"image_circle",children:[Object(z.jsx)("div",{className:"inner_image"}),Object(z.jsx)("div",{className:"inner_image2"})]})})}),Object(z.jsxs)("div",{className:"profile_content",children:[Object(z.jsx)("div",{className:"profile_username",children:Object(z.jsx)("p",{children:s})}),Object(z.jsxs)("div",{className:"follower_following",children:[Object(z.jsxs)("p",{children:["Following: ",Object(z.jsxs)("p",{children:[" ",i]})]}),n?h:x]})]})]}),a&&t.id!==l&&Object(z.jsx)("div",{className:"follow_button_container",children:n?O:f})]}),Object(z.jsx)("div",{className:"break_out"})]});return Object(z.jsx)(z.Fragment,{children:m})},je=Object(i.b)(null,{checkAuthenticated:function(){return function(){var e=Object(H.a)(W.a.mark((function e(t){var n,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={credentials:"include",mode:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,M.a.get("".concat("http://127.0.0.1:8000","/network/authenticated"),n);case 4:(c=e.sent).data.error||"error"===c.data.isAuthenticated?t({type:m,payload:!1}):"success"===c.data.isAuthenticated&&t({type:x,payload:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},get_user:se})((function(e){var t=e.children,n=e.get_user,a=e.checkAuthenticated,r=Object(c.useState)(!1),s=Object(q.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){a(),n(),o(!0)}),[]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ie,{}),Object(z.jsx)("header",{className:"App-header",children:i?t:Object(z.jsx)(te,{})})]})})),de=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),null)((function(e){var t=e.isAuthenticated,n=Object(c.useState)(!1),a=Object(q.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(q.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(1),d=Object(q.a)(j,2),p=d[0],b=d[1],O=Object(c.useState)(1),f=Object(q.a)(O,2),h=f[0],x=f[1],m=Object(c.useState)(!1),v=Object(q.a)(m,2),g=v[0],w=v[1],k=Object(c.useState)(!1),_=Object(q.a)(k,2),y=_[0],N=_[1],S=function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat("http://127.0.0.1:8000","/network/posts/").concat(t));case 3:n=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,u(n.data.posts),x(n.data.max),b(n.data.page),N(n.data.previous),w(n.data.next),x(n.data.max);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C(1),s(!0)}),[]),Object(c.useEffect)((function(){s(!0),console.log(l),console.log(p),console.log(y),console.log(g)}),[l]);var A=function(){var e=Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1),b(p-1),C(1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(H.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1),C(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(V,{updatePost:A}),Object(z.jsx)("div",{className:"break_out"})]});return Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{className:"compose_home_container",children:t&&E}),Object(z.jsx)("div",{className:"postbox_home_container",children:r?Object(z.jsx)(ne,{maxPage:h,hasNext:g,hasPrev:y,page:p,setPageLoad:F,getPosts:C,updatePost:A,setPosts:u,posts:l,loaded:r}):Object(z.jsx)(te,{})})]})})),pe=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(H.a)(W.a.mark((function n(c){var a,r,s;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),n.prev=2,n.next=5,M.a.post("".concat("http://127.0.0.1:8000","/network/login"),r,a);case 5:(s=n.sent).data.error?(console.log(s.data.error),c({type:O})):(c({type:b}),c(se())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function e(t){var n=t.login,a=t.isAuthenticated,r=Object(c.useState)({username:"",password:""}),s=Object(q.a)(r,2),i=s[0],o=s[1],l=i.username,u=i.password,d=function(e){return o(Object(j.a)(Object(j.a)({},i),{},Object(J.a)({},e.target.name,e.target.value)))};return a?Object(z.jsx)(R.a,{to:"/"}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h1",{children:"Log Into your Account."}),Object(z.jsx)("div",{className:"form_container",children:Object(z.jsxs)("form",{className:"form_wrapper",onSubmit:function(t){return function(t){console.log(e),t.preventDefault(),n(l,u)}(t)},children:[Object(z.jsx)(Q,{}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Username"}),Object(z.jsx)("input",{type:"text",onChange:function(e){return d(e)},name:"username",className:"registration_input",value:l,placeholder:"Enter Username",required:!0})]}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Password"}),Object(z.jsx)("input",{type:"password",onChange:function(e){return d(e)},name:"password",className:"registration_input",value:u,placeholder:"Enter Password",required:!0})]}),Object(z.jsx)("input",{type:"submit",className:"submit_button",value:"Log in"})]})})]})})),be=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,n,c){return function(){var a=Object(H.a)(W.a.mark((function a(r){var s,i,o;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},i=JSON.stringify({username:e,password:t,confirmation:c,email:n}),a.prev=2,a.next=5,M.a.post("".concat("http://127.0.0.1:8000","/network/register"),i,s);case 5:(o=a.sent).data.error?(console.error(o.data.error),r({type:p})):r({type:d}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),r({type:p});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.register,n=e.isAuthenticated,a=Object(c.useState)({username:"",email:"",password:"",confirmation:""}),r=Object(q.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),l=Object(q.a)(o,2),u=l[0],d=l[1],p=s.username,b=s.email,O=s.password,f=s.confirmation,h=function(e){return i(Object(j.a)(Object(j.a)({},s),{},Object(J.a)({},e.target.name,e.target.value)))};return u?Object(z.jsx)(R.a,{to:"/login"}):n?Object(z.jsx)(R.a,{to:"/"}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("h1",{children:"Register for an Account."}),Object(z.jsx)("div",{className:"form_container",children:Object(z.jsxs)("form",{className:"form_wrapper",onSubmit:function(e){return function(e){console.log(s),e.preventDefault(),O===f&&(t(p,O,b,f),d(!0))}(e)},children:[Object(z.jsx)(Q,{}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Username"}),Object(z.jsx)("input",{type:"text",onChange:function(e){return h(e)},name:"username",className:"registration_input",value:p,placeholder:"Enter Username",required:!0})]}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Email"}),Object(z.jsx)("input",{type:"email",onChange:function(e){return h(e)},name:"email",className:"registration_input",value:b,placeholder:"Enter email address",required:!0})]}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Password:"}),Object(z.jsx)("input",{type:"password",onChange:function(e){return h(e)},name:"password",className:"registration_input",value:O,required:!0})]}),Object(z.jsxs)("div",{className:"input_field",children:[Object(z.jsx)("label",{children:"Re-enter password:"}),Object(z.jsx)("input",{type:"password",onChange:function(e){return h(e)},name:"confirmation",className:"registration_input",value:f,required:!0})]}),Object(z.jsx)("input",{type:"submit",className:"submit_button",value:"register"})]})})]})})),Oe=Object(i.b)((function(e){return{sessionUser:e.user,isAuthenticated:e.auth.isAuthenticated}}),{follow:function(e){return function(){var t=Object(H.a)(W.a.mark((function t(n){var c,a,r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":X.a.get("csrftoken")}},a=JSON.stringify({withCredentials:!0}),t.prev=2,t.next=5,M.a.put("".concat("http://127.0.0.1:8000","/network/follow/").concat(e),a,c);case 5:"follow"===(r=t.sent).data.follow?(console.error(r.data.isLiked),n({type:C,payload:e})):"unfollow"===r.data.follow?n({type:A,payload:e}):n({type:F}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n({type:F});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e,t,n){var a=Object(c.useState)({username:"",followers:"",following:"",id:""}),r=Object(q.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),l=Object(q.a)(o,2),u=l[0],j=l[1],d=Object(c.useState)(!1),p=Object(q.a)(d,2),b=p[0],O=p[1],f=Object(c.useState)([]),h=Object(q.a)(f,2),x=h[0],m=h[1],v=Object(c.useState)(1),g=Object(q.a)(v,2),w=g[0],k=g[1],_=Object(c.useState)(1),y=Object(q.a)(_,2),N=y[0],S=y[1],C=Object(c.useState)(!1),A=Object(q.a)(C,2),F=A[0],E=A[1],L=Object(c.useState)(!1),P=Object(q.a)(L,2),T=P[0],U=P[1],I=Object(c.useState)(!1),J=Object(q.a)(I,2),D=J[0],X=J[1],G=Object(R.f)(),K=function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat("http://127.0.0.1:8000","/network/profile/").concat(G.id,"/").concat(t));case 3:n=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:n=e.sent,i(n.data),m(n.data.user_posts.posts),S(n.data.user_posts.max),k(n.data.user_posts.page),U(n.data.user_posts.previous),E(n.data.user_posts.next),S(n.data.user_posts.max);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(H.a)(W.a.mark((function e(t){var n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t);case 2:n=e.sent,m(n.data.user_posts.posts),S(n.data.user_posts.max),k(n.data.user_posts.page),U(n.data.user_posts.previous),E(n.data.user_posts.next),S(n.data.user_posts.max);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){console.log(s),O(!0),void 0!==e.follows&&X(e.follows.includes(G))}),[s]),Object(c.useEffect)((function(){console.log(x),j(!0)}),[x]),Object(c.useEffect)((function(){B(1)}),[]);var V=function(){var e=Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!1),k(w-1),Q(1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(H.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!1),Q(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{children:b?Object(z.jsx)(ue,{followAction:function(){n(s.id)},follow:n,sessionUser:e,isAuthenticated:t,username:s.username,alreadyFollowing:D,followers:s.followers,following:s.following,id:s.id}):Object(z.jsx)(te,{})}),Object(z.jsx)("div",{className:"center",children:Object(z.jsx)("div",{className:"postbox_home_container",children:u?Object(z.jsx)(ne,{maxPage:N,hasNext:F,hasPrev:T,page:w,setPageLoad:Y,getPosts:Q,updatePost:V,setPosts:m,posts:x,loaded:u}):Object(z.jsx)(te,{})})})]})}));var fe=function(){return Object(z.jsx)(i.a,{store:U,children:Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(I.a,{children:Object(z.jsxs)(je,{children:[Object(z.jsx)(R.b,{exact:!0,path:"/",component:de}),Object(z.jsx)(R.b,{exact:!0,path:"/register",component:be}),Object(z.jsx)(R.b,{exact:!0,path:"/login",component:pe}),Object(z.jsx)(R.b,{exact:!0,path:"/profile/:id",component:Oe})]})}),Object(z.jsx)(oe,{})]})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(fe,{})}),document.getElementById("root")),he()}},[[84,1,2]]]);
//# sourceMappingURL=main.3c66d816.chunk.js.map