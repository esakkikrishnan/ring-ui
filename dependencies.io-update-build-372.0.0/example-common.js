!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=843)}({10:function(n,e,t){n.exports=t(14)(247)},110:function(n,e,t){n.exports=t(14)(398)},12:function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},13:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],e));h[o.id]={id:o.id,refs:1,parts:a}}}}function r(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],l=i[3],u={css:c,media:s,sourceMap:l};o[a]?o[a].parts.push(u):t.push(o[a]={id:a,parts:[u]})}return t}function i(n,e){var t=b(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=b(n.insertAt.before,t);t.insertBefore(e,r)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return l(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=w++;t=y||(y=c(e)),o=d.bind(null,t,l,!1),r=d.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),o=p.bind(null,t,e),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),o=m.bind(null,t),r=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}function d(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=O(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=S(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},g=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=v.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),y=null,w=0,x=[],S=t(225);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=r(n,e);return o(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],s=h[c.id];s.refs--,i.push(s)}if(n){o(r(n,e),e)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete h[s.id]}}}};var O=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},14:function(n,e){n.exports=vendor_lib},16:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},225:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return n;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},4:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},60:function(n,e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(n){"object"==typeof window&&(t=window)}n.exports=t},790:function(n,e){!function(e){"use strict";function t(){}function o(n,e,t,o){"addEventListener"in window?n.addEventListener(e,t,!!Rn&&(o||{})):"attachEvent"in window&&n.attachEvent("on"+e,t)}function r(n,e,t){"removeEventListener"in window?n.removeEventListener(e,t,!1):"detachEvent"in window&&n.detachEvent("on"+e,t)}function i(n){return n.charAt(0).toUpperCase()+n.slice(1)}function a(n){return pn+"["+gn+"] "+n}function c(n){mn&&"object"==typeof window.console&&console.log(a(n))}function s(n){"object"==typeof window.console&&console.warn(a(n))}function l(){u(),c("Initialising iFrame ("+location.href+")"),f(),p(),m("background",K),m("padding",Z),M(),y(),w(),h(),A(),x(),un=_(),H("init","Init message from host page"),In()}function u(){function n(n){return"true"===n}var t=ln.substr(hn).split(":");gn=t[0],X=e!==t[1]?Number(t[1]):X,nn=e!==t[2]?n(t[2]):nn,mn=e!==t[3]?n(t[3]):mn,fn=e!==t[4]?Number(t[4]):fn,$=e!==t[6]?n(t[6]):$,Q=t[7],cn=e!==t[8]?t[8]:cn,K=t[9],Z=t[10],Sn=e!==t[11]?Number(t[11]):Sn,un.enable=e!==t[12]&&n(t[12]),bn=e!==t[13]?t[13]:bn,_n=e!==t[14]?t[14]:_n}function f(){function n(n,e){return"function"==typeof n&&(c("Setup custom "+e+"CalcMethod"),zn[e]=n,n="custom"),n}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(!function(){var n=window.iFrameResizer;c("Reading data from page: "+JSON.stringify(n)),Cn="messageCallback"in n?n.messageCallback:Cn,In="readyCallback"in n?n.readyCallback:In,xn="targetOrigin"in n?n.targetOrigin:xn,cn="heightCalculationMethod"in n?n.heightCalculationMethod:cn,_n="widthCalculationMethod"in n?n.widthCalculationMethod:_n}(),cn=n(cn,"height"),_n=n(_n,"width")),c("TargetOrigin for parent set to: "+xn)}function d(n,e){return-1!==e.indexOf("-")&&(s("Negative CSS value ignored for "+n),e=""),e}function m(n,t){e!==t&&""!==t&&"null"!==t&&(document.body.style[n]=t,c("Body "+n+' set to "'+t+'"'))}function p(){e===Q&&(Q=X+"px"),m("margin",d("margin",Q))}function h(){document.documentElement.style.height="",document.body.style.height="",c('HTML & body height set to "auto"')}function g(n){var e={add:function(e){function t(){H(n.eventName,n.eventType)}Ln[e]=t,o(window,e,t,{passive:!0})},remove:function(n){var e=Ln[n];delete Ln[n],r(window,n,e)}};n.eventNames&&Array.prototype.map?(n.eventName=n.eventNames[0],n.eventNames.map(e[n.method])):e[n.method](n.eventName),c(i(n.method)+" event listener: "+n.eventType)}function v(n){g({method:n,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),g({method:n,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),g({method:n,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),g({method:n,eventType:"Input",eventName:"input"}),g({method:n,eventType:"Mouse Up",eventName:"mouseup"}),g({method:n,eventType:"Mouse Down",eventName:"mousedown"}),g({method:n,eventType:"Orientation Change",eventName:"orientationchange"}),g({method:n,eventType:"Print",eventName:["afterprint","beforeprint"]}),g({method:n,eventType:"Ready State Change",eventName:"readystatechange"}),g({method:n,eventType:"Touch Start",eventName:"touchstart"}),g({method:n,eventType:"Touch End",eventName:"touchend"}),g({method:n,eventType:"Touch Cancel",eventName:"touchcancel"}),g({method:n,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),g({method:n,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),g({method:n,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===bn&&g({method:n,eventType:"IFrame Resized",eventName:"resize"})}function b(n,e,t,o){return e!==n&&(n in t||(s(n+" is not a valid option for "+o+"CalculationMethod."),n=e),c(o+' calculation method set to "'+n+'"')),n}function y(){cn=b(cn,an,Fn,"height")}function w(){_n=b(_n,Mn,Hn,"width")}function x(){!0===$?(v("add"),N()):c("Auto Resize disabled")}function S(){c("Disable outgoing messages"),yn=!1}function O(){c("Remove event listener: Message"),r(window,"message",V)}function E(){null!==Y&&Y.disconnect()}function T(){v("remove"),E(),clearInterval(dn)}function k(){S(),O(),!0===$&&T()}function M(){var n=document.createElement("div");n.style.clear="both",n.style.display="block",document.body.appendChild(n)}function _(){function n(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function t(e){var t=e.getBoundingClientRect(),o=n();return{x:parseInt(t.left,10)+parseInt(o.x,10),y:parseInt(t.top,10)+parseInt(o.y,10)}}function r(n){var o=n.split("#")[1]||n,r=decodeURIComponent(o),i=document.getElementById(r)||document.getElementsByName(r)[0];e!==i?function(n){var e=t(n);c("Moving to in page link (#"+o+") at x: "+e.x+" y: "+e.y),J(e.y,e.x,"scrollToOffset")}(i):(c("In page link (#"+o+") not found in iFrame, so sending to parent"),J(0,0,"inPageLink","#"+o))}function i(){""!==location.hash&&"#"!==location.hash&&r(location.href)}function a(){function n(n){function e(n){n.preventDefault(),r(this.getAttribute("href"))}"#"!==n.getAttribute("href")&&o(n,"click",e)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),n)}function l(){o(window,"hashchange",i)}function u(){setTimeout(i,tn)}return un.enable?function(){Array.prototype.forEach&&document.querySelectorAll?(c("Setting up location.hash handlers"),a(),l(),u()):s("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}():c("In page linking not enabled"),{findTarget:r}}function A(){c("Enable public methods"),An.parentIFrame={autoResize:function(n){return!0===n&&!1===$?($=!0,x()):!1===n&&!0===$&&($=!1,T()),$},close:function(){J(0,0,"close"),k()},getId:function(){return gn},getPageInfo:function(n){"function"==typeof n?(Nn=n,J(0,0,"pageInfo")):(Nn=function(){},J(0,0,"pageInfoStop"))},moveToAnchor:function(n){un.findTarget(n)},reset:function(){q("parentIFrame.reset")},scrollTo:function(n,e){J(e,n,"scrollTo")},scrollToOffset:function(n,e){J(e,n,"scrollToOffset")},sendMessage:function(n,e){J(0,0,"message",JSON.stringify(n),e)},setHeightCalculationMethod:function(n){cn=n,y()},setWidthCalculationMethod:function(n){_n=n,w()},setTargetOrigin:function(n){c("Set targetOrigin: "+n),xn=n},size:function(n,e){H("size","parentIFrame.size("+(n||"")+(e?","+e:"")+")",n,e)}}}function C(){0!==fn&&(c("setInterval: "+fn+"ms"),dn=setInterval(function(){H("interval","setInterval: "+fn)},Math.abs(fn)))}function I(){function n(n){function e(n){!1===n.complete&&(c("Attach listeners to "+n.src),n.addEventListener("load",i,!1),n.addEventListener("error",a,!1),l.push(n))}"attributes"===n.type&&"src"===n.attributeName?e(n.target):"childList"===n.type&&Array.prototype.forEach.call(n.target.querySelectorAll("img"),e)}function t(n){l.splice(l.indexOf(n),1)}function o(n){c("Remove listeners from "+n.src),n.removeEventListener("load",i,!1),n.removeEventListener("error",a,!1),t(n)}function r(n,t,r){o(n.target),H(t,r+": "+n.target.src,e,e)}function i(n){r(n,"imageLoad","Image loaded")}function a(n){r(n,"imageLoadFailed","Image load failed")}function s(e){H("mutationObserver","mutationObserver: "+e[0].target+" "+e[0].type),e.forEach(n)}var l=[],u=window.MutationObserver||window.WebKitMutationObserver,f=function(){var n=document.querySelector("body"),e={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return f=new u(s),c("Create body MutationObserver"),f.observe(n,e),f}();return{disconnect:function(){"disconnect"in f&&(c("Disconnect body MutationObserver"),f.disconnect(),l.forEach(o))}}}function N(){var n=0>fn;window.MutationObserver||window.WebKitMutationObserver?n?C():Y=I():(c("MutationObserver not supported in this browser!"),C())}function z(n,e){var t=0;return e=e||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(t=document.defaultView.getComputedStyle(e,null),t=null!==t?t[n]:0):t=function(n){if(/^\d+(px)?$/i.test(n))return parseInt(n,G);var t=e.style.left,o=e.runtimeStyle.left;return e.runtimeStyle.left=e.currentStyle.left,e.style.left=n||0,n=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=o,n}(e.currentStyle[n]),parseInt(t,G)}function L(n){n>Tn/2&&(Tn=2*n,c("Event throttle increased to "+Tn+"ms"))}function R(n,e){for(var t=e.length,o=0,r=0,a=i(n),s=Bn(),l=0;l<t;l++)(o=e[l].getBoundingClientRect()[n]+z("margin"+a,e[l]))>r&&(r=o);return s=Bn()-s,c("Parsed "+t+" HTML elements"),c("Element position calculated in "+s+"ms"),L(s),r}function U(n){return[n.bodyOffset(),n.bodyScroll(),n.documentElementOffset(),n.documentElementScroll()]}function j(n,e){var t=document.querySelectorAll("["+e+"]");return 0===t.length&&function(){s("No tagged elements ("+e+") found on page"),document.querySelectorAll("body *")}(),R(n,t)}function B(){return document.querySelectorAll("body *")}function F(n,t,o,r){function i(){return!(n in{init:1,interval:1,size:1})}function a(){return cn in vn||nn&&_n in vn}function s(){c("No change in size detected")}var l,u;!function(){function n(n,e){return!(Math.abs(n-e)<=Sn)}return l=e!==o?o:Fn[cn](),u=e!==r?r:Hn[_n](),n(rn,l)||nn&&n(kn,u)}()&&"init"!==n?function(){i()&&a()?q(t):n in{interval:1}||s()}():(P(),function(){rn=l,kn=u,J(rn,kn,n)}())}function H(n,e,t,o){!function(){return On&&n in en}()?(!function(){n in{reset:1,resetPage:1,init:1}||c("Trigger event: "+e)}(),"init"===n?F(n,e,t,o):Pn(n,e,t,o)):c("Trigger event cancelled: "+n)}function P(){On||(On=!0,c("Trigger event lock on")),clearTimeout(En),En=setTimeout(function(){On=!1,c("Trigger event lock off"),c("--")},tn)}function D(n){rn=Fn[cn](),kn=Hn[_n](),J(rn,kn,n)}function q(n){var e=cn;cn=an,c("Reset trigger event: "+n),P(),D("reset"),cn=e}function J(n,t,o,r,i){!0===yn&&(function(){e===i?i=xn:c("Message targetOrigin: "+i)}(),function(){var a=n+":"+t,s=gn+":"+a+":"+o+(e!==r?":"+r:"");c("Sending message to host page ("+s+")"),wn.postMessage(pn+s,i)}())}function V(e){function t(){return e.data.split("]")[1].split(":")[0]}function o(){return e.data.substr(e.data.indexOf(":")+1)}function r(){return!(void 0!==n&&n.exports)&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype}function i(){return e.data.split(":")[2]in{true:1,false:1}}function a(){var n=t();n in u?u[n]():r()||i()||s("Unexpected message ("+e.data+")")}var u={init:function(){ln=e.data,wn=e.source,l(),on=!1,setTimeout(function(){sn=!1},tn)},reset:function(){sn?c("Page reset ignored by init"):(c("Page size reset by host page"),D("resetPage"))},resize:function(){H("resizeParent","Parent window requested size check")},moveToAnchor:function(){un.findTarget(o())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var n=o();c("PageInfoFromParent called from parent: "+n),Nn(JSON.parse(n)),c(" --")},message:function(){var n=o();c("MessageCallback called from parent: "+n),Cn(JSON.parse(n)),c(" --")}};(function(){return pn===(""+e.data).substr(0,hn)})()&&function(){!1===on?a():i()?u.init():c('Ignored message of type "'+t()+'". Received before initialization.')}()}function W(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var $=!0,G=10,K="",X=0,Q="",Y=null,Z="",nn=!1,en={resize:1,click:1},tn=128,on=!0,rn=1,an="bodyOffset",cn=an,sn=!0,ln="",un={},fn=32,dn=null,mn=!1,pn="[iFrameSizer]",hn=pn.length,gn="",vn={max:1,min:1,bodyScroll:1,documentElementScroll:1},bn="child",yn=!0,wn=window.parent,xn="*",Sn=0,On=!1,En=null,Tn=16,kn=1,Mn="scroll",_n=Mn,An=window,Cn=function(){s("MessageCallback function not defined")},In=function(){},Nn=function(){},zn={height:function(){return s("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return s("Custom width calculation function not defined"),document.body.scrollWidth}},Ln={},Rn=!1,Un=!1;try{var jn=Object.create({},{passive:{get:function(){Rn=!0}},once:{get:function(){Un=!0}}});window.addEventListener("test",t,jn),window.removeEventListener("test",t,jn)}catch(n){}var Bn=Date.now||function(){return(new Date).getTime()},Fn={bodyOffset:function(){return document.body.offsetHeight+z("marginTop")+z("marginBottom")},offset:function(){return Fn.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return zn.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,U(Fn))},min:function(){return Math.min.apply(null,U(Fn))},grow:function(){return Fn.max()},lowestElement:function(){return Math.max(Fn.bodyOffset()||Fn.documentElementOffset(),R("bottom",B()))},taggedElement:function(){return j("bottom","data-iframe-height")}},Hn={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return zn.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Hn.bodyScroll(),Hn.documentElementScroll())},max:function(){return Math.max.apply(null,U(Hn))},min:function(){return Math.min.apply(null,U(Hn))},rightMostElement:function(){return R("right",B())},taggedElement:function(){return j("right","data-iframe-width")}},Pn=function(n){var e,t,o,r=null,i=0,a=function(){i=Bn(),r=null,o=n.apply(e,t),r||(e=t=null)};return function(){var c=Bn();i||(i=c);var s=Tn-(c-i);return e=this,t=arguments,s<=0||s>Tn?(r&&(clearTimeout(r),r=null),i=c,o=n.apply(e,t),r||(e=t=null)):r||(r=setTimeout(a,s)),o}}(F);o(window,"message",V),o(window,"readystatechange",W),W()}}()},797:function(n,e,t){var o=t(898);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;t(13)(o,r);o.locals&&(n.exports=o.locals)},798:function(n,e,t){"use strict";(function(e){/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
function t(n){var e,t,i,c,s,l,u=Object.create(null);if(this[d]=u,n)if("string"==typeof n)for("?"===n.charAt(0)&&(n=n.slice(1)),c=n.split("&"),s=0,l=c.length;s<l;s++)i=c[s],e=i.indexOf("="),-1<e?o(u,r(i.slice(0,e)),r(i.slice(e+1))):i.length&&o(u,r(i),"");else if(a(n))for(s=0,l=n.length;s<l;s++)i=n[s],o(u,i[0],i[1]);else for(t in n)o(u,t,n[t])}function o(n,e,t){e in n?n[e].push(""+t):n[e]=a(t)?t:[""+t]}function r(n){return decodeURIComponent(n.replace(l," "))}function i(n){return encodeURIComponent(n).replace(s,f)}var a=Array.isArray,c=t.prototype,s=/[!'\(\)~]|%20|%00/g,l=/\+/g,u={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},f=function(n){return u[n]},d="__URLSearchParams__:"+Math.random();c.append=function(n,e){o(this[d],n,e)},c.delete=function(n){delete this[d][n]},c.get=function(n){var e=this[d];return n in e?e[n][0]:null},c.getAll=function(n){var e=this[d];return n in e?e[n].slice(0):[]},c.has=function(n){return n in this[d]},c.set=function(n,e){this[d][n]=[""+e]},c.forEach=function(n,e){var t=this[d];Object.getOwnPropertyNames(t).forEach(function(o){t[o].forEach(function(t){n.call(e,t,o,this)},this)},this)},c.toJSON=function(){return{}},c.toString=function(){var n,e,t,o,r=this[d],a=[];for(e in r)for(t=i(e),n=0,o=r[e];n<o.length;n++)a.push(t+"="+i(o[n]));return a.join("&")},t=n.exports=e.URLSearchParams||t,function(n){var e=function(){try{return!!Symbol.iterator}catch(n){return!1}}();"forEach"in n||(n.forEach=function(n,e){var t=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(o){!o.length||o in t||(t[o]=this.getAll(o)).forEach(function(t){n.call(e,t,o,this)},this)},this)}),"keys"in n||(n.keys=function(){var n=[];this.forEach(function(e,t){n.push(t)});var t={next:function(){var e=n.shift();return{done:void 0===e,value:e}}};return e&&(t[Symbol.iterator]=function(){return t}),t}),"values"in n||(n.values=function(){var n=[];this.forEach(function(e){n.push(e)});var t={next:function(){var e=n.shift();return{done:void 0===e,value:e}}};return e&&(t[Symbol.iterator]=function(){return t}),t}),"entries"in n||(n.entries=function(){var n=[];this.forEach(function(e,t){n.push([t,e])});var t={next:function(){var e=n.shift();return{done:void 0===e,value:e}}};return e&&(t[Symbol.iterator]=function(){return t}),t}),!e||Symbol.iterator in n||(n[Symbol.iterator]=n.entries),"sort"in n||(n.sort=function(){for(var n,e,t,o=this.entries(),r=o.next(),i=r.done,a=[],c=Object.create(null);!i;)t=r.value,e=t[0],a.push(e),e in c||(c[e]=[]),c[e].push(t[1]),r=o.next(),i=r.done;for(a.sort(),n=0;n<a.length;n++)this.delete(a[n]);for(n=0;n<a.length;n++)e=a[n],this.append(e,c[e].shift())})}(t.prototype)}).call(e,t(60))},843:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(110),r=(t.n(o),t(790)),i=(t.n(r),t(10)),a=t.n(i),c=t(798),s=t.n(c),l=t(797),u=t.n(l),f=new s.a(location.search.slice(1));if(document.body.className=a()(u.a.body,function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}({},u.a.blockAnimations,f.has("block-animations"))),window.parent!==window)try{window.__REACT_DEVTOOLS_GLOBAL_HOOK__=window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__}catch(n){}},898:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(16),""),e.i(t(4),void 0),e.push([n.i,"body {\n  margin: 8px 32px 16px;\n  padding: 0;\n}\n\n.body_7cb {\n\n  color: #444;\n\n  color: var(--ring-text-color);\n\n  font-size: 13px;\n\n  font-size: var(--ring-font-size);\n\n  line-height: 20px;\n\n  line-height: var(--ring-line-height);\n}\n\n.blockAnimations_99b *,\n.blockAnimations_99b *::before,\n.blockAnimations_99b *::after {\n  transition: none !important;\n  animation: none !important;\n}\n",""]),e.locals={unit:""+t(4).locals.unit,body:"body_7cb "+t(4).locals.font,blockAnimations:"blockAnimations_99b"}}});