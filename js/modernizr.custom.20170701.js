!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,s,a;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),C.push((o?"":"no-")+a.join("-"))}}function i(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?_.className.baseVal=t:_.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=s(b?"svg":"body"),e.fake=!0),e}function l(e,n,r,o){var i,l,u,f,c="modernizr",p=s("div"),d=a();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),l=n(p,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?c(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function h(e,t,o,i){function a(){c&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,h,y=["modernizr","tspan","samp"];!L.style&&y.length;)c=!0,L.modElem=s(y.shift()),L.style=L.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],h=L.style[m],f(m,"-")&&(m=u(m)),L.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=o}catch(g){}if(L.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,o,i):(a=(e+" "+N.join(s+" ")+s).split(" "),p(a,t,n))}function g(e,t,r){return y(e,n,n,t,r)}var C=[],S=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var _=t.documentElement,b="svg"===_.nodeName.toLowerCase(),w=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=w;var z=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();x.mq=z;var T=x.testStyles=l;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(r,function(e){n=9===e.offsetTop})}return n});var j="Moz O ms Webkit",P=x._config.usePrefixes?j.split(" "):[];x._cssomPrefixes=P;var E=function(t){var r,o=w.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var s=0;o>s;s++){var a=w[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+t}return!1};x.atRule=E;var N=x._config.usePrefixes?j.toLowerCase().split(" "):[];x._domPrefixes=N;var k={elem:s("modernizr")};Modernizr._q.push(function(){delete k.elem});var L={style:k.elem.style};Modernizr._q.unshift(function(){delete L.style}),x.testAllProps=y,x.testAllProps=g,Modernizr.addTest("flexbox",g("flexBasis","1px",!0));var q=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=u(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("objectfit",!!q("objectFit"),{aliases:["object-fit"]}),o(),i(C),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);