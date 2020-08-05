function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){s=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return ue}));var n=r("fXoL"),s=r("LRne"),a=r("HDdC"),o=r("bOdf"),i=r("pLZG"),u=r("lJxs"),l=r("ofXK"),c=function e(){_classCallCheck(this,e)},h=function e(){_classCallCheck(this,e)},d=function(){function e(t){var r=this;_classCallCheck(this,e),this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){r.headers=new Map,t.split("\n").forEach((function(e){var t=e.indexOf(":");if(t>0){var n=e.slice(0,t),s=n.toLowerCase(),a=e.slice(t+1).trim();r.maybeSetNormalizedName(n,s),r.headers.has(s)?r.headers.get(s).push(a):r.headers.set(s,[a])}}))}:function(){r.headers=new Map,Object.keys(t).forEach((function(e){var n=t[e],s=e.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(r.headers.set(s,n),r.maybeSetNormalizedName(e,s))}))}:this.headers=new Map}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.headers.has(e.toLowerCase())}},{key:"get",value:function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}},{key:"keys",value:function(){return this.init(),Array.from(this.normalizedNames.values())}},{key:"getAll",value:function(e){return this.init(),this.headers.get(e.toLowerCase())||null}},{key:"append",value:function(e,t){return this.clone({name:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({name:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({name:e,value:t,op:"d"})}},{key:"maybeSetNormalizedName",value:function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}},{key:"init",value:function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((function(e){return t.applyUpdate(e)})),this.lazyUpdate=null))}},{key:"copyFrom",value:function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach((function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))}))}},{key:"clone",value:function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r}},{key:"applyUpdate",value:function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var n=("a"===e.op?this.headers.get(t):void 0)||[];n.push.apply(n,_toConsumableArray(r)),this.headers.set(t,n);break;case"d":var s=e.value;if(s){var a=this.headers.get(t);if(!a)return;0===(a=a.filter((function(e){return-1===s.indexOf(e)}))).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else this.headers.delete(t),this.normalizedNames.delete(t)}}},{key:"forEach",value:function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach((function(r){return e(t.normalizedNames.get(r),t.headers.get(r))}))}}]),e}(),p=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"encodeKey",value:function(e){return f(e)}},{key:"encodeValue",value:function(e){return f(e)}},{key:"decodeKey",value:function(e){return decodeURIComponent(e)}},{key:"decodeValue",value:function(e){return decodeURIComponent(e)}}]),e}();function f(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var y=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),this.updates=null,this.cloneFrom=null,this.encoder=r.encoder||new p,r.fromString){if(r.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var r=new Map;return e.length>0&&e.split("&").forEach((function(e){var n=e.indexOf("="),s=_slicedToArray(-1==n?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,n)),t.decodeValue(e.slice(n+1))],2),a=s[0],o=s[1],i=r.get(a)||[];i.push(o),r.set(a,i)})),r}(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach((function(e){var n=r.fromObject[e];t.map.set(e,Array.isArray(n)?n:[n])}))):this.map=null}return _createClass(e,[{key:"has",value:function(e){return this.init(),this.map.has(e)}},{key:"get",value:function(e){this.init();var t=this.map.get(e);return t?t[0]:null}},{key:"getAll",value:function(e){return this.init(),this.map.get(e)||null}},{key:"keys",value:function(){return this.init(),Array.from(this.map.keys())}},{key:"append",value:function(e,t){return this.clone({param:e,value:t,op:"a"})}},{key:"set",value:function(e,t){return this.clone({param:e,value:t,op:"s"})}},{key:"delete",value:function(e,t){return this.clone({param:e,value:t,op:"d"})}},{key:"toString",value:function(){var e=this;return this.init(),this.keys().map((function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map((function(t){return r+"="+e.encoder.encodeValue(t)})).join("&")})).filter((function(e){return""!==e})).join("&")}},{key:"clone",value:function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r}},{key:"init",value:function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((function(t){return e.map.set(t,e.cloneFrom.map.get(t))})),this.updates.forEach((function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],s=n.indexOf(t.value);-1!==s&&n.splice(s,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}})),this.cloneFrom=this.updates=null)}}]),e}();function v(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function b(e){return"undefined"!=typeof Blob&&e instanceof Blob}function m(e){return"undefined"!=typeof FormData&&e instanceof FormData}var g=function(){function e(t,r,n,s){var a;if(_classCallCheck(this,e),this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,a=s):a=n,a&&(this.reportProgress=!!a.reportProgress,this.withCredentials=!!a.withCredentials,a.responseType&&(this.responseType=a.responseType),a.headers&&(this.headers=a.headers),a.params&&(this.params=a.params)),this.headers||(this.headers=new d),this.params){var o=this.params.toString();if(0===o.length)this.urlWithParams=r;else{var i=r.indexOf("?");this.urlWithParams=r+(-1===i?"?":i<r.length-1?"&":"")+o}}else this.params=new y,this.urlWithParams=r}return _createClass(e,[{key:"serializeBody",value:function(){return null===this.body?null:v(this.body)||b(this.body)||m(this.body)||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}},{key:"detectContentTypeHeader",value:function(){return null===this.body||m(this.body)?null:b(this.body)?this.body.type||null:v(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}},{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,a=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,i=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,l=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce((function(e,r){return e.set(r,t.setHeaders[r])}),u)),t.setParams&&(l=Object.keys(t.setParams).reduce((function(e,r){return e.set(r,t.setParams[r])}),l)),new e(r,n,a,{params:l,headers:u,reportProgress:i,responseType:s,withCredentials:o})}}]),e}(),k=function(){var e={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};return e[e.Sent]="Sent",e[e.UploadProgress]="UploadProgress",e[e.ResponseHeader]="ResponseHeader",e[e.DownloadProgress]="DownloadProgress",e[e.Response]="Response",e[e.User]="User",e}(),C=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"OK";_classCallCheck(this,e),this.headers=t.headers||new d,this.status=void 0!==t.status?t.status:r,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300},w=function(e){_inherits(r,e);var t=_createSuper(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,r),(e=t.call(this,n)).type=k.ResponseHeader,e}return _createClass(r,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new r({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),r}(C),_=function(e){_inherits(r,e);var t=_createSuper(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return _classCallCheck(this,r),(e=t.call(this,n)).type=k.Response,e.body=void 0!==n.body?n.body:null,e}return _createClass(r,[{key:"clone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new r({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}]),r}(C),T=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var n;return _classCallCheck(this,r),(n=t.call(this,e,0,"Unknown Error")).name="HttpErrorResponse",n.ok=!1,n.message=n.status>=200&&n.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):"Http failure response for ".concat(e.url||"(unknown url)",": ").concat(e.status," ").concat(e.statusText),n.error=e.error||null,n}return r}(C);function O(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}var E,S,A,P,R,j,x,I,N,H,U=((E=function(){function e(t){_classCallCheck(this,e),this.handler=t}return _createClass(e,[{key:"request",value:function(e,t){var r,n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof g)r=e;else{var l=void 0;l=a.headers instanceof d?a.headers:new d(a.headers);var c=void 0;a.params&&(c=a.params instanceof y?a.params:new y({fromObject:a.params})),r=new g(e,t,void 0!==a.body?a.body:null,{headers:l,params:c,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials})}var h=Object(s.a)(r).pipe(Object(o.a)((function(e){return n.handler.handle(e)})));if(e instanceof g||"events"===a.observe)return h;var p=h.pipe(Object(i.a)((function(e){return e instanceof _})));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return p.pipe(Object(u.a)((function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return p.pipe(Object(u.a)((function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return p.pipe(Object(u.a)((function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));case"json":default:return p.pipe(Object(u.a)((function(e){return e.body})))}case"response":return p;default:throw new Error("Unreachable: unhandled observe type ".concat(a.observe,"}"))}}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",e,t)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("GET",e,t)}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("HEAD",e,t)}},{key:"jsonp",value:function(e,t){return this.request("JSONP",e,{params:(new y).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}},{key:"options",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("OPTIONS",e,t)}},{key:"patch",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",e,O(r,t))}},{key:"post",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",e,O(r,t))}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",e,O(r,t))}}]),e}()).\u0275fac=function(e){return new(e||E)(n.Kb(c))},E.\u0275prov=n.Bb({token:E,factory:E.\u0275fac}),E),z=function(){function e(t,r){_classCallCheck(this,e),this.next=t,this.interceptor=r}return _createClass(e,[{key:"handle",value:function(e){return this.interceptor.intercept(e,this.next)}}]),e}(),L=new n.q("HTTP_INTERCEPTORS"),F=((S=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"intercept",value:function(e,t){return t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||S)},S.\u0275prov=n.Bb({token:S,factory:S.\u0275fac}),S),K=/^\)\]\}',?\n/,B=function e(){_classCallCheck(this,e)},q=((P=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function(){return new XMLHttpRequest}}]),e}()).\u0275fac=function(e){return new(e||P)},P.\u0275prov=n.Bb({token:P,factory:P.\u0275fac}),P),D=((A=function(){function e(t){_classCallCheck(this,e),this.xhrFactory=t}return _createClass(e,[{key:"handle",value:function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new a.a((function(r){var n=t.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((function(e,t){return n.setRequestHeader(e,t.join(","))})),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var s=e.detectContentTypeHeader();null!==s&&n.setRequestHeader("Content-Type",s)}if(e.responseType){var a=e.responseType.toLowerCase();n.responseType="json"!==a?a:"text"}var o=e.serializeBody(),i=null,u=function(){if(null!==i)return i;var t=1223===n.status?204:n.status,r=n.statusText||"OK",s=new d(n.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return i=new w({headers:s,status:t,statusText:r,url:a})},l=function(){var t=u(),s=t.headers,a=t.status,o=t.statusText,i=t.url,l=null;204!==a&&(l=void 0===n.response?n.responseText:n.response),0===a&&(a=l?200:0);var c=a>=200&&a<300;if("json"===e.responseType&&"string"==typeof l){var h=l;l=l.replace(K,"");try{l=""!==l?JSON.parse(l):null}catch(d){l=h,c&&(c=!1,l={error:d,text:l})}}c?(r.next(new _({body:l,headers:s,status:a,statusText:o,url:i||void 0})),r.complete()):r.error(new T({error:l,headers:s,status:a,statusText:o,url:i||void 0}))},c=function(e){var t=u().url,s=new T({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error",url:t||void 0});r.error(s)},h=!1,p=function(t){h||(r.next(u()),h=!0);var s={type:k.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(s.total=t.total),"text"===e.responseType&&n.responseText&&(s.partialText=n.responseText),r.next(s)},f=function(e){var t={type:k.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return n.addEventListener("load",l),n.addEventListener("error",c),e.reportProgress&&(n.addEventListener("progress",p),null!==o&&n.upload&&n.upload.addEventListener("progress",f)),n.send(o),r.next({type:k.Sent}),function(){n.removeEventListener("error",c),n.removeEventListener("load",l),e.reportProgress&&(n.removeEventListener("progress",p),null!==o&&n.upload&&n.upload.removeEventListener("progress",f)),n.abort()}}))}}]),e}()).\u0275fac=function(e){return new(e||A)(n.Kb(B))},A.\u0275prov=n.Bb({token:A,factory:A.\u0275fac}),A),M=new n.q("XSRF_COOKIE_NAME"),X=new n.q("XSRF_HEADER_NAME"),J=function e(){_classCallCheck(this,e)},W=((H=function(){function e(t,r,n){_classCallCheck(this,e),this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return _createClass(e,[{key:"getToken",value:function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(l.q)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}]),e}()).\u0275fac=function(e){return new(e||H)(n.Kb(l.d),n.Kb(n.B),n.Kb(M))},H.\u0275prov=n.Bb({token:H,factory:H.\u0275fac}),H),V=((N=function(){function e(t,r){_classCallCheck(this,e),this.tokenService=t,this.headerName=r}return _createClass(e,[{key:"intercept",value:function(e,t){var r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);var n=this.tokenService.getToken();return null===n||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,n)})),t.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||N)(n.Kb(J),n.Kb(X))},N.\u0275prov=n.Bb({token:N,factory:N.\u0275fac}),N),G=((I=function(){function e(t,r){_classCallCheck(this,e),this.backend=t,this.injector=r,this.chain=null}return _createClass(e,[{key:"handle",value:function(e){if(null===this.chain){var t=this.injector.get(L,[]);this.chain=t.reduceRight((function(e,t){return new z(e,t)}),this.backend)}return this.chain.handle(e)}}]),e}()).\u0275fac=function(e){return new(e||I)(n.Kb(h),n.Kb(n.r))},I.\u0275prov=n.Bb({token:I,factory:I.\u0275fac}),I),Z=((x=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"disable",value:function(){return{ngModule:e,providers:[{provide:V,useClass:F}]}}},{key:"withOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ngModule:e,providers:[t.cookieName?{provide:M,useValue:t.cookieName}:[],t.headerName?{provide:X,useValue:t.headerName}:[]]}}}]),e}()).\u0275mod=n.Db({type:x}),x.\u0275inj=n.Cb({factory:function(e){return new(e||x)},providers:[V,{provide:L,useExisting:V,multi:!0},{provide:J,useClass:W},{provide:M,useValue:"XSRF-TOKEN"},{provide:X,useValue:"X-XSRF-TOKEN"}]}),x),$=((j=function e(){_classCallCheck(this,e)}).\u0275mod=n.Db({type:j}),j.\u0275inj=n.Cb({factory:function(e){return new(e||j)},providers:[U,{provide:c,useClass:G},D,{provide:h,useExisting:D},q,{provide:B,useExisting:q}],imports:[[Z.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),j),Y=((R=function(){function e(t){_classCallCheck(this,e),this.http=t,this.apiUrl="https://api.github.com/users"}return _createClass(e,[{key:"getUsers",value:function(){return this.http.get(this.apiUrl+"?per_page=10")}},{key:"getUser",value:function(e){return this.http.get("".concat(this.apiUrl,"/").concat(e))}}]),e}()).\u0275fac=function(e){return new(e||R)(n.Kb(U))},R.\u0275prov=n.Bb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),Q=r("tyNb");function ee(e,t){if(1&e&&(n.Ib(0,"div",4),n.Ib(1,"div",5),n.Ib(2,"div",6),n.Ib(3,"a",7),n.Zb(4),n.Hb(),n.Hb(),n.Hb(),n.Hb()),2&e){var r=t.$implicit;n.wb(3),n.Ub("routerLink","/users/",r.login,""),n.wb(1),n.ac(r.login)}}function te(e,t){if(1&e&&(n.Ib(0,"div",3),n.Gb(1,"img",4),n.Ib(2,"h2"),n.Zb(3),n.Hb(),n.Hb()),2&e){var r=n.Qb();n.wb(1),n.Tb("src",r.user.avatar_url,n.Wb),n.wb(2),n.ac(r.user.login)}}var re,ne,se,ae,oe=[{path:"",component:(ne=function(){function e(t){_classCallCheck(this,e),this.userService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.users=this.userService.getUsers()}}]),e}(),ne.\u0275fac=function(e){return new(e||ne)(n.Fb(Y))},ne.\u0275cmp=n.zb({type:ne,selectors:[["app-user-list"]],decls:5,vars:3,consts:[[1,"section"],[1,"container"],[1,"columns","is-multiline"],["class","column is-4",4,"ngFor","ngForOf"],[1,"column","is-4"],[1,"card"],[1,"card-content"],[3,"routerLink"]],template:function(e,t){1&e&&(n.Ib(0,"section",0),n.Ib(1,"div",1),n.Ib(2,"div",2),n.Yb(3,ee,5,2,"div",3),n.Rb(4,"async"),n.Hb(),n.Hb(),n.Hb()),2&e&&(n.wb(3),n.Tb("ngForOf",n.Sb(4,1,t.users)))},directives:[l.i,Q.c],pipes:[l.b],styles:[""]}),ne)},{path:":username",component:(re=function(){function e(t,r){_classCallCheck(this,e),this.route=t,this.userService=r}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.userService.getUser(t.username).subscribe((function(t){return e.user=t}))}))}}]),e}(),re.\u0275fac=function(e){return new(e||re)(n.Fb(Q.a),n.Fb(Y))},re.\u0275cmp=n.zb({type:re,selectors:[["app-user-single"]],decls:3,vars:1,consts:[[1,"section"],[1,"container"],["class","card",4,"ngIf"],[1,"card"],[3,"src"]],template:function(e,t){1&e&&(n.Ib(0,"section",0),n.Ib(1,"div",1),n.Yb(2,te,4,2,"div",2),n.Hb(),n.Hb()),2&e&&(n.wb(2),n.Tb("ngIf",t.user))},directives:[l.j],styles:[""]}),re)}],ie=((ae=function e(){_classCallCheck(this,e)}).\u0275mod=n.Db({type:ae}),ae.\u0275inj=n.Cb({factory:function(e){return new(e||ae)},imports:[[Q.d.forChild(oe)],Q.d]}),ae),ue=((se=function e(){_classCallCheck(this,e)}).\u0275mod=n.Db({type:se}),se.\u0275inj=n.Cb({factory:function(e){return new(e||se)},providers:[Y],imports:[[l.c,ie,$]]}),se)}}]);