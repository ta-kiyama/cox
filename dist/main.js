module.exports=function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=0)}([function(r,e,n){"use strict";n.r(e);var t={raw:Symbol("raw"),cox:Symbol("cox"),call:Symbol("call"),new:Symbol("new"),chain:Symbol("chain")};var o=r=>{const{callback:e,args:n,thisArg:o,type:i,isAsync:c,isError:a}=r||{},s={isAsync:c,isError:a};switch(i){case t.cox:return[e(...n),s];case t.call:return[e.call(o,...n),s];case t.new:return[new e(...n),s];case t.chain:return[A.wrap(e)(o,...n),s];case t.raw:return[o,s];default:return[r,{}]}};var i=r=>e=>({value:r(e),writable:!0,configurable:!0});var c=i(r=>r=>{const[e,n]=o(r);if(n.isAsync)throw new TypeError("cox-generator cannot use `await`. please use cox-async-generator instead.");if(n.isError)throw e;return e})();const a=(()=>{var r=function(r){return function(){var e=r.apply(this,arguments);return new Promise(function(r,n){return function t(o,i){try{var c=e[o](i),a=c.value}catch(r){return void n(r)}if(!c.done)return Promise.resolve(a).then(function(r){t("next",r)},function(r){t("throw",r)});r(a)}("next")})}}(function*(r){r=r instanceof Promise?(yield r).value:r;const[e,n]=o(r);if(n.isError)throw e;return n.isAsync?yield e:e});return function(e){return r.apply(this,arguments)}})();var s=i(r=>a)();const u=c.value,l=s.value,f=r=>(function(){const e=r.apply(this,arguments);if("function"!=typeof e.next)throw new TypeError(`first argument which name is ${r.name} must be a generator function or async generator function.`);const n=e.next();if(n instanceof Promise)return function(r){return function(){var e=r.apply(this,arguments);return new Promise(function(r,n){return function t(o,i){try{var c=e[o](i),a=c.value}catch(r){return void n(r)}if(!c.done)return Promise.resolve(a).then(function(r){t("next",r)},function(r){t("throw",r)});r(a)}("next")})}}(function*(){let{value:r,done:t}=yield n;for(;!t;){const n=yield l(r),o=yield e.next(n);r=o.value,t=o.done}return r})();{let{value:r,done:t}=n;for(;!t;){const n=u(r),o=e.next(n);r=o.value,t=o.done}return r}});var y=i(r=>f)();var d=(r,e={},n)=>(...o)=>{Array.isArray(o[0])&&(o=o[0]);const i=n||o.shift(),c=(()=>{switch(r){case t.call:return o.shift();case t.chain:return o.shift()();case t.raw:return i;default:return}})();return{callback:r!==t.raw?i:void 0,args:o,thisArg:c,type:r,isAsync:!!e.isAsync,isError:!!e.isError}},w=i(r=>d(t.cox,r)),p=i(r=>d(t.call,r)),v=i(r=>d(t.new,r));const h=function*(r,...e){const n=!Array.isArray(e[e.length-1])&&e.pop();for(const[n,...t]of e){const e=n(r);r=yield A.call(e,r,...t)}return n&&(r=yield A(n,r)),r};var b=i(r=>d(t.chain,r,h)),m=i(r=>d(t.raw,r));n.d(e,"coxSymbols",function(){return t});const x=w().value;Object.defineProperties(x,{symbol:{value:t,enumerable:!0,writable:!0,configurable:!0},wrap:y,step:c,stepAsync:s,raw:m(),call:p(),new:v(),chain:b(),await:m({isAsync:!0}),throw:m({isError:!0})}),Object.defineProperties(x.await,{cox:w({isAsync:!0}),call:p({isAsync:!0}),new:v({isAsync:!0}),chain:b({isAsync:!0})}),Object.defineProperties(x.throw,{cox:w({isError:!0}),call:p({isError:!0}),new:v({isError:!0}),chain:b({isError:!0}),await:m({isError:!0,isAsync:!0})}),Object.defineProperties(x.throw.await,{cox:w({isError:!0,isAsync:!0}),call:p({isError:!0,isAsync:!0}),new:v({isError:!0,isAsync:!0}),chain:b({isError:!0,isAsync:!0})});var A=e.default=x}]);