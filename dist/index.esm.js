import{useCallback as n,useRef as e,useState as t,useEffect as i,useLayoutEffect as o}from"react";import r from"resize-observer-polyfill";var f="undefined"!=typeof window&&window.document&&window.document.createElement?o:i;export default function(o){var u=void 0===o?{}:o,c=u.maxFontSize,a=void 0===c?100:c,z=u.minFontSize,S=void 0===z?20:z,d=u.onFinish,l=u.onStart,m=u.resolution,v=void 0===m?5:m,s=n(function(){return l&&l(),{fontSize:a,fontSizePrev:S,fontSizeMax:a,fontSizeMin:S}},[a,S,l]),w=e(null),M=e(!0),h=t(s),x=h[0],p=h[1],F=x.fontSize,P=x.fontSizeMax,b=x.fontSizeMin,g=x.fontSizePrev,y=null,A=t(function(){return new r(function(){y=window.requestAnimationFrame(function(){M.current||p(s()),M.current=!1})})})[0];return i(function(){return w.current&&A.observe(w.current),function(){y&&window.cancelAnimationFrame(y),A.disconnect()}},[y,A]),f(function(){var n=Math.abs(F-g)<=v,e=!!w.current&&(w.current.scrollHeight>w.current.offsetHeight||w.current.scrollWidth>w.current.offsetWidth),t=F>g;if(n)e?p({fontSize:g<F?g:F-(g-F),fontSizeMax:P,fontSizeMin:b,fontSizePrev:g}):d&&d(F);else{var i,o=P,r=b;e?(i=t?g-F:b-F,o=Math.min(P,F)):(i=t?P-F:g-F,r=Math.max(b,F)),p({fontSize:F+i/2,fontSizeMax:o,fontSizeMin:r,fontSizePrev:F})}},[F,P,b,g,d,w,v]),{fontSize:F+"%",ref:w}}
//# sourceMappingURL=index.esm.js.map