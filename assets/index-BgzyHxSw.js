(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function o(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(h){if(h.ep)return;h.ep=!0;const m=o(h);fetch(h.href,m)}})();var Oc={exports:{}},Un={};var eh;function ix(){if(eh)return Un;eh=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function o(u,h,m){var y=null;if(m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),"key"in h){m={};for(var N in h)N!=="key"&&(m[N]=h[N])}else m=h;return h=m.ref,{$$typeof:r,type:u,key:y,ref:h!==void 0?h:null,props:m}}return Un.Fragment=d,Un.jsx=o,Un.jsxs=o,Un}var th;function sx(){return th||(th=1,Oc.exports=ix()),Oc.exports}var n=sx(),Uc={exports:{}},I={};var ah;function rx(){if(ah)return I;ah=1;var r=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),H=Symbol.iterator;function Z(v){return v===null||typeof v!="object"?null:(v=H&&v[H]||v["@@iterator"],typeof v=="function"?v:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,S={};function G(v,_,B){this.props=v,this.context=_,this.refs=S,this.updater=B||X}G.prototype.isReactComponent={},G.prototype.setState=function(v,_){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,_,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ee(){}ee.prototype=G.prototype;function K(v,_,B){this.props=v,this.context=_,this.refs=S,this.updater=B||X}var ve=K.prototype=new ee;ve.constructor=K,L(ve,G.prototype),ve.isPureReactComponent=!0;var ye=Array.isArray;function Ce(){}var W={H:null,A:null,T:null,S:null},Me=Object.prototype.hasOwnProperty;function Ke(v,_,B){var q=B.ref;return{$$typeof:r,type:v,key:_,ref:q!==void 0?q:null,props:B}}function Ut(v,_){return Ke(v.type,_,v.props)}function gt(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function Fe(v){var _={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(B){return _[B]})}var _t=/\/+/g;function bt(v,_){return typeof v=="object"&&v!==null&&v.key!=null?Fe(""+v.key):_.toString(36)}function _e(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Ce,Ce):(v.status="pending",v.then(function(_){v.status==="pending"&&(v.status="fulfilled",v.value=_)},function(_){v.status==="pending"&&(v.status="rejected",v.reason=_)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function D(v,_,B,q,$){var ae=typeof v;(ae==="undefined"||ae==="boolean")&&(v=null);var fe=!1;if(v===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(v.$$typeof){case r:case d:fe=!0;break;case R:return fe=v._init,D(fe(v._payload),_,B,q,$)}}if(fe)return $=$(v),fe=q===""?"."+bt(v,0):q,ye($)?(B="",fe!=null&&(B=fe.replace(_t,"$&/")+"/"),D($,_,B,"",function(kl){return kl})):$!=null&&(gt($)&&($=Ut($,B+($.key==null||v&&v.key===$.key?"":(""+$.key).replace(_t,"$&/")+"/")+fe)),_.push($)),1;fe=0;var Ie=q===""?".":q+":";if(ye(v))for(var De=0;De<v.length;De++)q=v[De],ae=Ie+bt(q,De),fe+=D(q,_,B,ae,$);else if(De=Z(v),typeof De=="function")for(v=De.call(v),De=0;!(q=v.next()).done;)q=q.value,ae=Ie+bt(q,De++),fe+=D(q,_,B,ae,$);else if(ae==="object"){if(typeof v.then=="function")return D(_e(v),_,B,q,$);throw _=String(v),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return fe}function Y(v,_,B){if(v==null)return v;var q=[],$=0;return D(v,q,"","",function(ae){return _.call(B,ae,$++)}),q}function F(v){if(v._status===-1){var _=v._result;_=_(),_.then(function(B){(v._status===0||v._status===-1)&&(v._status=1,v._result=B)},function(B){(v._status===0||v._status===-1)&&(v._status=2,v._result=B)}),v._status===-1&&(v._status=0,v._result=_)}if(v._status===1)return v._result.default;throw v._result}var pe=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},je={map:Y,forEach:function(v,_,B){Y(v,function(){_.apply(this,arguments)},B)},count:function(v){var _=0;return Y(v,function(){_++}),_},toArray:function(v){return Y(v,function(_){return _})||[]},only:function(v){if(!gt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return I.Activity=w,I.Children=je,I.Component=G,I.Fragment=o,I.Profiler=h,I.PureComponent=K,I.StrictMode=u,I.Suspense=b,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,I.__COMPILER_RUNTIME={__proto__:null,c:function(v){return W.H.useMemoCache(v)}},I.cache=function(v){return function(){return v.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(v,_,B){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var q=L({},v.props),$=v.key;if(_!=null)for(ae in _.key!==void 0&&($=""+_.key),_)!Me.call(_,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&_.ref===void 0||(q[ae]=_[ae]);var ae=arguments.length-2;if(ae===1)q.children=B;else if(1<ae){for(var fe=Array(ae),Ie=0;Ie<ae;Ie++)fe[Ie]=arguments[Ie+2];q.children=fe}return Ke(v.type,$,q)},I.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:m,_context:v},v},I.createElement=function(v,_,B){var q,$={},ae=null;if(_!=null)for(q in _.key!==void 0&&(ae=""+_.key),_)Me.call(_,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&($[q]=_[q]);var fe=arguments.length-2;if(fe===1)$.children=B;else if(1<fe){for(var Ie=Array(fe),De=0;De<fe;De++)Ie[De]=arguments[De+2];$.children=Ie}if(v&&v.defaultProps)for(q in fe=v.defaultProps,fe)$[q]===void 0&&($[q]=fe[q]);return Ke(v,ae,$)},I.createRef=function(){return{current:null}},I.forwardRef=function(v){return{$$typeof:N,render:v}},I.isValidElement=gt,I.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:F}},I.memo=function(v,_){return{$$typeof:x,type:v,compare:_===void 0?null:_}},I.startTransition=function(v){var _=W.T,B={};W.T=B;try{var q=v(),$=W.S;$!==null&&$(B,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Ce,pe)}catch(ae){pe(ae)}finally{_!==null&&B.types!==null&&(_.types=B.types),W.T=_}},I.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},I.use=function(v){return W.H.use(v)},I.useActionState=function(v,_,B){return W.H.useActionState(v,_,B)},I.useCallback=function(v,_){return W.H.useCallback(v,_)},I.useContext=function(v){return W.H.useContext(v)},I.useDebugValue=function(){},I.useDeferredValue=function(v,_){return W.H.useDeferredValue(v,_)},I.useEffect=function(v,_){return W.H.useEffect(v,_)},I.useEffectEvent=function(v){return W.H.useEffectEvent(v)},I.useId=function(){return W.H.useId()},I.useImperativeHandle=function(v,_,B){return W.H.useImperativeHandle(v,_,B)},I.useInsertionEffect=function(v,_){return W.H.useInsertionEffect(v,_)},I.useLayoutEffect=function(v,_){return W.H.useLayoutEffect(v,_)},I.useMemo=function(v,_){return W.H.useMemo(v,_)},I.useOptimistic=function(v,_){return W.H.useOptimistic(v,_)},I.useReducer=function(v,_,B){return W.H.useReducer(v,_,B)},I.useRef=function(v){return W.H.useRef(v)},I.useState=function(v){return W.H.useState(v)},I.useSyncExternalStore=function(v,_,B){return W.H.useSyncExternalStore(v,_,B)},I.useTransition=function(){return W.H.useTransition()},I.version="19.2.4",I}var lh;function Xc(){return lh||(lh=1,Uc.exports=rx()),Uc.exports}var T=Xc(),_c={exports:{}},_n={},Hc={exports:{}},Lc={};var nh;function cx(){return nh||(nh=1,(function(r){function d(D,Y){var F=D.length;D.push(Y);e:for(;0<F;){var pe=F-1>>>1,je=D[pe];if(0<h(je,Y))D[pe]=Y,D[F]=je,F=pe;else break e}}function o(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var Y=D[0],F=D.pop();if(F!==Y){D[0]=F;e:for(var pe=0,je=D.length,v=je>>>1;pe<v;){var _=2*(pe+1)-1,B=D[_],q=_+1,$=D[q];if(0>h(B,F))q<je&&0>h($,B)?(D[pe]=$,D[q]=F,pe=q):(D[pe]=B,D[_]=F,pe=_);else if(q<je&&0>h($,F))D[pe]=$,D[q]=F,pe=q;else break e}}return Y}function h(D,Y){var F=D.sortIndex-Y.sortIndex;return F!==0?F:D.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var y=Date,N=y.now();r.unstable_now=function(){return y.now()-N}}var b=[],x=[],R=1,w=null,H=3,Z=!1,X=!1,L=!1,S=!1,G=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ve(D){for(var Y=o(x);Y!==null;){if(Y.callback===null)u(x);else if(Y.startTime<=D)u(x),Y.sortIndex=Y.expirationTime,d(b,Y);else break;Y=o(x)}}function ye(D){if(L=!1,ve(D),!X)if(o(b)!==null)X=!0,Ce||(Ce=!0,Fe());else{var Y=o(x);Y!==null&&_e(ye,Y.startTime-D)}}var Ce=!1,W=-1,Me=5,Ke=-1;function Ut(){return S?!0:!(r.unstable_now()-Ke<Me)}function gt(){if(S=!1,Ce){var D=r.unstable_now();Ke=D;var Y=!0;try{e:{X=!1,L&&(L=!1,ee(W),W=-1),Z=!0;var F=H;try{t:{for(ve(D),w=o(b);w!==null&&!(w.expirationTime>D&&Ut());){var pe=w.callback;if(typeof pe=="function"){w.callback=null,H=w.priorityLevel;var je=pe(w.expirationTime<=D);if(D=r.unstable_now(),typeof je=="function"){w.callback=je,ve(D),Y=!0;break t}w===o(b)&&u(b),ve(D)}else u(b);w=o(b)}if(w!==null)Y=!0;else{var v=o(x);v!==null&&_e(ye,v.startTime-D),Y=!1}}break e}finally{w=null,H=F,Z=!1}Y=void 0}}finally{Y?Fe():Ce=!1}}}var Fe;if(typeof K=="function")Fe=function(){K(gt)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,bt=_t.port2;_t.port1.onmessage=gt,Fe=function(){bt.postMessage(null)}}else Fe=function(){G(gt,0)};function _e(D,Y){W=G(function(){D(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Me=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return H},r.unstable_next=function(D){switch(H){case 1:case 2:case 3:var Y=3;break;default:Y=H}var F=H;H=Y;try{return D()}finally{H=F}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=H;H=D;try{return Y()}finally{H=F}},r.unstable_scheduleCallback=function(D,Y,F){var pe=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?pe+F:pe):F=pe,D){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=F+je,D={id:R++,callback:Y,priorityLevel:D,startTime:F,expirationTime:je,sortIndex:-1},F>pe?(D.sortIndex=F,d(x,D),o(b)===null&&D===o(x)&&(L?(ee(W),W=-1):L=!0,_e(ye,F-pe))):(D.sortIndex=je,d(b,D),X||Z||(X=!0,Ce||(Ce=!0,Fe()))),D},r.unstable_shouldYield=Ut,r.unstable_wrapCallback=function(D){var Y=H;return function(){var F=H;H=Y;try{return D.apply(this,arguments)}finally{H=F}}}})(Lc)),Lc}var ih;function ux(){return ih||(ih=1,Hc.exports=cx()),Hc.exports}var Yc={exports:{}},We={};var sh;function dx(){if(sh)return We;sh=1;var r=Xc();function d(b){var x="https://react.dev/errors/"+b;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)x+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+b+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(d(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(b,x,R){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:b,containerInfo:x,implementation:R}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function N(b,x){if(b==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,We.createPortal=function(b,x){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(d(299));return m(b,x,null,R)},We.flushSync=function(b){var x=y.T,R=u.p;try{if(y.T=null,u.p=2,b)return b()}finally{y.T=x,u.p=R,u.d.f()}},We.preconnect=function(b,x){typeof b=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,u.d.C(b,x))},We.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},We.preinit=function(b,x){if(typeof b=="string"&&x&&typeof x.as=="string"){var R=x.as,w=N(R,x.crossOrigin),H=typeof x.integrity=="string"?x.integrity:void 0,Z=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;R==="style"?u.d.S(b,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:w,integrity:H,fetchPriority:Z}):R==="script"&&u.d.X(b,{crossOrigin:w,integrity:H,fetchPriority:Z,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},We.preinitModule=function(b,x){if(typeof b=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var R=N(x.as,x.crossOrigin);u.d.M(b,{crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&u.d.M(b)},We.preload=function(b,x){if(typeof b=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var R=x.as,w=N(R,x.crossOrigin);u.d.L(b,R,{crossOrigin:w,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},We.preloadModule=function(b,x){if(typeof b=="string")if(x){var R=N(x.as,x.crossOrigin);u.d.m(b,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:R,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else u.d.m(b)},We.requestFormReset=function(b){u.d.r(b)},We.unstable_batchedUpdates=function(b,x){return b(x)},We.useFormState=function(b,x,R){return y.H.useFormState(b,x,R)},We.useFormStatus=function(){return y.H.useHostTransitionStatus()},We.version="19.2.4",We}var rh;function ox(){if(rh)return Yc.exports;rh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),Yc.exports=dx(),Yc.exports}var ch;function fx(){if(ch)return _n;ch=1;var r=ux(),d=Xc(),o=ox();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function N(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(u(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return b(i),e;if(s===l)return b(i),t;s=s.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=s;else{for(var c=!1,f=i.child;f;){if(f===a){c=!0,a=i,l=s;break}if(f===l){c=!0,l=i,a=s;break}f=f.sibling}if(!c){for(f=s.child;f;){if(f===a){c=!0,a=s,l=i;break}if(f===l){c=!0,l=s,a=i;break}f=f.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function R(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=R(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,H=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ee=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),Ut=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=gt&&e[gt]||e["@@iterator"],typeof e=="function"?e:null)}var _t=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case G:return"Profiler";case S:return"StrictMode";case ye:return"Suspense";case Ce:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case K:return e.displayName||"Context";case ee:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:bt(e.type)||"Memo";case Me:t=e._payload,e=e._init;try{return bt(e(t))}catch{}}return null}var _e=Array.isArray,D=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},pe=[],je=-1;function v(e){return{current:e}}function _(e){0>je||(e.current=pe[je],pe[je]=null,je--)}function B(e,t){je++,pe[je]=e.current,e.current=t}var q=v(null),$=v(null),ae=v(null),fe=v(null);function Ie(e,t){switch(B(ae,t),B($,e),B(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nf(t),e=Af(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(q),B(q,e)}function De(){_(q),_($),_(ae)}function kl(e){e.memoizedState!==null&&B(fe,e);var t=q.current,a=Af(t,e.type);t!==a&&(B($,e),B(q,a))}function kn(e){$.current===e&&(_(q),_($)),fe.current===e&&(_(fe),Rn._currentValue=F)}var ps,Ic;function Oa(e){if(ps===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||"",Ic=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ps+e+Ic}var xs=!1;function gs(e,t){if(!e||xs)return"";xs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(z){var C=z}Reflect.construct(e,[],U)}else{try{U.call()}catch(z){C=z}e.call(U.prototype)}}else{try{throw Error()}catch(z){C=z}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(z){if(z&&C&&typeof z.stack=="string")return[z.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),c=s[0],f=s[1];if(c&&f){var p=c.split(`
`),E=f.split(`
`);for(i=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;if(l===p.length||i===E.length)for(l=p.length-1,i=E.length-1;1<=l&&0<=i&&p[l]!==E[i];)i--;for(;1<=l&&0<=i;l--,i--)if(p[l]!==E[i]){if(l!==1||i!==1)do if(l--,i--,0>i||p[l]!==E[i]){var M=`
`+p[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=i);break}}}finally{xs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Oa(a):""}function Hh(e,t){switch(e.tag){case 26:case 27:case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return e.child!==t&&t!==null?Oa("Suspense Fallback"):Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 15:return gs(e.type,!1);case 11:return gs(e.type.render,!1);case 1:return gs(e.type,!0);case 31:return Oa("Activity");default:return""}}function $c(e){try{var t="",a=null;do t+=Hh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var bs=Object.prototype.hasOwnProperty,vs=r.unstable_scheduleCallback,ys=r.unstable_cancelCallback,Lh=r.unstable_shouldYield,Yh=r.unstable_requestPaint,st=r.unstable_now,Bh=r.unstable_getCurrentPriorityLevel,Pc=r.unstable_ImmediatePriority,eu=r.unstable_UserBlockingPriority,qn=r.unstable_NormalPriority,kh=r.unstable_LowPriority,tu=r.unstable_IdlePriority,qh=r.log,Gh=r.unstable_setDisableYieldValue,ql=null,rt=null;function ca(e){if(typeof qh=="function"&&Gh(e),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(ql,e)}catch{}}var ct=Math.clz32?Math.clz32:Zh,Qh=Math.log,Xh=Math.LN2;function Zh(e){return e>>>=0,e===0?32:31-(Qh(e)/Xh|0)|0}var Gn=256,Qn=262144,Xn=4194304;function Ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~s,l!==0?i=Ua(l):(c&=f,c!==0?i=Ua(c):a||(a=f&~e,a!==0&&(i=Ua(a))))):(f=l&~s,f!==0?i=Ua(f):c!==0?i=Ua(c):a||(a=l&~e,a!==0&&(i=Ua(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function Gl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function au(){var e=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),e}function js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jh(e,t,a,l,i,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-ct(a),U=1<<M;f[M]=0,p[M]=-1;var C=E[M];if(C!==null)for(E[M]=null,M=0;M<C.length;M++){var z=C[M];z!==null&&(z.lane&=-536870913)}a&=~U}l!==0&&lu(e,l,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function lu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ct(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function nu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ct(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function iu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ss(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function su(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Jf(e.type))}function ru(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ua=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ua,Pe="__reactProps$"+ua,$a="__reactContainer$"+ua,As="__reactEvents$"+ua,Kh="__reactListeners$"+ua,Fh="__reactHandles$"+ua,cu="__reactResources$"+ua,Xl="__reactMarker$"+ua;function Es(e){delete e[Qe],delete e[Pe],delete e[As],delete e[Kh],delete e[Fh]}function Pa(e){var t=e[Qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[$a]||a[Qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mf(e);e!==null;){if(a=e[Qe])return a;e=Mf(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[Qe]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function tl(e){var t=e[cu];return t||(t=e[cu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Xl]=!0}var uu=new Set,du={};function _a(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(du[e]=t,e=0;e<t.length;e++)uu.add(t[e])}var Wh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},fu={};function Ih(e){return bs.call(fu,e)?!0:bs.call(ou,e)?!1:Wh.test(e)?fu[e]=!0:(ou[e]=!0,!1)}function Vn(e,t,a){if(Ih(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Jn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $h(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){if(!e._valueTracker){var t=hu(e)?"checked":"value";e._valueTracker=$h(e,t,""+e[t])}}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=hu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Kn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ph=/[\n"\\]/g;function yt(e){return e.replace(Ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ws(e,t,a,l,i,s,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Cs(e,c,vt(t)):a!=null?Cs(e,c,vt(a)):l!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+vt(f):e.removeAttribute("name")}function pu(e,t,a,l,i,s,c,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ts(e);return}a=a!=null?""+vt(a):"",t=t!=null?""+vt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ts(e)}function Cs(e,t,a){t==="number"&&Kn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t,a){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+vt(a):""}function gu(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(_e(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=vt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ts(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bu(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||em.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vu(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&bu(e,i,l)}else for(var s in t)t.hasOwnProperty(s)&&bu(e,s,t[s])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fn(e){return am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Rs=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,sl=null;function yu(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(ws(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[Pe]||null;if(!i)throw Error(u(90));ws(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&mu(l)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Ds=!1;function ju(e,t,a){if(Ds)return e(t,a);Ds=!0;try{var l=e(t);return l}finally{if(Ds=!1,(il!==null||sl!==null)&&(Hi(),il&&(t=il,e=sl,sl=il=null,yu(t),e)))for(t=0;t<e.length;t++)yu(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Pe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=!1;if(Qt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){Os=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{Os=!1}var da=null,Us=null,Wn=null;function Su(){if(Wn)return Wn;var e,t=Us,a=t.length,l,i="value"in da?da.value:da.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===i[s-l];l++);return Wn=i.slice(e,1<l?1-l:void 0)}function In(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function Nu(){return!1}function et(e){function t(a,l,i,s,c){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$n:Nu,this.isPropagationStopped=Nu,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=et(Ha),Kl=w({},Ha,{view:0,detail:0}),lm=et(Kl),_s,Hs,Fl,ei=w({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(_s=e.screenX-Fl.screenX,Hs=e.screenY-Fl.screenY):Hs=_s=0,Fl=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),Au=et(ei),nm=w({},ei,{dataTransfer:0}),im=et(nm),sm=w({},Kl,{relatedTarget:0}),Ls=et(sm),rm=w({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=et(rm),um=w({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dm=et(um),om=w({},Ha,{data:0}),Eu=et(om),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function Ys(){return pm}var xm=w({},Kl,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=In(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?In(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?In(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gm=et(xm),bm=w({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=et(bm),vm=w({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),ym=et(vm),jm=w({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=et(jm),Nm=w({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Am=et(Nm),Em=w({},Ha,{newState:0,oldState:0}),Tm=et(Em),wm=[9,13,27,32],Bs=Qt&&"CompositionEvent"in window,Wl=null;Qt&&"documentMode"in document&&(Wl=document.documentMode);var Cm=Qt&&"TextEvent"in window&&!Wl,wu=Qt&&(!Bs||Wl&&8<Wl&&11>=Wl),Cu=" ",zu=!1;function Ru(e,t){switch(e){case"keyup":return wm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function zm(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(zu=!0,Cu);case"textInput":return e=t.data,e===Cu&&zu?null:e;default:return null}}function Rm(e,t){if(rl)return e==="compositionend"||!Bs&&Ru(e,t)?(e=Su(),Wn=Us=da=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mm[e.type]:t==="textarea"}function Ou(e,t,a,l){il?sl?sl.push(l):sl=[l]:il=l,t=Qi(t,"onChange"),0<t.length&&(a=new Pn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Il=null,$l=null;function Dm(e){gf(e,0)}function ti(e){var t=Zl(e);if(mu(t))return e}function Uu(e,t){if(e==="change")return t}var _u=!1;if(Qt){var ks;if(Qt){var qs="oninput"in document;if(!qs){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),qs=typeof Hu.oninput=="function"}ks=qs}else ks=!1;_u=ks&&(!document.documentMode||9<document.documentMode)}function Lu(){Il&&(Il.detachEvent("onpropertychange",Yu),$l=Il=null)}function Yu(e){if(e.propertyName==="value"&&ti($l)){var t=[];Ou(t,$l,e,Ms(e)),ju(Dm,t)}}function Om(e,t,a){e==="focusin"?(Lu(),Il=t,$l=a,Il.attachEvent("onpropertychange",Yu)):e==="focusout"&&Lu()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti($l)}function _m(e,t){if(e==="click")return ti(t)}function Hm(e,t){if(e==="input"||e==="change")return ti(t)}function Lm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Lm;function Pl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!bs.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var a=Bu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bu(a)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Kn(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ym=Qt&&"documentMode"in document&&11>=document.documentMode,cl=null,Qs=null,en=null,Xs=!1;function Qu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xs||cl==null||cl!==Kn(l)||(l=cl,"selectionStart"in l&&Gs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),en&&Pl(en,l)||(en=l,l=Qi(Qs,"onSelect"),0<l.length&&(t=new Pn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=cl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Zs={},Xu={};Qt&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function Ya(e){if(Zs[e])return Zs[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Xu)return Zs[e]=t[a];return e}var Zu=Ya("animationend"),Vu=Ya("animationiteration"),Ju=Ya("animationstart"),Bm=Ya("transitionrun"),km=Ya("transitionstart"),qm=Ya("transitioncancel"),Ku=Ya("transitionend"),Fu=new Map,Vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vs.push("scrollEnd");function zt(e,t){Fu.set(e,t),_a(t,[e])}var ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],dl=0,Js=0;function li(){for(var e=dl,t=Js=dl=0;t<e;){var a=jt[t];jt[t++]=null;var l=jt[t];jt[t++]=null;var i=jt[t];jt[t++]=null;var s=jt[t];if(jt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}s!==0&&Wu(a,i,s)}}function ni(e,t,a,l){jt[dl++]=e,jt[dl++]=t,jt[dl++]=a,jt[dl++]=l,Js|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ks(e,t,a,l){return ni(e,t,a,l),ii(e)}function Ba(e,t){return ni(e,null,null,t),ii(e)}function Wu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,l=s.alternate,l!==null&&(l.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-ct(a),e=s.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),s):null}function ii(e){if(50<Nn)throw Nn=0,lc=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function Gm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,a,l){return new Gm(e,t,a,l)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xt(e,t){var a=e.alternate;return a===null?(a=dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Iu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function si(e,t,a,l,i,s){var c=0;if(l=e,typeof e=="function")Fs(e)&&(c=1);else if(typeof e=="string")c=Jp(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=dt(31,a,t,i),e.elementType=Ke,e.lanes=s,e;case L:return ka(a.children,i,s,t);case S:c=8,i|=24;break;case G:return e=dt(12,a,t,i|2),e.elementType=G,e.lanes=s,e;case ye:return e=dt(13,a,t,i),e.elementType=ye,e.lanes=s,e;case Ce:return e=dt(19,a,t,i),e.elementType=Ce,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:c=10;break e;case ee:c=9;break e;case ve:c=11;break e;case W:c=14;break e;case Me:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=dt(c,a,t,i),t.elementType=e,t.type=l,t.lanes=s,t}function ka(e,t,a,l){return e=dt(7,e,l,t),e.lanes=a,e}function Ws(e,t,a){return e=dt(6,e,null,t),e.lanes=a,e}function $u(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Is(e,t,a){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pu=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var a=Pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$c(t)},Pu.set(e,t),t)}return{value:e,source:t,stack:$c(t)}}var fl=[],hl=0,ri=null,tn=0,Nt=[],At=0,oa=null,Ht=1,Lt="";function Zt(e,t){fl[hl++]=tn,fl[hl++]=ri,ri=e,tn=t}function ed(e,t,a){Nt[At++]=Ht,Nt[At++]=Lt,Nt[At++]=oa,oa=e;var l=Ht;e=Lt;var i=32-ct(l)-1;l&=~(1<<i),a+=1;var s=32-ct(t)+i;if(30<s){var c=i-i%5;s=(l&(1<<c)-1).toString(32),l>>=c,i-=c,Ht=1<<32-ct(t)+i|a<<i|l,Lt=s+e}else Ht=1<<s|a<<i|l,Lt=e}function $s(e){e.return!==null&&(Zt(e,1),ed(e,1,0))}function Ps(e){for(;e===ri;)ri=fl[--hl],fl[hl]=null,tn=fl[--hl],fl[hl]=null;for(;e===oa;)oa=Nt[--At],Nt[At]=null,Lt=Nt[--At],Nt[At]=null,Ht=Nt[--At],Nt[At]=null}function td(e,t){Nt[At++]=Ht,Nt[At++]=Lt,Nt[At++]=oa,Ht=t.id,Lt=t.overflow,oa=e}var Xe=null,Ae=null,re=!1,fa=null,Et=!1,er=Error(u(519));function ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(St(t,e)),er}function ad(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Qe]=e,t[Pe]=l,a){case"dialog":ne("cancel",t),ne("close",t);break;case"iframe":case"object":case"embed":ne("load",t);break;case"video":case"audio":for(a=0;a<En.length;a++)ne(En[a],t);break;case"source":ne("error",t);break;case"img":case"image":case"link":ne("error",t),ne("load",t);break;case"details":ne("toggle",t);break;case"input":ne("invalid",t),pu(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ne("invalid",t);break;case"textarea":ne("invalid",t),gu(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||jf(t.textContent,a)?(l.popover!=null&&(ne("beforetoggle",t),ne("toggle",t)),l.onScroll!=null&&ne("scroll",t),l.onScrollEnd!=null&&ne("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ha(e,!0)}function ld(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 5:case 31:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Xe=Xe.return}}function ml(e){if(e!==Xe)return!1;if(!re)return ld(e),re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bc(e.type,e.memoizedProps)),a=!a),a&&Ae&&ha(e),ld(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Rf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ae=Rf(e)}else t===27?(t=Ae,wa(e.type)?(e=Nc,Nc=null,Ae=e):Ae=t):Ae=Xe?wt(e.stateNode.nextSibling):null;return!0}function qa(){Ae=Xe=null,re=!1}function tr(){var e=fa;return e!==null&&(nt===null?nt=e:nt.push.apply(nt,e),fa=null),e}function an(e){fa===null?fa=[e]:fa.push(e)}var ar=v(null),Ga=null,Vt=null;function ma(e,t,a){B(ar,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=ar.current,_(ar)}function lr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function nr(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var c=i.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=i;for(var p=0;p<t.length;p++)if(f.context===t[p]){s.lanes|=a,f=s.alternate,f!==null&&(f.lanes|=a),lr(s.return,a,e),l||(c=null);break e}s=f.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(u(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),lr(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function pl(e,t,a,l){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var f=i.type;ut(i.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(i===fe.current){if(c=i.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Rn):e=[Rn])}i=i.return}e!==null&&nr(t,e,a,l),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Ga=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return nd(Ga,e)}function ui(e,t){return Ga===null&&Qa(e),nd(e,t)}function nd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(u(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var Qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Xm=r.unstable_scheduleCallback,Zm=r.unstable_NormalPriority,He={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ir(){return{controller:new Qm,data:new Map,refCount:0}}function ln(e){e.refCount--,e.refCount===0&&Xm(Zm,function(){e.controller.abort()})}var nn=null,sr=0,xl=0,gl=null;function Vm(e,t){if(nn===null){var a=nn=[];sr=0,xl=uc(),gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return sr++,t.then(id,id),t}function id(){if(--sr===0&&nn!==null){gl!==null&&(gl.status="fulfilled");var e=nn;nn=null,xl=0,gl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Jm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var sd=D.S;D.S=function(e,t){Xo=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vm(e,t),sd!==null&&sd(e,t)};var Xa=v(null);function rr(){var e=Xa.current;return e!==null?e:Se.pooledCache}function di(e,t){t===null?B(Xa,Xa.current):B(Xa,t.pool)}function rd(){var e=rr();return e===null?null:{parent:He._currentValue,pool:e}}var bl=Error(u(460)),cr=Error(u(474)),oi=Error(u(542)),fi={then:function(){}};function cd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ud(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,od(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,od(e),e}throw Va=t,bl}}function Za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Va=a,bl):a}}var Va=null;function dd(){if(Va===null)throw Error(u(459));var e=Va;return Va=null,e}function od(e){if(e===bl||e===oi)throw Error(u(483))}var vl=null,sn=0;function hi(e){var t=sn;return sn+=1,vl===null&&(vl=[]),ud(vl,e,t)}function rn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mi(e,t){throw t.$$typeof===H?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fd(e){function t(j,g){if(e){var A=j.deletions;A===null?(j.deletions=[g],j.flags|=16):A.push(g)}}function a(j,g){if(!e)return null;for(;g!==null;)t(j,g),g=g.sibling;return null}function l(j){for(var g=new Map;j!==null;)j.key!==null?g.set(j.key,j):g.set(j.index,j),j=j.sibling;return g}function i(j,g){return j=Xt(j,g),j.index=0,j.sibling=null,j}function s(j,g,A){return j.index=A,e?(A=j.alternate,A!==null?(A=A.index,A<g?(j.flags|=67108866,g):A):(j.flags|=67108866,g)):(j.flags|=1048576,g)}function c(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function f(j,g,A,O){return g===null||g.tag!==6?(g=Ws(A,j.mode,O),g.return=j,g):(g=i(g,A),g.return=j,g)}function p(j,g,A,O){var V=A.type;return V===L?M(j,g,A.props.children,O,A.key):g!==null&&(g.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Me&&Za(V)===g.type)?(g=i(g,A.props),rn(g,A),g.return=j,g):(g=si(A.type,A.key,A.props,null,j.mode,O),rn(g,A),g.return=j,g)}function E(j,g,A,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==A.containerInfo||g.stateNode.implementation!==A.implementation?(g=Is(A,j.mode,O),g.return=j,g):(g=i(g,A.children||[]),g.return=j,g)}function M(j,g,A,O,V){return g===null||g.tag!==7?(g=ka(A,j.mode,O,V),g.return=j,g):(g=i(g,A),g.return=j,g)}function U(j,g,A){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Ws(""+g,j.mode,A),g.return=j,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return A=si(g.type,g.key,g.props,null,j.mode,A),rn(A,g),A.return=j,A;case X:return g=Is(g,j.mode,A),g.return=j,g;case Me:return g=Za(g),U(j,g,A)}if(_e(g)||Fe(g))return g=ka(g,j.mode,A,null),g.return=j,g;if(typeof g.then=="function")return U(j,hi(g),A);if(g.$$typeof===K)return U(j,ui(j,g),A);mi(j,g)}return null}function C(j,g,A,O){var V=g!==null?g.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return V!==null?null:f(j,g,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Z:return A.key===V?p(j,g,A,O):null;case X:return A.key===V?E(j,g,A,O):null;case Me:return A=Za(A),C(j,g,A,O)}if(_e(A)||Fe(A))return V!==null?null:M(j,g,A,O,null);if(typeof A.then=="function")return C(j,g,hi(A),O);if(A.$$typeof===K)return C(j,g,ui(j,A),O);mi(j,A)}return null}function z(j,g,A,O,V){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return j=j.get(A)||null,f(g,j,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return j=j.get(O.key===null?A:O.key)||null,p(g,j,O,V);case X:return j=j.get(O.key===null?A:O.key)||null,E(g,j,O,V);case Me:return O=Za(O),z(j,g,A,O,V)}if(_e(O)||Fe(O))return j=j.get(A)||null,M(g,j,O,V,null);if(typeof O.then=="function")return z(j,g,A,hi(O),V);if(O.$$typeof===K)return z(j,g,A,ui(g,O),V);mi(g,O)}return null}function k(j,g,A,O){for(var V=null,ue=null,Q=g,te=g=0,se=null;Q!==null&&te<A.length;te++){Q.index>te?(se=Q,Q=null):se=Q.sibling;var de=C(j,Q,A[te],O);if(de===null){Q===null&&(Q=se);break}e&&Q&&de.alternate===null&&t(j,Q),g=s(de,g,te),ue===null?V=de:ue.sibling=de,ue=de,Q=se}if(te===A.length)return a(j,Q),re&&Zt(j,te),V;if(Q===null){for(;te<A.length;te++)Q=U(j,A[te],O),Q!==null&&(g=s(Q,g,te),ue===null?V=Q:ue.sibling=Q,ue=Q);return re&&Zt(j,te),V}for(Q=l(Q);te<A.length;te++)se=z(Q,j,te,A[te],O),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?te:se.key),g=s(se,g,te),ue===null?V=se:ue.sibling=se,ue=se);return e&&Q.forEach(function(Da){return t(j,Da)}),re&&Zt(j,te),V}function J(j,g,A,O){if(A==null)throw Error(u(151));for(var V=null,ue=null,Q=g,te=g=0,se=null,de=A.next();Q!==null&&!de.done;te++,de=A.next()){Q.index>te?(se=Q,Q=null):se=Q.sibling;var Da=C(j,Q,de.value,O);if(Da===null){Q===null&&(Q=se);break}e&&Q&&Da.alternate===null&&t(j,Q),g=s(Da,g,te),ue===null?V=Da:ue.sibling=Da,ue=Da,Q=se}if(de.done)return a(j,Q),re&&Zt(j,te),V;if(Q===null){for(;!de.done;te++,de=A.next())de=U(j,de.value,O),de!==null&&(g=s(de,g,te),ue===null?V=de:ue.sibling=de,ue=de);return re&&Zt(j,te),V}for(Q=l(Q);!de.done;te++,de=A.next())de=z(Q,j,te,de.value,O),de!==null&&(e&&de.alternate!==null&&Q.delete(de.key===null?te:de.key),g=s(de,g,te),ue===null?V=de:ue.sibling=de,ue=de);return e&&Q.forEach(function(nx){return t(j,nx)}),re&&Zt(j,te),V}function be(j,g,A,O){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Z:e:{for(var V=A.key;g!==null;){if(g.key===V){if(V=A.type,V===L){if(g.tag===7){a(j,g.sibling),O=i(g,A.props.children),O.return=j,j=O;break e}}else if(g.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Me&&Za(V)===g.type){a(j,g.sibling),O=i(g,A.props),rn(O,A),O.return=j,j=O;break e}a(j,g);break}else t(j,g);g=g.sibling}A.type===L?(O=ka(A.props.children,j.mode,O,A.key),O.return=j,j=O):(O=si(A.type,A.key,A.props,null,j.mode,O),rn(O,A),O.return=j,j=O)}return c(j);case X:e:{for(V=A.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===A.containerInfo&&g.stateNode.implementation===A.implementation){a(j,g.sibling),O=i(g,A.children||[]),O.return=j,j=O;break e}else{a(j,g);break}else t(j,g);g=g.sibling}O=Is(A,j.mode,O),O.return=j,j=O}return c(j);case Me:return A=Za(A),be(j,g,A,O)}if(_e(A))return k(j,g,A,O);if(Fe(A)){if(V=Fe(A),typeof V!="function")throw Error(u(150));return A=V.call(A),J(j,g,A,O)}if(typeof A.then=="function")return be(j,g,hi(A),O);if(A.$$typeof===K)return be(j,g,ui(j,A),O);mi(j,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,g!==null&&g.tag===6?(a(j,g.sibling),O=i(g,A),O.return=j,j=O):(a(j,g),O=Ws(A,j.mode,O),O.return=j,j=O),c(j)):a(j,g)}return function(j,g,A,O){try{sn=0;var V=be(j,g,A,O);return vl=null,V}catch(Q){if(Q===bl||Q===oi)throw Q;var ue=dt(29,Q,null,j.mode);return ue.lanes=O,ue.return=j,ue}}}var Ja=fd(!0),hd=fd(!1),pa=!1;function ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(oe&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=ii(e),Wu(e,null,a),t}return ni(e,l,t,a),ii(e)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nu(e,a)}}function or(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var fr=!1;function un(){if(fr){var e=gl;if(e!==null)throw e}}function dn(e,t,a,l){fr=!1;var i=e.updateQueue;pa=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var p=f,E=p.next;p.next=null,c===null?s=E:c.next=E,c=p;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==c&&(f===null?M.firstBaseUpdate=E:f.next=E,M.lastBaseUpdate=p))}if(s!==null){var U=i.baseState;c=0,M=E=p=null,f=s;do{var C=f.lane&-536870913,z=C!==f.lane;if(z?(ie&C)===C:(l&C)===C){C!==0&&C===xl&&(fr=!0),M!==null&&(M=M.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var k=e,J=f;C=t;var be=a;switch(J.tag){case 1:if(k=J.payload,typeof k=="function"){U=k.call(be,U,C);break e}U=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=J.payload,C=typeof k=="function"?k.call(be,U,C):k,C==null)break e;U=w({},U,C);break e;case 2:pa=!0}}C=f.callback,C!==null&&(e.flags|=64,z&&(e.flags|=8192),z=i.callbacks,z===null?i.callbacks=[C]:z.push(C))}else z={lane:C,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(E=M=z,p=U):M=M.next=z,c|=C;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;z=f,f=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);M===null&&(p=U),i.baseState=p,i.firstBaseUpdate=E,i.lastBaseUpdate=M,s===null&&(i.shared.lanes=0),Sa|=c,e.lanes=c,e.memoizedState=U}}function md(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function pd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)md(a[e],t)}var yl=v(null),pi=v(0);function xd(e,t){e=aa,B(pi,e),B(yl,t),aa=e|t.baseLanes}function hr(){B(pi,aa),B(yl,yl.current)}function mr(){aa=pi.current,_(yl),_(pi)}var ot=v(null),Tt=null;function ba(e){var t=e.alternate;B(Oe,Oe.current&1),B(ot,e),Tt===null&&(t===null||yl.current!==null||t.memoizedState!==null)&&(Tt=e)}function pr(e){B(Oe,Oe.current),B(ot,e),Tt===null&&(Tt=e)}function gd(e){e.tag===22?(B(Oe,Oe.current),B(ot,e),Tt===null&&(Tt=e)):va()}function va(){B(Oe,Oe.current),B(ot,ot.current)}function ft(e){_(ot),Tt===e&&(Tt=null),_(Oe)}var Oe=v(0);function xi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jc(a)||Sc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kt=0,P=null,xe=null,Le=null,gi=!1,jl=!1,Ka=!1,bi=0,on=0,Sl=null,Km=0;function ze(){throw Error(u(321))}function xr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function gr(e,t,a,l,i,s){return Kt=s,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?eo:Dr,Ka=!1,s=a(l,i),Ka=!1,jl&&(s=vd(t,a,l,i)),bd(e),s}function bd(e){D.H=mn;var t=xe!==null&&xe.next!==null;if(Kt=0,Le=xe=P=null,gi=!1,on=0,Sl=null,t)throw Error(u(300));e===null||Ye||(e=e.dependencies,e!==null&&ci(e)&&(Ye=!0))}function vd(e,t,a,l){P=e;var i=0;do{if(jl&&(Sl=null),on=0,jl=!1,25<=i)throw Error(u(301));if(i+=1,Le=xe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}D.H=to,s=t(a,l)}while(jl);return s}function Fm(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?fn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(P.flags|=1024),t}function br(){var e=bi!==0;return bi=0,e}function vr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yr(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}Kt=0,Le=xe=P=null,jl=!1,on=bi=0,Sl=null}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?P.memoizedState=Le=e:Le=Le.next=e,Le}function Ue(){if(xe===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Le===null?P.memoizedState:Le.next;if(t!==null)Le=t,xe=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?P.memoizedState=Le=e:Le=Le.next=e}return Le}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fn(e){var t=on;return on+=1,Sl===null&&(Sl=[]),e=ud(Sl,e,t),t=P,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?eo:Dr),e}function yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fn(e);if(e.$$typeof===K)return Ze(e)}throw Error(u(438,String(e)))}function jr(e){var t=null,a=P.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vi(),P.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ut;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function ji(e){var t=Ue();return Sr(t,xe,e)}function Sr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,s=l.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}t.baseQueue=i=s,l.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var f=c=null,p=null,E=t,M=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(ie&U)===U:(Kt&U)===U){var C=E.revertLane;if(C===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===xl&&(M=!0);else if((Kt&C)===C){E=E.next,C===xl&&(M=!0);continue}else U={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=U,c=s):p=p.next=U,P.lanes|=C,Sa|=C;U=E.action,Ka&&a(s,U),s=E.hasEagerState?E.eagerState:a(s,U)}else C={lane:U,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(f=p=C,c=s):p=p.next=C,P.lanes|=U,Sa|=U;E=E.next}while(E!==null&&E!==t);if(p===null?c=s:p.next=f,!ut(s,e.memoizedState)&&(Ye=!0,M&&(a=gl,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=p,l.lastRenderedState=s}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nr(e){var t=Ue(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);ut(s,t.memoizedState)||(Ye=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,l]}function yd(e,t,a){var l=P,i=Ue(),s=re;if(s){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!ut((xe||i).memoizedState,a);if(c&&(i.memoizedState=a,Ye=!0),i=i.queue,Tr(Nd.bind(null,l,i,e),[e]),i.getSnapshot!==t||c||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Nl(9,{destroy:void 0},Sd.bind(null,l,i,a,t),null),Se===null)throw Error(u(349));s||(Kt&127)!==0||jd(l,t,a)}return a}function jd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=P.updateQueue,t===null?(t=vi(),P.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sd(e,t,a,l){t.value=a,t.getSnapshot=l,Ad(t)&&Ed(e)}function Nd(e,t,a){return a(function(){Ad(t)&&Ed(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function Ed(e){var t=Ba(e,2);t!==null&&it(t,e,2)}function Ar(e){var t=$e();if(typeof e=="function"){var a=e;if(e=a(),Ka){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Td(e,t,a,l){return e.baseState=a,Sr(e,xe,typeof l=="function"?l:Ft)}function Wm(e,t,a,l,i){if(Ai(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};D.T!==null?a(!0):s.isTransition=!1,l(s),a=t.pending,a===null?(s.next=t.pending=s,wd(t,s)):(s.next=a.next,t.pending=a.next=s)}}function wd(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var s=D.T,c={};D.T=c;try{var f=a(i,l),p=D.S;p!==null&&p(c,f),Cd(e,t,f)}catch(E){Er(e,t,E)}finally{s!==null&&c.types!==null&&(s.types=c.types),D.T=s}}else try{s=a(i,l),Cd(e,t,s)}catch(E){Er(e,t,E)}}function Cd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){zd(e,t,l)},function(l){return Er(e,t,l)}):zd(e,t,a)}function zd(e,t,a){t.status="fulfilled",t.value=a,Rd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,wd(e,a)))}function Er(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Rd(t),t=t.next;while(t!==l)}e.action=null}function Rd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Md(e,t){return t}function Dd(e,t){if(re){var a=Se.formState;if(a!==null){e:{var l=P;if(re){if(Ae){t:{for(var i=Ae,s=Et;i.nodeType!==8;){if(!s){i=null;break t}if(i=wt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ae=wt(i.nextSibling),l=i.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=$e(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Md,lastRenderedState:t},a.queue=l,a=Id.bind(null,P,l),l.dispatch=a,l=Ar(!1),s=Mr.bind(null,P,!1,l.queue),l=$e(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Wm.bind(null,P,i,s,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function Od(e){var t=Ue();return Ud(t,xe,e)}function Ud(e,t,a){if(t=Sr(e,t,Md)[0],e=ji(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fn(t)}catch(c){throw c===bl?oi:c}else l=t;t=Ue();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(P.flags|=2048,Nl(9,{destroy:void 0},Im.bind(null,i,a),null)),[l,s,e]}function Im(e,t){e.action=t}function _d(e){var t=Ue(),a=xe;if(a!==null)return Ud(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Nl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=P.updateQueue,t===null&&(t=vi(),P.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Hd(){return Ue().memoizedState}function Si(e,t,a,l){var i=$e();P.flags|=e,i.memoizedState=Nl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ni(e,t,a,l){var i=Ue();l=l===void 0?null:l;var s=i.memoizedState.inst;xe!==null&&l!==null&&xr(l,xe.memoizedState.deps)?i.memoizedState=Nl(t,s,a,l):(P.flags|=e,i.memoizedState=Nl(1|t,s,a,l))}function Ld(e,t){Si(8390656,8,e,t)}function Tr(e,t){Ni(2048,8,e,t)}function $m(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=vi(),P.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Yd(e){var t=Ue().memoizedState;return $m({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Bd(e,t){return Ni(4,2,e,t)}function kd(e,t){return Ni(4,4,e,t)}function qd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,a){a=a!=null?a.concat([e]):null,Ni(4,4,qd.bind(null,t,e),a)}function wr(){}function Qd(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&xr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Xd(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&xr(t,l[1]))return l[0];if(l=e(),Ka){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Cr(e,t,a){return a===void 0||(Kt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Vo(),P.lanes|=e,Sa|=e,a)}function Zd(e,t,a,l){return ut(a,t)?a:yl.current!==null?(e=Cr(e,a,l),ut(e,t)||(Ye=!0),e):(Kt&42)===0||(Kt&1073741824)!==0&&(ie&261930)===0?(Ye=!0,e.memoizedState=a):(e=Vo(),P.lanes|=e,Sa|=e,t)}function Vd(e,t,a,l,i){var s=Y.p;Y.p=s!==0&&8>s?s:8;var c=D.T,f={};D.T=f,Mr(e,!1,t,a);try{var p=i(),E=D.S;if(E!==null&&E(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=Jm(p,l);hn(e,t,M,pt(e))}else hn(e,t,l,pt(e))}catch(U){hn(e,t,{then:function(){},status:"rejected",reason:U},pt())}finally{Y.p=s,c!==null&&f.types!==null&&(c.types=f.types),D.T=c}}function Pm(){}function zr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=Jd(e).queue;Vd(e,i,t,F,a===null?Pm:function(){return Kd(e),a(l)})}function Jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:F},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kd(e){var t=Jd(e);t.next===null&&(t=e.alternate.memoizedState),hn(e,t.next.queue,{},pt())}function Rr(){return Ze(Rn)}function Fd(){return Ue().memoizedState}function Wd(){return Ue().memoizedState}function ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=xa(a);var l=ga(t,e,a);l!==null&&(it(l,t,a),cn(l,t,a)),t={cache:ir()},e.payload=t;return}t=t.return}}function tp(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(e)?$d(t,a):(a=Ks(e,t,a,l),a!==null&&(it(a,e,l),Pd(a,t,l)))}function Id(e,t,a){var l=pt();hn(e,t,a,l)}function hn(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))$d(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,f=s(c,a);if(i.hasEagerState=!0,i.eagerState=f,ut(f,c))return ni(e,t,i,0),Se===null&&li(),!1}catch{}if(a=Ks(e,t,i,l),a!==null)return it(a,e,l),Pd(a,t,l),!0}return!1}function Mr(e,t,a,l){if(l={lane:2,revertLane:uc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(t)throw Error(u(479))}else t=Ks(e,a,l,2),t!==null&&it(t,e,2)}function Ai(e){var t=e.alternate;return e===P||t!==null&&t===P}function $d(e,t){jl=gi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Pd(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,nu(e,a)}}var mn={readContext:Ze,use:yi,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};mn.useEffectEvent=ze;var eo={readContext:Ze,use:yi,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ld,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Si(4194308,4,qd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var a=$e();t=t===void 0?null:t;var l=e();if(Ka){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=$e();if(a!==void 0){var i=a(t);if(Ka){ca(!0);try{a(t)}finally{ca(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=tp.bind(null,P,e),[l.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:function(e){e=Ar(e);var t=e.queue,a=Id.bind(null,P,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:wr,useDeferredValue:function(e,t){var a=$e();return Cr(a,e,t)},useTransition:function(){var e=Ar(!1);return e=Vd.bind(null,P,e.queue,!0,!1),$e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=P,i=$e();if(re){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Se===null)throw Error(u(349));(ie&127)!==0||jd(l,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,Ld(Nd.bind(null,l,s,e),[e]),l.flags|=2048,Nl(9,{destroy:void 0},Sd.bind(null,l,s,a,t),null),a},useId:function(){var e=$e(),t=Se.identifierPrefix;if(re){var a=Lt,l=Ht;a=(l&~(1<<32-ct(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=bi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Km++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rr,useFormState:Dd,useActionState:Dd,useOptimistic:function(e){var t=$e();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mr.bind(null,P,!0,a),a.dispatch=t,[e,t]},useMemoCache:jr,useCacheRefresh:function(){return $e().memoizedState=ep.bind(null,P)},useEffectEvent:function(e){var t=$e(),a={impl:e};return t.memoizedState=a,function(){if((oe&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Dr={readContext:Ze,use:yi,useCallback:Qd,useContext:Ze,useEffect:Tr,useImperativeHandle:Gd,useInsertionEffect:Bd,useLayoutEffect:kd,useMemo:Xd,useReducer:ji,useRef:Hd,useState:function(){return ji(Ft)},useDebugValue:wr,useDeferredValue:function(e,t){var a=Ue();return Zd(a,xe.memoizedState,e,t)},useTransition:function(){var e=ji(Ft)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:yd,useId:Fd,useHostTransitionStatus:Rr,useFormState:Od,useActionState:Od,useOptimistic:function(e,t){var a=Ue();return Td(a,xe,e,t)},useMemoCache:jr,useCacheRefresh:Wd};Dr.useEffectEvent=Yd;var to={readContext:Ze,use:yi,useCallback:Qd,useContext:Ze,useEffect:Tr,useImperativeHandle:Gd,useInsertionEffect:Bd,useLayoutEffect:kd,useMemo:Xd,useReducer:Nr,useRef:Hd,useState:function(){return Nr(Ft)},useDebugValue:wr,useDeferredValue:function(e,t){var a=Ue();return xe===null?Cr(a,e,t):Zd(a,xe.memoizedState,e,t)},useTransition:function(){var e=Nr(Ft)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:fn(e),t]},useSyncExternalStore:yd,useId:Fd,useHostTransitionStatus:Rr,useFormState:_d,useActionState:_d,useOptimistic:function(e,t){var a=Ue();return xe!==null?Td(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jr,useCacheRefresh:Wd};to.useEffectEvent=Yd;function Or(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ur={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),i=xa(l);i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,l),t!==null&&(it(t,e,l),cn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),i=xa(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,l),t!==null&&(it(t,e,l),cn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=xa(a);l.tag=2,t!=null&&(l.callback=t),t=ga(e,l,a),t!==null&&(it(t,e,a),cn(t,e,a))}};function ao(e,t,a,l,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,c):t.prototype&&t.prototype.isPureReactComponent?!Pl(a,l)||!Pl(i,s):!0}function lo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Ur.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function no(e){ai(e)}function io(e){console.error(e)}function so(e){ai(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ro(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function _r(e,t,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function co(e){return e=xa(e),e.tag=3,e}function uo(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=l.value;e.payload=function(){return i(s)},e.callback=function(){ro(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){ro(t,a,l),typeof i!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function ap(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,i,!0),a=ot.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?Li():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),sc(e,l,i)),!1;case 22:return a.flags|=65536,l===fi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),sc(e,l,i)),!1}throw Error(u(435,a.tag))}return sc(e,l,i),Li(),!1}if(re)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==er&&(e=Error(u(422),{cause:l}),an(St(e,a)))):(l!==er&&(t=Error(u(423),{cause:l}),an(St(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=St(l,a),i=_r(e.stateNode,l,i),or(e,i),Re!==4&&(Re=2)),!1;var s=Error(u(520),{cause:l});if(s=St(s,a),Sn===null?Sn=[s]:Sn.push(s),Re!==4&&(Re=2),t===null)return!0;l=St(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=_r(a.stateNode,l,e),or(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Na===null||!Na.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=co(i),uo(i,e,a,l),or(a,i),!1}a=a.return}while(a!==null);return!1}var Hr=Error(u(461)),Ye=!1;function Ve(e,t,a,l){t.child=e===null?hd(t,null,a,l):Ja(t,e.child,a,l)}function oo(e,t,a,l,i){a=a.render;var s=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Qa(t),l=gr(e,t,a,c,s,i),f=br(),e!==null&&!Ye?(vr(e,t,i),Wt(e,t,i)):(re&&f&&$s(t),t.flags|=1,Ve(e,t,l,i),t.child)}function fo(e,t,a,l,i){if(e===null){var s=a.type;return typeof s=="function"&&!Fs(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,ho(e,t,s,l,i)):(e=si(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Xr(e,i)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:Pl,a(c,l)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=Xt(s,l),e.ref=t.ref,e.return=t,t.child=e}function ho(e,t,a,l,i){if(e!==null){var s=e.memoizedProps;if(Pl(s,l)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=l=s,Xr(e,i))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return Lr(e,t,a,l,i)}function mo(e,t,a,l){var i=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~s}else l=0,t.child=null;return po(e,t,s,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&di(t,s!==null?s.cachePool:null),s!==null?xd(t,s):hr(),gd(t);else return l=t.lanes=536870912,po(e,t,s!==null?s.baseLanes|a:a,a,l)}else s!==null?(di(t,s.cachePool),xd(t,s),va(),t.memoizedState=null):(e!==null&&di(t,null),hr(),va());return Ve(e,t,i,a),t.child}function pn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function po(e,t,a,l,i){var s=rr();return s=s===null?null:{parent:He._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&di(t,null),hr(),gd(t),e!==null&&pl(e,t,l,!0),t.childLanes=i,null}function Ti(e,t){return t=Ci({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xo(e,t,a){return Ja(t,e.child,null,a),e=Ti(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function lp(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(l.mode==="hidden")return e=Ti(t,l),t.lanes=536870912,pn(null,e);if(pr(t),(e=Ae)?(e=zf(e,Et),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=$u(e),a.return=t,t.child=a,Xe=t,Ae=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return Ti(t,l)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(pr(t),i)if(t.flags&256)t.flags&=-257,t=xo(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ye||pl(e,t,a,!1),i=(a&e.childLanes)!==0,Ye||i){if(l=Se,l!==null&&(c=iu(l,a),c!==0&&c!==s.retryLane))throw s.retryLane=c,Ba(e,c),it(l,e,c),Hr;Li(),t=xo(e,t,a)}else e=s.treeContext,Ae=wt(c.nextSibling),Xe=t,re=!0,fa=null,Et=!1,e!==null&&td(t,e),t=Ti(t,l),t.flags|=4096;return t}return e=Xt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lr(e,t,a,l,i){return Qa(t),a=gr(e,t,a,l,void 0,i),l=br(),e!==null&&!Ye?(vr(e,t,i),Wt(e,t,i)):(re&&l&&$s(t),t.flags|=1,Ve(e,t,a,i),t.child)}function go(e,t,a,l,i,s){return Qa(t),t.updateQueue=null,a=vd(t,l,a,i),bd(e),l=br(),e!==null&&!Ye?(vr(e,t,s),Wt(e,t,s)):(re&&l&&$s(t),t.flags|=1,Ve(e,t,a,s),t.child)}function bo(e,t,a,l,i){if(Qa(t),t.stateNode===null){var s=ol,c=a.contextType;typeof c=="object"&&c!==null&&(s=Ze(c)),s=new a(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ur,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},ur(t),c=a.contextType,s.context=typeof c=="object"&&c!==null?Ze(c):ol,s.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Or(t,a,c,l),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&Ur.enqueueReplaceState(s,s.state,null),dn(t,l,s,i),un(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var f=t.memoizedProps,p=Fa(a,f);s.props=p;var E=s.context,M=a.contextType;c=ol,typeof M=="object"&&M!==null&&(c=Ze(M));var U=a.getDerivedStateFromProps;M=typeof U=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,M||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||E!==c)&&lo(t,s,l,c),pa=!1;var C=t.memoizedState;s.state=C,dn(t,l,s,i),un(),E=t.memoizedState,f||C!==E||pa?(typeof U=="function"&&(Or(t,a,U,l),E=t.memoizedState),(p=pa||ao(t,a,p,l,C,E,c))?(M||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),s.props=l,s.state=E,s.context=c,l=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,dr(e,t),c=t.memoizedProps,M=Fa(a,c),s.props=M,U=t.pendingProps,C=s.context,E=a.contextType,p=ol,typeof E=="object"&&E!==null&&(p=Ze(E)),f=a.getDerivedStateFromProps,(E=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==U||C!==p)&&lo(t,s,l,p),pa=!1,C=t.memoizedState,s.state=C,dn(t,l,s,i),un();var z=t.memoizedState;c!==U||C!==z||pa||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof f=="function"&&(Or(t,a,f,l),z=t.memoizedState),(M=pa||ao(t,a,M,l,C,z,p)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,z,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,z,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),s.props=l,s.state=z,s.context=p,l=M):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,wi(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=Ja(t,e.child,null,i),t.child=Ja(t,null,a,i)):Ve(e,t,a,i),t.memoizedState=s.state,e=t.child):e=Wt(e,t,i),e}function vo(e,t,a,l){return qa(),t.flags|=256,Ve(e,t,a,l),t.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Br(e){return{baseLanes:e,cachePool:rd()}}function kr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=mt),e}function yo(e,t,a){var l=t.pendingProps,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(i?ba(t):va(),(e=Ae)?(e=zf(e,Et),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:oa!==null?{id:Ht,overflow:Lt}:null,retryLane:536870912,hydrationErrors:null},a=$u(e),a.return=t,t.child=a,Xe=t,Ae=null)):e=null,e===null)throw ha(t);return Sc(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(va(),i=t.mode,f=Ci({mode:"hidden",children:f},i),l=ka(l,i,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=Br(a),l.childLanes=kr(e,c,a),t.memoizedState=Yr,pn(null,l)):(ba(t),qr(t,f))}var p=e.memoizedState;if(p!==null&&(f=p.dehydrated,f!==null)){if(s)t.flags&256?(ba(t),t.flags&=-257,t=Gr(e,t,a)):t.memoizedState!==null?(va(),t.child=e.child,t.flags|=128,t=null):(va(),f=l.fallback,i=t.mode,l=Ci({mode:"visible",children:l.children},i),f=ka(f,i,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Ja(t,e.child,null,a),l=t.child,l.memoizedState=Br(a),l.childLanes=kr(e,c,a),t.memoizedState=Yr,t=pn(null,l));else if(ba(t),Sc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(u(419)),l.stack="",l.digest=c,an({value:l,source:null,stack:null}),t=Gr(e,t,a)}else if(Ye||pl(e,t,a,!1),c=(a&e.childLanes)!==0,Ye||c){if(c=Se,c!==null&&(l=iu(c,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ba(e,l),it(c,e,l),Hr;jc(f)||Li(),t=Gr(e,t,a)}else jc(f)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ae=wt(f.nextSibling),Xe=t,re=!0,fa=null,Et=!1,e!==null&&td(t,e),t=qr(t,l.children),t.flags|=4096);return t}return i?(va(),f=l.fallback,i=t.mode,p=e.child,E=p.sibling,l=Xt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?f=Xt(E,f):(f=ka(f,i,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,pn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=Br(a):(i=f.cachePool,i!==null?(p=He._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=rd(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=kr(e,c,a),t.memoizedState=Yr,pn(e.child,l)):(ba(t),a=e.child,e=a.sibling,a=Xt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function qr(e,t){return t=Ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ci(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Gr(e,t,a){return Ja(t,e.child,null,a),e=qr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jo(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),lr(e.return,t,a)}function Qr(e,t,a,l,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=i,c.treeForkCount=s)}function So(e,t,a){var l=t.pendingProps,i=l.revealOrder,s=l.tail;l=l.children;var c=Oe.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,B(Oe,c),Ve(e,t,l,a),l=re?tn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jo(e,a,t);else if(e.tag===19)jo(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&xi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Qr(t,!1,i,a,s,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Qr(t,!0,a,null,s,l);break;case"together":Qr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Xt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Xt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Xr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function np(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),ma(t,He,e.memoizedState.cache),qa();break;case 27:case 5:kl(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yo(e,t,a):(ba(t),e=Wt(e,t,a),e!==null?e.sibling:null);ba(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return So(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Oe,Oe.current),l)break;return null;case 22:return t.lanes=0,mo(e,t,a,t.pendingProps);case 24:ma(t,He,e.memoizedState.cache)}return Wt(e,t,a)}function No(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Xr(e,a)&&(t.flags&128)===0)return Ye=!1,np(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,re&&(t.flags&1048576)!==0&&ed(t,tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e=="function")Fs(e)?(l=Fa(e,l),t.tag=1,t=bo(null,t,e,l,a)):(t.tag=0,t=Lr(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===ve){t.tag=11,t=oo(null,t,e,l,a);break e}else if(i===W){t.tag=14,t=fo(null,t,e,l,a);break e}}throw t=bt(e)||e,Error(u(306,t,""))}}return t;case 0:return Lr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Fa(l,t.pendingProps),bo(e,t,l,i,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var s=t.memoizedState;i=s.element,dr(e,t),dn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ma(t,He,l),l!==s.cache&&nr(t,[He],a,!0),un(),l=c.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=vo(e,t,l,a);break e}else if(l!==i){i=St(Error(u(424)),t),an(i),t=vo(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ae=wt(e.firstChild),Xe=t,re=!0,fa=null,Et=!0,a=hd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),l===i){t=Wt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return wi(e,t),e===null?(a=_f(t.type,null,t.pendingProps,null))?t.memoizedState=a:re||(a=t.type,e=t.pendingProps,l=Xi(ae.current).createElement(a),l[Qe]=t,l[Pe]=e,Je(l,a,e),qe(l),t.stateNode=l):t.memoizedState=_f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kl(t),e===null&&re&&(l=t.stateNode=Df(t.type,t.pendingProps,ae.current),Xe=t,Et=!0,i=Ae,wa(t.type)?(Nc=i,Ae=wt(l.firstChild)):Ae=i),Ve(e,t,t.pendingProps.children,a),wi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((i=l=Ae)&&(l=Up(l,t.type,t.pendingProps,Et),l!==null?(t.stateNode=l,Xe=t,Ae=wt(l.firstChild),Et=!1,i=!0):i=!1),i||ha(t)),kl(t),i=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,l=s.children,bc(i,s)?l=null:c!==null&&bc(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=gr(e,t,Fm,null,null,a),Rn._currentValue=i),wi(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&re&&((e=a=Ae)&&(a=_p(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Xe=t,Ae=null,e=!0):e=!1),e||ha(t)),null;case 13:return yo(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ja(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return oo(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Qa(t),i=Ze(i),l=l(i),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return fo(e,t,t.type,t.pendingProps,a);case 15:return ho(e,t,t.type,t.pendingProps,a);case 19:return So(e,t,a);case 31:return lp(e,t,a);case 22:return mo(e,t,a,t.pendingProps);case 24:return Qa(t),l=Ze(He),e===null?(i=rr(),i===null&&(i=Se,s=ir(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:l,cache:i},ur(t),ma(t,He,i)):((e.lanes&a)!==0&&(dr(e,t),dn(t,null,null,a),un()),i=e.memoizedState,s=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ma(t,He,l)):(l=s.cache,ma(t,He,l),l!==i.cache&&nr(t,[He],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function It(e){e.flags|=4}function Zr(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Wo())e.flags|=8192;else throw Va=fi,cr}else e.flags&=-16777217}function Ao(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kf(t))if(Wo())e.flags|=8192;else throw Va=fi,cr}function zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?au():536870912,e.lanes|=t,wl|=t)}function xn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function ip(e,t,a){var l=t.pendingProps;switch(Ps(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(He),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tr())),Ee(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(It(t),s!==null?(Ee(t),Ao(t,s)):(Ee(t),Zr(t,i,null,l,a))):s?s!==e.memoizedState?(It(t),Ee(t),Ao(t,s)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&It(t),Ee(t),Zr(t,i,e,l,a)),null;case 27:if(kn(t),a=ae.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}e=q.current,ml(t)?ad(t):(e=Df(i,l,a),t.stateNode=e,It(t))}return Ee(t),null;case 5:if(kn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}if(s=q.current,ml(t))ad(t);else{var c=Xi(ae.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?c.createElement(i,{is:l.is}):c.createElement(i)}}s[Qe]=t,s[Pe]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(Je(s,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&It(t)}}return Ee(t),Zr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Xe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||jf(e.nodeValue,a)),e||ha(t,!0)}else e=Xi(e).createTextNode(l),e[Qe]=t,t.stateNode=e}return Ee(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else a=tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ee(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else i=tr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),Ee(t),null);case 4:return De(),e===null&&hc(t.stateNode.containerInfo),Ee(t),null;case 10:return Jt(t.type),Ee(t),null;case 19:if(_(Oe),l=t.memoizedState,l===null)return Ee(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)xn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=xi(e),s!==null){for(t.flags|=128,xn(l,!1),e=s.updateQueue,t.updateQueue=e,zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Iu(a,e),a=a.sibling;return B(Oe,Oe.current&1|2),re&&Zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&st()>Ui&&(t.flags|=128,i=!0,xn(l,!1),t.lanes=4194304)}else{if(!i)if(e=xi(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,zi(t,e),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!re)return Ee(t),null}else 2*st()-l.renderingStartTime>Ui&&a!==536870912&&(t.flags|=128,i=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=st(),e.sibling=null,a=Oe.current,B(Oe,i?a&1|2:a&1),re&&Zt(t,l.treeForkCount),e):(Ee(t),null);case 22:case 23:return ft(t),mr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&_(Xa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(He),Ee(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function sp(e,t){switch(Ps(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(He),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kn(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Oe),null;case 4:return De(),null;case 10:return Jt(t.type),null;case 22:case 23:return ft(t),mr(),e!==null&&_(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(He),null;case 25:return null;default:return null}}function Eo(e,t){switch(Ps(t),t.tag){case 3:Jt(He),De();break;case 26:case 27:case 5:kn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:_(Oe);break;case 10:Jt(t.type);break;case 22:case 23:ft(t),mr(),e!==null&&_(Xa);break;case 24:Jt(He)}}function gn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var s=a.create,c=a.inst;l=s(),c.destroy=l}a=a.next}while(a!==i)}}catch(f){me(t,t.return,f)}}function ya(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var s=i.next;l=s;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,i=t;var p=a,E=f;try{E()}catch(M){me(i,p,M)}}}l=l.next}while(l!==s)}}catch(M){me(t,t.return,M)}}function To(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pd(t,a)}catch(l){me(e,e.return,l)}}}function wo(e,t,a){a.props=Fa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function bn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){me(e,t,i)}}function Yt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){me(e,t,i)}else a.current=null}function Co(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){me(e,e.return,i)}}function Vr(e,t,a){try{var l=e.stateNode;Cp(l,e.type,a,t),l[Pe]=t}catch(i){me(e,e.return,i)}}function zo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Kr(e,t,a),e=e.sibling;e!==null;)Kr(e,t,a),e=e.sibling}function Ri(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ri(e,t,a),e=e.sibling;e!==null;)Ri(e,t,a),e=e.sibling}function Ro(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Je(t,l,a),t[Qe]=e,t[Pe]=a}catch(s){me(e,e.return,s)}}var $t=!1,Be=!1,Fr=!1,Mo=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function rp(e,t){if(e=e.containerInfo,xc=Ii,e=Gu(e),Gs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,f=-1,p=-1,E=0,M=0,U=e,C=null;t:for(;;){for(var z;U!==a||i!==0&&U.nodeType!==3||(f=c+i),U!==s||l!==0&&U.nodeType!==3||(p=c+l),U.nodeType===3&&(c+=U.nodeValue.length),(z=U.firstChild)!==null;)C=U,U=z;for(;;){if(U===e)break t;if(C===a&&++E===i&&(f=c),C===s&&++M===l&&(p=c),(z=U.nextSibling)!==null)break;U=C,C=U.parentNode}U=z}a=f===-1||p===-1?null:{start:f,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:e,selectionRange:a},Ii=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,l=a.stateNode;try{var k=Fa(a.type,i);e=l.getSnapshotBeforeUpdate(k,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(J){me(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Do(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&gn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){me(a,a.return,c)}else{var i=Fa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){me(a,a.return,c)}}l&64&&To(a),l&512&&bn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pd(e,t)}catch(c){me(a,a.return,c)}}break;case 27:t===null&&l&4&&Ro(a);case 26:case 5:ea(e,a),t===null&&l&4&&Co(a),l&512&&bn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&_o(e,a);break;case 13:ea(e,a),l&4&&Ho(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xp.bind(null,a),Hp(e,a))));break;case 22:if(l=a.memoizedState!==null||$t,!l){t=t!==null&&t.memoizedState!==null||Be,i=$t;var s=Be;$t=l,(Be=t)&&!s?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),$t=i,Be=s}break;case 30:break;default:ea(e,a)}}function Oo(e){var t=e.alternate;t!==null&&(e.alternate=null,Oo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Es(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,tt=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Uo(e,t,a),a=a.sibling}function Uo(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ql,a)}catch{}switch(a.tag){case 26:Be||Yt(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Yt(a,t);var l=Te,i=tt;wa(a.type)&&(Te=a.stateNode,tt=!1),Pt(e,t,a),wn(a.stateNode),Te=l,tt=i;break;case 5:Be||Yt(a,t);case 6:if(l=Te,i=tt,Te=null,Pt(e,t,a),Te=l,tt=i,Te!==null)if(tt)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(s){me(a,t,s)}else try{Te.removeChild(a.stateNode)}catch(s){me(a,t,s)}break;case 18:Te!==null&&(tt?(e=Te,wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_l(e)):wf(Te,a.stateNode));break;case 4:l=Te,i=tt,Te=a.stateNode.containerInfo,tt=!0,Pt(e,t,a),Te=l,tt=i;break;case 0:case 11:case 14:case 15:ya(2,a,t),Be||ya(4,a,t),Pt(e,t,a);break;case 1:Be||(Yt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&wo(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:Be=(l=Be)||a.memoizedState!==null,Pt(e,t,a),Be=l;break;default:Pt(e,t,a)}}function _o(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(a){me(t,t.return,a)}}}function Ho(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(a){me(t,t.return,a)}}function cp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mo),t;default:throw Error(u(435,e.tag))}}function Mi(e,t){var a=cp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=gp.bind(null,e,l);l.then(i,i)}})}function at(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],s=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(wa(f.type)){Te=f.stateNode,tt=!1;break e}break;case 5:Te=f.stateNode,tt=!1;break e;case 3:case 4:Te=f.stateNode.containerInfo,tt=!0;break e}f=f.return}if(Te===null)throw Error(u(160));Uo(s,c,i),Te=null,tt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lo(t,e),t=t.sibling}var Rt=null;function Lo(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),lt(e),l&4&&(ya(3,e,e.return),gn(3,e),ya(5,e,e.return));break;case 1:at(t,e),lt(e),l&512&&(Be||a===null||Yt(a,a.return)),l&64&&$t&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Rt;if(at(t,e),lt(e),l&512&&(Be||a===null||Yt(a,a.return)),l&4){var s=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Xl]||s[Qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(l),i.head.insertBefore(s,i.querySelector("head > title"))),Je(s,l,a),s[Qe]=e,qe(s),l=s;break e;case"link":var c=Yf("link","href",i).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(s=c[f],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}s=i.createElement(l),Je(s,l,a),i.head.appendChild(s);break;case"meta":if(c=Yf("meta","content",i).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(s=c[f],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}s=i.createElement(l),Je(s,l,a),i.head.appendChild(s);break;default:throw Error(u(468,l))}s[Qe]=e,qe(s),l=s}e.stateNode=l}else Bf(i,e.type,e.stateNode);else e.stateNode=Lf(i,l,e.memoizedProps);else s!==l?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,l===null?Bf(i,e.type,e.stateNode):Lf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Vr(e,e.memoizedProps,a.memoizedProps)}break;case 27:at(t,e),lt(e),l&512&&(Be||a===null||Yt(a,a.return)),a!==null&&l&4&&Vr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(at(t,e),lt(e),l&512&&(Be||a===null||Yt(a,a.return)),e.flags&32){i=e.stateNode;try{nl(i,"")}catch(k){me(e,e.return,k)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Vr(e,i,a!==null?a.memoizedProps:i)),l&1024&&(Fr=!0);break;case 6:if(at(t,e),lt(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(k){me(e,e.return,k)}}break;case 3:if(Ji=null,i=Rt,Rt=Zi(t.containerInfo),at(t,e),Rt=i,lt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{_l(t.containerInfo)}catch(k){me(e,e.return,k)}Fr&&(Fr=!1,Yo(e));break;case 4:l=Rt,Rt=Zi(e.stateNode.containerInfo),at(t,e),lt(e),Rt=l;break;case 12:at(t,e),lt(e);break;case 31:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 13:at(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Oi=st()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,E=$t,M=Be;if($t=E||i,Be=M||p,at(t,e),Be=M,$t=E,lt(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||$t||Be||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(s=p.stateNode,i)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=p.stateNode;var U=p.memoizedProps.style,C=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(k){me(p,p.return,k)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(k){me(p,p.return,k)}}}else if(t.tag===18){if(a===null){p=t;try{var z=p.stateNode;i?Cf(z,!0):Cf(p.stateNode,!1)}catch(k){me(p,p.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mi(e,a))));break;case 19:at(t,e),lt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 30:break;case 21:break;default:at(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(zo(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,s=Jr(e);Ri(e,s,i);break;case 5:var c=a.stateNode;a.flags&32&&(nl(c,""),a.flags&=-33);var f=Jr(e);Ri(e,f,c);break;case 3:case 4:var p=a.stateNode.containerInfo,E=Jr(e);Kr(e,E,p);break;default:throw Error(u(161))}}catch(M){me(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yo(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Yo(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Do(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Wa(t);break;case 1:Yt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wo(t,t.return,a),Wa(t);break;case 27:wn(t.stateNode);case 26:case 5:Yt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:ta(i,s,a),gn(4,s);break;case 1:if(ta(i,s,a),l=s,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(E){me(l,l.return,E)}if(l=s,i=l.updateQueue,i!==null){var f=l.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)md(p[i],f)}catch(E){me(l,l.return,E)}}a&&c&64&&To(s),bn(s,s.return);break;case 27:Ro(s);case 26:case 5:ta(i,s,a),a&&l===null&&c&4&&Co(s),bn(s,s.return);break;case 12:ta(i,s,a);break;case 31:ta(i,s,a),a&&c&4&&_o(i,s);break;case 13:ta(i,s,a),a&&c&4&&Ho(i,s);break;case 22:s.memoizedState===null&&ta(i,s,a),bn(s,s.return);break;case 30:break;default:ta(i,s,a)}t=t.sibling}}function Wr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ln(a))}function Ir(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e))}function Mt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bo(e,t,a,l),t=t.sibling}function Bo(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,a,l),i&2048&&gn(9,t);break;case 1:Mt(e,t,a,l);break;case 3:Mt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ln(e)));break;case 12:if(i&2048){Mt(e,t,a,l),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,f=s.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){me(t,t.return,p)}}else Mt(e,t,a,l);break;case 31:Mt(e,t,a,l);break;case 13:Mt(e,t,a,l);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?Mt(e,t,a,l):vn(e,t):s._visibility&2?Mt(e,t,a,l):(s._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Wr(c,t);break;case 24:Mt(e,t,a,l),i&2048&&Ir(t.alternate,t);break;default:Mt(e,t,a,l)}}function Al(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,f=a,p=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:Al(s,c,f,p,i),gn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?Al(s,c,f,p,i):vn(s,c):(M._visibility|=2,Al(s,c,f,p,i)),i&&E&2048&&Wr(c.alternate,c);break;case 24:Al(s,c,f,p,i),i&&E&2048&&Ir(c.alternate,c);break;default:Al(s,c,f,p,i)}t=t.sibling}}function vn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:vn(a,l),i&2048&&Wr(l.alternate,l);break;case 24:vn(a,l),i&2048&&Ir(l.alternate,l);break;default:vn(a,l)}t=t.sibling}}var yn=8192;function El(e,t,a){if(e.subtreeFlags&yn)for(e=e.child;e!==null;)ko(e,t,a),e=e.sibling}function ko(e,t,a){switch(e.tag){case 26:El(e,t,a),e.flags&yn&&e.memoizedState!==null&&Kp(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,a);break;case 3:case 4:var l=Rt;Rt=Zi(e.stateNode.containerInfo),El(e,t,a),Rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yn,yn=16777216,El(e,t,a),yn=l):El(e,t,a));break;default:El(e,t,a)}}function qo(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Qo(l,e)}qo(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Go(e),e=e.sibling}function Go(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&ya(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Di(e)):jn(e);break;default:jn(e)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Qo(l,e)}qo(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Di(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Di(t));break;default:Di(t)}e=e.sibling}}function Qo(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:ya(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ln(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var i=l.sibling,s=l.return;if(Oo(l),l===a){Ge=null;break e}if(i!==null){i.return=s,Ge=i;break e}Ge=s}}}var up={getCacheForType:function(e){var t=Ze(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(He).controller.signal}},dp=typeof WeakMap=="function"?WeakMap:Map,oe=0,Se=null,le=null,ie=0,he=0,ht=null,ja=!1,Tl=!1,$r=!1,aa=0,Re=0,Sa=0,Ia=0,Pr=0,mt=0,wl=0,Sn=null,nt=null,ec=!1,Oi=0,Xo=0,Ui=1/0,_i=null,Na=null,ke=0,Aa=null,Cl=null,la=0,tc=0,ac=null,Zo=null,Nn=0,lc=null;function pt(){return(oe&2)!==0&&ie!==0?ie&-ie:D.T!==null?uc():su()}function Vo(){if(mt===0)if((ie&536870912)===0||re){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),mt=e}else mt=536870912;return e=ot.current,e!==null&&(e.flags|=32),mt}function it(e,t,a){(e===Se&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(zl(e,0),Ea(e,ie,mt,!1)),Ql(e,a),((oe&2)===0||e!==Se)&&(e===Se&&((oe&2)===0&&(Ia|=a),Re===4&&Ea(e,ie,mt,!1)),Bt(e))}function Jo(e,t,a){if((oe&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Gl(e,t),i=l?hp(e,t):ic(e,t,!0),s=l;do{if(i===0){Tl&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!op(a)){i=ic(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;i=Sn;var p=f.current.memoizedState.isDehydrated;if(p&&(zl(f,c).flags|=256),c=ic(f,c,!1),c!==2){if($r&&!p){f.errorRecoveryDisabledLanes|=s,Ia|=s,i=4;break e}s=nt,nt=i,s!==null&&(nt===null?nt=s:nt.push.apply(nt,s))}i=c}if(s=!1,i!==2)continue}}if(i===1){zl(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,s=i,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,mt,!ja);break e;case 2:nt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Oi+300-st(),10<i)){if(Ea(l,t,mt,!ja),Zn(l,0,!0)!==0)break e;la=t,l.timeoutHandle=Ef(Ko.bind(null,l,a,nt,_i,ec,t,mt,Ia,wl,ja,s,"Throttled",-0,0),i);break e}Ko(l,a,nt,_i,ec,t,mt,Ia,wl,ja,s,null,-0,0)}}break}while(!0);Bt(e)}function Ko(e,t,a,l,i,s,c,f,p,E,M,U,C,z){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},ko(t,s,U);var k=(s&62914560)===s?Oi-st():(s&4194048)===s?Xo-st():0;if(k=Fp(U,k),k!==null){la=s,e.cancelPendingCommit=k(af.bind(null,e,t,s,a,l,i,c,f,p,M,U,null,C,z)),Ea(e,s,c,!E);return}}af(e,t,s,a,l,i,c,f,p)}function op(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],s=i.getSnapshot;i=i.value;try{if(!ut(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~Pr,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var s=31-ct(i),c=1<<s;l[s]=-1,i&=~c}a!==0&&lu(e,a,t)}function Hi(){return(oe&6)===0?(An(0),!1):!0}function nc(){if(le!==null){if(he===0)var e=le.return;else e=le,Vt=Ga=null,yr(e),vl=null,sn=0,e=le;for(;e!==null;)Eo(e.alternate,e),e=e.return;le=null}}function zl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Mp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,nc(),Se=e,le=a=Xt(e.current,null),ie=t,he=0,ht=null,ja=!1,Tl=Gl(e,t),$r=!1,wl=mt=Pr=Ia=Sa=Re=0,nt=Sn=null,ec=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-ct(l),s=1<<i;t|=e[i],l&=~s}return aa=t,li(),a}function Fo(e,t){P=null,D.H=mn,t===bl||t===oi?(t=dd(),he=3):t===cr?(t=dd(),he=4):he=t===Hr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,le===null&&(Re=1,Ei(e,St(t,e.current)))}function Wo(){var e=ot.current;return e===null?!0:(ie&4194048)===ie?Tt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Tt:!1}function Io(){var e=D.H;return D.H=mn,e===null?mn:e}function $o(){var e=D.A;return D.A=up,e}function Li(){Re=4,ja||(ie&4194048)!==ie&&ot.current!==null||(Tl=!0),(Sa&134217727)===0&&(Ia&134217727)===0||Se===null||Ea(Se,ie,mt,!1)}function ic(e,t,a){var l=oe;oe|=2;var i=Io(),s=$o();(Se!==e||ie!==t)&&(_i=null,zl(e,t)),t=!1;var c=Re;e:do try{if(he!==0&&le!==null){var f=le,p=ht;switch(he){case 8:nc(),c=6;break e;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var E=he;if(he=0,ht=null,Rl(e,f,p,E),a&&Tl){c=0;break e}break;default:E=he,he=0,ht=null,Rl(e,f,p,E)}}fp(),c=Re;break}catch(M){Fo(e,M)}while(!0);return t&&e.shellSuspendCounter++,Vt=Ga=null,oe=l,D.H=i,D.A=s,le===null&&(Se=null,ie=0,li()),c}function fp(){for(;le!==null;)Po(le)}function hp(e,t){var a=oe;oe|=2;var l=Io(),i=$o();Se!==e||ie!==t?(_i=null,Ui=st()+500,zl(e,t)):Tl=Gl(e,t);e:do try{if(he!==0&&le!==null){t=le;var s=ht;t:switch(he){case 1:he=0,ht=null,Rl(e,t,s,1);break;case 2:case 9:if(cd(s)){he=0,ht=null,ef(t);break}t=function(){he!==2&&he!==9||Se!==e||(he=7),Bt(e)},s.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:cd(s)?(he=0,ht=null,ef(t)):(he=0,ht=null,Rl(e,t,s,7));break;case 5:var c=null;switch(le.tag){case 26:c=le.memoizedState;case 5:case 27:var f=le;if(c?kf(c):f.stateNode.complete){he=0,ht=null;var p=f.sibling;if(p!==null)le=p;else{var E=f.return;E!==null?(le=E,Yi(E)):le=null}break t}}he=0,ht=null,Rl(e,t,s,5);break;case 6:he=0,ht=null,Rl(e,t,s,6);break;case 8:nc(),Re=6;break e;default:throw Error(u(462))}}mp();break}catch(M){Fo(e,M)}while(!0);return Vt=Ga=null,D.H=l,D.A=i,oe=a,le!==null?0:(Se=null,ie=0,li(),Re)}function mp(){for(;le!==null&&!Lh();)Po(le)}function Po(e){var t=No(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function ef(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=go(a,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=go(a,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:yr(t);default:Eo(a,t),t=le=Iu(t,aa),t=No(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Yi(e):le=t}function Rl(e,t,a,l){Vt=Ga=null,yr(t),vl=null,sn=0;var i=t.return;try{if(ap(e,i,t,a,ie)){Re=1,Ei(e,St(a,e.current)),le=null;return}}catch(s){if(i!==null)throw le=i,s;Re=1,Ei(e,St(a,e.current)),le=null;return}t.flags&32768?(re||l===1?e=!0:Tl||(ie&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=ot.current,l!==null&&l.tag===13&&(l.flags|=16384))),tf(t,e)):Yi(t)}function Yi(e){var t=e;do{if((t.flags&32768)!==0){tf(t,ja);return}e=t.return;var a=ip(t.alternate,t,aa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function tf(e,t){do{var a=sp(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function af(e,t,a,l,i,s,c,f,p){e.cancelPendingCommit=null;do Bi();while(ke!==0);if((oe&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Js,Jh(e,a,s,c,f,p),e===Se&&(le=Se=null,ie=0),Cl=t,Aa=e,la=a,tc=s,ac=i,Zo=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bp(qn,function(){return cf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,i=Y.p,Y.p=2,c=oe,oe|=4;try{rp(e,t,a)}finally{oe=c,Y.p=i,D.T=l}}ke=1,lf(),nf(),sf()}}function lf(){if(ke===1){ke=0;var e=Aa,t=Cl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var l=Y.p;Y.p=2;var i=oe;oe|=4;try{Lo(t,e);var s=gc,c=Gu(e.containerInfo),f=s.focusedElem,p=s.selectionRange;if(c!==f&&f&&f.ownerDocument&&qu(f.ownerDocument.documentElement,f)){if(p!==null&&Gs(f)){var E=p.start,M=p.end;if(M===void 0&&(M=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(M,f.value.length);else{var U=f.ownerDocument||document,C=U&&U.defaultView||window;if(C.getSelection){var z=C.getSelection(),k=f.textContent.length,J=Math.min(p.start,k),be=p.end===void 0?J:Math.min(p.end,k);!z.extend&&J>be&&(c=be,be=J,J=c);var j=ku(f,J),g=ku(f,be);if(j&&g&&(z.rangeCount!==1||z.anchorNode!==j.node||z.anchorOffset!==j.offset||z.focusNode!==g.node||z.focusOffset!==g.offset)){var A=U.createRange();A.setStart(j.node,j.offset),z.removeAllRanges(),J>be?(z.addRange(A),z.extend(g.node,g.offset)):(A.setEnd(g.node,g.offset),z.addRange(A))}}}}for(U=[],z=f;z=z.parentNode;)z.nodeType===1&&U.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var O=U[f];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Ii=!!xc,gc=xc=null}finally{oe=i,Y.p=l,D.T=a}}e.current=t,ke=2}}function nf(){if(ke===2){ke=0;var e=Aa,t=Cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var l=Y.p;Y.p=2;var i=oe;oe|=4;try{Do(e,t.alternate,t)}finally{oe=i,Y.p=l,D.T=a}}ke=3}}function sf(){if(ke===4||ke===3){ke=0,Yh();var e=Aa,t=Cl,a=la,l=Zo;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Cl=Aa=null,rf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Na=null),Ns(a),t=t.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,i=Y.p,Y.p=2,D.T=null;try{for(var s=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];s(f.value,{componentStack:f.stack})}}finally{D.T=t,Y.p=i}}(la&3)!==0&&Bi(),Bt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===lc?Nn++:(Nn=0,lc=e):Nn=0,An(0)}}function rf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ln(t)))}function Bi(){return lf(),nf(),sf(),cf()}function cf(){if(ke!==5)return!1;var e=Aa,t=tc;tc=0;var a=Ns(la),l=D.T,i=Y.p;try{Y.p=32>a?32:a,D.T=null,a=ac,ac=null;var s=Aa,c=la;if(ke=0,Cl=Aa=null,la=0,(oe&6)!==0)throw Error(u(331));var f=oe;if(oe|=4,Go(s.current),Bo(s,s.current,c,a),oe=f,An(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ql,s)}catch{}return!0}finally{Y.p=i,D.T=l,rf(e,t)}}function uf(e,t,a){t=St(a,t),t=_r(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(Ql(e,2),Bt(e))}function me(e,t,a){if(e.tag===3)uf(e,e,a);else for(;t!==null;){if(t.tag===3){uf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))){e=St(a,e),a=co(2),l=ga(t,a,2),l!==null&&(uo(a,l,t,e),Ql(l,2),Bt(l));break}}t=t.return}}function sc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new dp;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||($r=!0,i.add(a),e=pp.bind(null,e,t,a),t.then(e,e))}function pp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Se===e&&(ie&a)===a&&(Re===4||Re===3&&(ie&62914560)===ie&&300>st()-Oi?(oe&2)===0&&zl(e,0):Pr|=a,wl===ie&&(wl=0)),Bt(e)}function df(e,t){t===0&&(t=au()),e=Ba(e,t),e!==null&&(Ql(e,t),Bt(e))}function xp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),df(e,a)}function gp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),df(e,a)}function bp(e,t){return vs(e,t)}var ki=null,Ml=null,rc=!1,qi=!1,cc=!1,Ta=0;function Bt(e){e!==Ml&&e.next===null&&(Ml===null?ki=Ml=e:Ml=Ml.next=e),qi=!0,rc||(rc=!0,yp())}function An(e,t){if(!cc&&qi){cc=!0;do for(var a=!1,l=ki;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var s=0;else{var c=l.suspendedLanes,f=l.pingedLanes;s=(1<<31-ct(42|e)+1)-1,s&=i&~(c&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,mf(l,s))}else s=ie,s=Zn(l,l===Se?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Gl(l,s)||(a=!0,mf(l,s));l=l.next}while(a);cc=!1}}function vp(){of()}function of(){qi=rc=!1;var e=0;Ta!==0&&Rp()&&(e=Ta);for(var t=st(),a=null,l=ki;l!==null;){var i=l.next,s=ff(l,t);s===0?(l.next=null,a===null?ki=i:a.next=i,i===null&&(Ml=a)):(a=l,(e!==0||(s&3)!==0)&&(qi=!0)),l=i}ke!==0&&ke!==5||An(e),Ta!==0&&(Ta=0)}function ff(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-ct(s),f=1<<c,p=i[c];p===-1?((f&a)===0||(f&l)!==0)&&(i[c]=Vh(f,t)):p<=t&&(e.expiredLanes|=f),s&=~f}if(t=Se,a=ie,a=Zn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ys(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ys(l),Ns(a)){case 2:case 8:a=eu;break;case 32:a=qn;break;case 268435456:a=tu;break;default:a=qn}return l=hf.bind(null,e),a=vs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ys(l),e.callbackPriority=2,e.callbackNode=null,2}function hf(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var l=ie;return l=Zn(e,e===Se?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Jo(e,l,t),ff(e,st()),e.callbackNode!=null&&e.callbackNode===a?hf.bind(null,e):null)}function mf(e,t){if(Bi())return null;Jo(e,t,!0)}function yp(){Dp(function(){(oe&6)!==0?vs(Pc,vp):of()})}function uc(){if(Ta===0){var e=xl;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Ta=e}return Ta}function pf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fn(""+e)}function xf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jp(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var s=pf((i[Pe]||null).action),c=l.submitter;c&&(t=(t=c[Pe]||null)?pf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var f=new Pn("action","action",null,l,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ta!==0){var p=c?xf(i,c):new FormData(i);zr(a,{pending:!0,data:p,method:i.method,action:s},null,p)}}else typeof s=="function"&&(f.preventDefault(),p=c?xf(i,c):new FormData(i),zr(a,{pending:!0,data:p,method:i.method,action:s},s,p))},currentTarget:i}]})}}for(var dc=0;dc<Vs.length;dc++){var oc=Vs[dc],Sp=oc.toLowerCase(),Np=oc[0].toUpperCase()+oc.slice(1);zt(Sp,"on"+Np)}zt(Zu,"onAnimationEnd"),zt(Vu,"onAnimationIteration"),zt(Ju,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Bm,"onTransitionRun"),zt(km,"onTransitionStart"),zt(qm,"onTransitionCancel"),zt(Ku,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_a("onBeforeInput",["compositionend","keypress","textInput","paste"]),_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En));function gf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],p=f.instance,E=f.currentTarget;if(f=f.listener,p!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=E;try{s(i)}catch(M){ai(M)}i.currentTarget=null,s=p}else for(c=0;c<l.length;c++){if(f=l[c],p=f.instance,E=f.currentTarget,f=f.listener,p!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=E;try{s(i)}catch(M){ai(M)}i.currentTarget=null,s=p}}}}function ne(e,t){var a=t[As];a===void 0&&(a=t[As]=new Set);var l=e+"__bubble";a.has(l)||(bf(t,e,2,!1),a.add(l))}function fc(e,t,a){var l=0;t&&(l|=4),bf(a,e,l,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function hc(e){if(!e[Gi]){e[Gi]=!0,uu.forEach(function(a){a!=="selectionchange"&&(Ap.has(a)||fc(a,!1,e),fc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,fc("selectionchange",!1,t))}}function bf(e,t,a,l){switch(Jf(t)){case 2:var i=$p;break;case 8:i=Pp;break;default:i=Cc}a=i.bind(null,t,a,e),i=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function mc(e,t,a,l,i){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===i)break;if(c===4)for(c=l.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;f!==null;){if(c=Pa(f),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){l=s=c;continue e}f=f.parentNode}}l=l.return}ju(function(){var E=s,M=Ms(a),U=[];e:{var C=Fu.get(e);if(C!==void 0){var z=Pn,k=e;switch(e){case"keypress":if(In(a)===0)break e;case"keydown":case"keyup":z=gm;break;case"focusin":k="focus",z=Ls;break;case"focusout":k="blur",z=Ls;break;case"beforeblur":case"afterblur":z=Ls;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=im;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=ym;break;case Zu:case Vu:case Ju:z=cm;break;case Ku:z=Sm;break;case"scroll":case"scrollend":z=lm;break;case"wheel":z=Am;break;case"copy":case"cut":case"paste":z=dm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Tu;break;case"toggle":case"beforetoggle":z=Tm}var J=(t&4)!==0,be=!J&&(e==="scroll"||e==="scrollend"),j=J?C!==null?C+"Capture":null:C;J=[];for(var g=E,A;g!==null;){var O=g;if(A=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||A===null||j===null||(O=Vl(g,j),O!=null&&J.push(Tn(g,O,A))),be)break;g=g.return}0<J.length&&(C=new z(C,k,null,a,M),U.push({event:C,listeners:J}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",C&&a!==Rs&&(k=a.relatedTarget||a.fromElement)&&(Pa(k)||k[$a]))break e;if((z||C)&&(C=M.window===M?M:(C=M.ownerDocument)?C.defaultView||C.parentWindow:window,z?(k=a.relatedTarget||a.toElement,z=E,k=k?Pa(k):null,k!==null&&(be=m(k),J=k.tag,k!==be||J!==5&&J!==27&&J!==6)&&(k=null)):(z=null,k=E),z!==k)){if(J=Au,O="onMouseLeave",j="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=Tu,O="onPointerLeave",j="onPointerEnter",g="pointer"),be=z==null?C:Zl(z),A=k==null?C:Zl(k),C=new J(O,g+"leave",z,a,M),C.target=be,C.relatedTarget=A,O=null,Pa(M)===E&&(J=new J(j,g+"enter",k,a,M),J.target=A,J.relatedTarget=be,O=J),be=O,z&&k)t:{for(J=Ep,j=z,g=k,A=0,O=j;O;O=J(O))A++;O=0;for(var V=g;V;V=J(V))O++;for(;0<A-O;)j=J(j),A--;for(;0<O-A;)g=J(g),O--;for(;A--;){if(j===g||g!==null&&j===g.alternate){J=j;break t}j=J(j),g=J(g)}J=null}else J=null;z!==null&&vf(U,C,z,J,!1),k!==null&&be!==null&&vf(U,be,k,J,!0)}}e:{if(C=E?Zl(E):window,z=C.nodeName&&C.nodeName.toLowerCase(),z==="select"||z==="input"&&C.type==="file")var ue=Uu;else if(Du(C))if(_u)ue=Hm;else{ue=Um;var Q=Om}else z=C.nodeName,!z||z.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?E&&zs(E.elementType)&&(ue=Uu):ue=_m;if(ue&&(ue=ue(e,E))){Ou(U,ue,a,M);break e}Q&&Q(e,C,E),e==="focusout"&&E&&C.type==="number"&&E.memoizedProps.value!=null&&Cs(C,"number",C.value)}switch(Q=E?Zl(E):window,e){case"focusin":(Du(Q)||Q.contentEditable==="true")&&(cl=Q,Qs=E,en=null);break;case"focusout":en=Qs=cl=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,Qu(U,a,M);break;case"selectionchange":if(Ym)break;case"keydown":case"keyup":Qu(U,a,M)}var te;if(Bs)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else rl?Ru(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(wu&&a.locale!=="ko"&&(rl||se!=="onCompositionStart"?se==="onCompositionEnd"&&rl&&(te=Su()):(da=M,Us="value"in da?da.value:da.textContent,rl=!0)),Q=Qi(E,se),0<Q.length&&(se=new Eu(se,e,null,a,M),U.push({event:se,listeners:Q}),te?se.data=te:(te=Mu(a),te!==null&&(se.data=te)))),(te=Cm?zm(e,a):Rm(e,a))&&(se=Qi(E,"onBeforeInput"),0<se.length&&(Q=new Eu("onBeforeInput","beforeinput",null,a,M),U.push({event:Q,listeners:se}),Q.data=te)),jp(U,e,E,a,M)}gf(U,t)})}function Tn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Qi(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Vl(e,a),i!=null&&l.unshift(Tn(e,i,s)),i=Vl(e,t),i!=null&&l.push(Tn(e,i,s))),e.tag===3)return l;e=e.return}return[]}function Ep(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vf(e,t,a,l,i){for(var s=t._reactName,c=[];a!==null&&a!==l;){var f=a,p=f.alternate,E=f.stateNode;if(f=f.tag,p!==null&&p===l)break;f!==5&&f!==26&&f!==27||E===null||(p=E,i?(E=Vl(a,s),E!=null&&c.unshift(Tn(a,E,p))):i||(E=Vl(a,s),E!=null&&c.push(Tn(a,E,p)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Tp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(wp,"")}function jf(e,t){return t=yf(t),yf(e)===t}function ge(e,t,a,l,i,s){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Jn(e,"class",l);break;case"tabIndex":Jn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,a,l);break;case"style":vu(e,l,s);break;case"data":if(t!=="object"){Jn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",i.name,i,null),ge(e,t,"formEncType",i.formEncType,i,null),ge(e,t,"formMethod",i.formMethod,i,null),ge(e,t,"formTarget",i.formTarget,i,null)):(ge(e,t,"encType",i.encType,i,null),ge(e,t,"method",i.method,i,null),ge(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Vn(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tm.get(a)||a,Vn(e,a,l))}}function pc(e,t,a,l,i,s){switch(a){case"style":vu(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&ne("scroll",e);break;case"onScrollEnd":l!=null&&ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!du.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[Pe]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof l=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Vn(e,a,l)}}}function Je(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var l=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,s,c,a,null)}}i&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":ne("invalid",e);var f=s=c=i=null,p=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":i=M;break;case"type":c=M;break;case"checked":p=M;break;case"defaultChecked":E=M;break;case"value":s=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:ge(e,t,l,M,a,null)}}pu(e,s,f,p,E,c,i,!1);return;case"select":ne("invalid",e),l=c=s=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":s=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:ge(e,t,i,f,a,null)}t=s,a=c,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":ne("invalid",e),s=i=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":i=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:ge(e,t,c,f,a,null)}gu(e,l,i,s);return;case"option":for(p in a)a.hasOwnProperty(p)&&(l=a[p],l!=null)&&(p==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ge(e,t,p,l,a,null));return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(l=0;l<En.length;l++)ne(En[l],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,E,l,a,null)}return;default:if(zs(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&pc(e,t,M,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ge(e,t,f,l,a,null))}function Cp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,c=null,f=null,p=null,E=null,M=null;for(z in a){var U=a[z];if(a.hasOwnProperty(z)&&U!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(z)||ge(e,t,z,null,l,U)}}for(var C in l){var z=l[C];if(U=a[C],l.hasOwnProperty(C)&&(z!=null||U!=null))switch(C){case"type":s=z;break;case"name":i=z;break;case"checked":E=z;break;case"defaultChecked":M=z;break;case"value":c=z;break;case"defaultValue":f=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:z!==U&&ge(e,t,C,z,l,U)}}ws(e,c,f,p,E,M,s,i);return;case"select":z=c=f=C=null;for(s in a)if(p=a[s],a.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":z=p;default:l.hasOwnProperty(s)||ge(e,t,s,null,l,p)}for(i in l)if(s=l[i],p=a[i],l.hasOwnProperty(i)&&(s!=null||p!=null))switch(i){case"value":C=s;break;case"defaultValue":f=s;break;case"multiple":c=s;default:s!==p&&ge(e,t,i,s,l,p)}t=f,a=c,l=z,C!=null?ll(e,!!a,C,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":z=C=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ge(e,t,f,null,l,i)}for(c in l)if(i=l[c],s=a[c],l.hasOwnProperty(c)&&(i!=null||s!=null))switch(c){case"value":C=i;break;case"defaultValue":z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==s&&ge(e,t,c,i,l,s)}xu(e,C,z);return;case"option":for(var k in a)C=a[k],a.hasOwnProperty(k)&&C!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:ge(e,t,k,null,l,C));for(p in l)C=l[p],z=a[p],l.hasOwnProperty(p)&&C!==z&&(C!=null||z!=null)&&(p==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":ge(e,t,p,C,l,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)C=a[J],a.hasOwnProperty(J)&&C!=null&&!l.hasOwnProperty(J)&&ge(e,t,J,null,l,C);for(E in l)if(C=l[E],z=a[E],l.hasOwnProperty(E)&&C!==z&&(C!=null||z!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(u(137,t));break;default:ge(e,t,E,C,l,z)}return;default:if(zs(t)){for(var be in a)C=a[be],a.hasOwnProperty(be)&&C!==void 0&&!l.hasOwnProperty(be)&&pc(e,t,be,void 0,l,C);for(M in l)C=l[M],z=a[M],!l.hasOwnProperty(M)||C===z||C===void 0&&z===void 0||pc(e,t,M,C,l,z);return}}for(var j in a)C=a[j],a.hasOwnProperty(j)&&C!=null&&!l.hasOwnProperty(j)&&ge(e,t,j,null,l,C);for(U in l)C=l[U],z=a[U],!l.hasOwnProperty(U)||C===z||C==null&&z==null||ge(e,t,U,C,l,z)}function Sf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],s=i.transferSize,c=i.initiatorType,f=i.duration;if(s&&f&&Sf(c)){for(c=0,f=i.responseEnd,l+=1;l<a.length;l++){var p=a[l],E=p.startTime;if(E>f)break;var M=p.transferSize,U=p.initiatorType;M&&Sf(U)&&(p=p.responseEnd,c+=M*(p<f?1:(f-E)/(p-E)))}if(--l,t+=8*(s+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xc=null,gc=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function Nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Af(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=null;function Rp(){var e=window.event;return e&&e.type==="popstate"?e===vc?!1:(vc=e,!0):(vc=null,!1)}var Ef=typeof setTimeout=="function"?setTimeout:void 0,Mp=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,Dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Op)}:Ef;function Op(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function wf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),_l(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")wn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wn(a);for(var s=a.firstChild;s;){var c=s.nextSibling,f=s.nodeName;s[Xl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}else a==="body"&&wn(e.ownerDocument.body);a=i}while(a);_l(t)}function Cf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yc(a),Es(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Up(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Xl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function _p(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function zf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function jc(e){return e.data==="$?"||e.data==="$~"}function Sc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function Rf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Df(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Es(e)}var Ct=new Map,Of=new Set;function Zi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=Y.d;Y.d={f:Lp,r:Yp,D:Bp,C:kp,L:qp,m:Gp,X:Xp,S:Qp,M:Zp};function Lp(){var e=na.f(),t=Hi();return e||t}function Yp(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?Kd(t):na.r(e)}var Dl=typeof document>"u"?null:document;function Uf(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var i=yt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Of.has(i)||(Of.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Je(t,"link",e),qe(t),l.head.appendChild(t)))}}function Bp(e){na.D(e),Uf("dns-prefetch",e,null)}function kp(e,t){na.C(e,t),Uf("preconnect",e,t)}function qp(e,t,a){na.L(e,t,a);var l=Dl;if(l&&e&&t){var i='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+yt(a.imageSizes)+'"]')):i+='[href="'+yt(e)+'"]';var s=i;switch(t){case"style":s=Ol(e);break;case"script":s=Ul(e)}Ct.has(s)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ct.set(s,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(Cn(s))||t==="script"&&l.querySelector(zn(s))||(t=l.createElement("link"),Je(t,"link",e),qe(t),l.head.appendChild(t)))}}function Gp(e,t){na.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+yt(l)+'"][href="'+yt(e)+'"]',s=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ul(e)}if(!Ct.has(s)&&(e=w({rel:"modulepreload",href:e},t),Ct.set(s,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zn(s)))return}l=a.createElement("link"),Je(l,"link",e),qe(l),a.head.appendChild(l)}}}function Qp(e,t,a){na.S(e,t,a);var l=Dl;if(l&&e){var i=tl(l).hoistableStyles,s=Ol(e);t=t||"default";var c=i.get(s);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Cn(s)))f.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ct.get(s))&&Ac(e,a);var p=c=l.createElement("link");qe(p),Je(p,"link",e),p._p=new Promise(function(E,M){p.onload=E,p.onerror=M}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Vi(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},i.set(s,c)}}}function Xp(e,t){na.X(e,t);var a=Dl;if(a&&e){var l=tl(a).hoistableScripts,i=Ul(e),s=l.get(i);s||(s=a.querySelector(zn(i)),s||(e=w({src:e,async:!0},t),(t=Ct.get(i))&&Ec(e,t),s=a.createElement("script"),qe(s),Je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function Zp(e,t){na.M(e,t);var a=Dl;if(a&&e){var l=tl(a).hoistableScripts,i=Ul(e),s=l.get(i);s||(s=a.querySelector(zn(i)),s||(e=w({src:e,async:!0,type:"module"},t),(t=Ct.get(i))&&Ec(e,t),s=a.createElement("script"),qe(s),Je(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(i,s))}}function _f(e,t,a,l){var i=(i=ae.current)?Zi(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=tl(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var s=tl(i).hoistableStyles,c=s.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=i.querySelector(Cn(e)))&&!s._p&&(c.instance=s,c.state.loading=5),Ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ct.set(e,a),s||Vp(i,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(a),a=tl(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ol(e){return'href="'+yt(e)+'"'}function Cn(e){return'link[rel="stylesheet"]['+e+"]"}function Hf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Vp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Je(t,"link",a),qe(t),e.head.appendChild(t))}function Ul(e){return'[src="'+yt(e)+'"]'}function zn(e){return"script[async]"+e}function Lf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+yt(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Je(l,"style",i),Vi(l,a.precedence,e),t.instance=l;case"stylesheet":i=Ol(a.href);var s=e.querySelector(Cn(i));if(s)return t.state.loading|=4,t.instance=s,qe(s),s;l=Hf(a),(i=Ct.get(i))&&Ac(l,i),s=(e.ownerDocument||e).createElement("link"),qe(s);var c=s;return c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Je(s,"link",l),t.state.loading|=4,Vi(s,a.precedence,e),t.instance=s;case"script":return s=Ul(a.src),(i=e.querySelector(zn(s)))?(t.instance=i,qe(i),i):(l=a,(i=Ct.get(s))&&(l=w({},a),Ec(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),qe(i),Je(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Vi(l,a.precedence,e));return t.instance}function Vi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,s=i,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)s=f;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ec(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ji=null;function Yf(e,t,a){if(Ji===null){var l=new Map,i=Ji=new Map;i.set(a,l)}else i=Ji,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[Xl]||s[Qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(s):l.set(c,[s])}}return l}function Bf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Jp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ol(l.href),s=t.querySelector(Cn(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,qe(s);return}s=t.ownerDocument||t,l=Hf(l),(i=Ct.get(i))&&Ac(l,i),s=s.createElement("link"),qe(s);var c=s;c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Je(s,"link",l),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ki.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tc=0;function Fp(e,t){return e.stylesheets&&e.count===0&&Wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Wi(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Tc===0&&(Tc=62500*zp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wi(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Tc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fi=null;function Wi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fi=new Map,t.forEach(Wp,e),Fi=null,Ki.call(e))}function Wp(e,t){if(!(t.state.loading&4)){var a=Fi.get(e);if(a)var l=a.get(null);else{a=new Map,Fi.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var c=i[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),s=a.get(c)||l,s===l&&a.set(null,i),a.set(c,i),this.count++,l=Ki.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Rn={$$typeof:K,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Ip(e,t,a,l,i,s,c,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function qf(e,t,a,l,i,s,c,f,p,E,M,U){return e=new Ip(e,t,a,c,p,E,M,U,f),t=1,s===!0&&(t|=24),s=dt(3,null,null,t),e.current=s,s.stateNode=e,t=ir(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:a,cache:t},ur(s),e}function Gf(e){return e?(e=ol,e):ol}function Qf(e,t,a,l,i,s){i=Gf(i),l.context===null?l.context=i:l.pendingContext=i,l=xa(t),l.payload={element:a},s=s===void 0?null:s,s!==null&&(l.callback=s),a=ga(e,l,t),a!==null&&(it(a,e,t),cn(a,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function wc(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function Zf(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&it(t,e,67108864),wc(e,67108864)}}function Vf(e){if(e.tag===13||e.tag===31){var t=pt();t=Ss(t);var a=Ba(e,t);a!==null&&it(a,e,t),wc(e,t)}}var Ii=!0;function $p(e,t,a,l){var i=D.T;D.T=null;var s=Y.p;try{Y.p=2,Cc(e,t,a,l)}finally{Y.p=s,D.T=i}}function Pp(e,t,a,l){var i=D.T;D.T=null;var s=Y.p;try{Y.p=8,Cc(e,t,a,l)}finally{Y.p=s,D.T=i}}function Cc(e,t,a,l){if(Ii){var i=zc(l);if(i===null)mc(e,t,l,$i,a),Kf(e,l);else if(tx(i,e,t,a,l))l.stopPropagation();else if(Kf(e,l),t&4&&-1<ex.indexOf(e)){for(;i!==null;){var s=el(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Ua(s.pendingLanes);if(c!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var p=1<<31-ct(c);f.entanglements[1]|=p,c&=~p}Bt(s),(oe&6)===0&&(Ui=st()+500,An(0))}}break;case 31:case 13:f=Ba(s,2),f!==null&&it(f,s,2),Hi(),wc(s,2)}if(s=zc(l),s===null&&mc(e,t,l,$i,a),s===i)break;i=s}i!==null&&l.stopPropagation()}else mc(e,t,l,null,a)}}function zc(e){return e=Ms(e),Rc(e)}var $i=null;function Rc(e){if($i=null,e=Pa(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===31){if(e=N(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $i=e,null}function Jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bh()){case Pc:return 2;case eu:return 8;case qn:case kh:return 32;case tu:return 268435456;default:return 32}default:return 32}}var Mc=!1,Ca=null,za=null,Ra=null,Mn=new Map,Dn=new Map,Ma=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function On(e,t,a,l,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:s,targetContainers:[i]},t!==null&&(t=el(t),t!==null&&Zf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tx(e,t,a,l,i){switch(t){case"focusin":return Ca=On(Ca,e,t,a,l,i),!0;case"dragenter":return za=On(za,e,t,a,l,i),!0;case"mouseover":return Ra=On(Ra,e,t,a,l,i),!0;case"pointerover":var s=i.pointerId;return Mn.set(s,On(Mn.get(s)||null,e,t,a,l,i)),!0;case"gotpointercapture":return s=i.pointerId,Dn.set(s,On(Dn.get(s)||null,e,t,a,l,i)),!0}return!1}function Ff(e){var t=Pa(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,ru(e.priority,function(){Vf(a)});return}}else if(t===31){if(t=N(a),t!==null){e.blockedOn=t,ru(e.priority,function(){Vf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Rs=l,a.target.dispatchEvent(l),Rs=null}else return t=el(a),t!==null&&Zf(t),e.blockedOn=a,!1;t.shift()}return!0}function Wf(e,t,a){Pi(e)&&a.delete(t)}function ax(){Mc=!1,Ca!==null&&Pi(Ca)&&(Ca=null),za!==null&&Pi(za)&&(za=null),Ra!==null&&Pi(Ra)&&(Ra=null),Mn.forEach(Wf),Dn.forEach(Wf)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ax)))}var ts=null;function If(e){ts!==e&&(ts=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ts===e&&(ts=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(Rc(l||a)===null)continue;break}var s=el(a);s!==null&&(e.splice(t,3),t-=3,zr(s,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function _l(e){function t(p){return es(p,e)}Ca!==null&&es(Ca,e),za!==null&&es(za,e),Ra!==null&&es(Ra,e),Mn.forEach(t),Dn.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Ff(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],s=a[l+1],c=i[Pe]||null;if(typeof s=="function")c||If(a);else if(c){var f=null;if(s&&s.hasAttribute("formAction")){if(i=s,c=s[Pe]||null)f=c.formAction;else if(Rc(i)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),If(a)}}}function $f(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Dc(e){this._internalRoot=e}as.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=pt();Qf(a,l,e,t,null,null)},as.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qf(e.current,2,null,e,null,null),Hi(),t[$a]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var t=su();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Ff(e)}};var Pf=d.version;if(Pf!=="19.2.4")throw Error(u(527,Pf,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=x(t),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var lx={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ql=ls.inject(lx),rt=ls}catch{}}return _n.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,l="",i=no,s=io,c=so;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=qf(e,1,!1,null,null,a,l,null,i,s,c,$f),e[$a]=t.current,hc(e),new Dc(t)},_n.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var l=!1,i="",s=no,c=io,f=so,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=qf(e,1,!0,t,a??null,l,i,p,s,c,f,$f),t.context=Gf(null),a=t.current,l=pt(),l=Ss(l),i=xa(l),i.callback=null,ga(a,i,l),a=l,t.current.lanes=a,Ql(t,a),Bt(t),e[$a]=t.current,hc(e),new as(t)},_n.version="19.2.4",_n}var uh;function hx(){if(uh)return _c.exports;uh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(d){console.error(d)}}return r(),_c.exports=fx(),_c.exports}var mx=hx();var dh="popstate";function oh(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function px(r={}){function d(u,h){let m=h.state?.masked,{pathname:y,search:N,hash:b}=m||u.location;return Gc("",{pathname:y,search:N,hash:b},h.state&&h.state.usr||null,h.state&&h.state.key||"default",m?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function o(u,h){return typeof h=="string"?h:Ln(h)}return gx(d,o,null,r)}function we(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function Dt(r,d){if(!r){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function fh(r,d){return{usr:r.state,key:r.key,idx:d,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Gc(r,d,o=null,u,h){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof d=="string"?Hl(d):d,state:o,key:d&&d.key||u||xx(),unstable_mask:h}}function Ln({pathname:r="/",search:d="",hash:o=""}){return d&&d!=="?"&&(r+=d.charAt(0)==="?"?d:"?"+d),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function Hl(r){let d={};if(r){let o=r.indexOf("#");o>=0&&(d.hash=r.substring(o),r=r.substring(0,o));let u=r.indexOf("?");u>=0&&(d.search=r.substring(u),r=r.substring(0,u)),r&&(d.pathname=r)}return d}function gx(r,d,o,u={}){let{window:h=document.defaultView,v5Compat:m=!1}=u,y=h.history,N="POP",b=null,x=R();x==null&&(x=0,y.replaceState({...y.state,idx:x},""));function R(){return(y.state||{idx:null}).idx}function w(){N="POP";let S=R(),G=S==null?null:S-x;x=S,b&&b({action:N,location:L.location,delta:G})}function H(S,G){N="PUSH";let ee=oh(S)?S:Gc(L.location,S,G);x=R()+1;let K=fh(ee,x),ve=L.createHref(ee.unstable_mask||ee);try{y.pushState(K,"",ve)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;h.location.assign(ve)}m&&b&&b({action:N,location:L.location,delta:1})}function Z(S,G){N="REPLACE";let ee=oh(S)?S:Gc(L.location,S,G);x=R();let K=fh(ee,x),ve=L.createHref(ee.unstable_mask||ee);y.replaceState(K,"",ve),m&&b&&b({action:N,location:L.location,delta:0})}function X(S){return bx(S)}let L={get action(){return N},get location(){return r(h,y)},listen(S){if(b)throw new Error("A history only accepts one active listener");return h.addEventListener(dh,w),b=S,()=>{h.removeEventListener(dh,w),b=null}},createHref(S){return d(h,S)},createURL:X,encodeLocation(S){let G=X(S);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:H,replace:Z,go(S){return y.go(S)}};return L}function bx(r,d=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),we(o,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:Ln(r);return u=u.replace(/ $/,"%20"),!d&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function bh(r,d,o="/"){return vx(r,d,o,!1)}function vx(r,d,o,u){let h=typeof d=="string"?Hl(d):d,m=ia(h.pathname||"/",o);if(m==null)return null;let y=vh(r);yx(y);let N=null;for(let b=0;N==null&&b<y.length;++b){let x=Mx(m);N=zx(y[b],x,u)}return N}function vh(r,d=[],o=[],u="",h=!1){let m=(y,N,b=h,x)=>{let R={relativePath:x===void 0?y.path||"":x,caseSensitive:y.caseSensitive===!0,childrenIndex:N,route:y};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(u)&&b)return;we(R.relativePath.startsWith(u),`Absolute route path "${R.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(u.length)}let w=kt([u,R.relativePath]),H=o.concat(R);y.children&&y.children.length>0&&(we(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),vh(y.children,d,H,w,b)),!(y.path==null&&!y.index)&&d.push({path:w,score:wx(w,y.index),routesMeta:H})};return r.forEach((y,N)=>{if(y.path===""||!y.path?.includes("?"))m(y,N);else for(let b of yh(y.path))m(y,N,!0,b)}),d}function yh(r){let d=r.split("/");if(d.length===0)return[];let[o,...u]=d,h=o.endsWith("?"),m=o.replace(/\?$/,"");if(u.length===0)return h?[m,""]:[m];let y=yh(u.join("/")),N=[];return N.push(...y.map(b=>b===""?m:[m,b].join("/"))),h&&N.push(...y),N.map(b=>r.startsWith("/")&&b===""?"/":b)}function yx(r){r.sort((d,o)=>d.score!==o.score?o.score-d.score:Cx(d.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var jx=/^:[\w-]+$/,Sx=3,Nx=2,Ax=1,Ex=10,Tx=-2,hh=r=>r==="*";function wx(r,d){let o=r.split("/"),u=o.length;return o.some(hh)&&(u+=Tx),d&&(u+=Nx),o.filter(h=>!hh(h)).reduce((h,m)=>h+(jx.test(m)?Sx:m===""?Ax:Ex),u)}function Cx(r,d){return r.length===d.length&&r.slice(0,-1).every((u,h)=>u===d[h])?r[r.length-1]-d[d.length-1]:0}function zx(r,d,o=!1){let{routesMeta:u}=r,h={},m="/",y=[];for(let N=0;N<u.length;++N){let b=u[N],x=N===u.length-1,R=m==="/"?d:d.slice(m.length)||"/",w=ds({path:b.relativePath,caseSensitive:b.caseSensitive,end:x},R),H=b.route;if(!w&&x&&o&&!u[u.length-1].route.index&&(w=ds({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},R)),!w)return null;Object.assign(h,w.params),y.push({params:h,pathname:kt([m,w.pathname]),pathnameBase:_x(kt([m,w.pathnameBase])),route:H}),w.pathnameBase!=="/"&&(m=kt([m,w.pathnameBase]))}return y}function ds(r,d){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[o,u]=Rx(r.path,r.caseSensitive,r.end),h=d.match(o);if(!h)return null;let m=h[0],y=m.replace(/(.)\/+$/,"$1"),N=h.slice(1);return{params:u.reduce((x,{paramName:R,isOptional:w},H)=>{if(R==="*"){let X=N[H]||"";y=m.slice(0,m.length-X.length).replace(/(.)\/+$/,"$1")}const Z=N[H];return w&&!Z?x[R]=void 0:x[R]=(Z||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:y,pattern:r}}function Rx(r,d=!1,o=!0){Dt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,N,b,x,R)=>{if(u.push({paramName:N,isOptional:b!=null}),b){let w=R.charAt(x+y.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),u]}function Mx(r){try{return r.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Dt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),r}}function ia(r,d){if(d==="/")return r;if(!r.toLowerCase().startsWith(d.toLowerCase()))return null;let o=d.endsWith("/")?d.length-1:d.length,u=r.charAt(o);return u&&u!=="/"?null:r.slice(o)||"/"}var Dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ox(r,d="/"){let{pathname:o,search:u="",hash:h=""}=typeof r=="string"?Hl(r):r,m;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?m=mh(o.substring(1),"/"):m=mh(o,d)):m=d,{pathname:m,search:Hx(u),hash:Lx(h)}}function mh(r,d){let o=d.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?o.length>1&&o.pop():h!=="."&&o.push(h)}),o.length>1?o.join("/"):"/"}function Bc(r,d,o,u){return`Cannot include a '${r}' character in a manually specified \`to.${d}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ux(r){return r.filter((d,o)=>o===0||d.route.path&&d.route.path.length>0)}function Zc(r){let d=Ux(r);return d.map((o,u)=>u===d.length-1?o.pathname:o.pathnameBase)}function os(r,d,o,u=!1){let h;typeof r=="string"?h=Hl(r):(h={...r},we(!h.pathname||!h.pathname.includes("?"),Bc("?","pathname","search",h)),we(!h.pathname||!h.pathname.includes("#"),Bc("#","pathname","hash",h)),we(!h.search||!h.search.includes("#"),Bc("#","search","hash",h)));let m=r===""||h.pathname==="",y=m?"/":h.pathname,N;if(y==null)N=o;else{let w=d.length-1;if(!u&&y.startsWith("..")){let H=y.split("/");for(;H[0]==="..";)H.shift(),w-=1;h.pathname=H.join("/")}N=w>=0?d[w]:"/"}let b=Ox(h,N),x=y&&y!=="/"&&y.endsWith("/"),R=(m||y===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(x||R)&&(b.pathname+="/"),b}var kt=r=>r.join("/").replace(/\/\/+/g,"/"),_x=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Hx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Lx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Yx=class{constructor(r,d,o,u=!1){this.status=r,this.statusText=d||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Bx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function kx(r){return r.map(d=>d.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sh(r,d){let o=r;if(typeof o!="string"||!Dx.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let u=o,h=!1;if(jh)try{let m=new URL(window.location.href),y=o.startsWith("//")?new URL(m.protocol+o):new URL(o),N=ia(y.pathname,d);y.origin===m.origin&&N!=null?o=N+y.search+y.hash:h=!0}catch{Dt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:h,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Nh=["POST","PUT","PATCH","DELETE"];new Set(Nh);var qx=["GET",...Nh];new Set(qx);var Ll=T.createContext(null);Ll.displayName="DataRouter";var fs=T.createContext(null);fs.displayName="DataRouterState";var Gx=T.createContext(!1),Ah=T.createContext({isTransitioning:!1});Ah.displayName="ViewTransition";var Qx=T.createContext(new Map);Qx.displayName="Fetchers";var Xx=T.createContext(null);Xx.displayName="Await";var xt=T.createContext(null);xt.displayName="Navigation";var Yn=T.createContext(null);Yn.displayName="Location";var Ot=T.createContext({outlet:null,matches:[],isDataRoute:!1});Ot.displayName="Route";var Vc=T.createContext(null);Vc.displayName="RouteError";var Eh="REACT_ROUTER_ERROR",Zx="REDIRECT",Vx="ROUTE_ERROR_RESPONSE";function Jx(r){if(r.startsWith(`${Eh}:${Zx}:{`))try{let d=JSON.parse(r.slice(28));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string"&&typeof d.location=="string"&&typeof d.reloadDocument=="boolean"&&typeof d.replace=="boolean")return d}catch{}}function Kx(r){if(r.startsWith(`${Eh}:${Vx}:{`))try{let d=JSON.parse(r.slice(40));if(typeof d=="object"&&d&&typeof d.status=="number"&&typeof d.statusText=="string")return new Yx(d.status,d.statusText,d.data)}catch{}}function Fx(r,{relative:d}={}){we(Yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=T.useContext(xt),{hash:h,pathname:m,search:y}=Bn(r,{relative:d}),N=m;return o!=="/"&&(N=m==="/"?o:kt([o,m])),u.createHref({pathname:N,search:y,hash:h})}function Yl(){return T.useContext(Yn)!=null}function sa(){return we(Yl(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Yn).location}var Th="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wh(r){T.useContext(xt).static||T.useLayoutEffect(r)}function ra(){let{isDataRoute:r}=T.useContext(Ot);return r?dg():Wx()}function Wx(){we(Yl(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Ll),{basename:d,navigator:o}=T.useContext(xt),{matches:u}=T.useContext(Ot),{pathname:h}=sa(),m=JSON.stringify(Zc(u)),y=T.useRef(!1);return wh(()=>{y.current=!0}),T.useCallback((b,x={})=>{if(Dt(y.current,Th),!y.current)return;if(typeof b=="number"){o.go(b);return}let R=os(b,JSON.parse(m),h,x.relative==="path");r==null&&d!=="/"&&(R.pathname=R.pathname==="/"?d:kt([d,R.pathname])),(x.replace?o.replace:o.push)(R,x.state,x)},[d,o,m,h,r])}var Ix=T.createContext(null);function $x(r){let d=T.useContext(Ot).outlet;return T.useMemo(()=>d&&T.createElement(Ix.Provider,{value:r},d),[d,r])}function Bn(r,{relative:d}={}){let{matches:o}=T.useContext(Ot),{pathname:u}=sa(),h=JSON.stringify(Zc(o));return T.useMemo(()=>os(r,JSON.parse(h),u,d==="path"),[r,h,u,d])}function Px(r,d){return Ch(r,d)}function Ch(r,d,o){we(Yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=T.useContext(xt),{matches:h}=T.useContext(Ot),m=h[h.length-1],y=m?m.params:{},N=m?m.pathname:"/",b=m?m.pathnameBase:"/",x=m&&m.route;{let S=x&&x.path||"";Rh(N,!x||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${N}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let R=sa(),w;if(d){let S=typeof d=="string"?Hl(d):d;we(b==="/"||S.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${S.pathname}" was given in the \`location\` prop.`),w=S}else w=R;let H=w.pathname||"/",Z=H;if(b!=="/"){let S=b.replace(/^\//,"").split("/");Z="/"+H.replace(/^\//,"").split("/").slice(S.length).join("/")}let X=bh(r,{pathname:Z});Dt(x||X!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Dt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=ng(X&&X.map(S=>Object.assign({},S,{params:Object.assign({},y,S.params),pathname:kt([b,u.encodeLocation?u.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?b:kt([b,u.encodeLocation?u.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),h,o);return d&&L?T.createElement(Yn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},L):L}function eg(){let r=ug(),d=Bx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),o=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:m},"ErrorBoundary")," or"," ",T.createElement("code",{style:m},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},d),o?T.createElement("pre",{style:h},o):null,y)}var tg=T.createElement(eg,null),zh=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,d){return d.location!==r.location||d.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:d.error,location:d.location,revalidation:r.revalidation||d.revalidation}}componentDidCatch(r,d){this.props.onError?this.props.onError(r,d):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const o=Kx(r.digest);o&&(r=o)}let d=r!==void 0?T.createElement(Ot.Provider,{value:this.props.routeContext},T.createElement(Vc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(ag,{error:r},d):d}};zh.contextType=Gx;var kc=new WeakMap;function ag({children:r,error:d}){let{basename:o}=T.useContext(xt);if(typeof d=="object"&&d&&"digest"in d&&typeof d.digest=="string"){let u=Jx(d.digest);if(u){let h=kc.get(d);if(h)throw h;let m=Sh(u.location,o);if(jh&&!kc.get(d))if(m.isExternal||u.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:u.replace}));throw kc.set(d,y),y}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function lg({routeContext:r,match:d,children:o}){let u=T.useContext(Ll);return u&&u.static&&u.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=d.route.id),T.createElement(Ot.Provider,{value:r},o)}function ng(r,d=[],o){let u=o?.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(d.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let h=r,m=u?.errors;if(m!=null){let R=h.findIndex(w=>w.route.id&&m?.[w.route.id]!==void 0);we(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),h=h.slice(0,Math.min(h.length,R+1))}let y=!1,N=-1;if(o&&u){y=u.renderFallback;for(let R=0;R<h.length;R++){let w=h[R];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(N=R),w.route.id){let{loaderData:H,errors:Z}=u,X=w.route.loader&&!H.hasOwnProperty(w.route.id)&&(!Z||Z[w.route.id]===void 0);if(w.route.lazy||X){o.isStatic&&(y=!0),N>=0?h=h.slice(0,N+1):h=[h[0]];break}}}}let b=o?.onError,x=u&&b?(R,w)=>{b(R,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:kx(u.matches),errorInfo:w})}:void 0;return h.reduceRight((R,w,H)=>{let Z,X=!1,L=null,S=null;u&&(Z=m&&w.route.id?m[w.route.id]:void 0,L=w.route.errorElement||tg,y&&(N<0&&H===0?(Rh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,S=null):N===H&&(X=!0,S=w.route.hydrateFallbackElement||null)));let G=d.concat(h.slice(0,H+1)),ee=()=>{let K;return Z?K=L:X?K=S:w.route.Component?K=T.createElement(w.route.Component,null):w.route.element?K=w.route.element:K=R,T.createElement(lg,{match:w,routeContext:{outlet:R,matches:G,isDataRoute:u!=null},children:K})};return u&&(w.route.ErrorBoundary||w.route.errorElement||H===0)?T.createElement(zh,{location:u.location,revalidation:u.revalidation,component:L,error:Z,children:ee(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:x}):ee()},null)}function Jc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ig(r){let d=T.useContext(Ll);return we(d,Jc(r)),d}function sg(r){let d=T.useContext(fs);return we(d,Jc(r)),d}function rg(r){let d=T.useContext(Ot);return we(d,Jc(r)),d}function Kc(r){let d=rg(r),o=d.matches[d.matches.length-1];return we(o.route.id,`${r} can only be used on routes that contain a unique "id"`),o.route.id}function cg(){return Kc("useRouteId")}function ug(){let r=T.useContext(Vc),d=sg("useRouteError"),o=Kc("useRouteError");return r!==void 0?r:d.errors?.[o]}function dg(){let{router:r}=ig("useNavigate"),d=Kc("useNavigate"),o=T.useRef(!1);return wh(()=>{o.current=!0}),T.useCallback(async(h,m={})=>{Dt(o.current,Th),o.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:d,...m}))},[r,d])}var ph={};function Rh(r,d,o){!d&&!ph[r]&&(ph[r]=!0,Dt(!1,o))}T.memo(og);function og({routes:r,future:d,state:o,isStatic:u,onError:h}){return Ch(r,void 0,{state:o,isStatic:u,onError:h})}function xh({to:r,replace:d,state:o,relative:u}){we(Yl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=T.useContext(xt);Dt(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=T.useContext(Ot),{pathname:y}=sa(),N=ra(),b=os(r,Zc(m),y,u==="path"),x=JSON.stringify(b);return T.useEffect(()=>{N(JSON.parse(x),{replace:d,state:o,relative:u})},[N,x,u,d,o]),null}function hs(r){return $x(r.context)}function ce(r){we(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fg({basename:r="/",children:d=null,location:o,navigationType:u="POP",navigator:h,static:m=!1,unstable_useTransitions:y}){we(!Yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let N=r.replace(/^\/*/,"/"),b=T.useMemo(()=>({basename:N,navigator:h,static:m,unstable_useTransitions:y,future:{}}),[N,h,m,y]);typeof o=="string"&&(o=Hl(o));let{pathname:x="/",search:R="",hash:w="",state:H=null,key:Z="default",unstable_mask:X}=o,L=T.useMemo(()=>{let S=ia(x,N);return S==null?null:{location:{pathname:S,search:R,hash:w,state:H,key:Z,unstable_mask:X},navigationType:u}},[N,x,R,w,H,Z,u,X]);return Dt(L!=null,`<Router basename="${N}"> is not able to match the URL "${x}${R}${w}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:T.createElement(xt.Provider,{value:b},T.createElement(Yn.Provider,{children:d,value:L}))}function hg({children:r,location:d}){return Px(Qc(r),d)}function Qc(r,d=[]){let o=[];return T.Children.forEach(r,(u,h)=>{if(!T.isValidElement(u))return;let m=[...d,h];if(u.type===T.Fragment){o.push.apply(o,Qc(u.props.children,m));return}we(u.type===ce,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),we(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=Qc(u.props.children,m)),o.push(y)}),o}var cs="get",us="application/x-www-form-urlencoded";function ms(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function mg(r){return ms(r)&&r.tagName.toLowerCase()==="button"}function pg(r){return ms(r)&&r.tagName.toLowerCase()==="form"}function xg(r){return ms(r)&&r.tagName.toLowerCase()==="input"}function gg(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function bg(r,d){return r.button===0&&(!d||d==="_self")&&!gg(r)}var ns=null;function vg(){if(ns===null)try{new FormData(document.createElement("form"),0),ns=!1}catch{ns=!0}return ns}var yg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qc(r){return r!=null&&!yg.has(r)?(Dt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`),null):r}function jg(r,d){let o,u,h,m,y;if(pg(r)){let N=r.getAttribute("action");u=N?ia(N,d):null,o=r.getAttribute("method")||cs,h=qc(r.getAttribute("enctype"))||us,m=new FormData(r)}else if(mg(r)||xg(r)&&(r.type==="submit"||r.type==="image")){let N=r.form;if(N==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||N.getAttribute("action");if(u=b?ia(b,d):null,o=r.getAttribute("formmethod")||N.getAttribute("method")||cs,h=qc(r.getAttribute("formenctype"))||qc(N.getAttribute("enctype"))||us,m=new FormData(N,r),!vg()){let{name:x,type:R,value:w}=r;if(R==="image"){let H=x?`${x}.`:"";m.append(`${H}x`,"0"),m.append(`${H}y`,"0")}else x&&m.append(x,w)}}else{if(ms(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=cs,u=null,h=us,y=r}return m&&h==="text/plain"&&(y=m,m=void 0),{action:u,method:o.toLowerCase(),encType:h,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fc(r,d){if(r===!1||r===null||typeof r>"u")throw new Error(d)}function Sg(r,d,o,u){let h=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return o?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${u}`:h.pathname=`${h.pathname}.${u}`:h.pathname==="/"?h.pathname=`_root.${u}`:d&&ia(h.pathname,d)==="/"?h.pathname=`${d.replace(/\/$/,"")}/_root.${u}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${u}`,h}async function Ng(r,d){if(r.id in d)return d[r.id];try{let o=await import(r.module);return d[r.id]=o,o}catch(o){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ag(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Eg(r,d,o){let u=await Promise.all(r.map(async h=>{let m=d.routes[h.route.id];if(m){let y=await Ng(m,o);return y.links?y.links():[]}return[]}));return zg(u.flat(1).filter(Ag).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function gh(r,d,o,u,h,m){let y=(b,x)=>o[x]?b.route.id!==o[x].route.id:!0,N=(b,x)=>o[x].pathname!==b.pathname||o[x].route.path?.endsWith("*")&&o[x].params["*"]!==b.params["*"];return m==="assets"?d.filter((b,x)=>y(b,x)||N(b,x)):m==="data"?d.filter((b,x)=>{let R=u.routes[b.route.id];if(!R||!R.hasLoader)return!1;if(y(b,x)||N(b,x))return!0;if(b.route.shouldRevalidate){let w=b.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Tg(r,d,{includeHydrateFallback:o}={}){return wg(r.map(u=>{let h=d.routes[u.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),o&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function wg(r){return[...new Set(r)]}function Cg(r){let d={},o=Object.keys(r).sort();for(let u of o)d[u]=r[u];return d}function zg(r,d){let o=new Set;return new Set(d),r.reduce((u,h)=>{let m=JSON.stringify(Cg(h));return o.has(m)||(o.add(m),u.push({key:m,link:h})),u},[])}function Mh(){let r=T.useContext(Ll);return Fc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Rg(){let r=T.useContext(fs);return Fc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Wc=T.createContext(void 0);Wc.displayName="FrameworkContext";function Dh(){let r=T.useContext(Wc);return Fc(r,"You must render this element inside a <HydratedRouter> element"),r}function Mg(r,d){let o=T.useContext(Wc),[u,h]=T.useState(!1),[m,y]=T.useState(!1),{onFocus:N,onBlur:b,onMouseEnter:x,onMouseLeave:R,onTouchStart:w}=d,H=T.useRef(null);T.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let L=G=>{G.forEach(ee=>{y(ee.isIntersecting)})},S=new IntersectionObserver(L,{threshold:.5});return H.current&&S.observe(H.current),()=>{S.disconnect()}}},[r]),T.useEffect(()=>{if(u){let L=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(L)}}},[u]);let Z=()=>{h(!0)},X=()=>{h(!1),y(!1)};return o?r!=="intent"?[m,H,{}]:[m,H,{onFocus:Hn(N,Z),onBlur:Hn(b,X),onMouseEnter:Hn(x,Z),onMouseLeave:Hn(R,X),onTouchStart:Hn(w,Z)}]:[!1,H,{}]}function Hn(r,d){return o=>{r&&r(o),o.defaultPrevented||d(o)}}function Dg({page:r,...d}){let{router:o}=Mh(),u=T.useMemo(()=>bh(o.routes,r,o.basename),[o.routes,r,o.basename]);return u?T.createElement(Ug,{page:r,matches:u,...d}):null}function Og(r){let{manifest:d,routeModules:o}=Dh(),[u,h]=T.useState([]);return T.useEffect(()=>{let m=!1;return Eg(r,d,o).then(y=>{m||h(y)}),()=>{m=!0}},[r,d,o]),u}function Ug({page:r,matches:d,...o}){let u=sa(),{future:h,manifest:m,routeModules:y}=Dh(),{basename:N}=Mh(),{loaderData:b,matches:x}=Rg(),R=T.useMemo(()=>gh(r,d,x,m,u,"data"),[r,d,x,m,u]),w=T.useMemo(()=>gh(r,d,x,m,u,"assets"),[r,d,x,m,u]),H=T.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let L=new Set,S=!1;if(d.forEach(ee=>{let K=m.routes[ee.route.id];!K||!K.hasLoader||(!R.some(ve=>ve.route.id===ee.route.id)&&ee.route.id in b&&y[ee.route.id]?.shouldRevalidate||K.hasClientLoader?S=!0:L.add(ee.route.id))}),L.size===0)return[];let G=Sg(r,N,h.unstable_trailingSlashAwareDataRequests,"data");return S&&L.size>0&&G.searchParams.set("_routes",d.filter(ee=>L.has(ee.route.id)).map(ee=>ee.route.id).join(",")),[G.pathname+G.search]},[N,h.unstable_trailingSlashAwareDataRequests,b,u,m,R,d,r,y]),Z=T.useMemo(()=>Tg(w,m),[w,m]),X=Og(w);return T.createElement(T.Fragment,null,H.map(L=>T.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...o})),Z.map(L=>T.createElement("link",{key:L,rel:"modulepreload",href:L,...o})),X.map(({key:L,link:S})=>T.createElement("link",{key:L,nonce:o.nonce,...S,crossOrigin:S.crossOrigin??o.crossOrigin})))}function _g(...r){return d=>{r.forEach(o=>{typeof o=="function"?o(d):o!=null&&(o.current=d)})}}var Hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Hg&&(window.__reactRouterVersion="7.13.2")}catch{}function Lg({basename:r,children:d,unstable_useTransitions:o,window:u}){let h=T.useRef();h.current==null&&(h.current=px({window:u,v5Compat:!0}));let m=h.current,[y,N]=T.useState({action:m.action,location:m.location}),b=T.useCallback(x=>{o===!1?N(x):T.startTransition(()=>N(x))},[o]);return T.useLayoutEffect(()=>m.listen(b),[m,b]),T.createElement(fg,{basename:r,children:d,location:y.location,navigationType:y.action,navigator:m,unstable_useTransitions:o})}var Oh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uh=T.forwardRef(function({onClick:d,discover:o="render",prefetch:u="none",relative:h,reloadDocument:m,replace:y,unstable_mask:N,state:b,target:x,to:R,preventScrollReset:w,viewTransition:H,unstable_defaultShouldRevalidate:Z,...X},L){let{basename:S,navigator:G,unstable_useTransitions:ee}=T.useContext(xt),K=typeof R=="string"&&Oh.test(R),ve=Sh(R,S);R=ve.to;let ye=Fx(R,{relative:h}),Ce=sa(),W=null;if(N){let _e=os(N,[],Ce.unstable_mask?Ce.unstable_mask.pathname:"/",!0);S!=="/"&&(_e.pathname=_e.pathname==="/"?S:kt([S,_e.pathname])),W=G.createHref(_e)}let[Me,Ke,Ut]=Mg(u,X),gt=kg(R,{replace:y,unstable_mask:N,state:b,target:x,preventScrollReset:w,relative:h,viewTransition:H,unstable_defaultShouldRevalidate:Z,unstable_useTransitions:ee});function Fe(_e){d&&d(_e),_e.defaultPrevented||gt(_e)}let _t=!(ve.isExternal||m),bt=T.createElement("a",{...X,...Ut,href:(_t?W:void 0)||ve.absoluteURL||ye,onClick:_t?Fe:d,ref:_g(L,Ke),target:x,"data-discover":!K&&o==="render"?"true":void 0});return Me&&!K?T.createElement(T.Fragment,null,bt,T.createElement(Dg,{page:ye})):bt});Uh.displayName="Link";var Ne=T.forwardRef(function({"aria-current":d="page",caseSensitive:o=!1,className:u="",end:h=!1,style:m,to:y,viewTransition:N,children:b,...x},R){let w=Bn(y,{relative:x.relative}),H=sa(),Z=T.useContext(fs),{navigator:X,basename:L}=T.useContext(xt),S=Z!=null&&Zg(w)&&N===!0,G=X.encodeLocation?X.encodeLocation(w).pathname:w.pathname,ee=H.pathname,K=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;o||(ee=ee.toLowerCase(),K=K?K.toLowerCase():null,G=G.toLowerCase()),K&&L&&(K=ia(K,L)||K);const ve=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ye=ee===G||!h&&ee.startsWith(G)&&ee.charAt(ve)==="/",Ce=K!=null&&(K===G||!h&&K.startsWith(G)&&K.charAt(G.length)==="/"),W={isActive:ye,isPending:Ce,isTransitioning:S},Me=ye?d:void 0,Ke;typeof u=="function"?Ke=u(W):Ke=[u,ye?"active":null,Ce?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Ut=typeof m=="function"?m(W):m;return T.createElement(Uh,{...x,"aria-current":Me,className:Ke,ref:R,style:Ut,to:y,viewTransition:N},typeof b=="function"?b(W):b)});Ne.displayName="NavLink";var Yg=T.forwardRef(({discover:r="render",fetcherKey:d,navigate:o,reloadDocument:u,replace:h,state:m,method:y=cs,action:N,onSubmit:b,relative:x,preventScrollReset:R,viewTransition:w,unstable_defaultShouldRevalidate:H,...Z},X)=>{let{unstable_useTransitions:L}=T.useContext(xt),S=Qg(),G=Xg(N,{relative:x}),ee=y.toLowerCase()==="get"?"get":"post",K=typeof N=="string"&&Oh.test(N),ve=ye=>{if(b&&b(ye),ye.defaultPrevented)return;ye.preventDefault();let Ce=ye.nativeEvent.submitter,W=Ce?.getAttribute("formmethod")||y,Me=()=>S(Ce||ye.currentTarget,{fetcherKey:d,method:W,navigate:o,replace:h,state:m,relative:x,preventScrollReset:R,viewTransition:w,unstable_defaultShouldRevalidate:H});L&&o!==!1?T.startTransition(()=>Me()):Me()};return T.createElement("form",{ref:X,method:ee,action:G,onSubmit:u?b:ve,...Z,"data-discover":!K&&r==="render"?"true":void 0})});Yg.displayName="Form";function Bg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _h(r){let d=T.useContext(Ll);return we(d,Bg(r)),d}function kg(r,{target:d,replace:o,unstable_mask:u,state:h,preventScrollReset:m,relative:y,viewTransition:N,unstable_defaultShouldRevalidate:b,unstable_useTransitions:x}={}){let R=ra(),w=sa(),H=Bn(r,{relative:y});return T.useCallback(Z=>{if(bg(Z,d)){Z.preventDefault();let X=o!==void 0?o:Ln(w)===Ln(H),L=()=>R(r,{replace:X,unstable_mask:u,state:h,preventScrollReset:m,relative:y,viewTransition:N,unstable_defaultShouldRevalidate:b});x?T.startTransition(()=>L()):L()}},[w,R,H,o,u,h,d,r,m,y,N,b,x])}var qg=0,Gg=()=>`__${String(++qg)}__`;function Qg(){let{router:r}=_h("useSubmit"),{basename:d}=T.useContext(xt),o=cg(),u=r.fetch,h=r.navigate;return T.useCallback(async(m,y={})=>{let{action:N,method:b,encType:x,formData:R,body:w}=jg(m,d);if(y.navigate===!1){let H=y.fetcherKey||Gg();await u(H,o,y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:R,body:w,formMethod:y.method||b,formEncType:y.encType||x,flushSync:y.flushSync})}else await h(y.action||N,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:R,body:w,formMethod:y.method||b,formEncType:y.encType||x,replace:y.replace,state:y.state,fromRouteId:o,flushSync:y.flushSync,viewTransition:y.viewTransition})},[u,h,d,o])}function Xg(r,{relative:d}={}){let{basename:o}=T.useContext(xt),u=T.useContext(Ot);we(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),m={...Bn(r||".",{relative:d})},y=sa();if(r==null){m.search=y.search;let N=new URLSearchParams(m.search),b=N.getAll("index");if(b.some(R=>R==="")){N.delete("index"),b.filter(w=>w).forEach(w=>N.append("index",w));let R=N.toString();m.search=R?`?${R}`:""}}return(!r||r===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:kt([o,m.pathname])),Ln(m)}function Zg(r,{relative:d}={}){let o=T.useContext(Ah);we(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=_h("useViewTransitionState"),h=Bn(r,{relative:d});if(!o.isTransitioning)return!1;let m=ia(o.currentLocation.pathname,u)||o.currentLocation.pathname,y=ia(o.nextLocation.pathname,u)||o.nextLocation.pathname;return ds(h.pathname,y)!=null||ds(h.pathname,m)!=null}const Vg="/Studatrix-zip-1-/assets/studatrix-BL0-t_bO.png",Jg="/Studatrix-zip-1-/assets/admin_logo-ClvybWQX.avif",Kg="/Studatrix-zip-1-/assets/scholar_logo-Cn6KVK7X.jpg",Fg="/Studatrix-zip-1-/assets/teacher_logo_1-B5ShIiQb.jpg",Wg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///88PDrGxsYrKywnJyc5OTc1NTP29vY8PDzV1dVYWFZ1dXOZmZkxMS5MTEouLiuurq0wMDDf39/w8PApKSZTU1POzs41NTUKCgomJiYzMzOfn59FRUXl5eWOjo4lJSJra2t/f3+3t7eIiIinp6d2dnZhYV+9vb1JSUeLi4ttbWwbGxtBQUGUlJLJycdcXF0XFxUAAADWRwp2AAAL+klEQVR4nO2dC3OizBKGQRwYjYggyodKvGU1MWr2/P8/d0AQBpgbSWidLd6t2qqtZXQe597T3Whap06dOnXq1KlTp06dOnXq1KmR5svTyjWC2XYSNSlm9UaHc1xuuJ9M26rabyga4bVrIl3XkWmvv3aWZDnvw/YXKC6H0MJdb46tVvIHskbITujuQv5Yqq7TvWMTxXTTP8zbruu35M0cvSJkbMXN2Dvb1XKBewGocFNd3aBaUV3H7kw0rCZ9VC+GjRNIpZvouq5X9NblxnzEN59aTLcPQBWXlWfTAWPEL15HPTIAdd3YglVeRtaMBRhX9ZVdLtKZ5XB/Ald/sUYuEzCu6oBZ7o/JLoZRoxW1XUXsisZCzCE17/PK2R+QDHxdavN9SWtWI54o0y8h/2m2N5bJHoWJTMakEX1ibjn7DZaDrStzQsxk0Mu9cUZvIjSG5WBrxO+kMSG9m264wzdW+Czd9MDvpLru7qjlRD+MbjzL/hSJCBfUJdFaiwgZvwy8hDWlTzWRmPBZpppQSPiHVkyCcAmNwpAh6qXKt+FZONOMaMUkxuGznPZPolnfoddUOEMxVhl4LYXroUct9yJcD4FBmBoIuhtC9HI7wV6IvWUH15i/g7YZVpepwSc0nmU5jDeYBncLvWYd9PYLbhMiWWtk+5queIQ20x7hcbfezrOshokmvP5ms8/ql5oBkmjC8fM0YawNezoNOfYWa8yx01zhqi8h65018zt7XjmPuSYaz7KfuSs60xGdF365K8MM6T+f1TuqG/VjrbktmGigU34atH6mWeYua1sxe2McuBI2z2jTr87E7rnXfn2/o+vMJ9oDueEfOYvn7kyeTpC9/ngW60Vd143v2GYixzc/6LtRiqzdsCinL5+XL5F1fdueNi+vu4bHgmlvud1s/lx20j9Lp06dSFnX5ctwzNDssJ8wx+R8sj3Qiw1flr1nmXF6J99xTMRWMq++UiaQ64vvswuatrMePoPryW7V5x9/72vcptyQ1mQViowYOnKc1wdfIg6++gjzL5Dy2oZ7okF6M4qDAk3uYvnIQ9TEETYDIXt8b0Zr78vxJXKGj1si96JbtYrQIrUqRkPhnQwpM3iU2XQrMCTVhftJXT3GQYtT7DFOC/vGgLE+e5rH9r9gav0IxInQJk8Tcgbjhi14Uwh/nIq4bhQcRMGdP0su+Kpx+E5L/EABtP27951B+CM5wEPxS2Ij87tC76A7uLkrt5H5TTmg5sX9Ap4QzQC3bzxXxPbUB/Q98TjXDe1pAejJt3sIYQDYTQW+iC0Jh3Cr/hZ4uc8kY0H/JRGuvchpd9IhPz6gOh61osKJAg17Qr+9HwidJ6d8RGC8ACMs2jDeS/UEXqI/kuORQ4LpbNwyYZtbVGdJemzYYHducITmRtOK7QUa/nuESJ+SLlc+1IoIR6j3r9q8MHg5UEd9QMLFRdMKQpsTf6MqIfoifR/R7N8jxP2pNim2wQHQxg2S0NhpXmHWM4CMw5CEwV7T3vP1YgEUswdJiLGm7YmBCLNeABLGWzVP2+VfgV2YaxpQwvgronzri4Hc90EJ0UbTvu4DEQcwIdCwhLamvd6diTFegZhNQQl1Z05+hw9ygoIljM9MU5yvFzY1OkVtwmTjVhgSkmH5rxHqOD5BFRs3kBMUMKHR0wYEIcQJCphw8aFZxdW4CXGCAiYMhqUT1OrfI9TNiDxBQZi+oQmd0gkKIjoYvA3jM1Nhd4YwfUMTJgFChWEYB89LiAOj3+8bgay3Xy7f047F1zjtb9waEZq2nfrQIH+1n8wH891+nDomIjv+LylC+02bFhHjADf6DQht53RZvg7Xpm6+59nNrN7M0dF6/Locvdgyt63mi6YNITdu0oRonQVPeKe/5fig0ech7WvWm4wLp2tpIyIcs/UTlCwhOhc2h+rYKf4dzcSI/pxM1+O07rMgSYh0OaNK9C68gozPTNPiIVZg8e9JktCRXZp7Qr+AxNhNbNxad3KTJFz15pno4aDzXOJGDEt3UK2bvvmEeVgosp1U4Yb6MfvQyB4oijJDSo/awCf/9TBCZKPZuLoCGPQjnReWF37beR/qjJk12GvTImi4dechNqE9TDqk9VZuC4NxLEckIbJHySIwOFAXSLwiHSRa35oyCe37N3srwj0TYcbnbEoP3ZeAPc31ITF27/LEBkHb1xcsQnTOH/FWRSsyb/22BSFCxQL5RRmMOD4zRblHpNG27xCLkPTjJeLQmQ4GBSEyiR1BjxLHgZOOuc1aF723bY1iEZZO39HiPsyIpi2r6KUlO++0DphSWePbGDXbtwozCHG/9NNG5zsAa6a5H6JQOdUOPdPC7cz0Ebiuu2nfjMEirFhQvFX2HMOF4r5alLporCn19JgmArEGA4iLbhZhNaGMl+WSoOf60i7pzIH0SqebU+OpTMjEu8y5tJro0DsHNwiTtgW30oWPnEVTnagbG3QGdNYvbp39Xmk9rKX5iIJbbU1adoz0U5BdBRwxzsSQOQaPd9MeQlF5T+NUDdIZIsXwkLpSo9q8uGTF/C0Ak4FY95ggf1QJn8H9KmIWi+dX1+iji6gtuGRGjCV3UGCKZgbCOAiTGaRytqilXck2cOtLaclIs1zXxyCzBZNuChk1Yy1n+Hy4TZ3V05Nfa8V0A+cMjzlj7ysFrM6i5C1aTRjKXSiTNc1+0dr5sN5R04sj5Mz2x8FgcPyYGbdmra6D/BbU8UKY7KYd1c/4NcR4A3f7jyAw4i2JsQhumxlUSxrIBeTs/loWxYpR66gRduuq5flmTzKZ1o+J6qbZaWqIcZ+uqbpZFbSgDh+DmIlqiap1VLHEgLAbt0J0W1utFUXizaJFI7ZCIBLDmtgQUaIFdSh3oapY9tJGiHKAD8rSzrQINxiLwlk0E+jGLRfb5i2dN0+yBRPERySs4dw9SXZUqUkmlfGIdJG8+0NDxjYt34Ks7O4ti3sHLDEWmwA+ZiDyb7mFHVV2kkmFoQIuSAk8FQSIzQDBT1A3iXwxQl7QYNMcMLj1GwuKRITc9P/iuHcc/7n9hW/BF6CZFTJRCMtXa7ydlkfeFtKuR2t53EL4E1Sd0CaTCgvMnGPyimp4rhHOqlrBpzGvETpHMjpZcOIh45jrb7iCC4vlqW6nGZDv1hFEJ++KPDB9q/YuASUIBd49nvqEotuGs+qEQuee4h5YUUJhkoBd7pegKKHQyS7K/UYVJRQfWfOQJjUJJRLJ5SuikoRY4p1U+dZUTUKJ/Fz5i63UJPyU+IC766WShIGM0eHuFaAkodSr4e4hTUoSSqXJi3yFCV2ZA/k9R6GKhEkOJAllW1MVCSUzV2WesSoSSl6GZa/uUpAQSUbvZANRQULpS+nUPKMgoXT6g3RrqiChL+tM6C3UJGyQhuS2NVWPMNhIf8ZtIKpH2OB9xbeBqB5hA59ez1eRsJFfdnIpox5hkzDIZCAqR9joteHJQFSOsFE4chTeIm7UIpQ6G+bCWDnChpXbBsoRNsxqPHGVI5TelKaKQvUIm32K9Y4UI2ycFGAbKEbYaDVMNDHUIlyETQPNPCNUitBtthpqibFGLUJj0/hztp9KEX7jvdq7/9QinHiEiKctj+y+EfHQUa02tJFdBDiRaQCj/5FT0MYongrUGof2zVUyExn/HP1HEp6C4inl9jRENdmEJU+9jvBh6gg7wo7w8eoIZQmxOit++K8RzqupucKp9kYGisgSBpr2USGUdOZoWdPKa2WT3GUDMthHkjB5r8OkEsfWfgpIKVWCJJJaWTMi2VwpFYJXItwQUTJJgqJp+Q2umBtvAyevFJ2FzCR+rkgeF2tNHJh2n0SwskUmdRsnT11KXX7xmPj7ukZk38oS0fwhqkqmQtgsiMmDTMCUXnNYZLZWFDwi6peqvZ+nu/Qz/wvrkNc+8IuYwaOLiXdtbsMCMAtnisb5NGzWktc8UJPASE56Qf9cwFxCN0g6bTgsKtpDSEd2HptljRwHIYyCcJY/M92GSSYUtAgB0rI1kDXZBH182pVMFMsv219t81xt097p79qP9ffQm+bPHGzjvC0FhnqXmeOPPwDzXv2W4EMjO3Xq1KlTp06dOnXq1KlTp7L+D5Kb65Eh+ZVGAAAAAElFTkSuQmCC";function Ig(){const r=ra();return n.jsxs("div",{className:"home",children:[n.jsxs("nav",{className:"navbar",children:[n.jsx("div",{className:"nav-left",children:n.jsxs("div",{className:"logo-block",children:[n.jsx("img",{src:Vg,alt:"Studatrix",className:"logo-img"}),n.jsx("span",{className:"logo-tagline",children:"Academic Intelligence Platform"})]})}),n.jsxs("div",{className:"nav-right",children:[n.jsxs("div",{className:"user-status",children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{children:"Guest Online"})]}),n.jsx("button",{className:"register-button",onClick:()=>r("/register"),children:"Get Started"}),n.jsx("button",{className:"login-button",onClick:()=>r("/login"),children:"Login"})]})]}),n.jsxs("section",{className:"hero",children:[n.jsx("h1",{children:"The Future of Academic Management"}),n.jsx("p",{children:"Studatrix connects institutions, educators, scholars, and parents through a unified academic intelligence platform."}),n.jsxs("div",{className:"hero-buttons",children:[n.jsx("button",{className:"primary-button",onClick:()=>r("/register"),children:"Start Using Studatrix"}),n.jsx("button",{className:"secondary-button",onClick:()=>r("/login"),children:"Open Dashboard"})]})]}),n.jsxs("section",{className:"trusted-section",children:[n.jsx("h2",{children:"Trusted by Educational Institutions"}),n.jsxs("div",{className:"trusted-grid",children:[n.jsx("div",{className:"trusted-card",children:"Global Public School"}),n.jsx("div",{className:"trusted-card",children:"BrightPath Institute"}),n.jsx("div",{className:"trusted-card",children:"Future Scholars Academy"}),n.jsx("div",{className:"trusted-card",children:"National Learning Center"})]})]}),n.jsxs("section",{className:"features-section",children:[n.jsx("h2",{children:"Platform Capabilities"}),n.jsxs("div",{className:"features-grid",children:[n.jsxs("div",{className:"feature-card",children:[n.jsx("h3",{children:"Academic Tracking"}),n.jsx("p",{children:"Track scholar progress and performance."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("h3",{children:"Institution Intelligence"}),n.jsx("p",{children:"Gain powerful insights into institutional data."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("h3",{children:"Parent Connectivity"}),n.jsx("p",{children:"Parents stay connected with student progress."})]}),n.jsxs("div",{className:"feature-card",children:[n.jsx("h3",{children:"Educator Tools"}),n.jsx("p",{children:"Manage assessments and scholar performance."})]})]})]}),n.jsxs("section",{className:"workflow-section",children:[n.jsx("h2",{children:"How Studatrix Works"}),n.jsxs("div",{className:"workflow-grid",children:[n.jsxs("div",{className:"workflow-step",children:[n.jsx("h3",{children:"1. Register Institution"}),n.jsx("p",{children:"Integrate academic infrastructure."})]}),n.jsxs("div",{className:"workflow-step",children:[n.jsx("h3",{children:"2. Connect Users"}),n.jsx("p",{children:"Scholars, educators, and parents join."})]}),n.jsxs("div",{className:"workflow-step",children:[n.jsx("h3",{children:"3. Track Progress"}),n.jsx("p",{children:"Monitor academic growth continuously."})]}),n.jsxs("div",{className:"workflow-step",children:[n.jsx("h3",{children:"4. Institutional Insights"}),n.jsx("p",{children:"Administrators gain full visibility."})]})]})]}),n.jsxs("section",{className:"modules-section",children:[n.jsx("h2",{children:"Core Platform Modules"}),n.jsxs("div",{className:"modules-grid",children:[n.jsxs("div",{className:"module-card",children:[n.jsx("h3",{children:"Scholar Records"}),n.jsx("p",{children:"Complete academic profiles."})]}),n.jsxs("div",{className:"module-card",children:[n.jsx("h3",{children:"Academic Analytics"}),n.jsx("p",{children:"Understand performance trends."})]}),n.jsxs("div",{className:"module-card",children:[n.jsx("h3",{children:"Institution Dashboard"}),n.jsx("p",{children:"Centralized institutional insights."})]}),n.jsxs("div",{className:"module-card",children:[n.jsx("h3",{children:"Parent Communication"}),n.jsx("p",{children:"Transparent academic communication."})]})]})]}),n.jsxs("section",{className:"stats-section",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("h2",{children:"12,458"}),n.jsx("p",{children:"Scholars Registered"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("h2",{children:"842"}),n.jsx("p",{children:"Educators Active"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("h2",{children:"9,126"}),n.jsx("p",{children:"Parents Connected"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("h2",{children:"32"}),n.jsx("p",{children:"Institutions Integrated"})]})]}),n.jsxs("section",{className:"why-section",children:[n.jsx("h2",{children:"Why Institutions Choose Studatrix"}),n.jsxs("div",{className:"why-grid",children:[n.jsxs("div",{className:"why-card",children:[n.jsx("h3",{children:"Unified System"}),n.jsx("p",{children:"Replace fragmented academic tools."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("h3",{children:"Real-Time Insights"}),n.jsx("p",{children:"Monitor scholar progress instantly."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("h3",{children:"Secure Infrastructure"}),n.jsx("p",{children:"Enterprise-grade academic security."})]}),n.jsxs("div",{className:"why-card",children:[n.jsx("h3",{children:"Scalable Platform"}),n.jsx("p",{children:"Supports institutions of all sizes."})]})]})]}),n.jsxs("section",{className:"portal-section",children:[n.jsx("h2",{children:"Access Your Platform"}),n.jsxs("div",{className:"portal-grid",children:[n.jsxs("div",{className:"portal-card",children:[n.jsx("img",{src:Jg,alt:"Admin",className:"portal-icon"}),n.jsx("h3",{children:"Administrator"}),n.jsx("p",{children:"Manage system and institution structure."}),n.jsx("button",{onClick:()=>r("/login"),children:"Open Portal"})]}),n.jsxs("div",{className:"portal-card",children:[n.jsx("img",{src:Kg,alt:"Scholar",className:"portal-icon"}),n.jsx("h3",{children:"Scholar"}),n.jsx("p",{children:"View academic progress and records."}),n.jsx("button",{onClick:()=>r("/login"),children:"Open Portal"})]}),n.jsxs("div",{className:"portal-card",children:[n.jsx("img",{src:Fg,alt:"Educator",className:"portal-icon"}),n.jsx("h3",{children:"Educator"}),n.jsx("p",{children:"Manage scholar academic development."}),n.jsx("button",{onClick:()=>r("/login"),children:"Open Portal"})]}),n.jsxs("div",{className:"portal-card",children:[n.jsx("img",{src:Wg,alt:"Parent",className:"portal-icon"}),n.jsx("h3",{children:"Parent"}),n.jsx("p",{children:"Monitor scholar academic performance."}),n.jsx("button",{onClick:()=>r("/login"),children:"Open Portal"})]})]})]}),n.jsxs("section",{className:"testimonial-section",children:[n.jsx("h2",{children:"What Institutions Say"}),n.jsxs("div",{className:"testimonial-grid",children:[n.jsxs("div",{className:"testimonial-card",children:[n.jsx("p",{children:'"Studatrix transformed our academic management."'}),n.jsx("span",{children:"— Academic Director"})]}),n.jsxs("div",{className:"testimonial-card",children:[n.jsx("p",{children:'"Parents are now fully connected with student progress."'}),n.jsx("span",{children:"— School Administrator"})]}),n.jsxs("div",{className:"testimonial-card",children:[n.jsx("p",{children:'"A powerful system for modern institutions."'}),n.jsx("span",{children:"— Education Consultant"})]})]})]}),n.jsxs("section",{className:"faq-section",children:[n.jsx("h2",{children:"Frequently Asked Questions"}),n.jsxs("div",{className:"faq-grid",children:[n.jsxs("div",{className:"faq-card",children:[n.jsx("h3",{children:"Who can use Studatrix?"}),n.jsx("p",{children:"Scholars, parents, educators, and institutions."})]}),n.jsxs("div",{className:"faq-card",children:[n.jsx("h3",{children:"Is the platform secure?"}),n.jsx("p",{children:"Yes, with secure authentication and encryption."})]}),n.jsxs("div",{className:"faq-card",children:[n.jsx("h3",{children:"Can institutions integrate it?"}),n.jsx("p",{children:"Yes, institutions can fully integrate their ecosystem."})]})]})]}),n.jsxs("section",{className:"cta-section",children:[n.jsx("h2",{children:"Start Building Your Academic Intelligence System"}),n.jsx("p",{children:"Join institutions transforming their academic management."}),n.jsxs("div",{className:"cta-buttons",children:[n.jsx("button",{className:"primary-button",onClick:()=>r("/register"),children:"Get Started"}),n.jsx("button",{className:"secondary-button",onClick:()=>r("/login"),children:"Login"})]})]}),n.jsxs("section",{className:"support-section",children:[n.jsx("h2",{children:"Help & Support"}),n.jsxs("div",{className:"support-grid",children:[n.jsxs("div",{className:"support-card",children:[n.jsx("h3",{children:"📞 Helpline"}),n.jsx("p",{children:"+91 78936 23583"})]}),n.jsxs("div",{className:"support-card",children:[n.jsx("h3",{children:"📧 Email"}),n.jsx("p",{children:"studatrixsupport@gmail.com"})]}),n.jsxs("div",{className:"support-card",children:[n.jsx("h3",{children:"🏢 Headquarters"}),n.jsx("p",{children:"Vijayawada, India"})]}),n.jsxs("div",{className:"support-card",children:[n.jsx("h3",{children:"🔐 Security"}),n.jsx("p",{children:"security@studatrix.com"})]})]})]}),n.jsx("footer",{className:"footer",children:"© 2026 Studatrix — Academic Intelligence Platform"})]})}const Bl="/Studatrix-zip-1-/assets/main_logo-DlSroLjU.png";function $g(){const r=ra(),[d,o]=T.useState(""),[u,h]=T.useState(""),[m,y]=T.useState(""),N=()=>{const x=(JSON.parse(localStorage.getItem("users"))||[]).find(w=>w.email===d&&w.password===u);if(!x){y("Invalid email or password");return}y("");const R=x.role.toLowerCase();switch(localStorage.setItem("role",R),localStorage.setItem("currentUser",JSON.stringify({...x,role:R})),R){case"admin":r("/admin-dashboard");break;case"scholar":r("/scholar-dashboard");break;case"teacher":r("/teacher-dashboard");break;case"parent":r("/parent-dashboard");break;case"doctor":r("/doctor-dashboard");break;case"patient":r("/patient-dashboard");break;default:r("/")}};return n.jsxs("div",{className:"login-page",children:[n.jsxs("div",{className:"login-card",children:[n.jsxs("div",{className:"brand",children:[n.jsx("div",{className:"logo",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),n.jsx("h1",{children:"Studatrix"}),n.jsx("span",{children:"Academic Intelligence Platform"})]}),n.jsx("input",{type:"email",placeholder:"Email address",value:d,onChange:b=>o(b.target.value),className:"input"}),n.jsx("input",{type:"password",placeholder:"Password",value:u,onChange:b=>h(b.target.value),className:"input"}),m&&n.jsx("div",{className:"error",children:m}),n.jsx("button",{className:"login-btn",onClick:N,children:"Login"})]}),n.jsx("style",{children:`

      .login-page {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
      }

      .login-card {
        width: 380px;
        padding: 40px;
        border-radius: 16px;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(12px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        text-align: center;
      }

      /* LOGO CONTAINER */
      .logo {
        width: 60px;
        height: 60px;
        border-radius: 12px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-bottom: 10px;
        overflow: hidden;
      }

      .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .input {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        font-size: 14px;
      }

      .input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        outline: none;
      }

      .login-btn {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-weight: 600;
        cursor: pointer;
      }

      .login-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(37,99,235,0.3);
      }

      .error {
        color: #ef4444;
        margin-bottom: 10px;
        font-size: 13px;
      }

      `})]})}function Pg(){const r=ra(),[d,o]=T.useState({name:"",email:"",password:"",role:"scholar"}),[u,h]=T.useState(""),m=N=>{o({...d,[N.target.name]:N.target.value})},y=()=>{const N=JSON.parse(localStorage.getItem("users"))||[];if(N.find(x=>x.email===d.email)){h("User already exists");return}N.push(d),localStorage.setItem("users",JSON.stringify(N)),r("/login")};return n.jsxs("div",{className:"register-page",children:[n.jsxs("div",{className:"register-card",children:[n.jsx("div",{className:"logo-container",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),n.jsx("h1",{children:"Create Account"}),n.jsx("input",{type:"text",name:"name",placeholder:"Full Name",onChange:m,className:"input"}),n.jsx("input",{type:"email",name:"email",placeholder:"Email",onChange:m,className:"input"}),n.jsx("input",{type:"password",name:"password",placeholder:"Password",onChange:m,className:"input"}),n.jsxs("select",{name:"role",onChange:m,className:"input",children:[n.jsx("option",{value:"scholar",children:"Scholar"}),n.jsx("option",{value:"admin",children:"Admin"}),n.jsx("option",{value:"teacher",children:"Teacher"}),n.jsx("option",{value:"parent",children:"Parent"})]}),u&&n.jsx("div",{className:"error",children:u}),n.jsx("button",{className:"register-btn",onClick:y,children:"Register"})]}),n.jsx("style",{children:`

      .register-page {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
      }

      .register-card {

        width: 400px;

        padding: 40px;

        background: rgba(255,255,255,0.92);

        backdrop-filter: blur(14px);

        border-radius: 18px;

        text-align: center;

        box-shadow: 0 25px 60px rgba(0,0,0,0.25);

        animation: fadeIn 0.4s ease;

      }

      /* LOGO */

      .logo-container {

        width: 70px;
        height: 70px;

        margin: 0 auto 15px auto;

        border-radius: 16px;

        background: white;

        padding: 8px;

        box-shadow: 0 8px 25px rgba(0,0,0,0.15);

        display: flex;
        align-items: center;
        justify-content: center;

      }

      .logo-container img {

        width: 100%;
        height: 100%;

        object-fit: contain;

      }

      h1 {
        margin-bottom: 20px;
        color: #0f172a;
      }

      .input {

        width: 100%;

        padding: 12px;

        margin-bottom: 15px;

        border-radius: 10px;

        border: 1px solid #e5e7eb;

        font-size: 14px;

        transition: 0.2s;

      }

      .input:focus {

        outline: none;

        border-color: #2563eb;

        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);

      }

      .register-btn {

        width: 100%;

        padding: 12px;

        background: linear-gradient(135deg,#2563eb,#06b6d4);

        border: none;

        color: white;

        border-radius: 10px;

        cursor: pointer;

        font-weight: 600;

        transition: 0.25s;

      }

      .register-btn:hover {

        transform: translateY(-2px);

        box-shadow: 0 12px 25px rgba(37,99,235,0.35);

      }

      .error {

        color: #ef4444;

        margin-bottom: 10px;

        font-size: 13px;

      }

      @keyframes fadeIn {

        from {
          opacity: 0;
          transform: translateY(15px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }

      }

      `})]})}function is({allowedRole:r,children:d}){const o=localStorage.getItem("role"),u=o?o.toLowerCase():null,h=r?r.toLowerCase():null;return u?u!==h?n.jsx(xh,{to:"/",replace:!0}):d:n.jsx(xh,{to:"/login",replace:!0})}function e0(){const[r,d]=T.useState(!1),o=ra(),u={name:"Tejes J",role:"Scholar",initials:"TJ"};return n.jsxs("div",{className:"layout",children:[n.jsxs("aside",{className:`sidebar ${r?"collapsed":""}`,children:[n.jsxs("div",{children:[n.jsxs("div",{className:"brand",children:[n.jsx("div",{className:"brand-icon",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),!r&&n.jsxs("div",{className:"brand-text",children:["Studatrix",n.jsx("span",{children:"Academic Intelligence"})]})]}),n.jsxs("nav",{className:"nav",children:[n.jsx(Ne,{to:"",end:!0,className:"nav-item",children:"Dashboard"}),n.jsx(Ne,{to:"profile",className:"nav-item",children:"Profile"}),n.jsx(Ne,{to:"academic-records",className:"nav-item",children:"Records"}),n.jsx(Ne,{to:"attendance",className:"nav-item",children:"Attendance"}),n.jsx(Ne,{to:"fee-payments",className:"nav-item",children:"Fees"}),n.jsx(Ne,{to:"courses",className:"nav-item",children:"Courses"}),n.jsx(Ne,{to:"assignments",className:"nav-item",children:"Assignments"}),n.jsx(Ne,{to:"schedule",className:"nav-item",children:"Schedule"}),n.jsx(Ne,{to:"settings",className:"nav-item",children:"Settings"})]})]}),n.jsxs("div",{className:"sidebar-bottom",children:[n.jsxs("button",{className:"logout-btn",onClick:()=>o("/"),children:["⎋ ",!r&&"Logout"]}),n.jsx("button",{className:"collapse-btn",onClick:()=>d(!r),children:r?"→":"←"}),!r&&n.jsx("div",{className:"system-status",children:"● System Online"})]})]}),n.jsxs("div",{className:"main",children:[n.jsxs("header",{className:"header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"page-title",children:"Scholar Dashboard"}),n.jsx("div",{className:"breadcrumb",children:"Studatrix • Academic Intelligence Platform"})]}),n.jsxs("div",{className:"header-right",children:[n.jsxs("div",{className:"status",children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{className:"status-text",children:"System Online"})]}),n.jsx("div",{className:"divider"}),n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"avatar",children:u.initials}),!r&&n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-name",children:u.name}),n.jsx("span",{className:"user-role",children:u.role})]})]})]})]}),n.jsx("main",{className:"content",children:n.jsx(hs,{})}),n.jsx("footer",{className:"footer",children:"Studatrix © 2026 • Academic Intelligence Platform"})]}),n.jsx("style",{children:`

      * {
        box-sizing: border-box;
        font-family: Inter, system-ui;
      }

      .layout {
        display: flex;
        min-height: 100vh;
        background: #f8fafc;
      }

      .sidebar {
        width: 260px;
        background: #0f172a;
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.25s;
      }

      .sidebar.collapsed {
        width: 80px;
      }

      .brand {
        display: flex;
        gap: 12px;
        align-items: center;
        margin-bottom: 30px;
      }

      .brand-icon {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      /* ADD THIS */
      .brand-icon img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .brand-text span {
        display: block;
        font-size: 11px;
        opacity: 0.6;
      }

      .nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .nav-item {
        padding: 10px;
        border-radius: 8px;
        text-decoration: none;
        color: white;
        transition: 0.2s;
      }

      .nav-item:hover {
        background: rgba(255,255,255,0.08);
      }

      .nav-item.active {
        background: linear-gradient(90deg,#2563eb,#06b6d4);
      }

      .logout-btn {
        width: 100%;
        padding: 12px;
        background: linear-gradient(135deg,#ef4444,#dc2626);
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 10px;
        transition: 0.25s;
      }

      .logout-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(239,68,68,0.3);
      }

      .collapse-btn {
        width: 100%;
        padding: 8px;
        background: #1e293b;
        border: none;
        border-radius: 6px;
        color: white;
        cursor: pointer;
      }

      .system-status {
        margin-top: 10px;
        font-size: 12px;
        opacity: 0.7;
      }

      .main {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .header {
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        background: rgba(255,255,255,0.75);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0,0,0,0.06);
      }

      .page-title {
        font-size: 18px;
        font-weight: 600;
        color: #0f172a;
      }

      .breadcrumb {
        font-size: 12px;
        color: #64748b;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .status {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
      }

      .status-text {
        font-size: 13px;
        color: #64748b;
      }

      .divider {
        width: 1px;
        height: 28px;
        background: rgba(0,0,0,0.08);
      }

      .user {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .avatar {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 600;
      }

      .user-info {
        display: flex;
        flex-direction: column;
      }

      .user-name {
        font-size: 13px;
        font-weight: 500;
      }

      .user-role {
        font-size: 11px;
        color: #64748b;
      }

      .content {
        flex: 1;
        padding: 30px;
      }

      .footer {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #64748b;
        font-size: 13px;
        border-top: 1px solid rgba(0,0,0,0.06);
      }

      `})]})}function t0(){const r={name:"Tejes",cgpa:"9.76",attendance:92,dues:12500,assignmentsCompleted:7,totalAssignments:10},d=Math.floor(r.assignmentsCompleted/r.totalAssignments*100);return n.jsxs("div",{className:"dashboard-page",children:[n.jsxs("div",{className:"hero glass",children:[n.jsxs("div",{children:[n.jsxs("h1",{children:["Welcome back, ",r.name]}),n.jsx("p",{children:"Here's your academic overview and system status."})]}),n.jsxs("div",{className:"cgpa-card",children:[n.jsx("span",{children:"CGPA"}),n.jsx("h2",{children:r.cgpa})]})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass",children:[n.jsx("h3",{children:"Attendance"}),n.jsx("div",{className:"circle",style:{background:`conic-gradient(
                #2563eb ${r.attendance*3.6}deg,
                #e5e7eb 0deg
              )`},children:n.jsxs("div",{className:"circle-inner",children:[r.attendance,"%"]})})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("h3",{children:"Assignments"}),n.jsxs("span",{className:"big-number",children:[r.assignmentsCompleted,"/",r.totalAssignments]}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:d+"%"}})}),n.jsxs("span",{className:"progress-text",children:[d,"% Completed"]})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("h3",{children:"Fee Dues"}),n.jsxs("span",{className:"big-number red",children:["₹",r.dues.toLocaleString()]}),n.jsx("p",{children:"Due by March 15"})]})]}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"glass schedule",children:[n.jsx("h3",{children:"Today's Classes"}),n.jsxs("div",{className:"class",children:[n.jsx("span",{children:"Data Structures & Algorithms - I"}),n.jsx("span",{children:"7:10 AM"})]}),n.jsxs("div",{className:"class",children:[n.jsx("span",{children:"Front End Development Frameworks & UI Engineering"}),n.jsx("span",{children:"9:20 AM"})]}),n.jsxs("div",{className:"class",children:[n.jsx("span",{children:"Mathematics for AI"}),n.jsx("span",{children:"11:00 AM"})]})]}),n.jsxs("div",{className:"glass activity",children:[n.jsx("h3",{children:"Recent Activity"}),n.jsx("div",{className:"activity-item",children:"Assignment submitted"}),n.jsx("div",{className:"activity-item",children:"Fee payment reminder"}),n.jsx("div",{className:"activity-item",children:"Profile updated"})]})]}),n.jsx("style",{children:`

        .dashboard-page {

          animation: fadeIn 0.6s ease;

        }


        .glass {

          background: rgba(255,255,255,0.7);

          backdrop-filter: blur(12px);

          border-radius: 18px;

          box-shadow: 0 10px 30px rgba(0,0,0,0.08);

        }


        .hero {

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 30px;

          margin-bottom: 25px;

          background: linear-gradient(
            135deg,
            rgba(37,99,235,0.15),
            rgba(6,182,212,0.15)
          );

        }


        .hero h1 {

          font-size: 28px;

        }


        .hero p {

          color: #64748b;

        }


        .cgpa-card {

          text-align: center;

        }


        .cgpa-card h2 {

          font-size: 32px;

          color: #2563eb;

        }


        .stats-grid {

          display: grid;

          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .stat-card {

          padding: 25px;

          text-align: center;

          transition: 0.3s;

        }


        .stat-card:hover {

          transform: translateY(-6px);

        }


        .big-number {

          font-size: 28px;

          font-weight: bold;

          color: #2563eb;

        }


        .red {

          color: #ef4444;

        }


        .circle {

          width: 120px;

          height: 120px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          margin: auto;

        }


        .circle-inner {

          width: 90px;

          height: 90px;

          background: white;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-weight: bold;

        }


        .progress-bar {

          height: 10px;

          background: #e5e7eb;

          border-radius: 10px;

          margin-top: 10px;

        }


        .progress-fill {

          height: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .lower-grid {

          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 20px;

        }


        .schedule,
        .activity {

          padding: 25px;

        }


        .class,
        .activity-item {

          display: flex;

          justify-content: space-between;

          padding: 10px;

          margin-top: 10px;

          background: rgba(37,99,235,0.05);

          border-radius: 10px;

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function a0(){const r={name:"Tejes J",id:"2500030159",role:"Day Scholar",program:"B.Tech Computer Science",institution:"KL University",year:"1st Year",cgpa:"9.76",email:"jujjavaraputejes@gmail.com",phone:"+91 78936 23583",status:"Active"},d=[{label:"Attendance",value:"94%"},{label:"Assignments",value:"32/35"},{label:"Courses Enrolled",value:"6"},{label:"Rank",value:"#12"}],o=["Logged into dashboard","Viewed academic records","Submitted Data Structures assignment","Checked attendance report","Updated profile information"],u=["Top 20 Rank Holder","Excellence in Programming","Hackathon Finalist","Academic Merit Scholarship"];return n.jsxs("div",{className:"profile-page",children:[n.jsxs("div",{className:"profile-hero glass",children:[n.jsx("div",{className:"avatar-ring",children:n.jsx("div",{className:"avatar",children:"TJ"})}),n.jsxs("div",{className:"hero-info",children:[n.jsx("h1",{children:r.name}),n.jsx("p",{className:"hero-sub",children:r.program}),n.jsxs("div",{className:"hero-meta",children:[n.jsxs("span",{className:"badge id",children:["ID: ",r.id]}),n.jsxs("span",{className:"badge status",children:["● ",r.status]})]})]}),n.jsx("button",{className:"edit-btn",children:"Edit Profile"})]}),n.jsx("div",{className:"stats-grid",children:d.map((h,m)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{className:"stat-label",children:h.label}),n.jsx("span",{className:"stat-value",children:h.value})]},m))}),n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card glass",children:[n.jsx("h2",{children:"Academic Information"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Institution"}),n.jsx("span",{children:r.institution})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Program"}),n.jsx("span",{children:r.program})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Year"}),n.jsx("span",{children:r.year})]}),n.jsxs("div",{className:"info-row highlight",children:[n.jsx("span",{children:"CGPA"}),n.jsx("span",{children:r.cgpa})]})]}),n.jsxs("div",{className:"info-card glass",children:[n.jsx("h2",{children:"Contact Information"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Email"}),n.jsx("span",{children:r.email})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Phone"}),n.jsx("span",{children:r.phone})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Role"}),n.jsx("span",{children:r.role})]})]}),n.jsxs("div",{className:"info-card glass",children:[n.jsx("h2",{children:"System Status"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Account Status"}),n.jsx("span",{className:"status-active",children:"Active"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Last Login"}),n.jsx("span",{children:"Today, 09:42 AM"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Platform"}),n.jsx("span",{children:"Studatrix v1.0"})]})]})]}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Recent Activity"}),o.map((h,m)=>n.jsxs("div",{className:"activity-item",children:[n.jsx("span",{className:"dot"}),h]},m))]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Achievements"}),u.map((h,m)=>n.jsxs("div",{className:"achievement",children:["🏆 ",h]},m))]})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"View Academic Records"}),n.jsx("button",{className:"action-btn",children:"Check Attendance"}),n.jsx("button",{className:"action-btn",children:"Update Profile"}),n.jsx("button",{className:"action-btn",children:"Contact Support"})]})]}),n.jsx("style",{children:`

.profile-page {
  animation: fadeIn 0.6s ease;
}

.glass {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* HERO */

.profile-hero {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  margin-bottom: 25px;
  position: relative;
}

.avatar-ring {
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg,#2563eb,#06b6d4,#2563eb);
  animation: rotate 6s linear infinite;
}

.avatar {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #2563eb;
}

.edit-btn {
  position: absolute;
  right: 25px;
  top: 25px;
  background: linear-gradient(90deg,#2563eb,#06b6d4);
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
}

/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.stat-card {
  padding: 18px;
  text-align: center;
}

.stat-label {
  color: #64748b;
  font-size: 13px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #2563eb;
}

/* INFO */

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.info-card {
  padding: 25px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

/* LOWER */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.panel {
  padding: 25px;
}

.activity-item {
  padding: 8px 0;
}

.dot {
  width: 8px;
  height: 8px;
  background: #2563eb;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.achievement {
  padding: 8px 0;
}

/* ACTIONS */

.actions {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 15px;
}

.action-btn {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
}

/* ANIMATIONS */

@keyframes fadeIn {
  from {opacity:0;transform:translateY(15px);}
  to {opacity:1;transform:translateY(0);}
}

@keyframes rotate {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

      `})]})}function l0(){const r=[{sem:"Semester 1",gpa:9.76},{sem:"Semester 2",gpa:8.45},{sem:"Semester 3",gpa:8.62},{sem:"Semester 4",gpa:8.74}],d=[{name:"Data Structures",marks:91},{name:"Operating Systems",marks:84},{name:"Database Systems",marks:91},{name:"Computer Networks",marks:79},{name:"Software Engineering",marks:86}];return n.jsxs("div",{className:"records-page",children:[n.jsxs("div",{className:"cgpa-card",children:[n.jsx("h2",{children:"Current CGPA"}),n.jsx("div",{className:"cgpa-number",children:9.76}),n.jsx("p",{children:"Excellent Academic Standing"})]}),n.jsx("div",{className:"semester-grid",children:r.map((u,h)=>n.jsxs("div",{className:"semester-card",children:[n.jsx("h3",{children:u.sem}),n.jsx("div",{className:"semester-gpa",children:u.gpa})]},h))}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{children:"Subject Performance"}),d.map((u,h)=>n.jsxs("div",{className:"subject-row",children:[n.jsx("span",{children:u.name}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${u.marks}%`}})}),n.jsxs("span",{className:"marks",children:[u.marks,"%"]})]},h))]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h3",{children:"Academic Summary"}),n.jsx("p",{children:"Total Credits Earned: 96"}),n.jsx("p",{children:"Academic Standing: Excellent"}),n.jsx("p",{children:"Last Semester GPA: 8.74"})]}),n.jsx("style",{children:`

        .records-page {

          animation: fadeIn 0.5s ease;

        }


        .cgpa-card {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 30px;

          border-radius: 18px;

          margin-bottom: 25px;

          text-align: center;

          box-shadow: 0 15px 40px rgba(37,99,235,0.3);

        }


        .cgpa-number {

          font-size: 48px;

          font-weight: bold;

          margin: 10px 0;

        }


        .semester-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .semester-card {

          background: white;

          padding: 20px;

          border-radius: 14px;

          text-align: center;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .semester-card:hover {

          transform: translateY(-5px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .semester-gpa {

          font-size: 28px;

          font-weight: bold;

          color: #2563eb;

        }


        .card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          margin-bottom: 25px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        .subject-row {

          display: grid;

          grid-template-columns: 200px 1fr 60px;

          align-items: center;

          gap: 15px;

          padding: 10px 0;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .marks {

          font-weight: 600;

          color: #2563eb;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function n0(){const d=[{name:"Data Structures",attendance:95},{name:"Operating Systems",attendance:89},{name:"Database Systems",attendance:93},{name:"Computer Networks",attendance:87},{name:"Software Engineering",attendance:96}],o=h=>h>=90?"Excellent":h>=75?"Good":"Low",u=h=>h>=90?"#22c55e":h>=75?"#f59e0b":"#ef4444";return n.jsxs("div",{className:"attendance-page",children:[n.jsxs("div",{className:"overall-card",children:[n.jsx("h2",{children:"Overall Attendance"}),n.jsx("div",{className:"circle-wrapper",children:n.jsx("div",{className:"circle",style:{background:`conic-gradient(
                #2563eb ${92*3.6}deg,
                #e5e7eb 0deg
              )`},children:n.jsxs("div",{className:"circle-inner",children:[92,"%"]})})}),n.jsx("p",{className:"status-text",children:"Excellent Attendance Record"})]}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{children:"Subject-wise Attendance"}),d.map((h,m)=>n.jsxs("div",{className:"subject-row",children:[n.jsxs("div",{className:"subject-info",children:[n.jsx("span",{className:"subject-name",children:h.name}),n.jsx("span",{className:"subject-status",style:{color:u(h.attendance)},children:o(h.attendance)})]}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${h.attendance}%`,background:u(h.attendance)}})}),n.jsxs("span",{className:"percentage",children:[h.attendance,"%"]})]},m))]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h3",{children:"Attendance Summary"}),n.jsx("p",{children:"Total Classes Attended: 276"}),n.jsx("p",{children:"Total Classes Conducted: 300"}),n.jsx("p",{children:"Minimum Required: 75%"})]}),n.jsx("style",{children:`

        .attendance-page {

          animation: fadeIn 0.5s ease;

        }


        .overall-card {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 30px;

          border-radius: 18px;

          margin-bottom: 25px;

          text-align: center;

          box-shadow: 0 15px 40px rgba(37,99,235,0.3);

        }


        .circle-wrapper {

          display: flex;

          justify-content: center;

          margin: 20px 0;

        }


        .circle {

          width: 140px;

          height: 140px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          animation: rotateIn 1s ease;

        }


        .circle-inner {

          width: 110px;

          height: 110px;

          background: white;

          color: #2563eb;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 24px;

          font-weight: bold;

        }


        .status-text {

          font-weight: 500;

        }


        .card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          margin-bottom: 25px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        .subject-row {

          display: grid;

          grid-template-columns: 200px 1fr 60px;

          align-items: center;

          gap: 15px;

          padding: 12px 0;

        }


        .subject-info {

          display: flex;

          flex-direction: column;

        }


        .subject-name {

          font-weight: 500;

        }


        .subject-status {

          font-size: 12px;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .percentage {

          font-weight: 600;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes rotateIn {

          from {
            transform: rotate(-90deg);
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function i0(){const u=Math.floor(79.16666666666666),h=[{date:"12 Jan 2026",amount:2e4,method:"UPI",status:"Successful"},{date:"10 Oct 2025",amount:15e3,method:"Card",status:"Successful"},{date:"15 Jul 2025",amount:12500,method:"Net Banking",status:"Successful"}];return n.jsxs("div",{className:"fee-page",children:[n.jsxs("div",{className:"fee-hero",children:[n.jsx("h2",{children:"Fee Status"}),n.jsxs("div",{className:"fee-amount",children:["₹",12500 .toLocaleString()]}),n.jsx("p",{children:"Outstanding Balance"}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${u}%`}})}),n.jsxs("span",{className:"progress-text",children:[u,"% Paid"]}),n.jsx("button",{className:"pay-button",children:"Pay Now"})]}),n.jsxs("div",{className:"summary-grid",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("h3",{children:"Total Fee"}),n.jsxs("span",{children:["₹",6e4.toLocaleString()]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h3",{children:"Amount Paid"}),n.jsxs("span",{className:"paid",children:["₹",47500 .toLocaleString()]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h3",{children:"Remaining Due"}),n.jsxs("span",{className:"due",children:["₹",12500 .toLocaleString()]})]})]}),n.jsxs("div",{className:"history-card",children:[n.jsx("h2",{children:"Payment History"}),n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Date"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Method"}),n.jsx("th",{children:"Status"})]})}),n.jsx("tbody",{children:h.map((m,y)=>n.jsxs("tr",{children:[n.jsx("td",{children:m.date}),n.jsxs("td",{children:["₹",m.amount.toLocaleString()]}),n.jsx("td",{children:m.method}),n.jsx("td",{className:"success",children:m.status})]},y))})]})]}),n.jsx("style",{children:`

        .fee-page {

          animation: fadeIn 0.5s ease;

        }


        .fee-hero {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 30px;

          border-radius: 18px;

          margin-bottom: 25px;

          box-shadow: 0 15px 40px rgba(37,99,235,0.3);

        }


        .fee-amount {

          font-size: 42px;

          font-weight: bold;

          margin: 10px 0;

        }


        .progress-container {

          background: rgba(255,255,255,0.3);

          height: 12px;

          border-radius: 10px;

          margin: 15px 0;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          background: white;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .progress-text {

          font-size: 14px;

        }


        .pay-button {

          margin-top: 15px;

          background: white;

          color: #2563eb;

          border: none;

          padding: 12px 24px;

          border-radius: 12px;

          cursor: pointer;

          font-weight: 600;

          transition: 0.3s;

        }


        .pay-button:hover {

          transform: scale(1.05);

        }


        .summary-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .summary-card:hover {

          transform: translateY(-5px);

        }


        .paid {

          color: #22c55e;

          font-weight: bold;

        }


        .due {

          color: #ef4444;

          font-weight: bold;

        }


        .history-card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

        }


        table {

          width: 100%;

          border-collapse: collapse;

          margin-top: 15px;

        }


        th, td {

          padding: 12px;

          text-align: left;

          border-bottom: 1px solid #e5e7eb;

        }


        .success {

          color: #22c55e;

          font-weight: 500;

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function s0(){const r=[{name:"Data Structures & Algorithms - I",instructor:"Dr. Surya Kiran Chebrolu",credits:4,progress:85,status:"Active",color:"#2563eb"},{name:"Frontend Development Frameworks and UI Engineering",instructor:"Dr. Suneetha Bulla",credits:3,progress:72,status:"Active",color:"#06b6d4"},{name:"Mathematics for AI",instructor:"Prof. Ankita Tiwari",credits:4,progress:90,status:"Active",color:"#22c55e"},{name:"Digital Design and Computer Architecture",instructor:"Prof. Lakshmana Kumar",credits:3,progress:100,status:"Completed",color:"#8b5cf6"}];return n.jsxs("div",{className:"courses-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"My Courses"}),n.jsx("p",{children:"Manage and track your enrolled courses"})]}),n.jsx("div",{className:"course-grid",children:r.map((d,o)=>n.jsxs("div",{className:"course-card",children:[n.jsxs("div",{className:"course-top",children:[n.jsx("h3",{children:d.name}),n.jsx("span",{className:"status",style:{background:d.status==="Completed"?"#22c55e":"#2563eb"},children:d.status})]}),n.jsxs("p",{className:"instructor",children:["Instructor: ",d.instructor]}),n.jsxs("p",{className:"credits",children:["Credits: ",d.credits]}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${d.progress}%`,background:d.color}})}),n.jsxs("span",{className:"progress-text",children:[d.progress,"% Complete"]}),n.jsx("button",{className:"view-button",children:"View Course"})]},o))}),n.jsx("style",{children:`

        .courses-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .course-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

          gap: 20px;

        }


        .course-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .course-card:hover {

          transform: translateY(-8px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .course-top {

          display: flex;

          justify-content: space-between;

          align-items: center;

        }


        .status {

          color: white;

          padding: 4px 10px;

          border-radius: 8px;

          font-size: 12px;

        }


        .instructor,
        .credits {

          margin-top: 8px;

          color: #64748b;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          margin-top: 15px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .progress-text {

          font-size: 14px;

          margin-top: 5px;

          display: block;

        }


        .view-button {

          margin-top: 15px;

          width: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border: none;

          color: white;

          padding: 10px;

          border-radius: 10px;

          cursor: pointer;

          font-weight: 500;

          transition: 0.3s;

        }


        .view-button:hover {

          transform: scale(1.03);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function r0(){const r=[{title:"Data Structures Assignment 4",course:"Data Structures",deadline:"28 Feb 2026",status:"Pending",progress:60},{title:"Mathematics for AI Problem Set 2",course:"Mathematics for AI",deadline:"20 Feb 2026",status:"Submitted",progress:100},{title:"Digital Design Lab Exercise 3",course:"Digital Design and Computer Architecture",deadline:"15 Feb 2026",status:"Overdue",progress:40},{title:"React Project Milestone 1",course:"Frontend Development Frameworks and UI Engineering",deadline:"5 Mar 2026",status:"Pending",progress:25}],d=o=>{if(o==="Submitted")return"#22c55e";if(o==="Pending")return"#f59e0b";if(o==="Overdue")return"#ef4444"};return n.jsxs("div",{className:"assignments-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"Assignments"}),n.jsx("p",{children:"Track, manage, and submit your academic assignments"})]}),n.jsxs("div",{className:"summary-grid",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("span",{children:"Pending"}),n.jsx("h2",{children:"2"})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("span",{children:"Submitted"}),n.jsx("h2",{children:"1"})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("span",{children:"Overdue"}),n.jsx("h2",{children:"1"})]})]}),n.jsx("div",{className:"assignment-grid",children:r.map((o,u)=>n.jsxs("div",{className:"assignment-card",children:[n.jsxs("div",{className:"card-top",children:[n.jsx("h3",{children:o.title}),n.jsx("span",{className:"status",style:{background:d(o.status)},children:o.status})]}),n.jsx("p",{className:"course",children:o.course}),n.jsxs("p",{className:"deadline",children:["Deadline: ",o.deadline]}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${o.progress}%`,background:d(o.status)}})}),n.jsxs("span",{className:"progress-text",children:[o.progress,"% Ready"]}),n.jsx("button",{className:"action-button",children:o.status==="Submitted"?"View Submission":"Submit Assignment"})]},u))}),n.jsx("style",{children:`

        .assignments-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .summary-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(200px,1fr));

          gap: 20px;

          margin-bottom: 25px;

        }


        .summary-card {

          background: white;

          padding: 20px;

          border-radius: 14px;

          text-align: center;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .summary-card:hover {

          transform: translateY(-5px);

        }


        .assignment-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));

          gap: 20px;

        }


        .assignment-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .assignment-card:hover {

          transform: translateY(-8px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .card-top {

          display: flex;

          justify-content: space-between;

          align-items: center;

        }


        .status {

          color: white;

          padding: 4px 10px;

          border-radius: 8px;

          font-size: 12px;

        }


        .course {

          margin-top: 10px;

          color: #64748b;

        }


        .deadline {

          font-size: 14px;

          margin-top: 5px;

        }


        .progress-container {

          background: #e5e7eb;

          height: 10px;

          border-radius: 10px;

          margin-top: 15px;

          overflow: hidden;

        }


        .progress-bar {

          height: 100%;

          border-radius: 10px;

          animation: grow 1s ease;

        }


        .progress-text {

          font-size: 14px;

          margin-top: 5px;

          display: block;

        }


        .action-button {

          margin-top: 15px;

          width: 100%;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border: none;

          color: white;

          padding: 10px;

          border-radius: 10px;

          cursor: pointer;

          font-weight: 500;

          transition: 0.3s;

        }


        .action-button:hover {

          transform: scale(1.03);

        }


        @keyframes grow {

          from {
            width: 0;
          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function c0(){const r=[{day:"Monday",classes:[{subject:"Data Structures & Algorithms - I",time:"7:00 AM - 8:50 AM",room:"Room C301"},{subject:"Frontend Development Frameworks and UI Engineering",time:"9:20 AM - 11:00 AM",room:"Room C301"}]},{day:"Tuesday",classes:[{subject:"Database Systems",time:"10:00 AM - 11:30 AM",room:"Room C301"},{subject:"Computer Networks",time:"2:00 PM - 3:30 PM",room:"Room C301"}]},{day:"Wednesday",classes:[{subject:"Software Engineering",time:"9:00 AM - 10:30 AM",room:"Room C301"}]},{day:"Thursday",classes:[{subject:"Operating Systems Lab",time:"1:00 PM - 3:00 PM",room:"Lab 3"}]},{day:"Friday",classes:[{subject:"Database Lab",time:"10:00 AM - 12:00 PM",room:"Lab 1"}]}];return n.jsxs("div",{className:"schedule-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"Weekly Schedule"}),n.jsx("p",{children:"Manage and view your academic timetable"})]}),n.jsxs("div",{className:"today-card",children:[n.jsx("h3",{children:"Next Class"}),n.jsxs("div",{className:"today-info",children:[n.jsx("span",{className:"subject",children:"Data Structures"}),n.jsx("span",{className:"time",children:"Today — 9:00 AM"})]})]}),n.jsx("div",{className:"week-grid",children:r.map((d,o)=>n.jsxs("div",{className:"day-card",children:[n.jsx("h3",{className:"day-title",children:d.day}),d.classes.map((u,h)=>n.jsxs("div",{className:"class-card",children:[n.jsx("span",{className:"class-subject",children:u.subject}),n.jsx("span",{className:"class-time",children:u.time}),n.jsx("span",{className:"class-room",children:u.room})]},h))]},o))}),n.jsx("style",{children:`

        .schedule-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .today-card {

          background: linear-gradient(
            135deg,
            #2563eb,
            #06b6d4
          );

          color: white;

          padding: 20px;

          border-radius: 16px;

          margin-bottom: 25px;

          box-shadow: 0 10px 30px rgba(37,99,235,0.3);

          animation: glow 2s infinite alternate;

        }


        .today-info {

          display: flex;

          justify-content: space-between;

          margin-top: 10px;

        }


        .subject {

          font-weight: 600;

          font-size: 18px;

        }


        .time {

          opacity: 0.9;

        }


        .week-grid {

          display: grid;

          grid-template-columns: repeat(auto-fit,minmax(250px,1fr));

          gap: 20px;

        }


        .day-card {

          background: white;

          padding: 20px;

          border-radius: 16px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .day-card:hover {

          transform: translateY(-6px);

          box-shadow: 0 20px 40px rgba(0,0,0,0.08);

        }


        .day-title {

          margin-bottom: 15px;

          color: #2563eb;

        }


        .class-card {

          background: #f1f5f9;

          padding: 12px;

          border-radius: 10px;

          margin-bottom: 10px;

          display: flex;

          flex-direction: column;

          transition: 0.3s;

        }


        .class-card:hover {

          background: #e0ecff;

          transform: scale(1.02);

        }


        .class-subject {

          font-weight: 600;

        }


        .class-time {

          font-size: 14px;

          color: #64748b;

        }


        .class-room {

          font-size: 13px;

          color: #94a3b8;

        }


        @keyframes glow {

          from {

            box-shadow: 0 10px 30px rgba(37,99,235,0.3);

          }

          to {

            box-shadow: 0 15px 40px rgba(6,182,212,0.5);

          }

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function u0(){const[r,d]=T.useState(!0),[o,u]=T.useState(!1);return n.jsxs("div",{className:"settings-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"Account Settings"}),n.jsx("p",{children:"Manage your profile, security, and preferences"})]}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{children:"Profile Information"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Full Name"}),n.jsx("input",{type:"text",defaultValue:"Tejes J"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email"}),n.jsx("input",{type:"email",defaultValue:"jujjavaraputejes@gmail.com"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone"}),n.jsx("input",{type:"text",defaultValue:"+91 78936 23583"})]}),n.jsx("button",{className:"save-button",children:"Save Changes"})]}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{children:"Change Password"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Current Password"}),n.jsx("input",{type:"password"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"New Password"}),n.jsx("input",{type:"password"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Confirm Password"}),n.jsx("input",{type:"password"})]}),n.jsx("button",{className:"save-button",children:"Update Password"})]}),n.jsxs("div",{className:"card",children:[n.jsx("h2",{children:"Preferences"}),n.jsxs("div",{className:"toggle-row",children:[n.jsx("span",{children:"Email Notifications"}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:r,onChange:()=>d(!r)}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"toggle-row",children:[n.jsx("span",{children:"Dark Mode"}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:o,onChange:()=>u(!o)}),n.jsx("span",{className:"slider"})]})]})]}),n.jsxs("div",{className:"card security-card",children:[n.jsx("h2",{children:"Account Security"}),n.jsxs("p",{children:["Status: ",n.jsx("span",{className:"secure",children:"Secure"})]}),n.jsx("button",{className:"danger-button",children:"Logout from All Devices"})]}),n.jsx("style",{children:`

        .settings-page {

          animation: fadeIn 0.5s ease;

        }


        .header {

          margin-bottom: 25px;

        }


        .header h1 {

          font-size: 32px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

        }


        .header p {

          color: #64748b;

        }


        .card {

          background: white;

          padding: 25px;

          border-radius: 16px;

          margin-bottom: 20px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.05);

          transition: 0.3s;

        }


        .card:hover {

          transform: translateY(-5px);

        }


        .form-group {

          display: flex;

          flex-direction: column;

          margin-bottom: 15px;

        }


        label {

          font-size: 14px;

          margin-bottom: 5px;

        }


        input {

          padding: 10px;

          border-radius: 8px;

          border: 1px solid #e5e7eb;

        }


        input:focus {

          outline: none;

          border-color: #2563eb;

        }


        .save-button {

          background: linear-gradient(
            90deg,
            #2563eb,
            #06b6d4
          );

          border: none;

          color: white;

          padding: 10px 20px;

          border-radius: 10px;

          cursor: pointer;

          margin-top: 10px;

        }


        .toggle-row {

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin: 10px 0;

        }


        .switch {

          position: relative;

          display: inline-block;

          width: 50px;

          height: 24px;

        }


        .switch input {

          opacity: 0;

          width: 0;

          height: 0;

        }


        .slider {

          position: absolute;

          cursor: pointer;

          top: 0;

          left: 0;

          right: 0;

          bottom: 0;

          background: #ccc;

          border-radius: 24px;

          transition: 0.3s;

        }


        .slider:before {

          position: absolute;

          content: "";

          height: 18px;

          width: 18px;

          left: 3px;

          bottom: 3px;

          background: white;

          border-radius: 50%;

          transition: 0.3s;

        }


        input:checked + .slider {

          background: #2563eb;

        }


        input:checked + .slider:before {

          transform: translateX(26px);

        }


        .secure {

          color: #22c55e;

          font-weight: 600;

        }


        .danger-button {

          margin-top: 10px;

          background: #ef4444;

          border: none;

          color: white;

          padding: 10px 20px;

          border-radius: 10px;

          cursor: pointer;

        }


        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        `})]})}function d0(){const[r,d]=T.useState(!1),o=ra(),u={name:"System Administrator",role:"Administrator",initials:"SA"},h=()=>{localStorage.removeItem("role"),localStorage.removeItem("currentUser"),o("/")};return n.jsxs("div",{className:"layout",children:[n.jsxs("aside",{className:`sidebar ${r?"collapsed":""}`,children:[n.jsxs("div",{children:[n.jsxs("div",{className:"brand",children:[n.jsx("div",{className:"brand-icon",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),!r&&n.jsxs("div",{className:"brand-text",children:["Studatrix",n.jsx("span",{children:"Admin Control Panel"})]})]}),n.jsxs("nav",{className:"nav",children:[n.jsx(Ne,{to:"",end:!0,className:"nav-item",children:"Dashboard"}),n.jsx(Ne,{to:"profile",className:"nav-item",children:"Profile"}),n.jsx(Ne,{to:"students",className:"nav-item",children:"Manage Students"}),n.jsx(Ne,{to:"teachers",className:"nav-item",children:"Manage Teachers"}),n.jsx(Ne,{to:"courses",className:"nav-item",children:"Courses"}),n.jsx(Ne,{to:"reports",className:"nav-item",children:"Reports"}),n.jsx(Ne,{to:"settings",className:"nav-item",children:"Settings"})]})]}),n.jsxs("div",{className:"sidebar-bottom",children:[n.jsxs("button",{className:"logout-btn",onClick:h,children:["⎋ ",!r&&"Logout"]}),n.jsx("button",{className:"collapse-btn",onClick:()=>d(!r),children:r?"→":"←"})]})]}),n.jsxs("div",{className:"main",children:[n.jsxs("header",{className:"header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"page-title",children:"Admin Dashboard"}),n.jsx("div",{className:"breadcrumb",children:"Studatrix • System Administration Panel"})]}),n.jsxs("div",{className:"header-right",children:[n.jsxs("div",{className:"status",children:[n.jsx("span",{className:"status-dot"}),"System Secure"]}),n.jsx("div",{className:"divider"}),n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"avatar",children:u.initials}),!r&&n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-name",children:u.name}),n.jsx("span",{className:"user-role",children:u.role})]})]})]})]}),n.jsx("main",{className:"content",children:n.jsx(hs,{})}),n.jsx("footer",{className:"footer",children:"Studatrix © 2026 • Admin Intelligence Platform"})]}),n.jsx("style",{children:`

* {
  box-sizing: border-box;
  font-family: Inter, system-ui;
}

.layout {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg,#e0f2fe,#f0f9ff);
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg,#1e3a8a,#2563eb);
  color: white;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: 4px 0 25px rgba(0,0,0,0.1);
}

.sidebar.collapsed {
  width: 80px;
}

.brand {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;
}

.brand-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.brand-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-text {
  font-weight: 600;
  font-size: 16px;
}

.brand-text span {
  display: block;
  font-size: 11px;
  opacity: 0.8;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  padding: 12px 15px;
  border-radius: 14px;
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.nav-item.active {
  background: linear-gradient(90deg,#06b6d4,#38bdf8);
}

.logout-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg,#ef4444,#dc2626);
  border: none;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.logout-btn:hover {
  box-shadow: 0 15px 35px rgba(239,68,68,0.45);
}

.collapse-btn {
  width: 100%;
  padding: 10px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.page-title {
  font-size: 22px;
  font-weight: 600;
  color: #1e3a8a;
}

.breadcrumb {
  font-size: 12px;
  color: #64748b;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 22px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #2563eb;
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
}

.divider {
  width: 1px;
  height: 30px;
  background: rgba(0,0,0,0.1);
}

.user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 13px;
  font-weight: 600;
}

.user-role {
  font-size: 11px;
  color: #64748b;
}

.content {
  flex: 1;
  padding: 45px;
}

.footer {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64748b;
  font-size: 13px;
  border-top: 1px solid rgba(0,0,0,0.05);
  background: rgba(255,255,255,0.65);
}

      `})]})}function o0(){const r=[{label:"Total Scholars",value:"12,458",icon:"🎓"},{label:"Active Teachers",value:"842",icon:"👩‍🏫"},{label:"Courses Running",value:"120",icon:"📚"},{label:"System Alerts",value:"3",icon:"⚠️"}],d=["New scholar registered in Computer Science","Teacher assigned to Mathematics","Course 'Data Structures' updated","System backup completed successfully","Parent account linked to scholar"],o=[{name:"Arjun Reddy",role:"Scholar",time:"2 mins ago"},{name:"Dr. Suneetha Bulla",role:"Educator",time:"10 mins ago"},{name:"Tejes J",role:"Scholar",time:"25 mins ago"},{name:"Veera Raju",role:"Parent",time:"1 hour ago"}];return n.jsxs("div",{className:"admin-home",children:[n.jsxs("div",{className:"overview-header",children:[n.jsx("h1",{children:"System Overview"}),n.jsx("p",{children:"Real-time platform insights and academic statistics"})]}),n.jsx("div",{className:"stats-grid",children:r.map((u,h)=>n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:u.icon}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-label",children:u.label}),n.jsx("span",{className:"stat-value",children:u.value})]})]},h))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel",children:[n.jsx("div",{className:"panel-title",children:"Recent Activity"}),n.jsx("div",{className:"panel-body",children:d.map((u,h)=>n.jsxs("div",{className:"activity-item",children:[n.jsx("span",{className:"activity-dot"}),u]},h))})]}),n.jsxs("div",{className:"panel",children:[n.jsx("div",{className:"panel-title",children:"System Health"}),n.jsxs("div",{className:"panel-body",children:[n.jsxs("div",{className:"health-item",children:["Server Status:",n.jsx("span",{className:"healthy",children:" Operational"})]}),n.jsxs("div",{className:"health-item",children:["Database:",n.jsx("span",{className:"healthy",children:" Stable"})]}),n.jsxs("div",{className:"health-item",children:["Security:",n.jsx("span",{className:"healthy",children:" Secure"})]}),n.jsxs("div",{className:"health-item",children:["Backup:",n.jsx("span",{className:"healthy",children:" Active"})]})]})]})]}),n.jsxs("div",{className:"panel full-width",children:[n.jsx("div",{className:"panel-title",children:"Recent Registrations"}),n.jsx("div",{className:"panel-body",children:n.jsxs("table",{className:"table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Role"}),n.jsx("th",{children:"Time"})]})}),n.jsx("tbody",{children:o.map((u,h)=>n.jsxs("tr",{children:[n.jsx("td",{children:u.name}),n.jsx("td",{children:u.role}),n.jsx("td",{children:u.time})]},h))})]})})]}),n.jsx("style",{children:`

.admin-home {
  display: flex;
  flex-direction: column;
  gap: 28px;
  animation: fadeIn 0.35s ease;
}


/* HEADER */

.overview-header {

  padding: 28px 30px;

  border-radius: 22px;

  background: linear-gradient(
    135deg,
    rgba(37,99,235,0.08),
    rgba(6,182,212,0.08)
  );

  backdrop-filter: blur(10px);

  border: 1px solid rgba(37,99,235,0.15);

}

.overview-header h1 {

  font-size: 30px;
  font-weight: 600;

  color: #1e3a8a;

  margin-bottom: 6px;

}

.overview-header p {

  color: #64748b;
  font-size: 14px;

}


/* STATS */

.stats-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 28px;

}

.stat-card {

  position: relative;

  display: flex;
  align-items: center;

  gap: 20px;

  padding: 26px;

  border-radius: 24px;

  background: rgba(255,255,255,0.85);

  backdrop-filter: blur(14px);

  border: 1px solid rgba(0,0,0,0.05);

  box-shadow: 0 15px 35px rgba(0,0,0,0.06);

  transition: all 0.25s ease;

  overflow: hidden; /* FIXES LINE ALIGNMENT */

}

.stat-card:hover {
  transform: translateY(-5px);
}


/* PERFECTLY ALIGNED ACCENT LINE */

.stat-card::before {

  content: "";

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 4px;

  border-radius: 24px 24px 0 0;

  background: linear-gradient(
    90deg,
    #2563eb,
    #06b6d4
  );

}


.stat-icon {

  width: 60px;
  height: 60px;

  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;

  background: linear-gradient(
    135deg,
    #2563eb,
    #06b6d4
  );

  box-shadow: 0 10px 25px rgba(37,99,235,0.35);

}

.stat-label {

  font-size: 14px;
  color: #64748b;

}

.stat-value {

  font-size: 28px;
  font-weight: 700;

  color: #1e3a8a;

}


/* PANELS */

.lower-grid {

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 28px;

}

.panel {

  background: rgba(255,255,255,0.85);

  backdrop-filter: blur(14px);

  border-radius: 22px;

  border: 1px solid rgba(0,0,0,0.05);

  box-shadow: 0 15px 35px rgba(0,0,0,0.06);

}

.full-width {
  width: 100%;
}

.panel-title {

  padding: 18px 24px;

  font-size: 18px;

  font-weight: 600;

  color: #1e3a8a;

  border-bottom: 1px solid rgba(0,0,0,0.05);

}

.panel-body {
  padding: 20px 24px;
}


/* ACTIVITY */

.activity-item {

  padding: 8px 0;

  font-size: 14px;

  color: #334155;

}

.activity-dot {

  width: 8px;
  height: 8px;

  border-radius: 50%;

  display: inline-block;

  margin-right: 10px;

  background: linear-gradient(90deg,#2563eb,#06b6d4);

}


/* HEALTH */

.health-item {
  padding: 8px 0;
}

.healthy {
  color: #22c55e;
  font-weight: 600;
}


/* TABLE */

.table {

  width: 100%;

  border-collapse: collapse;

}

.table th {

  text-align: left;

  padding: 12px 10px;

  color: #64748b;

}

.table td {

  padding: 12px 10px;

  border-top: 1px solid rgba(0,0,0,0.05);

}


/* ANIMATION */

@keyframes fadeIn {

  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

      `})]})}function f0(){const[r,d]=T.useState(!1),[o,u]=T.useState({name:"System Administrator",email:"admin@studatrix.com",role:"Administrator",department:"System Management",joined:"January 2024"});T.useEffect(()=>{const N=localStorage.getItem("adminProfile");N&&u(JSON.parse(N))},[]);const h=N=>{u({...o,[N.target.name]:N.target.value})},m=()=>{localStorage.setItem("adminProfile",JSON.stringify(o)),d(!1)},y=()=>{d(!1)};return n.jsxs("div",{className:"admin-profile",children:[n.jsxs("div",{className:"profile-header-top",children:[n.jsx("h1",{children:"Admin Profile"}),n.jsx("p",{children:"Manage your administrative account details"})]}),n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-header",children:[n.jsx("div",{className:"avatar",children:"SA"}),n.jsxs("div",{children:[n.jsx("h2",{children:o.name}),n.jsx("span",{className:"role-tag",children:o.role})]})]}),n.jsx("div",{className:"details-grid",children:r?n.jsxs(n.Fragment,{children:[n.jsx(rs,{label:"Name",name:"name",value:o.name,onChange:h}),n.jsx(rs,{label:"Email",name:"email",value:o.email,onChange:h}),n.jsx(rs,{label:"Department",name:"department",value:o.department,onChange:h}),n.jsx(rs,{label:"Joined",name:"joined",value:o.joined,onChange:h})]}):n.jsxs(n.Fragment,{children:[n.jsx(ss,{label:"Email",value:o.email}),n.jsx(ss,{label:"Department",value:o.department}),n.jsx(ss,{label:"Joined",value:o.joined}),n.jsx(ss,{label:"Access Level",value:"Full System Access"})]})}),n.jsx("div",{className:"btn-group",children:r?n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"save-btn",onClick:m,children:"Save Changes"}),n.jsx("button",{className:"cancel-btn",onClick:y,children:"Cancel"})]}):n.jsx("button",{className:"edit-btn",onClick:()=>d(!0),children:"Edit Profile"})})]}),n.jsx("style",{children:`

      .admin-profile {
        animation: fadeIn 0.3s ease;
      }

      .profile-header-top {
        margin-bottom: 30px;
      }

      .profile-header-top h1 {
        font-size: 28px;
        font-weight: 600;
        color: #1e3a8a;
        margin-bottom: 6px;
      }

      .profile-header-top p {
        font-size: 14px;
        color: #64748b;
      }

      .profile-card {
        padding: 35px;
        border-radius: 22px;
        backdrop-filter: blur(12px);
        background: rgba(255,255,255,0.75);
        box-shadow: 0 15px 40px rgba(0,0,0,0.06);
        transition: 0.3s ease;
      }

      .profile-header {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-bottom: 35px;
      }

      .avatar {
        width: 90px;
        height: 90px;
        border-radius: 20px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-size: 30px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 12px 30px rgba(37,99,235,0.3);
      }

      .role-tag {
        display: inline-block;
        margin-top: 6px;
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 12px;
        background: rgba(37,99,235,0.1);
        color: #2563eb;
        font-weight: 500;
      }

      .details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(230px,1fr));
        gap: 22px;
        margin-bottom: 30px;
      }

      .detail-item {
        background: white;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        transition: 0.2s ease;
      }

      .detail-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.08);
      }

      .detail-item span {
        display: block;
        font-size: 13px;
        color: #64748b;
        margin-bottom: 8px;
      }

      .detail-item strong {
        font-size: 15px;
        color: #1e3a8a;
      }

      input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid #e5e7eb;
        outline: none;
        font-size: 14px;
        transition: 0.2s;
      }

      input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      }

      .btn-group {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .edit-btn, .save-btn {
        padding: 12px 26px;
        border: none;
        border-radius: 14px;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .edit-btn:hover, .save-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(37,99,235,0.4);
      }

      .cancel-btn {
        padding: 12px 26px;
        border: none;
        border-radius: 14px;
        background: #e5e7eb;
        cursor: pointer;
        font-weight: 500;
        transition: 0.2s;
      }

      .cancel-btn:hover {
        background: #d1d5db;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }

      `})]})}function ss({label:r,value:d}){return n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{children:r}),n.jsx("strong",{children:d})]})}function rs({label:r,name:d,value:o,onChange:u}){return n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{children:r}),n.jsx("input",{name:d,value:o,onChange:u})]})}function h0(){const[r,d]=T.useState([{id:1,name:"Rahul Kumar",email:"rahul@gmail.com",course:"CSE"},{id:2,name:"Ananya Reddy",email:"ananya@gmail.com",course:"ECE"}]),[o,u]=T.useState(!1),[h,m]=T.useState(null),[y,N]=T.useState(""),[b,x]=T.useState({name:"",email:"",course:""}),R=S=>{x({...b,[S.target.name]:S.target.value})},w=()=>{if(h)d(r.map(S=>S.id===h?{...S,...b}:S));else{const S={id:Date.now(),...b};d([...r,S])}u(!1),m(null),x({name:"",email:"",course:""})},H=S=>{m(S.id),x(S),u(!0)},Z=S=>{d(r.filter(G=>G.id!==S))},X=r.filter(S=>S.name.toLowerCase().includes(y.toLowerCase())||S.course.toLowerCase().includes(y.toLowerCase())),L={};return r.forEach(S=>{L[S.course]=(L[S.course]||0)+1}),n.jsxs("div",{className:"manage-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Manage Students"}),n.jsx("button",{className:"primary-btn",onClick:()=>u(!0),children:"+ Add Student"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Students"}),n.jsx("strong",{children:"1,242"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"CSE Students"}),n.jsx("strong",{children:"789"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"ECE Students"}),n.jsx("strong",{children:"453"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Courses"}),n.jsx("strong",{children:Object.keys(L).length})]})]}),n.jsx("div",{className:"glass search-card",children:n.jsx("input",{placeholder:"Search students...",value:y,onChange:S=>N(S.target.value)})}),n.jsx("div",{className:"table-card glass",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Course"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:X.map(S=>n.jsxs("tr",{children:[n.jsx("td",{children:S.name}),n.jsx("td",{children:S.email}),n.jsx("td",{children:S.course}),n.jsxs("td",{children:[n.jsx("button",{className:"edit-btn",onClick:()=>H(S),children:"Edit"}),n.jsx("button",{className:"delete-btn",onClick:()=>Z(S.id),children:"Delete"})]})]},S.id))})]})}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"glass panel",children:[n.jsx("h3",{children:"Recent Activity"}),n.jsx("div",{className:"activity-item",children:"Student added to CSE"}),n.jsx("div",{className:"activity-item",children:"Student profile updated"}),n.jsx("div",{className:"activity-item",children:"Student removed from system"})]}),n.jsxs("div",{className:"glass panel",children:[n.jsx("h3",{children:"Course Distribution"}),Object.entries(L).map(([S,G])=>n.jsxs("div",{className:"activity-item",children:[S,": ",n.jsx("strong",{children:G})]},S))]})]}),o&&n.jsx("div",{className:"modal",children:n.jsxs("div",{className:"modal-content glass",children:[n.jsx("h2",{children:h?"Edit Student":"Add Student"}),n.jsx("input",{name:"name",placeholder:"Student Name",value:b.name,onChange:R}),n.jsx("input",{name:"email",placeholder:"Email",value:b.email,onChange:R}),n.jsx("input",{name:"course",placeholder:"Course",value:b.course,onChange:R}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"primary-btn",onClick:w,children:"Save"}),n.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"})]})]})}),n.jsx("style",{children:`

.manage-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* HEADER */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.stat-card strong {
  font-size: 24px;
  color: #1e3a8a;
}


/* SEARCH */

.search-card {
  padding: 15px;
}

.search-card input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}


/* TABLE */

.table-card {
  padding: 20px;
}

table {
  width: 100%;
}

th, td {
  padding: 12px;
}


/* LOWER GRID */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.activity-item {
  padding: 8px 0;
}


/* BUTTONS */

.primary-btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  cursor: pointer;
}

.edit-btn {
  background: #06b6d4;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.delete-btn {
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 30px;
  width: 350px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  padding: 10px 18px;
}

      `})]})}function m0(){const[r,d]=T.useState([{id:3,name:"Dr. Surya Kiran",email:"surya@studatrix.com",subject:"Data Structures"},{id:2,name:"Prof. Ankita Tiwari",email:"ankita@studatrix.com",subject:"Mathematics for AI"},{id:1,name:"Dr. Suneetha Bulla",email:"suneetha@studatrix.com",subject:"Frontend Frameworks"}]),[o,u]=T.useState(!1),[h,m]=T.useState(null),[y,N]=T.useState(""),[b,x]=T.useState({name:"",email:"",subject:""}),R=S=>{x({...b,[S.target.name]:S.target.value})},w=()=>{if(h)d(r.map(S=>S.id===h?{...S,...b}:S));else{const S={id:Date.now(),...b};d([...r,S])}u(!1),m(null),x({name:"",email:"",subject:""})},H=S=>{m(S.id),x(S),u(!0)},Z=S=>{d(r.filter(G=>G.id!==S))},X=r.filter(S=>S.name.toLowerCase().includes(y.toLowerCase())||S.subject.toLowerCase().includes(y.toLowerCase())),L={};return r.forEach(S=>{L[S.subject]=(L[S.subject]||0)+1}),n.jsxs("div",{className:"manage-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Manage Teachers"}),n.jsx("button",{className:"primary-btn",onClick:()=>u(!0),children:"+ Add Teacher"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Teachers"}),n.jsx("strong",{children:"632"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Subjects"}),n.jsx("strong",{children:"32"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Most Popular Subject"}),n.jsx("strong",{children:"Frontend Frameworks"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Active Faculty"}),n.jsx("strong",{children:"429"})]})]}),n.jsx("div",{className:"glass search-card",children:n.jsx("input",{placeholder:"Search teachers...",value:y,onChange:S=>N(S.target.value)})}),n.jsx("div",{className:"table-card glass",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Subject"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:X.map(S=>n.jsxs("tr",{children:[n.jsx("td",{children:S.name}),n.jsx("td",{children:S.email}),n.jsx("td",{children:S.subject}),n.jsxs("td",{children:[n.jsx("button",{className:"edit-btn",onClick:()=>H(S),children:"Edit"}),n.jsx("button",{className:"delete-btn",onClick:()=>Z(S.id),children:"Delete"})]})]},S.id))})]})}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Recent Activity"}),n.jsx("div",{className:"activity-item",children:"Teacher assigned to Data Structures"}),n.jsx("div",{className:"activity-item",children:"Faculty profile updated"}),n.jsx("div",{className:"activity-item",children:"New faculty added to Mathematics"})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Subject Distribution"}),Object.entries(L).map(([S,G])=>n.jsxs("div",{className:"activity-item",children:[S," — ",n.jsx("strong",{children:G})]},S))]})]}),o&&n.jsx("div",{className:"modal",children:n.jsxs("div",{className:"modal-content glass",children:[n.jsx("h2",{children:h?"Edit Teacher":"Add Teacher"}),n.jsx("input",{name:"name",placeholder:"Teacher Name",value:b.name,onChange:R}),n.jsx("input",{name:"email",placeholder:"Email",value:b.email,onChange:R}),n.jsx("input",{name:"subject",placeholder:"Subject",value:b.subject,onChange:R}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"primary-btn",onClick:w,children:"Save"}),n.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"})]})]})}),n.jsx("style",{children:`

.manage-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* HEADER */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.stat-card strong {
  font-size: 24px;
  color: #1e3a8a;
}


/* SEARCH */

.search-card {
  padding: 15px;
}

.search-card input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}


/* TABLE */

.table-card {
  padding: 20px;
}

table {
  width: 100%;
}

th, td {
  padding: 12px;
}


/* LOWER GRID */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.activity-item {
  padding: 8px 0;
}


/* BUTTONS */

.primary-btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  cursor: pointer;
}

.edit-btn {
  background: #06b6d4;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.delete-btn {
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 30px;
  width: 350px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  padding: 10px 18px;
}

      `})]})}function p0(){const[r,d]=T.useState([{id:1,name:"Data Structures",code:"CS201",credits:4},{id:2,name:"Operating Systems",code:"CS301",credits:3}]),[o,u]=T.useState(!1),[h,m]=T.useState(null),[y,N]=T.useState(""),[b,x]=T.useState({name:"",code:"",credits:""}),R=S=>{x({...b,[S.target.name]:S.target.value})},w=()=>{if(h)d(r.map(S=>S.id===h?{...S,...b}:S));else{const S={id:Date.now(),...b};d([...r,S])}u(!1),m(null),x({name:"",code:"",credits:""})},H=S=>{m(S.id),x(S),u(!0)},Z=S=>{d(r.filter(G=>G.id!==S))},X=r.filter(S=>S.name.toLowerCase().includes(y.toLowerCase())||S.code.toLowerCase().includes(y.toLowerCase())),L=r.reduce((S,G)=>S+Number(G.credits),0);return r.length>0&&(L/r.length).toFixed(1),n.jsxs("div",{className:"manage-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:"Manage Courses"}),n.jsx("button",{className:"primary-btn",onClick:()=>u(!0),children:"+ Add Course"})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Courses"}),n.jsx("strong",{children:"32"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Credits"}),n.jsx("strong",{children:"537"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Average Credits"}),n.jsx("strong",{children:"334"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Latest Course"}),n.jsx("strong",{children:r[r.length-1]?.code||"None"})]})]}),n.jsx("div",{className:"glass search-card",children:n.jsx("input",{placeholder:"Search courses...",value:y,onChange:S=>N(S.target.value)})}),n.jsx("div",{className:"table-card glass",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Course Name"}),n.jsx("th",{children:"Code"}),n.jsx("th",{children:"Credits"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:X.map(S=>n.jsxs("tr",{children:[n.jsx("td",{children:S.name}),n.jsx("td",{children:S.code}),n.jsx("td",{children:S.credits}),n.jsxs("td",{children:[n.jsx("button",{className:"edit-btn",onClick:()=>H(S),children:"Edit"}),n.jsx("button",{className:"delete-btn",onClick:()=>Z(S.id),children:"Delete"})]})]},S.id))})]})}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Recent Activity"}),n.jsx("div",{className:"activity-item",children:"Course added to system"}),n.jsx("div",{className:"activity-item",children:"Course credits updated"}),n.jsx("div",{className:"activity-item",children:"Course removed from catalog"})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Course Insights"}),n.jsxs("div",{className:"activity-item",children:["Highest Credits:",n.jsxs("strong",{children:[" ",Math.max(...r.map(S=>S.credits),0)]})]}),n.jsxs("div",{className:"activity-item",children:["Lowest Credits:",n.jsxs("strong",{children:[" ",Math.min(...r.map(S=>S.credits),0)]})]}),n.jsxs("div",{className:"activity-item",children:["Total Catalog Size:",n.jsxs("strong",{children:[" ",r.length]})]})]})]}),o&&n.jsx("div",{className:"modal",children:n.jsxs("div",{className:"modal-content glass",children:[n.jsx("h2",{children:h?"Edit Course":"Add Course"}),n.jsx("input",{name:"name",placeholder:"Course Name",value:b.name,onChange:R}),n.jsx("input",{name:"code",placeholder:"Course Code",value:b.code,onChange:R}),n.jsx("input",{name:"credits",placeholder:"Credits",value:b.credits,onChange:R}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"primary-btn",onClick:w,children:"Save"}),n.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"})]})]})}),n.jsx("style",{children:`

.manage-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* HEADER */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.stat-card strong {
  font-size: 24px;
  color: #1e3a8a;
}


/* SEARCH */

.search-card {
  padding: 15px;
}

.search-card input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}


/* TABLE */

.table-card {
  padding: 20px;
}

table {
  width: 100%;
}

th, td {
  padding: 12px;
}


/* LOWER GRID */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.activity-item {
  padding: 8px 0;
}


/* BUTTONS */

.primary-btn {
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg,#2563eb,#06b6d4);
  color: white;
  cursor: pointer;
}

.edit-btn {
  background: #06b6d4;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.delete-btn {
  background: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 30px;
  width: 350px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  padding: 10px 18px;
}

      `})]})}function x0(){const r=[{label:"Overall Attendance",value:"92%",progress:92,color:"#2563eb"},{label:"Assignment Completion",value:"85%",progress:85,color:"#06b6d4"},{label:"Fee Collection",value:"78%",progress:78,color:"#7c3aed"},{label:"System Performance",value:"99%",progress:99,color:"#22c55e"}],d=["Attendance report generated","Course performance analyzed","Fee analytics updated","System diagnostics completed"];return n.jsxs("div",{className:"reports-page",children:[n.jsx("h1",{className:"page-title",children:"System Reports & Analytics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Total Reports"}),n.jsx("strong",{children:"24"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Generated Today"}),n.jsx("strong",{children:"6"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"System Status"}),n.jsx("strong",{className:"green",children:"Healthy"})]}),n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{children:"Last Update"}),n.jsx("strong",{children:"2 mins ago"})]})]}),n.jsx("div",{className:"reports-grid",children:r.map((o,u)=>n.jsxs("div",{className:"report-card glass",children:[n.jsx("h3",{children:o.label}),n.jsx("div",{className:"report-value",style:{color:o.color},children:o.value}),n.jsx("div",{className:"progress-container",children:n.jsx("div",{className:"progress-bar",style:{width:`${o.progress}%`,background:o.color}})})]},u))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Recent Activity"}),d.map((o,u)=>n.jsx("div",{className:"activity-item",children:o},u))]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h3",{children:"Performance Insights"}),n.jsxs("div",{className:"activity-item",children:["Average Attendance: ",n.jsx("strong",{children:"91%"})]}),n.jsxs("div",{className:"activity-item",children:["Assignment Completion Rate: ",n.jsx("strong",{children:"85%"})]}),n.jsxs("div",{className:"activity-item",children:["Fee Recovery Efficiency: ",n.jsx("strong",{children:"78%"})]}),n.jsxs("div",{className:"activity-item",children:["System Reliability Score: ",n.jsx("strong",{children:"99%"})]})]})]}),n.jsxs("div",{className:"panel glass full-width",children:[n.jsx("h3",{children:"System Health"}),n.jsxs("div",{className:"health-grid",children:[n.jsxs("div",{className:"health-card",children:["Server Status",n.jsx("span",{className:"green",children:"Operational"})]}),n.jsxs("div",{className:"health-card",children:["Database",n.jsx("span",{className:"green",children:"Stable"})]}),n.jsxs("div",{className:"health-card",children:["Security",n.jsx("span",{className:"green",children:"Secure"})]}),n.jsxs("div",{className:"health-card",children:["Backup",n.jsx("span",{className:"green",children:"Active"})]})]})]}),n.jsx("style",{children:`

.reports-page {
  display: flex;
  flex-direction: column;
  gap: 25px;
  animation: fadeIn 0.4s ease;
}


/* TITLE */

.page-title {
  font-size: 26px;
  font-weight: 600;
  color: #1e3a8a;
}


/* GLASS */

.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.75);
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}


