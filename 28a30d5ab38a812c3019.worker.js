!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=29)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(20)("wks"),o=r(21),u=r(0).Symbol,i="function"==typeof u;(t.exports=function(t){return e[t]||(e[t]=i&&u[t]||(i?u:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(13),o=r(25);t.exports=r(6)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(14);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n){function r(t){return!!t&&"object"==typeof t}function e(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=g}function o(t){return u(t)&&l.call(t)==c}function u(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function i(t){return null!=t&&(o(t)?v.test(s.call(t)):r(t)&&f.test(t))}var c="[object Function]",f=/^\[object .+?Constructor\]$/,a=Object.prototype,s=Function.prototype.toString,p=a.hasOwnProperty,l=a.toString,v=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=function(t,n){var r=null==t?void 0:t[n];return i(r)?r:void 0}(Array,"isArray"),g=9007199254740991,h=y||function(t){return r(t)&&e(t.length)&&"[object Array]"==l.call(t)};t.exports=h},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(34),o=r(9);t.exports=function(t){return e(o(t))}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(20)("keys"),o=r(21);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(5),o=r(41),u=r(42),i=Object.defineProperty;n.f=r(6)?Object.defineProperty:function(t,n,r){if(e(t),n=u(n,!0),e(r),o)try{return i(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){function e(t){return null!=t&&u(b(t))}function o(t,n){return t="number"==typeof t||l.test(t)?+t:-1,n=null==n?h:n,t>-1&&t%1==0&&t<n}function u(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=h}function i(t){for(var n=f(t),r=n.length,e=r&&t.length,i=!!e&&u(e)&&(p(t)||s(t)),c=-1,a=[];++c<r;){var l=n[c];(i&&o(l,e)||y.call(t,l))&&a.push(l)}return a}function c(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function f(t){if(null==t)return[];c(t)||(t=Object(t));var n=t.length;n=n&&u(n)&&(p(t)||s(t))&&n||0;for(var r=t.constructor,e=-1,i="function"==typeof r&&r.prototype===t,f=Array(n),a=n>0;++e<n;)f[e]=e+"";for(var l in t)a&&o(l,n)||"constructor"==l&&(i||!y.call(t,l))||f.push(l);return f}var a=r(68),s=r(69),p=r(8),l=/^\d+$/,v=Object.prototype,y=v.hasOwnProperty,g=a(Object,"keys"),h=9007199254740991,b=function(t){return function(n){return null==n?void 0:n[t]}}("length"),d=g?function(t){var n=null==t?void 0:t.constructor;return"function"==typeof n&&n.prototype===t||"function"!=typeof t&&e(t)?i(t):c(t)?g(t):[]}:i;t.exports=d},function(t,n,r){var e=r(9);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(33),o=r(22);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(0),o=r(2),u=r(39),i=r(3),c=function(t,n,r){var f,a,s,p=t&c.F,l=t&c.G,v=t&c.S,y=t&c.P,g=t&c.B,h=t&c.W,b=l?o:o[n]||(o[n]={}),d=b.prototype,m=l?e:v?e[n]:(e[n]||{}).prototype;l&&(r=n);for(f in r)(a=!p&&m&&void 0!==m[f])&&f in b||(s=a?m[f]:r[f],b[f]=l&&"function"!=typeof m[f]?r[f]:g&&a?u(s,e):h&&m[f]==s?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):y&&"function"==typeof s?u(Function.call,s):s,y&&((b.virtual||(b.virtual={}))[f]=s,t&c.R&&d&&!d[f]&&i(d,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,r){var e=r(14),o=r(0).document,u=e(o)&&e(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){"use strict";var e=r(49),o=r(23),u=r(50),i=r(3),c=r(4),f=r(7),a=r(51),s=r(27),p=r(55),l=r(1)("iterator"),v=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,r,g,h,b,d){a(r,n,g);var m,x,j,O=function(t){if(!v&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=n+" Iterator",S="values"==h,_=!1,A=t.prototype,M=A[l]||A["@@iterator"]||h&&A[h],E=M||O(h),L=h?S?O("entries"):E:void 0,P="Array"==n?A.entries||M:M;if(P&&(j=p(P.call(new t)))!==Object.prototype&&j.next&&(s(j,w,!0),e||c(j,l)||i(j,l,y)),S&&M&&"values"!==M.name&&(_=!0,E=function(){return M.call(this)}),e&&!d||!v&&!_&&A[l]||i(A,l,E),f[n]=E,f[w]=y,h)if(m={values:S?E:O("values"),keys:b?E:O("keys"),entries:L},d)for(x in m)x in A||u(A,x,m[x]);else o(o.P+o.F*(v||_),n,m);return m}},function(t,n,r){var e=r(13).f,o=r(4),u=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,u)&&e(t,u,{configurable:!0,value:n})}},function(t,n,r){t.exports={"23andMe":r(74),Ancestry:r(75),FamilyTree:r(76),GenesforGood:r(77)}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(30),o=r.n(e),u=r(43),i=r.n(u),c=r(61),f=r.n(c);self.addEventListener("message",function(t){f.a.parse(t.data.raw,function(n,r){if(n)return postMessage({state:"error",error:n});var e=!0,u=!1,c=void 0;try{for(var f,a=i()(o()(r));!(e=(f=a.next()).done);e=!0){var s=f.value,p=r[s].genotype;1===p.length&&(r[s].genotype=""+p+p)}}catch(n){u=!0,c=n}finally{try{!e&&a.return&&a.return()}finally{if(u)throw c}}return postMessage({state:"done",name:t.data.name,snps:r})})})},function(t,n,r){t.exports={default:r(31),__esModule:!0}},function(t,n,r){r(32),t.exports=r(2).Object.keys},function(t,n,r){var e=r(17),o=r(18);r(38)("keys",function(){return function(t){return o(e(t))}})},function(t,n,r){var e=r(4),o=r(10),u=r(35)(!1),i=r(12)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=i&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(10),o=r(36),u=r(37);t.exports=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(11),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(11),o=Math.max,u=Math.min;t.exports=function(t,n){return t=e(t),t<0?o(t+n,0):u(t,n)}},function(t,n,r){var e=r(23),o=r(2),u=r(15);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],i={};i[t]=n(r),e(e.S+e.F*u(function(){r(1)}),"Object",i)}},function(t,n,r){var e=r(40);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){t.exports=!r(6)&&!r(15)(function(){return 7!=Object.defineProperty(r(24)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(14);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){t.exports={default:r(44),__esModule:!0}},function(t,n,r){r(45),r(56),t.exports=r(58)},function(t,n,r){r(46);for(var e=r(0),o=r(3),u=r(7),i=r(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=e[a],p=s&&s.prototype;p&&!p[i]&&o(p,i,a),u[a]=u.Array}},function(t,n,r){"use strict";var e=r(47),o=r(48),u=r(7),i=r(10);t.exports=r(26)(Array,"Array",function(t,n){this._t=i(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,r):"values"==n?o(0,t[r]):o(0,[r,t[r]])},"values"),u.Arguments=u.Array,e("keys"),e("values"),e("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=!0},function(t,n,r){t.exports=r(3)},function(t,n,r){"use strict";var e=r(52),o=r(25),u=r(27),i={};r(3)(i,r(1)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(i,{next:o(1,r)}),u(t,n+" Iterator")}},function(t,n,r){var e=r(5),o=r(53),u=r(22),i=r(12)("IE_PROTO"),c=function(){},f=function(){var t,n=r(24)("iframe"),e=u.length;for(n.style.display="none",r(54).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[u[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[i]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(13),o=r(5),u=r(18);t.exports=r(6)?Object.defineProperties:function(t,n){o(t);for(var r,i=u(n),c=i.length,f=0;c>f;)e.f(t,r=i[f++],n[r]);return t}},function(t,n,r){var e=r(0).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(4),o=r(17),u=r(12)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,n,r){"use strict";var e=r(57)(!0);r(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){var e=r(11),o=r(9);t.exports=function(t){return function(n,r){var u,i,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(u=c.charCodeAt(f),u<55296||u>56319||f+1===a||(i=c.charCodeAt(f+1))<56320||i>57343?t?c.charAt(f):u:t?c.slice(f,f+2):i-56320+(u-55296<<10)+65536)}}},function(t,n,r){var e=r(5),o=r(59);t.exports=r(2).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},function(t,n,r){var e=r(60),o=r(1)("iterator"),u=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||u[e(t)]}},function(t,n,r){var e=r(19),o=r(1)("toStringTag"),u="Arguments"==e(function(){return arguments}()),i=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=i(n=Object(t),o))?r:u?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,r){t.exports={parse:r(62),providers:r(28)}},function(t,n,r){var e=r(63),o=r(64),u=r(28);t.exports=function(t,n){function r(t){return u[t].matches(c)}function i(t,n,r){if("#"===n[0])return t;var e=a.parseLine(n);return e?(t[e.id]=e,delete e.id,t):t}if("string"!=typeof t)throw new Error("DNA must be a string");var c=t.trim().split(/\r?\n/),f=e(Object.keys(u),r);if(!f)return n(new Error("DNA file is not supported"));var a=u[f];n(null,o(c,i,{}))}},function(t,n){function r(t){return t}function e(t,n,e){for(var n=n||r,e=e||t,o=0,u=t.length;o<u;o+=1)if(n.call(e,t[o],o))return t[o]}t.exports=e},function(t,n,r){function e(t,n,r,e){var o=-1,u=t.length;for(e&&u&&(r=t[++o]);++o<u;)r=n(r,t[o],o,t);return r}var o=r(65),u=r(72),i=r(73),c=r(8),f=function(t,n){return function(r,e,u,f){var a=arguments.length<3;return"function"==typeof e&&void 0===f&&c(r)?t(r,e,u,a):i(r,o(e,f,4),u,a,n)}}(e,u);t.exports=f},function(t,n,r){function e(t){return null==t?"":t+""}function o(t,n,r){var e=typeof t;return"function"==e?void 0===n?t:O(t,n,r):null==t?m:"object"==e?c(t):void 0===n?x(t):f(t,n)}function u(t,n,r){if(null!=t){void 0!==r&&r in g(t)&&(n=[r]);for(var e=0,o=n.length;null!=t&&e<o;)t=t[n[e++]];return e&&e==o?t:void 0}}function i(t,n,r){var e=n.length,o=e,u=!r;if(null==t)return!o;for(t=g(t);e--;){var i=n[e];if(u&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++e<o;){i=n[e];var c=i[0],f=t[c],a=i[1];if(u&&i[2]){if(void 0===f&&!(c in t))return!1}else{var s=r?r(f,a,c):void 0;if(!(void 0===s?j(a,f,r,!0):s))return!1}}return!0}function c(t){var n=l(t);if(1==n.length&&n[0][2]){var r=n[0][0],e=n[0][1];return function(t){return null!=t&&(t[r]===e&&(void 0!==e||r in g(t)))}}return function(t){return i(t,n)}}function f(t,n){var r=w(t),e=v(t)&&y(n),o=t+"";return t=h(t),function(i){if(null==i)return!1;var c=o;if(i=g(i),(r||!e)&&!(c in i)){if(null==(i=1==t.length?i:u(i,p(t,0,-1))))return!1;c=b(t),i=g(i)}return i[c]===n?void 0!==n||c in i:j(n,i[c],void 0,!0)}}function a(t){return function(n){return null==n?void 0:n[t]}}function s(t){var n=t+"";return t=h(t),function(r){return u(r,t,n)}}function p(t,n,r){var e=-1,o=t.length;n=null==n?0:+n||0,n<0&&(n=-n>o?0:o+n),r=void 0===r||r>o?o:+r||0,r<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}function l(t){for(var n=S(t),r=n.length;r--;)n[r][2]=y(n[r][1]);return n}function v(t,n){var r=typeof t;return!!("string"==r&&A.test(t)||"number"==r)||!w(t)&&(!_.test(t)||null!=n&&t in g(n))}function y(t){return t===t&&!d(t)}function g(t){return d(t)?t:Object(t)}function h(t){if(w(t))return t;var n=[];return e(t).replace(M,function(t,r,e,o){n.push(e?o.replace(E,"$1"):r||t)}),n}function b(t){var n=t?t.length:0;return n?t[n-1]:void 0}function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){return t}function x(t){return v(t)?a(t):s(t)}var j=r(66),O=r(70),w=r(8),S=r(71),_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,A=/^\w*$/,M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,E=/\\(\\)?/g;t.exports=o},function(t,n,r){function e(t){return!!t&&"object"==typeof t}function o(t,n){for(var r=-1,e=t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}function u(t,n,r,o,c,f){return t===n||(null==t||null==n||!s(t)&&!e(n)?t!==t&&n!==n:i(t,n,u,r,o,c,f))}function i(t,n,r,e,o,u,i){var s=p(t),v=p(n),h=g,b=g;s||(h=_.call(t),h==y?h=x:h!=x&&(s=l(t))),v||(b=_.call(n),b==y?b=x:b!=x&&(v=l(n)));var d=h==x,m=b==x,j=h==b;if(j&&!s&&!d)return f(t,n,h);if(!o){var O=d&&S.call(t,"__wrapped__"),w=m&&S.call(n,"__wrapped__");if(O||w)return r(O?t.value():t,w?n.value():n,e,o,u,i)}if(!j)return!1;u||(u=[]),i||(i=[]);for(var A=u.length;A--;)if(u[A]==t)return i[A]==n;u.push(t),i.push(n);var M=(s?c:a)(t,n,r,e,o,u,i);return u.pop(),i.pop(),M}function c(t,n,r,e,u,i,c){var f=-1,a=t.length,s=n.length;if(a!=s&&!(u&&s>a))return!1;for(;++f<a;){var p=t[f],l=n[f],v=e?e(u?l:p,u?p:l,f):void 0;if(void 0!==v){if(v)continue;return!1}if(u){if(!o(n,function(t){return p===t||r(p,t,e,u,i,c)}))return!1}else if(p!==l&&!r(p,l,e,u,i,c))return!1}return!0}function f(t,n,r){switch(r){case h:case b:return+t==+n;case d:return t.name==n.name&&t.message==n.message;case m:return t!=+t?n!=+n:t==+n;case j:case O:return t==n+""}return!1}function a(t,n,r,e,o,u,i){var c=v(t),f=c.length;if(f!=v(n).length&&!o)return!1;for(var a=f;a--;){var s=c[a];if(!(o?s in n:S.call(n,s)))return!1}for(var p=o;++a<f;){s=c[a];var l=t[s],y=n[s],g=e?e(o?y:l,o?l:y,s):void 0;if(!(void 0===g?r(l,y,e,o,u,i):g))return!1;p||(p="constructor"==s)}if(!p){var h=t.constructor,b=n.constructor;if(h!=b&&"constructor"in t&&"constructor"in n&&!("function"==typeof h&&h instanceof h&&"function"==typeof b&&b instanceof b))return!1}return!0}function s(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}var p=r(8),l=r(67),v=r(16),y="[object Arguments]",g="[object Array]",h="[object Boolean]",b="[object Date]",d="[object Error]",m="[object Number]",x="[object Object]",j="[object RegExp]",O="[object String]",w=Object.prototype,S=w.hasOwnProperty,_=w.toString;t.exports=u},function(t,n){function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function e(t){return!!t&&"object"==typeof t}function o(t){return e(t)&&r(t.length)&&!!i[f.call(t)]}var u=9007199254740991,i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var c=Object.prototype,f=c.toString;t.exports=o},function(t,n){function r(t){return!!t&&"object"==typeof t}function e(t,n){var r=null==t?void 0:t[n];return i(r)?r:void 0}function o(t){return u(t)&&l.call(t)==c}function u(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function i(t){return null!=t&&(o(t)?v.test(s.call(t)):r(t)&&f.test(t))}var c="[object Function]",f=/^\[object .+?Constructor\]$/,a=Object.prototype,s=Function.prototype.toString,p=a.hasOwnProperty,l=a.toString,v=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=e},function(t,n){function r(t){return o(t)&&y.call(t,"callee")&&(!h.call(t,"callee")||g.call(t)==s)}function e(t){return null!=t&&i(t.length)&&!u(t)}function o(t){return f(t)&&e(t)}function u(t){var n=c(t)?g.call(t):"";return n==p||n==l}function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function c(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function f(t){return!!t&&"object"==typeof t}var a=9007199254740991,s="[object Arguments]",p="[object Function]",l="[object GeneratorFunction]",v=Object.prototype,y=v.hasOwnProperty,g=v.toString,h=v.propertyIsEnumerable;t.exports=r},function(t,n){function r(t,n,r){if("function"!=typeof t)return e;if(void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 3:return function(r,e,o){return t.call(n,r,e,o)};case 4:return function(r,e,o,u){return t.call(n,r,e,o,u)};case 5:return function(r,e,o,u,i){return t.call(n,r,e,o,u,i)}}return function(){return t.apply(n,arguments)}}function e(t){return t}t.exports=r},function(t,n,r){function e(t){return o(t)?t:Object(t)}function o(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function u(t){t=e(t);for(var n=-1,r=i(t),o=r.length,u=Array(o);++n<o;){var c=r[n];u[n]=[c,t[c]]}return u}var i=r(16);t.exports=u},function(t,n,r){function e(t,n){return s(t,n,c)}function o(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=f}function u(t){return i(t)?t:Object(t)}function i(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}var c=r(16),f=9007199254740991,a=function(t,n){return function(r,e){var i=r?p(r):0;if(!o(i))return t(r,e);for(var c=n?i:-1,f=u(r);(n?c--:++c<i)&&!1!==e(f[c],c,f););return r}}(e),s=function(t){return function(n,r,e){for(var o=u(n),i=e(n),c=i.length,f=t?c:-1;t?f--:++f<c;){var a=i[f];if(!1===r(o[a],a,o))break}return n}}(),p=function(t){return function(n){return null==n?void 0:n[t]}}("length");t.exports=a},function(t,n){function r(t,n,r,e,o){return o(t,function(t,o,u){r=e?(e=!1,t):n(r,t,o,u)}),r}t.exports=r},function(t,n){t.exports={matches:function(t){return-1!==t[0].indexOf("23andMe")},parseLine:function(t){var n=t.split("\t"),r={id:n[0],chromosome:n[1],genotype:n[3]};return"X"!==r.chromosome&&"Y"!==r.chromosome&&"MT"!==r.chromosome&&(r.chromosome=+r.chromosome),r.genotype=r.genotype.replace(new RegExp("-","g"),"?"),r.genotype=r.genotype.replace(new RegExp("D","g"),"-"),r}}},function(t,n){var r={23:"X",24:"Y",25:"PAR",26:"MT"};t.exports={matches:function(t){return 0===t[0].indexOf("#AncestryDNA")},parseLine:function(t){if(0!==t.indexOf("rsid")){var n=t.split("\t"),e={id:n[0],chromosome:n[1],genotype:n[3]+n[4]};return r[e.chromosome]?e.chromosome=r[e.chromosome]:e.chromosome=+e.chromosome,e.genotype=e.genotype.replace(new RegExp("0","g"),"?"),e.genotype=e.genotype.replace(new RegExp("D","g"),"-"),e}}}},function(t,n){function r(t){return t.replace(/"/g,"")}t.exports={matches:function(t){return 0===t[0].indexOf("RSID,")},parseLine:function(t){if(0!==t.indexOf("RSID,")){var n=t.split(","),e={id:r(n[0]),chromosome:r(n[1]),genotype:r(n[3])};return"X"!==e.chromosome&&"Y"!==e.chromosome&&"MT"!==e.chromosome&&(e.chromosome=+e.chromosome),e.genotype=e.genotype.replace(new RegExp("-","g"),"?"),e.genotype=e.genotype.replace(new RegExp("D","g"),"-"),e}}}},function(t,n){t.exports={matches:function(t){return-1!==t[0].replace(/\s/g,"").indexOf("GenesforGood")&&-1!==t[0].indexOf("unphased")},parseLine:function(t){var n=t.split("\t"),r={id:n[0],chromosome:n[1],genotype:n[3]};return"X"!==r.chromosome&&"Y"!==r.chromosome&&"MT"!==r.chromosome&&(r.chromosome=+r.chromosome),r.genotype=r.genotype.replace(new RegExp("-","g"),"?"),r.genotype=r.genotype.replace(new RegExp("D","g"),"-"),r}}}]);