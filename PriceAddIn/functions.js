!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=121)}({121:function(t,e){function n(t,e,n,r,o,u,a){try{var c=t[u](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,u){var a=t.apply(e,r);function c(t){n(a,o,u,c,s,"next",t)}function s(t){n(a,o,u,c,s,"throw",t)}c(void 0)}))}}function o(){return(o=r(regeneratorRuntime.mark((function t(){var e,n,r,o,u,a,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:0,n=c.length>1&&void 0!==c[1]?c[1]:0,t.prev=2,r="https://jsonplaceholder.typicode.com/users/2",t.next=6,fetch(r);case 6:if((o=t.sent).ok){t.next=9;break}throw new Error(o.statusText);case 9:return t.next=11,o.json();case 11:return u=t.sent,a=u.name.length,t.abrupt("return",e*n*a);case 16:return t.prev=16,t.t0=t.catch(2),t.abrupt("return",t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})))).apply(this,arguments)}function u(){return(u=r(regeneratorRuntime.mark((function t(){var e,n,r,o,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.length>0&&void 0!==u[0]?u[0]:0,u.length>1&&void 0!==u[1]?u[1]:0,t.prev=2,e="https://jsonplaceholder.typicode.com/users/2",t.next=6,fetch(e);case 6:if((n=t.sent).ok){t.next=9;break}throw new Error(n.statusText);case 9:return t.next=11,n.json();case 11:return r=t.sent,o=r.name.length,t.abrupt("return",o);case 16:return t.prev=16,t.t0=t.catch(2),t.abrupt("return",t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})))).apply(this,arguments)}window.sharedState="empty",CustomFunctions.associate("STOREVALUE",(function(t){return window.sharedState=t,"value stored"})),CustomFunctions.associate("GETVALUE",(function(){return window.sharedState})),CustomFunctions.associate("ADD",(function(t,e){return t+e})),CustomFunctions.associate("CLOCK",(function(t){var e=setInterval((function(){var e=(new Date).toLocaleTimeString();t.setResult(e)}),1e3);t.onCanceled=function(){clearInterval(e)}})),CustomFunctions.associate("INCREMENT",(function(t,e){var n=0,r=setInterval((function(){n+=t,e.setResult(n)}),1e3);e.onCanceled=function(){clearInterval(r)}})),CustomFunctions.associate("APICALCULATION",(function(){return o.apply(this,arguments)})),CustomFunctions.associate("APIFACTOR",(function(){return u.apply(this,arguments)})),CustomFunctions.associate("LOG",(function(t){return console.log(t),t}))}});
//# sourceMappingURL=functions.js.map