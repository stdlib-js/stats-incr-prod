// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function o(n){return n===t||n===r}function e(t,r){return n(r)||o(r)?(t[0]=r,t[1]=0,t):0!==r&&function(n){return Math.abs(n)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}function i(n,t){return 1===arguments.length?e([0,0],n):e(n,t)}var u,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,c=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"",l=f&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,e,i;if(null==n)return a.call(n);r=n[y],i=y,t=null!=(e=n)&&c.call(e,i);try{n[y]=void 0}catch(t){return a.call(n)}return o=a.call(n),t?n[y]=r:delete n[y],o}:function(n){return a.call(n)},p="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(p&&r instanceof Uint32Array||"[object Uint32Array]"===l(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var b,d=u,w="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,m="function"==typeof Float64Array?Float64Array:void 0;b=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,NaN]),r=t,n=(w&&r instanceof Float64Array||"[object Float64Array]"===l(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?m:function(){throw new Error("not implemented")};var h,s=b,I="function"==typeof Uint8Array,g="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var n,t,r;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,256,257]),r=t,n=(I&&r instanceof Uint8Array||"[object Uint8Array]"===l(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?F:function(){throw new Error("not implemented")};var N,S=h,H="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,T="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var n,t,r;if("function"!=typeof O)return!1;try{t=new O(t=[1,3.14,-3.14,65536,65537]),r=t,n=(H&&r instanceof Uint16Array||"[object Uint16Array]"===l(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?T:function(){throw new Error("not implemented")};var j,E={uint16:N,uint8:S};(j=new E.uint16(1))[0]=4660;var G,L,W=52===new E.uint8(j.buffer)[0],x=!0===W?1:0,P=new s(1),V=new d(P.buffer);function Y(n){return P[0]=n,V[x]}function _(n){var t=Y(n);return(t=(2146435072&t)>>>20)-1023|0}!0===W?(G=1,L=0):(G=0,L=1);var M,k,q={HIGH:G,LOW:L},z=new s(1),B=new d(z.buffer),C=q.HIGH,D=q.LOW;function J(n,t){return z[0]=t,n[0]=B[C],n[1]=B[D],n}function K(n,t){return 1===arguments.length?J([0,0],n):J(n,t)}!0===W?(M=1,k=0):(M=0,k=1);var Q={HIGH:M,LOW:k},R=new s(1),X=new d(R.buffer),Z=Q.HIGH,$=Q.LOW;function nn(n,t){return X[Z]=n,X[$]=t,R[0]}var tn=[0,0],rn=[0,0];function on(t,r){var e,u;return 0===r||n(r)||o(r)?(t[0]=r,t[1]=0,t):(i(tn,r),u=_(tn[0])+tn[1]+1,K(rn,tn[0]),e=rn[0],e&=2148532223,r=nn(e|=1071644672,rn[1]),t[0]=r,t[1]=u,t)}function en(n,t){return 1===arguments.length?on([0,0],n):on(n,t)}var un=[0,0],fn=[0,0],an=[0,0];function cn(e,u){var f,a,c,y,l;return 0===u||0===e||n(e)||o(e)?e:(i(fn,e),u+=fn[1],(u+=_(e=fn[0]))<-1074?(c=e,K(un,0),y=un[0],y&=2147483647,l=Y(c),nn(y|=l&=2147483648,un[1])):u>1023?e<0?r:t:(u<=-1023?(u+=52,a=2220446049250313e-31):a=1,K(an,e),f=an[0],f&=2148532223,a*nn(f|=u+1023<<20,an[1])))}var yn=[0,0];return function(){var n,t,r;return n=.5,r=1,function(o){return 0===arguments.length?void 0===t?null:t:(en(yn,o),r+=yn[1],(n*=yn[0])>-.5&&n<.5&&(en(yn,n),n=yn[0],r+=yn[1]),t=cn(n,r))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).incrprod=t();
//# sourceMappingURL=index.js.map
