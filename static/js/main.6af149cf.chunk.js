(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{65:function(t,e,a){},66:function(t,e,a){},89:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),r=(a(56),a(57),a(6)),s=a(20),i=a(49),o=a(23),l=a(9),d="ADD_TO_CART",j="LOAD_CART",b="PRODUCT_DELETE",u="LOGIN",O="LOGOUT",h=[],p=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:if(t=localStorage.getItem("cart"),t){t=JSON.parse(t);var c=t.find((function(t){return t.id===a.payload.id}));t=c?t.map((function(t){return t.id===a.payload.id?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity+1,total:parseInt(t.total)+parseInt(a.payload.price)}):t})):[].concat(Object(o.a)(t),[Object(l.a)(Object(l.a)({},a.payload),{},{quantity:1,total:a.payload.price})])}else t=[Object(l.a)(Object(l.a)({},a.payload),{},{quantity:1,total:a.payload.price})];return localStorage.setItem("cart",JSON.stringify(t)),Object(o.a)(t);case j:return t=localStorage.getItem("cart"),t?(t=JSON.parse(t),Object(o.a)(t)):Object(o.a)(e);case b:return t=localStorage.getItem("cart"),t&&(t=JSON.parse(t),t=t.map((function(t){return t.id===a.payload.id&&t.quantity>1?Object(l.a)(Object(l.a)({},t),{},{quantity:t.quantity-1,total:parseInt(t.total)-parseInt(t.price)}):t}))),1===a.payload.quantity&&(t=t.filter((function(t){return t.id!==a.payload.id}))),localStorage.setItem("cart",JSON.stringify(t)),Object(o.a)(t);default:return Object(o.a)(e)}},m={loading:!1,activo:!1},x=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return t=Object(l.a)(Object(l.a)({},e),{},{activo:!0,userData:{userName:a.payload.displayName,image:a.payload.photoURL,email:a.payload.email,id:a.payload.uid}}),Object(l.a)({},t);case O:return m;default:return Object(l.a)({},e)}},f=Object(s.c)({cart:p,user:x}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,v=Object(s.e)(f,g(Object(s.a)(i.a))),y=a(30),N=a.n(y),S=(a(65),a(21)),w=a(17),I=a(7),C=(a(66),a(25)),k=a.n(C),D=a(32),_=a(22);a(68),a(91),a(90);_.a.initializeApp({apiKey:"AIzaSyBx7ETymOmjvyZ-VcOGizriPcU6G0MpJJ8",authDomain:"redux-login-b7c48.firebaseapp.com",projectId:"redux-login-b7c48",storageBucket:"redux-login-b7c48.appspot.com",messagingSenderId:"170656976103",appId:"1:170656976103:web:b33ef37ef45c4aee6da642"});_.a.auth(),_.a.firestore(),_.a.storage();var E=new _.a.auth.GoogleAuthProvider,P=function(t,e,a,c){return{type:u,payload:{uid:t,displayName:e,photoURL:a,email:c}}},R=a(2),T=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.cart.length})),a=Object(r.c)((function(t){return t.user.activo})),c=Object(r.c)((function(t){return t.user.userData}));return Object(R.jsxs)("div",{className:"navbar navbar-dark bg-dark sticky-top",children:[a?Object(R.jsx)(w.b,{to:"/",className:"navbar-brand mx-4",children:c.userName}):Object(R.jsx)(w.b,{to:"/",className:"navbar-brand mx-4",children:"Redux Challenge"}),Object(R.jsx)("div",{className:"d-flex flex-row-reverse",children:a?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("button",{onClick:function(){t(function(){var t=Object(D.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.auth().signOut();case 2:e({type:O});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},className:"btn btn-dark",children:"Cerrar Sesi\xf3n"}),Object(R.jsx)(w.c,{className:"btn btn-dark mr-2",to:"/",exact:!0,children:"Perfil"}),Object(R.jsx)(w.c,{className:"btn btn-dark mr-2",to:"/products",exact:!0,children:"Products"}),Object(R.jsxs)(w.c,{to:"/cart",exact:!0,children:[Object(R.jsx)("img",{id:"image",src:"https://imgbox.es/images/2021/03/16/carrito20dbc749abd24d18.th.png",alt:"cart",style:{height:"40px"}}),Object(R.jsx)("h4",{id:"quantyfi",children:e>=1&&e})]})]}):Object(R.jsx)(w.c,{className:"btn btn-dark mr-2",to:"/login",exact:!0,children:"Login"})})]})},q=a(51),A=a.n(q),L=a(53),J=function(){var t=Object(c.useState)([]),e=Object(S.a)(t,2),a=e[0],n=e[1],s=Object(c.useState)(1),i=Object(S.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(""),b=Object(S.a)(j,2),u=b[0],O=b[1],h=Object(c.useState)({}),p=Object(S.a)(h,2),m=p[0],x=p[1],f=Object(r.c)((function(t){return t.cart}));Object(c.useEffect)((function(){var t=!0;t&&function(){var t=Object(D.a)(k.a.mark((function t(){var e,a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("https://dev2.th3insid3.com/api/products?page=".concat(o,"&search=").concat(u));case 2:e=t.sent,a=e.data.products,n(a),x(e.data.paginatorInfo);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();t=!1}),[o,u]);var g=Object(r.b)();return Object(R.jsxs)("div",{className:"container text-center",children:[Object(R.jsx)("h1",{children:"Products"}),f.length>=1&&Object(R.jsxs)("h3",{className:"mt-2",children:["products in cart ",f.length]}),Object(R.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[Object(R.jsx)("h4",{children:f.length>=1}),Object(R.jsx)("div",{className:"form-outline mx-4",children:Object(R.jsx)("input",{type:"search",onChange:function(t){return O(t.target.value)},id:"form1",className:"form-control",placeholder:"Buscar"})}),Object(R.jsx)(L.a,{onChange:function(t){return l(t)},pageSize:20,total:null===m||void 0===m?void 0:m.total})]}),Object(R.jsx)("div",{className:"row",children:a.map((function(t){return Object(R.jsx)("div",{className:"col-md-4 my-5",children:Object(R.jsxs)("div",{className:"card",style:{height:"480px"},children:[Object(R.jsx)("img",{className:"card-img-top mb-2",src:t.image,alt:t.name,style:{height:"300px",objectFit:"scale-down"}}),Object(R.jsxs)("div",{className:"card-body mb-3",children:[Object(R.jsx)("h5",{className:"card-title",children:t.name}),Object(R.jsxs)("p",{children:["Price: ",t.price]})]}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:function(){return g({type:d,payload:t})},className:"btn btn-warning btn-sm m-3",children:"ADD TO CART"})})]})},t.id)}))})]})},U=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.cart}));return Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"text-center",children:[Object(R.jsxs)("h3",{className:"mt-2",children:["Cantidad ",e.length]}),Object(R.jsx)("h2",{className:"mt-3",children:"Products in Cart"}),Object(R.jsx)("div",{className:"row",children:e.map((function(e){return Object(R.jsx)("div",{className:"col-md-4 my-5",children:Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)("img",{src:e.image,className:"card-img-top my-2",alt:e.name,style:{height:"300px",objectFit:"scale-down"}}),Object(R.jsxs)("div",{className:"card-body my-3",style:{height:"120px"},children:[Object(R.jsx)("h5",{className:"card-title",children:e.name}),Object(R.jsxs)("p",{children:["Price: ",e.price," Cantidad: ",e.quantity," "]}),Object(R.jsxs)("p",{children:["total a pagar: $",e.total]})]}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:function(){return t({type:b,payload:e})},className:"btn btn-warning m-3",children:"delete"})})]})},e.id)}))})]})})},G=Object(I.g)((function(t){var e=Object(r.b)(),a=Object(r.c)((function(t){return t.user.activo}));return Object(c.useEffect)((function(){a?t.history.push("/products"):t.history.push("/login")}),[a,t.history]),Object(R.jsxs)("div",{className:"text-center",children:[Object(R.jsx)("h1",{className:"my-3",children:"Igresar con:"}),Object(R.jsx)("button",{className:"btn btn-danger",onClick:function(){e((function(t){_.a.auth().signInWithPopup(E).then((function(e){var a=e.user;t(P(a.uid,a.displayName,a.photoURL,a.email))})).catch((function(t){console.log(t)}))}))},children:"Google"})]})})),z=function(){var t=Object(r.c)((function(t){return t.user}));return Object(R.jsxs)("div",{className:"text-center my-5",children:[Object(R.jsx)("h1",{children:t.userData.userName}),Object(R.jsx)("div",{className:"card-header",children:Object(R.jsx)("img",{src:t.userData.image,style:{borderRadius:"50%"},alt:"photo_Profile"})}),Object(R.jsxs)("div",{className:"card-body",children:[Object(R.jsx)("h5",{className:"card-title",children:"Perfil de usuario"}),Object(R.jsx)("p",{className:"card-text",children:t.userData.email})]})]})},B=a(54),F=function(t){var e=t.component,a=t.active,c=t.path,n=Object(B.a)(t,["component","active","path"]);return a?Object(R.jsx)(I.b,Object(l.a)({component:e,path:c},n)):Object(R.jsx)(I.a,Object(l.a)({to:"/login"},n))},M=function(){var t=Object(r.b)(),e=Object(c.useState)(!0),a=Object(S.a)(e,2),n=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(S.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){var e;t({type:j,payload:e}),_.a.auth().onAuthStateChanged((function(e){(null===e||void 0===e?void 0:e.uid)?(t(P(e.uid,e.displayName,e.photoURL,e.email)),d(!0)):d(null),s(!1)}))}),[t,n,l]);var b=Object(r.c)((function(t){return t.user.activo}));return!1!==l?Object(R.jsx)(w.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)(T,{}),Object(R.jsxs)(I.d,{children:[Object(R.jsx)(I.b,{component:G,path:"/login",exact:!0}),Object(R.jsx)(I.b,{component:G,path:"/cartShopping",exact:!0}),Object(R.jsx)(F,{component:z,path:"/",active:b,exact:!0}),Object(R.jsx)(F,{component:J,path:"/products",active:b,exact:!0}),Object(R.jsx)(F,{component:U,path:"/cart",active:b,exact:!0})]})]})}):Object(R.jsx)("div",{children:"Cargando..."})};N.a.render(Object(R.jsx)(r.a,{store:v,children:Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(M,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.6af149cf.chunk.js.map