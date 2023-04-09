import{J as me,ap as be,C as Ee,F as _e,G as Oe}from"./index-5e9194c1.js";class re{}class Tt extends re{constructor(e){super()}}class Le extends re{constructor(){super()}}class Te extends Le{constructor(e){super()}}const Ae="^https?:",xe="^wss?:";function Re(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function ne(t,e){const r=Re(t);return typeof r>"u"?!1:new RegExp(e).test(r)}function J(t){return ne(t,Ae)}function At(t){return ne(t,xe)}function xt(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function oe(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Rt(t){return oe(t)&&"method"in t}function Se(t){return oe(t)&&(Pe(t)||ie(t))}function Pe(t){return"result"in t}function ie(t){return"error"in t}var B={},Be={get exports(){return B},set exports(t){B=t}},R=typeof Reflect=="object"?Reflect:null,q=R&&typeof R.apply=="function"?R.apply:function(e,r,o){return Function.prototype.apply.call(e,r,o)},N;R&&typeof R.ownKeys=="function"?N=R.ownKeys:Object.getOwnPropertySymbols?N=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:N=function(e){return Object.getOwnPropertyNames(e)};function Ce(t){console&&console.warn&&console.warn(t)}var se=Number.isNaN||function(e){return e!==e};function h(){h.init.call(this)}Be.exports=h;B.once=De;h.EventEmitter=h;h.prototype._events=void 0;h.prototype._eventsCount=0;h.prototype._maxListeners=void 0;var V=10;function j(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(h,"defaultMaxListeners",{enumerable:!0,get:function(){return V},set:function(t){if(typeof t!="number"||t<0||se(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");V=t}});h.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};h.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||se(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function ae(t){return t._maxListeners===void 0?h.defaultMaxListeners:t._maxListeners}h.prototype.getMaxListeners=function(){return ae(this)};h.prototype.emit=function(e){for(var r=[],o=1;o<arguments.length;o++)r.push(arguments[o]);var i=e==="error",a=this._events;if(a!==void 0)i=i&&a.error===void 0;else if(!i)return!1;if(i){var c;if(r.length>0&&(c=r[0]),c instanceof Error)throw c;var u=new Error("Unhandled error."+(c?" ("+c.message+")":""));throw u.context=c,u}var _=a[e];if(_===void 0)return!1;if(typeof _=="function")q(_,this,r);else for(var x=_.length,C=le(_,x),o=0;o<x;++o)q(C[o],this,r);return!0};function ce(t,e,r,o){var i,a,c;if(j(r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),c=a[e]),c===void 0)c=a[e]=r,++t._eventsCount;else if(typeof c=="function"?c=a[e]=o?[r,c]:[c,r]:o?c.unshift(r):c.push(r),i=ae(t),i>0&&c.length>i&&!c.warned){c.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=t,u.type=e,u.count=c.length,Ce(u)}return t}h.prototype.addListener=function(e,r){return ce(this,e,r,!1)};h.prototype.on=h.prototype.addListener;h.prototype.prependListener=function(e,r){return ce(this,e,r,!0)};function Me(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function fe(t,e,r){var o={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=Me.bind(o);return i.listener=r,o.wrapFn=i,i}h.prototype.once=function(e,r){return j(r),this.on(e,fe(this,e,r)),this};h.prototype.prependOnceListener=function(e,r){return j(r),this.prependListener(e,fe(this,e,r)),this};h.prototype.removeListener=function(e,r){var o,i,a,c,u;if(j(r),i=this._events,i===void 0)return this;if(o=i[e],o===void 0)return this;if(o===r||o.listener===r)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,o.listener||r));else if(typeof o!="function"){for(a=-1,c=o.length-1;c>=0;c--)if(o[c]===r||o[c].listener===r){u=o[c].listener,a=c;break}if(a<0)return this;a===0?o.shift():We(o,a),o.length===1&&(i[e]=o[0]),i.removeListener!==void 0&&this.emit("removeListener",e,u||r)}return this};h.prototype.off=h.prototype.removeListener;h.prototype.removeAllListeners=function(e){var r,o,i;if(o=this._events,o===void 0)return this;if(o.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):o[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete o[e]),this;if(arguments.length===0){var a=Object.keys(o),c;for(i=0;i<a.length;++i)c=a[i],c!=="removeListener"&&this.removeAllListeners(c);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=o[e],typeof r=="function")this.removeListener(e,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(e,r[i]);return this};function ue(t,e,r){var o=t._events;if(o===void 0)return[];var i=o[e];return i===void 0?[]:typeof i=="function"?r?[i.listener||i]:[i]:r?Ne(i):le(i,i.length)}h.prototype.listeners=function(e){return ue(this,e,!0)};h.prototype.rawListeners=function(e){return ue(this,e,!1)};h.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):he.call(t,e)};h.prototype.listenerCount=he;function he(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==void 0)return r.length}return 0}h.prototype.eventNames=function(){return this._eventsCount>0?N(this._events):[]};function le(t,e){for(var r=new Array(e),o=0;o<e;++o)r[o]=t[o];return r}function We(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function Ne(t){for(var e=new Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}function De(t,e){return new Promise(function(r,o){function i(c){t.removeListener(e,a),o(c)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",i),r([].slice.call(arguments))}de(t,e,a,{once:!0}),e!=="error"&&je(t,i,{once:!0})})}function je(t,e,r){typeof t.on=="function"&&de(t,"error",e,r)}function de(t,e,r,o){if(typeof t.on=="function")o.once?t.once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(a){o.once&&t.removeEventListener(e,i),r(a)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}var X=globalThis&&globalThis.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var o=0,i=e.length,a;o<i;o++)(a||!(o in e))&&(a||(a=Array.prototype.slice.call(e,0,o)),a[o]=e[o]);return t.concat(a||Array.prototype.slice.call(e))},Ie=function(){function t(e,r,o){this.name=e,this.version=r,this.os=o,this.type="browser"}return t}(),Fe=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),Ue=function(){function t(e,r,o,i){this.name=e,this.version=r,this.os=o,this.bot=i,this.type="bot-device"}return t}(),ke=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),He=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),$e=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Je=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,G=3,qe=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",$e]],K=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function St(t){return t?z(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new He:typeof navigator<"u"?z(navigator.userAgent):Ge()}function Ve(t){return t!==""&&qe.reduce(function(e,r){var o=r[0],i=r[1];if(e)return e;var a=i.exec(t);return!!a&&[o,a]},!1)}function z(t){var e=Ve(t);if(!e)return null;var r=e[0],o=e[1];if(r==="searchbot")return new ke;var i=o[1]&&o[1].split(".").join("_").split("_").slice(0,3);i?i.length<G&&(i=X(X([],i,!0),Ke(G-i.length),!0)):i=[];var a=i.join("."),c=Xe(t),u=Je.exec(t);return u&&u[1]?new Ue(r,a,c,u[1]):new Ie(r,a,c)}function Xe(t){for(var e=0,r=K.length;e<r;e++){var o=K[e],i=o[0],a=o[1],c=a.exec(t);if(c)return i}return null}function Ge(){var t=typeof process<"u"&&process.version;return t?new Fe(process.version.slice(1)):null}function Ke(t){for(var e=[],r=0;r<t;r++)e.push("0");return e}var d={};Object.defineProperty(d,"__esModule",{value:!0});var ze=d.getLocalStorage=yt=d.getLocalStorageOrThrow=pt=d.getCrypto=lt=d.getCryptoOrThrow=ut=d.getLocation=ct=d.getLocationOrThrow=st=d.getNavigator=ot=d.getNavigatorOrThrow=rt=d.getDocument=et=d.getDocumentOrThrow=Ye=d.getFromWindowOrThrow=Qe=d.getFromWindow=void 0;function A(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var Qe=d.getFromWindow=A;function S(t){const e=A(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var Ye=d.getFromWindowOrThrow=S;function Ze(){return S("document")}var et=d.getDocumentOrThrow=Ze;function tt(){return A("document")}var rt=d.getDocument=tt;function nt(){return S("navigator")}var ot=d.getNavigatorOrThrow=nt;function it(){return A("navigator")}var st=d.getNavigator=it;function at(){return S("location")}var ct=d.getLocationOrThrow=at;function ft(){return A("location")}var ut=d.getLocation=ft;function ht(){return S("crypto")}var lt=d.getCryptoOrThrow=ht;function dt(){return A("crypto")}var pt=d.getCrypto=dt;function vt(){return S("localStorage")}var yt=d.getLocalStorageOrThrow=vt;function gt(){return A("localStorage")}ze=d.getLocalStorage=gt;var k={};Object.defineProperty(k,"__esModule",{value:!0});var wt=k.getWindowMetadata=void 0;const Q=d;function mt(){let t,e;try{t=Q.getDocumentOrThrow(),e=Q.getLocationOrThrow()}catch{return null}function r(){const g=t.getElementsByTagName("link"),b=[];for(let m=0;m<g.length;m++){const p=g[m],O=p.getAttribute("rel");if(O&&O.toLowerCase().indexOf("icon")>-1){const v=p.getAttribute("href");if(v)if(v.toLowerCase().indexOf("https:")===-1&&v.toLowerCase().indexOf("http:")===-1&&v.indexOf("//")!==0){let L=e.protocol+"//"+e.host;if(v.indexOf("/")===0)L+=v;else{const M=e.pathname.split("/");M.pop();const I=M.join("/");L+=I+"/"+v}b.push(L)}else if(v.indexOf("//")===0){const L=e.protocol+v;b.push(L)}else b.push(v)}}return b}function o(...g){const b=t.getElementsByTagName("meta");for(let m=0;m<b.length;m++){const p=b[m],O=["itemprop","property","name"].map(v=>p.getAttribute(v)).filter(v=>v?g.includes(v):!1);if(O.length&&O){const v=p.getAttribute("content");if(v)return v}}return""}function i(){let g=o("name","og:site_name","og:title","twitter:title");return g||(g=t.title),g}function a(){return o("description","og:description","twitter:description","keywords")}const c=i(),u=a(),_=e.origin,x=r();return{description:u,url:_,icons:x,name:c}}wt=k.getWindowMetadata=mt;var Pt=function(t,e){for(var r={},o=Object.keys(t),i=Array.isArray(e),a=0;a<o.length;a++){var c=o[a],u=t[c];(i?e.indexOf(c)!==-1:e(c,u,t))&&(r[c]=u)}return r};function bt(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return JSON.parse(t)}catch{return t}}function Y(t){return typeof t=="string"?t:JSON.stringify(t)}class Bt extends Te{constructor(e){super(e),this.events=new B.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async request(e,r){return this.requestStrict(me(e.method,e.params||[]),r)}async requestStrict(e,r){return new Promise(async(o,i)=>{if(!this.connection.connected)try{await this.open()}catch(a){i(a)}this.events.on(`${e.id}`,a=>{ie(a)?i(a.error):o(a.result)});try{await this.connection.send(e,r)}catch(a){i(a)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),Se(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}var D={},Et={get exports(){return D},set exports(t){D=t}};(function(t,e){var r=typeof self<"u"?self:Ee,o=function(){function a(){this.fetch=!1,this.DOMException=r.DOMException}return a.prototype=r,new a}();(function(a){(function(c){var u={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function _(n){return n&&DataView.prototype.isPrototypeOf(n)}if(u.arrayBuffer)var x=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],C=ArrayBuffer.isView||function(n){return n&&x.indexOf(Object.prototype.toString.call(n))>-1};function g(n){if(typeof n!="string"&&(n=String(n)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(n))throw new TypeError("Invalid character in header field name");return n.toLowerCase()}function b(n){return typeof n!="string"&&(n=String(n)),n}function m(n){var s={next:function(){var f=n.shift();return{done:f===void 0,value:f}}};return u.iterable&&(s[Symbol.iterator]=function(){return s}),s}function p(n){this.map={},n instanceof p?n.forEach(function(s,f){this.append(f,s)},this):Array.isArray(n)?n.forEach(function(s){this.append(s[0],s[1])},this):n&&Object.getOwnPropertyNames(n).forEach(function(s){this.append(s,n[s])},this)}p.prototype.append=function(n,s){n=g(n),s=b(s);var f=this.map[n];this.map[n]=f?f+", "+s:s},p.prototype.delete=function(n){delete this.map[g(n)]},p.prototype.get=function(n){return n=g(n),this.has(n)?this.map[n]:null},p.prototype.has=function(n){return this.map.hasOwnProperty(g(n))},p.prototype.set=function(n,s){this.map[g(n)]=b(s)},p.prototype.forEach=function(n,s){for(var f in this.map)this.map.hasOwnProperty(f)&&n.call(s,this.map[f],f,this)},p.prototype.keys=function(){var n=[];return this.forEach(function(s,f){n.push(f)}),m(n)},p.prototype.values=function(){var n=[];return this.forEach(function(s){n.push(s)}),m(n)},p.prototype.entries=function(){var n=[];return this.forEach(function(s,f){n.push([f,s])}),m(n)},u.iterable&&(p.prototype[Symbol.iterator]=p.prototype.entries);function O(n){if(n.bodyUsed)return Promise.reject(new TypeError("Already read"));n.bodyUsed=!0}function v(n){return new Promise(function(s,f){n.onload=function(){s(n.result)},n.onerror=function(){f(n.error)}})}function L(n){var s=new FileReader,f=v(s);return s.readAsArrayBuffer(n),f}function M(n){var s=new FileReader,f=v(s);return s.readAsText(n),f}function I(n){for(var s=new Uint8Array(n),f=new Array(s.length),w=0;w<s.length;w++)f[w]=String.fromCharCode(s[w]);return f.join("")}function H(n){if(n.slice)return n.slice(0);var s=new Uint8Array(n.byteLength);return s.set(new Uint8Array(n)),s.buffer}function $(){return this.bodyUsed=!1,this._initBody=function(n){this._bodyInit=n,n?typeof n=="string"?this._bodyText=n:u.blob&&Blob.prototype.isPrototypeOf(n)?this._bodyBlob=n:u.formData&&FormData.prototype.isPrototypeOf(n)?this._bodyFormData=n:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)?this._bodyText=n.toString():u.arrayBuffer&&u.blob&&_(n)?(this._bodyArrayBuffer=H(n.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(n)||C(n))?this._bodyArrayBuffer=H(n):this._bodyText=n=Object.prototype.toString.call(n):this._bodyText="",this.headers.get("content-type")||(typeof n=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(n)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var n=O(this);if(n)return n;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?O(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(L)}),this.text=function(){var n=O(this);if(n)return n;if(this._bodyBlob)return M(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(I(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(ye)}),this.json=function(){return this.text().then(JSON.parse)},this}var pe=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ve(n){var s=n.toUpperCase();return pe.indexOf(s)>-1?s:n}function T(n,s){s=s||{};var f=s.body;if(n instanceof T){if(n.bodyUsed)throw new TypeError("Already read");this.url=n.url,this.credentials=n.credentials,s.headers||(this.headers=new p(n.headers)),this.method=n.method,this.mode=n.mode,this.signal=n.signal,!f&&n._bodyInit!=null&&(f=n._bodyInit,n.bodyUsed=!0)}else this.url=String(n);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new p(s.headers)),this.method=ve(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&f)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(f)}T.prototype.clone=function(){return new T(this,{body:this._bodyInit})};function ye(n){var s=new FormData;return n.trim().split("&").forEach(function(f){if(f){var w=f.split("="),y=w.shift().replace(/\+/g," "),l=w.join("=").replace(/\+/g," ");s.append(decodeURIComponent(y),decodeURIComponent(l))}}),s}function ge(n){var s=new p,f=n.replace(/\r?\n[\t ]+/g," ");return f.split(/\r?\n/).forEach(function(w){var y=w.split(":"),l=y.shift().trim();if(l){var W=y.join(":").trim();s.append(l,W)}}),s}$.call(T.prototype);function E(n,s){s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in s?s.statusText:"OK",this.headers=new p(s.headers),this.url=s.url||"",this._initBody(n)}$.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var n=new E(null,{status:0,statusText:""});return n.type="error",n};var we=[301,302,303,307,308];E.redirect=function(n,s){if(we.indexOf(s)===-1)throw new RangeError("Invalid status code");return new E(null,{status:s,headers:{location:n}})},c.DOMException=a.DOMException;try{new c.DOMException}catch{c.DOMException=function(s,f){this.message=s,this.name=f;var w=Error(s);this.stack=w.stack},c.DOMException.prototype=Object.create(Error.prototype),c.DOMException.prototype.constructor=c.DOMException}function F(n,s){return new Promise(function(f,w){var y=new T(n,s);if(y.signal&&y.signal.aborted)return w(new c.DOMException("Aborted","AbortError"));var l=new XMLHttpRequest;function W(){l.abort()}l.onload=function(){var P={status:l.status,statusText:l.statusText,headers:ge(l.getAllResponseHeaders()||"")};P.url="responseURL"in l?l.responseURL:P.headers.get("X-Request-URL");var U="response"in l?l.response:l.responseText;f(new E(U,P))},l.onerror=function(){w(new TypeError("Network request failed"))},l.ontimeout=function(){w(new TypeError("Network request failed"))},l.onabort=function(){w(new c.DOMException("Aborted","AbortError"))},l.open(y.method,y.url,!0),y.credentials==="include"?l.withCredentials=!0:y.credentials==="omit"&&(l.withCredentials=!1),"responseType"in l&&u.blob&&(l.responseType="blob"),y.headers.forEach(function(P,U){l.setRequestHeader(U,P)}),y.signal&&(y.signal.addEventListener("abort",W),l.onreadystatechange=function(){l.readyState===4&&y.signal.removeEventListener("abort",W)}),l.send(typeof y._bodyInit>"u"?null:y._bodyInit)})}return F.polyfill=!0,a.fetch||(a.fetch=F,a.Headers=p,a.Request=T,a.Response=E),c.Headers=p,c.Request=T,c.Response=E,c.fetch=F,Object.defineProperty(c,"__esModule",{value:!0}),c})({})})(o),o.fetch.ponyfill=!0,delete o.fetch.polyfill;var i=o;e=i.fetch,e.default=i.fetch,e.fetch=i.fetch,e.Headers=i.Headers,e.Request=i.Request,e.Response=i.Response,t.exports=e})(Et,D);const Z=be(D),_t={Accept:"application/json","Content-Type":"application/json"},Ot="POST",ee={headers:_t,method:Ot},te=10;class Ct{constructor(e){if(this.url=e,this.events=new B.EventEmitter,this.isAvailable=!1,this.registering=!1,!J(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,r){this.isAvailable||await this.register();try{const o=Y(e),a=await(await Z(this.url,Object.assign(Object.assign({},ee),{body:o}))).json();this.onPayload({data:a})}catch(o){this.onError(e.id,o)}}async register(e=this.url){if(!J(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const r=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=r||this.events.listenerCount("open")>=r)&&this.events.setMaxListeners(r+1),new Promise((o,i)=>{this.events.once("register_error",a=>{this.resetMaxListeners(),i(a)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return i(new Error("HTTP connection is missing or invalid"));o()})})}this.url=e,this.registering=!0;try{const r=Y({id:1,jsonrpc:"2.0",method:"test",params:[]});await Z(e,Object.assign(Object.assign({},ee),{body:r})),this.onOpen()}catch(r){const o=this.parseError(r);throw this.events.emit("register_error",o),this.onClose(),o}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const r=typeof e.data=="string"?bt(e.data):e.data;this.events.emit("payload",r)}onError(e,r){const o=this.parseError(r),i=o.message||o.toString(),a=_e(e,i);this.events.emit("payload",a)}parseError(e,r=this.url){return Oe(e,r,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>te&&this.events.setMaxListeners(te)}}export{Ct as H,Tt as I,Bt as J,ut as a,rt as b,st as c,St as d,B as e,Pt as f,wt as g,xt as h,At as i,bt as j,Rt as k,Pe as l,ie as m,Se as n,ze as o,Qe as p,Ye as q,et as r,Y as s,ot as t,ct as u,lt as v,pt as w,yt as x};