/* STATS */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
}

.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.stat-card strong {
  font-size: 22px;
  color: #1e3a8a;
}


/* REPORT CARDS */

.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 25px;
}

.report-card {
  padding: 25px;
  transition: 0.3s;
}

.report-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.08);
}

.report-card h3 {
  font-size: 15px;
  color: #64748b;
  margin-bottom: 15px;
}

.report-value {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}


/* PROGRESS */

.progress-container {
  height: 10px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 10px;
}


/* PANELS */

.lower-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  padding: 20px;
}

.full-width {
  width: 100%;
}


/* ACTIVITY */

.activity-item {
  padding: 8px 0;
}


/* HEALTH */

.health-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 15px;
}

.health-card {
  padding: 15px;
  background: rgba(37,99,235,0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.green {
  color: #22c55e;
  font-weight: 600;
}


/* ANIMATION */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

      `})]})}function g0(){const[r,d]=T.useState({systemName:"Studatrix",adminEmail:"admin@studatrix.com",notifications:!0,maintenanceMode:!1}),o=m=>{d({...r,[m.target.name]:m.target.value})},u=m=>{d({...r,[m]:!r[m]})},h=()=>{localStorage.setItem("adminSettings",JSON.stringify(r)),alert("Settings saved successfully!")};return n.jsxs("div",{className:"admin-settings",children:[n.jsx("h1",{className:"page-title",children:"Admin Settings"}),n.jsxs("div",{className:"settings-card glass",children:[n.jsx("h2",{children:"System Configuration"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"System Name"}),n.jsx("input",{name:"systemName",value:r.systemName,onChange:o})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Admin Email"}),n.jsx("input",{name:"adminEmail",value:r.adminEmail,onChange:o})]}),n.jsx("button",{className:"primary-btn",onClick:h,children:"Save Configuration"})]}),n.jsxs("div",{className:"settings-card glass",children:[n.jsx("h2",{children:"Preferences"}),n.jsxs("div",{className:"toggle-row",children:[n.jsx("span",{children:"Email Notifications"}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:r.notifications,onChange:()=>u("notifications")}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"toggle-row",children:[n.jsx("span",{children:"Maintenance Mode"}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:r.maintenanceMode,onChange:()=>u("maintenanceMode")}),n.jsx("span",{className:"slider"})]})]}),n.jsx("button",{className:"primary-btn",onClick:h,children:"Save Preferences"})]}),n.jsx("style",{children:`

      .admin-settings {
        animation: fadeIn 0.4s ease;
      }

      .page-title {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 30px;
        color: #1e3a8a;
      }

      .settings-card {
        padding: 25px;
        border-radius: 18px;
        backdrop-filter: blur(10px);
        background: rgba(255,255,255,0.75);
        box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        margin-bottom: 25px;
      }

      .settings-card h2 {
        margin-bottom: 20px;
        color: #2563eb;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
      }

      label {
        font-size: 14px;
        margin-bottom: 5px;
        color: #64748b;
      }

      input {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        outline: none;
      }

      input:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      }

      .primary-btn {
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg,#2563eb,#06b6d4);
        color: white;
        cursor: pointer;
        margin-top: 10px;
      }

      .toggle-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
      }

      /* Toggle Switch */
      .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        background: #ccc;
        border-radius: 24px;
        transition: .3s;
      }

      .slider:before {
        content: "";
        position: absolute;
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background: white;
        border-radius: 50%;
        transition: .3s;
      }

      input:checked + .slider {
        background: #2563eb;
      }

      input:checked + .slider:before {
        transform: translateX(26px);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      `})]})}function b0(){const r=ra(),[d,o]=T.useState(!1),u={name:"Dr. Surya Kiran",role:"Teacher",initials:"SK"},h=()=>{localStorage.removeItem("role"),r("/")};return n.jsxs("div",{className:"layout",children:[n.jsxs("aside",{className:`sidebar ${d?"collapsed":""}`,children:[n.jsxs("div",{children:[n.jsxs("div",{className:"brand",children:[n.jsx("div",{className:"brand-icon",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),!d&&n.jsxs("div",{className:"brand-text",children:["Studatrix",n.jsx("span",{children:"Teacher Panel"})]})]}),n.jsxs("nav",{className:"nav",children:[n.jsx(Ne,{to:"/teacher-dashboard",end:!0,className:"nav-item",children:"Dashboard"}),n.jsx(Ne,{to:"/teacher-dashboard/profile",className:"nav-item",children:"Profile"}),n.jsx(Ne,{to:"/teacher-dashboard/students",className:"nav-item",children:"Students"}),n.jsx(Ne,{to:"/teacher-dashboard/classes",className:"nav-item",children:"Classes"}),n.jsx(Ne,{to:"/teacher-dashboard/reports",className:"nav-item",children:"Reports"})]})]}),n.jsxs("div",{className:"sidebar-bottom",children:[n.jsxs("button",{className:"logout-btn",onClick:h,children:["⎋ ",!d&&"Logout"]}),n.jsx("button",{className:"collapse-btn",onClick:()=>o(!d),children:d?"→":"←"})]})]}),n.jsxs("div",{className:"main",children:[n.jsxs("header",{className:"header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"page-title",children:"Teacher Dashboard"}),n.jsx("div",{className:"breadcrumb",children:"Studatrix • Academic Intelligence Platform"})]}),n.jsxs("div",{className:"header-right",children:[n.jsxs("div",{className:"status",children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{className:"status-text",children:"System Online"})]}),n.jsx("div",{className:"divider"}),n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"avatar",children:u.initials}),!d&&n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-name",children:u.name}),n.jsx("span",{className:"user-role",children:u.role})]})]})]})]}),n.jsx("main",{className:"content",children:n.jsx(hs,{})}),n.jsx("footer",{className:"footer",children:"Studatrix © 2026 • Teacher Intelligence Platform"})]}),n.jsx("style",{children:`

*{
box-sizing:border-box;
font-family:Inter,system-ui;
}

.layout{
display:flex;
min-height:100vh;
background:#f8fafc;
}

.sidebar{
width:260px;
background:#0f172a;
color:white;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
transition:.25s;
}

.sidebar.collapsed{
width:80px;
}

.brand{
display:flex;
gap:12px;
align-items:center;
margin-bottom:30px;
}

.brand-icon{
width:40px;
height:40px;
background:white;
border-radius:8px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
}

.brand-icon img{
width:100%;
height:100%;
object-fit:contain;
}

.brand-text span{
display:block;
font-size:11px;
opacity:.6;
}

.nav{
display:flex;
flex-direction:column;
gap:6px;
}

.nav-item{
padding:10px;
border-radius:8px;
text-decoration:none;
color:white;
transition:.2s;
}

.nav-item:hover{
background:rgba(255,255,255,.08);
}

.nav-item.active{
background:linear-gradient(90deg,#2563eb,#06b6d4);
}

.logout-btn{
width:100%;
padding:12px;
background:linear-gradient(135deg,#ef4444,#dc2626);
border:none;
border-radius:8px;
color:white;
cursor:pointer;
margin-bottom:10px;
}

.logout-btn:hover{
box-shadow:0 6px 18px rgba(239,68,68,.3);
}

.collapse-btn{
width:100%;
padding:8px;
background:#1e293b;
border:none;
border-radius:6px;
color:white;
cursor:pointer;
}

.main{
flex:1;
display:flex;
flex-direction:column;
}

.header{
height:64px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 28px;
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-bottom:1px solid rgba(0,0,0,.06);
}

.page-title{
font-size:18px;
font-weight:600;
}

.breadcrumb{
font-size:12px;
color:#64748b;
}

.header-right{
display:flex;
align-items:center;
gap:18px;
}

.status{
display:flex;
align-items:center;
gap:6px;
}

.status-dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
}

.status-text{
font-size:13px;
color:#64748b;
}

.divider{
width:1px;
height:28px;
background:rgba(0,0,0,.08);
}

.user{
display:flex;
align-items:center;
gap:10px;
}

.avatar{
width:34px;
height:34px;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
}

.user-info{
display:flex;
flex-direction:column;
}

.user-name{
font-size:13px;
}

.user-role{
font-size:11px;
color:#64748b;
}

.content{
flex:1;
padding:30px;
}

.footer{
height:45px;
display:flex;
justify-content:center;
align-items:center;
color:#64748b;
font-size:13px;
border-top:1px solid rgba(0,0,0,.06);
}

      `})]})}function v0(){const r=[{label:"Total Students",value:"120"},{label:"Active Classes",value:"5"},{label:"Pending Reports",value:"8"},{label:"Assignments to Review",value:"14"}],d=["Uploaded new assignment for Data Structures","Marked attendance for AI Class","Reviewed student submissions","Updated course material","Generated academic performance report"],o=[{subject:"Data Structures",time:"09:00 AM",room:"Room 301"},{subject:"Artificial Intelligence",time:"11:00 AM",room:"Room 205"},{subject:"Machine Learning",time:"02:00 PM",room:"Room 410"}];return n.jsxs("div",{className:"teacher-page",children:[n.jsxs("div",{className:"page-header glass",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Teacher Dashboard"}),n.jsx("p",{children:"Overview of your classes, students, and academic activity"})]}),n.jsxs("div",{className:"status",children:[n.jsx("span",{className:"dot"}),"System Active"]})]}),n.jsx("div",{className:"card-grid",children:r.map((u,h)=>n.jsxs("div",{className:"card glass",children:[n.jsx("span",{className:"card-label",children:u.label}),n.jsx("span",{className:"card-value",children:u.value})]},h))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Recent Activity"}),d.map((u,h)=>n.jsxs("div",{className:"list-item",children:[n.jsx("span",{className:"activity-dot"}),u]},h))]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Today's Schedule"}),o.map((u,h)=>n.jsxs("div",{className:"schedule-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:u.subject}),n.jsx("div",{className:"room",children:u.room})]}),n.jsx("div",{className:"time",children:u.time})]},h))]})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"Create Assignment"}),n.jsx("button",{className:"action-btn",children:"Mark Attendance"}),n.jsx("button",{className:"action-btn",children:"Upload Course Material"}),n.jsx("button",{className:"action-btn",children:"Generate Reports"})]})]}),n.jsx("style",{children:`

.teacher-page{
animation:fadeIn 0.4s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,0.85);
backdrop-filter:blur(12px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

/* HEADER */

.page-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:25px;
margin-bottom:20px;
}

.page-header h1{
margin:0;
color:#1e3a8a;
}

.page-header p{
color:#64748b;
font-size:14px;
}

.status{
display:flex;
align-items:center;
gap:8px;
font-weight:500;
color:#22c55e;
}

.dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
}

/* CARDS */

.card-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:20px;
}

