// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&a&&a.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===v}function b(r,t,n,e){return l(r)||p(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return b(r,[0,0],1,0)}),"assign",b);var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var A=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var m=s&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return A.call(r);n=r[w],a=w,t=null!=(o=r)&&_.call(o,a);try{r[w]=void 0}catch(t){return A.call(r)}return e=A.call(r),t?r[w]=n:delete r[w],e}:function(r){return A.call(r)},d="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var g,h="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(d&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=g,I="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null;var S,E="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O([1,3.14,-3.14,NaN]),n=t,r=(I&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,N="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,256,257]),n=t,r=(N&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var W,k="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,Y={uint16:W,uint8:P};(x=new Y.uint16(1))[0]=4660;var C=52===new Y.uint8(x.buffer)[0],M=!0===C?1:0,q=new F(1),z=new j(q.buffer);function B(r){return q[0]=r,z[M]}var D,J;function K(r){var t=B(r);return(t=(2146435072&t)>>>20)-1023|0}!0===C?(D=1,J=0):(D=0,J=1);var Q,R,X={HIGH:D,LOW:J},Z=new F(1),$=new j(Z.buffer),rr=X.HIGH,tr=X.LOW;function nr(r,t,n,e){return Z[0]=r,t[e]=$[rr],t[e+n]=$[tr],t}function er(r){return nr(r,[0,0],1,0)}c(er,"assign",nr),!0===C?(Q=1,R=0):(Q=0,R=1);var or={HIGH:Q,LOW:R},ar=new F(1),ir=new j(ar.buffer),ur=or.HIGH,fr=or.LOW;function cr(r,t){return ir[ur]=r,ir[fr]=t,ar[0]}var lr=[0,0],yr=[0,0];function vr(r,t,n,e){var o,a;return 0===r||l(r)||p(r)?(t[e]=r,t[e+n]=0,t):(b(r,lr,1,0),a=K(lr[0])+lr[1]+1,er.assign(lr[0],yr,1,0),o=yr[0],o&=2148532223,r=cr(o|=1071644672,yr[1]),t[e]=r,t[e+n]=a,t)}c((function(r){return vr(r,[0,0],1,0)}),"assign",vr);var pr=[0,0];var br=[0,0],sr=[0,0];function Ar(r,t){var n,e,o,a,i,u;return 0===t||0===r||l(r)||p(r)?r:(b(r,br,1,0),t+=br[1],(t+=K(r=br[0]))<-1074?(o=0,a=r,er.assign(o,pr,1,0),i=pr[0],i&=2147483647,u=B(a),cr(i|=u&=2147483648,pr[1])):t>1023?r<0?v:y:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,er.assign(r,sr,1,0),n=sr[0],n&=2148532223,e*cr(n|=t+1023<<20,sr[1])))}var _r=[0,0];function wr(){var r,t,n;return r=.5,n=1,function(e){if(0===arguments.length)return void 0===t?null:t;vr(e,_r,1,0),n+=_r[1],(r*=_r[0])>-.5&&r<.5&&(vr(r,_r,1,0),r=_r[0],n+=_r[1]);return t=Ar(r,n)}}export{wr as default};
//# sourceMappingURL=mod.js.map