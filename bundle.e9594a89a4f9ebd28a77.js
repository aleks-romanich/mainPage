!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}([function(e,t,i){e.exports=i.p+"assets/fonts/SFUIDisplay-Regular.otf"},function(e,t,i){e.exports=i.p+"assets/fonts/SFUIDisplay-Bold.otf"},,,,,function(e,t,i){"use strict";i.r(t);i(7);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("b-menu"),t=document.getElementById("b-button-icon"),i=(document.getElementById("b-button-icon").src,!1),n=void 0,o=void 0;window.location.href.includes("local")?(console.log("localhost"),n="./../assets/images/burger.svg",o="./../assets/images/close.svg"):(n="./assets/images/burger.svg",o="./assets/images/close.svg",console.log("not local")),t.addEventListener("click",function(){e.classList.toggle("b-close-menu"),document.getElementById("b-button-icon").src=!0===i?n:o,i=!i});var r,a=document.getElementsByClassName("b-banners__img")[0];window.matchMedia("(max-width: 420px)").matches&&(a.src="./../assets/images/bg-mobile.png",a.srcset="./../assets/images/bg-mobile.png 2x, ./../assets/images/bg-mobile.png 3x"),window.matchMedia("(min-width: 420px)").matches&&(a.src="./../assets/images/bitmap.jpg",a.srcset="./../assets/images/bitmap@2x.jpg 2x, ./../assets/images/bitmap@3x.jpg 3x"),window.addEventListener("resize",function(){r||(r=setTimeout(function(){r=null,function(){console.log("resize"),window.matchMedia("(max-width: 420px)").matches&&(a.src="./assets/images/bg-mobile.png",a.srcset="./assets/images/bg-mobile.png 2x, ./assets/images/bg-mobile.png 3x");window.matchMedia("(min-width: 420px)").matches&&(a.src="./assets/images/bitmap.jpg",a.srcset="./assets/images/bitmap@2x.jpg 2x, ./assets/images/bitmap@3x.jpg 3x")}()},66))},!1)})},function(e,t,i){var n=i(8);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(12)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,i){var n=i(9);(e.exports=i(10)(!1)).push([e.i,'@font-face{font-family:"SFUIDisplay";src:url('+n(i(0))+') format("woff2"),url('+n(i(0))+') format("woff")}@font-face{font-family:"SFUIDisplayBold";src:url('+n(i(1))+') format("woff2"),url('+n(i(1))+") format(\"woff\")}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:'SFUIDisplay', Arial, sans-serif}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ul,ol{list-style:none}*{box-sizing:border-box}.b-wrapper,.b-header,.b-nav,.b-welcome,.b-upper-container,.b-our-platform,.b-decision,.b-offer,.b-deliver,.b-footer{max-width:1200px;margin:0 auto}.b-header-container{background-color:#f7f7f7;padding:0 20px}.b-header-container:before,.b-header-container:after{content:\"\";display:table}.b-header-container:after{clear:both}@media (max-width: 1024px){.b-header-container{padding:0}}.b-header{display:flex;justify-content:row nowrap;align-items:center;justify-content:space-between}@media (max-width: 1024px){.b-header{padding:0 20px}}.b-logo__img{padding:5px 0}@media (max-width: 1024px){.b-logo__img{width:140px;padding:15px 0}}.b-district{display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center}@media (max-width: 1024px){.b-district{display:none}}.b-district__img{display:inline-block;margin-right:5px;width:26px;height:26px}.b-district p:after{content:'';display:inline-block;width:0;height:0;margin-left:5px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}@media (max-width: 1024px){.b-district--menu{display:flex;justify-content:flex-start}}.b-nav-container{background-color:#ffc12f;padding:0 20px}@media (max-width: 1024px){.b-nav-container{background-color:#f7f7f7;position:relative;padding:0}}.b-nav{display:flex;flex-flow:row nowrap;justify-content:space-between}@media (max-width: 1024px){.b-nav{position:absolute;top:0;left:0;background:#f7f7f7;z-index:1000;width:100%;flex-flow:column wrap;padding:0 20px 20px 20px;min-height:600px}}.b-list{display:flex;align-items:center;justify-content:flex-start}@media (max-width: 1024px){.b-list{flex-flow:column wrap;align-items:flex-start;padding:25px 0 0 0}}.b-list__item{padding:25px 0 25px 0;display:block;float:left}@media (max-width: 1024px){.b-list__item{padding:0}}.b-list__item:hover{background:#ffd36d}@media (max-width: 1024px){.b-list__item{margin-bottom:20px;margin-right:0}}.b-list__link{text-decoration:none;font-size:18px;color:#111;padding:0 25px}@media (max-width: 1024px){.b-list__link{padding:0}}.b-cart{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}@media (max-width: 1024px){.b-cart{justify-content:flex-start}}.b-cart__desc1{font-size:18px;float:right}.b-cart__desc1 span{font-family:'SFUIDisplayBold';font-weight:bold}.b-cart__desc2{font-size:14px}.b-cart__desc2 span{font-family:'SFUIDisplayBold';font-weight:bold}.b-cart__img{display:inline-block;width:40px;height:40px;margin-left:5px}@media (max-width: 1024px){.b-login{display:none}.b-login--menu{display:block;margin-bottom:290px;font-size:18px}}.b-login__item{float:left}@media (max-width: 1024px){.b-login__item{float:none;margin-bottom:20px}}.b-login__circle{display:inline-block;width:26px;height:26px;line-height:26px;margin-left:5px;text-align:center;vertical-align:middle;background-color:#ffc12f;font-size:16px;color:#fff;border-radius:50%}@media (max-width: 1024px){.b-login__circle{margin-right:10px}}.b-login__exit{float:left;margin-left:25px;text-decoration:none;color:#333}@media (max-width: 1024px){.b-login__exit{margin-left:0}}.b-welcome-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-welcome-container{padding:0}}.b-welcome{padding:100px 0 100px 0}.b-welcome:before,.b-welcome:after{content:\"\";display:table}.b-welcome:after{clear:both}@media (max-width: 1024px){.b-welcome{padding:50px 0}}.b-welcome h1{font-size:60px;line-height:60px;font-weight:bold}.b-welcome p{font-size:24px;line-height:30px;padding:50px 0 50px 0;max-width:740px}.b-welcome__btn{border-radius:5px;background-color:#ffc12f;text-decoration:none;padding:10px;color:#111}.b-upper-container{position:relative;padding:0 20px}@media (max-width: 1024px){.b-upper-container{padding:0}}.b-banners{position:relative}.b-banners__img{display:block;margin:0 auto;max-width:100%;height:auto;min-height:400px}.b-banners-upper{position:absolute;bottom:100px;left:0;z-index:100;padding:0 20px}@media (max-width: 1024px){.b-banners-upper{padding:0 20px;bottom:55px}}.b-banners-upper p{max-width:900px;font-size:55px;line-height:54px;color:#fff;font-weight:bold;font-family:'SFUIDisplayBold'}@media (max-width: 1024px){.b-banners-upper p{line-height:30px}}.b-banners-upper button{display:inline-block;margin-right:20px;outline:0;padding:10px 15px;min-width:255px;border-radius:10px;background-color:#ffc12f;font-size:18px;border:1px solid #ffc12f;margin-top:30px;transition:all ease .3s}@media (max-width: 1024px){.b-banners-upper button{margin:30px auto 0 auto;display:block}}.b-banners-upper button:hover{transition:all ease .5s;background-color:#ffd36d;border:1px solid #ffd36d;cursor:pointer}.b-our-platform{padding:100px 20px}.b-our-platform:before,.b-our-platform:after{content:\"\";display:table}.b-our-platform:after{clear:both}.b-our-platform__title{font-size:60px;font-weight:bold;margin-bottom:50px;font-family:'SFUIDisplayBold'}@media (max-width: 1024px){.b-our-platform{padding:50px 20px}}.b-economy{display:flex;flex-flow:row wrap;justify-content:space-between;text-align:center}@media (max-width: 1024px){.b-economy{justify-content:center}}.b-economy__item{max-width:350px}@media (max-width: 1024px){.b-economy__item{margin-bottom:30px}}.b-economy__item h2{font-size:22px;font-weight:bold;margin-bottom:15px;margin-top:15px;font-family:'SFUIDisplayBold'}.b-economy__item p{font-size:18px;color:#505050}@media (max-width: 1024px){.b-economy__item p{color:#878787;font-size:16px}}.b-decision-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-decision-container{padding:0}}.b-decision{padding:100px 0}.b-decision:before,.b-decision:after{content:\"\";display:table}.b-decision:after{clear:both}@media (max-width: 1024px){.b-decision{padding:50px 0}}.b-decision h1{font-size:57px;font-weight:bold;padding-bottom:50px;font-family:'SFUIDisplayBold'}.b-deccontainer{display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto;padding:0 20px}@media (max-width: 1024px){.b-deccontainer{flex-flow:column wrap;padding:0}}.b-deccontainer img{max-width:500px;margin-bottom:30px}@media (max-width: 1024px){.b-deccontainer img{margin:0 auto 30px auto;width:100%;height:auto;max-width:250px}}.b-declist{max-width:600px;padding-left:30px}@media (max-width: 1024px){.b-declist{padding-left:0;margin:0 auto}}.b-declist__item{margin-bottom:20px;list-style-image:url("+n(i(11))+")}@media (max-width: 1024px){.b-declist__item{list-style-image:none}}.b-declist__item h2{font-size:22px;color:#000;margin-bottom:5px;font-weight:bold;font-family:'SFUIDisplayBold'}.b-declist__item p{color:#878787}@media (max-width: 1024px){.b-declist__item p{font-size:16px}}@media (max-width: 1024px){.b-declist__item{margin-bottom:30px;text-align:center;padding:0 20px}}.b-offer-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-offer-container{padding:0}}.b-offer{padding:100px 0}@media (max-width: 1024px){.b-offer{padding:50px 0}}.b-offer h2{font-size:60px;font-weight:bold;font-family:'SFUIDisplayBold'}.b-offerlist{display:flex;flex-flow:row wrap;justify-content:space-around}.b-offerlist__item{width:350px;display:flex;flex-flow:column wrap;justify-content:center}.b-offerlist__item img{display:inline-block;margin:30px auto;max-width:150px}.b-offerlist__item p{font-size:18px;text-align:center;color:#878787}@media (max-width: 1024px){.b-offerlist__item p{font-size:16px}}.b-deliver-container{background-color:#ffc12f;padding:0 20px}@media (max-width: 1024px){.b-deliver-container{padding:0}}.b-deliver{padding:100px 0}@media (max-width: 1024px){.b-deliver{padding:50px 20px}}.b-deliver h2{font-size:54px;font-weight:bold;color:#111;font-family:'SFUIDisplayBold'}.b-deliver__btn{display:block;margin:0 auto;max-width:255px;color:#555;text-decoration:none;outline:0;padding:10px 15px;border-radius:10px;background-color:#fff;font-size:18px;border:1px solid #fff;transition:all ease .3s}.b-deliver__btn:hover{cursor:pointer;background-color:#ffecc0;border:1px solid #ffecc0}.b-img-container{min-height:270px;display:flex;align-items:center;padding:0 20px}@media (max-width: 1024px){.b-img-container{padding:0}}.b-slider{display:flex;flex-flow:row wrap;justify-content:space-between;margin:40px 0;max-width:1120px}@media (max-width: 420px){.b-slider{justify-content:center}}.b-slider__item{width:255px;height:400px;margin-right:10px;border-radius:20px;background-color:#ffffff;text-align:center;padding:10px}.b-slider__item:last-child{margin-right:0}.b-slider__item img{height:auto;max-width:100%}.b-slider__item p{font-size:16px;color:#555}.b-slider__bonus{margin-top:20px}.b-slider__bonus span{font-weight:bold;font-size:24px;color:#555}.b-slider__bonus span:after{content:'';display:inline-block;width:0;height:0;margin-left:5px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}.b-footer-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-footer-container{padding:0}}.b-footer-list{display:flex;flex-flow:row wrap;align-items:center;padding:30px 0}@media (max-width: 1024px){.b-footer-list{margin:0 auto;max-width:300px;text-align:center;justify-content:center;padding:50px 0}}.b-footer-list__item{float:left;margin-right:50px}@media (max-width: 1024px){.b-footer-list__item{width:100%;margin-right:0;margin-bottom:10px}.b-footer-list__item:nth-child(1){order:2}.b-footer-list__item:nth-child(1){margin-top:30px}}.b-footer-list__item:last-child{margin-right:0}.b-footer-list__link{font-size:16px;color:#b2b2b2;text-decoration:none}@media (max-width: 1024px){.b-offer h2,.b-deliver h2,.b-our-platform__title,.b-banners-upper p,.b-decision h1{font-size:24px;text-align:center}}@media (max-width: 1024px){.b-close-menu{display:none}}.b-menu{display:flex;align-items:center}@media (min-width: 1024px){.b-menu,.b-close-pc{display:none}}\n",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),r=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[i].concat(r).concat([o]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(e,t,i){e.exports=i.p+"assets/images/dot.png"},function(e,t,i){var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),r=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,d=[],l=i(13);function p(e,t){for(var i=0;i<e.length;i++){var o=e[i],r=n[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(u(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(u(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,t){for(var i=[],n={},o=0;o<e.length;o++){var r=e[o],a=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};n[a]?n[a].parts.push(s):i.push(n[a]={id:a,parts:[s]})}return i}function c(e,t){var i=r(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),d.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(e.insertAt.before,i);i.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return i.nc}();n&&(e.attrs.nonce=n)}return x(t,e.attrs),c(e,t),t}function x(e,t){Object.keys(t).forEach(function(i){e.setAttribute(i,t[i])})}function u(e,t){var i,n,o,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var d=s++;i=a||(a=b(t)),n=h.bind(null,i,d,!1),o=h.bind(null,i,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),c(e,t),t}(t),n=function(e,t,i){var n=i.css,o=i.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(n=l(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,i,t),o=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=b(t),n=function(e,t){var i=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}.bind(null,i),o=function(){m(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=f(e,t);return p(i,t),function(e){for(var o=[],r=0;r<i.length;r++){var a=i[r];(s=n[a.id]).refs--,o.push(s)}e&&p(f(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete n[s.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}();function h(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,n=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=bundle.e9594a89a4f9ebd28a77.js.map