.card{
padding:20px;
display:flex;
flex-direction:column;
}

.card-label{
color:#64748b;
font-size:14px;
}

.card-value{
font-size:28px;
font-weight:700;
color:#2563eb;
margin-top:5px;
}

/* LOWER GRID */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

/* PANEL */

.panel{
padding:22px;
}

.panel h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* ACTIVITY */

.list-item{
padding:8px 0;
display:flex;
align-items:center;
gap:10px;
color:#334155;
}

.activity-dot{
width:6px;
height:6px;
background:#2563eb;
border-radius:50%;
}

/* SCHEDULE */

.schedule-item{
display:flex;
justify-content:space-between;
padding:10px 0;
border-bottom:1px solid rgba(0,0,0,0.05);
}

.room{
font-size:12px;
color:#64748b;
}

.time{
color:#2563eb;
font-weight:600;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:12px;
}

.action-btn{
padding:12px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
font-weight:600;
cursor:pointer;
transition:0.2s;
}

.action-btn:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(37,99,235,0.3);
}

/* ANIMATION */

@keyframes fadeIn{
from{
opacity:0;
transform:translateY(10px);
}
to{
opacity:1;
transform:translateY(0);
}
}

      `})]})}function y0(){const r=[{name:"Tejes J",program:"B.Tech CSE",status:"Active"},{name:"Rahul K",program:"B.Tech CSE",status:"Active"},{name:"Aman S",program:"B.Tech AI",status:"Inactive"},{name:"Priya R",program:"B.Tech Data Science",status:"Active"},{name:"Kiran P",program:"B.Tech Cyber Security",status:"Active"}],[d,o]=T.useState(""),u=r.filter(m=>m.name.toLowerCase().includes(d.toLowerCase())),h=[{label:"Total Students",value:132},{label:"Active",value:r.filter(m=>m.status==="Active").length},{label:"Inactive",value:r.filter(m=>m.status==="Inactive").length},{label:"Programs",value:"5"}];return n.jsxs("div",{className:"students-page",children:[n.jsxs("div",{className:"header glass",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Students"}),n.jsx("p",{children:"Manage and monitor all student records"})]}),n.jsx("input",{type:"text",placeholder:"Search students...",className:"search",value:d,onChange:m=>o(m.target.value)})]}),n.jsx("div",{className:"stats-grid",children:h.map((m,y)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{className:"stat-label",children:m.label}),n.jsx("span",{className:"stat-value",children:m.value})]},y))}),n.jsx("div",{className:"grid",children:u.map((m,y)=>n.jsxs("div",{className:"card glass",children:[n.jsx("div",{className:"avatar",children:m.name.charAt(0)}),n.jsxs("div",{className:"info",children:[n.jsx("h3",{children:m.name}),n.jsx("p",{children:m.program}),n.jsxs("span",{className:`status ${m.status}`,children:["● ",m.status]})]}),n.jsx("button",{className:"view-btn",children:"View"})]},y))}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"Add Student"}),n.jsx("button",{className:"action-btn",children:"Export Records"}),n.jsx("button",{className:"action-btn",children:"Generate Report"})]})]}),n.jsx("style",{children:`

