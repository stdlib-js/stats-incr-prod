// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@esm/index.mjs";var r=e,s=t,n=[0,0];var i=function(){var e,t,i;return e=.5,i=1,function(a){if(0===arguments.length)return void 0===t?null:t;r(n,a),i+=n[1],(e*=n[0])>-.5&&e<.5&&(r(n,e),e=n[0],i+=n[1]);return t=s(e,i)}};export{i as default};
//# sourceMappingURL=index.mjs.map
