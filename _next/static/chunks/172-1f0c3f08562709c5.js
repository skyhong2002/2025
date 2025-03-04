"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{3145:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(8461),i=n.n(r)},8461:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return a}});let r=n(7043),i=n(5346),o=n(5878),l=r._(n(5084));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/2025/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=o.Image},5523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(7043)._(n(2265)).default.createContext(null)},6471:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2265);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:s="",children:c,iconNode:f,...h}=e;return(0,r.createElement)("svg",{ref:t,...l,width:i,height:i,stroke:n,strokeWidth:u?24*Number(a)/Number(i):a,className:o("lucide",s),...h},[...f.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),u=(e,t)=>{let n=(0,r.forwardRef)((n,l)=>{let{className:u,...s}=n;return(0,r.createElement)(a,{ref:l,iconNode:t,className:o("lucide-".concat(i(e)),u),...s})});return n.displayName="".concat(e),n}},9143:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(6471).Z)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},4376:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(6471).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},2032:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(6471).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},3742:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7085);let i=function(e){if(null==e)return l;if("string"==typeof e)return o(function(t){return t.tagName===e});if("object"==typeof e)return function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=i(e[n]);return o(function(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1})}(e);if("function"==typeof e)return o(e);throw Error("Expected function, string, or array as `test`")};function o(e){return function(t,n,r){return!!(null!==t&&"object"==typeof t&&"type"in t&&"tagName"in t&&e.call(this,t,"number"==typeof n?n:void 0,r||void 0))}}function l(e){return!!(e&&"object"==typeof e&&"type"in e&&"element"===e.type&&"tagName"in e&&"string"==typeof e.tagName)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=/^[a-zA-Z]:\\/;var s=n(2295),c=n(6882);let f=["http","https"],h=["nofollow"],p={};function d(e){let t=e||p,n=t.protocols||f,o=i(t.test);return function(e){(0,c.Vn)(e,"element",function(e,i,l){if("a"===e.tagName&&"string"==typeof e.properties.href&&o(e,i,l)){let i=e.properties.href;if(!function(e){if("string"!=typeof e)throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);return!u.test(e)&&a.test(e)}(i)?i.startsWith("//"):n.includes(i.slice(0,i.indexOf(":")))){let n=g(t.content,e),i=n&&!Array.isArray(n)?[n]:n,o=g(t.rel,e)||h,l="string"==typeof o?(0,s.Q)(o):o,a=g(t.target,e),u=g(t.properties,e);if(u&&Object.assign(e.properties,(0,r.ZP)(u)),l.length>0&&(e.properties.rel=[...l]),a&&(e.properties.target=a),i){let n=g(t.contentProperties,e)||{};e.children.push({type:"element",tagName:"span",properties:(0,r.ZP)(n),children:(0,r.ZP)(i)})}}}})}}function g(e,t){return"function"==typeof e?e(t):e}},3260:function(e,t,n){function r(e,t){let n=String(e);if("string"!=typeof t)throw TypeError("Expected character");let r=0,i=n.indexOf(t);for(;-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}n.d(t,{Z:function(){return eR}});var i=n(6843),o=n(724),l=n(6134),a=n(8292);let u="phrasing",s=["autolink","link","image","label"];function c(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function f(e){this.config.enter.autolinkProtocol.call(this,e)}function h(e){this.config.exit.autolinkProtocol.call(this,e)}function p(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];(0,i.ok)("link"===t.type),t.url="http://"+this.sliceSerialize(e)}function d(e){this.config.exit.autolinkEmail.call(this,e)}function g(e){this.exit(e)}function m(e){!function(e,t,n){let r=(0,a.O)((n||{}).ignore||[]),i=function(e){let t=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){var i;let e=n[r];t.push(["string"==typeof(i=e[0])?RegExp(function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(i),"g"):i,function(e){return"function"==typeof e?e:function(){return e}}(e[1])])}return t}(t),o=-1;for(;++o<i.length;)(0,l.S4)(e,"text",u);function u(e,t){let n,l=-1;for(;++l<t.length;){let e=t[l],i=n?n.children:void 0;if(r(e,i?i.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){let n=t[t.length-1],r=i[o][0],l=i[o][1],a=0,u=n.children.indexOf(e),s=!1,c=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){let n=f.index,i={index:f.index,input:f.input,stack:[...t,e]},o=l(...f,i);if("string"==typeof o&&(o=o.length>0?{type:"text",value:o}:void 0),!1===o?r.lastIndex=n+1:(a!==n&&c.push({type:"text",value:e.value.slice(a,n)}),Array.isArray(o)?c.push(...o):o&&c.push(o),a=n+f[0].length,s=!0),!r.global)break;f=r.exec(e.value)}return s?(a<e.value.length&&c.push({type:"text",value:e.value.slice(a)}),n.children.splice(u,1,...c)):c=[e],u+c.length}(e,t)}}(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,k],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,b]],{ignore:["link","linkReference"]})}function k(e,t,n,i,o){let l="";if(!x(o)||(/^w/i.test(t)&&(n=t+n,t="",l="http://"),!function(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}(n)))return!1;let a=function(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],i=n.indexOf(")"),o=r(e,"("),l=r(e,")");for(;-1!==i&&o>l;)e+=n.slice(0,i+1),i=(n=n.slice(i+1)).indexOf(")"),l++;return[e,n]}(n+i);if(!a[0])return!1;let u={type:"link",title:null,url:l+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[u,{type:"text",value:a[1]}]:u}function b(e,t,n,r){return!(!x(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function x(e,t){let n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,o.B8)(n)||(0,o.Xh)(n))&&(!t||47!==n)}var y=n(6711);function v(){this.buffer()}function C(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function w(){this.buffer()}function D(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function z(e){let t=this.resume(),n=this.stack[this.stack.length-1];(0,i.ok)("footnoteReference"===n.type),n.identifier=(0,y.d)(this.sliceSerialize(e)).toLowerCase(),n.label=t}function F(e){this.exit(e)}function A(e){let t=this.resume(),n=this.stack[this.stack.length-1];(0,i.ok)("footnoteDefinition"===n.type),n.identifier=(0,y.d)(this.sliceSerialize(e)).toLowerCase(),n.label=t}function L(e){this.exit(e)}function j(e,t,n,r){let i=n.createTracker(r),o=i.move("[^"),l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),l(),o+=i.move("]")}function M(e,t,n){return 0===t?e:O(e,t,n)}function O(e,t,n){return(n?"":"    ")+e}j.peek=function(){return"["};let S=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];function E(e){this.enter({type:"delete",children:[]},e)}function R(e){this.exit(e)}function T(e,t,n,r){let i=n.createTracker(r),o=n.enter("strikethrough"),l=i.move("~~");return l+=n.containerPhrasing(e,{...i.current(),before:l,after:"~"})+i.move("~~"),o(),l}function _(e){return e.length}function I(e){let t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}T.peek=function(){return"~"};var P=n(2003);n(6882);var Z=n(8160);function H(e,t,n){let r=e.value||"",i="`",o=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){let e;let t=n.unsafe[o],i=n.compilePattern(t);if(t.atBreak)for(;e=i.exec(r);){let t=e.index;10===r.charCodeAt(t)&&13===r.charCodeAt(t-1)&&t--,r=r.slice(0,t)+" "+r.slice(e.index+1)}}return i+r+i}H.peek=function(){return"`"},(0,a.O)(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);let $=function(e,t,n,r){let i=function(e){let t=e.options.listItemIndent||"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),o=n.bulletCurrent||function(e){let t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(o=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let l=o.length+1;("tab"===i||"mixed"===i&&(t&&"list"===t.type&&t.spread||e.spread))&&(l=4*Math.ceil(l/4));let a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);let u=n.enter("listItem"),s=n.indentLines(n.containerFlow(e,a.current()),function(e,t,n){return t?(n?"":" ".repeat(l))+e:(n?o:o+" ".repeat(l-o.length))+e});return u(),s};function B(e){let t=e._align;(0,i.ok)(t,"expected `_align` on table"),this.enter({type:"table",align:t.map(function(e){return"none"===e?null:e}),children:[]},e),this.data.inTable=!0}function N(e){this.exit(e),this.data.inTable=void 0}function W(e){this.enter({type:"tableRow",children:[]},e)}function q(e){this.exit(e)}function V(e){this.enter({type:"tableCell",children:[]},e)}function U(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,X));let n=this.stack[this.stack.length-1];(0,i.ok)("inlineCode"===n.type),n.value=t,this.exit(e)}function X(e,t){return"|"===t?t:e}function Q(e){let t=this.stack[this.stack.length-2];(0,i.ok)("listItem"===t.type),t.checked="taskListCheckValueChecked"===e.type}function G(e){let t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){let e=this.stack[this.stack.length-1];(0,i.ok)("paragraph"===e.type);let n=e.children[0];if(n&&"text"===n.type){let r;let i=t.children,o=-1;for(;++o<i.length;){let e=i[o];if("paragraph"===e.type){r=e;break}}r===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"==typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function J(e,t,n,r){let i=e.children[0],o="boolean"==typeof e.checked&&i&&"paragraph"===i.type,l="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(l);let u=$(e,t,n,{...r,...a.current()});return o&&(u=u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,function(e){return e+l})),u}var K=n(1640);let Y={tokenize:function(e,t,n){let r=0;return function t(o){return(87===o||119===o)&&r<3?(r++,e.consume(o),t):46===o&&3===r?(e.consume(o),i):n(o)};function i(e){return null===e?n(e):t(e)}},partial:!0},ee={tokenize:function(e,t,n){let r,i,l;return a;function a(t){return 46===t||95===t?e.check(en,s,u)(t):null===t||(0,o.z3)(t)||(0,o.B8)(t)||45!==t&&(0,o.Xh)(t)?s(t):(l=!0,e.consume(t),a)}function u(t){return 95===t?r=!0:(i=r,r=void 0),e.consume(t),a}function s(e){return i||r||!l?n(e):t(e)}},partial:!0},et={tokenize:function(e,t){let n=0,r=0;return i;function i(a){return 40===a?(n++,e.consume(a),i):41===a&&r<n?l(a):33===a||34===a||38===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||60===a||63===a||93===a||95===a||126===a?e.check(en,t,l)(a):null===a||(0,o.z3)(a)||(0,o.B8)(a)?t(a):(e.consume(a),i)}function l(t){return 41===t&&r++,e.consume(t),i}},partial:!0},en={tokenize:function(e,t,n){return r;function r(a){return 33===a||34===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||63===a||95===a||126===a?(e.consume(a),r):38===a?(e.consume(a),l):93===a?(e.consume(a),i):60===a||null===a||(0,o.z3)(a)||(0,o.B8)(a)?t(a):n(a)}function i(e){return null===e||40===e||91===e||(0,o.z3)(e)||(0,o.B8)(e)?t(e):r(e)}function l(t){return(0,o.jv)(t)?function t(i){return 59===i?(e.consume(i),r):(0,o.jv)(i)?(e.consume(i),t):n(i)}(t):n(t)}},partial:!0},er={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(e){return(0,o.H$)(e)?n(e):t(e)}},partial:!0},ei={name:"wwwAutolink",tokenize:function(e,t,n){let r=this;return function(t){return 87!==t&&119!==t||!es.call(r,r.previous)||ep(r.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Y,e.attempt(ee,e.attempt(et,i),n),n)(t))};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:es},eo={name:"protocolAutolink",tokenize:function(e,t,n){let r=this,i="",l=!1;return function(t){return(72===t||104===t)&&ec.call(r,r.previous)&&!ep(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(t),e.consume(t),a):n(t)};function a(t){if((0,o.jv)(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),a;if(58===t){let n=i.toLowerCase();if("http"===n||"https"===n)return e.consume(t),u}return n(t)}function u(t){return 47===t?(e.consume(t),l)?s:(l=!0,u):n(t)}function s(t){return null===t||(0,o.Av)(t)||(0,o.z3)(t)||(0,o.B8)(t)||(0,o.Xh)(t)?n(t):e.attempt(ee,e.attempt(et,c),n)(t)}function c(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:ec},el={name:"emailAutolink",tokenize:function(e,t,n){let r,i;let l=this;return function(t){return!eh(t)||!ef.call(l,l.previous)||ep(l.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),function t(r){return eh(r)?(e.consume(r),t):64===r?(e.consume(r),a):n(r)}(t))};function a(t){return 46===t?e.check(er,s,u)(t):45===t||95===t||(0,o.H$)(t)?(i=!0,e.consume(t),a):s(t)}function u(t){return e.consume(t),r=!0,a}function s(a){return i&&r&&(0,o.jv)(l.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(a)):n(a)}},previous:ef},ea={},eu=48;for(;eu<123;)ea[eu]=el,58==++eu?eu=65:91===eu&&(eu=97);function es(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||(0,o.z3)(e)}function ec(e){return!(0,o.jv)(e)}function ef(e){return!(47===e||eh(e))}function eh(e){return 43===e||45===e||46===e||95===e||(0,o.H$)(e)}function ep(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}ea[43]=el,ea[45]=el,ea[46]=el,ea[95]=el,ea[72]=[el,eo],ea[104]=[el,eo],ea[87]=[el,ei],ea[119]=[el,ei];var ed=n(2995),eg=n(4528);let em={tokenize:function(e,t,n){let r=this;return(0,eg.f)(e,function(e){let i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)},"gfmFootnoteDefinitionIndent",5)},partial:!0};function ek(e,t,n){let r;let i=this,o=i.events.length,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);for(;o--;){let e=i.events[o][1];if("labelImage"===e.type){r=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(o){if(!r||!r._balanced)return n(o);let a=(0,y.d)(i.sliceSerialize({start:r.end,end:i.now()}));return 94===a.codePointAt(0)&&l.includes(a.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(o),e.exit("gfmFootnoteCallLabelMarker"),t(o)):n(o)}}function eb(e,t){let n=e.length;for(;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function ex(e,t,n){let r;let i=this,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]),a=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),u};function u(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",s)}function s(u){if(a>999||93===u&&!r||null===u||91===u||(0,o.z3)(u))return n(u);if(93===u){e.exit("chunkString");let r=e.exit("gfmFootnoteCallString");return l.includes((0,y.d)(i.sliceSerialize(r)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(u),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(u)}return(0,o.z3)(u)||(r=!0),a++,e.consume(u),92===u?c:s}function c(t){return 91===t||92===t||93===t?(e.consume(t),a++,s):s(t)}}function ey(e,t,n){let r,i;let l=this,a=l.parser.gfmFootnotes||(l.parser.gfmFootnotes=[]),u=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),s};function s(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(t)}function c(t){if(u>999||93===t&&!i||null===t||91===t||(0,o.z3)(t))return n(t);if(93===t){e.exit("chunkString");let n=e.exit("gfmFootnoteDefinitionLabelString");return r=(0,y.d)(l.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return(0,o.z3)(t)||(i=!0),u++,e.consume(t),92===t?f:c}function f(t){return 91===t||92===t||93===t?(e.consume(t),u++,c):c(t)}function h(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a.includes(r)||a.push(r),(0,eg.f)(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function ev(e,t,n){return e.check(ed.w,t,e.attempt(em,t,n))}function eC(e){e.exit("gfmFootnoteDefinition")}var ew=n(8117),eD=n(2302);class ez{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,r){let i=0;if(0!==n||0!==r.length){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),0===this.map.length)return;let t=this.map.length,n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}}function eF(e,t,n){let r;let i=this,l=0,a=0;return function(e){let t=i.events.length-1;for(;t>-1;){let e=i.events[t][1].type;if("lineEnding"===e||"linePrefix"===e)t--;else break}let r=t>-1?i.events[t][1].type:null,o="tableHead"===r||"tableRow"===r?x:u;return o===x&&i.parser.lazy[i.now().line]?n(e):o(e)};function u(t){return e.enter("tableHead"),e.enter("tableRow"),124===t||(r=!0,a+=1),s(t)}function s(t){return null===t?n(t):(0,o.Ch)(t)?a>1?(a=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),h):n(t):(0,o.xz)(t)?(0,eg.f)(e,s,"whitespace")(t):(a+=1,r&&(r=!1,l+=1),124===t)?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),r=!0,s):(e.enter("data"),c(t))}function c(t){return null===t||124===t||(0,o.z3)(t)?(e.exit("data"),s(t)):(e.consume(t),92===t?f:c)}function f(t){return 92===t||124===t?(e.consume(t),c):c(t)}function h(t){return(i.interrupt=!1,i.parser.lazy[i.now().line])?n(t):(e.enter("tableDelimiterRow"),r=!1,(0,o.xz)(t))?(0,eg.f)(e,p,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):p(t)}function p(t){return 45===t||58===t?g(t):124===t?(r=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),d):n(t)}function d(t){return(0,o.xz)(t)?(0,eg.f)(e,g,"whitespace")(t):g(t)}function g(t){return 58===t?(a+=1,r=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),m):45===t?(a+=1,m(t)):null===t||(0,o.Ch)(t)?b(t):n(t)}function m(t){return 45===t?(e.enter("tableDelimiterFiller"),function t(n){return 45===n?(e.consume(n),t):58===n?(r=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(n),e.exit("tableDelimiterMarker"),k):(e.exit("tableDelimiterFiller"),k(n))}(t)):n(t)}function k(t){return(0,o.xz)(t)?(0,eg.f)(e,b,"whitespace")(t):b(t)}function b(i){return 124===i?p(i):null===i||(0,o.Ch)(i)?r&&l===a?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(i)):n(i):n(i)}function x(t){return e.enter("tableRow"),y(t)}function y(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),y):null===n||(0,o.Ch)(n)?(e.exit("tableRow"),t(n)):(0,o.xz)(n)?(0,eg.f)(e,y,"whitespace")(n):(e.enter("data"),v(n))}function v(t){return null===t||124===t||(0,o.z3)(t)?(e.exit("data"),y(t)):(e.consume(t),92===t?C:v)}function C(t){return 92===t||124===t?(e.consume(t),v):v(t)}}function eA(e,t){let n,r,i,o=-1,l=!0,a=0,u=[0,0,0,0],s=[0,0,0,0],c=!1,f=0,h=new ez;for(;++o<e.length;){let p=e[o],d=p[1];"enter"===p[0]?"tableHead"===d.type?(c=!1,0!==f&&(ej(h,t,f,n,r),r=void 0,f=0),n={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",n,t]])):"tableRow"===d.type||"tableDelimiterRow"===d.type?(l=!0,i=void 0,u=[0,0,0,0],s=[0,o+1,0,0],c&&(c=!1,r={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",r,t]])),a="tableDelimiterRow"===d.type?2:r?3:1):a&&("data"===d.type||"tableDelimiterMarker"===d.type||"tableDelimiterFiller"===d.type)?(l=!1,0===s[2]&&(0!==u[1]&&(s[0]=s[1],i=eL(h,t,u,a,void 0,i),u=[0,0,0,0]),s[2]=o)):"tableCellDivider"===d.type&&(l?l=!1:(0!==u[1]&&(s[0]=s[1],i=eL(h,t,u,a,void 0,i)),s=[(u=s)[1],o,0,0])):"tableHead"===d.type?(c=!0,f=o):"tableRow"===d.type||"tableDelimiterRow"===d.type?(f=o,0!==u[1]?(s[0]=s[1],i=eL(h,t,u,a,o,i)):0!==s[1]&&(i=eL(h,t,s,a,o,i)),a=0):a&&("data"===d.type||"tableDelimiterMarker"===d.type||"tableDelimiterFiller"===d.type)&&(s[3]=o)}for(0!==f&&ej(h,t,f,n,r),h.consume(t.events),o=-1;++o<t.events.length;){let e=t.events[o];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=function(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if("enter"===i[0])"tableContent"===i[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===i[1].type){if("tableDelimiterMarker"===e[t-1][1].type){let e=r.length-1;r[e]="left"===r[e]?"center":"right"}}else if("tableDelimiterRow"===i[1].type)break}else"enter"===i[0]&&"tableDelimiterRow"===i[1].type&&(n=!0);t+=1}return r}(t.events,o))}return e}function eL(e,t,n,r,i,o){0!==n[0]&&(o.end=Object.assign({},eM(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));let l=eM(t.events,n[1]);if(o={type:1===r?"tableHeader":2===r?"tableDelimiter":"tableData",start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",o,t]]),0!==n[2]){let i=eM(t.events,n[2]),o=eM(t.events,n[3]),l={type:"tableContent",start:Object.assign({},i),end:Object.assign({},o)};if(e.add(n[2],0,[["enter",l,t]]),2!==r){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type="chunkText",r[1].contentType="text",n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[["exit",l,t]])}return void 0!==i&&(o.end=Object.assign({},eM(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function ej(e,t,n,r,i){let o=[],l=eM(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function eM(e,t){let n=e[t],r="enter"===n[0]?"start":"end";return n[1][r]}let eO={name:"tasklistCheck",tokenize:function(e,t,n){let r=this;return function(t){return null===r.previous&&r._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),i):n(t)};function i(t){return(0,o.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),l):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),l):n(t)}function l(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(t)}function a(r){return(0,o.Ch)(r)?t(r):(0,o.xz)(r)?e.check({tokenize:eS},t,n)(r):n(r)}}};function eS(e,t,n){return(0,eg.f)(e,function(e){return null===e?n(e):t(e)},"whitespace")}let eE={};function eR(e){let t;let n=e||eE,r=this.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push((0,K.W)([{text:ea},{document:{91:{name:"gfmFootnoteDefinition",tokenize:ey,continuation:{tokenize:ev},exit:eC}},text:{91:{name:"gfmFootnoteCall",tokenize:ex},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:ek,resolveTo:eb}}},function(e){let t=(e||{}).singleTilde,n={name:"strikethrough",tokenize:function(e,n,r){let i=this.previous,o=this.events,l=0;return function(a){return 126===i&&"characterEscape"!==o[o.length-1][1].type?r(a):(e.enter("strikethroughSequenceTemporary"),function o(a){let u=(0,P.r)(i);if(126===a)return l>1?r(a):(e.consume(a),l++,o);if(l<2&&!t)return r(a);let s=e.exit("strikethroughSequenceTemporary"),c=(0,P.r)(a);return s._open=!c||2===c&&!!u,s._close=!u||2===u&&!!c,n(a)}(a))}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";let i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]],a=t.parser.constructs.insideSpan.null;a&&(0,ew.d)(l,l.length,0,(0,eD.C)(a,e.slice(r+1,n),t)),(0,ew.d)(l,l.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,ew.d)(e,r-1,n-r+3,l),n=r+l.length-2;break}}for(n=-1;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}(n),{flow:{null:{name:"table",tokenize:eF,resolveAll:eA}}},{text:{91:eO}}])),o.push([{transforms:[m],enter:{literalAutolink:c,literalAutolinkEmail:f,literalAutolinkHttp:f,literalAutolinkWww:f},exit:{literalAutolink:g,literalAutolinkEmail:d,literalAutolinkHttp:h,literalAutolinkWww:p}},{enter:{gfmFootnoteCallString:v,gfmFootnoteCall:C,gfmFootnoteDefinitionLabelString:w,gfmFootnoteDefinition:D},exit:{gfmFootnoteCallString:z,gfmFootnoteCall:F,gfmFootnoteDefinitionLabelString:A,gfmFootnoteDefinition:L}},{canContainEols:["delete"],enter:{strikethrough:E},exit:{strikethrough:R}},{enter:{table:B,tableData:V,tableHeader:V,tableRow:W},exit:{codeText:U,table:N,tableData:q,tableHeader:q,tableRow:q}},{exit:{taskListCheckValueChecked:Q,taskListCheckValueUnchecked:Q,paragraph:G}}]),l.push({extensions:[{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:u,notInConstruct:s},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:u,notInConstruct:s},{character:":",before:"[ps]",after:"\\/",inConstruct:u,notInConstruct:s}]},(t=!1,n&&n.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:function(e,n,r,i){let o=r.createTracker(i),l=o.move("[^"),a=r.enter("footnoteDefinition"),u=r.enter("label");return l+=o.move(r.safe(r.associationId(e),{before:l,after:"]"})),u(),l+=o.move("]:"),e.children&&e.children.length>0&&(o.shift(4),l+=o.move((t?"\n":" ")+r.indentLines(r.containerFlow(e,o.current()),t?O:M))),a(),l},footnoteReference:j},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]}),{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:S}],handlers:{delete:T}},function(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:function(e,t,n){let r=H(e,t,n);return n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&")),r},table:function(e,t,n,r){return a(function(e,t,n){let r=e.children,i=-1,o=[],l=t.enter("table");for(;++i<r.length;)o[i]=u(r[i],t,n);return l(),o}(e,n,r),e.align)},tableCell:l,tableRow:function(e,t,n,r){let i=a([u(e,n,r)]);return i.slice(0,i.indexOf("\n"))}}};function l(e,t,n,r){let i=n.enter("tableCell"),l=n.enter("phrasing"),a=n.containerPhrasing(e,{...r,before:o,after:o});return l(),i(),a}function a(e,t){return function(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||_,o=[],l=[],a=[],u=[],s=0,c=-1;for(;++c<e.length;){let t=[],r=[],o=-1;for(e[c].length>s&&(s=e[c].length);++o<e[c].length;){var f;let l=null==(f=e[c][o])?"":String(f);if(!1!==n.alignDelimiters){let e=i(l);r[o]=e,(void 0===u[o]||e>u[o])&&(u[o]=e)}t.push(l)}l[c]=t,a[c]=r}let h=-1;if("object"==typeof r&&"length"in r)for(;++h<s;)o[h]=I(r[h]);else{let e=I(r);for(;++h<s;)o[h]=e}h=-1;let p=[],d=[];for(;++h<s;){let e=o[h],t="",r="";99===e?(t=":",r=":"):108===e?t=":":114===e&&(r=":");let i=!1===n.alignDelimiters?1:Math.max(1,u[h]-t.length-r.length),l=t+"-".repeat(i)+r;!1!==n.alignDelimiters&&((i=t.length+i+r.length)>u[h]&&(u[h]=i),d[h]=i),p[h]=l}l.splice(1,0,p),a.splice(1,0,d),c=-1;let g=[];for(;++c<l.length;){let e=l[c],t=a[c];h=-1;let r=[];for(;++h<s;){let i=e[h]||"",l="",a="";if(!1!==n.alignDelimiters){let e=u[h]-(t[h]||0),n=o[h];114===n?l=" ".repeat(e):99===n?e%2?(l=" ".repeat(e/2+.5),a=" ".repeat(e/2-.5)):a=l=" ".repeat(e/2):a=" ".repeat(e)}!1===n.delimiterStart||h||r.push("|"),!1!==n.padding&&!(!1===n.alignDelimiters&&""===i)&&(!1!==n.delimiterStart||h)&&r.push(" "),!1!==n.alignDelimiters&&r.push(l),r.push(i),!1!==n.alignDelimiters&&r.push(a),!1!==n.padding&&r.push(" "),(!1!==n.delimiterEnd||h!==s-1)&&r.push("|")}g.push(!1===n.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return g.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,o=[],a=t.enter("tableRow");for(;++i<r.length;)o[i]=l(r[i],e,t,n);return a(),o}}(n),{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:J}}]})}}}]);