.students-page{
animation:fadeIn 0.4s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,0.85);
backdrop-filter:blur(12px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

/* HEADER */

.header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
margin-bottom:20px;
}

.header h1{
margin:0;
color:#1e3a8a;
}

.header p{
color:#64748b;
font-size:14px;
}

/* SEARCH */

.search{
padding:10px 14px;
border-radius:10px;
border:1px solid #e5e7eb;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-bottom:20px;
}

.stat-card{
padding:18px;
display:flex;
flex-direction:column;
}

.stat-label{
color:#64748b;
font-size:13px;
}

.stat-value{
font-size:24px;
font-weight:bold;
color:#2563eb;
}

/* STUDENTS */

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:18px;
margin-bottom:20px;
}

.card{
padding:18px;
display:flex;
align-items:center;
gap:15px;
transition:0.25s;
}

.card:hover{
transform:translateY(-5px);
}

/* AVATAR */

.avatar{
width:45px;
height:45px;
border-radius:12px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
}

/* INFO */

.info h3{
margin:0;
font-size:15px;
}

.info p{
margin:2px 0;
font-size:13px;
color:#64748b;
}

.status{
font-size:12px;
font-weight:600;
}

.status.Active{
color:#22c55e;
}

.status.Inactive{
color:#ef4444;
}

