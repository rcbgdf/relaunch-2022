(self.webpackChunkrcb_website=self.webpackChunkrcb_website||[]).push([[678],{229:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/321574ddde823d43217ea6b00fa2c57d/f425c/osm-placeholder.png","srcSet":"/static/321574ddde823d43217ea6b00fa2c57d/540bd/osm-placeholder.png 461w,\\n/static/321574ddde823d43217ea6b00fa2c57d/e8401/osm-placeholder.png 921w,\\n/static/321574ddde823d43217ea6b00fa2c57d/f425c/osm-placeholder.png 1842w","sizes":"(min-width: 1842px) 1842px, 100vw"},"sources":[{"srcSet":"/static/321574ddde823d43217ea6b00fa2c57d/67d2c/osm-placeholder.webp 461w,\\n/static/321574ddde823d43217ea6b00fa2c57d/050b8/osm-placeholder.webp 921w,\\n/static/321574ddde823d43217ea6b00fa2c57d/45a0f/osm-placeholder.webp 1842w","type":"image/webp","sizes":"(min-width: 1842px) 1842px, 100vw"}]},"width":1842,"height":352}')},1007:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2e1e1c3800532c5a1625cb3c4213cf40/53973/600px-Instagram_logo_2016.svg.png","srcSet":"/static/2e1e1c3800532c5a1625cb3c4213cf40/22867/600px-Instagram_logo_2016.svg.png 8w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/7961d/600px-Instagram_logo_2016.svg.png 15w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/53973/600px-Instagram_logo_2016.svg.png 30w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/7ab40/600px-Instagram_logo_2016.svg.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/2e1e1c3800532c5a1625cb3c4213cf40/5d252/600px-Instagram_logo_2016.svg.webp 8w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/f57b3/600px-Instagram_logo_2016.svg.webp 15w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/bde72/600px-Instagram_logo_2016.svg.webp 30w,\\n/static/2e1e1c3800532c5a1625cb3c4213cf40/927d1/600px-Instagram_logo_2016.svg.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},3516:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/51981fd85455f65072c4278f5e134ef7/3c559/facebook-ios-icon.jpg","srcSet":"/static/51981fd85455f65072c4278f5e134ef7/3e20b/facebook-ios-icon.jpg 8w,\\n/static/51981fd85455f65072c4278f5e134ef7/2fb2b/facebook-ios-icon.jpg 15w,\\n/static/51981fd85455f65072c4278f5e134ef7/3c559/facebook-ios-icon.jpg 30w,\\n/static/51981fd85455f65072c4278f5e134ef7/93848/facebook-ios-icon.jpg 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/51981fd85455f65072c4278f5e134ef7/5d252/facebook-ios-icon.webp 8w,\\n/static/51981fd85455f65072c4278f5e134ef7/f57b3/facebook-ios-icon.webp 15w,\\n/static/51981fd85455f65072c4278f5e134ef7/bde72/facebook-ios-icon.webp 30w,\\n/static/51981fd85455f65072c4278f5e134ef7/927d1/facebook-ios-icon.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}')},7755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pe}});var a=n(7294),r=n(2163),l=n(7891),c=function(e){var t=e.rolle,n=e.avatar,r=e.name;return a.createElement("div",{className:"board-member-card"},a.createElement("div",{className:"avatar",style:{backgroundImage:"url("+n.url+")"}}),a.createElement("div",{className:"board-member-card-container"},a.createElement("h4",null,r),a.createElement("h6",null,t)))},i=n(3964),s=n.n(i),o=n(5444),m=n(4248),d=n.n(m),u=n(7762),f=n.n(u),b=n(2407);var p=function(e){e.id;var t,n,r=e.titel,l=e.slug,c=e.datum,i=e.beitragsbild,m=e.inhaltMarkdown;return a.createElement("div",{className:"blog-card"},a.createElement(o.Link,{to:"/"+l},a.createElement(b.G,{alt:"Titelbild: "+r,image:(0,b.d)(i)})),a.createElement("div",{className:"blog-card-container"},a.createElement("h4",null,a.createElement("strong",null,a.createElement(o.Link,{to:"/"+l},r))),a.createElement("h5",null,"Blogbeitrag vom ",s()(c).format("D.M.YYYY")),a.createElement("p",null,(t=m,(n=f().renderToString(a.createElement(d(),null,t)).replace(/<[^>]+>/g,"")).length>100?n.substring(0,100)+"...":n))))},g=n(6486);function h(e){var t=e.data,n=(0,o.useStaticQuery)("4036372720").file,r=g.slice(t.edges,0,8);return r.forEach((function(e){console.log(e.node)})),a.createElement("div",{className:"blog-posts-wrapper"},r.map((function(e){return a.createElement(p,{key:e.node.id,id:e.node.id,slug:e.node.Slug,keywords:e.node.Keywords,titel:e.node.Titel,datum:e.node.published_at,beitragsbild:e.node.Beitragsbild?e.node.Beitragsbild.localFile:n,inhaltMarkdown:e.node.Teaser})})))}var E=function(e){var t,n,r=e.id,l=e.titel,c=e.datum,i=e.beitragsbild,m=e.inhaltMarkdown;return a.createElement("div",{className:"clubabend-card"},a.createElement(o.Link,{to:"/"+r},a.createElement(b.G,{alt:"Titelbild: "+l,image:(0,b.d)(i)})),a.createElement("div",{className:"clubabend-card-container"},a.createElement("h4",null,a.createElement("strong",null,a.createElement(o.Link,{to:"/"+r},l))),a.createElement("h5",null,"Clubabend am ",s()(c).format("D.M.YYYY")),a.createElement("p",null,(t=m,(n=f().renderToString(a.createElement(d(),null,t)).replace(/<[^>]+>/g,"")).length>100?n.substring(0,100)+"...":n))))},v=n(6486);function w(e){var t=e.data,n=(0,o.useStaticQuery)("4036372720").file,r=v.slice(t.edges,0,8);return a.createElement("div",{className:"clubabend-posts-wrapper"},r.map((function(e){return a.createElement(E,{key:e.node.id,id:e.node.id,titel:e.node.titel,datum:e.node.datum,beitragsbild:e.node.beitragsbild?e.node.beitragsbild.localFile:n,inhaltMarkdown:e.node.inhalt})})))}var k=n(9776),N=53.495425879874865,x=10.205826759338379,y=function(){var e=(0,k.p8)();return console.log("cookieConsent="+e),e?a.createElement("div",null,a.createElement("iframe",{width:"100%",height:350,frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",title:"OSM Map zur Lola",src:"https://www.openstreetmap.org/export/embed.html?bbox=10.204504430294039,53.49484826469885,10.206567049026491,53.49606890629904&layer=mapnik&marker="+N+","+x,style:{border:"1px",solid:!0,black:!0}}),a.createElement("div",{className:"osmMapSuffix"},a.createElement("a",{href:"https://www.openstreetmap.org/?lat="+N+"&amp;lon="+x+"&amp;zoom=16&amp;layers=M",target:"_blank"},"Größere Karte anzeigen"))):a.createElement("div",{className:"staticOsmImage"},a.createElement(b.S,{transformOptions:{fit:"inside"},alt:"Anfahrt Platzhalter",src:"../../../static/images/osm-placeholder.png",__imageData:n(229)}))},S=n(7606);function I(e){var t=e.itemList;return a.createElement("div",null,a.createElement("ul",{className:"fa-ul"},t.items.map((function(e){return a.createElement("li",null,a.createElement(S.G,{icon:e.icon,listItem:!0}),a.createElement("p",null,e.text))}))))}function Z(e){var t=e.title,n=e.text,r=e.icon;return a.createElement("div",{className:"info-box-wrapper"},a.createElement("div",null,a.createElement(S.G,{icon:r,className:"fa-3x"})),a.createElement("div",null,a.createElement("h3",null,t),a.createElement("p",null,n)))}var M=n(2122),T=n(9756),C=n(5655);var L=function(e,t){var n=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},_=n(9424),D=n(6400);function z(e){var t,n,r=(t=e,(n=(0,a.useRef)(t)).current=t,n);(0,a.useEffect)((function(){return function(){return r.current()}}),[])}var W=Math.pow(2,31)-1;function R(e,t,n){var a=n-Date.now();e.current=a<=W?setTimeout(t,a):setTimeout((function(){return R(e,t,n)}),W)}function A(){var e=(0,D.Z)(),t=(0,a.useRef)();return z((function(){return clearTimeout(t.current)})),(0,a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=W?t.current=setTimeout(a,r):R(t,a,Date.now()+r))},clear:n}}),[])}var G=n(5900),O=n.n(G),j=n(5160),P=n(5697),B=n.n(P),F=n(5513),K=(0,n(8870).Z)("carousel-caption"),Y=n(9541),V=["as","bsPrefix","children","className"],q=a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.bsPrefix,c=e.children,i=e.className,s=(0,T.Z)(e,V),o=O()(i,(0,Y.vE)(l,"carousel-item"));return a.createElement(r,(0,M.Z)({ref:t},s,{className:o}),c)}));q.displayName="CarouselItem";var H=q;function Q(e,t){var n=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?t(e,n++):e}))}var X=n(6306),J=n(1831),U=n(9059),$=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],ee={bsPrefix:B().string,as:B().elementType,slide:B().bool,fade:B().bool,controls:B().bool,indicators:B().bool,activeIndex:B().number,onSelect:B().func,onSlide:B().func,onSlid:B().func,interval:B().number,keyboard:B().bool,pause:B().oneOf(["hover",!1]),wrap:B().bool,touch:B().bool,prevIcon:B().node,prevLabel:B().string,nextIcon:B().node,nextLabel:B().string},te={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function ne(e,t){var n=(0,F.Ch)(e,{activeIndex:"onSelect"}),r=n.as,l=void 0===r?"div":r,c=n.bsPrefix,i=n.slide,s=n.fade,o=n.controls,m=n.indicators,d=n.activeIndex,u=n.onSelect,f=n.onSlide,b=n.onSlid,p=n.interval,g=n.keyboard,h=n.onKeyDown,E=n.pause,v=n.onMouseOver,w=n.onMouseOut,k=n.wrap,N=n.touch,x=n.onTouchStart,y=n.onTouchMove,S=n.onTouchEnd,I=n.prevIcon,Z=n.prevLabel,D=n.nextIcon,z=n.nextLabel,W=n.className,R=n.children,G=(0,T.Z)(n,$),P=(0,Y.vE)(c,"carousel"),B=(0,a.useRef)(null),K=(0,a.useState)("next"),V=K[0],q=K[1],H=(0,a.useState)(!1),ee=H[0],te=H[1],ne=(0,a.useState)(!1),ae=ne[0],re=ne[1],le=(0,a.useState)(d||0),ce=le[0],ie=le[1];ae||d===ce||(B.current?q(B.current):q((d||0)>ce?"next":"prev"),i&&re(!0),ie(d||0)),(0,a.useEffect)((function(){B.current&&(B.current=null)}));var se,oe=0;!function(e,t){var n=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&t(e,n++)}))}(R,(function(e,t){++oe,t===d&&(se=e.props.interval)}));var me=(0,_.Z)(se),de=(0,a.useCallback)((function(e){if(!ae){var t=ce-1;if(t<0){if(!k)return;t=oe-1}B.current="prev",u&&u(t,e)}}),[ae,ce,u,k,oe]),ue=(0,C.Z)((function(e){if(!ae){var t=ce+1;if(t>=oe){if(!k)return;t=0}B.current="next",u&&u(t,e)}})),fe=(0,a.useRef)();(0,a.useImperativeHandle)(t,(function(){return{element:fe.current,prev:de,next:ue}}));var be=(0,C.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(fe.current)&&ue()})),pe="next"===V?"left":"right";L((function(){i||(f&&f(ce,pe),b&&b(ce,pe))}),[ce]);var ge=P+"-item-"+V,he=P+"-item-"+pe,Ee=(0,a.useCallback)((function(e){(0,U.Z)(e),f&&f(ce,pe)}),[f,ce,pe]),ve=(0,a.useCallback)((function(){re(!1),b&&b(ce,pe)}),[b,ce,pe]),we=(0,a.useCallback)((function(e){if(g&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void ue(e)}h&&h(e)}),[g,h,de,ue]),ke=(0,a.useCallback)((function(e){"hover"===E&&te(!0),v&&v(e)}),[E,v]),Ne=(0,a.useCallback)((function(e){te(!1),w&&w(e)}),[w]),xe=(0,a.useRef)(0),ye=(0,a.useRef)(0),Se=A(),Ie=(0,a.useCallback)((function(e){xe.current=e.touches[0].clientX,ye.current=0,"hover"===E&&te(!0),x&&x(e)}),[E,x]),Ze=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?ye.current=0:ye.current=e.touches[0].clientX-xe.current,y&&y(e)}),[y]),Me=(0,a.useCallback)((function(e){if(N){var t=ye.current;Math.abs(t)>40&&(t>0?de(e):ue(e))}"hover"===E&&Se.set((function(){te(!1)}),p||void 0),S&&S(e)}),[N,E,de,ue,Se,p,S]),Te=null!=p&&!ee&&!ae,Ce=(0,a.useRef)();(0,a.useEffect)((function(){var e,t;if(Te)return Ce.current=window.setInterval(document.visibilityState?be:ue,null!=(e=null!=(t=me.current)?t:p)?e:void 0),function(){null!==Ce.current&&clearInterval(Ce.current)}}),[Te,ue,me,p,be]);var Le=(0,a.useMemo)((function(){return m&&Array.from({length:oe},(function(e,t){return function(e){u&&u(t,e)}}))}),[m,oe,u]);return a.createElement(l,(0,M.Z)({ref:fe},G,{onKeyDown:we,onMouseOver:ke,onMouseOut:Ne,onTouchStart:Ie,onTouchMove:Ze,onTouchEnd:Me,className:O()(W,P,i&&"slide",s&&P+"-fade")}),m&&a.createElement("ol",{className:P+"-indicators"},Q(R,(function(e,t){return a.createElement("li",{key:t,className:t===ce?"active":void 0,onClick:Le?Le[t]:void 0})}))),a.createElement("div",{className:P+"-inner"},Q(R,(function(e,t){var n=t===ce;return i?a.createElement(j.ZP,{in:n,onEnter:n?Ee:void 0,onEntered:n?ve:void 0,addEndListener:J.Z},(function(t){return a.cloneElement(e,{className:O()(e.props.className,n&&"entered"!==t&&ge,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})})):a.cloneElement(e,{className:O()(e.props.className,n&&"active")})}))),o&&a.createElement(a.Fragment,null,(k||0!==d)&&a.createElement(X.Z,{className:P+"-control-prev",onClick:de},I,Z&&a.createElement("span",{className:"sr-only"},Z)),(k||d!==oe-1)&&a.createElement(X.Z,{className:P+"-control-next",onClick:ue},D,z&&a.createElement("span",{className:"sr-only"},z))))}var ae=a.forwardRef(ne);ae.displayName="Carousel",ae.propTypes=ee,ae.defaultProps=te,ae.Caption=K,ae.Item=H;var re=ae;function le(e){var t=e.items;return a.createElement("div",{className:"carousel-wrapper"},a.createElement(re,{pause:!0},t.map((function(e){return a.createElement(re.Item,{key:e.title},a.createElement(b.G,{className:"d-block w-100",alt:"TMI",image:e.image}),a.createElement(re.Caption,null,a.createElement("h3",null,e.title),a.createElement("p",null,e.text)))}))))}var ce=n(863),ie=n(6633),se=n.n(ie),oe=function(){var e=(0,a.useState)({submitting:!1,status:null}),t=e[0],n=e[1],r=function(e,t,a){n({submitting:!1,status:{ok:e,msg:t}}),e&&a.reset()};return a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target;n({submitting:!0}),se()({method:"post",url:"https://getform.io/f/f9b4eae1-63ac-48a1-b516-adc576d7b946",data:new FormData(t)}).then((function(e){r(!0,"Vielen Dank! Wir werden uns spätestens in 1-2 Tagen zurückmelen.",t)})).catch((function(e){r(!1,e.response.data.error,t)}))}},a.createElement("div",{className:"form-group"},a.createElement("p",null,"Hast du eine Frage? Schick' uns eine Nachricht:"),a.createElement("label",{for:"exampleInputEmail1",required:"required"},"Deine Email-Adresse",a.createElement("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Gib deine Email-Adresse ein"}))),a.createElement("div",{className:"form-group"},a.createElement("label",{for:"exampleInputName"},"Name",a.createElement("input",{type:"text",name:"name",className:"form-control",id:"exampleInputName",placeholder:"Gib deinen Namen ein",required:"required"}))),a.createElement("div",{className:"form-group"},a.createElement("label",{for:"exampleFormControlSelect1"},"Deine Nachricht",a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"5",name:"nachricht",required:"required"}))),a.createElement(ce.Z,{type:"submit",disabled:t.submitting},"Abschicken"),t.status&&a.createElement("p",{className:t.status.ok?"contact-form-msg":"errorMsg contact-form-msg"},t.status.msg))},me=(n(4489),n(6187)),de=n(994),ue=n(7408),fe=n(8014);function be(){var e=(0,o.useStaticQuery)("490235606").file.childrenImageSharp[0],t=e.img80,n=e.img150,r=e.img337,l=(0,b.d)({gatsbyImageData:t}),c=(0,b.d)({gatsbyImageData:n}),i=(0,b.d)({gatsbyImageData:r});return a.createElement("div",{className:"player-wrapper"},a.createElement("div",{className:"video-container"},a.createElement("video",{autoPlay:!0,muted:!0,playsInline:!0},a.createElement("source",{src:"https://res.cloudinary.com/dgibmteg8/video/upload/v1666350254/rcb-downloads/ThomasStegreifrede5jahresfeierRcb.mp4",type:"video/mp4"}))),a.createElement("div",{className:"backdrop"},a.createElement(me.Z,{fluid:!0},a.createElement(de.Z,null,a.createElement(ue.Z,{md:6},a.createElement("div",{className:"d-sm-none"},a.createElement(b.G,{alt:"TMI",image:l})),a.createElement("div",{className:"d-none d-sm-inline-block d-lg-none"},a.createElement(b.G,{alt:"TMI",image:c})),a.createElement("div",{className:"d-none d-lg-inline-block"},a.createElement(b.G,{alt:"TMI",image:i}))),a.createElement(ue.Z,{md:6},a.createElement("div",{className:"button-wrapper"},a.createElement(ce.Z,{to:"#was-wir-machen"},"Wer wir sind und was wir machen...")),a.createElement("div",{className:"button-wrapper"},a.createElement(ce.Z,{to:"#kontakt"},"Komm vorbei...")))))))}var pe=function(e){var t=e.data,i=t.allStrapiVorstandsmitglieds,s=t.allStrapiBlogbeitrag,o=t.allStrapiClubabends,m=t.allLocalContentWasWirSoMachen,d=(t.strapiZehnjahresfeier,t.site);return a.createElement(r.Z,null,a.createElement(l.Z,{title:"Home",keywords:"rethorik,hamburg,bergedorf,toastmasters,reden"}),a.createElement("section",null,a.createElement(be,null)),a.createElement("section",{id:"was-du-willst",className:"section-a"},a.createElement(me.Z,null,a.createElement(de.Z,null,a.createElement(ue.Z,{md:12},a.createElement("h2",{className:"column-title"},"Du bist bei uns richtig, wenn du..."),a.createElement(I,{itemList:{items:[{icon:fe.WV2,text:"souveräner vor Menschen präsentieren, eine Rede halten oder\n                  einen Toast aussprechen willst. Was hierbei wichtig ist und\n                  wie du es schaffst, lernst du an unseren Clubabenden."},{icon:fe.lXL,text:"lernen möchtest zu moderieren oder einen Workshop abzuhalten.\n                  Irgendwann möchtest du vielleicht nicht nur an einem unserer\n                  Workshops teilnehmen, sondern dich selber als Kursleiter ausprobieren."},{icon:fe.u8Q,text:"überzeugend vortragen willst. Die Argumente sind dabei nicht alles.\n                         Worauf es wirklich ankommt, lernst du bei uns."},{icon:fe.tMT,text:"diese Ziele schnell erreichen möchtest. Wenn du lieber\n                  gemächlich vorankommen möchtest, ist das genauso okay. Das\n                  entscheidest nur du."},{icon:fe.X8G,text:"gerne mit Menschen zusammen bist, die sich gegenseitig\n                  inspirieren – die sich auch weiterentwickeln wollen – die aus\n                  Fehlern lernen und sich gegenseitig beim Lernen unterstützen."}]}}))))),a.createElement("section",{id:"wer-wir-sind",className:"section-b"},a.createElement(me.Z,null,a.createElement(de.Z,null,a.createElement(ue.Z,{md:12},a.createElement("h2",{className:"section-title"},"Wer wir sind und was wir machen"),a.createElement("p",null,"Wir sind Menschen jeden Alters – vom Schüler bis zum Rentner. Wir kommen aus allen Gesellschaftsschichten. Wir lieben die Rhetorik und das Kribbeln im Bauch, wenn wir auf der Rednerbühne stehen. Wir genießen die Momente des Alltags, in denen wir merken, dass sich dadurch unser Leben verändert."))))),a.createElement("section",{id:"was-wir-machen",className:"section-a"},a.createElement(le,{items:m.edges.map((function(e){return{title:e.node.title,text:e.node.text,image:(0,b.d)(e.node.image.childImageSharp)}}))})),a.createElement("section",{className:"section-b"},a.createElement(me.Z,null,a.createElement("h2",{className:"section-title"},"Drei Dinge, die uns besonders machen:"),a.createElement(de.Z,null,a.createElement(ue.Z,{md:4},a.createElement(Z,{title:"Wertschätzung",text:"wird bei uns groß geschrieben. Das schafft eine Atmosphäre, in\\ der das Lernen Spaß macht.",icon:fe.fGT})),a.createElement(ue.Z,{md:4},a.createElement(Z,{title:"Wir helfen uns gegenseitig",text:"als Mentor oder in der Teamarbeit. Wir geben uns Rückmeldungen über das, was uns begeistert und wo wir Wachstum sehen.",icon:fe.iGi})),a.createElement(ue.Z,{md:4},a.createElement(Z,{title:"Geselligkeit",text:"Wir treffen uns auch gerne mal abseits des Clubabends in geselliger Runde und haben zusammen Spaß.",icon:fe.WwZ}))))),a.createElement("section",{id:"kontakt",className:"section-a"},a.createElement("h2",{className:"section-title"},"Besuche uns"),a.createElement(me.Z,null,a.createElement(de.Z,null,a.createElement(ue.Z,{md:6},a.createElement("p",null,"Infos zu unserem ",a.createElement("a",{href:"/naechster-termin"},"nächsten Treffen findest Du hinter diesem Link"),". Wir treffen uns im"),a.createElement("p",null,a.createElement("a",{href:"https://www.lola-hh.de/"},"LOLA Kulturzentrum"),a.createElement("br",null),"Lohbrügger Landstr. 8",a.createElement("br",null),"21031 Hamburg"),a.createElement("p",null,"Parkplätze gibt es (fast immer, falls kein Stadtfest ist) auf dem Lohbrügger Markt. Von dort gehst du ca. 2 Min. in die Lohbrügger Landstraße hoch bis zur LOLA."),a.createElement("p",null,"An der Lohbrügger Landstraße selbst sind meist alle Parkplätze belegt. Alternativ: In den Seitenstraßen kannst du mehr Glück haben."),a.createElement("p",null,"Hier",a.createElement("a",{"aria-label":"fb-home",href:"https://www.facebook.com/Rednerclub-Bergedorf-174688412674869",className:"inline-logo",rel:"noreferrer",target:"_blank"},a.createElement(b.S,{width:30,height:30,src:"../../static/images/facebook-ios-icon.jpg",alt:"Facebook-Logo",__imageData:n(3516)})),"und ",a.createElement("a",{"aria-label":"ig-home",href:"https://www.instagram.com/toastmasters_rednerclub/",className:"inline-logo",rel:"noreferrer",target:"_blank"},a.createElement(b.S,{width:30,height:30,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png",alt:"Instagram",__imageData:n(1007)})),"findest du unsere brandaktuellen Infos.")),a.createElement(ue.Z,{md:6},a.createElement(oe,null))))),a.createElement("section",{id:"maps"},a.createElement(y,null)),a.createElement("section",{id:"clubleben",className:"section-a"},a.createElement("div",{className:"large-container"},a.createElement("h2",{className:"section-title"},"Erfahre, was bei uns los war:"),a.createElement(w,{data:o}))),a.createElement("section",{id:"blog",className:"section-a"},a.createElement("div",{className:"large-container"},a.createElement("hr",null),a.createElement("h2",{className:"section-title"},"Rednerclub Bergedorfs Blog"),a.createElement(h,{data:s}))),a.createElement("section",{className:"section-b"},a.createElement("div",{className:"large-container"},a.createElement("h2",{className:"section-title"},"Das RCB-Vorstandsteam"),a.createElement("div",{className:"board-members-wrapper"},i.edges.map((function(e){return a.createElement(c,{key:e.node.id,rolle:e.node.Rolle,avatar:e.node.avatar,name:e.node.name})}))))),a.createElement("section",{className:"section-a"},a.createElement("div",{className:"container d-flex justify-content-center"},a.createElement("div",null,a.createElement("a",{href:"https://www.toastmasters.org",id:"tmi-logo",style:{backgroundImage:"url(images/logos/icon-TMI-LogoWebsite-small.png)"}},"Toastmasters International (tm)"))),a.createElement("div",{className:"container d-flex justify-content-center"},a.createElement("div",null,a.createElement("a",{href:"https://www.toastmasters.org/Find-a-Club/02933296-rednerclub-bergedorf"},"Toastmasters International Club-Nr. 2933296")," · Area 3 · Division A · District 95")),a.createElement("div",{className:"container d-flex justify-content-center"},a.createElement("div",null,"Seite zuletzt geändert: "+d.buildTimeZone))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-659a2478f32189933f47.js.map