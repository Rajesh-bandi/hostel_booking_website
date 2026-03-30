function Iu(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function Tu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oc={exports:{}},Mo={},ac={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zn=Symbol.for("react.element"),_u=Symbol.for("react.portal"),Fu=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Mu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Bu=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Uu=Symbol.for("react.memo"),Hu=Symbol.for("react.lazy"),Oi=Symbol.iterator;function Wu(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,lc={};function Tr(e,t,r){this.props=e,this.context=t,this.refs=lc,this.updater=r||sc}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cc(){}cc.prototype=Tr.prototype;function zs(e,t,r){this.props=e,this.context=t,this.refs=lc,this.updater=r||sc}var Es=zs.prototype=new cc;Es.constructor=zs;ic(Es,Tr.prototype);Es.isPureReactComponent=!0;var Mi=Array.isArray,dc=Object.prototype.hasOwnProperty,Ps={current:null},uc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,r){var o,a={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)dc.call(t,o)&&!uc.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)a[o]===void 0&&(a[o]=l[o]);return{$$typeof:zn,type:e,key:s,ref:i,props:a,_owner:Ps.current}}function Vu(e,t){return{$$typeof:zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===zn}function Yu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var $i=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yu(""+e.key):t.toString(36)}function Xn(e,t,r,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case zn:case _u:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+ra(i,0):o,Mi(a)?(r="",e!=null&&(r=e.replace($i,"$&/")+"/"),Xn(a,t,r,"",function(d){return d})):a!=null&&(Rs(a)&&(a=Vu(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace($i,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Mi(e))for(var l=0;l<e.length;l++){s=e[l];var c=o+ra(s,l);i+=Xn(s,t,r,c,a)}else if(c=Wu(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=o+ra(s,l++),i+=Xn(s,t,r,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Tn(e,t,r){if(e==null)return e;var o=[],a=0;return Xn(e,o,"","",function(s){return t.call(r,s,a++)}),o}function Qu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Zn={transition:null},Gu={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Zn,ReactCurrentOwner:Ps};Q.Children={map:Tn,forEach:function(e,t,r){Tn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Tn(e,function(){t++}),t},toArray:function(e){return Tn(e,function(t){return t})||[]},only:function(e){if(!Rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Tr;Q.Fragment=Fu;Q.Profiler=Ou;Q.PureComponent=zs;Q.StrictMode=Du;Q.Suspense=Au;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gu;Q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ic({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Ps.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)dc.call(t,c)&&!uc.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:zn,type:e.type,key:a,ref:s,props:o,_owner:i}};Q.createContext=function(e){return e={$$typeof:$u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mu,_context:e},e.Consumer=e};Q.createElement=mc;Q.createFactory=function(e){var t=mc.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Bu,render:e}};Q.isValidElement=Rs;Q.lazy=function(e){return{$$typeof:Hu,_payload:{_status:-1,_result:e},_init:Qu}};Q.memo=function(e,t){return{$$typeof:Uu,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Zn.transition;Zn.transition={};try{e()}finally{Zn.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Pe.current.useCallback(e,t)};Q.useContext=function(e){return Pe.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Pe.current.useEffect(e,t)};Q.useId=function(){return Pe.current.useId()};Q.useImperativeHandle=function(e,t,r){return Pe.current.useImperativeHandle(e,t,r)};Q.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Pe.current.useMemo(e,t)};Q.useReducer=function(e,t,r){return Pe.current.useReducer(e,t,r)};Q.useRef=function(e){return Pe.current.useRef(e)};Q.useState=function(e){return Pe.current.useState(e)};Q.useSyncExternalStore=function(e,t,r){return Pe.current.useSyncExternalStore(e,t,r)};Q.useTransition=function(){return Pe.current.useTransition()};Q.version="18.2.0";ac.exports=Q;var x=ac.exports;const fc=Tu(x),Ku=Iu({__proto__:null,default:fc},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=x,qu=Symbol.for("react.element"),Xu=Symbol.for("react.fragment"),Zu=Object.prototype.hasOwnProperty,em=Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function pc(e,t,r){var o,a={},s=null,i=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Zu.call(t,o)&&!tm.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:qu,type:e,key:s,ref:i,props:a,_owner:em.current}}Mo.Fragment=Xu;Mo.jsx=pc;Mo.jsxs=pc;oc.exports=Mo;var n=oc.exports,hc={exports:{}},Ue={},gc={exports:{}},xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,D){var z=I.length;I.push(D);e:for(;0<z;){var F=z-1>>>1,$=I[F];if(0<a($,D))I[F]=D,I[z]=$,z=F;else break e}}function r(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var D=I[0],z=I.pop();if(z!==D){I[0]=z;e:for(var F=0,$=I.length,K=$>>>1;F<K;){var oe=2*(F+1)-1,C=I[oe],T=oe+1,U=I[T];if(0>a(C,z))T<$&&0>a(U,C)?(I[F]=U,I[T]=z,F=T):(I[F]=C,I[oe]=z,F=oe);else if(T<$&&0>a(U,z))I[F]=U,I[T]=z,F=T;else break e}}return D}function a(I,D){var z=I.sortIndex-D.sortIndex;return z!==0?z:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],d=[],p=1,u=null,m=3,b=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var D=r(d);D!==null;){if(D.callback===null)o(d);else if(D.startTime<=I)o(d),D.sortIndex=D.expirationTime,t(c,D);else break;D=r(d)}}function j(I){if(y=!1,g(I),!w)if(r(c)!==null)w=!0,A(E);else{var D=r(d);D!==null&&V(j,D.startTime-I)}}function E(I,D){w=!1,y&&(y=!1,h(N),N=-1),b=!0;var z=m;try{for(g(D),u=r(c);u!==null&&(!(u.expirationTime>D)||I&&!M());){var F=u.callback;if(typeof F=="function"){u.callback=null,m=u.priorityLevel;var $=F(u.expirationTime<=D);D=e.unstable_now(),typeof $=="function"?u.callback=$:u===r(c)&&o(c),g(D)}else o(c);u=r(c)}if(u!==null)var K=!0;else{var oe=r(d);oe!==null&&V(j,oe.startTime-D),K=!1}return K}finally{u=null,m=z,b=!1}}var S=!1,k=null,N=-1,L=5,R=-1;function M(){return!(e.unstable_now()-R<L)}function B(){if(k!==null){var I=e.unstable_now();R=I;var D=!0;try{D=k(!0,I)}finally{D?H():(S=!1,k=null)}}else S=!1}var H;if(typeof f=="function")H=function(){f(B)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=B,H=function(){J.postMessage(null)}}else H=function(){v(B,0)};function A(I){k=I,S||(S=!0,H())}function V(I,D){N=v(function(){I(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,A(E))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var z=m;m=D;try{return I()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=m;m=I;try{return D()}finally{m=z}},e.unstable_scheduleCallback=function(I,D,z){var F=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?F+z:F):z=F,I){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=z+$,I={id:p++,callback:D,priorityLevel:I,startTime:z,expirationTime:$,sortIndex:-1},z>F?(I.sortIndex=z,t(d,I),r(c)===null&&I===r(d)&&(y?(h(N),N=-1):y=!0,V(j,z-F))):(I.sortIndex=$,t(c,I),w||b||(w=!0,A(E))),I},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(I){var D=m;return function(){var z=m;m=D;try{return I.apply(this,arguments)}finally{m=z}}}})(xc);gc.exports=xc;var rm=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=x,Ae=rm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vc=new Set,ln={};function ar(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(ln[e]=t,e=0;e<t.length;e++)vc.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pa=Object.prototype.hasOwnProperty,nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bi={},Ai={};function om(e){return Pa.call(Ai,e)?!0:Pa.call(Bi,e)?!1:nm.test(e)?Ai[e]=!0:(Bi[e]=!0,!1)}function am(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sm(e,t,r,o){if(t===null||typeof t>"u"||am(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,r,o,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Is);ye[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ts(e,t,r,o){var a=ye.hasOwnProperty(t)?ye[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sm(t,r,a,o)&&(r=null),o||a===null?om(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,o=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var kt=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_n=Symbol.for("react.element"),lr=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),_s=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Fs=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Ds=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),wc=Symbol.for("react.offscreen"),Ui=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,na;function Gr(e){if(na===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var oa=!1;function aa(e,t){if(!e||oa)return"";oa=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{oa=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Gr(e):""}function im(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Ta(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case lr:return"Portal";case Ra:return"Profiler";case _s:return"StrictMode";case La:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case yc:return(e._context.displayName||"Context")+".Provider";case Fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ds:return t=e.displayName||null,t!==null?t:Ta(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Ta(e(t))}catch{}}return null}function lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ta(t);case 8:return t===_s?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e){var t=jc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fn(e){e._valueTracker||(e._valueTracker=cm(e))}function Nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=jc(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _a(e,t){var r=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hi(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=$t(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sc(e,t){t=t.checked,t!=null&&Ts(e,"checked",t,!1)}function Fa(e,t){Sc(e,t);var r=$t(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,r):t.hasOwnProperty("defaultValue")&&Da(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Da(e,t,r){(t!=="number"||mo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Kr=Array.isArray;function yr(e,t,r,o){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&o&&(e[r].defaultSelected=!0)}else{for(r=""+$t(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(Kr(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:$t(r)}}function Cc(e,t){var r=$t(t.value),o=$t(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dn,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dn=Dn||document.createElement("div"),Dn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dm=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xr[t]=Xr[e]})});function Pc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+t).trim():t+"px"}function Rc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,a=Pc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,a):e[r]=a}}var um=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(e,t){if(t){if(um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ba(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,kr=null,wr=null;function Qi(e){if(e=Rn(e)){if(typeof Ua!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ho(t),Ua(e.stateNode,e.type,t))}}function Lc(e){kr?wr?wr.push(e):wr=[e]:kr=e}function Ic(){if(kr){var e=kr,t=wr;if(wr=kr=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function Tc(e,t){return e(t)}function _c(){}var sa=!1;function Fc(e,t,r){if(sa)return e(t,r);sa=!0;try{return Tc(e,t,r)}finally{sa=!1,(kr!==null||wr!==null)&&(_c(),Ic())}}function dn(e,t){var r=e.stateNode;if(r===null)return null;var o=Ho(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Ha=!1;if(xt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Ha=!1}function mm(e,t,r,o,a,s,i,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(p){this.onError(p)}}var Zr=!1,fo=null,po=!1,Wa=null,fm={onError:function(e){Zr=!0,fo=e}};function pm(e,t,r,o,a,s,i,l,c){Zr=!1,fo=null,mm.apply(fm,arguments)}function hm(e,t,r,o,a,s,i,l,c){if(pm.apply(this,arguments),Zr){if(Zr){var d=fo;Zr=!1,fo=null}else throw Error(P(198));po||(po=!0,Wa=d)}}function sr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gi(e){if(sr(e)!==e)throw Error(P(188))}function gm(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,o=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){r=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return Gi(a),e;if(s===o)return Gi(a),t;s=s.sibling}throw Error(P(188))}if(r.return!==o.return)r=a,o=s;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,o=s;break}if(l===o){i=!0,o=a,r=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===r){i=!0,r=s,o=a;break}if(l===o){i=!0,o=s,r=a;break}l=l.sibling}if(!i)throw Error(P(189))}}if(r.alternate!==o)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Oc(e){return e=gm(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var $c=Ae.unstable_scheduleCallback,Ki=Ae.unstable_cancelCallback,xm=Ae.unstable_shouldYield,bm=Ae.unstable_requestPaint,de=Ae.unstable_now,vm=Ae.unstable_getCurrentPriorityLevel,Ms=Ae.unstable_ImmediatePriority,Bc=Ae.unstable_UserBlockingPriority,ho=Ae.unstable_NormalPriority,ym=Ae.unstable_LowPriority,Ac=Ae.unstable_IdlePriority,$o=null,it=null;function km(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Nm,wm=Math.log,jm=Math.LN2;function Nm(e){return e>>>=0,e===0?32:31-(wm(e)/jm|0)|0}var On=64,Mn=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?o=Jr(l):(s&=i,s!==0&&(o=Jr(s)))}else i=r&~a,i!==0?o=Jr(i):s!==0&&(o=Jr(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-tt(t),a=1<<r,o|=e[r],t&=~a;return o}function Sm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cm(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-tt(s),l=1<<i,c=a[i];c===-1?(!(l&r)||l&o)&&(a[i]=Sm(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uc(){var e=On;return On<<=1,!(On&4194240)&&(On=64),e}function ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function En(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=r}function zm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-tt(r),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,r&=~s}}function $s(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-tt(r),a=1<<o;a&t|e[o]&t&&(e[o]|=t),r&=~a}}var q=0;function Hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,Bs,Vc,Yc,Qc,Ya=!1,$n=[],Rt=null,Lt=null,It=null,un=new Map,mn=new Map,St=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(t.pointerId)}}function Ur(e,t,r,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Rn(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Pm(e,t,r,o,a){switch(t){case"focusin":return Rt=Ur(Rt,e,t,r,o,a),!0;case"dragenter":return Lt=Ur(Lt,e,t,r,o,a),!0;case"mouseover":return It=Ur(It,e,t,r,o,a),!0;case"pointerover":var s=a.pointerId;return un.set(s,Ur(un.get(s)||null,e,t,r,o,a)),!0;case"gotpointercapture":return s=a.pointerId,mn.set(s,Ur(mn.get(s)||null,e,t,r,o,a)),!0}return!1}function Gc(e){var t=Gt(e.target);if(t!==null){var r=sr(t);if(r!==null){if(t=r.tag,t===13){if(t=Dc(r),t!==null){e.blockedOn=t,Qc(e.priority,function(){Vc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Aa=o,r.target.dispatchEvent(o),Aa=null}else return t=Rn(r),t!==null&&Bs(t),e.blockedOn=r,!1;t.shift()}return!0}function qi(e,t,r){eo(e)&&r.delete(t)}function Rm(){Ya=!1,Rt!==null&&eo(Rt)&&(Rt=null),Lt!==null&&eo(Lt)&&(Lt=null),It!==null&&eo(It)&&(It=null),un.forEach(qi),mn.forEach(qi)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ya||(Ya=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Rm)))}function fn(e){function t(a){return Hr(a,e)}if(0<$n.length){Hr($n[0],e);for(var r=1;r<$n.length;r++){var o=$n[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Rt!==null&&Hr(Rt,e),Lt!==null&&Hr(Lt,e),It!==null&&Hr(It,e),un.forEach(t),mn.forEach(t),r=0;r<St.length;r++)o=St[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<St.length&&(r=St[0],r.blockedOn===null);)Gc(r),r.blockedOn===null&&St.shift()}var jr=kt.ReactCurrentBatchConfig,xo=!0;function Lm(e,t,r,o){var a=q,s=jr.transition;jr.transition=null;try{q=1,As(e,t,r,o)}finally{q=a,jr.transition=s}}function Im(e,t,r,o){var a=q,s=jr.transition;jr.transition=null;try{q=4,As(e,t,r,o)}finally{q=a,jr.transition=s}}function As(e,t,r,o){if(xo){var a=Qa(e,t,r,o);if(a===null)xa(e,t,o,bo,r),Ji(e,o);else if(Pm(a,e,t,r,o))o.stopPropagation();else if(Ji(e,o),t&4&&-1<Em.indexOf(e)){for(;a!==null;){var s=Rn(a);if(s!==null&&Wc(s),s=Qa(e,t,r,o),s===null&&xa(e,t,o,bo,r),s===a)break;a=s}a!==null&&o.stopPropagation()}else xa(e,t,o,null,r)}}var bo=null;function Qa(e,t,r,o){if(bo=null,e=Os(o),e=Gt(e),e!==null)if(t=sr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Dc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vm()){case Ms:return 1;case Bc:return 4;case ho:case ym:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var zt=null,Us=null,to=null;function Jc(){if(to)return to;var e,t=Us,r=t.length,o,a="value"in zt?zt.value:zt.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(o=1;o<=i&&t[r-o]===a[s-o];o++);return to=a.slice(e,1<o?1-o:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Xi(){return!1}function He(e){function t(r,o,a,s,i){this._reactName=r,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bn:Xi,this.isPropagationStopped=Xi,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=He(_r),Pn=le({},_r,{view:0,detail:0}),Tm=He(Pn),la,ca,Wr,Bo=le({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(la=e.screenX-Wr.screenX,ca=e.screenY-Wr.screenY):ca=la=0,Wr=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),Zi=He(Bo),_m=le({},Bo,{dataTransfer:0}),Fm=He(_m),Dm=le({},Pn,{relatedTarget:0}),da=He(Dm),Om=le({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=He(Om),$m=le({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=He($m),Am=le({},_r,{data:0}),el=He(Am),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wm[e])?!!t[e]:!1}function Ws(){return Vm}var Ym=le({},Pn,{key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qm=He(Ym),Gm=le({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=He(Gm),Km=le({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Jm=He(Km),qm=le({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=He(qm),Zm=le({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ef=He(Zm),tf=[9,13,27,32],Vs=xt&&"CompositionEvent"in window,en=null;xt&&"documentMode"in document&&(en=document.documentMode);var rf=xt&&"TextEvent"in window&&!en,qc=xt&&(!Vs||en&&8<en&&11>=en),rl=" ",nl=!1;function Xc(e,t){switch(e){case"keyup":return tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function nf(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(nl=!0,rl);case"textInput":return e=t.data,e===rl&&nl?null:e;default:return null}}function of(e,t){if(dr)return e==="compositionend"||!Vs&&Xc(e,t)?(e=Jc(),to=Us=zt=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!af[e.type]:t==="textarea"}function ed(e,t,r,o){Lc(o),t=vo(t,"onChange"),0<t.length&&(r=new Hs("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var tn=null,pn=null;function sf(e){ud(e,0)}function Ao(e){var t=fr(e);if(Nc(t))return e}function lf(e,t){if(e==="change")return t}var td=!1;if(xt){var ua;if(xt){var ma="oninput"in document;if(!ma){var al=document.createElement("div");al.setAttribute("oninput","return;"),ma=typeof al.oninput=="function"}ua=ma}else ua=!1;td=ua&&(!document.documentMode||9<document.documentMode)}function sl(){tn&&(tn.detachEvent("onpropertychange",rd),pn=tn=null)}function rd(e){if(e.propertyName==="value"&&Ao(pn)){var t=[];ed(t,pn,e,Os(e)),Fc(sf,t)}}function cf(e,t,r){e==="focusin"?(sl(),tn=t,pn=r,tn.attachEvent("onpropertychange",rd)):e==="focusout"&&sl()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(pn)}function uf(e,t){if(e==="click")return Ao(t)}function mf(e,t){if(e==="input"||e==="change")return Ao(t)}function ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:ff;function hn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var a=r[o];if(!Pa.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ll(e,t){var r=il(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=il(r)}}function nd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(){for(var e=window,t=mo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=mo(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pf(e){var t=od(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&nd(r.ownerDocument.documentElement,r)){if(o!==null&&Ys(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=ll(r,s);var i=ll(r,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hf=xt&&"documentMode"in document&&11>=document.documentMode,ur=null,Ga=null,rn=null,Ka=!1;function cl(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ka||ur==null||ur!==mo(o)||(o=ur,"selectionStart"in o&&Ys(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),rn&&hn(rn,o)||(rn=o,o=vo(Ga,"onSelect"),0<o.length&&(t=new Hs("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=ur)))}function An(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var mr={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},fa={},ad={};xt&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Uo(e){if(fa[e])return fa[e];if(!mr[e])return e;var t=mr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ad)return fa[e]=t[r];return e}var sd=Uo("animationend"),id=Uo("animationiteration"),ld=Uo("animationstart"),cd=Uo("transitionend"),dd=new Map,dl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){dd.set(e,t),ar(t,[e])}for(var pa=0;pa<dl.length;pa++){var ha=dl[pa],gf=ha.toLowerCase(),xf=ha[0].toUpperCase()+ha.slice(1);Ut(gf,"on"+xf)}Ut(sd,"onAnimationEnd");Ut(id,"onAnimationIteration");Ut(ld,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(cd,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function ul(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,hm(o,t,void 0,e),e.currentTarget=null}function ud(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;ul(a,l,d),s=c}else for(i=0;i<o.length;i++){if(l=o[i],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;ul(a,l,d),s=c}}}if(po)throw e=Wa,po=!1,Wa=null,e}function re(e,t){var r=t[es];r===void 0&&(r=t[es]=new Set);var o=e+"__bubble";r.has(o)||(md(t,e,2,!1),r.add(o))}function ga(e,t,r){var o=0;t&&(o|=4),md(r,e,o,t)}var Un="_reactListening"+Math.random().toString(36).slice(2);function gn(e){if(!e[Un]){e[Un]=!0,vc.forEach(function(r){r!=="selectionchange"&&(bf.has(r)||ga(r,!1,e),ga(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Un]||(t[Un]=!0,ga("selectionchange",!1,t))}}function md(e,t,r,o){switch(Kc(t)){case 1:var a=Lm;break;case 4:a=Im;break;default:a=As}r=a.bind(null,t,r,e),a=void 0,!Ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function xa(e,t,r,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Gt(l),i===null)return;if(c=i.tag,c===5||c===6){o=s=i;continue e}l=l.parentNode}}o=o.return}Fc(function(){var d=s,p=Os(r),u=[];e:{var m=dd.get(e);if(m!==void 0){var b=Hs,w=e;switch(e){case"keypress":if(ro(r)===0)break e;case"keydown":case"keyup":b=Qm;break;case"focusin":w="focus",b=da;break;case"focusout":w="blur",b=da;break;case"beforeblur":case"afterblur":b=da;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Jm;break;case sd:case id:case ld:b=Mm;break;case cd:b=Xm;break;case"scroll":b=Tm;break;case"wheel":b=ef;break;case"copy":case"cut":case"paste":b=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=tl}var y=(t&4)!==0,v=!y&&e==="scroll",h=y?m!==null?m+"Capture":null:m;y=[];for(var f=d,g;f!==null;){g=f;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,h!==null&&(j=dn(f,h),j!=null&&y.push(xn(f,j,g)))),v)break;f=f.return}0<y.length&&(m=new b(m,w,null,r,p),u.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==Aa&&(w=r.relatedTarget||r.fromElement)&&(Gt(w)||w[bt]))break e;if((b||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,b?(w=r.relatedTarget||r.toElement,b=d,w=w?Gt(w):null,w!==null&&(v=sr(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=d),b!==w)){if(y=Zi,j="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=tl,j="onPointerLeave",h="onPointerEnter",f="pointer"),v=b==null?m:fr(b),g=w==null?m:fr(w),m=new y(j,f+"leave",b,r,p),m.target=v,m.relatedTarget=g,j=null,Gt(p)===d&&(y=new y(h,f+"enter",w,r,p),y.target=g,y.relatedTarget=v,j=y),v=j,b&&w)t:{for(y=b,h=w,f=0,g=y;g;g=ir(g))f++;for(g=0,j=h;j;j=ir(j))g++;for(;0<f-g;)y=ir(y),f--;for(;0<g-f;)h=ir(h),g--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=ir(y),h=ir(h)}y=null}else y=null;b!==null&&ml(u,m,b,y,!1),w!==null&&v!==null&&ml(u,v,w,y,!0)}}e:{if(m=d?fr(d):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var E=lf;else if(ol(m))if(td)E=mf;else{E=df;var S=cf}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=uf);if(E&&(E=E(e,d))){ed(u,E,r,p);break e}S&&S(e,m,d),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&Da(m,"number",m.value)}switch(S=d?fr(d):window,e){case"focusin":(ol(S)||S.contentEditable==="true")&&(ur=S,Ga=d,rn=null);break;case"focusout":rn=Ga=ur=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,cl(u,r,p);break;case"selectionchange":if(hf)break;case"keydown":case"keyup":cl(u,r,p)}var k;if(Vs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dr?Xc(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(qc&&r.locale!=="ko"&&(dr||N!=="onCompositionStart"?N==="onCompositionEnd"&&dr&&(k=Jc()):(zt=p,Us="value"in zt?zt.value:zt.textContent,dr=!0)),S=vo(d,N),0<S.length&&(N=new el(N,e,null,r,p),u.push({event:N,listeners:S}),k?N.data=k:(k=Zc(r),k!==null&&(N.data=k)))),(k=rf?nf(e,r):of(e,r))&&(d=vo(d,"onBeforeInput"),0<d.length&&(p=new el("onBeforeInput","beforeinput",null,r,p),u.push({event:p,listeners:d}),p.data=k))}ud(u,t)})}function xn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function vo(e,t){for(var r=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=dn(e,r),s!=null&&o.unshift(xn(e,s,a)),s=dn(e,t),s!=null&&o.push(xn(e,s,a))),e=e.return}return o}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ml(e,t,r,o,a){for(var s=t._reactName,i=[];r!==null&&r!==o;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===o)break;l.tag===5&&d!==null&&(l=d,a?(c=dn(r,s),c!=null&&i.unshift(xn(r,c,l))):a||(c=dn(r,s),c!=null&&i.push(xn(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var vf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function fl(e){return(typeof e=="string"?e:""+e).replace(vf,`
`).replace(yf,"")}function Hn(e,t,r){if(t=fl(t),fl(e)!==t&&r)throw Error(P(425))}function yo(){}var Ja=null,qa=null;function Xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,pl=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof pl<"u"?function(e){return pl.resolve(null).then(e).catch(jf)}:Za;function jf(e){setTimeout(function(){throw e})}function ba(e,t){var r=t,o=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(o===0){e.removeChild(a),fn(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=a}while(r);fn(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),st="__reactFiber$"+Fr,bn="__reactProps$"+Fr,bt="__reactContainer$"+Fr,es="__reactEvents$"+Fr,Nf="__reactListeners$"+Fr,Sf="__reactHandles$"+Fr;function Gt(e){var t=e[st];if(t)return t;for(var r=e.parentNode;r;){if(t=r[bt]||r[st]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=hl(e);e!==null;){if(r=e[st])return r;e=hl(e)}return t}e=r,r=e.parentNode}return null}function Rn(e){return e=e[st]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ho(e){return e[bn]||null}var ts=[],pr=-1;function Ht(e){return{current:e}}function ne(e){0>pr||(e.current=ts[pr],ts[pr]=null,pr--)}function te(e,t){pr++,ts[pr]=e.current,e.current=t}var Bt={},Ce=Ht(Bt),_e=Ht(!1),er=Bt;function zr(e,t){var r=e.type.contextTypes;if(!r)return Bt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(e){return e=e.childContextTypes,e!=null}function ko(){ne(_e),ne(Ce)}function gl(e,t,r){if(Ce.current!==Bt)throw Error(P(168));te(Ce,t),te(_e,r)}function fd(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(P(108,lm(e)||"Unknown",a));return le({},r,o)}function wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,er=Ce.current,te(Ce,e),te(_e,_e.current),!0}function xl(e,t,r){var o=e.stateNode;if(!o)throw Error(P(169));r?(e=fd(e,t,er),o.__reactInternalMemoizedMergedChildContext=e,ne(_e),ne(Ce),te(Ce,e)):ne(_e),te(_e,r)}var ft=null,Wo=!1,va=!1;function pd(e){ft===null?ft=[e]:ft.push(e)}function Cf(e){Wo=!0,pd(e)}function Wt(){if(!va&&ft!==null){va=!0;var e=0,t=q;try{var r=ft;for(q=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}ft=null,Wo=!1}catch(a){throw ft!==null&&(ft=ft.slice(e+1)),$c(Ms,Wt),a}finally{q=t,va=!1}}return null}var hr=[],gr=0,jo=null,No=0,We=[],Ve=0,tr=null,pt=1,ht="";function Yt(e,t){hr[gr++]=No,hr[gr++]=jo,jo=e,No=t}function hd(e,t,r){We[Ve++]=pt,We[Ve++]=ht,We[Ve++]=tr,tr=e;var o=pt;e=ht;var a=32-tt(o)-1;o&=~(1<<a),r+=1;var s=32-tt(t)+a;if(30<s){var i=a-a%5;s=(o&(1<<i)-1).toString(32),o>>=i,a-=i,pt=1<<32-tt(t)+a|r<<a|o,ht=s+e}else pt=1<<s|r<<a|o,ht=e}function Qs(e){e.return!==null&&(Yt(e,1),hd(e,1,0))}function Gs(e){for(;e===jo;)jo=hr[--gr],hr[gr]=null,No=hr[--gr],hr[gr]=null;for(;e===tr;)tr=We[--Ve],We[Ve]=null,ht=We[--Ve],We[Ve]=null,pt=We[--Ve],We[Ve]=null}var Be=null,$e=null,ae=!1,et=null;function gd(e,t){var r=Ye(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function bl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,$e=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=tr!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ye(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Be=e,$e=null,!0):!1;default:return!1}}function rs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ns(e){if(ae){var t=$e;if(t){var r=t;if(!bl(e,t)){if(rs(e))throw Error(P(418));t=Tt(r.nextSibling);var o=Be;t&&bl(e,t)?gd(o,r):(e.flags=e.flags&-4097|2,ae=!1,Be=e)}}else{if(rs(e))throw Error(P(418));e.flags=e.flags&-4097|2,ae=!1,Be=e}}}function vl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Wn(e){if(e!==Be)return!1;if(!ae)return vl(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xa(e.type,e.memoizedProps)),t&&(t=$e)){if(rs(e))throw xd(),Error(P(418));for(;t;)gd(e,t),t=Tt(t.nextSibling)}if(vl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){$e=Tt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Be?Tt(e.stateNode.nextSibling):null;return!0}function xd(){for(var e=$e;e;)e=Tt(e.nextSibling)}function Er(){$e=Be=null,ae=!1}function Ks(e){et===null?et=[e]:et.push(e)}var zf=kt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var So=Ht(null),Co=null,xr=null,Js=null;function qs(){Js=xr=Co=null}function Xs(e){var t=So.current;ne(So),e._currentValue=t}function os(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Nr(e,t){Co=e,Js=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Js!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Co===null)throw Error(P(308));xr=e,Co.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Kt=null;function Zs(e){Kt===null?Kt=[e]:Kt.push(e)}function bd(e,t,r,o){var a=t.interleaved;return a===null?(r.next=r,Zs(t)):(r.next=a.next,a.next=r),t.interleaved=r,vt(e,o)}function vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Nt=!1;function ei(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,G&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,vt(e,r)}return a=o.interleaved,a===null?(t.next=t,Zs(o)):(t.next=a.next,a.next=t),o.interleaved=t,vt(e,r)}function no(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,$s(e,r)}}function yl(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=i:s=s.next=i,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function zo(e,t,r,o){var a=e.updateQueue;Nt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,i===null?s=d:i.next=d,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(s!==null){var u=a.baseState;i=0,p=d=c=null,l=s;do{var m=l.lane,b=l.eventTime;if((o&m)===m){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,y=l;switch(m=t,b=r,y.tag){case 1:if(w=y.payload,typeof w=="function"){u=w.call(b,u,m);break e}u=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,m=typeof w=="function"?w.call(b,u,m):w,m==null)break e;u=le({},u,m);break e;case 2:Nt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=b,c=u):p=p.next=b,i|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(p===null&&(c=u),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);nr|=i,e.lanes=i,e.memoizedState=u}}function kl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=r,typeof a!="function")throw Error(P(191,a));a.call(o)}}}var yd=new bc.Component().refs;function as(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Vo={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ee(),a=Dt(e),s=gt(o,a);s.payload=t,r!=null&&(s.callback=r),t=_t(e,s,a),t!==null&&(rt(t,e,a,o),no(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ee(),a=Dt(e),s=gt(o,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=_t(e,s,a),t!==null&&(rt(t,e,a,o),no(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ee(),o=Dt(e),a=gt(r,o);a.tag=2,t!=null&&(a.callback=t),t=_t(e,a,o),t!==null&&(rt(t,e,o,r),no(t,e,o))}};function wl(e,t,r,o,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!hn(r,o)||!hn(a,s):!0}function kd(e,t,r){var o=!1,a=Bt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(a=Fe(t)?er:Ce.current,o=t.contextTypes,s=(o=o!=null)?zr(e,a):Bt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function jl(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function ss(e,t,r,o){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs=yd,ei(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Ge(s):(s=Fe(t)?er:Ce.current,a.context=zr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(as(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Vo.enqueueReplaceState(a,a.state,null),zo(e,r,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var o=r.stateNode}if(!o)throw Error(P(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;l===yd&&(l=a.refs={}),i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function Vn(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nl(e){var t=e._init;return t(e._payload)}function wd(e){function t(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function r(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function o(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function a(h,f){return h=Ot(h,f),h.index=0,h.sibling=null,h}function s(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,g,j){return f===null||f.tag!==6?(f=Ca(g,h.mode,j),f.return=h,f):(f=a(f,g),f.return=h,f)}function c(h,f,g,j){var E=g.type;return E===cr?p(h,f,g.props.children,j,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Nl(E)===f.type)?(j=a(f,g.props),j.ref=Vr(h,f,g),j.return=h,j):(j=co(g.type,g.key,g.props,null,h.mode,j),j.ref=Vr(h,f,g),j.return=h,j)}function d(h,f,g,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=za(g,h.mode,j),f.return=h,f):(f=a(f,g.children||[]),f.return=h,f)}function p(h,f,g,j,E){return f===null||f.tag!==7?(f=Zt(g,h.mode,j,E),f.return=h,f):(f=a(f,g),f.return=h,f)}function u(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ca(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _n:return g=co(f.type,f.key,f.props,null,h.mode,g),g.ref=Vr(h,null,f),g.return=h,g;case lr:return f=za(f,h.mode,g),f.return=h,f;case jt:var j=f._init;return u(h,j(f._payload),g)}if(Kr(f)||Br(f))return f=Zt(f,h.mode,g,null),f.return=h,f;Vn(h,f)}return null}function m(h,f,g,j){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(h,f,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _n:return g.key===E?c(h,f,g,j):null;case lr:return g.key===E?d(h,f,g,j):null;case jt:return E=g._init,m(h,f,E(g._payload),j)}if(Kr(g)||Br(g))return E!==null?null:p(h,f,g,j,null);Vn(h,g)}return null}function b(h,f,g,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(g)||null,l(f,h,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _n:return h=h.get(j.key===null?g:j.key)||null,c(f,h,j,E);case lr:return h=h.get(j.key===null?g:j.key)||null,d(f,h,j,E);case jt:var S=j._init;return b(h,f,g,S(j._payload),E)}if(Kr(j)||Br(j))return h=h.get(g)||null,p(f,h,j,E,null);Vn(f,j)}return null}function w(h,f,g,j){for(var E=null,S=null,k=f,N=f=0,L=null;k!==null&&N<g.length;N++){k.index>N?(L=k,k=null):L=k.sibling;var R=m(h,k,g[N],j);if(R===null){k===null&&(k=L);break}e&&k&&R.alternate===null&&t(h,k),f=s(R,f,N),S===null?E=R:S.sibling=R,S=R,k=L}if(N===g.length)return r(h,k),ae&&Yt(h,N),E;if(k===null){for(;N<g.length;N++)k=u(h,g[N],j),k!==null&&(f=s(k,f,N),S===null?E=k:S.sibling=k,S=k);return ae&&Yt(h,N),E}for(k=o(h,k);N<g.length;N++)L=b(k,h,N,g[N],j),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?N:L.key),f=s(L,f,N),S===null?E=L:S.sibling=L,S=L);return e&&k.forEach(function(M){return t(h,M)}),ae&&Yt(h,N),E}function y(h,f,g,j){var E=Br(g);if(typeof E!="function")throw Error(P(150));if(g=E.call(g),g==null)throw Error(P(151));for(var S=E=null,k=f,N=f=0,L=null,R=g.next();k!==null&&!R.done;N++,R=g.next()){k.index>N?(L=k,k=null):L=k.sibling;var M=m(h,k,R.value,j);if(M===null){k===null&&(k=L);break}e&&k&&M.alternate===null&&t(h,k),f=s(M,f,N),S===null?E=M:S.sibling=M,S=M,k=L}if(R.done)return r(h,k),ae&&Yt(h,N),E;if(k===null){for(;!R.done;N++,R=g.next())R=u(h,R.value,j),R!==null&&(f=s(R,f,N),S===null?E=R:S.sibling=R,S=R);return ae&&Yt(h,N),E}for(k=o(h,k);!R.done;N++,R=g.next())R=b(k,h,N,R.value,j),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?N:R.key),f=s(R,f,N),S===null?E=R:S.sibling=R,S=R);return e&&k.forEach(function(B){return t(h,B)}),ae&&Yt(h,N),E}function v(h,f,g,j){if(typeof g=="object"&&g!==null&&g.type===cr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _n:e:{for(var E=g.key,S=f;S!==null;){if(S.key===E){if(E=g.type,E===cr){if(S.tag===7){r(h,S.sibling),f=a(S,g.props.children),f.return=h,h=f;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Nl(E)===S.type){r(h,S.sibling),f=a(S,g.props),f.ref=Vr(h,S,g),f.return=h,h=f;break e}r(h,S);break}else t(h,S);S=S.sibling}g.type===cr?(f=Zt(g.props.children,h.mode,j,g.key),f.return=h,h=f):(j=co(g.type,g.key,g.props,null,h.mode,j),j.ref=Vr(h,f,g),j.return=h,h=j)}return i(h);case lr:e:{for(S=g.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(h,f.sibling),f=a(f,g.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else t(h,f);f=f.sibling}f=za(g,h.mode,j),f.return=h,h=f}return i(h);case jt:return S=g._init,v(h,f,S(g._payload),j)}if(Kr(g))return w(h,f,g,j);if(Br(g))return y(h,f,g,j);Vn(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(h,f.sibling),f=a(f,g),f.return=h,h=f):(r(h,f),f=Ca(g,h.mode,j),f.return=h,h=f),i(h)):r(h,f)}return v}var Pr=wd(!0),jd=wd(!1),Ln={},lt=Ht(Ln),vn=Ht(Ln),yn=Ht(Ln);function Jt(e){if(e===Ln)throw Error(P(174));return e}function ti(e,t){switch(te(yn,t),te(vn,e),te(lt,Ln),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}ne(lt),te(lt,t)}function Rr(){ne(lt),ne(vn),ne(yn)}function Nd(e){Jt(yn.current);var t=Jt(lt.current),r=Ma(t,e.type);t!==r&&(te(vn,e),te(lt,r))}function ri(e){vn.current===e&&(ne(lt),ne(vn))}var se=Ht(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function ni(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var oo=kt.ReactCurrentDispatcher,ka=kt.ReactCurrentBatchConfig,rr=0,ie=null,fe=null,ge=null,Po=!1,nn=!1,kn=0,Ef=0;function je(){throw Error(P(321))}function oi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!nt(e[r],t[r]))return!1;return!0}function ai(e,t,r,o,a,s){if(rr=s,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?If:Tf,e=r(o,a),nn){s=0;do{if(nn=!1,kn=0,25<=s)throw Error(P(301));s+=1,ge=fe=null,t.updateQueue=null,oo.current=_f,e=r(o,a)}while(nn)}if(oo.current=Ro,t=fe!==null&&fe.next!==null,rr=0,ge=fe=ie=null,Po=!1,t)throw Error(P(300));return e}function si(){var e=kn!==0;return kn=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function Ke(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,fe=e;else{if(e===null)throw Error(P(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function wn(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=Ke(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var o=fe,a=o.baseQueue,s=r.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}o.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,o=o.baseState;var l=i=null,c=null,d=s;do{var p=d.lane;if((rr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var u={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=u,i=o):c=c.next=u,ie.lanes|=p,nr|=p}d=d.next}while(d!==null&&d!==s);c===null?i=o:c.next=l,nt(o,t.memoizedState)||(Te=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,r.lastRenderedState=o}if(e=r.interleaved,e!==null){a=e;do s=a.lane,ie.lanes|=s,nr|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ja(e){var t=Ke(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var o=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);nt(s,t.memoizedState)||(Te=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,o]}function Sd(){}function Cd(e,t){var r=ie,o=Ke(),a=t(),s=!nt(o.memoizedState,a);if(s&&(o.memoizedState=a,Te=!0),o=o.queue,ii(Pd.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||ge!==null&&ge.memoizedState.tag&1){if(r.flags|=2048,jn(9,Ed.bind(null,r,o,a,t),void 0,null),xe===null)throw Error(P(349));rr&30||zd(r,t,a)}return a}function zd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ed(e,t,r,o){t.value=r,t.getSnapshot=o,Rd(t)&&Ld(e)}function Pd(e,t,r){return r(function(){Rd(t)&&Ld(e)})}function Rd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!nt(e,r)}catch{return!0}}function Ld(e){var t=vt(e,1);t!==null&&rt(t,e,1,-1)}function Sl(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,ie,e),[t.memoizedState,e]}function jn(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function Id(){return Ke().memoizedState}function ao(e,t,r,o){var a=at();ie.flags|=e,a.memoizedState=jn(1|t,r,void 0,o===void 0?null:o)}function Yo(e,t,r,o){var a=Ke();o=o===void 0?null:o;var s=void 0;if(fe!==null){var i=fe.memoizedState;if(s=i.destroy,o!==null&&oi(o,i.deps)){a.memoizedState=jn(t,r,s,o);return}}ie.flags|=e,a.memoizedState=jn(1|t,r,s,o)}function Cl(e,t){return ao(8390656,8,e,t)}function ii(e,t){return Yo(2048,8,e,t)}function Td(e,t){return Yo(4,2,e,t)}function _d(e,t){return Yo(4,4,e,t)}function Fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dd(e,t,r){return r=r!=null?r.concat([e]):null,Yo(4,4,Fd.bind(null,t,e),r)}function li(){}function Od(e,t){var r=Ke();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&oi(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Md(e,t){var r=Ke();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&oi(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function $d(e,t,r){return rr&21?(nt(r,t)||(r=Uc(),ie.lanes|=r,nr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=r)}function Pf(e,t){var r=q;q=r!==0&&4>r?r:4,e(!0);var o=ka.transition;ka.transition={};try{e(!1),t()}finally{q=r,ka.transition=o}}function Bd(){return Ke().memoizedState}function Rf(e,t,r){var o=Dt(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Ad(e))Ud(t,r);else if(r=bd(e,t,r,o),r!==null){var a=Ee();rt(r,e,o,a),Hd(r,t,o)}}function Lf(e,t,r){var o=Dt(e),a={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Ud(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,r);if(a.hasEagerState=!0,a.eagerState=l,nt(l,i)){var c=t.interleaved;c===null?(a.next=a,Zs(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=bd(e,t,a,o),r!==null&&(a=Ee(),rt(r,e,o,a),Hd(r,t,o))}}function Ad(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Ud(e,t){nn=Po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hd(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,$s(e,r)}}var Ro={readContext:Ge,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},If={readContext:Ge,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Cl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ao(4194308,4,Fd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var r=at();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=at();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Rf.bind(null,ie,e),[o.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Sl,useDebugValue:li,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Sl(!1),t=e[0];return e=Pf.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=ie,a=at();if(ae){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),xe===null)throw Error(P(349));rr&30||zd(o,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Cl(Pd.bind(null,o,s,e),[e]),o.flags|=2048,jn(9,Ed.bind(null,o,s,r,t),void 0,null),r},useId:function(){var e=at(),t=xe.identifierPrefix;if(ae){var r=ht,o=pt;r=(o&~(1<<32-tt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=kn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ef++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tf={readContext:Ge,useCallback:Od,useContext:Ge,useEffect:ii,useImperativeHandle:Dd,useInsertionEffect:Td,useLayoutEffect:_d,useMemo:Md,useReducer:wa,useRef:Id,useState:function(){return wa(wn)},useDebugValue:li,useDeferredValue:function(e){var t=Ke();return $d(t,fe.memoizedState,e)},useTransition:function(){var e=wa(wn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Cd,useId:Bd,unstable_isNewReconciler:!1},_f={readContext:Ge,useCallback:Od,useContext:Ge,useEffect:ii,useImperativeHandle:Dd,useInsertionEffect:Td,useLayoutEffect:_d,useMemo:Md,useReducer:ja,useRef:Id,useState:function(){return ja(wn)},useDebugValue:li,useDeferredValue:function(e){var t=Ke();return fe===null?t.memoizedState=e:$d(t,fe.memoizedState,e)},useTransition:function(){var e=ja(wn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Cd,useId:Bd,unstable_isNewReconciler:!1};function Lr(e,t){try{var r="",o=t;do r+=im(o),o=o.return;while(o);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Na(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function is(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function Wd(e,t,r){r=gt(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){Io||(Io=!0,xs=o),is(e,t)},r}function Vd(e,t,r){r=gt(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;r.payload=function(){return o(a)},r.callback=function(){is(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){is(e,t),typeof o!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function zl(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Ff;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(r)||(a.add(r),e=Kf.bind(null,e,t,r),t.then(e,e))}function El(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pl(e,t,r,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=gt(-1,1),t.tag=2,_t(r,t,1))),r.lanes|=1),e)}var Df=kt.ReactCurrentOwner,Te=!1;function ze(e,t,r,o){t.child=e===null?jd(t,null,r,o):Pr(t,e.child,r,o)}function Rl(e,t,r,o,a){r=r.render;var s=t.ref;return Nr(t,a),o=ai(e,t,r,o,s,a),r=si(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yt(e,t,a)):(ae&&r&&Qs(t),t.flags|=1,ze(e,t,o,a),t.child)}function Ll(e,t,r,o,a){if(e===null){var s=r.type;return typeof s=="function"&&!gi(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Yd(e,t,s,o,a)):(e=co(r.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(r=r.compare,r=r!==null?r:hn,r(i,o)&&e.ref===t.ref)return yt(e,t,a)}return t.flags|=1,e=Ot(s,o),e.ref=t.ref,e.return=t,t.child=e}function Yd(e,t,r,o,a){if(e!==null){var s=e.memoizedProps;if(hn(s,o)&&e.ref===t.ref)if(Te=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,yt(e,t,a)}return ls(e,t,r,o,a)}function Qd(e,t,r){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(vr,Me),Me|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(vr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:r,te(vr,Me),Me|=o}else s!==null?(o=s.baseLanes|r,t.memoizedState=null):o=r,te(vr,Me),Me|=o;return ze(e,t,a,r),t.child}function Gd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,r,o,a){var s=Fe(r)?er:Ce.current;return s=zr(t,s),Nr(t,a),r=ai(e,t,r,o,s,a),o=si(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yt(e,t,a)):(ae&&o&&Qs(t),t.flags|=1,ze(e,t,r,a),t.child)}function Il(e,t,r,o,a){if(Fe(r)){var s=!0;wo(t)}else s=!1;if(Nr(t,a),t.stateNode===null)so(e,t),kd(t,r,o),ss(t,r,o,a),o=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,d=r.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Fe(r)?er:Ce.current,d=zr(t,d));var p=r.getDerivedStateFromProps,u=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||c!==d)&&jl(t,i,o,d),Nt=!1;var m=t.memoizedState;i.state=m,zo(t,o,i,a),c=t.memoizedState,l!==o||m!==c||_e.current||Nt?(typeof p=="function"&&(as(t,r,p,o),c=t.memoizedState),(l=Nt||wl(t,r,l,o,m,c,d))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=d,o=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,vd(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Xe(t.type,l),i.props=d,u=t.pendingProps,m=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Fe(r)?er:Ce.current,c=zr(t,c));var b=r.getDerivedStateFromProps;(p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==u||m!==c)&&jl(t,i,o,c),Nt=!1,m=t.memoizedState,i.state=m,zo(t,o,i,a);var w=t.memoizedState;l!==u||m!==w||_e.current||Nt?(typeof b=="function"&&(as(t,r,b,o),w=t.memoizedState),(d=Nt||wl(t,r,d,o,m,w,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=w),i.props=o,i.state=w,i.context=c,o=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),o=!1)}return cs(e,t,r,o,s,a)}function cs(e,t,r,o,a,s){Gd(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&xl(t,r,!1),yt(e,t,s);o=t.stateNode,Df.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=Pr(t,e.child,null,s),t.child=Pr(t,null,l,s)):ze(e,t,l,s),t.memoizedState=o.state,a&&xl(t,r,!0),t.child}function Kd(e){var t=e.stateNode;t.pendingContext?gl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gl(e,t.context,!1),ti(e,t.containerInfo)}function Tl(e,t,r,o,a){return Er(),Ks(a),t.flags|=256,ze(e,t,r,o),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,t,r){var o=t.pendingProps,a=se.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),te(se,a&1),e===null)return ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Ko(i,o,0,null),e=Zt(e,o,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=us(r),t.memoizedState=ds,e):ci(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Of(e,t,i,o,l,a,r);if(s){s=o.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Ot(a,c),o.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=Ot(l,s):(s=Zt(s,i,r,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?us(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~r,t.memoizedState=ds,o}return s=e.child,e=s.sibling,o=Ot(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function ci(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yn(e,t,r,o){return o!==null&&Ks(o),Pr(t,e.child,null,r),e=ci(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,r,o,a,s,i){if(r)return t.flags&256?(t.flags&=-257,o=Na(Error(P(422))),Yn(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=Ko({mode:"visible",children:o.children},a,0,null),s=Zt(s,a,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&Pr(t,e.child,null,i),t.child.memoizedState=us(i),t.memoizedState=ds,s);if(!(t.mode&1))return Yn(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(P(419)),o=Na(s,o,void 0),Yn(e,t,i,o)}if(l=(i&e.childLanes)!==0,Te||l){if(o=xe,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,vt(e,a),rt(o,e,a,-1))}return hi(),o=Na(Error(P(421))),Yn(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,$e=Tt(a.nextSibling),Be=t,ae=!0,et=null,e!==null&&(We[Ve++]=pt,We[Ve++]=ht,We[Ve++]=tr,pt=e.id,ht=e.overflow,tr=t),t=ci(t,o.children),t.flags|=4096,t)}function _l(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),os(e.return,t,r)}function Sa(e,t,r,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=r,s.tailMode=a)}function qd(e,t,r){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(ze(e,t,o.children,r),o=se.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_l(e,r,t);else if(e.tag===19)_l(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(te(se,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Eo(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Sa(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Eo(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Sa(t,!0,r,null,s);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=Ot(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ot(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Mf(e,t,r){switch(t.tag){case 3:Kd(t),Er();break;case 5:Nd(t);break;case 1:Fe(t.type)&&wo(t);break;case 4:ti(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;te(So,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):r&t.child.childLanes?Jd(e,t,r):(te(se,se.current&1),e=yt(e,t,r),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return qd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(se,se.current),o)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,r)}return yt(e,t,r)}var Xd,ms,Zd,eu;Xd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ms=function(){};Zd=function(e,t,r,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Jt(lt.current);var s=null;switch(r){case"input":a=_a(e,a),o=_a(e,o),s=[];break;case"select":a=le({},a,{value:void 0}),o=le({},o,{value:void 0}),s=[];break;case"textarea":a=Oa(e,a),o=Oa(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=yo)}$a(r,o);var i;r=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ln.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(l=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ln.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&re("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};eu=function(e,t,r,o){r!==o&&(t.flags|=4)};function Yr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function $f(e,t,r){var o=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Fe(t.type)&&ko(),Ne(t),null;case 3:return o=t.stateNode,Rr(),ne(_e),ne(Ce),ni(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(ys(et),et=null))),ms(e,t),Ne(t),null;case 5:ri(t);var a=Jt(yn.current);if(r=t.type,e!==null&&t.stateNode!=null)Zd(e,t,r,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(P(166));return Ne(t),null}if(e=Jt(lt.current),Wn(t)){o=t.stateNode,r=t.type;var s=t.memoizedProps;switch(o[st]=t,o[bn]=s,e=(t.mode&1)!==0,r){case"dialog":re("cancel",o),re("close",o);break;case"iframe":case"object":case"embed":re("load",o);break;case"video":case"audio":for(a=0;a<qr.length;a++)re(qr[a],o);break;case"source":re("error",o);break;case"img":case"image":case"link":re("error",o),re("load",o);break;case"details":re("toggle",o);break;case"input":Hi(o,s),re("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},re("invalid",o);break;case"textarea":Vi(o,s),re("invalid",o)}$a(r,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hn(o.textContent,l,e),a=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hn(o.textContent,l,e),a=["children",""+l]):ln.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&re("scroll",o)}switch(r){case"input":Fn(o),Wi(o,s,!0);break;case"textarea":Fn(o),Yi(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=yo)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(r,{is:o.is}):(e=i.createElement(r),r==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,r),e[st]=t,e[bn]=o,Xd(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ba(r,o),r){case"dialog":re("cancel",e),re("close",e),a=o;break;case"iframe":case"object":case"embed":re("load",e),a=o;break;case"video":case"audio":for(a=0;a<qr.length;a++)re(qr[a],e);a=o;break;case"source":re("error",e),a=o;break;case"img":case"image":case"link":re("error",e),re("load",e),a=o;break;case"details":re("toggle",e),a=o;break;case"input":Hi(e,o),a=_a(e,o),re("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=le({},o,{value:void 0}),re("invalid",e);break;case"textarea":Vi(e,o),a=Oa(e,o),re("invalid",e);break;default:a=o}$a(r,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Rc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ec(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&cn(e,c):typeof c=="number"&&cn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ln.hasOwnProperty(s)?c!=null&&s==="onScroll"&&re("scroll",e):c!=null&&Ts(e,s,c,i))}switch(r){case"input":Fn(e),Wi(e,o,!1);break;case"textarea":Fn(e),Yi(e);break;case"option":o.value!=null&&e.setAttribute("value",""+$t(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?yr(e,!!o.multiple,s,!1):o.defaultValue!=null&&yr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=yo)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)eu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(P(166));if(r=Jt(yn.current),Jt(lt.current),Wn(t)){if(o=t.stateNode,r=t.memoizedProps,o[st]=t,(s=o.nodeValue!==r)&&(e=Be,e!==null))switch(e.tag){case 3:Hn(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hn(o.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[st]=t,t.stateNode=o}return Ne(t),null;case 13:if(ne(se),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&$e!==null&&t.mode&1&&!(t.flags&128))xd(),Er(),t.flags|=98560,s=!1;else if(s=Wn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[st]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else et!==null&&(ys(et),et=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?pe===0&&(pe=3):hi())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Rr(),ms(e,t),e===null&&gn(t.stateNode.containerInfo),Ne(t),null;case 10:return Xs(t.type._context),Ne(t),null;case 17:return Fe(t.type)&&ko(),Ne(t),null;case 19:if(ne(se),s=t.memoizedState,s===null)return Ne(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)Yr(s,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Eo(e),i!==null){for(t.flags|=128,Yr(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)s=r,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&de()>Ir&&(t.flags|=128,o=!0,Yr(s,!1),t.lanes=4194304)}else{if(!o)if(e=Eo(i),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ae)return Ne(t),null}else 2*de()-s.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,o=!0,Yr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(r=s.last,r!==null?r.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=de(),t.sibling=null,r=se.current,te(se,o?r&1|2:r&1),t):(Ne(t),null);case 22:case 23:return pi(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Me&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Bf(e,t){switch(Gs(t),t.tag){case 1:return Fe(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(),ne(_e),ne(Ce),ni(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ri(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Rr(),null;case 10:return Xs(t.type._context),null;case 22:case 23:return pi(),null;case 24:return null;default:return null}}var Qn=!1,Se=!1,Af=typeof WeakSet=="function"?WeakSet:Set,_=null;function br(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){ce(e,t,o)}else r.current=null}function fs(e,t,r){try{r()}catch(o){ce(e,t,o)}}var Fl=!1;function Uf(e,t){if(Ja=xo,e=od(),Ys(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,d=0,p=0,u=e,m=null;t:for(;;){for(var b;u!==r||a!==0&&u.nodeType!==3||(l=i+a),u!==s||o!==0&&u.nodeType!==3||(c=i+o),u.nodeType===3&&(i+=u.nodeValue.length),(b=u.firstChild)!==null;)m=u,u=b;for(;;){if(u===e)break t;if(m===r&&++d===a&&(l=i),m===s&&++p===o&&(c=i),(b=u.nextSibling)!==null)break;u=m,m=u.parentNode}u=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(qa={focusedElem:e,selectionRange:r},xo=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,v=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xe(t.type,y),v);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){ce(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Fl,Fl=!1,w}function on(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&fs(t,r,s)}a=a.next}while(a!==o)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function ps(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function tu(e){var t=e.alternate;t!==null&&(e.alternate=null,tu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[bn],delete t[es],delete t[Nf],delete t[Sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=yo));else if(o!==4&&(e=e.child,e!==null))for(hs(e,t,r),e=e.sibling;e!==null;)hs(e,t,r),e=e.sibling}function gs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(gs(e,t,r),e=e.sibling;e!==null;)gs(e,t,r),e=e.sibling}var be=null,Ze=!1;function wt(e,t,r){for(r=r.child;r!==null;)nu(e,t,r),r=r.sibling}function nu(e,t,r){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount($o,r)}catch{}switch(r.tag){case 5:Se||br(r,t);case 6:var o=be,a=Ze;be=null,wt(e,t,r),be=o,Ze=a,be!==null&&(Ze?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(Ze?(e=be,r=r.stateNode,e.nodeType===8?ba(e.parentNode,r):e.nodeType===1&&ba(e,r),fn(e)):ba(be,r.stateNode));break;case 4:o=be,a=Ze,be=r.stateNode.containerInfo,Ze=!0,wt(e,t,r),be=o,Ze=a;break;case 0:case 11:case 14:case 15:if(!Se&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&fs(r,t,i),a=a.next}while(a!==o)}wt(e,t,r);break;case 1:if(!Se&&(br(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(l){ce(r,t,l)}wt(e,t,r);break;case 21:wt(e,t,r);break;case 22:r.mode&1?(Se=(o=Se)||r.memoizedState!==null,wt(e,t,r),Se=o):wt(e,t,r);break;default:wt(e,t,r)}}function Ol(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Af),t.forEach(function(o){var a=qf.bind(null,e,o);r.has(o)||(r.add(o),o.then(a,a))})}}function qe(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var a=r[o];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Ze=!1;break e;case 3:be=l.stateNode.containerInfo,Ze=!0;break e;case 4:be=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(be===null)throw Error(P(160));nu(s,i,a),be=null,Ze=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){ce(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),ot(e),o&4){try{on(3,e,e.return),Qo(3,e)}catch(y){ce(e,e.return,y)}try{on(5,e,e.return)}catch(y){ce(e,e.return,y)}}break;case 1:qe(t,e),ot(e),o&512&&r!==null&&br(r,r.return);break;case 5:if(qe(t,e),ot(e),o&512&&r!==null&&br(r,r.return),e.flags&32){var a=e.stateNode;try{cn(a,"")}catch(y){ce(e,e.return,y)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sc(a,s),Ba(l,i);var d=Ba(l,s);for(i=0;i<c.length;i+=2){var p=c[i],u=c[i+1];p==="style"?Rc(a,u):p==="dangerouslySetInnerHTML"?Ec(a,u):p==="children"?cn(a,u):Ts(a,p,u,d)}switch(l){case"input":Fa(a,s);break;case"textarea":Cc(a,s);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?yr(a,!!s.multiple,b,!1):m!==!!s.multiple&&(s.defaultValue!=null?yr(a,!!s.multiple,s.defaultValue,!0):yr(a,!!s.multiple,s.multiple?[]:"",!1))}a[bn]=s}catch(y){ce(e,e.return,y)}}break;case 6:if(qe(t,e),ot(e),o&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(y){ce(e,e.return,y)}}break;case 3:if(qe(t,e),ot(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{fn(t.containerInfo)}catch(y){ce(e,e.return,y)}break;case 4:qe(t,e),ot(e);break;case 13:qe(t,e),ot(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(mi=de())),o&4&&Ol(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(Se=(d=Se)||p,qe(t,e),Se=d):qe(t,e),ot(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(u=_=p;_!==null;){switch(m=_,b=m.child,m.tag){case 0:case 11:case 14:case 15:on(4,m,m.return);break;case 1:br(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){o=m,r=m.return;try{t=o,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ce(o,r,y)}}break;case 5:br(m,m.return);break;case 22:if(m.memoizedState!==null){$l(u);continue}}b!==null?(b.return=m,_=b):$l(u)}p=p.sibling}e:for(p=null,u=e;;){if(u.tag===5){if(p===null){p=u;try{a=u.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,c=u.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Pc("display",i))}catch(y){ce(e,e.return,y)}}}else if(u.tag===6){if(p===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(y){ce(e,e.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;p===u&&(p=null),u=u.return}p===u&&(p=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:qe(t,e),ot(e),o&4&&Ol(e);break;case 21:break;default:qe(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ru(r)){var o=r;break e}r=r.return}throw Error(P(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(cn(a,""),o.flags&=-33);var s=Dl(e);gs(e,s,a);break;case 3:case 4:var i=o.stateNode.containerInfo,l=Dl(e);hs(e,l,i);break;default:throw Error(P(161))}}catch(c){ce(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hf(e,t,r){_=e,au(e)}function au(e,t,r){for(var o=(e.mode&1)!==0;_!==null;){var a=_,s=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||Qn;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Se;l=Qn;var d=Se;if(Qn=i,(Se=c)&&!d)for(_=a;_!==null;)i=_,c=i.child,i.tag===22&&i.memoizedState!==null?Bl(a):c!==null?(c.return=i,_=c):Bl(a);for(;s!==null;)_=s,au(s),s=s.sibling;_=a,Qn=l,Se=d}Ml(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,_=s):Ml(e)}}function Ml(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Qo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Se)if(r===null)o.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Xe(t.type,r.memoizedProps);o.componentDidUpdate(a,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&kl(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}kl(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var u=p.dehydrated;u!==null&&fn(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Se||t.flags&512&&ps(t)}catch(m){ce(t,t.return,m)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function $l(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function Bl(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Qo(4,t)}catch(c){ce(t,r,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){ce(t,a,c)}}var s=t.return;try{ps(t)}catch(c){ce(t,s,c)}break;case 5:var i=t.return;try{ps(t)}catch(c){ce(t,i,c)}}}catch(c){ce(t,t.return,c)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var Wf=Math.ceil,Lo=kt.ReactCurrentDispatcher,di=kt.ReactCurrentOwner,Qe=kt.ReactCurrentBatchConfig,G=0,xe=null,me=null,ve=0,Me=0,vr=Ht(0),pe=0,Nn=null,nr=0,Go=0,ui=0,an=null,Ie=null,mi=0,Ir=1/0,mt=null,Io=!1,xs=null,Ft=null,Gn=!1,Et=null,To=0,sn=0,bs=null,io=-1,lo=0;function Ee(){return G&6?de():io!==-1?io:io=de()}function Dt(e){return e.mode&1?G&2&&ve!==0?ve&-ve:zf.transition!==null?(lo===0&&(lo=Uc()),lo):(e=q,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function rt(e,t,r,o){if(50<sn)throw sn=0,bs=null,Error(P(185));En(e,r,o),(!(G&2)||e!==xe)&&(e===xe&&(!(G&2)&&(Go|=r),pe===4&&Ct(e,ve)),De(e,o),r===1&&G===0&&!(t.mode&1)&&(Ir=de()+500,Wo&&Wt()))}function De(e,t){var r=e.callbackNode;Cm(e,t);var o=go(e,e===xe?ve:0);if(o===0)r!==null&&Ki(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Ki(r),t===1)e.tag===0?Cf(Al.bind(null,e)):pd(Al.bind(null,e)),wf(function(){!(G&6)&&Wt()}),r=null;else{switch(Hc(o)){case 1:r=Ms;break;case 4:r=Bc;break;case 16:r=ho;break;case 536870912:r=Ac;break;default:r=ho}r=fu(r,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function su(e,t){if(io=-1,lo=0,G&6)throw Error(P(327));var r=e.callbackNode;if(Sr()&&e.callbackNode!==r)return null;var o=go(e,e===xe?ve:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=_o(e,o);else{t=o;var a=G;G|=2;var s=lu();(xe!==e||ve!==t)&&(mt=null,Ir=de()+500,Xt(e,t));do try{Qf();break}catch(l){iu(e,l)}while(!0);qs(),Lo.current=s,G=a,me!==null?t=0:(xe=null,ve=0,t=pe)}if(t!==0){if(t===2&&(a=Va(e),a!==0&&(o=a,t=vs(e,a))),t===1)throw r=Nn,Xt(e,0),Ct(e,o),De(e,de()),r;if(t===6)Ct(e,o);else{if(a=e.current.alternate,!(o&30)&&!Vf(a)&&(t=_o(e,o),t===2&&(s=Va(e),s!==0&&(o=s,t=vs(e,s))),t===1))throw r=Nn,Xt(e,0),Ct(e,o),De(e,de()),r;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(P(345));case 2:Qt(e,Ie,mt);break;case 3:if(Ct(e,o),(o&130023424)===o&&(t=mi+500-de(),10<t)){if(go(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ee(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Za(Qt.bind(null,e,Ie,mt),t);break}Qt(e,Ie,mt);break;case 4:if(Ct(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-tt(o);s=1<<i,i=t[i],i>a&&(a=i),o&=~s}if(o=a,o=de()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Wf(o/1960))-o,10<o){e.timeoutHandle=Za(Qt.bind(null,e,Ie,mt),o);break}Qt(e,Ie,mt);break;case 5:Qt(e,Ie,mt);break;default:throw Error(P(329))}}}return De(e,de()),e.callbackNode===r?su.bind(null,e):null}function vs(e,t){var r=an;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=_o(e,t),e!==2&&(t=Ie,Ie=r,t!==null&&ys(t)),e}function ys(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Vf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var a=r[o],s=a.getSnapshot;a=a.value;try{if(!nt(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ct(e,t){for(t&=~ui,t&=~Go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-tt(t),o=1<<r;e[r]=-1,t&=~o}}function Al(e){if(G&6)throw Error(P(327));Sr();var t=go(e,0);if(!(t&1))return De(e,de()),null;var r=_o(e,t);if(e.tag!==0&&r===2){var o=Va(e);o!==0&&(t=o,r=vs(e,o))}if(r===1)throw r=Nn,Xt(e,0),Ct(e,t),De(e,de()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,Ie,mt),De(e,de()),null}function fi(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(Ir=de()+500,Wo&&Wt())}}function or(e){Et!==null&&Et.tag===0&&!(G&6)&&Sr();var t=G;G|=1;var r=Qe.transition,o=q;try{if(Qe.transition=null,q=1,e)return e()}finally{q=o,Qe.transition=r,G=t,!(G&6)&&Wt()}}function pi(){Me=vr.current,ne(vr)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kf(r)),me!==null)for(r=me.return;r!==null;){var o=r;switch(Gs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ko();break;case 3:Rr(),ne(_e),ne(Ce),ni();break;case 5:ri(o);break;case 4:Rr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Xs(o.type._context);break;case 22:case 23:pi()}r=r.return}if(xe=e,me=e=Ot(e.current,null),ve=Me=t,pe=0,Nn=null,ui=Go=nr=0,Ie=an=null,Kt!==null){for(t=0;t<Kt.length;t++)if(r=Kt[t],o=r.interleaved,o!==null){r.interleaved=null;var a=o.next,s=r.pending;if(s!==null){var i=s.next;s.next=a,o.next=i}r.pending=o}Kt=null}return e}function iu(e,t){do{var r=me;try{if(qs(),oo.current=Ro,Po){for(var o=ie.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Po=!1}if(rr=0,ge=fe=ie=null,nn=!1,kn=0,di.current=null,r===null||r.return===null){pe=1,Nn=t,me=null;break}e:{var s=e,i=r.return,l=r,c=t;if(t=ve,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,u=p.tag;if(!(p.mode&1)&&(u===0||u===11||u===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=El(i);if(b!==null){b.flags&=-257,Pl(b,i,l,s,t),b.mode&1&&zl(s,d,t),t=b,c=d;var w=t.updateQueue;if(w===null){var y=new Set;y.add(c),t.updateQueue=y}else w.add(c);break e}else{if(!(t&1)){zl(s,d,t),hi();break e}c=Error(P(426))}}else if(ae&&l.mode&1){var v=El(i);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Pl(v,i,l,s,t),Ks(Lr(c,l));break e}}s=c=Lr(c,l),pe!==4&&(pe=2),an===null?an=[s]:an.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Wd(s,c,t);yl(s,h);break e;case 1:l=c;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=Vd(s,l,t);yl(s,j);break e}}s=s.return}while(s!==null)}du(r)}catch(E){t=E,me===r&&r!==null&&(me=r=r.return);continue}break}while(!0)}function lu(){var e=Lo.current;return Lo.current=Ro,e===null?Ro:e}function hi(){(pe===0||pe===3||pe===2)&&(pe=4),xe===null||!(nr&268435455)&&!(Go&268435455)||Ct(xe,ve)}function _o(e,t){var r=G;G|=2;var o=lu();(xe!==e||ve!==t)&&(mt=null,Xt(e,t));do try{Yf();break}catch(a){iu(e,a)}while(!0);if(qs(),G=r,Lo.current=o,me!==null)throw Error(P(261));return xe=null,ve=0,pe}function Yf(){for(;me!==null;)cu(me)}function Qf(){for(;me!==null&&!xm();)cu(me)}function cu(e){var t=mu(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?du(e):me=t,di.current=null}function du(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Bf(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,me=null;return}}else if(r=$f(r,t,Me),r!==null){me=r;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);pe===0&&(pe=5)}function Qt(e,t,r){var o=q,a=Qe.transition;try{Qe.transition=null,q=1,Gf(e,t,r,o)}finally{Qe.transition=a,q=o}return null}function Gf(e,t,r,o){do Sr();while(Et!==null);if(G&6)throw Error(P(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(zm(e,s),e===xe&&(me=xe=null,ve=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gn||(Gn=!0,fu(ho,function(){return Sr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var i=q;q=1;var l=G;G|=4,di.current=null,Uf(e,r),ou(r,e),pf(qa),xo=!!Ja,qa=Ja=null,e.current=r,Hf(r),bm(),G=l,q=i,Qe.transition=s}else e.current=r;if(Gn&&(Gn=!1,Et=e,To=a),s=e.pendingLanes,s===0&&(Ft=null),km(r.stateNode),De(e,de()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],o(a.value,{componentStack:a.stack,digest:a.digest});if(Io)throw Io=!1,e=xs,xs=null,e;return To&1&&e.tag!==0&&Sr(),s=e.pendingLanes,s&1?e===bs?sn++:(sn=0,bs=e):sn=0,Wt(),null}function Sr(){if(Et!==null){var e=Hc(To),t=Qe.transition,r=q;try{if(Qe.transition=null,q=16>e?16:e,Et===null)var o=!1;else{if(e=Et,Et=null,To=0,G&6)throw Error(P(331));var a=G;for(G|=4,_=e.current;_!==null;){var s=_,i=s.child;if(_.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(_=d;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:on(8,p,s)}var u=p.child;if(u!==null)u.return=p,_=u;else for(;_!==null;){p=_;var m=p.sibling,b=p.return;if(tu(p),p===d){_=null;break}if(m!==null){m.return=b,_=m;break}_=b}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}_=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,_=i;else e:for(;_!==null;){if(s=_,s.flags&2048)switch(s.tag){case 0:case 11:case 15:on(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_=h;break e}_=s.return}}var f=e.current;for(_=f;_!==null;){i=_;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,_=g;else e:for(i=f;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qo(9,l)}}catch(E){ce(l,l.return,E)}if(l===i){_=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,_=j;break e}_=l.return}}if(G=a,Wt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot($o,e)}catch{}o=!0}return o}finally{q=r,Qe.transition=t}}return!1}function Ul(e,t,r){t=Lr(r,t),t=Wd(e,t,1),e=_t(e,t,1),t=Ee(),e!==null&&(En(e,1,t),De(e,t))}function ce(e,t,r){if(e.tag===3)Ul(e,e,r);else for(;t!==null;){if(t.tag===3){Ul(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ft===null||!Ft.has(o))){e=Lr(r,e),e=Vd(t,e,1),t=_t(t,e,1),e=Ee(),t!==null&&(En(t,1,e),De(t,e));break}}t=t.return}}function Kf(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&r,xe===e&&(ve&r)===r&&(pe===4||pe===3&&(ve&130023424)===ve&&500>de()-mi?Xt(e,0):ui|=r),De(e,t)}function uu(e,t){t===0&&(e.mode&1?(t=Mn,Mn<<=1,!(Mn&130023424)&&(Mn=4194304)):t=1);var r=Ee();e=vt(e,t),e!==null&&(En(e,t,r),De(e,r))}function Jf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),uu(e,r)}function qf(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(t),uu(e,r)}var mu;mu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Te=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Te=!1,Mf(e,t,r);Te=!!(e.flags&131072)}else Te=!1,ae&&t.flags&1048576&&hd(t,No,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;so(e,t),e=t.pendingProps;var a=zr(t,Ce.current);Nr(t,r),a=ai(null,t,o,e,a,r);var s=si();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(o)?(s=!0,wo(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ei(t),a.updater=Vo,t.stateNode=a,a._reactInternals=t,ss(t,o,e,r),t=cs(null,t,o,!0,s,r)):(t.tag=0,ae&&s&&Qs(t),ze(null,t,a,r),t=t.child),t;case 16:o=t.elementType;e:{switch(so(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Zf(o),e=Xe(o,e),a){case 0:t=ls(null,t,o,e,r);break e;case 1:t=Il(null,t,o,e,r);break e;case 11:t=Rl(null,t,o,e,r);break e;case 14:t=Ll(null,t,o,Xe(o.type,e),r);break e}throw Error(P(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),ls(e,t,o,a,r);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Il(e,t,o,a,r);case 3:e:{if(Kd(t),e===null)throw Error(P(387));o=t.pendingProps,s=t.memoizedState,a=s.element,vd(e,t),zo(t,o,null,r);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Lr(Error(P(423)),t),t=Tl(e,t,o,r,a);break e}else if(o!==a){a=Lr(Error(P(424)),t),t=Tl(e,t,o,r,a);break e}else for($e=Tt(t.stateNode.containerInfo.firstChild),Be=t,ae=!0,et=null,r=jd(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Er(),o===a){t=yt(e,t,r);break e}ze(e,t,o,r)}t=t.child}return t;case 5:return Nd(t),e===null&&ns(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,Xa(o,a)?i=null:s!==null&&Xa(o,s)&&(t.flags|=32),Gd(e,t),ze(e,t,i,r),t.child;case 6:return e===null&&ns(t),null;case 13:return Jd(e,t,r);case 4:return ti(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Pr(t,null,o,r):ze(e,t,o,r),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Rl(e,t,o,a,r);case 7:return ze(e,t,t.pendingProps,r),t.child;case 8:return ze(e,t,t.pendingProps.children,r),t.child;case 12:return ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,te(So,o._currentValue),o._currentValue=i,s!==null)if(nt(s.value,i)){if(s.children===a.children&&!_e.current){t=yt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=gt(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),os(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(P(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),os(i,r,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ze(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Nr(t,r),a=Ge(a),o=o(a),t.flags|=1,ze(e,t,o,r),t.child;case 14:return o=t.type,a=Xe(o,t.pendingProps),a=Xe(o.type,a),Ll(e,t,o,a,r);case 15:return Yd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),so(e,t),t.tag=1,Fe(o)?(e=!0,wo(t)):e=!1,Nr(t,r),kd(t,o,a),ss(t,o,a,r),cs(null,t,o,!0,e,r);case 19:return qd(e,t,r);case 22:return Qd(e,t,r)}throw Error(P(156,t.tag))};function fu(e,t){return $c(e,t)}function Xf(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,r,o){return new Xf(e,t,r,o)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zf(e){if(typeof e=="function")return gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fs)return 11;if(e===Ds)return 14}return 2}function Ot(e,t){var r=e.alternate;return r===null?(r=Ye(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function co(e,t,r,o,a,s){var i=2;if(o=e,typeof e=="function")gi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case cr:return Zt(r.children,a,s,t);case _s:i=8,a|=8;break;case Ra:return e=Ye(12,r,t,a|2),e.elementType=Ra,e.lanes=s,e;case La:return e=Ye(13,r,t,a),e.elementType=La,e.lanes=s,e;case Ia:return e=Ye(19,r,t,a),e.elementType=Ia,e.lanes=s,e;case wc:return Ko(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yc:i=10;break e;case kc:i=9;break e;case Fs:i=11;break e;case Ds:i=14;break e;case jt:i=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ye(i,r,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function Zt(e,t,r,o){return e=Ye(7,e,o,t),e.lanes=r,e}function Ko(e,t,r,o){return e=Ye(22,e,o,t),e.elementType=wc,e.lanes=r,e.stateNode={isHidden:!1},e}function Ca(e,t,r){return e=Ye(6,e,null,t),e.lanes=r,e}function za(e,t,r){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ep(e,t,r,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function xi(e,t,r,o,a,s,i,l,c){return e=new ep(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ye(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ei(s),e}function tp(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function pu(e){if(!e)return Bt;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(Fe(r))return fd(e,r,t)}return t}function hu(e,t,r,o,a,s,i,l,c){return e=xi(r,o,!0,e,a,s,i,l,c),e.context=pu(null),r=e.current,o=Ee(),a=Dt(r),s=gt(o,a),s.callback=t??null,_t(r,s,a),e.current.lanes=a,En(e,a,o),De(e,o),e}function Jo(e,t,r,o){var a=t.current,s=Ee(),i=Dt(a);return r=pu(r),t.context===null?t.context=r:t.pendingContext=r,t=gt(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=_t(a,t,i),e!==null&&(rt(e,a,i,s),no(e,a,i)),i}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bi(e,t){Hl(e,t),(e=e.alternate)&&Hl(e,t)}function rp(){return null}var gu=typeof reportError=="function"?reportError:function(e){console.error(e)};function vi(e){this._internalRoot=e}qo.prototype.render=vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Jo(e,t,null,null)};qo.prototype.unmount=vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){Jo(null,e,null,null)}),t[bt]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<St.length&&t!==0&&t<St[r].priority;r++);St.splice(r,0,e),r===0&&Gc(e)}};function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wl(){}function np(e,t,r,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=Fo(i);s.call(d)}}var i=hu(t,o,e,0,null,!1,!1,"",Wl);return e._reactRootContainer=i,e[bt]=i.current,gn(e.nodeType===8?e.parentNode:e),or(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var l=o;o=function(){var d=Fo(c);l.call(d)}}var c=xi(e,0,!1,null,null,!1,!1,"",Wl);return e._reactRootContainer=c,e[bt]=c.current,gn(e.nodeType===8?e.parentNode:e),or(function(){Jo(t,c,r,o)}),c}function Zo(e,t,r,o,a){var s=r._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=Fo(i);l.call(c)}}Jo(t,i,e,a)}else i=np(r,t,e,a,o);return Fo(i)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Jr(t.pendingLanes);r!==0&&($s(t,r|1),De(t,de()),!(G&6)&&(Ir=de()+500,Wt()))}break;case 13:or(function(){var o=vt(e,1);if(o!==null){var a=Ee();rt(o,e,1,a)}}),bi(e,1)}};Bs=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var r=Ee();rt(t,e,134217728,r)}bi(e,134217728)}};Vc=function(e){if(e.tag===13){var t=Dt(e),r=vt(e,t);if(r!==null){var o=Ee();rt(r,e,t,o)}bi(e,t)}};Yc=function(){return q};Qc=function(e,t){var r=q;try{return q=e,t()}finally{q=r}};Ua=function(e,t,r){switch(t){case"input":if(Fa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var a=Ho(o);if(!a)throw Error(P(90));Nc(o),Fa(o,a)}}}break;case"textarea":Cc(e,r);break;case"select":t=r.value,t!=null&&yr(e,!!r.multiple,t,!1)}};Tc=fi;_c=or;var op={usingClientEntryPoint:!1,Events:[Rn,fr,Ho,Lc,Ic,fi]},Qr={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ap={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oc(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kn.isDisabled&&Kn.supportsFiber)try{$o=Kn.inject(ap),it=Kn}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;Ue.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yi(t))throw Error(P(200));return tp(e,t,null,r)};Ue.createRoot=function(e,t){if(!yi(e))throw Error(P(299));var r=!1,o="",a=gu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=xi(e,1,!1,null,null,r,!1,o,a),e[bt]=t.current,gn(e.nodeType===8?e.parentNode:e),new vi(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Oc(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return or(e)};Ue.hydrate=function(e,t,r){if(!Xo(t))throw Error(P(200));return Zo(null,e,t,!0,r)};Ue.hydrateRoot=function(e,t,r){if(!yi(e))throw Error(P(405));var o=r!=null&&r.hydratedSources||null,a=!1,s="",i=gu;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=hu(t,null,e,1,r??null,a,!1,s,i),e[bt]=t.current,gn(e),o)for(e=0;e<o.length;e++)r=o[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new qo(t)};Ue.render=function(e,t,r){if(!Xo(t))throw Error(P(200));return Zo(null,e,t,!1,r)};Ue.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(P(40));return e._reactRootContainer?(or(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Ue.unstable_batchedUpdates=fi;Ue.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Xo(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Zo(e,t,r,!1,o)};Ue.version="18.2.0-next-9e3b772b8-20220608";function xu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xu)}catch(e){console.error(e)}}xu(),hc.exports=Ue;var sp=hc.exports,bu,Vl=sp;bu=Vl.createRoot,Vl.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sn(){return Sn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Sn.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const Yl="popstate";function ip(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:i,hash:l}=o.location;return ks("",{pathname:s,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(o,a){return typeof a=="string"?a:Do(a)}return cp(t,r,null,e)}function ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lp(){return Math.random().toString(36).substr(2,8)}function Ql(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,r,o){return r===void 0&&(r=null),Sn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dr(t):t,{state:r,key:t&&t.key||o||lp()})}function Do(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Dr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function cp(e,t,r,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,i=a.history,l=Pt.Pop,c=null,d=p();d==null&&(d=0,i.replaceState(Sn({},i.state,{idx:d}),""));function p(){return(i.state||{idx:null}).idx}function u(){l=Pt.Pop;let v=p(),h=v==null?null:v-d;d=v,c&&c({action:l,location:y.location,delta:h})}function m(v,h){l=Pt.Push;let f=ks(y.location,v,h);d=p()+1;let g=Ql(f,d),j=y.createHref(f);try{i.pushState(g,"",j)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(j)}s&&c&&c({action:l,location:y.location,delta:1})}function b(v,h){l=Pt.Replace;let f=ks(y.location,v,h);d=p();let g=Ql(f,d),j=y.createHref(f);i.replaceState(g,"",j),s&&c&&c({action:l,location:y.location,delta:0})}function w(v){let h=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof v=="string"?v:Do(v);return f=f.replace(/ $/,"%20"),ue(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return l},get location(){return e(a,i)},listen(v){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Yl,u),c=v,()=>{a.removeEventListener(Yl,u),c=null}},createHref(v){return t(a,v)},createURL:w,encodeLocation(v){let h=w(v);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:b,go(v){return i.go(v)}};return y}var Gl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gl||(Gl={}));function dp(e,t,r){return r===void 0&&(r="/"),up(e,t,r)}function up(e,t,r,o){let a=typeof t=="string"?Dr(t):t,s=ki(a.pathname||"/",r);if(s==null)return null;let i=yu(e);mp(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let d=Np(s);l=kp(i[c],d)}return l}function yu(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let a=(s,i,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(ue(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Mt([o,c.relativePath]),p=r.concat(c);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),yu(s.children,t,p,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:vp(d,s.index),routesMeta:p})};return e.forEach((s,i)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))a(s,i);else for(let c of ku(s.path))a(s,i,c)}),t}function ku(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let i=ku(o.join("/")),l=[];return l.push(...i.map(c=>c===""?s:[s,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function mp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:yp(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const fp=/^:[\w-]+$/,pp=3,hp=2,gp=1,xp=10,bp=-2,Kl=e=>e==="*";function vp(e,t){let r=e.split("/"),o=r.length;return r.some(Kl)&&(o+=bp),t&&(o+=hp),r.filter(a=>!Kl(a)).reduce((a,s)=>a+(fp.test(s)?pp:s===""?gp:xp),o)}function yp(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function kp(e,t,r){let{routesMeta:o}=e,a={},s="/",i=[];for(let l=0;l<o.length;++l){let c=o[l],d=l===o.length-1,p=s==="/"?t:t.slice(s.length)||"/",u=wp({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),m=c.route;if(!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:Mt([s,u.pathname]),pathnameBase:Ep(Mt([s,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(s=Mt([s,u.pathnameBase]))}return i}function wp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=jp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],i=s.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:o.reduce((d,p,u)=>{let{paramName:m,isOptional:b}=p;if(m==="*"){let y=l[u]||"";i=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[u];return b&&!w?d[m]=void 0:d[m]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:i,pattern:e}}function jp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),vu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(o.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function Np(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ki(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function Sp(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:a=""}=typeof e=="string"?Dr(e):e;return{pathname:r?r.startsWith("/")?r:Cp(r,t):t,search:Pp(o),hash:Rp(a)}}function Cp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ea(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function wi(e,t){let r=zp(e);return t?r.map((o,a)=>a===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function ji(e,t,r,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=Dr(e):(a=Sn({},e),ue(!a.pathname||!a.pathname.includes("?"),Ea("?","pathname","search",a)),ue(!a.pathname||!a.pathname.includes("#"),Ea("#","pathname","hash",a)),ue(!a.search||!a.search.includes("#"),Ea("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(i==null)l=r;else{let u=t.length-1;if(!o&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),u-=1;a.pathname=m.join("/")}l=u>=0?t[u]:"/"}let c=Sp(a,l),d=i&&i!=="/"&&i.endsWith("/"),p=(s||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),Ep=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wu=["post","put","patch","delete"];new Set(wu);const Ip=["get",...wu];new Set(Ip);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cn(){return Cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Cn.apply(this,arguments)}const Ni=x.createContext(null),Tp=x.createContext(null),Vt=x.createContext(null),ea=x.createContext(null),ct=x.createContext({outlet:null,matches:[],isDataRoute:!1}),ju=x.createContext(null);function _p(e,t){let{relative:r}=t===void 0?{}:t;Or()||ue(!1);let{basename:o,navigator:a}=x.useContext(Vt),{hash:s,pathname:i,search:l}=Cu(e,{relative:r}),c=i;return o!=="/"&&(c=i==="/"?o:Mt([o,i])),a.createHref({pathname:c,search:l,hash:s})}function Or(){return x.useContext(ea)!=null}function Mr(){return Or()||ue(!1),x.useContext(ea).location}function Nu(e){x.useContext(Vt).static||x.useLayoutEffect(e)}function Oe(){let{isDataRoute:e}=x.useContext(ct);return e?Kp():Fp()}function Fp(){Or()||ue(!1);let e=x.useContext(Ni),{basename:t,future:r,navigator:o}=x.useContext(Vt),{matches:a}=x.useContext(ct),{pathname:s}=Mr(),i=JSON.stringify(wi(a,r.v7_relativeSplatPath)),l=x.useRef(!1);return Nu(()=>{l.current=!0}),x.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){o.go(d);return}let u=ji(d,JSON.parse(i),s,p.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Mt([t,u.pathname])),(p.replace?o.replace:o.push)(u,p.state,p)},[t,o,i,s,e])}const Dp=x.createContext(null);function Op(e){let t=x.useContext(ct).outlet;return t&&x.createElement(Dp.Provider,{value:e},t)}function Su(){let{matches:e}=x.useContext(ct),t=e[e.length-1];return t?t.params:{}}function Cu(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=x.useContext(Vt),{matches:a}=x.useContext(ct),{pathname:s}=Mr(),i=JSON.stringify(wi(a,o.v7_relativeSplatPath));return x.useMemo(()=>ji(e,JSON.parse(i),s,r==="path"),[e,i,s,r])}function Mp(e,t){return $p(e,t)}function $p(e,t,r,o){Or()||ue(!1);let{navigator:a}=x.useContext(Vt),{matches:s}=x.useContext(ct),i=s[s.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=Mr(),p;if(t){var u;let v=typeof t=="string"?Dr(t):t;c==="/"||(u=v.pathname)!=null&&u.startsWith(c)||ue(!1),p=v}else p=d;let m=p.pathname||"/",b=m;if(c!=="/"){let v=c.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(v.length).join("/")}let w=dp(e,{pathname:b}),y=Wp(w&&w.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Mt([c,a.encodeLocation?a.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:Mt([c,a.encodeLocation?a.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,r,o);return t&&y?x.createElement(ea.Provider,{value:{location:Cn({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Pt.Pop}},y):y}function Bp(){let e=Gp(),t=Lp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:a},r):null,null)}const Ap=x.createElement(Bp,null);class Up extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?x.createElement(ct.Provider,{value:this.props.routeContext},x.createElement(ju.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hp(e){let{routeContext:t,match:r,children:o}=e,a=x.useContext(Ni);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(ct.Provider,{value:t},o)}function Wp(e,t,r,o){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=(a=r)==null?void 0:a.errors;if(l!=null){let p=i.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);p>=0||ue(!1),i=i.slice(0,Math.min(i.length,p+1))}let c=!1,d=-1;if(r&&o&&o.v7_partialHydration)for(let p=0;p<i.length;p++){let u=i[p];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(d=p),u.route.id){let{loaderData:m,errors:b}=r,w=u.route.loader&&m[u.route.id]===void 0&&(!b||b[u.route.id]===void 0);if(u.route.lazy||w){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((p,u,m)=>{let b,w=!1,y=null,v=null;r&&(b=l&&u.route.id?l[u.route.id]:void 0,y=u.route.errorElement||Ap,c&&(d<0&&m===0?(Jp("route-fallback"),w=!0,v=null):d===m&&(w=!0,v=u.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,m+1)),f=()=>{let g;return b?g=y:w?g=v:u.route.Component?g=x.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=p,x.createElement(Hp,{match:u,routeContext:{outlet:p,matches:h,isDataRoute:r!=null},children:g})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?x.createElement(Up,{location:r.location,revalidation:r.revalidation,component:y,error:b,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var zu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zu||{}),Eu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Eu||{});function Vp(e){let t=x.useContext(Ni);return t||ue(!1),t}function Yp(e){let t=x.useContext(Tp);return t||ue(!1),t}function Qp(e){let t=x.useContext(ct);return t||ue(!1),t}function Pu(e){let t=Qp(),r=t.matches[t.matches.length-1];return r.route.id||ue(!1),r.route.id}function Gp(){var e;let t=x.useContext(ju),r=Yp(),o=Pu();return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function Kp(){let{router:e}=Vp(zu.UseNavigateStable),t=Pu(Eu.UseNavigateStable),r=x.useRef(!1);return Nu(()=>{r.current=!0}),x.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Cn({fromRouteId:t},s)))},[e,t])}const Jl={};function Jp(e,t,r){Jl[e]||(Jl[e]=!0)}function qt(e){let{to:t,replace:r,state:o,relative:a}=e;Or()||ue(!1);let{future:s,static:i}=x.useContext(Vt),{matches:l}=x.useContext(ct),{pathname:c}=Mr(),d=Oe(),p=ji(t,wi(l,s.v7_relativeSplatPath),c,a==="path"),u=JSON.stringify(p);return x.useEffect(()=>d(JSON.parse(u),{replace:r,state:o,relative:a}),[d,u,a,r,o]),null}function qp(e){return Op(e.context)}function Z(e){ue(!1)}function Xp(e){let{basename:t="/",children:r=null,location:o,navigationType:a=Pt.Pop,navigator:s,static:i=!1,future:l}=e;Or()&&ue(!1);let c=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:c,navigator:s,static:i,future:Cn({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof o=="string"&&(o=Dr(o));let{pathname:p="/",search:u="",hash:m="",state:b=null,key:w="default"}=o,y=x.useMemo(()=>{let v=ki(p,c);return v==null?null:{location:{pathname:v,search:u,hash:m,state:b,key:w},navigationType:a}},[c,p,u,m,b,w,a]);return y==null?null:x.createElement(Vt.Provider,{value:d},x.createElement(ea.Provider,{children:r,value:y}))}function Zp(e){let{children:t,location:r}=e;return Mp(ws(t),r)}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let r=[];return x.Children.forEach(e,(o,a)=>{if(!x.isValidElement(o))return;let s=[...t,a];if(o.type===x.Fragment){r.push.apply(r,ws(o.props.children,s));return}o.type!==Z&&ue(!1),!o.props.index||!o.props.children||ue(!1);let i={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=ws(o.props.children,s)),r.push(i)}),r}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},js.apply(this,arguments)}function eh(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function th(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rh(e,t){return e.button===0&&(!t||t==="_self")&&!th(e)}function Ns(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let o=e[r];return t.concat(Array.isArray(o)?o.map(a=>[r,a]):[[r,o]])},[]))}function nh(e,t){let r=Ns(e);return t&&t.forEach((o,a)=>{r.has(a)||t.getAll(a).forEach(s=>{r.append(a,s)})}),r}const oh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ah="6";try{window.__reactRouterVersion=ah}catch{}const sh="startTransition",ql=Ku[sh];function ih(e){let{basename:t,children:r,future:o,window:a}=e,s=x.useRef();s.current==null&&(s.current=ip({window:a,v5Compat:!0}));let i=s.current,[l,c]=x.useState({action:i.action,location:i.location}),{v7_startTransition:d}=o||{},p=x.useCallback(u=>{d&&ql?ql(()=>c(u)):c(u)},[c,d]);return x.useLayoutEffect(()=>i.listen(p),[i,p]),x.createElement(Xp,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:o})}const lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ch=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=x.forwardRef(function(t,r){let{onClick:o,relative:a,reloadDocument:s,replace:i,state:l,target:c,to:d,preventScrollReset:p,unstable_viewTransition:u}=t,m=eh(t,oh),{basename:b}=x.useContext(Vt),w,y=!1;if(typeof d=="string"&&ch.test(d)&&(w=d,lh))try{let g=new URL(window.location.href),j=d.startsWith("//")?new URL(g.protocol+d):new URL(d),E=ki(j.pathname,b);j.origin===g.origin&&E!=null?d=E+j.search+j.hash:y=!0}catch{}let v=_p(d,{relative:a}),h=dh(d,{replace:i,state:l,target:c,preventScrollReset:p,relative:a,unstable_viewTransition:u});function f(g){o&&o(g),g.defaultPrevented||h(g)}return x.createElement("a",js({},m,{href:w||v,onClick:y||s?o:f,ref:r,target:c}))});var Xl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xl||(Xl={}));var Zl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zl||(Zl={}));function dh(e,t){let{target:r,replace:o,state:a,preventScrollReset:s,relative:i,unstable_viewTransition:l}=t===void 0?{}:t,c=Oe(),d=Mr(),p=Cu(e,{relative:i});return x.useCallback(u=>{if(rh(u,r)){u.preventDefault();let m=o!==void 0?o:Do(d)===Do(p);c(e,{replace:m,state:a,preventScrollReset:s,relative:i,unstable_viewTransition:l})}},[d,c,p,o,a,r,e,s,i,l])}function uh(e){let t=x.useRef(Ns(e)),r=x.useRef(!1),o=Mr(),a=x.useMemo(()=>nh(o.search,r.current?null:t.current),[o.search]),s=Oe(),i=x.useCallback((l,c)=>{const d=Ns(typeof l=="function"?l(a):l);r.current=!0,s("?"+d,c)},[s,a]);return[a,i]}const Y="http://localhost:5000/api",ee=()=>localStorage.getItem("token"),Jn=e=>localStorage.setItem("token",e),mh=()=>localStorage.removeItem("token"),At={ownerRegister:async e=>{try{const r=await(await fetch(`${Y}/auth/owner/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();return r.success&&(Jn(r.token),localStorage.setItem("userData",JSON.stringify(r.user)),localStorage.setItem("userRole",r.user.role),localStorage.setItem("userName",r.user.name||r.user.username)),r}catch(t){return console.error("Owner register error:",t),{success:!1,message:"Network error"}}},ownerLogin:async(e,t)=>{try{const o=await(await fetch(`${Y}/auth/owner/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})})).json();return o.success&&(Jn(o.token),localStorage.setItem("userData",JSON.stringify(o.user)),localStorage.setItem("userRole",o.user.role),localStorage.setItem("userName",o.user.name||o.user.username)),o}catch(r){return console.error("Owner login error:",r),{success:!1,message:"Network error"}}},studentRegister:async e=>{try{const r=await(await fetch(`${Y}/auth/student/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();return r.success&&(Jn(r.token),localStorage.setItem("userData",JSON.stringify(r.user)),localStorage.setItem("userRole",r.user.role),localStorage.setItem("userName",r.user.name||r.user.email)),r}catch(t){return console.error("Student register error:",t),{success:!1,message:"Network error"}}},studentLogin:async(e,t)=>{try{const o=await(await fetch(`${Y}/auth/student/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();return o.success&&(Jn(o.token),localStorage.setItem("userData",JSON.stringify(o.user)),localStorage.setItem("userRole",o.user.role),localStorage.setItem("userName",o.user.name||o.user.email)),o}catch(r){return console.error("Student login error:",r),{success:!1,message:"Network error"}}},getMe:async()=>{try{const e=ee();return e?await(await fetch(`${Y}/auth/me`,{headers:{Authorization:`Bearer ${e}`}})).json():{success:!1,message:"No token"}}catch(e){return console.error("Get me error:",e),{success:!1,message:"Network error"}}},logout:()=>{mh(),localStorage.removeItem("userData"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),localStorage.removeItem("adminData"),localStorage.removeItem("adminToken")}},uo={getAll:async()=>{try{const e=ee();return await(await fetch(`${Y}/students`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get students error:",e),{success:!1,message:"Network error"}}},add:async e=>{try{const t=ee();console.log("Making request to:",`${Y}/students`),console.log("With token:",t?"Present":"Missing");const r=await fetch(`${Y}/students`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)});console.log("Response status:",r.status);const o=await r.json();return console.log("Response data:",o),o}catch(t){return console.error("Add student error:",t),{success:!1,message:"Network error: "+t.message}}},remove:async e=>{try{const t=ee();return await(await fetch(`${Y}/students/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Remove student error:",t),{success:!1,message:"Network error"}}}},ec={getAll:async()=>{try{const e=ee();return await(await fetch(`${Y}/rooms`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get rooms error:",e),{success:!1,message:"Network error"}}},getByType:async e=>{try{const t=ee();return await(await fetch(`${Y}/rooms/${e}`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get rooms by type error:",t),{success:!1,message:"Network error"}}},updateStatus:async(e,t)=>{try{const r=ee();return await(await fetch(`${Y}/rooms/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({status:t})})).json()}catch(r){return console.error("Update room status error:",r),{success:!1,message:"Network error"}}}},fh={addPayment:async e=>{try{const t=ee();return await(await fetch(`${Y}/fees/payment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Add payment error:",t),{success:!1,message:"Network error"}}},getHistory:async e=>{try{const t=ee();return await(await fetch(`${Y}/fees/student/${e}`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get payment history error:",t),{success:!1,message:"Network error"}}}},Oo={search:async e=>{try{const t=new URLSearchParams(e).toString();return await(await fetch(`${Y}/hostels/search?${t}`)).json()}catch(t){return console.error("Search hostels error:",t),{success:!1,message:"Network error"}}},getById:async e=>{try{return await(await fetch(`${Y}/hostels/${e}`)).json()}catch(t){return console.error("Get hostel error:",t),{success:!1,message:"Network error"}}},getRooms:async(e,t=null)=>{try{const r=t?`?type=${t}`:"";return await(await fetch(`${Y}/hostels/${e}/rooms${r}`)).json()}catch(r){return console.error("Get hostel rooms error:",r),{success:!1,message:"Network error"}}},create:async e=>{try{const t=ee();return await(await fetch(`${Y}/hostels`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create hostel error:",t),{success:!1,message:"Network error"}}},update:async(e,t)=>{try{const r=ee();return await(await fetch(`${Y}/hostels/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify(t)})).json()}catch(r){return console.error("Update hostel error:",r),{success:!1,message:"Network error"}}},getMyHostel:async()=>{try{const e=ee();return await(await fetch(`${Y}/hostels/owner/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my hostel error:",e),{success:!1,message:"Network error"}}}},ph={autocomplete:async e=>{try{return await(await fetch(`${Y}/location/autocomplete?q=${encodeURIComponent(e)}`)).json()}catch(t){return console.error("Location autocomplete error:",t),{success:!1,message:"Network error"}}}},Ss={create:async e=>{try{const t=ee();return await(await fetch(`${Y}/bookings/request`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create booking error:",t),{success:!1,message:"Network error"}}},getMyBookings:async()=>{try{const e=ee();return await(await fetch(`${Y}/bookings/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my bookings error:",e),{success:!1,message:"Network error"}}},cancel:async e=>{try{const t=ee();return await(await fetch(`${Y}/bookings/${e}/cancel`,{method:"PUT",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Cancel booking error:",t),{success:!1,message:"Network error"}}},getPending:async e=>{try{const t=ee();return await(await fetch(`${Y}/bookings/hostel/${e}/pending`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get pending bookings error:",t),{success:!1,message:"Network error"}}},getActive:async e=>{try{const t=ee();return await(await fetch(`${Y}/bookings/hostel/${e}/active`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get active bookings error:",t),{success:!1,message:"Network error"}}},approve:async(e,t="",r=null)=>{try{const o=ee();return await(await fetch(`${Y}/bookings/${e}/approve`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({ownerNotes:t,checkInDate:r})})).json()}catch(o){return console.error("Approve booking error:",o),{success:!1,message:"Network error"}}},reject:async(e,t="")=>{try{const r=ee();return await(await fetch(`${Y}/bookings/${e}/reject`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({ownerNotes:t})})).json()}catch(r){return console.error("Reject booking error:",r),{success:!1,message:"Network error"}}},getAllOwnerBookings:async()=>{try{const e=ee();return await(await fetch(`${Y}/bookings/owner/all`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get all owner bookings error:",e),{success:!1,message:"Network error"}}},checkout:async e=>{try{const t=ee();return await(await fetch(`${Y}/bookings/${e}/checkout`,{method:"PUT",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Checkout booking error:",t),{success:!1,message:"Network error"}}}},Cs={create:async e=>{try{const t=ee();return await(await fetch(`${Y}/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create review error:",t),{success:!1,message:"Network error"}}},getByHostel:async e=>{try{return await(await fetch(`${Y}/reviews/hostel/${e}`)).json()}catch(t){return console.error("Get hostel reviews error:",t),{success:!1,message:"Network error"}}},getMyReviews:async()=>{try{const e=ee();return await(await fetch(`${Y}/reviews/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my reviews error:",e),{success:!1,message:"Network error"}}},update:async(e,t)=>{try{const r=ee();return await(await fetch(`${Y}/reviews/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify(t)})).json()}catch(r){return console.error("Update review error:",r),{success:!1,message:"Network error"}}},respond:async(e,t,r)=>{try{const o=ee();return await(await fetch(`${Y}/reviews/${e}/respond`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({response:t,complaintStatus:r})})).json()}catch(o){return console.error("Respond to review error:",o),{success:!1,message:"Network error"}}},getComplaints:async()=>{try{const e=ee();return await(await fetch(`${Y}/reviews/owner/complaints`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get complaints error:",e),{success:!1,message:"Network error"}}}};function hh({onSelect:e,placeholder:t="Enter city or location"}){const[r,o]=x.useState(""),[a,s]=x.useState([]),[i,l]=x.useState(!1),[c,d]=x.useState(!1);x.useEffect(()=>{const m=setTimeout(async()=>{if(r.length<2){s([]),l(!1);return}d(!0);const b=await ph.autocomplete(r);d(!1),b.success&&(s(b.suggestions),l(b.suggestions.length>0))},300);return()=>clearTimeout(m)},[r]);const p=u=>{o(u.displayName||u.city),l(!1),e(u)};return n.jsxs("div",{style:{position:"relative",width:"100%"},children:[n.jsx("style",{children:`
        .autocomplete-wrapper {
          position: relative;
          width: 100%;
        }

        .autocomplete-input {
          width: 100%;
          padding: 1rem 1.375rem;
          border: 1.5px solid var(--border, #e5e5e5);
          border-radius: 0.875rem;
          font-size: 0.9375rem;
          background: var(--bg-secondary, #fafafa);
          color: var(--text, #0a0a0a);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
          letter-spacing: -0.01em;
        }

        .autocomplete-input:focus {
          outline: none;
          border-color: #4f46e5;
          background: var(--bg, #fff);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .suggestions-dropdown {
          position: absolute;
          top: calc(100% + 0.625rem);
          left: 0;
          right: 0;
          background: var(--bg, #fff);
          border: 1.5px solid var(--border, #e5e5e5);
          border-radius: 0.875rem;
          max-height: 300px;
          overflow-y: auto;
          z-index: 100;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          animation: slideDown 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .suggestion-item {
          padding: 1rem 1.375rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1.5px solid var(--border, #e5e5e5);
          display: flex;
          align-items: center;
          gap: 0.875rem;
          color: var(--text, #0a0a0a);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .suggestion-item:last-child {
          border-bottom: none;
        }

        .suggestion-item:hover {
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.06), rgba(6, 182, 212, 0.06));
        }

        .suggestion-icon {
          font-size: 1.125rem;
          opacity: 0.65;
        }

        .loading-spinner {
          padding: 1.125rem;
          text-align: center;
          color: var(--text-secondary, #525252);
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .suggestions-dropdown::-webkit-scrollbar {
          width: 8px;
        }

        .suggestions-dropdown::-webkit-scrollbar-track {
          background: var(--bg-secondary, #fafafa);
          border-radius: 0 0.875rem 0.875rem 0;
        }

        .suggestions-dropdown::-webkit-scrollbar-thumb {
          background: var(--border, #e5e5e5);
          border-radius: 4px;
          transition: background 0.3s;
        }

        .suggestions-dropdown::-webkit-scrollbar-thumb:hover {
          background: #4f46e5;
        }
      `}),n.jsx("input",{type:"text",className:"autocomplete-input",value:r,onChange:u=>o(u.target.value),placeholder:t,onBlur:()=>setTimeout(()=>l(!1),200),onFocus:()=>{a.length>0&&r.length>=2&&l(!0)}}),i&&n.jsx("div",{className:"suggestions-dropdown",children:c?n.jsx("div",{className:"loading-spinner",children:"Searching..."}):a.map((u,m)=>n.jsxs("div",{className:"suggestion-item",onClick:()=>p(u),children:[n.jsx("span",{className:"suggestion-icon",children:"📍"}),n.jsx("span",{children:u.displayName||`${u.city}, ${u.state}`})]},m))})]})}function Ru(){const e=Oe(),[t,r]=x.useState(null),[o,a]=x.useState(""),[s,i]=x.useState(!1),[l,c]=x.useState(""),[d,p]=x.useState(""),[u,m]=x.useState(!1);x.useEffect(()=>{const v=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",v==="dark");const h=localStorage.getItem("token"),f=localStorage.getItem("userRole"),g=localStorage.getItem("userName");h&&f&&(i(!0),p(f),c(g||(f==="student"?"Student":"Owner")))},[]);function b(){const v=!document.body.classList.contains("dark-mode");document.body.classList.toggle("dark-mode",v),localStorage.setItem("theme",v?"dark":"light")}function w(){localStorage.removeItem("token"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),i(!1),p(""),c("")}function y(){const v=new URLSearchParams;t!=null&&t.city&&v.append("city",t.city),o.trim()&&v.append("name",o.trim()),v.toString()?e(`/search?${v.toString()}`):alert("Please enter a city or hostel name to search")}return n.jsxs("main",{children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --primary-dark: #4338ca;
          --primary-light: #6366f1;
          --accent: #06b6d4;
          --accent-warm: #f59e0b;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f5f5f5;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-tertiary: #737373;
          --border: #e5e5e5;
          --border-light: #f5f5f5;
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
          --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --bg-tertiary: #262626;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-tertiary: #737373;
          --border: #262626;
          --border-light: #171717;
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
          --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        body.dark-mode .header {
          background: rgba(10, 10, 10, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 1.25rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.375rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 0.625rem;
          transition: transform 0.3s;
        }

        .logo:hover {
          transform: translateY(-1px);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -0.375rem;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          gap: 0.875rem;
          align-items: center;
        }

        .btn-outline {
          padding: 0.625rem 1.5rem;
          border: 1.5px solid var(--border);
          color: var(--text);
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .btn-outline:hover {
          background: var(--bg-secondary);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-1px);
          box-shadow: var(--shadow);
        }

        .btn-primary {
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .theme-btn {
          background: var(--bg-secondary);
          border: 1.5px solid var(--border);
          border-radius: 0.625rem;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-btn:hover {
          transform: translateY(-1px) scale(1.05);
          border-color: var(--primary);
          box-shadow: var(--shadow);
        }

        .mobile-menu-btn {
          display: none;
          background: var(--bg-secondary);
          border: 1.5px solid var(--border);
          border-radius: 0.625rem;
          padding: 0.5rem;
          cursor: pointer;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 2.5rem;
          height: 2.5rem;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn:hover {
          transform: translateY(-1px) scale(1.05);
          border-color: var(--primary);
        }

        .mobile-nav {
          display: none;
          position: fixed;
          top: 5rem;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 999;
          animation: fadeIn 0.2s ease;
        }

        body.dark-mode .mobile-nav {
          background: rgba(10, 10, 10, 0.97);
        }

        .mobile-nav.open {
          display: flex;
        }

        .mobile-nav a,
        .mobile-nav button {
          padding: 0.875rem 1rem;
          border-radius: 0.625rem;
          font-weight: 500;
          font-size: 1rem;
          color: var(--text);
          text-decoration: none;
          transition: all 0.2s;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        .mobile-nav a:hover,
        .mobile-nav button:hover {
          background: var(--bg-secondary);
          color: var(--primary);
        }

        .mobile-nav-divider {
          height: 1px;
          background: var(--border);
          margin: 0.5rem 0;
        }

        /* Stats Section */
        .stats-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          padding: 3.5rem 2.5rem;
        }

        .stats-grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          color: white;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9375rem;
          opacity: 0.85;
          letter-spacing: -0.01em;
        }

        /* Hero */
        .hero {
          margin-top: 5rem;
          padding: 9rem 2.5rem 8rem;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 60%;
          height: 150%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -10%;
          width: 60%;
          height: 150%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }

        .hero-content {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          background: var(--bg);
          border: 1.5px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 6.25rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          box-shadow: var(--shadow);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-badge:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hero-subtitle {
          font-size: 1.375rem;
          color: var(--text-secondary);
          margin: 0 0 3.5rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          line-height: 1.5;
        }

        /* Search Box */
        .search-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: var(--shadow-xl);
          max-width: 980px;
          margin: 0 auto;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .search-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
        }

        body.dark-mode .search-card {
          background: var(--bg-secondary);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr auto;
          gap: 0.875rem;
        }

        .search-input {
          padding: 1rem 1.375rem;
          border: 1.5px solid var(--border);
          border-radius: 0.875rem;
          font-size: 0.9375rem;
          background: var(--bg-secondary);
          color: var(--text);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .search-btn {
          padding: 1rem 2.25rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .search-btn:active {
          transform: translateY(0);
        }

        /* Features */
        .features {
          padding: 7rem 2.5rem;
          background: var(--bg);
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.125rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
          color: var(--primary);
          border-radius: 6.25rem;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1.5px solid rgba(79, 70, 229, 0.15);
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: var(--bg-secondary);
          padding: 2.5rem;
          border-radius: 1.25rem;
          border: 1.5px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.03), rgba(6, 182, 212, 0.03));
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(79, 70, 229, 0.2);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          border: 1.5px solid rgba(79, 70, 229, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .feature-desc {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }

        /* CTA */
        .cta {
          padding: 7rem 2.5rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 80%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite;
        }

        .cta::after {
          content: '';
          position: absolute;
          bottom: -50%;
          right: -20%;
          width: 80%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          animation: float 30s ease-in-out infinite reverse;
        }

        .cta-content {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1.25rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 2.75rem;
          letter-spacing:-0.01em;
          line-height: 1.5;
        }

        .cta-btn {
          padding: 1.125rem 2.75rem;
          background: white;
          color: var(--primary);
          border: none;
          border-radius: 0.875rem;
          font-weight: 600;
          font-size: 1.0625rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        /* Footer */
        .footer {
          background: var(--bg-secondary);
          padding: 3.5rem 2.5rem;
          border-top: 1.5px solid var(--border);
        }

        .footer-content {
          max-width: 1320px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-logo {
          font-size: 1.375rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
        }

        .footer-text {
          color: var(--text-secondary);
          margin: 0.625rem 0;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: flex; }
          .nav-container { padding: 1rem 1.5rem; }
          .hero { padding: 7rem 1.5rem 5rem; margin-top: 4rem; }
          .hero-title { font-size: 2.75rem; }
          .hero-subtitle { font-size: 1.125rem; }
          .search-grid { grid-template-columns: 1fr; }
          .search-card { padding: 1.5rem; }
          .features { padding: 5rem 1.5rem; }
          .features-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .section-title { font-size: 2.25rem; }
          .section-subtitle { font-size: 1.125rem; }
          .cta { padding: 5rem 1.5rem; }
          .cta-title { font-size: 2.25rem; }
          .cta-subtitle { font-size: 1.125rem; }
          .footer { padding: 2.5rem 1.5rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .nav-actions .btn-outline { display: none; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.25rem; }
          .section-title { font-size: 1.875rem; }
          .cta-title { font-size: 1.875rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .stat-number { font-size: 2rem; }
        }
      `}),n.jsx("header",{className:"header",children:n.jsxs("div",{className:"nav-container",children:[n.jsxs(O,{to:"/",className:"logo",children:[n.jsx("span",{children:"🏠"}),"HostelHub"]}),n.jsx("nav",{children:n.jsxs("ul",{className:"nav-links",children:[n.jsx("li",{children:n.jsx(O,{to:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(O,{to:"/search",children:"Browse"})}),n.jsx("li",{children:n.jsx(O,{to:"/hostel-info",children:"How It Works"})})]})}),n.jsxs("div",{className:"nav-actions",children:[s?n.jsxs(n.Fragment,{children:[n.jsxs("span",{style:{color:"var(--text-secondary)",fontSize:"0.875rem"},children:["Welcome, ",n.jsx("strong",{style:{color:"var(--text)"},children:l})]}),n.jsx(O,{to:d==="student"?"/student/dashboard":"/owner/dashboard",className:"btn-outline",children:"Dashboard"}),n.jsx("button",{onClick:w,className:"btn-primary",style:{background:"#dc2626"},children:"Logout"})]}):n.jsxs(n.Fragment,{children:[n.jsx(O,{to:"/login",className:"btn-outline",children:"Login"}),n.jsx(O,{to:"/login",className:"btn-primary",children:"Sign Up"})]}),n.jsx("button",{className:"theme-btn",onClick:b,children:document.body.classList.contains("dark-mode")?"☀️":"🌙"}),n.jsx("button",{className:"mobile-menu-btn",onClick:()=>m(!u),children:u?"✕":"☰"})]})]})}),n.jsxs("nav",{className:`mobile-nav ${u?"open":""}`,children:[n.jsx(O,{to:"/",onClick:()=>m(!1),children:"🏠 Home"}),n.jsx(O,{to:"/search",onClick:()=>m(!1),children:"🔍 Browse Hostels"}),n.jsx(O,{to:"/hostel-info",onClick:()=>m(!1),children:"ℹ️ How It Works"}),n.jsx("div",{className:"mobile-nav-divider"}),s?n.jsxs(n.Fragment,{children:[n.jsx(O,{to:d==="student"?"/student/dashboard":"/owner/dashboard",onClick:()=>m(!1),children:"📊 Dashboard"}),n.jsx("button",{onClick:()=>{w(),m(!1)},style:{color:"#dc2626"},children:"🚪 Logout"})]}):n.jsxs(n.Fragment,{children:[n.jsx(O,{to:"/login",onClick:()=>m(!1),children:"🔐 Login"}),n.jsx(O,{to:"/register",onClick:()=>m(!1),children:"✨ Sign Up Free"})]})]}),n.jsx("section",{className:"hero",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("span",{children:"✨"}),n.jsx("span",{children:"Trusted by 10,000+ Students"})]}),n.jsxs("h1",{className:"hero-title",children:["Find Your Perfect",n.jsx("br",{}),"Student Hostel"]}),n.jsx("p",{className:"hero-subtitle",children:"Discover verified hostels across India with the best amenities and prices"}),n.jsx("div",{className:"search-card",children:n.jsxs("div",{className:"search-grid",children:[n.jsx(hh,{onSelect:r,placeholder:"📍 City or Location"}),n.jsx("input",{type:"text",className:"search-input",placeholder:"🏨 Hostel Name (Optional)",value:o,onChange:v=>a(v.target.value),onKeyPress:v=>v.key==="Enter"&&y()}),n.jsx("button",{className:"search-btn",onClick:y,children:"Search"})]})})]})}),n.jsx("div",{className:"stats-section",children:n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:"10K+"}),n.jsx("div",{className:"stat-label",children:"Students Housed"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:"500+"}),n.jsx("div",{className:"stat-label",children:"Verified Hostels"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:"50+"}),n.jsx("div",{className:"stat-label",children:"Cities Covered"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:"4.8★"}),n.jsx("div",{className:"stat-label",children:"Average Rating"})]})]})}),n.jsx("section",{className:"features",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"HOW IT WORKS"}),n.jsx("h2",{className:"section-title",children:"Simple Steps to Your New Home"}),n.jsx("p",{className:"section-subtitle",children:"Find and book your perfect hostel in minutes"})]}),n.jsxs("div",{className:"features-grid",children:[n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"🔍"}),n.jsx("h3",{className:"feature-title",children:"Search & Compare"}),n.jsx("p",{className:"feature-desc",children:"Browse hundreds of verified hostels. Filter by location, price, and amenities to find your perfect match."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"✅"}),n.jsx("h3",{className:"feature-title",children:"Book Instantly"}),n.jsx("p",{className:"feature-desc",children:"Create your profile, submit booking requests, and connect directly with hostel owners instantly."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"🏠"}),n.jsx("h3",{className:"feature-title",children:"Move In"}),n.jsx("p",{className:"feature-desc",children:"Once approved, complete the payment and move into your comfortable new home away from home."})]})]})]})}),n.jsx("section",{className:"features",style:{background:"var(--bg)"},children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-tag",children:"FOR OWNERS"}),n.jsx("h2",{className:"section-title",children:"List Your Hostel"}),n.jsx("p",{className:"section-subtitle",children:"Reach thousands of students looking for accommodation"})]}),n.jsxs("div",{className:"features-grid",children:[n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"📝"}),n.jsx("h3",{className:"feature-title",children:"Easy Setup"}),n.jsx("p",{className:"feature-desc",children:"Create your hostel profile in minutes with our intuitive registration process."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"👥"}),n.jsx("h3",{className:"feature-title",children:"Manage Bookings"}),n.jsx("p",{className:"feature-desc",children:"Review requests, approve bookings, and manage everything from one dashboard."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("div",{className:"feature-icon",children:"💰"}),n.jsx("h3",{className:"feature-title",children:"Track Payments"}),n.jsx("p",{className:"feature-desc",children:"Monitor rent payments, generate receipts, and manage finances effortlessly."})]})]})]})}),n.jsx("section",{className:"cta",children:n.jsxs("div",{className:"cta-content",children:[n.jsx("h2",{className:"cta-title",children:"Ready to Find Your Hostel?"}),n.jsx("p",{className:"cta-subtitle",children:"Join thousands of students who found their perfect accommodation"}),n.jsx(O,{to:"/login",className:"cta-btn",children:"Get Started Free"})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("div",{className:"footer-logo",children:"🏠 HostelHub"}),n.jsx("p",{className:"footer-text",children:"Your Trusted Student Accommodation Platform"}),n.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"2rem",margin:"1.5rem 0",flexWrap:"wrap"},children:[n.jsx(O,{to:"/",style:{color:"var(--text-secondary)",fontSize:"0.875rem",transition:"color 0.2s"},onMouseEnter:v=>v.target.style.color="var(--primary)",onMouseLeave:v=>v.target.style.color="var(--text-secondary)",children:"Home"}),n.jsx(O,{to:"/search",style:{color:"var(--text-secondary)",fontSize:"0.875rem",transition:"color 0.2s"},onMouseEnter:v=>v.target.style.color="var(--primary)",onMouseLeave:v=>v.target.style.color="var(--text-secondary)",children:"Browse Hostels"}),n.jsx(O,{to:"/hostel-info",style:{color:"var(--text-secondary)",fontSize:"0.875rem",transition:"color 0.2s"},onMouseEnter:v=>v.target.style.color="var(--primary)",onMouseLeave:v=>v.target.style.color="var(--text-secondary)",children:"How It Works"}),n.jsx(O,{to:"/login",style:{color:"var(--text-secondary)",fontSize:"0.875rem",transition:"color 0.2s"},onMouseEnter:v=>v.target.style.color="var(--primary)",onMouseLeave:v=>v.target.style.color="var(--text-secondary)",children:"Login"}),n.jsx(O,{to:"/register",style:{color:"var(--text-secondary)",fontSize:"0.875rem",transition:"color 0.2s"},onMouseEnter:v=>v.target.style.color="var(--primary)",onMouseLeave:v=>v.target.style.color="var(--text-secondary)",children:"Register"})]}),n.jsx("p",{className:"footer-text",style:{fontSize:"0.875rem",marginTop:"0.5rem"},children:"© 2026 HostelHub. All rights reserved."})]})})]})}function gh(){x.useEffect(()=>{const t=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",t==="dark")},[]);function e(){const t=!document.body.classList.contains("dark-mode");document.body.classList.toggle("dark-mode",t),localStorage.setItem("theme",t?"dark":"light")}return n.jsxs("main",{children:[n.jsx("style",{children:`
        :root { --c-primary:#0d6efd; --c-bg:#f4f4f4; --c-bg-section:#ffffff; --c-bg-dark-section:#1a1a1a; --c-bg-dark-card:#2a2a2a; --c-text-primary:#333; --c-text-secondary:#f0f0f0; --c-text-muted:#ccc; --c-border:#eee; --c-shadow:rgba(0,0,0,.1); --c-blue-banner:#4A69FF; }
        body.dark-mode { --c-bg:#121212; --c-bg-section:#1e1e1e; --c-bg-dark-section:#1e1e1e; --c-bg-dark-card:#2c2c2c; --c-text-primary:#f0f0f0; --c-text-secondary:#f0f0f0; --c-text-muted:#888; --c-border:#333; --c-shadow:rgba(0,0,0,.3); }
        body { background:var(--c-bg); color:var(--c-text-primary); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; line-height:1.6; transition:background-color .3s,color .3s; }
        .container{width:90%;max-width:1100px;margin:0 auto}
        .header{position:absolute;top:0;left:0;width:100%;padding:1.5rem 0;z-index:100;background:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}
        .navbar{display:flex;justify-content:space-between;align-items:center}
        .nav-logo{font-size:1.5rem;font-weight:bold;color:white}
        .nav-right-cluster{display:flex;align-items:center;gap:1.5rem}
        #theme-toggle{background:none;border:none;cursor:pointer;color:white;width:24px;height:24px}
        .hero-small{height:40vh;min-height:300px;color:white;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://source.unsplash.com/1600x900/?hostel,lounge') no-repeat center/cover}
        .hero-small-content{position:relative;z-index:3;text-align:center}
        .hero-small-content h1{font-size:3rem;color:white;margin-bottom:1rem}
        .hero-small-content p{font-size:1.1rem;color:#eee}
        .facilities-grid{padding:4rem 0;background:var(--c-bg)}
        .grid-wrapper{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
        .facility-card{background:var(--c-bg-section);border-radius:8px;box-shadow:0 4px 15px var(--c-shadow);overflow:hidden;transition:transform .3s,box-shadow .3s}
        .facility-card:hover{transform:translateY(-5px) scale(1.03);box-shadow:0 8px 25px var(--c-shadow)}
        .card-image{height:220px;overflow:hidden}
        .card-image img{width:100%;height:100%;object-fit:cover}
        .card-content{padding:1.5rem}
        .card-tag{display:inline-block;background:var(--c-primary);color:white;padding:.2rem .6rem;font-size:.8rem;font-weight:bold;border-radius:4px;margin-bottom:.75rem}
        .card-content h3{font-size:1.5rem;color:var(--c-text-primary);margin-bottom:.5rem}
        .card-content p{font-size:.9rem;color:var(--c-text-primary);margin-bottom:1rem}
        .features-list{list-style:none;margin-bottom:1rem}
        .features-list li{display:flex;align-items:center;gap:.5rem;font-size:.9rem;color:var(--c-text-primary);margin-bottom:.5rem}
        .features-list li::before{content:'✓';color:var(--c-primary);font-weight:bold}
        .card-link{font-weight:bold;font-size:.9rem;color:var(--c-primary)}
        .why-choose-us{padding:4rem 0;background:var(--c-blue-banner);color:white}
        .why-title{text-align:center;margin-bottom:3rem}
        .why-title h2{font-size:2.5rem;color:white;margin-bottom:.5rem}
        .why-title p{font-size:1.1rem;color:#eee}
        .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;text-align:center}
        .stat-item{padding:1rem}
        .stat-number{display:block;font-size:3rem;font-weight:bold;color:white}
        .stat-label{display:block;font-size:1rem;color:#eee}
        .booking-section{padding:4rem 0;background:var(--c-bg-section)}
        .booking-title{text-align:center;font-size:2.5rem;margin-bottom:3rem;color:var(--c-text-primary)}
        .booking-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}
        .booking-card{background:var(--c-bg);border:1px solid var(--c-border);padding:2rem;border-radius:8px;text-align:center;box-shadow:0 4px 15px var(--c-shadow);transition:transform .3s,box-shadow .3s}
        .booking-card:hover{transform:translateY(-5px) scale(1.03);box-shadow:0 8px 25px var(--c-shadow)}
        .booking-card h3{font-size:1.8rem;color:var(--c-text-primary);margin-bottom:.5rem}
        .booking-card p{color:var(--c-text-primary);margin-bottom:1rem}
        .price{display:block;font-size:2rem;font-weight:bold;color:var(--c-primary);margin:.5rem 0 1.5rem}
        .book-now-btn{display:inline-block;background:var(--c-primary);color:white;padding:.8rem 2rem;border-radius:5px;font-weight:bold;transition:transform .3s,box-shadow .3s;text-decoration:none}
        .book-now-btn:hover{transform:scale(1.05);box-shadow:0 4px 10px rgba(13,110,253,.4)}
        .footer{background:var(--c-bg-dark-section);color:var(--c-text-muted)}
        .footer-bottom{text-align:center;padding:1.5rem 0;border-top:1px solid var(--c-border);font-size:.9rem}
        @media (max-width:768px){.hero-small-content h1{font-size:2.5rem}.stats-grid{grid-template-columns:1fr 1fr}}
      `}),n.jsx("header",{className:"header",children:n.jsxs("nav",{className:"navbar container",children:[n.jsx(O,{to:"/",className:"nav-logo",children:"Rajesh Hostel"}),n.jsx("div",{className:"nav-right-cluster",children:n.jsx("button",{id:"theme-toggle",onClick:e,title:"Toggle dark mode",children:"🌓"})})]})}),n.jsx("section",{className:"hero-small",children:n.jsxs("div",{className:"hero-small-content container",children:[n.jsx("h1",{children:"Our Facilities"}),n.jsx("p",{children:"Experience premium amenities designed for student comfort and productivity."})]})}),n.jsx("section",{className:"facilities-grid",children:n.jsxs("div",{className:"container grid-wrapper",children:[n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/hostel5.png",alt:"Modern Hostel Bathroom"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Living Spaces"}),n.jsx("h3",{children:"AC & Non-AC Rooms"}),n.jsx("p",{children:"Comfortable living spaces with options for all budgets."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"Single/Double/Triple occupancy"}),n.jsx("li",{children:"Attached bathrooms"}),n.jsx("li",{children:"Daily housekeeping"})]}),n.jsx("a",{href:"#",className:"card-link",children:"View Details →"})]})]}),n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/hostel6.png",alt:"Hostel Dining Hall"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Dining"}),n.jsx("h3",{children:"Modern Dining Hall"}),n.jsx("p",{children:"Clean and hygienic environment with delicious food."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"4 meals per day"}),n.jsx("li",{children:"Vegetarian & non-vegetarian options"}),n.jsx("li",{children:"Special diet accommodations"})]}),n.jsx(O,{to:"/menu",className:"card-link",children:"View Menu →"})]})]}),n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/hostel7.png",alt:"Students in Study Room"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Study Areas"}),n.jsx("h3",{children:"24/7 Study Room"}),n.jsx("p",{children:"A quiet environment with ample resources for learning."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"Individual study carrels"}),n.jsx("li",{children:"High-speed WiFi"}),n.jsx("li",{children:"Reference books available"})]}),n.jsx("a",{href:"#",className:"card-link",children:"View Timings →"})]})]}),n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/hostel8.png",alt:"Hostel Fitness Center"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Recreation"}),n.jsx("h3",{children:"Fitness Center"}),n.jsx("p",{children:"Stay active with our modern gym equipment."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"Cardio machines"}),n.jsx("li",{children:"Weights & strength"}),n.jsx("li",{children:"Yoga mats available"})]}),n.jsx("a",{href:"#",className:"card-link",children:"View Schedule →"})]})]}),n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/security.png",alt:"CCTV Security Camera"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Security"}),n.jsx("h3",{children:"24/7 Security"}),n.jsx("p",{children:"Your safety is our top priority, round the clock."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"CCTV surveillance"}),n.jsx("li",{children:"Biometric entry"}),n.jsx("li",{children:"Night patrols"})]}),n.jsx("a",{href:"#",className:"card-link",children:"View Protocols →"})]})]}),n.jsxs("div",{className:"facility-card",children:[n.jsx("div",{className:"card-image",children:n.jsx("img",{src:"images/tv.png",alt:"Student in TV Lounge"})}),n.jsxs("div",{className:"card-content",children:[n.jsx("span",{className:"card-tag",children:"Recreation"}),n.jsx("h3",{children:"TV Lounge"}),n.jsx("p",{children:"Relax and unwind in our common area with friends."}),n.jsxs("ul",{className:"features-list",children:[n.jsx("li",{children:"Large LED TV"}),n.jsx("li",{children:"Comfortable seating"}),n.jsx("li",{children:"Streaming services"})]}),n.jsx("a",{href:"#",className:"card-link",children:"View Schedule →"})]})]})]})}),n.jsx("section",{className:"why-choose-us",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"why-title",children:[n.jsx("h2",{children:"Why Choose Our Hostel?"}),n.jsx("p",{children:"Numbers that speak for our quality services"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"100+"}),n.jsx("span",{className:"stat-label",children:"Happy Students"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"24/7"}),n.jsx("span",{className:"stat-label",children:"Security & Support"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"15+"}),n.jsx("span",{className:"stat-label",children:"Amenities"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-number",children:"5 min"}),n.jsx("span",{className:"stat-label",children:"From College"})]})]})]})}),n.jsx("section",{className:"booking-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"booking-title",children:"Book Your Stay"}),n.jsxs("div",{className:"booking-grid",children:[n.jsxs("div",{className:"booking-card",children:[n.jsx("h3",{children:"Double Sharing"}),n.jsx("p",{children:"The perfect balance of privacy and community. Fully furnished with study desks."}),n.jsx("span",{className:"price",children:"₹8,000/month"}),n.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]}),n.jsxs("div",{className:"booking-card",children:[n.jsx("h3",{children:"Triple Sharing"}),n.jsx("p",{children:"A cost-effective and social option, with personal storage for everyone."}),n.jsx("span",{className:"price",children:"₹6,500/month"}),n.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]}),n.jsxs("div",{className:"booking-card",children:[n.jsx("h3",{children:"Four Sharing"}),n.jsx("p",{children:"Our most affordable and lively room, ideal for making new friends."}),n.jsx("span",{className:"price",children:"₹5,000/month"}),n.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]})]})]})}),n.jsx("footer",{className:"footer",children:n.jsx("div",{className:"footer-bottom",children:n.jsx("p",{children:"© 2025 SRKR Hostel Management. All rights reserved."})})})]})}function xh({hostel:e}){var s,i,l,c;const t=()=>{var p,u,m,b,w,y,v,h;const d=[(u=(p=e.roomConfig)==null?void 0:p.single)==null?void 0:u.rent,(b=(m=e.roomConfig)==null?void 0:m.double)==null?void 0:b.rent,(y=(w=e.roomConfig)==null?void 0:w.triple)==null?void 0:y.rent,(h=(v=e.roomConfig)==null?void 0:v.four)==null?void 0:h.rent].filter(f=>f>0);return d.length>0?Math.min(...d):0},r=((s=e.rating)==null?void 0:s.average)||0,o=((i=e.rating)==null?void 0:i.count)||0,a=d=>d==null?null:d<1?`${Math.round(d*1e3)} m`:`${d} km`;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .hostel-card {
          background: var(--bg, #fff);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid var(--border, #e5e5e5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .hostel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
          border-color: var(--primary, #4f46e5);
        }

        .hostel-image-container {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary, #4f46e5) 0%, #7c3aed 100%);
        }

        .hostel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .hostel-card:hover .hostel-image {
          transform: scale(1.05);
        }

        .hostel-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .hostel-badges {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .badge {
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .badge-gender {
          background: rgba(255, 255, 255, 0.95);
          color: var(--primary, #4f46e5);
        }

        .badge-verified {
          background: #10b981;
          color: white;
        }

        .badge-rating {
          background: #fbbf24;
          color: #78350f;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .hostel-content {
          padding: 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .hostel-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text, #0a0a0a);
          margin: 0 0 0.375rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .hostel-meta {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          margin-bottom: 0.875rem;
        }

        .hostel-location {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--text-secondary, #525252);
          font-size: 0.8125rem;
        }

        .hostel-distance {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: var(--primary, #4f46e5);
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .hostel-rating {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
        }

        .rating-stars {
          color: #fbbf24;
          font-size: 0.875rem;
        }

        .rating-value {
          font-weight: 600;
          color: var(--text, #0a0a0a);
        }

        .rating-count {
          color: var(--text-secondary, #525252);
        }

        .hostel-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 1rem;
        }

        .amenity-tag {
          padding: 0.25rem 0.625rem;
          background: var(--bg-secondary, #f5f5f5);
          color: var(--text-secondary, #525252);
          border-radius: 4px;
          font-size: 0.6875rem;
          font-weight: 500;
        }

        .hostel-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          margin-top: auto;
          border-top: 1px solid var(--border, #e5e5e5);
        }

        .rent-box {
          display: flex;
          flex-direction: column;
        }

        .rent-label {
          font-size: 0.6875rem;
          color: var(--text-secondary, #525252);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .rent-amount {
          font-size: 1.375rem;
          font-weight: 700;
          color: #059669;
          line-height: 1.2;
        }

        .rent-period {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary, #525252);
        }

        .view-button {
          padding: 0.625rem 1rem;
          background: var(--primary, #4f46e5);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.8125rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }

        .view-button:hover {
          background: #4338ca;
          transform: translateX(2px);
        }

        @media (max-width: 480px) {
          .hostel-content {
            padding: 1rem;
          }
          .hostel-name {
            font-size: 1rem;
          }
          .rent-amount {
            font-size: 1.25rem;
          }
        }
      `}),n.jsx(O,{to:`/hostel/${e._id}`,style:{textDecoration:"none",height:"100%"},children:n.jsxs("div",{className:"hostel-card",children:[n.jsxs("div",{className:"hostel-image-container",children:[e.mainImage||(l=e.images)!=null&&l[0]||e.logo?n.jsx("img",{src:e.mainImage||((c=e.images)==null?void 0:c[0])||e.logo,alt:e.name,className:"hostel-image"}):n.jsx("div",{className:"hostel-placeholder",children:"🏨"}),n.jsxs("div",{className:"hostel-badges",children:[n.jsxs("div",{style:{display:"flex",gap:"0.375rem"},children:[e.gender&&n.jsx("span",{className:"badge badge-gender",children:e.gender==="male"?"♂ Male":e.gender==="female"?"♀ Female":"⚥ Co-ed"}),e.isVerified&&n.jsx("span",{className:"badge badge-verified",children:"✓ Verified"})]}),r>0&&n.jsxs("span",{className:"badge badge-rating",children:["⭐ ",r.toFixed(1)]})]})]}),n.jsxs("div",{className:"hostel-content",children:[n.jsx("h3",{className:"hostel-name",children:e.name}),n.jsxs("div",{className:"hostel-meta",children:[n.jsxs("div",{className:"hostel-location",children:[n.jsx("span",{children:"📍"}),n.jsxs("span",{children:[e.city,", ",e.state]})]}),e.distance!==null&&e.distance!==void 0&&n.jsxs("div",{className:"hostel-distance",children:[n.jsx("span",{children:"🚗"}),n.jsxs("span",{children:[a(e.distance)," away"]})]}),n.jsx("div",{className:"hostel-rating",children:r>0?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"rating-stars",children:"★".repeat(Math.round(r))}),n.jsx("span",{className:"rating-value",children:r.toFixed(1)}),n.jsxs("span",{className:"rating-count",children:["(",o," reviews)"]})]}):n.jsx("span",{className:"rating-count",style:{fontStyle:"italic"},children:"No ratings yet"})})]}),e.amenities&&e.amenities.length>0&&n.jsxs("div",{className:"hostel-amenities",children:[e.amenities.slice(0,4).map((d,p)=>n.jsx("span",{className:"amenity-tag",children:d},p)),e.amenities.length>4&&n.jsxs("span",{className:"amenity-tag",children:["+",e.amenities.length-4]})]}),n.jsxs("div",{className:"hostel-footer",children:[n.jsxs("div",{className:"rent-box",children:[n.jsx("span",{className:"rent-label",children:"Starting from"}),n.jsxs("span",{className:"rent-amount",children:["₹",t().toLocaleString(),n.jsx("span",{className:"rent-period",children:"/mo"})]})]}),n.jsx("span",{className:"view-button",children:"View Details →"})]})]})]})})]})}function bh(){const[e]=uh(),[t,r]=x.useState([]),[o,a]=x.useState(!0),[s,i]=x.useState(""),[l,c]=x.useState(null),[d,p]=x.useState(""),u=e.get("city")||"",m=e.get("name")||"";x.useEffect(()=>{const y=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",y==="dark"),b()},[]),x.useEffect(()=>{w()},[u,m,l]);function b(){if(!navigator.geolocation){p("error");return}p("requesting"),navigator.geolocation.getCurrentPosition(y=>{c({lat:y.coords.latitude,lng:y.coords.longitude}),p("granted")},y=>{console.log("Location error:",y.message),p("denied")},{timeout:1e4,enableHighAccuracy:!1})}async function w(){a(!0),i("");const y={};u&&(y.city=u),m&&(y.name=m),l&&(y.userLat=l.lat,y.userLng=l.lng);const v=await Oo.search(y);a(!1),v.success?r(v.hostels):i(v.message||"Failed to search hostels")}return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f5f5f5;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-tertiary: #737373;
          --border: #e5e5e5;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --bg-tertiary: #262626;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-tertiary: #737373;
          --border: #262626;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .page-header {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          padding: 2.5rem 2.5rem 3rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .header-container {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 1.75rem;
          font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .back-link:hover {
          color: white;
          gap: 0.75rem;
        }

        .page-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .search-info {
          font-size: 1.0625rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          gap: 0.875rem;
          flex-wrap: wrap;
        }

        .search-tag {
          background: rgba(255, 255, 255, 0.15);
          padding: 0.4375rem 1rem;
          border-radius: 6.25rem;
          backdrop-filter: blur(12px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          letter-spacing: -0.01em;
        }

        .results-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 2.5rem 5rem;
        }

        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .results-count {
          font-size: 1.0625rem;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .results-count strong {
          color: var(--primary);
          font-weight: 700;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        .loading-state {
          text-align: center;
          padding: 7rem 2.5rem;
        }

        .loading-icon {
          font-size: 3rem;
          margin-bottom: 1.25rem;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .loading-text {
          font-size: 1.1875rem;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
        }

        .error-message {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 1.375rem 1.75rem;
          border-radius: 1rem;
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 1.125rem;
          font-weight: 500;
          font-size: 0.9375rem;
          box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);
        }

        .empty-state {
          text-align: center;
          padding: 7rem 2.5rem;
        }

        .empty-icon {
          font-size: 5.5rem;
          margin-bottom: 1.75rem;
          opacity: 0.4;
        }

        .empty-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.03em;
        }

        .empty-text {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin: 0 0 2.25rem;
          line-height: 1.6;
          letter-spacing: -0.01em;
        }

        .empty-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          text-decoration: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .empty-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
          .page-header {
            padding: 2rem 1.5rem 2.5rem;
          }
          .page-title {
            font-size: 2rem;
          }
          .results-container {
            padding: 0 1.5rem 3.5rem;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 1.75rem;
          }
          .empty-title {
            font-size: 1.625rem;
          }
        }
      `}),n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-secondary)"},children:[n.jsx("div",{className:"page-header",children:n.jsxs("div",{className:"header-container",children:[n.jsxs(O,{to:"/",className:"back-link",children:[n.jsx("span",{children:"←"}),n.jsx("span",{children:"Back to Home"})]}),n.jsx("h1",{className:"page-title",children:"Search Results"}),n.jsxs("div",{className:"search-info",children:[u&&n.jsxs("span",{className:"search-tag",children:["📍 ",u]}),m&&n.jsxs("span",{className:"search-tag",children:["🏨 ",m]})]})]})}),n.jsxs("div",{className:"results-container",children:[s&&n.jsxs("div",{className:"error-message",children:[n.jsx("span",{style:{fontSize:"1.5rem"},children:"⚠️"}),n.jsx("span",{children:s})]}),o?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-icon",children:"🔄"}),n.jsx("div",{className:"loading-text",children:d==="requesting"?"Getting your location...":"Searching for hostels..."})]}):t.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"results-header",children:[n.jsxs("div",{className:"results-count",children:["Found ",n.jsx("strong",{children:t.length})," hostel",t.length!==1?"s":"",n.jsx("span",{style:{marginLeft:"0.5rem",fontWeight:400,fontSize:"0.9rem"},children:"(sorted by rating)"})]}),l&&n.jsx("div",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:"📍 Showing distance from your location"})]}),n.jsx("div",{className:"results-grid",children:t.map(y=>n.jsx(xh,{hostel:y},y._id))})]}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🔍"}),n.jsx("h2",{className:"empty-title",children:"No Hostels Found"}),n.jsxs("p",{className:"empty-text",children:["We couldn't find any hostels matching your search criteria.",n.jsx("br",{}),"Try searching in a different city or with different keywords."]}),n.jsx(O,{to:"/",className:"empty-button",children:"← Try New Search"})]})]})]})]})}function vh(){var g,j,E,S,k,N,L,R,M,B,H,W,J,A,V,I,D,z,F,$,K,oe;const{id:e}=Su(),t=Oe(),[r,o]=x.useState(null),[a,s]=x.useState([]),[i,l]=x.useState(!0),[c,d]=x.useState(""),[p,u]=x.useState(""),[m,b]=x.useState(!1),[w,y]=x.useState(0);x.useEffect(()=>{const C=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",C==="dark"),h(),v()},[e]);async function v(){const C=await Cs.getByHostel(e);C.success&&s(C.reviews||[])}async function h(){l(!0);const C=await Oo.getById(e);if(C.success){const T=C.hostel,U=T.availability||{},he=T.roomConfig||{},ke=Object.values(he).some(we=>we&&we.count>0),dt=Object.values(U).some(we=>we&&we.totalRooms>0);if(ke&&!dt){console.log("Hostel has roomConfig but no Room documents, attempting sync...");try{const we=localStorage.getItem("token"),Le=await(await fetch(`http://localhost:5000/api/hostels/${e}/sync-rooms`,{method:"POST",headers:{Authorization:`Bearer ${we}`,"Content-Type":"application/json"}})).json();if(console.log("Sync result:",Le),Le.success&&Le.roomsCreated>0){const Je=await Oo.getById(e);if(Je.success){o(Je.hostel),l(!1);return}}}catch(we){console.log("Could not sync rooms (user may not be owner):",we.message)}}o(T)}else d(C.message||"Failed to load hostel details");l(!1)}async function f(C){const T=localStorage.getItem("token"),U=localStorage.getItem("userRole");if(!T){confirm("Please login as a student to book a room. Go to login page?")&&t("/login");return}if(U!=="student"){alert("Only students can book rooms");return}u(C),b(!0);const he=await Ss.create({hostelId:e,roomType:C,studentNotes:""});b(!1),he.success?(alert("Booking request submitted successfully! The hostel owner will review your request."),t("/student/dashboard")):alert(he.message||"Failed to submit booking request")}return i?n.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-secondary, #f8fafc)"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"🔄"}),n.jsx("div",{style:{fontSize:"1.25rem",color:"var(--text-secondary, #64748b)"},children:"Loading hostel details..."})]})}):c||!r?n.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-secondary, #f8fafc)",flexDirection:"column",gap:"2rem"},children:[n.jsx("div",{style:{fontSize:"5rem"},children:"❌"}),n.jsx("div",{style:{fontSize:"1.5rem",color:"var(--text-secondary, #64748b)"},children:c||"Hostel not found"}),n.jsx(O,{to:"/",style:{padding:"1rem 2rem",background:"#4f46e5",color:"white",borderRadius:"0.75rem",textDecoration:"none",fontWeight:"600"},children:"← Back to Home"})]}):n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --bg-tertiary: #f5f5f5;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --text-tertiary: #737373;
          --border: #e5e5e5;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --bg-tertiary: #262626;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --text-tertiary: #737373;
          --border: #262626;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero-banner {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          border-bottom: none;
          padding: 3.5rem 2.5rem;
          margin-bottom: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%);
        }

        .hero-banner::after {
          content: '';
          position: absolute;
          bottom: -50%;
          left: -10%;
          width: 40%;
          height: 200%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
        }

        body.dark-mode .hero-banner {
          background: linear-gradient(135deg, #000000 0%, #0a0a1a 50%, #0d1117 100%);
        }

        .hero-container {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .breadcrumb {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.75rem;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .breadcrumb a {
          color: #a5b4fc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover {
          color: white;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.875rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .hero-location {
          font-size: 1.1875rem;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          letter-spacing: -0.01em;
        }

        .content-wrapper {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 2.5rem 5rem;
        }

        .columns {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
        }

        .card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.125rem;
          padding: 2.25rem;
          margin-bottom: 2.25rem;
          box-shadow: var(--shadow);
        }

        .card-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 1.5rem;
          letter-spacing: -0.03em;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
          letter-spacing: -0.01em;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .amenity-item {
          background: var(--bg-tertiary);
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          text-align: center;
          font-weight: 500;
          color: var(--text);
          font-size: 0.875rem;
          border: 1px solid var(--border);
          letter-spacing: 0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .amenity-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .contact-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem;
          margin-top: 1.75rem;
        }

        .contact-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 1.125rem;
          letter-spacing: -0.02em;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin: 0.875rem 0;
          color: var(--text-secondary);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .rooms-section {
          position: sticky;
          top: 2rem;
        }

        .room-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1rem;
          padding: 1.75rem;
          margin-bottom: 1.125rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .room-card:hover {
          border-color: rgba(79, 70, 229, 0.3);
          box-shadow: var(--shadow-lg);
        }

        .room-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.125rem;
        }

        .room-name {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .room-price {
          font-size: 1.625rem;
          font-weight: 700;
          color: #059669;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .room-availability {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.125rem;
          letter-spacing: -0.01em;
        }

        .book-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary), #06b6d4);
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);
        }

        .image-gallery {
          margin-bottom: 2rem;
        }

        .main-image-container {
          width: 100%;
          height: 400px;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1rem;
          background: var(--bg-tertiary);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: var(--text-tertiary);
        }

        .thumbnail-strip {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .thumbnail {
          width: 80px;
          height: 60px;
          border-radius: 0.5rem;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .thumbnail.active {
          border-color: var(--primary);
        }

        .thumbnail:hover {
          border-color: var(--primary);
          opacity: 0.9;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 968px) {
          .columns { grid-template-columns: 1fr; }
          .rooms-section { position: static; }
          .hero-title { font-size: 2.25rem; }
          .content-wrapper { padding: 0 1.5rem 3.5rem; }
          .hero-banner { padding: 2.5rem 1.5rem; }
          .main-image-container { height: 280px; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.875rem; }
          .main-image-container { height: 200px; }
          .thumbnail { width: 60px; height: 45px; }
        }
      `}),n.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-secondary)"},children:[n.jsx("div",{className:"hero-banner",children:n.jsxs("div",{className:"hero-container",children:[n.jsxs("div",{className:"breadcrumb",children:[n.jsx(O,{to:"/",children:"Home"})," / ",n.jsx(O,{to:"/search",children:"Search"})," / ",r.name]}),n.jsx("h1",{className:"hero-title",children:r.name}),n.jsxs("div",{className:"hero-location",children:[n.jsx("span",{children:"📍"}),n.jsxs("span",{children:[r.city,", ",r.state]}),r.gender&&n.jsx("span",{style:{background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",padding:"0.25rem 0.75rem",borderRadius:"6rem",fontSize:"0.8125rem",fontWeight:600,marginLeft:"0.5rem",border:"1px solid rgba(255,255,255,0.2)"},children:r.gender==="male"?"♂ Male":r.gender==="female"?"♀ Female":"⚥ Co-ed"}),r.isVerified&&n.jsx("span",{style:{background:"rgba(16, 185, 129, 0.25)",padding:"0.25rem 0.75rem",borderRadius:"6rem",fontSize:"0.8125rem",fontWeight:600,color:"#6ee7b7",border:"1px solid rgba(16, 185, 129, 0.4)"},children:"✓ Verified"})]})]})}),n.jsxs("div",{className:"content-wrapper",children:[(((g=r.images)==null?void 0:g.length)>0||r.mainImage||r.logo)&&n.jsxs("div",{className:"image-gallery",children:[n.jsx("div",{className:"main-image-container",children:(()=>{var T;const C=((T=r.images)==null?void 0:T.length)>0?r.images:r.mainImage?[r.mainImage]:r.logo?[r.logo]:[];return C.length>0?n.jsx("img",{src:C[w]||C[0],alt:r.name,className:"main-image"}):n.jsx("div",{className:"image-placeholder",children:"🏨"})})()}),((j=r.images)==null?void 0:j.length)>1&&n.jsx("div",{className:"thumbnail-strip",children:r.images.map((C,T)=>n.jsx("div",{className:`thumbnail ${w===T?"active":""}`,onClick:()=>y(T),children:n.jsx("img",{src:C,alt:`${r.name} ${T+1}`})},T))})]}),n.jsxs("div",{className:"columns",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"card",children:[n.jsx("h2",{className:"card-title",children:"About This Hostel"}),n.jsx("p",{className:"description",children:r.description||"A comfortable and affordable hostel for students with all essential amenities and a great living environment."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{className:"card-title",children:"Amenities"}),r.amenities&&r.amenities.length>0?n.jsx("div",{className:"amenities-grid",children:r.amenities.map((C,T)=>n.jsx("div",{className:"amenity-item",children:C},T))}):n.jsx("p",{className:"description",children:"No amenities listed"})]}),n.jsx("div",{className:"card",children:n.jsxs("div",{className:"contact-card",children:[n.jsx("h3",{className:"contact-title",children:"Contact Information"}),r.contactPhone&&n.jsxs("div",{className:"contact-item",children:[n.jsx("span",{style:{fontSize:"1.25rem"},children:"📞"}),n.jsx("span",{children:r.contactPhone})]}),r.contactEmail&&n.jsxs("div",{className:"contact-item",children:[n.jsx("span",{style:{fontSize:"1.25rem"},children:"✉️"}),n.jsx("span",{children:r.contactEmail})]}),n.jsxs("div",{className:"contact-item",children:[n.jsx("span",{style:{fontSize:"1.25rem"},children:"📍"}),n.jsx("span",{children:r.address})]})]})})]}),n.jsx("div",{className:"rooms-section",children:n.jsxs("div",{className:"card",children:[n.jsx("h2",{className:"card-title",children:"Available Rooms"}),((S=(E=r.roomConfig)==null?void 0:E.single)==null?void 0:S.count)>0&&n.jsx(qn,{type:"single",name:"Single Room",rent:r.roomConfig.single.rent,availability:(k=r.roomAvailability)==null?void 0:k.single,totalRooms:r.roomConfig.single.count,onBook:f,isBooking:m&&p==="single"}),((L=(N=r.roomConfig)==null?void 0:N.double)==null?void 0:L.count)>0&&n.jsx(qn,{type:"double",name:"Double Sharing",rent:r.roomConfig.double.rent,availability:(R=r.roomAvailability)==null?void 0:R.double,totalRooms:r.roomConfig.double.count,onBook:f,isBooking:m&&p==="double"}),((B=(M=r.roomConfig)==null?void 0:M.triple)==null?void 0:B.count)>0&&n.jsx(qn,{type:"triple",name:"Triple Sharing",rent:r.roomConfig.triple.rent,availability:(H=r.roomAvailability)==null?void 0:H.triple,totalRooms:r.roomConfig.triple.count,onBook:f,isBooking:m&&p==="triple"}),((J=(W=r.roomConfig)==null?void 0:W.four)==null?void 0:J.count)>0&&n.jsx(qn,{type:"four",name:"Four Sharing",rent:r.roomConfig.four.rent,availability:(A=r.roomAvailability)==null?void 0:A.four,totalRooms:r.roomConfig.four.count,onBook:f,isBooking:m&&p==="four"}),!((I=(V=r.roomConfig)==null?void 0:V.single)!=null&&I.count)&&!((z=(D=r.roomConfig)==null?void 0:D.double)!=null&&z.count)&&!(($=(F=r.roomConfig)==null?void 0:F.triple)!=null&&$.count)&&!((oe=(K=r.roomConfig)==null?void 0:K.four)!=null&&oe.count)&&n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No rooms configured for this hostel yet."})]})}),n.jsxs("div",{className:"reviews-section",style:{background:"var(--bg, #fff)",borderRadius:"1rem",padding:"1.5rem",marginTop:"1.5rem",border:"1px solid var(--border, #e5e5e5)"},children:[n.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:["⭐ Reviews & Ratings",n.jsxs("span",{style:{fontSize:"0.875rem",fontWeight:400,color:"var(--text-secondary)"},children:["(",a.length," ",a.length===1?"review":"reviews",")"]})]}),a.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)",background:"var(--bg-secondary)",borderRadius:"0.5rem"},children:[n.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"📝"}),"No reviews yet. Be the first to review this hostel!"]}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.map(C=>{var T;return n.jsxs("div",{style:{padding:"1rem",background:"var(--bg-secondary)",borderRadius:"0.75rem",border:C.isComplaint?"1px solid #ef4444":"1px solid var(--border)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.75rem"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontWeight:600,marginBottom:"0.25rem"},children:[((T=C.student)==null?void 0:T.name)||"Anonymous",C.isComplaint&&n.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.6875rem",background:"#fef2f2",color:"#dc2626",padding:"0.125rem 0.5rem",borderRadius:"1rem",fontWeight:500},children:"Complaint"})]}),n.jsxs("div",{style:{color:"#fbbf24",fontSize:"0.875rem"},children:["★".repeat(C.rating),"☆".repeat(5-C.rating)]})]}),n.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-secondary)"},children:new Date(C.createdAt).toLocaleDateString()})]}),C.comment&&n.jsx("p",{style:{margin:0,fontSize:"0.9375rem",color:"var(--text-secondary)",lineHeight:1.6},children:C.comment}),C.ownerResponse&&n.jsxs("div",{style:{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:"1px solid var(--border)",paddingLeft:"1rem",borderLeft:"3px solid var(--primary)"},children:[n.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--primary)",marginBottom:"0.25rem"},children:"Owner Response:"}),n.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--text-secondary)"},children:C.ownerResponse})]})]},C._id)})})]})]})]})]})]})}function qn({type:e,name:t,rent:r,availability:o,totalRooms:a,onBook:s,isBooking:i}){const l=o&&o.totalRooms>0;function c(m){switch(m){case"single":return 1;case"double":return 2;case"triple":return 3;case"four":return 4;default:return 1}}let d,p;if(l)d=o.availableBeds||0,o.totalBeds,p=o.rooms||[];else{const m=c(e);d=a*m,p=[]}const u=d>0;return n.jsxs("div",{className:"room-card",style:{opacity:u?1:.6},children:[n.jsxs("div",{className:"room-header",children:[n.jsxs("div",{className:"room-name",children:["🛏️ ",t]}),n.jsxs("div",{className:"room-price",children:["₹",r,"/month"]})]}),n.jsxs("div",{className:"room-availability",children:[n.jsx("strong",{children:d})," beds available in ",n.jsx("strong",{children:p.length||a})," rooms"]}),p.length>0&&n.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"var(--bg-secondary)",borderRadius:"0.5rem",fontSize:"0.8125rem"},children:[n.jsx("div",{style:{fontWeight:"600",marginBottom:"0.5rem",color:"var(--text-secondary)"},children:"Available Rooms:"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[p.slice(0,6).map(m=>n.jsxs("span",{style:{padding:"0.25rem 0.75rem",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"0.25rem",fontSize:"0.75rem"},children:["Room ",m.number," (",m.availableBeds,"/",m.capacity," beds)"]},m.id)),p.length>6&&n.jsxs("span",{style:{padding:"0.25rem 0.75rem",color:"var(--text-secondary)",fontSize:"0.75rem"},children:["+",p.length-6," more"]})]})]}),n.jsx("button",{className:"book-btn",onClick:()=>s(e),disabled:!u||i,style:{opacity:u?1:.5},children:i?"Booking...":u?"Book Now":"No Beds Available"})]})}function yh(){const e=Oe(),[t,r]=x.useState(""),[o,a]=x.useState({email:"",username:"",password:""}),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const u=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",u==="dark")},[]);const d=u=>{a({...o,[u.target.name]:u.target.value}),i("")},p=async u=>{u.preventDefault(),i(""),c(!0);let m;t==="student"?m=await At.studentLogin(o.email,o.password):m=await At.ownerLogin(o.username,o.password),c(!1),m.success?e(t==="student"?"/student/dashboard":"/owner/dashboard"):i(m.message||"Invalid credentials")};return t?n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --border: #e5e5e5;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --border: #262626;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .form-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.125rem;
          padding: 2.5rem;
          max-width: 420px;
          width: 100%;
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .role-badge {
          display: inline-block;
          padding: 0.4375rem 1rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
          border: 1.5px solid rgba(79, 70, 229, 0.15);
          border-radius: 6.25rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1.125rem;
          border: 1.5px solid var(--border);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text);
          font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .error-message {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
        }

        .form-footer button {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          font-weight: 500;
          padding: 0;
          text-decoration: underline;
        }

        .form-footer a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .form-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .form-card { padding: 2rem 1.5rem; }
          .form-title { font-size: 1.625rem; }
        }
      `}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"form-card",children:[n.jsxs("div",{className:"form-header",children:[n.jsx("span",{className:"role-badge",children:t==="student"?"🎓 Student":"🏢 Owner"}),n.jsx("h1",{className:"form-title",children:"Welcome Back"}),n.jsx("p",{className:"form-subtitle",children:"Login to your account"})]}),s&&n.jsx("div",{className:"error-message",children:s}),n.jsxs("form",{onSubmit:p,children:[t==="student"?n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Email"}),n.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Enter your email",autoFocus:!0})]}):n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Username"}),n.jsx("input",{type:"text",name:"username",className:"form-input",value:o.username,onChange:d,required:!0,placeholder:"Enter your username",autoFocus:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Password"}),n.jsx("input",{type:"password",name:"password",className:"form-input",value:o.password,onChange:d,required:!0,placeholder:"Enter your password"})]}),n.jsx("button",{type:"submit",className:"submit-btn",disabled:l,children:l?"Logging in...":"Login"})]}),n.jsxs("div",{className:"form-footer",children:[n.jsx("button",{type:"button",onClick:()=>r(""),children:"← Change Account Type"}),n.jsx("br",{}),n.jsx("span",{style:{color:"var(--text-secondary)"},children:"Don't have an account? "}),n.jsx(O,{to:"/register",children:"Register"})]})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          :root {
            --primary: #4f46e5;
            --accent: #06b6d4;
            --bg: #ffffff;
            --bg-secondary: #fafafa;
            --text: #0a0a0a;
            --text-secondary: #525252;
            --border: #e5e5e5;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
          }

          body.dark-mode {
            --bg: #0a0a0a;
            --bg-secondary: #171717;
            --text: #fafafa;
            --text-secondary: #a3a3a3;
            --border: #262626;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text);
            -webkit-font-smoothing: antialiased;
          }

          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .role-selection {
            max-width: 900px;
            width: 100%;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            margin-bottom: 0.75rem;
          }

          .subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            letter-spacing: -0.01em;
          }

          .roles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 2.5rem;
          }

          .role-card {
            background: var(--bg);
            border: 1.5px solid var(--border);
            border-radius: 1.125rem;
            padding: 2.5rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
          }

          .role-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary);
          }

          .role-icon {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
          }

          .role-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }

          .role-desc {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.9375rem;
            letter-spacing: -0.01em;
          }

          .footer-links {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9375rem;
            transition: color 0.3s;
          }

          .footer-links a:hover {
            color: var(--primary);
          }

          @media (max-width: 768px) {
            .roles-grid { grid-template-columns: 1fr; }
            .title { font-size: 2rem; }
          }
        `}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"role-selection",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{className:"title",children:"Welcome Back"}),n.jsx("p",{className:"subtitle",children:"Select your account type to continue"})]}),n.jsxs("div",{className:"roles-grid",children:[n.jsxs("div",{className:"role-card",onClick:()=>r("student"),children:[n.jsx("div",{className:"role-icon",children:"🎓"}),n.jsx("h2",{className:"role-title",children:"Student"}),n.jsx("p",{className:"role-desc",children:"Access your bookings, search hostels, and manage your profile."})]}),n.jsxs("div",{className:"role-card",onClick:()=>r("owner"),children:[n.jsx("div",{className:"role-icon",children:"🏢"}),n.jsx("h2",{className:"role-title",children:"Hostel Owner"}),n.jsx("p",{className:"role-desc",children:"Manage your hostel, review bookings, and track payments."})]})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx(O,{to:"/",children:"← Back to Home"}),n.jsxs("div",{children:[n.jsx("span",{style:{color:"var(--text-secondary)"},children:"Don't have an account? "}),n.jsx(O,{to:"/register",children:"Register"})]})]})]})})]})}function kh(){const e=Oe(),[t,r]=x.useState(""),[o,a]=x.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",username:"",hostelName:""}),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const u=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",u==="dark")},[]);const d=u=>{a({...o,[u.target.name]:u.target.value}),i("")},p=async u=>{if(u.preventDefault(),i(""),o.password!==o.confirmPassword){i("Passwords do not match");return}if(o.password.length<6){i("Password must be at least 6 characters");return}c(!0);let m;t==="student"?m=await At.studentRegister({name:o.name,email:o.email,phone:o.phone,password:o.password}):m=await At.ownerRegister({username:o.username,email:o.email,password:o.password,hostelName:o.hostelName}),c(!1),m.success?t==="student"?(alert("Registration successful! Please check your email to verify your account."),e("/login")):(alert("Registration successful!"),e("/owner/dashboard")):i(m.message||"Registration failed")};return t?n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --primary: #4f46e5;
          --accent: #06b6d4;
          --bg: #ffffff;
          --bg-secondary: #fafafa;
          --text: #0a0a0a;
          --text-secondary: #525252;
          --border: #e5e5e5;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
        }

        body.dark-mode {
          --bg: #0a0a0a;
          --bg-secondary: #171717;
          --text: #fafafa;
          --text-secondary: #a3a3a3;
          --border: #262626;
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          background: var(--bg-secondary);
          color: var(--text);
          -webkit-font-smoothing: antialiased;
        }

        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .form-card {
          background: var(--bg);
          border: 1.5px solid var(--border);
          border-radius: 1.125rem;
          padding: 2.5rem;
          max-width: 480px;
          width: 100%;
          box-shadow: var(--shadow-lg);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .role-badge {
          display: inline-block;
          padding: 0.4375rem 1rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
          border: 1.5px solid rgba(79, 70, 229, 0.15);
          border-radius: 6.25rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .form-subtitle {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1.125rem;
          border: 1.5px solid var(--border);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text);
          font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
        }

        .error-message {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 0.875rem 1.125rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.875rem;
        }

        .form-footer button {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          font-weight: 500;
          padding: 0;
          text-decoration: underline;
        }

        .form-footer a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .form-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .form-card { padding: 2rem 1.5rem; }
          .form-title { font-size: 1.625rem; }
        }
      `}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"form-card",children:[n.jsxs("div",{className:"form-header",children:[n.jsx("span",{className:"role-badge",children:t==="student"?"🎓 Student":"🏢 Owner"}),n.jsx("h1",{className:"form-title",children:"Create Account"}),n.jsx("p",{className:"form-subtitle",children:"Join HostelHub today"})]}),s&&n.jsx("div",{className:"error-message",children:s}),n.jsxs("form",{onSubmit:p,children:[t==="student"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Full Name"}),n.jsx("input",{type:"text",name:"name",className:"form-input",value:o.name,onChange:d,required:!0,placeholder:"Enter your full name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Email"}),n.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Enter your email"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",className:"form-input",value:o.phone,onChange:d,required:!0,placeholder:"Enter your phone number"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Username"}),n.jsx("input",{type:"text",name:"username",className:"form-input",value:o.username,onChange:d,required:!0,placeholder:"Choose a username"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Email"}),n.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Enter your email"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Hostel Name"}),n.jsx("input",{type:"text",name:"hostelName",className:"form-input",value:o.hostelName,onChange:d,required:!0,placeholder:"Enter your hostel name"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Password"}),n.jsx("input",{type:"password",name:"password",className:"form-input",value:o.password,onChange:d,required:!0,placeholder:"Create a password (min 6 characters)",minLength:6})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Confirm Password"}),n.jsx("input",{type:"password",name:"confirmPassword",className:"form-input",value:o.confirmPassword,onChange:d,required:!0,placeholder:"Confirm your password"})]}),n.jsx("button",{type:"submit",className:"submit-btn",disabled:l,children:l?"Creating Account...":"Create Account"})]}),n.jsxs("div",{className:"form-footer",children:[n.jsx("button",{type:"button",onClick:()=>r(""),children:"← Change Account Type"}),n.jsx("br",{}),n.jsx("span",{style:{color:"var(--text-secondary)"},children:"Already have an account? "}),n.jsx(O,{to:"/login",children:"Login"})]})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          :root {
            --primary: #4f46e5;
            --accent: #06b6d4;
            --bg: #ffffff;
            --bg-secondary: #fafafa;
            --text: #0a0a0a;
            --text-secondary: #525252;
            --border: #e5e5e5;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
          }

          body.dark-mode {
            --bg: #0a0a0a;
            --bg-secondary: #171717;
            --text: #fafafa;
            --text-secondary: #a3a3a3;
            --border: #262626;
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
            background: var(--bg-secondary);
            color: var(--text);
            -webkit-font-smoothing: antialiased;
          }

          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }

          .role-selection {
            max-width: 900px;
            width: 100%;
          }

          .header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .title {
            font-size: 2.5rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            margin-bottom: 0.75rem;
          }

          .subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            letter-spacing: -0.01em;
          }

          .roles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 2.5rem;
          }

          .role-card {
            background: var(--bg);
            border: 1.5px solid var(--border);
            border-radius: 1.125rem;
            padding: 2.5rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
          }

          .role-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary);
          }

          .role-icon {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
          }

          .role-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }

          .role-desc {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.9375rem;
            letter-spacing: -0.01em;
          }

          .back-link {
            text-align: center;
          }

          .back-link a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9375rem;
            transition: color 0.3s;
          }

          .back-link a:hover {
            color: var(--primary);
          }

          @media (max-width: 768px) {
            .roles-grid { grid-template-columns: 1fr; }
            .title { font-size: 2rem; }
          }
        `}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"role-selection",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{className:"title",children:"Create Account"}),n.jsx("p",{className:"subtitle",children:"Choose your account type to get started"})]}),n.jsxs("div",{className:"roles-grid",children:[n.jsxs("div",{className:"role-card",onClick:()=>r("student"),children:[n.jsx("div",{className:"role-icon",children:"🎓"}),n.jsx("h2",{className:"role-title",children:"Student"}),n.jsx("p",{className:"role-desc",children:"Search and book hostels, manage your reservations, and connect with hostel owners."})]}),n.jsxs("div",{className:"role-card",onClick:()=>r("owner"),children:[n.jsx("div",{className:"role-icon",children:"🏢"}),n.jsx("h2",{className:"role-title",children:"Hostel Owner"}),n.jsx("p",{className:"role-desc",children:"List your hostel, manage bookings, track payments, and grow your business."})]})]}),n.jsx("div",{className:"back-link",children:n.jsx(O,{to:"/login",children:"Already have an account? Login"})})]})})]})}function wh(){var z,F,$,K,oe;const e=Oe(),[t,r]=x.useState(null),[o,a]=x.useState([]),[s,i]=x.useState(!0),[l,c]=x.useState(!1),[d,p]=x.useState([]),[u,m]=x.useState(!1),[b,w]=x.useState(""),[y,v]=x.useState([]),[h,f]=x.useState(!1),[g,j]=x.useState(null);x.useEffect(()=>{const C=localStorage.getItem("theme");c(C==="dark"),C==="dark"?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode");const T=()=>{const U=localStorage.getItem("theme");c(U==="dark"),U==="dark"?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")};return window.addEventListener("themeChange",T),S(),E(),()=>{window.removeEventListener("themeChange",T)}},[]);function E(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(C=>{j({lat:C.coords.latitude,lng:C.coords.longitude})},C=>{console.log("Location not available:",C.message)},{timeout:5e3})}async function S(){i(!0);const[C,T,U]=await Promise.all([At.getMe(),Ss.getMyBookings(),Cs.getMyReviews()]);if(C.success)r(C.user);else{e("/login");return}T.success&&a(T.bookings),U.success&&p(U.reviews||[]),i(!1)}function k(){At.logout(),e("/")}async function N(C){if(!window.confirm("Are you sure you want to cancel this booking?"))return;const T=await Ss.cancel(C);T.success?S():alert(T.message||"Failed to cancel booking")}async function L(C){if(C==null||C.preventDefault(),!!b.trim()){f(!0);try{const T={city:b.trim()};g&&(T.userLat=g.lat,T.userLng=g.lng);const U=await Oo.search(T);U.success&&v(U.hostels||[])}catch(T){console.error("Search error:",T)}f(!1)}}function R(C){return C==null?null:C<1?`${Math.round(C*1e3)} m`:`${C} km`}function M(C){var he,ke;const T=((he=C.rating)==null?void 0:he.average)||0,U=((ke=C.rating)==null?void 0:ke.count)||0;return T===0&&U===0?"No ratings yet":`⭐ ${T.toFixed(1)} (${U})`}function B(C){return d.some(T=>{var U;return T.booking===C||((U=T.booking)==null?void 0:U._id)===C})}async function H(C,T,U,he){const ke=await Cs.create({hostelId:C.hostel._id||C.hostel,bookingId:C._id,rating:T,comment:U,isComplaint:he});ke.success?(alert("Review submitted successfully!"),S()):alert(ke.message||"Failed to submit review")}function W(C){e(`/hostel/${C}`)}function J(){e("/search")}const A=o.find(C=>C.status==="active"||C.status==="approved"),V=o.filter(C=>C.status==="pending"),I=o.filter(C=>["rejected","cancelled","completed"].includes(C.status));if(s)return n.jsxs("div",{className:`student-dashboard ${l?"dark":"light"}`,children:[n.jsx("style",{children:D()}),n.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:l?"#0a0a0a":"#ffffff"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{className:"loader"}),n.jsx("div",{style:{fontSize:"0.9375rem",color:l?"#a3a3a3":"#525252",marginTop:"1rem"},children:"Loading your dashboard..."})]})})]});function D(){return`
      * { margin: 0; padding: 0; box-sizing: border-box; }

      :root {
        --primary: #4f46e5;
        --primary-dark: #4338ca;
        --accent: #06b6d4;
        --bg: #ffffff;
        --bg-secondary: #fafafa;
        --bg-tertiary: #f5f5f5;
        --text: #0a0a0a;
        --text-secondary: #525252;
        --text-tertiary: #737373;
        --border: #e5e5e5;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
        --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08);
      }

      .dark {
        --bg: #0a0a0a;
        --bg-secondary: #171717;
        --bg-tertiary: #262626;
        --text: #fafafa;
        --text-secondary: #a3a3a3;
        --text-tertiary: #737373;
        --border: #262626;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
      }

      .student-dashboard {
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
        background: var(--bg);
        color: var(--text);
        -webkit-font-smoothing: antialiased;
      }

      .loader {
        width: 40px;
        height: 40px;
        border: 3px solid var(--border);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .header {
        background: rgba(255, 255, 255, 0.85);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(20px) saturate(180%);
        transition: all 0.3s ease;
      }

      .dark .header {
        background: rgba(10, 10, 10, 0.85);
      }

      .header-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        background: linear-gradient(135deg, var(--primary), #06b6d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-decoration: none;
        flex-shrink: 0;
      }

      .user-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        padding: 0.375rem 0.875rem;
        border-radius: 6rem;
        border: 1px solid var(--border);
      }

      .user-name {
        font-weight: 600;
        color: var(--text);
      }

      .nav-links {
        display: flex;
        gap: 0.375rem;
      }

      .nav-link {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.2s;
      }

      .nav-link:hover {
        color: var(--primary);
        background: var(--bg-tertiary);
      }

      .btn-logout {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #dc2626;
        background: transparent;
        border: 1px solid #fecaca;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .dark .btn-logout {
        border-color: rgba(220, 38, 38, 0.3);
      }

      .btn-logout:hover {
        background: #fef2f2;
      }

      .dark .btn-logout:hover {
        background: rgba(220, 38, 38, 0.1);
      }

      .main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .welcome-section {
        background: linear-gradient(135deg, var(--primary) 0%, #06b6d4 100%);
        border-radius: 1.25rem;
        padding: 2rem 2.5rem;
        margin-bottom: 2rem;
        color: white;
        position: relative;
        overflow: hidden;
      }

      .welcome-section::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -10%;
        width: 50%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%);
      }

      .welcome-title {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        margin-bottom: 0.375rem;
        position: relative;
        z-index: 1;
      }

      .welcome-subtitle {
        opacity: 0.9;
        font-size: 0.9375rem;
        position: relative;
        z-index: 1;
      }

      .grid {
        display: grid;
        gap: 1.5rem;
      }

      .grid-2 {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      .card {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.2s;
      }

      .card:hover {
        box-shadow: var(--shadow-lg);
      }

      .card-header {
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .card-body {
        padding: 1.5rem;
      }

      .booking-active {
        border-color: var(--primary);
        border-width: 2px;
      }

      .booking-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      @media (max-width: 500px) {
        .booking-grid {
          grid-template-columns: 1fr;
        }
      }

      .booking-field {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .booking-label {
        font-size: 0.75rem;
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
      }

      .booking-value {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--text);
      }

      .booking-value.rent {
        color: #059669;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.625rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 500;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
        text-decoration: none;
        border: none;
      }

      .btn-primary {
        background: var(--primary);
        color: white;
      }

      .btn-primary:hover {
        background: var(--primary-dark);
      }

      .btn-danger {
        background: #fee2e2;
        color: #dc2626;
        border: 1px solid #fecaca;
      }

      .dark .btn-danger {
        background: rgba(220, 38, 38, 0.15);
        border-color: rgba(220, 38, 38, 0.3);
      }

      .btn-danger:hover {
        background: #fecaca;
      }

      .dark .btn-danger:hover {
        background: rgba(220, 38, 38, 0.25);
      }

      .btn-outline {
        background: transparent;
        color: var(--text);
        border: 1px solid var(--border);
      }

      .btn-outline:hover {
        background: var(--bg-tertiary);
      }

      .status-badge {
        display: inline-flex;
        padding: 0.25rem 0.75rem;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: 6rem;
      }

      .status-pending {
        background: #fef3c7;
        color: #92400e;
      }

      .dark .status-pending {
        background: rgba(251, 191, 36, 0.15);
        color: #fbbf24;
      }

      .status-approved, .status-active {
        background: #dcfce7;
        color: #166534;
      }

      .dark .status-approved, .dark .status-active {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
      }

      .status-rejected {
        background: #fee2e2;
        color: #991b1b;
      }

      .dark .status-rejected {
        background: rgba(239, 68, 68, 0.15);
        color: #f87171;
      }

      .status-cancelled {
        background: var(--bg-tertiary);
        color: var(--text-secondary);
      }

      .status-completed {
        background: #d1fae5;
        color: #065f46;
      }

      .dark .status-completed {
        background: rgba(16, 185, 129, 0.15);
        color: #34d399;
      }

      .booking-item {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .booking-item:last-child {
        border-bottom: none;
      }

      .booking-item-info h4 {
        font-size: 0.9375rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }

      .booking-item-meta {
        font-size: 0.8125rem;
        color: var(--text-secondary);
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .booking-item-actions {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .empty-state {
        text-align: center;
        padding: 3rem 2rem;
      }

      .empty-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
      }

      .empty-title {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .empty-text {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        margin-bottom: 1.5rem;
      }

      .search-section {
        background: var(--bg-secondary);
        border: 1px solid var(--border);
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 2rem;
      }

      .search-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text);
      }

      .search-subtitle {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        margin-bottom: 1.25rem;
      }

      .search-form {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .search-input {
        flex: 1;
        min-width: 200px;
        padding: 0.75rem 1rem;
        font-size: 0.9375rem;
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        background: var(--bg);
        color: var(--text);
      }

      .search-input::placeholder {
        color: var(--text-tertiary);
      }

      .search-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
      }

      .search-btn {
        padding: 0.75rem 1.5rem;
        background: var(--primary);
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .search-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-1px);
      }

      .search-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      .search-results {
        margin-top: 1.5rem;
      }

      .search-results-title {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-secondary);
        margin-bottom: 0.75rem;
      }

      .hostel-card {
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 0.75rem;
        overflow: hidden;
        margin-bottom: 0.75rem;
        display: flex;
        gap: 0;
        cursor: pointer;
        transition: all 0.2s;
      }

      .hostel-card:hover {
        border-color: var(--primary);
        box-shadow: var(--shadow);
        transform: translateY(-2px);
      }

      .hostel-card-image {
        width: 140px;
        height: 120px;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--primary), #7c3aed);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .hostel-card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .hostel-card-image-placeholder {
        font-size: 2.5rem;
        color: rgba(255, 255, 255, 0.9);
      }

      .hostel-card-content {
        flex: 1;
        padding: 1rem 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
      }

      .hostel-card h4 {
        font-size: 0.9375rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text);
      }

      .hostel-card-meta {
        font-size: 0.8125rem;
        color: var(--text-secondary);
        margin-bottom: 0.375rem;
      }

      .hostel-card-rating {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }

      .hostel-card-distance {
        font-size: 0.75rem;
        color: var(--primary);
        font-weight: 500;
        margin-top: 0.25rem;
      }

      .hostel-card-price {
        font-weight: 700;
        color: #059669;
        text-align: right;
        white-space: nowrap;
      }

      .no-results {
        text-align: center;
        padding: 1.5rem;
        background: var(--bg-tertiary);
        border-radius: 0.5rem;
        font-size: 0.9375rem;
        color: var(--text-secondary);
      }

      @media (max-width: 768px) {
        .header-inner {
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
        }
        .main {
          padding: 1rem;
        }
        .welcome-title {
          font-size: 1.5rem;
        }
        .search-section {
          padding: 1.5rem;
        }
        .hostel-card {
          flex-direction: column;
        }
        .hostel-card-image {
          width: 100%;
          height: 160px;
        }
        .hostel-card-content {
          flex-direction: column;
          gap: 0.75rem;
        }
        .hostel-card-price {
          text-align: left;
        }
      }
    `}return n.jsxs("div",{className:`student-dashboard ${l?"dark":"light"}`,children:[n.jsx("style",{children:D()}),n.jsx("header",{className:"header",children:n.jsxs("div",{className:"header-inner",children:[n.jsx(O,{to:"/",className:"logo",children:"🏠 HostelHub"}),n.jsxs("div",{className:"user-info",children:[n.jsx("span",{children:"Welcome,"}),n.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Student"})]}),n.jsxs("div",{className:"nav-links",children:[n.jsx(O,{to:"/student/profile",className:"nav-link",children:"Profile"}),n.jsx(O,{to:"/",className:"nav-link",children:"Home"}),n.jsx("button",{onClick:k,className:"btn-logout",children:"Logout"})]})]})}),n.jsxs("main",{className:"main",children:[n.jsxs("div",{className:"welcome-section",children:[n.jsxs("h1",{className:"welcome-title",children:["Welcome back, ",((z=t==null?void 0:t.name)==null?void 0:z.split(" ")[0])||"Student","! 👋"]}),n.jsx("p",{className:"welcome-subtitle",children:A?`You're currently staying at ${((F=A.hostel)==null?void 0:F.name)||"a hostel"}`:"Find and book your perfect hostel today"})]}),n.jsxs("section",{className:"search-section",children:[n.jsx("h2",{className:"search-title",children:"🔍 Find Your Perfect Hostel"}),n.jsx("p",{className:"search-subtitle",children:"Search for hostels by city name"}),n.jsxs("form",{className:"search-form",onSubmit:L,children:[n.jsx("input",{type:"text",className:"search-input",placeholder:"Enter city name (e.g., Hyderabad, Bangalore...)",value:b,onChange:C=>w(C.target.value)}),n.jsx("button",{type:"submit",className:"search-btn",disabled:h,children:h?"Searching...":"Search"})]}),y.length>0&&n.jsxs("div",{className:"search-results",children:[n.jsxs("div",{className:"search-results-title",children:["Found ",y.length," hostel(s)",n.jsx("span",{style:{fontWeight:400,fontSize:"0.8125rem",marginLeft:"0.5rem"},children:"(sorted by rating)"})]}),y.map(C=>{var T,U,he,ke,dt,we,ut,Le,Je,$r;return n.jsxs("div",{className:"hostel-card",onClick:()=>W(C._id),children:[n.jsx("div",{className:"hostel-card-image",children:C.mainImage||(T=C.images)!=null&&T[0]||C.logo?n.jsx("img",{src:C.mainImage||((U=C.images)==null?void 0:U[0])||C.logo,alt:C.name}):n.jsx("span",{className:"hostel-card-image-placeholder",children:"🏨"})}),n.jsxs("div",{className:"hostel-card-content",children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("h4",{children:C.name}),n.jsxs("div",{className:"hostel-card-meta",children:[C.city," • ",C.gender," hostel"]}),n.jsx("div",{className:"hostel-card-rating",children:M(C)}),C.distance!==null&&C.distance!==void 0&&n.jsxs("div",{className:"hostel-card-distance",children:["📍 ",R(C.distance)," away"]})]}),n.jsxs("div",{className:"hostel-card-price",children:["From ₹",Math.min(((ke=(he=C.roomConfig)==null?void 0:he.single)==null?void 0:ke.rent)||99999,((we=(dt=C.roomConfig)==null?void 0:dt.double)==null?void 0:we.rent)||99999,((Le=(ut=C.roomConfig)==null?void 0:ut.triple)==null?void 0:Le.rent)||99999,(($r=(Je=C.roomConfig)==null?void 0:Je.four)==null?void 0:$r.rent)||99999).toLocaleString(),"/mo"]})]})]},C._id)})]}),b&&!h&&y.length===0&&n.jsx("div",{className:"search-results",children:n.jsxs("div",{className:"no-results",children:['No hostels found in "',b,'". Try another city.']})})]}),A&&n.jsxs("div",{className:"card booking-active",style:{marginBottom:"1.5rem"},children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-title",children:"🏠 Your Current Stay"}),n.jsx("span",{className:`status-badge status-${A.status}`,children:A.status})]}),n.jsxs("div",{className:"card-body",children:[n.jsxs("div",{className:"booking-grid",children:[n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Hostel"}),n.jsx("span",{className:"booking-value",children:(($=A.hostel)==null?void 0:$.name)||"N/A"})]}),n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Location"}),n.jsx("span",{className:"booking-value",children:((K=A.hostel)==null?void 0:K.city)||"N/A"})]}),n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Room Type"}),n.jsxs("span",{className:"booking-value",style:{textTransform:"capitalize"},children:[A.roomType," Sharing"]})]}),n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Room Number"}),n.jsxs("span",{className:"booking-value",children:["#",A.roomNumber||"TBD"]})]}),n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Monthly Rent"}),n.jsxs("span",{className:"booking-value rent",children:["₹",((oe=A.rent)==null?void 0:oe.toLocaleString())||"N/A"]})]}),n.jsxs("div",{className:"booking-field",children:[n.jsx("span",{className:"booking-label",children:"Check-in"}),n.jsx("span",{className:"booking-value",children:A.checkInDate?new Date(A.checkInDate).toLocaleDateString():"Pending"})]})]}),n.jsx("div",{style:{marginTop:"1.25rem",display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:n.jsx("button",{onClick:()=>N(A._id),className:"btn btn-danger",children:"Cancel Booking"})}),(A.status==="approved"||A.status==="active")&&n.jsx("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid var(--border)"},children:B(A._id)?n.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"1rem",borderRadius:"0.5rem",textAlign:"center"},children:n.jsx("span",{style:{color:"#059669",fontWeight:500},children:"✓ You've already reviewed this stay"})}):n.jsx(jh,{onSubmit:(C,T,U)=>H(A,C,T,U)})})]})]}),n.jsxs("div",{className:"grid grid-2",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-title",children:"⏳ Pending Requests"}),n.jsx("span",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:V.length})]}),V.length===0?n.jsx("div",{className:"card-body",style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No pending requests"}):n.jsx("div",{children:V.map(C=>{var T;return n.jsxs("div",{className:"booking-item",children:[n.jsxs("div",{className:"booking-item-info",children:[n.jsx("h4",{children:((T=C.hostel)==null?void 0:T.name)||"Hostel"}),n.jsxs("div",{className:"booking-item-meta",children:[n.jsxs("span",{style:{textTransform:"capitalize"},children:[C.roomType," Sharing"]}),n.jsx("span",{children:"•"}),n.jsx("span",{children:new Date(C.createdAt).toLocaleDateString()})]})]}),n.jsxs("div",{className:"booking-item-actions",children:[n.jsx("span",{className:"status-badge status-pending",children:"Pending"}),n.jsx("button",{onClick:()=>N(C._id),className:"btn btn-danger",style:{padding:"0.375rem 0.75rem",fontSize:"0.8125rem"},children:"Cancel"})]})]},C._id)})})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-title",children:"📋 History"}),n.jsx("span",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:I.length})]}),I.length===0?n.jsx("div",{className:"card-body",style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No booking history"}):n.jsx("div",{children:I.slice(0,5).map(C=>{var T;return n.jsxs("div",{className:"booking-item",children:[n.jsxs("div",{className:"booking-item-info",children:[n.jsx("h4",{children:((T=C.hostel)==null?void 0:T.name)||"Hostel"}),n.jsxs("div",{className:"booking-item-meta",children:[n.jsxs("span",{style:{textTransform:"capitalize"},children:[C.roomType," Sharing"]}),n.jsx("span",{children:"•"}),n.jsx("span",{children:new Date(C.createdAt).toLocaleDateString()})]})]}),n.jsx("span",{className:`status-badge status-${C.status}`,children:C.status})]},C._id)})})]})]}),!A&&V.length===0&&I.length===0&&n.jsx("div",{className:"card",style:{marginTop:"1.5rem"},children:n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🏨"}),n.jsx("div",{className:"empty-title",children:"No Bookings Yet"}),n.jsx("div",{className:"empty-text",children:"Use the search above to find your perfect hostel"}),n.jsx("button",{onClick:J,className:"btn btn-primary",children:"Browse All Hostels"})]})})]})]})}function jh({onSubmit:e}){const[t,r]=x.useState(0),[o,a]=x.useState(0),[s,i]=x.useState(""),[l,c]=x.useState(!1),[d,p]=x.useState(!1);async function u(m){if(m.preventDefault(),t===0){alert("Please select a rating");return}p(!0),await e(t,s,l),p(!1)}return n.jsxs("form",{onSubmit:u,children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500,fontSize:"0.9375rem"},children:"Rate Your Experience"}),n.jsxs("div",{style:{display:"flex",gap:"0.25rem"},children:[[1,2,3,4,5].map(m=>n.jsx("button",{type:"button",onClick:()=>r(m),onMouseEnter:()=>a(m),onMouseLeave:()=>a(0),style:{background:"none",border:"none",fontSize:"1.75rem",cursor:"pointer",color:m<=(o||t)?"#fbbf24":"var(--border)",transition:"transform 0.1s, color 0.2s",transform:m<=(o||t)?"scale(1.1)":"scale(1)",padding:"0.25rem"},children:"★"},m)),n.jsx("span",{style:{marginLeft:"0.5rem",alignSelf:"center",fontSize:"0.875rem",color:"var(--text-secondary)"},children:t>0?`${t}/5`:"Select rating"})]})]}),n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500,fontSize:"0.9375rem"},children:"Your Review (Optional)"}),n.jsx("textarea",{value:s,onChange:m=>i(m.target.value),placeholder:"Share your experience, feedback, or suggestions...",style:{width:"100%",minHeight:"100px",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid var(--border)",background:"var(--bg)",color:"var(--text)",fontSize:"0.9375rem",resize:"vertical"}})]}),n.jsx("div",{style:{marginBottom:"1rem"},children:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontSize:"0.875rem"},children:[n.jsx("input",{type:"checkbox",checked:l,onChange:m=>c(m.target.checked),style:{width:"1rem",height:"1rem"}}),n.jsx("span",{children:"Mark as a complaint (owner will be notified)"})]})}),n.jsx("button",{type:"submit",disabled:d||t===0,style:{padding:"0.75rem 1.5rem",background:t===0?"var(--text-secondary)":"var(--primary)",color:"white",border:"none",borderRadius:"0.5rem",fontWeight:500,cursor:t===0?"not-allowed":"pointer",opacity:d?.7:1},children:d?"Submitting...":"Submit Review"})]})}function Nh(){const e=Oe(),[t,r]=x.useState(null),[o,a]=x.useState(!0),[s,i]=x.useState(!1),[l,c]=x.useState(!1),[d,p]=x.useState({name:"",phone:"",course:"",year:""}),[u,m]=x.useState(!1),[b,w]=x.useState("");x.useEffect(()=>{const j=localStorage.getItem("theme");i(j==="dark"),j==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const E=()=>{const S=localStorage.getItem("theme");i(S==="dark"),S==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",E),y(),()=>{window.removeEventListener("themeChange",E)}},[]);async function y(){a(!0);const j=await At.getMe();j.success?(r(j.user),p({name:j.user.name||"",phone:j.user.phone||"",course:j.user.course||"",year:j.user.year||""})):e("/login"),a(!1)}function v(){At.logout(),e("/")}function h(){const j=s?"light":"dark";localStorage.setItem("theme",j),i(!s),j==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),window.dispatchEvent(new Event("themeChange"))}async function f(){m(!0),w("");try{const j=localStorage.getItem("token"),E=await fetch("http://localhost:5000/api/students/profile",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${j}`},body:JSON.stringify(d)}),S=await E.json();E.ok&&S.success?(r({...t,...d}),c(!1),w("Profile updated successfully!"),setTimeout(()=>w(""),3e3)):w(S.message||"Failed to update profile")}catch{w("Failed to update profile")}finally{m(!1)}}const g=`
    * { margin: 0; padding: 0; box-sizing: border-box; }

    .student-profile {
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
      transition: all 0.2s ease;
    }

    .light-theme { background: #ffffff; color: #111827; }
    .dark-theme { background: #0f172a; color: #f1f5f9; }

    .header { background: #111827; padding: 1.5rem 2rem; color: white; }
    .dark-theme .header { background: #1e293b; border-bottom: 1px solid #334155; }

    .header-container { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
    .header-left h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem; }
    .header-left p { opacity: 0.8; font-size: 0.875rem; }
    .header-right { display: flex; gap: 0.75rem; }

    .btn { padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 500; font-size: 0.8125rem; text-decoration: none; transition: all 0.2s ease; cursor: pointer; border: none; }
    .btn-white { background: white; color: #111827; }
    .btn-white:hover { background: #f1f5f9; }
    .btn-outline { background: transparent; border: 1px solid rgba(255, 255, 255, 0.3); color: white; }
    .btn-outline:hover { background: rgba(255, 255, 255, 0.1); border-color: white; }

    .content { max-width: 720px; margin: 0 auto; padding: 2rem; }

    .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    .dark-theme .card { background: #1e293b; border-color: #334155; }

    .profile-header { text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e2e8f0; }
    .dark-theme .profile-header { border-bottom-color: #334155; }

    .profile-avatar { width: 80px; height: 80px; background: #111827; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 1rem; }
    .dark-theme .profile-avatar { background: #3b82f6; }

    .profile-name { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem; color: #111827; }
    .dark-theme .profile-name { color: #f1f5f9; }

    .profile-email { color: #6b7280; font-size: 0.875rem; }
    .dark-theme .profile-email { color: #94a3b8; }

    .message { padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; font-size: 0.875rem; }
    .message-success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .dark-theme .message-success { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .message-error { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
    .dark-theme .message-error { background: rgba(239, 68, 68, 0.15); color: #f87171; }

    .info-section { margin-bottom: 2rem; }
    .info-section:last-child { margin-bottom: 0; }

    .section-title { font-size: 1rem; font-weight: 600; margin-bottom: 1rem; color: #111827; display: flex; justify-content: space-between; align-items: center; }
    .dark-theme .section-title { color: #f1f5f9; }

    .info-row { display: flex; justify-content: space-between; align-items: center; padding: 0.875rem 0; border-bottom: 1px solid #f1f5f9; }
    .dark-theme .info-row { border-bottom-color: #334155; }
    .info-row:last-child { border-bottom: none; }

    .info-label { color: #6b7280; font-size: 0.8125rem; font-weight: 500; }
    .dark-theme .info-label { color: #94a3b8; }

    .info-value { font-weight: 500; color: #111827; font-size: 0.875rem; }
    .dark-theme .info-value { color: #f1f5f9; }

    .edit-input { padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; font-size: 0.875rem; background: #ffffff; color: #111827; width: 200px; text-align: right; }
    .dark-theme .edit-input { background: #0f172a; border-color: #334155; color: #f1f5f9; }
    .edit-input:focus { outline: none; border-color: #3b82f6; }

    .verification-badge { display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.25rem 0.625rem; border-radius: 6rem; font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; }
    .verified { background: #d1fae5; color: #059669; }
    .dark-theme .verified { background: rgba(16, 185, 129, 0.15); color: #34d399; }
    .not-verified { background: #fef3c7; color: #92400e; }
    .dark-theme .not-verified { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }

    .btn-edit { padding: 0.375rem 0.75rem; background: #eff6ff; color: #3b82f6; border: 1px solid #dbeafe; border-radius: 0.375rem; font-size: 0.75rem; font-weight: 500; cursor: pointer; }
    .btn-edit:hover { background: #dbeafe; }
    .dark-theme .btn-edit { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.25); }

    .edit-actions { display: flex; gap: 0.5rem; margin-top: 1.5rem; justify-content: flex-end; }

    .btn-save { padding: 0.5rem 1rem; background: #111827; color: white; border: none; border-radius: 0.5rem; font-size: 0.8125rem; font-weight: 500; cursor: pointer; }
    .btn-save:hover { background: #1f2937; }
    .btn-save:disabled { opacity: 0.6; cursor: not-allowed; }
    .dark-theme .btn-save { background: #3b82f6; }
    .dark-theme .btn-save:hover { background: #2563eb; }

    .btn-cancel-form { padding: 0.5rem 1rem; background: #f8fafc; color: #374151; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.8125rem; font-weight: 500; cursor: pointer; }
    .btn-cancel-form:hover { background: #f1f5f9; }
    .dark-theme .btn-cancel-form { background: #334155; color: #f1f5f9; border-color: #475569; }

    .preference-row { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
    .preference-info { display: flex; flex-direction: column; gap: 0.25rem; }
    .preference-label { font-weight: 500; color: #111827; font-size: 0.875rem; }
    .dark-theme .preference-label { color: #f1f5f9; }
    .preference-desc { color: #6b7280; font-size: 0.75rem; }
    .dark-theme .preference-desc { color: #94a3b8; }

    .theme-toggle { position: relative; width: 48px; height: 26px; background: #e2e8f0; border-radius: 13px; cursor: pointer; transition: all 0.2s ease; }
    .theme-toggle.active { background: #3b82f6; }
    .theme-toggle::after { content: ''; position: absolute; width: 22px; height: 22px; background: white; border-radius: 50%; top: 2px; left: 2px; transition: all 0.2s ease; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .theme-toggle.active::after { left: 24px; }

    @media (max-width: 768px) {
      .header-container { flex-direction: column; align-items: flex-start; gap: 1rem; }
      .content { padding: 1.25rem; }
      .card { padding: 1.5rem; }
      .info-row { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
      .edit-input { width: 100%; text-align: left; }
    }
  `;return o?n.jsxs("div",{className:`student-profile ${s?"dark-theme":"light-theme"}`,style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[n.jsx("style",{children:g}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"🔄"}),n.jsx("div",{style:{fontSize:"1rem",color:s?"#94a3b8":"#6b7280"},children:"Loading profile..."})]})]}):n.jsxs("div",{className:`student-profile ${s?"dark-theme":"light-theme"}`,children:[n.jsx("style",{children:g}),n.jsx("div",{className:"header",children:n.jsxs("div",{className:"header-container",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"👤 My Profile"}),n.jsx("p",{children:"Manage your account details"})]}),n.jsxs("div",{className:"header-right",children:[n.jsx(O,{to:"/student/dashboard",className:"btn btn-white",children:"Dashboard"}),n.jsx(O,{to:"/",className:"btn btn-outline",children:"Home"}),n.jsx("button",{onClick:v,className:"btn btn-outline",children:"Logout"})]})]})}),n.jsx("div",{className:"content",children:n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"profile-header",children:[n.jsx("div",{className:"profile-avatar",children:"🎓"}),n.jsx("h2",{className:"profile-name",children:t==null?void 0:t.name}),n.jsx("p",{className:"profile-email",children:t==null?void 0:t.email})]}),b&&n.jsx("div",{className:`message ${b.includes("success")?"message-success":"message-error"}`,children:b}),n.jsxs("div",{className:"info-section",children:[n.jsxs("h3",{className:"section-title",children:["Personal Information",!l&&n.jsx("button",{className:"btn-edit",onClick:()=>c(!0),children:"✏️ Edit"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Full Name"}),l?n.jsx("input",{type:"text",className:"edit-input",value:d.name,onChange:j=>p({...d,name:j.target.value})}):n.jsx("span",{className:"info-value",children:t==null?void 0:t.name})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Email"}),n.jsx("span",{className:"info-value",children:t==null?void 0:t.email})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Phone Number"}),l?n.jsx("input",{type:"tel",className:"edit-input",value:d.phone,onChange:j=>p({...d,phone:j.target.value}),placeholder:"Enter phone number"}):n.jsx("span",{className:"info-value",children:(t==null?void 0:t.phone)||"Not provided"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Course"}),l?n.jsx("input",{type:"text",className:"edit-input",value:d.course,onChange:j=>p({...d,course:j.target.value}),placeholder:"e.g. B.Tech, MBA"}):n.jsx("span",{className:"info-value",children:(t==null?void 0:t.course)||"Not provided"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Year"}),l?n.jsx("input",{type:"text",className:"edit-input",value:d.year,onChange:j=>p({...d,year:j.target.value}),placeholder:"e.g. 1st Year, 2nd Year"}):n.jsx("span",{className:"info-value",children:(t==null?void 0:t.year)||"Not provided"})]}),l&&n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{className:"btn-cancel-form",onClick:()=>c(!1),children:"Cancel"}),n.jsx("button",{className:"btn-save",onClick:f,disabled:u,children:u?"Saving...":"Save Changes"})]})]}),n.jsxs("div",{className:"info-section",children:[n.jsx("h3",{className:"section-title",children:"Verification Status"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Email Verification"}),n.jsx("span",{className:"info-value",children:t!=null&&t.isEmailVerified?n.jsx("span",{className:"verification-badge verified",children:"✓ Verified"}):n.jsx("span",{className:"verification-badge not-verified",children:"⚠ Not Verified"})})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"Member Since"}),n.jsx("span",{className:"info-value",children:new Date(t==null?void 0:t.createdAt).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]})]}),n.jsxs("div",{className:"info-section",children:[n.jsx("h3",{className:"section-title",children:"Preferences"}),n.jsxs("div",{className:"preference-row",children:[n.jsxs("div",{className:"preference-info",children:[n.jsx("span",{className:"preference-label",children:"Dark Mode"}),n.jsx("span",{className:"preference-desc",children:"Switch between light and dark theme"})]}),n.jsx("div",{className:`theme-toggle ${s?"active":""}`,onClick:h})]})]})]})})]})}function Sh(){const e=Oe(),[t,r]=x.useState("Hostel"),[o,a]=x.useState(""),[s,i]=x.useState(!1);x.useEffect(()=>{const p=localStorage.getItem("theme")==="dark";i(p),document.body.classList.toggle("dark-mode",p);const u=JSON.parse(localStorage.getItem("adminData")||"{}");u.hostelName&&r(u.hostelName),u.hostelLogo&&a(u.hostelLogo)},[]);function l(){const d=s?"light":"dark";i(!s),localStorage.setItem("theme",d),document.body.classList.toggle("dark-mode",!s)}function c(){localStorage.removeItem("adminToken"),e("/login")}return n.jsxs("div",{className:"dashboard-wrapper",children:[n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root { 
          --c-primary: #667eea; 
          --c-secondary: #764ba2; 
          --c-bg: #f0f2f5; 
          --c-bg-section: #ffffff; 
          --c-text-primary: #2d3748; 
          --c-text-secondary: #718096; 
          --c-shadow: rgba(0,0,0,.08); 
          --c-hover-shadow: rgba(102,126,234,.15);
        }
        
        body.dark-mode { 
          --c-bg: #0f1419; 
          --c-bg-section: #1a202c; 
          --c-text-primary: #f7fafc; 
          --c-text-secondary: #a0aec0; 
          --c-shadow: rgba(0,0,0,.4); 
          --c-hover-shadow: rgba(102,126,234,.25);
        }
        
        body { 
          background: var(--c-bg); 
          color: var(--c-text-primary); 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
        }
        
        .dashboard-wrapper {
          min-height: 100vh;
          padding: 2rem 1rem;
          position: relative;
        }
        
        .container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .dashboard-header {
          text-align: center;
          margin-bottom: 4rem;
          padding-top: 1rem;
        }
        
        .dashboard-title {
          background: linear-gradient(135deg, var(--c-primary), var(--c-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 2.75rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        
        .header-controls {
          position: absolute;
          top: 2rem;
          right: 2rem;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          z-index: 10;
        }
        
        .btn {
          padding: 0.65rem 1.5rem;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        
        .btn-night {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .btn-night:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }
        
        .btn-logout {
          background: #ef4444;
          color: white;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
        }
        
        .btn-logout:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
        }
        
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          padding: 0 1rem;
        }
        
        .dashboard-card {
          background: var(--c-bg-section);
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 4px 20px var(--c-shadow);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          border: 1px solid transparent;
          min-height: 200px;
        }
        
        .dashboard-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px var(--c-hover-shadow);
          border-color: var(--c-primary);
        }
        
        .card-icon {
          font-size: 4rem;
          margin-bottom: 1.25rem;
          line-height: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        
        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--c-primary);
          letter-spacing: -0.01em;
        }
        
        .card-subtitle {
          font-size: 0.95rem;
          color: var(--c-text-secondary);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .dashboard-wrapper {
            padding: 1.5rem 0.5rem;
          }
          
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0;
          }
          
          .header-controls {
            position: static;
            justify-content: center;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }
          
          .dashboard-header {
            margin-bottom: 2.5rem;
            padding-top: 0;
          }
          
          .dashboard-title {
            font-size: 2rem;
          }
          
          .dashboard-card {
            padding: 2.5rem 1.5rem;
            min-height: 180px;
          }
          
          .card-icon {
            font-size: 3.5rem;
          }
          
          .btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .dashboard-title {
            font-size: 1.75rem;
          }
          
          .card-title {
            font-size: 1.2rem;
          }
          
          .card-subtitle {
            font-size: 0.9rem;
          }
        }
      `}),n.jsxs("div",{className:"header-controls",children:[n.jsxs("button",{onClick:l,className:"btn btn-night",children:[s?"☀️":"🌙"," ",s?"Light":"Night"," Mode"]}),n.jsx("button",{onClick:c,className:"btn btn-logout",children:"🚪 Logout"})]}),n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"dashboard-header",children:n.jsx("h1",{className:"dashboard-title",children:"Hostel Admin Dashboard"})}),n.jsxs("div",{className:"cards-grid",children:[n.jsxs(O,{to:"/admin/double",className:"dashboard-card",children:[n.jsx("div",{className:"card-icon",children:"🛏️"}),n.jsx("h3",{className:"card-title",children:"Double Sharing"}),n.jsx("p",{className:"card-subtitle",children:"Two-persons Sharing"})]}),n.jsxs(O,{to:"/admin/triple",className:"dashboard-card",children:[n.jsx("div",{className:"card-icon",children:"👥"}),n.jsx("h3",{className:"card-title",children:"Triple Sharing"}),n.jsx("p",{className:"card-subtitle",children:"Three-person rooms"})]}),n.jsxs(O,{to:"/admin/four",className:"dashboard-card",children:[n.jsx("div",{className:"card-icon",children:"👨‍👩‍👧‍👦"}),n.jsx("h3",{className:"card-title",children:"four persons Sharing"}),n.jsx("p",{className:"card-subtitle"})]}),n.jsxs(O,{to:"/admin/fees",className:"dashboard-card",children:[n.jsx("div",{className:"card-icon",children:"₹"}),n.jsx("h3",{className:"card-title",children:"Fee Management"}),n.jsx("p",{className:"card-subtitle",children:"Payments and dues"})]})]})]})]})}function Si({title:e,roomType:t,capacity:r}){const[o,a]=x.useState([]),[s,i]=x.useState(!0),[l,c]=x.useState(""),[d,p]=x.useState("all"),[u,m]=x.useState(null),[b,w]=x.useState(null),[y,v]=x.useState(()=>localStorage.getItem("nightMode")==="true");x.useEffect(()=>{h()},[t]);async function h(){i(!0),c(""),console.log("Fetching rooms for type:",t);const k=await ec.getByType(t);console.log("API Result:",k),k.success?(console.log("Rooms fetched:",k.rooms.length),a(k.rooms)):(console.error("Failed to fetch rooms:",k.message),c(k.message||"Failed to load rooms")),i(!1)}x.useEffect(()=>{document.body.classList.toggle("night-mode",y),localStorage.setItem("nightMode",y)},[y]);const f=x.useMemo(()=>d==="all"?o:o.filter(k=>k.status===d),[o,d]);async function g(k){if(!u)return;const L=Object.fromEntries(["name","id","email","phone","address","course","year","gender","dob","emergencyName","emergencyPhone","notes"].map(B=>[B,k.get(B)]));if(!L.name||!L.id||!L.phone){alert("Please fill required fields: Name, Student ID, and Phone");return}if(u.occupants.length>=u.capacity){alert(`Room is at full capacity (${u.capacity})`);return}console.log("Current room data:",u),console.log("Room type:",u.type);const R={name:L.name,studentId:L.id,email:L.email||"",phone:L.phone,address:L.address||"",dob:L.dob||null,photo:b||null,roomType:u.type.toLowerCase(),roomNumber:u.number};console.log("Sending student data:",R);const M=await uo.add(R);console.log("API response:",M),M.success?(alert(`Allocated ${R.name} to Room ${u.number}`),h(),m(null),w(null)):alert(M.message||"Failed to allocate student")}async function j(k){if(!u)return;const N=await uo.remove(k);N.success?(alert("Student removed successfully"),h(),m(null)):alert(N.message||"Failed to remove student")}async function E(){if(u&&confirm(`Are you sure you want to deallocate all ${u.occupants.length} students from Room ${u.number}?`)){for(const k of u.occupants)await uo.remove(k._id);alert("All students deallocated successfully"),h(),m(null)}}async function S(k){if(!u)return;if(k==="available"&&u.occupants.length>0)return alert("Cannot set to Available with occupants");if(k==="occupied"&&u.occupants.length===0)return alert("Cannot set to Occupied without occupants");const N=await ec.updateStatus(u._id,k);N.success?(alert("Room status updated successfully"),h(),m(null)):alert(N.message||"Failed to update room status")}return n.jsxs("div",{children:[n.jsx("style",{children:`
        /* Colorful Dark Room Allocation UI */
        body { 
          background: #1a1a1a;
          color: #fff;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 20px;
        }
        .container{max-width:1400px;margin:0 auto}
        
        /* Stats Dashboard */
        .dashboard{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:20px;
          margin-bottom:30px;
          padding:20px;
          background:#2a2a2a;
          border-radius:12px;
        }
        .stat-card{
          background:linear-gradient(135deg,#667eea,#764ba2);
          padding:30px;
          border-radius:12px;
          text-align:center;
          color:#fff;
        }
        .stat-card.total{background:#3498db}
        .stat-card.available{background:#2ecc71}
        .stat-card.occupied{background:#e74c3c}
        .stat-card.reserved{background:#9b59b6}
        .stat-card .count{font-size:3rem;font-weight:bold;margin-bottom:10px}
        .stat-card .label{font-size:1rem;text-transform:uppercase;letter-spacing:1px;opacity:0.9}
        
        /* Room Grid */
        .room-grid{
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
          gap:20px;
          margin-bottom:30px;
        }
        
        /* Room Cards with Colored Borders */
        .room-box{
          background:#2a2a2a;
          padding:20px;
          border-radius:12px;
          text-align:center;
          cursor:pointer;
          transition:all .3s ease;
          border:3px solid transparent;
          position:relative;
        }
        .room-box:hover{
          transform:translateY(-5px);
          box-shadow:0 10px 30px rgba(0,0,0,.5);
        }
        .room-box.available{border-color:#2ecc71;border-top-width:5px}
        .room-box.occupied{border-color:#e74c3c;border-top-width:5px}
        .room-box.reserved{border-color:#9b59b6;border-top-width:5px}
        .room-box.maintenance{border-color:#f39c12;border-top-width:5px}
        
        .room-number{font-size:1.8rem;font-weight:bold;margin-bottom:8px;color:#fff}
        .room-status{
          font-weight:600;
          margin-bottom:10px;
          padding:5px 10px;
          border-radius:20px;
          display:inline-block;
          font-size:0.85rem;
          text-transform:uppercase;
          letter-spacing:0.5px;
        }
        .room-box.available .room-status{background:#2ecc71;color:#fff}
        .room-box.occupied .room-status{background:#e74c3c;color:#fff}
        .room-box.reserved .room-status{background:#9b59b6;color:#fff}
        .room-box.maintenance .room-status{background:#f39c12;color:#fff}
        
        .occupants{color:#aaa;font-size:0.9rem}
        
        /* Filter Buttons */
        .filters{
          display:flex;
          gap:15px;
          margin-bottom:25px;
          flex-wrap:wrap;
          justify-content:center;
          background:#2a2a2a;
          padding:15px;
          border-radius:12px;
        }
        .filter-btn{
          padding:12px 30px;
          border-radius:30px;
          border:none;
          color:#fff;
          font-weight:600;
          cursor:pointer;
          transition:all 0.3s;
          text-transform:capitalize;
        }
        .filter-btn:hover{transform:scale(1.05)}
        
        /* Modal */
        .modal{
          display:${u?"block":"none"};
          position:fixed;
          z-index:1000;
          left:0;
          top:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,.8);
          backdrop-filter:blur(5px);
        }
        .modal-content{
          background:#2a2a2a;
          color:#fff;
          margin:3% auto;
          padding:35px;
          border-radius:15px;
          width:650px;
          max-width:95%;
          position:relative;
          max-height:85vh;
          overflow-y:auto;
          border:2px solid #444;
        }
        .modal-content h2{
          margin:0 0 25px 0;
          padding-bottom:15px;
          border-bottom:2px solid #444;
          color:#fff;
        }
        .modal-content h3{
          margin:30px 0 20px 0;
          color:#fff;
          font-size:1.3rem;
        }
        .close-btn{
          position:absolute;
          top:15px;
          right:20px;
          cursor:pointer;
          font-size:28px;
          color:#fff;
          transition:color 0.3s;
        }
        .close-btn:hover{color:#e74c3c}
        
        /* Form Styles */
        .form-row{
          display:flex;
          gap:15px;
          margin-bottom:0;
        }
        .form-row > *{
          flex:1;
          margin-bottom:0;
        }
        .form-group{
          margin-bottom:20px;
          flex:1;
        }
        .form-group label{
          display:block;
          margin-bottom:8px;
          color:#aaa;
          font-weight:600;
          font-size:14px;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea{
          width:100%;
          padding:12px;
          border:2px solid #444;
          border-radius:8px;
          background:#1a1a1a;
          color:#fff;
          font-size:14px;
          box-sizing:border-box;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus{
          outline:none;
          border-color:#667eea;
        }
        .form-group input[type="file"]{
          padding:8px;
          border-style:dashed;
        }
        
        /* Buttons */
        .action-buttons{
          display:flex;
          gap:15px;
          margin-top:25px;
          flex-wrap:wrap;
        }
        .btn{
          padding:14px 28px;
          border:none;
          border-radius:8px;
          font-weight:700;
          font-size:15px;
          cursor:pointer;
          transition:all 0.3s;
          flex:1;
          min-width:150px;
          text-transform:uppercase;
          letter-spacing:0.5px;
        }
        .btn:hover{
          transform:translateY(-2px);
          box-shadow:0 8px 20px rgba(0,0,0,.5);
        }
        .btn-success{
          background:#2ecc71;
          color:#fff;
          box-shadow:0 4px 15px rgba(46,204,113,0.4);
        }
        .btn-success:hover{
          background:#27ae60;
          box-shadow:0 8px 25px rgba(46,204,113,0.6);
        }
        .btn-danger{
          background:#e74c3c;
          color:#fff;
          box-shadow:0 4px 15px rgba(231,76,60,0.5);
        }
        .btn-danger:hover{
          background:#c0392b;
          box-shadow:0 8px 25px rgba(231,76,60,0.7);
        }
        .btn-secondary{
          background:#95a5a6;
          color:#fff;
        }
        .btn-warning{
          background:#f39c12;
          color:#fff;
        }
        .btn-primary{
          background:#3498db;
          color:#fff;
        }
        
        /* Header */
        .page-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:30px;
          flex-wrap:wrap;
          gap:15px;
          background:#2a2a2a;
          padding:20px;
          border-radius:12px;
        }
        .page-header h1{
          margin:0;
          flex:1;
          color:#fff;
          display:flex;
          align-items:center;
          gap:10px;
        }
        .page-header h1::before{content:'🏠';font-size:2rem}
        .header-controls{display:flex;gap:10px;align-items:center}
        .back-btn{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:12px 24px;
          background:linear-gradient(135deg,#667eea,#764ba2);
          color:white;
          text-decoration:none;
          border-radius:25px;
          font-weight:600;
          transition:all 0.3s;
          box-shadow:0 4px 15px rgba(102,126,234,0.4);
        }
        .back-btn:hover{
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(102,126,234,0.6);
        }
        .theme-toggle{
          position:static;
          padding:12px 24px;
          border-radius:25px;
          background:#3498db;
          color:white;
          border:none;
          cursor:pointer;
          font-size:16px;
          font-weight:600;
          transition:all 0.3s;
          box-shadow:0 4px 15px rgba(52,152,219,0.4);
        }
        .theme-toggle:hover{
          background:#2980b9;
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(52,152,219,0.6);
        }
        
        /* Occupant List */
        .occupant-list{
          border:2px solid #444;
          border-radius:8px;
          padding:15px;
          margin-bottom:20px;
          background:#1a1a1a;
        }
        .occupant-item{
          display:flex;
          justify-content:space-between;
          padding:15px 0;
          border-bottom:1px solid #444;
          align-items:center;
        }
        .occupant-item:last-child{border-bottom:none}
        .occupant-name{font-weight:600;margin-bottom:5px;color:#fff}
        .occupant-info{font-size:12px;color:#aaa}
        .remove-occupant{
          color:#e74c3c;
          background:none;
          border:none;
          cursor:pointer;
          font-weight:600;
          padding:8px 16px;
          border-radius:6px;
          transition:all 0.3s;
        }
        .remove-occupant:hover{background:#e74c3c;color:#fff}
        
        /* Modal Details */
        .modal-details{margin:20px 0}
        .detail-row{display:flex;gap:12px;margin-bottom:12px;padding:10px;background:#1a1a1a;border-radius:6px}
        .detail-label{width:120px;font-weight:600;color:#aaa}
        .detail-value{flex:1;color:#fff}
        .detail-value.status-available{color:#2ecc71}
        .detail-value.status-occupied{color:#e74c3c}
        .detail-value.status-reserved{color:#9b59b6}
        .detail-value.status-maintenance{color:#f39c12}
        
        @media(max-width:768px){
          .page-header{flex-direction:column;align-items:stretch}
          .page-header h1{text-align:center;font-size:1.5rem;justify-content:center}
          .header-controls{flex-direction:column;width:100%}
          .theme-toggle, .back-btn{width:100%;justify-content:center}
          .dashboard{grid-template-columns:1fr}
          .room-grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:15px}
          .form-row{flex-direction:column}
          .action-buttons{flex-direction:column}
          .btn{width:100%}
        }
      `}),n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:e}),n.jsxs("div",{className:"header-controls",children:[n.jsxs("button",{className:"theme-toggle",onClick:()=>v(k=>!k),children:[y?"☀️ Light":"🌙 Night"," Mode"]}),n.jsx(O,{to:"/admin",className:"back-btn",children:"← Back to Dashboard"})]})]}),s?n.jsx("div",{style:{textAlign:"center",padding:"60px",fontSize:"1.5rem",color:"#aaa"},children:"⏳ Loading rooms..."}):l?n.jsxs("div",{style:{textAlign:"center",padding:"60px"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"20px"},children:"⚠️"}),n.jsx("div",{style:{fontSize:"1.3rem",color:"#e74c3c",marginBottom:"10px"},children:l}),n.jsx("div",{style:{fontSize:"1rem",color:"#aaa",marginBottom:"20px"},children:"Make sure you're logged in and have registered with room configuration."}),n.jsx("button",{onClick:h,style:{padding:"12px 24px",background:"#3498db",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1rem",fontWeight:"600"},children:"🔄 Retry"})]}):o.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"60px"},children:[n.jsx("div",{style:{fontSize:"3rem",marginBottom:"20px"},children:"📭"}),n.jsx("div",{style:{fontSize:"1.3rem",color:"#aaa",marginBottom:"10px"},children:"No rooms found"}),n.jsx("div",{style:{fontSize:"1rem",color:"#888"},children:"Please register first to set up your rooms, or check if you're logged in correctly."})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"dashboard",children:[n.jsxs("div",{className:"stat-card total",children:[n.jsx("div",{className:"count",children:o.length}),n.jsx("div",{className:"label",children:"Total Rooms"})]}),n.jsxs("div",{className:"stat-card available",children:[n.jsx("div",{className:"count",children:o.filter(k=>k.status==="available").length}),n.jsx("div",{className:"label",children:"Available"})]}),n.jsxs("div",{className:"stat-card occupied",children:[n.jsx("div",{className:"count",children:o.filter(k=>k.status==="occupied").length}),n.jsx("div",{className:"label",children:"Occupied"})]}),n.jsxs("div",{className:"stat-card reserved",children:[n.jsx("div",{className:"count",children:o.filter(k=>k.status==="reserved").length}),n.jsx("div",{className:"label",children:"Reserved"})]})]}),n.jsx("div",{className:"filters",style:{display:"flex",gap:15,marginBottom:25,flexWrap:"wrap",justifyContent:"center"},children:["all","available","occupied","reserved"].map(k=>n.jsx("button",{className:`filter-btn ${k}`,onClick:()=>p(k),style:{padding:"10px 20px",borderRadius:30,border:"none",color:"#fff",background:k==="all"?"#3498db":k==="available"?"#2ecc71":k==="occupied"?"#e74c3c":"#9b59b6",opacity:d===k?1:.8},children:k==="all"?"All Rooms":k.charAt(0).toUpperCase()+k.slice(1)},k))}),n.jsx("div",{className:"room-grid",children:f.map(k=>n.jsxs("div",{className:`room-box ${k.status}`,onClick:()=>{m(k),w(null)},children:[n.jsx("div",{className:"room-number",style:{fontSize:"1.5rem",fontWeight:"bold",marginBottom:5},children:k.number}),n.jsx("div",{className:"room-status",style:{fontWeight:600,marginBottom:10},children:k.status.charAt(0).toUpperCase()+k.status.slice(1)}),n.jsxs("div",{className:"occupants",children:["Occupants: ",k.occupants.length,"/",k.capacity]})]},k._id||k.number))})]})]}),n.jsx("div",{className:"modal",onClick:k=>{k.target.className==="modal"&&m(null)},children:n.jsxs("div",{className:"modal-content",children:[n.jsx("span",{className:"close-btn",onClick:()=>m(null),children:"×"}),u&&n.jsxs("div",{children:[n.jsxs("h2",{children:["Room ",u.number," — ",u.type]}),n.jsxs("div",{className:"modal-details",children:[n.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[n.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Status:"}),n.jsx("div",{className:`detail-value status-${u.status}`,style:{flex:1},children:u.status})]}),n.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[n.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Capacity:"}),n.jsx("div",{className:"detail-value",style:{flex:1},children:u.capacity})]}),n.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[n.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Occupants:"}),n.jsxs("div",{className:"detail-value",style:{flex:1},children:[u.occupants.length,"/",u.capacity]})]})]}),n.jsx("div",{className:"occupant-list",style:{border:"1px solid #ecf0f1",borderRadius:6,padding:10,marginBottom:20},children:u.occupants.length===0?n.jsx("div",{style:{textAlign:"center",color:"#95a5a6"},children:"No occupants"}):u.occupants.map((k,N)=>n.jsxs("div",{className:"occupant-item",style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #ecf0f1"},children:[n.jsxs("div",{children:[n.jsxs("div",{className:"occupant-name",style:{fontWeight:600},children:[k.name," (",k.studentId,")"]}),n.jsxs("div",{className:"occupant-info",style:{fontSize:12,color:"#7f8c8d"},children:[k.email," · ",k.phone," · ",k.course," ",k.year]})]}),n.jsx("button",{className:"remove-occupant",onClick:()=>j(k._id),style:{color:"#e74c3c",background:"none",border:"none"},children:"Remove"})]},k._id||N))}),n.jsx("h3",{children:"Add New Student"}),n.jsxs("form",{onSubmit:k=>{k.preventDefault(),g(new FormData(k.currentTarget))},children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Full Name*"}),n.jsx("input",{name:"name",placeholder:"Enter full name",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Student ID*"}),n.jsx("input",{name:"id",placeholder:"Enter student ID",required:!0})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email"}),n.jsx("input",{name:"email",type:"email",placeholder:"Enter email"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone*"}),n.jsx("input",{name:"phone",placeholder:"Enter phone",required:!0})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Permanent Address"}),n.jsx("textarea",{name:"address",rows:2,placeholder:"Enter permanent address"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Course"}),n.jsxs("select",{name:"course",defaultValue:"",children:[n.jsx("option",{value:"",children:"Select course"}),n.jsx("option",{children:"Computer Science"}),n.jsx("option",{children:"Electrical Engineering"}),n.jsx("option",{children:"Mechanical Engineering"}),n.jsx("option",{children:"Business Administration"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Year of Study"}),n.jsxs("select",{name:"year",defaultValue:"",children:[n.jsx("option",{value:"",children:"Select year"}),n.jsx("option",{children:"1st Year"}),n.jsx("option",{children:"2nd Year"}),n.jsx("option",{children:"3rd Year"}),n.jsx("option",{children:"4th Year"}),n.jsx("option",{children:"5th Year"})]})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Gender"}),n.jsxs("select",{name:"gender",defaultValue:"",children:[n.jsx("option",{value:"",children:"Select gender"}),n.jsx("option",{children:"Male"}),n.jsx("option",{children:"Female"}),n.jsx("option",{children:"Other"}),n.jsx("option",{children:"Prefer not to say"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Date of Birth"}),n.jsx("input",{name:"dob",type:"date"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Emergency Contact"}),n.jsxs("div",{className:"form-row",children:[n.jsx("input",{name:"emergencyName",placeholder:"Contact name"}),n.jsx("input",{name:"emergencyPhone",placeholder:"Phone number"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Notes"}),n.jsx("textarea",{name:"notes",rows:2,placeholder:"Any special requirements or notes"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Profile Photo (Optional - Max 2MB)"}),n.jsx("input",{type:"file",accept:"image/*",onChange:k=>{var R;const N=(R=k.target.files)==null?void 0:R[0];if(!N)return;if(N.size>2*1024*1024){alert("Image size should be less than 2MB"),k.target.value="";return}const L=new FileReader;L.onload=M=>{const B=new Image;B.onload=()=>{const H=document.createElement("canvas"),W=H.getContext("2d");let J=B.width,A=B.height;const V=400;J>A&&J>V?(A=A*V/J,J=V):A>V&&(J=J*V/A,A=V),H.width=J,H.height=A,W.drawImage(B,0,0,J,A);const I=H.toDataURL("image/jpeg",.7);w(I)},B.src=M.target.result},L.readAsDataURL(N)}})]}),n.jsx("div",{className:"action-buttons",children:n.jsx("button",{type:"submit",className:"btn btn-success",children:"✓ Allocate Student"})})]}),n.jsxs("div",{style:{marginTop:30,paddingTop:30,borderTop:"3px solid #444"},children:[n.jsx("h3",{style:{marginBottom:20},children:"Room Management"}),n.jsxs("div",{className:"form-group",style:{marginBottom:20},children:[n.jsx("label",{children:"Change Room Status"}),n.jsxs("select",{value:u.status,onChange:k=>S(k.target.value),children:[n.jsx("option",{value:"available",children:"Available"}),n.jsx("option",{value:"occupied",children:"Occupied"}),n.jsx("option",{value:"reserved",children:"Reserved"})]})]}),n.jsx("div",{className:"action-buttons",children:n.jsx("button",{type:"button",className:"btn btn-danger",onClick:E,children:"✕ Deallocate All Students"})})]})]})]})})]})}function Ch(){return n.jsx(Si,{title:"Double Sharing Allocation",roomType:"double",capacity:2})}function zh(){return n.jsx(Si,{title:"Triple Sharing Allocation",roomType:"triple",capacity:3})}function Eh(){return n.jsx(Si,{title:"Four Sharing Allocation",roomType:"four",capacity:4})}function Ph(){const[e,t]=x.useState(""),[r,o]=x.useState([]),[a,s]=x.useState("double"),[i,l]=x.useState(!1),[c,d]=x.useState(!1),[p,u]=x.useState(null),[m,b]=x.useState({amount:"",date:new Date().toISOString().split("T")[0],method:"Cash",reference:""});x.useEffect(()=>{const S=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",S==="dark"),w()},[]);async function w(){const S=await uo.getAll();S.success&&o(S.students||[])}const y=r.filter(S=>{if(S.roomType!==a)return!1;const k=e.toLowerCase().trim();return k?(S.name||"").toLowerCase().includes(k)||(S.studentId||"").toLowerCase().includes(k):!0});function v(S){const k=S.rent||5e3,N=S.totalPaid||0,L=k-N;u({...S,monthlyFee:k,totalPaid:N}),b({amount:L>0?L:0,date:new Date().toISOString().split("T")[0],method:"Cash",reference:""}),l(!0)}function h(S){u(S),d(!0)}function f(){l(!1),d(!1),u(null)}async function g(){if(!p||!m.amount||m.amount<=0){alert("Please enter a valid amount");return}const S={studentId:p.studentId,amount:m.amount,date:m.date,method:m.method,reference:m.reference},k=await fh.addPayment(S);k.success?(alert("Payment recorded successfully!"),f(),w()):alert(k.message||"Failed to record payment")}const j=S=>{const k=S.rent||5e3,N=S.totalPaid||0,L=k-N;return L<=0?{text:"Paid",class:"status-paid"}:L===k?{text:"Unpaid",class:"status-unpaid"}:{text:"Partial",class:"status-partial"}},E=`
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      background-color: #1a1a1a;
      color: #e0e0e0;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .fee-container {
      max-width: 1600px;
      margin: 0 auto;
      background-color: #2d2d2d;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .fee-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .fee-title {
      color: #f5f5f5;
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .room-type-nav {
      display: flex;
      background-color: #1a1a1a;
      border-radius: 25px;
      padding: 5px;
    }

    .nav-btn {
      background: none;
      border: none;
      color: #a0a0a0;
      font-size: 1rem;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .nav-btn.active,
    .nav-btn:hover {
      background-color: #3498db;
      color: #fff;
    }

    .search-container {
      position: relative;
      margin-bottom: 20px;
      width: 50%;
      max-width: 600px;
    }

    .search-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #777;
    }

    .search-input {
      width: 100%;
      padding: 12px 12px 12px 40px;
      border-radius: 25px;
      border: none;
      background-color: #1a1a1a;
      color: #e0e0e0;
      font-size: 1rem;
      outline: none;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      background-color: #3d3d3d;
      box-shadow: 0 0 0 2px #3498db;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    th, td {
      padding: 15px;
      border-bottom: 1px solid #3d3d3d;
      vertical-align: middle;
    }

    th {
      background-color: #3d3d3d;
      color: #3498db;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }

    td {
      color: #c0c0c0;
    }

    tr:hover {
      background-color: #333;
    }

    .student-photo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #555;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .student-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .btn {
      padding: 8px 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      margin-right: 5px;
    }

    .btn-pay {
      background-color: #3498db;
      color: white;
    }

    .btn-pay:hover {
      background-color: #2980b9;
    }

    .btn-history {
      background-color: #444;
      color: #e0e0e0;
    }

    .btn-history:hover {
      background-color: #555;
    }

    .status-badge {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 15px;
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
    }

    .status-paid {
      background-color: #1e3a2a;
      color: #2ecc71;
    }

    .status-unpaid {
      background-color: #3a1e1e;
      color: #e74c3c;
    }

    .status-partial {
      background-color: #3a2a1e;
      color: #f39c12;
    }

    .modal-backdrop {
      display: ${i||c?"block":"none"};
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(5px);
    }

    .modal {
      display: ${i||c?"block":"none"};
      position: fixed;
      z-index: 1001;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #2d2d2d;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      width: 600px;
      max-width: 90%;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      padding: 20px 25px;
      border-bottom: 1px solid #444;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-header h2 {
      color: #f5f5f5;
      font-size: 1.5rem;
    }

    .close-btn {
      font-size: 2rem;
      color: #777;
      cursor: pointer;
      transition: color 0.3s ease;
      background: none;
      border: none;
    }

    .close-btn:hover {
      color: #fff;
    }

    .modal-body {
      padding: 25px;
    }

    .modal-section {
      margin-bottom: 20px;
    }

    .modal-section h3 {
      color: #3498db;
      font-size: 1.1rem;
      margin-bottom: 15px;
      border-bottom: 1px solid #444;
      padding-bottom: 5px;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .detail-item {
      background-color: #1a1a1a;
      padding: 10px 15px;
      border-radius: 8px;
    }

    .detail-label {
      font-size: 0.8rem;
      color: #888;
      margin-bottom: 5px;
    }

    .detail-value {
      font-size: 1rem;
      font-weight: 600;
      color: #e0e0e0;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #c0c0c0;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 8px;
      background-color: #1a1a1a;
      color: #e0e0e0;
      font-size: 1rem;
      outline: none;
    }

    .form-group input:focus,
    .form-group select:focus {
      box-shadow: 0 0 0 2px #3498db;
    }

    .form-row {
      display: flex;
      gap: 15px;
    }

    .form-row .form-group {
      flex: 1;
    }

    .modal-footer {
      padding: 20px 25px;
      background-color: #333;
      border-top: 1px solid #444;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .btn-secondary {
      background-color: #555;
      color: #e0e0e0;
    }

    .btn-secondary:hover {
      background-color: #666;
    }

    .history-table {
      width: 100%;
      border-collapse: collapse;
    }

    .history-table th,
    .history-table td {
      padding: 10px;
      border-bottom: 1px solid #444;
      text-align: left;
    }

    .history-table th {
      background-color: #3d3d3d;
      color: #c0c0c0;
      font-size: 0.9rem;
    }

    .history-table td {
      font-size: 0.95rem;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      transition: all 0.3s;
      box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }

    .back-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    @media(max-width:768px){
      .fee-header{flex-direction:column;align-items:stretch}
      .room-type-nav{flex-direction:column}
      .search-container{width:100%;max-width:100%}
      .detail-grid{grid-template-columns:1fr}
    }
  `;return n.jsxs("div",{style:{minHeight:"100vh"},children:[n.jsx("style",{children:E}),n.jsxs("div",{className:"fee-container",children:[n.jsxs("div",{className:"fee-header",children:[n.jsxs("h1",{className:"fee-title",children:[n.jsx("span",{children:"💰"})," Hostel Fees Management"]}),n.jsxs("nav",{className:"room-type-nav",children:[n.jsx("button",{className:`nav-btn ${a==="double"?"active":""}`,onClick:()=>s("double"),children:"Double Sharing"}),n.jsx("button",{className:`nav-btn ${a==="triple"?"active":""}`,onClick:()=>s("triple"),children:"Triple Sharing"}),n.jsx("button",{className:`nav-btn ${a==="four"?"active":""}`,onClick:()=>s("four"),children:"Four Sharing"})]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",flexWrap:"wrap",gap:"1rem"},children:[n.jsxs("div",{className:"search-container",children:[n.jsx("span",{className:"search-icon",children:"🔍"}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search by Student Name or Student ID...",value:e,onChange:S=>t(S.target.value)})]}),n.jsx(O,{to:"/admin",className:"back-btn",children:"← Back to Dashboard"})]}),n.jsx("div",{className:"table-container",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Photo"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Student ID"}),n.jsx("th",{children:"Room No."}),n.jsx("th",{children:"Phone"}),n.jsx("th",{children:"Monthly Fee"}),n.jsx("th",{children:"Total Paid"}),n.jsx("th",{children:"Due"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:y.length===0?n.jsx("tr",{children:n.jsxs("td",{colSpan:"10",style:{textAlign:"center",color:"#888",padding:"20px"},children:["No students are currently allocated to '",a,"' sharing rooms."]})}):y.map(S=>{const k=S.rent||5e3,N=S.totalPaid||0,L=k-N,R=j(S);return n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("div",{className:"student-photo",children:S.photo?n.jsx("img",{src:S.photo,alt:S.name}):n.jsx("span",{style:{fontSize:"1.2rem"},children:"👤"})})}),n.jsx("td",{children:S.name}),n.jsx("td",{children:S.studentId}),n.jsx("td",{children:S.roomNumber}),n.jsx("td",{children:S.phone}),n.jsxs("td",{children:["₹",k]}),n.jsxs("td",{children:["₹",N]}),n.jsxs("td",{children:["₹",L>0?L:0]}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${R.class}`,children:R.text})}),n.jsxs("td",{children:[n.jsx("button",{className:"btn btn-pay",onClick:()=>v(S),children:"💳 Pay"}),n.jsx("button",{className:"btn btn-history",onClick:()=>h(S),children:"📜 History"})]})]},S._id)})})]})})]}),n.jsx("div",{className:"modal-backdrop",onClick:f}),i&&p&&n.jsxs("div",{className:"modal",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"💳 Record Payment"}),n.jsx("button",{className:"close-btn",onClick:f,children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"modal-section",children:[n.jsx("h3",{children:"Student Details"}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Student Name"}),n.jsx("div",{className:"detail-value",children:p.name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Student ID"}),n.jsx("div",{className:"detail-value",children:p.studentId})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Room Number"}),n.jsx("div",{className:"detail-value",children:p.roomNumber})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Room Type"}),n.jsx("div",{className:"detail-value",children:p.roomType})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Monthly Fee"}),n.jsxs("div",{className:"detail-value",children:["₹",p.monthlyFee]})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",style:{color:"#e74c3c"},children:"Current Due"}),n.jsxs("div",{className:"detail-value",style:{color:"#e74c3c"},children:["₹",p.monthlyFee-p.totalPaid>0?p.monthlyFee-p.totalPaid:0]})]})]})]}),n.jsxs("div",{className:"modal-section",children:[n.jsx("h3",{children:"Add Payment"}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Amount (₹)"}),n.jsx("input",{type:"number",value:m.amount,onChange:S=>b({...m,amount:S.target.value}),placeholder:"Enter amount"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Date"}),n.jsx("input",{type:"date",value:m.date,onChange:S=>b({...m,date:S.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Payment Method"}),n.jsxs("select",{value:m.method,onChange:S=>b({...m,method:S.target.value}),children:[n.jsx("option",{value:"Cash",children:"Cash"}),n.jsx("option",{value:"UPI",children:"UPI"}),n.jsx("option",{value:"Bank Transfer",children:"Bank Transfer"}),n.jsx("option",{value:"Card",children:"Card"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Reference / Notes"}),n.jsx("input",{type:"text",value:m.reference,onChange:S=>b({...m,reference:S.target.value}),placeholder:"Optional transaction ID or notes"})]})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn btn-secondary",onClick:f,children:"Close"}),n.jsx("button",{className:"btn btn-pay",onClick:g,children:"Record Payment"})]})]}),c&&p&&n.jsxs("div",{className:"modal",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"📜 Payment History"}),n.jsx("button",{className:"close-btn",onClick:f,children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"modal-section",children:[n.jsx("h3",{children:"Student Details"}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Student Name"}),n.jsx("div",{className:"detail-value",children:p.name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Student ID"}),n.jsx("div",{className:"detail-value",children:p.studentId})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Room Number"}),n.jsx("div",{className:"detail-value",children:p.roomNumber})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Room Type"}),n.jsx("div",{className:"detail-value",children:p.roomType})]})]})]}),n.jsxs("div",{className:"modal-section",children:[n.jsx("h3",{children:"Payment Records"}),n.jsxs("table",{className:"history-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Date"}),n.jsx("th",{children:"Amount (₹)"}),n.jsx("th",{children:"Method"}),n.jsx("th",{children:"Reference"})]})}),n.jsx("tbody",{children:!p.paymentHistory||p.paymentHistory.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"4",style:{textAlign:"center",color:"#888"},children:"No payment records found."})}):p.paymentHistory.map((S,k)=>n.jsxs("tr",{children:[n.jsx("td",{children:S.date}),n.jsxs("td",{children:["₹",S.amount]}),n.jsx("td",{children:S.method||"N/A"}),n.jsx("td",{children:S.reference||"-"})]},k))})]})]})]}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{className:"btn btn-secondary",onClick:f,children:"Close"})})]})]})}function In(){const e=Oe(),[t,r]=x.useState(!1),[o,a]=x.useState(!1),[s,i]=x.useState(!1),[l,c]=x.useState("Owner");x.useEffect(()=>{const m=localStorage.getItem("theme");i(m==="dark");const b=localStorage.getItem("userName");b&&b!=="undefined"&&b!=="null"?c(b):d(),m==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const w=y=>{o&&!y.target.closest(".navbar-profile")&&a(!1)};return document.addEventListener("click",w),()=>{document.removeEventListener("click",w)}},[o]);const d=async()=>{var m;try{const b=localStorage.getItem("token"),w=await fetch("http://localhost:5000/api/auth/me",{headers:{Authorization:`Bearer ${b}`}}),y=await w.json();if(w.ok&&y.user){const v=y.user.name||((m=y.user.email)==null?void 0:m.split("@")[0])||"Owner";c(v),localStorage.setItem("userName",v)}}catch(b){console.error("Failed to fetch owner name:",b)}},p=()=>{const m=s?"light":"dark";i(!s),localStorage.setItem("theme",m),m==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),window.dispatchEvent(new Event("themeChange"))},u=()=>{localStorage.removeItem("token"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),e("/login")};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .owner-navbar {
          background: rgba(255, 255, 255, 0.9);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #e2e8f0;
          backdrop-filter: blur(20px) saturate(180%);
          transition: all 0.3s ease;
        }

        body.dark-theme .owner-navbar {
          background: rgba(15, 23, 42, 0.9);
          border-bottom-color: #1e293b;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #4f46e5, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.025em;
          transition: opacity 0.2s;
        }

        .navbar-brand:hover {
          opacity: 0.85;
        }

        body.dark-theme .navbar-brand {
          background: linear-gradient(135deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-menu {
          display: flex;
          gap: 0.25rem;
          align-items: center;
          list-style: none;
        }

        .navbar-link {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.5rem 0.875rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          transition: all 0.2s ease;
          position: relative;
        }

        .navbar-link:hover {
          color: #4f46e5;
          background: rgba(79, 70, 229, 0.06);
        }

        body.dark-theme .navbar-link {
          color: #94a3b8;
        }

        body.dark-theme .navbar-link:hover {
          color: #818cf8;
          background: rgba(99, 102, 241, 0.1);
        }

        .navbar-profile {
          position: relative;
        }

        .profile-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.375rem 0.5rem;
          border-radius: 0.375rem;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
        }

        .profile-trigger:hover {
          background: #f3f4f6;
        }

        body.dark-theme .profile-trigger:hover {
          background: #374151;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .profile-name {
          font-weight: 600;
          font-size: 0.875rem;
          color: #1f2937;
        }

        body.dark-theme .profile-name {
          color: #f3f4f6;
        }

        .profile-role {
          font-size: 0.75rem;
          color: #6b7280;
        }

        body.dark-theme .profile-role {
          color: #9ca3af;
        }

        .profile-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          color: white;
        }

        body.dark-theme .profile-avatar {
          background: #3b82f6;
        }

        .profile-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.15);
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.2s ease;
          z-index: 1000;
        }

        body.dark-theme .profile-dropdown {
          background: #1e293b;
          border-color: #334155;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .profile-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-section {
          padding: 0.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        body.dark-theme .dropdown-section {
          border-bottom-color: #374151;
        }

        .dropdown-section:last-child {
          border-bottom: none;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.625rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #1f2937;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }

        .dropdown-item:hover {
          background: #f3f4f6;
        }

        body.dark-theme .dropdown-item {
          color: #f3f4f6;
        }

        body.dark-theme .dropdown-item:hover {
          background: #374151;
        }

        .dropdown-item.danger {
          color: #ef4444;
        }

        .dropdown-item.danger:hover {
          background: #fef2f2;
        }

        body.dark-theme .dropdown-item.danger {
          color: #f87171;
        }

        body.dark-theme .dropdown-item.danger:hover {
          background: rgba(239, 68, 68, 0.1);
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        body.dark-theme .theme-toggle {
          color: #9ca3af;
        }

        .toggle-switch {
          position: relative;
          width: 36px;
          height: 20px;
          background: #d1d5db;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .toggle-switch.active {
          background: #3b82f6;
        }

        .toggle-slider {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 16px;
          height: 16px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .toggle-switch.active .toggle-slider {
          transform: translateX(16px);
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: #1f2937;
          font-size: 1.25rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        body.dark-theme .mobile-menu-btn {
          color: #f3f4f6;
        }

        @media (max-width: 768px) {
          .owner-navbar {
            padding: 1rem;
            flex-wrap: wrap;
          }

          .navbar-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            border-bottom: 1px solid #e5e7eb;
            flex-direction: column;
            gap: 0.25rem;
            padding: 1rem;
            width: 100%;
          }

          body.dark-theme .navbar-menu {
            background: #1f2937;
            border-bottom-color: #374151;
          }

          .navbar-menu.open {
            display: flex;
          }

          .navbar-link {
            padding: 0.75rem 1rem;
            width: 100%;
          }

          .mobile-menu-btn {
            display: block;
            order: 3;
          }

          .navbar-profile {
            width: 100%;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
            order: 4;
          }

          .profile-trigger {
            width: 100%;
            justify-content: flex-start;
          }

          .profile-dropdown {
            position: static;
            margin-top: 0.5rem;
            transform: none;
          }

          .profile-dropdown.open {
            transform: none;
          }

          .navbar-brand {
            flex: 1;
            order: 1;
          }

          .navbar-brand + .mobile-menu-btn {
            order: 2;
          }
        }
      `}),n.jsxs("nav",{className:"owner-navbar",children:[n.jsx(O,{to:"/owner/dashboard",className:"navbar-brand",children:"🏢 HostelHub"}),n.jsx("button",{className:"mobile-menu-btn",onClick:()=>r(!t),children:"☰"}),n.jsxs("ul",{className:`navbar-menu ${t?"open":""}`,children:[n.jsx("li",{children:n.jsx(O,{to:"/owner/dashboard",className:"navbar-link",children:"📊 Dashboard"})}),n.jsx("li",{children:n.jsx(O,{to:"/owner/hostels",className:"navbar-link",children:"🏠 Hostels"})}),n.jsx("li",{children:n.jsx(O,{to:"/owner/rooms",className:"navbar-link",children:"🛏️ Rooms"})}),n.jsx("li",{children:n.jsx(O,{to:"/owner/bookings",className:"navbar-link",children:"📋 Bookings"})})]}),n.jsxs("div",{className:"navbar-profile",children:[n.jsxs("button",{className:"profile-trigger",onClick:()=>a(!o),children:[n.jsxs("div",{className:"profile-info",children:[n.jsx("div",{className:"profile-name",children:l}),n.jsx("div",{className:"profile-role",children:"Owner"})]}),n.jsx("div",{className:"profile-avatar",children:"👤"})]}),n.jsxs("div",{className:`profile-dropdown ${o?"open":""}`,children:[n.jsx("div",{className:"dropdown-section",children:n.jsxs("button",{className:"dropdown-item",onClick:p,children:[n.jsx("span",{children:s?"☀️ Light Mode":"🌙 Dark Mode"}),n.jsx("div",{className:`toggle-switch ${s?"active":""}`,children:n.jsx("div",{className:"toggle-slider"})})]})}),n.jsx("div",{className:"dropdown-section",children:n.jsx("button",{className:"dropdown-item danger",onClick:u,children:"🚪 Logout"})})]})]})]})]})}function Rh(){const e=Oe(),[t,r]=x.useState(!1),[o,a]=x.useState({totalHostels:0,totalRooms:0,activeBookings:0,pendingRequests:0}),[s,i]=x.useState([]),[l,c]=x.useState(!0);return x.useEffect(()=>{const d=localStorage.getItem("theme");r(d==="dark"),d==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const p=()=>{const u=localStorage.getItem("theme");r(u==="dark"),u==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",p),()=>{window.removeEventListener("themeChange",p)}},[]),x.useEffect(()=>{(async()=>{try{const p=localStorage.getItem("token"),u=await fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${p}`}}),m=await u.json();if(u.ok&&m.success){const b=m.hostels||[];if(b.length>0){i(b);const w=b.reduce((y,v)=>{var h,f,g,j,E,S,k,N;return y+((((f=(h=v.roomConfig)==null?void 0:h.single)==null?void 0:f.count)||0)+(((j=(g=v.roomConfig)==null?void 0:g.double)==null?void 0:j.count)||0)+(((S=(E=v.roomConfig)==null?void 0:E.triple)==null?void 0:S.count)||0)+(((N=(k=v.roomConfig)==null?void 0:k.four)==null?void 0:N.count)||0))},0);a({totalHostels:b.length,totalRooms:w,activeBookings:0,pendingRequests:0})}}}catch(p){console.error("Error fetching hostels:",p)}finally{c(!1)}})()},[]),n.jsxs("div",{className:`owner-dashboard-wrapper ${t?"dark-theme":"light-theme"}`,children:[n.jsx(In,{}),n.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .owner-dashboard-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .owner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .dashboard-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .dashboard-title {
          color: #f1f5f9;
        }

        .dashboard-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .dashboard-subtitle {
          color: #94a3b8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4f46e5, #06b6d4);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        .stat-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .stat-card:hover::after {
          transform: scaleX(1);
        }

        .dark-theme .stat-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .stat-card:hover {
          border-color: #475569;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 0.625rem;
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.25rem;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .dark-theme .stat-number {
          color: #f1f5f9;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
        }

        .dark-theme .stat-label {
          color: #94a3b8;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .section-title {
          color: #f1f5f9;
        }

        .btn-add {
          background: #111827;
          color: white;
          border: none;
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-add:hover {
          background: #1f2937;
          transform: translateY(-1px);
        }

        .dark-theme .btn-add {
          background: #3b82f6;
        }

        .dark-theme .btn-add:hover {
          background: #2563eb;
        }

        .hostels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .hostel-card {
          background: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .hostel-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .hostel-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .hostel-card:hover {
          border-color: #475569;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .hostel-header {
          background: #111827;
          padding: 1.25rem 1.5rem;
          color: white;
        }

        .dark-theme .hostel-header {
          background: #0f172a;
        }

        .hostel-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.375rem;
        }

        .hostel-location {
          font-size: 0.8125rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .hostel-body {
          padding: 1.25rem 1.5rem;
        }

        .hostel-stat-row {
          display: flex;
          justify-content: space-between;
          padding: 0.625rem 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.875rem;
        }

        .dark-theme .hostel-stat-row {
          border-bottom-color: #334155;
        }

        .hostel-stat-row:last-child {
          border-bottom: none;
        }

        .hostel-stat-label {
          color: #6b7280;
        }

        .dark-theme .hostel-stat-label {
          color: #94a3b8;
        }

        .hostel-stat-value {
          color: #111827;
          font-weight: 600;
        }

        .dark-theme .hostel-stat-value {
          color: #f1f5f9;
        }

        .hostel-actions {
          display: flex;
          gap: 0.625rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .dark-theme .hostel-actions {
          border-top-color: #334155;
          background: #0f172a;
        }

        .btn-action {
          flex: 1;
          padding: 0.625rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.8125rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-manage {
          background: #3b82f6;
          color: white;
          border: none;
        }

        .btn-manage:hover {
          background: #2563eb;
        }

        .btn-edit {
          background: transparent;
          color: #6b7280;
          border: 1px solid #e2e8f0;
        }

        .btn-edit:hover {
          background: #f1f5f9;
          color: #111827;
          border-color: #cbd5e1;
        }

        .dark-theme .btn-edit {
          color: #94a3b8;
          border-color: #475569;
        }

        .dark-theme .btn-edit:hover {
          background: #334155;
          color: #f1f5f9;
        }

        .btn-delete {
          background: transparent;
          color: #ef4444;
          border: 1px solid #fecaca;
        }

        .btn-delete:hover {
          background: #fef2f2;
          border-color: #f87171;
        }

        .dark-theme .btn-delete {
          border-color: #7f1d1d;
        }

        .dark-theme .btn-delete:hover {
          background: #7f1d1d;
          color: #fecaca;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty-state {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .dark-theme .empty-text {
          color: #94a3b8;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem;
        }

        .spinner {
          width: 2.5rem;
          height: 2.5rem;
          border: 3px solid #e2e8f0;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .dark-theme .spinner {
          border-color: #334155;
          border-top-color: #3b82f6;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hostels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .owner-container {
            padding: 1.5rem 1rem;
          }
          .dashboard-title {
            font-size: 1.5rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .hostels-grid {
            grid-template-columns: 1fr;
          }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .btn-add {
            width: 100%;
            justify-content: center;
          }
          .hostel-actions {
            flex-direction: column;
          }
        }
      `}),n.jsxs("div",{className:"owner-container",children:[n.jsxs("div",{className:"dashboard-header",children:[n.jsx("h1",{className:"dashboard-title",children:"📊 Owner Dashboard"}),n.jsx("p",{className:"dashboard-subtitle",children:"Manage your hostels, rooms, and bookings"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"🏢"}),n.jsx("div",{className:"stat-number",children:o.totalHostels}),n.jsx("div",{className:"stat-label",children:"Total Hostels"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"🛏️"}),n.jsx("div",{className:"stat-number",children:o.totalRooms}),n.jsx("div",{className:"stat-label",children:"Total Rooms"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsx("div",{className:"stat-number",children:o.activeBookings}),n.jsx("div",{className:"stat-label",children:"Active Bookings"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"⏳"}),n.jsx("div",{className:"stat-number",children:o.pendingRequests}),n.jsx("div",{className:"stat-label",children:"Pending Requests"})]})]}),n.jsxs("div",{className:"section-header",children:[n.jsx("h2",{className:"section-title",children:"Your Hostels"}),n.jsx("button",{onClick:()=>e("/owner/hostels/add"),className:"btn-add",children:"➕ Add Hostel"})]}),l?n.jsx("div",{className:"loading",children:"Loading your hostels..."}):s.length>0?n.jsx("div",{className:"hostels-grid",children:s.map(d=>{var p,u,m,b,w,y,v,h;return n.jsxs("div",{className:"hostel-card",children:[n.jsxs("div",{className:"hostel-header",children:[n.jsx("div",{className:"hostel-name",children:d.name}),n.jsxs("div",{className:"hostel-location",children:["📍 ",d.address,", ",d.city]})]}),n.jsxs("div",{className:"hostel-body",children:[n.jsxs("div",{className:"hostel-stat-row",children:[n.jsx("span",{className:"hostel-stat-label",children:"Single Rooms"}),n.jsx("span",{className:"hostel-stat-value",children:((u=(p=d.roomConfig)==null?void 0:p.single)==null?void 0:u.count)||0})]}),n.jsxs("div",{className:"hostel-stat-row",children:[n.jsx("span",{className:"hostel-stat-label",children:"Double Rooms"}),n.jsx("span",{className:"hostel-stat-value",children:((b=(m=d.roomConfig)==null?void 0:m.double)==null?void 0:b.count)||0})]}),n.jsxs("div",{className:"hostel-stat-row",children:[n.jsx("span",{className:"hostel-stat-label",children:"Triple Rooms"}),n.jsx("span",{className:"hostel-stat-value",children:((y=(w=d.roomConfig)==null?void 0:w.triple)==null?void 0:y.count)||0})]}),n.jsxs("div",{className:"hostel-stat-row",children:[n.jsx("span",{className:"hostel-stat-label",children:"Four-Person Rooms"}),n.jsx("span",{className:"hostel-stat-value",children:((h=(v=d.roomConfig)==null?void 0:v.four)==null?void 0:h.count)||0})]})]}),n.jsxs("div",{className:"hostel-actions",children:[n.jsx("button",{className:"action-btn",onClick:()=>e(`/owner/hostels/${d._id}/edit`),children:"✏️ Edit"}),n.jsx("button",{className:"action-btn",onClick:()=>e("/owner/rooms"),children:"🛏️ Manage"})]})]},d._id)})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🏠"}),n.jsx("div",{className:"empty-title",children:"No Hostels Yet"}),n.jsx("p",{className:"empty-text",children:"Start by adding your first hostel property"}),n.jsx("button",{onClick:()=>e("/owner/hostels/add"),className:"btn-primary",children:"➕ Add Your First Hostel"})]})]})]})}function Lh(){const e=Oe(),[t,r]=x.useState([]),[o,a]=x.useState(!0),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const m=localStorage.getItem("theme");c(m==="dark"),m==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const b=()=>{const w=localStorage.getItem("theme");c(w==="dark"),w==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",b),d(),()=>{window.removeEventListener("themeChange",b)}},[]);const d=async()=>{try{a(!0);const m=localStorage.getItem("token"),b=await fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${m}`}}),w=await b.json();b.ok&&w.success?(r(w.hostels||[]),i("")):(r([]),i(""))}catch(m){console.error("Fetch hostel error:",m),i("Failed to load hostel")}finally{a(!1)}},p=()=>{hostel&&e(`/owner/hostels/${hostel._id}/edit`)},u=async m=>{if(window.confirm("Are you sure you want to delete this hostel?"))try{const b=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${m}`,{method:"DELETE",headers:{Authorization:`Bearer ${b}`}})).ok?(alert("Hostel deleted successfully"),d()):i("Failed to delete hostel")}catch{i("Failed to delete hostel")}};return n.jsxs("div",{className:`hostels-wrapper ${l?"dark-theme":"light-theme"}`,children:[n.jsx(In,{}),n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .hostels-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .hostels-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
          margin-top: 0.25rem;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .add-btn {
          padding: 0.625rem 1.25rem;
          background: #111827;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .add-btn:hover {
          background: #1f2937;
          transform: translateY(-1px);
        }

        .dark-theme .add-btn {
          background: #3b82f6;
        }

        .dark-theme .add-btn:hover {
          background: #2563eb;
        }

        .hostels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .error-msg {
          background: #fef2f2;
          color: #dc2626;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-msg {
          background: rgba(239, 68, 68, 0.1);
          color: #fca5a5;
          border-left-color: #ef4444;
        }

        .hostel-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .hostel-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .hostel-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .hostel-card:hover {
          border-color: #475569;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .hostel-header {
          background: #111827;
          padding: 1.25rem 1.5rem;
          color: white;
        }

        .dark-theme .hostel-header {
          background: #0f172a;
        }

        .hostel-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.375rem;
        }

        .hostel-location {
          font-size: 0.8125rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .hostel-body {
          padding: 1.25rem 1.5rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
        }

        .dark-theme .info-label {
          color: #94a3b8;
        }

        .info-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .info-value {
          color: #f1f5f9;
        }

        .amenities-section {
          margin-bottom: 1.25rem;
        }

        .section-title {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 0.625rem;
        }

        .dark-theme .section-title {
          color: #94a3b8;
        }

        .amenities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .amenity-tag {
          padding: 0.25rem 0.625rem;
          background: #f1f5f9;
          color: #475569;
          border-radius: 0.25rem;
          font-size: 0.75rem;
        }

        .dark-theme .amenity-tag {
          background: #334155;
          color: #94a3b8;
        }

        .rooms-section {
          margin-bottom: 1.25rem;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .room-type-card {
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
        }

        .dark-theme .room-type-card {
          background: #0f172a;
          border-color: #334155;
        }

        .room-type-name {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          margin-bottom: 0.25rem;
          text-transform: capitalize;
        }

        .dark-theme .room-type-name {
          color: #94a3b8;
        }

        .room-type-count {
          font-size: 1.125rem;
          font-weight: 700;
          color: #111827;
        }

        .dark-theme .room-type-count {
          color: #f1f5f9;
        }

        .room-type-rent {
          font-size: 0.75rem;
          color: #059669;
          font-weight: 500;
          margin-top: 0.125rem;
        }

        .dark-theme .room-type-rent {
          color: #10b981;
        }

        .actions {
          display: flex;
          gap: 0.625rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          background: #f8fafc;
        }

        .dark-theme .actions {
          border-top-color: #334155;
          background: #0f172a;
        }

        .btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-manage {
          background: #3b82f6;
          color: white;
        }

        .btn-manage:hover {
          background: #2563eb;
        }

        .btn-edit {
          background: transparent;
          color: #6b7280;
          border: 1px solid #e2e8f0;
        }

        .btn-edit:hover {
          background: #f1f5f9;
          color: #111827;
          border-color: #cbd5e1;
        }

        .dark-theme .btn-edit {
          color: #94a3b8;
          border-color: #475569;
        }

        .dark-theme .btn-edit:hover {
          background: #334155;
          color: #f1f5f9;
        }

        .btn-delete {
          background: transparent;
          color: #ef4444;
          border: 1px solid #fecaca;
        }

        .btn-delete:hover {
          background: #fef2f2;
          border-color: #f87171;
        }

        .dark-theme .btn-delete {
          border-color: #7f1d1d;
        }

        .dark-theme .btn-delete:hover {
          background: #7f1d1d;
          color: #fecaca;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty-state {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
        }

        .dark-theme .empty-text {
          color: #94a3b8;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4rem;
        }

        .spinner {
          width: 2.5rem;
          height: 2.5rem;
          border: 3px solid #e2e8f0;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .dark-theme .spinner {
          border-color: #334155;
          border-top-color: #3b82f6;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .hostels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hostels-container {
            padding: 1.5rem 1rem;
          }
          .page-title {
            font-size: 1.5rem;
          }
          .hostels-grid {
            grid-template-columns: 1fr;
          }
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .add-btn {
            width: 100%;
            justify-content: center;
          }
          .rooms-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
          .actions {
            flex-direction: column;
          }
        }

        .view-rooms-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.75rem;
        }

        .view-rooms-btn:hover {
          background: #4338ca;
        }
      `}),n.jsxs("div",{className:"hostels-container",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"page-title",children:"🏠 My Hostels"}),n.jsx("p",{className:"page-subtitle",children:"Manage your hostel properties"})]}),n.jsx(O,{to:"/owner/hostels/add",className:"add-btn",children:"➕ Add Hostel"})]}),s&&n.jsx("div",{className:"error-msg",children:s}),o?n.jsx("div",{className:"loading",children:n.jsx("div",{className:"spinner"})}):t.length>0?n.jsx("div",{className:"hostels-grid",children:t.map(m=>{var b,w,y,v,h,f,g,j;return n.jsxs("div",{className:"hostel-card",children:[n.jsxs("div",{className:"hostel-header",children:[n.jsx("h2",{className:"hostel-name",children:m.name}),n.jsxs("div",{className:"hostel-location",children:["📍 ",m.city,", ",m.state]})]}),n.jsxs("div",{className:"hostel-body",children:[n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Contact"}),n.jsx("span",{className:"info-value",children:m.contactPhone})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Gender"}),n.jsx("span",{className:"info-value",children:m.gender})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Address"}),n.jsx("span",{className:"info-value",children:m.address})]})]}),m.amenities&&m.amenities.length>0&&n.jsxs("div",{className:"amenities-section",children:[n.jsx("h3",{className:"section-title",children:"Amenities"}),n.jsxs("div",{className:"amenities-list",children:[m.amenities.slice(0,3).map((E,S)=>n.jsxs("span",{className:"amenity-tag",children:["✓ ",E]},S)),m.amenities.length>3&&n.jsxs("span",{className:"amenity-tag",children:["+",m.amenities.length-3," more"]})]})]}),n.jsxs("div",{className:"rooms-section",children:[n.jsx("h3",{className:"section-title",children:"Rooms"}),n.jsxs("div",{className:"rooms-grid",children:[((w=(b=m.roomConfig)==null?void 0:b.single)==null?void 0:w.count)>0&&n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-name",children:"🛏️ Single"}),n.jsx("div",{className:"room-type-count",children:m.roomConfig.single.count}),n.jsxs("div",{className:"room-type-rent",children:["₹",m.roomConfig.single.rent,"/mo"]})]}),((v=(y=m.roomConfig)==null?void 0:y.double)==null?void 0:v.count)>0&&n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-name",children:"👥 Double"}),n.jsx("div",{className:"room-type-count",children:m.roomConfig.double.count}),n.jsxs("div",{className:"room-type-rent",children:["₹",m.roomConfig.double.rent,"/mo"]})]}),((f=(h=m.roomConfig)==null?void 0:h.triple)==null?void 0:f.count)>0&&n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-name",children:"👨‍👨‍👦 Triple"}),n.jsx("div",{className:"room-type-count",children:m.roomConfig.triple.count}),n.jsxs("div",{className:"room-type-rent",children:["₹",m.roomConfig.triple.rent,"/mo"]})]}),((j=(g=m.roomConfig)==null?void 0:g.four)==null?void 0:j.count)>0&&n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-name",children:"👨‍👩‍👧‍👦 Four"}),n.jsx("div",{className:"room-type-count",children:m.roomConfig.four.count}),n.jsxs("div",{className:"room-type-rent",children:["₹",m.roomConfig.four.rent,"/mo"]})]})]}),n.jsx("button",{className:"view-rooms-btn",onClick:()=>e("/owner/rooms"),children:"👁️ View Room Details"})]}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"btn btn-edit",onClick:()=>p(m._id),children:"✏️ Edit"}),n.jsx("button",{className:"btn btn-delete",onClick:()=>u(m._id),children:"🗑️ Delete"})]})]})]},m._id)})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🏠"}),n.jsx("h2",{className:"empty-title",children:"No Hostel Yet"}),n.jsx("p",{className:"empty-text",children:"Create your first hostel to get started"}),n.jsx(O,{to:"/owner/hostels/add",className:"add-btn",children:"➕ Add Hostel"})]})]})]})}function tc(){const e=Oe(),{id:t}=Su(),r=!!t,[o,a]=x.useState(!1),[s,i]=x.useState(1),[l,c]=x.useState(!1),[d,p]=x.useState(""),[u,m]=x.useState({name:"",address:"",city:"",state:"",pincode:"",description:"",contactPhone:"",gender:"coed",amenities:[]}),[b,w]=x.useState({single:{count:0,price:"",roomNumbers:""},double:{count:0,price:"",roomNumbers:""},triple:{count:0,price:"",roomNumbers:""},four:{count:0,price:"",roomNumbers:""}}),[y,v]=x.useState([]),[h,f]=x.useState(0),[g,j]=x.useState(!1),[E,S]=x.useState({lat:0,lng:0}),[k,N]=x.useState(""),L=["🛏️ WiFi","🧊 AC","🚿 Hot Water","👨‍⚖️ Security","🍽️ Meals","🧹 Cleaning","🔒 Locker","🎮 Gaming Area","📖 Study Room","🧘 Yoga Studio","🏋️ Gym","📚 Library"],R=async(z,F,$)=>{try{N("getting");const K=encodeURIComponent(`${z}, ${F}, ${$}, India`),C=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${K}`)).json();return C&&C.length>0?(S({lat:parseFloat(C[0].lat),lng:parseFloat(C[0].lon)}),N("success"),{lat:parseFloat(C[0].lat),lng:parseFloat(C[0].lon)}):(N("not_found"),null)}catch(K){return console.error("Geocoding error:",K),N("error"),null}},M=()=>{if(!navigator.geolocation){N("unsupported");return}N("getting"),navigator.geolocation.getCurrentPosition(z=>{S({lat:z.coords.latitude,lng:z.coords.longitude}),N("success")},()=>{N("denied")},{timeout:1e4})};x.useEffect(()=>{const z=localStorage.getItem("theme");a(z==="dark"),z==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const F=()=>{const $=localStorage.getItem("theme");a($==="dark"),$==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",F),r&&B(),()=>{window.removeEventListener("themeChange",F)}},[r]);const B=async()=>{var z,F,$,K,oe,C,T,U,he,ke,dt,we,ut,Le,Je,$r,Ci,zi,Ei,Pi,Ri,Li,Ii,Ti;try{c(!0);const ta=localStorage.getItem("token"),_i=await fetch(`http://localhost:5000/api/hostels/${t}`,{headers:{Authorization:`Bearer ${ta}`}}),Fi=await _i.json();if(_i.ok&&Fi.hostel){const X=Fi.hostel;if(m({name:X.name||"",address:X.address||"",city:X.city||"",state:X.state||"",pincode:X.pincode||"",description:X.description||"",contactPhone:X.contactPhone||"",gender:X.gender||"coed",amenities:X.amenities||[]}),w({single:{count:((F=(z=X.roomConfig)==null?void 0:z.single)==null?void 0:F.count)||0,price:((K=($=X.roomConfig)==null?void 0:$.single)==null?void 0:K.rent)||"",roomNumbers:((C=(oe=X.roomConfig)==null?void 0:oe.single)==null?void 0:C.roomNumbers)||""},double:{count:((U=(T=X.roomConfig)==null?void 0:T.double)==null?void 0:U.count)||0,price:((ke=(he=X.roomConfig)==null?void 0:he.double)==null?void 0:ke.rent)||"",roomNumbers:((we=(dt=X.roomConfig)==null?void 0:dt.double)==null?void 0:we.roomNumbers)||""},triple:{count:((Le=(ut=X.roomConfig)==null?void 0:ut.triple)==null?void 0:Le.count)||0,price:(($r=(Je=X.roomConfig)==null?void 0:Je.triple)==null?void 0:$r.rent)||"",roomNumbers:((zi=(Ci=X.roomConfig)==null?void 0:Ci.triple)==null?void 0:zi.roomNumbers)||""},four:{count:((Pi=(Ei=X.roomConfig)==null?void 0:Ei.four)==null?void 0:Pi.count)||0,price:((Li=(Ri=X.roomConfig)==null?void 0:Ri.four)==null?void 0:Li.rent)||"",roomNumbers:((Ti=(Ii=X.roomConfig)==null?void 0:Ii.four)==null?void 0:Ti.roomNumbers)||""}}),X.images&&X.images.length>0){v(X.images);const Di=X.images.findIndex(Lu=>Lu===X.mainImage);f(Di>=0?Di:0)}}else p("Failed to load hostel data")}catch(ta){console.error("Load hostel error:",ta),p("Failed to load hostel data")}finally{c(!1)}},H=z=>{const{name:F,value:$}=z.target;m(K=>({...K,[F]:$}))},W=(z,F,$)=>{w(K=>({...K,[z]:{...K[z],[F]:$}}))},J=z=>{m(F=>({...F,amenities:F.amenities.includes(z)?F.amenities.filter($=>$!==z):[...F.amenities,z]}))},A=async z=>{const F=Array.from(z.target.files);if(F.length!==0){j(!0);try{const $=[];for(const K of F){const oe=new FileReader,T=await new Promise(U=>{oe.onload=()=>U(oe.result),oe.readAsDataURL(K)});$.push(T)}v(K=>[...K,...$])}catch($){console.error("Image upload error:",$),p("Failed to upload images")}finally{j(!1)}}},V=z=>{v(F=>F.filter(($,K)=>K!==z)),z===h?f(0):z<h&&f(F=>F-1)},I=z=>{f(z)},D=async z=>{var $,K,oe,C,T;if(z.preventDefault(),p(""),s===1){if(!(($=u.name)!=null&&$.trim())){p("❌ Hostel Name is required");return}if(!((K=u.city)!=null&&K.trim())){p("❌ City is required");return}if(!((oe=u.state)!=null&&oe.trim())){p("❌ State is required");return}if(!((C=u.address)!=null&&C.trim())){p("❌ Address is required");return}if(!((T=u.contactPhone)!=null&&T.trim())){p("❌ Contact Phone is required");return}i(2);return}if((parseInt(b.single.count)||0)+(parseInt(b.double.count)||0)+(parseInt(b.triple.count)||0)+(parseInt(b.four.count)||0)===0){p("❌ Please add at least one room type");return}if((parseInt(b.single.count)||0)>0&&!b.single.price){p("❌ Please set price for Single rooms");return}if((parseInt(b.double.count)||0)>0&&!b.double.price){p("❌ Please set price for Double rooms");return}if((parseInt(b.triple.count)||0)>0&&!b.triple.price){p("❌ Please set price for Triple rooms");return}if((parseInt(b.four.count)||0)>0&&!b.four.price){p("❌ Please set price for Four-person rooms");return}c(!0);try{const U=localStorage.getItem("token");let he=E;if(E.lat===0&&E.lng===0){const Je=await R(u.address.trim(),u.city.trim(),u.state.trim());Je&&(he=Je)}const ke={name:u.name.trim(),address:u.address.trim(),city:u.city.trim(),state:u.state.trim(),pincode:u.pincode.trim()||"0",description:u.description.trim(),contactPhone:u.contactPhone.trim(),gender:u.gender,amenities:u.amenities,images:y,mainImage:y.length>0?y[h]:"",coordinates:he,roomConfig:{single:{count:parseInt(b.single.count)||0,rent:parseInt(b.single.price)||0,roomNumbers:b.single.roomNumbers.trim()||""},double:{count:parseInt(b.double.count)||0,rent:parseInt(b.double.price)||0,roomNumbers:b.double.roomNumbers.trim()||""},triple:{count:parseInt(b.triple.count)||0,rent:parseInt(b.triple.price)||0,roomNumbers:b.triple.roomNumbers.trim()||""},four:{count:parseInt(b.four.count)||0,rent:parseInt(b.four.price)||0,roomNumbers:b.four.roomNumbers.trim()||""}}};console.log("Sending payload:",ke);const dt=r?`http://localhost:5000/api/hostels/${t}`:"http://localhost:5000/api/hostels",ut=await fetch(dt,{method:r?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${U}`},body:JSON.stringify(ke)}),Le=await ut.json();console.log("Response:",Le),ut.ok&&(Le.success||Le.hostel)?(alert(r?"✅ Hostel updated successfully!":"✅ Hostel created successfully!"),e("/owner/hostels")):p(`❌ Error: ${Le.message||"Failed to save hostel"}`)}catch(U){p(`❌ Error: ${U.message||"Failed to create hostel"}`),console.error("Error:",U)}finally{c(!1)}};return n.jsxs("div",{className:`add-hostel-wrapper ${o?"dark-theme":"light-theme"}`,children:[n.jsx(In,{}),n.jsx("style",{children:`
        .add-hostel-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .add-hostel-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .form-card {
          background: #ffffff;
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
        }

        .dark-theme .form-card {
          background: #1e293b;
          border-color: #334155;
        }

        .progress-bar {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .dark-theme .progress-bar {
          background: #334155;
        }

        .progress-fill {
          height: 100%;
          background: #111827;
          transition: width 0.3s ease;
        }

        .dark-theme .progress-fill {
          background: #3b82f6;
        }

        .room-config-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .room-type-card {
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1.25rem;
          transition: all 0.2s ease;
          background: #f8fafc;
        }

        .dark-theme .room-type-card {
          border-color: #334155;
          background: #0f172a;
        }

        .room-type-card:hover {
          border-color: #cbd5e1;
        }

        .dark-theme .room-type-card:hover {
          border-color: #475569;
        }

        .room-type-header {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-theme .room-type-header {
          color: #f1f5f9;
          border-bottom-color: #334155;
        }

        .room-type-inputs {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .input-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .input-label {
          color: #94a3b8;
        }

        .room-type-card .form-input {
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        }

        .form-section {
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-theme .section-title {
          color: #f1f5f9;
          border-bottom-color: #334155;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.375rem;
        }

        .dark-theme .form-label {
          color: #e2e8f0;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          font-family: inherit;
          background: #ffffff;
          color: #111827;
        }

        .dark-theme .form-input,
        .dark-theme .form-textarea {
          background: #0f172a;
          border-color: #334155;
          color: #f1f5f9;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 0.75rem;
        }

        .amenity-checkbox {
          position: relative;
          cursor: pointer;
        }

        .amenity-checkbox input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .amenity-label {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 0.8125rem;
          color: #6b7280;
          background: #ffffff;
        }

        .dark-theme .amenity-label {
          background: #0f172a;
          border-color: #334155;
          color: #94a3b8;
        }

        .amenity-label:hover {
          border-color: #cbd5e1;
        }

        .dark-theme .amenity-label:hover {
          border-color: #475569;
        }

        .amenity-checkbox input:checked + .amenity-label {
          background: #111827;
          border-color: #111827;
          color: white;
        }

        .dark-theme .amenity-checkbox input:checked + .amenity-label {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .dark-theme .form-actions {
          border-top-color: #334155;
        }

        .btn {
          padding: 0.625rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .btn-primary {
          background: #111827;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #1f2937;
        }

        .dark-theme .btn-primary {
          background: #3b82f6;
        }

        .dark-theme .btn-primary:hover:not(:disabled) {
          background: #2563eb;
        }

        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-secondary {
          background: #f8fafc;
          color: #374151;
          border: 1px solid #e2e8f0;
        }

        .dark-theme .btn-secondary {
          background: #334155;
          color: #f1f5f9;
          border-color: #475569;
        }

        .btn-secondary:hover {
          background: #f1f5f9;
        }

        .dark-theme .btn-secondary:hover {
          background: #475569;
        }

        .error-message {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.875rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.25rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-message {
          background: rgba(153, 27, 27, 0.15);
          color: #fca5a5;
        }

        @media (max-width: 768px) {
          .add-hostel-container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .form-card {
            padding: 1.25rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .amenities-grid {
            grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}),n.jsxs("div",{className:"add-hostel-container",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("h1",{className:"page-title",children:["🏢 ",r?"Edit Hostel":"Add New Hostel"]}),n.jsxs("p",{className:"page-subtitle",children:["Step ",s," of 2 - ",s===1?"Basic Information":"Room Configuration"]})]}),n.jsxs("div",{className:"form-card",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${s*50}%`}})}),d&&n.jsx("div",{className:"error-message",children:d}),n.jsxs("form",{onSubmit:D,children:[s===1?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-section",children:[n.jsx("h2",{className:"section-title",children:"Basic Information"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Hostel Name *"}),n.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"e.g., Cozy Stay Hostel",value:u.name,onChange:H,required:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"City *"}),n.jsx("input",{type:"text",name:"city",className:"form-input",placeholder:"e.g., Mumbai",value:u.city,onChange:H,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"State *"}),n.jsx("input",{type:"text",name:"state",className:"form-input",placeholder:"e.g., Maharashtra",value:u.state,onChange:H,required:!0})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Address *"}),n.jsx("input",{type:"text",name:"address",className:"form-input",placeholder:"e.g., Bandra, Mumbai",value:u.address,onChange:H,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Pincode"}),n.jsx("input",{type:"text",name:"pincode",className:"form-input",placeholder:"e.g., 400050",value:u.pincode,onChange:H})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem",padding:"0.75rem 1rem",background:E.lat!==0?"#d1fae5":"#f1f5f9",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[n.jsx("span",{children:E.lat!==0?`📍 Location set: ${E.lat.toFixed(4)}, ${E.lng.toFixed(4)}`:"📍 Location will be auto-detected from address"}),n.jsx("button",{type:"button",onClick:M,style:{padding:"0.375rem 0.75rem",background:"#4f46e5",color:"white",border:"none",borderRadius:"0.375rem",cursor:"pointer",fontSize:"0.75rem",fontWeight:500},children:k==="getting"?"⏳ Getting...":"📌 Use My Location"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Contact Phone *"}),n.jsx("input",{type:"tel",name:"contactPhone",className:"form-input",placeholder:"e.g., +91 9876543210",value:u.contactPhone,onChange:H,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Hostel Type *"}),n.jsxs("select",{name:"gender",className:"form-input",value:u.gender,onChange:H,required:!0,children:[n.jsx("option",{value:"male",children:"Male Only"}),n.jsx("option",{value:"female",children:"Female Only"}),n.jsx("option",{value:"coed",children:"Co-ed"})]})]})]})]}),n.jsxs("div",{className:"form-section",children:[n.jsx("h2",{className:"section-title",children:"Description"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"About Your Hostel"}),n.jsx("textarea",{name:"description",className:"form-textarea",placeholder:"Tell students about your hostel, facilities, and atmosphere...",value:u.description,onChange:H})]})]}),n.jsxs("div",{className:"form-section",children:[n.jsx("h2",{className:"section-title",children:"Amenities"}),n.jsx("div",{className:"amenities-grid",children:L.map(z=>n.jsxs("div",{className:"amenity-checkbox",children:[n.jsx("input",{type:"checkbox",id:z,checked:u.amenities.includes(z),onChange:()=>J(z)}),n.jsx("label",{htmlFor:z,className:"amenity-label",children:z})]},z))})]}),n.jsxs("div",{className:"form-section",children:[n.jsx("h2",{className:"section-title",children:"📷 Hostel Images"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"1rem",fontSize:"0.9rem"},children:"Upload photos of your hostel. The first image (or selected main image) will be shown in search results."}),n.jsxs("div",{style:{marginBottom:"1rem"},children:[n.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",background:"var(--primary)",color:"white",borderRadius:"0.5rem",cursor:"pointer",fontWeight:500},children:[g?"⏳ Uploading...":"📤 Upload Images",n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:A,style:{display:"none"},disabled:g})]}),n.jsxs("span",{style:{marginLeft:"1rem",color:"#6b7280",fontSize:"0.875rem"},children:[y.length," image",y.length!==1?"s":""," uploaded"]})]}),y.length>0&&n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"1rem"},children:y.map((z,F)=>n.jsxs("div",{style:{position:"relative",borderRadius:"0.5rem",overflow:"hidden",border:F===h?"3px solid #4f46e5":"1px solid var(--border)",aspectRatio:"4/3"},children:[n.jsx("img",{src:z,alt:`Hostel ${F+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}}),F===h&&n.jsx("div",{style:{position:"absolute",top:"0.5rem",left:"0.5rem",background:"#4f46e5",color:"white",padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.6875rem",fontWeight:600},children:"MAIN"}),n.jsxs("div",{style:{position:"absolute",bottom:"0.5rem",left:"0.5rem",right:"0.5rem",display:"flex",gap:"0.5rem"},children:[F!==h&&n.jsx("button",{type:"button",onClick:()=>I(F),style:{flex:1,padding:"0.375rem",background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"0.25rem",fontSize:"0.6875rem",cursor:"pointer",fontWeight:500},children:"Set Main"}),n.jsx("button",{type:"button",onClick:()=>V(F),style:{padding:"0.375rem 0.5rem",background:"#ef4444",color:"white",border:"none",borderRadius:"0.25rem",fontSize:"0.6875rem",cursor:"pointer",fontWeight:500},children:"✕"})]})]},F))})]})]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:"form-section",children:[n.jsx("h2",{className:"section-title",children:"🛏️ Room Configuration"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"1.5rem",fontSize:"0.95rem"},children:"Configure the room types and pricing for your hostel"}),n.jsxs("div",{className:"room-config-grid",children:[n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-header",children:"🛏️ Single Room"}),n.jsxs("div",{className:"room-type-inputs",children:[n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Number of Rooms"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.single.count,onChange:z=>W("single","count",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.single.price,onChange:z=>W("single","price",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 101-110 or 101,102,103)"}),n.jsx("input",{type:"text",className:"form-input",placeholder:"101-110",value:b.single.roomNumbers,onChange:z=>W("single","roomNumbers",z.target.value)})]})]})]}),n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-header",children:"👥 Double Sharing"}),n.jsxs("div",{className:"room-type-inputs",children:[n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Number of Rooms"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.double.count,onChange:z=>W("double","count",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.double.price,onChange:z=>W("double","price",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 201-215 or 201,202,203)"}),n.jsx("input",{type:"text",className:"form-input",placeholder:"201-215",value:b.double.roomNumbers,onChange:z=>W("double","roomNumbers",z.target.value)})]})]})]}),n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-header",children:"👨‍👨‍👦 Triple Sharing"}),n.jsxs("div",{className:"room-type-inputs",children:[n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Number of Rooms"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.triple.count,onChange:z=>W("triple","count",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.triple.price,onChange:z=>W("triple","price",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 301-320 or 301,302,303)"}),n.jsx("input",{type:"text",className:"form-input",placeholder:"301-320",value:b.triple.roomNumbers,onChange:z=>W("triple","roomNumbers",z.target.value)})]})]})]}),n.jsxs("div",{className:"room-type-card",children:[n.jsx("div",{className:"room-type-header",children:"👨‍👩‍👧‍👦 Four Person"}),n.jsxs("div",{className:"room-type-inputs",children:[n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Number of Rooms"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.four.count,onChange:z=>W("four","count",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),n.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:b.four.price,onChange:z=>W("four","price",z.target.value)})]}),n.jsxs("div",{className:"input-group",children:[n.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 401-412 or 401,402,403)"}),n.jsx("input",{type:"text",className:"form-input",placeholder:"401-412",value:b.four.roomNumbers,onChange:z=>W("four","roomNumbers",z.target.value)})]})]})]})]}),n.jsxs("div",{style:{background:"#f0f9ff",border:"1px solid #bfdbfe",borderRadius:"0.5rem",padding:"1rem",marginTop:"1.5rem",color:"#1e40af",fontSize:"0.9rem"},children:["💡 ",n.jsx("strong",{children:"Total Rooms Configured:"})," ",(parseInt(b.single.count)||0)+(parseInt(b.double.count)||0)+(parseInt(b.triple.count)||0)+(parseInt(b.four.count)||0)," rooms"]})]})}),n.jsxs("div",{className:"form-actions",children:[s===2&&n.jsx("button",{type:"button",onClick:()=>i(1),className:"btn btn-secondary",children:"← Back"}),n.jsx("button",{type:"button",onClick:()=>e("/owner/dashboard"),className:"btn btn-secondary",children:"✕ Cancel"}),n.jsx("button",{type:"submit",disabled:l,className:"btn btn-primary",children:s===1?"➜ Next":l?"⏳ Saving...":r?"✅ Update Hostel":"✅ Create Hostel"})]})]})]})]})]})}function rc(){const[e,t]=x.useState([]),[r,o]=x.useState(null),[a,s]=x.useState([]),[i,l]=x.useState(!0),[c,d]=x.useState(""),[p,u]=x.useState(null),[m,b]=x.useState(!1),[w,y]=x.useState({roomType:"double",rent:"",roomNumber:""});x.useEffect(()=>{const N=localStorage.getItem("theme");b(N==="dark"),N==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const L=()=>{const R=localStorage.getItem("theme");b(R==="dark"),R==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",L),v(),()=>{window.removeEventListener("themeChange",L)}},[]);const v=async()=>{try{l(!0);const N=localStorage.getItem("token"),L=await fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${N}`}}),R=await L.json();L.ok&&R.success&&R.hostels&&R.hostels.length>0?(t(R.hostels),o(R.hostels[0]),f(R.hostels[0]._id),d("")):R.hostels&&R.hostels.length===0?d("No hostels found. Please add a hostel first."):d("Failed to load hostels")}catch(N){console.error("Fetch hostel error:",N),d("Failed to load hostels")}finally{l(!1)}},h=N=>{const L=e.find(R=>R._id===N);L&&(o(L),f(N))},f=async N=>{try{const L=localStorage.getItem("token"),M=await(await fetch(`http://localhost:5000/api/rooms/hostel/${N}`,{headers:{Authorization:`Bearer ${L}`}})).json();if(M.success&&M.rooms)s(M.rooms);else{const B=e.find(H=>H._id===N);B&&g(B.roomConfig)}}catch(L){console.error("Error fetching rooms:",L);const R=e.find(M=>M._id===N);R&&g(R.roomConfig)}},g=N=>{const L=[],R=M=>{if(!M)return[];const B=[];return M.split(",").map(W=>W.trim()).forEach(W=>{if(W.includes("-")){const[J,A]=W.split("-").map(Number);for(let V=J;V<=A;V++)B.push(V)}else{const J=Number(W);isNaN(J)||B.push(J)}}),B};Object.entries(N||{}).forEach(([M,B])=>{if(!B||B.count===0)return;const H=R(B.roomNumbers);if(H.length===0){const W=M==="single"?101:M==="double"?201:M==="triple"?301:401;for(let J=0;J<B.count;J++)H.push(W+J)}H.slice(0,B.count).forEach(W=>{L.push({_id:`${M}-${W}`,number:W,type:M,rent:B.rent,capacity:M==="single"?1:M==="double"?2:M==="triple"?3:4,status:"available",occupants:[],currentBookings:[]})})}),s(L)},j=N=>{u(N._id),y({roomType:N.type,rent:N.rent,roomNumber:N.roomNumber})},E=async()=>{if(p)try{const N=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${hostel._id}/rooms/${p}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify(w)})).ok?(u(null),v()):d("Failed to update room")}catch{d("Failed to update room")}},S=async N=>{if(window.confirm("Are you sure you want to delete this room?")&&r)try{const L=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${r._id}/rooms/${N}`,{method:"DELETE",headers:{Authorization:`Bearer ${L}`}})).ok?v():d("Failed to delete room")}catch{d("Failed to delete room")}},k=()=>{u(null),y({roomType:"double",rent:"",roomNumber:""})};return n.jsxs("div",{className:`manage-wrapper ${m?"dark-theme":"light-theme"}`,children:[n.jsx(In,{}),n.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .manage-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .manage-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .page-header-left {
          flex: 1;
          min-width: 200px;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .error-msg {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.875rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-msg {
          background: rgba(153, 27, 27, 0.15);
          color: #fca5a5;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .room-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .dark-theme .room-card {
          background: #1e293b;
          border-color: #334155;
        }

        .room-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .room-card:hover {
          border-color: #475569;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .room-header {
          background: #111827;
          padding: 1.25rem 1.5rem;
          color: white;
        }

        .dark-theme .room-header {
          background: #0f172a;
        }

        .room-num {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .room-type {
          font-size: 0.8125rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .room-body {
          padding: 1.25rem 1.5rem;
        }

        .room-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.625rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .dark-theme .room-info {
          border-bottom-color: #334155;
        }

        .room-info:last-child {
          border-bottom: none;
        }

        .room-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .room-label {
          color: #94a3b8;
        }

        .room-val {
          font-weight: 500;
          color: #111827;
          font-size: 0.875rem;
        }

        .dark-theme .room-val {
          color: #f1f5f9;
        }

        .price {
          color: #059669;
          font-size: 1rem;
          font-weight: 600;
        }

        .dark-theme .price {
          color: #10b981;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .badge-available {
          background: #ecfdf5;
          color: #059669;
        }

        .badge-occupied {
          background: #fee2e2;
          color: #dc2626;
        }

        .badge-pending {
          background: #fef3c7;
          color: #d97706;
        }

        .dark-theme .badge-available {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
        }

        .dark-theme .badge-occupied {
          background: rgba(220, 38, 38, 0.15);
          color: #f87171;
        }

        .dark-theme .badge-pending {
          background: rgba(217, 119, 6, 0.15);
          color: #fbbf24;
        }

        /* Occupants Section */
        .occupants-section {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .dark-theme .occupants-section {
          border-top-color: #374151;
        }

        .occupants-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .occupants-title {
          color: #9ca3af;
        }

        .occupant-item {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .dark-theme .occupant-item {
          background: #1f2937;
          border-color: #374151;
        }

        .occupant-item.pending {
          border-color: #fbbf24;
          background: #fffbeb;
        }

        .dark-theme .occupant-item.pending {
          background: rgba(251, 191, 36, 0.1);
          border-color: #d97706;
        }

        .occupant-name {
          font-weight: 600;
          font-size: 0.875rem;
          color: #111827;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dark-theme .occupant-name {
          color: #f3f4f6;
        }

        .occupant-details {
          font-size: 0.75rem;
          color: #6b7280;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .dark-theme .occupant-details {
          color: #9ca3af;
        }

        .pending-tag {
          background: #fbbf24;
          color: #78350f;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.625rem;
          font-weight: 600;
        }

        .dark-theme .pending-tag {
          background: #d97706;
          color: #fffbeb;
        }

        .no-occupants {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          font-size: 0.8125rem;
          color: #9ca3af;
          text-align: center;
          font-style: italic;
        }

        .dark-theme .no-occupants {
          background: #1f2937;
          color: #6b7280;
        }

        .room-footer {
          display: flex;
          gap: 0.75rem;
          padding: 1.25rem 1.5rem;
          padding-top: 0;
        }

        .btn-small {
          flex: 1;
          padding: 0.5rem 0.75rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .btn-edit {
          color: #3b82f6;
          background: #eff6ff;
          border: 1px solid #dbeafe;
        }

        .btn-edit:hover {
          background: #dbeafe;
        }

        .btn-del {
          color: #dc2626;
          background: #fef2f2;
          border: 1px solid #fecaca;
        }

        .btn-del:hover {
          background: #fee2e2;
        }

        .dark-theme .btn-edit {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-edit:hover {
          background: rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-del {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .dark-theme .btn-del:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .empty {
          text-align: center;
          padding: 3rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.375rem;
          color: #111827;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-text {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .dark-theme .empty-text {
          color: #94a3b8;
        }

        .loading {
          text-align: center;
          padding: 2rem;
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .loading {
          color: #94a3b8;
        }

        .modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal.open {
          display: flex;
        }

        .modal-content {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 1rem;
          max-width: 400px;
          width: 100%;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .dark-theme .modal-content {
          background: #1e293b;
          border-color: #334155;
        }

        .modal-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.25rem;
        }

        .dark-theme .modal-title {
          color: #f1f5f9;
        }

        .modal-desc {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .dark-theme .modal-desc {
          color: #94a3b8;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .dark-theme .form-label {
          color: #e2e8f0;
        }

        .form-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: #ffffff;
          color: #111827;
          transition: all 0.2s ease;
        }

        .dark-theme .form-input {
          background: #0f172a;
          border-color: #334155;
          color: #f1f5f9;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }

        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }

        .btn-save {
          background: #111827;
          color: white;
        }

        .btn-save:hover {
          background: #1f2937;
        }

        .dark-theme .btn-save {
          background: #3b82f6;
        }

        .dark-theme .btn-save:hover {
          background: #2563eb;
        }

        .btn-cancel {
          background: #f8fafc;
          color: #374151;
          border: 1px solid #e2e8f0;
        }

        .btn-cancel:hover {
          background: #f1f5f9;
        }

        .dark-theme .btn-cancel {
          background: #334155;
          color: #f1f5f9;
          border-color: #475569;
        }

        .dark-theme .btn-cancel:hover {
          background: #475569;
        }

        .hostel-selector {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hostel-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .dark-theme .hostel-label {
          color: #e2e8f0;
        }

        .hostel-select {
          padding: 0.5rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: #ffffff;
          color: #111827;
          cursor: pointer;
          min-width: 200px;
        }

        .dark-theme .hostel-select {
          background: #1e293b;
          border-color: #334155;
          color: #f1f5f9;
        }

        .hostel-select:focus {
          outline: none;
          border-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .manage-container {
            padding: 1.5rem 1rem;
          }

          .page-header {
            flex-direction: column;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .rooms-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .modal-content {
            padding: 1.25rem;
          }
        }
      `}),n.jsxs("div",{className:"manage-container",children:[n.jsx("div",{className:"page-header",children:n.jsxs("div",{className:"page-header-left",children:[n.jsx("h1",{className:"page-title",children:"🛏️ Manage Rooms"}),n.jsx("p",{className:"page-subtitle",children:"View, edit and manage your hostel rooms"})]})}),e.length>1&&n.jsxs("div",{className:"hostel-selector",children:[n.jsx("label",{className:"hostel-label",children:"Select Hostel:"}),n.jsx("select",{className:"hostel-select",value:(r==null?void 0:r._id)||"",onChange:N=>h(N.target.value),children:e.map(N=>n.jsx("option",{value:N._id,children:N.name},N._id))})]}),r&&n.jsxs("div",{className:"page-subtitle",style:{marginBottom:"1.5rem",fontWeight:500},children:[r.name," - ",r.city]}),c&&n.jsx("div",{className:"error-msg",children:c}),i?n.jsx("div",{className:"loading",children:"Loading rooms..."}):a.length>0?n.jsx("div",{className:"rooms-grid",children:a.map(N=>{var H,W,J,A;const L=((H=N.occupants)==null?void 0:H.length)||0,R=((W=N.currentBookings)==null?void 0:W.length)||0,M=N.number||N.roomNumber,B=L>=N.capacity?"occupied":R>0?"pending":"available";return n.jsxs("div",{className:"room-card",children:[n.jsxs("div",{className:"room-header",children:[n.jsxs("div",{className:"room-num",children:["#",M]}),n.jsxs("div",{className:"room-type",children:[N.type==="single"&&"🛏️ Single",N.type==="double"&&"👥 Double",N.type==="triple"&&"👨‍👨‍👦 Triple",N.type==="four"&&"👨‍👩‍👧‍👦 Four-Person"]})]}),n.jsxs("div",{className:"room-body",children:[n.jsxs("div",{className:"room-info",children:[n.jsx("span",{className:"room-label",children:"Capacity"}),n.jsxs("span",{className:"room-val",children:[N.capacity," persons"]})]}),n.jsxs("div",{className:"room-info",children:[n.jsx("span",{className:"room-label",children:"Occupied"}),n.jsxs("span",{className:"room-val",children:[L," / ",N.capacity]})]}),n.jsxs("div",{className:"room-info",children:[n.jsx("span",{className:"room-label",children:"Fee/Month"}),n.jsxs("span",{className:"price",children:["₹",N.rent]})]}),n.jsxs("div",{className:"room-info",children:[n.jsx("span",{className:"room-label",children:"Status"}),n.jsxs("span",{className:`badge badge-${B}`,children:[B==="occupied"&&"🔴 Full",B==="pending"&&"🟡 Pending",B==="available"&&"🟢 Available"]})]}),(L>0||R>0)&&n.jsxs("div",{className:"occupants-section",children:[n.jsxs("div",{className:"occupants-title",children:["👥 Occupants (",L+R,")"]}),(J=N.occupants)==null?void 0:J.map(V=>n.jsxs("div",{className:"occupant-item",children:[n.jsxs("div",{className:"occupant-name",children:["👤 ",V.name]}),n.jsxs("div",{className:"occupant-details",children:[n.jsxs("span",{children:["📧 ",V.email]}),V.phone&&n.jsxs("span",{children:["📞 ",V.phone]})]})]},V._id)),(A=N.currentBookings)==null?void 0:A.map(V=>{var I,D,z;return n.jsxs("div",{className:"occupant-item pending",children:[n.jsxs("div",{className:"occupant-name",children:["👤 ",((I=V.student)==null?void 0:I.name)||"Unknown",n.jsx("span",{className:"pending-tag",children:"PENDING"})]}),n.jsxs("div",{className:"occupant-details",children:[n.jsxs("span",{children:["📧 ",((D=V.student)==null?void 0:D.email)||"N/A"]}),((z=V.student)==null?void 0:z.phone)&&n.jsxs("span",{children:["📞 ",V.student.phone]})]})]},V._id)})]}),L===0&&R===0&&n.jsx("div",{className:"no-occupants",children:"No occupants yet"})]}),n.jsxs("div",{className:"room-footer",children:[n.jsx("button",{className:"btn-small btn-edit",onClick:()=>j(N),children:"✏️ Edit"}),n.jsx("button",{className:"btn-small btn-del",onClick:()=>S(N._id),children:"🗑️ Delete"})]})]},N._id)})}):n.jsxs("div",{className:"empty",children:[n.jsx("div",{className:"empty-icon",children:"🛏️"}),n.jsx("div",{className:"empty-title",children:"No Rooms Found"}),n.jsx("p",{className:"empty-text",children:"Create a hostel to get started"})]}),p&&n.jsx("div",{className:`modal ${p?"open":""}`,children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("h2",{className:"modal-title",children:["Edit Room #",w.roomNumber]}),n.jsx("p",{className:"modal-desc",children:"Update the monthly rent for this room"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Monthly Rent (₹)"}),n.jsx("input",{type:"number",className:"form-input",value:w.rent,onChange:N=>y({...w,rent:N.target.value}),min:"0",placeholder:"Enter amount"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:k,className:"btn btn-cancel",children:"Cancel"}),n.jsx("button",{onClick:E,className:"btn btn-save",children:"Save"})]})]})})]})]})}function Ih(){const[e,t]=x.useState(!1),[r,o]=x.useState([]),[a,s]=x.useState("all"),[i,l]=x.useState(!0),[c,d]=x.useState("");x.useEffect(()=>{const v=localStorage.getItem("theme");t(v==="dark"),v==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const h=()=>{const f=localStorage.getItem("theme");t(f==="dark"),f==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",h),()=>{window.removeEventListener("themeChange",h)}},[]),x.useEffect(()=>{p()},[]);const p=async()=>{try{l(!0);const v=localStorage.getItem("token"),h=await fetch("http://localhost:5000/api/bookings/owner/all",{headers:{Authorization:`Bearer ${v}`}}),f=await h.json();h.ok&&f.success?o(f.bookings||[]):d(f.message||"Failed to load bookings")}catch{d("Failed to load bookings")}finally{l(!1)}},u=async v=>{try{const h=localStorage.getItem("token"),f=await fetch(`http://localhost:5000/api/bookings/${v}/approve`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`}});if(f.ok)p();else{const g=await f.json();d(g.message||"Failed to approve booking")}}catch{d("Failed to approve booking")}},m=async v=>{try{const h=localStorage.getItem("token"),f=await fetch(`http://localhost:5000/api/bookings/${v}/reject`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({ownerNotes:"Booking rejected"})});if(f.ok)p();else{const g=await f.json();d(g.message||"Failed to reject booking")}}catch{d("Failed to reject booking")}},b=async v=>{if(window.confirm("Are you sure you want to checkout this student?"))try{const h=localStorage.getItem("token"),f=await fetch(`http://localhost:5000/api/bookings/${v}/checkout`,{method:"PUT",headers:{Authorization:`Bearer ${h}`}});if(f.ok)p();else{const g=await f.json();d(g.message||"Failed to checkout")}}catch{d("Failed to checkout")}},w=a==="all"?r:r.filter(v=>v.status===a),y={pending:{bg:"#fef3c7",text:"#92400e",icon:"⏳"},approved:{bg:"#dcfce7",text:"#166534",icon:"✅"},active:{bg:"#dbeafe",text:"#1e40af",icon:"🏠"},rejected:{bg:"#fee2e2",text:"#991b1b",icon:"❌"},cancelled:{bg:"#f3f4f6",text:"#6b7280",icon:"🚫"},completed:{bg:"#d1fae5",text:"#065f46",icon:"🎉"}};return n.jsxs("div",{className:`owner-bookings-wrapper ${e?"dark-theme":"light-theme"}`,children:[n.jsx(In,{}),n.jsx("style",{children:`
        .owner-bookings-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .light-theme {
          background: #ffffff;
          color: #111827;
        }

        .dark-theme {
          background: #0f172a;
          color: #f1f5f9;
        }

        .bookings-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2.5rem 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
          letter-spacing: -0.025em;
        }

        .dark-theme .page-title {
          color: #f1f5f9;
        }

        .page-subtitle {
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .page-subtitle {
          color: #94a3b8;
        }

        .filters {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .dark-theme .filter-btn {
          background: #1e293b;
          border-color: #334155;
          color: #94a3b8;
        }

        .filter-btn.active {
          background: #111827;
          border-color: #111827;
          color: white;
        }

        .dark-theme .filter-btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .filter-btn:hover:not(.active) {
          border-color: #cbd5e1;
          background: #f8fafc;
        }

        .dark-theme .filter-btn:hover:not(.active) {
          border-color: #475569;
          background: #334155;
        }

        .error-message {
          background: #fef2f2;
          color: #991b1b;
          padding: 0.875rem 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #dc2626;
          font-size: 0.875rem;
        }

        .dark-theme .error-message {
          background: rgba(153, 27, 27, 0.15);
          color: #fca5a5;
        }

        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .booking-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1.25rem;
          padding: 1.25rem;
        }

        .dark-theme .booking-card {
          background: #1e293b;
          border-color: #334155;
        }

        .booking-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .booking-card:hover {
          border-color: #475569;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .booking-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
        }

        .status-badge {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .status-text {
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: capitalize;
        }

        .booking-info {
          display: grid;
          gap: 0.75rem;
        }

        .booking-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.375rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .dark-theme .booking-header {
          border-bottom-color: #334155;
        }

        .booking-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
        }

        .dark-theme .booking-title {
          color: #f1f5f9;
        }

        .booking-dates {
          font-size: 0.8125rem;
          color: #6b7280;
        }

        .dark-theme .booking-dates {
          color: #94a3b8;
        }

        .booking-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0.75rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .detail-label {
          font-size: 0.6875rem;
          color: #6b7280;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dark-theme .detail-label {
          color: #94a3b8;
        }

        .detail-value {
          font-size: 0.875rem;
          font-weight: 500;
          color: #111827;
        }

        .dark-theme .detail-value {
          color: #f1f5f9;
        }

        .booking-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          justify-content: flex-start;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.8125rem;
          white-space: nowrap;
        }

        .btn-approve {
          background: #ecfdf5;
          color: #059669;
          border: 1px solid #a7f3d0;
        }

        .btn-approve:hover {
          background: #d1fae5;
        }

        .dark-theme .btn-approve {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.25);
        }

        .dark-theme .btn-approve:hover {
          background: rgba(16, 185, 129, 0.25);
        }

        .btn-reject {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .btn-reject:hover {
          background: #fee2e2;
        }

        .dark-theme .btn-reject {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.25);
        }

        .dark-theme .btn-reject:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .btn-view {
          background: #eff6ff;
          color: #3b82f6;
          border: 1px solid #dbeafe;
        }

        .btn-view:hover {
          background: #dbeafe;
        }

        .dark-theme .btn-view {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        .dark-theme .btn-view:hover {
          background: rgba(59, 130, 246, 0.25);
        }

        .btn-checkout {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fcd34d;
        }

        .btn-checkout:hover {
          background: #fde68a;
        }

        .dark-theme .btn-checkout {
          background: rgba(251, 191, 36, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(251, 191, 36, 0.25);
        }

        .dark-theme .btn-checkout:hover {
          background: rgba(251, 191, 36, 0.25);
        }

        .empty-state {
          text-align: center;
          padding: 3rem 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px dashed #e2e8f0;
        }

        .dark-theme .empty-state {
          background: #1e293b;
          border-color: #334155;
        }

        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-title {
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.375rem;
        }

        .dark-theme .empty-title {
          color: #f1f5f9;
        }

        .empty-subtitle {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .dark-theme .empty-subtitle {
          color: #94a3b8;
        }

        .loading {
          text-align: center;
          padding: 2rem;
          font-size: 0.9375rem;
          color: #6b7280;
        }

        .dark-theme .loading {
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .bookings-container {
            padding: 1.5rem 1rem;
          }

          .page-title {
            font-size: 1.5rem;
          }

          .booking-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .booking-actions {
            flex-direction: row;
          }

          .action-btn {
            flex: 1;
          }

          .booking-details {
            grid-template-columns: repeat(2, 1fr);
          }

          .booking-header {
            flex-direction: column;
            gap: 0.375rem;
          }
        }
      `}),n.jsxs("div",{className:"bookings-container",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{className:"page-title",children:"📋 Booking Requests"}),n.jsx("p",{className:"page-subtitle",children:"Manage and track all student booking requests"})]}),n.jsxs("div",{className:"filters",children:[n.jsxs("button",{className:`filter-btn ${a==="all"?"active":""}`,onClick:()=>s("all"),children:["📊 All (",r.length,")"]}),n.jsxs("button",{className:`filter-btn ${a==="pending"?"active":""}`,onClick:()=>s("pending"),children:["⏳ Pending (",r.filter(v=>v.status==="pending").length,")"]}),n.jsxs("button",{className:`filter-btn ${a==="approved"?"active":""}`,onClick:()=>s("approved"),children:["✅ Approved (",r.filter(v=>v.status==="approved"||v.status==="active").length,")"]}),n.jsxs("button",{className:`filter-btn ${a==="completed"?"active":""}`,onClick:()=>s("completed"),children:["🎉 Completed (",r.filter(v=>v.status==="completed").length,")"]})]}),c&&n.jsx("div",{className:"error-message",children:c}),i?n.jsx("div",{className:"loading",children:"Loading bookings..."}):w.length>0?n.jsx("div",{className:"bookings-list",children:w.map(v=>{var N,L,R,M,B,H;const h=y[v.status]||y.pending,f=((N=v.student)==null?void 0:N.name)||"Unknown Student",g=((L=v.student)==null?void 0:L.email)||"N/A",j=((R=v.student)==null?void 0:R.phone)||"N/A",E=((M=v.hostel)==null?void 0:M.name)||"Unknown Hostel",S=((B=v.room)==null?void 0:B.number)||"N/A",k=((H=v.room)==null?void 0:H.type)||v.roomType||"N/A";return n.jsxs("div",{className:"booking-card",children:[n.jsxs("div",{className:"booking-status",children:[n.jsx("div",{className:"status-badge",style:{background:h.bg,color:h.text},children:h.icon}),n.jsx("div",{className:"status-text",style:{color:h.text},children:v.status})]}),n.jsxs("div",{className:"booking-info",children:[n.jsx("div",{className:"booking-header",children:n.jsxs("div",{children:[n.jsxs("div",{className:"booking-title",children:[f," • Room ",S]}),n.jsxs("div",{className:"booking-dates",children:["Requested: ",new Date(v.createdAt).toLocaleDateString()]})]})}),n.jsxs("div",{className:"booking-details",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Hostel"}),n.jsx("div",{className:"detail-value",children:E})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Room Type"}),n.jsx("div",{className:"detail-value",children:k.toUpperCase()})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Email"}),n.jsx("div",{className:"detail-value",children:g})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("div",{className:"detail-label",children:"Phone"}),n.jsx("div",{className:"detail-value",children:j})]})]})]}),n.jsxs("div",{className:"booking-actions",children:[v.status==="pending"&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>u(v._id),className:"action-btn btn-approve",children:"✅ Approve"}),n.jsx("button",{onClick:()=>m(v._id),className:"action-btn btn-reject",children:"❌ Reject"})]}),(v.status==="approved"||v.status==="active")&&n.jsx("button",{onClick:()=>b(v._id),className:"action-btn btn-checkout",children:"🚪 Checkout"})]})]},v._id)})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("h3",{className:"empty-title",children:a==="all"?"No Bookings Yet":`No ${a} bookings`}),n.jsx("p",{className:"empty-subtitle",children:a==="all"?"Bookings from students will appear here":`No bookings with status "${a}"`})]})]})]})}function nc({role:e}){const t=localStorage.getItem("token"),r=localStorage.getItem("userRole");return t?e&&r!==e?r==="student"?n.jsx(qt,{to:"/student/dashboard",replace:!0}):r==="owner"?n.jsx(qt,{to:"/admin",replace:!0}):n.jsx(qt,{to:"/login",replace:!0}):n.jsx(qp,{}):n.jsx(qt,{to:"/login",replace:!0})}function Th(){const e=localStorage.getItem("token"),t=localStorage.getItem("userRole");if(e&&t){if(t==="student")return n.jsx(qt,{to:"/student/dashboard",replace:!0});if(t==="owner")return n.jsx(qt,{to:"/owner/dashboard",replace:!0})}return n.jsx(Ru,{})}function _h(){return n.jsxs("div",{style:{padding:24},children:[n.jsx("h2",{children:"Page not found"}),n.jsx("p",{children:n.jsx(O,{to:"/",children:"Go Home"})})]})}function Fh(){return n.jsxs(Zp,{children:[n.jsx(Z,{path:"/",element:n.jsx(Th,{})}),n.jsx(Z,{path:"/landing",element:n.jsx(Ru,{})}),n.jsx(Z,{path:"/search",element:n.jsx(bh,{})}),n.jsx(Z,{path:"/hostel/:id",element:n.jsx(vh,{})}),n.jsx(Z,{path:"/hostel-info",element:n.jsx(gh,{})}),n.jsx(Z,{path:"/login",element:n.jsx(yh,{})}),n.jsx(Z,{path:"/register",element:n.jsx(kh,{})}),n.jsxs(Z,{element:n.jsx(nc,{role:"student"}),children:[n.jsx(Z,{path:"/student/dashboard",element:n.jsx(wh,{})}),n.jsx(Z,{path:"/student/profile",element:n.jsx(Nh,{})})]}),n.jsxs(Z,{element:n.jsx(nc,{role:"owner"}),children:[n.jsx(Z,{path:"/admin",element:n.jsx(Sh,{})}),n.jsx(Z,{path:"/admin/double",element:n.jsx(Ch,{})}),n.jsx(Z,{path:"/admin/triple",element:n.jsx(zh,{})}),n.jsx(Z,{path:"/admin/four",element:n.jsx(Eh,{})}),n.jsx(Z,{path:"/admin/fees",element:n.jsx(Ph,{})}),n.jsx(Z,{path:"/owner/dashboard",element:n.jsx(Rh,{})}),n.jsx(Z,{path:"/owner/hostels",element:n.jsx(Lh,{})}),n.jsx(Z,{path:"/owner/hostels/add",element:n.jsx(tc,{})}),n.jsx(Z,{path:"/owner/hostels/:id/edit",element:n.jsx(tc,{})}),n.jsx(Z,{path:"/owner/rooms",element:n.jsx(rc,{})}),n.jsx(Z,{path:"/owner/rooms/add",element:n.jsx(rc,{})}),n.jsx(Z,{path:"/owner/bookings",element:n.jsx(Ih,{})})]}),n.jsx(Z,{path:"/home",element:n.jsx(qt,{to:"/",replace:!0})}),n.jsx(Z,{path:"*",element:n.jsx(_h,{})})]})}bu(document.getElementById("root")).render(n.jsx(fc.StrictMode,{children:n.jsx(ih,{children:n.jsx(Fh,{})})}));
