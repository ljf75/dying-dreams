"serviceWorker"in navigator&&navigator.serviceWorker.register("serviceWorker.js").then(e=>{e.addEventListener("updatefound",()=>{const r=e.installing;r.addEventListener("statechange",()=>{switch(r.state){case"installed":navigator.serviceWorker.controller&&r.postMessage({action:"skipWaiting"})}})})}).catch(e=>{console.warn("Service worker registration failed, error:",e)});