/* BUTTON */

.view-btn{
margin-left:auto;
padding:8px 14px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* PANEL */

.panel{
padding:20px;
}

.panel h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:10px;
}

.action-btn{
padding:12px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* ANIMATION */

@keyframes fadeIn{
from{
opacity:0;
transform:translateY(10px);
}
to{
opacity:1;
transform:translateY(0);
}
}

      `})]})}function j0(){const r=[{name:"Data Structures",code:"CS201",students:42,schedule:"Mon, Wed • 10:00 AM",status:"Active"},{name:"Operating Systems",code:"CS301",students:38,schedule:"Tue, Thu • 11:30 AM",status:"Active"},{name:"Frontend Development",code:"CS405",students:35,schedule:"Mon, Fri • 2:00 PM",status:"Active"},{name:"Database Management",code:"CS302",students:29,schedule:"Wed • 3:30 PM",status:"Inactive"}],d=["Attendance marked for Data Structures","New assignment added in OS","Frontend Development class completed","Database quiz scheduled"],o=[{name:"Data Structures",time:"10:00 AM"},{name:"Frontend Development",time:"2:00 PM"}],[u,h]=T.useState(""),m=r.filter(N=>N.name.toLowerCase().includes(u.toLowerCase())),y=[{label:"Total Classes",value:"8"},{label:"Active Classes",value:"6"},{label:"Students Enrolled",value:"268"},{label:"Departments",value:"3"}];return n.jsxs("div",{className:"classes-page",children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{children:[n.jsx("h1",{children:"Classes"}),n.jsx("p",{children:"Manage and monitor your classes efficiently"})]}),n.jsx("input",{type:"text",placeholder:"Search classes...",className:"search",value:u,onChange:N=>h(N.target.value)})]}),n.jsx("div",{className:"stats-grid",children:y.map((N,b)=>n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-label",children:N.label}),n.jsx("span",{className:"stat-value",children:N.value})]},b))}),n.jsx("div",{className:"classes-grid",children:m.map((N,b)=>n.jsxs("div",{className:"class-card",children:[n.jsxs("div",{className:"class-header",children:[n.jsx("div",{className:"class-title",children:N.name}),n.jsxs("div",{className:`status ${N.status}`,children:["● ",N.status]})]}),n.jsx("div",{className:"class-code",children:N.code}),n.jsxs("div",{className:"class-info",children:[n.jsxs("div",{children:["👥 ",N.students," Students"]}),n.jsxs("div",{children:["🕒 ",N.schedule]})]}),n.jsx("button",{className:"view-btn",children:"View Class"})]},b))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel",children:[n.jsx("h3",{children:"Today's Schedule"}),o.map((N,b)=>n.jsxs("div",{className:"list-item",children:["🕒 ",N.name," — ",N.time]},b))]}),n.jsxs("div",{className:"panel",children:[n.jsx("h3",{children:"Recent Activity"}),d.map((N,b)=>n.jsxs("div",{className:"list-item",children:["● ",N]},b))]})]}),n.jsxs("div",{className:"panel full",children:[n.jsx("h3",{children:"Class Performance Overview"}),n.jsxs("div",{className:"performance-grid",children:[n.jsxs("div",{className:"performance-card",children:["Average Attendance",n.jsx("strong",{children:"93%"})]}),n.jsxs("div",{className:"performance-card",children:["Assignment Completion",n.jsx("strong",{children:"88%"})]}),n.jsxs("div",{className:"performance-card",children:["Student Engagement",n.jsx("strong",{children:"91%"})]})]})]}),n.jsx("style",{children:`

.classes-page{
animation:fadeIn .4s ease;
}


/* HEADER */

.header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.header h1{
margin:0;
font-size:26px;
color:#0f172a;
}

.header p{
margin-top:4px;
font-size:14px;
color:#64748b;
}


/* SEARCH */

.search{
width:260px;
padding:10px;
border-radius:8px;
border:1px solid #e2e8f0;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:16px;
margin-bottom:25px;
}

.stat-card{
background:white;
border-radius:12px;
padding:18px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:24px;
font-weight:600;
color:#2563eb;
}


/* CLASSES */

.classes-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:16px;
margin-bottom:25px;
}

