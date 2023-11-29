!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gim=e():t.gim=e()}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class i{constructor(t=Object.create(null)){this.all=t}on(t,e){(this.all[t]||(this.all[t]=[])).push(e)}off(t,e){this.all[t]&&this.all[t].splice(this.all[t].indexOf(e)>>>0,1)}emit(t,...e){(this.all[t]||[]).slice().map(t=>t(...e)),(this.all["*"]||[]).slice().map(s=>s(t,...e))}}class r extends i{constructor(){super(),this.fps=60,this._raf=null,this._last=null,this._now=null,this._dt=null,this._accumulator=0,this._delta=1e3/this.fps,this._step=1/this.fps}start(){requestAnimationFrame(t=>this._update(t)),this.emit("start")}stop(){this._raf&&(cancelAnimationFrame(this._raf),this.emit("stop"))}_update(){if(this._raf=requestAnimationFrame(t=>this._update(t)),this._now=performance.now(),this._dt=this._now-this._last,this._last=this._now,!(this._dt>1e3))for(this._accumulator+=this._dt;this._accumulator>=this._delta;)this.emit("update",this._step),this._accumulator-=this._delta}}class n extends i{constructor(t,e=null,s=null){super(),this.id=t,this.width=e,this.height=s,this.el=document.getElementById(t),this.el.width=e||this.el.width,this.el.height=s||this.el.height,this.el.setAttribute("tabindex",1),this.ctx=this.el.getContext("2d"),this.ctx.imageSmoothingEnabled=!1}clear(t="#000",e=0,s=0,i=this.width,r=this.height){this.ctx.fillStyle=t,this.ctx.fillRect(e,s,i,r)}}class o extends i{constructor(t){super(),this.map=this._mapKey(),this._pressed=Object.values(this.map).reduce((t,e)=>(t[e]=!1,t),{}),t.el.addEventListener("keydown",t=>{let e=this.map[t.which];!1===this._pressed[e]&&(this._pressed[e]=setInterval(()=>{this.emit("down",e,t)},1e3/60))}),t.el.addEventListener("keyup",t=>{let e=this.map[t.which];clearInterval(this._pressed[e]),this._pressed[e]=!1,this.emit("up",e,t)})}isDown(t){return this._pressed[t]&&!0}isUp(t){return!this._pressed[t]&&!0}_mapKey(){let t={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",91:"leftwindow",92:"rightwindow",93:"select",144:"numlock",145:"scrolllock",106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};for(var e=0;e<26;e++)t[65+e]=(10+e).toString(36);for(e=0;e<10;e++)t[48+e]=""+e,t[96+e]="numpad"+e;for(e=1;e<20;e++)t[111+e]="f"+e;return t}}class a extends i{constructor(t){super(),this.canvas=t,t.el.addEventListener("mousemove",t=>this.emit("move",t.buttons,this._pos(t),t)),t.el.addEventListener("mousedown",t=>this.emit("down",t.buttons,this._pos(t),t)),t.el.addEventListener("mouseup",t=>this.emit("up",t.buttons,this._pos(t),t))}_pos(t){let e=this.canvas.el.offsetTop,s=this.canvas.el.offsetLeft;return{x:t.clientX-s,y:t.clientY-e}}}const l={Emitter:i,Game:class extends i{constructor(t,e,s){super(),this.ticker=new r,this.canvas=new n(t,e,s),this.keyboard=new o(this.canvas),this.mouse=new a(this.canvas),this.ticker.on("update",t=>{this.emit("update",t,this),this.canvas.clear(),this.emit("render",this.canvas)})}start(){this.ticker.start(),this.emit("start",this)}stop(){this.ticker.stop(),this.emit("stop")}},Assets:class extends i{constructor(){super(),this.assets={}}load(t){return Array.isArray(t)||(t=[t]),Promise.all(t.map(t=>{let e=new Image;return new Promise((s,i)=>{e.onload=(()=>{this.assets[t.name]=e,s()}),e.onerror=(()=>i()),e.src=t.url})})).then(()=>{this.emit("complete")})}get(t){return this.assets[t]}},Ticker:r,Canvas:n,Keyboard:o,Mouse:a};e.default=l}]).default});