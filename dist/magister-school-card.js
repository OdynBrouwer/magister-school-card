/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(s,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o;const d=window,l=d.trustedTypes,c=l?l.emptyScript:"",h=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},u="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(u))return!1;this[u]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):s.forEach(e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;m[u]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(o=d.reactiveElementVersions)&&void 0!==o?o:d.reactiveElementVersions=[]).push("1.6.3");const f=window,$=f.trustedTypes,y=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,x="?"+b,A=`<${x}>`,k=document,S=()=>k.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,C="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,U=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,L=/"/g,O=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),M=new WeakMap,D=k.createTreeWalker(k,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",a=W;for(let e=0;e<i;e++){const i=t[e];let o,d,l=-1,c=0;for(;c<i.length&&(a.lastIndex=c,d=a.exec(i),null!==d);)c=a.lastIndex,a===W?"!--"===d[1]?a=R:void 0!==d[1]?a=N:void 0!==d[2]?(O.test(d[2])&&(n=RegExp("</"+d[2],"g")),a=U):void 0!==d[3]&&(a=U):a===U?">"===d[0]?(a=null!=n?n:W,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,o=d[1],a=void 0===d[3]?U:'"'===d[3]?L:z):a===L||a===z?a=U:a===R||a===N?a=W:(a=U,n=void 0);const h=a===U&&t[e+1].startsWith("/>")?" ":"";r+=a===W?i+A:l>=0?(s.push(o),i.slice(0,l)+w+i.slice(l)+b+h):i+b+(-2===l?(s.push(void 0),e):h)}return[V(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const a=t.length-1,o=this.parts,[d,l]=G(t,e);if(this.el=I.createElement(d,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith(b)){const i=l[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split(b),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Y:"@"===e[1]?Q:F})}else o.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),D.nextNode(),o.push({type:2,index:++n});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===x)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)o.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var n,r,a,o;if(e===T)return e;let d=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const l=j(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(r=null==d?void 0:d._$AO)||void 0===r||r.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,s)),void 0!==s?(null!==(a=(o=i)._$Co)&&void 0!==a?a:o._$Co=[])[s]=d:i._$Cl=d),void 0!==d&&(e=B(t,d._$AS(t,e.values),d,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);D.currentNode=n;let r=D.nextNode(),a=0,o=0,d=s[0];for(;void 0!==d;){if(a===d.index){let e;2===d.type?e=new q(r,r.nextSibling,this,t):1===d.type?e=new d.ctor(r,d.name,d.strings,this,t):6===d.type&&(e=new X(r,this,t)),this._$AV.push(e),d=s[++o]}a!==(null==d?void 0:d.index)&&(r=D.nextNode(),a++)}return D.currentNode=k,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),j(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==H&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new K(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new I(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=B(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const s=t;let a,o;for(t=n[0],a=0;a<n.length-1;a++)o=B(this,s[i+a],e,a),o===T&&(o=this._$AH[a]),r||(r=!j(o)||o!==this._$AH[a]),o===H?t=H:t!==H&&(t+=(null!=o?o:"")+n[a+1]),this._$AH[a]=o}r&&!s&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const Z=$?$.emptyScript:"";class Y extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:H)===T)return;const s=this._$AH,n=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const tt=f.litHtmlPolyfillSupport;null==tt||tt(I,q),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new q(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");class rt extends st{static properties={hass:{},config:{},_data:{state:!0},_kindNaam:{state:!0}};static styles=r`
    :host {
      display: block;
      width: 100%;
    }
    
    .card {
      padding: 20px;
      background: var(--card-background-color);
      border-radius: var(--ha-card-border-radius, 12px);
      box-shadow: var(--ha-card-box-shadow, 0px 2px 4px rgba(0,0,0,0.1));
      width: 100%;
      box-sizing: border-box;
    }
    
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 16px;
    }
    
    .header h1 {
      margin: 0;
      font-size: 1.8em;
      color: var(--primary-text-color);
      flex-grow: 1;
    }
    
    .kind-info {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      padding: 12px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    
    .kind-info h2 {
      margin: 0;
      font-size: 1.4em;
    }
    
    .kind-meta {
      display: flex;
      gap: 16px;
      margin-top: 8px;
      font-size: 0.9em;
      opacity: 0.9;
    }
    
    .layout-selector {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    
    .layout-btn {
      padding: 10px 16px;
      border: 1px solid var(--primary-color);
      background: transparent;
      color: var(--primary-color);
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9em;
      transition: all 0.3s ease;
    }
    
    .layout-btn:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }
    
    .layout-btn.active {
      background: var(--primary-color);
      color: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    
    /* Responsive Grid Layouts */
    .grid-1 { 
      display: grid; 
      grid-template-columns: 1fr; 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-2 { 
      display: grid; 
      grid-template-columns: repeat(2, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-3 { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-auto { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
      gap: 20px; 
      width: 100%;
    }

    /* Custom Column Layout */
    .column-container {
      display: flex;
      gap: 20px;
      width: 100%;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1;
      min-width: 0;
    }

    @media (max-width: 1200px) {
      .column-container {
        flex-wrap: wrap;
      }
      
      .column {
        flex: 1 1 calc(50% - 10px);
        min-width: 300px;
      }
    }

    @media (max-width: 768px) {
      .column-container {
        flex-direction: column;
      }
      
      .column {
        flex: 1 1 100%;
        min-width: 100%;
      }
    }
    
    @media (max-width: 1200px) {
      .grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .card {
        padding: 16px;
      }
      
      .header {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .header h1 {
        font-size: 1.5em;
      }
      
      .layout-selector {
        width: 100%;
        justify-content: center;
      }
      
      .grid-2,
      .grid-3 {
        grid-template-columns: 1fr;
      }
      
      .grid-auto {
        grid-template-columns: 1fr;
      }
      
      .kind-meta {
        flex-direction: column;
        gap: 4px;
      }
    }
    
    @media (max-width: 480px) {
      .card {
        padding: 12px;
      }
      
      .layout-btn {
        padding: 8px 12px;
        font-size: 0.8em;
      }
    }
    
    /* Widget Styling */
    .widget {
      background: var(--secondary-background-color);
      border-radius: 12px;
      padding: 20px;
      border-left: 6px solid var(--primary-color);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      height: fit-content;
      min-height: 200px;
      display: flex;
      flex-direction: column;
    }
    
    .widget:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    }
    
    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--divider-color);
    }
    
    .widget-title {
      font-size: 1.3em;
      font-weight: bold;
      color: var(--primary-text-color);
      margin: 0;
    }
    
    .widget-icon {
      font-size: 1.4em;
      background: var(--primary-color);
      color: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    .widget-content {
      flex-grow: 1;
      overflow-y: auto;
      max-height: 400px;
    }
    
    /* Specifieke Widget Styles */
    .cijfer-item, .afspraak-item, .opdracht-item, .mededeling-item {
      padding: 12px;
      border-left: 4px solid var(--accent-color);
      margin-bottom: 12px;
      background: var(--primary-background-color);
      border-radius: 8px;
      transition: background-color 0.2s ease;
    }
    
    .cijfer-item:hover, .afspraak-item:hover, .opdracht-item:hover {
      background: var(--secondary-background-color);
    }

    /* Uitval styling */
    .afspraak-item.uitval {
      border-left-color: var(--error-color, #f44336);
      background: rgba(244, 67, 54, 0.08);
      opacity: 0.85;
      position: relative;
    }

    .afspraak-item.uitval .uitval-label {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--error-color, #f44336);
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 0.78em;
      font-weight: bold;
      margin-bottom: 4px;
      letter-spacing: 0.04em;
    }

    .afspraak-item.uitval .les-tijd,
    .afspraak-item.uitval .les-omschrijving {
      text-decoration: line-through;
      opacity: 0.6;
    }
    
    .vak { 
      font-weight: bold; 
      font-size: 1.1em;
    }
    
    .waarde { 
      font-size: 1.3em; 
      color: var(--accent-color);
      font-weight: bold;
    }
    
    .cijfer-item .wf {
      font-size: 0.85em;
      opacity: 0.75;
      margin-left: 4px;
    }
    
    .tijd { 
      font-size: 0.9em; 
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
    
    .empty-state {
      text-align: center;
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 40px 20px;
      font-size: 1.1em;
    }
    
    /* Scrollbar styling */
    .widget-content::-webkit-scrollbar {
      width: 6px;
    }
    
    .widget-content::-webkit-scrollbar-track {
      background: var(--secondary-background-color);
      border-radius: 3px;
    }
    
    .widget-content::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 3px;
    }
    
    .widget-content::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }
    
    /* Badge voor belangrijke items */
    .badge {
      background: var(--error-color);
      color: white;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.8em;
      margin-left: 8px;
    }
    
    .badge-warning {
      background: var(--warning-color);
    }
    
    .badge-success {
      background: var(--success-color);
    }

    .schoolweek-row {
      display: grid;
      grid-template-columns: minmax(90px, 1fr) minmax(120px, 1fr);
      gap: 12px;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .schoolweek-row:last-child {
      border-bottom: 0;
    }

    .schoolweek-day {
      color: var(--primary-text-color);
      font-weight: 600;
    }

    .schoolweek-time {
      color: var(--secondary-text-color);
      text-align: right;
    }
  `;constructor(){super(),this._data=null,this._kindNaam="",this._layout="grid-auto"}setConfig(t){this.config={layout:"auto",show_widgets:["stats","schooltijden","volgende_schooldag","rooster_vandaag","cijfers","opdrachten"],widget_columns:null,...t}}connectedCallback(){super.connectedCallback(),this._fetchData()}_fetchData(){if(!this.hass)return;const t=this.hass.states[this.config.entity];t&&(this._data=t.attributes,this._extractKindInfo())}_extractKindInfo(){if(!this._data)return;const t=this.config.entity;t.includes("tyas")?this._kindNaam="Tyas Brouwer":t.includes("overview")?this._kindNaam=this._data.naam||"Onbekend":this._kindNaam=t.replace("sensor.magister_","").replace(/_/g," ")}_formatTijd(t){if(!t)return"";const e=t.replace(" ","T"),i=new Date(e);return isNaN(i.getTime())?t.substr(11,5):i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}_getLocaleDateStr(t){return t?t.substr(0,10):""}_getVandaag(){return(new Date).toLocaleDateString("en-CA")}_getMorgen(){const t=new Date;return t.setDate(t.getDate()+1),t.toLocaleDateString("en-CA")}_setLayout(t){this._layout=t}render(){if(!this._data)return P`
        <div class="card">
          <div class="empty-state">📚 School data laden...</div>
        </div>
      `;const t=this.config.widget_columns&&Object.keys(this.config.widget_columns).length>0;return P`
      <div class="card">
        <div class="header">
          <h1>🏫 School Dashboard</h1>
          ${t?"":P`
            <div class="layout-selector">
              <button class="layout-btn ${"grid-1"===this._layout?"active":""}" 
                      @click=${()=>this._setLayout("grid-1")}>1 Kolom</button>
              <button class="layout-btn ${"grid-2"===this._layout?"active":""}" 
                      @click=${()=>this._setLayout("grid-2")}>2 Kolommen</button>
              <button class="layout-btn ${"grid-3"===this._layout?"active":""}" 
                      @click=${()=>this._setLayout("grid-3")}>3 Kolommen</button>
              <button class="layout-btn ${"grid-auto"===this._layout?"active":""}" 
                      @click=${()=>this._setLayout("grid-auto")}>Auto Fit</button>
            </div>
          `}
        </div>
        
        ${this._renderKindInfo()}
        
        ${t?this._renderColumnLayout():P`
          <div class="${this._layout}">
            ${this._renderWidgets()}
          </div>
        `}
      </div>
    `}_renderKindInfo(){return this._kindNaam?P`
      <div class="kind-info">
        <h2>${this._kindNaam}</h2>
        <div class="kind-meta">
          ${this._data.stamnummer?P`<span>🎫 Stamnummer: ${this._data.stamnummer}</span>`:""}
          ${this._data.geboortedatum?P`<span>🎂 Geboortedatum: ${this._data.geboortedatum}</span>`:""}
          <span>🕒 Laatste update: ${this.hass.states[this.config.entity].state}</span>
        </div>
      </div>
    `:P``}_renderColumnLayout(){const t=this.config.widget_columns,e=Object.keys(t).sort();return P`
      <div class="column-container">
        ${e.map(e=>P`
          <div class="column">
            ${this._renderWidgetsForColumn(t[e])}
          </div>
        `)}
      </div>
    `}_renderWidgetsForColumn(t){return t&&Array.isArray(t)?t.map(t=>this._getWidgetByName(t)).filter(t=>t):[]}_getWidgetByName(t){switch(t){case"stats":return this._renderStatsWidget();case"schooltijden":return this._renderSchooltijdenWidget();case"week_schooltijden":return this._renderWeekSchooltijdenWidget();case"volgende_schooldag":return this._renderVolgendeSchooldagWidget();case"volgende_les":return this._renderVolgendeLesWidget();case"rooster_vandaag":return this._renderRoosterWidget();case"rooster_meta":return this._renderRoosterMetaWidget();case"rooster_morgen":return this._renderRoosterMorgenWidget();case"cijfers":return this._renderCijfersWidget();case"opdrachten":return this._renderOpdrachtenWidget();case"absenties":return this._renderAbsentiesWidget();case"wijzigingen":return this._renderWijzigingenWidget();case"aanmeldingen":return this._renderAanmeldingenWidget();case"activiteiten":return this._renderActiviteitenWidget();default:return null}}_renderWidgets(){const t=this.config.show_widgets||["stats","schooltijden","volgende_schooldag","rooster_vandaag","cijfers","opdrachten"],e=[];return t.includes("stats")&&e.push(this._renderStatsWidget()),t.includes("schooltijden")&&e.push(this._renderSchooltijdenWidget()),t.includes("week_schooltijden")&&e.push(this._renderWeekSchooltijdenWidget()),t.includes("volgende_schooldag")&&e.push(this._renderVolgendeSchooldagWidget()),t.includes("volgende_les")&&e.push(this._renderVolgendeLesWidget()),t.includes("rooster_vandaag")&&e.push(this._renderRoosterWidget()),t.includes("rooster_meta")&&e.push(this._renderRoosterMetaWidget()),t.includes("rooster_morgen")&&e.push(this._renderRoosterMorgenWidget()),t.includes("cijfers")&&e.push(this._renderCijfersWidget()),t.includes("opdrachten")&&e.push(this._renderOpdrachtenWidget()),t.includes("absenties")&&e.push(this._renderAbsentiesWidget()),t.includes("wijzigingen")&&e.push(this._renderWijzigingenWidget()),t.includes("aanmeldingen")&&e.push(this._renderAanmeldingenWidget()),t.includes("activiteiten")&&e.push(this._renderActiviteitenWidget()),e}_renderAfspraakItem(t){const e=!0===t.is_uitval;return P`
      <div class="afspraak-item ${e?"uitval":""}">
        ${e?P`<div class="uitval-label">🚫 Vervallen</div>`:""}
        <div class="les-tijd"><strong>${this._formatTijd(t.start)} - ${this._formatTijd(t.einde)}</strong></div>
        <div class="les-omschrijving">${t.omschrijving}</div>
        ${t.lokaal?P`<div class="tijd">📍 ${t.lokaal}</div>`:""}
        ${t.is_huiswerk?P`<span class="badge">HW</span>`:""}
      </div>
    `}_renderRoosterWidget(){const t=this._data.afspraken||[],e=this._getVandaag(),i=t.filter(t=>this._getLocaleDateStr(t.start)===e);return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📅 Rooster Vandaag</h3>
          <span class="widget-icon">${i.length}</span>
        </div>
        <div class="widget-content">
          ${i.length>0?i.map(t=>this._renderAfspraakItem(t)):P`<div class="empty-state">Geen lessen vandaag 🎉</div>`}
        </div>
      </div>
    `}_renderRoosterMetaWidget(){const t=(new Date).getHours(),e=this._data.afspraken||[],i=t<18,s=i?this._getVandaag():this._getMorgen(),n=e.filter(t=>this._getLocaleDateStr(t.start)===s);return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">${i?"📅 Rooster (Vandaag)":"📅 Rooster (Morgen)"}</h3>
          <span class="widget-icon">${n.length}</span>
        </div>
        <div class="widget-content">
          ${n.length>0?n.map(t=>this._renderAfspraakItem(t)):P`<div class="empty-state">Geen lessen ${i?"vandaag":"morgen"} 🎉</div>`}
        </div>
      </div>
    `}_renderRoosterMorgenWidget(){const t=this._data.afspraken||[],e=this._getMorgen(),i=t.filter(t=>this._getLocaleDateStr(t.start)===e);return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📅 Rooster Morgen</h3>
          <span class="widget-icon">${i.length}</span>
        </div>
        <div class="widget-content">
          ${i.length>0?i.map(t=>this._renderAfspraakItem(t)):P`<div class="empty-state">Geen lessen morgen 🎉</div>`}
        </div>
      </div>
    `}_renderWeekSchooltijdenWidget(){const t=(this._data.afspraken||[]).filter(t=>"Les"===t.soort&&!t.is_uitval),e=["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag"].map((e,i)=>{const s=t.filter(t=>{const e=this._getLocaleDateStr(t.start);if(!e)return!1;const s=new Date(`${e}T12:00:00`).getDay();return(0===s?6:s-1)===i});if(0===s.length)return{name:e,start:null,end:null};const n=s.map(t=>t.start?.substr(11,5)).filter(Boolean).sort(),r=s.map(t=>t.einde?.substr(11,5)).filter(Boolean).sort();return{name:e,start:n[0],end:r[r.length-1]}});return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">Schooltijden per week</h3>
        </div>
        <div class="widget-content">
          ${e.map(t=>P`
            <div class="schoolweek-row">
              <span class="schoolweek-day">${t.name}</span>
              <span class="schoolweek-time">
                ${t.start&&t.end?`${t.start} - ${t.end}`:"Geen lessen"}
              </span>
            </div>
          `)}
        </div>
      </div>
    `}_renderCijfersWidget(){const t=this._data.cijfers||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🎓 Recente Cijfers</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,5).map(t=>P`
              <div class="cijfer-item">
                <div>
                  <span class="vak">${t.vak?.toUpperCase()}</span>: 
                  <span class="waarde">${t.waarde}</span>
                  ${t.weegfactor?P` <span class="wf">(x${t.weegfactor})</span>`:""}
                </div>
                <div class="tijd">${t.omschrijving} - ${t.ingevoerd_op?.substr(0,10)}</div>
              </div>
            `):P`<div class="empty-state">Geen cijfers beschikbaar</div>`}
        </div>
      </div>
    `}_renderOpdrachtenWidget(){const t=(this._data.opdrachten||[]).filter(t=>!t.ingeleverd_op);return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📝 Open Opdrachten</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,5).map(t=>{const e=(new Date(t.inleveren_voor)-new Date)/864e5,i=e<1,s=e<2;return P`
                <div class="opdracht-item" style="${i?"border-left-color: var(--error-color); background: rgba(244, 67, 54, 0.1);":s?"border-left-color: var(--warning-color); background: rgba(255, 152, 0, 0.1);":""}">
                  <div>
                    <strong>${t.titel}</strong> 
                    ${i?P`<span class="badge">SPOED!</span>`:s?P`<span class="badge badge-warning">BIJNA!</span>`:""}
                  </div>
                  <div class="tijd">Vak: ${t.vak?.toUpperCase()}</div>
                  <div class="tijd">📅 ${t.inleveren_voor?.substr(0,16)}</div>
                </div>
              `}):P`<div class="empty-state">Geen open opdrachten ✅</div>`}
        </div>
      </div>
    `}_renderAbsentiesWidget(){const t=this._data.absenties||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⚠️ Recente Absenties</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(-3).map(t=>P`
              <div class="afspraak-item">
                <div><strong>${t.start?.substr(0,10)}</strong></div>
                <div>${t.omschrijving}</div>
                ${t.afspraak?P`<div class="tijd">${t.afspraak}</div>`:""}
              </div>
            `):P`<div class="empty-state">Geen recente absenties 👍</div>`}
        </div>
      </div>
    `}_renderWijzigingenWidget(){const t=this._data.wijzigingen||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🔄 Roosterwijzigingen</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(-3).map(t=>P`
              <div class="afspraak-item">
                <div><strong>${this._formatTijd(t.start)} - ${this._formatTijd(t.einde)}</strong></div>
                <div>${t.omschrijving}</div>
                ${t.lokaal?P`<div class="tijd">📍 ${t.lokaal}</div>`:""}
              </div>
            `):P`<div class="empty-state">Geen wijzigingen</div>`}
        </div>
      </div>
    `}_renderStatsWidget(){return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📊 Overzicht</h3>
          <span class="widget-icon">📈</span>
        </div>
        <div class="widget-content">
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📅 Lessen vandaag:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_afspraken_vandaag||0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📚 Huiswerk:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_huiswerk||0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>🎓 Cijfers:</span>
              <strong style="color: var(--accent-color);">${this._data.cijfers?.length||0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📝 Opdrachten:</span>
              <strong style="color: var(--accent-color);">${this._data.opdrachten?.length||0}</strong>
            </div>
          </div>
        </div>
      </div>
    `}_renderVolgendeLesWidget(){return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⏰ Volgende Les</h3>
          <span class="widget-icon">🕒</span>
        </div>
        <div class="widget-content">
          ${this._data.volgende_afspraak&&"Geen"!==this._data.volgende_afspraak?P`
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 1.4em; font-weight: bold; color: var(--accent-color); margin-bottom: 8px;">
                  ${this._data.volgende_afspraak}
                </div>
                ${this._data.volgende_vak?P`
                  <div style="font-size: 1.1em; color: var(--primary-text-color); margin-bottom: 16px;">
                    ${this._data.volgende_vak}
                  </div>
                `:""}
                <div style="background: var(--primary-color); color: white; padding: 8px 16px; border-radius: 20px; display: inline-block;">
                  🎯 Komende les
                </div>
              </div>
            `:P`<div class="empty-state">Geen komende lessen 🎉</div>`}
        </div>
      </div>
    `}_renderAanmeldingenWidget(){const t=this._data.aanmeldingen||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🏫 Aanmeldingen</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,3).map(t=>P`
              <div class="afspraak-item">
                <div><strong>${t.start} - ${t.einde}</strong></div>
                <div>${t.studie||""}</div>
                <div class="tijd">${t.lesperiode||""}</div>
              </div>
            `):P`<div class="empty-state">Geen aanmeldingen</div>`}
        </div>
      </div>
    `}_renderActiviteitenWidget(){const t=this._data.activiteiten||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📢 Activiteiten</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,3).map(t=>P`
              <div class="afspraak-item">
                <div><strong>${t.titel}</strong></div>
                <div class="tijd">Zichtbaar: ${t.zichtbaar_vanaf} t/m ${t.zichtbaar_tot}</div>
              </div>
            `):P`<div class="empty-state">Geen activiteiten</div>`}
        </div>
      </div>
    `}_renderSchooltijdenWidget(){const t=this._data.school_start_vandaag||"Geen",e=this._data.school_einde_vandaag||"Geen",i=this._data.lessen_vandaag||[];return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🏫 Schooltijden Vandaag</h3>
          <span class="widget-icon">${i.length}</span>
        </div>
        <div class="widget-content">
          <div class="afspraak-item" style="border-left: 4px solid var(--success-color);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>⏰ Eerste les:</span>
              <strong style="color: var(--accent-color);">${t}</strong>
            </div>
          </div>
          <div class="afspraak-item" style="border-left: 4px solid var(--warning-color);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>🔔 Laatste les:</span>
              <strong style="color: var(--accent-color);">${e}</strong>
            </div>
          </div>
          ${i.length>0?i.map(t=>P`
            <div class="afspraak-item" style="border-left: 4px solid var(--primary-color);">
              <div><strong>${t.start} - ${t.einde}</strong> ${t.vak?P`<span class="vak">${t.vak}</span>`:""}</div>
              ${t.omschrijving?P`<div>${t.omschrijving}</div>`:""}
              ${t.lokaal?P`<div class="tijd">📍 ${t.lokaal}</div>`:""}
            </div>
          `):P`<div class="empty-state">Geen lessen vandaag 🎉</div>`}
        </div>
      </div>
    `}_renderVolgendeSchooldagWidget(){const t=this._data.volgende_schooldag||"Geen",e=this._data.volgende_schooldag_start||"Geen",i=this._data.volgende_schooldag_einde||"Geen";return P`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📆 Volgende Schooldag</h3>
          <span class="widget-icon">→</span>
        </div>
        <div class="widget-content">
          <div class="afspraak-item" style="border-left: 4px solid var(--accent-color);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>📅 Datum:</span>
              <strong style="color: var(--accent-color);">${t}</strong>
            </div>
          </div>
          <div class="afspraak-item" style="border-left: 4px solid var(--success-color);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>⏰ Eerste les:</span>
              <strong style="color: var(--accent-color);">${e}</strong>
            </div>
          </div>
          <div class="afspraak-item" style="border-left: 4px solid var(--warning-color);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>🔔 Laatste les:</span>
              <strong style="color: var(--accent-color);">${i}</strong>
            </div>
          </div>
          ${"Geen"===t?P`<div class="empty-state">Geen komende schooldag gevonden</div>`:""}
        </div>
      </div>
    `}}customElements.define("magister-school-card",rt);
//# sourceMappingURL=magister-school-card.js.map
