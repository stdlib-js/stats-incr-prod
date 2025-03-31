// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,s,l,p,g,y,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+m(d):m(d)+p)),u+=n.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j=Object.prototype,T=j.toString,O=j.__defineGetter__,V=j.__defineSetter__,$=j.__lookupGetter__,G=j.__lookupSetter__;var N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function H(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}var R=22250738585072014e-324;var Z=4503599627370496;function M(r,e,t,n){return W(r)||P(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<R?(e[n]=r*Z,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return M(r,[0,0],1,0)}),"assign",M);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[B],a=B,e=null!=(i=r)&&z.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[B]=t:delete r[B],n}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var ir,ar="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),t=e,r=(tr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,cr="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null;var fr,sr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),t=e,r=(cr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=fr,pr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var yr,dr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var vr,hr={uint16:yr,uint8:lr};(vr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(vr.buffer)[0],br=!0===wr?1:0,mr=new or(1),Ar=new er(mr.buffer);function _r(r){return mr[0]=r,Ar[br]}var Er,Ur,Sr=2146435072,Ir=1023;function kr(r){var e=_r(r);return(e=(e&Sr)>>>20)-Ir|0}!0===wr?(Er=1,Ur=0):(Er=0,Ur=1);var xr,Fr,jr={HIGH:Er,LOW:Ur},Tr=new or(1),Or=new er(Tr.buffer),Vr=jr.HIGH,$r=jr.LOW;function Gr(r,e,t,n){return Tr[0]=r,e[n]=Or[Vr],e[n+t]=Or[$r],e}function Nr(r){return Gr(r,[0,0],1,0)}H(Nr,"assign",Gr),!0===wr?(xr=1,Fr=0):(xr=0,Fr=1);var Hr={HIGH:xr,LOW:Fr},Wr=new or(1),Cr=new er(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Rr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Zr=2148532223,Mr=1071644672,Xr=[0,0],Yr=[0,0];function zr(r,e,t,n){var i,a;return 0===r||W(r)||P(r)?(e[n]=r,e[n+t]=0,e):(M(r,Xr,1,0),a=kr(Xr[0])+Xr[1]+1,Nr.assign(Xr[0],Yr,1,0),i=Yr[0],i&=Zr,r=Rr(i|=Mr,Yr[1]),e[n]=r,e[n+t]=a,e)}H((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var qr=1023,Br=-1023,Dr=-1074,Jr=2147483648,Kr=2147483647,Qr=[0,0];var re=2220446049250313e-31,ee=2148532223,te=[0,0],ne=[0,0];function ie(r,e){var t,n,i,a,o,c;return 0===e||0===r||W(r)||P(r)?r:(M(r,te,1,0),r=te[0],e+=te[1],(e+=kr(r))<Dr?(i=0,a=r,Nr.assign(i,Qr,1,0),o=Qr[0],o&=Kr,c=_r(a),Rr(o|=c&=Jr,Qr[1])):e>qr?r<0?L:C:(e<=Br?(e+=52,n=re):n=1,Nr.assign(r,ne,1,0),t=ne[0],t&=ee,n*Rr(t|=e+Ir<<20,ne[1])))}var ae=[0,0];function oe(){var r,e,t;return r=.5,t=1,function(n){if(0===arguments.length)return void 0===e?null:e;zr(n,ae,1,0),t+=ae[1],(r*=ae[0])>-.5&&r<.5&&(zr(r,ae,1,0),r=ae[0],t+=ae[1]);return e=ie(r,t)}}export{oe as default};
//# sourceMappingURL=mod.js.map