.class-card{
background:white;
border-radius:12px;
padding:18px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
transition:.25s;
}

.class-card:hover{
transform:translateY(-4px);
}

.class-title{
font-weight:600;
}

.class-code{
font-size:13px;
color:#64748b;
margin-bottom:8px;
}

.class-info{
font-size:13px;
margin-bottom:10px;
}

.status.Active{
color:#22c55e;
font-size:12px;
}

.status.Inactive{
color:#ef4444;
font-size:12px;
}

.view-btn{
width:100%;
padding:10px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:16px;
margin-bottom:25px;
}

.panel{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.panel.full{
margin-bottom:20px;
}

.list-item{
padding:6px 0;
font-size:14px;
color:#334155;
}


/* PERFORMANCE */

.performance-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:16px;
margin-top:10px;
}

.performance-card{
background:#f1f5f9;
padding:16px;
border-radius:10px;
display:flex;
flex-direction:column;
}

.performance-card strong{
font-size:22px;
color:#2563eb;
}


/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

      `})]})}function S0(){const r=[{id:"RPT-101",title:"Class Performance Report",description:"Overall performance analysis of Data Structures class.",date:"18 Feb 2026",status:"Approved"},{id:"RPT-102",title:"Attendance Report",description:"Monthly attendance summary for all students.",date:"15 Feb 2026",status:"Approved"},{id:"RPT-103",title:"Assignment Completion Report",description:"Report showing assignment submission statistics.",date:"12 Feb 2026",status:"Pending"},{id:"RPT-104",title:"Student Progress Report",description:"Individual student academic progress evaluation.",date:"10 Feb 2026",status:"Approved"},{id:"RPT-105",title:"Semester Summary Report",description:"Complete semester academic and attendance summary.",date:"05 Feb 2026",status:"Approved"},{id:"RPT-106",title:"Class Engagement Report",description:"Student participation and engagement analysis.",date:"01 Feb 2026",status:"Pending"}],d=[{label:"Total Reports",value:"48"},{label:"Approved",value:"39"},{label:"Pending",value:"6"},{label:"Rejected",value:"3"}],o=["Generated attendance report","Reviewed class performance","Exported semester report","Approved student progress report","Updated assignment analytics"];return n.jsxs("div",{className:"reports-page",children:[n.jsxs("div",{className:"header",children:[n.jsx("h1",{children:"Reports & Analytics"}),n.jsx("p",{children:"Academic reports and performance monitoring"})]}),n.jsx("div",{className:"stats-grid",children:d.map((u,h)=>n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-label",children:u.label}),n.jsx("span",{className:"stat-value",children:u.value})]},h))}),n.jsx("div",{className:"reports-grid",children:r.map(u=>n.jsxs("div",{className:"report-card",children:[n.jsxs("div",{className:"report-header",children:[n.jsx("span",{className:"report-id",children:u.id}),n.jsx("span",{className:`status ${u.status.toLowerCase()}`,children:u.status})]}),n.jsx("h3",{children:u.title}),n.jsx("p",{children:u.description}),n.jsxs("div",{className:"report-footer",children:[n.jsx("span",{className:"date",children:u.date}),n.jsx("button",{className:"view-btn",children:"View"})]})]},u.id))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel",children:[n.jsx("h3",{children:"Recent Activity"}),o.map((u,h)=>n.jsxs("div",{className:"activity-item",children:[n.jsx("span",{className:"dot"}),u]},h))]}),n.jsxs("div",{className:"panel",children:[n.jsx("h3",{children:"Performance Overview"}),n.jsxs("div",{className:"performance",children:[n.jsxs("div",{children:["Attendance",n.jsx("strong",{children:"94%"})]}),n.jsxs("div",{children:["Assignment Completion",n.jsx("strong",{children:"88%"})]}),n.jsxs("div",{children:["Student Performance",n.jsx("strong",{children:"91%"})]}),n.jsxs("div",{children:["Engagement",n.jsx("strong",{children:"90%"})]})]})]})]}),n.jsxs("div",{className:"panel export",children:[n.jsx("h3",{children:"Export Reports"}),n.jsxs("div",{className:"export-buttons",children:[n.jsx("button",{className:"export-btn",children:"Export PDF"}),n.jsx("button",{className:"export-btn",children:"Export Excel"}),n.jsx("button",{className:"export-btn",children:"Export CSV"})]})]}),n.jsx("style",{children:`

