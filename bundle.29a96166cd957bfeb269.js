!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t,o){e.exports=o.p+"assets/fonts/SFUIDisplay-Regular.woff"},,,,,function(e,t,o){"use strict";o.r(t);o(6);document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("b-menu"),t=document.getElementById("b-button-icon"),o=(document.getElementById("b-button-icon").src,!1),i=void 0,n=void 0;window.location.href.includes("local")?(console.log("localhost"),i="./../assets/images/burger.svg",n="./../assets/images/close.svg"):(i="./assets/images/burger.svg",n="./assets/images/close.svg",console.log("not local")),t.addEventListener("click",function(){e.classList.toggle("b-close-menu"),document.getElementById("b-button-icon").src=!0===o?i:n,o=!o});for(var r=document.getElementsByClassName("b-dropdown"),a=document.getElementsByClassName("b-dropdownMenu"),l=0;l<r.length;l++)r[l].onclick=function(){if(this.className.indexOf("b-active")>-1)for(var e=0;e<r.length;e++)c(r[e],"b-active");else f(this,"b-active")};for(l=0;l<a.length;l++)for(var d=a[l].children,p=0;p<d.length;p++)d[p].onclick=function(){var e=this.innerHTML;this.parentNode.previousElementSibling.children[0].innerHTML=e,s(this.parentNode,"showMenu")};function s(e,t){var o=e.className;o.indexOf(t)>-1?e.className=o.replace(" "+t,""):e.className=o+" "+t}function f(e,t){var o=e.className;o.indexOf(t)<1&&(e.className=o+" "+t)}function c(e,t){var o=e.className;o.indexOf(t)>-1&&(e.className=o.replace(" "+t,""))}window.addEventListener("click",function(e){for(l=0;l<r.length;l++)e.target!=r[l].children[0]&&c(r[l],"b-active")});for(var b=document.getElementsByClassName("b-accordeon-item "),m=document.getElementsByClassName("b-accordeon-item__head"),x=0;x<m.length;x++)m[x].addEventListener("click",h,!1);function h(){for(var e=this.parentNode.className,t=0;t<b.length;t++)b[t].className="b-accordeon-item b-close";"b-accordeon-item b-close"==e&&(this.parentNode.className="b-accordeon-item b-open")}})},function(e,t,o){var i=o(7);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(16)(i,n);i.locals&&(e.exports=i.locals)},function(e,t,o){var i=o(8);(e.exports=o(9)(!1)).push([e.i,'@font-face{font-family:"SFUIDisplay";src:url('+i(o(10))+') format("otf");src:url('+i(o(0))+') format("woff")}@font-face{font-family:"SFUIDisplayBold";src:url('+i(o(11))+') format("otf");src:url('+i(o(0))+") format(\"woff\")}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:'SFUIDisplay', Arial, sans-serif}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ul,ol{list-style:none}*{box-sizing:border-box}.b-form-container{margin-top:30px;max-width:730px;background-color:#f7f7f7;border-radius:20px;padding:20px}.b-form-container h2{font-size:60px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif;margin-bottom:40px}@media (max-width: 767px){.b-form-container h2{font-size:30px}}@media (max-width: 767px){.b-form-feedback__btn{margin-top:30px !important}}.b-form-feedback__item{display:flex;flex-flow:column wrap;width:50%;min-height:50px;background:#fff;padding:5px 10px;margin-bottom:20px;border-radius:10px;border:1px solid #eee}@media (max-width: 767px){.b-form-feedback__item{width:100%}}.b-form-feedback__item label{font-size:10px;float:left;width:100%;color:#cfcfcf}.b-form-feedback__item input{order:1 !important;display:block !important;flex:1 !important;margin:0;float:left;width:100%;border:0;font-size:18px;color:#111;outline:0;background-color:#fff;max-width:420px}.b-form-feedback__item input::-webkit-input-placeholder{color:#dcdcdc}.b-form-feedback__item input::-moz-placeholder{color:#dcdcdc}.b-form-feedback__item input::-moz-placeholder{color:#dcdcdc}.b-form-feedback__item input::-ms-input-placeholder{color:#dcdcdc}.b-form-feedback__item input:focus::-webkit-input-placeholder{color:transparent}.b-form-feedback__item input:focus:-moz-placeholder{color:transparent}.b-form-feedback__item input:focus::-moz-placeholder{color:transparent}.b-form-feedback__item input:focus:-ms-input-placeholder{color:transparent}.b-form-feedback__item--error{border:1px solid #8b572a}.b-form-feedback__textarea{background-color:#fff;border:1px solid #eee;width:100%;height:150px;outline:0;resize:none;border-radius:10px;padding:10px;font-family:'SFUIDisplay',  Arial, sans-serif}.b-input-name:focus+.b-label-name,.b-input-email:focus+.b-label-email,.b-input-tel:focus+.b-label-tel{opacity:1}.b-label-name,.b-label-email,.b-label-tel{color:#cfcfcf;opacity:0;transition:.4s bottom, .4s opacity}.b-form-wrap{padding:30px}@media (max-width: 767px){.b-form-wrap{padding:0}}.b-form-arrow{float:right;width:100%}.b-form-arrow img{display:block;float:right;width:30px;height:30px}.b-form-arrow img:hover{cursor:pointer}.b-form-btn{display:inline-block;margin-right:20px;outline:0;padding:10px 15px;min-width:255px;border-radius:10px;background-color:#ffc12f;font-size:18px;border:1px solid #ffc12f;margin-top:30px;transition:all ease .3s}.b-form-btn:hover{cursor:pointer;background-color:#ffd36d}@media (max-width: 767px){.b-form-btn{display:block;margin:0 auto}}.b-form-error{color:#8b572a;font-size:10px;padding:10px}.b-form-fields{display:flex;justify-content:flex-start;flex-flow:row wrap}.b-dropholder{position:relative;width:50%;height:50px;background:#fff;padding:10px;margin-bottom:20px;border-radius:10px;border:1px solid #eee}@media (max-width: 767px){.b-dropholder{width:100%}}.b-dropdown p{height:30px;line-height:30px;color:#111}.b-dropdown{float:left;width:100%;border-radius:10px;cursor:pointer;height:50px;position:relative}.b-dropdown:after{content:'';position:absolute;right:5px;top:10px;display:block;width:0;height:0;margin-left:5px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}.b-dropdown.b-active+.b-dropdownMenu{display:block}.b-dropdownMenu{padding:0;position:absolute;left:0;top:55px;right:0;margin:0;cursor:pointer;display:none;background:#fff;border:1px solid #eee;border-radius:10px;z-index:5;overflow:hidden;box-shadow:2px 5px 10px rgba(0,0,0,0.1)}.b-dropdownMenu li{padding:10px;border-bottom:1px dotted #fff;list-style:none}.b-dropdownMenu li:hover{background:#eee}.b-dropdownMenu li:last-child{border:none}.b-popup-welcome{max-width:920px;background-color:#f7f7f7;border-radius:20px;padding:50px 0 50px 50px}@media (max-width: 768px){.b-popup-welcome{padding:40px}}.b-popup-welcome__wrap h2{font-size:40px;line-height:40px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}@media (max-width: 768px){.b-popup-welcome__wrap h2{font-size:24px;line-height:24px;text-align:center}}.b-popup-welcome__item{max-width:450px}@media (max-width: 768px){.b-popup-welcome__item{max-width:100%}}.b-popup-welcome__item p{padding:30px 0;font-size:18px;color:#505050}@media (max-width: 768px){.b-popup-welcome__item p{font-size:16px;text-align:center}}.b-popup-welcome__wrap{background:url("+i(o(12))+") right/contain no-repeat}@media (max-width: 768px){.b-popup-welcome__wrap{background:none}}.b-welcome-image{height:190px;margin-bottom:10px;background:url("+i(o(13))+") center/contain no-repeat}@media (min-width: 769px){.b-welcome-image{display:none}}@media (max-width: 768px){.b-form-btn--center{display:block;margin-right:auto;margin-left:auto}}.b-form-container--order{max-width:920px !important}.b-sertificate{max-width:500px}.b-sertificate h3{font-size:22px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-sert-title{margin-top:10px;font-size:14px;color:#cfcfcf}.b-sert-title--first{margin-top:0}.b-sert-numb{font-size:24px;color:#555;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-sert-img{display:flex;align-items:center;justify-content:center;width:255px;height:255px;line-height:255px;background-color:#fff;border-radius:20px;margin-right:50px}@media (max-width: 767px){.b-sert-img{margin-bottom:30px}}.b-wrap-sertificate{display:flex;justify-content:flex-start;flex-flow:row nowrap}@media (max-width: 767px){.b-wrap-sertificate{flex-flow:row wrap}}.b-line{width:100%;color:#eee;background:#eee;height:1px;border:0;margin:30px 0}.b-form-caption{font-size:22px;color:#111;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif;margin-bottom:30px}.b-form-points{color:#878787;font-size:18px;margin-bottom:15px}.b-form-description{font-size:14px;color:#878787;margin-top:10px}.b-order-desc{margin:30px 0 10px 0}.b-order-desc,.b-order-desc2{color:#878787}.b-order-desc a,.b-order-desc2 a{color:#ffc12f;text-decoration:none}.b-order-desc a:hover,.b-order-desc2 a:hover{border-bottom:1px solid #ffc12f}.b-wrap-personal{background-color:#f7f7f7;padding:0 20px}.b-wrap-personal:before,.b-wrap-personal:after{content:\"\";display:table}.b-wrap-personal:after{clear:both}.b-personal-title{margin-top:50px;font-size:40px;color:#111;font-family:'SFUIDisplayBold',  Arial, sans-serif;font-weight:bold}.b-tabs{width:100%;margin:30px 0 0 0}.b-tabs__btn{display:block;float:left;width:196px;height:40px;margin-right:10px;border:0;border-radius:10px;background:#eee;text-align:center;font-size:16px;color:#111;transition:all ease .3s;cursor:pointer;outline:0;margin-bottom:10px}.b-tabs__btn--active{background:#ffc12f}.b-tabs__btn:hover{background:#ffd36d}.b-accordeon-item{float:left;display:block;width:100%}.b-accordeon-item__head{cursor:pointer;padding:20px 0;width:100%}.b-accordeon-item__head:hover p,.b-accordeon-item__head:hover h2{color:#ffc12f}.b-head-accordeon{display:flex;flex-flow:row nowrap;justify-content:space-between}.b-head-accordeon__item{display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start}.b-head-accordeon h2{margin-right:20px;font-size:22px;font-family:'SFUIDisplayBold',  Arial, sans-serif;font-weight:bold;color:#111;transition:all ease 0.3s}@media (max-width: 1024px){.b-head-accordeon h2{font-size:16px}}.b-head-accordeon p{font-size:18px;color:#878787;transition:all ease 0.3s}@media (max-width: 1024px){.b-head-accordeon p{font-size:14px}}.b-accordeon-sign{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background-color:#ffc12f;color:#fff;font-size:16px}.b-line--personal{margin:0}.b-accordeon-triangle{display:inline-block;width:0;height:0;margin-left:10px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}.b-accord-content{display:flex;justify-content:flex-start;flex-flow:row wrap}.b-accord__img{display:flex;align-items:center;width:255px;height:255px;background:#fff;border-radius:10px;padding:15px;margin-right:30px;margin-bottom:20px}.b-accord__img img{display:block;width:100%;height:auto}.b-accord-table td{padding-bottom:10px;font-size:18px}@media (max-width: 1024px){.b-accord-table td{font-size:14px}}.b-accord-table td:first-child{color:#111;text-align:right;padding-right:10px}.b-accord-table td:last-child{color:#878787}.b-accordeon-wrap{padding:50px 0}.b-main--bg{background-color:#f7f7f7}.b-table__link{color:#ffc12f;text-decoration:none}.b-table__link:hover{border-bottom:1px solid #ffc12f}.b-table-cert{display:flex;flex-flow:row wrap;justify-content:flex-start}.b-table-cert .b-form-btn{margin:0}@media (max-width: 718px){.b-table-cert .b-form-btn{margin-top:15px}}.b-table-cert .b-form-feedback__item{margin:0;width:255px}.container{height:80px;display:flex;flex-flow:row nowrap;overflow:scroll;margin-bottom:15px}@media (min-width: 1024px){.container{overflow:auto}}.child{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;width:200px}.b-close .b-accordeon-item__content{height:0px;transition:height 1s ease-out;-webkit-transform:scaleY(0);-o-transform:scaleY(0);-ms-transform:scaleY(0);transform:scaleY(0);float:left;display:block}.b-open .b-accordeon-triangle{display:inline-block;width:0;height:0;margin-left:10px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:none;border-bottom:10px solid #ffc12f;transition:all ease .3s}.b-open .b-accordeon-item__content{padding:20px 0;width:100%;margin:0px 0px 10px 0px;-webkit-transform:scaleY(1);-o-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform-origin:top;-o-transform-origin:top;-ms-transform-origin:top;transform-origin:top;transition:transform 0.4s ease}input,textarea{-webkit-appearance:none}.b-container-personal,.b-wrapper,.b-header,.b-nav,.b-welcome,.b-banners-upper,.b-our-platform,.b-decision,.b-offer,.b-deliver,.b-footer{max-width:1200px;margin:0 auto}.b-header-container{background-color:#f7f7f7;padding:0 20px}.b-header-container:before,.b-header-container:after{content:\"\";display:table}.b-header-container:after{clear:both}@media (max-width: 1024px){.b-header-container{padding:0}}.b-header{display:flex;justify-content:row nowrap;align-items:center;justify-content:space-between}@media (max-width: 1024px){.b-header{padding:0 20px}}.b-logo__img{padding:5px 0}@media (max-width: 1024px){.b-logo__img{width:140px;padding:15px 0}}.b-district{display:flex;flex-flow:row nowrap;justify-content:space-around;align-items:center}@media (max-width: 1024px){.b-district{display:none}}.b-district__img{display:inline-block;margin-right:5px;width:26px;height:26px}.b-district p:after{content:'';display:inline-block;width:0;height:0;margin-left:5px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}@media (max-width: 1024px){.b-district--menu{display:flex;justify-content:flex-start}}.b-nav-container{background-color:#ffc12f;padding:0 20px}@media (max-width: 1024px){.b-nav-container{background-color:#f7f7f7;position:relative;padding:0}}.b-nav{display:flex;flex-flow:row nowrap;justify-content:space-between}@media (max-width: 1024px){.b-nav{position:absolute;top:0;left:0;background:#f7f7f7;z-index:1000;width:100%;flex-flow:column wrap;padding:0 20px 20px 20px;min-height:600px}}.b-list{display:flex;align-items:center;justify-content:flex-start}@media (max-width: 1024px){.b-list{flex-flow:column wrap;align-items:flex-start}}.b-list__item{display:block;float:left}@media (max-width: 1024px){.b-list__item{padding:0}}@media (max-width: 1024px){.b-list__item{margin-bottom:20px;margin-right:0}}.b-list__link{display:inline-block;text-decoration:none;font-size:18px;color:#111;padding:25px;transition:all ease .3s}.b-list__link:hover{background:#ffd36d}@media (max-width: 1024px){.b-list__link{padding:0}}.b-cart{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}@media (max-width: 1024px){.b-cart{justify-content:flex-start}}.b-cart__desc1{font-size:18px;float:right}.b-cart__desc1 span{font-family:'SFUIDisplayBold',  Arial, sans-serif;font-weight:bold}.b-cart__desc2{font-size:14px}.b-cart__desc2 span{font-family:'SFUIDisplayBold',  Arial, sans-serif;font-weight:bold}.b-cart__item{display:flex;flex-flow:column wrap}.b-cart__img{display:inline-block;width:40px;height:40px;margin-left:5px}@media (max-width: 1024px){.b-login{display:none}.b-login--menu{display:block;margin-bottom:290px;font-size:18px}}.b-login__item{float:left}@media (max-width: 1024px){.b-login__item{float:none;margin-bottom:20px}}.b-login__circle{display:inline-block;width:26px;height:26px;line-height:26px;margin-left:5px;text-align:center;vertical-align:middle;background-color:#ffc12f;font-size:16px;color:#fff;border-radius:50%}@media (max-width: 1024px){.b-login__circle{margin-right:10px}}.b-login__exit{float:left;margin-left:25px;text-decoration:none;color:#333}@media (max-width: 1024px){.b-login__exit{margin-left:0}}.b-welcome-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-welcome-container{padding:0}}.b-welcome{padding:100px 0 100px 0}.b-welcome:before,.b-welcome:after{content:\"\";display:table}.b-welcome:after{clear:both}@media (max-width: 1024px){.b-welcome{padding:50px 0}}.b-welcome h1{font-size:60px;line-height:60px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-welcome p{font-size:24px;line-height:30px;padding:50px 0 50px 0;max-width:740px}.b-welcome__btn{border-radius:5px;background-color:#ffc12f;text-decoration:none;padding:10px;color:#111}.b-background{height:500px;background:url("+i(o(14))+") center/cover no-repeat}@media (max-width: 767px){.b-background{height:400px}}.b-banners-upper{height:500px;display:flex;align-items:center;flex-flow:row wrap;justify-content:flex-start;padding:0 20px;align-content:center}@media (max-width: 767px){.b-banners-upper{height:400px;justify-content:center}}.b-banners-upper p{max-width:700px;font-size:40px;line-height:40px;color:#fff;font-weight:bold;font-family:'SFUIDisplayBold', Arial, sans-serif;margin-bottom:50px}@media (min-width: 768px) and (max-width: 1024px){.b-banners-upper p{font-size:40px !important;line-height:40px !important;text-align:left !important}}@media (max-width: 1024px){.b-banners-upper p{line-height:30px}}.b-banners-upper button{display:inline-block;margin-right:20px;outline:0;padding:10px 15px;min-width:255px;border-radius:10px;background-color:#ffc12f;font-size:18px;border:1px solid #ffc12f;margin-top:30px;transition:all ease .3s}@media (max-width: 767px){.b-banners-upper button{margin:30px auto 0 auto;display:block}}.b-banners-upper button:hover{transition:all ease .5s;background-color:#ffd36d;border:1px solid #ffd36d;cursor:pointer}.b-our-platform{padding:100px 20px}.b-our-platform:before,.b-our-platform:after{content:\"\";display:table}.b-our-platform:after{clear:both}.b-our-platform__title{font-size:40px;font-weight:bold;margin-bottom:50px;font-family:'SFUIDisplayBold',  Arial, sans-serif}@media (max-width: 1024px){.b-our-platform{padding:50px 20px}}.b-economy{display:flex;flex-flow:row wrap;justify-content:space-between;text-align:center}@media (max-width: 1024px){.b-economy{justify-content:center}}.b-economy__item{max-width:350px}@media (max-width: 1024px){.b-economy__item{margin-bottom:30px}}.b-economy__item h2{font-size:22px;font-weight:bold;margin-bottom:15px;margin-top:15px;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-economy__item p{font-size:18px;color:#505050}@media (max-width: 1024px){.b-economy__item p{color:#878787;font-size:16px}}.b-decision-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-decision-container{padding:0}}.b-decision{padding:100px 0}.b-decision:before,.b-decision:after{content:\"\";display:table}.b-decision:after{clear:both}@media (max-width: 1024px){.b-decision{padding:50px 0}}.b-decision h1{font-size:40px;font-weight:bold;padding-bottom:50px;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-deccontainer{display:flex;flex-flow:row wrap;justify-content:space-between;margin:0 auto}@media (max-width: 1024px){.b-deccontainer{flex-flow:column wrap;padding:0}}.b-deccontainer img{max-width:580px;margin-bottom:30px}@media (max-width: 1024px){.b-deccontainer img{margin:0 auto 30px auto;width:100%;height:auto;max-width:250px}}.b-declist{max-width:600px;padding-left:30px}@media (max-width: 1024px){.b-declist{padding-left:0;margin:0 auto}}.b-declist__item{margin-bottom:20px;list-style-image:url("+i(o(15))+")}@media (max-width: 1024px){.b-declist__item{list-style-image:none}}.b-declist__item h2{font-size:22px;color:#000;margin-bottom:5px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-declist__item p{color:#878787}@media (max-width: 1024px){.b-declist__item p{font-size:16px}}@media (max-width: 1024px){.b-declist__item{margin-bottom:30px;text-align:center;padding:0 20px}}.b-offer-container{background-color:#f7f7f7;padding:0 20px}@media (max-width: 1024px){.b-offer-container{padding:0}}.b-offer{padding:100px 0}@media (max-width: 1024px){.b-offer{padding:50px 0}}.b-offer h2{font-size:40px;font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-offerlist{display:flex;flex-flow:row wrap;justify-content:center}.b-offerlist__item{width:350px;display:flex;flex-flow:column wrap;margin-right:70px}@media (max-width: 1024px){.b-offerlist__item{margin-right:0}}.b-offerlist__item:nth-child(3){margin-right:0}@media (max-width: 1024px){.b-offerlist__item:nth-child(3){margin-right:0}}.b-offerlist__item img{display:inline-block;margin:30px auto;width:150px;height:100px}.b-offerlist__item p{font-size:18px;text-align:center;color:#878787}@media (max-width: 1024px){.b-offerlist__item p{font-size:16px;max-width:340px}}.b-deliver-container{background-color:#ffc12f;padding:0 20px}@media (max-width: 1024px){.b-deliver-container{padding:0}}.b-deliver{padding:100px 0}@media (max-width: 1024px){.b-deliver{padding:50px 20px}}.b-deliver h2{font-size:40px;font-weight:bold;color:#111;font-family:'SFUIDisplayBold',  Arial, sans-serif}.b-deliver__btn{display:block;margin:0 auto;width:255px;height:40px;line-height:40px;color:#555;text-decoration:none;outline:0;text-align:center;border-radius:10px;background-color:#fff;font-size:18px;border:1px solid #fff;transition:all ease .3s}.b-deliver__btn:hover{cursor:pointer;background-color:#ffecc0;border:1px solid #ffecc0}.b-img-container{height:270px;display:flex;align-items:center;padding:0 20px}@media (max-width: 1024px){.b-img-container{padding:0}}.b-slider{display:flex;flex-flow:row wrap;justify-content:space-between;margin:40px 0;max-width:1120px}@media (max-width: 420px){.b-slider{justify-content:center}}.b-slider__item{width:255px;height:400px;margin-right:10px;border-radius:20px;background-color:#ffffff;text-align:center;padding:10px}.b-slider__item:last-child{margin-right:0}.b-slider__item img{display:block;height:auto;max-width:100%;width:100%}.b-slider__item p{font-size:16px;color:#555}.b-slider__bonus{margin-top:20px}.b-slider__bonus span{font-weight:bold;font-family:'SFUIDisplayBold',  Arial, sans-serif;font-size:24px;color:#555}.b-slider__bonus span:after{content:'';display:inline-block;width:0;height:0;margin-left:5px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #ffc12f}.b-for-footer{min-height:calc(100vh - 70px)}.b-footer-container{background-color:#f7f7f7;padding:0 20px;height:70px}@media (max-width: 1024px){.b-footer-container{padding:0;height:auto}}.b-footer-list{display:flex;flex-flow:row wrap;align-items:center;padding:30px 0}@media (max-width: 1024px){.b-footer-list{margin:0 auto;max-width:300px;text-align:center;justify-content:center;padding:50px 0}}.b-footer-list__item{float:left;margin-right:50px}@media (max-width: 1024px){.b-footer-list__item{width:100%;margin-right:0;margin-bottom:10px}.b-footer-list__item:nth-child(1){order:2}.b-footer-list__item:nth-child(1){margin-top:30px}}.b-footer-list__item:last-child{margin-right:0}.b-footer-list__link{font-size:16px;color:#b2b2b2;text-decoration:none}.b-footer-list__link:hover{border-bottom:1px solid #b2b2b2}@media (max-width: 1024px){.b-offer h2,.b-deliver h2,.b-our-platform__title,.b-banners-upper p,.b-decision h1{font-size:24px;text-align:center}}@media (max-width: 1024px){.b-close-menu{display:none}}.b-menu{display:flex;align-items:center}@media (min-width: 1025px){.b-menu,.b-close-pc{display:none}}\n",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var n=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[o].concat(r).concat([n]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(i[r]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&i[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t,o){e.exports=o.p+"assets/fonts/SFUIDisplay-Regular.otf"},function(e,t,o){e.exports=o.p+"assets/fonts/SFUIDisplay-Bold.otf"},function(e,t,o){e.exports=o.p+"assets/images/popup.png"},function(e,t,o){e.exports=o.p+"assets/images/small-pc.png"},function(e,t,o){e.exports=o.p+"assets/images/bitmap.jpg"},function(e,t,o){e.exports=o.p+"assets/images/dot.png"},function(e,t,o){var i={},n=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),r=function(e){var t={};return function(e,o){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),a=null,l=0,d=[],p=o(17);function s(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(h(n.parts[a],t))}else{var l=[];for(a=0;a<n.parts.length;a++)l.push(h(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:l}}}}function f(e,t){for(var o=[],i={},n=0;n<e.length;n++){var r=e[n],a=t.base?r[0]+t.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(l):o.push(i[a]={id:a,parts:[l]})}return o}function c(e,t){var o=r(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===e.insertAt)i?i.nextSibling?o.insertBefore(t,i.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),d.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=r(e.insertAt.before,o);o.insertBefore(t,n)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return o.nc}();i&&(e.attrs.nonce=i)}return x(t,e.attrs),c(e,t),t}function x(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function h(e,t){var o,i,n,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var d=l++;o=a||(a=m(t)),i=u.bind(null,o,d,!1),n=u.bind(null,o,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),c(e,t),t}(t),i=function(e,t,o){var i=o.css,n=o.sourceMap,r=void 0===t.convertToAbsoluteUrls&&n;(t.convertToAbsoluteUrls||r)&&(i=p(i));n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([i],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,o,t),n=function(){b(o),o.href&&URL.revokeObjectURL(o.href)}):(o=m(t),i=function(e,t){var o=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),n=function(){b(o)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=n()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=f(e,t);return s(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r];(l=i[a.id]).refs--,n.push(l)}e&&s(f(e,t),t);for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}};var g=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}();function u(e,t,o,i){var n=o?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var r=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,i=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}}]);
//# sourceMappingURL=bundle.29a96166cd957bfeb269.js.map