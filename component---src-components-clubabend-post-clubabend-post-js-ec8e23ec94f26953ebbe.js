(self.webpackChunkrcb_relaunch_2020=self.webpackChunkrcb_relaunch_2020||[]).push([[537],{82912:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r,o=n(67294),c=n(18153),i=n(67891),a=n(35414),l=n(74248),u=n.n(l),s=n(34489),p=n.n(s),h=n(73964),d=n.n(h),f=n(25444),w=n(33639),b=n(20994),m=n(7408),y=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return y(t,e),t}(Error);function v(e,t){if(!e)throw new g(t)}function E(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var O=n(75900),k=n.n(O),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},j=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function i(e){try{l(r.next(e))}catch(t){c(t)}}function a(e){try{l(r.throw(e))}catch(t){c(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))},_=function(e,t){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(a){c=[6,a],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},P=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},N=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},Z=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function B(e,t,n){var r=t.height,o=t.width,c=x(t,["height","width"]),i=S({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},c),a=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===a||a.closed)&&(window.clearInterval(l),n(a))}catch(e){console.error(e)}}),1e3);return a}var D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,c=void 0===o?400:o,i=n.windowPosition,a=void 0===i?"windowCenter":i,l=n.windowWidth,u=void 0===l?550:l;B(e,S({height:c,width:u},"windowCenter"===a?N(u,c):Z(u,c)),r)},t.handleClick=function(e){return j(t,void 0,void 0,(function(){var t,n,r,o,c,i,a,l,u,s;return _(this,(function(p){switch(p.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,c=t.onClick,i=t.url,a=t.openShareDialogOnClick,l=t.opts,u=o(i,l),r?[2]:(e.preventDefault(),n?(s=n(),P(s)?[4,s]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return a&&this.openShareDialog(u),c&&c(e,u),[2]}}))}))},t}return C(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,c=e.disabledStyle,i=e.forwardedRef,a=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,x(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=k()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),h=S(S(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&c);return o.createElement("button",S({},s,{"aria-label":s["aria-label"]||a,className:p,onClick:this.handleClick,ref:i,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),R=function(){return(R=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var z=function(e,t,n,r){function c(c,i){var a=n(c),l=R({},c);return Object.keys(a).forEach((function(e){delete l[e]})),o.createElement(D,R({},r,l,{forwardedRef:i,networkName:e,networkLink:t,opts:n(c)}))}return c.displayName="ShareButton-"+e,(0,o.forwardRef)(c)};var I=z("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return v(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+E({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),W=function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},H=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function F(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,c=t.iconFillColor,i=t.round,a=t.size,l=H(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",W({viewBox:"0 0 64 64",width:a,height:a},l),i?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.createElement("path",{d:e.path,fill:c}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var L=F({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var q=z("whatsapp",(function(e,t){var n=t.title,r=t.separator;return v(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+E({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),Y=F({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var A=z("telegram",(function(e,t){var n=t.title;return v(e,"telegram.url"),"https://telegram.me/share/url"+E({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),T=F({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"}),V=n(82407),G=function(e){var t=e.post,n=e.next,r=e.previous,c="https://rcbgdf.github.io/relaunch-2022/"+t.id;return o.createElement(w.Z,null,o.createElement(b.Z,{className:"pt-4"},o.createElement(m.Z,{md:4},o.createElement("p",{className:"text-left"},n&&o.createElement(f.Link,{to:"/"+n.id},n.titel+" <- vorheriger Beitrag"))),o.createElement(m.Z,{md:4},o.createElement("p",{className:"text-center"},o.createElement(I,{url:c,hashtag:"#toastmasters",quote:t.titel},o.createElement(L,{size:32,iconFillColor:"white",round:!0})),o.createElement(q,{url:c,title:t.titel},o.createElement(Y,{size:32,iconFillColor:"white",round:!0})),o.createElement(A,{url:c,title:t.titel},o.createElement(T,{size:32,iconFillColor:"white",round:!0})))),o.createElement(m.Z,{md:4},o.createElement("p",{className:"text-right"},r&&o.createElement(f.Link,{to:"/"+r.id},"nächster Beitrag -> "+r.titel)))))},M=function(e){return e.datum?"Clubabend am "+d()(e.datum).format("D.M.YYYY"):""},U=function(e){var t=e.data,n=e.pageContext,r=t.strapiClubabends,l=t.file,s=n.next,h=n.previous,d=r.beitragsbild?r.beitragsbild.localFile.childImageSharp.gatsbyImageData:l.childImageSharp.gatsbyImageData;return o.createElement(c.Z,null,o.createElement(i.Z,{title:"Clubabend"}),r.beitragsbild&&o.createElement(a.q,{meta:[{property:"og:title",content:r.titel},{property:"og:description",content:"Rednerclub Bergedorf "+M(r)},{property:"og:url",content:"https://rcbgdf.github.io/relaunch-2022/"+r.id+"/"},{property:"fb:app_id",content:"555845005032870"},{property:"og:image",content:r.beitragsbild.url},{property:"og:image:alt",content:"Rednerclub Bergedorf "+M(r)}]}),o.createElement("section",{id:"nav-oben",className:"section-a"},G({post:r,next:s,previous:h})),o.createElement("section",{className:"beitragsbild section-b"},o.createElement(w.Z,null,o.createElement(b.Z,null,o.createElement(m.Z,{md:12},o.createElement("h1",null,r.titel),o.createElement("h5",null,M(r))),o.createElement(b.Z,null),o.createElement(m.Z,{md:12},o.createElement(V.G,{alt:"Titelbild: "+r.titel,image:(0,V.d)(d)}))))),o.createElement("section",{className:"section-a"},o.createElement(w.Z,null,o.createElement(b.Z,{className:"pt-2"},o.createElement(m.Z,{md:12},o.createElement(u(),{remarkPlugins:[p()]},r.inhalt))))),o.createElement("section",{id:"nav-unten",className:"section-b"},G({post:r,next:s,previous:h})))}}}]);
//# sourceMappingURL=component---src-components-clubabend-post-clubabend-post-js-ec8e23ec94f26953ebbe.js.map