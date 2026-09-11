/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o;const d=window,l=d.trustedTypes,c=l?l.emptyScript:"",h=d.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:p},u="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(u))return!1;this[u]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):s.forEach(e=>{const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)})})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:g).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=s.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:g;this._$El=r,this[r]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;m[u]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(o=d.reactiveElementVersions)&&void 0!==o?o:d.reactiveElementVersions=[]).push("1.6.3");const f=window,$=f.trustedTypes,y=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,x="?"+b,A=`<${x}>`,k=document,S=()=>k.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,C="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,R=/>/g,N=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,L=/"/g,O=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),M=new WeakMap,D=k.createTreeWalker(k,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let r,a=2===e?"<svg>":"",n=W;for(let e=0;e<i;e++){const i=t[e];let o,d,l=-1,c=0;for(;c<i.length&&(n.lastIndex=c,d=n.exec(i),null!==d);)c=n.lastIndex,n===W?"!--"===d[1]?n=z:void 0!==d[1]?n=R:void 0!==d[2]?(O.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=N):void 0!==d[3]&&(n=N):n===N?">"===d[0]?(n=null!=r?r:W,l=-1):void 0===d[1]?l=-2:(l=n.lastIndex-d[2].length,o=d[1],n=void 0===d[3]?N:'"'===d[3]?L:U):n===L||n===U?n=N:n===z||n===R?n=W:(n=N,r=void 0);const h=n===N&&t[e+1].startsWith("/>")?" ":"";a+=n===W?i+A:l>=0?(s.push(o),i.slice(0,l)+w+i.slice(l)+b+h):i+b+(-2===l?(s.push(void 0),e):h)}return[V(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const n=t.length-1,o=this.parts,[d,l]=G(t,e);if(this.el=I.createElement(d,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&o.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(w)||e.startsWith(b)){const i=l[a++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+w).split(b),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Y:"@"===e[1]?Q:F})}else o.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(b),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),D.nextNode(),o.push({type:2,index:++r});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===x)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(b,t+1));)o.push({type:7,index:r}),t+=b.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,s){var r,a,n,o;if(e===P)return e;let d=void 0!==s?null===(r=i._$Co)||void 0===r?void 0:r[s]:i._$Cl;const l=j(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(a=null==d?void 0:d._$AO)||void 0===a||a.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,s)),void 0!==s?(null!==(n=(o=i)._$Co)&&void 0!==n?n:o._$Co=[])[s]=d:i._$Cl=d),void 0!==d&&(e=B(t,d._$AS(t,e.values),d,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);D.currentNode=r;let a=D.nextNode(),n=0,o=0,d=s[0];for(;void 0!==d;){if(n===d.index){let e;2===d.type?e=new q(a,a.nextSibling,this,t):1===d.type?e=new d.ctor(a,d.name,d.strings,this,t):6===d.type&&(e=new X(a,this,t)),this._$AV.push(e),d=s[++o]}n!==(null==d?void 0:d.index)&&(a=D.nextNode(),n++)}return D.currentNode=k,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),j(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=I.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new K(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new I(t)),e}T(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new q(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(void 0===r)t=B(this,t,e,0),a=!j(t)||t!==this._$AH&&t!==P,a&&(this._$AH=t);else{const s=t;let n,o;for(t=r[0],n=0;n<r.length-1;n++)o=B(this,s[i+n],e,n),o===P&&(o=this._$AH[n]),a||(a=!j(o)||o!==this._$AH[n]),o===T?t=T:t!==T&&(t+=(null!=o?o:"")+r[n+1]),this._$AH[n]=o}a&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const Z=$?$.emptyScript:"";class Y extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends F{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:T)===P)return;const s=this._$AH,r=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const tt=f.litHtmlPolyfillSupport;null==tt||tt(I,q),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;const a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=a._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;a._$litPart$=n=new q(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return P}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");class at extends st{static properties={hass:{},config:{},_data:{state:!0},_kindNaam:{state:!0}};static styles=a`
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
    
    .grid-4 { 
      display: grid; 
      grid-template-columns: repeat(4, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-5 { 
      display: grid; 
      grid-template-columns: repeat(5, 1fr); 
      gap: 20px; 
      width: 100%;
    }
    
    .grid-6 { 
      display: grid; 
      grid-template-columns: repeat(6, 1fr); 
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
      
      .grid-4,
      .grid-5,
      .grid-6 {
        grid-template-columns: repeat(3, 1fr);
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
      .grid-3,
      .grid-4,
      .grid-5,
      .grid-6 {
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

    /* Gewijzigd styling */
    .afspraak-item.gewijzigd {
      border-left-color: var(--warning-color, #ff9800);
      background: rgba(255, 152, 0, 0.08);
      position: relative;
    }

    .afspraak-item.gewijzigd .uitval-label {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--warning-color, #ff9800);
      color: white;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 0.78em;
      font-weight: bold;
      margin-bottom: 4px;
      letter-spacing: 0.04em;
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
  `;constructor(){super(),this._data=null,this._kindNaam="",this._layout="grid-auto"}setConfig(t){this.config={layout:"auto",show_widgets:["stats","schooltijden","volgende_schooldag","rooster_vandaag","cijfers","opdrachten"],widget_columns:null,...t},this._layout=this._normalizeLayout(this.config.layout)}_normalizeLayout(t){if(!t||"auto"===t)return"grid-auto";return["grid-1","grid-2","grid-3","grid-4","grid-5","grid-6","grid-auto"].includes(t)?t:"grid-auto"}connectedCallback(){super.connectedCallback(),this._fetchData()}_fetchData(){if(!this.hass)return;const t=this.hass.states[this.config.entity];t&&(this._data=t.attributes,this._extractKindInfo())}_extractKindInfo(){if(!this._data)return;const t=this.config.entity;t.includes("tyas")?this._kindNaam="Tyas Brouwer":t.includes("overview")?this._kindNaam=this._data.naam||"Onbekend":this._kindNaam=t.replace("sensor.magister_","").replace(/_/g," ")}_formatTijd(t){if(!t)return"";const e=t.replace(" ","T"),i=new Date(e);return isNaN(i.getTime())?t.substr(11,5):i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})}_getLocaleDateStr(t){return t?t.substr(0,10):""}_getVandaag(){return(new Date).toLocaleDateString("en-CA")}_getMorgen(){const t=new Date;return t.setDate(t.getDate()+1),t.toLocaleDateString("en-CA")}_setLayout(t){this._layout=t}render(){if(!this._data)return H`
        <div class="card">
          <div class="empty-state">📚 School data laden...</div>
        </div>
      `;const t=this.config.widget_columns&&Object.keys(this.config.widget_columns).length>0;return H`
      <div class="card">
        <div class="header">
          <h1>🏫 School Dashboard</h1>
          ${t?"":H`
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
        
        ${t?this._renderColumnLayout():H`
          <div class="${this._layout}">
            ${this._renderWidgets()}
          </div>
        `}
      </div>
    `}_renderKindInfo(){return this._kindNaam?H`
      <div class="kind-info">
        <h2>${this._kindNaam}</h2>
        <div class="kind-meta">
          ${this._data.stamnummer?H`<span>🎫 Stamnummer: ${this._data.stamnummer}</span>`:""}
          ${this._data.geboortedatum?H`<span>🎂 Geboortedatum: ${this._data.geboortedatum}</span>`:""}
          <span>🕒 Laatste update: ${this.hass.states[this.config.entity].state}</span>
        </div>
      </div>
    `:H``}_renderColumnLayout(){const t=this.config.widget_columns,e=Object.keys(t).sort();return H`
      <div class="column-container">
        ${e.map(e=>H`
          <div class="column">
            ${this._renderWidgetsForColumn(t[e])}
          </div>
        `)}
      </div>
    `}_renderWidgetsForColumn(t){return t&&Array.isArray(t)?t.map(t=>this._getWidgetByName(t)).filter(t=>t):[]}_getWidgetByName(t){switch(t){case"stats":return this._renderStatsWidget();case"schooltijden":return this._renderSchooltijdenWidget();case"week_schooltijden":return this._renderWeekSchooltijdenWidget();case"volgende_schooldag":return this._renderVolgendeSchooldagWidget();case"volgende_les":return this._renderVolgendeLesWidget();case"rooster_vandaag":return this._renderRoosterWidget();case"rooster_meta":return this._renderRoosterMetaWidget();case"rooster_morgen":return this._renderRoosterMorgenWidget();case"cijfers":return this._renderCijfersWidget();case"opdrachten":return this._renderOpdrachtenWidget();case"absenties":return this._renderAbsentiesWidget();case"wijzigingen":return this._renderWijzigingenWidget();case"aanmeldingen":return this._renderAanmeldingenWidget();case"activiteiten":return this._renderActiviteitenWidget();default:return null}}_renderWidgets(){const t=this.config.show_widgets||["stats","schooltijden","volgende_schooldag","rooster_vandaag","cijfers","opdrachten"],e=[];return t.includes("stats")&&e.push(this._renderStatsWidget()),t.includes("schooltijden")&&e.push(this._renderSchooltijdenWidget()),t.includes("week_schooltijden")&&e.push(this._renderWeekSchooltijdenWidget()),t.includes("volgende_schooldag")&&e.push(this._renderVolgendeSchooldagWidget()),t.includes("volgende_les")&&e.push(this._renderVolgendeLesWidget()),t.includes("rooster_vandaag")&&e.push(this._renderRoosterWidget()),t.includes("rooster_meta")&&e.push(this._renderRoosterMetaWidget()),t.includes("rooster_morgen")&&e.push(this._renderRoosterMorgenWidget()),t.includes("cijfers")&&e.push(this._renderCijfersWidget()),t.includes("opdrachten")&&e.push(this._renderOpdrachtenWidget()),t.includes("absenties")&&e.push(this._renderAbsentiesWidget()),t.includes("wijzigingen")&&e.push(this._renderWijzigingenWidget()),t.includes("aanmeldingen")&&e.push(this._renderAanmeldingenWidget()),t.includes("activiteiten")&&e.push(this._renderActiviteitenWidget()),e}_renderAfspraakItem(t){const e=!0===t.is_uitval,i=!e&&!0===t.was_afwijkend;return H`
      <div class="afspraak-item ${e?"uitval":""} ${i?"gewijzigd":""}">
        ${e?H`<div class="uitval-label">🚫 Vervallen</div>`:""}
        ${i?H`<div class="uitval-label">🔄 Gewijzigd</div>`:""}
        <div class="les-tijd"><strong>${this._formatTijd(t.start)} - ${this._formatTijd(t.einde)}</strong></div>
        <div class="les-omschrijving">${t.omschrijving}</div>
        ${t.lokaal?H`<div class="tijd">📍 ${t.lokaal}</div>`:""}
        ${t.is_huiswerk?H`<span class="badge">HW</span>`:""}
      </div>
    `}_renderRoosterWidget(){const t=this._data.afspraken||[],e=this._getVandaag(),i=t.filter(t=>this._getLocaleDateStr(t.start)===e);return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📅 Rooster Vandaag</h3>
          <span class="widget-icon">${i.length}</span>
        </div>
        <div class="widget-content">
          ${i.length>0?i.map(t=>this._renderAfspraakItem(t)):H`<div class="empty-state">Geen lessen vandaag 🎉</div>`}
        </div>
      </div>
    `}_renderRoosterMetaWidget(){const t=(new Date).getHours(),e=this._data.afspraken||[],i=t<18,s=i?this._getVandaag():this._getMorgen(),r=e.filter(t=>this._getLocaleDateStr(t.start)===s);return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">${i?"📅 Rooster (Vandaag)":"📅 Rooster (Morgen)"}</h3>
          <span class="widget-icon">${r.length}</span>
        </div>
        <div class="widget-content">
          ${r.length>0?r.map(t=>this._renderAfspraakItem(t)):H`<div class="empty-state">Geen lessen ${i?"vandaag":"morgen"} 🎉</div>`}
        </div>
      </div>
    `}_renderRoosterMorgenWidget(){const t=this._data.afspraken||[],e=this._getMorgen(),i=t.filter(t=>this._getLocaleDateStr(t.start)===e);return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📅 Rooster Morgen</h3>
          <span class="widget-icon">${i.length}</span>
        </div>
        <div class="widget-content">
          ${i.length>0?i.map(t=>this._renderAfspraakItem(t)):H`<div class="empty-state">Geen lessen morgen 🎉</div>`}
        </div>
      </div>
    `}_renderWeekSchooltijdenWidget(){const t=(this._data.afspraken||[]).filter(t=>"Les"===t.soort&&!t.is_uitval),e=["Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag"].map((e,i)=>{const s=t.filter(t=>{const e=this._getLocaleDateStr(t.start);if(!e)return!1;const s=new Date(`${e}T12:00:00`).getDay();return(0===s?6:s-1)===i});if(0===s.length)return{name:e,start:null,end:null};const r=s.map(t=>t.start?.substr(11,5)).filter(Boolean).sort(),a=s.map(t=>t.einde?.substr(11,5)).filter(Boolean).sort();return{name:e,start:r[0],end:a[a.length-1]}});return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">Schooltijden per week</h3>
        </div>
        <div class="widget-content">
          ${e.map(t=>H`
            <div class="schoolweek-row">
              <span class="schoolweek-day">${t.name}</span>
              <span class="schoolweek-time">
                ${t.start&&t.end?`${t.start} - ${t.end}`:"Geen lessen"}
              </span>
            </div>
          `)}
        </div>
      </div>
    `}_renderCijfersWidget(){const t=this._data.cijfers||[];return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🎓 Recente Cijfers</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,5).map(t=>H`
              <div class="cijfer-item">
                <div>
                  <span class="vak">${t.vak?.toUpperCase()}</span>: 
                  <span class="waarde">${t.waarde}</span>
                  ${t.weegfactor?H` <span class="wf">(x${t.weegfactor})</span>`:""}
                </div>
                <div class="tijd">${t.omschrijving} - ${t.ingevoerd_op?.substr(0,10)}</div>
              </div>
            `):H`<div class="empty-state">Geen cijfers beschikbaar</div>`}
        </div>
      </div>
    `}_renderOpdrachtenWidget(){const t=(this._data.opdrachten||[]).filter(t=>!t.ingeleverd_op);return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📝 Open Opdrachten</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,5).map(t=>{const e=(new Date(t.inleveren_voor)-new Date)/864e5,i=e<1,s=e<2;return H`
                <div class="opdracht-item" style="${i?"border-left-color: var(--error-color); background: rgba(244, 67, 54, 0.1);":s?"border-left-color: var(--warning-color); background: rgba(255, 152, 0, 0.1);":""}">
                  <div>
                    <strong>${t.titel}</strong> 
                    ${i?H`<span class="badge">SPOED!</span>`:s?H`<span class="badge badge-warning">BIJNA!</span>`:""}
                  </div>
                  <div class="tijd">Vak: ${t.vak?.toUpperCase()}</div>
                  <div class="tijd">📅 ${t.inleveren_voor?.substr(0,16)}</div>
                </div>
              `}):H`<div class="empty-state">Geen open opdrachten ✅</div>`}
        </div>
      </div>
    `}_renderAbsentiesWidget(){const t=this._data.absenties||[];return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⚠️ Recente Absenties</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(-3).map(t=>H`
              <div class="afspraak-item">
                <div><strong>${t.start?.substr(0,10)}</strong></div>
                <div>${t.omschrijving}</div>
                ${t.afspraak?H`<div class="tijd">${t.afspraak}</div>`:""}
              </div>
            `):H`<div class="empty-state">Geen recente absenties 👍</div>`}
        </div>
      </div>
    `}_renderWijzigingenWidget(){const t=this._data.wijzigingen||[];return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🔄 Roosterwijzigingen</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(-3).map(t=>this._renderAfspraakItem(t)):H`<div class="empty-state">Geen wijzigingen</div>`}
        </div>
      </div>
    `}_renderStatsWidget(){return H`
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
              <span>📚 Huiswerk open:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_huiswerk_onafgerond??this._data.aantal_huiswerk??0}</strong>
            </div>
          </div>
          <div class="afspraak-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>✅ Huiswerk afgerond:</span>
              <strong style="color: var(--accent-color);">${this._data.aantal_huiswerk_afgerond||0}</strong>
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
    `}_renderVolgendeLesWidget(){return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">⏰ Volgende Les</h3>
          <span class="widget-icon">🕒</span>
        </div>
        <div class="widget-content">
          ${this._data.volgende_afspraak&&"Geen"!==this._data.volgende_afspraak?H`
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 1.4em; font-weight: bold; color: var(--accent-color); margin-bottom: 8px;">
                  ${this._data.volgende_afspraak}
                </div>
                ${this._data.volgende_vak?H`
                  <div style="font-size: 1.1em; color: var(--primary-text-color); margin-bottom: 16px;">
                    ${this._data.volgende_vak}
                  </div>
                `:""}
                <div style="background: var(--primary-color); color: white; padding: 8px 16px; border-radius: 20px; display: inline-block;">
                  🎯 Komende les
                </div>
              </div>
            `:H`<div class="empty-state">Geen komende lessen 🎉</div>`}
        </div>
      </div>
    `}_renderAanmeldingenWidget(){const t=this._data.aanmeldingen||[];return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">🏫 Aanmeldingen</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,3).map(t=>H`
              <div class="afspraak-item">
                <div><strong>${t.start} - ${t.einde}</strong></div>
                <div>${t.studie||""}</div>
                <div class="tijd">${t.lesperiode||""}</div>
              </div>
            `):H`<div class="empty-state">Geen aanmeldingen</div>`}
        </div>
      </div>
    `}_renderActiviteitenWidget(){const t=this._data.activiteiten||[];return H`
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">📢 Activiteiten</h3>
          <span class="widget-icon">${t.length}</span>
        </div>
        <div class="widget-content">
          ${t.length>0?t.slice(0,3).map(t=>H`
              <div class="afspraak-item">
                <div><strong>${t.titel}</strong></div>
                <div class="tijd">Zichtbaar: ${t.zichtbaar_vanaf} t/m ${t.zichtbaar_tot}</div>
              </div>
            `):H`<div class="empty-state">Geen activiteiten</div>`}
        </div>
      </div>
    `}_renderSchooltijdenWidget(){const t=this._data.school_start_vandaag||"Geen",e=this._data.school_einde_vandaag||"Geen",i=this._data.lessen_vandaag||[];return H`
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
          ${i.length>0?i.map(t=>H`
            <div class="afspraak-item" style="border-left: 4px solid var(--primary-color);">
              <div><strong>${t.start} - ${t.einde}</strong> ${t.vak?H`<span class="vak">${t.vak}</span>`:""}</div>
              ${t.omschrijving?H`<div>${t.omschrijving}</div>`:""}
              ${t.lokaal?H`<div class="tijd">📍 ${t.lokaal}</div>`:""}
            </div>
          `):H`<div class="empty-state">Geen lessen vandaag 🎉</div>`}
        </div>
      </div>
    `}_renderVolgendeSchooldagWidget(){const t=this._data.volgende_schooldag||"Geen",e=this._data.volgende_schooldag_start||"Geen",i=this._data.volgende_schooldag_einde||"Geen";return H`
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
          ${"Geen"===t?H`<div class="empty-state">Geen komende schooldag gevonden</div>`:""}
        </div>
      </div>
    `}}customElements.define("magister-school-card",at);
//# sourceMappingURL=magister-school-card.js.map