.reports-page{
animation:fadeIn .4s ease;
}


/* HEADER */

.header h1{
font-size:26px;
margin-bottom:5px;
}

.header p{
color:#64748b;
margin-bottom:20px;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:16px;
margin-bottom:20px;
}

.stat-card{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:26px;
font-weight:600;
color:#2563eb;
}


/* REPORTS */

.reports-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:18px;
margin-bottom:20px;
}

.report-card{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.report-header{
display:flex;
justify-content:space-between;
margin-bottom:6px;
}

.status.approved{
color:#22c55e;
}

.status.pending{
color:#f59e0b;
}

.report-footer{
display:flex;
justify-content:space-between;
margin-top:10px;
}

.date{
font-size:12px;
color:#64748b;
}

.view-btn{
padding:6px 12px;
border:none;
border-radius:6px;
background:#2563eb;
color:white;
}


/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:18px;
margin-bottom:20px;
}

.panel{
background:white;
padding:18px;
border-radius:12px;
box-shadow:0 4px 14px rgba(0,0,0,.06);
}

.dot{
width:8px;
height:8px;
background:#2563eb;
border-radius:50%;
display:inline-block;
margin-right:8px;
}

.performance{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:12px;
margin-top:10px;
}


/* EXPORT */

.export-buttons{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:12px;
}

