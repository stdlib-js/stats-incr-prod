"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=o(function(x,i){
var a=require('@stdlib/math-base-special-frexp/dist').assign,v=require('@stdlib/math-base-special-ldexp/dist'),u=[0,0];function p(){var e,r,t;return e=.5,t=1,s;function s(c){return arguments.length===0?r===void 0?null:r:(a(c,u,1,0),e*=u[0],t+=u[1],e>-.5&&e<.5&&(a(e,u,1,0),e=u[0],t+=u[1]),r=v(e,t),r)}}i.exports=p
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
