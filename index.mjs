// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-frexp@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ldexp@esm/index.mjs";var s=[0,0];function r(){var r,n,i;return r=.5,i=1,function(d){if(0===arguments.length)return void 0===n?null:n;e(s,d),i+=s[1],(r*=s[0])>-.5&&r<.5&&(e(s,r),r=s[0],i+=s[1]);return n=t(r,i)}}export{r as default};
//# sourceMappingURL=index.mjs.map
