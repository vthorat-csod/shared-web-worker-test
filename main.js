(()=>{var e={955:e=>{const t="application/javascript";e.exports=(e,r={})=>{const o={skipSameOrigin:!0,useBlob:!0,...r};return!e.includes("://")||e.includes(window.location.origin)?Promise.resolve(e):new Promise(((r,n)=>fetch(e).then((e=>e.text())).then((n=>{let s=new URL(e).href.split("/");s.pop();const i=`const _importScripts = importScripts;\nconst _fixImports = (url) => new URL(url, '${s.join("/")+"/"}').href;\nimportScripts = (...urls) => _importScripts(...urls.map(_fixImports));`;let a=`data:${t},`+encodeURIComponent(i+n);o.useBlob&&(a=URL.createObjectURL(new Blob([`importScripts("${a}")`],{type:t}))),r(a)})).catch(n)))}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(955),t=new(r.n(e)())("http://localhost:8080/shared-worker.js");document.getElementById("sendMessageBtn").addEventListener("click",(function(){t.postMessage({from:"main",message:"Hello from Main Page"})})),t.onmessage=function(e){console.log("Message received in Main Page:",e.data)}})()})();