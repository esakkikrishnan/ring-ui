!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=1023)}({1023:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(53),o=t.n(r),l=t(562);o.a.module("test",[l.a]).run(["$rootScope","rgCompiler",function(e,n){var t=e.$new();t.testValue="Hello from compiled node",n({template:"<div>{{testValue}}</div>"}).then(function(e){e.link(t),document.getElementById("for-compiled").appendChild(e.element[0])})}])},2:function(e,n){e.exports=vendor_lib},53:function(e,n,t){e.exports=t(2)(394)},562:function(e,n,t){"use strict";var r=t(53),o=t.n(r),l=o.a.module("Ring.compiler",[]).factory("rgCompiler",["$q","$controller","$injector","$compile",function(e,n,t,r){return function(l){var i=l.template,c=l.controller,u=l.controllerAs,a=o.a.extend({},l.resolve),f=l.bindToController;return o.a.forEach(a,function(e,n){o.a.isString(e)?a[n]=t.get(e):a[n]=t.invoke(e)}),o.a.extend(a,l.locals),e.all(a).then(function(e){var t=l.element||o.a.element("<div>").html(i.trim()).contents(),a=r(t,e.$transclude);return e.$element=t,{locals:e,element:t,link:function(r){if(e.$scope=r,c){var l=n(c,e,!0);f&&o.a.extend(l.instance,e);var i=l();t.data("$ngControllerController",i),u&&(r[u]=i)}return a(r)}}})}}]);n.a=l.name}});