(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{35:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(28),s=r.n(a),i=(r(35),r(5)),o=r(2),u=r(7);function j(){return window.localStorage.getItem("token")}function l(){window.localStorage.removeItem("token")}function d(){var e=j();if(!e)return!1;var t=e.split(".");return!(t.length<3)&&JSON.parse(atob(t[1]))}var b=r(0);var h=function(){var e=Object(o.g)(),t=c.a.useState(!1),r=Object(u.a)(t,2),n=r[0],a=r[1];return c.a.useEffect((function(){a(function(){var e=d();return!!e&&Math.round(Date.now()/1e3)<e.exp}())}),[e.pathname]),Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsxs)("div",{className:"navbar-main",children:[Object(b.jsx)(i.b,{to:"/",children:"Home"}),Object(b.jsx)(i.b,{to:"/games",children:"Games"}),Object(b.jsx)(i.b,{to:"/users",children:"Users"})]}),Object(b.jsxs)("div",{className:"navbar-login",children:[n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{to:"/profile",children:"My Profile"}),Object(b.jsx)(i.b,{to:"",onClick:function(){l(),a(!1)},children:"Log Out"})]}),!n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{to:"/login",children:"Login"}),Object(b.jsx)(i.b,{to:"/register",children:"Register"})]})]})]})};var p=function(){return Object(b.jsxs)("section",{id:"home-page",children:[Object(b.jsx)("h1",{children:"Simple Games"}),Object(b.jsx)("h3",{children:"A website with a selection of simple games"})]})},f=r(3),m=r.n(f),x=r(6),O=r(13),v=r.n(O),g="/api";function w(){return v.a.get("".concat(g,"/games/"))}function y(e){return v.a.post("".concat(g,"/auth/register/"),e)}function S(e){return l(),v.a.post("".concat(g,"/auth/login/"),e)}function k(){return v.a.get("".concat(g,"/auth/profile/"),function(){var e=j();return{headers:{Authorization:"Bearer ".concat(e)}}}())}function I(){return v.a.get("".concat(g,"/auth/users/"))}var L=function(){var e=Object(o.g)(),t=c.a.useState({}),r=Object(u.a)(t,2),n=r[0],a=r[1];return c.a.useEffect((function(){(function(){var t=Object(x.a)(m.a.mark((function t(){var r,n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:r=t.sent,n=e.pathname.split("/games/").join(""),1===(c=r.data.filter((function(e){return n===e.name}))).length&&a(c[0]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.pathname]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Game Details"}),n.name&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n.name}),Object(b.jsx)("h4",{children:"Description:"}),Object(b.jsx)("p",{children:n.description}),Object(b.jsx)("h4",{children:"Rules:"}),Object(b.jsx)("p",{children:n.rules}),Object(b.jsx)("h4",{children:"Image:"}),Object(b.jsx)("img",{src:n.image,style:{width:"100%"}})]})]})};var C=function(){var e=Object(o.f)(),t=c.a.useState([]),r=Object(u.a)(t,2),n=r[0],a=r[1],s=c.a.useState([]),i=Object(u.a)(s,2),j=i[0],l=i[1];function d(t){var r=t.target.id.split(" ").join("");e.push("games/".concat(r))}return c.a.useEffect((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,a(t.data),l(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Games"}),Object(b.jsx)("input",{type:"text",placeholder:"Search..",onChange:function(e){var t=e.target.value.toLowerCase();l(n.filter((function(e){return e.name.toLowerCase().includes(t)})))}}),Object(b.jsx)("hr",{}),j.length>0&&Object(b.jsx)("section",{className:"card-section",children:j.map((function(e){return Object(b.jsx)("div",{id:e.name,style:{backgroundImage:"url('".concat(e.image,"')")},onClick:d,children:Object(b.jsx)("h2",{id:e.name,children:e.name})},e.id)}))})]})};var q=function(){var e=Object(o.g)(),t=c.a.useState({}),r=Object(u.a)(t,2),n=r[0],a=r[1];return c.a.useEffect((function(){(function(){var t=Object(x.a)(m.a.mark((function t(){var r,n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:r=t.sent,n=e.pathname.split("/users/").join(""),1===(c=r.data.filter((function(e){return n===e.pk.toString()}))).length&&a(c[0]);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.pathname]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"User Details"}),n.username&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n.username}),Object(b.jsx)("img",{src:n.profileImage,style:{width:"100%"}})]})]})};var E=function(){var e=Object(o.f)(),t=c.a.useState([]),r=Object(u.a)(t,2),n=r[0],a=r[1],s=c.a.useState([]),i=Object(u.a)(s,2),j=i[0],l=i[1];function d(t){var r=t.target.id.split(" ").join("");e.push("users/".concat(r))}return c.a.useEffect((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,a(t.data),l(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Users"}),Object(b.jsx)("input",{type:"text",placeholder:"Search..",onChange:function(e){var t=e.target.value.toLowerCase();l(n.filter((function(e){return e.username.toLowerCase().includes(t)})))}}),Object(b.jsx)("hr",{}),j.length>0&&Object(b.jsx)("section",{className:"card-section",children:j.map((function(e){return Object(b.jsx)("div",{id:e.pk,style:{backgroundImage:"url('".concat(e.profileImage,"')")},onClick:d,children:Object(b.jsx)("h2",{id:e.pk,children:e.username})},e.pk)}))})]})};var F=function(){var e=Object(o.f)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsxs)("form",{id:"register-form",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Username: "}),Object(b.jsx)("input",{type:"text",id:"username"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Email: "}),Object(b.jsx)("input",{type:"text",id:"email"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Image URL: "}),Object(b.jsx)("input",{type:"text",id:"profile_image"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Password: "}),Object(b.jsx)("input",{type:"password",id:"password"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Confirm Password: "}),Object(b.jsx)("input",{type:"password",id:"password_confirmation"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"submit",type:"submit",onClick:function(t){t.preventDefault();var r={username:document.querySelector("#username").value,email:document.querySelector("#email").value,profileImage:document.querySelector("#profile_image").value,password:document.querySelector("#password").value,passwordConfirmation:document.querySelector("#password_confirmation").value},n=document.querySelector("#register-form");n.classList.remove("form-red"),function(){var t=Object(x.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(r);case 3:n.classList.remove("form-red"),e.push("/login/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n.classList.add("form-red");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()(r)},children:"Submit"})})]})]})};var N=function(){var e=Object(o.f)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("form",{id:"login-form",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Username: "}),Object(b.jsx)("input",{type:"text",id:"username"})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Password: "}),Object(b.jsx)("input",{type:"password",id:"password"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"submit",type:"submit",onClick:function(t){t.preventDefault();var r=document.querySelector("#username").value,n=document.querySelector("#password").value,c=document.querySelector("#login-form");c.classList.remove("form-red");var a={username:r,password:n};(function(){var t=Object(x.a)(m.a.mark((function t(r){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(r);case 3:n=t.sent,a=n.data.token,window.localStorage.setItem("token",a),c.classList.remove("form-red"),e.push("/profile"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c.classList.add("form-red");case 12:case"end":return t.stop()}var a}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}})()(a)},children:"Submit"})})]})]})};var U=function(){var e=c.a.useState([]),t=Object(u.a)(e,2),r=t[0],n=t[1];return c.a.useEffect((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsxs)("h2",{children:["Username: ",r.username]}),Object(b.jsxs)("h3",{children:["Email: ",r.email]}),Object(b.jsx)("img",{src:r.profileImage,style:{width:"100%"}})]})};var D=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/games/:gameId",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{path:"/games",children:Object(b.jsx)(C,{})}),Object(b.jsx)(o.a,{path:"/users/:userId",children:Object(b.jsx)(q,{})}),Object(b.jsx)(o.a,{path:"/users",children:Object(b.jsx)(E,{})}),Object(b.jsx)(o.a,{path:"/register",children:Object(b.jsx)(F,{})}),Object(b.jsx)(o.a,{path:"/login",children:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/profile",children:Object(b.jsx)(U,{})})]})]})};s.a.render(Object(b.jsx)(D,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0b2d4f61.chunk.js.map