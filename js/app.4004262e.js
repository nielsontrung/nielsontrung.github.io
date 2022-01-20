(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9017358"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"89dea0bc"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-toolbar",{attrs:{color:"#121212",flat:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.routes,(function(e,a){return n("v-btn",{key:a,attrs:{rounded:"",text:""}},[n("router-link",{staticClass:"white-text",attrs:{color:"white",to:e.route}},[n("div",{staticClass:"body-1 font-weight-light"},[t._v(" "+t._s(e.name)+" ")])])],1)})),1)],1)],1)},r=[],o=(n("b0c0"),{name:"Header",data:function(){return{routes:[{name:"home",route:"/"},{name:"about",route:"/about"},{name:"projects",route:"/projects"}],computed:{width:function(){switch(this.$veutify.breakpoint.name){case"xs":return 150;case"sm":return 200;case"md":return 300;case"lg":return 400;case"xl":return 500}}}}}}),i=o,s=(n("cf41"),n("2877")),c=n("6544"),u=n.n(c),l=n("8336"),f=n("a523"),d=n("0fd9"),m=n("71d9"),h=Object(s["a"])(i,a,r,!1,null,"2e4a5268",null);e["a"]=h.exports;u()(h,{VBtn:l["a"],VContainer:f["a"],VRow:d["a"],VToolbar:m["a"]})},"208d":function(t,e,n){"use strict";n("5c3e")},2720:function(t,e,n){"use strict";n("9deb")},2947:function(t,e,n){t.exports=n.p+"img/finance-tracker.fc91ef3c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},s=i,c=n("2877"),u=n("6544"),l=n.n(u),f=n("7496"),d=n("f6c4"),m=Object(c["a"])(s,r,o,!1,null,null,null),h=m.exports;l()(m,{VApp:f["a"],VMain:d["a"]});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center",attrs:{"fill-height":""}},[n("div",{staticClass:"container"},[n("div",{},[n("div",{staticClass:"text-h1 mb-10",attrs:{xl:""}},[t._v(t._s(t.json.name))]),n("div",{staticClass:"mt-10 pad-10"},[n("v-btn",{staticClass:"text-h6 font-weight-light"},[n("router-link",{staticClass:"white-text",attrs:{to:"/projects"}},[n("div",[t._v("Projects")])])],1)],1)]),n("div",{staticClass:"ma-6"},[n("router-link",{staticClass:"white-text",attrs:{to:"/about"}},[n("div",{staticClass:"body-1 font-weight-light",attrs:{id:"about"}},[t._v("ABOUT")])])],1)])])},b=[],v=n("c6b1"),_={name:"HomePage",data:function(){return{json:v.home}},components:{}},y=_,k=(n("208d"),n("8336")),w=n("a523"),x=Object(c["a"])(y,g,b,!1,null,"c76ffa9c",null),j=x.exports;l()(x,{VBtn:k["a"],VContainer:w["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("Header"),n("v-row",{staticClass:"mx-10 my-2"},t._l(t.projects,(function(e,a){return n("v-col",{key:a,attrs:{"align-content":"center",align:"center",justify:"center",cols:"12"}},[n("v-card",{attrs:{elevation:"5",rounded:"","min-width":"250px","max-width":"60%"}},[n("v-container",[n("div",{staticClass:"text-h4 font-weight-light"},[t._v(t._s(e.name))])]),e.end_month?n("div",{staticClass:"text-h6 font-weight-light"},[t._v(" "+t._s(e.start_month)+" - "+t._s(e.end_month)+" ")]):n("div",{staticClass:"text-h6 font-weight-light"},[t._v(" "+t._s(e.start_month)+" ")]),n("v-container",{staticClass:"ma-2",attrs:{"align-content":"center",align:"center",justify:"center"}},t._l(e.icons,(function(e,a){return n("v-icon",{key:a,staticClass:"mx-1",attrs:{"x-large":"",color:e.colour}},[t._v(" "+t._s(e.icon)+" ")])})),1),n("v-img",{attrs:{"max-width":e.image.width,"max-height":e.image.height,src:t.srcs[t.projects.length-a-1],"lazy-src":e.image.lazy_src,alt:e.image.alt}}),n("v-container",{staticClass:"mt-3",attrs:{"v-if":e.image}},[n("a",{attrs:{target:"_blank",href:e.demo_link}},[n("v-icon",{staticClass:"mx-2",attrs:{"x-large":""}},[t._v(" mdi-human-male-board ")])],1),n("a",{attrs:{target:"_blank",href:e.git_link}},[n("v-icon",{staticClass:"mx-2",attrs:{"x-large":""}},[t._v(" fab fa-github ")])],1)]),n("v-container",[n("div",{staticClass:"body-2 font-weight-light mx-16 mb-5"},[t._v(" "+t._s(e.description)+" ")])])],1)],1)})),1),n("v-container"),n("Footer")],1)},O=[],P=(n("b0c0"),n("0418")),T=n("fd2d"),V={name:"ProjectPage",data:function(){return{projects:v.projects,srcs:{0:n("883f"),1:n("2947"),2:"",3:n("bbcf")},computed:{width:function(){switch(this.$veutify.breakpoint.name){case"xs":return 150;case"sm":return 200;case"md":return 300;case"lg":return 400;case"xl":return 500}},height:function(){switch(this.$veutify.breakpoint.name){case"xs":return 150;case"sm":return 200;case"md":return 300;case"lg":return 400;case"xl":return 500}}}}},components:{Header:P["a"],Footer:T["a"]}},A=V,E=(n("acf2"),n("b0af")),S=n("62ad"),N=n("132d"),B=n("adda"),$=n("0fd9"),F=Object(c["a"])(A,C,O,!1,null,"0f089245",null),H=F.exports;l()(F,{VCard:E["a"],VCol:S["a"],VContainer:w["a"],VIcon:N["a"],VImg:B["a"],VRow:$["a"]}),a["a"].use(p["a"]);var I=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:H}],z=new p["a"]({mode:"history",base:"/",routes:I}),L=z,M=(n("15f5"),n("d1e78"),n("f309"));a["a"].use(M["a"]);var D=new M["a"]({icons:{iconfont:"fa"},theme:{dark:!0},breakpoint:{thresholds:{xs:340,sm:540,md:800,lg:1280},scrollBarWidth:24}});a["a"].config.productionTip=!1,new a["a"]({router:L,vuetify:D,render:function(t){return t(h)}}).$mount("#app")},"5c3e":function(t,e,n){},7821:function(t,e,n){},"883f":function(t,e,n){t.exports=n.p+"img/tutor-finder.02cced1c.png"},"9deb":function(t,e,n){},acf2:function(t,e,n){"use strict";n("b8c3")},b8c3:function(t,e,n){},bbcf:function(t,e,n){t.exports=n.p+"img/pokemon-team-builder.c8ec7852.png"},c6b1:function(t){t.exports=JSON.parse('{"home":{"name":"Nielson Trung","description":"this is a description"},"about":{"email":"nielson.h.trung@gmail.com","phone":"(403) 383 2142","description":"Hi my name is Nielson, I\'m a recent graduate from the University of Calgary holding a Bachelor of Science in Computer Science. Proficient in multiple programming languages.  I\'m interested in developing productivity software solutions that automate or solve problems I encounter.","resume":"https://nielsontrung.github.io/resume.pdf","skills":["fab fa-python","fab fa-js","fab fa-html5","fab fa-css3","fab fa-react","fab fa-vuejs","fab fa-node-js","mdi-database","mdi-graphql"]},"projects":[{"name":"Pokémon Team Builder","start_month":"Nov 2021","end_month":"","demo_link":"https://nielsontrung.github.io/pokemon-team-builder/","git_link":"https://github.com/nielsontrung/pokemon-team-builder","doc_link":"https://github.com/","image":{"width":"640px","height":"320px","alt":"This is an image","lazy-src":"https://i.imgur.com/NmtBJQg.png","src":"../assets/pokemon-team-builder.png"},"icons":[{"icon":"fab fa-react","colour":"#72dbfa"},{"icon":"fab fa-js","colour":"#ffca28"},{"icon":"fab fa-html5","colour":"#e44d26"},{"icon":"fab fa-css3","colour":"#42a5f5"}],"description":"A Single Page Pokémon Database and Team Builder!"},{"name":"Zoom Note Taker","start_month":"Oct 2021","end_month":"","demo_link":"","git_link":"https://github.com/nielsontrung/zoom-note-taker","doc_link":"https://github.com/","image":{},"icons":[{"icon":"fab fa-python","colour":"white"}],"description":"An automated note taking solution for zoom lectures"},{"name":"Finance Tracker","start_month":"May 2021","end_month":"","demo_link":"https://nielsontrung.github.io/finance-tracker/","git_link":"https://github.com/nielsontrung/finance-tracker","doc_link":"https://github.com/","image":{"src":"../assets/finance-tracker.png","width":"640px","height":"320px","alt":"https://i.imgur.com/ppRdRvw.png"},"icons":[{"icon":"fab fa-python","colour":"white"},{"icon":"fab fa-js","colour":"#ffca28"},{"icon":"fab fa-html5","colour":"#e44d26"},{"icon":"fab fa-css3","colour":"#42a5f5"}],"description":"A finance tracker and visualization tool made to see trends across historical and categorical spending"},{"name":"Tutor Finder","start_month":"Sept 2019","end_month":"Nov 2019","demo_link":"https://xd.adobe.com/view/b754883f-09ca-4932-4cb7-bb36032a0be1-c165/","git_link":"https://github.com/nielsontrung/tutor-finder","doc_link":"https://github.com/","image":{"src":"../assets/tutor-finder.png","width":"200px","height":"440px","alt":"https://imgur.com/7UKDu4Q.png"},"description":"A concept mobile application designed to help students find tutors. Try the live demo with almost 300 frames!"}]}')},cf41:function(t,e,n){"use strict";n("7821")},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{padless:"",color:"#12121212"}},[n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[t._l(t.links,(function(e,a){return n("v-btn",{key:a,staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",depressed:"",raised:"",elevation:"2",href:e.href,target:"_blank",light:""}},[t._v(" "+t._s(e.name)+" ")])})),n("v-col",{staticClass:"dark lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[n("div",{staticClass:"text-h6 font-weight-light"},[t._v(" "+t._s((new Date).getFullYear())+" — NT ")])])],2)],1)},r=[],o={name:"Footer",data:function(){return{links:[{name:"github",href:"https://github.com/nielsontrung"},{name:"LinkedIn",href:"https://linkedin.com/in/nielsontrung"}]}}},i=o,s=(n("2720"),n("2877")),c=n("6544"),u=n.n(c),l=n("8336"),f=n("62ad"),d=n("553a"),m=n("0fd9"),h=Object(s["a"])(i,a,r,!1,null,"3f78af2a",null);e["a"]=h.exports;u()(h,{VBtn:l["a"],VCol:f["a"],VFooter:d["a"],VRow:m["a"]})}});
//# sourceMappingURL=app.4004262e.js.map