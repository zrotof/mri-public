import{a as v,b as a1,c as M3,d as p3,m as h3,n as C3,p as Z1,q as u3}from"./chunk-SQ735JCB.js";import{Aa as $2,Ba as J2,Ca as K2,Da as Q2,Ea as c3,Fa as U,Ga as l3,I as B2,J as y,Ka as s1,L as g,M as u1,Ma as e3,Na as s3,O as A,Oa as F,Q as C,R as H,S as O1,Ta as U1,U as _2,Ua as x1,Va as a3,Wa as n3,X as d1,Xb as m3,Yb as z3,Zb as L3,a as q,ab as o3,b as F2,bb as j1,c as I2,cb as i3,fa as X,ga as B1,ia as q2,ka as U2,l as O2,la as _1,ma as j2,na as l1,pa as q1,sa as Z2,ta as G2,tb as t3,ua as W2,va as e1,wa as Y,wb as r3,xa as $,xb as f3,ya as X2,za as Y2}from"./chunk-O2CS3GOH.js";var b1=new A(""),Y1=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(l,s){this._zone=s,l.forEach(a=>{a.manager=this}),this._plugins=l.slice().reverse()}addEventListener(l,s,a,n){return this._findPluginFor(s).addEventListener(l,s,a,n)}getZone(){return this._zone}_findPluginFor(l){let s=this._eventNameToPlugin.get(l);if(s)return s;if(s=this._plugins.find(n=>n.supports(l)),!s)throw new y(5101,!1);return this._eventNameToPlugin.set(l,s),s}static \u0275fac=function(s){return new(s||c)(C(b1),C(X))};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})(),n1=class{_doc;constructor(e){this._doc=e}manager},g1="ng-app-id";function d3(c){for(let e of c)e.remove()}function x3(c,e){let l=e.createElement("style");return l.textContent=c,l}function r0(c,e,l,s){let a=c.head?.querySelectorAll(`style[${g1}="${e}"],link[${g1}="${e}"]`);if(a)for(let n of a)n.removeAttribute(g1),n instanceof HTMLLinkElement?s.set(n.href.slice(n.href.lastIndexOf("/")+1),{usage:0,elements:[n]}):n.textContent&&l.set(n.textContent,{usage:0,elements:[n]})}function W1(c,e){let l=e.createElement("link");return l.setAttribute("rel","stylesheet"),l.setAttribute("href",c),l}var $1=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(l,s,a,n={}){this.doc=l,this.appId=s,this.nonce=a,this.isServer=Z1(n),r0(l,s,this.inline,this.external),this.hosts.add(l.head)}addStyles(l,s){for(let a of l)this.addUsage(a,this.inline,x3);s?.forEach(a=>this.addUsage(a,this.external,W1))}removeStyles(l,s){for(let a of l)this.removeUsage(a,this.inline);s?.forEach(a=>this.removeUsage(a,this.external))}addUsage(l,s,a){let n=s.get(l);n?n.usage++:s.set(l,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(l,this.doc)))})}removeUsage(l,s){let a=s.get(l);a&&(a.usage--,a.usage<=0&&(d3(a.elements),s.delete(l)))}ngOnDestroy(){for(let[,{elements:l}]of[...this.inline,...this.external])d3(l);this.hosts.clear()}addHost(l){this.hosts.add(l);for(let[s,{elements:a}]of this.inline)a.push(this.addElement(l,x3(s,this.doc)));for(let[s,{elements:a}]of this.external)a.push(this.addElement(l,W1(s,this.doc)))}removeHost(l){this.hosts.delete(l)}addElement(l,s){return this.nonce&&s.setAttribute("nonce",this.nonce),this.isServer&&s.setAttribute(g1,this.appId),l.appendChild(s)}static \u0275fac=function(s){return new(s||c)(C(v),C(_1),C(q1,8),C(l1))};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})(),G1={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},J1=/%COMP%/g;var v3="%COMP%",f0=`_nghost-${v3}`,m0=`_ngcontent-${v3}`,z0=!0,L0=new A("",{providedIn:"root",factory:()=>z0});function M0(c){return m0.replace(J1,c)}function p0(c){return f0.replace(J1,c)}function N3(c,e){return e.map(l=>l.replace(J1,c))}var K1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(l,s,a,n,o,i,f,r=null,m=null){this.eventManager=l,this.sharedStylesHost=s,this.appId=a,this.removeStylesOnCompDestroy=n,this.doc=o,this.platformId=i,this.ngZone=f,this.nonce=r,this.tracingService=m,this.platformIsServer=Z1(i),this.defaultRenderer=new o1(l,o,f,this.platformIsServer,this.tracingService)}createRenderer(l,s){if(!l||!s)return this.defaultRenderer;this.platformIsServer&&s.encapsulation===e1.ShadowDom&&(s=F2(q({},s),{encapsulation:e1.Emulated}));let a=this.getOrCreateRenderer(l,s);return a instanceof v1?a.applyToHost(l):a instanceof i1&&a.applyStyles(),a}getOrCreateRenderer(l,s){let a=this.rendererByCompId,n=a.get(s.id);if(!n){let o=this.doc,i=this.ngZone,f=this.eventManager,r=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,M=this.platformIsServer,L=this.tracingService;switch(s.encapsulation){case e1.Emulated:n=new v1(f,r,s,this.appId,m,o,i,M,L);break;case e1.ShadowDom:return new X1(f,r,l,s,o,i,this.nonce,M,L);default:n=new i1(f,r,s,m,o,i,M,L);break}a.set(s.id,n)}return n}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(l){this.rendererByCompId.delete(l)}static \u0275fac=function(s){return new(s||c)(C(Y1),C($1),C(_1),C(L0),C(v),C(l1),C(X),C(q1),C(G2,8))};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})(),o1=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,l,s,a,n){this.eventManager=e,this.doc=l,this.ngZone=s,this.platformIsServer=a,this.tracingService=n}destroy(){}destroyNode=null;createElement(e,l){return l?this.doc.createElementNS(G1[l]||l,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,l){(g3(e)?e.content:e).appendChild(l)}insertBefore(e,l,s){e&&(g3(e)?e.content:e).insertBefore(l,s)}removeChild(e,l){l.remove()}selectRootElement(e,l){let s=typeof e=="string"?this.doc.querySelector(e):e;if(!s)throw new y(-5104,!1);return l||(s.textContent=""),s}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,l,s,a){if(a){l=a+":"+l;let n=G1[a];n?e.setAttributeNS(n,l,s):e.setAttribute(l,s)}else e.setAttribute(l,s)}removeAttribute(e,l,s){if(s){let a=G1[s];a?e.removeAttributeNS(a,l):e.removeAttribute(`${s}:${l}`)}else e.removeAttribute(l)}addClass(e,l){e.classList.add(l)}removeClass(e,l){e.classList.remove(l)}setStyle(e,l,s,a){a&(s1.DashCase|s1.Important)?e.style.setProperty(l,s,a&s1.Important?"important":""):e.style[l]=s}removeStyle(e,l,s){s&s1.DashCase?e.style.removeProperty(l):e.style[l]=""}setProperty(e,l,s){e!=null&&(e[l]=s)}setValue(e,l){e.nodeValue=l}listen(e,l,s,a){if(typeof e=="string"&&(e=a1().getGlobalEventTarget(this.doc,e),!e))throw new y(5102,!1);let n=this.decoratePreventDefault(s);return this.tracingService?.wrapEventListener&&(n=this.tracingService.wrapEventListener(e,l,n)),this.eventManager.addEventListener(e,l,n,a)}decoratePreventDefault(e){return l=>{if(l==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(l)):e(l))===!1&&l.preventDefault()}}};function g3(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var X1=class extends o1{sharedStylesHost;hostEl;shadowRoot;constructor(e,l,s,a,n,o,i,f,r){super(e,n,o,f,r),this.sharedStylesHost=l,this.hostEl=s,this.shadowRoot=s.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let m=a.styles;m=N3(a.id,m);for(let L of m){let p=document.createElement("style");i&&p.setAttribute("nonce",i),p.textContent=L,this.shadowRoot.appendChild(p)}let M=a.getExternalStyles?.();if(M)for(let L of M){let p=W1(L,n);i&&p.setAttribute("nonce",i),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,l){return super.appendChild(this.nodeOrShadowRoot(e),l)}insertBefore(e,l,s){return super.insertBefore(this.nodeOrShadowRoot(e),l,s)}removeChild(e,l){return super.removeChild(null,l)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},i1=class extends o1{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,l,s,a,n,o,i,f,r){super(e,n,o,i,f),this.sharedStylesHost=l,this.removeStylesOnCompDestroy=a;let m=s.styles;this.styles=r?N3(r,m):m,this.styleUrls=s.getExternalStyles?.(r)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},v1=class extends i1{contentAttr;hostAttr;constructor(e,l,s,a,n,o,i,f,r){let m=a+"-"+s.id;super(e,l,s,n,o,i,f,r,m),this.contentAttr=M0(m),this.hostAttr=p0(m)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,l){let s=super.createElement(e,l);return super.setAttribute(s,this.contentAttr,""),s}};var y1=class c extends p3{supportsDOMEvents=!0;static makeCurrent(){M3(new c)}onAndCancel(e,l,s,a){return e.addEventListener(l,s,a),()=>{e.removeEventListener(l,s,a)}}dispatchEvent(e,l){e.dispatchEvent(l)}remove(e){e.remove()}createElement(e,l){return l=l||this.getDefaultDocument(),l.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,l){return l==="window"?window:l==="document"?e:l==="body"?e.body:null}getBaseHref(e){let l=C0();return l==null?null:u0(l)}resetBaseElement(){t1=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return h3(document.cookie,e)}},t1=null;function C0(){return t1=t1||document.head.querySelector("base"),t1?t1.getAttribute("href"):null}function u0(c){return new URL(c,document.baseURI).pathname}var d0=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(s){return new(s||c)};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})(),y3=(()=>{class c extends n1{constructor(l){super(l)}supports(l){return!0}addEventListener(l,s,a,n){return l.addEventListener(s,a,n),()=>this.removeEventListener(l,s,a,n)}removeEventListener(l,s,a,n){return l.removeEventListener(s,a,n)}static \u0275fac=function(s){return new(s||c)(C(v))};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})(),b3=["alt","control","meta","shift"],x0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},g0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},S3=(()=>{class c extends n1{constructor(l){super(l)}supports(l){return c.parseEventName(l)!=null}addEventListener(l,s,a,n){let o=c.parseEventName(s),i=c.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>a1().onAndCancel(l,o.domEventName,i,n))}static parseEventName(l){let s=l.toLowerCase().split("."),a=s.shift();if(s.length===0||!(a==="keydown"||a==="keyup"))return null;let n=c._normalizeKey(s.pop()),o="",i=s.indexOf("code");if(i>-1&&(s.splice(i,1),o="code."),b3.forEach(r=>{let m=s.indexOf(r);m>-1&&(s.splice(m,1),o+=r+".")}),o+=n,s.length!=0||n.length===0)return null;let f={};return f.domEventName=a,f.fullKey=o,f}static matchEventFullKeyCode(l,s){let a=x0[l.key]||l.key,n="";return s.indexOf("code.")>-1&&(a=l.code,n="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),b3.forEach(o=>{if(o!==a){let i=g0[o];i(l)&&(n+=o+".")}}),n+=a,n===s)}static eventCallback(l,s,a){return n=>{c.matchEventFullKeyCode(n,l)&&a.runGuarded(()=>s(n))}}static _normalizeKey(l){return l==="esc"?"escape":l}static \u0275fac=function(s){return new(s||c)(C(v))};static \u0275prov=g({token:c,factory:c.\u0275fac})}return c})();function v0(c,e){return m3(q({rootComponent:c},N0(e)))}function N0(c){return{appProviders:[...A0,...c?.providers??[]],platformProviders:w0}}function b0(){y1.makeCurrent()}function y0(){return new B1}function S0(){return U2(document),document}var w0=[{provide:l1,useValue:C3},{provide:j2,useValue:b0,multi:!0},{provide:v,useFactory:S0}];var A0=[{provide:_2,useValue:"root"},{provide:B1,useFactory:y0},{provide:b1,useClass:y3,multi:!0,deps:[v]},{provide:b1,useClass:S3,multi:!0,deps:[v]},K1,$1,Y1,{provide:e3,useExisting:K1},{provide:u3,useClass:d0},[]];var r1=class c{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(l=>{let s=l.indexOf(":");if(s>0){let a=l.slice(0,s),n=l.slice(s+1).trim();this.addHeaderEntry(a,n)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((l,s)=>{this.addHeaderEntry(s,l)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([l,s])=>{this.setHeaderEntries(l,s)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let l=this.headers.get(e.toLowerCase());return l&&l.length>0?l[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,l){return this.clone({name:e,value:l,op:"a"})}set(e,l){return this.clone({name:e,value:l,op:"s"})}delete(e,l){return this.clone({name:e,value:l,op:"d"})}maybeSetNormalizedName(e,l){this.normalizedNames.has(l)||this.normalizedNames.set(l,e)}init(){this.lazyInit&&(this.lazyInit instanceof c?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(l=>{this.headers.set(l,e.headers.get(l)),this.normalizedNames.set(l,e.normalizedNames.get(l))})}clone(e){let l=new c;return l.lazyInit=this.lazyInit&&this.lazyInit instanceof c?this.lazyInit:this,l.lazyUpdate=(this.lazyUpdate||[]).concat([e]),l}applyUpdate(e){let l=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if(typeof s=="string"&&(s=[s]),s.length===0)return;this.maybeSetNormalizedName(e.name,l);let a=(e.op==="a"?this.headers.get(l):void 0)||[];a.push(...s),this.headers.set(l,a);break;case"d":let n=e.value;if(!n)this.headers.delete(l),this.normalizedNames.delete(l);else{let o=this.headers.get(l);if(!o)return;o=o.filter(i=>n.indexOf(i)===-1),o.length===0?(this.headers.delete(l),this.normalizedNames.delete(l)):this.headers.set(l,o)}break}}addHeaderEntry(e,l){let s=e.toLowerCase();this.maybeSetNormalizedName(e,s),this.headers.has(s)?this.headers.get(s).push(l):this.headers.set(s,[l])}setHeaderEntries(e,l){let s=(Array.isArray(l)?l:[l]).map(n=>n.toString()),a=e.toLowerCase();this.headers.set(a,s),this.maybeSetNormalizedName(e,a)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(l=>e(this.normalizedNames.get(l),this.headers.get(l)))}};var H0="X-Request-URL",k0="text/plain",V0="application/json",q5=`${V0}, ${k0}, */*`;var c2=function(c){return c[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c}(c2||{}),Q1=class{headers;status;statusText;url;ok;type;constructor(e,l=200,s="OK"){this.headers=e.headers||new r1,this.status=e.status!==void 0?e.status:l,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var f1=class c extends Q1{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=c2.Response;clone(e={}){return new c({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var w3=new A("");var U5=RegExp(`^${H0}:`,"m");var E0=new A(""),P0="b",R0="h",D0="s",F0="st",I0="u",O0="rt",l2=new A(""),B0=["GET","HEAD"];function _0(c,e){let L=H(l2),{isCacheActive:l}=L,s=I2(L,["isCacheActive"]),{transferCache:a,method:n}=c;if(!l||a===!1||n==="POST"&&!s.includePostRequests&&!a||n!=="POST"&&!B0.includes(n)||!s.includeRequestsWithAuthHeaders&&q0(c)||s.filter?.(c)===!1)return e(c);let o=H(Z2);if(H(E0,{optional:!0}))throw new y(2803,!1);let f=c.url,r=U0(c,f),m=o.get(r,null),M=s.includeHeaders;if(typeof a=="object"&&a.includeHeaders&&(M=a.includeHeaders),m){let{[P0]:p,[O0]:w,[R0]:T,[D0]:N,[F0]:S,[I0]:d}=m,x=p;switch(w){case"arraybuffer":x=new TextEncoder().encode(p).buffer;break;case"blob":x=new Blob([p]);break}let D=new r1(T);return O2(new f1({body:x,headers:D,status:N,statusText:S,url:d}))}return e(c).pipe(B2(p=>{p instanceof f1}))}function q0(c){return c.headers.has("authorization")||c.headers.has("proxy-authorization")}function A3(c){return[...c.keys()].sort().map(e=>`${e}=${c.getAll(e)}`).join("&")}function U0(c,e){let{params:l,method:s,responseType:a}=c,n=A3(l),o=c.serializeBody();o instanceof URLSearchParams?o=A3(o):typeof o!="string"&&(o="");let i=[s,a,e,o,n].join("|"),f=j0(i);return f}function j0(c){let e=0;for(let l of c)e=Math.imul(31,e)+l.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function k3(c){return[{provide:l2,useFactory:()=>(W2("NgHttpTransferCache"),q({isCacheActive:!0},c))},{provide:w3,useValue:_0,multi:!0},{provide:o3,multi:!0,useFactory:()=>{let e=H(j1),l=H(l2);return()=>{e.whenStable().then(()=>{l.isCacheActive=!1})}}}]}var k7=(()=>{class c{_doc;constructor(l){this._doc=l}getTitle(){return this._doc.title}setTitle(l){this._doc.title=l||""}static \u0275fac=function(s){return new(s||c)(C(v))};static \u0275prov=g({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var e2=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275prov=g({token:c,factory:function(s){let a=null;return s?a=new(s||c):a=C(Z0),a},providedIn:"root"})}return c})(),Z0=(()=>{class c extends e2{_doc;constructor(l){super(),this._doc=l}sanitize(l,s){if(s==null)return null;switch(l){case U.NONE:return s;case U.HTML:return $(s,"HTML")?Y(s):c3(this._doc,String(s)).toString();case U.STYLE:return $(s,"Style")?Y(s):s;case U.SCRIPT:if($(s,"Script"))return Y(s);throw new y(5200,!1);case U.URL:return $(s,"URL")?Y(s):Q2(String(s));case U.RESOURCE_URL:if($(s,"ResourceURL"))return Y(s);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(l){return X2(l)}bypassSecurityTrustStyle(l){return Y2(l)}bypassSecurityTrustScript(l){return $2(l)}bypassSecurityTrustUrl(l){return J2(l)}bypassSecurityTrustResourceUrl(l){return K2(l)}static \u0275fac=function(s){return new(s||c)(C(v))};static \u0275prov=g({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),S1=function(c){return c[c.NoHttpTransferCache=0]="NoHttpTransferCache",c[c.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",c[c.I18nSupport=2]="I18nSupport",c[c.EventReplay=3]="EventReplay",c[c.IncrementalHydration=4]="IncrementalHydration",c}(S1||{});function G0(c,e=[],l={}){return{\u0275kind:c,\u0275providers:e}}function V7(){return G0(S1.EventReplay,z3())}function T7(...c){let e=[],l=new Set;for(let{\u0275providers:a,\u0275kind:n}of c)l.add(n),a.length&&e.push(a);let s=l.has(S1.HttpTransferCacheOptions);return O1([[],L3(),l.has(S1.NoHttpTransferCache)||s?[]:k3({}),e])}function X0(c,e,l){return(e=$0(e))in c?Object.defineProperty(c,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[e]=l,c}function V3(c,e){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),l.push.apply(l,s)}return l}function t(c){for(var e=1;e<arguments.length;e++){var l=arguments[e]!=null?arguments[e]:{};e%2?V3(Object(l),!0).forEach(function(s){X0(c,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):V3(Object(l)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(l,s))})}return c}function Y0(c,e){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var s=l.call(c,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function $0(c){var e=Y0(c,"string");return typeof e=="symbol"?e:e+""}var T3=()=>{},y2={},a4={},n4=null,o4={mark:T3,measure:T3};try{typeof window<"u"&&(y2=window),typeof document<"u"&&(a4=document),typeof MutationObserver<"u"&&(n4=MutationObserver),typeof performance<"u"&&(o4=performance)}catch{}var{userAgent:E3=""}=y2.navigator||{},O=y2,h=a4,P3=n4,w1=o4,P7=!!O.document,R=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",i4=~E3.indexOf("MSIE")||~E3.indexOf("Trident/"),J0=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,K0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,t4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Q0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],u="classic",E1="duotone",c6="sharp",l6="sharp-duotone",f4=[u,E1,c6,l6],e6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},s6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},a6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),n6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},o6=["fak","fa-kit","fakd","fa-kit-duotone"],R3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},i6=["kit"],t6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},r6=["fak","fakd"],f6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},D3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},A1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],z6=["fak","fa-kit","fakd","fa-kit-duotone"],L6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},p6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},t2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},h6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],r2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...m6,...h6],C6=["solid","regular","light","thin","duotone","brands"],m4=[1,2,3,4,5,6,7,8,9,10],u6=m4.concat([11,12,13,14,15,16,17,18,19,20]),d6=[...Object.keys(p6),...C6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",A1.GROUP,A1.SWAP_OPACITY,A1.PRIMARY,A1.SECONDARY].concat(m4.map(c=>"".concat(c,"x"))).concat(u6.map(c=>"w-".concat(c))),x6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},E="___FONT_AWESOME___",f2=16,z4="fa",L4="svg-inline--fa",Z="data-fa-i2svg",m2="data-fa-pseudo-element",g6="data-fa-pseudo-element-pending",S2="data-prefix",w2="data-icon",F3="fontawesome-i2svg",v6="async",N6=["HTML","HEAD","STYLE","SCRIPT"],M4=(()=>{try{return!0}catch{return!1}})();function h1(c){return new Proxy(c,{get(e,l){return l in e?e[l]:e[u]}})}var p4=t({},t4);p4[u]=t(t(t(t({},{"fa-duotone":"duotone"}),t4[u]),R3.kit),R3["kit-duotone"]);var b6=h1(p4),z2=t({},n6);z2[u]=t(t(t(t({},{duotone:"fad"}),z2[u]),D3.kit),D3["kit-duotone"]);var I3=h1(z2),L2=t({},t2);L2[u]=t(t({},L2[u]),f6.kit);var A2=h1(L2),M2=t({},M6);M2[u]=t(t({},M2[u]),t6.kit);var R7=h1(M2),y6=J0,h4="fa-layers-text",S6=K0,w6=t({},e6),D7=h1(w6),A6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],s2=Q0,H6=[...i6,...d6],z1=O.FontAwesomeConfig||{};function k6(c){var e=h.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function V6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[l,s]=e,a=V6(k6(l));a!=null&&(z1[s]=a)});var C4={styleDefault:"solid",familyDefault:u,cssPrefix:z4,replacementClass:L4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z1.familyPrefix&&(z1.cssPrefix=z1.familyPrefix);var Q=t(t({},C4),z1);Q.autoReplaceSvg||(Q.observeMutations=!1);var z={};Object.keys(C4).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){Q[c]=e,L1.forEach(l=>l(z))},get:function(){return Q[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){Q.cssPrefix=c,L1.forEach(e=>e(z))},get:function(){return Q.cssPrefix}});O.FontAwesomeConfig=z;var L1=[];function T6(c){return L1.push(c),()=>{L1.splice(L1.indexOf(c),1)}}var I=f2,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E6(c){if(!c||!R)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let l=h.head.childNodes,s=null;for(let a=l.length-1;a>-1;a--){let n=l[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=n)}return h.head.insertBefore(e,s),c}var P6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function M1(){let c=12,e="";for(;c-- >0;)e+=P6[Math.random()*62|0];return e}function c1(c){let e=[];for(let l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function H2(c){return c.classList?c1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function u4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function R6(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,'="').concat(u4(c[l]),'" '),"").trim()}function P1(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,": ").concat(c[l].trim(),";"),"")}function k2(c){return c.size!==k.size||c.x!==k.x||c.y!==k.y||c.rotate!==k.rotate||c.flipX||c.flipY}function D6(c){let{transform:e,containerWidth:l,iconWidth:s}=c,a={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(n," ").concat(o," ").concat(i)},r={transform:"translate(".concat(s/2*-1," -256)")};return{outer:a,inner:f,path:r}}function F6(c){let{transform:e,width:l=f2,height:s=f2,startCentered:a=!1}=c,n="";return a&&i4?n+="translate(".concat(e.x/I-l/2,"em, ").concat(e.y/I-s/2,"em) "):a?n+="translate(calc(-50% + ".concat(e.x/I,"em), calc(-50% + ").concat(e.y/I,"em)) "):n+="translate(".concat(e.x/I,"em, ").concat(e.y/I,"em) "),n+="scale(".concat(e.size/I*(e.flipX?-1:1),", ").concat(e.size/I*(e.flipY?-1:1),") "),n+="rotate(".concat(e.rotate,"deg) "),n}var I6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function d4(){let c=z4,e=L4,l=z.cssPrefix,s=z.replacementClass,a=I6;if(l!==c||s!==e){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(l,"-")).replace(o,"--".concat(l,"-")).replace(i,".".concat(s))}return a}var O3=!1;function a2(){z.autoAddCss&&!O3&&(E6(d4()),O3=!0)}var O6={mixout(){return{dom:{css:d4,insertCss:a2}}},hooks(){return{beforeDOMElementCreation(){a2()},beforeI2svg(){a2()}}}},P=O||{};P[E]||(P[E]={});P[E].styles||(P[E].styles={});P[E].hooks||(P[E].hooks={});P[E].shims||(P[E].shims=[]);var V=P[E],x4=[],g4=function(){h.removeEventListener("DOMContentLoaded",g4),V1=1,x4.map(c=>c())},V1=!1;R&&(V1=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),V1||h.addEventListener("DOMContentLoaded",g4));function B6(c){R&&(V1?setTimeout(c,0):x4.push(c))}function C1(c){let{tag:e,attributes:l={},children:s=[]}=c;return typeof c=="string"?u4(c):"<".concat(e," ").concat(R6(l),">").concat(s.map(C1).join(""),"</").concat(e,">")}function B3(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var _6=function(e,l){return function(s,a,n,o){return e.call(l,s,a,n,o)}},n2=function(e,l,s,a){var n=Object.keys(e),o=n.length,i=a!==void 0?_6(l,a):l,f,r,m;for(s===void 0?(f=1,m=e[n[0]]):(f=0,m=s);f<o;f++)r=n[f],m=i(m,e[r],r,e);return m};function q6(c){let e=[],l=0,s=c.length;for(;l<s;){let a=c.charCodeAt(l++);if(a>=55296&&a<=56319&&l<s){let n=c.charCodeAt(l++);(n&64512)==56320?e.push(((a&1023)<<10)+(n&1023)+65536):(e.push(a),l--)}else e.push(a)}return e}function p2(c){let e=q6(c);return e.length===1?e[0].toString(16):null}function U6(c,e){let l=c.length,s=c.charCodeAt(e),a;return s>=55296&&s<=56319&&l>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(s-55296)*1024+a-56320+65536:s}function _3(c){return Object.keys(c).reduce((e,l)=>{let s=c[l];return!!s.icon?e[s.iconName]=s.icon:e[l]=s,e},{})}function h2(c,e){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=l,a=_3(e);typeof V.hooks.addPack=="function"&&!s?V.hooks.addPack(c,_3(e)):V.styles[c]=t(t({},V.styles[c]||{}),a),c==="fas"&&h2("fa",e)}var{styles:p1,shims:j6}=V,v4=Object.keys(A2),Z6=v4.reduce((c,e)=>(c[e]=Object.keys(A2[e]),c),{}),V2=null,N4={},b4={},y4={},S4={},w4={};function G6(c){return~H6.indexOf(c)}function W6(c,e){let l=e.split("-"),s=l[0],a=l.slice(1).join("-");return s===c&&a!==""&&!G6(a)?a:null}var A4=()=>{let c=s=>n2(p1,(a,n,o)=>(a[o]=n2(n,s,{}),a),{});N4=c((s,a,n)=>(a[3]&&(s[a[3]]=n),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{s[i.toString(16)]=n}),s)),b4=c((s,a,n)=>(s[n]=n,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{s[i]=n}),s)),w4=c((s,a,n)=>{let o=a[2];return s[n]=n,o.forEach(i=>{s[i]=n}),s});let e="far"in p1||z.autoFetchSvg,l=n2(j6,(s,a)=>{let n=a[0],o=a[1],i=a[2];return o==="far"&&!e&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:i}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:i}),s},{names:{},unicodes:{}});y4=l.names,S4=l.unicodes,V2=R1(z.styleDefault,{family:z.familyDefault})};T6(c=>{V2=R1(c.styleDefault,{family:z.familyDefault})});A4();function T2(c,e){return(N4[c]||{})[e]}function X6(c,e){return(b4[c]||{})[e]}function j(c,e){return(w4[c]||{})[e]}function H4(c){return y4[c]||{prefix:null,iconName:null}}function Y6(c){let e=S4[c],l=T2("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function B(){return V2}var k4=()=>({prefix:null,iconName:null,rest:[]});function $6(c){let e=u,l=v4.reduce((s,a)=>(s[a]="".concat(z.cssPrefix,"-").concat(a),s),{});return f4.forEach(s=>{(c.includes(l[s])||c.some(a=>Z6[s].includes(a)))&&(e=s)}),e}function R1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=u}=e,s=b6[l][c];if(l===E1&&!c)return"fad";let a=I3[l][c]||I3[l][s],n=c in V.styles?c:null;return a||n||null}function J6(c){let e=[],l=null;return c.forEach(s=>{let a=W6(z.cssPrefix,s);a?l=a:s&&e.push(s)}),{iconName:l,rest:e}}function q3(c){return c.sort().filter((e,l,s)=>s.indexOf(e)===l)}function D1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=e,s=null,a=r2.concat(z6),n=q3(c.filter(M=>a.includes(M))),o=q3(c.filter(M=>!r2.includes(M))),i=n.filter(M=>(s=M,!r4.includes(M))),[f=null]=i,r=$6(n),m=t(t({},J6(o)),{},{prefix:R1(f,{family:r})});return t(t(t({},m),l8({values:c,family:r,styles:p1,config:z,canonical:m,givenPrefix:s})),K6(l,s,m))}function K6(c,e,l){let{prefix:s,iconName:a}=l;if(c||!s||!a)return{prefix:s,iconName:a};let n=e==="fa"?H4(a):{},o=j(s,a);return a=n.iconName||o||a,s=n.prefix||s,s==="far"&&!p1.far&&p1.fas&&!z.autoFetchSvg&&(s="fas"),{prefix:s,iconName:a}}var Q6=f4.filter(c=>c!==u||c!==E1),c8=Object.keys(t2).filter(c=>c!==u).map(c=>Object.keys(t2[c])).flat();function l8(c){let{values:e,family:l,canonical:s,givenPrefix:a="",styles:n={},config:o={}}=c,i=l===E1,f=e.includes("fa-duotone")||e.includes("fad"),r=o.familyDefault==="duotone",m=s.prefix==="fad"||s.prefix==="fa-duotone";if(!i&&(f||r||m)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&Q6.includes(l)&&(Object.keys(n).find(L=>c8.includes(L))||o.autoFetchSvg)){let L=a6.get(l).defaultShortPrefixId;s.prefix=L,s.iconName=j(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||a==="fa")&&(s.prefix=B()||"fas"),s}var C2=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,l=new Array(e),s=0;s<e;s++)l[s]=arguments[s];let a=l.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]=t(t({},this.definitions[n]||{}),a[n]),h2(n,a[n]);let o=A2[u][n];o&&h2(o,a[n]),A4()})}reset(){this.definitions={}}_pullDefinitions(e,l){let s=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(s).map(a=>{let{prefix:n,iconName:o,icon:i}=s[a],f=i[2];e[n]||(e[n]={}),f.length>0&&f.forEach(r=>{typeof r=="string"&&(e[n][r]=i)}),e[n][o]=i}),e}},U3=[],J={},K={},e8=Object.keys(K);function s8(c,e){let{mixoutsTo:l}=e;return U3=c,J={},Object.keys(K).forEach(s=>{e8.indexOf(s)===-1&&delete K[s]}),U3.forEach(s=>{let a=s.mixout?s.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(l[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{l[n]||(l[n]={}),l[n][o]=a[n][o]})}),s.hooks){let n=s.hooks();Object.keys(n).forEach(o=>{J[o]||(J[o]=[]),J[o].push(n[o])})}s.provides&&s.provides(K)}),l}function u2(c,e){for(var l=arguments.length,s=new Array(l>2?l-2:0),a=2;a<l;a++)s[a-2]=arguments[a];return(J[c]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function G(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),s=1;s<e;s++)l[s-1]=arguments[s];(J[c]||[]).forEach(n=>{n.apply(null,l)})}function _(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return K[c]?K[c].apply(null,e):void 0}function d2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,l=c.prefix||B();if(e)return e=j(l,e)||e,B3(V4.definitions,l,e)||B3(V.styles,l,e)}var V4=new C2,a8=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,G("noAuto")},n8={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(G("beforeI2svg",c),_("pseudoElements2svg",c),_("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,B6(()=>{i8({autoReplaceSvgRoot:e}),G("watch",c)})}},o8={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:j(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=R1(c[0]);return{prefix:l,iconName:j(l,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(y6))){let e=D1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||B(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=B();return{prefix:e,iconName:j(e,c)||c}}}},b={noAuto:a8,config:z,dom:n8,parse:o8,library:V4,findIconDefinition:d2,toHtml:C1},i8=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=c;(Object.keys(V.styles).length>0||z.autoFetchSvg)&&R&&z.autoReplaceSvg&&b.dom.i2svg({node:e})};function F1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>C1(l))}}),Object.defineProperty(c,"node",{get:function(){if(!R)return;let l=h.createElement("div");return l.innerHTML=c.html,l.children}}),c}function t8(c){let{children:e,main:l,mask:s,attributes:a,styles:n,transform:o}=c;if(k2(o)&&l.found&&!s.found){let{width:i,height:f}=l,r={x:i/f/2,y:.5};a.style=P1(t(t({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function r8(c){let{prefix:e,iconName:l,children:s,attributes:a,symbol:n}=c,o=n===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},a),{},{id:o}),children:s}]}]}function E2(c){let{icons:{main:e,mask:l},prefix:s,iconName:a,transform:n,symbol:o,title:i,maskId:f,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:p}=l.found?l:e,w=r6.includes(s),T=[z.replacementClass,a?"".concat(z.cssPrefix,"-").concat(a):""].filter(W=>m.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(m.classes).join(" "),N={children:[],attributes:t(t({},m.attributes),{},{"data-prefix":s,"data-icon":a,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(p)})},S=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/p*16*.0625,"em")}:{};M&&(N.attributes[Z]=""),i&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(r||M1())},children:[i]}),delete N.attributes.title);let d=t(t({},N),{},{prefix:s,iconName:a,main:e,mask:l,maskId:f,transform:n,symbol:o,styles:t(t({},S),m.styles)}),{children:x,attributes:D}=l.found&&e.found?_("generateAbstractMask",d)||{children:[],attributes:{}}:_("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=x,d.attributes=D,o?r8(d):t8(d)}function j3(c){let{content:e,width:l,height:s,transform:a,title:n,extra:o,watchable:i=!1}=c,f=t(t(t({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});i&&(f[Z]="");let r=t({},o.styles);k2(a)&&(r.transform=F6({transform:a,startCentered:!0,width:l,height:s}),r["-webkit-transform"]=r.transform);let m=P1(r);m.length>0&&(f.style=m);let M=[];return M.push({tag:"span",attributes:f,children:[e]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function f8(c){let{content:e,title:l,extra:s}=c,a=t(t(t({},s.attributes),l?{title:l}:{}),{},{class:s.classes.join(" ")}),n=P1(s.styles);n.length>0&&(a.style=n);let o=[];return o.push({tag:"span",attributes:a,children:[e]}),l&&o.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),o}var{styles:o2}=V;function x2(c){let e=c[0],l=c[1],[s]=c.slice(4),a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(s2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(s2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(s2.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:l,icon:a}}var m8={found:!1,width:512,height:512};function z8(c,e){!M4&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function g2(c,e){let l=e;return e==="fa"&&z.styleDefault!==null&&(e=B()),new Promise((s,a)=>{if(l==="fa"){let n=H4(c)||{};c=n.iconName||c,e=n.prefix||e}if(c&&e&&o2[e]&&o2[e][c]){let n=o2[e][c];return s(x2(n))}z8(c,e),s(t(t({},m8),{},{icon:z.showMissingIcons&&c?_("missingIconAbstract")||{}:{}}))})}var Z3=()=>{},v2=z.measurePerformance&&w1&&w1.mark&&w1.measure?w1:{mark:Z3,measure:Z3},m1='FA "6.7.2"',L8=c=>(v2.mark("".concat(m1," ").concat(c," begins")),()=>T4(c)),T4=c=>{v2.mark("".concat(m1," ").concat(c," ends")),v2.measure("".concat(m1," ").concat(c),"".concat(m1," ").concat(c," begins"),"".concat(m1," ").concat(c," ends"))},P2={begin:L8,end:T4},H1=()=>{};function G3(c){return typeof(c.getAttribute?c.getAttribute(Z):null)=="string"}function M8(c){let e=c.getAttribute?c.getAttribute(S2):null,l=c.getAttribute?c.getAttribute(w2):null;return e&&l}function p8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function h8(){return z.autoReplaceSvg===!0?k1.replace:k1[z.autoReplaceSvg]||k1.replace}function C8(c){return h.createElementNS("http://www.w3.org/2000/svg",c)}function u8(c){return h.createElement(c)}function E4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?C8:u8}=e;if(typeof c=="string")return h.createTextNode(c);let s=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){s.appendChild(E4(n,{ceFn:l}))}),s}function d8(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var k1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(l=>{e.parentNode.insertBefore(E4(l),e)}),e.getAttribute(Z)===null&&z.keepOriginalSource){let l=h.createComment(d8(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(c){let e=c[0],l=c[1];if(~H2(e).indexOf(z.replacementClass))return k1.replace(c);let s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((o,i)=>(i===z.replacementClass||i.match(s)?o.toSvg.push(i):o.toNode.push(i),o),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}let a=l.map(n=>C1(n)).join(`
`);e.setAttribute(Z,""),e.innerHTML=a}};function W3(c){c()}function P4(c,e){let l=typeof e=="function"?e:H1;if(c.length===0)l();else{let s=W3;z.mutateApproach===v6&&(s=O.requestAnimationFrame||W3),s(()=>{let a=h8(),n=P2.begin("mutate");c.map(a),n(),l()})}}var R2=!1;function R4(){R2=!0}function N2(){R2=!1}var T1=null;function X3(c){if(!P3||!z.observeMutations)return;let{treeCallback:e=H1,nodeCallback:l=H1,pseudoElementsCallback:s=H1,observeMutationsRoot:a=h}=c;T1=new P3(n=>{if(R2)return;let o=B();c1(n).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!G3(i.addedNodes[0])&&(z.searchPseudoElements&&s(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&s(i.target.parentNode),i.type==="attributes"&&G3(i.target)&&~A6.indexOf(i.attributeName))if(i.attributeName==="class"&&M8(i.target)){let{prefix:f,iconName:r}=D1(H2(i.target));i.target.setAttribute(S2,f||o),r&&i.target.setAttribute(w2,r)}else p8(i.target)&&l(i.target)})}),R&&T1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function x8(){T1&&T1.disconnect()}function g8(c){let e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce((s,a)=>{let n=a.split(":"),o=n[0],i=n.slice(1);return o&&i.length>0&&(s[o]=i.join(":").trim()),s},{})),l}function v8(c){let e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",a=D1(H2(c));return a.prefix||(a.prefix=B()),e&&l&&(a.prefix=e,a.iconName=l),a.iconName&&a.prefix||(a.prefix&&s.length>0&&(a.iconName=X6(a.prefix,c.innerText)||T2(a.prefix,p2(c.innerText))),!a.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function N8(c){let e=c1(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),l=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||M1()):(e["aria-hidden"]="true",e.focusable="false")),e}function b8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:s,rest:a}=v8(c),n=N8(c),o=u2("parseNodeAttributes",{},c),i=e.styleParser?g8(c):[];return t({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:n}},o)}var{styles:y8}=V;function D4(c){let e=z.autoReplaceSvg==="nest"?Y3(c,{styleParser:!1}):Y3(c);return~e.extra.classes.indexOf(h4)?_("generateLayersText",c,e):_("generateSvgReplacementMutation",c,e)}function S8(){return[...o6,...r2]}function $3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let l=h.documentElement.classList,s=m=>l.add("".concat(F3,"-").concat(m)),a=m=>l.remove("".concat(F3,"-").concat(m)),n=z.autoFetchSvg?S8():r4.concat(Object.keys(y8));n.includes("fa")||n.push("fa");let o=[".".concat(h4,":not([").concat(Z,"])")].concat(n.map(m=>".".concat(m,":not([").concat(Z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let i=[];try{i=c1(c.querySelectorAll(o))}catch{}if(i.length>0)s("pending"),a("complete");else return Promise.resolve();let f=P2.begin("onTree"),r=i.reduce((m,M)=>{try{let L=D4(M);L&&m.push(L)}catch(L){M4||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{P4(L,()=>{s("active"),s("complete"),a("pending"),typeof e=="function"&&e(),f(),m()})}).catch(L=>{f(),M(L)})})}function w8(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D4(c).then(l=>{l&&P4([l],e)})}function A8(c){return function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:d2(e||{}),{mask:a}=l;return a&&(a=(a||{}).icon?a:d2(a||{})),c(s,t(t({},l),{},{mask:a}))}}var H8=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=k,symbol:s=!1,mask:a=null,maskId:n=null,title:o=null,titleId:i=null,classes:f=[],attributes:r={},styles:m={}}=e;if(!c)return;let{prefix:M,iconName:L,icon:p}=c;return F1(t({type:"icon"},c),()=>(G("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(o?r["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||M1()):(r["aria-hidden"]="true",r.focusable="false")),E2({icons:{main:x2(p),mask:a?x2(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:t(t({},k),l),symbol:s,title:o,maskId:n,titleId:i,extra:{attributes:r,styles:m,classes:f}})))},k8={mixout(){return{icon:A8(H8)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=$3,c.nodeCallback=w8,c}}},provides(c){c.i2svg=function(e){let{node:l=h,callback:s=()=>{}}=e;return $3(l,s)},c.generateSvgReplacementMutation=function(e,l){let{iconName:s,title:a,titleId:n,prefix:o,transform:i,symbol:f,mask:r,maskId:m,extra:M}=l;return new Promise((L,p)=>{Promise.all([g2(s,o),r.iconName?g2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[T,N]=w;L([e,E2({icons:{main:T,mask:N},prefix:o,iconName:s,transform:i,symbol:f,maskId:m,title:a,titleId:n,extra:M,watchable:!0})])}).catch(p)})},c.generateAbstractIcon=function(e){let{children:l,attributes:s,main:a,transform:n,styles:o}=e,i=P1(o);i.length>0&&(s.style=i);let f;return k2(n)&&(f=_("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),l.push(f||a.icon),{children:l,attributes:s}}}},V8={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=e;return F1({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:c,params:e});let s=[];return c(a=>{Array.isArray(a)?a.map(n=>{s=s.concat(n.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:s}]})}}}},T8={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:s=[],attributes:a={},styles:n={}}=e;return F1({type:"counter",content:c},()=>(G("beforeDOMElementCreation",{content:c,params:e}),f8({content:c.toString(),title:l,extra:{attributes:a,styles:n,classes:["".concat(z.cssPrefix,"-layers-counter"),...s]}})))}}}},E8={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=k,title:s=null,classes:a=[],attributes:n={},styles:o={}}=e;return F1({type:"text",content:c},()=>(G("beforeDOMElementCreation",{content:c,params:e}),j3({content:c,transform:t(t({},k),l),title:s,extra:{attributes:n,styles:o,classes:["".concat(z.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(e,l){let{title:s,transform:a,extra:n}=l,o=null,i=null;if(i4){let f=parseInt(getComputedStyle(e).fontSize,10),r=e.getBoundingClientRect();o=r.width/f,i=r.height/f}return z.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,j3({content:e.innerHTML,width:o,height:i,transform:a,title:s,extra:n,watchable:!0})])}}},P8=new RegExp('"',"ug"),J3=[1105920,1112319],K3=t(t(t(t({},{FontAwesome:{normal:"fas",400:"fas"}}),s6),x6),L6),b2=Object.keys(K3).reduce((c,e)=>(c[e.toLowerCase()]=K3[e],c),{}),R8=Object.keys(b2).reduce((c,e)=>{let l=b2[e];return c[e]=l[900]||[...Object.entries(l)][0][1],c},{});function D8(c){let e=c.replace(P8,""),l=U6(e,0),s=l>=J3[0]&&l<=J3[1],a=e.length===2?e[0]===e[1]:!1;return{value:p2(a?e[0]:e),isSecondary:s||a}}function F8(c,e){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),a=isNaN(s)?"normal":s;return(b2[l]||{})[a]||R8[l]}function Q3(c,e){let l="".concat(g6).concat(e.replace(":","-"));return new Promise((s,a)=>{if(c.getAttribute(l)!==null)return s();let o=c1(c.children).filter(L=>L.getAttribute(m2)===e)[0],i=O.getComputedStyle(c,e),f=i.getPropertyValue("font-family"),r=f.match(S6),m=i.getPropertyValue("font-weight"),M=i.getPropertyValue("content");if(o&&!r)return c.removeChild(o),s();if(r&&M!=="none"&&M!==""){let L=i.getPropertyValue("content"),p=F8(f,m),{value:w,isSecondary:T}=D8(L),N=r[0].startsWith("FontAwesome"),S=T2(p,w),d=S;if(N){let x=Y6(w);x.iconName&&x.prefix&&(S=x.iconName,p=x.prefix)}if(S&&!T&&(!o||o.getAttribute(S2)!==p||o.getAttribute(w2)!==d)){c.setAttribute(l,d),o&&c.removeChild(o);let x=b8(),{extra:D}=x;D.attributes[m2]=e,g2(S,p).then(W=>{let i0=E2(t(t({},x),{},{icons:{main:W,mask:k4()},prefix:p,iconName:d,extra:D,watchable:!0})),I1=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(I1,c.firstChild):c.appendChild(I1),I1.outerHTML=i0.map(t0=>C1(t0)).join(`
`),c.removeAttribute(l),s()}).catch(a)}else s()}else s()})}function I8(c){return Promise.all([Q3(c,"::before"),Q3(c,"::after")])}function O8(c){return c.parentNode!==document.head&&!~N6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(m2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function c4(c){if(R)return new Promise((e,l)=>{let s=c1(c.querySelectorAll("*")).filter(O8).map(I8),a=P2.begin("searchPseudoElements");R4(),Promise.all(s).then(()=>{a(),N2(),e()}).catch(()=>{a(),N2(),l()})})}var B8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=c4,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:l=h}=e;z.searchPseudoElements&&c4(l)}}},l4=!1,_8={mixout(){return{dom:{unwatch(){R4(),l4=!0}}}},hooks(){return{bootstrap(){X3(u2("mutationObserverCallbacks",{}))},noAuto(){x8()},watch(c){let{observeMutationsRoot:e}=c;l4?N2():X3(u2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},e4=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,s)=>{let a=s.toLowerCase().split("-"),n=a[0],o=a.slice(1).join("-");if(n&&o==="h")return l.flipX=!0,l;if(n&&o==="v")return l.flipY=!0,l;if(o=parseFloat(o),isNaN(o))return l;switch(n){case"grow":l.size=l.size+o;break;case"shrink":l.size=l.size-o;break;case"left":l.x=l.x-o;break;case"right":l.x=l.x+o;break;case"up":l.y=l.y-o;break;case"down":l.y=l.y+o;break;case"rotate":l.rotate=l.rotate+o;break}return l},e)},q8={mixout(){return{parse:{transform:c=>e4(c)}}},hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-transform");return l&&(c.transform=e4(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:l,transform:s,containerWidth:a,iconWidth:n}=e,o={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),r="rotate(".concat(s.rotate," 0 0)"),m={transform:"".concat(i," ").concat(f," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:t({},L.outer),children:[{tag:"g",attributes:t({},L.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:t(t({},l.icon.attributes),L.path)}]}]}}}},i2={x:0,y:0,width:"100%",height:"100%"};function s4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function U8(c){return c.tag==="g"?c.children:[c]}var j8={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-mask"),s=l?D1(l.split(" ").map(a=>a.trim())):k4();return s.prefix||(s.prefix=B()),c.mask=s,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:l,attributes:s,main:a,mask:n,maskId:o,transform:i}=e,{width:f,icon:r}=a,{width:m,icon:M}=n,L=D6({transform:i,containerWidth:m,iconWidth:f}),p={tag:"rect",attributes:t(t({},i2),{},{fill:"white"})},w=r.children?{children:r.children.map(s4)}:{},T={tag:"g",attributes:t({},L.inner),children:[s4(t({tag:r.tag,attributes:t(t({},r.attributes),L.path)},w))]},N={tag:"g",attributes:t({},L.outer),children:[T]},S="mask-".concat(o||M1()),d="clip-".concat(o||M1()),x={tag:"mask",attributes:t(t({},i2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,N]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:U8(M)},x]};return l.push(D,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(S,")")},i2)}),{children:l,attributes:s}}}},Z8={provides(c){let e=!1;O.matchMedia&&(e=O.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],s={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=t(t({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:t(t({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(o),l.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},G8={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-symbol"),s=l===null?!1:l===""?!0:l;return c.symbol=s,c}}}},W8=[O6,k8,V8,T8,E8,B8,_8,q8,j8,Z8,G8];s8(W8,{mixoutsTo:b});var F7=b.noAuto,F4=b.config,I7=b.library,I4=b.dom,O4=b.parse,O7=b.findIconDefinition,B7=b.toHtml,B4=b.icon,_7=b.layer,X8=b.text,Y8=b.counter;var $8=["*"],J8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},K8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},q4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),Q8=c=>{let e=q4(c.rotate),l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},D2=new WeakSet,_4="fa-auto-css";function c5(c,e){if(!e.autoAddCss||D2.has(c))return;if(c.getElementById(_4)!=null){e.autoAddCss=!1,D2.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",_4),l.innerHTML=I4.css();let s=c.head.childNodes,a=null;for(let n=s.length-1;n>-1;n--){let o=s[n],i=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}c.head.insertBefore(l,a),e.autoAddCss=!1,D2.add(c)}var l5=c=>c.prefix!==void 0&&c.iconName!==void 0,e5=(c,e)=>l5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},s5=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(l){F4.autoAddCss=l,this._autoAddCss=l}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=g({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),a5=(()=>{class c{constructor(){this.definitions={}}addIcons(...l){for(let s of l){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let a of s.icon[2])typeof a=="string"&&(this.definitions[s.prefix][a]=s)}}addIconPacks(...l){for(let s of l){let a=Object.keys(s).map(n=>s[n]);this.addIcons(...a)}}getIconDefinition(l,s){return l in this.definitions&&s in this.definitions[l]?this.definitions[l][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=g({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),n5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(l){if("size"in l)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=a3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[d1]})}}return c})(),o5=(()=>{class c{constructor(l,s){this.renderer=l,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(l){"size"in l&&(l.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${l.size.currentValue}`),l.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${l.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(F(s3),F(q2))}}static{this.\u0275cmp=U1({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[d1],ngContentSelectors:$8,decls:1,vars:0,template:function(s,a){s&1&&(r3(),f3(0))},encapsulation:2})}}return c})(),e9=(()=>{class c{constructor(l,s,a,n,o){this.sanitizer=l,this.config=s,this.iconLibrary=a,this.stackItem=n,this.document=H(v),o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(l){if(this.icon==null&&this.config.fallbackIcon==null){K8();return}if(l){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let a=this.buildParams();c5(this.document,this.config);let n=B4(s,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(l){let s=e5(l,this.config.defaultPrefix);if("icon"in s)return s;let a=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return a??(J8(s),null)}buildParams(){let l={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?O4.transform(this.transform):this.transform,a={};return l.rotate!=null&&!q4(l.rotate)&&(a["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title,transform:s,classes:Q8(l),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:a}}static{this.\u0275fac=function(s){return new(s||c)(F(e2),F(s5),F(a5),F(n5,8),F(o5,8))}}static{this.\u0275cmp=U1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(t3("innerHTML",a.renderedIconHTML,l3),i3("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[d1],decls:0,vars:0,template:function(s,a){},encapsulation:2})}}return c})();var s9=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=x1({type:c})}static{this.\u0275inj=u1({})}}return c})();var U4={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]};var j4={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]};var Z4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var G4={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var W4={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"]};var X4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var Y4={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var $4={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};var J4={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};var K4={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};var Q4={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"]};var c0={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var l0={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};var e0={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]};var s0={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var a0={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};var n0={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var o0=class c{transform(e){switch(e){case"faAngleDown":return $4;case"faAngleLeft":return c0;case"faAngleRight":return j4;case"faCalendarDays":return U4;case"faClock":return Y4;case"faEnvelope":return X4;case"faInstagram":return s0;case"faFacebookF":return l0;case"faLocationDot":return J4;case"faPlay":return K4;case"faPhone":return G4;case"faQuoteLeft":return Q4;case"faQuoteRight":return W4;case"faWhatsapp":return a0;case"faXTwitter":return e0;case"faYoutube":return n0;default:return Z4}}static \u0275fac=function(l){return new(l||c)};static \u0275pipe=n3({name:"convertStringLabelToFontawesomeIcon",type:c,pure:!0})};export{K1 as a,v0 as b,k7 as c,V7 as d,T7 as e,e9 as f,s9 as g,o0 as h};
