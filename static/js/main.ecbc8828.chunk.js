(this.webpackJsonphw3=this.webpackJsonphw3||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(76),a(2)),i=a(23),s=a(59),m=a(14),u=Object(m.a)(),p=a(13),d=a(18),g=a.n(d),h=a(56);a(50);var E=function(e){var t=o.a.useState(e.notes),a=Object(p.a)(t,2),n=a[0],r=a[1],l=o.a.useState(e._id),c=Object(p.a)(l,2),i=c[0];return c[1],o.a.createElement(h.a,{trigger:o.a.createElement("button",{className:"button"}," View "),modal:!0},(function(t){return o.a.createElement("div",{className:"modal"},o.a.createElement("a",{className:"close",onClick:t},"\xd7"),o.a.createElement("div",{className:"header"}," ",e.title," "),o.a.createElement("textarea",{type:"text",className:"content",value:n,onChange:function(e){return r(e.target.value)}}),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{onClick:function(a){a.preventDefault(),""!==n?g.a.post("https://notebe.herokuapp.com/note/editNotes",{id:i,notes:n}).then((function(t){e.update(),console.log(t)})).catch((function(e){return console.log(e)})):alert("no empty notes!"),t()}},"submit edit"),o.a.createElement("button",{onClick:function(){console.log("modal closed "),t()}},"close modal")))}))},f=(a(94),function(e){var t={withCredentials:!1},a=o.a.useState([]),n=Object(p.a)(a,2),r=n[0],l=n[1],c=o.a.useState(""),i=Object(p.a)(c,2),s=i[0],m=i[1],u=o.a.useState(""),d=Object(p.a)(u,2),h=d[0],f=d[1],b=o.a.useState(""),v=Object(p.a)(b,2),w=(v[0],v[1]);function N(){g.a.get("https://notebe.herokuapp.com/note/getAllNotes",t).then((function(e){l(e.data)})).catch((function(e){console.log(e)})),g.a.get("/note/getClient",t).then((function(e){console.log(e.data),w(e.data)})).catch((function(e){console.log(e)}))}o.a.useEffect(N,[]);return o.a.createElement("div",{className:"notepage"},o.a.createElement("header",{className:"header"},o.a.createElement("h3",{className:"title"},"React Note App",o.a.createElement("h4",{className:"subtitle"}))),o.a.createElement("div",{className:"bar"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==s&""!==h&&g.a.post("https://notebe.herokuapp.com/note/createNotes",{title:s,notes:h},t).then((function(e){m(""),f(""),N(),console.log(e)})).catch((function(e){return console.log(e)}))}},o.a.createElement("label",null," Title "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:s,placeholder:"title",onChange:function(e){return m(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("label",null," Notes "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:h,placeholder:"notes",onChange:function(e){return f(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit"}))),o.a.createElement((function(e){return o.a.createElement("div",{className:"notes"},r.map((function(e,t){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"text"},o.a.createElement("h4",null,e.title),o.a.createElement("p",null,e.notes))),o.a.createElement(E,{title:e.title,notes:e.notes,_id:e._id,update:N}))})))}),null))}),b=a(142),v=a(137),w=a(141),N=a(139),y=a(138),x=a(106),C=a(57),S=a(135),j=(a(95),a(31)),k=a.n(j),O=Object(C.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},h:{textAlign:"center"}}}));function W(){var e=O(),t=o.a.useState(""),a=Object(p.a)(t,2),n=a[0],r=a[1],l=o.a.useState(""),c=Object(p.a)(l,2),i=c[0],s=c[1],m=o.a.useState(""),u=Object(p.a)(m,2),d=u[0],h=u[1];return o.a.createElement("div",null,o.a.createElement(S.a,{component:"main",maxWidth:"xs"},o.a.createElement(v.a,null),o.a.createElement("div",{className:e.paper},o.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),0!=n&&0!=i?g.a.post("https://notebe.herokuapp.com/createUsers",{username:n,password:k()(i)}).then((function(e){h(e.data)})).catch((function(e){return console.log(e)})):h("Invalid. Please type in something.")}},o.a.createElement(y.a,{container:!0,spacing:2},o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",onChange:function(e){return r(e.target.value)}})),o.a.createElement(y.a,{item:!0,xs:12},o.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return s(e.target.value)}})),o.a.createElement(y.a,{item:!0,xs:12})),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),o.a.createElement("h2",{className:e.h},d),o.a.createElement(y.a,{container:!0,justify:"flex-end"},o.a.createElement(y.a,{item:!0},o.a.createElement(N.a,{href:"/",variant:"body2"},"Already have an account? Sign in")))))))}var I=a(140),D=a(35),A=a.n(D),T=a(20),q=a.n(T),U={withCredentials:!1},F=Object(C.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function L(e){var t=F(),a=o.a.useState(""),n=Object(p.a)(a,2),r=n[0],l=n[1],c=o.a.useState(""),i=Object(p.a)(c,2),s=i[0],m=i[1];return o.a.createElement("div",null,o.a.createElement(S.a,{component:"main",maxWidth:"xs"},o.a.createElement(v.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(I.a,{className:t.avatar},o.a.createElement(A.a,null)),o.a.createElement(x.a,{component:"h1",variant:"h5"},"Sign in"),o.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var t={username:r,password:k()(s)};g.a.post("https://notebe.herokuapp.com/login",t,U).then((function(e){m(""),e.data?(q.a.set("username",t.username),q.a.set("password",t.password),q.a.set("isLoggedIn",!0)):(q.a.set("username",""),q.a.set("password",""),q.a.set("isLoggedIn",!1)),console.log(e)})).then((function(){u.push("/note")})).catch((function(e){return console.log(e)}))}},o.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return l(e.target.value)}}),o.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return m(e.target.value)}}),o.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),o.a.createElement(y.a,{container:!0},o.a.createElement(y.a,{item:!0},o.a.createElement(N.a,{href:"/create",variant:"body2"},"Don't have an account? Sign Up")))))))}var P=function(){return o.a.createElement(s.a,{history:u},o.a.createElement("div",null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"noteFE/#/create",component:W}),o.a.createElement((function(e){var t=e.component,a=Object(c.a)(e,["component"]);return o.a.createElement(i.b,Object.assign({},a,{render:function(e){return"true"==q.a.get("isLoggedIn")?o.a.createElement(t,e):o.a.createElement(i.a,{to:"/"})}}))}),{path:"noteFE/#/note",component:f}),o.a.createElement(i.b,{exact:!0,path:"/",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){},71:function(e,t,a){e.exports=a(105)},76:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.ecbc8828.chunk.js.map