(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a84"],{"010c":function(t,e,r){"use strict";var n=r("e32a"),o=r.n(n);o.a},3130:function(t,e,r){},"37c8":function(t,e,r){e.f=r("2b4c")},"3a72":function(t,e,r){var n=r("7726"),o=r("8378"),a=r("2d00"),i=r("37c8"),c=r("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:i.f(t)})}},"7bbc":function(t,e,r){var n=r("6821"),o=r("9093").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(n(t))}},"8a81":function(t,e,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("9e1e"),i=r("5ca1"),c=r("2aba"),s=r("67ab").KEY,u=r("79e5"),l=r("5537"),f=r("7f20"),h=r("ca5a"),p=r("2b4c"),v=r("37c8"),d=r("3a72"),y=r("d4c0"),g=r("1169"),m=r("cb7c"),w=r("d3f4"),b=r("6821"),k=r("6a99"),x=r("4630"),_=r("2aeb"),S=r("7bbc"),O=r("11e9"),E=r("86cc"),L=r("0d58"),P=O.f,j=E.f,C=S.f,N=n.Symbol,F=n.JSON,T=F&&F.stringify,G="prototype",R=p("_hidden"),A=p("toPrimitive"),I={}.propertyIsEnumerable,W=l("symbol-registry"),z=l("symbols"),J=l("op-symbols"),M=Object[G],B="function"==typeof N,Y=n.QObject,$=!Y||!Y[G]||!Y[G].findChild,V=a&&u(function(){return 7!=_(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=P(M,e);n&&delete M[e],j(t,e,r),n&&t!==M&&j(M,e,n)}:j,D=function(t){var e=z[t]=_(N[G]);return e._k=t,e},H=B&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},K=function(t,e,r){return t===M&&K(J,e,r),m(t),e=k(e,!0),m(r),o(z,e)?(r.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),r=_(r,{enumerable:x(0,!1)})):(o(t,R)||j(t,R,x(1,{})),t[R][e]=!0),V(t,e,r)):j(t,e,r)},Q=function(t,e){m(t);var r,n=y(e=b(e)),o=0,a=n.length;while(a>o)K(t,r=n[o++],e[r]);return t},q=function(t,e){return void 0===e?_(t):Q(_(t),e)},U=function(t){var e=I.call(this,t=k(t,!0));return!(this===M&&o(z,t)&&!o(J,t))&&(!(e||!o(this,t)||!o(z,t)||o(this,R)&&this[R][t])||e)},X=function(t,e){if(t=b(t),e=k(e,!0),t!==M||!o(z,e)||o(J,e)){var r=P(t,e);return!r||!o(z,e)||o(t,R)&&t[R][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=C(b(t)),n=[],a=0;while(r.length>a)o(z,e=r[a++])||e==R||e==s||n.push(e);return n},tt=function(t){var e,r=t===M,n=C(r?J:b(t)),a=[],i=0;while(n.length>i)!o(z,e=n[i++])||r&&!o(M,e)||a.push(z[e]);return a};B||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===M&&e.call(J,r),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),V(this,t,x(1,r))};return a&&$&&V(M,t,{configurable:!0,set:e}),D(t)},c(N[G],"toString",function(){return this._k}),O.f=X,E.f=K,r("9093").f=S.f=Z,r("52a7").f=U,r("2621").f=tt,a&&!r("2d00")&&c(M,"propertyIsEnumerable",U,!0),v.f=function(t){return D(p(t))}),i(i.G+i.W+i.F*!B,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)p(et[rt++]);for(var nt=L(p.store),ot=0;nt.length>ot;)d(nt[ot++]);i(i.S+i.F*!B,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=N(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){$=!0},useSimple:function(){$=!1}}),i(i.S+i.F*!B,"Object",{create:q,defineProperty:K,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&i(i.S+i.F*(!B||u(function(){var t=N();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(r=e=n[1],(w(e)||void 0!==t)&&!H(t))return g(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!H(e))return e}),n[1]=e,T.apply(F,n)}}),N[G][A]||r("32e9")(N[G],A,N[G].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(F([])));m&&m!==n&&o.call(m,i)&&(y=m);var w=S.prototype=x.prototype=Object.create(y);_.prototype=w.constructor=S,S.constructor=_,S[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=F,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=L(t,r,i),a}function k(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function x(){}function _(){}function S(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,a,i){var c=k(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(u).then(function(t){s.value=t,a(s)},i)}i(c.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function L(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return T()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=k(t,e,r);if("normal"===s.type){if(n=r.done?v:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=k(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},ac4d:function(t,e,r){r("3a72")("asyncIterator")},b38a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",{staticClass:"margin-bottom-10",attrs:{gutter:20}},[r("Col",{attrs:{span:"4"}},[r("Select",{attrs:{placeholder:"选择单词星级"},on:{"on-change":t.handleStarChange},model:{value:t.star,callback:function(e){t.star=e},expression:"star"}},[r("Option",{attrs:{value:5}},[t._v("五星")]),r("Option",{attrs:{value:4}},[t._v("四星")]),r("Option",{attrs:{value:3}},[t._v("三星")]),r("Option",{attrs:{value:2}},[t._v("二星")])],1)],1),r("Col",{attrs:{span:"3"}},[r("Select",{attrs:{placeholder:"选择播放间隔"},model:{value:t.interval,callback:function(e){t.interval=e},expression:"interval"}},[r("Option",{attrs:{value:4}},[t._v("4秒")]),r("Option",{attrs:{value:3}},[t._v("3秒")]),r("Option",{attrs:{value:2}},[t._v("2秒")]),r("Option",{attrs:{value:0}},[t._v("0秒")])],1)],1),r("Col",{attrs:{span:"3"}},[r("Button",{attrs:{type:"primary"},on:{click:t.handlePlayAll}},[t._v("播放本页音频")])],1)],1),r("Row",{staticClass:"margin-bottom-10",attrs:{type:"flex",justify:"center"}},[r("Col",[r("Page",{attrs:{current:t.page.current,total:t.page.total,"page-size":t.page.pageSize},on:{"on-change":t.handlePageChange}})],1)],1),r("Table",{staticClass:"margin-bottom-10",attrs:{columns:t.columns,data:t.words,size:"large"}}),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",[r("Page",{attrs:{current:t.page.current,total:t.page.total,"page-size":t.page.pageSize},on:{"on-change":t.handlePageChange}})],1)],1),r("remark-modal",{attrs:{word:t.remark.word,remark:t.remark.remark,visiable:t.remark.visiable},on:{success:t.handleRemarkSuccess}})],1)},o=[];r("ac4d"),r("8a81"),r("ac6a"),r("96cf");function a(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t,e){try{var r=a[t](e),i=r.value}catch(t){return void o(t)}r.done?n(i):Promise.resolve(i).then(c,s)}function c(t){i("next",t)}function s(t){i("throw",t)}c()})}}var i=r("1734"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.sentences,function(e,n){return r("div",{key:n,staticClass:"sentence-box"},[r("div",{staticClass:"english"},[r("span",{domProps:{innerHTML:t._s(e.english)}}),r("Voice",{attrs:{content:e.url,kind:"sentence"}})],1),r("p",{staticClass:"chinese"},[t._v(t._s(e.chinese))])])}))},s=[],u=r("2c29"),l={name:"sentence",components:{Voice:u["a"]},props:{sentences:Array}},f=l,h=(r("010c"),r("2877")),p=Object(h["a"])(f,c,s,!1,null,"151b2f99",null);p.options.__file="sentence.vue";var v=p.exports,d=r("992f"),y={name:"word",components:{RemarkModal:i["a"],Sentence:v},data:function(){var t=this;return{star:5,interval:0,words:[],page:{current:1,total:0,pageSize:40},remark:{word:"",remark:"",visiable:!1},columns:[{type:"expand",width:50,render:function(t,e){return t(v,{props:{sentences:e.row.sentences}})}},{key:"id",title:"id",width:80},{key:"word",title:"word",width:130},{key:"phonetics",title:"phonetics",width:180,render:function(t,e){return t("div",[t(u["a"],{props:{content:e.row.word}}),t("span",e.row.phonetics+"  ")])}},{key:"senses",title:"senses"},{key:"attrs",title:"attrs"},{key:"remark",title:"remark"},{title:"actions",render:function(e,r){return e("ButtonGroup",[e("Button",{on:{click:function(){t.remark.word=r.row.word,t.remark.remark=r.row.remark,t.remark.visiable=!0}}},"笔记")])}}]}},methods:{handleRemarkSuccess:function(){this.remark.visiable=!1,this.getWords()},handleStarChange:function(t){this.page.current=1,this.getWords()},getWords:function(){var t=this;this.$http.get("words",{star:this.star,page:this.page.current}).then(function(e){var r=e.data,n=e.meta;t.words=r,t.page.current=n.current_page,t.page.total=n.total})},handlePageChange:function(t){this.page.current=t,this.getWords()},handlePlayAll:function(){var t=a(regeneratorRuntime.mark(function t(){var e,r,n,o,a,i,c,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=function(t){return new Promise(function(e,r){var n=new Audio(d["a"]+"words/"+t+"/play");n.onerror=function(){r(new Error)},n.onended=function(){setTimeout(function(){e()},1e3*s.interval)},n.play()})},r=!0,n=!1,o=void 0,t.prev=4,a=this.words[Symbol.iterator]();case 6:if(r=(i=a.next()).done){t.next=13;break}return c=i.value,t.next=10,e(c.word);case 10:r=!0,t.next=6;break;case 13:t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](4),n=!0,o=t.t0;case 19:t.prev=19,t.prev=20,r||null==a.return||a.return();case 22:if(t.prev=22,!n){t.next=25;break}throw o;case 25:return t.finish(22);case 26:return t.finish(19);case 27:case"end":return t.stop()}},t,this,[[4,15,19,27],[20,,22,26]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){this.getWords()}},g=y,m=(r("c4ec"),Object(h["a"])(g,n,o,!1,null,null,null));m.options.__file="words.vue";e["default"]=m.exports},c4ec:function(t,e,r){"use strict";var n=r("3130"),o=r.n(n);o.a},d4c0:function(t,e,r){var n=r("0d58"),o=r("2621"),a=r("52a7");t.exports=function(t){var e=n(t),r=o.f;if(r){var i,c=r(t),s=a.f,u=0;while(c.length>u)s.call(t,i=c[u++])&&e.push(i)}return e}},e32a:function(t,e,r){}}]);