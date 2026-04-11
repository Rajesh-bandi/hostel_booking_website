function Xu(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(o,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function Zu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},Wo={},jc={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pn=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),am=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),Gi=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=Gi&&e[Gi]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nc=Object.assign,Sc={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||kc}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cc(){}Cc.prototype=Ar.prototype;function As(e,t,n){this.props=e,this.context=t,this.refs=Sc,this.updater=n||kc}var $s=As.prototype=new Cc;$s.constructor=As;Nc($s,Ar.prototype);$s.isPureReactComponent=!0;var Ki=Array.isArray,zc=Object.prototype.hasOwnProperty,Os={current:null},Ec={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,n){var o,a={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)zc.call(t,o)&&!Ec.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)a[o]===void 0&&(a[o]=l[o]);return{$$typeof:Pn,type:e,key:s,ref:i,props:a,_owner:Os.current}}function um(e,t){return{$$typeof:Pn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pn}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ji=/\/+/g;function la(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function ro(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Pn:case em:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+la(i,0):o,Ki(a)?(n="",e!=null&&(n=e.replace(Ji,"$&/")+"/"),ro(a,t,n,"",function(d){return d})):a!=null&&(Bs(a)&&(a=um(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Ji,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Ki(e))for(var l=0;l<e.length;l++){s=e[l];var c=o+la(s,l);i+=ro(s,t,n,c,a)}else if(c=dm(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=o+la(s,l++),i+=ro(s,t,n,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Dn(e,t,n){if(e==null)return e;var o=[],a=0;return ro(e,o,"","",function(s){return t.call(n,s,a++)}),o}function pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},no={transition:null},fm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:no,ReactCurrentOwner:Os};Q.Children={map:Dn,forEach:function(e,t,n){Dn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Dn(e,function(){t++}),t},toArray:function(e){return Dn(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Ar;Q.Fragment=tm;Q.Profiler=nm;Q.PureComponent=As;Q.StrictMode=rm;Q.Suspense=im;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fm;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=Nc({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Os.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)zc.call(t,c)&&!Ec.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:Pn,type:e.type,key:a,ref:s,props:o,_owner:i}};Q.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:om,_context:e},e.Consumer=e};Q.createElement=Ic;Q.createFactory=function(e){var t=Ic.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:sm,render:e}};Q.isValidElement=Bs;Q.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:pm}};Q.memo=function(e,t){return{$$typeof:lm,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=no.transition;no.transition={};try{e()}finally{no.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Ie.current.useCallback(e,t)};Q.useContext=function(e){return Ie.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ie.current.useEffect(e,t)};Q.useId=function(){return Ie.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ie.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};Q.useRef=function(e){return Ie.current.useRef(e)};Q.useState=function(e){return Ie.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ie.current.useTransition()};Q.version="18.2.0";jc.exports=Q;var x=jc.exports;const Rc=Zu(x),hm=Xu({__proto__:null,default:Rc},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=x,xm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,ym=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wm={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var o,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)bm.call(t,o)&&!wm.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:xm,type:e,key:s,ref:i,props:a,_owner:ym.current}}Wo.Fragment=vm;Wo.jsx=Pc;Wo.jsxs=Pc;wc.exports=Wo;var r=wc.exports,Tc={exports:{}},Ue={},Lc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,_){var z=C.length;C.push(_);e:for(;0<z;){var M=z-1>>>1,$=C[M];if(0<a($,_))C[M]=_,C[z]=$,z=M;else break e}}function n(C){return C.length===0?null:C[0]}function o(C){if(C.length===0)return null;var _=C[0],z=C.pop();if(z!==_){C[0]=z;e:for(var M=0,$=C.length,I=$>>>1;M<I;){var D=2*(M+1)-1,L=C[D],H=D+1,Z=C[H];if(0>a(L,z))H<$&&0>a(Z,L)?(C[M]=Z,C[H]=z,M=H):(C[M]=L,C[D]=z,M=D);else if(H<$&&0>a(Z,z))C[M]=Z,C[H]=z,M=H;else break e}}return _}function a(C,_){var z=C.sortIndex-_.sortIndex;return z!==0?z:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],d=[],f=1,m=null,u=3,v=!1,S=!1,k=!1,y=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var _=n(d);_!==null;){if(_.callback===null)o(d);else if(_.startTime<=C)o(d),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(d)}}function j(C){if(k=!1,g(C),!S)if(n(c)!==null)S=!0,V(E);else{var _=n(d);_!==null&&Y(j,_.startTime-C)}}function E(C,_){S=!1,k&&(k=!1,h(N),N=-1),v=!0;var z=u;try{for(g(_),m=n(c);m!==null&&(!(m.expirationTime>_)||C&&!A());){var M=m.callback;if(typeof M=="function"){m.callback=null,u=m.priorityLevel;var $=M(m.expirationTime<=_);_=e.unstable_now(),typeof $=="function"?m.callback=$:m===n(c)&&o(c),g(_)}else o(c);m=n(c)}if(m!==null)var I=!0;else{var D=n(d);D!==null&&Y(j,D.startTime-_),I=!1}return I}finally{m=null,u=z,v=!1}}var b=!1,w=null,N=-1,R=5,T=-1;function A(){return!(e.unstable_now()-T<R)}function O(){if(w!==null){var C=e.unstable_now();T=C;var _=!0;try{_=w(!0,C)}finally{_?U():(b=!1,w=null)}}else b=!1}var U;if(typeof p=="function")U=function(){p(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,K=W.port2;W.port1.onmessage=O,U=function(){K.postMessage(null)}}else U=function(){y(O,0)};function V(C){w=C,b||(b=!0,U())}function Y(C,_){N=y(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,V(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(u){case 1:case 2:case 3:var _=3;break;default:_=u}var z=u;u=_;try{return C()}finally{u=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=u;u=C;try{return _()}finally{u=z}},e.unstable_scheduleCallback=function(C,_,z){var M=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?M+z:M):z=M,C){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=z+$,C={id:f++,callback:_,priorityLevel:C,startTime:z,expirationTime:$,sortIndex:-1},z>M?(C.sortIndex=z,t(d,C),n(c)===null&&C===n(d)&&(k?(h(N),N=-1):k=!0,Y(j,z-M))):(C.sortIndex=$,t(c,C),S||v||(S=!0,V(E))),C},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(C){var _=u;return function(){var z=u;u=_;try{return C.apply(this,arguments)}finally{u=z}}}})(_c);Lc.exports=_c;var jm=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=x,He=jm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mc=new Set,un={};function cr(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(un[e]=t,e=0;e<t.length;e++)Mc.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,km=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xi={},Zi={};function Nm(e){return Ma.call(Zi,e)?!0:Ma.call(Xi,e)?!1:km.test(e)?Zi[e]=!0:(Xi[e]=!0,!1)}function Sm(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,t,n,o){if(t===null||typeof t>"u"||Sm(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,o,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Us);we[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Us);we[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Us);we[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,n,o){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cm(t,n,a,o)&&(n=null),o||a===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var kt=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,An=Symbol.for("react.element"),pr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Vs=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),$c=Symbol.for("react.offscreen"),el=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ca;function Jr(e){if(ca===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ca=t&&t[1]||""}return`
`+ca+e}var da=!1;function ua(e,t){if(!e||da)return"";da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function zm(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=ua(e.type,!1),e;case 11:return e=ua(e.type.render,!1),e;case 1:return e=ua(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case pr:return"Portal";case Da:return"Profiler";case Vs:return"StrictMode";case Aa:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function Em(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e){var t=Oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $n(e){e._valueTracker||(e._valueTracker=Im(e))}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Oc(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ba(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hc(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Ha(e,t){Hc(e,t);var n=Ht(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ua(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ua(e,t,n){(t!=="number"||go(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function Sr(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Xr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Uc(e,t){var n=Ht(t.value),o=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function ol(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var On,Vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(On=On||document.createElement("div"),On.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=On.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(tn).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tn[t]=tn[e]})});function Yc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tn.hasOwnProperty(e)&&tn[e]?(""+t).trim():t+"px"}function qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=Yc(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Pm=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function Qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,Cr=null,zr=null;function al(e){if(e=_n(e)){if(typeof Ga!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Go(t),Ga(e.stateNode,e.type,t))}}function Qc(e){Cr?zr?zr.push(e):zr=[e]:Cr=e}function Gc(){if(Cr){var e=Cr,t=zr;if(zr=Cr=null,al(e),t)for(e=0;e<t.length;e++)al(t[e])}}function Kc(e,t){return e(t)}function Jc(){}var ma=!1;function Xc(e,t,n){if(ma)return e(t,n);ma=!0;try{return Kc(e,t,n)}finally{ma=!1,(Cr!==null||zr!==null)&&(Jc(),Gc())}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var o=Go(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ka=!1;if(bt)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Ka=!1}function Tm(e,t,n,o,a,s,i,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var rn=!1,xo=null,vo=!1,Ja=null,Lm={onError:function(e){rn=!0,xo=e}};function _m(e,t,n,o,a,s,i,l,c){rn=!1,xo=null,Tm.apply(Lm,arguments)}function Fm(e,t,n,o,a,s,i,l,c){if(_m.apply(this,arguments),rn){if(rn){var d=xo;rn=!1,xo=null}else throw Error(P(198));vo||(vo=!0,Ja=d)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sl(e){if(dr(e)!==e)throw Error(P(188))}function Mm(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return sl(a),e;if(s===o)return sl(a),t;s=s.sibling}throw Error(P(188))}if(n.return!==o.return)n=a,o=s;else{for(var i=!1,l=a.child;l;){if(l===n){i=!0,n=a,o=s;break}if(l===o){i=!0,o=a,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,o=a;break}if(l===o){i=!0,o=s,n=a;break}l=l.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==o)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function ed(e){return e=Mm(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var rd=He.unstable_scheduleCallback,il=He.unstable_cancelCallback,Dm=He.unstable_shouldYield,Am=He.unstable_requestPaint,me=He.unstable_now,$m=He.unstable_getCurrentPriorityLevel,Gs=He.unstable_ImmediatePriority,nd=He.unstable_UserBlockingPriority,bo=He.unstable_NormalPriority,Om=He.unstable_LowPriority,od=He.unstable_IdlePriority,Vo=null,lt=null;function Bm(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Wm,Hm=Math.log,Um=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Hm(e)/Um|0)|0}var Bn=64,Hn=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~a;l!==0?o=Zr(l):(s&=i,s!==0&&(o=Zr(s)))}else i=n&~a,i!==0?o=Zr(i):s!==0&&(o=Zr(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-tt(t),a=1<<n,o|=e[n],t&=~a;return o}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-tt(s),l=1<<i,c=a[i];c===-1?(!(l&n)||l&o)&&(a[i]=Vm(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ad(){var e=Bn;return Bn<<=1,!(Bn&4194240)&&(Bn=64),e}function pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tt(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function Ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-tt(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var J=0;function sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var id,Js,ld,cd,dd,Za=!1,Un=[],Lt=null,_t=null,Ft=null,fn=new Map,hn=new Map,Et=[],Qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ll(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function Vr(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=_n(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Gm(e,t,n,o,a){switch(t){case"focusin":return Lt=Vr(Lt,e,t,n,o,a),!0;case"dragenter":return _t=Vr(_t,e,t,n,o,a),!0;case"mouseover":return Ft=Vr(Ft,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return fn.set(s,Vr(fn.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,hn.set(s,Vr(hn.get(s)||null,e,t,n,o,a)),!0}return!1}function ud(e){var t=Jt(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Qa=o,n.target.dispatchEvent(o),Qa=null}else return t=_n(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function cl(e,t,n){oo(e)&&n.delete(t)}function Km(){Za=!1,Lt!==null&&oo(Lt)&&(Lt=null),_t!==null&&oo(_t)&&(_t=null),Ft!==null&&oo(Ft)&&(Ft=null),fn.forEach(cl),hn.forEach(cl)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Za||(Za=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Km)))}function gn(e){function t(a){return Yr(a,e)}if(0<Un.length){Yr(Un[0],e);for(var n=1;n<Un.length;n++){var o=Un[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Lt!==null&&Yr(Lt,e),_t!==null&&Yr(_t,e),Ft!==null&&Yr(Ft,e),fn.forEach(t),hn.forEach(t),n=0;n<Et.length;n++)o=Et[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&Et.shift()}var Er=kt.ReactCurrentBatchConfig,wo=!0;function Jm(e,t,n,o){var a=J,s=Er.transition;Er.transition=null;try{J=1,Xs(e,t,n,o)}finally{J=a,Er.transition=s}}function Xm(e,t,n,o){var a=J,s=Er.transition;Er.transition=null;try{J=4,Xs(e,t,n,o)}finally{J=a,Er.transition=s}}function Xs(e,t,n,o){if(wo){var a=es(e,t,n,o);if(a===null)ka(e,t,o,jo,n),ll(e,o);else if(Gm(a,e,t,n,o))o.stopPropagation();else if(ll(e,o),t&4&&-1<Qm.indexOf(e)){for(;a!==null;){var s=_n(a);if(s!==null&&id(s),s=es(e,t,n,o),s===null&&ka(e,t,o,jo,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else ka(e,t,o,null,n)}}var jo=null;function es(e,t,n,o){if(jo=null,e=Qs(o),e=Jt(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function md(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case Gs:return 1;case nd:return 4;case bo:case Om:return 16;case od:return 536870912;default:return 16}default:return 16}}var Rt=null,Zs=null,ao=null;function pd(){if(ao)return ao;var e,t=Zs,n=t.length,o,a="value"in Rt?Rt.value:Rt.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[s-o];o++);return ao=a.slice(e,1<o?1-o:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function dl(){return!1}function We(e){function t(n,o,a,s,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wn:dl,this.isPropagationStopped=dl,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=We($r),Ln=ce({},$r,{view:0,detail:0}),Zm=We(Ln),fa,ha,qr,Yo=ce({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(fa=e.screenX-qr.screenX,ha=e.screenY-qr.screenY):ha=fa=0,qr=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),ul=We(Yo),ep=ce({},Yo,{dataTransfer:0}),tp=We(ep),rp=ce({},Ln,{relatedTarget:0}),ga=We(rp),np=ce({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),op=We(np),ap=ce({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sp=We(ap),ip=ce({},$r,{data:0}),ml=We(ip),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dp[e])?!!t[e]:!1}function ti(){return up}var mp=ce({},Ln,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=We(mp),fp=ce({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pl=We(fp),hp=ce({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),gp=We(hp),xp=ce({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=We(xp),bp=ce({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=We(bp),wp=[9,13,27,32],ri=bt&&"CompositionEvent"in window,nn=null;bt&&"documentMode"in document&&(nn=document.documentMode);var jp=bt&&"TextEvent"in window&&!nn,fd=bt&&(!ri||nn&&8<nn&&11>=nn),fl=" ",hl=!1;function hd(e,t){switch(e){case"keyup":return wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function kp(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(hl=!0,fl);case"textInput":return e=t.data,e===fl&&hl?null:e;default:return null}}function Np(e,t){if(hr)return e==="compositionend"||!ri&&hd(e,t)?(e=pd(),ao=Zs=Rt=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function xd(e,t,n,o){Qc(o),t=ko(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var on=null,xn=null;function Cp(e){Ed(e,0)}function qo(e){var t=vr(e);if(Bc(t))return e}function zp(e,t){if(e==="change")return t}var vd=!1;if(bt){var xa;if(bt){var va="oninput"in document;if(!va){var xl=document.createElement("div");xl.setAttribute("oninput","return;"),va=typeof xl.oninput=="function"}xa=va}else xa=!1;vd=xa&&(!document.documentMode||9<document.documentMode)}function vl(){on&&(on.detachEvent("onpropertychange",bd),xn=on=null)}function bd(e){if(e.propertyName==="value"&&qo(xn)){var t=[];xd(t,xn,e,Qs(e)),Xc(Cp,t)}}function Ep(e,t,n){e==="focusin"?(vl(),on=t,xn=n,on.attachEvent("onpropertychange",bd)):e==="focusout"&&vl()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(xn)}function Rp(e,t){if(e==="click")return qo(t)}function Pp(e,t){if(e==="input"||e==="change")return qo(t)}function Tp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Tp;function vn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Ma.call(t,a)||!nt(e[a],t[a]))return!1}return!0}function bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yl(e,t){var n=bl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bl(n)}}function yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=go();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=go(e.document)}return t}function ni(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lp(e){var t=wd(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yd(n.ownerDocument.documentElement,n)){if(o!==null&&ni(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=yl(n,s);var i=yl(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _p=bt&&"documentMode"in document&&11>=document.documentMode,gr=null,ts=null,an=null,rs=!1;function wl(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||gr==null||gr!==go(o)||(o=gr,"selectionStart"in o&&ni(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),an&&vn(an,o)||(an=o,o=ko(ts,"onSelect"),0<o.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=gr)))}function Vn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionend:Vn("Transition","TransitionEnd")},ba={},jd={};bt&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Qo(e){if(ba[e])return ba[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return ba[e]=t[n];return e}var kd=Qo("animationend"),Nd=Qo("animationiteration"),Sd=Qo("animationstart"),Cd=Qo("transitionend"),zd=new Map,jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){zd.set(e,t),cr(t,[e])}for(var ya=0;ya<jl.length;ya++){var wa=jl[ya],Fp=wa.toLowerCase(),Mp=wa[0].toUpperCase()+wa.slice(1);Vt(Fp,"on"+Mp)}Vt(kd,"onAnimationEnd");Vt(Nd,"onAnimationIteration");Vt(Sd,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Cd,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(en));function kl(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Fm(o,t,void 0,e),e.currentTarget=null}function Ed(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;kl(a,l,d),s=c}else for(i=0;i<o.length;i++){if(l=o[i],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;kl(a,l,d),s=c}}}if(vo)throw e=Ja,vo=!1,Ja=null,e}function oe(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var o=e+"__bubble";n.has(o)||(Id(t,e,2,!1),n.add(o))}function ja(e,t,n){var o=0;t&&(o|=4),Id(n,e,o,t)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[Yn]){e[Yn]=!0,Mc.forEach(function(n){n!=="selectionchange"&&(Dp.has(n)||ja(n,!1,e),ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yn]||(t[Yn]=!0,ja("selectionchange",!1,t))}}function Id(e,t,n,o){switch(md(t)){case 1:var a=Jm;break;case 4:a=Xm;break;default:a=Xs}n=a.bind(null,t,n,e),a=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ka(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=Jt(l),i===null)return;if(c=i.tag,c===5||c===6){o=s=i;continue e}l=l.parentNode}}o=o.return}Xc(function(){var d=s,f=Qs(n),m=[];e:{var u=zd.get(e);if(u!==void 0){var v=ei,S=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":v=pp;break;case"focusin":S="focus",v=ga;break;case"focusout":S="blur",v=ga;break;case"beforeblur":case"afterblur":v=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=gp;break;case kd:case Nd:case Sd:v=op;break;case Cd:v=vp;break;case"scroll":v=Zm;break;case"wheel":v=yp;break;case"copy":case"cut":case"paste":v=sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=pl}var k=(t&4)!==0,y=!k&&e==="scroll",h=k?u!==null?u+"Capture":null:u;k=[];for(var p=d,g;p!==null;){g=p;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,h!==null&&(j=pn(p,h),j!=null&&k.push(yn(p,j,g)))),y)break;p=p.return}0<k.length&&(u=new v(u,S,null,n,f),m.push({event:u,listeners:k}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",u&&n!==Qa&&(S=n.relatedTarget||n.fromElement)&&(Jt(S)||S[yt]))break e;if((v||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=d,S=S?Jt(S):null,S!==null&&(y=dr(S),S!==y||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=d),v!==S)){if(k=ul,j="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=pl,j="onPointerLeave",h="onPointerEnter",p="pointer"),y=v==null?u:vr(v),g=S==null?u:vr(S),u=new k(j,p+"leave",v,n,f),u.target=y,u.relatedTarget=g,j=null,Jt(f)===d&&(k=new k(h,p+"enter",S,n,f),k.target=g,k.relatedTarget=y,j=k),y=j,v&&S)t:{for(k=v,h=S,p=0,g=k;g;g=mr(g))p++;for(g=0,j=h;j;j=mr(j))g++;for(;0<p-g;)k=mr(k),p--;for(;0<g-p;)h=mr(h),g--;for(;p--;){if(k===h||h!==null&&k===h.alternate)break t;k=mr(k),h=mr(h)}k=null}else k=null;v!==null&&Nl(m,u,v,k,!1),S!==null&&y!==null&&Nl(m,y,S,k,!0)}}e:{if(u=d?vr(d):window,v=u.nodeName&&u.nodeName.toLowerCase(),v==="select"||v==="input"&&u.type==="file")var E=zp;else if(gl(u))if(vd)E=Pp;else{E=Ip;var b=Ep}else(v=u.nodeName)&&v.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(E=Rp);if(E&&(E=E(e,d))){xd(m,E,n,f);break e}b&&b(e,u,d),e==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&Ua(u,"number",u.value)}switch(b=d?vr(d):window,e){case"focusin":(gl(b)||b.contentEditable==="true")&&(gr=b,ts=d,an=null);break;case"focusout":an=ts=gr=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,wl(m,n,f);break;case"selectionchange":if(_p)break;case"keydown":case"keyup":wl(m,n,f)}var w;if(ri)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else hr?hd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(fd&&n.locale!=="ko"&&(hr||N!=="onCompositionStart"?N==="onCompositionEnd"&&hr&&(w=pd()):(Rt=f,Zs="value"in Rt?Rt.value:Rt.textContent,hr=!0)),b=ko(d,N),0<b.length&&(N=new ml(N,e,null,n,f),m.push({event:N,listeners:b}),w?N.data=w:(w=gd(n),w!==null&&(N.data=w)))),(w=jp?kp(e,n):Np(e,n))&&(d=ko(d,"onBeforeInput"),0<d.length&&(f=new ml("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=w))}Ed(m,t)})}function yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=pn(e,n),s!=null&&o.unshift(yn(e,s,a)),s=pn(e,t),s!=null&&o.push(yn(e,s,a))),e=e.return}return o}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nl(e,t,n,o,a){for(var s=t._reactName,i=[];n!==null&&n!==o;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===o)break;l.tag===5&&d!==null&&(l=d,a?(c=pn(n,s),c!=null&&i.unshift(yn(n,c,l))):a||(c=pn(n,s),c!=null&&i.push(yn(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ap=/\r\n?/g,$p=/\u0000|\uFFFD/g;function Sl(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace($p,"")}function qn(e,t,n){if(t=Sl(t),Sl(e)!==t&&n)throw Error(P(425))}function No(){}var ns=null,os=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,Op=typeof clearTimeout=="function"?clearTimeout:void 0,Cl=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cl<"u"?function(e){return Cl.resolve(null).then(e).catch(Hp)}:ss;function Hp(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),gn(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);gn(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),it="__reactFiber$"+Or,wn="__reactProps$"+Or,yt="__reactContainer$"+Or,is="__reactEvents$"+Or,Up="__reactListeners$"+Or,Wp="__reactHandles$"+Or;function Jt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zl(e);e!==null;){if(n=e[it])return n;e=zl(e)}return t}e=n,n=e.parentNode}return null}function _n(e){return e=e[it]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Go(e){return e[wn]||null}var ls=[],br=-1;function Yt(e){return{current:e}}function ae(e){0>br||(e.current=ls[br],ls[br]=null,br--)}function ne(e,t){br++,ls[br]=e.current,e.current=t}var Ut={},Ce=Yt(Ut),Fe=Yt(!1),or=Ut;function Tr(e,t){var n=e.type.contextTypes;if(!n)return Ut;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Me(e){return e=e.childContextTypes,e!=null}function So(){ae(Fe),ae(Ce)}function El(e,t,n){if(Ce.current!==Ut)throw Error(P(168));ne(Ce,t),ne(Fe,n)}function Rd(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(P(108,Em(e)||"Unknown",a));return ce({},n,o)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,or=Ce.current,ne(Ce,e),ne(Fe,Fe.current),!0}function Il(e,t,n){var o=e.stateNode;if(!o)throw Error(P(169));n?(e=Rd(e,t,or),o.__reactInternalMemoizedMergedChildContext=e,ae(Fe),ae(Ce),ne(Ce,e)):ae(Fe),ne(Fe,n)}var ft=null,Ko=!1,Sa=!1;function Pd(e){ft===null?ft=[e]:ft.push(e)}function Vp(e){Ko=!0,Pd(e)}function qt(){if(!Sa&&ft!==null){Sa=!0;var e=0,t=J;try{var n=ft;for(J=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}ft=null,Ko=!1}catch(a){throw ft!==null&&(ft=ft.slice(e+1)),rd(Gs,qt),a}finally{J=t,Sa=!1}}return null}var yr=[],wr=0,zo=null,Eo=0,Ve=[],Ye=0,ar=null,ht=1,gt="";function Gt(e,t){yr[wr++]=Eo,yr[wr++]=zo,zo=e,Eo=t}function Td(e,t,n){Ve[Ye++]=ht,Ve[Ye++]=gt,Ve[Ye++]=ar,ar=e;var o=ht;e=gt;var a=32-tt(o)-1;o&=~(1<<a),n+=1;var s=32-tt(t)+a;if(30<s){var i=a-a%5;s=(o&(1<<i)-1).toString(32),o>>=i,a-=i,ht=1<<32-tt(t)+a|n<<a|o,gt=s+e}else ht=1<<s|n<<a|o,gt=e}function oi(e){e.return!==null&&(Gt(e,1),Td(e,1,0))}function ai(e){for(;e===zo;)zo=yr[--wr],yr[wr]=null,Eo=yr[--wr],yr[wr]=null;for(;e===ar;)ar=Ve[--Ye],Ve[Ye]=null,gt=Ve[--Ye],Ve[Ye]=null,ht=Ve[--Ye],Ve[Ye]=null}var Be=null,Oe=null,se=!1,et=null;function Ld(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Oe=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:ht,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Oe=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(se){var t=Oe;if(t){var n=t;if(!Rl(e,t)){if(cs(e))throw Error(P(418));t=Mt(n.nextSibling);var o=Be;t&&Rl(e,t)?Ld(o,n):(e.flags=e.flags&-4097|2,se=!1,Be=e)}}else{if(cs(e))throw Error(P(418));e.flags=e.flags&-4097|2,se=!1,Be=e}}}function Pl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Qn(e){if(e!==Be)return!1;if(!se)return Pl(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=Oe)){if(cs(e))throw _d(),Error(P(418));for(;t;)Ld(e,t),t=Mt(t.nextSibling)}if(Pl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Be?Mt(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=Oe;e;)e=Mt(e.nextSibling)}function Lr(){Oe=Be=null,se=!1}function si(e){et===null?et=[e]:et.push(e)}var Yp=kt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Io=Yt(null),Ro=null,jr=null,ii=null;function li(){ii=jr=Ro=null}function ci(e){var t=Io.current;ae(Io),e._currentValue=t}function us(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){Ro=e,ii=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ii!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Ro===null)throw Error(P(308));jr=e,Ro.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Xt=null;function di(e){Xt===null?Xt=[e]:Xt.push(e)}function Fd(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,di(t)):(n.next=a.next,a.next=n),t.interleaved=n,wt(e,o)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,G&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,wt(e,n)}return a=o.interleaved,a===null?(t.next=t,di(o)):(t.next=a.next,a.next=t),o.interleaved=t,wt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ks(e,n)}}function Tl(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,o){var a=e.updateQueue;zt=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,i===null?s=d:i.next=d,i=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(s!==null){var m=a.baseState;i=0,f=d=c=null,l=s;do{var u=l.lane,v=l.eventTime;if((o&u)===u){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,k=l;switch(u=t,v=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){m=S.call(v,m,u);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,u=typeof S=="function"?S.call(v,m,u):S,u==null)break e;m=ce({},m,u);break e;case 2:zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,u=a.effects,u===null?a.effects=[l]:u.push(l))}else v={eventTime:v,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=v,c=m):f=f.next=v,i|=u;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;u=l,l=u.next,u.next=null,a.lastBaseUpdate=u,a.shared.pending=null}}while(!0);if(f===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);ir|=i,e.lanes=i,e.memoizedState=m}}function Ll(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(P(191,a));a.call(o)}}}var Dd=new Fc.Component().refs;function ms(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ee(),a=$t(e),s=xt(o,a);s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,a),t!==null&&(rt(t,e,a,o),io(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ee(),a=$t(e),s=xt(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Dt(e,s,a),t!==null&&(rt(t,e,a,o),io(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),o=$t(e),a=xt(n,o);a.tag=2,t!=null&&(a.callback=t),t=Dt(e,a,o),t!==null&&(rt(t,e,o,n),io(t,e,o))}};function _l(e,t,n,o,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!vn(n,o)||!vn(a,s):!0}function Ad(e,t,n){var o=!1,a=Ut,s=t.contextType;return typeof s=="object"&&s!==null?s=Ge(s):(a=Me(t)?or:Ce.current,o=t.contextTypes,s=(o=o!=null)?Tr(e,a):Ut),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Fl(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Dd,ui(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Ge(s):(s=Me(t)?or:Ce.current,a.context=Tr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ms(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Jo.enqueueReplaceState(a,a.state,null),Po(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var o=n.stateNode}if(!o)throw Error(P(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;l===Dd&&(l=a.refs={}),i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Gn(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ml(e){var t=e._init;return t(e._payload)}function $d(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function o(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function a(h,p){return h=Ot(h,p),h.index=0,h.sibling=null,h}function s(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,j){return p===null||p.tag!==6?(p=Ta(g,h.mode,j),p.return=h,p):(p=a(p,g),p.return=h,p)}function c(h,p,g,j){var E=g.type;return E===fr?f(h,p,g.props.children,j,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&Ml(E)===p.type)?(j=a(p,g.props),j.ref=Qr(h,p,g),j.return=h,j):(j=fo(g.type,g.key,g.props,null,h.mode,j),j.ref=Qr(h,p,g),j.return=h,j)}function d(h,p,g,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=La(g,h.mode,j),p.return=h,p):(p=a(p,g.children||[]),p.return=h,p)}function f(h,p,g,j,E){return p===null||p.tag!==7?(p=rr(g,h.mode,j,E),p.return=h,p):(p=a(p,g),p.return=h,p)}function m(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ta(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case An:return g=fo(p.type,p.key,p.props,null,h.mode,g),g.ref=Qr(h,null,p),g.return=h,g;case pr:return p=La(p,h.mode,g),p.return=h,p;case Ct:var j=p._init;return m(h,j(p._payload),g)}if(Xr(p)||Ur(p))return p=rr(p,h.mode,g,null),p.return=h,p;Gn(h,p)}return null}function u(h,p,g,j){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(h,p,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case An:return g.key===E?c(h,p,g,j):null;case pr:return g.key===E?d(h,p,g,j):null;case Ct:return E=g._init,u(h,p,E(g._payload),j)}if(Xr(g)||Ur(g))return E!==null?null:f(h,p,g,j,null);Gn(h,g)}return null}function v(h,p,g,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return h=h.get(g)||null,l(p,h,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case An:return h=h.get(j.key===null?g:j.key)||null,c(p,h,j,E);case pr:return h=h.get(j.key===null?g:j.key)||null,d(p,h,j,E);case Ct:var b=j._init;return v(h,p,g,b(j._payload),E)}if(Xr(j)||Ur(j))return h=h.get(g)||null,f(p,h,j,E,null);Gn(p,j)}return null}function S(h,p,g,j){for(var E=null,b=null,w=p,N=p=0,R=null;w!==null&&N<g.length;N++){w.index>N?(R=w,w=null):R=w.sibling;var T=u(h,w,g[N],j);if(T===null){w===null&&(w=R);break}e&&w&&T.alternate===null&&t(h,w),p=s(T,p,N),b===null?E=T:b.sibling=T,b=T,w=R}if(N===g.length)return n(h,w),se&&Gt(h,N),E;if(w===null){for(;N<g.length;N++)w=m(h,g[N],j),w!==null&&(p=s(w,p,N),b===null?E=w:b.sibling=w,b=w);return se&&Gt(h,N),E}for(w=o(h,w);N<g.length;N++)R=v(w,h,N,g[N],j),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?N:R.key),p=s(R,p,N),b===null?E=R:b.sibling=R,b=R);return e&&w.forEach(function(A){return t(h,A)}),se&&Gt(h,N),E}function k(h,p,g,j){var E=Ur(g);if(typeof E!="function")throw Error(P(150));if(g=E.call(g),g==null)throw Error(P(151));for(var b=E=null,w=p,N=p=0,R=null,T=g.next();w!==null&&!T.done;N++,T=g.next()){w.index>N?(R=w,w=null):R=w.sibling;var A=u(h,w,T.value,j);if(A===null){w===null&&(w=R);break}e&&w&&A.alternate===null&&t(h,w),p=s(A,p,N),b===null?E=A:b.sibling=A,b=A,w=R}if(T.done)return n(h,w),se&&Gt(h,N),E;if(w===null){for(;!T.done;N++,T=g.next())T=m(h,T.value,j),T!==null&&(p=s(T,p,N),b===null?E=T:b.sibling=T,b=T);return se&&Gt(h,N),E}for(w=o(h,w);!T.done;N++,T=g.next())T=v(w,h,N,T.value,j),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?N:T.key),p=s(T,p,N),b===null?E=T:b.sibling=T,b=T);return e&&w.forEach(function(O){return t(h,O)}),se&&Gt(h,N),E}function y(h,p,g,j){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case An:e:{for(var E=g.key,b=p;b!==null;){if(b.key===E){if(E=g.type,E===fr){if(b.tag===7){n(h,b.sibling),p=a(b,g.props.children),p.return=h,h=p;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&Ml(E)===b.type){n(h,b.sibling),p=a(b,g.props),p.ref=Qr(h,b,g),p.return=h,h=p;break e}n(h,b);break}else t(h,b);b=b.sibling}g.type===fr?(p=rr(g.props.children,h.mode,j,g.key),p.return=h,h=p):(j=fo(g.type,g.key,g.props,null,h.mode,j),j.ref=Qr(h,p,g),j.return=h,h=j)}return i(h);case pr:e:{for(b=g.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=a(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=La(g,h.mode,j),p.return=h,h=p}return i(h);case Ct:return b=g._init,y(h,p,b(g._payload),j)}if(Xr(g))return S(h,p,g,j);if(Ur(g))return k(h,p,g,j);Gn(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=a(p,g),p.return=h,h=p):(n(h,p),p=Ta(g,h.mode,j),p.return=h,h=p),i(h)):n(h,p)}return y}var _r=$d(!0),Od=$d(!1),Fn={},ct=Yt(Fn),jn=Yt(Fn),kn=Yt(Fn);function Zt(e){if(e===Fn)throw Error(P(174));return e}function mi(e,t){switch(ne(kn,t),ne(jn,e),ne(ct,Fn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}ae(ct),ne(ct,t)}function Fr(){ae(ct),ae(jn),ae(kn)}function Bd(e){Zt(kn.current);var t=Zt(ct.current),n=Va(t,e.type);t!==n&&(ne(jn,e),ne(ct,n))}function pi(e){jn.current===e&&(ae(ct),ae(jn))}var ie=Yt(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=[];function fi(){for(var e=0;e<Ca.length;e++)Ca[e]._workInProgressVersionPrimary=null;Ca.length=0}var lo=kt.ReactCurrentDispatcher,za=kt.ReactCurrentBatchConfig,sr=0,le=null,he=null,xe=null,Lo=!1,sn=!1,Nn=0,qp=0;function ke(){throw Error(P(321))}function hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function gi(e,t,n,o,a,s){if(sr=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?Jp:Xp,e=n(o,a),sn){s=0;do{if(sn=!1,Nn=0,25<=s)throw Error(P(301));s+=1,xe=he=null,t.updateQueue=null,lo.current=Zp,e=n(o,a)}while(sn)}if(lo.current=_o,t=he!==null&&he.next!==null,sr=0,xe=he=le=null,Lo=!1,t)throw Error(P(300));return e}function xi(){var e=Nn!==0;return Nn=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?le.memoizedState=xe=e:xe=xe.next=e,xe}function Ke(){if(he===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=xe===null?le.memoizedState:xe.next;if(t!==null)xe=t,he=e;else{if(e===null)throw Error(P(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},xe===null?le.memoizedState=xe=e:xe=xe.next=e}return xe}function Sn(e,t){return typeof t=="function"?t(e):t}function Ea(e){var t=Ke(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var o=he,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var l=i=null,c=null,d=s;do{var f=d.lane;if((sr&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,i=o):c=c.next=m,le.lanes|=f,ir|=f}d=d.next}while(d!==null&&d!==s);c===null?i=o:c.next=l,nt(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=c,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,le.lanes|=s,ir|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ia(e){var t=Ke(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);nt(s,t.memoizedState)||(_e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function Hd(){}function Ud(e,t){var n=le,o=Ke(),a=t(),s=!nt(o.memoizedState,a);if(s&&(o.memoizedState=a,_e=!0),o=o.queue,vi(Yd.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Cn(9,Vd.bind(null,n,o,a,t),void 0,null),ve===null)throw Error(P(349));sr&30||Wd(n,t,a)}return a}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,o){t.value=n,t.getSnapshot=o,qd(t)&&Qd(e)}function Yd(e,t,n){return n(function(){qd(t)&&Qd(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Qd(e){var t=wt(e,1);t!==null&&rt(t,e,1,-1)}function Dl(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t.queue=e,e=e.dispatch=Kp.bind(null,le,e),[t.memoizedState,e]}function Cn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Gd(){return Ke().memoizedState}function co(e,t,n,o){var a=st();le.flags|=e,a.memoizedState=Cn(1|t,n,void 0,o===void 0?null:o)}function Xo(e,t,n,o){var a=Ke();o=o===void 0?null:o;var s=void 0;if(he!==null){var i=he.memoizedState;if(s=i.destroy,o!==null&&hi(o,i.deps)){a.memoizedState=Cn(t,n,s,o);return}}le.flags|=e,a.memoizedState=Cn(1|t,n,s,o)}function Al(e,t){return co(8390656,8,e,t)}function vi(e,t){return Xo(2048,8,e,t)}function Kd(e,t){return Xo(4,2,e,t)}function Jd(e,t){return Xo(4,4,e,t)}function Xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4,4,Xd.bind(null,t,e),n)}function bi(){}function eu(e,t){var n=Ke();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&hi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function tu(e,t){var n=Ke();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&hi(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function ru(e,t,n){return sr&21?(nt(n,t)||(n=ad(),le.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function Qp(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var o=za.transition;za.transition={};try{e(!1),t()}finally{J=n,za.transition=o}}function nu(){return Ke().memoizedState}function Gp(e,t,n){var o=$t(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},ou(e))au(t,n);else if(n=Fd(e,t,n,o),n!==null){var a=Ee();rt(n,e,o,a),su(n,t,o)}}function Kp(e,t,n){var o=$t(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(ou(e))au(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(a.hasEagerState=!0,a.eagerState=l,nt(l,i)){var c=t.interleaved;c===null?(a.next=a,di(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Fd(e,t,a,o),n!==null&&(a=Ee(),rt(n,e,o,a),su(n,t,o))}}function ou(e){var t=e.alternate;return e===le||t!==null&&t===le}function au(e,t){sn=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function su(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Ks(e,n)}}var _o={readContext:Ge,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Jp={readContext:Ge,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Al,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,Xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=st();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Gp.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Dl,useDebugValue:bi,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Dl(!1),t=e[0];return e=Qp.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=le,a=st();if(se){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ve===null)throw Error(P(349));sr&30||Wd(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Al(Yd.bind(null,o,s,e),[e]),o.flags|=2048,Cn(9,Vd.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=st(),t=ve.identifierPrefix;if(se){var n=gt,o=ht;n=(o&~(1<<32-tt(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xp={readContext:Ge,useCallback:eu,useContext:Ge,useEffect:vi,useImperativeHandle:Zd,useInsertionEffect:Kd,useLayoutEffect:Jd,useMemo:tu,useReducer:Ea,useRef:Gd,useState:function(){return Ea(Sn)},useDebugValue:bi,useDeferredValue:function(e){var t=Ke();return ru(t,he.memoizedState,e)},useTransition:function(){var e=Ea(Sn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Ud,useId:nu,unstable_isNewReconciler:!1},Zp={readContext:Ge,useCallback:eu,useContext:Ge,useEffect:vi,useImperativeHandle:Zd,useInsertionEffect:Kd,useLayoutEffect:Jd,useMemo:tu,useReducer:Ia,useRef:Gd,useState:function(){return Ia(Sn)},useDebugValue:bi,useDeferredValue:function(e){var t=Ke();return he===null?t.memoizedState=e:ru(t,he.memoizedState,e)},useTransition:function(){var e=Ia(Sn)[0],t=Ke().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Ud,useId:nu,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",o=t;do n+=zm(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ef=typeof WeakMap=="function"?WeakMap:Map;function iu(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Mo||(Mo=!0,Ns=o),fs(e,t)},n}function lu(e,t,n){n=xt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){fs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fs(e,t),typeof o!="function"&&(At===null?At=new Set([this]):At.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function $l(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new ef;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function Ol(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bl(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var tf=kt.ReactCurrentOwner,_e=!1;function ze(e,t,n,o){t.child=e===null?Od(t,null,n,o):_r(t,e.child,n,o)}function Hl(e,t,n,o,a){n=n.render;var s=t.ref;return Ir(t,a),o=gi(e,t,n,o,s,a),n=xi(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,jt(e,t,a)):(se&&n&&oi(t),t.flags|=1,ze(e,t,o,a),t.child)}function Ul(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!zi(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,cu(e,t,s,o,a)):(e=fo(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:vn,n(i,o)&&e.ref===t.ref)return jt(e,t,a)}return t.flags|=1,e=Ot(s,o),e.ref=t.ref,e.return=t,t.child=e}function cu(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(vn(s,o)&&e.ref===t.ref)if(_e=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,jt(e,t,a)}return hs(e,t,n,o,a)}function du(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Nr,$e),$e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Nr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ne(Nr,$e),$e|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,ne(Nr,$e),$e|=o;return ze(e,t,a,n),t.child}function uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,o,a){var s=Me(n)?or:Ce.current;return s=Tr(t,s),Ir(t,a),n=gi(e,t,n,o,s,a),o=xi(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,jt(e,t,a)):(se&&o&&oi(t),t.flags|=1,ze(e,t,n,a),t.child)}function Wl(e,t,n,o,a){if(Me(n)){var s=!0;Co(t)}else s=!1;if(Ir(t,a),t.stateNode===null)uo(e,t),Ad(t,n,o),ps(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Me(n)?or:Ce.current,d=Tr(t,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||c!==d)&&Fl(t,i,o,d),zt=!1;var u=t.memoizedState;i.state=u,Po(t,o,i,a),c=t.memoizedState,l!==o||u!==c||Fe.current||zt?(typeof f=="function"&&(ms(t,n,f,o),c=t.memoizedState),(l=zt||_l(t,n,l,o,u,c,d))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=c),i.props=o,i.state=c,i.context=d,o=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,Md(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Xe(t.type,l),i.props=d,m=t.pendingProps,u=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ge(c):(c=Me(n)?or:Ce.current,c=Tr(t,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||u!==c)&&Fl(t,i,o,c),zt=!1,u=t.memoizedState,i.state=u,Po(t,o,i,a);var S=t.memoizedState;l!==m||u!==S||Fe.current||zt?(typeof v=="function"&&(ms(t,n,v,o),S=t.memoizedState),(d=zt||_l(t,n,d,o,u,S,c)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,S,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,S,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),i.props=o,i.state=S,i.context=c,o=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),o=!1)}return gs(e,t,n,o,s,a)}function gs(e,t,n,o,a,s){uu(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&Il(t,n,!1),jt(e,t,s);o=t.stateNode,tf.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=_r(t,e.child,null,s),t.child=_r(t,null,l,s)):ze(e,t,l,s),t.memoizedState=o.state,a&&Il(t,n,!0),t.child}function mu(e){var t=e.stateNode;t.pendingContext?El(e,t.pendingContext,t.pendingContext!==t.context):t.context&&El(e,t.context,!1),mi(e,t.containerInfo)}function Vl(e,t,n,o,a){return Lr(),si(a),t.flags|=256,ze(e,t,n,o),t.child}var xs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function pu(e,t,n){var o=t.pendingProps,a=ie.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ne(ie,a&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ta(i,o,0,null),e=rr(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vs(n),t.memoizedState=xs,e):yi(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return rf(e,t,i,o,l,a,n);if(s){s=o.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=c,t.deletions=null):(o=Ot(a,c),o.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=Ot(l,s):(s=rr(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?vs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=xs,o}return s=e.child,e=s.sibling,o=Ot(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function yi(e,t){return t=ta({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Kn(e,t,n,o){return o!==null&&si(o),_r(t,e.child,null,n),e=yi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,n,o,a,s,i){if(n)return t.flags&256?(t.flags&=-257,o=Ra(Error(P(422))),Kn(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=ta({mode:"visible",children:o.children},a,0,null),s=rr(s,a,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&_r(t,e.child,null,i),t.child.memoizedState=vs(i),t.memoizedState=xs,s);if(!(t.mode&1))return Kn(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(P(419)),o=Ra(s,o,void 0),Kn(e,t,i,o)}if(l=(i&e.childLanes)!==0,_e||l){if(o=ve,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,wt(e,a),rt(o,e,a,-1))}return Ci(),o=Ra(Error(P(421))),Kn(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=gf.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Oe=Mt(a.nextSibling),Be=t,se=!0,et=null,e!==null&&(Ve[Ye++]=ht,Ve[Ye++]=gt,Ve[Ye++]=ar,ht=e.id,gt=e.overflow,ar=t),t=yi(t,o.children),t.flags|=4096,t)}function Yl(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),us(e.return,t,n)}function Pa(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function fu(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(ze(e,t,o.children,n),o=ie.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yl(e,n,t);else if(e.tag===19)Yl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ne(ie,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Pa(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&To(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Pa(t,!0,n,null,s);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nf(e,t,n){switch(t.tag){case 3:mu(t),Lr();break;case 5:Bd(t);break;case 1:Me(t.type)&&Co(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;ne(Io,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(ne(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?pu(e,t,n):(ne(ie,ie.current&1),e=jt(e,t,n),e!==null?e.sibling:null);ne(ie,ie.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return fu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ne(ie,ie.current),o)break;return null;case 22:case 23:return t.lanes=0,du(e,t,n)}return jt(e,t,n)}var hu,bs,gu,xu;hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};gu=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Zt(ct.current);var s=null;switch(n){case"input":a=Ba(e,a),o=Ba(e,o),s=[];break;case"select":a=ce({},a,{value:void 0}),o=ce({},o,{value:void 0}),s=[];break;case"textarea":a=Wa(e,a),o=Wa(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=No)}Ya(n,o);var i;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(un.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var c=o[d];if(l=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(un.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&oe("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};xu=function(e,t,n,o){n!==o&&(t.flags|=4)};function Gr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function of(e,t,n){var o=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Me(t.type)&&So(),Ne(t),null;case 3:return o=t.stateNode,Fr(),ae(Fe),ae(Ce),fi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(zs(et),et=null))),bs(e,t),Ne(t),null;case 5:pi(t);var a=Zt(kn.current);if(n=t.type,e!==null&&t.stateNode!=null)gu(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(P(166));return Ne(t),null}if(e=Zt(ct.current),Qn(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[it]=t,o[wn]=s,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",o),oe("close",o);break;case"iframe":case"object":case"embed":oe("load",o);break;case"video":case"audio":for(a=0;a<en.length;a++)oe(en[a],o);break;case"source":oe("error",o);break;case"img":case"image":case"link":oe("error",o),oe("load",o);break;case"details":oe("toggle",o);break;case"input":tl(o,s),oe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},oe("invalid",o);break;case"textarea":nl(o,s),oe("invalid",o)}Ya(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&qn(o.textContent,l,e),a=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qn(o.textContent,l,e),a=["children",""+l]):un.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&oe("scroll",o)}switch(n){case"input":$n(o),rl(o,s,!0);break;case"textarea":$n(o),ol(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=No)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[it]=t,e[wn]=o,hu(e,t,!1,!1),t.stateNode=e;e:{switch(i=qa(n,o),n){case"dialog":oe("cancel",e),oe("close",e),a=o;break;case"iframe":case"object":case"embed":oe("load",e),a=o;break;case"video":case"audio":for(a=0;a<en.length;a++)oe(en[a],e);a=o;break;case"source":oe("error",e),a=o;break;case"img":case"image":case"link":oe("error",e),oe("load",e),a=o;break;case"details":oe("toggle",e),a=o;break;case"input":tl(e,o),a=Ba(e,o),oe("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=ce({},o,{value:void 0}),oe("invalid",e);break;case"textarea":nl(e,o),a=Wa(e,o),oe("invalid",e);break;default:a=o}Ya(n,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?qc(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vc(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&mn(e,c):typeof c=="number"&&mn(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(un.hasOwnProperty(s)?c!=null&&s==="onScroll"&&oe("scroll",e):c!=null&&Ws(e,s,c,i))}switch(n){case"input":$n(e),rl(e,o,!1);break;case"textarea":$n(e),ol(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Ht(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Sr(e,!!o.multiple,s,!1):o.defaultValue!=null&&Sr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(P(166));if(n=Zt(kn.current),Zt(ct.current),Qn(t)){if(o=t.stateNode,n=t.memoizedProps,o[it]=t,(s=o.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:qn(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qn(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[it]=t,t.stateNode=o}return Ne(t),null;case 13:if(ae(ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Oe!==null&&t.mode&1&&!(t.flags&128))_d(),Lr(),t.flags|=98560,s=!1;else if(s=Qn(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[it]=t}else Lr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else et!==null&&(zs(et),et=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ge===0&&(ge=3):Ci())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Fr(),bs(e,t),e===null&&bn(t.stateNode.containerInfo),Ne(t),null;case 10:return ci(t.type._context),Ne(t),null;case 17:return Me(t.type)&&So(),Ne(t),null;case 19:if(ae(ie),s=t.memoizedState,s===null)return Ne(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)Gr(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=To(e),i!==null){for(t.flags|=128,Gr(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&me()>Dr&&(t.flags|=128,o=!0,Gr(s,!1),t.lanes=4194304)}else{if(!o)if(e=To(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!se)return Ne(t),null}else 2*me()-s.renderingStartTime>Dr&&n!==1073741824&&(t.flags|=128,o=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=me(),t.sibling=null,n=ie.current,ne(ie,o?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Si(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?$e&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function af(e,t){switch(ai(t),t.tag){case 1:return Me(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),ae(Fe),ae(Ce),fi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pi(t),null;case 13:if(ae(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Lr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ie),null;case 4:return Fr(),null;case 10:return ci(t.type._context),null;case 22:case 23:return Si(),null;case 24:return null;default:return null}}var Jn=!1,Se=!1,sf=typeof WeakSet=="function"?WeakSet:Set,F=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){de(e,t,o)}else n.current=null}function ys(e,t,n){try{n()}catch(o){de(e,t,o)}}var ql=!1;function lf(e,t){if(ns=wo,e=wd(),ni(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,d=0,f=0,m=e,u=null;t:for(;;){for(var v;m!==n||a!==0&&m.nodeType!==3||(l=i+a),m!==s||o!==0&&m.nodeType!==3||(c=i+o),m.nodeType===3&&(i+=m.nodeValue.length),(v=m.firstChild)!==null;)u=m,m=v;for(;;){if(m===e)break t;if(u===n&&++d===a&&(l=i),u===s&&++f===o&&(c=i),(v=m.nextSibling)!==null)break;m=u,u=m.parentNode}m=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},wo=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,y=S.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:Xe(t.type,k),y);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){de(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return S=ql,ql=!1,S}function ln(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&ys(t,n,s)}a=a.next}while(a!==o)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[wn],delete t[is],delete t[Up],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bu(e){return e.tag===5||e.tag===3||e.tag===4}function Ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=No));else if(o!==4&&(e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}function ks(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var be=null,Ze=!1;function St(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Vo,n)}catch{}switch(n.tag){case 5:Se||kr(n,t);case 6:var o=be,a=Ze;be=null,St(e,t,n),be=o,Ze=a,be!==null&&(Ze?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Ze?(e=be,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),gn(e)):Na(be,n.stateNode));break;case 4:o=be,a=Ze,be=n.stateNode.containerInfo,Ze=!0,St(e,t,n),be=o,Ze=a;break;case 0:case 11:case 14:case 15:if(!Se&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&ys(n,t,i),a=a.next}while(a!==o)}St(e,t,n);break;case 1:if(!Se&&(kr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){de(n,t,l)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(Se=(o=Se)||n.memoizedState!==null,St(e,t,n),Se=o):St(e,t,n);break;default:St(e,t,n)}}function Gl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sf),t.forEach(function(o){var a=xf.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Ze=!1;break e;case 3:be=l.stateNode.containerInfo,Ze=!0;break e;case 4:be=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(be===null)throw Error(P(160));yu(s,i,a),be=null,Ze=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){de(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wu(t,e),t=t.sibling}function wu(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),at(e),o&4){try{ln(3,e,e.return),Zo(3,e)}catch(k){de(e,e.return,k)}try{ln(5,e,e.return)}catch(k){de(e,e.return,k)}}break;case 1:Je(t,e),at(e),o&512&&n!==null&&kr(n,n.return);break;case 5:if(Je(t,e),at(e),o&512&&n!==null&&kr(n,n.return),e.flags&32){var a=e.stateNode;try{mn(a,"")}catch(k){de(e,e.return,k)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hc(a,s),qa(l,i);var d=qa(l,s);for(i=0;i<c.length;i+=2){var f=c[i],m=c[i+1];f==="style"?qc(a,m):f==="dangerouslySetInnerHTML"?Vc(a,m):f==="children"?mn(a,m):Ws(a,f,m,d)}switch(l){case"input":Ha(a,s);break;case"textarea":Uc(a,s);break;case"select":var u=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Sr(a,!!s.multiple,v,!1):u!==!!s.multiple&&(s.defaultValue!=null?Sr(a,!!s.multiple,s.defaultValue,!0):Sr(a,!!s.multiple,s.multiple?[]:"",!1))}a[wn]=s}catch(k){de(e,e.return,k)}}break;case 6:if(Je(t,e),at(e),o&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(k){de(e,e.return,k)}}break;case 3:if(Je(t,e),at(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{gn(t.containerInfo)}catch(k){de(e,e.return,k)}break;case 4:Je(t,e),at(e);break;case 13:Je(t,e),at(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(ki=me())),o&4&&Gl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(d=Se)||f,Je(t,e),Se=d):Je(t,e),at(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(m=F=f;F!==null;){switch(u=F,v=u.child,u.tag){case 0:case 11:case 14:case 15:ln(4,u,u.return);break;case 1:kr(u,u.return);var S=u.stateNode;if(typeof S.componentWillUnmount=="function"){o=u,n=u.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(k){de(o,n,k)}}break;case 5:kr(u,u.return);break;case 22:if(u.memoizedState!==null){Jl(m);continue}}v!==null?(v.return=u,F=v):Jl(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{a=m.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Yc("display",i))}catch(k){de(e,e.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){de(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Je(t,e),at(e),o&4&&Gl(e);break;case 21:break;default:Je(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bu(n)){var o=n;break e}n=n.return}throw Error(P(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(mn(a,""),o.flags&=-33);var s=Ql(e);ks(e,s,a);break;case 3:case 4:var i=o.stateNode.containerInfo,l=Ql(e);js(e,l,i);break;default:throw Error(P(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cf(e,t,n){F=e,ju(e)}function ju(e,t,n){for(var o=(e.mode&1)!==0;F!==null;){var a=F,s=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||Jn;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Se;l=Jn;var d=Se;if(Jn=i,(Se=c)&&!d)for(F=a;F!==null;)i=F,c=i.child,i.tag===22&&i.memoizedState!==null?Xl(a):c!==null?(c.return=i,F=c):Xl(a);for(;s!==null;)F=s,ju(s),s=s.sibling;F=a,Jn=l,Se=d}Kl(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,F=s):Kl(e)}}function Kl(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Zo(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Se)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ll(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ll(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&gn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Se||t.flags&512&&ws(t)}catch(u){de(t,t.return,u)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Jl(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Xl(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(c){de(t,n,c)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(c){de(t,a,c)}}var s=t.return;try{ws(t)}catch(c){de(t,s,c)}break;case 5:var i=t.return;try{ws(t)}catch(c){de(t,i,c)}}}catch(c){de(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var df=Math.ceil,Fo=kt.ReactCurrentDispatcher,wi=kt.ReactCurrentOwner,Qe=kt.ReactCurrentBatchConfig,G=0,ve=null,fe=null,ye=0,$e=0,Nr=Yt(0),ge=0,zn=null,ir=0,ea=0,ji=0,cn=null,Le=null,ki=0,Dr=1/0,pt=null,Mo=!1,Ns=null,At=null,Xn=!1,Pt=null,Do=0,dn=0,Ss=null,mo=-1,po=0;function Ee(){return G&6?me():mo!==-1?mo:mo=me()}function $t(e){return e.mode&1?G&2&&ye!==0?ye&-ye:Yp.transition!==null?(po===0&&(po=ad()),po):(e=J,e!==0||(e=window.event,e=e===void 0?16:md(e.type)),e):1}function rt(e,t,n,o){if(50<dn)throw dn=0,Ss=null,Error(P(185));Tn(e,n,o),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(ea|=n),ge===4&&It(e,ye)),De(e,o),n===1&&G===0&&!(t.mode&1)&&(Dr=me()+500,Ko&&qt()))}function De(e,t){var n=e.callbackNode;Ym(e,t);var o=yo(e,e===ve?ye:0);if(o===0)n!==null&&il(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&il(n),t===1)e.tag===0?Vp(Zl.bind(null,e)):Pd(Zl.bind(null,e)),Bp(function(){!(G&6)&&qt()}),n=null;else{switch(sd(o)){case 1:n=Gs;break;case 4:n=nd;break;case 16:n=bo;break;case 536870912:n=od;break;default:n=bo}n=Ru(n,ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ku(e,t){if(mo=-1,po=0,G&6)throw Error(P(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var o=yo(e,e===ve?ye:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Ao(e,o);else{t=o;var a=G;G|=2;var s=Su();(ve!==e||ye!==t)&&(pt=null,Dr=me()+500,tr(e,t));do try{pf();break}catch(l){Nu(e,l)}while(!0);li(),Fo.current=s,G=a,fe!==null?t=0:(ve=null,ye=0,t=ge)}if(t!==0){if(t===2&&(a=Xa(e),a!==0&&(o=a,t=Cs(e,a))),t===1)throw n=zn,tr(e,0),It(e,o),De(e,me()),n;if(t===6)It(e,o);else{if(a=e.current.alternate,!(o&30)&&!uf(a)&&(t=Ao(e,o),t===2&&(s=Xa(e),s!==0&&(o=s,t=Cs(e,s))),t===1))throw n=zn,tr(e,0),It(e,o),De(e,me()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(P(345));case 2:Kt(e,Le,pt);break;case 3:if(It(e,o),(o&130023424)===o&&(t=ki+500-me(),10<t)){if(yo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ee(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ss(Kt.bind(null,e,Le,pt),t);break}Kt(e,Le,pt);break;case 4:if(It(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-tt(o);s=1<<i,i=t[i],i>a&&(a=i),o&=~s}if(o=a,o=me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*df(o/1960))-o,10<o){e.timeoutHandle=ss(Kt.bind(null,e,Le,pt),o);break}Kt(e,Le,pt);break;case 5:Kt(e,Le,pt);break;default:throw Error(P(329))}}}return De(e,me()),e.callbackNode===n?ku.bind(null,e):null}function Cs(e,t){var n=cn;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Ao(e,t),e!==2&&(t=Le,Le=n,t!==null&&zs(t)),e}function zs(e){Le===null?Le=e:Le.push.apply(Le,e)}function uf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!nt(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~ji,t&=~ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),o=1<<n;e[n]=-1,t&=~o}}function Zl(e){if(G&6)throw Error(P(327));Rr();var t=yo(e,0);if(!(t&1))return De(e,me()),null;var n=Ao(e,t);if(e.tag!==0&&n===2){var o=Xa(e);o!==0&&(t=o,n=Cs(e,o))}if(n===1)throw n=zn,tr(e,0),It(e,t),De(e,me()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Le,pt),De(e,me()),null}function Ni(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Dr=me()+500,Ko&&qt())}}function lr(e){Pt!==null&&Pt.tag===0&&!(G&6)&&Rr();var t=G;G|=1;var n=Qe.transition,o=J;try{if(Qe.transition=null,J=1,e)return e()}finally{J=o,Qe.transition=n,G=t,!(G&6)&&qt()}}function Si(){$e=Nr.current,ae(Nr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Op(n)),fe!==null)for(n=fe.return;n!==null;){var o=n;switch(ai(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&So();break;case 3:Fr(),ae(Fe),ae(Ce),fi();break;case 5:pi(o);break;case 4:Fr();break;case 13:ae(ie);break;case 19:ae(ie);break;case 10:ci(o.type._context);break;case 22:case 23:Si()}n=n.return}if(ve=e,fe=e=Ot(e.current,null),ye=$e=t,ge=0,zn=null,ji=ea=ir=0,Le=cn=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,o.next=i}n.pending=o}Xt=null}return e}function Nu(e,t){do{var n=fe;try{if(li(),lo.current=_o,Lo){for(var o=le.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Lo=!1}if(sr=0,xe=he=le=null,sn=!1,Nn=0,wi.current=null,n===null||n.return===null){ge=1,zn=t,fe=null;break}e:{var s=e,i=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ol(i);if(v!==null){v.flags&=-257,Bl(v,i,l,s,t),v.mode&1&&$l(s,d,t),t=v,c=d;var S=t.updateQueue;if(S===null){var k=new Set;k.add(c),t.updateQueue=k}else S.add(c);break e}else{if(!(t&1)){$l(s,d,t),Ci();break e}c=Error(P(426))}}else if(se&&l.mode&1){var y=Ol(i);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Bl(y,i,l,s,t),si(Mr(c,l));break e}}s=c=Mr(c,l),ge!==4&&(ge=2),cn===null?cn=[s]:cn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=iu(s,c,t);Tl(s,h);break e;case 1:l=c;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(At===null||!At.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=lu(s,l,t);Tl(s,j);break e}}s=s.return}while(s!==null)}zu(n)}catch(E){t=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Su(){var e=Fo.current;return Fo.current=_o,e===null?_o:e}function Ci(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(ir&268435455)&&!(ea&268435455)||It(ve,ye)}function Ao(e,t){var n=G;G|=2;var o=Su();(ve!==e||ye!==t)&&(pt=null,tr(e,t));do try{mf();break}catch(a){Nu(e,a)}while(!0);if(li(),G=n,Fo.current=o,fe!==null)throw Error(P(261));return ve=null,ye=0,ge}function mf(){for(;fe!==null;)Cu(fe)}function pf(){for(;fe!==null&&!Dm();)Cu(fe)}function Cu(e){var t=Iu(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?zu(e):fe=t,wi.current=null}function zu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=af(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=of(n,t,$e),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function Kt(e,t,n){var o=J,a=Qe.transition;try{Qe.transition=null,J=1,ff(e,t,n,o)}finally{Qe.transition=a,J=o}return null}function ff(e,t,n,o){do Rr();while(Pt!==null);if(G&6)throw Error(P(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(qm(e,s),e===ve&&(fe=ve=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xn||(Xn=!0,Ru(bo,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var i=J;J=1;var l=G;G|=4,wi.current=null,lf(e,n),wu(n,e),Lp(os),wo=!!ns,os=ns=null,e.current=n,cf(n),Am(),G=l,J=i,Qe.transition=s}else e.current=n;if(Xn&&(Xn=!1,Pt=e,Do=a),s=e.pendingLanes,s===0&&(At=null),Bm(n.stateNode),De(e,me()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Mo)throw Mo=!1,e=Ns,Ns=null,e;return Do&1&&e.tag!==0&&Rr(),s=e.pendingLanes,s&1?e===Ss?dn++:(dn=0,Ss=e):dn=0,qt(),null}function Rr(){if(Pt!==null){var e=sd(Do),t=Qe.transition,n=J;try{if(Qe.transition=null,J=16>e?16:e,Pt===null)var o=!1;else{if(e=Pt,Pt=null,Do=0,G&6)throw Error(P(331));var a=G;for(G|=4,F=e.current;F!==null;){var s=F,i=s.child;if(F.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(F=d;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:ln(8,f,s)}var m=f.child;if(m!==null)m.return=f,F=m;else for(;F!==null;){f=F;var u=f.sibling,v=f.return;if(vu(f),f===d){F=null;break}if(u!==null){u.return=v,F=u;break}F=v}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var y=k.sibling;k.sibling=null,k=y}while(k!==null)}}F=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,F=i;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ln(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,F=h;break e}F=s.return}}var p=e.current;for(F=p;F!==null;){i=F;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,F=g;else e:for(i=p;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zo(9,l)}}catch(E){de(l,l.return,E)}if(l===i){F=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,F=j;break e}F=l.return}}if(G=a,qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Vo,e)}catch{}o=!0}return o}finally{J=n,Qe.transition=t}}return!1}function ec(e,t,n){t=Mr(n,t),t=iu(e,t,1),e=Dt(e,t,1),t=Ee(),e!==null&&(Tn(e,1,t),De(e,t))}function de(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(At===null||!At.has(o))){e=Mr(n,e),e=lu(t,e,1),t=Dt(t,e,1),e=Ee(),t!==null&&(Tn(t,1,e),De(t,e));break}}t=t.return}}function hf(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(ye&n)===n&&(ge===4||ge===3&&(ye&130023424)===ye&&500>me()-ki?tr(e,0):ji|=n),De(e,t)}function Eu(e,t){t===0&&(e.mode&1?(t=Hn,Hn<<=1,!(Hn&130023424)&&(Hn=4194304)):t=1);var n=Ee();e=wt(e,t),e!==null&&(Tn(e,t,n),De(e,n))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Eu(e,n)}function xf(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(P(314))}o!==null&&o.delete(t),Eu(e,n)}var Iu;Iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,nf(e,t,n);_e=!!(e.flags&131072)}else _e=!1,se&&t.flags&1048576&&Td(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;uo(e,t),e=t.pendingProps;var a=Tr(t,Ce.current);Ir(t,n),a=gi(null,t,o,e,a,n);var s=xi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(o)?(s=!0,Co(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ui(t),a.updater=Jo,t.stateNode=a,a._reactInternals=t,ps(t,o,e,n),t=gs(null,t,o,!0,s,n)):(t.tag=0,se&&s&&oi(t),ze(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=bf(o),e=Xe(o,e),a){case 0:t=hs(null,t,o,e,n);break e;case 1:t=Wl(null,t,o,e,n);break e;case 11:t=Hl(null,t,o,e,n);break e;case 14:t=Ul(null,t,o,Xe(o.type,e),n);break e}throw Error(P(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),hs(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Wl(e,t,o,a,n);case 3:e:{if(mu(t),e===null)throw Error(P(387));o=t.pendingProps,s=t.memoizedState,a=s.element,Md(e,t),Po(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Mr(Error(P(423)),t),t=Vl(e,t,o,n,a);break e}else if(o!==a){a=Mr(Error(P(424)),t),t=Vl(e,t,o,n,a);break e}else for(Oe=Mt(t.stateNode.containerInfo.firstChild),Be=t,se=!0,et=null,n=Od(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lr(),o===a){t=jt(e,t,n);break e}ze(e,t,o,n)}t=t.child}return t;case 5:return Bd(t),e===null&&ds(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,as(o,a)?i=null:s!==null&&as(o,s)&&(t.flags|=32),uu(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&ds(t),null;case 13:return pu(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=_r(t,null,o,n):ze(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),Hl(e,t,o,a,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,ne(Io,o._currentValue),o._currentValue=i,s!==null)if(nt(s.value,i)){if(s.children===a.children&&!Fe.current){t=jt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===o){if(s.tag===1){c=xt(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),us(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(P(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),us(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ze(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Ir(t,n),a=Ge(a),o=o(a),t.flags|=1,ze(e,t,o,n),t.child;case 14:return o=t.type,a=Xe(o,t.pendingProps),a=Xe(o.type,a),Ul(e,t,o,a,n);case 15:return cu(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Xe(o,a),uo(e,t),t.tag=1,Me(o)?(e=!0,Co(t)):e=!1,Ir(t,n),Ad(t,o,a),ps(t,o,a,n),gs(null,t,o,!0,e,n);case 19:return fu(e,t,n);case 22:return du(e,t,n)}throw Error(P(156,t.tag))};function Ru(e,t){return rd(e,t)}function vf(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,o){return new vf(e,t,n,o)}function zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return zi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===qs)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,o,a,s){var i=2;if(o=e,typeof e=="function")zi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case fr:return rr(n.children,a,s,t);case Vs:i=8,a|=8;break;case Da:return e=qe(12,n,t,a|2),e.elementType=Da,e.lanes=s,e;case Aa:return e=qe(13,n,t,a),e.elementType=Aa,e.lanes=s,e;case $a:return e=qe(19,n,t,a),e.elementType=$a,e.lanes=s,e;case $c:return ta(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:i=10;break e;case Ac:i=9;break e;case Ys:i=11;break e;case qs:i=14;break e;case Ct:i=16,o=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=qe(i,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function rr(e,t,n,o){return e=qe(7,e,o,t),e.lanes=n,e}function ta(e,t,n,o){return e=qe(22,e,o,t),e.elementType=$c,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yf(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pa(0),this.expirationTimes=pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pa(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ei(e,t,n,o,a,s,i,l,c){return e=new yf(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qe(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ui(s),e}function wf(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function Pu(e){if(!e)return Ut;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Me(n))return Rd(e,n,t)}return t}function Tu(e,t,n,o,a,s,i,l,c){return e=Ei(n,o,!0,e,a,s,i,l,c),e.context=Pu(null),n=e.current,o=Ee(),a=$t(n),s=xt(o,a),s.callback=t??null,Dt(n,s,a),e.current.lanes=a,Tn(e,a,o),De(e,o),e}function ra(e,t,n,o){var a=t.current,s=Ee(),i=$t(a);return n=Pu(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Dt(a,t,i),e!==null&&(rt(e,a,i,s),io(e,a,i)),i}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ii(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function jf(){return null}var Lu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}na.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ra(e,t,null,null)};na.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){ra(null,e,null,null)}),t[yt]=null}};function na(e){this._internalRoot=e}na.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&ud(e)}};function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rc(){}function kf(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=$o(i);s.call(d)}}var i=Tu(t,o,e,0,null,!1,!1,"",rc);return e._reactRootContainer=i,e[yt]=i.current,bn(e.nodeType===8?e.parentNode:e),lr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var l=o;o=function(){var d=$o(c);l.call(d)}}var c=Ei(e,0,!1,null,null,!1,!1,"",rc);return e._reactRootContainer=c,e[yt]=c.current,bn(e.nodeType===8?e.parentNode:e),lr(function(){ra(t,c,n,o)}),c}function aa(e,t,n,o,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var c=$o(i);l.call(c)}}ra(t,i,e,a)}else i=kf(n,t,e,a,o);return $o(i)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(Ks(t,n|1),De(t,me()),!(G&6)&&(Dr=me()+500,qt()))}break;case 13:lr(function(){var o=wt(e,1);if(o!==null){var a=Ee();rt(o,e,1,a)}}),Ii(e,1)}};Js=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Ee();rt(t,e,134217728,n)}Ii(e,134217728)}};ld=function(e){if(e.tag===13){var t=$t(e),n=wt(e,t);if(n!==null){var o=Ee();rt(n,e,t,o)}Ii(e,t)}};cd=function(){return J};dd=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Ga=function(e,t,n){switch(t){case"input":if(Ha(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=Go(o);if(!a)throw Error(P(90));Bc(o),Ha(o,a)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};Kc=Ni;Jc=lr;var Nf={usingClientEntryPoint:!1,Events:[_n,vr,Go,Qc,Gc,Ni]},Kr={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sf={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zn.isDisabled&&Zn.supportsFiber)try{Vo=Zn.inject(Sf),lt=Zn}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pi(t))throw Error(P(200));return wf(e,t,null,n)};Ue.createRoot=function(e,t){if(!Pi(e))throw Error(P(299));var n=!1,o="",a=Lu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ei(e,1,!1,null,null,n,!1,o,a),e[yt]=t.current,bn(e.nodeType===8?e.parentNode:e),new Ri(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return lr(e)};Ue.hydrate=function(e,t,n){if(!oa(t))throw Error(P(200));return aa(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!Pi(e))throw Error(P(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",i=Lu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,a,!1,s,i),e[yt]=t.current,bn(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new na(t)};Ue.render=function(e,t,n){if(!oa(t))throw Error(P(200));return aa(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!oa(e))throw Error(P(40));return e._reactRootContainer?(lr(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ue.unstable_batchedUpdates=Ni;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!oa(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return aa(e,t,n,!1,o)};Ue.version="18.2.0-next-9e3b772b8-20220608";function _u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u)}catch(e){console.error(e)}}_u(),Tc.exports=Ue;var Cf=Tc.exports,Fu,nc=Cf;Fu=nc.createRoot,nc.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},En.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const oc="popstate";function zf(e){e===void 0&&(e={});function t(o,a){let{pathname:s,search:i,hash:l}=o.location;return Es("",{pathname:s,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){return typeof a=="string"?a:Oo(a)}return If(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ef(){return Math.random().toString(36).substr(2,8)}function ac(e,t){return{usr:e.state,key:e.key,idx:t}}function Es(e,t,n,o){return n===void 0&&(n=null),En({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||o||Ef()})}function Oo(e){let{pathname:t="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function If(e,t,n,o){o===void 0&&(o={});let{window:a=document.defaultView,v5Compat:s=!1}=o,i=a.history,l=Tt.Pop,c=null,d=f();d==null&&(d=0,i.replaceState(En({},i.state,{idx:d}),""));function f(){return(i.state||{idx:null}).idx}function m(){l=Tt.Pop;let y=f(),h=y==null?null:y-d;d=y,c&&c({action:l,location:k.location,delta:h})}function u(y,h){l=Tt.Push;let p=Es(k.location,y,h);d=f()+1;let g=ac(p,d),j=k.createHref(p);try{i.pushState(g,"",j)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(j)}s&&c&&c({action:l,location:k.location,delta:1})}function v(y,h){l=Tt.Replace;let p=Es(k.location,y,h);d=f();let g=ac(p,d),j=k.createHref(p);i.replaceState(g,"",j),s&&c&&c({action:l,location:k.location,delta:0})}function S(y){let h=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof y=="string"?y:Oo(y);return p=p.replace(/ $/,"%20"),pe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let k={get action(){return l},get location(){return e(a,i)},listen(y){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(oc,m),c=y,()=>{a.removeEventListener(oc,m),c=null}},createHref(y){return t(a,y)},createURL:S,encodeLocation(y){let h=S(y);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:u,replace:v,go(y){return i.go(y)}};return k}var sc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sc||(sc={}));function Rf(e,t,n){return n===void 0&&(n="/"),Pf(e,t,n)}function Pf(e,t,n,o){let a=typeof t=="string"?Br(t):t,s=Ti(a.pathname||"/",n);if(s==null)return null;let i=Du(e);Tf(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let d=Wf(s);l=Bf(i[c],d)}return l}function Du(e,t,n,o){t===void 0&&(t=[]),n===void 0&&(n=[]),o===void 0&&(o="");let a=(s,i,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let d=Bt([o,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Du(s.children,t,f,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:$f(d,s.index),routesMeta:f})};return e.forEach((s,i)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))a(s,i);else for(let c of Au(s.path))a(s,i,c)}),t}function Au(e){let t=e.split("/");if(t.length===0)return[];let[n,...o]=t,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return a?[s,""]:[s];let i=Au(o.join("/")),l=[];return l.push(...i.map(c=>c===""?s:[s,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Tf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Of(t.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const Lf=/^:[\w-]+$/,_f=3,Ff=2,Mf=1,Df=10,Af=-2,ic=e=>e==="*";function $f(e,t){let n=e.split("/"),o=n.length;return n.some(ic)&&(o+=Af),t&&(o+=Ff),n.filter(a=>!ic(a)).reduce((a,s)=>a+(Lf.test(s)?_f:s===""?Mf:Df),o)}function Of(e,t){return e.length===t.length&&e.slice(0,-1).every((o,a)=>o===t[a])?e[e.length-1]-t[t.length-1]:0}function Bf(e,t,n){let{routesMeta:o}=e,a={},s="/",i=[];for(let l=0;l<o.length;++l){let c=o[l],d=l===o.length-1,f=s==="/"?t:t.slice(s.length)||"/",m=Hf({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),u=c.route;if(!m)return null;Object.assign(a,m.params),i.push({params:a,pathname:Bt([s,m.pathname]),pathnameBase:Qf(Bt([s,m.pathnameBase])),route:u}),m.pathnameBase!=="/"&&(s=Bt([s,m.pathnameBase]))}return i}function Hf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Uf(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let s=a[0],i=s.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:o.reduce((d,f,m)=>{let{paramName:u,isOptional:v}=f;if(u==="*"){let k=l[m]||"";i=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=l[m];return v&&!S?d[u]=void 0:d[u]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:i,pattern:e}}function Uf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(o.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}function Wf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ti(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Vf(e,t){t===void 0&&(t="/");let{pathname:n,search:o="",hash:a=""}=typeof e=="string"?Br(e):e;return{pathname:n?n.startsWith("/")?n:Yf(n,t):t,search:Gf(o),hash:Kf(a)}}function Yf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function _a(e,t,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Li(e,t){let n=qf(e);return t?n.map((o,a)=>a===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function _i(e,t,n,o){o===void 0&&(o=!1);let a;typeof e=="string"?a=Br(e):(a=En({},e),pe(!a.pathname||!a.pathname.includes("?"),_a("?","pathname","search",a)),pe(!a.pathname||!a.pathname.includes("#"),_a("#","pathname","hash",a)),pe(!a.search||!a.search.includes("#"),_a("#","search","hash",a)));let s=e===""||a.pathname==="",i=s?"/":a.pathname,l;if(i==null)l=n;else{let m=t.length-1;if(!o&&i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),m-=1;a.pathname=u.join("/")}l=m>=0?t[m]:"/"}let c=Vf(a,l),d=i&&i!=="/"&&i.endsWith("/"),f=(s||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Bt=e=>e.join("/").replace(/\/\/+/g,"/"),Qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $u=["post","put","patch","delete"];new Set($u);const Xf=["get",...$u];new Set(Xf);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function In(){return In=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},In.apply(this,arguments)}const Fi=x.createContext(null),Zf=x.createContext(null),Qt=x.createContext(null),sa=x.createContext(null),dt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Ou=x.createContext(null);function eh(e,t){let{relative:n}=t===void 0?{}:t;Hr()||pe(!1);let{basename:o,navigator:a}=x.useContext(Qt),{hash:s,pathname:i,search:l}=Uu(e,{relative:n}),c=i;return o!=="/"&&(c=i==="/"?o:Bt([o,i])),a.createHref({pathname:c,search:l,hash:s})}function Hr(){return x.useContext(sa)!=null}function ur(){return Hr()||pe(!1),x.useContext(sa).location}function Bu(e){x.useContext(Qt).static||x.useLayoutEffect(e)}function Pe(){let{isDataRoute:e}=x.useContext(dt);return e?hh():th()}function th(){Hr()||pe(!1);let e=x.useContext(Fi),{basename:t,future:n,navigator:o}=x.useContext(Qt),{matches:a}=x.useContext(dt),{pathname:s}=ur(),i=JSON.stringify(Li(a,n.v7_relativeSplatPath)),l=x.useRef(!1);return Bu(()=>{l.current=!0}),x.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){o.go(d);return}let m=_i(d,JSON.parse(i),s,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Bt([t,m.pathname])),(f.replace?o.replace:o.push)(m,f.state,f)},[t,o,i,s,e])}const rh=x.createContext(null);function nh(e){let t=x.useContext(dt).outlet;return t&&x.createElement(rh.Provider,{value:e},t)}function Hu(){let{matches:e}=x.useContext(dt),t=e[e.length-1];return t?t.params:{}}function Uu(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=x.useContext(Qt),{matches:a}=x.useContext(dt),{pathname:s}=ur(),i=JSON.stringify(Li(a,o.v7_relativeSplatPath));return x.useMemo(()=>_i(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function oh(e,t){return ah(e,t)}function ah(e,t,n,o){Hr()||pe(!1);let{navigator:a}=x.useContext(Qt),{matches:s}=x.useContext(dt),i=s[s.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let d=ur(),f;if(t){var m;let y=typeof t=="string"?Br(t):t;c==="/"||(m=y.pathname)!=null&&m.startsWith(c)||pe(!1),f=y}else f=d;let u=f.pathname||"/",v=u;if(c!=="/"){let y=c.replace(/^\//,"").split("/");v="/"+u.replace(/^\//,"").split("/").slice(y.length).join("/")}let S=Rf(e,{pathname:v}),k=dh(S&&S.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Bt([c,a.encodeLocation?a.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Bt([c,a.encodeLocation?a.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,o);return t&&k?x.createElement(sa.Provider,{value:{location:In({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Tt.Pop}},k):k}function sh(){let e=fh(),t=Jf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:a},n):null,null)}const ih=x.createElement(sh,null);class lh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(dt.Provider,{value:this.props.routeContext},x.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ch(e){let{routeContext:t,match:n,children:o}=e,a=x.useContext(Fi);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(dt.Provider,{value:t},o)}function dh(e,t,n,o){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let f=i.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||pe(!1),i=i.slice(0,Math.min(i.length,f+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let f=0;f<i.length;f++){let m=i[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:u,errors:v}=n,S=m.route.loader&&u[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){c=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((f,m,u)=>{let v,S=!1,k=null,y=null;n&&(v=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||ih,c&&(d<0&&u===0?(gh("route-fallback"),S=!0,y=null):d===u&&(S=!0,y=m.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,u+1)),p=()=>{let g;return v?g=k:S?g=y:m.route.Component?g=x.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=f,x.createElement(ch,{match:m,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:g})};return n&&(m.route.ErrorBoundary||m.route.errorElement||u===0)?x.createElement(lh,{location:n.location,revalidation:n.revalidation,component:k,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Wu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wu||{}),Vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vu||{});function uh(e){let t=x.useContext(Fi);return t||pe(!1),t}function mh(e){let t=x.useContext(Zf);return t||pe(!1),t}function ph(e){let t=x.useContext(dt);return t||pe(!1),t}function Yu(e){let t=ph(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function fh(){var e;let t=x.useContext(Ou),n=mh(),o=Yu();return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function hh(){let{router:e}=uh(Wu.UseNavigateStable),t=Yu(Vu.UseNavigateStable),n=x.useRef(!1);return Bu(()=>{n.current=!0}),x.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,In({fromRouteId:t},s)))},[e,t])}const lc={};function gh(e,t,n){lc[e]||(lc[e]=!0)}function er(e){let{to:t,replace:n,state:o,relative:a}=e;Hr()||pe(!1);let{future:s,static:i}=x.useContext(Qt),{matches:l}=x.useContext(dt),{pathname:c}=ur(),d=Pe(),f=_i(t,Li(l,s.v7_relativeSplatPath),c,a==="path"),m=JSON.stringify(f);return x.useEffect(()=>d(JSON.parse(m),{replace:n,state:o,relative:a}),[d,m,a,n,o]),null}function xh(e){return nh(e.context)}function ee(e){pe(!1)}function vh(e){let{basename:t="/",children:n=null,location:o,navigationType:a=Tt.Pop,navigator:s,static:i=!1,future:l}=e;Hr()&&pe(!1);let c=t.replace(/^\/*/,"/"),d=x.useMemo(()=>({basename:c,navigator:s,static:i,future:In({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof o=="string"&&(o=Br(o));let{pathname:f="/",search:m="",hash:u="",state:v=null,key:S="default"}=o,k=x.useMemo(()=>{let y=Ti(f,c);return y==null?null:{location:{pathname:y,search:m,hash:u,state:v,key:S},navigationType:a}},[c,f,m,u,v,S,a]);return k==null?null:x.createElement(Qt.Provider,{value:d},x.createElement(sa.Provider,{children:n,value:k}))}function bh(e){let{children:t,location:n}=e;return oh(Is(t),n)}new Promise(()=>{});function Is(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(o,a)=>{if(!x.isValidElement(o))return;let s=[...t,a];if(o.type===x.Fragment){n.push.apply(n,Is(o.props.children,s));return}o.type!==ee&&pe(!1),!o.props.index||!o.props.children||pe(!1);let i={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(i.children=Is(o.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Rs.apply(this,arguments)}function yh(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,s;for(s=0;s<o.length;s++)a=o[s],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jh(e,t){return e.button===0&&(!t||t==="_self")&&!wh(e)}function Ps(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let o=e[n];return t.concat(Array.isArray(o)?o.map(a=>[n,a]):[[n,o]])},[]))}function kh(e,t){let n=Ps(e);return t&&t.forEach((o,a)=>{n.has(a)||t.getAll(a).forEach(s=>{n.append(a,s)})}),n}const Nh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Sh="6";try{window.__reactRouterVersion=Sh}catch{}const Ch="startTransition",cc=hm[Ch];function zh(e){let{basename:t,children:n,future:o,window:a}=e,s=x.useRef();s.current==null&&(s.current=zf({window:a,v5Compat:!0}));let i=s.current,[l,c]=x.useState({action:i.action,location:i.location}),{v7_startTransition:d}=o||{},f=x.useCallback(m=>{d&&cc?cc(()=>c(m)):c(m)},[c,d]);return x.useLayoutEffect(()=>i.listen(f),[i,f]),x.createElement(vh,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:o})}const Eh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B=x.forwardRef(function(t,n){let{onClick:o,relative:a,reloadDocument:s,replace:i,state:l,target:c,to:d,preventScrollReset:f,unstable_viewTransition:m}=t,u=yh(t,Nh),{basename:v}=x.useContext(Qt),S,k=!1;if(typeof d=="string"&&Ih.test(d)&&(S=d,Eh))try{let g=new URL(window.location.href),j=d.startsWith("//")?new URL(g.protocol+d):new URL(d),E=Ti(j.pathname,v);j.origin===g.origin&&E!=null?d=E+j.search+j.hash:k=!0}catch{}let y=eh(d,{relative:a}),h=Rh(d,{replace:i,state:l,target:c,preventScrollReset:f,relative:a,unstable_viewTransition:m});function p(g){o&&o(g),g.defaultPrevented||h(g)}return x.createElement("a",Rs({},u,{href:S||y,onClick:k||s?o:p,ref:n,target:c}))});var dc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dc||(dc={}));var uc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uc||(uc={}));function Rh(e,t){let{target:n,replace:o,state:a,preventScrollReset:s,relative:i,unstable_viewTransition:l}=t===void 0?{}:t,c=Pe(),d=ur(),f=Uu(e,{relative:i});return x.useCallback(m=>{if(jh(m,n)){m.preventDefault();let u=o!==void 0?o:Oo(d)===Oo(f);c(e,{replace:u,state:a,preventScrollReset:s,relative:i,unstable_viewTransition:l})}},[d,c,f,o,a,n,e,s,i,l])}function Ph(e){let t=x.useRef(Ps(e)),n=x.useRef(!1),o=ur(),a=x.useMemo(()=>kh(o.search,n.current?null:t.current),[o.search]),s=Pe(),i=x.useCallback((l,c)=>{const d=Ps(typeof l=="function"?l(a):l);n.current=!0,s("?"+d,c)},[s,a]);return[a,i]}const q="http://localhost:5000/api",re=()=>localStorage.getItem("token"),eo=e=>localStorage.setItem("token",e),Th=()=>localStorage.removeItem("token"),Wt={ownerRegister:async e=>{try{const n=await(await fetch(`${q}/auth/owner/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();return n.success&&(eo(n.token),localStorage.setItem("userData",JSON.stringify(n.user)),localStorage.setItem("userRole",n.user.role),localStorage.setItem("userName",n.user.name||n.user.username)),n}catch(t){return console.error("Owner register error:",t),{success:!1,message:"Network error"}}},ownerLogin:async(e,t)=>{try{const o=await(await fetch(`${q}/auth/owner/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})})).json();return o.success&&(eo(o.token),localStorage.setItem("userData",JSON.stringify(o.user)),localStorage.setItem("userRole",o.user.role),localStorage.setItem("userName",o.user.name||o.user.username)),o}catch(n){return console.error("Owner login error:",n),{success:!1,message:"Network error"}}},studentRegister:async e=>{try{const n=await(await fetch(`${q}/auth/student/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json();return n.success&&(eo(n.token),localStorage.setItem("userData",JSON.stringify(n.user)),localStorage.setItem("userRole",n.user.role),localStorage.setItem("userName",n.user.name||n.user.email)),n}catch(t){return console.error("Student register error:",t),{success:!1,message:"Network error"}}},studentLogin:async(e,t)=>{try{const o=await(await fetch(`${q}/auth/student/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})})).json();return o.success&&(eo(o.token),localStorage.setItem("userData",JSON.stringify(o.user)),localStorage.setItem("userRole",o.user.role),localStorage.setItem("userName",o.user.name||o.user.email)),o}catch(n){return console.error("Student login error:",n),{success:!1,message:"Network error"}}},getMe:async()=>{try{const e=re();return e?await(await fetch(`${q}/auth/me`,{headers:{Authorization:`Bearer ${e}`}})).json():{success:!1,message:"No token"}}catch(e){return console.error("Get me error:",e),{success:!1,message:"Network error"}}},logout:()=>{Th(),localStorage.removeItem("userData"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),localStorage.removeItem("adminData"),localStorage.removeItem("adminToken")}},ho={getAll:async()=>{try{const e=re();return await(await fetch(`${q}/students`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get students error:",e),{success:!1,message:"Network error"}}},add:async e=>{try{const t=re();console.log("Making request to:",`${q}/students`),console.log("With token:",t?"Present":"Missing");const n=await fetch(`${q}/students`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)});console.log("Response status:",n.status);const o=await n.json();return console.log("Response data:",o),o}catch(t){return console.error("Add student error:",t),{success:!1,message:"Network error: "+t.message}}},remove:async e=>{try{const t=re();return await(await fetch(`${q}/students/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Remove student error:",t),{success:!1,message:"Network error"}}}},mc={getAll:async()=>{try{const e=re();return await(await fetch(`${q}/rooms`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get rooms error:",e),{success:!1,message:"Network error"}}},getByType:async e=>{try{const t=re();return await(await fetch(`${q}/rooms/${e}`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get rooms by type error:",t),{success:!1,message:"Network error"}}},updateStatus:async(e,t)=>{try{const n=re();return await(await fetch(`${q}/rooms/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({status:t})})).json()}catch(n){return console.error("Update room status error:",n),{success:!1,message:"Network error"}}}},Lh={addPayment:async e=>{try{const t=re();return await(await fetch(`${q}/fees/payment`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Add payment error:",t),{success:!1,message:"Network error"}}},getHistory:async e=>{try{const t=re();return await(await fetch(`${q}/fees/student/${e}`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get payment history error:",t),{success:!1,message:"Network error"}}}},Bo={search:async e=>{try{const t=new URLSearchParams(e).toString();return await(await fetch(`${q}/hostels/search?${t}`)).json()}catch(t){return console.error("Search hostels error:",t),{success:!1,message:"Network error"}}},getById:async e=>{try{return await(await fetch(`${q}/hostels/${e}`)).json()}catch(t){return console.error("Get hostel error:",t),{success:!1,message:"Network error"}}},getRooms:async(e,t=null)=>{try{const n=t?`?type=${t}`:"";return await(await fetch(`${q}/hostels/${e}/rooms${n}`)).json()}catch(n){return console.error("Get hostel rooms error:",n),{success:!1,message:"Network error"}}},create:async e=>{try{const t=re();return await(await fetch(`${q}/hostels`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create hostel error:",t),{success:!1,message:"Network error"}}},update:async(e,t)=>{try{const n=re();return await(await fetch(`${q}/hostels/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)})).json()}catch(n){return console.error("Update hostel error:",n),{success:!1,message:"Network error"}}},getMyHostel:async()=>{try{const e=re();return await(await fetch(`${q}/hostels/owner/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my hostel error:",e),{success:!1,message:"Network error"}}}},_h={autocomplete:async e=>{try{return await(await fetch(`${q}/location/autocomplete?q=${encodeURIComponent(e)}`)).json()}catch(t){return console.error("Location autocomplete error:",t),{success:!1,message:"Network error"}}}},Ts={create:async e=>{try{const t=re();return await(await fetch(`${q}/bookings/request`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create booking error:",t),{success:!1,message:"Network error"}}},getMyBookings:async()=>{try{const e=re();return await(await fetch(`${q}/bookings/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my bookings error:",e),{success:!1,message:"Network error"}}},cancel:async e=>{try{const t=re();return await(await fetch(`${q}/bookings/${e}/cancel`,{method:"PUT",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Cancel booking error:",t),{success:!1,message:"Network error"}}},getPending:async e=>{try{const t=re();return await(await fetch(`${q}/bookings/hostel/${e}/pending`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get pending bookings error:",t),{success:!1,message:"Network error"}}},getActive:async e=>{try{const t=re();return await(await fetch(`${q}/bookings/hostel/${e}/active`,{headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Get active bookings error:",t),{success:!1,message:"Network error"}}},approve:async(e,t="",n=null)=>{try{const o=re();return await(await fetch(`${q}/bookings/${e}/approve`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({ownerNotes:t,checkInDate:n})})).json()}catch(o){return console.error("Approve booking error:",o),{success:!1,message:"Network error"}}},reject:async(e,t="")=>{try{const n=re();return await(await fetch(`${q}/bookings/${e}/reject`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({ownerNotes:t})})).json()}catch(n){return console.error("Reject booking error:",n),{success:!1,message:"Network error"}}},getAllOwnerBookings:async()=>{try{const e=re();return await(await fetch(`${q}/bookings/owner/all`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get all owner bookings error:",e),{success:!1,message:"Network error"}}},checkout:async e=>{try{const t=re();return await(await fetch(`${q}/bookings/${e}/checkout`,{method:"PUT",headers:{Authorization:`Bearer ${t}`}})).json()}catch(t){return console.error("Checkout booking error:",t),{success:!1,message:"Network error"}}}},Ls={create:async e=>{try{const t=re();return await(await fetch(`${q}/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)})).json()}catch(t){return console.error("Create review error:",t),{success:!1,message:"Network error"}}},getByHostel:async e=>{try{return await(await fetch(`${q}/reviews/hostel/${e}`)).json()}catch(t){return console.error("Get hostel reviews error:",t),{success:!1,message:"Network error"}}},getMyReviews:async()=>{try{const e=re();return await(await fetch(`${q}/reviews/my`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get my reviews error:",e),{success:!1,message:"Network error"}}},update:async(e,t)=>{try{const n=re();return await(await fetch(`${q}/reviews/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)})).json()}catch(n){return console.error("Update review error:",n),{success:!1,message:"Network error"}}},respond:async(e,t,n)=>{try{const o=re();return await(await fetch(`${q}/reviews/${e}/respond`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({response:t,complaintStatus:n})})).json()}catch(o){return console.error("Respond to review error:",o),{success:!1,message:"Network error"}}},getComplaints:async()=>{try{const e=re();return await(await fetch(`${q}/reviews/owner/complaints`,{headers:{Authorization:`Bearer ${e}`}})).json()}catch(e){return console.error("Get complaints error:",e),{success:!1,message:"Network error"}}}};function Fh({onSelect:e,placeholder:t="Enter city or location"}){const[n,o]=x.useState(""),[a,s]=x.useState([]),[i,l]=x.useState(!1),[c,d]=x.useState(!1);x.useEffect(()=>{const u=setTimeout(async()=>{if(n.length<2){s([]),l(!1);return}d(!0);const v=await _h.autocomplete(n);d(!1),v.success&&(s(v.suggestions),l(v.suggestions.length>0))},300);return()=>clearTimeout(u)},[n]);const f=m=>{o(m.displayName||m.city),l(!1),e(m)};return r.jsxs("div",{style:{position:"relative",width:"100%"},children:[r.jsx("style",{children:`
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
      `}),r.jsx("input",{type:"text",className:"autocomplete-input",value:n,onChange:m=>o(m.target.value),placeholder:t,onBlur:()=>setTimeout(()=>l(!1),200),onFocus:()=>{a.length>0&&n.length>=2&&l(!0)}}),i&&r.jsx("div",{className:"suggestions-dropdown",children:c?r.jsx("div",{className:"loading-spinner",children:"Searching..."}):a.map((m,u)=>r.jsxs("div",{className:"suggestion-item",onClick:()=>f(m),children:[r.jsx("span",{className:"suggestion-icon",children:"📍"}),r.jsx("span",{children:m.displayName||`${m.city}, ${m.state}`})]},u))})]})}const X=({children:e,size:t=24,className:n="",style:o={},...a})=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.75,strokeLinecap:"round",strokeLinejoin:"round",className:n,style:o,...a,children:e}),_s=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),vt=e=>r.jsxs(X,{...e,children:[r.jsx("rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",ry:"2"}),r.jsx("path",{d:"M9 22v-4h6v4"}),r.jsx("path",{d:"M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"})]}),Ho=e=>r.jsxs(X,{...e,children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),Mh=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Rn=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Dh=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),Uo=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M22 10v6M2 10l10-5 10 5-10 5z"}),r.jsx("path",{d:"M6 12v5c3 3 12 3 12 0v-5"})]}),Fs=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M2 4v16"}),r.jsx("path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}),r.jsx("path",{d:"M2 17h20"}),r.jsx("path",{d:"M6 8v9"})]}),Ah=e=>r.jsxs(X,{...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]}),$h=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Oh=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r.jsx("polyline",{points:"16 17 21 12 16 7"}),r.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),Bh=e=>r.jsxs(X,{...e,children:[r.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),Hh=e=>r.jsxs(X,{...e,children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Uh=e=>r.jsx(X,{...e,children:r.jsx("polyline",{points:"6 9 12 15 18 9"})}),nr=e=>r.jsxs(X,{...e,children:[r.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.jsx("polyline",{points:"12 19 5 12 12 5"})]}),Wh=e=>r.jsxs(X,{...e,children:[r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.jsx("polyline",{points:"12 5 19 12 12 19"})]}),pc=e=>r.jsxs(X,{...e,children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),qu=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Qu=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),r.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"})]}),Vh=e=>r.jsx(X,{...e,children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),Ms=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]}),Yh=e=>r.jsxs(X,{...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"5"}),r.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),qh=e=>r.jsx(X,{...e,children:r.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),Qh=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"}),r.jsx("path",{d:"M5 3v4M19 17v4M3 5h4M17 19h4"})]}),Gu=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}),r.jsx("path",{d:"M13 5v2M13 17v2M13 11v2"})]}),Gh=e=>r.jsxs(X,{...e,children:[r.jsx("path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4"}),r.jsx("path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5"}),r.jsx("path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z"})]}),Fa=e=>r.jsxs(X,{...e,children:[r.jsx("rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}),r.jsx("rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}),r.jsx("rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}),r.jsx("rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"})]}),Ds=e=>r.jsx(X,{...e,children:r.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})});function Ku(){const e=Pe(),[t,n]=x.useState(null),[o,a]=x.useState("");function s(){const i=new URLSearchParams;t!=null&&t.city&&i.append("city",t.city),o.trim()&&i.append("name",o.trim()),i.toString()?e(`/search?${i.toString()}`):alert("Please enter a city or hostel name to search")}return r.jsxs("main",{children:[r.jsx("style",{children:`
        /* ─── HERO ─── */
        .home-hero {
          padding: 6rem 0 5rem;
          position: relative;
          overflow: hidden;
          background: var(--bg-body);
        }

        .home-hero::before {
          content: '';
          position: absolute;
          top: -40%;
          left: -15%;
          width: 55%;
          height: 140%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite;
        }

        .home-hero::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -10%;
          width: 50%;
          height: 130%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
          animation: float 30s ease-in-out infinite reverse;
        }

        .hero-inner {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          padding: 0 var(--space-6);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: var(--text-sm);
          font-weight: 500;
          margin-bottom: var(--space-8);
          box-shadow: var(--shadow-sm);
          animation: fadeInUp 0.5s ease both;
        }

        .hero-badge svg {
          color: var(--warning);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: var(--text);
          margin: 0 0 var(--space-5);
          line-height: 1.08;
          letter-spacing: -0.04em;
          animation: fadeInUp 0.6s ease both;
          animation-delay: 100ms;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: var(--text-xl);
          color: var(--text-secondary);
          margin: 0 0 var(--space-10);
          font-weight: 400;
          line-height: var(--leading-relaxed);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.6s ease both;
          animation-delay: 200ms;
        }

        /* ─── SEARCH CARD ─── */
        .search-card {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: var(--space-5);
          box-shadow: var(--shadow-xl);
          max-width: 800px;
          margin: 0 auto;
          animation: fadeInUp 0.7s ease both;
          animation-delay: 300ms;
          transition: box-shadow var(--duration-slow) var(--ease-default);
        }

        .search-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.12);
        }

        body.dark-mode .search-card:hover,
        body.dark-theme .search-card:hover {
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5);
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr auto;
          gap: var(--space-3);
          align-items: stretch;
        }

        .search-btn {
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg, var(--primary), var(--primary-600));
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: var(--text-sm);
          cursor: pointer;
          transition: all var(--duration-normal) var(--ease-default);
          white-space: nowrap;
          box-shadow: var(--shadow-primary);
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .search-btn:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-primary-lg);
        }

        .search-btn:active {
          transform: translateY(0);
        }

        .search-input {
          padding: 0.75rem 1rem;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          background: var(--bg-secondary);
          color: var(--text);
          transition: all var(--duration-normal) var(--ease-default);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg);
          box-shadow: 0 0 0 3px var(--ring);
        }

        /* ─── FEATURES ─── */
        .features-section {
          padding: var(--space-20) 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.4rem 1rem;
          background: var(--primary-50);
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          margin-bottom: var(--space-4);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid var(--primary-200);
        }

        body.dark-mode .section-tag,
        body.dark-theme .section-tag {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.2);
        }

        .section-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--text);
          margin: 0 0 var(--space-3);
          letter-spacing: var(--tracking-tighter);
          line-height: var(--leading-tight);
        }

        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }

        .feature-card {
          background: var(--bg);
          padding: var(--space-8);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          transition: all var(--duration-slow) var(--ease-default);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(6, 182, 212, 0.03));
          opacity: 0;
          transition: opacity var(--duration-slow) var(--ease-default);
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-200);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary-50), rgba(6, 182, 212, 0.08));
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-5);
          color: var(--primary);
          border: 1px solid var(--primary-200);
          transition: all var(--duration-slow) var(--ease-default);
          position: relative;
          z-index: 1;
        }

        body.dark-mode .feature-icon,
        body.dark-theme .feature-icon {
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.2);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.08) rotate(3deg);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .feature-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text);
          margin: 0 0 var(--space-2);
          position: relative;
          z-index: 1;
        }

        .feature-desc {
          color: var(--text-secondary);
          line-height: var(--leading-relaxed);
          font-size: var(--text-sm);
          position: relative;
          z-index: 1;
        }

        /* ─── CTA ─── */
        .cta-section {
          padding: var(--space-20) 0;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 50%, var(--accent-dark) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 70%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite;
        }

        .cta-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          padding: 0 var(--space-6);
        }

        .cta-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin: 0 0 var(--space-3);
          letter-spacing: var(--tracking-tighter);
          line-height: var(--leading-tight);
        }

        .cta-subtitle {
          font-size: var(--text-lg);
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 var(--space-8);
          line-height: var(--leading-relaxed);
        }

        .cta-btn {
          padding: 0.875rem 2.25rem;
          background: white;
          color: var(--primary-700);
          border: none;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: var(--text-base);
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          transition: all var(--duration-normal) var(--ease-default);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        /* ─── FOOTER ─── */
        .home-footer {
          background: var(--bg);
          padding: var(--space-10) 0;
          border-top: 1px solid var(--border);
        }

        .footer-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 var(--space-6);
          text-align: center;
        }

        .footer-brand {
          font-size: var(--text-xl);
          font-weight: 700;
          margin-bottom: var(--space-2);
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-text {
          color: var(--text-tertiary);
          font-size: var(--text-sm);
          margin: var(--space-1) 0;
        }

        /* ─── STATS BAR ─── */
        .stats-bar {
          display: flex;
          justify-content: center;
          gap: var(--space-12);
          padding: var(--space-12) 0;
          border-bottom: 1px solid var(--border);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: var(--text-4xl);
          font-weight: 800;
          letter-spacing: var(--tracking-tighter);
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .home-hero {
            padding: 3rem 0 3rem;
          }
          .search-grid {
            grid-template-columns: 1fr;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--space-4);
          }
          .stats-bar {
            flex-direction: column;
            gap: var(--space-6);
            padding: var(--space-8) 0;
          }
        }
      `}),r.jsx("section",{className:"home-hero",children:r.jsxs("div",{className:"hero-inner",children:[r.jsxs("div",{className:"hero-badge",children:[r.jsx(Qh,{size:16}),r.jsx("span",{children:"Trusted by 10,000+ Students"})]}),r.jsxs("h1",{className:"hero-title",children:["Find Your Perfect",r.jsx("br",{}),r.jsx("span",{className:"hero-title-accent",children:"Student Hostel"})]}),r.jsx("p",{className:"hero-subtitle",children:"Discover verified hostels across India with the best amenities, reviews, and prices — all in one place."}),r.jsx("div",{className:"search-card",children:r.jsxs("div",{className:"search-grid",children:[r.jsx(Fh,{onSelect:n,placeholder:"City or Location"}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Hostel Name (Optional)",value:o,onChange:i=>a(i.target.value),onKeyPress:i=>i.key==="Enter"&&s()}),r.jsxs("button",{className:"search-btn",onClick:s,children:[r.jsx(Ho,{size:16}),"Search"]})]})})]})}),r.jsx("div",{className:"container",children:r.jsxs("div",{className:"stats-bar animate-stagger",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-number",children:"500+"}),r.jsx("div",{className:"stat-label",children:"Verified Hostels"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-number",children:"10K+"}),r.jsx("div",{className:"stat-label",children:"Happy Students"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-number",children:"50+"}),r.jsx("div",{className:"stat-label",children:"Cities Covered"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-number",children:"4.8"}),r.jsx("div",{className:"stat-label",children:"Average Rating"})]})]})}),r.jsx("section",{className:"features-section",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-tag",children:"How It Works"}),r.jsx("h2",{className:"section-title",children:"Simple Steps to Your New Home"}),r.jsx("p",{className:"section-subtitle",children:"Find and book your perfect hostel in minutes"})]}),r.jsxs("div",{className:"features-grid animate-stagger",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(Ho,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Search & Compare"}),r.jsx("p",{className:"feature-desc",children:"Browse hundreds of verified hostels. Filter by location, price, and amenities to find your perfect match."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx($h,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Book Instantly"}),r.jsx("p",{className:"feature-desc",children:"Create your profile, submit booking requests, and connect directly with hostel owners instantly."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(_s,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Move In"}),r.jsx("p",{className:"feature-desc",children:"Once approved, complete the payment and move into your comfortable new home away from home."})]})]})]})}),r.jsx("section",{className:"features-section",style:{background:"var(--bg-secondary)"},children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-tag",children:"For Owners"}),r.jsx("h2",{className:"section-title",children:"List Your Hostel"}),r.jsx("p",{className:"section-subtitle",children:"Reach thousands of students looking for accommodation"})]}),r.jsxs("div",{className:"features-grid animate-stagger",children:[r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(qu,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Easy Setup"}),r.jsx("p",{className:"feature-desc",children:"Create your hostel profile in minutes with our intuitive registration process."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(Dh,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Manage Bookings"}),r.jsx("p",{className:"feature-desc",children:"Review requests, approve bookings, and manage everything from one dashboard."})]}),r.jsxs("div",{className:"feature-card",children:[r.jsx("div",{className:"feature-icon",children:r.jsx(Gh,{size:22})}),r.jsx("h3",{className:"feature-title",children:"Track Payments"}),r.jsx("p",{className:"feature-desc",children:"Monitor rent payments, generate receipts, and manage finances effortlessly."})]})]})]})}),r.jsx("section",{className:"cta-section",children:r.jsxs("div",{className:"cta-inner",children:[r.jsx("h2",{className:"cta-title",children:"Ready to Find Your Hostel?"}),r.jsx("p",{className:"cta-subtitle",children:"Join thousands of students who found their perfect accommodation"}),r.jsxs(B,{to:"/register",className:"cta-btn",children:["Get Started Free",r.jsx(Wh,{size:18})]})]})}),r.jsx("footer",{className:"home-footer",children:r.jsxs("div",{className:"footer-inner",children:[r.jsx("div",{className:"footer-brand",children:"HostelHub"}),r.jsx("p",{className:"footer-text",children:"Your Trusted Student Accommodation Platform"}),r.jsx("p",{className:"footer-text",style:{marginTop:"var(--space-4)"},children:"© 2026 HostelHub. All rights reserved."})]})})]})}function Kh(){x.useEffect(()=>{const t=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",t==="dark")},[]);function e(){const t=!document.body.classList.contains("dark-mode");document.body.classList.toggle("dark-mode",t),localStorage.setItem("theme",t?"dark":"light")}return r.jsxs("main",{children:[r.jsx("style",{children:`
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
      `}),r.jsx("header",{className:"header",children:r.jsxs("nav",{className:"navbar container",children:[r.jsx(B,{to:"/",className:"nav-logo",children:"Rajesh Hostel"}),r.jsx("div",{className:"nav-right-cluster",children:r.jsx("button",{id:"theme-toggle",onClick:e,title:"Toggle dark mode",children:"🌓"})})]})}),r.jsx("section",{className:"hero-small",children:r.jsxs("div",{className:"hero-small-content container",children:[r.jsx("h1",{children:"Our Facilities"}),r.jsx("p",{children:"Experience premium amenities designed for student comfort and productivity."})]})}),r.jsx("section",{className:"facilities-grid",children:r.jsxs("div",{className:"container grid-wrapper",children:[r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/hostel5.png",alt:"Modern Hostel Bathroom"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Living Spaces"}),r.jsx("h3",{children:"AC & Non-AC Rooms"}),r.jsx("p",{children:"Comfortable living spaces with options for all budgets."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"Single/Double/Triple occupancy"}),r.jsx("li",{children:"Attached bathrooms"}),r.jsx("li",{children:"Daily housekeeping"})]}),r.jsx("a",{href:"#",className:"card-link",children:"View Details →"})]})]}),r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/hostel6.png",alt:"Hostel Dining Hall"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Dining"}),r.jsx("h3",{children:"Modern Dining Hall"}),r.jsx("p",{children:"Clean and hygienic environment with delicious food."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"4 meals per day"}),r.jsx("li",{children:"Vegetarian & non-vegetarian options"}),r.jsx("li",{children:"Special diet accommodations"})]}),r.jsx(B,{to:"/menu",className:"card-link",children:"View Menu →"})]})]}),r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/hostel7.png",alt:"Students in Study Room"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Study Areas"}),r.jsx("h3",{children:"24/7 Study Room"}),r.jsx("p",{children:"A quiet environment with ample resources for learning."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"Individual study carrels"}),r.jsx("li",{children:"High-speed WiFi"}),r.jsx("li",{children:"Reference books available"})]}),r.jsx("a",{href:"#",className:"card-link",children:"View Timings →"})]})]}),r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/hostel8.png",alt:"Hostel Fitness Center"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Recreation"}),r.jsx("h3",{children:"Fitness Center"}),r.jsx("p",{children:"Stay active with our modern gym equipment."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"Cardio machines"}),r.jsx("li",{children:"Weights & strength"}),r.jsx("li",{children:"Yoga mats available"})]}),r.jsx("a",{href:"#",className:"card-link",children:"View Schedule →"})]})]}),r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/security.png",alt:"CCTV Security Camera"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Security"}),r.jsx("h3",{children:"24/7 Security"}),r.jsx("p",{children:"Your safety is our top priority, round the clock."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"CCTV surveillance"}),r.jsx("li",{children:"Biometric entry"}),r.jsx("li",{children:"Night patrols"})]}),r.jsx("a",{href:"#",className:"card-link",children:"View Protocols →"})]})]}),r.jsxs("div",{className:"facility-card",children:[r.jsx("div",{className:"card-image",children:r.jsx("img",{src:"images/tv.png",alt:"Student in TV Lounge"})}),r.jsxs("div",{className:"card-content",children:[r.jsx("span",{className:"card-tag",children:"Recreation"}),r.jsx("h3",{children:"TV Lounge"}),r.jsx("p",{children:"Relax and unwind in our common area with friends."}),r.jsxs("ul",{className:"features-list",children:[r.jsx("li",{children:"Large LED TV"}),r.jsx("li",{children:"Comfortable seating"}),r.jsx("li",{children:"Streaming services"})]}),r.jsx("a",{href:"#",className:"card-link",children:"View Schedule →"})]})]})]})}),r.jsx("section",{className:"why-choose-us",children:r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"why-title",children:[r.jsx("h2",{children:"Why Choose Our Hostel?"}),r.jsx("p",{children:"Numbers that speak for our quality services"})]}),r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"100+"}),r.jsx("span",{className:"stat-label",children:"Happy Students"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"24/7"}),r.jsx("span",{className:"stat-label",children:"Security & Support"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"15+"}),r.jsx("span",{className:"stat-label",children:"Amenities"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-number",children:"5 min"}),r.jsx("span",{className:"stat-label",children:"From College"})]})]})]})}),r.jsx("section",{className:"booking-section",children:r.jsxs("div",{className:"container",children:[r.jsx("h2",{className:"booking-title",children:"Book Your Stay"}),r.jsxs("div",{className:"booking-grid",children:[r.jsxs("div",{className:"booking-card",children:[r.jsx("h3",{children:"Double Sharing"}),r.jsx("p",{children:"The perfect balance of privacy and community. Fully furnished with study desks."}),r.jsx("span",{className:"price",children:"₹8,000/month"}),r.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]}),r.jsxs("div",{className:"booking-card",children:[r.jsx("h3",{children:"Triple Sharing"}),r.jsx("p",{children:"A cost-effective and social option, with personal storage for everyone."}),r.jsx("span",{className:"price",children:"₹6,500/month"}),r.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]}),r.jsxs("div",{className:"booking-card",children:[r.jsx("h3",{children:"Four Sharing"}),r.jsx("p",{children:"Our most affordable and lively room, ideal for making new friends."}),r.jsx("span",{className:"price",children:"₹5,000/month"}),r.jsx("a",{href:"#",className:"book-now-btn",children:"Book Now"})]})]})]})}),r.jsx("footer",{className:"footer",children:r.jsx("div",{className:"footer-bottom",children:r.jsx("p",{children:"© 2025 SRKR Hostel Management. All rights reserved."})})})]})}function Jh({hostel:e}){var s,i,l,c;const t=()=>{var f,m,u,v,S,k,y,h;const d=[(m=(f=e.roomConfig)==null?void 0:f.single)==null?void 0:m.rent,(v=(u=e.roomConfig)==null?void 0:u.double)==null?void 0:v.rent,(k=(S=e.roomConfig)==null?void 0:S.triple)==null?void 0:k.rent,(h=(y=e.roomConfig)==null?void 0:y.four)==null?void 0:h.rent].filter(p=>p>0);return d.length>0?Math.min(...d):0},n=((s=e.rating)==null?void 0:s.average)||0,o=((i=e.rating)==null?void 0:i.count)||0,a=d=>d==null?null:d<1?`${Math.round(d*1e3)} m`:`${d} km`;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx(B,{to:`/hostel/${e._id}`,style:{textDecoration:"none",height:"100%"},children:r.jsxs("div",{className:"hostel-card",children:[r.jsxs("div",{className:"hostel-image-container",children:[e.mainImage||(l=e.images)!=null&&l[0]||e.logo?r.jsx("img",{src:e.mainImage||((c=e.images)==null?void 0:c[0])||e.logo,alt:e.name,className:"hostel-image"}):r.jsx("div",{className:"hostel-placeholder",children:"🏨"}),r.jsxs("div",{className:"hostel-badges",children:[r.jsxs("div",{style:{display:"flex",gap:"0.375rem"},children:[e.gender&&r.jsx("span",{className:"badge badge-gender",children:e.gender==="male"?"♂ Male":e.gender==="female"?"♀ Female":"⚥ Co-ed"}),e.isVerified&&r.jsx("span",{className:"badge badge-verified",children:"✓ Verified"})]}),n>0&&r.jsxs("span",{className:"badge badge-rating",children:["⭐ ",n.toFixed(1)]})]})]}),r.jsxs("div",{className:"hostel-content",children:[r.jsx("h3",{className:"hostel-name",children:e.name}),r.jsxs("div",{className:"hostel-meta",children:[r.jsxs("div",{className:"hostel-location",children:[r.jsx("span",{children:"📍"}),r.jsxs("span",{children:[e.city,", ",e.state]})]}),e.distance!==null&&e.distance!==void 0&&r.jsxs("div",{className:"hostel-distance",children:[r.jsx("span",{children:"🚗"}),r.jsxs("span",{children:[a(e.distance)," away"]})]}),r.jsx("div",{className:"hostel-rating",children:n>0?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"rating-stars",children:"★".repeat(Math.round(n))}),r.jsx("span",{className:"rating-value",children:n.toFixed(1)}),r.jsxs("span",{className:"rating-count",children:["(",o," reviews)"]})]}):r.jsx("span",{className:"rating-count",style:{fontStyle:"italic"},children:"No ratings yet"})})]}),e.amenities&&e.amenities.length>0&&r.jsxs("div",{className:"hostel-amenities",children:[e.amenities.slice(0,4).map((d,f)=>r.jsx("span",{className:"amenity-tag",children:d},f)),e.amenities.length>4&&r.jsxs("span",{className:"amenity-tag",children:["+",e.amenities.length-4]})]}),r.jsxs("div",{className:"hostel-footer",children:[r.jsxs("div",{className:"rent-box",children:[r.jsx("span",{className:"rent-label",children:"Starting from"}),r.jsxs("span",{className:"rent-amount",children:["₹",t().toLocaleString(),r.jsx("span",{className:"rent-period",children:"/mo"})]})]}),r.jsx("span",{className:"view-button",children:"View Details →"})]})]})]})})]})}function Xh(){const[e]=Ph(),[t,n]=x.useState([]),[o,a]=x.useState(!0),[s,i]=x.useState(""),[l,c]=x.useState(null),[d,f]=x.useState(""),m=e.get("city")||"",u=e.get("name")||"";x.useEffect(()=>{const k=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",k==="dark"),v()},[]),x.useEffect(()=>{S()},[m,u,l]);function v(){if(!navigator.geolocation){f("error");return}f("requesting"),navigator.geolocation.getCurrentPosition(k=>{c({lat:k.coords.latitude,lng:k.coords.longitude}),f("granted")},k=>{console.log("Location error:",k.message),f("denied")},{timeout:1e4,enableHighAccuracy:!1})}async function S(){a(!0),i("");const k={};m&&(k.city=m),u&&(k.name=u),l&&(k.userLat=l.lat,k.userLng=l.lng);const y=await Bo.search(k);a(!1),y.success?n(y.hostels):i(y.message||"Failed to search hostels")}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-secondary)"},children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"header-container",children:[r.jsxs(B,{to:"/",className:"back-link",children:[r.jsx("span",{children:"←"}),r.jsx("span",{children:"Back to Home"})]}),r.jsx("h1",{className:"page-title",children:"Search Results"}),r.jsxs("div",{className:"search-info",children:[m&&r.jsxs("span",{className:"search-tag",children:["📍 ",m]}),u&&r.jsxs("span",{className:"search-tag",children:["🏨 ",u]})]})]})}),r.jsxs("div",{className:"results-container",children:[s&&r.jsxs("div",{className:"error-message",children:[r.jsx("span",{style:{fontSize:"1.5rem"},children:"⚠️"}),r.jsx("span",{children:s})]}),o?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-icon",children:"🔄"}),r.jsx("div",{className:"loading-text",children:d==="requesting"?"Getting your location...":"Searching for hostels..."})]}):t.length>0?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"results-header",children:[r.jsxs("div",{className:"results-count",children:["Found ",r.jsx("strong",{children:t.length})," hostel",t.length!==1?"s":"",r.jsx("span",{style:{marginLeft:"0.5rem",fontWeight:400,fontSize:"0.9rem"},children:"(sorted by rating)"})]}),l&&r.jsx("div",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:"📍 Showing distance from your location"})]}),r.jsx("div",{className:"results-grid",children:t.map(k=>r.jsx(Jh,{hostel:k},k._id))})]}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h2",{className:"empty-title",children:"No Hostels Found"}),r.jsxs("p",{className:"empty-text",children:["We couldn't find any hostels matching your search criteria.",r.jsx("br",{}),"Try searching in a different city or with different keywords."]}),r.jsx(B,{to:"/",className:"empty-button",children:"← Try New Search"})]})]})]})]})}function Zh(){var g,j,E,b,w,N,R,T,A,O,U,W,K,V,Y,C,_,z,M,$,I,D;const{id:e}=Hu(),t=Pe(),[n,o]=x.useState(null),[a,s]=x.useState([]),[i,l]=x.useState(!0),[c,d]=x.useState(""),[f,m]=x.useState(""),[u,v]=x.useState(!1),[S,k]=x.useState(0);x.useEffect(()=>{const L=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",L==="dark"),h(),y()},[e]);async function y(){const L=await Ls.getByHostel(e);L.success&&s(L.reviews||[])}async function h(){l(!0);const L=await Bo.getById(e);if(L.success){const H=L.hostel,Z=H.availability||{},Ae=H.roomConfig||{},ot=Object.values(Ae).some(je=>je&&je.count>0),ut=Object.values(Z).some(je=>je&&je.totalRooms>0);if(ot&&!ut){console.log("Hostel has roomConfig but no Room documents, attempting sync...");try{const je=localStorage.getItem("token"),Te=await(await fetch(`http://localhost:5000/api/hostels/${e}/sync-rooms`,{method:"POST",headers:{Authorization:`Bearer ${je}`,"Content-Type":"application/json"}})).json();if(console.log("Sync result:",Te),Te.success&&Te.roomsCreated>0){const Nt=await Bo.getById(e);if(Nt.success){o(Nt.hostel),l(!1);return}}}catch(je){console.log("Could not sync rooms (user may not be owner):",je.message)}}o(H)}else d(L.message||"Failed to load hostel details");l(!1)}async function p(L){const H=localStorage.getItem("token"),Z=localStorage.getItem("userRole");if(!H){confirm("Please login as a student to book a room. Go to login page?")&&t("/login");return}if(Z!=="student"){alert("Only students can book rooms");return}m(L),v(!0);const Ae=await Ts.create({hostelId:e,roomType:L,studentNotes:""});v(!1),Ae.success?(alert("Booking request submitted successfully! The hostel owner will review your request."),t("/student/dashboard")):alert(Ae.message||"Failed to submit booking request")}return i?r.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-secondary, #f8fafc)"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"🔄"}),r.jsx("div",{style:{fontSize:"1.25rem",color:"var(--text-secondary, #64748b)"},children:"Loading hostel details..."})]})}):c||!n?r.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-secondary, #f8fafc)",flexDirection:"column",gap:"2rem"},children:[r.jsx("div",{style:{fontSize:"5rem"},children:"❌"}),r.jsx("div",{style:{fontSize:"1.5rem",color:"var(--text-secondary, #64748b)"},children:c||"Hostel not found"}),r.jsx(B,{to:"/",style:{padding:"1rem 2rem",background:"#4f46e5",color:"white",borderRadius:"0.75rem",textDecoration:"none",fontWeight:"600"},children:"← Back to Home"})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          padding: 3.5rem 2.5rem;
          margin-bottom: 2.5rem;
        }

        .hero-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .breadcrumb {
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          font-size: 0.875rem;
          letter-spacing: -0.01em;
        }

        .breadcrumb a {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover {
          color: var(--primary-dark);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.875rem;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .hero-location {
          font-size: 1.1875rem;
          color: var(--text-secondary);
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
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.875rem;
          font-weight: 500;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .book-btn:hover {
          background: var(--primary-dark, #4338ca);
          transform: translateY(-1px);
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
      `}),r.jsxs("div",{style:{minHeight:"100vh",background:"var(--bg-secondary)"},children:[r.jsx("div",{className:"hero-banner",children:r.jsxs("div",{className:"hero-container",children:[r.jsxs("div",{className:"breadcrumb",children:[r.jsx(B,{to:"/",children:"Home"})," / ",r.jsx(B,{to:"/search",children:"Search"})," / ",n.name]}),r.jsx("h1",{className:"hero-title",children:n.name}),r.jsxs("div",{className:"hero-location",children:[r.jsx("span",{children:"📍"}),r.jsxs("span",{children:[n.city,", ",n.state]})]})]})}),r.jsxs("div",{className:"content-wrapper",children:[(((g=n.images)==null?void 0:g.length)>0||n.mainImage||n.logo)&&r.jsxs("div",{className:"image-gallery",children:[r.jsx("div",{className:"main-image-container",children:(()=>{var H;const L=((H=n.images)==null?void 0:H.length)>0?n.images:n.mainImage?[n.mainImage]:n.logo?[n.logo]:[];return L.length>0?r.jsx("img",{src:L[S]||L[0],alt:n.name,className:"main-image"}):r.jsx("div",{className:"image-placeholder",children:"🏨"})})()}),((j=n.images)==null?void 0:j.length)>1&&r.jsx("div",{className:"thumbnail-strip",children:n.images.map((L,H)=>r.jsx("div",{className:`thumbnail ${S===H?"active":""}`,onClick:()=>k(H),children:r.jsx("img",{src:L,alt:`${n.name} ${H+1}`})},H))})]}),r.jsxs("div",{className:"columns",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"card",children:[r.jsx("h2",{className:"card-title",children:"About This Hostel"}),r.jsx("p",{className:"description",children:n.description||"A comfortable and affordable hostel for students with all essential amenities and a great living environment."})]}),r.jsxs("div",{className:"card",children:[r.jsx("h2",{className:"card-title",children:"Amenities"}),n.amenities&&n.amenities.length>0?r.jsx("div",{className:"amenities-grid",children:n.amenities.map((L,H)=>r.jsx("div",{className:"amenity-item",children:L},H))}):r.jsx("p",{className:"description",children:"No amenities listed"})]}),r.jsx("div",{className:"card",children:r.jsxs("div",{className:"contact-card",children:[r.jsx("h3",{className:"contact-title",children:"Contact Information"}),n.contactPhone&&r.jsxs("div",{className:"contact-item",children:[r.jsx("span",{style:{fontSize:"1.25rem"},children:"📞"}),r.jsx("span",{children:n.contactPhone})]}),n.contactEmail&&r.jsxs("div",{className:"contact-item",children:[r.jsx("span",{style:{fontSize:"1.25rem"},children:"✉️"}),r.jsx("span",{children:n.contactEmail})]}),r.jsxs("div",{className:"contact-item",children:[r.jsx("span",{style:{fontSize:"1.25rem"},children:"📍"}),r.jsx("span",{children:n.address})]})]})})]}),r.jsx("div",{className:"rooms-section",children:r.jsxs("div",{className:"card",children:[r.jsx("h2",{className:"card-title",children:"Available Rooms"}),((b=(E=n.roomConfig)==null?void 0:E.single)==null?void 0:b.count)>0&&r.jsx(to,{type:"single",name:"Single Room",rent:n.roomConfig.single.rent,availability:(w=n.roomAvailability)==null?void 0:w.single,totalRooms:n.roomConfig.single.count,onBook:p,isBooking:u&&f==="single"}),((R=(N=n.roomConfig)==null?void 0:N.double)==null?void 0:R.count)>0&&r.jsx(to,{type:"double",name:"Double Sharing",rent:n.roomConfig.double.rent,availability:(T=n.roomAvailability)==null?void 0:T.double,totalRooms:n.roomConfig.double.count,onBook:p,isBooking:u&&f==="double"}),((O=(A=n.roomConfig)==null?void 0:A.triple)==null?void 0:O.count)>0&&r.jsx(to,{type:"triple",name:"Triple Sharing",rent:n.roomConfig.triple.rent,availability:(U=n.roomAvailability)==null?void 0:U.triple,totalRooms:n.roomConfig.triple.count,onBook:p,isBooking:u&&f==="triple"}),((K=(W=n.roomConfig)==null?void 0:W.four)==null?void 0:K.count)>0&&r.jsx(to,{type:"four",name:"Four Sharing",rent:n.roomConfig.four.rent,availability:(V=n.roomAvailability)==null?void 0:V.four,totalRooms:n.roomConfig.four.count,onBook:p,isBooking:u&&f==="four"}),!((C=(Y=n.roomConfig)==null?void 0:Y.single)!=null&&C.count)&&!((z=(_=n.roomConfig)==null?void 0:_.double)!=null&&z.count)&&!(($=(M=n.roomConfig)==null?void 0:M.triple)!=null&&$.count)&&!((D=(I=n.roomConfig)==null?void 0:I.four)!=null&&D.count)&&r.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No rooms configured for this hostel yet."})]})}),r.jsxs("div",{className:"reviews-section",style:{background:"var(--bg, #fff)",borderRadius:"1rem",padding:"1.5rem",marginTop:"1.5rem",border:"1px solid var(--border, #e5e5e5)"},children:[r.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:600,marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:["⭐ Reviews & Ratings",r.jsxs("span",{style:{fontSize:"0.875rem",fontWeight:400,color:"var(--text-secondary)"},children:["(",a.length," ",a.length===1?"review":"reviews",")"]})]}),a.length===0?r.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)",background:"var(--bg-secondary)",borderRadius:"0.5rem"},children:[r.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"📝"}),"No reviews yet. Be the first to review this hostel!"]}):r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.map(L=>{var H;return r.jsxs("div",{style:{padding:"1rem",background:"var(--bg-secondary)",borderRadius:"0.75rem",border:L.isComplaint?"1px solid #ef4444":"1px solid var(--border)"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.75rem"},children:[r.jsxs("div",{children:[r.jsxs("div",{style:{fontWeight:600,marginBottom:"0.25rem"},children:[((H=L.student)==null?void 0:H.name)||"Anonymous",L.isComplaint&&r.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.6875rem",background:"#fef2f2",color:"#dc2626",padding:"0.125rem 0.5rem",borderRadius:"1rem",fontWeight:500},children:"Complaint"})]}),r.jsxs("div",{style:{color:"#fbbf24",fontSize:"0.875rem"},children:["★".repeat(L.rating),"☆".repeat(5-L.rating)]})]}),r.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-secondary)"},children:new Date(L.createdAt).toLocaleDateString()})]}),L.comment&&r.jsx("p",{style:{margin:0,fontSize:"0.9375rem",color:"var(--text-secondary)",lineHeight:1.6},children:L.comment}),L.ownerResponse&&r.jsxs("div",{style:{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:"1px solid var(--border)",paddingLeft:"1rem",borderLeft:"3px solid var(--primary)"},children:[r.jsx("div",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--primary)",marginBottom:"0.25rem"},children:"Owner Response:"}),r.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--text-secondary)"},children:L.ownerResponse})]})]},L._id)})})]})]})]})]})]})}function to({type:e,name:t,rent:n,availability:o,totalRooms:a,onBook:s,isBooking:i}){const l=o&&o.totalRooms>0;function c(u){switch(u){case"single":return 1;case"double":return 2;case"triple":return 3;case"four":return 4;default:return 1}}let d,f;if(l)d=o.availableBeds||0,o.totalBeds,f=o.rooms||[];else{const u=c(e);d=a*u,f=[]}const m=d>0;return r.jsxs("div",{className:"room-card",style:{opacity:m?1:.6},children:[r.jsxs("div",{className:"room-header",children:[r.jsxs("div",{className:"room-name",children:["🛏️ ",t]}),r.jsxs("div",{className:"room-price",children:["₹",n,"/month"]})]}),r.jsxs("div",{className:"room-availability",children:[r.jsx("strong",{children:d})," beds available in ",r.jsx("strong",{children:f.length||a})," rooms"]}),f.length>0&&r.jsxs("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"var(--bg-secondary)",borderRadius:"0.5rem",fontSize:"0.8125rem"},children:[r.jsx("div",{style:{fontWeight:"600",marginBottom:"0.5rem",color:"var(--text-secondary)"},children:"Available Rooms:"}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:[f.slice(0,6).map(u=>r.jsxs("span",{style:{padding:"0.25rem 0.75rem",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"0.25rem",fontSize:"0.75rem"},children:["Room ",u.number," (",u.availableBeds,"/",u.capacity," beds)"]},u.id)),f.length>6&&r.jsxs("span",{style:{padding:"0.25rem 0.75rem",color:"var(--text-secondary)",fontSize:"0.75rem"},children:["+",f.length-6," more"]})]})]}),r.jsx("button",{className:"book-btn",onClick:()=>s(e),disabled:!m||i,style:{opacity:m?1:.5},children:i?"Booking...":m?"Book Now":"No Beds Available"})]})}function eg(){const e=Pe(),[t,n]=x.useState(""),[o,a]=x.useState({email:"",username:"",password:""}),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const u=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",u==="dark"),document.body.classList.toggle("dark-theme",u==="dark")},[]);const d=u=>{a({...o,[u.target.name]:u.target.value}),i("")},f=async u=>{u.preventDefault(),i(""),c(!0);let v;t==="student"?v=await Wt.studentLogin(o.email,o.password):v=await Wt.ownerLogin(o.username,o.password),c(!1),v.success?e(t==="student"?"/student/dashboard":"/owner/dashboard"):i(v.message||"Invalid credentials")},m=`
    .auth-page {
      min-height: 100vh;
      display: flex;
      background: var(--bg-body);
    }

    .auth-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
    }

    .auth-right {
      flex: 1;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 50%, var(--accent-dark) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
      position: relative;
      overflow: hidden;
    }

    .auth-right::before {
      content: '';
      position: absolute;
      top: -30%;
      right: -20%;
      width: 60%;
      height: 150%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      animation: float 20s ease-in-out infinite;
    }

    .auth-right-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      max-width: 400px;
    }

    .auth-right-title {
      font-size: var(--text-4xl);
      font-weight: 800;
      margin-bottom: var(--space-4);
      letter-spacing: var(--tracking-tighter);
      line-height: var(--leading-tight);
    }

    .auth-right-text {
      font-size: var(--text-lg);
      opacity: 0.85;
      line-height: var(--leading-relaxed);
    }

    .auth-content {
      max-width: 420px;
      width: 100%;
      animation: fadeInUp 0.5s ease both;
    }

    .auth-back {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--text-secondary);
      font-size: var(--text-sm);
      font-weight: 500;
      margin-bottom: var(--space-8);
      transition: color var(--duration-fast) var(--ease-default);
    }

    .auth-back:hover {
      color: var(--primary);
    }

    .auth-header {
      margin-bottom: var(--space-8);
    }

    .auth-title {
      font-size: var(--text-3xl);
      font-weight: 700;
      margin-bottom: var(--space-2);
      letter-spacing: var(--tracking-tighter);
      color: var(--text);
    }

    .auth-subtitle {
      color: var(--text-secondary);
      font-size: var(--text-base);
    }

    .role-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: 0.375rem 0.875rem;
      background: var(--primary-50);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: 600;
      margin-bottom: var(--space-4);
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    body.dark-mode .role-badge,
    body.dark-theme .role-badge {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .roles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
      margin-bottom: var(--space-8);
    }

    .role-card {
      background: var(--bg);
      border: 1.5px solid var(--border);
      border-radius: var(--radius-xl);
      padding: var(--space-8) var(--space-6);
      cursor: pointer;
      transition: all var(--duration-normal) var(--ease-default);
      text-align: center;
      position: relative;
    }

    .role-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-300);
    }

    .role-card-icon {
      width: 56px;
      height: 56px;
      background: var(--primary-50);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-4);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      transition: all var(--duration-normal) var(--ease-default);
    }

    body.dark-mode .role-card-icon,
    body.dark-theme .role-card-icon {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .role-card:hover .role-card-icon {
      transform: scale(1.08);
    }

    .role-card-title {
      font-size: var(--text-lg);
      font-weight: 600;
      margin-bottom: var(--space-2);
      color: var(--text);
    }

    .role-card-desc {
      color: var(--text-secondary);
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
    }

    .auth-error {
      background: var(--danger-light);
      color: var(--danger-dark);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-5);
      font-size: var(--text-sm);
      font-weight: 500;
      border: 1px solid rgba(239, 68, 68, 0.15);
      display: flex;
      align-items: center;
      gap: var(--space-2);
      animation: fadeInDown 0.3s ease both;
    }

    .auth-footer {
      margin-top: var(--space-6);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      font-size: var(--text-sm);
    }

    .auth-footer-link {
      color: var(--primary);
      font-weight: 500;
    }

    .auth-footer-link:hover {
      text-decoration: underline;
    }

    .auth-footer-text {
      color: var(--text-secondary);
    }

    .auth-change-btn {
      color: var(--primary);
      font-weight: 500;
      font-size: var(--text-sm);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
    }

    .auth-change-btn:hover {
      text-decoration: underline;
    }

    .input-icon-wrap {
      position: relative;
    }

    .input-icon {
      position: absolute;
      left: var(--space-3);
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-tertiary);
      pointer-events: none;
    }

    .input-icon + .form-input {
      padding-left: 2.5rem;
    }

    @media (max-width: 768px) {
      .auth-right { display: none; }
      .roles-grid { grid-template-columns: 1fr; }
      .auth-title { font-size: var(--text-2xl); }
    }
  `;return t?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:m}),r.jsxs("div",{className:"auth-page",children:[r.jsx("div",{className:"auth-left",children:r.jsxs("div",{className:"auth-content",children:[r.jsxs(B,{to:"/",className:"auth-back",children:[r.jsx(nr,{size:16}),"Back to Home"]}),r.jsxs("div",{className:"auth-header",children:[r.jsxs("div",{className:"role-badge",children:[t==="student"?r.jsx(Uo,{size:14}):r.jsx(vt,{size:14}),t==="student"?"Student":"Owner"]}),r.jsx("h1",{className:"auth-title",children:"Welcome Back"}),r.jsx("p",{className:"auth-subtitle",children:"Login to your account"})]}),s&&r.jsx("div",{className:"auth-error",children:s}),r.jsxs("form",{onSubmit:f,children:[t==="student"?r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ms,{size:16,className:"input-icon"}),r.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Enter your email",autoFocus:!0})]})]}):r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Username"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Rn,{size:16,className:"input-icon"}),r.jsx("input",{type:"text",name:"username",className:"form-input",value:o.username,onChange:d,required:!0,placeholder:"Enter your username",autoFocus:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Password"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ds,{size:16,className:"input-icon"}),r.jsx("input",{type:"password",name:"password",className:"form-input",value:o.password,onChange:d,required:!0,placeholder:"Enter your password"})]})]}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",disabled:l,children:l?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"spinner spinner-sm",style:{borderTopColor:"white",borderColor:"rgba(255,255,255,0.3)"}}),"Logging in..."]}):"Login"})]}),r.jsxs("div",{className:"auth-footer",children:[r.jsxs("button",{type:"button",className:"auth-change-btn",onClick:()=>n(""),children:[r.jsx(nr,{size:14}),"Change Account Type"]}),r.jsxs("div",{children:[r.jsx("span",{className:"auth-footer-text",children:"Don't have an account? "}),r.jsx(B,{to:"/register",className:"auth-footer-link",children:"Register"})]})]})]})}),r.jsx("div",{className:"auth-right",children:r.jsxs("div",{className:"auth-right-content",children:[r.jsxs("h2",{className:"auth-right-title",children:["Your Home",r.jsx("br",{}),"Away From Home"]}),r.jsx("p",{className:"auth-right-text",children:"Trusted by thousands of students and hostel owners across India."})]})})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:m}),r.jsxs("div",{className:"auth-page",children:[r.jsx("div",{className:"auth-left",children:r.jsxs("div",{className:"auth-content",children:[r.jsxs(B,{to:"/",className:"auth-back",children:[r.jsx(nr,{size:16}),"Back to Home"]}),r.jsxs("div",{className:"auth-header",children:[r.jsx("h1",{className:"auth-title",children:"Welcome Back"}),r.jsx("p",{className:"auth-subtitle",children:"Select your account type to continue"})]}),r.jsxs("div",{className:"roles-grid",children:[r.jsxs("div",{className:"role-card",onClick:()=>n("student"),children:[r.jsx("div",{className:"role-card-icon",children:r.jsx(Uo,{size:24})}),r.jsx("h2",{className:"role-card-title",children:"Student"}),r.jsx("p",{className:"role-card-desc",children:"Access your bookings, search hostels, and manage your profile."})]}),r.jsxs("div",{className:"role-card",onClick:()=>n("owner"),children:[r.jsx("div",{className:"role-card-icon",children:r.jsx(vt,{size:24})}),r.jsx("h2",{className:"role-card-title",children:"Hostel Owner"}),r.jsx("p",{className:"role-card-desc",children:"Manage your hostel, review bookings, and track payments."})]})]}),r.jsx("div",{className:"auth-footer",children:r.jsxs("div",{children:[r.jsx("span",{className:"auth-footer-text",children:"Don't have an account? "}),r.jsx(B,{to:"/register",className:"auth-footer-link",children:"Register"})]})})]})}),r.jsx("div",{className:"auth-right",children:r.jsxs("div",{className:"auth-right-content",children:[r.jsxs("h2",{className:"auth-right-title",children:["Your Home",r.jsx("br",{}),"Away From Home"]}),r.jsx("p",{className:"auth-right-text",children:"Trusted by thousands of students and hostel owners across India."})]})})]})]})}function tg(){const e=Pe(),[t,n]=x.useState(""),[o,a]=x.useState({name:"",email:"",phone:"",password:"",confirmPassword:"",username:"",hostelName:""}),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const u=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",u==="dark"),document.body.classList.toggle("dark-theme",u==="dark")},[]);const d=u=>{a({...o,[u.target.name]:u.target.value}),i("")},f=async u=>{if(u.preventDefault(),i(""),o.password!==o.confirmPassword){i("Passwords do not match");return}if(o.password.length<6){i("Password must be at least 6 characters");return}c(!0);let v;t==="student"?v=await Wt.studentRegister({name:o.name,email:o.email,phone:o.phone,password:o.password}):v=await Wt.ownerRegister({username:o.username,email:o.email,password:o.password,hostelName:o.hostelName}),c(!1),v.success?t==="student"?(alert("Registration successful! Please check your email to verify your account."),e("/login")):(alert("Registration successful!"),e("/owner/dashboard")):i(v.message||"Registration failed")},m=`
    .auth-page {
      min-height: 100vh;
      display: flex;
      background: var(--bg-body);
    }

    .auth-left {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
      overflow-y: auto;
    }

    .auth-right {
      flex: 1;
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 50%, var(--accent-dark) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-8);
      position: relative;
      overflow: hidden;
    }

    .auth-right::before {
      content: '';
      position: absolute;
      top: -30%;
      right: -20%;
      width: 60%;
      height: 150%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      animation: float 20s ease-in-out infinite;
    }

    .auth-right-content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      max-width: 400px;
    }

    .auth-right-title {
      font-size: var(--text-4xl);
      font-weight: 800;
      margin-bottom: var(--space-4);
      letter-spacing: var(--tracking-tighter);
      line-height: var(--leading-tight);
    }

    .auth-right-text {
      font-size: var(--text-lg);
      opacity: 0.85;
      line-height: var(--leading-relaxed);
    }

    .auth-content {
      max-width: 460px;
      width: 100%;
      animation: fadeInUp 0.5s ease both;
    }

    .auth-back {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--text-secondary);
      font-size: var(--text-sm);
      font-weight: 500;
      margin-bottom: var(--space-6);
      transition: color var(--duration-fast) var(--ease-default);
    }

    .auth-back:hover {
      color: var(--primary);
    }

    .auth-header {
      margin-bottom: var(--space-6);
    }

    .auth-title {
      font-size: var(--text-3xl);
      font-weight: 700;
      margin-bottom: var(--space-2);
      letter-spacing: var(--tracking-tighter);
      color: var(--text);
    }

    .auth-subtitle {
      color: var(--text-secondary);
      font-size: var(--text-base);
    }

    .role-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: 0.375rem 0.875rem;
      background: var(--primary-50);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      border-radius: var(--radius-full);
      font-size: var(--text-xs);
      font-weight: 600;
      margin-bottom: var(--space-4);
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    body.dark-mode .role-badge,
    body.dark-theme .role-badge {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .roles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
      margin-bottom: var(--space-8);
    }

    .role-card {
      background: var(--bg);
      border: 1.5px solid var(--border);
      border-radius: var(--radius-xl);
      padding: var(--space-8) var(--space-6);
      cursor: pointer;
      transition: all var(--duration-normal) var(--ease-default);
      text-align: center;
    }

    .role-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-300);
    }

    .role-card-icon {
      width: 56px;
      height: 56px;
      background: var(--primary-50);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-4);
      color: var(--primary);
      border: 1px solid var(--primary-200);
      transition: all var(--duration-normal) var(--ease-default);
    }

    body.dark-mode .role-card-icon,
    body.dark-theme .role-card-icon {
      background: rgba(99, 102, 241, 0.12);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .role-card:hover .role-card-icon {
      transform: scale(1.08);
    }

    .role-card-title {
      font-size: var(--text-lg);
      font-weight: 600;
      margin-bottom: var(--space-2);
      color: var(--text);
    }

    .role-card-desc {
      color: var(--text-secondary);
      font-size: var(--text-sm);
      line-height: var(--leading-relaxed);
    }

    .auth-error {
      background: var(--danger-light);
      color: var(--danger-dark);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-5);
      font-size: var(--text-sm);
      font-weight: 500;
      border: 1px solid rgba(239, 68, 68, 0.15);
      animation: fadeInDown 0.3s ease both;
    }

    .auth-footer {
      margin-top: var(--space-6);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      font-size: var(--text-sm);
    }

    .auth-footer-link {
      color: var(--primary);
      font-weight: 500;
    }

    .auth-footer-link:hover {
      text-decoration: underline;
    }

    .auth-footer-text {
      color: var(--text-secondary);
    }

    .auth-change-btn {
      color: var(--primary);
      font-weight: 500;
      font-size: var(--text-sm);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
    }

    .auth-change-btn:hover {
      text-decoration: underline;
    }

    .input-icon-wrap {
      position: relative;
    }

    .input-icon {
      position: absolute;
      left: var(--space-3);
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-tertiary);
      pointer-events: none;
    }

    .input-icon + .form-input {
      padding-left: 2.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-4);
    }

    @media (max-width: 768px) {
      .auth-right { display: none; }
      .roles-grid { grid-template-columns: 1fr; }
      .auth-title { font-size: var(--text-2xl); }
      .form-row { grid-template-columns: 1fr; }
    }
  `;return t?r.jsxs(r.Fragment,{children:[r.jsx("style",{children:m}),r.jsxs("div",{className:"auth-page",children:[r.jsx("div",{className:"auth-left",children:r.jsxs("div",{className:"auth-content",children:[r.jsxs(B,{to:"/",className:"auth-back",children:[r.jsx(nr,{size:16}),"Back to Home"]}),r.jsxs("div",{className:"auth-header",children:[r.jsxs("div",{className:"role-badge",children:[t==="student"?r.jsx(Uo,{size:14}):r.jsx(vt,{size:14}),t==="student"?"Student":"Owner"]}),r.jsx("h1",{className:"auth-title",children:"Create Account"}),r.jsx("p",{className:"auth-subtitle",children:"Join HostelHub today"})]}),s&&r.jsx("div",{className:"auth-error",children:s}),r.jsxs("form",{onSubmit:f,children:[t==="student"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Full Name"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Rn,{size:16,className:"input-icon"}),r.jsx("input",{type:"text",name:"name",className:"form-input",value:o.name,onChange:d,required:!0,placeholder:"Enter your full name"})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ms,{size:16,className:"input-icon"}),r.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Email address"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone Number"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Vh,{size:16,className:"input-icon"}),r.jsx("input",{type:"tel",name:"phone",className:"form-input",value:o.phone,onChange:d,required:!0,placeholder:"Phone number"})]})]})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Username"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Rn,{size:16,className:"input-icon"}),r.jsx("input",{type:"text",name:"username",className:"form-input",value:o.username,onChange:d,required:!0,placeholder:"Choose a username"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ms,{size:16,className:"input-icon"}),r.jsx("input",{type:"email",name:"email",className:"form-input",value:o.email,onChange:d,required:!0,placeholder:"Email address"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Hostel Name"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(vt,{size:16,className:"input-icon"}),r.jsx("input",{type:"text",name:"hostelName",className:"form-input",value:o.hostelName,onChange:d,required:!0,placeholder:"Enter your hostel name"})]})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Password"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ds,{size:16,className:"input-icon"}),r.jsx("input",{type:"password",name:"password",className:"form-input",value:o.password,onChange:d,required:!0,placeholder:"Min 6 characters",minLength:6})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Confirm Password"}),r.jsxs("div",{className:"input-icon-wrap",children:[r.jsx(Ds,{size:16,className:"input-icon"}),r.jsx("input",{type:"password",name:"confirmPassword",className:"form-input",value:o.confirmPassword,onChange:d,required:!0,placeholder:"Confirm password"})]})]})]}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-full btn-lg",disabled:l,children:l?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"spinner spinner-sm",style:{borderTopColor:"white",borderColor:"rgba(255,255,255,0.3)"}}),"Creating Account..."]}):"Create Account"})]}),r.jsxs("div",{className:"auth-footer",children:[r.jsxs("button",{type:"button",className:"auth-change-btn",onClick:()=>n(""),children:[r.jsx(nr,{size:14}),"Change Account Type"]}),r.jsxs("div",{children:[r.jsx("span",{className:"auth-footer-text",children:"Already have an account? "}),r.jsx(B,{to:"/login",className:"auth-footer-link",children:"Login"})]})]})]})}),r.jsx("div",{className:"auth-right",children:r.jsxs("div",{className:"auth-right-content",children:[r.jsxs("h2",{className:"auth-right-title",children:["Start Your",r.jsx("br",{}),"Journey Today"]}),r.jsx("p",{className:"auth-right-text",children:"Join the largest student accommodation platform in India."})]})})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("style",{children:m}),r.jsxs("div",{className:"auth-page",children:[r.jsx("div",{className:"auth-left",children:r.jsxs("div",{className:"auth-content",children:[r.jsxs(B,{to:"/",className:"auth-back",children:[r.jsx(nr,{size:16}),"Back to Home"]}),r.jsxs("div",{className:"auth-header",children:[r.jsx("h1",{className:"auth-title",children:"Create Account"}),r.jsx("p",{className:"auth-subtitle",children:"Choose your account type to get started"})]}),r.jsxs("div",{className:"roles-grid",children:[r.jsxs("div",{className:"role-card",onClick:()=>n("student"),children:[r.jsx("div",{className:"role-card-icon",children:r.jsx(Uo,{size:24})}),r.jsx("h2",{className:"role-card-title",children:"Student"}),r.jsx("p",{className:"role-card-desc",children:"Search and book hostels, manage reservations, and connect with owners."})]}),r.jsxs("div",{className:"role-card",onClick:()=>n("owner"),children:[r.jsx("div",{className:"role-card-icon",children:r.jsx(vt,{size:24})}),r.jsx("h2",{className:"role-card-title",children:"Hostel Owner"}),r.jsx("p",{className:"role-card-desc",children:"List your hostel, manage bookings, track payments, and grow your business."})]})]}),r.jsx("div",{className:"auth-footer",children:r.jsxs("div",{children:[r.jsx("span",{className:"auth-footer-text",children:"Already have an account? "}),r.jsx(B,{to:"/login",className:"auth-footer-link",children:"Login"})]})})]})}),r.jsx("div",{className:"auth-right",children:r.jsxs("div",{className:"auth-right-content",children:[r.jsxs("h2",{className:"auth-right-title",children:["Start Your",r.jsx("br",{}),"Journey Today"]}),r.jsx("p",{className:"auth-right-text",children:"Join the largest student accommodation platform in India."})]})})]})]})}const fc=[{value:"maintenance",label:"🔧 Maintenance",desc:"Plumbing, electrical, furniture"},{value:"cleanliness",label:"🧹 Cleanliness",desc:"Room/common area cleaning"},{value:"food",label:"🍽️ Food",desc:"Mess/food quality issues"},{value:"wifi_internet",label:"📶 WiFi/Internet",desc:"Connectivity problems"},{value:"water_supply",label:"💧 Water Supply",desc:"Water availability"},{value:"electricity",label:"⚡ Electricity",desc:"Power issues"},{value:"security",label:"🔒 Security",desc:"Safety concerns"},{value:"noise",label:"🔊 Noise",desc:"Disturbance issues"},{value:"roommate",label:"👥 Roommate",desc:"Roommate conflicts"},{value:"staff_behavior",label:"👤 Staff Behavior",desc:"Staff conduct"},{value:"billing",label:"💰 Billing",desc:"Payment disputes"},{value:"amenities",label:"🏠 Amenities",desc:"Missing/broken amenities"},{value:"other",label:"📝 Other",desc:"Other issues"}],hc=[{value:"low",label:"Low",color:"#6b7280"},{value:"medium",label:"Medium",color:"#f59e0b"},{value:"high",label:"High",color:"#ef4444"},{value:"urgent",label:"Urgent",color:"#dc2626"}];function rg({activeBooking:e}){const[t,n]=x.useState([]),[o,a]=x.useState(!0),[s,i]=x.useState(!1),[l,c]=x.useState(!1),[d,f]=x.useState({category:"",priority:"medium",subject:"",description:""}),[m,u]=x.useState(null),[v,S]=x.useState({rating:0,feedback:""});x.useEffect(()=>{k()},[]);const k=async()=>{try{const b=localStorage.getItem("token"),N=await(await fetch("http://localhost:5000/api/complaints/my",{headers:{Authorization:`Bearer ${b}`}})).json();N.success&&n(N.complaints)}catch(b){console.error("Fetch complaints error:",b)}finally{a(!1)}},y=async b=>{if(b.preventDefault(),!e){alert("You need an active booking to raise a complaint");return}c(!0);try{const w=localStorage.getItem("token"),R=await(await fetch("http://localhost:5000/api/complaints",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${w}`},body:JSON.stringify({hostelId:e.hostel._id||e.hostel,...d})})).json();R.success?(i(!1),f({category:"",priority:"medium",subject:"",description:""}),k()):alert(R.message||"Failed to submit complaint")}catch{alert("Failed to submit complaint")}finally{c(!1)}},h=async()=>{if(!(!m||v.rating===0))try{const b=localStorage.getItem("token");(await(await fetch(`http://localhost:5000/api/complaints/${m._id}/feedback`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b}`},body:JSON.stringify(v)})).json()).success&&(u(null),S({rating:0,feedback:""}),k())}catch{alert("Failed to submit feedback")}},p=async b=>{const w=prompt("Why are you reopening this complaint?");if(w)try{const N=localStorage.getItem("token");(await(await fetch(`http://localhost:5000/api/complaints/${b}/reopen`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify({reason:w})})).json()).success&&k()}catch{alert("Failed to reopen complaint")}},g=b=>{const w={open:{bg:"rgba(251, 191, 36, 0.15)",text:"#f59e0b",border:"rgba(251, 191, 36, 0.3)"},in_progress:{bg:"rgba(59, 130, 246, 0.15)",text:"#3b82f6",border:"rgba(59, 130, 246, 0.3)"},resolved:{bg:"rgba(34, 197, 94, 0.15)",text:"#22c55e",border:"rgba(34, 197, 94, 0.3)"},closed:{bg:"rgba(107, 114, 128, 0.15)",text:"#6b7280",border:"rgba(107, 114, 128, 0.3)"},reopened:{bg:"rgba(239, 68, 68, 0.15)",text:"#ef4444",border:"rgba(239, 68, 68, 0.3)"}};return w[b]||w.open},j=b=>{const w=hc.find(N=>N.value===b);return(w==null?void 0:w.color)||"#6b7280"},E=b=>new Date(b).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .complaints-section {
          margin-top: 2rem;
        }

        .complaints-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .complaints-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary, #1f2937);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .complaints-count {
          background: var(--bg-tertiary, #f3f4f6);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary, #6b7280);
        }

        .new-complaint-btn {
          padding: 0.625rem 1.25rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .new-complaint-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .new-complaint-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .complaint-form-card {
          background: var(--bg-primary, #ffffff);
          border: 1px solid var(--border-default, #e5e7eb);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .form-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: var(--text-primary, #1f2937);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary, #6b7280);
          margin-bottom: 0.5rem;
        }

        .form-select, .form-input, .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-default, #e5e7eb);
          border-radius: 0.5rem;
          background: var(--bg-secondary, #f9fafb);
          color: var(--text-primary, #1f2937);
          font-size: 0.9375rem;
        }

        .form-select:focus, .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.5rem;
        }

        .category-option {
          padding: 0.75rem;
          border: 2px solid var(--border-default, #e5e7eb);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }

        .category-option:hover {
          border-color: #6366f1;
        }

        .category-option.selected {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        .category-option-icon {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .category-option-label {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-primary, #1f2937);
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 1.25rem;
        }

        .btn-cancel {
          padding: 0.625rem 1.25rem;
          background: var(--bg-tertiary, #f3f4f6);
          color: var(--text-secondary, #6b7280);
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-submit {
          padding: 0.625rem 1.5rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .complaints-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .complaint-card {
          background: var(--bg-primary, #ffffff);
          border: 1px solid var(--border-default, #e5e7eb);
          border-radius: 0.75rem;
          padding: 1.25rem;
          transition: all 0.2s;
        }

        .complaint-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .complaint-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .complaint-title {
          font-weight: 600;
          color: var(--text-primary, #1f2937);
          margin-bottom: 0.25rem;
        }

        .complaint-meta {
          display: flex;
          gap: 0.75rem;
          font-size: 0.8125rem;
          color: var(--text-tertiary, #9ca3af);
        }

        .complaint-badges {
          display: flex;
          gap: 0.5rem;
        }

        .status-badge, .priority-badge {
          padding: 0.25rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .complaint-body {
          color: var(--text-secondary, #6b7280);
          font-size: 0.9375rem;
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .complaint-response {
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid #3b82f6;
          padding: 0.75rem 1rem;
          margin-top: 0.75rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .response-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 0.25rem;
        }

        .response-text {
          font-size: 0.875rem;
          color: var(--text-secondary, #6b7280);
        }

        .complaint-resolution {
          background: rgba(34, 197, 94, 0.05);
          border-left: 3px solid #22c55e;
          padding: 0.75rem 1rem;
          margin-top: 0.75rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .resolution-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #22c55e;
          margin-bottom: 0.25rem;
        }

        .complaint-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-default, #e5e7eb);
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn.feedback {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .action-btn.reopen {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .empty-complaints {
          text-align: center;
          padding: 3rem 2rem;
          color: var(--text-secondary, #6b7280);
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feedback-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .feedback-content {
          background: var(--bg-primary, #ffffff);
          border-radius: 1rem;
          padding: 1.5rem;
          max-width: 400px;
          width: 90%;
        }

        .rating-stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star-btn {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--border-default, #e5e7eb);
          transition: all 0.15s;
        }

        .star-btn.active {
          color: #fbbf24;
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .complaints-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}),r.jsxs("div",{className:"complaints-section",children:[r.jsxs("div",{className:"complaints-header",children:[r.jsxs("div",{className:"complaints-title",children:["🎫 My Complaints",r.jsx("span",{className:"complaints-count",children:t.length})]}),r.jsx("button",{className:"new-complaint-btn",onClick:()=>i(!0),disabled:!e,title:e?"":"You need an active booking to raise a complaint",children:"+ Raise Issue"})]}),s&&r.jsxs("div",{className:"complaint-form-card",children:[r.jsx("div",{className:"form-title",children:"Raise a New Complaint"}),r.jsxs("form",{onSubmit:y,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Category *"}),r.jsx("div",{className:"category-grid",children:fc.map(b=>r.jsxs("div",{className:`category-option ${d.category===b.value?"selected":""}`,onClick:()=>f({...d,category:b.value}),children:[r.jsx("div",{className:"category-option-icon",children:b.label.split(" ")[0]}),r.jsx("div",{className:"category-option-label",children:b.label.split(" ").slice(1).join(" ")})]},b.value))})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Subject *"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"Brief description of the issue",value:d.subject,onChange:b=>f({...d,subject:b.target.value}),required:!0,maxLength:200})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Priority"}),r.jsx("select",{className:"form-select",value:d.priority,onChange:b=>f({...d,priority:b.target.value}),children:hc.map(b=>r.jsx("option",{value:b.value,children:b.label},b.value))})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Description *"}),r.jsx("textarea",{className:"form-textarea",placeholder:"Describe the issue in detail...",value:d.description,onChange:b=>f({...d,description:b.target.value}),required:!0,maxLength:2e3})]}),r.jsxs("div",{className:"form-actions",children:[r.jsx("button",{type:"button",className:"btn-cancel",onClick:()=>i(!1),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn-submit",disabled:l||!d.category||!d.subject||!d.description,children:l?"Submitting...":"Submit Complaint"})]})]})]}),o?r.jsx("div",{className:"empty-complaints",children:"Loading complaints..."}):t.length===0?r.jsxs("div",{className:"empty-complaints",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("div",{children:"No complaints yet"}),r.jsx("div",{style:{fontSize:"0.875rem",marginTop:"0.5rem"},children:e?'Having an issue? Click "Raise Issue" above':"Book a hostel first to raise issues"})]}):r.jsx("div",{className:"complaints-list",children:t.map(b=>{var N,R;const w=g(b.status);return r.jsxs("div",{className:"complaint-card",children:[r.jsxs("div",{className:"complaint-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"complaint-title",children:b.subject}),r.jsxs("div",{className:"complaint-meta",children:[r.jsx("span",{children:((N=fc.find(T=>T.value===b.category))==null?void 0:N.label)||b.category}),r.jsx("span",{children:"•"}),r.jsx("span",{children:(R=b.hostel)==null?void 0:R.name}),r.jsx("span",{children:"•"}),r.jsx("span",{children:E(b.createdAt)})]})]}),r.jsxs("div",{className:"complaint-badges",children:[r.jsx("span",{className:"priority-badge",style:{background:`${j(b.priority)}15`,color:j(b.priority),border:`1px solid ${j(b.priority)}30`},children:b.priority}),r.jsx("span",{className:"status-badge",style:{background:w.bg,color:w.text,border:`1px solid ${w.border}`},children:b.status.replace("_"," ")})]})]}),r.jsx("div",{className:"complaint-body",children:b.description}),b.ownerResponse&&r.jsxs("div",{className:"complaint-response",children:[r.jsx("div",{className:"response-label",children:"Owner's Response"}),r.jsx("div",{className:"response-text",children:b.ownerResponse})]}),b.resolution&&r.jsxs("div",{className:"complaint-resolution",children:[r.jsx("div",{className:"resolution-label",children:"Resolution"}),r.jsx("div",{className:"response-text",children:b.resolution})]}),b.status==="resolved"&&!b.studentRating&&r.jsxs("div",{className:"complaint-actions",children:[r.jsx("button",{className:"action-btn feedback",onClick:()=>u(b),children:"✓ Give Feedback"}),r.jsx("button",{className:"action-btn reopen",onClick:()=>p(b._id),children:"↺ Reopen"})]}),b.studentRating&&r.jsxs("div",{style:{marginTop:"0.75rem",fontSize:"0.875rem",color:"var(--text-secondary)"},children:["Your rating: ","⭐".repeat(b.studentRating),b.studentFeedback&&` - "${b.studentFeedback}"`]})]},b._id)})}),m&&r.jsx("div",{className:"feedback-modal",onClick:()=>u(null),children:r.jsxs("div",{className:"feedback-content",onClick:b=>b.stopPropagation(),children:[r.jsx("div",{className:"form-title",children:"Rate Resolution"}),r.jsx("p",{style:{marginBottom:"1rem",color:"var(--text-secondary)",fontSize:"0.9375rem"},children:"How satisfied are you with how this issue was resolved?"}),r.jsx("div",{className:"rating-stars",children:[1,2,3,4,5].map(b=>r.jsx("button",{type:"button",className:`star-btn ${b<=v.rating?"active":""}`,onClick:()=>S({...v,rating:b}),children:"★"},b))}),r.jsx("textarea",{className:"form-textarea",placeholder:"Any additional feedback (optional)...",value:v.feedback,onChange:b=>S({...v,feedback:b.target.value}),style:{marginBottom:"1rem"}}),r.jsxs("div",{className:"form-actions",children:[r.jsx("button",{className:"btn-cancel",onClick:()=>u(null),children:"Cancel"}),r.jsx("button",{className:"btn-submit",onClick:h,disabled:v.rating===0,children:"Submit Feedback"})]})]})})]})]})}function ng(){var z,M,$;const e=Pe(),[t,n]=x.useState(null),[o,a]=x.useState([]),[s,i]=x.useState(!0),[l,c]=x.useState(!1),[d,f]=x.useState([]),[m,u]=x.useState(!1),[v,S]=x.useState(""),[k,y]=x.useState([]),[h,p]=x.useState(!1),[g,j]=x.useState(null);x.useEffect(()=>{const I=localStorage.getItem("theme");c(I==="dark"),I==="dark"?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode");const D=()=>{const L=localStorage.getItem("theme");c(L==="dark"),L==="dark"?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")};return window.addEventListener("themeChange",D),b(),E(),()=>{window.removeEventListener("themeChange",D)}},[]);function E(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(I=>{j({lat:I.coords.latitude,lng:I.coords.longitude})},I=>{console.log("Location not available:",I.message)},{timeout:5e3})}async function b(){i(!0);const[I,D,L]=await Promise.all([Wt.getMe(),Ts.getMyBookings(),Ls.getMyReviews()]);if(I.success)n(I.user);else{e("/login");return}D.success&&a(D.bookings),L.success&&f(L.reviews||[]),i(!1)}function w(){Wt.logout(),e("/")}async function N(I){if(!window.confirm("Are you sure you want to cancel this booking?"))return;const D=await Ts.cancel(I);D.success?b():alert(D.message||"Failed to cancel booking")}async function R(I){if(I==null||I.preventDefault(),!!v.trim()){p(!0);try{const D={city:v.trim()};g&&(D.userLat=g.lat,D.userLng=g.lng);const L=await Bo.search(D);L.success&&y(L.hostels||[])}catch(D){console.error("Search error:",D)}p(!1)}}function T(I){return I==null?null:I<1?`${Math.round(I*1e3)} m`:`${I} km`}function A(I){var H,Z;const D=((H=I.rating)==null?void 0:H.average)||0,L=((Z=I.rating)==null?void 0:Z.count)||0;return D===0&&L===0?"No ratings yet":`⭐ ${D.toFixed(1)} (${L})`}function O(I){return d.some(D=>{var L;return D.booking===I||((L=D.booking)==null?void 0:L._id)===I})}async function U(I,D,L,H){const Z=await Ls.create({hostelId:I.hostel._id||I.hostel,bookingId:I._id,rating:D,comment:L,isComplaint:H});Z.success?(alert("Review submitted successfully!"),b()):alert(Z.message||"Failed to submit review")}function W(I){e(`/hostel/${I}`)}function K(){e("/search")}const V=o.find(I=>I.status==="active"||I.status==="approved"),Y=o.filter(I=>I.status==="pending"),C=o.filter(I=>["rejected","cancelled","completed"].includes(I.status));if(s)return r.jsxs("div",{className:`student-dashboard ${l?"dark":"light"}`,children:[r.jsx("style",{children:_()}),r.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:l?"#0a0a0a":"#ffffff"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{className:"loader"}),r.jsx("div",{style:{fontSize:"0.9375rem",color:l?"#a3a3a3":"#525252",marginTop:"1rem"},children:"Loading your dashboard..."})]})})]});function _(){return`
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
        background: var(--bg);
        border-bottom: 1px solid var(--border);
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(20px);
      }

      .header-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        color: var(--primary);
        text-decoration: none;
      }

      .user-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-secondary);
      }

      .user-name {
        font-weight: 600;
        color: var(--text);
      }

      .nav-links {
        display: flex;
        gap: 0.5rem;
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
        color: var(--text);
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
        margin-bottom: 2rem;
      }

      .welcome-title {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.025em;
        margin-bottom: 0.5rem;
      }

      .welcome-subtitle {
        color: var(--text-secondary);
        font-size: 0.9375rem;
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
    `}return r.jsxs("div",{className:`student-dashboard ${l?"dark":"light"}`,children:[r.jsx("style",{children:_()}),r.jsx("header",{className:"header",children:r.jsxs("div",{className:"header-inner",children:[r.jsx(B,{to:"/",className:"logo",children:"🏠 HostelHub"}),r.jsxs("div",{className:"user-info",children:[r.jsx("span",{children:"Welcome,"}),r.jsx("span",{className:"user-name",children:(t==null?void 0:t.name)||"Student"})]}),r.jsxs("div",{className:"nav-links",children:[r.jsx(B,{to:"/student/profile",className:"nav-link",children:"Profile"}),r.jsx(B,{to:"/",className:"nav-link",children:"Home"}),r.jsx("button",{onClick:w,className:"btn-logout",children:"Logout"})]})]})}),r.jsxs("main",{className:"main",children:[r.jsxs("section",{className:"search-section",children:[r.jsx("h2",{className:"search-title",children:"🔍 Find Your Perfect Hostel"}),r.jsx("p",{className:"search-subtitle",children:"Search for hostels by city name"}),r.jsxs("form",{className:"search-form",onSubmit:R,children:[r.jsx("input",{type:"text",className:"search-input",placeholder:"Enter city name (e.g., Hyderabad, Bangalore...)",value:v,onChange:I=>S(I.target.value)}),r.jsx("button",{type:"submit",className:"search-btn",disabled:h,children:h?"Searching...":"Search"})]}),k.length>0&&r.jsxs("div",{className:"search-results",children:[r.jsxs("div",{className:"search-results-title",children:["Found ",k.length," hostel(s)",r.jsx("span",{style:{fontWeight:400,fontSize:"0.8125rem",marginLeft:"0.5rem"},children:"(sorted by rating)"})]}),k.map(I=>{var D,L,H,Z,Ae,ot,ut,je,mt,Te;return r.jsxs("div",{className:"hostel-card",onClick:()=>W(I._id),children:[r.jsx("div",{className:"hostel-card-image",children:I.mainImage||(D=I.images)!=null&&D[0]||I.logo?r.jsx("img",{src:I.mainImage||((L=I.images)==null?void 0:L[0])||I.logo,alt:I.name}):r.jsx("span",{className:"hostel-card-image-placeholder",children:"🏨"})}),r.jsxs("div",{className:"hostel-card-content",children:[r.jsxs("div",{style:{flex:1},children:[r.jsx("h4",{children:I.name}),r.jsxs("div",{className:"hostel-card-meta",children:[I.city," • ",I.gender," hostel"]}),r.jsx("div",{className:"hostel-card-rating",children:A(I)}),I.distance!==null&&I.distance!==void 0&&r.jsxs("div",{className:"hostel-card-distance",children:["📍 ",T(I.distance)," away"]})]}),r.jsxs("div",{className:"hostel-card-price",children:["From ₹",Math.min(((Z=(H=I.roomConfig)==null?void 0:H.single)==null?void 0:Z.rent)||99999,((ot=(Ae=I.roomConfig)==null?void 0:Ae.double)==null?void 0:ot.rent)||99999,((je=(ut=I.roomConfig)==null?void 0:ut.triple)==null?void 0:je.rent)||99999,((Te=(mt=I.roomConfig)==null?void 0:mt.four)==null?void 0:Te.rent)||99999).toLocaleString(),"/mo"]})]})]},I._id)})]}),v&&!h&&k.length===0&&r.jsx("div",{className:"search-results",children:r.jsxs("div",{className:"no-results",children:['No hostels found in "',v,'". Try another city.']})})]}),V&&r.jsxs("div",{className:"card booking-active",style:{marginBottom:"1.5rem"},children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-title",children:"🏠 Your Current Stay"}),r.jsx("span",{className:`status-badge status-${V.status}`,children:V.status})]}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"booking-grid",children:[r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Hostel"}),r.jsx("span",{className:"booking-value",children:((z=V.hostel)==null?void 0:z.name)||"N/A"})]}),r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Location"}),r.jsx("span",{className:"booking-value",children:((M=V.hostel)==null?void 0:M.city)||"N/A"})]}),r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Room Type"}),r.jsxs("span",{className:"booking-value",style:{textTransform:"capitalize"},children:[V.roomType," Sharing"]})]}),r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Room Number"}),r.jsxs("span",{className:"booking-value",children:["#",V.roomNumber||"TBD"]})]}),r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Monthly Rent"}),r.jsxs("span",{className:"booking-value rent",children:["₹",(($=V.rent)==null?void 0:$.toLocaleString())||"N/A"]})]}),r.jsxs("div",{className:"booking-field",children:[r.jsx("span",{className:"booking-label",children:"Check-in"}),r.jsx("span",{className:"booking-value",children:V.checkInDate?new Date(V.checkInDate).toLocaleDateString():"Pending"})]})]}),r.jsx("div",{style:{marginTop:"1.25rem",display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:r.jsx("button",{onClick:()=>N(V._id),className:"btn btn-danger",children:"Cancel Booking"})}),(V.status==="approved"||V.status==="active")&&r.jsx("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid var(--border)"},children:O(V._id)?r.jsx("div",{style:{background:"var(--bg-tertiary)",padding:"1rem",borderRadius:"0.5rem",textAlign:"center"},children:r.jsx("span",{style:{color:"#059669",fontWeight:500},children:"✓ You've already reviewed this stay"})}):r.jsx(og,{onSubmit:(I,D,L)=>U(V,I,D,L)})})]})]}),r.jsxs("div",{className:"grid grid-2",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-title",children:"⏳ Pending Requests"}),r.jsx("span",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:Y.length})]}),Y.length===0?r.jsx("div",{className:"card-body",style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No pending requests"}):r.jsx("div",{children:Y.map(I=>{var D;return r.jsxs("div",{className:"booking-item",children:[r.jsxs("div",{className:"booking-item-info",children:[r.jsx("h4",{children:((D=I.hostel)==null?void 0:D.name)||"Hostel"}),r.jsxs("div",{className:"booking-item-meta",children:[r.jsxs("span",{style:{textTransform:"capitalize"},children:[I.roomType," Sharing"]}),r.jsx("span",{children:"•"}),r.jsx("span",{children:new Date(I.createdAt).toLocaleDateString()})]})]}),r.jsxs("div",{className:"booking-item-actions",children:[r.jsx("span",{className:"status-badge status-pending",children:"Pending"}),r.jsx("button",{onClick:()=>N(I._id),className:"btn btn-danger",style:{padding:"0.375rem 0.75rem",fontSize:"0.8125rem"},children:"Cancel"})]})]},I._id)})})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-title",children:"📋 History"}),r.jsx("span",{style:{fontSize:"0.875rem",color:"var(--text-secondary)"},children:C.length})]}),C.length===0?r.jsx("div",{className:"card-body",style:{textAlign:"center",padding:"2rem",color:"var(--text-secondary)"},children:"No booking history"}):r.jsx("div",{children:C.slice(0,5).map(I=>{var D;return r.jsxs("div",{className:"booking-item",children:[r.jsxs("div",{className:"booking-item-info",children:[r.jsx("h4",{children:((D=I.hostel)==null?void 0:D.name)||"Hostel"}),r.jsxs("div",{className:"booking-item-meta",children:[r.jsxs("span",{style:{textTransform:"capitalize"},children:[I.roomType," Sharing"]}),r.jsx("span",{children:"•"}),r.jsx("span",{children:new Date(I.createdAt).toLocaleDateString()})]})]}),r.jsx("span",{className:`status-badge status-${I.status}`,children:I.status})]},I._id)})})]})]}),!V&&Y.length===0&&C.length===0&&r.jsx("div",{className:"card",style:{marginTop:"1.5rem"},children:r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🏨"}),r.jsx("div",{className:"empty-title",children:"No Bookings Yet"}),r.jsx("div",{className:"empty-text",children:"Use the search above to find your perfect hostel"}),r.jsx("button",{onClick:K,className:"btn btn-primary",children:"Browse All Hostels"})]})}),r.jsx(rg,{activeBooking:V})]})]})}function og({onSubmit:e}){const[t,n]=x.useState(0),[o,a]=x.useState(0),[s,i]=x.useState(""),[l,c]=x.useState(!1),[d,f]=x.useState(!1);async function m(u){if(u.preventDefault(),t===0){alert("Please select a rating");return}f(!0),await e(t,s,l),f(!1)}return r.jsxs("form",{onSubmit:m,children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500,fontSize:"0.9375rem"},children:"Rate Your Experience"}),r.jsxs("div",{style:{display:"flex",gap:"0.25rem"},children:[[1,2,3,4,5].map(u=>r.jsx("button",{type:"button",onClick:()=>n(u),onMouseEnter:()=>a(u),onMouseLeave:()=>a(0),style:{background:"none",border:"none",fontSize:"1.75rem",cursor:"pointer",color:u<=(o||t)?"#fbbf24":"var(--border)",transition:"transform 0.1s, color 0.2s",transform:u<=(o||t)?"scale(1.1)":"scale(1)",padding:"0.25rem"},children:"★"},u)),r.jsx("span",{style:{marginLeft:"0.5rem",alignSelf:"center",fontSize:"0.875rem",color:"var(--text-secondary)"},children:t>0?`${t}/5`:"Select rating"})]})]}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500,fontSize:"0.9375rem"},children:"Your Review (Optional)"}),r.jsx("textarea",{value:s,onChange:u=>i(u.target.value),placeholder:"Share your experience, feedback, or suggestions...",style:{width:"100%",minHeight:"100px",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid var(--border)",background:"var(--bg)",color:"var(--text)",fontSize:"0.9375rem",resize:"vertical"}})]}),r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontSize:"0.875rem"},children:[r.jsx("input",{type:"checkbox",checked:l,onChange:u=>c(u.target.checked),style:{width:"1rem",height:"1rem"}}),r.jsx("span",{children:"Mark as a complaint (owner will be notified)"})]})}),r.jsx("button",{type:"submit",disabled:d||t===0,style:{padding:"0.75rem 1.5rem",background:t===0?"var(--text-secondary)":"var(--primary)",color:"white",border:"none",borderRadius:"0.5rem",fontWeight:500,cursor:t===0?"not-allowed":"pointer",opacity:d?.7:1},children:d?"Submitting...":"Submit Review"})]})}function ag(){const e=Pe(),[t,n]=x.useState(null),[o,a]=x.useState(!0),[s,i]=x.useState(!1),[l,c]=x.useState(!1),[d,f]=x.useState({name:"",phone:"",course:"",year:""}),[m,u]=x.useState(!1),[v,S]=x.useState("");x.useEffect(()=>{const j=localStorage.getItem("theme");i(j==="dark"),j==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const E=()=>{const b=localStorage.getItem("theme");i(b==="dark"),b==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",E),k(),()=>{window.removeEventListener("themeChange",E)}},[]);async function k(){a(!0);const j=await Wt.getMe();j.success?(n(j.user),f({name:j.user.name||"",phone:j.user.phone||"",course:j.user.course||"",year:j.user.year||""})):e("/login"),a(!1)}function y(){Wt.logout(),e("/")}function h(){const j=s?"light":"dark";localStorage.setItem("theme",j),i(!s),j==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),window.dispatchEvent(new Event("themeChange"))}async function p(){u(!0),S("");try{const j=localStorage.getItem("token"),E=await fetch("http://localhost:5000/api/students/profile",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${j}`},body:JSON.stringify(d)}),b=await E.json();E.ok&&b.success?(n({...t,...d}),c(!1),S("Profile updated successfully!"),setTimeout(()=>S(""),3e3)):S(b.message||"Failed to update profile")}catch{S("Failed to update profile")}finally{u(!1)}}const g=`
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
  `;return o?r.jsxs("div",{className:`student-profile ${s?"dark-theme":"light-theme"}`,style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx("style",{children:g}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"🔄"}),r.jsx("div",{style:{fontSize:"1rem",color:s?"#94a3b8":"#6b7280"},children:"Loading profile..."})]})]}):r.jsxs("div",{className:`student-profile ${s?"dark-theme":"light-theme"}`,children:[r.jsx("style",{children:g}),r.jsx("div",{className:"header",children:r.jsxs("div",{className:"header-container",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h1",{children:"👤 My Profile"}),r.jsx("p",{children:"Manage your account details"})]}),r.jsxs("div",{className:"header-right",children:[r.jsx(B,{to:"/student/dashboard",className:"btn btn-white",children:"Dashboard"}),r.jsx(B,{to:"/",className:"btn btn-outline",children:"Home"}),r.jsx("button",{onClick:y,className:"btn btn-outline",children:"Logout"})]})]})}),r.jsx("div",{className:"content",children:r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsx("div",{className:"profile-avatar",children:"🎓"}),r.jsx("h2",{className:"profile-name",children:t==null?void 0:t.name}),r.jsx("p",{className:"profile-email",children:t==null?void 0:t.email})]}),v&&r.jsx("div",{className:`message ${v.includes("success")?"message-success":"message-error"}`,children:v}),r.jsxs("div",{className:"info-section",children:[r.jsxs("h3",{className:"section-title",children:["Personal Information",!l&&r.jsx("button",{className:"btn-edit",onClick:()=>c(!0),children:"✏️ Edit"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Full Name"}),l?r.jsx("input",{type:"text",className:"edit-input",value:d.name,onChange:j=>f({...d,name:j.target.value})}):r.jsx("span",{className:"info-value",children:t==null?void 0:t.name})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Email"}),r.jsx("span",{className:"info-value",children:t==null?void 0:t.email})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Phone Number"}),l?r.jsx("input",{type:"tel",className:"edit-input",value:d.phone,onChange:j=>f({...d,phone:j.target.value}),placeholder:"Enter phone number"}):r.jsx("span",{className:"info-value",children:(t==null?void 0:t.phone)||"Not provided"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Course"}),l?r.jsx("input",{type:"text",className:"edit-input",value:d.course,onChange:j=>f({...d,course:j.target.value}),placeholder:"e.g. B.Tech, MBA"}):r.jsx("span",{className:"info-value",children:(t==null?void 0:t.course)||"Not provided"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Year"}),l?r.jsx("input",{type:"text",className:"edit-input",value:d.year,onChange:j=>f({...d,year:j.target.value}),placeholder:"e.g. 1st Year, 2nd Year"}):r.jsx("span",{className:"info-value",children:(t==null?void 0:t.year)||"Not provided"})]}),l&&r.jsxs("div",{className:"edit-actions",children:[r.jsx("button",{className:"btn-cancel-form",onClick:()=>c(!1),children:"Cancel"}),r.jsx("button",{className:"btn-save",onClick:p,disabled:m,children:m?"Saving...":"Save Changes"})]})]}),r.jsxs("div",{className:"info-section",children:[r.jsx("h3",{className:"section-title",children:"Verification Status"}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Email Verification"}),r.jsx("span",{className:"info-value",children:t!=null&&t.isEmailVerified?r.jsx("span",{className:"verification-badge verified",children:"✓ Verified"}):r.jsx("span",{className:"verification-badge not-verified",children:"⚠ Not Verified"})})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"Member Since"}),r.jsx("span",{className:"info-value",children:new Date(t==null?void 0:t.createdAt).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]})]}),r.jsxs("div",{className:"info-section",children:[r.jsx("h3",{className:"section-title",children:"Preferences"}),r.jsxs("div",{className:"preference-row",children:[r.jsxs("div",{className:"preference-info",children:[r.jsx("span",{className:"preference-label",children:"Dark Mode"}),r.jsx("span",{className:"preference-desc",children:"Switch between light and dark theme"})]}),r.jsx("div",{className:`theme-toggle ${s?"active":""}`,onClick:h})]})]})]})})]})}function sg(){const e=Pe(),[t,n]=x.useState("Hostel"),[o,a]=x.useState(""),[s,i]=x.useState(!1);x.useEffect(()=>{const f=localStorage.getItem("theme")==="dark";i(f),document.body.classList.toggle("dark-mode",f);const m=JSON.parse(localStorage.getItem("adminData")||"{}");m.hostelName&&n(m.hostelName),m.hostelLogo&&a(m.hostelLogo)},[]);function l(){const d=s?"light":"dark";i(!s),localStorage.setItem("theme",d),document.body.classList.toggle("dark-mode",!s)}function c(){localStorage.removeItem("adminToken"),e("/login")}return r.jsxs("div",{className:"dashboard-wrapper",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"header-controls",children:[r.jsxs("button",{onClick:l,className:"btn btn-night",children:[s?"☀️":"🌙"," ",s?"Light":"Night"," Mode"]}),r.jsx("button",{onClick:c,className:"btn btn-logout",children:"🚪 Logout"})]}),r.jsxs("div",{className:"container",children:[r.jsx("div",{className:"dashboard-header",children:r.jsx("h1",{className:"dashboard-title",children:"Hostel Admin Dashboard"})}),r.jsxs("div",{className:"cards-grid",children:[r.jsxs(B,{to:"/admin/double",className:"dashboard-card",children:[r.jsx("div",{className:"card-icon",children:"🛏️"}),r.jsx("h3",{className:"card-title",children:"Double Sharing"}),r.jsx("p",{className:"card-subtitle",children:"Two-persons Sharing"})]}),r.jsxs(B,{to:"/admin/triple",className:"dashboard-card",children:[r.jsx("div",{className:"card-icon",children:"👥"}),r.jsx("h3",{className:"card-title",children:"Triple Sharing"}),r.jsx("p",{className:"card-subtitle",children:"Three-person rooms"})]}),r.jsxs(B,{to:"/admin/four",className:"dashboard-card",children:[r.jsx("div",{className:"card-icon",children:"👨‍👩‍👧‍👦"}),r.jsx("h3",{className:"card-title",children:"four persons Sharing"}),r.jsx("p",{className:"card-subtitle"})]}),r.jsxs(B,{to:"/admin/fees",className:"dashboard-card",children:[r.jsx("div",{className:"card-icon",children:"₹"}),r.jsx("h3",{className:"card-title",children:"Fee Management"}),r.jsx("p",{className:"card-subtitle",children:"Payments and dues"})]})]})]})]})}function Mi({title:e,roomType:t,capacity:n}){const[o,a]=x.useState([]),[s,i]=x.useState(!0),[l,c]=x.useState(""),[d,f]=x.useState("all"),[m,u]=x.useState(null),[v,S]=x.useState(null),[k,y]=x.useState(()=>localStorage.getItem("nightMode")==="true");x.useEffect(()=>{h()},[t]);async function h(){i(!0),c(""),console.log("Fetching rooms for type:",t);const w=await mc.getByType(t);console.log("API Result:",w),w.success?(console.log("Rooms fetched:",w.rooms.length),a(w.rooms)):(console.error("Failed to fetch rooms:",w.message),c(w.message||"Failed to load rooms")),i(!1)}x.useEffect(()=>{document.body.classList.toggle("night-mode",k),localStorage.setItem("nightMode",k)},[k]);const p=x.useMemo(()=>d==="all"?o:o.filter(w=>w.status===d),[o,d]);async function g(w){if(!m)return;const R=Object.fromEntries(["name","id","email","phone","address","course","year","gender","dob","emergencyName","emergencyPhone","notes"].map(O=>[O,w.get(O)]));if(!R.name||!R.id||!R.phone){alert("Please fill required fields: Name, Student ID, and Phone");return}if(m.occupants.length>=m.capacity){alert(`Room is at full capacity (${m.capacity})`);return}console.log("Current room data:",m),console.log("Room type:",m.type);const T={name:R.name,studentId:R.id,email:R.email||"",phone:R.phone,address:R.address||"",dob:R.dob||null,photo:v||null,roomType:m.type.toLowerCase(),roomNumber:m.number};console.log("Sending student data:",T);const A=await ho.add(T);console.log("API response:",A),A.success?(alert(`Allocated ${T.name} to Room ${m.number}`),h(),u(null),S(null)):alert(A.message||"Failed to allocate student")}async function j(w){if(!m)return;const N=await ho.remove(w);N.success?(alert("Student removed successfully"),h(),u(null)):alert(N.message||"Failed to remove student")}async function E(){if(m&&confirm(`Are you sure you want to deallocate all ${m.occupants.length} students from Room ${m.number}?`)){for(const w of m.occupants)await ho.remove(w._id);alert("All students deallocated successfully"),h(),u(null)}}async function b(w){if(!m)return;if(w==="available"&&m.occupants.length>0)return alert("Cannot set to Available with occupants");if(w==="occupied"&&m.occupants.length===0)return alert("Cannot set to Occupied without occupants");const N=await mc.updateStatus(m._id,w);N.success?(alert("Room status updated successfully"),h(),u(null)):alert(N.message||"Failed to update room status")}return r.jsxs("div",{children:[r.jsx("style",{children:`
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
          display:${m?"block":"none"};
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
      `}),r.jsxs("div",{className:"container",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{children:e}),r.jsxs("div",{className:"header-controls",children:[r.jsxs("button",{className:"theme-toggle",onClick:()=>y(w=>!w),children:[k?"☀️ Light":"🌙 Night"," Mode"]}),r.jsx(B,{to:"/admin",className:"back-btn",children:"← Back to Dashboard"})]})]}),s?r.jsx("div",{style:{textAlign:"center",padding:"60px",fontSize:"1.5rem",color:"#aaa"},children:"⏳ Loading rooms..."}):l?r.jsxs("div",{style:{textAlign:"center",padding:"60px"},children:[r.jsx("div",{style:{fontSize:"3rem",marginBottom:"20px"},children:"⚠️"}),r.jsx("div",{style:{fontSize:"1.3rem",color:"#e74c3c",marginBottom:"10px"},children:l}),r.jsx("div",{style:{fontSize:"1rem",color:"#aaa",marginBottom:"20px"},children:"Make sure you're logged in and have registered with room configuration."}),r.jsx("button",{onClick:h,style:{padding:"12px 24px",background:"#3498db",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1rem",fontWeight:"600"},children:"🔄 Retry"})]}):o.length===0?r.jsxs("div",{style:{textAlign:"center",padding:"60px"},children:[r.jsx("div",{style:{fontSize:"3rem",marginBottom:"20px"},children:"📭"}),r.jsx("div",{style:{fontSize:"1.3rem",color:"#aaa",marginBottom:"10px"},children:"No rooms found"}),r.jsx("div",{style:{fontSize:"1rem",color:"#888"},children:"Please register first to set up your rooms, or check if you're logged in correctly."})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"dashboard",children:[r.jsxs("div",{className:"stat-card total",children:[r.jsx("div",{className:"count",children:o.length}),r.jsx("div",{className:"label",children:"Total Rooms"})]}),r.jsxs("div",{className:"stat-card available",children:[r.jsx("div",{className:"count",children:o.filter(w=>w.status==="available").length}),r.jsx("div",{className:"label",children:"Available"})]}),r.jsxs("div",{className:"stat-card occupied",children:[r.jsx("div",{className:"count",children:o.filter(w=>w.status==="occupied").length}),r.jsx("div",{className:"label",children:"Occupied"})]}),r.jsxs("div",{className:"stat-card reserved",children:[r.jsx("div",{className:"count",children:o.filter(w=>w.status==="reserved").length}),r.jsx("div",{className:"label",children:"Reserved"})]})]}),r.jsx("div",{className:"filters",style:{display:"flex",gap:15,marginBottom:25,flexWrap:"wrap",justifyContent:"center"},children:["all","available","occupied","reserved"].map(w=>r.jsx("button",{className:`filter-btn ${w}`,onClick:()=>f(w),style:{padding:"10px 20px",borderRadius:30,border:"none",color:"#fff",background:w==="all"?"#3498db":w==="available"?"#2ecc71":w==="occupied"?"#e74c3c":"#9b59b6",opacity:d===w?1:.8},children:w==="all"?"All Rooms":w.charAt(0).toUpperCase()+w.slice(1)},w))}),r.jsx("div",{className:"room-grid",children:p.map(w=>r.jsxs("div",{className:`room-box ${w.status}`,onClick:()=>{u(w),S(null)},children:[r.jsx("div",{className:"room-number",style:{fontSize:"1.5rem",fontWeight:"bold",marginBottom:5},children:w.number}),r.jsx("div",{className:"room-status",style:{fontWeight:600,marginBottom:10},children:w.status.charAt(0).toUpperCase()+w.status.slice(1)}),r.jsxs("div",{className:"occupants",children:["Occupants: ",w.occupants.length,"/",w.capacity]})]},w._id||w.number))})]})]}),r.jsx("div",{className:"modal",onClick:w=>{w.target.className==="modal"&&u(null)},children:r.jsxs("div",{className:"modal-content",children:[r.jsx("span",{className:"close-btn",onClick:()=>u(null),children:"×"}),m&&r.jsxs("div",{children:[r.jsxs("h2",{children:["Room ",m.number," — ",m.type]}),r.jsxs("div",{className:"modal-details",children:[r.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[r.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Status:"}),r.jsx("div",{className:`detail-value status-${m.status}`,style:{flex:1},children:m.status})]}),r.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[r.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Capacity:"}),r.jsx("div",{className:"detail-value",style:{flex:1},children:m.capacity})]}),r.jsxs("div",{className:"detail-row",style:{display:"flex",gap:12,marginBottom:12},children:[r.jsx("div",{className:"detail-label",style:{width:120,fontWeight:600,color:"#7f8c8d"},children:"Occupants:"}),r.jsxs("div",{className:"detail-value",style:{flex:1},children:[m.occupants.length,"/",m.capacity]})]})]}),r.jsx("div",{className:"occupant-list",style:{border:"1px solid #ecf0f1",borderRadius:6,padding:10,marginBottom:20},children:m.occupants.length===0?r.jsx("div",{style:{textAlign:"center",color:"#95a5a6"},children:"No occupants"}):m.occupants.map((w,N)=>r.jsxs("div",{className:"occupant-item",style:{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #ecf0f1"},children:[r.jsxs("div",{children:[r.jsxs("div",{className:"occupant-name",style:{fontWeight:600},children:[w.name," (",w.studentId,")"]}),r.jsxs("div",{className:"occupant-info",style:{fontSize:12,color:"#7f8c8d"},children:[w.email," · ",w.phone," · ",w.course," ",w.year]})]}),r.jsx("button",{className:"remove-occupant",onClick:()=>j(w._id),style:{color:"#e74c3c",background:"none",border:"none"},children:"Remove"})]},w._id||N))}),r.jsx("h3",{children:"Add New Student"}),r.jsxs("form",{onSubmit:w=>{w.preventDefault(),g(new FormData(w.currentTarget))},children:[r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Full Name*"}),r.jsx("input",{name:"name",placeholder:"Enter full name",required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Student ID*"}),r.jsx("input",{name:"id",placeholder:"Enter student ID",required:!0})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email"}),r.jsx("input",{name:"email",type:"email",placeholder:"Enter email"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone*"}),r.jsx("input",{name:"phone",placeholder:"Enter phone",required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Permanent Address"}),r.jsx("textarea",{name:"address",rows:2,placeholder:"Enter permanent address"})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Course"}),r.jsxs("select",{name:"course",defaultValue:"",children:[r.jsx("option",{value:"",children:"Select course"}),r.jsx("option",{children:"Computer Science"}),r.jsx("option",{children:"Electrical Engineering"}),r.jsx("option",{children:"Mechanical Engineering"}),r.jsx("option",{children:"Business Administration"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Year of Study"}),r.jsxs("select",{name:"year",defaultValue:"",children:[r.jsx("option",{value:"",children:"Select year"}),r.jsx("option",{children:"1st Year"}),r.jsx("option",{children:"2nd Year"}),r.jsx("option",{children:"3rd Year"}),r.jsx("option",{children:"4th Year"}),r.jsx("option",{children:"5th Year"})]})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Gender"}),r.jsxs("select",{name:"gender",defaultValue:"",children:[r.jsx("option",{value:"",children:"Select gender"}),r.jsx("option",{children:"Male"}),r.jsx("option",{children:"Female"}),r.jsx("option",{children:"Other"}),r.jsx("option",{children:"Prefer not to say"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Date of Birth"}),r.jsx("input",{name:"dob",type:"date"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Emergency Contact"}),r.jsxs("div",{className:"form-row",children:[r.jsx("input",{name:"emergencyName",placeholder:"Contact name"}),r.jsx("input",{name:"emergencyPhone",placeholder:"Phone number"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Notes"}),r.jsx("textarea",{name:"notes",rows:2,placeholder:"Any special requirements or notes"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Profile Photo (Optional - Max 2MB)"}),r.jsx("input",{type:"file",accept:"image/*",onChange:w=>{var T;const N=(T=w.target.files)==null?void 0:T[0];if(!N)return;if(N.size>2*1024*1024){alert("Image size should be less than 2MB"),w.target.value="";return}const R=new FileReader;R.onload=A=>{const O=new Image;O.onload=()=>{const U=document.createElement("canvas"),W=U.getContext("2d");let K=O.width,V=O.height;const Y=400;K>V&&K>Y?(V=V*Y/K,K=Y):V>Y&&(K=K*Y/V,V=Y),U.width=K,U.height=V,W.drawImage(O,0,0,K,V);const C=U.toDataURL("image/jpeg",.7);S(C)},O.src=A.target.result},R.readAsDataURL(N)}})]}),r.jsx("div",{className:"action-buttons",children:r.jsx("button",{type:"submit",className:"btn btn-success",children:"✓ Allocate Student"})})]}),r.jsxs("div",{style:{marginTop:30,paddingTop:30,borderTop:"3px solid #444"},children:[r.jsx("h3",{style:{marginBottom:20},children:"Room Management"}),r.jsxs("div",{className:"form-group",style:{marginBottom:20},children:[r.jsx("label",{children:"Change Room Status"}),r.jsxs("select",{value:m.status,onChange:w=>b(w.target.value),children:[r.jsx("option",{value:"available",children:"Available"}),r.jsx("option",{value:"occupied",children:"Occupied"}),r.jsx("option",{value:"reserved",children:"Reserved"})]})]}),r.jsx("div",{className:"action-buttons",children:r.jsx("button",{type:"button",className:"btn btn-danger",onClick:E,children:"✕ Deallocate All Students"})})]})]})]})})]})}function ig(){return r.jsx(Mi,{title:"Double Sharing Allocation",roomType:"double",capacity:2})}function lg(){return r.jsx(Mi,{title:"Triple Sharing Allocation",roomType:"triple",capacity:3})}function cg(){return r.jsx(Mi,{title:"Four Sharing Allocation",roomType:"four",capacity:4})}function dg(){const[e,t]=x.useState(""),[n,o]=x.useState([]),[a,s]=x.useState("double"),[i,l]=x.useState(!1),[c,d]=x.useState(!1),[f,m]=x.useState(null),[u,v]=x.useState({amount:"",date:new Date().toISOString().split("T")[0],method:"Cash",reference:""});x.useEffect(()=>{const b=localStorage.getItem("theme");document.body.classList.toggle("dark-mode",b==="dark"),S()},[]);async function S(){const b=await ho.getAll();b.success&&o(b.students||[])}const k=n.filter(b=>{if(b.roomType!==a)return!1;const w=e.toLowerCase().trim();return w?(b.name||"").toLowerCase().includes(w)||(b.studentId||"").toLowerCase().includes(w):!0});function y(b){const w=b.rent||5e3,N=b.totalPaid||0,R=w-N;m({...b,monthlyFee:w,totalPaid:N}),v({amount:R>0?R:0,date:new Date().toISOString().split("T")[0],method:"Cash",reference:""}),l(!0)}function h(b){m(b),d(!0)}function p(){l(!1),d(!1),m(null)}async function g(){if(!f||!u.amount||u.amount<=0){alert("Please enter a valid amount");return}const b={studentId:f.studentId,amount:u.amount,date:u.date,method:u.method,reference:u.reference},w=await Lh.addPayment(b);w.success?(alert("Payment recorded successfully!"),p(),S()):alert(w.message||"Failed to record payment")}const j=b=>{const w=b.rent||5e3,N=b.totalPaid||0,R=w-N;return R<=0?{text:"Paid",class:"status-paid"}:R===w?{text:"Unpaid",class:"status-unpaid"}:{text:"Partial",class:"status-partial"}},E=`
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
  `;return r.jsxs("div",{style:{minHeight:"100vh"},children:[r.jsx("style",{children:E}),r.jsxs("div",{className:"fee-container",children:[r.jsxs("div",{className:"fee-header",children:[r.jsxs("h1",{className:"fee-title",children:[r.jsx("span",{children:"💰"})," Hostel Fees Management"]}),r.jsxs("nav",{className:"room-type-nav",children:[r.jsx("button",{className:`nav-btn ${a==="double"?"active":""}`,onClick:()=>s("double"),children:"Double Sharing"}),r.jsx("button",{className:`nav-btn ${a==="triple"?"active":""}`,onClick:()=>s("triple"),children:"Triple Sharing"}),r.jsx("button",{className:`nav-btn ${a==="four"?"active":""}`,onClick:()=>s("four"),children:"Four Sharing"})]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",flexWrap:"wrap",gap:"1rem"},children:[r.jsxs("div",{className:"search-container",children:[r.jsx("span",{className:"search-icon",children:"🔍"}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search by Student Name or Student ID...",value:e,onChange:b=>t(b.target.value)})]}),r.jsx(B,{to:"/admin",className:"back-btn",children:"← Back to Dashboard"})]}),r.jsx("div",{className:"table-container",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Photo"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Student ID"}),r.jsx("th",{children:"Room No."}),r.jsx("th",{children:"Phone"}),r.jsx("th",{children:"Monthly Fee"}),r.jsx("th",{children:"Total Paid"}),r.jsx("th",{children:"Due"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:k.length===0?r.jsx("tr",{children:r.jsxs("td",{colSpan:"10",style:{textAlign:"center",color:"#888",padding:"20px"},children:["No students are currently allocated to '",a,"' sharing rooms."]})}):k.map(b=>{const w=b.rent||5e3,N=b.totalPaid||0,R=w-N,T=j(b);return r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("div",{className:"student-photo",children:b.photo?r.jsx("img",{src:b.photo,alt:b.name}):r.jsx("span",{style:{fontSize:"1.2rem"},children:"👤"})})}),r.jsx("td",{children:b.name}),r.jsx("td",{children:b.studentId}),r.jsx("td",{children:b.roomNumber}),r.jsx("td",{children:b.phone}),r.jsxs("td",{children:["₹",w]}),r.jsxs("td",{children:["₹",N]}),r.jsxs("td",{children:["₹",R>0?R:0]}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${T.class}`,children:T.text})}),r.jsxs("td",{children:[r.jsx("button",{className:"btn btn-pay",onClick:()=>y(b),children:"💳 Pay"}),r.jsx("button",{className:"btn btn-history",onClick:()=>h(b),children:"📜 History"})]})]},b._id)})})]})})]}),r.jsx("div",{className:"modal-backdrop",onClick:p}),i&&f&&r.jsxs("div",{className:"modal",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:"💳 Record Payment"}),r.jsx("button",{className:"close-btn",onClick:p,children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"modal-section",children:[r.jsx("h3",{children:"Student Details"}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Student Name"}),r.jsx("div",{className:"detail-value",children:f.name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Student ID"}),r.jsx("div",{className:"detail-value",children:f.studentId})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Room Number"}),r.jsx("div",{className:"detail-value",children:f.roomNumber})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Room Type"}),r.jsx("div",{className:"detail-value",children:f.roomType})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Monthly Fee"}),r.jsxs("div",{className:"detail-value",children:["₹",f.monthlyFee]})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",style:{color:"#e74c3c"},children:"Current Due"}),r.jsxs("div",{className:"detail-value",style:{color:"#e74c3c"},children:["₹",f.monthlyFee-f.totalPaid>0?f.monthlyFee-f.totalPaid:0]})]})]})]}),r.jsxs("div",{className:"modal-section",children:[r.jsx("h3",{children:"Add Payment"}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Amount (₹)"}),r.jsx("input",{type:"number",value:u.amount,onChange:b=>v({...u,amount:b.target.value}),placeholder:"Enter amount"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Date"}),r.jsx("input",{type:"date",value:u.date,onChange:b=>v({...u,date:b.target.value})})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Payment Method"}),r.jsxs("select",{value:u.method,onChange:b=>v({...u,method:b.target.value}),children:[r.jsx("option",{value:"Cash",children:"Cash"}),r.jsx("option",{value:"UPI",children:"UPI"}),r.jsx("option",{value:"Bank Transfer",children:"Bank Transfer"}),r.jsx("option",{value:"Card",children:"Card"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Reference / Notes"}),r.jsx("input",{type:"text",value:u.reference,onChange:b=>v({...u,reference:b.target.value}),placeholder:"Optional transaction ID or notes"})]})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{className:"btn btn-secondary",onClick:p,children:"Close"}),r.jsx("button",{className:"btn btn-pay",onClick:g,children:"Record Payment"})]})]}),c&&f&&r.jsxs("div",{className:"modal",children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:"📜 Payment History"}),r.jsx("button",{className:"close-btn",onClick:p,children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"modal-section",children:[r.jsx("h3",{children:"Student Details"}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Student Name"}),r.jsx("div",{className:"detail-value",children:f.name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Student ID"}),r.jsx("div",{className:"detail-value",children:f.studentId})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Room Number"}),r.jsx("div",{className:"detail-value",children:f.roomNumber})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Room Type"}),r.jsx("div",{className:"detail-value",children:f.roomType})]})]})]}),r.jsxs("div",{className:"modal-section",children:[r.jsx("h3",{children:"Payment Records"}),r.jsxs("table",{className:"history-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Date"}),r.jsx("th",{children:"Amount (₹)"}),r.jsx("th",{children:"Method"}),r.jsx("th",{children:"Reference"})]})}),r.jsx("tbody",{children:!f.paymentHistory||f.paymentHistory.length===0?r.jsx("tr",{children:r.jsx("td",{colSpan:"4",style:{textAlign:"center",color:"#888"},children:"No payment records found."})}):f.paymentHistory.map((b,w)=>r.jsxs("tr",{children:[r.jsx("td",{children:b.date}),r.jsxs("td",{children:["₹",b.amount]}),r.jsx("td",{children:b.method||"N/A"}),r.jsx("td",{children:b.reference||"-"})]},w))})]})]})]}),r.jsx("div",{className:"modal-footer",children:r.jsx("button",{className:"btn btn-secondary",onClick:p,children:"Close"})})]})]})}function ug(){const e=Pe(),[t,n]=x.useState({totalHostels:0,totalRooms:0,activeBookings:0,pendingRequests:0,openComplaints:0}),[o,a]=x.useState([]),[s,i]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const d=localStorage.getItem("token"),[f,m]=await Promise.all([fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${d}`}}),fetch("http://localhost:5000/api/complaints/owner/stats",{headers:{Authorization:`Bearer ${d}`}})]),u=await f.json(),v=await m.json();let S=0;if(v.success&&v.stats&&(S=(v.stats.open||0)+(v.stats.in_progress||0)),f.ok&&u.success){const k=u.hostels||[];if(k.length>0){a(k);const y=k.reduce((h,p)=>{var g,j,E,b,w,N,R,T;return h+((((j=(g=p.roomConfig)==null?void 0:g.single)==null?void 0:j.count)||0)+(((b=(E=p.roomConfig)==null?void 0:E.double)==null?void 0:b.count)||0)+(((N=(w=p.roomConfig)==null?void 0:w.triple)==null?void 0:N.count)||0)+(((T=(R=p.roomConfig)==null?void 0:R.four)==null?void 0:T.count)||0))},0);n({totalHostels:k.length,totalRooms:y,activeBookings:0,pendingRequests:0,openComplaints:S})}else n(y=>({...y,openComplaints:S}))}}catch(d){console.error("Error fetching hostels:",d)}finally{i(!1)}})()},[]);const l=[{icon:vt,label:"Total Hostels",value:t.totalHostels,color:"var(--primary)"},{icon:Fs,label:"Total Rooms",value:t.totalRooms,color:"var(--accent)"},{icon:Qu,label:"Active Bookings",value:t.activeBookings,color:"var(--success)"},{icon:Ah,label:"Pending Requests",value:t.pendingRequests,color:"var(--warning)"},{icon:Gu,label:"Open Complaints",value:t.openComplaints,color:t.openComplaints>0?"var(--warning)":"var(--text-secondary)",onClick:()=>e("/owner/complaints")}];return r.jsxs("div",{style:{minHeight:"calc(100vh - var(--header-height))",background:"var(--bg-body)"},children:[r.jsx("style",{children:`
        .od-container {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: var(--space-8) var(--space-6);
          animation: fadeInUp 0.4s ease both;
        }

        .od-header {
          margin-bottom: var(--space-8);
        }

        .od-title {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--text);
          margin-bottom: var(--space-1);
          letter-spacing: var(--tracking-tighter);
        }

        .od-subtitle {
          font-size: var(--text-base);
          color: var(--text-secondary);
        }

        .od-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .od-stat {
          background: var(--bg);
          padding: var(--space-5);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          transition: all var(--duration-normal) var(--ease-default);
          cursor: default;
        }

        .od-stat:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .od-stat-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-3);
        }

        .od-stat-value {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--text);
          letter-spacing: var(--tracking-tighter);
          line-height: 1;
          margin-bottom: var(--space-1);
        }

        .od-stat-label {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          font-weight: 500;
        }

        .od-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-5);
        }

        .od-section-title {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text);
        }

        .od-hostels {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-5);
        }

        .od-hostel {
          background: var(--bg);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all var(--duration-normal) var(--ease-default);
        }

        .od-hostel:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }

        .od-hostel-top {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-700) 100%);
          padding: var(--space-5) var(--space-5);
          color: white;
        }

        .od-hostel-name {
          font-size: var(--text-lg);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .od-hostel-location {
          font-size: var(--text-sm);
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .od-hostel-body {
          padding: var(--space-4) var(--space-5);
        }

        .od-hostel-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-light);
          font-size: var(--text-sm);
        }

        .od-hostel-row:last-child {
          border-bottom: none;
        }

        .od-hostel-row-label {
          color: var(--text-secondary);
        }

        .od-hostel-row-value {
          font-weight: 600;
          color: var(--text);
        }

        .od-hostel-actions {
          display: flex;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5) var(--space-5);
        }

        .od-hostel-actions .btn {
          flex: 1;
          justify-content: center;
        }

        .od-empty {
          text-align: center;
          padding: var(--space-16) var(--space-8);
          background: var(--bg);
          border-radius: var(--radius-xl);
          border: 2px dashed var(--border);
        }

        .od-empty-icon {
          width: 64px;
          height: 64px;
          background: var(--primary-50);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto var(--space-4);
          color: var(--primary);
        }

        body.dark-mode .od-empty-icon,
        body.dark-theme .od-empty-icon {
          background: rgba(99, 102, 241, 0.12);
        }

        .od-empty-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text);
          margin-bottom: var(--space-2);
        }

        .od-empty-text {
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
          font-size: var(--text-sm);
        }

        .od-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: var(--space-16);
        }

        @media (max-width: 1024px) {
          .od-stats { grid-template-columns: repeat(3, 1fr); }
          .od-hostels { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .od-container { padding: var(--space-5) var(--space-4); }
          .od-stats { grid-template-columns: repeat(2, 1fr); }
          .od-hostels { grid-template-columns: 1fr; }
          .od-section-header { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
          .od-hostel-actions { flex-direction: column; }
        }
      `}),r.jsxs("div",{className:"od-container",children:[r.jsxs("div",{className:"od-header",children:[r.jsx("h1",{className:"od-title",children:"Dashboard"}),r.jsx("p",{className:"od-subtitle",children:"Manage your hostels, rooms, and bookings"})]}),r.jsx("div",{className:"od-stats animate-stagger",children:l.map((c,d)=>r.jsxs("div",{className:"od-stat",onClick:c.onClick,style:c.onClick?{cursor:"pointer"}:{},children:[r.jsx("div",{className:"od-stat-icon",style:{background:`${c.color}15`,color:c.color},children:r.jsx(c.icon,{size:20})}),r.jsx("div",{className:"od-stat-value",style:{color:c.color},children:c.value}),r.jsx("div",{className:"od-stat-label",children:c.label})]},d))}),r.jsxs("div",{className:"od-section-header",children:[r.jsx("h2",{className:"od-section-title",children:"Your Hostels"}),r.jsxs("button",{onClick:()=>e("/owner/hostels/add"),className:"btn btn-primary",children:[r.jsx(pc,{size:16}),"Add Hostel"]})]}),s?r.jsx("div",{className:"od-loading",children:r.jsx("div",{className:"spinner spinner-lg"})}):o.length>0?r.jsx("div",{className:"od-hostels animate-stagger",children:o.map(c=>{var d,f,m,u,v,S,k,y;return r.jsxs("div",{className:"od-hostel",children:[r.jsxs("div",{className:"od-hostel-top",children:[r.jsx("div",{className:"od-hostel-name",children:c.name}),r.jsxs("div",{className:"od-hostel-location",children:[r.jsx(Mh,{size:14}),c.address,", ",c.city]})]}),r.jsxs("div",{className:"od-hostel-body",children:[r.jsxs("div",{className:"od-hostel-row",children:[r.jsx("span",{className:"od-hostel-row-label",children:"Single Rooms"}),r.jsx("span",{className:"od-hostel-row-value",children:((f=(d=c.roomConfig)==null?void 0:d.single)==null?void 0:f.count)||0})]}),r.jsxs("div",{className:"od-hostel-row",children:[r.jsx("span",{className:"od-hostel-row-label",children:"Double Rooms"}),r.jsx("span",{className:"od-hostel-row-value",children:((u=(m=c.roomConfig)==null?void 0:m.double)==null?void 0:u.count)||0})]}),r.jsxs("div",{className:"od-hostel-row",children:[r.jsx("span",{className:"od-hostel-row-label",children:"Triple Rooms"}),r.jsx("span",{className:"od-hostel-row-value",children:((S=(v=c.roomConfig)==null?void 0:v.triple)==null?void 0:S.count)||0})]}),r.jsxs("div",{className:"od-hostel-row",children:[r.jsx("span",{className:"od-hostel-row-label",children:"Four-Person Rooms"}),r.jsx("span",{className:"od-hostel-row-value",children:((y=(k=c.roomConfig)==null?void 0:k.four)==null?void 0:y.count)||0})]})]}),r.jsxs("div",{className:"od-hostel-actions",children:[r.jsxs("button",{className:"btn btn-outline btn-sm",onClick:()=>e(`/owner/hostels/${c._id}/edit`),children:[r.jsx(qu,{size:14}),"Edit"]}),r.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>e("/owner/rooms"),children:[r.jsx(Fs,{size:14}),"Manage"]})]})]},c._id)})}):r.jsxs("div",{className:"od-empty",children:[r.jsx("div",{className:"od-empty-icon",children:r.jsx(vt,{size:28})}),r.jsx("div",{className:"od-empty-title",children:"No Hostels Yet"}),r.jsx("p",{className:"od-empty-text",children:"Start by adding your first hostel property"}),r.jsxs("button",{onClick:()=>e("/owner/hostels/add"),className:"btn btn-primary",children:[r.jsx(pc,{size:16}),"Add Your First Hostel"]})]})]})]})}function Mn(){const e=Pe(),[t,n]=x.useState(!1),[o,a]=x.useState(!1),[s,i]=x.useState(!1),[l,c]=x.useState("Owner");x.useEffect(()=>{const u=localStorage.getItem("theme");i(u==="dark");const v=localStorage.getItem("userName");v&&v!=="undefined"&&v!=="null"?c(v):d(),u==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const S=k=>{o&&!k.target.closest(".navbar-profile")&&a(!1)};return document.addEventListener("click",S),()=>{document.removeEventListener("click",S)}},[o]);const d=async()=>{var u;try{const v=localStorage.getItem("token"),S=await fetch("http://localhost:5000/api/auth/me",{headers:{Authorization:`Bearer ${v}`}}),k=await S.json();if(S.ok&&k.user){const y=k.user.name||((u=k.user.email)==null?void 0:u.split("@")[0])||"Owner";c(y),localStorage.setItem("userName",y)}}catch(v){console.error("Failed to fetch owner name:",v)}},f=()=>{const u=s?"light":"dark";i(!s),localStorage.setItem("theme",u),u==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme"),window.dispatchEvent(new Event("themeChange"))},m=()=>{localStorage.removeItem("token"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),e("/login")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .owner-navbar {
          background: #ffffff;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid #e2e8f0;
        }

        body.dark-theme .owner-navbar {
          background: #0f172a;
          border-bottom-color: #1e293b;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.25rem;
          color: #111827;
          letter-spacing: -0.025em;
        }

        body.dark-theme .navbar-brand {
          color: #f1f5f9;
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
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          transition: all 0.15s ease;
        }

        .navbar-link:hover {
          color: #111827;
          background: #f1f5f9;
        }

        body.dark-theme .navbar-link {
          color: #94a3b8;
        }

        body.dark-theme .navbar-link:hover {
          color: #f1f5f9;
          background: #1e293b;
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
      `}),r.jsxs("nav",{className:"owner-navbar",children:[r.jsx(B,{to:"/owner/dashboard",className:"navbar-brand",children:"🏢 HostelHub"}),r.jsx("button",{className:"mobile-menu-btn",onClick:()=>n(!t),children:"☰"}),r.jsxs("ul",{className:`navbar-menu ${t?"open":""}`,children:[r.jsx("li",{children:r.jsx(B,{to:"/owner/dashboard",className:"navbar-link",children:"📊 Dashboard"})}),r.jsx("li",{children:r.jsx(B,{to:"/owner/hostels",className:"navbar-link",children:"🏠 Hostels"})}),r.jsx("li",{children:r.jsx(B,{to:"/owner/rooms",className:"navbar-link",children:"🛏️ Rooms"})}),r.jsx("li",{children:r.jsx(B,{to:"/owner/bookings",className:"navbar-link",children:"📋 Bookings"})}),r.jsx("li",{children:r.jsx(B,{to:"/owner/complaints",className:"navbar-link",children:"🎫 Complaints"})})]}),r.jsxs("div",{className:"navbar-profile",children:[r.jsxs("button",{className:"profile-trigger",onClick:()=>a(!o),children:[r.jsxs("div",{className:"profile-info",children:[r.jsx("div",{className:"profile-name",children:l}),r.jsx("div",{className:"profile-role",children:"Owner"})]}),r.jsx("div",{className:"profile-avatar",children:"👤"})]}),r.jsxs("div",{className:`profile-dropdown ${o?"open":""}`,children:[r.jsx("div",{className:"dropdown-section",children:r.jsxs("button",{className:"dropdown-item",onClick:f,children:[r.jsx("span",{children:s?"☀️ Light Mode":"🌙 Dark Mode"}),r.jsx("div",{className:`toggle-switch ${s?"active":""}`,children:r.jsx("div",{className:"toggle-slider"})})]})}),r.jsx("div",{className:"dropdown-section",children:r.jsx("button",{className:"dropdown-item danger",onClick:m,children:"🚪 Logout"})})]})]})]})]})}function mg(){const e=Pe(),[t,n]=x.useState([]),[o,a]=x.useState(!0),[s,i]=x.useState(""),[l,c]=x.useState(!1);x.useEffect(()=>{const u=localStorage.getItem("theme");c(u==="dark"),u==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const v=()=>{const S=localStorage.getItem("theme");c(S==="dark"),S==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",v),d(),()=>{window.removeEventListener("themeChange",v)}},[]);const d=async()=>{try{a(!0);const u=localStorage.getItem("token"),v=await fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${u}`}}),S=await v.json();v.ok&&S.success?(n(S.hostels||[]),i("")):(n([]),i(""))}catch(u){console.error("Fetch hostel error:",u),i("Failed to load hostel")}finally{a(!1)}},f=()=>{hostel&&e(`/owner/hostels/${hostel._id}/edit`)},m=async u=>{if(window.confirm("Are you sure you want to delete this hostel?"))try{const v=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${u}`,{method:"DELETE",headers:{Authorization:`Bearer ${v}`}})).ok?(alert("Hostel deleted successfully"),d()):i("Failed to delete hostel")}catch{i("Failed to delete hostel")}};return r.jsxs("div",{className:`hostels-wrapper ${l?"dark-theme":"light-theme"}`,children:[r.jsx(Mn,{}),r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"hostels-container",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"page-title",children:"🏠 My Hostels"}),r.jsx("p",{className:"page-subtitle",children:"Manage your hostel properties"})]}),r.jsx(B,{to:"/owner/hostels/add",className:"add-btn",children:"➕ Add Hostel"})]}),s&&r.jsx("div",{className:"error-msg",children:s}),o?r.jsx("div",{className:"loading",children:r.jsx("div",{className:"spinner"})}):t.length>0?r.jsx("div",{className:"hostels-grid",children:t.map(u=>{var v,S,k,y,h,p,g,j;return r.jsxs("div",{className:"hostel-card",children:[r.jsxs("div",{className:"hostel-header",children:[r.jsx("h2",{className:"hostel-name",children:u.name}),r.jsxs("div",{className:"hostel-location",children:["📍 ",u.city,", ",u.state]})]}),r.jsxs("div",{className:"hostel-body",children:[r.jsxs("div",{className:"info-grid",children:[r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Contact"}),r.jsx("span",{className:"info-value",children:u.contactPhone})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Gender"}),r.jsx("span",{className:"info-value",children:u.gender})]}),r.jsxs("div",{className:"info-item",children:[r.jsx("span",{className:"info-label",children:"Address"}),r.jsx("span",{className:"info-value",children:u.address})]})]}),u.amenities&&u.amenities.length>0&&r.jsxs("div",{className:"amenities-section",children:[r.jsx("h3",{className:"section-title",children:"Amenities"}),r.jsxs("div",{className:"amenities-list",children:[u.amenities.slice(0,3).map((E,b)=>r.jsxs("span",{className:"amenity-tag",children:["✓ ",E]},b)),u.amenities.length>3&&r.jsxs("span",{className:"amenity-tag",children:["+",u.amenities.length-3," more"]})]})]}),r.jsxs("div",{className:"rooms-section",children:[r.jsx("h3",{className:"section-title",children:"Rooms"}),r.jsxs("div",{className:"rooms-grid",children:[((S=(v=u.roomConfig)==null?void 0:v.single)==null?void 0:S.count)>0&&r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-name",children:"🛏️ Single"}),r.jsx("div",{className:"room-type-count",children:u.roomConfig.single.count}),r.jsxs("div",{className:"room-type-rent",children:["₹",u.roomConfig.single.rent,"/mo"]})]}),((y=(k=u.roomConfig)==null?void 0:k.double)==null?void 0:y.count)>0&&r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-name",children:"👥 Double"}),r.jsx("div",{className:"room-type-count",children:u.roomConfig.double.count}),r.jsxs("div",{className:"room-type-rent",children:["₹",u.roomConfig.double.rent,"/mo"]})]}),((p=(h=u.roomConfig)==null?void 0:h.triple)==null?void 0:p.count)>0&&r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-name",children:"👨‍👨‍👦 Triple"}),r.jsx("div",{className:"room-type-count",children:u.roomConfig.triple.count}),r.jsxs("div",{className:"room-type-rent",children:["₹",u.roomConfig.triple.rent,"/mo"]})]}),((j=(g=u.roomConfig)==null?void 0:g.four)==null?void 0:j.count)>0&&r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-name",children:"👨‍👩‍👧‍👦 Four"}),r.jsx("div",{className:"room-type-count",children:u.roomConfig.four.count}),r.jsxs("div",{className:"room-type-rent",children:["₹",u.roomConfig.four.rent,"/mo"]})]})]}),r.jsx("button",{className:"view-rooms-btn",onClick:()=>e("/owner/rooms"),children:"👁️ View Room Details"})]}),r.jsxs("div",{className:"actions",children:[r.jsx("button",{className:"btn btn-edit",onClick:()=>f(u._id),children:"✏️ Edit"}),r.jsx("button",{className:"btn btn-delete",onClick:()=>m(u._id),children:"🗑️ Delete"})]})]})]},u._id)})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🏠"}),r.jsx("h2",{className:"empty-title",children:"No Hostel Yet"}),r.jsx("p",{className:"empty-text",children:"Create your first hostel to get started"}),r.jsx(B,{to:"/owner/hostels/add",className:"add-btn",children:"➕ Add Hostel"})]})]})]})}function gc(){const e=Pe(),{id:t}=Hu(),n=!!t,[o,a]=x.useState(!1),[s,i]=x.useState(1),[l,c]=x.useState(!1),[d,f]=x.useState(""),[m,u]=x.useState({name:"",address:"",city:"",state:"",pincode:"",description:"",contactPhone:"",gender:"coed",amenities:[]}),[v,S]=x.useState({single:{count:0,price:"",roomNumbers:""},double:{count:0,price:"",roomNumbers:""},triple:{count:0,price:"",roomNumbers:""},four:{count:0,price:"",roomNumbers:""}}),[k,y]=x.useState([]),[h,p]=x.useState(0),[g,j]=x.useState(!1),[E,b]=x.useState({lat:0,lng:0}),[w,N]=x.useState(""),R=["🛏️ WiFi","🧊 AC","🚿 Hot Water","👨‍⚖️ Security","🍽️ Meals","🧹 Cleaning","🔒 Locker","🎮 Gaming Area","📖 Study Room","🧘 Yoga Studio","🏋️ Gym","📚 Library"],T=async(z,M,$)=>{try{N("getting");const I=encodeURIComponent(`${z}, ${M}, ${$}, India`),L=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${I}`)).json();return L&&L.length>0?(b({lat:parseFloat(L[0].lat),lng:parseFloat(L[0].lon)}),N("success"),{lat:parseFloat(L[0].lat),lng:parseFloat(L[0].lon)}):(N("not_found"),null)}catch(I){return console.error("Geocoding error:",I),N("error"),null}},A=()=>{if(!navigator.geolocation){N("unsupported");return}N("getting"),navigator.geolocation.getCurrentPosition(z=>{b({lat:z.coords.latitude,lng:z.coords.longitude}),N("success")},()=>{N("denied")},{timeout:1e4})};x.useEffect(()=>{const z=localStorage.getItem("theme");a(z==="dark"),z==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const M=()=>{const $=localStorage.getItem("theme");a($==="dark"),$==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",M),n&&O(),()=>{window.removeEventListener("themeChange",M)}},[n]);const O=async()=>{var z,M,$,I,D,L,H,Z,Ae,ot,ut,je,mt,Te,Nt,Di,Ai,$i,Oi,Bi,Hi,Ui,Wi,Vi;try{c(!0);const ia=localStorage.getItem("token"),Yi=await fetch(`http://localhost:5000/api/hostels/${t}`,{headers:{Authorization:`Bearer ${ia}`}}),qi=await Yi.json();if(Yi.ok&&qi.hostel){const te=qi.hostel;if(u({name:te.name||"",address:te.address||"",city:te.city||"",state:te.state||"",pincode:te.pincode||"",description:te.description||"",contactPhone:te.contactPhone||"",gender:te.gender||"coed",amenities:te.amenities||[]}),S({single:{count:((M=(z=te.roomConfig)==null?void 0:z.single)==null?void 0:M.count)||0,price:((I=($=te.roomConfig)==null?void 0:$.single)==null?void 0:I.rent)||"",roomNumbers:((L=(D=te.roomConfig)==null?void 0:D.single)==null?void 0:L.roomNumbers)||""},double:{count:((Z=(H=te.roomConfig)==null?void 0:H.double)==null?void 0:Z.count)||0,price:((ot=(Ae=te.roomConfig)==null?void 0:Ae.double)==null?void 0:ot.rent)||"",roomNumbers:((je=(ut=te.roomConfig)==null?void 0:ut.double)==null?void 0:je.roomNumbers)||""},triple:{count:((Te=(mt=te.roomConfig)==null?void 0:mt.triple)==null?void 0:Te.count)||0,price:((Di=(Nt=te.roomConfig)==null?void 0:Nt.triple)==null?void 0:Di.rent)||"",roomNumbers:(($i=(Ai=te.roomConfig)==null?void 0:Ai.triple)==null?void 0:$i.roomNumbers)||""},four:{count:((Bi=(Oi=te.roomConfig)==null?void 0:Oi.four)==null?void 0:Bi.count)||0,price:((Ui=(Hi=te.roomConfig)==null?void 0:Hi.four)==null?void 0:Ui.rent)||"",roomNumbers:((Vi=(Wi=te.roomConfig)==null?void 0:Wi.four)==null?void 0:Vi.roomNumbers)||""}}),te.images&&te.images.length>0){y(te.images);const Qi=te.images.findIndex(Ju=>Ju===te.mainImage);p(Qi>=0?Qi:0)}}else f("Failed to load hostel data")}catch(ia){console.error("Load hostel error:",ia),f("Failed to load hostel data")}finally{c(!1)}},U=z=>{const{name:M,value:$}=z.target;u(I=>({...I,[M]:$}))},W=(z,M,$)=>{S(I=>({...I,[z]:{...I[z],[M]:$}}))},K=z=>{u(M=>({...M,amenities:M.amenities.includes(z)?M.amenities.filter($=>$!==z):[...M.amenities,z]}))},V=async z=>{const M=Array.from(z.target.files);if(M.length!==0){j(!0);try{const $=[];for(const I of M){const D=new FileReader,H=await new Promise(Z=>{D.onload=()=>Z(D.result),D.readAsDataURL(I)});$.push(H)}y(I=>[...I,...$])}catch($){console.error("Image upload error:",$),f("Failed to upload images")}finally{j(!1)}}},Y=z=>{y(M=>M.filter(($,I)=>I!==z)),z===h?p(0):z<h&&p(M=>M-1)},C=z=>{p(z)},_=async z=>{var $,I,D,L,H;if(z.preventDefault(),f(""),s===1){if(!(($=m.name)!=null&&$.trim())){f("❌ Hostel Name is required");return}if(!((I=m.city)!=null&&I.trim())){f("❌ City is required");return}if(!((D=m.state)!=null&&D.trim())){f("❌ State is required");return}if(!((L=m.address)!=null&&L.trim())){f("❌ Address is required");return}if(!((H=m.contactPhone)!=null&&H.trim())){f("❌ Contact Phone is required");return}i(2);return}if((parseInt(v.single.count)||0)+(parseInt(v.double.count)||0)+(parseInt(v.triple.count)||0)+(parseInt(v.four.count)||0)===0){f("❌ Please add at least one room type");return}if((parseInt(v.single.count)||0)>0&&!v.single.price){f("❌ Please set price for Single rooms");return}if((parseInt(v.double.count)||0)>0&&!v.double.price){f("❌ Please set price for Double rooms");return}if((parseInt(v.triple.count)||0)>0&&!v.triple.price){f("❌ Please set price for Triple rooms");return}if((parseInt(v.four.count)||0)>0&&!v.four.price){f("❌ Please set price for Four-person rooms");return}c(!0);try{const Z=localStorage.getItem("token");let Ae=E;if(E.lat===0&&E.lng===0){const Nt=await T(m.address.trim(),m.city.trim(),m.state.trim());Nt&&(Ae=Nt)}const ot={name:m.name.trim(),address:m.address.trim(),city:m.city.trim(),state:m.state.trim(),pincode:m.pincode.trim()||"0",description:m.description.trim(),contactPhone:m.contactPhone.trim(),gender:m.gender,amenities:m.amenities,images:k,mainImage:k.length>0?k[h]:"",coordinates:Ae,roomConfig:{single:{count:parseInt(v.single.count)||0,rent:parseInt(v.single.price)||0,roomNumbers:v.single.roomNumbers.trim()||""},double:{count:parseInt(v.double.count)||0,rent:parseInt(v.double.price)||0,roomNumbers:v.double.roomNumbers.trim()||""},triple:{count:parseInt(v.triple.count)||0,rent:parseInt(v.triple.price)||0,roomNumbers:v.triple.roomNumbers.trim()||""},four:{count:parseInt(v.four.count)||0,rent:parseInt(v.four.price)||0,roomNumbers:v.four.roomNumbers.trim()||""}}};console.log("Sending payload:",ot);const ut=n?`http://localhost:5000/api/hostels/${t}`:"http://localhost:5000/api/hostels",mt=await fetch(ut,{method:n?"PUT":"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Z}`},body:JSON.stringify(ot)}),Te=await mt.json();console.log("Response:",Te),mt.ok&&(Te.success||Te.hostel)?(alert(n?"✅ Hostel updated successfully!":"✅ Hostel created successfully!"),e("/owner/hostels")):f(`❌ Error: ${Te.message||"Failed to save hostel"}`)}catch(Z){f(`❌ Error: ${Z.message||"Failed to create hostel"}`),console.error("Error:",Z)}finally{c(!1)}};return r.jsxs("div",{className:`add-hostel-wrapper ${o?"dark-theme":"light-theme"}`,children:[r.jsx(Mn,{}),r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"add-hostel-container",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("h1",{className:"page-title",children:["🏢 ",n?"Edit Hostel":"Add New Hostel"]}),r.jsxs("p",{className:"page-subtitle",children:["Step ",s," of 2 - ",s===1?"Basic Information":"Room Configuration"]})]}),r.jsxs("div",{className:"form-card",children:[r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill",style:{width:`${s*50}%`}})}),d&&r.jsx("div",{className:"error-message",children:d}),r.jsxs("form",{onSubmit:_,children:[s===1?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"form-section",children:[r.jsx("h2",{className:"section-title",children:"Basic Information"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Hostel Name *"}),r.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"e.g., Cozy Stay Hostel",value:m.name,onChange:U,required:!0})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"City *"}),r.jsx("input",{type:"text",name:"city",className:"form-input",placeholder:"e.g., Mumbai",value:m.city,onChange:U,required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"State *"}),r.jsx("input",{type:"text",name:"state",className:"form-input",placeholder:"e.g., Maharashtra",value:m.state,onChange:U,required:!0})]})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Address *"}),r.jsx("input",{type:"text",name:"address",className:"form-input",placeholder:"e.g., Bandra, Mumbai",value:m.address,onChange:U,required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Pincode"}),r.jsx("input",{type:"text",name:"pincode",className:"form-input",placeholder:"e.g., 400050",value:m.pincode,onChange:U})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem",padding:"0.75rem 1rem",background:E.lat!==0?"#d1fae5":"#f1f5f9",borderRadius:"0.5rem",fontSize:"0.875rem"},children:[r.jsx("span",{children:E.lat!==0?`📍 Location set: ${E.lat.toFixed(4)}, ${E.lng.toFixed(4)}`:"📍 Location will be auto-detected from address"}),r.jsx("button",{type:"button",onClick:A,style:{padding:"0.375rem 0.75rem",background:"#4f46e5",color:"white",border:"none",borderRadius:"0.375rem",cursor:"pointer",fontSize:"0.75rem",fontWeight:500},children:w==="getting"?"⏳ Getting...":"📌 Use My Location"})]}),r.jsxs("div",{className:"form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Contact Phone *"}),r.jsx("input",{type:"tel",name:"contactPhone",className:"form-input",placeholder:"e.g., +91 9876543210",value:m.contactPhone,onChange:U,required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Hostel Type *"}),r.jsxs("select",{name:"gender",className:"form-input",value:m.gender,onChange:U,required:!0,children:[r.jsx("option",{value:"male",children:"Male Only"}),r.jsx("option",{value:"female",children:"Female Only"}),r.jsx("option",{value:"coed",children:"Co-ed"})]})]})]})]}),r.jsxs("div",{className:"form-section",children:[r.jsx("h2",{className:"section-title",children:"Description"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"About Your Hostel"}),r.jsx("textarea",{name:"description",className:"form-textarea",placeholder:"Tell students about your hostel, facilities, and atmosphere...",value:m.description,onChange:U})]})]}),r.jsxs("div",{className:"form-section",children:[r.jsx("h2",{className:"section-title",children:"Amenities"}),r.jsx("div",{className:"amenities-grid",children:R.map(z=>r.jsxs("div",{className:"amenity-checkbox",children:[r.jsx("input",{type:"checkbox",id:z,checked:m.amenities.includes(z),onChange:()=>K(z)}),r.jsx("label",{htmlFor:z,className:"amenity-label",children:z})]},z))})]}),r.jsxs("div",{className:"form-section",children:[r.jsx("h2",{className:"section-title",children:"📷 Hostel Images"}),r.jsx("p",{style:{color:"#6b7280",marginBottom:"1rem",fontSize:"0.9rem"},children:"Upload photos of your hostel. The first image (or selected main image) will be shown in search results."}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1.5rem",background:"var(--primary)",color:"white",borderRadius:"0.5rem",cursor:"pointer",fontWeight:500},children:[g?"⏳ Uploading...":"📤 Upload Images",r.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:V,style:{display:"none"},disabled:g})]}),r.jsxs("span",{style:{marginLeft:"1rem",color:"#6b7280",fontSize:"0.875rem"},children:[k.length," image",k.length!==1?"s":""," uploaded"]})]}),k.length>0&&r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"1rem"},children:k.map((z,M)=>r.jsxs("div",{style:{position:"relative",borderRadius:"0.5rem",overflow:"hidden",border:M===h?"3px solid #4f46e5":"1px solid var(--border)",aspectRatio:"4/3"},children:[r.jsx("img",{src:z,alt:`Hostel ${M+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}}),M===h&&r.jsx("div",{style:{position:"absolute",top:"0.5rem",left:"0.5rem",background:"#4f46e5",color:"white",padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.6875rem",fontWeight:600},children:"MAIN"}),r.jsxs("div",{style:{position:"absolute",bottom:"0.5rem",left:"0.5rem",right:"0.5rem",display:"flex",gap:"0.5rem"},children:[M!==h&&r.jsx("button",{type:"button",onClick:()=>C(M),style:{flex:1,padding:"0.375rem",background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"0.25rem",fontSize:"0.6875rem",cursor:"pointer",fontWeight:500},children:"Set Main"}),r.jsx("button",{type:"button",onClick:()=>Y(M),style:{padding:"0.375rem 0.5rem",background:"#ef4444",color:"white",border:"none",borderRadius:"0.25rem",fontSize:"0.6875rem",cursor:"pointer",fontWeight:500},children:"✕"})]})]},M))})]})]}):r.jsx(r.Fragment,{children:r.jsxs("div",{className:"form-section",children:[r.jsx("h2",{className:"section-title",children:"🛏️ Room Configuration"}),r.jsx("p",{style:{color:"#6b7280",marginBottom:"1.5rem",fontSize:"0.95rem"},children:"Configure the room types and pricing for your hostel"}),r.jsxs("div",{className:"room-config-grid",children:[r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-header",children:"🛏️ Single Room"}),r.jsxs("div",{className:"room-type-inputs",children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Number of Rooms"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.single.count,onChange:z=>W("single","count",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.single.price,onChange:z=>W("single","price",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 101-110 or 101,102,103)"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"101-110",value:v.single.roomNumbers,onChange:z=>W("single","roomNumbers",z.target.value)})]})]})]}),r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-header",children:"👥 Double Sharing"}),r.jsxs("div",{className:"room-type-inputs",children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Number of Rooms"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.double.count,onChange:z=>W("double","count",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.double.price,onChange:z=>W("double","price",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 201-215 or 201,202,203)"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"201-215",value:v.double.roomNumbers,onChange:z=>W("double","roomNumbers",z.target.value)})]})]})]}),r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-header",children:"👨‍👨‍👦 Triple Sharing"}),r.jsxs("div",{className:"room-type-inputs",children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Number of Rooms"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.triple.count,onChange:z=>W("triple","count",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.triple.price,onChange:z=>W("triple","price",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 301-320 or 301,302,303)"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"301-320",value:v.triple.roomNumbers,onChange:z=>W("triple","roomNumbers",z.target.value)})]})]})]}),r.jsxs("div",{className:"room-type-card",children:[r.jsx("div",{className:"room-type-header",children:"👨‍👩‍👧‍👦 Four Person"}),r.jsxs("div",{className:"room-type-inputs",children:[r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Number of Rooms"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.four.count,onChange:z=>W("four","count",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Monthly Fee (₹)"}),r.jsx("input",{type:"number",min:"0",className:"form-input",placeholder:"0",value:v.four.price,onChange:z=>W("four","price",z.target.value)})]}),r.jsxs("div",{className:"input-group",children:[r.jsx("label",{className:"input-label",children:"Room Numbers (e.g., 401-412 or 401,402,403)"}),r.jsx("input",{type:"text",className:"form-input",placeholder:"401-412",value:v.four.roomNumbers,onChange:z=>W("four","roomNumbers",z.target.value)})]})]})]})]}),r.jsxs("div",{style:{background:"#f0f9ff",border:"1px solid #bfdbfe",borderRadius:"0.5rem",padding:"1rem",marginTop:"1.5rem",color:"#1e40af",fontSize:"0.9rem"},children:["💡 ",r.jsx("strong",{children:"Total Rooms Configured:"})," ",(parseInt(v.single.count)||0)+(parseInt(v.double.count)||0)+(parseInt(v.triple.count)||0)+(parseInt(v.four.count)||0)," rooms"]})]})}),r.jsxs("div",{className:"form-actions",children:[s===2&&r.jsx("button",{type:"button",onClick:()=>i(1),className:"btn btn-secondary",children:"← Back"}),r.jsx("button",{type:"button",onClick:()=>e("/owner/dashboard"),className:"btn btn-secondary",children:"✕ Cancel"}),r.jsx("button",{type:"submit",disabled:l,className:"btn btn-primary",children:s===1?"➜ Next":l?"⏳ Saving...":n?"✅ Update Hostel":"✅ Create Hostel"})]})]})]})]})]})}function xc(){const[e,t]=x.useState([]),[n,o]=x.useState(null),[a,s]=x.useState([]),[i,l]=x.useState(!0),[c,d]=x.useState(""),[f,m]=x.useState(null),[u,v]=x.useState(!1),[S,k]=x.useState({roomType:"double",rent:"",roomNumber:""});x.useEffect(()=>{const N=localStorage.getItem("theme");v(N==="dark"),N==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const R=()=>{const T=localStorage.getItem("theme");v(T==="dark"),T==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",R),y(),()=>{window.removeEventListener("themeChange",R)}},[]);const y=async()=>{try{l(!0);const N=localStorage.getItem("token"),R=await fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${N}`}}),T=await R.json();R.ok&&T.success&&T.hostels&&T.hostels.length>0?(t(T.hostels),o(T.hostels[0]),p(T.hostels[0]._id),d("")):T.hostels&&T.hostels.length===0?d("No hostels found. Please add a hostel first."):d("Failed to load hostels")}catch(N){console.error("Fetch hostel error:",N),d("Failed to load hostels")}finally{l(!1)}},h=N=>{const R=e.find(T=>T._id===N);R&&(o(R),p(N))},p=async N=>{try{const R=localStorage.getItem("token"),A=await(await fetch(`http://localhost:5000/api/rooms/hostel/${N}`,{headers:{Authorization:`Bearer ${R}`}})).json();if(A.success&&A.rooms)s(A.rooms);else{const O=e.find(U=>U._id===N);O&&g(O.roomConfig)}}catch(R){console.error("Error fetching rooms:",R);const T=e.find(A=>A._id===N);T&&g(T.roomConfig)}},g=N=>{const R=[],T=A=>{if(!A)return[];const O=[];return A.split(",").map(W=>W.trim()).forEach(W=>{if(W.includes("-")){const[K,V]=W.split("-").map(Number);for(let Y=K;Y<=V;Y++)O.push(Y)}else{const K=Number(W);isNaN(K)||O.push(K)}}),O};Object.entries(N||{}).forEach(([A,O])=>{if(!O||O.count===0)return;const U=T(O.roomNumbers);if(U.length===0){const W=A==="single"?101:A==="double"?201:A==="triple"?301:401;for(let K=0;K<O.count;K++)U.push(W+K)}U.slice(0,O.count).forEach(W=>{R.push({_id:`${A}-${W}`,number:W,type:A,rent:O.rent,capacity:A==="single"?1:A==="double"?2:A==="triple"?3:4,status:"available",occupants:[],currentBookings:[]})})}),s(R)},j=N=>{m(N._id),k({roomType:N.type,rent:N.rent,roomNumber:N.roomNumber})},E=async()=>{if(f)try{const N=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${hostel._id}/rooms/${f}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify(S)})).ok?(m(null),y()):d("Failed to update room")}catch{d("Failed to update room")}},b=async N=>{if(window.confirm("Are you sure you want to delete this room?")&&n)try{const R=localStorage.getItem("token");(await fetch(`http://localhost:5000/api/hostels/${n._id}/rooms/${N}`,{method:"DELETE",headers:{Authorization:`Bearer ${R}`}})).ok?y():d("Failed to delete room")}catch{d("Failed to delete room")}},w=()=>{m(null),k({roomType:"double",rent:"",roomNumber:""})};return r.jsxs("div",{className:`manage-wrapper ${u?"dark-theme":"light-theme"}`,children:[r.jsx(Mn,{}),r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"manage-container",children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"page-header-left",children:[r.jsx("h1",{className:"page-title",children:"🛏️ Manage Rooms"}),r.jsx("p",{className:"page-subtitle",children:"View, edit and manage your hostel rooms"})]})}),e.length>1&&r.jsxs("div",{className:"hostel-selector",children:[r.jsx("label",{className:"hostel-label",children:"Select Hostel:"}),r.jsx("select",{className:"hostel-select",value:(n==null?void 0:n._id)||"",onChange:N=>h(N.target.value),children:e.map(N=>r.jsx("option",{value:N._id,children:N.name},N._id))})]}),n&&r.jsxs("div",{className:"page-subtitle",style:{marginBottom:"1.5rem",fontWeight:500},children:[n.name," - ",n.city]}),c&&r.jsx("div",{className:"error-msg",children:c}),i?r.jsx("div",{className:"loading",children:"Loading rooms..."}):a.length>0?r.jsx("div",{className:"rooms-grid",children:a.map(N=>{var U,W,K,V;const R=((U=N.occupants)==null?void 0:U.length)||0,T=((W=N.currentBookings)==null?void 0:W.length)||0,A=N.number||N.roomNumber,O=R>=N.capacity?"occupied":T>0?"pending":"available";return r.jsxs("div",{className:"room-card",children:[r.jsxs("div",{className:"room-header",children:[r.jsxs("div",{className:"room-num",children:["#",A]}),r.jsxs("div",{className:"room-type",children:[N.type==="single"&&"🛏️ Single",N.type==="double"&&"👥 Double",N.type==="triple"&&"👨‍👨‍👦 Triple",N.type==="four"&&"👨‍👩‍👧‍👦 Four-Person"]})]}),r.jsxs("div",{className:"room-body",children:[r.jsxs("div",{className:"room-info",children:[r.jsx("span",{className:"room-label",children:"Capacity"}),r.jsxs("span",{className:"room-val",children:[N.capacity," persons"]})]}),r.jsxs("div",{className:"room-info",children:[r.jsx("span",{className:"room-label",children:"Occupied"}),r.jsxs("span",{className:"room-val",children:[R," / ",N.capacity]})]}),r.jsxs("div",{className:"room-info",children:[r.jsx("span",{className:"room-label",children:"Fee/Month"}),r.jsxs("span",{className:"price",children:["₹",N.rent]})]}),r.jsxs("div",{className:"room-info",children:[r.jsx("span",{className:"room-label",children:"Status"}),r.jsxs("span",{className:`badge badge-${O}`,children:[O==="occupied"&&"🔴 Full",O==="pending"&&"🟡 Pending",O==="available"&&"🟢 Available"]})]}),(R>0||T>0)&&r.jsxs("div",{className:"occupants-section",children:[r.jsxs("div",{className:"occupants-title",children:["👥 Occupants (",R+T,")"]}),(K=N.occupants)==null?void 0:K.map(Y=>r.jsxs("div",{className:"occupant-item",children:[r.jsxs("div",{className:"occupant-name",children:["👤 ",Y.name]}),r.jsxs("div",{className:"occupant-details",children:[r.jsxs("span",{children:["📧 ",Y.email]}),Y.phone&&r.jsxs("span",{children:["📞 ",Y.phone]})]})]},Y._id)),(V=N.currentBookings)==null?void 0:V.map(Y=>{var C,_,z;return r.jsxs("div",{className:"occupant-item pending",children:[r.jsxs("div",{className:"occupant-name",children:["👤 ",((C=Y.student)==null?void 0:C.name)||"Unknown",r.jsx("span",{className:"pending-tag",children:"PENDING"})]}),r.jsxs("div",{className:"occupant-details",children:[r.jsxs("span",{children:["📧 ",((_=Y.student)==null?void 0:_.email)||"N/A"]}),((z=Y.student)==null?void 0:z.phone)&&r.jsxs("span",{children:["📞 ",Y.student.phone]})]})]},Y._id)})]}),R===0&&T===0&&r.jsx("div",{className:"no-occupants",children:"No occupants yet"})]}),r.jsxs("div",{className:"room-footer",children:[r.jsx("button",{className:"btn-small btn-edit",onClick:()=>j(N),children:"✏️ Edit"}),r.jsx("button",{className:"btn-small btn-del",onClick:()=>b(N._id),children:"🗑️ Delete"})]})]},N._id)})}):r.jsxs("div",{className:"empty",children:[r.jsx("div",{className:"empty-icon",children:"🛏️"}),r.jsx("div",{className:"empty-title",children:"No Rooms Found"}),r.jsx("p",{className:"empty-text",children:"Create a hostel to get started"})]}),f&&r.jsx("div",{className:`modal ${f?"open":""}`,children:r.jsxs("div",{className:"modal-content",children:[r.jsxs("h2",{className:"modal-title",children:["Edit Room #",S.roomNumber]}),r.jsx("p",{className:"modal-desc",children:"Update the monthly rent for this room"}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Monthly Rent (₹)"}),r.jsx("input",{type:"number",className:"form-input",value:S.rent,onChange:N=>k({...S,rent:N.target.value}),min:"0",placeholder:"Enter amount"})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{onClick:w,className:"btn btn-cancel",children:"Cancel"}),r.jsx("button",{onClick:E,className:"btn btn-save",children:"Save"})]})]})})]})]})}function pg(){const[e,t]=x.useState(!1),[n,o]=x.useState([]),[a,s]=x.useState("all"),[i,l]=x.useState(!0),[c,d]=x.useState("");x.useEffect(()=>{const y=localStorage.getItem("theme");t(y==="dark"),y==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const h=()=>{const p=localStorage.getItem("theme");t(p==="dark"),p==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",h),()=>{window.removeEventListener("themeChange",h)}},[]),x.useEffect(()=>{f()},[]);const f=async()=>{try{l(!0);const y=localStorage.getItem("token"),h=await fetch("http://localhost:5000/api/bookings/owner/all",{headers:{Authorization:`Bearer ${y}`}}),p=await h.json();h.ok&&p.success?o(p.bookings||[]):d(p.message||"Failed to load bookings")}catch{d("Failed to load bookings")}finally{l(!1)}},m=async y=>{try{const h=localStorage.getItem("token"),p=await fetch(`http://localhost:5000/api/bookings/${y}/approve`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`}});if(p.ok)f();else{const g=await p.json();d(g.message||"Failed to approve booking")}}catch{d("Failed to approve booking")}},u=async y=>{try{const h=localStorage.getItem("token"),p=await fetch(`http://localhost:5000/api/bookings/${y}/reject`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({ownerNotes:"Booking rejected"})});if(p.ok)f();else{const g=await p.json();d(g.message||"Failed to reject booking")}}catch{d("Failed to reject booking")}},v=async y=>{if(window.confirm("Are you sure you want to checkout this student?"))try{const h=localStorage.getItem("token"),p=await fetch(`http://localhost:5000/api/bookings/${y}/checkout`,{method:"PUT",headers:{Authorization:`Bearer ${h}`}});if(p.ok)f();else{const g=await p.json();d(g.message||"Failed to checkout")}}catch{d("Failed to checkout")}},S=a==="all"?n:n.filter(y=>y.status===a),k={pending:{bg:"#fef3c7",text:"#92400e",icon:"⏳"},approved:{bg:"#dcfce7",text:"#166534",icon:"✅"},active:{bg:"#dbeafe",text:"#1e40af",icon:"🏠"},rejected:{bg:"#fee2e2",text:"#991b1b",icon:"❌"},cancelled:{bg:"#f3f4f6",text:"#6b7280",icon:"🚫"},completed:{bg:"#d1fae5",text:"#065f46",icon:"🎉"}};return r.jsxs("div",{className:`owner-bookings-wrapper ${e?"dark-theme":"light-theme"}`,children:[r.jsx(Mn,{}),r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"bookings-container",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{className:"page-title",children:"📋 Booking Requests"}),r.jsx("p",{className:"page-subtitle",children:"Manage and track all student booking requests"})]}),r.jsxs("div",{className:"filters",children:[r.jsxs("button",{className:`filter-btn ${a==="all"?"active":""}`,onClick:()=>s("all"),children:["📊 All (",n.length,")"]}),r.jsxs("button",{className:`filter-btn ${a==="pending"?"active":""}`,onClick:()=>s("pending"),children:["⏳ Pending (",n.filter(y=>y.status==="pending").length,")"]}),r.jsxs("button",{className:`filter-btn ${a==="approved"?"active":""}`,onClick:()=>s("approved"),children:["✅ Approved (",n.filter(y=>y.status==="approved"||y.status==="active").length,")"]}),r.jsxs("button",{className:`filter-btn ${a==="completed"?"active":""}`,onClick:()=>s("completed"),children:["🎉 Completed (",n.filter(y=>y.status==="completed").length,")"]})]}),c&&r.jsx("div",{className:"error-message",children:c}),i?r.jsx("div",{className:"loading",children:"Loading bookings..."}):S.length>0?r.jsx("div",{className:"bookings-list",children:S.map(y=>{var N,R,T,A,O,U;const h=k[y.status]||k.pending,p=((N=y.student)==null?void 0:N.name)||"Unknown Student",g=((R=y.student)==null?void 0:R.email)||"N/A",j=((T=y.student)==null?void 0:T.phone)||"N/A",E=((A=y.hostel)==null?void 0:A.name)||"Unknown Hostel",b=((O=y.room)==null?void 0:O.number)||"N/A",w=((U=y.room)==null?void 0:U.type)||y.roomType||"N/A";return r.jsxs("div",{className:"booking-card",children:[r.jsxs("div",{className:"booking-status",children:[r.jsx("div",{className:"status-badge",style:{background:h.bg,color:h.text},children:h.icon}),r.jsx("div",{className:"status-text",style:{color:h.text},children:y.status})]}),r.jsxs("div",{className:"booking-info",children:[r.jsx("div",{className:"booking-header",children:r.jsxs("div",{children:[r.jsxs("div",{className:"booking-title",children:[p," • Room ",b]}),r.jsxs("div",{className:"booking-dates",children:["Requested: ",new Date(y.createdAt).toLocaleDateString()]})]})}),r.jsxs("div",{className:"booking-details",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Hostel"}),r.jsx("div",{className:"detail-value",children:E})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Room Type"}),r.jsx("div",{className:"detail-value",children:w.toUpperCase()})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Email"}),r.jsx("div",{className:"detail-value",children:g})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("div",{className:"detail-label",children:"Phone"}),r.jsx("div",{className:"detail-value",children:j})]})]})]}),r.jsxs("div",{className:"booking-actions",children:[y.status==="pending"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>m(y._id),className:"action-btn btn-approve",children:"✅ Approve"}),r.jsx("button",{onClick:()=>u(y._id),className:"action-btn btn-reject",children:"❌ Reject"})]}),(y.status==="approved"||y.status==="active")&&r.jsx("button",{onClick:()=>v(y._id),className:"action-btn btn-checkout",children:"🚪 Checkout"})]})]},y._id)})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("h3",{className:"empty-title",children:a==="all"?"No Bookings Yet":`No ${a} bookings`}),r.jsx("p",{className:"empty-subtitle",children:a==="all"?"Bookings from students will appear here":`No bookings with status "${a}"`})]})]})]})}const vc=[{value:"maintenance",label:"🔧 Maintenance"},{value:"cleanliness",label:"🧹 Cleanliness"},{value:"food",label:"🍽️ Food"},{value:"wifi_internet",label:"📶 WiFi/Internet"},{value:"water_supply",label:"💧 Water Supply"},{value:"electricity",label:"⚡ Electricity"},{value:"security",label:"🔒 Security"},{value:"noise",label:"🔊 Noise"},{value:"roommate",label:"👥 Roommate"},{value:"staff_behavior",label:"👤 Staff Behavior"},{value:"billing",label:"💰 Billing"},{value:"amenities",label:"🏠 Amenities"},{value:"other",label:"📝 Other"}],bc=[{value:"low",label:"Low",color:"#6b7280"},{value:"medium",label:"Medium",color:"#f59e0b"},{value:"high",label:"High",color:"#ef4444"},{value:"urgent",label:"Urgent",color:"#dc2626"}];function fg(){var A,O,U,W,K,V,Y;const[e,t]=x.useState(!1),[n,o]=x.useState([]),[a,s]=x.useState([]),[i,l]=x.useState(!0),[c,d]=x.useState({open:0,in_progress:0,resolved:0,closed:0}),[f,m]=x.useState({status:"all",hostel:"all",priority:"all"}),[u,v]=x.useState(null),[S,k]=x.useState(""),[y,h]=x.useState(""),[p,g]=x.useState(!1);x.useEffect(()=>{const C=localStorage.getItem("theme");t(C==="dark"),C==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme");const _=()=>{const z=localStorage.getItem("theme");t(z==="dark"),z==="dark"?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")};return window.addEventListener("themeChange",_),()=>{window.removeEventListener("themeChange",_)}},[]),x.useEffect(()=>{j()},[]);const j=async()=>{try{const C=localStorage.getItem("token"),[_,z,M]=await Promise.all([fetch("http://localhost:5000/api/complaints/owner/all",{headers:{Authorization:`Bearer ${C}`}}),fetch("http://localhost:5000/api/hostels/owner/my",{headers:{Authorization:`Bearer ${C}`}}),fetch("http://localhost:5000/api/complaints/owner/stats",{headers:{Authorization:`Bearer ${C}`}})]),$=await _.json(),I=await z.json(),D=await M.json();$.success&&o($.complaints),I.success&&s(I.hostels),D.success&&d(D.stats)}catch(C){console.error("Fetch error:",C)}finally{l(!1)}},E=async()=>{if(!(!u||!S.trim())){g(!0);try{const C=localStorage.getItem("token");(await(await fetch(`http://localhost:5000/api/complaints/owner/${u._id}/respond`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${C}`},body:JSON.stringify({response:S})})).json()).success&&(k(""),j(),v({...u,ownerResponse:S,status:"in_progress"}))}catch{alert("Failed to send response")}finally{g(!1)}}},b=async()=>{if(!(!u||!y.trim())){g(!0);try{const C=localStorage.getItem("token");(await(await fetch(`http://localhost:5000/api/complaints/owner/${u._id}/resolve`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${C}`},body:JSON.stringify({resolution:y})})).json()).success&&(h(""),v(null),j())}catch{alert("Failed to resolve complaint")}finally{g(!1)}}},w=C=>{const _={open:{bg:"rgba(251, 191, 36, 0.15)",text:"#f59e0b",border:"rgba(251, 191, 36, 0.3)"},in_progress:{bg:"rgba(59, 130, 246, 0.15)",text:"#3b82f6",border:"rgba(59, 130, 246, 0.3)"},resolved:{bg:"rgba(34, 197, 94, 0.15)",text:"#22c55e",border:"rgba(34, 197, 94, 0.3)"},closed:{bg:"rgba(107, 114, 128, 0.15)",text:"#6b7280",border:"rgba(107, 114, 128, 0.3)"},reopened:{bg:"rgba(239, 68, 68, 0.15)",text:"#ef4444",border:"rgba(239, 68, 68, 0.3)"}};return _[C]||_.open},N=C=>{const _=bc.find(z=>z.value===C);return(_==null?void 0:_.color)||"#6b7280"},R=C=>new Date(C).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),T=n.filter(C=>{var _;return!(f.status!=="all"&&C.status!==f.status||f.hostel!=="all"&&(((_=C.hostel)==null?void 0:_._id)||C.hostel)!==f.hostel||f.priority!=="all"&&C.priority!==f.priority)});return r.jsxs("div",{className:`owner-complaints-wrapper ${e?"dark-theme":"light-theme"}`,children:[r.jsx(Mn,{}),r.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .owner-complaints-wrapper {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .light-theme { background: #ffffff; color: #111827; }
        .dark-theme { background: #0f172a; color: #f1f5f9; }

        .complaints-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 0.9375rem;
        }

        .dark-theme .page-subtitle { color: #94a3b8; }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: #f8fafc;
          padding: 1.25rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dark-theme .stat-card {
          background: #1e293b;
          border-color: #334155;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8125rem;
          color: #6b7280;
          font-weight: 500;
        }

        .dark-theme .stat-label { color: #94a3b8; }

        .stat-card.open .stat-number { color: #f59e0b; }
        .stat-card.in_progress .stat-number { color: #3b82f6; }
        .stat-card.resolved .stat-number { color: #22c55e; }
        .stat-card.closed .stat-number { color: #6b7280; }

        .filters-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-select {
          padding: 0.625rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #ffffff;
          color: #111827;
          font-size: 0.875rem;
          min-width: 150px;
        }

        .dark-theme .filter-select {
          background: #1e293b;
          border-color: #334155;
          color: #f1f5f9;
        }

        .complaints-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .complaints-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: calc(100vh - 350px);
          overflow-y: auto;
        }

        .complaint-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .complaint-card:hover {
          border-color: #6366f1;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
        }

        .complaint-card.selected {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.05);
        }

        .dark-theme .complaint-card {
          background: #1e293b;
          border-color: #334155;
        }

        .dark-theme .complaint-card.selected {
          background: rgba(99, 102, 241, 0.1);
        }

        .complaint-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .complaint-card-title {
          font-weight: 600;
          font-size: 0.9375rem;
          color: #111827;
        }

        .dark-theme .complaint-card-title { color: #f1f5f9; }

        .complaint-card-badges {
          display: flex;
          gap: 0.375rem;
        }

        .badge {
          padding: 0.1875rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .complaint-card-meta {
          font-size: 0.8125rem;
          color: #6b7280;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .dark-theme .complaint-card-meta { color: #94a3b8; }

        .complaint-card-student {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.8125rem;
        }

        .student-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.625rem;
          font-weight: 600;
        }

        .detail-panel {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 1.5rem;
          position: sticky;
          top: 2rem;
          max-height: calc(100vh - 300px);
          overflow-y: auto;
        }

        .dark-theme .detail-panel {
          background: #1e293b;
          border-color: #334155;
        }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark-theme .detail-header { border-color: #334155; }

        .detail-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .detail-section {
          margin-bottom: 1.25rem;
        }

        .detail-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .dark-theme .detail-label { color: #94a3b8; }

        .detail-value {
          font-size: 0.9375rem;
          color: #111827;
          line-height: 1.6;
        }

        .dark-theme .detail-value { color: #e2e8f0; }

        .detail-student {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(99, 102, 241, 0.05);
          border-radius: 0.5rem;
        }

        .student-avatar-lg {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .student-info {
          flex: 1;
        }

        .student-name {
          font-weight: 600;
          margin-bottom: 0.125rem;
        }

        .student-email {
          font-size: 0.8125rem;
          color: #6b7280;
        }

        .dark-theme .student-email { color: #94a3b8; }

        .response-box {
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid #3b82f6;
          padding: 0.75rem 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .resolution-box {
          background: rgba(34, 197, 94, 0.05);
          border-left: 3px solid #22c55e;
          padding: 0.75rem 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .action-form {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .dark-theme .action-form { border-color: #334155; }

        .action-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: #ffffff;
          color: #111827;
          font-size: 0.9375rem;
          min-height: 100px;
          resize: vertical;
          margin-bottom: 0.75rem;
        }

        .dark-theme .action-textarea {
          background: #0f172a;
          border-color: #334155;
          color: #f1f5f9;
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .btn {
          padding: 0.625rem 1.25rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
        }

        .btn-primary:hover {
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-success {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .btn-success:hover {
          box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: #6b7280;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .no-selection {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 300px;
          color: #6b7280;
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e2e8f0;
          border-top-color: #6366f1;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .feedback-box {
          background: rgba(251, 191, 36, 0.1);
          border-left: 3px solid #fbbf24;
          padding: 0.75rem 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
          margin-top: 0.75rem;
        }

        .feedback-rating {
          color: #fbbf24;
          margin-bottom: 0.25rem;
        }

        @media (max-width: 1024px) {
          .complaints-layout {
            grid-template-columns: 1fr;
          }
          .detail-panel {
            position: relative;
            top: 0;
            max-height: none;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .filters-bar {
            flex-direction: column;
          }
          .filter-select {
            width: 100%;
          }
        }
      `}),r.jsxs("div",{className:"complaints-container",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{className:"page-title",children:"🎫 Student Complaints"}),r.jsx("p",{className:"page-subtitle",children:"Manage and resolve student issues across your hostels"})]}),r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-card open",children:[r.jsx("div",{className:"stat-number",children:c.open||0}),r.jsx("div",{className:"stat-label",children:"Open"})]}),r.jsxs("div",{className:"stat-card in_progress",children:[r.jsx("div",{className:"stat-number",children:c.in_progress||0}),r.jsx("div",{className:"stat-label",children:"In Progress"})]}),r.jsxs("div",{className:"stat-card resolved",children:[r.jsx("div",{className:"stat-number",children:c.resolved||0}),r.jsx("div",{className:"stat-label",children:"Resolved"})]}),r.jsxs("div",{className:"stat-card closed",children:[r.jsx("div",{className:"stat-number",children:c.closed||0}),r.jsx("div",{className:"stat-label",children:"Closed"})]})]}),r.jsxs("div",{className:"filters-bar",children:[r.jsxs("select",{className:"filter-select",value:f.status,onChange:C=>m({...f,status:C.target.value}),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"open",children:"Open"}),r.jsx("option",{value:"in_progress",children:"In Progress"}),r.jsx("option",{value:"resolved",children:"Resolved"}),r.jsx("option",{value:"closed",children:"Closed"}),r.jsx("option",{value:"reopened",children:"Reopened"})]}),r.jsxs("select",{className:"filter-select",value:f.hostel,onChange:C=>m({...f,hostel:C.target.value}),children:[r.jsx("option",{value:"all",children:"All Hostels"}),a.map(C=>r.jsx("option",{value:C._id,children:C.name},C._id))]}),r.jsxs("select",{className:"filter-select",value:f.priority,onChange:C=>m({...f,priority:C.target.value}),children:[r.jsx("option",{value:"all",children:"All Priorities"}),bc.map(C=>r.jsx("option",{value:C.value,children:C.label},C.value))]})]}),i?r.jsx("div",{className:"loading",children:r.jsx("div",{className:"spinner"})}):r.jsxs("div",{className:"complaints-layout",children:[r.jsx("div",{className:"complaints-list",children:T.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("div",{children:"No complaints found"})]}):T.map(C=>{var z,M,$,I,D,L;const _=w(C.status);return r.jsxs("div",{className:`complaint-card ${(u==null?void 0:u._id)===C._id?"selected":""}`,onClick:()=>v(C),children:[r.jsxs("div",{className:"complaint-card-header",children:[r.jsx("div",{className:"complaint-card-title",children:C.subject}),r.jsxs("div",{className:"complaint-card-badges",children:[r.jsx("span",{className:"badge",style:{background:`${N(C.priority)}15`,color:N(C.priority)},children:C.priority}),r.jsx("span",{className:"badge",style:{background:_.bg,color:_.text},children:C.status.replace("_"," ")})]})]}),r.jsxs("div",{className:"complaint-card-meta",children:[r.jsx("span",{children:((z=vc.find(H=>H.value===C.category))==null?void 0:z.label)||C.category}),r.jsx("span",{children:"•"}),r.jsx("span",{children:(M=C.hostel)==null?void 0:M.name}),r.jsx("span",{children:"•"}),r.jsx("span",{children:R(C.createdAt)})]}),r.jsxs("div",{className:"complaint-card-student",children:[r.jsx("div",{className:"student-avatar",children:((D=(I=($=C.student)==null?void 0:$.name)==null?void 0:I.charAt(0))==null?void 0:D.toUpperCase())||"?"}),r.jsx("span",{children:((L=C.student)==null?void 0:L.name)||"Unknown Student"})]})]},C._id)})}),r.jsx("div",{className:"detail-panel",children:u?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"detail-header",children:r.jsxs("div",{children:[r.jsx("div",{className:"detail-title",children:u.subject}),r.jsxs("div",{className:"complaint-card-badges",children:[r.jsx("span",{className:"badge",style:{background:`${N(u.priority)}15`,color:N(u.priority)},children:u.priority}),r.jsx("span",{className:"badge",style:{background:w(u.status).bg,color:w(u.status).text},children:u.status.replace("_"," ")})]})]})}),r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Student"}),r.jsxs("div",{className:"detail-student",children:[r.jsx("div",{className:"student-avatar-lg",children:((U=(O=(A=u.student)==null?void 0:A.name)==null?void 0:O.charAt(0))==null?void 0:U.toUpperCase())||"?"}),r.jsxs("div",{className:"student-info",children:[r.jsx("div",{className:"student-name",children:((W=u.student)==null?void 0:W.name)||"Unknown"}),r.jsx("div",{className:"student-email",children:((K=u.student)==null?void 0:K.email)||""})]})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Category & Hostel"}),r.jsxs("div",{className:"detail-value",children:[((V=vc.find(C=>C.value===u.category))==null?void 0:V.label)||u.category," "," at ",(Y=u.hostel)==null?void 0:Y.name,u.room&&` (Room #${u.room.roomNumber})`]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Description"}),r.jsx("div",{className:"detail-value",children:u.description})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Submitted"}),r.jsx("div",{className:"detail-value",children:R(u.createdAt)})]}),u.ownerResponse&&r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Your Response"}),r.jsx("div",{className:"response-box",children:u.ownerResponse})]}),u.resolution&&r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Resolution"}),r.jsx("div",{className:"resolution-box",children:u.resolution})]}),u.studentRating&&r.jsxs("div",{className:"detail-section",children:[r.jsx("div",{className:"detail-label",children:"Student Feedback"}),r.jsxs("div",{className:"feedback-box",children:[r.jsx("div",{className:"feedback-rating",children:"⭐".repeat(u.studentRating)}),u.studentFeedback&&r.jsx("div",{children:u.studentFeedback})]})]}),["open","in_progress","reopened"].includes(u.status)&&r.jsxs("div",{className:"action-form",children:[!u.ownerResponse&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"detail-label",children:"Send Response"}),r.jsx("textarea",{className:"action-textarea",placeholder:"Write your response to the student...",value:S,onChange:C=>k(C.target.value)}),r.jsx("div",{className:"action-buttons",children:r.jsx("button",{className:"btn btn-primary",onClick:E,disabled:p||!S.trim(),children:p?"Sending...":"Send Response"})})]}),u.ownerResponse&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"detail-label",children:"Mark as Resolved"}),r.jsx("textarea",{className:"action-textarea",placeholder:"Describe how this issue was resolved...",value:y,onChange:C=>h(C.target.value)}),r.jsx("div",{className:"action-buttons",children:r.jsx("button",{className:"btn btn-success",onClick:b,disabled:p||!y.trim(),children:p?"Resolving...":"✓ Mark Resolved"})})]})]})]}):r.jsxs("div",{className:"no-selection",children:[r.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📋"}),r.jsx("div",{children:"Select a complaint to view details"})]})})]})]})]})}function yc({role:e}){const t=localStorage.getItem("token"),n=localStorage.getItem("userRole");return t?e&&n!==e?n==="student"?r.jsx(er,{to:"/student/dashboard",replace:!0}):n==="owner"?r.jsx(er,{to:"/admin",replace:!0}):r.jsx(er,{to:"/login",replace:!0}):r.jsx(xh,{}):r.jsx(er,{to:"/login",replace:!0})}const hg={payment:[{keywords:["payment","pay","money","fee","fees","cost","price","rent","amount","how much"],question:"How do I pay for my hostel?",answer:"Payment is handled directly with the hostel owner. Once your booking is approved, coordinate with the owner for payment methods. Most hostels accept UPI, bank transfer, or cash payments.",intent:null},{keywords:["refund","cancel","cancellation","money back","return money"],question:"Can I get a refund if I cancel?",answer:`Refund policies vary by hostel. Generally:
• 7+ days before check-in: Full refund
• 3-7 days: 50% refund
• Less than 3 days: No refund

Contact the hostel owner for their specific policy.`,intent:null},{keywords:["deposit","security","advance","caution"],question:"Is there a security deposit?",answer:"Yes, most hostels require a security deposit (typically 1-2 months rent). This is refundable when you check out, minus any damages. The deposit is paid directly to the hostel owner.",intent:null},{keywords:["due","deadline","when pay","payment date","rent due"],question:"When is rent due?",answer:"Rent is typically due at the beginning of each month (1st-5th). The exact date depends on your check-in date. Late payment may incur penalties. Check with your hostel owner for specifics.",intent:null},{keywords:["receipt","invoice","bill","proof"],question:"How do I get a payment receipt?",answer:"Request payment receipts directly from your hostel owner. They should provide receipts for all payments including rent, deposits, and any additional charges.",intent:null},{keywords:["my dues","my payment","pending payment","what i owe","my rent"],question:"What are my current dues?",answer:"Let me check your payment status...",intent:"my_dues"},{keywords:["payment method","upi","bank transfer","cash","online payment","gpay","paytm","phonepe"],question:"What payment methods are accepted?",answer:`Most hostels accept:
• UPI (GPay, PhonePe, Paytm)
• Bank Transfer (NEFT/IMPS)
• Cash
• Cheque (some hostels)

Confirm accepted methods with your specific hostel owner.`,intent:null},{keywords:["late fee","penalty","late payment"],question:"What if I pay late?",answer:`Late payment policies vary by hostel but typically:
• 1-7 days late: ₹100-500 fine
• 7+ days: Higher penalty + warning
• Repeated delays: Risk of eviction

Always pay on time or inform the owner in advance if you'll be late.`,intent:null}],booking:[{keywords:["book","booking","reserve","reservation","how to book","make booking"],question:"How do I book a hostel?",answer:`To book a hostel:
1️⃣ Search for hostels in your area
2️⃣ View hostel details and rooms
3️⃣ Click "Book Now" on your preferred room
4️⃣ Fill booking details
5️⃣ Wait for owner approval

You'll get notified once approved!`,intent:null},{keywords:["my booking","my bookings","booking history","past booking","show booking"],question:"Show my bookings",answer:"Let me fetch your bookings...",intent:"my_bookings"},{keywords:["status","pending","approved","rejected","booking status","check status"],question:"What is my booking status?",answer:"Checking your booking status...",intent:"my_booking_status"},{keywords:["cancel booking","cancel reservation","cancel my"],question:"How do I cancel a booking?",answer:`To cancel a booking:
1. Go to Dashboard → My Bookings
2. Find the booking you want to cancel
3. Click "Cancel Booking"
4. Confirm cancellation

⚠️ Note: Refund depends on the hostel's cancellation policy.`,intent:null},{keywords:["check in","checkin","check-in","move in","when move"],question:"What is the check-in process?",answer:`Check-in process:
1. Get booking approved
2. Contact hostel owner for date/time
3. Bring ID proof (Aadhar/College ID)
4. Pay security deposit
5. Collect room keys
6. Owner marks you as checked in

Typical check-in time: 10 AM - 6 PM`,intent:null},{keywords:["check out","checkout","check-out","move out","leave","vacate"],question:"How do I check out?",answer:`Check-out process:
1. Inform owner 15-30 days in advance
2. Clear all pending dues
3. Clean and vacate room
4. Return keys
5. Room inspection by owner
6. Get security deposit refund

Typical check-out time: By 12 PM`,intent:null},{keywords:["waiting","how long","approval time","when approve"],question:"How long for booking approval?",answer:"Booking approval typically takes 24-48 hours. If you don't hear back within 2 days, try contacting the hostel owner directly through their contact details on the hostel page.",intent:null},{keywords:["multiple booking","book more","another booking"],question:"Can I have multiple bookings?",answer:"You can only have one active booking at a time. If you want to switch hostels, you'll need to cancel or check out from your current booking first.",intent:null}],room:[{keywords:["room type","sharing","types of room","room options"],question:"What room types are available?",answer:`Available room types:

🛏️ **Single** - Private room (₹8,000-15,000/mo)
👥 **Double Sharing** - 2 people (₹5,000-8,000/mo)
👥👥 **Triple Sharing** - 3 people (₹4,000-6,000/mo)
👥👥👥 **Four+ Sharing** - 4+ people (₹3,000-5,000/mo)

Prices vary by city and amenities.`,intent:"room_types"},{keywords:["amenities","facilities","wifi","ac","food","mess","what included"],question:"What amenities are provided?",answer:`Common hostel amenities:
✅ WiFi
✅ Study table & chair
✅ Cupboard/storage
✅ Attached/Common bathroom
✅ 24/7 water & electricity

Premium amenities (some hostels):
⭐ AC rooms
⭐ Mess/food
⭐ Laundry
⭐ Gym
⭐ TV room

Check individual hostel pages for details.`,intent:null},{keywords:["change room","switch room","different room","upgrade"],question:"Can I change my room?",answer:`Room changes depend on availability and hostel policy. To request a change:
1. Contact your hostel owner
2. Explain the reason
3. Check available options
4. Pay price difference (if upgrading)

Changes may not be possible during peak seasons.`,intent:null},{keywords:["roommate","room mate","sharing with","who roommate"],question:"How are roommates assigned?",answer:`Roommates are typically assigned based on:
• Availability at time of booking
• Gender (separate floors/wings)
• Course/college (when possible)

You can request specific arrangements with the owner, but it's not guaranteed.`,intent:null},{keywords:["available room","vacancy","room available","any room"],question:"What rooms are available?",answer:"Let me check current availability...",intent:"available_rooms"},{keywords:["furniture","bed","mattress","fan"],question:"What furniture is provided?",answer:`Standard room furniture includes:
🛏️ Bed with mattress
📚 Study table
🪑 Chair
🚪 Cupboard/wardrobe
💡 Lights & fan
🔌 Power outlets

Some rooms may have AC, attached bathroom, or balcony.`,intent:null},{keywords:["guest","visitor","friend visit","parents visit"],question:"Can I have visitors?",answer:`Visitor policies vary by hostel:
• Day visitors: Usually allowed (10 AM - 8 PM)
• Overnight guests: Mostly not allowed
• Parents: Usually allowed with prior notice

Check with your hostel for specific visitor rules.`,intent:null}],hostel:[{keywords:["how many hostel","total hostel","hostel count"],question:"How many hostels are listed?",answer:"Checking our hostel database...",intent:"hostel_count"},{keywords:["hostel in","hostel near","find hostel","search hostel","looking for hostel"],question:"Find hostels in a city",answer:"Let me search for hostels...",intent:"hostels_in_city"},{keywords:["cheap","affordable","budget","low price","cheapest"],question:"What are the cheapest hostels?",answer:"Finding affordable options...",intent:"cheapest_hostels"},{keywords:["best","top rated","highest rated","good hostel","recommended"],question:"What are the best hostels?",answer:"Finding top-rated hostels...",intent:"top_rated_hostels"},{keywords:["boys hostel","girls hostel","male","female","men","women","ladies"],question:"Are there gender-specific hostels?",answer:`Yes! We have:
👨 Boys/Men's hostels
👩 Girls/Women's hostels
👥 Co-ed hostels (separate floors)

Use the filter on search page to find hostels for your gender.`,intent:null},{keywords:["near college","near university","student hostel"],question:"Hostels near colleges?",answer:`Many hostels are located near popular colleges and universities. When searching:
1. Enter your college area in search
2. Use the distance feature to see how far each hostel is
3. Filter by price and amenities

The search results show distance from your location!`,intent:null}],account:[{keywords:["register","sign up","create account","new account","join"],question:"How do I create an account?",answer:`To create an account:
1. Click "Register" on homepage
2. Select "Student"
3. Enter your details:
   • Full name
   • Email
   • Phone number
   • Password
4. Click Register

You can then search and book hostels!`,intent:null},{keywords:["password","forgot password","reset password","change password","lost password"],question:"I forgot my password",answer:`To reset your password:
1. Go to Login page
2. Click "Forgot Password"
3. Enter your registered email
4. Check your email for reset link
5. Create a new password

If you don't receive the email, contact support.`,intent:null},{keywords:["profile","update profile","edit profile","change details","my profile"],question:"How do I update my profile?",answer:`To update your profile:
1. Login to your account
2. Go to Dashboard
3. Click on Profile icon → "Profile"
4. Edit your details
5. Click "Save Changes"

You can update name, phone, and profile picture.`,intent:null},{keywords:["delete account","remove account","close account","deactivate"],question:"How do I delete my account?",answer:`To delete your account:
1. Ensure you have no active bookings
2. Clear all pending dues
3. Contact support to request deletion

⚠️ This action is permanent and all your data will be removed.`,intent:null},{keywords:["login","log in","sign in","cant login","login problem"],question:"I can't login",answer:`If you're having login issues:
1. Check if email/username is correct
2. Verify password (case-sensitive)
3. Clear browser cache
4. Try "Forgot Password" if needed
5. Contact support if problem persists

Make sure you're using the correct account type (Student/Owner).`,intent:null}],safety:[{keywords:["safe","safety","secure","security","cctv","guard"],question:"Are the hostels safe?",answer:`Safety measures at most hostels:
🔒 24/7 security guard
📹 CCTV surveillance
🚪 Secure entry gates
🆘 Emergency contacts
🔥 Fire safety equipment

⚠️ Always visit in person before booking and check reviews!`,intent:null},{keywords:["rules","hostel rules","regulations","guidelines","policy"],question:"What are the hostel rules?",answer:`Common hostel rules:
🚭 No smoking/alcohol
🔇 Quiet hours (10 PM - 7 AM)
🚪 Entry timing restrictions
🧹 Keep room & common areas clean
🎫 Carry ID always
👥 Visitor restrictions
⚡ No high-power appliances

Specific rules vary by hostel.`,intent:null},{keywords:["complaint","issue","problem","report","harassment"],question:"How do I report an issue?",answer:`To report an issue:
1. Contact hostel owner directly first
2. If unresolved, use our complaint system
3. For emergencies, call local authorities

We take safety seriously and will investigate all reports.`,intent:null},{keywords:["emergency","urgent","help","danger"],question:"What to do in emergency?",answer:`🚨 In case of emergency:
1. Call emergency services: 112
2. Contact hostel security
3. Inform hostel owner
4. Report to platform

Important numbers:
• Police: 100
• Fire: 101
• Ambulance: 102
• Women helpline: 1091`,intent:null}],general:[{keywords:["contact","support","help","customer service","phone","email support"],question:"How do I contact support?",answer:`Contact options:
💬 Use this chatbot for quick answers
📧 Email: support@hostelmanager.com
📞 For hostel-specific issues, contact the owner directly

We typically respond within 24 hours.`,intent:null},{keywords:["owner","hostel owner","contact owner","talk to owner","owner number"],question:"How do I contact the hostel owner?",answer:`To contact the owner:
1. Go to the hostel page
2. Find "Contact Owner" section
3. You'll see their phone/email

You can also communicate through the booking system after making a reservation.`,intent:null},{keywords:["review","rating","feedback","rate hostel"],question:"How do I leave a review?",answer:`To leave a review:
1. You must have stayed at the hostel
2. Go to the hostel page
3. Scroll to Reviews section
4. Click "Write Review"
5. Rate (1-5 stars) and add comments

Honest reviews help other students!`,intent:null},{keywords:["app","mobile app","download app","android","ios"],question:"Is there a mobile app?",answer:`Currently, we're a web-based platform that works great on mobile browsers. A dedicated mobile app is coming soon! 📱

Tip: Add our website to your home screen for app-like experience.`,intent:null},{keywords:["stats","statistics","platform info","about platform"],question:"Tell me about this platform",answer:"Let me get the latest statistics...",intent:"platform_stats"},{keywords:["hello","hi","hey","good morning","good evening","good afternoon"],question:"Greeting",answer:`Hello! 👋 I'm your Hostel Assistant. I can help you with:
• 🏠 Finding hostels
• 📋 Booking questions
• 💰 Payment info
• 📊 Your booking status

What would you like to know?`,intent:null},{keywords:["thank","thanks","thank you","thx","ty"],question:"Thanks",answer:"You're welcome! 😊 Is there anything else I can help you with?",intent:null},{keywords:["bye","goodbye","see you","exit","close"],question:"Goodbye",answer:"Goodbye! 👋 Have a great day! Feel free to chat anytime you have questions about hostels, bookings, or payments.",intent:null},{keywords:["who are you","what are you","your name","chatbot"],question:"Who are you?",answer:`I'm the Hostel Assistant chatbot! 🤖 I can help you with:
• Finding and comparing hostels
• Booking information
• Payment queries
• Checking your booking status
• General hostel rules and safety

Ask me anything!`,intent:null}]},gg=[{label:"📋 My Bookings",query:"Show my bookings"},{label:"🔍 Find Hostels",query:"How many hostels are there?"},{label:"💰 Payment Info",query:"How do I pay?"},{label:"⭐ Top Rated",query:"Best hostels"},{label:"🛏️ Room Types",query:"What room types are available?"},{label:"❓ Help",query:"What can you help with?"}];function xg(e){const t=e.toLowerCase().trim();let n=null,o=0;for(const a of Object.values(hg))for(const s of a){let i=0;for(const l of s.keywords)t.includes(l.toLowerCase())&&(i+=l.length);i>o&&(o=i,n=s)}return n}function vg(e){const t=[/hostel(?:s)? (?:in|near|at|around) ([a-zA-Z\s]+)/i,/(?:in|near|at|around) ([a-zA-Z\s]+) (?:hostel|area|city)/i,/find (?:hostel|hostels) ([a-zA-Z\s]+)/i];for(const n of t){const o=e.match(n);if(o)return o[1].trim()}return null}function bg(){const[e,t]=x.useState(!1),[n,o]=x.useState([{type:"bot",text:"Hi there! 👋 I'm your Hostel Assistant. I can help you with hostel search, bookings, payments, and more. What would you like to know?",time:new Date}]),[a,s]=x.useState(""),[i,l]=x.useState(!1),c=x.useRef(null),d=()=>{var y;(y=c.current)==null||y.scrollIntoView({behavior:"smooth"})};x.useEffect(()=>{d()},[n]);const f=async(y,h={})=>{try{const p=localStorage.getItem("token");return await(await fetch("http://localhost:5000/api/chatbot/query",{method:"POST",headers:{"Content-Type":"application/json",...p&&{Authorization:`Bearer ${p}`}},body:JSON.stringify({intent:y,query:h})})).json()}catch{return{success:!1,message:"Sorry, I couldn't fetch that information. Please try again."}}},m=(y,h)=>{if(!y.success&&!y.message)return"Sorry, I encountered an error. Please try again.";let p=y.message;if(y.data)switch(h){case"my_bookings":Array.isArray(y.data)&&(p+=`

`,y.data.forEach((j,E)=>{p+=`${E+1}. **${j.hostel}** - Room ${j.room}
   Status: ${j.status} | ₹${j.price}/month

`}));break;case"hostels_in_city":case"cheapest_hostels":case"top_rated_hostels":Array.isArray(y.data)&&(p+=`

`,y.data.forEach((j,E)=>{p+=`${E+1}. **${j.name}** (${j.city})
`,j.startingFrom&&(p+=`   Starting ₹${j.startingFrom}/month
`),j.rating&&(p+=`   ⭐ ${j.rating}`),j.reviews&&(p+=` (${j.reviews} reviews)`),p+=`

`}));break;case"available_rooms":Array.isArray(y.data)&&(p+=`

`,y.data.forEach(j=>{p+=`• **${j.type}**: ${j.availableRooms} rooms (avg ₹${j.avgPrice}/month)
`}));break;case"hostel_info":const g=y.data;p+=`

📍 ${g.address}
💰 ${g.priceRange}
⭐ Rating: ${g.rating}
🏷️ Type: ${g.type}
✅ Amenities: ${g.amenities.join(", ")}`;break}return p},u=async(y=a)=>{if(!y.trim())return;const h={type:"user",text:y.trim(),time:new Date};o(j=>[...j,h]),s(""),l(!0);const p=xg(y);let g;if(p&&p.intent){const j={};p.intent==="hostels_in_city"&&(j.city=vg(y));const E=await f(p.intent,j);g={type:"bot",text:m(E,p.intent),time:new Date}}else p?g={type:"bot",text:p.answer,time:new Date}:g={type:"bot",text:`I'm not sure about that. I can help you with:

• 🏠 Finding hostels
• 📋 Booking information
• 💰 Payment queries
• 🛏️ Room details
• 🔒 Safety & rules

Try asking something specific or use the quick buttons below!`,time:new Date};setTimeout(()=>{o(j=>[...j,g]),l(!1)},500+Math.random()*500)},v=y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),u())},S=y=>y.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),k=y=>y.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br/>");return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: var(--font-primary, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
        }

        .chatbot-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .chatbot-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
        }

        .chatbot-toggle-icon {
          font-size: 28px;
        }

        .chatbot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        .chatbot-window {
          position: absolute;
          bottom: 76px;
          right: 0;
          width: 400px;
          height: 560px;
          background: var(--bg-primary, #ffffff);
          border-radius: 20px;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUp 0.3s ease;
          border: 1px solid var(--border-default, #e5e7eb);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .chatbot-header {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chatbot-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatbot-avatar {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .chatbot-name {
          font-weight: 600;
          font-size: 16px;
        }

        .chatbot-status {
          font-size: 12px;
          opacity: 0.9;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          50% { opacity: 0.5; }
        }

        .chatbot-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: background 0.2s;
        }

        .chatbot-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: var(--bg-secondary, #f9fafb);
        }

        .message {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.6;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .message.bot {
          background: var(--bg-primary, #ffffff);
          color: var(--text-primary, #1f2937);
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .message.user {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .message-time {
          font-size: 10px;
          opacity: 0.6;
          margin-top: 6px;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 12px 16px;
          background: var(--bg-primary, #ffffff);
          border-radius: 18px;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          background: #9ca3af;
          border-radius: 50%;
          animation: bounce 1.4s infinite;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
        }

        .quick-suggestions {
          padding: 12px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          background: var(--bg-primary, #ffffff);
          border-top: 1px solid var(--border-default, #e5e7eb);
        }

        .quick-btn {
          padding: 8px 14px;
          background: var(--bg-secondary, #f3f4f6);
          border: 1px solid var(--border-default, #e5e7eb);
          border-radius: 20px;
          font-size: 13px;
          color: var(--text-secondary, #6b7280);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .quick-btn:hover {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border-color: transparent;
          transform: translateY(-1px);
        }

        .chatbot-input-area {
          padding: 12px 16px;
          background: var(--bg-primary, #ffffff);
          border-top: 1px solid var(--border-default, #e5e7eb);
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .chatbot-input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border-default, #e5e7eb);
          border-radius: 24px;
          font-size: 14px;
          background: var(--bg-secondary, #f9fafb);
          color: var(--text-primary, #1f2937);
          outline: none;
          transition: border-color 0.2s;
        }

        .chatbot-input:focus {
          border-color: #6366f1;
        }

        .chatbot-input::placeholder {
          color: var(--text-muted, #9ca3af);
        }

        .chatbot-send {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }

        .chatbot-send:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .chatbot-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 480px) {
          .chatbot-container {
            bottom: 16px;
            right: 16px;
          }

          .chatbot-window {
            width: calc(100vw - 32px);
            height: 75vh;
            bottom: 70px;
            right: 0;
          }

          .chatbot-toggle {
            width: 56px;
            height: 56px;
          }

          .quick-suggestions {
            padding: 10px;
          }

          .quick-btn {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
      `}),r.jsxs("div",{className:"chatbot-container",children:[e&&r.jsxs("div",{className:"chatbot-window",children:[r.jsxs("div",{className:"chatbot-header",children:[r.jsxs("div",{className:"chatbot-header-info",children:[r.jsx("div",{className:"chatbot-avatar",children:"🤖"}),r.jsxs("div",{children:[r.jsx("div",{className:"chatbot-name",children:"Hostel Assistant"}),r.jsxs("div",{className:"chatbot-status",children:[r.jsx("span",{className:"status-dot"}),"Online • Ask me anything"]})]})]}),r.jsx("button",{className:"chatbot-close",onClick:()=>t(!1),children:"✕"})]}),r.jsxs("div",{className:"chatbot-messages",children:[n.map((y,h)=>r.jsxs("div",{className:`message ${y.type}`,children:[r.jsx("div",{dangerouslySetInnerHTML:{__html:k(y.text)}}),r.jsx("div",{className:"message-time",children:S(y.time)})]},h)),i&&r.jsxs("div",{className:"typing-indicator",children:[r.jsx("div",{className:"typing-dot"}),r.jsx("div",{className:"typing-dot"}),r.jsx("div",{className:"typing-dot"})]}),r.jsx("div",{ref:c})]}),r.jsx("div",{className:"quick-suggestions",children:gg.map((y,h)=>r.jsx("button",{className:"quick-btn",onClick:()=>u(y.query),children:y.label},h))}),r.jsxs("div",{className:"chatbot-input-area",children:[r.jsx("input",{type:"text",className:"chatbot-input",placeholder:"Type your question...",value:a,onChange:y=>s(y.target.value),onKeyPress:v}),r.jsx("button",{className:"chatbot-send",onClick:()=>u(),disabled:!a.trim()||i,children:"➤"})]})]}),r.jsxs("button",{className:"chatbot-toggle",onClick:()=>t(!e),children:[!e&&r.jsx("span",{className:"chatbot-pulse"}),r.jsx("span",{className:"chatbot-toggle-icon",children:e?"✕":"💬"})]})]})]})}function ue(){const e=Pe(),t=ur(),[n,o]=x.useState(!1),[a,s]=x.useState(!1),[i,l]=x.useState(!1),[c,d]=x.useState(""),[f,m]=x.useState(""),[u,v]=x.useState(!1),[S,k]=x.useState(!1),y=x.useRef(null);x.useEffect(()=>{const w=localStorage.getItem("theme")==="dark";o(w),document.body.classList.toggle("dark-mode",w),document.body.classList.toggle("dark-theme",w);const N=localStorage.getItem("token"),R=localStorage.getItem("userRole"),T=localStorage.getItem("userName");N&&R&&(v(!0),m(R),d(T||(R==="student"?"Student":"Owner")));const A=()=>k(window.scrollY>10);window.addEventListener("scroll",A);const O=W=>{y.current&&!y.current.contains(W.target)&&l(!1)};document.addEventListener("mousedown",O);const U=()=>{const W=localStorage.getItem("theme");o(W==="dark")};return window.addEventListener("themeChange",U),()=>{window.removeEventListener("scroll",A),document.removeEventListener("mousedown",O),window.removeEventListener("themeChange",U)}},[]);function h(){const b=!n;o(b),localStorage.setItem("theme",b?"dark":"light"),document.body.classList.toggle("dark-mode",b),document.body.classList.toggle("dark-theme",b),window.dispatchEvent(new Event("themeChange"))}function p(){localStorage.removeItem("token"),localStorage.removeItem("userData"),localStorage.removeItem("userRole"),localStorage.removeItem("userName"),localStorage.removeItem("adminData"),localStorage.removeItem("adminToken"),v(!1),m(""),d(""),e("/")}const g=b=>t.pathname===b,E=f==="owner"?[{to:"/owner/dashboard",label:"Dashboard",icon:Fa},{to:"/owner/hostels",label:"Hostels",icon:vt},{to:"/owner/rooms",label:"Rooms",icon:Fs},{to:"/owner/bookings",label:"Bookings",icon:Qu},{to:"/owner/complaints",label:"Complaints",icon:Gu}]:f==="student"?[{to:"/student/dashboard",label:"Dashboard",icon:Fa},{to:"/search",label:"Browse",icon:Ho},{to:"/student/profile",label:"Profile",icon:Rn}]:[{to:"/",label:"Home",icon:_s},{to:"/search",label:"Browse",icon:Ho},{to:"/hostel-info",label:"How It Works",icon:vt}];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: var(--header-height);
          display: flex;
          align-items: center;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          transition: all var(--duration-normal) var(--ease-default);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: var(--shadow-sm);
        }

        body.dark-mode .navbar.scrolled,
        body.dark-theme .navbar.scrolled {
          background: rgba(17, 24, 39, 0.85);
        }

        .navbar-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 0 var(--space-6);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-8);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-xl);
          font-weight: 700;
          letter-spacing: var(--tracking-tighter);
          color: var(--text);
          flex-shrink: 0;
          transition: transform var(--duration-fast) var(--ease-default);
        }

        .navbar-brand:hover {
          transform: translateY(-1px);
        }

        .navbar-brand-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-brand-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          list-style: none;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.5rem 0.875rem;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius);
          transition: all var(--duration-fast) var(--ease-default);
          position: relative;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--text);
          background: var(--bg-tertiary);
        }

        .nav-link.active {
          color: var(--primary);
          background: var(--primary-50);
        }

        body.dark-mode .nav-link.active,
        body.dark-theme .nav-link.active {
          background: rgba(99, 102, 241, 0.12);
        }

        .nav-link-icon {
          opacity: 0.7;
          flex-shrink: 0;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-shrink: 0;
        }

        .navbar-divider {
          width: 1px;
          height: 24px;
          background: var(--border);
        }

        .theme-toggle {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--duration-fast) var(--ease-default);
          border: 1px solid transparent;
        }

        .theme-toggle:hover {
          color: var(--text);
          background: var(--bg-tertiary);
        }

        .profile-menu {
          position: relative;
        }

        .profile-trigger {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: 4px 8px 4px 4px;
          border-radius: var(--radius-full);
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--bg);
          transition: all var(--duration-fast) var(--ease-default);
        }

        .profile-trigger:hover {
          border-color: var(--primary-300);
          box-shadow: var(--shadow-sm);
        }

        .profile-avatar {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .profile-name {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text);
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .profile-chevron {
          color: var(--text-tertiary);
          transition: transform var(--duration-fast) var(--ease-default);
        }

        .profile-trigger[aria-expanded="true"] .profile-chevron {
          transform: rotate(180deg);
        }

        .profile-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px) scale(0.97);
          transition: all var(--duration-fast) var(--ease-default);
          z-index: 1000;
          overflow: hidden;
        }

        .profile-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .dropdown-header {
          padding: var(--space-4);
          border-bottom: 1px solid var(--border);
        }

        .dropdown-header-name {
          font-weight: 600;
          font-size: var(--text-sm);
          color: var(--text);
        }

        .dropdown-header-role {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          text-transform: capitalize;
        }

        .dropdown-section {
          padding: var(--space-1);
        }

        .dropdown-section + .dropdown-section {
          border-top: 1px solid var(--border);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: 0.625rem 0.75rem;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text);
          border-radius: var(--radius);
          cursor: pointer;
          transition: all var(--duration-fast) var(--ease-default);
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
        }

        .dropdown-item:hover {
          background: var(--bg-tertiary);
        }

        .dropdown-item.danger {
          color: var(--danger);
        }

        .dropdown-item.danger:hover {
          background: var(--danger-light);
        }

        .dropdown-item-icon {
          color: var(--text-tertiary);
          flex-shrink: 0;
        }

        /* Mobile */
        .mobile-toggle {
          display: none;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius);
          color: var(--text);
          cursor: pointer;
        }

        .mobile-toggle:hover {
          background: var(--bg-tertiary);
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .navbar-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .profile-name {
            display: none;
          }

          .mobile-nav {
            display: block;
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg);
            z-index: 999;
            padding: var(--space-4);
            overflow-y: auto;
            border-top: 1px solid var(--border);
            transform: translateX(-100%);
            transition: transform var(--duration-normal) var(--ease-default);
          }

          .mobile-nav.open {
            transform: translateX(0);
          }

          .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: var(--space-3);
            padding: var(--space-4);
            font-size: var(--text-base);
            font-weight: 500;
            color: var(--text-secondary);
            border-radius: var(--radius-md);
            transition: all var(--duration-fast) var(--ease-default);
            margin-bottom: var(--space-1);
          }

          .mobile-nav-link:hover, .mobile-nav-link.active {
            background: var(--bg-tertiary);
            color: var(--primary);
          }

          .mobile-nav-footer {
            margin-top: var(--space-6);
            padding-top: var(--space-4);
            border-top: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
          }
        }
      `}),r.jsx("nav",{className:`navbar ${S?"scrolled":""}`,children:r.jsxs("div",{className:"navbar-inner",children:[r.jsxs(B,{to:u&&f==="owner"?"/owner/dashboard":u&&f==="student"?"/student/dashboard":"/",className:"navbar-brand",children:[r.jsx("div",{className:"navbar-brand-icon",children:r.jsx(_s,{size:18})}),r.jsx("span",{className:"navbar-brand-text",children:"HostelHub"})]}),r.jsx("ul",{className:"navbar-nav",children:E.map(({to:b,label:w,icon:N})=>r.jsx("li",{children:r.jsxs(B,{to:b,className:`nav-link ${g(b)?"active":""}`,children:[r.jsx(N,{size:16,className:"nav-link-icon"}),w]})},b))}),r.jsxs("div",{className:"navbar-actions",children:[r.jsx("button",{className:"theme-toggle",onClick:h,"aria-label":"Toggle theme",children:n?r.jsx(Yh,{size:18}):r.jsx(qh,{size:18})}),u?r.jsxs("div",{className:"profile-menu",ref:y,children:[r.jsxs("button",{className:"profile-trigger",onClick:()=>l(!i),"aria-expanded":i,children:[r.jsx("div",{className:"profile-avatar",children:c.charAt(0).toUpperCase()}),r.jsx("span",{className:"profile-name",children:c}),r.jsx(Uh,{size:14,className:"profile-chevron"})]}),r.jsxs("div",{className:`profile-dropdown ${i?"open":""}`,children:[r.jsxs("div",{className:"dropdown-header",children:[r.jsx("div",{className:"dropdown-header-name",children:c}),r.jsx("div",{className:"dropdown-header-role",children:f})]}),r.jsxs("div",{className:"dropdown-section",children:[f==="student"&&r.jsxs(B,{to:"/student/profile",className:"dropdown-item",onClick:()=>l(!1),children:[r.jsx(Rn,{size:16,className:"dropdown-item-icon"}),"My Profile"]}),r.jsxs(B,{to:f==="student"?"/student/dashboard":"/owner/dashboard",className:"dropdown-item",onClick:()=>l(!1),children:[r.jsx(Fa,{size:16,className:"dropdown-item-icon"}),"Dashboard"]})]}),r.jsx("div",{className:"dropdown-section",children:r.jsxs("button",{className:"dropdown-item danger",onClick:p,children:[r.jsx(Oh,{size:16,className:"dropdown-item-icon"}),"Logout"]})})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(B,{to:"/login",className:"btn btn-outline btn-sm hide-mobile",children:"Login"}),r.jsx(B,{to:"/register",className:"btn btn-primary btn-sm",children:"Sign Up"})]}),r.jsx("button",{className:"mobile-toggle",onClick:()=>s(!a),children:a?r.jsx(Hh,{size:20}):r.jsx(Bh,{size:20})})]})]})}),r.jsxs("div",{className:`mobile-nav ${a?"open":""}`,onClick:()=>s(!1),children:[E.map(({to:b,label:w,icon:N})=>r.jsxs(B,{to:b,className:`mobile-nav-link ${g(b)?"active":""}`,children:[r.jsx(N,{size:20}),w]},b)),!u&&r.jsxs("div",{className:"mobile-nav-footer",children:[r.jsx(B,{to:"/login",className:"btn btn-outline btn-full",children:"Login"}),r.jsx(B,{to:"/register",className:"btn btn-primary btn-full",children:"Sign Up"})]})]})]})}function yg(){const e=localStorage.getItem("token"),t=localStorage.getItem("userRole");if(e&&t){if(t==="student")return r.jsx(er,{to:"/student/dashboard",replace:!0});if(t==="owner")return r.jsx(er,{to:"/owner/dashboard",replace:!0})}return r.jsx(Ku,{})}function wg(){return r.jsxs("div",{style:{minHeight:"calc(100vh - var(--header-height))",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"var(--space-6)",padding:"var(--space-8)",textAlign:"center",animation:"fadeInUp 0.4s ease both"},children:[r.jsx("div",{style:{fontSize:"6rem",fontWeight:800,letterSpacing:"-0.05em",lineHeight:1,background:"linear-gradient(135deg, var(--primary), var(--accent))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"404"}),r.jsxs("div",{children:[r.jsx("h2",{style:{fontSize:"var(--text-2xl)",marginBottom:"var(--space-2)"},children:"Page Not Found"}),r.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--text-base)",maxWidth:400},children:"The page you're looking for doesn't exist or has been moved."})]}),r.jsxs(B,{to:"/",className:"btn btn-primary",style:{gap:"var(--space-2)"},children:[r.jsx(nr,{size:16}),"Back to Home"]})]})}const jg=["/login","/register"];function kg(){return jg.some(e=>window.location.pathname.startsWith(e)),r.jsxs(r.Fragment,{children:[r.jsx(Ng,{}),r.jsx(bg,{})]})}function Ng(){return r.jsxs(bh,{children:[r.jsx(ee,{path:"/",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(yg,{})]})}),r.jsx(ee,{path:"/landing",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(Ku,{})]})}),r.jsx(ee,{path:"/search",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(Xh,{})]})}),r.jsx(ee,{path:"/hostel/:id",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(Zh,{})]})}),r.jsx(ee,{path:"/hostel-info",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(Kh,{})]})}),r.jsx(ee,{path:"/login",element:r.jsx(eg,{})}),r.jsx(ee,{path:"/register",element:r.jsx(tg,{})}),r.jsxs(ee,{element:r.jsx(yc,{role:"student"}),children:[r.jsx(ee,{path:"/student/dashboard",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(ng,{})]})}),r.jsx(ee,{path:"/student/profile",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(ag,{})]})})]}),r.jsxs(ee,{element:r.jsx(yc,{role:"owner"}),children:[r.jsx(ee,{path:"/admin",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(sg,{})]})}),r.jsx(ee,{path:"/admin/double",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(ig,{})]})}),r.jsx(ee,{path:"/admin/triple",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(lg,{})]})}),r.jsx(ee,{path:"/admin/four",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(cg,{})]})}),r.jsx(ee,{path:"/admin/fees",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(dg,{})]})}),r.jsx(ee,{path:"/owner/dashboard",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(ug,{})]})}),r.jsx(ee,{path:"/owner/hostels",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(mg,{})]})}),r.jsx(ee,{path:"/owner/hostels/add",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(gc,{})]})}),r.jsx(ee,{path:"/owner/hostels/:id/edit",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(gc,{})]})}),r.jsx(ee,{path:"/owner/rooms",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(xc,{})]})}),r.jsx(ee,{path:"/owner/rooms/add",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(xc,{})]})}),r.jsx(ee,{path:"/owner/bookings",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(pg,{})]})}),r.jsx(ee,{path:"/owner/complaints",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(fg,{})]})})]}),r.jsx(ee,{path:"/home",element:r.jsx(er,{to:"/",replace:!0})}),r.jsx(ee,{path:"*",element:r.jsxs(r.Fragment,{children:[r.jsx(ue,{}),r.jsx(wg,{})]})})]})}Fu(document.getElementById("root")).render(r.jsx(Rc.StrictMode,{children:r.jsx(zh,{children:r.jsx(kg,{})})}));
