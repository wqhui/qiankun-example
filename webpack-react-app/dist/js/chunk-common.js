"use strict";(self["webpackJsonp_react-app"]=self["webpackJsonp_react-app"]||[]).push([[64],{158:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(294);const a=n.p+"images/6d4dd5dfc6163bdfcfe5.svg";function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,c=[],u=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const c=function(e){var t=e.onGlobalStateChange,n=e.setGlobalState,o=l((0,r.useState)(0),2),c=o[0],u=o[1],i=function(e){var t=l((0,r.useState)(window.__POWERED_BY_QIANKUN__?0:void 0),2),n=t[0],a=t[1];return(0,r.useEffect)((function(){"function"==typeof e&&e((function(e,t){console.log("[react]onGlobalStateChange:"+e.count),a(e.count)}))}),[]),[n]}(t),s=l(i,1)[0];return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement("a",{href:"https://react.dev",target:"_blank"},r.createElement("img",{src:a,className:"logo sigle-react-logo",alt:"React logo"}))),r.createElement("h1",null,"Webpack 5 + React 18"),r.createElement("div",{className:"card"},r.createElement("button",{onClick:function(){u((function(e){return e+1})),null==n||n({reactCount:c+1})}},"count is ",c),"number"==typeof s?r.createElement("p",null," Main app count is ",r.createElement("b",null,s)):null,r.createElement("p",null,"Edit ",r.createElement("code",null,"src/App.js")," and save to test HMR")))}}}]);