.export-btn{
padding:12px;
border:none;
border-radius:8px;
background:#2563eb;
color:white;
}


/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

      `})]})}function N0(){const r={name:"Dr. Surya Kiran",subject:"Data Structures and Algorithms",employeeId:"TCH-2048",department:"Computer Science",email:"surya.kiran@studatrix.com",phone:"+91 98765 43210",experience:"12 Years",qualification:"Ph.D. Computer Science",status:"Active"},d=[{label:"Students",value:"120"},{label:"Classes",value:"5"},{label:"Reports Pending",value:"8"},{label:"Attendance Avg",value:"93%"}],o=["Uploaded assignment for DSA","Updated student attendance","Reviewed student reports","Conducted live lecture","Published course material"];return n.jsxs("div",{className:"profile-page",children:[n.jsxs("div",{className:"profile-hero glass",children:[n.jsx("div",{className:"avatar-ring",children:n.jsx("div",{className:"avatar",children:"SK"})}),n.jsxs("div",{className:"hero-info",children:[n.jsx("h1",{children:r.name}),n.jsx("p",{className:"hero-sub",children:r.subject}),n.jsxs("div",{className:"hero-meta",children:[n.jsxs("span",{className:"badge id",children:["ID: ",r.employeeId]}),n.jsxs("span",{className:"badge status",children:["● ",r.status]})]})]}),n.jsx("button",{className:"edit-btn",children:"Edit Profile"})]}),n.jsx("div",{className:"stats-grid",children:d.map((u,h)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("span",{className:"stat-label",children:u.label}),n.jsx("span",{className:"stat-value",children:u.value})]},h))}),n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card glass",children:[n.jsx("h2",{children:"Professional Information"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Subject"}),n.jsx("span",{children:r.subject})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Department"}),n.jsx("span",{children:r.department})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Experience"}),n.jsx("span",{children:r.experience})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Qualification"}),n.jsx("span",{children:r.qualification})]})]}),n.jsxs("div",{className:"info-card glass",children:[n.jsx("h2",{children:"Contact Information"}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Email"}),n.jsx("span",{children:r.email})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Phone"}),n.jsx("span",{children:r.phone})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{children:"Status"}),n.jsx("span",{className:"active",children:"Active"})]})]})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Recent Activity"}),o.map((u,h)=>n.jsxs("div",{className:"activity-item",children:[n.jsx("span",{className:"dot"}),u]},h))]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"Manage Classes"}),n.jsx("button",{className:"action-btn",children:"View Students"}),n.jsx("button",{className:"action-btn",children:"Upload Materials"}),n.jsx("button",{className:"action-btn",children:"Generate Reports"})]})]}),n.jsx("style",{children:`

.profile-page{
animation:fadeIn .5s ease;
}


.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(12px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}


/* HERO */

.profile-hero{
display:flex;
align-items:center;
gap:25px;
padding:30px;
margin-bottom:25px;
position:relative;
}

.avatar-ring{
padding:3px;
border-radius:50%;
background:linear-gradient(135deg,#2563eb,#06b6d4,#2563eb);
animation:rotate 6s linear infinite;
}

.avatar{
width:90px;
height:90px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
font-weight:bold;
color:#2563eb;
}

.hero-sub{
color:#64748b;
}

.hero-meta{
display:flex;
gap:10px;
margin-top:5px;
}

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.id{
background:#e0ecff;
color:#2563eb;
}

.status{
background:#dcfce7;
color:#22c55e;
}

.edit-btn{
position:absolute;
right:25px;
top:25px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
border:none;
color:white;
padding:10px 18px;
border-radius:10px;
cursor:pointer;
}


/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
margin-bottom:25px;
}

.stat-card{
padding:18px;
text-align:center;
}

.stat-label{
color:#64748b;
}

.stat-value{
font-size:22px;
font-weight:bold;
color:#2563eb;
}


/* INFO */

.info-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:20px;
margin-bottom:25px;
}

.info-card{
padding:25px;
}

.info-row{
display:flex;
justify-content:space-between;
padding:10px 0;
border-bottom:1px solid #e5e7eb;
}

.active{
color:#22c55e;
font-weight:600;
}


/* PANEL */

.panel{
padding:25px;
margin-bottom:25px;
}

.activity-item{
padding:8px 0;
}

.dot{
width:8px;
height:8px;
background:#2563eb;
border-radius:50%;
display:inline-block;
margin-right:8px;
}


/* ACTIONS */

.actions{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:15px;
}

.action-btn{
padding:12px;
border-radius:10px;
border:none;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* ANIMATIONS */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

@keyframes rotate{
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}
}

      `})]})}function A0(){const r=[{label:"Total Children",value:"2",icon:"👨‍👧‍👦"},{label:"Overall Attendance",value:"92%",icon:"📊"},{label:"Pending Fees",value:"₹12,500",icon:"💳"},{label:"New Notifications",value:"3",icon:"🔔"}],d=[{name:"Tejes J",class:"B.Tech CSE",attendance:"94%",cgpa:"9.76",status:"Excellent"},{name:"Ananya Reddy",class:"B.Tech AI",attendance:"89%",cgpa:"9.12",status:"Good"}],o=["Fee payment reminder for Semester 2","Attendance dropped below 90% in Mathematics","New assignment uploaded in Data Structures"],u=["Viewed child attendance report","Checked academic performance","Logged into parent portal","Viewed fee payment details"];return n.jsxs("div",{className:"parent-dashboard",children:[n.jsx("div",{className:"dashboard-header glass",children:n.jsxs("div",{children:[n.jsx("h1",{children:"Parent Dashboard"}),n.jsx("p",{children:"Monitor your child's academic performance and activities"})]})}),n.jsx("div",{className:"stats-grid",children:r.map((h,m)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("div",{className:"stat-icon",children:h.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"stat-label",children:h.label}),n.jsx("div",{className:"stat-value",children:h.value})]})]},m))}),n.jsxs("div",{className:"section-grid",children:[n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Your Children"}),d.map((h,m)=>n.jsxs("div",{className:"child-row",children:[n.jsxs("div",{children:[n.jsx("div",{className:"child-name",children:h.name}),n.jsx("div",{className:"child-class",children:h.class})]}),n.jsxs("div",{className:"child-stats",children:[n.jsxs("span",{children:["Attendance: ",h.attendance]}),n.jsxs("span",{children:["CGPA: ",h.cgpa]})]}),n.jsx("div",{className:"status-badge",children:h.status})]},m))]}),n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Notifications"}),o.map((h,m)=>n.jsxs("div",{className:"notification",children:[n.jsx("span",{className:"dot"}),h]},m))]})]}),n.jsxs("div",{className:"section-grid",children:[n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Recent Activity"}),u.map((h,m)=>n.jsx("div",{className:"activity",children:h},m))]}),n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"View Attendance"}),n.jsx("button",{className:"action-btn",children:"Academic Records"}),n.jsx("button",{className:"action-btn",children:"Fee Payments"}),n.jsx("button",{className:"action-btn",children:"Contact School"})]})]})]}),n.jsx("style",{children:`

.parent-dashboard{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HEADER */

.dashboard-header{
padding:25px;
margin-bottom:25px;
}

.dashboard-header h1{
margin-bottom:5px;
color:#1e3a8a;
}

.dashboard-header p{
color:#64748b;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:25px;
}

.stat-card{
padding:20px;
display:flex;
gap:15px;
align-items:center;
}

.stat-icon{
font-size:28px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:22px;
font-weight:bold;
color:#2563eb;
}

/* GRID */

.section-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

/* CARD */

.card{
padding:20px;
}

.card h2{
margin-bottom:15px;
color:#1e3a8a;
}

/* CHILD */

.child-row{
display:flex;
justify-content:space-between;
align-items:center;
padding:10px 0;
border-bottom:1px solid #eee;
}

.child-name{
font-weight:bold;
}

.child-class{
font-size:12px;
color:#64748b;
}

.child-stats{
display:flex;
flex-direction:column;
font-size:13px;
}

.status-badge{
background:#dcfce7;
color:#22c55e;
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

/* NOTIFICATION */

.notification{
padding:8px 0;
font-size:14px;
}

.dot{
width:8px;
height:8px;
background:#2563eb;
display:inline-block;
border-radius:50%;
margin-right:8px;
}

/* ACTIVITY */

.activity{
padding:8px 0;
font-size:14px;
}

/* ACTION */

.actions{
display:grid;
gap:10px;
}

.action-btn{
padding:10px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
transition:.25s;
}

.action-btn:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(37,99,235,.3);
}

/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px)}
to{opacity:1;transform:translateY(0)}
}

`})]})}function E0(){const r=[{name:"Tejes J",class:"B.Tech Computer Science",attendance:"94%",cgpa:"9.76",status:"Excellent",lastActivity:"Submitted assignment"},{name:"Ananya Reddy",class:"B.Tech Artificial Intelligence",attendance:"89%",cgpa:"9.12",status:"Good",lastActivity:"Viewed lecture notes"}],d=[{label:"Total Children",value:"2",icon:"👨‍👧‍👦"},{label:"Average CGPA",value:"9.44",icon:"🎓"},{label:"Average Attendance",value:"91%",icon:"📊"},{label:"Active Courses",value:"12",icon:"📚"}];return n.jsxs("div",{className:"children-page",children:[n.jsxs("div",{className:"header-card glass",children:[n.jsx("h1",{children:"Children Overview"}),n.jsx("p",{children:"Monitor academic performance, attendance, and activity"})]}),n.jsx("div",{className:"stats-grid",children:d.map((o,u)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("div",{className:"stat-icon",children:o.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"stat-label",children:o.label}),n.jsx("div",{className:"stat-value",children:o.value})]})]},u))}),n.jsxs("div",{className:"table-card glass",children:[n.jsx("h2",{children:"Children Details"}),n.jsxs("table",{className:"table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Program"}),n.jsx("th",{children:"Attendance"}),n.jsx("th",{children:"CGPA"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Last Activity"})]})}),n.jsx("tbody",{children:r.map((o,u)=>n.jsxs("tr",{children:[n.jsx("td",{className:"name",children:o.name}),n.jsx("td",{children:o.class}),n.jsx("td",{children:n.jsx("span",{className:"badge attendance",children:o.attendance})}),n.jsx("td",{children:n.jsx("span",{className:"badge cgpa",children:o.cgpa})}),n.jsx("td",{children:n.jsx("span",{className:"badge status",children:o.status})}),n.jsx("td",{children:o.lastActivity})]},u))})]})]}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Performance Summary"}),n.jsxs("div",{className:"summary",children:[n.jsx("div",{className:"summary-item",children:"📈 Academic Performance: Excellent"}),n.jsx("div",{className:"summary-item",children:"📊 Attendance: Above Average"}),n.jsx("div",{className:"summary-item",children:"🎯 Assignment Completion: 96%"}),n.jsx("div",{className:"summary-item",children:"🏆 Rank Improvement: +5 positions"})]})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"View Attendance"}),n.jsx("button",{className:"action-btn",children:"Academic Records"}),n.jsx("button",{className:"action-btn",children:"Fee Payments"}),n.jsx("button",{className:"action-btn",children:"Contact Teacher"})]})]})]}),n.jsx("style",{children:`

.children-page{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HEADER */

.header-card{
padding:25px;
margin-bottom:25px;
}

.header-card h1{
margin-bottom:5px;
color:#1e3a8a;
}

.header-card p{
color:#64748b;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:25px;
}

.stat-card{
padding:20px;
display:flex;
gap:15px;
align-items:center;
}

.stat-icon{
font-size:26px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:22px;
font-weight:bold;
color:#2563eb;
}

/* TABLE */

.table-card{
padding:20px;
margin-bottom:25px;
}

.table{
width:100%;
border-collapse:collapse;
}

.table th{
text-align:left;
padding:12px;
background:#2563eb;
color:white;
}

.table td{
padding:12px;
border-bottom:1px solid #eee;
}

.table tr:hover{
background:#f1f5f9;
}

.name{
font-weight:bold;
color:#1e3a8a;
}

/* BADGE */

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.attendance{
background:#dbeafe;
color:#2563eb;
}

.cgpa{
background:#dcfce7;
color:#16a34a;
}

.status{
background:#ede9fe;
color:#7c3aed;
}

/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.panel{
padding:20px;
}

.summary-item{
padding:8px 0;
}

.actions{
display:grid;
gap:10px;
}

.action-btn{
padding:10px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

.action-btn:hover{
transform:translateY(-2px);
box-shadow:0 8px 20px rgba(37,99,235,.3);
}

/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px)}
to{opacity:1;transform:translateY(0)}
}

      `})]})}function T0(){const r=[{label:"Average Attendance",value:"91%",icon:"📊"},{label:"Best Attendance",value:"Tejes J (96%)",icon:"🏆"},{label:"Lowest Attendance",value:"Ananya (87%)",icon:"⚠️"},{label:"School Days",value:"182",icon:"📅"}],d=[{name:"Tejes J",class:"B.Tech CSE",attendance:96,present:175,absent:7,late:3},{name:"Ananya Reddy",class:"B.Tech AI",attendance:87,present:158,absent:18,late:6}];return n.jsxs("div",{className:"attendance-page",children:[n.jsxs("div",{className:"header-card glass",children:[n.jsx("h1",{children:"Attendance Overview"}),n.jsx("p",{children:"Monitor daily attendance, performance, and trends"})]}),n.jsx("div",{className:"stats-grid",children:r.map((o,u)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("div",{className:"stat-icon",children:o.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"stat-label",children:o.label}),n.jsx("div",{className:"stat-value",children:o.value})]})]},u))}),n.jsxs("div",{className:"table-card glass",children:[n.jsx("h2",{children:"Children Attendance Details"}),n.jsxs("table",{className:"table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Program"}),n.jsx("th",{children:"Attendance"}),n.jsx("th",{children:"Present"}),n.jsx("th",{children:"Absent"}),n.jsx("th",{children:"Late"})]})}),n.jsx("tbody",{children:d.map((o,u)=>n.jsxs("tr",{children:[n.jsx("td",{className:"name",children:o.name}),n.jsx("td",{children:o.class}),n.jsx("td",{children:n.jsxs("div",{className:"progress-wrapper",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${o.attendance}%`}})}),n.jsxs("span",{className:"percentage",children:[o.attendance,"%"]})]})}),n.jsx("td",{className:"present",children:o.present}),n.jsx("td",{className:"absent",children:o.absent}),n.jsx("td",{className:"late",children:o.late})]},u))})]})]}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Attendance Alerts"}),n.jsx("div",{className:"alert good",children:"✔ Tejes J has excellent attendance"}),n.jsx("div",{className:"alert warning",children:"⚠ Ananya attendance below 90%"}),n.jsx("div",{className:"alert info",children:"ℹ School attendance requirement: 85%"})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Recent Attendance Activity"}),n.jsx("div",{className:"activity",children:"✔ Tejes J marked present today"}),n.jsx("div",{className:"activity",children:"✔ Ananya attended Data Structures class"}),n.jsx("div",{className:"activity",children:"✔ Attendance updated by system"})]})]}),n.jsx("style",{children:`

.attendance-page{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HEADER */

.header-card{
padding:25px;
margin-bottom:25px;
}

.header-card h1{
color:#1e3a8a;
margin-bottom:5px;
}

.header-card p{
color:#64748b;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:18px;
margin-bottom:25px;
}

.stat-card{
padding:20px;
display:flex;
gap:15px;
align-items:center;
}

.stat-icon{
font-size:26px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:20px;
font-weight:bold;
color:#2563eb;
}

/* TABLE */

.table-card{
padding:20px;
margin-bottom:25px;
}

.table{
width:100%;
border-collapse:collapse;
}

.table th{
padding:12px;
background:#2563eb;
color:white;
text-align:left;
}

.table td{
padding:12px;
border-bottom:1px solid #eee;
}

.name{
font-weight:bold;
color:#1e3a8a;
}

/* PROGRESS BAR */

.progress-wrapper{
display:flex;
align-items:center;
gap:10px;
}

.progress-bar{
width:120px;
height:8px;
background:#e5e7eb;
border-radius:10px;
overflow:hidden;
}

.progress-fill{
height:100%;
background:linear-gradient(90deg,#2563eb,#06b6d4);
}

.percentage{
font-size:13px;
font-weight:bold;
}

/* COLORS */

.present{
color:#16a34a;
font-weight:bold;
}

.absent{
color:#dc2626;
font-weight:bold;
}

.late{
color:#ea580c;
font-weight:bold;
}

/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.panel{
padding:20px;
}

.alert{
padding:10px;
border-radius:10px;
margin-bottom:10px;
}

.alert.good{
background:#dcfce7;
color:#166534;
}

.alert.warning{
background:#fef3c7;
color:#92400e;
}

.alert.info{
background:#dbeafe;
color:#1e40af;
}

.activity{
padding:8px 0;
color:#374151;
}

/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px)}
to{opacity:1;transform:translateY(0)}
}

      `})]})}function w0(){const r={name:"Mr. Shaik Rahman",id:"PRT-20458",role:"Parent",email:"parent@email.com",phone:"+91 9876543210",address:"Vijayawada, Andhra Pradesh",joined:"2023",status:"Active"},d=[{name:"Tejes J",program:"B.Tech Computer Science",attendance:"96%",cgpa:"9.76"},{name:"Ananya Reddy",program:"B.Tech Artificial Intelligence",attendance:"87%",cgpa:"9.12"}],o=[{label:"Children",value:"2",icon:"👨‍👧‍👦"},{label:"Avg Attendance",value:"91%",icon:"📊"},{label:"Notifications",value:"4",icon:"🔔"},{label:"Account Status",value:"Active",icon:"✅"}],u=["Logged into parent dashboard","Viewed attendance report","Checked academic performance","Updated contact information"];return n.jsxs("div",{className:"profile-page",children:[n.jsxs("div",{className:"hero glass",children:[n.jsx("div",{className:"avatar-ring",children:n.jsx("div",{className:"avatar",children:"SR"})}),n.jsxs("div",{className:"hero-info",children:[n.jsx("h1",{children:r.name}),n.jsx("p",{className:"role",children:r.role}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"badge id",children:["ID: ",r.id]}),n.jsxs("span",{className:"badge active",children:["● ",r.status]})]})]}),n.jsx("button",{className:"edit-btn",children:"Edit Profile"})]}),n.jsx("div",{className:"stats-grid",children:o.map((h,m)=>n.jsxs("div",{className:"stat-card glass",children:[n.jsx("div",{className:"stat-icon",children:h.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"stat-label",children:h.label}),n.jsx("div",{className:"stat-value",children:h.value})]})]},m))}),n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Contact Information"}),n.jsxs("div",{className:"row",children:[n.jsx("span",{children:"Email"}),n.jsx("span",{children:r.email})]}),n.jsxs("div",{className:"row",children:[n.jsx("span",{children:"Phone"}),n.jsx("span",{children:r.phone})]}),n.jsxs("div",{className:"row",children:[n.jsx("span",{children:"Address"}),n.jsx("span",{children:r.address})]}),n.jsxs("div",{className:"row",children:[n.jsx("span",{children:"Joined"}),n.jsx("span",{children:r.joined})]})]}),n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Children Overview"}),d.map((h,m)=>n.jsxs("div",{className:"child",children:[n.jsx("div",{className:"child-name",children:h.name}),n.jsx("div",{className:"child-info",children:h.program}),n.jsxs("div",{className:"child-meta",children:[n.jsxs("span",{children:["Attendance: ",h.attendance]}),n.jsxs("span",{children:["CGPA: ",h.cgpa]})]})]},m))]})]}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Recent Activity"}),u.map((h,m)=>n.jsxs("div",{className:"activity",children:[n.jsx("span",{className:"dot"}),h]},m))]}),n.jsxs("div",{className:"card glass",children:[n.jsx("h2",{children:"Quick Actions"}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"action-btn",children:"View Attendance"}),n.jsx("button",{className:"action-btn",children:"View Academic Records"}),n.jsx("button",{className:"action-btn",children:"Update Profile"}),n.jsx("button",{className:"action-btn",children:"Contact School"})]})]})]}),n.jsx("style",{children:`

.profile-page{
animation:fadeIn .5s ease;
}

/* GLASS */

.glass{
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

/* HERO */

.hero{
display:flex;
align-items:center;
gap:20px;
padding:25px;
margin-bottom:20px;
position:relative;
}

.avatar-ring{
padding:3px;
border-radius:50%;
background:linear-gradient(135deg,#2563eb,#06b6d4);
}

.avatar{
width:80px;
height:80px;
background:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:24px;
color:#2563eb;
}

.role{
color:#64748b;
}

.meta{
display:flex;
gap:10px;
margin-top:5px;
}

.badge{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.id{
background:#dbeafe;
color:#1e40af;
}

.active{
background:#dcfce7;
color:#166534;
}

.edit-btn{
position:absolute;
right:20px;
top:20px;
padding:10px 15px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* STATS */

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
margin-bottom:20px;
}

.stat-card{
padding:15px;
display:flex;
gap:10px;
align-items:center;
}

.stat-icon{
font-size:24px;
}

.stat-label{
font-size:13px;
color:#64748b;
}

.stat-value{
font-size:18px;
font-weight:bold;
color:#2563eb;
}

/* INFO */

.info-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

.card{
padding:20px;
}

.row{
display:flex;
justify-content:space-between;
padding:8px 0;
border-bottom:1px solid #eee;
}

/* CHILD */

.child{
padding:10px 0;
border-bottom:1px solid #eee;
}

.child-name{
font-weight:bold;
color:#1e3a8a;
}

.child-info{
font-size:13px;
color:#64748b;
}

.child-meta{
display:flex;
gap:15px;
font-size:13px;
}

/* LOWER */

.lower-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.activity{
padding:8px 0;
}

.dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
display:inline-block;
margin-right:8px;
}

/* ACTIONS */

.actions{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
}

.action-btn{
padding:10px;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}

/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px)}
to{opacity:1;transform:translateY(0)}
}

      `})]})}function C0(){const r=ra(),[d,o]=T.useState(!1),u={name:"Mr. Shaik Rahman",role:"Parent",initials:"SR"},h=()=>{localStorage.removeItem("role"),r("/")};return n.jsxs("div",{className:"layout",children:[n.jsxs("aside",{className:`sidebar ${d?"collapsed":""}`,children:[n.jsxs("div",{children:[n.jsxs("div",{className:"brand",children:[n.jsx("div",{className:"brand-icon",children:n.jsx("img",{src:Bl,alt:"Studatrix Logo"})}),!d&&n.jsxs("div",{className:"brand-text",children:["Studatrix",n.jsx("span",{children:"Parent Panel"})]})]}),n.jsxs("nav",{className:"nav",children:[n.jsx(Ne,{to:"/parent-dashboard",end:!0,className:"nav-item",children:"Dashboard"}),n.jsx(Ne,{to:"/parent-dashboard/children",className:"nav-item",children:"Children"}),n.jsx(Ne,{to:"/parent-dashboard/attendance",className:"nav-item",children:"Attendance"}),n.jsx(Ne,{to:"/parent-dashboard/fee",className:"nav-item",children:"Fee Management"}),n.jsx(Ne,{to:"/parent-dashboard/profile",className:"nav-item",children:"Profile"})]})]}),n.jsxs("div",{className:"sidebar-bottom",children:[n.jsxs("button",{className:"logout-btn",onClick:h,children:["⎋ ",!d&&"Logout"]}),n.jsx("button",{className:"collapse-btn",onClick:()=>o(!d),children:d?"→":"←"})]})]}),n.jsxs("div",{className:"main",children:[n.jsxs("header",{className:"header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"page-title",children:"Parent Dashboard"}),n.jsx("div",{className:"breadcrumb",children:"Studatrix • Parent Intelligence Platform"})]}),n.jsxs("div",{className:"header-right",children:[n.jsxs("div",{className:"status",children:[n.jsx("span",{className:"status-dot"}),n.jsx("span",{className:"status-text",children:"System Online"})]}),n.jsx("div",{className:"divider"}),n.jsxs("div",{className:"user",children:[n.jsx("div",{className:"avatar",children:u.initials}),!d&&n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-name",children:u.name}),n.jsx("span",{className:"user-role",children:u.role})]})]})]})]}),n.jsx("main",{className:"content",children:n.jsx(hs,{})}),n.jsx("footer",{className:"footer",children:"Studatrix © 2026 • Parent Intelligence Platform"})]}),n.jsx("style",{children:`

*{
box-sizing:border-box;
font-family:Inter,system-ui;
}

/* LAYOUT */

.layout{
display:flex;
min-height:100vh;
background:#f8fafc;
}


/* SIDEBAR */

.sidebar{
width:260px;
background:#0f172a;
color:white;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
transition:.25s;
}

.sidebar.collapsed{
width:80px;
}


/* BRAND */

.brand{
display:flex;
gap:12px;
align-items:center;
margin-bottom:30px;
}

.brand-icon{
width:40px;
height:40px;
background:white;
border-radius:8px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
}

.brand-icon img{
width:100%;
height:100%;
object-fit:contain;
}

.brand-text span{
display:block;
font-size:11px;
opacity:.6;
}


/* NAV */

.nav{
display:flex;
flex-direction:column;
gap:6px;
}

.nav-item{
padding:10px;
border-radius:8px;
text-decoration:none;
color:white;
transition:.2s;
}

.nav-item:hover{
background:rgba(255,255,255,.08);
}

.nav-item.active{
background:linear-gradient(90deg,#2563eb,#06b6d4);
}


/* BUTTONS */

.logout-btn{
width:100%;
padding:12px;
background:linear-gradient(135deg,#ef4444,#dc2626);
border:none;
border-radius:8px;
color:white;
cursor:pointer;
margin-bottom:10px;
}

.logout-btn:hover{
box-shadow:0 6px 18px rgba(239,68,68,.3);
}

.collapse-btn{
width:100%;
padding:8px;
background:#1e293b;
border:none;
border-radius:6px;
color:white;
cursor:pointer;
}


/* MAIN */

.main{
flex:1;
display:flex;
flex-direction:column;
}


/* HEADER */

.header{
height:64px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 28px;
background:rgba(255,255,255,.75);
backdrop-filter:blur(10px);
border-bottom:1px solid rgba(0,0,0,.06);
}

.page-title{
font-size:18px;
font-weight:600;
}

.breadcrumb{
font-size:12px;
color:#64748b;
}

.header-right{
display:flex;
align-items:center;
gap:18px;
}

.status{
display:flex;
align-items:center;
gap:6px;
}

.status-dot{
width:8px;
height:8px;
background:#22c55e;
border-radius:50%;
}

.status-text{
font-size:13px;
color:#64748b;
}

.divider{
width:1px;
height:28px;
background:rgba(0,0,0,.08);
}

.user{
display:flex;
align-items:center;
gap:10px;
}

.avatar{
width:34px;
height:34px;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:600;
}

.user-info{
display:flex;
flex-direction:column;
}

.user-name{
font-size:13px;
}

.user-role{
font-size:11px;
color:#64748b;
}


/* CONTENT */

.content{
flex:1;
padding:30px;
}


/* FOOTER */

.footer{
height:45px;
display:flex;
justify-content:center;
align-items:center;
color:#64748b;
font-size:13px;
border-top:1px solid rgba(0,0,0,.06);
}

      `})]})}function z0(){const r=[{label:"Total Fees",value:"₹1,20,000",color:"#2563eb"},{label:"Paid",value:"₹90,000",color:"#22c55e"},{label:"Pending",value:"₹30,000",color:"#ef4444"},{label:"Next Due",value:"15 Mar 2026",color:"#f59e0b"}],d=[{id:"TXN84392",date:"12 Feb 2026",amount:"₹30,000",status:"Paid",method:"UPI"},{id:"TXN73291",date:"10 Jan 2026",amount:"₹30,000",status:"Paid",method:"Card"},{id:"TXN61822",date:"12 Dec 2025",amount:"₹30,000",status:"Paid",method:"Net Banking"},{id:"TXN00000",date:"15 Mar 2026",amount:"₹30,000",status:"Pending",method:"-"}],o=[{title:"Semester 2 Fee",amount:"₹30,000",due:"15 Mar 2026"},{title:"Library Fee",amount:"₹2,000",due:"01 Apr 2026"}];return n.jsxs("div",{className:"fee-page",children:[n.jsx("div",{className:"page-header glass",children:n.jsxs("div",{children:[n.jsx("h1",{children:"Fee Management"}),n.jsx("p",{children:"Track payments, pending dues, and transaction history"})]})}),n.jsx("div",{className:"summary-grid",children:r.map((u,h)=>n.jsxs("div",{className:"summary-card glass",children:[n.jsx("span",{className:"summary-label",children:u.label}),n.jsx("span",{className:"summary-value",style:{color:u.color},children:u.value})]},h))}),n.jsxs("div",{className:"lower-grid",children:[n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Payment History"}),n.jsxs("table",{className:"table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Date"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Method"}),n.jsx("th",{children:"Status"})]})}),n.jsx("tbody",{children:d.map((u,h)=>n.jsxs("tr",{children:[n.jsx("td",{children:u.id}),n.jsx("td",{children:u.date}),n.jsx("td",{children:u.amount}),n.jsx("td",{children:u.method}),n.jsx("td",{children:n.jsx("span",{className:u.status==="Paid"?"status paid":"status pending",children:u.status})})]},h))})]})]}),n.jsxs("div",{className:"panel glass",children:[n.jsx("h2",{children:"Upcoming Payments"}),o.map((u,h)=>n.jsxs("div",{className:"upcoming-item",children:[n.jsxs("div",{children:[n.jsx("strong",{children:u.title}),n.jsxs("div",{className:"due",children:["Due: ",u.due]})]}),n.jsxs("div",{className:"amount-section",children:[n.jsx("span",{className:"amount",children:u.amount}),n.jsx("button",{className:"pay-btn",children:"Pay Now"})]})]},h))]})]}),n.jsx("style",{children:`

.fee-page{
animation:fadeIn .5s ease;
}


/* GLASS */

.glass{
background:rgba(255,255,255,.8);
backdrop-filter:blur(10px);
border-radius:18px;
box-shadow:0 10px 30px rgba(0,0,0,.06);
}


/* HEADER */

.page-header{
padding:25px;
margin-bottom:25px;
}

.page-header h1{
font-size:26px;
color:#1e3a8a;
margin-bottom:5px;
}

.page-header p{
color:#64748b;
font-size:14px;
}


/* SUMMARY */

.summary-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-bottom:25px;
}

.summary-card{
padding:20px;
display:flex;
flex-direction:column;
}

.summary-label{
color:#64748b;
font-size:14px;
}

.summary-value{
font-size:26px;
font-weight:700;
}


/* LOWER GRID */

.lower-grid{
display:grid;
grid-template-columns:2fr 1fr;
gap:20px;
}


/* TABLE */

.table{
width:100%;
border-collapse:collapse;
}

.table th{
text-align:left;
padding:12px;
color:#64748b;
}

.table td{
padding:12px;
border-top:1px solid #e5e7eb;
}


/* STATUS */

.status{
padding:4px 10px;
border-radius:10px;
font-size:12px;
}

.paid{
background:#dcfce7;
color:#22c55e;
}

.pending{
background:#fee2e2;
color:#ef4444;
}


/* UPCOMING */

.upcoming-item{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 0;
border-bottom:1px solid #e5e7eb;
}

.due{
font-size:12px;
color:#64748b;
}

.amount-section{
display:flex;
align-items:center;
gap:10px;
}

.amount{
font-weight:600;
}

.pay-btn{
padding:8px 14px;
border:none;
border-radius:8px;
background:linear-gradient(135deg,#2563eb,#06b6d4);
color:white;
cursor:pointer;
}


/* ANIMATION */

@keyframes fadeIn{
from{opacity:0;transform:translateY(10px);}
to{opacity:1;transform:translateY(0);}
}

      `})]})}function R0(){return n.jsx(Lg,{children:n.jsxs(hg,{children:[n.jsx(ce,{path:"/",element:n.jsx(Ig,{})}),n.jsx(ce,{path:"/login",element:n.jsx($g,{})}),n.jsx(ce,{path:"/register",element:n.jsx(Pg,{})}),n.jsxs(ce,{path:"/scholar-dashboard",element:n.jsx(is,{allowedRole:"scholar",children:n.jsx(e0,{})}),children:[n.jsx(ce,{index:!0,element:n.jsx(t0,{})}),n.jsx(ce,{path:"profile",element:n.jsx(a0,{})}),n.jsx(ce,{path:"academic-records",element:n.jsx(l0,{})}),n.jsx(ce,{path:"attendance",element:n.jsx(n0,{})}),n.jsx(ce,{path:"fee-payments",element:n.jsx(i0,{})}),n.jsx(ce,{path:"courses",element:n.jsx(s0,{})}),n.jsx(ce,{path:"assignments",element:n.jsx(r0,{})}),n.jsx(ce,{path:"schedule",element:n.jsx(c0,{})}),n.jsx(ce,{path:"settings",element:n.jsx(u0,{})})]}),n.jsxs(ce,{path:"/admin-dashboard",element:n.jsx(is,{allowedRole:"admin",children:n.jsx(d0,{})}),children:[n.jsx(ce,{index:!0,element:n.jsx(o0,{})}),n.jsx(ce,{path:"profile",element:n.jsx(f0,{})}),n.jsx(ce,{path:"students",element:n.jsx(h0,{})}),n.jsx(ce,{path:"teachers",element:n.jsx(m0,{})}),n.jsx(ce,{path:"courses",element:n.jsx(p0,{})}),n.jsx(ce,{path:"reports",element:n.jsx(x0,{})}),n.jsx(ce,{path:"settings",element:n.jsx(g0,{})})]}),n.jsxs(ce,{path:"/teacher-dashboard",element:n.jsx(is,{allowedRole:"teacher",children:n.jsx(b0,{})}),children:[n.jsx(ce,{index:!0,element:n.jsx(v0,{})}),n.jsx(ce,{path:"profile",element:n.jsx(N0,{})}),n.jsx(ce,{path:"students",element:n.jsx(y0,{})}),n.jsx(ce,{path:"classes",element:n.jsx(j0,{})}),n.jsx(ce,{path:"reports",element:n.jsx(S0,{})})]}),n.jsxs(ce,{path:"/parent-dashboard",element:n.jsx(is,{allowedRole:"parent",children:n.jsx(C0,{})}),children:[n.jsx(ce,{index:!0,element:n.jsx(A0,{})}),n.jsx(ce,{path:"children",element:n.jsx(E0,{})}),n.jsx(ce,{path:"attendance",element:n.jsx(T0,{})}),n.jsx(ce,{path:"fee",element:n.jsx(z0,{})}),n.jsx(ce,{path:"profile",element:n.jsx(w0,{})})]})]})})}mx.createRoot(document.getElementById("root")).render(n.jsx(T.StrictMode,{children:n.jsx(R0,{})}));
