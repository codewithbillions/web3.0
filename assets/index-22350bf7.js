import{a as ir,o as sr,c as ar,p as cr,q as lr,r as _r,b as ur,t as dr,u as hr,v as fr,w as pr,x as mr,d as gr,j as vr,s as wr,g as br,f as yr,I as kr,e as dt,J as We,H as xr}from"./http-d221fffe.js";import{L as ht,N as P,O as re,P as D,Q as Sr,R as ft,T as Er,U as Cr,V as Ir,W as Rr,X as Tr,Y as pt,Z as Or,$ as Nr,a0 as Mr,a1 as qr,a2 as Lr,a3 as Ur,a4 as $r,a5 as Ar,a6 as Pr,a7 as Dr,a8 as jr,a9 as mt,aa as we,ab as Wr,w as Hr,y as Fr,z as zr,ac as Br,ad as Qr,ae as Vr,af as Jr,ag as Gr,ah as Kr,ai as Zr,aj as gt,ak as vt,al as Yr,am as Xr,D as wt,an as eo,F as He}from"./index-5e9194c1.js";import{b as to}from"./browser-65701ec2.js";const pe="Session currently connected",$="Session currently disconnected",no="Session Rejected",ro="Missing JSON RPC response",oo='JSON-RPC success response must include "result" field',io='JSON-RPC error response must include "error" field',so='JSON RPC request must have valid "method" value',ao='JSON RPC request must have valid "id" value',co="Missing one of the required parameters: bridge / uri / session",Fe="JSON RPC response format is invalid",lo="URI format is invalid",_o="QRCode Modal not provided",ze="User close QRCode Modal",uo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],ho=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Ie=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...ho],be="WALLETCONNECT_DEEPLINK_CHOICE",fo={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};function oe(t){return ht(new Uint8Array(t))}function po(t){return ft(new Uint8Array(t))}function bt(t,e){return P(new Uint8Array(t),!e)}function mo(t){return Er(new Uint8Array(t))}function go(...t){return D(t.map(e=>P(new Uint8Array(e))).join("")).buffer}function yt(t){return re(t).buffer}function vo(t){return Cr(t)}function wo(t,e){return Ir(t,!e)}function bo(t){return Rr(t)}function yo(...t){return Tr(...t)}function ko(t){return pt(t).buffer}function xo(t){return Or(t)}function So(t,e){return Nr(t,!e)}function Eo(t){return Mr(t)}function Co(t){return qr(t)}function kt(t){return D(t).buffer}function Io(t){return Lr(t)}function Ro(t){return Ur(t)}function To(t){return $r(t)}function Oo(t){return Ar(t).buffer}function No(t){return Pr(t)}function xt(t,e){return Sr(Number(t),!e)}const Mo=cr,qo=lr,Lo=_r,Uo=ur,$o=dr,St=ar,Ao=hr,Et=ir,Po=fr,Do=pr,jo=mr,le=sr;function _e(t){return gr(t)}function ue(){const t=_e();return t&&t.os?t.os:void 0}function Ct(){const t=ue();return t?t.toLowerCase().includes("android"):!1}function It(){const t=ue();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Rt(){return ue()?Ct()||It():!1}function Tt(){const t=_e();return t&&t.name?t.name.toLowerCase()==="node":!1}function Ot(){return!Tt()&&!!St()}const Nt=vr,Mt=wr;function Re(t,e){const n=Mt(e),r=le();r&&r.setItem(t,n)}function Te(t){let e=null,n=null;const r=le();return r&&(n=r.getItem(t)),e=n&&Nt(n),e}function Oe(t){const e=le();e&&e.removeItem(t)}function ye(){return br()}function Wo(t){return jr(t)}function Ho(t){return mt(t)}function Fo(t){return we(t)}function zo(t){return Wr(mt(t))}const qt=Dr;function ee(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Bo(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function Lt(t,e){let n;const r=fo[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Ut(t,e){let n;const r=Lt(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function Qo(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Vo(t){const e=t.href.split("?")[0];Re(be,Object.assign(Object.assign({},t),{href:e}))}function $t(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Jo(t,e){let n=t;return e&&(n=e.map(r=>$t(t,r)).filter(Boolean)),n}function Go(t,e){return async(...r)=>new Promise((o,i)=>{const c=(u,d)=>{(u===null||typeof u>"u")&&i(u),o(d)};t.apply(e,[...r,c])})}function At(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Pt="https://registry.walletconnect.com";function Ko(){return Pt+"/api/v2/wallets"}function Zo(){return Pt+"/api/v2/dapps"}function Dt(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Yo(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Dt(n,e))}var Ne={};(function(t){const e=Fr,n=zr,r=Hr,o=yr,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return l=>(f,_)=>{const v=f.length;return _===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,[m(l,a),"[",v,"]"].join("")]:[...f,[m(l,a),"[",m(v,a),"]=",m(_,a)].join("")]};case"bracket":return l=>(f,_)=>_===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,[m(l,a),"[]"].join("")]:[...f,[m(l,a),"[]=",m(_,a)].join("")];case"comma":case"separator":return l=>(f,_)=>_==null||_.length===0?f:f.length===0?[[m(l,a),"=",m(_,a)].join("")]:[[f,m(_,a)].join(a.arrayFormatSeparator)];default:return l=>(f,_)=>_===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,m(l,a)]:[...f,[m(l,a),"=",m(_,a)].join("")]}}function u(a){let l;switch(a.arrayFormat){case"index":return(f,_,v)=>{if(l=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!l){v[f]=_;return}v[f]===void 0&&(v[f]={}),v[f][l[1]]=_};case"bracket":return(f,_,v)=>{if(l=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!l){v[f]=_;return}if(v[f]===void 0){v[f]=[_];return}v[f]=[].concat(v[f],_)};case"comma":case"separator":return(f,_,v)=>{const x=typeof _=="string"&&_.includes(a.arrayFormatSeparator),b=typeof _=="string"&&!x&&s(_,a).includes(a.arrayFormatSeparator);_=b?s(_,a):_;const E=x||b?_.split(a.arrayFormatSeparator).map(T=>s(T,a)):_===null?_:s(_,a);v[f]=E};default:return(f,_,v)=>{if(v[f]===void 0){v[f]=_;return}v[f]=[].concat(v[f],_)}}}function d(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function m(a,l){return l.encode?l.strict?e(a):encodeURIComponent(a):a}function s(a,l){return l.decode?n(a):a}function y(a){return Array.isArray(a)?a.sort():typeof a=="object"?y(Object.keys(a)).sort((l,f)=>Number(l)-Number(f)).map(l=>a[l]):a}function g(a){const l=a.indexOf("#");return l!==-1&&(a=a.slice(0,l)),a}function p(a){let l="";const f=a.indexOf("#");return f!==-1&&(l=a.slice(f)),l}function k(a){a=g(a);const l=a.indexOf("?");return l===-1?"":a.slice(l+1)}function I(a,l){return l.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):l.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,l){l=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},l),d(l.arrayFormatSeparator);const f=u(l),_=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return _;for(const v of a.split("&")){if(v==="")continue;let[x,b]=r(l.decode?v.replace(/\+/g," "):v,"=");b=b===void 0?null:["comma","separator"].includes(l.arrayFormat)?b:s(b,l),f(s(x,l),b,_)}for(const v of Object.keys(_)){const x=_[v];if(typeof x=="object"&&x!==null)for(const b of Object.keys(x))x[b]=I(x[b],l);else _[v]=I(x,l)}return l.sort===!1?_:(l.sort===!0?Object.keys(_).sort():Object.keys(_).sort(l.sort)).reduce((v,x)=>{const b=_[x];return Boolean(b)&&typeof b=="object"&&!Array.isArray(b)?v[x]=y(b):v[x]=b,v},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(a,l)=>{if(!a)return"";l=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},l),d(l.arrayFormatSeparator);const f=b=>l.skipNull&&i(a[b])||l.skipEmptyString&&a[b]==="",_=c(l),v={};for(const b of Object.keys(a))f(b)||(v[b]=a[b]);const x=Object.keys(v);return l.sort!==!1&&x.sort(l.sort),x.map(b=>{const E=a[b];return E===void 0?"":E===null?m(b,l):Array.isArray(E)?E.reduce(_(b),[]).join("&"):m(b,l)+"="+m(E,l)}).filter(b=>b.length>0).join("&")},t.parseUrl=(a,l)=>{l=Object.assign({decode:!0},l);const[f,_]=r(a,"#");return Object.assign({url:f.split("?")[0]||"",query:S(k(a),l)},l&&l.parseFragmentIdentifier&&_?{fragmentIdentifier:s(_,l)}:{})},t.stringifyUrl=(a,l)=>{l=Object.assign({encode:!0,strict:!0},l);const f=g(a.url).split("?")[0]||"",_=t.extract(a.url),v=t.parse(_,{sort:!1}),x=Object.assign(v,a.query);let b=t.stringify(x,l);b&&(b=`?${b}`);let E=p(a.url);return a.fragmentIdentifier&&(E=`#${m(a.fragmentIdentifier,l)}`),`${f}${b}${E}`},t.pick=(a,l,f)=>{f=Object.assign({parseFragmentIdentifier:!0},f);const{url:_,query:v,fragmentIdentifier:x}=t.parseUrl(a,f);return t.stringifyUrl({url:_,query:o(v,l),fragmentIdentifier:x},f)},t.exclude=(a,l,f)=>{const _=Array.isArray(l)?v=>!l.includes(v):(v,x)=>!l(v,x);return t.pick(a,_,f)}})(Ne);function jt(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Wt(t,e){let n=Me(t);return n=Object.assign(Object.assign({},n),e),t=Ht(n),t}function Me(t){return Ne.parse(t)}function Ht(t){return Ne.stringify(t)}function Ft(t){return typeof t.bridge<"u"}function zt(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(y){const g="@",p=y.split(g);return{handshakeTopic:p[0],version:parseInt(p[1],10)}}const c=i(o),u=typeof n<"u"?t.substr(n):"";function d(y){const g=Me(y);return{key:g.key||"",bridge:g.bridge||""}}const m=d(u);return Object.assign(Object.assign({protocol:r},c),m)}function Xo(t){return t===""||typeof t=="string"&&t.trim()===""}function ei(t){return!(t&&t.length)}function ti(t){return Br(t)}function ni(t){return Qr(t)}function ri(t){return Vr(t)}function oi(t){return Jr(t)}function ii(t){return Gr(t)}function si(t,e){return Kr(t,e)}function ai(t){return typeof t.params=="object"}function Bt(t){return typeof t.method<"u"}function H(t){return typeof t.result<"u"}function J(t){return typeof t.error<"u"}function ke(t){return typeof t.event<"u"}function Qt(t){return uo.includes(t)||t.startsWith("wc_")}function Vt(t){return t.method.startsWith("wc_")?!0:!Ie.includes(t.method)}const ci=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Ho,appendToQueryString:Wt,concatArrayBuffers:go,concatBuffers:yo,convertArrayBufferToBuffer:oe,convertArrayBufferToHex:bt,convertArrayBufferToNumber:mo,convertArrayBufferToUtf8:po,convertBufferToArrayBuffer:yt,convertBufferToHex:wo,convertBufferToNumber:bo,convertBufferToUtf8:vo,convertHexToArrayBuffer:kt,convertHexToBuffer:Co,convertHexToNumber:Ro,convertHexToUtf8:Io,convertNumberToArrayBuffer:Oo,convertNumberToBuffer:To,convertNumberToHex:xt,convertNumberToUtf8:No,convertUtf8ToArrayBuffer:ko,convertUtf8ToBuffer:xo,convertUtf8ToHex:So,convertUtf8ToNumber:Eo,detectEnv:_e,detectOS:ue,formatIOSMobile:Qo,formatMobileRegistry:Yo,formatMobileRegistryEntry:Dt,formatQueryString:Ht,formatRpcError:At,getClientMeta:ye,getCrypto:Do,getCryptoOrThrow:Po,getDappRegistryUrl:Zo,getDocument:Uo,getDocumentOrThrow:Lo,getEncoding:ii,getFromWindow:Mo,getFromWindowOrThrow:qo,getInfuraRpcUrl:Lt,getLocal:Te,getLocalStorage:le,getLocalStorageOrThrow:jo,getLocation:Et,getLocationOrThrow:Ao,getMobileLinkRegistry:Jo,getMobileRegistryEntry:$t,getNavigator:St,getNavigatorOrThrow:$o,getQueryString:jt,getRpcUrl:Ut,getType:oi,getWalletRegistryUrl:Ko,isAndroid:Ct,isArrayBuffer:ri,isBrowser:Ot,isBuffer:ti,isEmptyArray:ei,isEmptyString:Xo,isHexString:si,isIOS:It,isInternalEvent:ke,isJsonRpcRequest:Bt,isJsonRpcResponseError:J,isJsonRpcResponseSuccess:H,isJsonRpcSubscription:ai,isMobile:Rt,isNode:Tt,isReservedEvent:Qt,isSilentPayload:Vt,isTypedArray:ni,isWalletConnectSession:Ft,logDeprecationWarning:Bo,parseQueryString:Me,parseWalletConnectUri:zt,payloadId:qt,promisify:Go,removeHexLeadingZeros:zo,removeHexPrefix:Fo,removeLocal:Oe,safeJsonParse:Nt,safeJsonStringify:Mt,sanitizeHex:Wo,saveMobileLinkInfo:Vo,setLocal:Re,uuid:ee},Symbol.toStringTag,{value:"Module"}));class li{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const _i=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class ui{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new li,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=di(this._url,this._protocol,this._version);if(this._nextSocket=new _i(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function di(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),u=Ot()?{protocol:e,version:n,env:"browser",host:((r=Et())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=_e())===null||o===void 0?void 0:o.name)||""},d=Wt(jt(c[1]||""),u);return c[0]+"?"+d}class hi{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Bt(e)?r=e.method:H(e)||J(e)?r=`response:${e.id}`:ke(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Qt(r)&&!ke(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(J(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class fi{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Te(this.storageId);return n&&Ft(n)&&(e=n),e}setSession(e){return Re(this.storageId,e),e}removeSession(){Oe(this.storageId)}}const pi="walletconnect.org",mi="abcdefghijklmnopqrstuvwxyz0123456789",Jt=mi.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function gi(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function vi(t){return gi(t).split(".").slice(-2).join(".")}function wi(){return Math.floor(Math.random()*Jt.length)}function bi(){return Jt[wi()]}function yi(t){return vi(t)===pi}function ki(t){return yi(t)?bi():t}class xi{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new hi,this._clientMeta=ye()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new fi(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Ie,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(co);e.connectorOpts.bridge&&(this.bridge=ki(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new ui({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=kt(e);this._key=n}get key(){return this._key?bt(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=ee()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=ye()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=ee(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(ze)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(_o);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(ze))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(pe);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=ee(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(pe);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(pe);const n=e&&e.message?e.message:no,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error($);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error($);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error($);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(ro);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error($);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return xt(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(H(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(oo)}rejectRequest(e){if(J(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(io)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),u=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Vt(r);this._transport.send(c,i,u)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(so);return{id:typeof e.id>"u"?qt():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(ao);const n={id:e.id,jsonrpc:"2.0"};if(J(e)){const r=At(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(H(e))return Object.assign(Object.assign({},n),e);throw new Error(Fe)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),Oe(be)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}H(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}H(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(Fe))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Rt()&&this._signingMethods.includes(r.method)){const o=Te(be);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=zt(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(lo)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}async function Gt(t){const e=(t||256)/8,n=Zr(e);return yt(ht(n))}async function Kt(t,e){const n=D(t.data),r=D(t.iv),o=D(t.hmac),i=P(o,!1),c=gt(n,r),u=await vt(e,c),d=P(u,!1);return we(i)===we(d)}async function Si(t,e,n){const r=re(oe(e)),o=n||await Gt(128),i=re(oe(o)),c=P(i,!1),u=JSON.stringify(t),d=pt(u),m=await Yr(i,r,d),s=P(m,!1),y=gt(m,i),g=await vt(r,y),p=P(g,!1);return{data:s,hmac:p,iv:c}}async function Ei(t,e){const n=re(oe(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Kt(t,n))return null;const o=D(t.data),i=D(t.iv),c=await Xr(i,n,o),u=ft(c);let d;try{d=JSON.parse(u)}catch{return null}return d}const Ci=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Ei,encrypt:Si,generateKey:Gt,verifyHmac:Kt},Symbol.toStringTag,{value:"Module"}));class Ii extends xi{constructor(e,n){super({cryptoLib:Ci,connectorOpts:e,pushServerOpts:n})}}const Ri=wt(ci);var Z,w,Zt,A,Be,Yt,xe,Xt,ie={},en=[],Ti=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function M(t,e){for(var n in e)t[n]=e[n];return t}function tn(t){var e=t.parentNode;e&&e.removeChild(t)}function N(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?Z.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return Q(t,c,r,o,null)}function Q(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Zt};return o==null&&w.vnode!=null&&w.vnode(i),i}function nn(){return{current:null}}function L(t){return t.children}function O(t,e){this.props=t,this.context=e}function G(t,e){if(e==null)return t.__?G(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?G(t):null}function rn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return rn(t)}}function Se(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!se.__r++||Be!==w.debounceRendering)&&((Be=w.debounceRendering)||Yt)(se)}function se(){var t,e,n,r,o,i,c,u;for(A.sort(xe);t=A.shift();)t.__d&&(e=A.length,r=void 0,o=void 0,c=(i=(n=t).__v).__e,(u=n.__P)&&(r=[],(o=M({},i)).__v=i.__v+1,qe(u,i,o,n.__n,u.ownerSVGElement!==void 0,i.__h!=null?[c]:null,r,c??G(i),i.__h),ln(r,i),i.__e!=c&&rn(i)),A.length>e&&A.sort(xe));se.__r=0}function on(t,e,n,r,o,i,c,u,d,m){var s,y,g,p,k,I,S,a=r&&r.__k||en,l=a.length;for(n.__k=[],s=0;s<e.length;s++)if((p=n.__k[s]=(p=e[s])==null||typeof p=="boolean"||typeof p=="function"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?Q(null,p,null,null,p):Array.isArray(p)?Q(L,{children:p},null,null,null):p.__b>0?Q(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(g=a[s])===null||g&&p.key==g.key&&p.type===g.type)a[s]=void 0;else for(y=0;y<l;y++){if((g=a[y])&&p.key==g.key&&p.type===g.type){a[y]=void 0;break}g=null}qe(t,p,g=g||ie,o,i,c,u,d,m),k=p.__e,(y=p.ref)&&g.ref!=y&&(S||(S=[]),g.ref&&S.push(g.ref,null,p),S.push(y,p.__c||k,p)),k!=null?(I==null&&(I=k),typeof p.type=="function"&&p.__k===g.__k?p.__d=d=sn(p,d,t):d=an(t,p,g,a,k,d),typeof n.type=="function"&&(n.__d=d)):d&&g.__e==d&&d.parentNode!=t&&(d=G(g))}for(n.__e=I,s=l;s--;)a[s]!=null&&(typeof n.type=="function"&&a[s].__e!=null&&a[s].__e==n.__d&&(n.__d=cn(r).nextSibling),un(a[s],a[s]));if(S)for(s=0;s<S.length;s++)_n(S[s],S[++s],S[++s])}function sn(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?sn(r,e,n):an(n,r,r,o,r.__e,e));return e}function q(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){q(n,e)}):e.push(t)),e}function an(t,e,n,r,o,i){var c,u,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),c=null;else{for(u=i,d=0;(u=u.nextSibling)&&d<r.length;d+=1)if(u==o)break e;t.insertBefore(o,i),c=i}return c!==void 0?c:o.nextSibling}function cn(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=cn(n)))return r}return null}function Oi(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||ae(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||ae(t,i,e[i],n[i],r)}function Qe(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ti.test(e)?n:n+"px"}function ae(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Qe(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Qe(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?Je:Ve,i):t.removeEventListener(e,i?Je:Ve,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Ve(t){return this.l[t.type+!1](w.event?w.event(t):t)}function Je(t){return this.l[t.type+!0](w.event?w.event(t):t)}function qe(t,e,n,r,o,i,c,u,d){var m,s,y,g,p,k,I,S,a,l,f,_,v,x,b,E=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,i=[u]),(m=w.__b)&&m(e);try{e:if(typeof E=="function"){if(S=e.props,a=(m=E.contextType)&&r[m.__c],l=m?a?a.props.value:m.__:r,n.__c?I=(s=e.__c=n.__c).__=s.__E:("prototype"in E&&E.prototype.render?e.__c=s=new E(S,l):(e.__c=s=new O(S,l),s.constructor=E,s.render=Mi),a&&a.sub(s),s.props=S,s.state||(s.state={}),s.context=l,s.__n=r,y=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),E.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=M({},s.__s)),M(s.__s,E.getDerivedStateFromProps(S,s.__s))),g=s.props,p=s.state,s.__v=e,y)E.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(E.getDerivedStateFromProps==null&&S!==g&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(S,l),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(S,s.__s,l)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(s.props=S,s.state=s.__s,s.__d=!1),s.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),f=0;f<s._sb.length;f++)s.__h.push(s._sb[f]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(S,s.__s,l),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(g,p,k)})}if(s.context=l,s.props=S,s.__P=t,_=w.__r,v=0,"prototype"in E&&E.prototype.render){for(s.state=s.__s,s.__d=!1,_&&_(e),m=s.render(s.props,s.state,s.context),x=0;x<s._sb.length;x++)s.__h.push(s._sb[x]);s._sb=[]}else do s.__d=!1,_&&_(e),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++v<25);s.state=s.__s,s.getChildContext!=null&&(r=M(M({},r),s.getChildContext())),y||s.getSnapshotBeforeUpdate==null||(k=s.getSnapshotBeforeUpdate(g,p)),b=m!=null&&m.type===L&&m.key==null?m.props.children:m,on(t,Array.isArray(b)?b:[b],e,n,r,o,i,c,u,d),s.base=e.__e,e.__h=null,s.__h.length&&c.push(s),I&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ni(n.__e,e,n,r,o,i,c,d);(m=w.diffed)&&m(e)}catch(T){e.__v=null,(d||i!=null)&&(e.__e=u,e.__h=!!d,i[i.indexOf(u)]=null),w.__e(T,e,n)}}function ln(t,e){w.__c&&w.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){w.__e(r,n.__v)}})}function Ni(t,e,n,r,o,i,c,u){var d,m,s,y=n.props,g=e.props,p=e.type,k=0;if(p==="svg"&&(o=!0),i!=null){for(;k<i.length;k++)if((d=i[k])&&"setAttribute"in d==!!p&&(p?d.localName===p:d.nodeType===3)){t=d,i[k]=null;break}}if(t==null){if(p===null)return document.createTextNode(g);t=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,g.is&&g),i=null,u=!1}if(p===null)y===g||u&&t.data===g||(t.data=g);else{if(i=i&&Z.call(t.childNodes),m=(y=n.props||ie).dangerouslySetInnerHTML,s=g.dangerouslySetInnerHTML,!u){if(i!=null)for(y={},k=0;k<t.attributes.length;k++)y[t.attributes[k].name]=t.attributes[k].value;(s||m)&&(s&&(m&&s.__html==m.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Oi(t,g,y,o,u),s)e.__k=[];else if(k=e.props.children,on(t,Array.isArray(k)?k:[k],e,n,r,o&&p!=="foreignObject",i,c,i?i[0]:n.__k&&G(n,0),u),i!=null)for(k=i.length;k--;)i[k]!=null&&tn(i[k]);u||("value"in g&&(k=g.value)!==void 0&&(k!==t.value||p==="progress"&&!k||p==="option"&&k!==y.value)&&ae(t,"value",k,y.value,!1),"checked"in g&&(k=g.checked)!==void 0&&k!==t.checked&&ae(t,"checked",k,y.checked,!1))}return t}function _n(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){w.__e(r,n)}}function un(t,e,n){var r,o;if(w.unmount&&w.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||_n(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){w.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&un(r[o],e,n||typeof t.type!="function");n||t.__e==null||tn(t.__e),t.__=t.__e=t.__d=void 0}function Mi(t,e,n){return this.constructor(t,n)}function K(t,e,n){var r,o,i;w.__&&w.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],qe(e,t=(!r&&n||e).__k=N(L,null,[t]),o||ie,ie,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?Z.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),ln(i,t)}function dn(t,e){K(t,e,dn)}function qi(t,e,n){var r,o,i,c=M({},t.props);for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];return arguments.length>2&&(c.children=arguments.length>3?Z.call(arguments,2):n),Q(t.type,c,r||t.key,o||t.ref,null)}function hn(t,e){var n={__c:e="__cC"+Xt++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(u){u.__e=!0,Se(u)})},this.sub=function(c){o.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),u&&u.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Z=en.slice,w={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(u){t=u}throw t}},Zt=0,O.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=M({},this.state),typeof t=="function"&&(t=t(M({},n),this.props)),t&&M(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Se(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Se(this))},O.prototype.render=L,A=[],Yt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xe=function(t,e){return t.__v.__b-e.__v.__b},se.__r=0,Xt=0;var U,C,me,Ge,z=0,fn=[],te=[],Ke=w.__b,Ze=w.__r,Ye=w.diffed,Xe=w.__c,et=w.unmount;function j(t,e){w.__h&&w.__h(C,t,z||e),z=0;var n=C.__H||(C.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:te}),n.__[t]}function de(t){return z=1,Le(yn,t)}function Le(t,e,n){var r=j(U++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):yn(void 0,e),function(u){var d=r.__N?r.__N[0]:r.__[0],m=r.t(d,u);d!==m&&(r.__N=[m,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(u,d,m){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(g){return g.__c});if(s.every(function(g){return!g.__N}))return!i||i.call(this,u,d,m);var y=!1;return s.forEach(function(g){if(g.__N){var p=g.__[0];g.__=g.__N,g.__N=void 0,p!==g.__[0]&&(y=!0)}}),!(!y&&r.__c.props===u)&&(!i||i.call(this,u,d,m))};C.u=!0;var i=C.shouldComponentUpdate,c=C.componentWillUpdate;C.componentWillUpdate=function(u,d,m){if(this.__e){var s=i;i=void 0,o(u,d,m),i=s}c&&c.call(this,u,d,m)},C.shouldComponentUpdate=o}return r.__N||r.__}function Ue(t,e){var n=j(U++,3);!w.__s&&$e(n.__H,e)&&(n.__=t,n.i=e,C.__H.__h.push(n))}function Y(t,e){var n=j(U++,4);!w.__s&&$e(n.__H,e)&&(n.__=t,n.i=e,C.__h.push(n))}function pn(t){return z=5,he(function(){return{current:t}},[])}function mn(t,e,n){z=6,Y(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function he(t,e){var n=j(U++,7);return $e(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function gn(t,e){return z=8,he(function(){return t},e)}function vn(t){var e=C.context[t.__c],n=j(U++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(C)),e.props.value):t.__}function wn(t,e){w.useDebugValue&&w.useDebugValue(e?e(t):t)}function Li(t){var e=j(U++,10),n=de();return e.__=t,C.componentDidCatch||(C.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function bn(){var t=j(U++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Ui(){for(var t;t=fn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ne),t.__H.__h.forEach(Ee),t.__H.__h=[]}catch(e){t.__H.__h=[],w.__e(e,t.__v)}}w.__b=function(t){C=null,Ke&&Ke(t)},w.__r=function(t){Ze&&Ze(t),U=0;var e=(C=t.__c).__H;e&&(me===C?(e.__h=[],C.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=te,n.__N=n.i=void 0})):(e.__h.forEach(ne),e.__h.forEach(Ee),e.__h=[])),me=C},w.diffed=function(t){Ye&&Ye(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(fn.push(e)!==1&&Ge===w.requestAnimationFrame||((Ge=w.requestAnimationFrame)||$i)(Ui)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==te&&(n.__=n.__V),n.i=void 0,n.__V=te})),me=C=null},w.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ne),n.__h=n.__h.filter(function(r){return!r.__||Ee(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],w.__e(r,n.__v)}}),Xe&&Xe(t,e)},w.unmount=function(t){et&&et(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ne(r)}catch(o){e=o}}),n.__H=void 0,e&&w.__e(e,n.__v))};var tt=typeof requestAnimationFrame=="function";function $i(t){var e,n=function(){clearTimeout(r),tt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);tt&&(e=requestAnimationFrame(n))}function ne(t){var e=C,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),C=e}function Ee(t){var e=C;t.__c=t.__(),C=e}function $e(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function yn(t,e){return typeof e=="function"?e(t):e}function kn(t,e){for(var n in e)t[n]=e[n];return t}function Ce(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ge(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function ce(t){this.props=t}function xn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:Ce(this.props,o)}function r(o){return this.shouldComponentUpdate=n,N(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ce.prototype=new O).isPureReactComponent=!0,ce.prototype.shouldComponentUpdate=function(t,e){return Ce(this.props,t)||Ce(this.state,e)};var nt=w.__b;w.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),nt&&nt(t)};var Ai=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Sn(t){function e(n){var r=kn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ai,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var rt=function(t,e){return t==null?null:q(q(t).map(e))},En={map:rt,forEach:rt,count:function(t){return t?q(t).length:0},only:function(t){var e=q(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:q},Pi=w.__e;w.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Pi(t,e,n,r)};var ot=w.unmount;function Cn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=kn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Cn(r,e,n)})),t}function In(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return In(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function V(){this.__u=0,this.t=null,this.__b=null}function Rn(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function Tn(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return N(n,i)}return o.displayName="Lazy",o.__f=!0,o}function F(){this.u=null,this.o=null}w.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),ot&&ot(t)},(V.prototype=new O).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=Rn(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--r.__u){if(r.state.__a){var m=r.state.__a;r.__v.__k[0]=In(m,m.__c.__P,m.__c.__O)}var s;for(r.setState({__a:r.__b=null});s=r.t.pop();)s.forceUpdate()}},d=e.__h===!0;r.__u++||d||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},V.prototype.componentWillUnmount=function(){this.t=[]},V.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Cn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&N(L,null,t.fallback);return o&&(o.__h=null),[N(L,null,e.__a?null:t.children),o]};var it=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Di(t){return this.getChildContext=function(){return t.context},t.children}function ji(t){var e=this,n=t.i;e.componentWillUnmount=function(){K(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),K(N(Di,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function On(t,e){var n=N(ji,{__v:t,i:e});return n.containerInfo=e,n}(F.prototype=new O).__a=function(t){var e=this,n=Rn(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),it(e,t,r)):o()};n?n(i):i()}},F.prototype.render=function(t){this.u=null,this.o=new Map;var e=q(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){it(t,n,e)})};var Nn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Wi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Hi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fi=/[A-Z0-9]/g,zi=typeof document<"u",Bi=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function Mn(t,e,n){return e.__k==null&&(e.textContent=""),K(t,e),typeof n=="function"&&n(),t?t.__c:null}function qn(t,e,n){return dn(t,e),typeof n=="function"&&n(),t?t.__c:null}O.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(O.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var st=w.event;function Qi(){}function Vi(){return this.cancelBubble}function Ji(){return this.defaultPrevented}w.event=function(t){return st&&(t=st(t)),t.persist=Qi,t.isPropagationStopped=Vi,t.isDefaultPrevented=Ji,t.nativeEvent=t};var Ae,Gi={enumerable:!1,configurable:!0,get:function(){return this.class}},at=w.vnode;w.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||zi&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var u=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":u==="ondoubleclick"?i="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||Bi(n.type)?u==="onfocus"?i="onfocusin":u==="onblur"?i="onfocusout":Hi.test(i)?i=u:r.indexOf("-")===-1&&Wi.test(i)?i=i.replace(Fi,"-$&").toLowerCase():c===null&&(c=void 0):u=i="oninput",u==="oninput"&&o[i=u]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=q(n.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=q(n.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Gi)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=Nn,at&&at(t)};var ct=w.__r;w.__r=function(t){ct&&ct(t),Ae=t.__c};var lt=w.diffed;w.diffed=function(t){lt&&lt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Ae=null};var Ln={ReactCurrentDispatcher:{current:{readContext:function(t){return Ae.__n[t.__c].props.value}}}},Ki="17.0.2";function Un(t){return N.bind(null,t)}function Pe(t){return!!t&&t.$$typeof===Nn}function $n(t){return Pe(t)?qi.apply(null,arguments):t}function An(t){return!!t.__k&&(K(null,t),!0)}function Pn(t){return t&&(t.base||t.nodeType===1&&t)||null}var Dn=function(t,e){return t(e)},jn=function(t,e){return t(e)},Wn=L;function De(t){t()}function Hn(t){return t}function Fn(){return[!1,De]}var zn=Y;function Bn(t,e){var n=e(),r=de({h:{__:n,v:e}}),o=r[0].h,i=r[1];return Y(function(){o.__=n,o.v=e,ge(o.__,e())||i({h:o})},[t,n,e]),Ue(function(){return ge(o.__,o.v())||i({h:o}),t(function(){ge(o.__,o.v())||i({h:o})})},[t]),n}var Zi={useState:de,useId:bn,useReducer:Le,useEffect:Ue,useLayoutEffect:Y,useInsertionEffect:zn,useTransition:Fn,useDeferredValue:Hn,useSyncExternalStore:Bn,startTransition:De,useRef:pn,useImperativeHandle:mn,useMemo:he,useCallback:gn,useContext:vn,useDebugValue:wn,version:"17.0.2",Children:En,render:Mn,hydrate:qn,unmountComponentAtNode:An,createPortal:On,createElement:N,createContext:hn,createFactory:Un,cloneElement:$n,createRef:nn,Fragment:L,isValidElement:Pe,findDOMNode:Pn,Component:O,PureComponent:ce,memo:xn,forwardRef:Sn,flushSync:jn,unstable_batchedUpdates:Dn,StrictMode:Wn,Suspense:V,SuspenseList:F,lazy:Tn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ln};const Yi=Object.freeze(Object.defineProperty({__proto__:null,Children:En,Component:O,Fragment:L,PureComponent:ce,StrictMode:Wn,Suspense:V,SuspenseList:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ln,cloneElement:$n,createContext:hn,createElement:N,createFactory:Un,createPortal:On,createRef:nn,default:Zi,findDOMNode:Pn,flushSync:jn,forwardRef:Sn,hydrate:qn,isValidElement:Pe,lazy:Tn,memo:xn,render:Mn,startTransition:De,unmountComponentAtNode:An,unstable_batchedUpdates:Dn,useCallback:gn,useContext:vn,useDebugValue:wn,useDeferredValue:Hn,useEffect:Ue,useErrorBoundary:Li,useId:bn,useImperativeHandle:mn,useInsertionEffect:zn,useLayoutEffect:Y,useMemo:he,useReducer:Le,useRef:pn,useState:de,useSyncExternalStore:Bn,useTransition:Fn,version:Ki},Symbol.toStringTag,{value:"Module"})),Xi=wt(Yi);function Qn(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var R=Ri,Vn=Qn(to),es=Qn(eo),h=Xi;function ts(t){Vn.toString(t,{type:"terminal"}).then(console.log)}var ns=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function rs(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var os="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",is="WalletConnect",ss=300,as="rgb(64, 153, 255)",Jn="walletconnect-wrapper",_t="walletconnect-style-sheet",Gn="walletconnect-qrcode-modal",cs="walletconnect-qrcode-close",Kn="walletconnect-qrcode-text",ls="walletconnect-connect-button";function _s(t){return h.createElement("div",{className:"walletconnect-modal__header"},h.createElement("img",{src:os,className:"walletconnect-modal__headerLogo"}),h.createElement("p",null,is),h.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},h.createElement("div",{id:cs,className:"walletconnect-modal__close__icon"},h.createElement("div",{className:"walletconnect-modal__close__line1"}),h.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function us(t){return h.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:ls+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var ds="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function hs(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return h.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},h.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),h.createElement("div",{className:"walletconnect-modal__base__row__right"},h.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),h.createElement("img",{src:ds,className:"walletconnect-modal__base__row__right__caret"})))}function fs(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return h.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},h.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),h.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var ps=5,ve=12;function ms(t){var e=R.isAndroid(),n=h.useState(""),r=n[0],o=n[1],i=h.useState(""),c=i[0],u=i[1],d=h.useState(1),m=d[0],s=d[1],y=c?t.links.filter(function(_){return _.name.toLowerCase().includes(c.toLowerCase())}):t.links,g=t.errorMessage,p=c||y.length>ps,k=Math.ceil(y.length/ve),I=[(m-1)*ve+1,m*ve],S=y.length?y.filter(function(_,v){return v+1>=I[0]&&v+1<=I[1]}):[],a=!e&&k>1,l=void 0;function f(_){o(_.target.value),clearTimeout(l),_.target.value?l=setTimeout(function(){u(_.target.value),s(1)},1e3):(o(""),u(""),s(1))}return h.createElement("div",null,h.createElement("p",{id:Kn,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&h.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:f}),h.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":p&&y.length?"__wrap":"")},e?h.createElement(us,{name:t.text.connect,color:as,href:t.uri,onClick:h.useCallback(function(){R.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(_){var v=_.color,x=_.name,b=_.shortName,E=_.logo,T=R.formatIOSMobile(t.uri,_),W=h.useCallback(function(){R.saveMobileLinkInfo({name:x,href:T})},[S]);return p?h.createElement(fs,{color:v,href:T,name:b||x,logo:E,onClick:W}):h.createElement(hs,{color:v,href:T,name:x,logo:E,onClick:W})}):h.createElement(h.Fragment,null,h.createElement("p",null,g.length?t.errorMessage:t.links.length&&!y.length?t.text.no_wallets_found:t.text.loading))),a&&h.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(_,v){var x=v+1,b=m===x;return h.createElement("a",{style:{margin:"auto 10px",fontWeight:b?"bold":"normal"},onClick:function(){return s(x)}},x)})))}function gs(t){var e=!!t.message.trim();return h.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var vs=function(t){try{var e="";return Promise.resolve(Vn.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function ws(t){var e=h.useState(""),n=e[0],r=e[1],o=h.useState(""),i=o[0],c=o[1];h.useEffect(function(){try{return Promise.resolve(vs(t.uri)).then(function(d){c(d)})}catch(d){Promise.reject(d)}},[]);var u=function(){var d=es(t.uri);d?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return h.createElement("div",null,h.createElement("p",{id:Kn,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),h.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),h.createElement("div",{className:"walletconnect-modal__footer"},h.createElement("a",{onClick:u},t.text.copy_to_clipboard)),h.createElement(gs,{message:n}))}function bs(t){var e=R.isAndroid(),n=R.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=h.useState(!1),i=o[0],c=o[1],u=h.useState(!1),d=u[0],m=u[1],s=h.useState(!n),y=s[0],g=s[1],p={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=h.useState(""),I=k[0],S=k[1],a=h.useState(!1),l=a[0],f=a[1],_=h.useState([]),v=_[0],x=_[1],b=h.useState(""),E=b[0],T=b[1],W=function(){d||i||r&&!r.length||v.length>0||h.useEffect(function(){var er=function(){try{if(e)return Promise.resolve();c(!0);var fe=rs(function(){var B=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:R.getWalletRegistryUrl();return Promise.resolve(fetch(B)).then(function(tr){return Promise.resolve(tr.json()).then(function(nr){var rr=nr.listings,or=n?"mobile":"desktop",X=R.getMobileLinkRegistry(R.formatMobileRegistry(rr,or),r);c(!1),m(!0),T(X.length?"":t.text.no_supported_wallets),x(X);var je=X.length===1;je&&(S(R.formatIOSMobile(t.uri,X[0])),g(!0)),f(je)})})},function(B){c(!1),m(!0),T(t.text.something_went_wrong),console.error(B)});return Promise.resolve(fe&&fe.then?fe.then(function(){}):void 0)}catch(B){return Promise.reject(B)}};er()})};W();var Xn=n?y:!y;return h.createElement("div",{id:Gn,className:"walletconnect-qrcode__base animated fadeIn"},h.createElement("div",{className:"walletconnect-modal__base"},h.createElement(_s,{onClose:t.onClose}),l&&y?h.createElement("div",{className:"walletconnect-modal__single_wallet"},h.createElement("a",{onClick:function(){return R.saveMobileLinkInfo({name:v[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(l?v[0].name:"")+" ›")):e||i||!i&&v.length?h.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Xn?" right__selected":"")},h.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?h.createElement(h.Fragment,null,h.createElement("a",{onClick:function(){return g(!1),W()}},t.text.mobile),h.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode)):h.createElement(h.Fragment,null,h.createElement("a",{onClick:function(){return g(!0)}},t.text.qrcode),h.createElement("a",{onClick:function(){return g(!1),W()}},t.text.desktop))):null,h.createElement("div",null,y||!e&&!i&&!v.length?h.createElement(ws,Object.assign({},p)):h.createElement(ms,Object.assign({},p,{links:v,errorMessage:E})))))}var ys={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},ks={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},xs={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ss={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Es={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},Cs={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Is={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Rs={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},ut={de:ys,en:ks,es:xs,fr:Ss,ko:Es,pt:Cs,zh:Is,fa:Rs};function Ts(){var t=R.getDocumentOrThrow(),e=t.getElementById(_t);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",_t),n.innerText=ns,t.head.appendChild(n)}function Os(){var t=R.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Jn),t.body.appendChild(e),e}function Zn(){var t=R.getDocumentOrThrow(),e=t.getElementById(Gn);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Jn);n&&t.body.removeChild(n)},ss))}function Ns(t){return function(){Zn(),t&&t()}}function Ms(){var t=R.getNavigatorOrThrow().language.split("-")[0]||"en";return ut[t]||ut.en}function qs(t,e,n){Ts();var r=Os();h.render(h.createElement(bs,{text:Ms(),uri:t,onClose:Ns(e),qrcodeModalOptions:n}),r)}function Ls(){Zn()}var Yn=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Us(t,e,n){console.log(t),Yn()?ts(t):qs(t,e,n)}function $s(){Yn()||Ls()}var As={open:Us,close:$s},Ps=As;class Ds extends kr{constructor(e){super(),this.events=new dt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",He(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Ps:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Ii(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?He(e.id,e.error.message,e.error.data):e}}class Fs{constructor(e){this.events=new dt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new We(new Ds(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Ie.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Ut(e,this.rpc);return typeof n>"u"?void 0:new We(new xr(n))}}export{Fs as default};
