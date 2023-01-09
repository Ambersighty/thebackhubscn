(function(){var z={showInterwiki:!1};function K(e,t){var r=document.getElementById("resizer-container"),i=document.createElement("iframe");return i.style.display="none",r.appendChild(i),t[0]!=="/"&&(t="/"+t),Ne(function(o){if(o&&(z.showInterwiki=!0),z.showInterwiki){var n=r.getBoundingClientRect().top;n&&(n+=1),i.src=e+"/common--javascript/resize-iframe.html?#"+n+t}},750)}function Ne(e,t){var r=0;return function(){clearTimeout(r),r=setTimeout(function(){e(arguments)},t)}}var Ie="   query InterwikiQuery($url: URL!) {     page(url: $url) {       translations {         url       }       translationOf {         url         translations {           url         }       }     }   } ",Y=["https://api.crom.avn.sh/graphql","https://zh.xjo.ch/crom/graphql"];function $(e,t,r,i){Z(L(e.url+r),0,function(o){Le(o,e,t,i)})}function L(e){if(e.indexOf(".wikidot.com")===-1)throw new Error("Crom requires wikidot.com branch URLs ("+e+")");return e.replace(/^https:/,"http:")}function Le(e,t,r,i){function o(s){return s.url}var n=null,a=[];a=a.concat(e.translations.map(o)),e.translationOf&&(n=e.translationOf.url,a.push(n),a=a.concat(e.translationOf.translations.map(o))),a.forEach(function(s){var u=s.indexOf(L(t.url))===0;if(!u){var c=Object.keys(r).find(function(f){return s.indexOf(L(r[f].url))===0});if(!c){console.warn("Interwiki: unknown branch "+s);return}i(s,r[c].name,c,n===s)}})}function Z(e,t,r){var i=new XMLHttpRequest;i.open("POST",Y[t],!0),i.setRequestHeader("Content-Type","application/json"),i.addEventListener("readystatechange",function(){if(i.readyState===XMLHttpRequest.DONE)try{if(i.status===200){var o=JSON.parse(i.responseText);if(o.errors&&o.errors.length>0)throw new Error(o.errors);r(o.data.page)}else throw new Error(i.status)}catch(n){t++<Y.length?Z(e,t,r):(console.error("Interwiki: lookup failed for "+e),console.error(n))}}),i.send(JSON.stringify({query:Ie,variables:{url:e}}))}var Ae=$;function ee(e,t,r){var i=e[t]||{},o=document.getElementsByClassName("side-block")[0];o.style.display="none";var n=document.querySelector(".heading p");n.innerText=i.head,Ae(i,e,r,function(a,s,u,c){De(a,s,u,c),z.showInterwiki=!0})}function De(e,t,r,i){var o=document.getElementsByClassName("side-block")[0],n=Array.prototype.slice.call(o.getElementsByClassName("menu-item"));o.style.display="";var a=document.createElement("div");a.classList.add("menu-item"),i&&a.classList.add("original"),a.setAttribute("name",r);var s=document.createElement("img");s.setAttribute("src","//sigma9.scpwikicn.com/cn/img/default.png"),s.setAttribute("alt","default.png"),s.classList.add("image"),a.appendChild(s);var u=document.createElement("a");u.setAttribute("href",e),u.setAttribute("target","_parent"),u.innerText=t,a.appendChild(u),o.appendChild(a),n.some(function(c){if(c.getAttribute("name")>r)return o.insertBefore(a,c),!0})}function te(e,t){return function(i){var o=d(i,"type")||"default",n=d(i,"priority"),a=Number(n),s=d(i,"override")||"0",u=Boolean(Number(s));if(isNaN(a)){console.error("Interwiki: rejected style with priority"+n);return}if(o==t){var c=d(i,"theme");c&&A(a,Pe(e,c),u);var f=d(i,"css");f&&Me(a,f,u)}}}function Me(e,t,r){var i=Array.prototype.slice.call(document.head.querySelectorAll("style.custom-style"));if(!i.some(ie(e,t))){if(r){var o=i.find(oe(e));if(o){console.log("Interwiki: style at priority "+e+" is being overrided."),o.innerText=t;return}}var n=document.createElement("style");n.innerText=t,re(e,n)}}function A(e,t,r){var i=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style"));if(!i.some(ie(e,t))){if(r){var o=i.find(oe(e));if(o){console.log("Interwiki: stylesheet "+o.href+" is overrided by "+t+" at priority "+e+"."),o.href=t;return}}var n=document.createElement("link");n.rel="stylesheet",n.href=t,re(e,n)}}function re(e,t){t.classList.add("custom-style"),t.dataset.priority=e;var r=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style, style.custom-style")),i=t.tagName,o=r.some(function(n){var a=Number(n.dataset.priority),s=n.tagName;if(e>a)return!1;if(a===e){if(s==="LINK"&&i==="STYLE")return!1;s===i&&console.error("Interwiki: encountered two "+(s==="LINK"?"themes":"CSS styles")+" with the same priority ("+a+") and override is set to false - result may not be as expected")}return document.head.insertBefore(t,n),!0});o||document.head.appendChild(t)}function ie(e,t){var r=function(i){return Number(i.getAttribute("data-priority"))!==e?!1:i.tagName==="LINK"?i.getAttribute("href")===t:i.tagName==="STYLE"?i.innerText===t:!1};return r}function oe(e){var t=function(r){return Number(r.getAttribute("data-priority"))===e};return t}function Pe(e,t){if(t.indexOf("http")===0||t.indexOf("//")===0)return t;if(!e)return console.error("Interwiki: could not resolve relative fullname ("+t+") for unconfigured site. Consider using a full URL instead."),"";if(t.indexOf("/")===-1)return e+"/local--code/"+t+"/1";var r=t.split("/");return r.length>=3&&r[1]==="code"?e+"/local--code/"+r[0]+"/"+r[2]:(console.error("Interwiki: unknown theme location:"+t),"")}var ne={cn:{name:"\u4E2D\u6587",head:"\u5176\u4ED6\u8BED\u8A00",url:"http://backrooms-wiki-cn.wikidot.com/",id:"4716348",category:""},en:{name:"English",head:"Languages",url:"http://backrooms-wiki.wikidot.com/",id:"4431268",category:""},es:{name:"Espa\xF1ol",head:"En otros idiomas",url:"http://es-backrooms-wiki.wikidot.com/",id:"4745515",category:""},fr:{name:"Fran\xE7ais",head:"Dans d\u2019autres langues",url:"http://fr-backrooms-wiki.wikidot.com/",id:"4710749",category:""},jp:{name:"\u65E5\u672C\u8A9E",head:"\u4ED6\u8A00\u8A9E\u7248",url:"http://japan-backrooms-wiki.wikidot.com/",id:"4864894",category:""},pl:{name:"Polski",head:"W innych j\u0119zykach",url:"http://pl-backrooms-wiki.wikidot.com/",id:"4761123",category:""},ptbr:{name:"Portugu\xEAs",head:"Em outros idiomas",url:"http://pt-br-backrooms-wiki.wikidot.com/",id:"4714912",category:""},ru:{name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",head:"\u041D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0437\u044B\u043A\u0430\u0445",url:"http://ru-backrooms-wiki.wikidot.com/",id:"4548260",category:""},vn:{name:"Ti\u1EBFng Vi\u1EC7t",head:"Ng\xF4n ng\u1EEF",url:"http://backrooms-vn.wikidot.com/",id:"4748367",category:""}};var l=[];var ae=function(){return l.some(function(e){return e.activeTargets.length>0})};var se=function(){return l.some(function(e){return e.skippedTargets.length>0})};var ce="ResizeObserver loop completed with undelivered notifications.",ue=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ce}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ce),window.dispatchEvent(e)};var h;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(h||(h={}));var p=function(e){return Object.freeze(e)};var D=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,p(this)}return e}();var M=function(){function e(t,r,i,o){return this.x=t,this.y=r,this.width=i,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,p(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,i=t.y,o=t.top,n=t.right,a=t.bottom,s=t.left,u=t.width,c=t.height;return{x:r,y:i,top:o,right:n,bottom:a,left:s,width:u,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}();var y=function(e){return e instanceof SVGElement&&"getBBox"in e},O=function(e){if(y(e)){var t=e.getBBox(),r=t.width,i=t.height;return!r&&!i}var o=e,n=o.offsetWidth,a=o.offsetHeight;return!(n||a||e.getClientRects().length)},P=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},le=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1};var m=typeof window!="undefined"?window:{};var E=new WeakMap,de=/auto|scroll/,qe=/^tb|vertical/,_e=/msie|trident/i.test(m.navigator&&m.navigator.userAgent),v=function(e){return parseFloat(e||"0")},g=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new D((r?t:e)||0,(r?e:t)||0)},pe=p({devicePixelContentBoxSize:g(),borderBoxSize:g(),contentBoxSize:g(),contentRect:new M(0,0,0,0)}),q=function(e,t){if(t===void 0&&(t=!1),E.has(e)&&!t)return E.get(e);if(O(e))return E.set(e,pe),pe;var r=getComputedStyle(e),i=y(e)&&e.ownerSVGElement&&e.getBBox(),o=!_e&&r.boxSizing==="border-box",n=qe.test(r.writingMode||""),a=!i&&de.test(r.overflowY||""),s=!i&&de.test(r.overflowX||""),u=i?0:v(r.paddingTop),c=i?0:v(r.paddingRight),f=i?0:v(r.paddingBottom),b=i?0:v(r.paddingLeft),ze=i?0:v(r.borderTopWidth),Oe=i?0:v(r.borderRightWidth),Ee=i?0:v(r.borderBottomWidth),Re=i?0:v(r.borderLeftWidth),X=b+c,G=u+f,N=Re+Oe,I=ze+Ee,U=s?e.offsetHeight-I-e.clientHeight:0,J=a?e.offsetWidth-N-e.clientWidth:0,Se=o?X+N:0,Te=o?G+I:0,k=i?i.width:v(r.width)-Se-J,x=i?i.height:v(r.height)-Te-U,Be=k+X+J+N,Ce=x+G+U+I,Q=p({devicePixelContentBoxSize:g(Math.round(k*devicePixelRatio),Math.round(x*devicePixelRatio),n),borderBoxSize:g(Be,Ce,n),contentBoxSize:g(k,x,n),contentRect:new M(b,u,k,x)});return E.set(e,Q),Q},R=function(e,t,r){var i=q(e,r),o=i.borderBoxSize,n=i.contentBoxSize,a=i.devicePixelContentBoxSize;switch(t){case h.DEVICE_PIXEL_CONTENT_BOX:return a;case h.BORDER_BOX:return o;default:return n}};var _=function(){function e(t){var r=q(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=p([r.borderBoxSize]),this.contentBoxSize=p([r.contentBoxSize]),this.devicePixelContentBoxSize=p([r.devicePixelContentBoxSize])}return e}();var S=function(e){if(O(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t};var fe=function(){var e=1/0,t=[];l.forEach(function(a){if(a.activeTargets.length!==0){var s=[];a.activeTargets.forEach(function(c){var f=new _(c.target),b=S(c.target);s.push(f),c.lastReportedSize=R(c.target,c.observedBox),b<e&&(e=b)}),t.push(function(){a.callback.call(a.observer,s,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var r=0,i=t;r<i.length;r++){var o=i[r];o()}return e};var W=function(e){l.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(o){o.isActive()&&(S(o.target)>e?r.activeTargets.push(o):r.skippedTargets.push(o))})})};var ve=function(){var e=0;for(W(e);ae();)e=fe(),W(e);return se()&&ue(),e>0};var F,he=[],We=function(){return he.splice(0).forEach(function(e){return e()})},me=function(e){if(!F){var t=0,r=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return We()}).observe(r,i),F=function(){r.textContent="".concat(t?t--:t++)}}he.push(e),F()};var ge=function(e){me(function(){requestAnimationFrame(e)})};var T=0,Fe=function(){return!!T},je=250,He={attributes:!0,characterData:!0,childList:!0,subtree:!0},be=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ye=function(e){return e===void 0&&(e=0),Date.now()+e},j=!1,Ve=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=je),!j){j=!0;var i=ye(t);ge(function(){var o=!1;try{o=ve()}finally{if(j=!1,t=i-ye(),!Fe())return;o?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,He)};document.body?r():m.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),be.forEach(function(r){return m.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),be.forEach(function(r){return m.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),B=new Ve,H=function(e){!T&&e>0&&B.start(),T+=e,!T&&B.stop()};var Xe=function(e){return!y(e)&&!le(e)&&getComputedStyle(e).display==="inline"},we=function(){function e(t,r){this.target=t,this.observedBox=r||h.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=R(this.target,this.observedBox,!0);return Xe(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}();var ke=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}();var C=new WeakMap,xe=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},w=function(){function e(){}return e.connect=function(t,r){var i=new ke(t,r);C.set(t,i)},e.observe=function(t,r,i){var o=C.get(t),n=o.observationTargets.length===0;xe(o.observationTargets,r)<0&&(n&&l.push(o),o.observationTargets.push(new we(r,i&&i.box)),H(1),B.schedule())},e.unobserve=function(t,r){var i=C.get(t),o=xe(i.observationTargets,r),n=i.observationTargets.length===1;o>=0&&(n&&l.splice(l.indexOf(i),1),i.observationTargets.splice(o,1),H(-1))},e.disconnect=function(t){var r=this,i=C.get(t);i.observationTargets.slice().forEach(function(o){return r.unobserve(t,o.target)}),i.activeTargets.splice(0,i.activeTargets.length)},e}();var V=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");w.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");w.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");w.unobserve(this,t)},e.prototype.disconnect=function(){w.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();addEventListener("DOMContentLoaded",function(){var e=d(location.search,"community"),t=d(location.search,"pagename"),r=d(location.search,"lang"),i=d(location.search,"type"),o=d(location.search,"preventWikidotBaseStyle")||"true";Ue(e,t,r,i,o),window.isInterwikiFrame=!0});function d(e,t){e.indexOf("?")===0&&(e=e.substring(1));var r=e.split("&");r.reverse();var i=r.find(function(o){return o.indexOf(t+"=")===0});return i==null?"":decodeURIComponent(i.substring(t.length+1))}function Ge(){Array.prototype.slice.call(parent).forEach(function(e){try{e.isStyleFrame&&window.requestStyleChange(e.location.search)}catch(t){if(!(t instanceof DOMException))throw t}})}function Ue(e,t,r,i,o){t=t.replace(/^_default:/,""),t=t.replace(/[^\w\-:]+/g,"-").toLowerCase(),t=t.replace(/^_/,"#").replace(/_/g,"-").replace(/#/,"_"),t=t.replace(/^-+|-+$/g,"");var n={br:ne}[e]||{},a=n[r]||{},s=document.referrer,u=location.href.replace(/^.*\//,"/"),c=K(s,u),f=new V(c);f.observe(document.documentElement),window.requestStyleChange=te(a.url||"",i||"default"),o!=="true"&&A(-1,"//d3g0gp89917ko0.cloudfront.net/v--3e3a6f7dbcc9/common--theme/base/css/style.css",!1),Ge(),ee(n,r,t)}})();
//# sourceMappingURL=interwiki.js.map
