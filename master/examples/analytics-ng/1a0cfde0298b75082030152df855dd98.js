!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1145)}({10:function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},1005:function(n,e,t){n.exports=t(2)(342)},1009:function(n,e,t){"use strict";var r=t(19),o=(t.n(r),t(53)),i=t.n(o),a=t(976),c=t(1051),s=t(977),l=i.a.module("Ring.analytics",[]);l.provider("analytics",function(){var n=[];this.plugins=function(e){n=e},this.$get=["$log","$injector",function(e,t){for(var r=[],o=0;o<n.length;++o)if("string"==typeof n[o])try{var i=t.get(n[o]);r.push(i),e.debug("analytics: loaded plugin ".concat(n[o]))}catch(t){e.debug("analytics: unable to load factory ".concat(n[o]))}else r.push(n[o]);return a.a.config(r),a.a}]}),l.constant("AnalyticsGAPlugin",c.a),l.constant("AnalyticsCustomPlugin",s.a),l.run(["$rootScope","analytics",function(n,e){n.$on("$routeChangeSuccess",function(n,t){t&&t.$$route&&t.$$route.originalPath&&e.trackPageView(t.$$route.originalPath)})}]),l.directive("rgAnalytics",["analytics",function(n){return{restrict:"A",replace:!1,link:function(e,t){var r=t.attr("rg-analytics-on")||"click";i.a.element(t).bind(r,function(){n.track(t.attr("rg-analytics"))})}}}]),e.a=l.name},1051:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}t.d(e,"a",function(){return a});var a=function(){function n(e,t){if(r(this,n),e||t){!function(n,e,t,r,o,i,a){n.GoogleAnalyticsObject=o,n[o]=n[o]||function(){(n[o].q=n[o].q||[]).push(arguments)},n[o].l=1*new Date,i=e.createElement(t),a=e.getElementsByTagName(t)[0],i.async=1,i.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(i,a)}(window,document,"script",0,"ga");var o=e||"UA-57284711-1";ga("create",o,e?{}:{cookieDomain:"none"})}}return i(n,[{key:"trackEvent",value:function(n,e){if(window.ga){var t={eventCategory:n,eventAction:e};ga("send","event",t)}}},{key:"trackPageView",value:function(n){window.ga&&ga("send","pageview",n)}}]),n}()},1145:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(53),o=t.n(r),i=t(1009),a=t(649);o.a.module("Example.analyticsDemo",[i.a,a.a]).config(["analyticsProvider","AnalyticsCustomPlugin","AnalyticsGAPlugin",function(n,e,t){var r=new e(function(n){console.log("Here you can send data to server",n)},!0,600);n.plugins([r])}]).controller("TrackEventDemoCtrl",["analytics",function(n){n.trackEvent("track-event-demo","show")}])},14:function(n,e,t){e=n.exports=t(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],l=i[3],u={css:c,media:s,sourceMap:l};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function i(n,e){var t=m(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=k[k.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),k.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(n.insertAt.before,t);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=k.indexOf(n);e>=0&&k.splice(e,1)}function c(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return l(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=w++;t=y||(y=c(e)),r=d.bind(null,t,l,!1),o=d.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),r=p.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),r=g.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function d(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function g(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=_(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),b=function(n,e){return e?e.querySelector(n):document.querySelector(n)},m=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=b.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),y=null,w=0,k=[],_=t(64);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],s=h[c.id];s.refs--,i.push(s)}n&&r(o(n,e),e);for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete h[s.id]}}}};var x=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(328)},2:function(n,e){n.exports=vendor_lib},225:function(n,e,t){e=n.exports=t(10)(!1),e.i(t(14),""),e.push([n.i,".link_46b {\n  cursor: pointer;\n  transition: color 0.15s ease-out;\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);\n}\n\n.link_46b,\n  .link_46b:hover {\n  text-decoration: none;\n}\n\n.link_46b:hover,\n  .link_46b.hover_723 {\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);\n}\n\n.link_46b:hover .inner_e7d {\n  border-width: 0;\n  border-bottom: 2px solid;\n  border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n  border-image-slice: 0 0 100% 0;\n}\n\n.link_46b.active_8b4 {\n  color: inherit;\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover {\n  text-decoration: underline;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n  border: none;\n}\n\n.link_46b.pseudo_b5d:hover {\n  text-decoration: none;\n  /* stylelint-disable-next-line selector-max-specificity */\n}\n\n.link_46b.pseudo_b5d:hover .inner_e7d {\n  border: none;\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n  .link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }\n}\n\n.inherit_bc0:not(:hover) {\n  color: inherit;\n}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n",""]),e.locals={link:"link_46b",hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},230:function(n,e,t){n.exports=t(2)(412)},264:function(n,e,t){var r=t(225);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0,t(15)(r,o),r.locals&&(n.exports=r.locals)},27:function(n,e,t){n.exports=t(2)(396)},28:function(n,e,t){n.exports=t(2)(394)},45:function(n,e,t){"use strict";var r=t(77),o=t.n(r),i=new o.a;i.sniff(),e.a=i},53:function(n,e,t){n.exports=t(2)(243)},6:function(n,e,t){n.exports=t(2)(443)},64:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},649:function(n,e,t){"use strict";function r(){return{restrict:"E",transclude:!0,replace:!0,template:'\n<a class="'.concat(l.a.link," ").concat(l.a.compatibilityUnderlineMode,'"\n><span class="').concat(l.a.inner,'" ng-transclude></span></a>\n    ')}}var o=t(19),i=(t.n(o),t(230)),a=(t.n(i),t(53)),c=t.n(a),s=t(264),l=t.n(s),u=c.a.module("Ring.link",[]);u.directive("rgLink",r),e.a=u.name},77:function(n,e,t){n.exports=t(2)(250)},976:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}var a=t(28),c=(t.n(a),t(27)),s=(t.n(c),t(6)),l=(t.n(s),function(){function n(){r(this,n),this._plugins=[]}return i(n,[{key:"config",value:function(n){this._plugins=n}},{key:"track",value:function(n,e){if(n){var t=n.indexOf(":");t<0&&(t=n.indexOf("_")),t<0&&(t=n.length);var r=n.substr(0,t),o=n.substr(t+1);this.trackEvent(r,o,e)}}},{key:"trackPageView",value:function(n){this._plugins.forEach(function(e){e.trackPageView(n)})}},{key:"trackEvent",value:function(n,e,t){var r=t?e+this._buildSuffix(t):null;this._plugins.forEach(function(t){t.trackEvent(n,e),r&&t.trackEvent(n,r)})}},{key:"trackShortcutEvent",value:function(n,e,t){this.trackEvent(n,e,t),this.trackEvent("ring-shortcut","".concat(n,"$").concat(e),t)}},{key:"trackEntityProperties",value:function(n,e,t,r){for(var o=0;o<t.length;++o){var i=t[o].split("."),a=e;if(i.length){for(var c=0;c<i.length;++c){if(!a.hasOwnProperty(i[c])){a="no-value";break}a=a[i[c]]}"string"==typeof a&&(a=a.toLowerCase().replace(/[._]+/g,"-"));var s="".concat(i.join("-"),"__").concat(a);this.trackEvent(n,s,r)}}}},{key:"_buildSuffix",value:function(n){if(!n)return"";var e,t="";for(e in n)n.hasOwnProperty(e)&&(t+="__".concat(e,"$").concat(n[e]));return t}}]),n}());e.a=new l},977:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}t.d(e,"a",function(){return c});var a=t(988),c=function(){function n(e,t,o,i){r(this,n),this._data=[],this.config({send:e,isDevelopment:t,flushInterval:o,flushingAllowedChecker:i})}return i(n,[{key:"config",value:function(n){var e=this,t=n.flushingAllowedChecker;"function"!=typeof t&&(t=function(){return!0}),this._flush=function(){e._data.length>0&&t()&&(n.send(e._data),e._data=[])},this._isDevelopment=n.isDevelopment,this._flushInterval=n.flushInterval||1e4,this._flushMaxPackSize=n.flushMaxPackSize||100}},{key:"trackEvent",value:function(n,e){this._processEvent(n,e)}},{key:"trackPageView",value:function(n){this._lastPagePath!==n&&(this._trackPageViewAdditionalInfo(n),this._processEvent("ring-page",n),this._processEvent("ring-navigator_user-agent",a.a.getUserAgentPresentation()),this._processEvent("ring-navigator_platform",a.a.npeSaveLowerCase(navigator.platform)),this._processEvent("ring-navigator_lang",a.a.npeSaveLowerCase(navigator.language)),this._processEvent("ring-device-pixel-ratio",a.a.getDevicePixelRatioPresentation()),this._processEvent("ring-screen-width",a.a.getScreenWidthPresentation()))}},{key:"_initSendSchedule",value:function(){var n=this;window.addEventListener("beforeunload",function(){return n._trackPageViewAdditionalInfo(),n._flush()}),setInterval(this._flush,this._flushInterval),this._hasSendSchedule=!0}},{key:"_processEvent",value:function(n,e){!this._hasSendSchedule&&this._flush&&this._initSendSchedule();var t=a.a.reformatString(n,!0),r=a.a.reformatString(e);this._isDevelopment&&console.log("TRACKING DATA = ",t,r),this._addDataToFlushingPack({category:t,action:r})}},{key:"_trackPageViewAdditionalInfo",value:function(n){var e=(new Date).getTime();if(this._lastPagePath&&this._lastPageViewTime){var t=a.a.getPageViewDurationPresentation(e-this._lastPageViewTime);this._processEvent("ring-pageview-duration_".concat(this._lastPagePath),t)}this._lastPageViewTime=e,this._lastPagePath=n}},{key:"_addDataToFlushingPack",value:function(n){this._data.push(n),this._data.length>=this._flushMaxPackSize&&this._flush()}}]),n}()},988:function(n,e,t){"use strict";var r=t(19),o=(t.n(r),t(1005)),i=(t.n(o),t(28)),a=(t.n(i),t(45)),c={};c.reformatString=function(n,e){var t=String(n),r=e?/[.:;!@#^&*(){}\[\]?,%=+\\\/]+/g:/[.:;!@#^&*(){}\[\]?,%=+\\]+/g;return t.replace(r,"_")},c.getPageViewDurationPresentation=function(n){var e=n/1e3;if(e>3600)return"more-than-hour";var t=Math.floor(Math.pow(2,Math.floor(Math.log2(e))+1));return t=t>0?t:1,"less-than-".concat(t,"-sec")},c.getScreenWidthPresentation=function(){for(var n=[0,768,992,1200],e=1;e<n.length;++e)if(window.innerWidth<n[e])return"[".concat(n[e-1],"px;").concat(n[e],"px)");return"[1200px;inf)"},c.npeSaveLowerCase=function(n){return(n||"unknown").toLowerCase()},c.getUserAgentPresentation=function(){var n=c.npeSaveLowerCase(a.a.browser.name||"unknown"),e=a.a.browser.version[0],t=e||"unknown";return"".concat(n,"$").concat(t)},c.getDevicePixelRatioPresentation=function(){return window.devicePixelRatio&&window.devicePixelRatio.toFixed?String(window.devicePixelRatio.toFixed(1)):"unknown"},e.a=c}});