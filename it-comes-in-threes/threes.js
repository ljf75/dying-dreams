!function(){"use strict";var t=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t.filter((function(t){return t}));return function(t){return e.forEach((function(n){return n(t)})),t}},n=function(t,n){return n.forEach((function(n){return n&&n(t)})),t},e=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n){return t.forEach((function(t){return null!=t&&n.appendChild("number"==typeof t||"string"==typeof t?document.createTextNode(String(t)):t)}))}},r=function(t){return function(n){return function(e){return e.setAttribute(t,String(n))}}},i=function(t){return function(n){var e;return(e=n.classList).add.apply(e,t.split(/\s+/))}},o=function(t){return function(n){return function(e){return e.classList.toggle(t,!!n)}}},u=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n(document.createElement(t),e)}},a=function(t){return function(n){return function(e){var r=function(t){return n(e,t)};return e.addEventListener(t,r),function(){e.removeEventListener(t,r)}}}},c=function(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return function(e){return e.style[t]=n.join(" "),e}}},f=function(t){return function(n){return n.textContent=String(t)}},l=function(t){return t.disabled=!0},s=function(t){return t?l:d},d=function(t){return t.disabled=!1},y=r("height"),p=r("type"),h=r("width"),v=function(n,e){return void 0===e&&(e=n),t(y(e),h(n))};
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
function g(t,n,e){if(e||2===arguments.length)for(var r,i=0,o=n.length;i<o;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return t.concat(r||Array.prototype.slice.call(n))}var x=a("click"),m=a("keydown"),w=a("keyup"),M=a("load"),b=a("resize"),S=a("visibilitychange"),R=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return k.apply(void 0,g([D],t,!1))},A=u("canvas"),I=u("div"),T=u("h1"),E=u("h2"),C=u("i"),k=u("button"),D=p("button"),P=function(){var t={children:[],offs:[],parent:L[0],free:function(){return t.children.forEach((function(t){return t.free()})),t.children=[],t.offs.forEach((function(t){return t()})),t.offs=[],t},orphan:function(){return null!=t.parent&&(t.parent.children=t.parent.children.filter((function(n){return n!==t}))),t},start:function(){return L.unshift(t),t},stop:function(){return L.shift(),t}};return t.parent?(t.parent.children.push(t),t):t},z=function(t){L.length?L[0].offs.push(t):console.error("Attempted to captureOff with an empty captureStack")},L=[],B=[],G=!1,q=function(t){if(G)return t();G=!0,t(),B.forEach((function(t){return(0,t.f)(t.el)})),B=[],G=!1},F=function(t,n){var e,r=P().start(),i=(e="",document.createComment(e)),o=n(t.get())||i;return r.stop(),t.listen((function(t){r.free().start(),q((function(){var e,r;e=o,r=o=n(t)||i,e.parentNode&&e.parentNode.replaceChild(r,e)})),r.stop()})),o},K=function(t,n){return F(t,(function(t){return t?n(t):void 0}))},H=function(){},U=function(t,n){return function(e){t.listenAndCall((function(t){return(n(t)||H)(e)}))}},N=c("background-color"),j=c("bottom"),O=c("display"),W=c("height"),Y=c("left"),J=c("opacity"),Q=c("right"),V=c("top"),X=c("transform"),Z=c("transform-origin"),$=c("visibility"),_=c("width");O("none"),O("");var tt=function(n,e){return void 0===e&&(e=n),t(W(e),_(n))};$("hidden"),$("");var nt=function(t,n,e){return void 0===e&&(e=et),t.length===n.length&&t.every((function(t,r){return e(t,n[r])}))},et=function(t,n){return t===n},rt=function(t,n){void 0===n&&(n=et);var e={f:H,next:void 0},r={head:e,tail:e},i={equal:n,get:function(){return t},listen:function(t){var n={f:t,next:void 0};return r.tail.next=n,r.tail=n,z((function(){for(var t=r.head,e=t.next;e=t.next;){if(e===n){if(t.next=e.next)break;r.tail=t;break}t=e}})),i},listenAndCall:function(n){return n(t),i.listen(n)},set:function(e){if(n(t,e))return!1;t=e;for(var i=r.head;i=i.next;)i.f(e);return!0}};return i},it=function(t,n){return{x:t,y:n}},ot=function(t){return it(t.x+1,t.y)},ut=function(t){return it(t.x,t.y-1)},at=function(t){return it(t.x,t.y+1)},ct=function(t){return it(t.x-1,t.y)},ft=it(0,0),lt=function(t,n){return it(t.x/n,t.y/n)},st=function(t,n){return it(t.x/n.x,t.y/n.y)},dt=function(t,n){return t&&n&&t.x===n.x&&t.y===n.y},yt=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},pt=function(t,n,e){for(var r,i,o=(r=t.x,i=t.y,{x:r,y:i});o.y<=n.y;++o.y)for(o.x=t.x;o.x<=n.x;++o.x)e(o)},ht=function(t){return Math.sqrt(vt(t))},vt=function(t){return e=t,(n=t).x*e.x+n.y*e.y;var n,e},gt=function(t,n){return it(t.x-n.x,t.y-n.y)},xt=function(t,n){return null==t?n:null==n?t:it(t.x+n.x,t.y+n.y)},mt=function(t,n){return t.x+=n.x,t.y+=n.y,t},wt=function(t){return t.x=Math.round(t.x),t.y=Math.round(t.y),t},Mt=function(t,n){return it(t.x*n,t.y*n)},bt=function(t,n){return t.x*=n,t.y*=n,t},St=function(t,n){return it(t.x*n.x,t.y*n.y)},Rt=function(t){return it(Math.cos(t),Math.sin(t))},At=function(t,n){return t+Math.random()*(n-t)},It=function(t,n){return t+Math.floor(Math.random()*(n+1-t))},Tt=function(t){return t[Math.random()*t.length|0]},Et=function(t,n,e){void 0===e&&(e=et);var r=function(t,n){void 0===n&&(n=et);var e=P().start(),r=rt(t(),n),i={equal:n,free:function(){return e.free(),i},get:r.get,listen:function(t){return r.listen(t),i},listenAndCall:function(t){return r.listenAndCall(t),i},set:function(t){e.start();var n=r.set(t());return e.stop(),n}};return e.stop(),i}((function(){return n(t.get())}),e);return t.listen((function(t){r.free().set((function(){return n(t)}))})),r};var Ct,kt,Dt,Pt,zt=function(t,n,e,r,i,o,u,a,c){for(var f=Math.round(n*t.sampleRate),l=Math.round(e*t.sampleRate),s=Math.round(a*t.sampleRate),d=Math.round(o*t.sampleRate),y=f+l+s,p=y+d,h=t.createBuffer(1,p,t.sampleRate),v=h.getChannelData(0),g=y+d,x=0,m=0,w=function(n){var e,o=1/(440*Math.pow(2,(r-49)/12))*t.sampleRate,a=Math.round(o),s=c.wave(m/a),p=n<f?s*n/f:n<f+l?(1-(e=(n-f)/l))*s+e*s*u:n<y?s*u:(1-(n-y)/d)*s*u,h=Math.floor(128*(p+1));v[x++]+=(h>255?255:h)/127.5-1,m=(m+1)%a,r+=i},M=0;M<g;++M)w(M);return h},Lt=function(t){return t},Bt=function(t,n){for(var e=[],r=0;r<t.length;++r){var i=n(t[r],r);null!=i&&e.push(i)}return e},Gt=function(t,n,e){return void 0===e&&(e=1/0),t.reduce((function(t,e){return Math.min(t,n(e))}),e)},qt=function(t,n){for(var e=new Array(t),r=0;r<t;++r)e[r]=n(r);return e},Ft=function(){var t=0,n=qt(32,(function(){return At(-1,1)}));return{t:"noise",wave:function(e){return e<t&&(n=qt(32,(function(){return At(-1,1)}))),n[Math.floor((t=e)*n.length)]}}},Kt=2*Math.PI,Ht=function(t){return zt(t,.022099770605564117,.07424317002296447,37,0,.057468581199646,.20582507848739623,.05865459561347962,{t:"sine",wave:function(t){return Math.sin(t*Kt)}})},Ut=function(t){return zt(t,.02781418561935425,.05821746587753296,21,-1e-4,.07508152723312378,.09908761382102967,.771031414270401,{t:"sawtooth",duty:n=1,wave:function(t){return t>n?1:t/n*2-1}});var n},Nt=function(t){return zt(t,.05133342146873474,.0687593698501587,64,.0007100033760070801,.02126429080963135,.25635467767715453,.06709707379341125,{t:"triangle",wave:function(t){return Math.min(4*t-1,3-4*t)}})},jt=function(t){return zt(t,.07,.06,58,0,.09,.19,.014,Ft())},Ot=function(t){var n=function(t,n){return void 0===n&&(n=1),function(i){if(void 0===i&&(i=1),!r.get()){var o=e.createBufferSource();o.buffer=t;var u=e.createGain();u.gain.value=n*i*.0625,o.connect(u).connect(e.destination),o.start()}}},e=new AudioContext,r=rt(!0),i=function(t){return zt(t,0,0,12,0,0,1,4,Ft())}(e),o=rt(0),u={muted:r,noiseLevel:o,button:n(Ht(e),3),buzz:n(Ut(e),2),coin:n(Nt(e)),slide:n(jt(e),.5)},a=rt({t:"idle"}),c=a.get();return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=rt(t.map((function(t){return t.get()})),nt);return t.forEach((function(t,n){t.listen((function(t){return e.set(e.get().map((function(e,r){return n===r?t:e})))}))})),e}(r,o,t.visible).listen((function(t){var n=t[0],r=t[1],o=t[2];if(n||0===r||!o)"playing"===c.t&&(c.source.stop(),a.set({t:"idle"}));else if("playing"===c.t)c.gain.gain.value=.04*r;else{var u=e.createBufferSource();u.buffer=i,u.loop=!0;var f=e.createGain();f.gain.value=.04*r,u.connect(f).connect(e.destination),u.start(),a.set({t:"playing",gain:f,source:u})}c=a.get()})),u},Wt=function(t,n){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return A.apply(void 0,g([h(t),y(n)],e,!1))},Yt=(Ct="fillStyle",function(t){return function(n){return n[Ct]=t}}),Jt=function(t){return void 0===t&&(t=1),function(n){for(var e=function(t,e,i){return!!r[4*(n.canvas.width*t+e)+i]},r=n.getImageData(0,0,n.canvas.width,n.canvas.height).data,i=0;i<r.length;i+=4)if(0===r[i+3]){var o=i/4%n.canvas.width,u=Math.floor(i/4/n.canvas.width);+(o>0&&e(u,o-1,3))+ +(o<n.canvas.width-1&&e(u,o+1,3))+ +(u>0&&e(u-1,o,3))+ +(u<n.canvas.height-1&&e(u+1,o,3))<t||n.fillRect(o,u,1,1)}}},Qt=function(t,n,e,r){return void 0===r&&(r=e),function(i){for(var o=.5-r;o<r;++o){var u=Math.round(Math.sqrt(e*e*(1-o*o/(r*r))));i.fillRect(t-u,n+o-.5,2*u,1)}}},Vt=function(t,n,e,r){return function(i){return i.fillRect(t,n,e,r)}},Xt=function(t){return void 0===t&&(t=200),function(n){for(var e=n.getImageData(0,0,n.canvas.width,n.canvas.height).data,r=0;r<e.length;r+=4)if(0!==e[r+3]){var i=r/4%n.canvas.width,o=Math.floor(r/4/n.canvas.width);e[r+3]<t?n.clearRect(i,o,1,1):n.fillRect(i,o,1,1)}}},Zt=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){var r=e.getContext("2d");null!=r&&n(r,t)}},$t=function(t,n,e,r){return{life:r,pos:t,sprite:e,vel:n}},_t=it(16,16),tn=lt(_t,2),nn=16,en=it(-16,-16),rn=it(nn,-16),on=it(-16,nn),un=it(nn,nn),an=.25,cn=Wt(_t.x/2,_t.y/2,Zt(Yt("#fff"),Vt(0,0,_t.x/2,_t.y/2))),fn={},ln=function(t){return fn[t]||(fn[t]=Wt(2*_t.x,_t.y,Zt((function(n){n.fillStyle=t,n.fillRect(0,0,_t.x,_t.y),n.fillStyle="#fff",n.fillRect(_t.x,0,_t.x,_t.y),n.fillStyle="rgba(0, 0, 0, .125)";var e=it((_t.x-4)/4,(_t.y-4)/2);n.translate(2,2);for(var r=0;r<e.y;++r)for(var i=0;i<e.x;++i)Math.random()<.5&&(n.fillRect(2*i,2*r,2,2),n.fillRect(_t.x-6-2*i,2*r,2,2),n.fillRect(_t.x+2*i,2*r,2,2),n.fillRect(2*_t.x-6-2*i,2*r,2,2))}))))},sn=it(kt=16,kt),dn=St(sn,_t),yn=function(t){var n,e,r,i=St(t,sn);return{data:(n=sn.y,e=sn.x,r=function(t,n){return e=mt(it(n,t),i),{fill:r="hsl(".concat(60*It(0,5),", 90%, 60%)"),pos:St(e,_t),sprite:ln(r),state:{t:"idle"},tile:e};var e,r},qt(n,(function(t){return qt(e,(function(n){return r(t,n)}))}))),pos:t}},pn=function(t){return"".concat(t.x,",").concat(t.y)},hn=Wt(dn.x,dn.y,Zt((function(t){t.fillStyle="#666",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(0, 0, 0, .125)";for(var n=0;n<Math.ceil(t.canvas.height/_t.y);++n)for(var e=0;e<Math.ceil(t.canvas.width/_t.x);++e)(e+n)%2&&t.fillRect(e*_t.x,n*_t.y,_t.x,_t.y)}))),vn=function(t,n){return Zt((function(e){var r=function(t){t.data.forEach((function(t){t.forEach((function(t){var n;null!=t&&e.drawImage(t.sprite,"dying"!==t.state.t||(n=t.state.prog,Math.floor(n/1*10)%2!=0)?0:_t.x,0,_t.x,_t.y,t.pos.x,t.pos.y,_t.x,_t.y)}))}))},i=Et(t,(function(t){var n=t.center,e=t.size;return qt(11,(function(t){return A(v(e.x,e.y),Zt((function(r){r.globalAlpha=.125;for(var i=Math.max(t-5+1,1);i<=t-5+6;++i)Qt(n.x,n.y,16*i)(r);r.globalAlpha=.75,r.globalCompositeOperation="source-out",r.fillRect(0,0,e.x,e.y)})))}))})),o={clear:function(){e.clearRect(0,0,e.canvas.width,e.canvas.height)},darkness:function(t){if(!(t<=0)){e.globalAlpha=t;var n=i.get();e.drawImage(n[Math.floor((1-t)*n.length)],0,0),e.globalAlpha=1}},particles:function(t){t.forEach((function(t){e.drawImage(t.sprite,t.pos.x,t.pos.y)}))},player:function(t){e.save(),e.translate(t.pos.x+("left"===t.facing.x?_t.x:0),t.pos.y),e.scale("left"===t.facing.x?-1:1,1),e.drawImage(t.sprite,("down"===t.facing.y?0:"middle"===t.facing.y?1:2)*_t.x,0,_t.x,_t.y,0,0,_t.x,_t.y),e.restore()},thing:function(t){e.drawImage(t.sprite,t.pos.x,t.pos.y)},track:function(n,r){var i=t.get().center;e.save(),u=mt(gt(n.pos,i),tn),e.translate(-u.x,-u.y),r(),u=ft,e.restore()},world:function(n){var i=yt(st(u,dn)),o=yt(function(t,n){return t.x/=n.x,t.y/=n.y,t}(xt(u,t.get().size),dn));pt(i,o,(function(t){e.drawImage(hn,t.x*dn.x,t.y*dn.y)})),pt(i,o,(function(t){r(n.ensureChunk(t))}))}},u=ft;n(o)}))},gn=function(t){var n=mt(wt(bt(Rt(At(0,2*Math.PI)),20)),t.tile);return{boosts:0,pos:St(n,_t),sprite:Wt(_t.x,_t.y,Zt((function(t){t.fillStyle="#111"}),Qt(_t.x/2,_t.y/2-2,3),(function(t){t.fillStyle="#333",t.fillRect(_t.x/2-2,_t.y/2+2,4,1),t.fillRect(_t.x/2-3,_t.y/2+3,6,2),t.fillStyle="#000",t.fillRect(_t.x/2-2,_t.y/2+1,4,1)}),Jt(1))),state:{t:"idle",prog:0},tile:n,waitSec:2}},xn=16,mn=it(-16,-16),wn=it(xn,-16),Mn=it(-16,xn),bn=it(xn,xn),Sn=.25,Rn=Wt(_t.x/2,_t.y/2,Zt(Vt(0,0,_t.x/2,_t.y/2))),An=it(0,-10),In=it(3,3),Tn=qt(5,(function(t){return A(v(In.x,In.y),Zt((function(n){n.fillStyle="#".concat(t).concat(t).concat(t),n.fillRect(0,0,In.x,In.y)})))})),En=function(t,n,e){var r=gt(e.tile,n.tile);n.tile=It(0,Math.abs(r.x)+Math.abs(r.y)-1)<Math.abs(r.x)?xt(n.tile,it(r.x>0?1:-1,0)):xt(n.tile,it(0,r.y>0?1:-1)),n.state={t:"transition",from:n.pos,prog:0,to:St(n.tile,_t)};var i=20-ht(r);return i>0&&t.slide(i/20),dt(n.tile,e.tile)},Cn=it(-8,-10),kn=it(0,-18),Dn=A(v(100,20),Zt((function(t){t.fillStyle="#fff",t.font="12pt cursive",t.textBaseline="top",t.fillText("+10s",1,1)}),Xt(150),(function(t){t.fillStyle="#000"}),Jt(1))),Pn=.175,zn=i("absolute"),Ln=i("fade"),Bn=i("fill-parent"),Gn=o("flash-red"),qn=i("flex-center"),Fn=i("hud"),Kn=i("hud-pill"),Hn=i("menu"),Un=i("mt-1"),Nn=o("pe-none"),jn=i("relative"),On=i("transition-opacity"),Wn=function(){var t=function(t,n){if(e.tileSet(n,t),null!=t)return t.tile=n,t.state={t:"transition",from:t.pos,prog:0,to:St(n,_t)},t},n={},e={chunks:n,ensureChunk:function(t){var e=pn(t);return n[e]||(n[e]=yn(it(t.x,t.y)))},tileGet:function(t){var e=yt(st(t,sn)),r=n[pn(e)];if(null!=r){var i=gt(t,St(r.pos,sn));return r.data[i.y][i.x]}},tileSet:function(t,e){var r,i=yt(st(t,sn)),o=pn(i),u=null!==(r=n[o])&&void 0!==r?r:n[o]=yn(i),a=gt(t,St(u.pos,sn));u.data[a.y][a.x]=e},tileSwap:function(n,r){var i=e.tileGet(n);return function(t){return Bt(t,Lt)}([t(e.tileGet(r),n),t(i,r)])}};return e},Yn=function(){var t,n=Rt(At(0,2*Math.PI)),e={enemy:void 0,goal:(t=wt(Mt(n,-8)),{pos:St(t,_t),sprite:Wt(_t.x,_t.y,Zt((function(t){t.fillStyle="#fff"}),Qt(_t.x/2,_t.y/2,_t.x/2-2,_t.y/2-2),(function(t){var n=new Date;t.save(),t.translate(_t.x/2,_t.y/2),t.fillStyle="#000",t.save();for(var e=0;e<4;++e)t.fillRect(3,-1,2,2),t.rotate(Math.PI/2);t.restore(),t.restore(),t.drawImage(Wt(_t.x,_t.y,Zt((function(t){t.fillStyle="#f00",t.save(),t.translate(_t.x/2,_t.y/2),t.save(),t.rotate(2*Math.PI*(n.getHours()%12)/12-Math.PI/2),t.fillRect(-.5,-.5,_t.x/2-4,1),t.restore(),t.save(),t.rotate(2*Math.PI*n.getMinutes()/60-Math.PI/2),t.fillRect(-.5,-.5,_t.x/2-2,1),t.restore(),t.restore()}),Xt(100))),0,0),t.fillStyle="#000"}),Jt(1))),state:{t:"idle"},tile:t}),moved:!1,particles:[],player:{facing:{x:"right",y:"down"},pos:ft,sprite:Wt(3*_t.x,_t.y,Zt((function(t){var n=Wt(_t.x,_t.y,Zt((function(t){t.fillStyle="#fff"}),Qt(_t.x/2,_t.y/2-2,3),(function(t){t.fillStyle="#f00",t.fillRect(_t.x/2-2,_t.y/2+2,4,3),t.fillStyle="#000",t.fillRect(_t.x/2-2,_t.y/2+1,4,1)}),Jt(1)));t.drawImage(n,0,0),t.fillRect(5,5,6,1),t.fillRect(6,6,2,1),t.fillRect(9,6,2,1),t.drawImage(n,_t.x,0),t.fillRect(_t.x+7,5,4,1),t.fillRect(_t.x+9,6,2,1),t.drawImage(n,2*_t.x,0)}))),state:{t:"idle"},tile:ft},score:rt(0),time:rt(0),ttl:rt(10),world:Wn()};return e.world.tileSet(e.goal.tile,void 0),e.world.tileSet(e.player.tile,void 0),e},Jn=function(t,n){var e,r,i=it((e=function(t){return t.pos.x},void 0===r&&(r=-1/0),(t.reduce((function(t,n){return Math.max(t,e(n))}),r)+Gt(t,(function(t){return t.pos.x}))+_t.x)/2-_t.x),Gt(t,(function(t){return t.pos.y}))-10);return $t(i,Qn,Xn(n),1)},Qn=it(0,-16),Vn={},Xn=function(t){return Vn[t]||(Vn[t]=A(v(100,20),Zt((function(n){n.fillStyle="#fff",n.font="12pt cursive",n.textBaseline="top",n.fillText("+".concat(t,"!"),1,1)}),Xt(150),(function(t){t.fillStyle="#000"}),Jt(1))))},Zn=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=0;return function(){return e>=t.length?Tt(t):t[e++]}},$n=Zn("It Comes","Death Comes","Bad Things Come","Good Things Leave","Movies in Trilogies Come","Triplets Come","Things Divisible By Three Come"),_n=Zn("Moron","Simpleton","Boob","Dimwit","Dope","Mental Defective","Ignoramus","Dunce","Imbecile","Dingbat","Dolt","Halfwit"),te=Zn("","meaningless","pointless","useless","worthless"),ne=Zn("wandered","meandered","circumlocuted","ambled","drifted","strutted","roved"),ee=Zn("You","Ya");Dt=document.body,Pt=function(){var n,r,i=function(t,n,e,r){var o=t.tileGet(e);return null==o||o.fill!==n||"dying"===o.state.t||r.includes(o)||(r.push(o),i(t,n,ut(e),r),i(t,n,ct(e),r),i(t,n,ot(e),r),i(t,n,at(e),r)),r},o=function(t,n){var e,r,o=function(t,n){f.some((function(t){return t.some((function(t){return dt(t.pos,n)}))}))||f.push(i(x,t,n,[]))},a=function(t){k.set({t:"end",round:t})},f=[],l=k.get(),s=n.goal,v=n.particles,g=n.player,x=n.world;"play"===l.t&&"idle"===g.state.t&&0===P.length&&function(t){if(!(t.x&&t.y||!t.x&&!t.y)){t.x?(g.facing.x=t.x>0?"right":"left",g.facing.y="middle"):g.facing.y=t.y>0?"down":"up";var e=g.tile,r=mt(t,g.tile),u=x.tileGet(r);if(null==u||"dying"!==u.state.t){var l=null!=u?i(x,u.fill,u.tile,[]):[];L.push.apply(L,x.tileSwap(g.tile,r));var d=null!=u&&i(x,u.fill,u.tile,[]).some((function(t){return l.some((function(n){return dt(n.tile,t.tile)}))}));g.tile=r,g.state={t:"transition",from:g.pos,prog:0,to:St(g.tile,_t)},n.moved=!0,null!=u&&[ut(r),ot(r),ct(r),at(r)].forEach((function(t){if(!dt(t,e)&&!f.some((function(n){return n.some((function(n){return dt(n.pos,t)}))}))){var n=i(x,u.fill,t,[]);d&&n.includes(u)||(f.push(n),o(u.fill,t))}})),dt(g.tile,s.tile)?(v.push(function(t){return $t(xt(t.pos,Cn),kn,Dn,1)}(s)),s.tile=mt(wt(bt(Rt(At(0,2*Math.PI)),8)),g.tile),s.pos=St(s.tile,_t),x.tileSet(s.tile,void 0),n.score.set(n.score.get()+100),n.ttl.set(n.ttl.get()+10),c.coin()):null!=n.enemy&&dt(g.tile,n.enemy.tile)?a(n):c.slide(1)}}}(it(+p.down()-+y.down(),+d.down()-+h.down())),"play"===l.t&&(n.time.set(n.time.get()+t),n.ttl.set(Math.max(n.ttl.get()-t,0)),null==n.enemy&&n.ttl.get()<=0&&(n.enemy=gn(g)),null!=n.enemy&&function(t,n,e,r,i){return"idle"===n.state.t&&(r?En(t,n,e):n.boosts>0?(--n.boosts,En(t,n,e)):(n.state.prog+=i,n.state.prog>=n.waitSec&&En(t,n,e)))}(c,n.enemy,g,n.ttl.get()<=0,t)&&a(n)),null!=n.enemy&&v.push((e=n.enemy,$t(mt(it(It(0,_t.x-In.x),It(0,_t.y-In.y)),e.pos),An,Tt(Tn),1))),u(g,t,Pn)&&(g.state={t:"idle"}),null!=n.enemy&&u(n.enemy,t,Pn*n.enemy.waitSec/2)&&("play"!==l.t?(n.enemy=void 0,v.push.apply(v,(r=n.player.pos,[$t(r,bn,Rn,Sn),$t(xt(r,it(_t.x/2,0)),Mn,Rn,Sn),$t(xt(r,it(0,_t.y/2)),wn,Rn,Sn),$t(xt(r,it(_t.x/2,_t.y/2)),mn,Rn,Sn)]))):n.enemy.state={t:"idle",prog:0}),L.forEach((function(n){u(n,t,Pn)&&(n.state={t:"idle"},o(n.fill,n.tile))})),L=L.filter((function(t){return"transition"===t.state.t})),f.forEach((function(t){if(0!==t.length&&t.length%3==0){var e=10*Math.pow(t.length/3,2);n.score.set(n.score.get()+e),v.push(Jn(t,e)),t.forEach((function(t){t.state={t:"dying",prog:0},P.push(t)})),null==n.enemy?n.enemy=gn(g):(n.enemy.boosts+=2*t.length,n.enemy.waitSec=.99*n.enemy.waitSec),c.buzz(t.length/3)}})),P.forEach((function(n){"dying"===n.state.t&&(n.state.prog+=t,n.state.prog>=1&&(x.tileSet(n.tile,void 0),n.state={t:"idle"},v.push.apply(v,function(t){return[$t(t.pos,un,cn,an),$t(xt(t.pos,it(_t.x/2,0)),on,cn,an),$t(xt(t.pos,it(0,_t.y/2)),rn,cn,an),$t(xt(t.pos,it(_t.x/2,_t.y/2)),en,cn,an)]}(n))))})),P=P.filter((function(t){return"dying"===t.state.t})),v.forEach((function(n){n.life-=t,n.pos=mt(Mt(n.vel,t),n.pos)})),n.particles=v.filter((function(t){return t.life>0}))},u=function(t,n,e){if("transition"!==t.state.t)return!1;t.state.prog+=n;var r=t.state.prog/e;return r>1?(t.pos=t.state.to,!0):(t.pos=function(t,n,e){return mt(Mt(t,1-e),Mt(n,e))}(t.state.from,t.state.to,r),!1)},a=function(){var t=rt(!document.hidden).listen((function(t){if(t){var r=Date.now();n.forEach((function(t){t.id=window.setTimeout(t.cb,Math.max(0,t.time-r))})),e.forEach((function(t){t.id=window.requestAnimationFrame(t.cb)}))}else n.forEach((function(t){window.clearTimeout(t.id),t.id=void 0})),e.forEach((function(t){null!=t.id&&(window.cancelAnimationFrame(t.id),t.id=void 0)}))})),n=new Set,e=new Set;return z(S((function(){t.set(!document.hidden)}))(document)),{visible:t,interval:function(e,r){var i=function(){try{e()}finally{o.time=Date.now()-r,o.id=window.setTimeout(i,r)}},o={cb:i,id:t.get()?window.setTimeout(i,r):void 0,time:Date.now()+r};n.add(o),z((function(){null!=o.id&&window.clearTimeout(o.id),n.delete(o)}))},raf:function(n){var r=function(){try{n()}finally{i.id=window.requestAnimationFrame(r)}},i={cb:r,id:t.get()?window.requestAnimationFrame(r):void 0};e.add(i),z((function(){null!=i.id&&window.cancelAnimationFrame(i.id),e.delete(i)}))}}}(),c=Ot(a),l=(n=document.body,r={},z(m((function(t,n){0===r[n.key]&&(r[n.key]=1)}))(n)),z(w((function(t,n){3===r[n.key]&&(r[n.key]=4)}))(n)),{Key:function(t){return r[t]=0,{down:function(){return 2===r[t]||3===r[t]},justDown:function(){return 2===r[t]}}},step:function(){for(var t in r)r[t]%3!=0&&(r[t]=(r[t]+1)%6)}}),d=l.Key("ArrowDown"),y=l.Key("ArrowLeft"),p=l.Key("ArrowRight"),h=l.Key("ArrowUp"),g=function(){var t=rt(it(window.innerWidth,window.innerHeight));return z(b((function(){t.set(it(window.innerWidth,window.innerHeight))}))(window)),t}(),M=Et(g,(function(t){var n=Math.max(1,Math.min(Math.floor(t.x/256),Math.floor(t.y/256))),e=lt(t,n);return{center:yt(lt(e,2)),size:e,zoom:n}})),k=rt({t:"title"}),D=Et(k,(function(t){return"title"===t.t?void 0:t.round})),P=[],L=[];return a.visible.listen((function(t){var n=k.get();"play"!==n.t||t||n.paused.set(!0)})),e(I(jn,Z("top left"),U(M,(function(n){var e=n.size,r=n.zoom;return t(tt("".concat(e.x,"px"),"".concat(e.y,"px")),X("scale(".concat(r,")")))})),e(K(D,(function(n){return I(jn,e(A(U(M,(function(n){var e=n.size;return t(v(e.x,e.y))})),vn(M,(function(t){a.raf((function(){var e=k.get();if("play"===e.t&&e.paused.get())c.noiseLevel.set(0);else{l.step(),o(1/60,n);var r=n.enemy,i=n.goal,u=n.particles,a=n.player,f=n.world;t.clear(),t.track(a,(function(){t.world(f),t.thing(i),"end"===e.t&&null==r||t.player(a),"play"===e.t&&null!=r&&t.thing(r),t.particles(u)})),"play"===e.t&&null!=r&&t.darkness(function(t,n){return Math.min(Math.max(0,(11*_t.x-ht(gt(t.pos,n.pos)))/(11*_t.x)),1)}(r,a)),c.noiseLevel.set(function(t){if("play"!==t.t)return 0;var n=t.round,e=n.enemy,r=n.player;if(null==e)return 0;var i=gt(r.tile,e.tile);return Math.min(Math.max(0,(10-(Math.abs(i.x)+Math.abs(i.y)))/10),1)}(e))}}))})))))})),F(k,(function(n){return"end"===n.t?function(n,r,i){var o=i.menu,u=i.retry,a=function(){c.set(c.get()+1),c.get()<5&&setTimeout(a,1e3)},c=rt(0),f=rt(!1),l=te(),s=ee();return setTimeout(a,2e3),I(Hn,e(I(On,U(c,(function(t){return J(t>=1?1:0)})),e(r.moved?"".concat(s," ").concat(ne()," around for ").concat(r.time.get().toFixed(1)," ").concat(l," seconds."):"".concat(s," didn't move."))),I(On,U(c,(function(t){return J(t>=2?1:0)})),e(0===r.score.get()?"".concat(s," didn't score any points."):"".concat(s," scored ").concat(r.score.get()," ").concat(l," points."))),E(On,U(c,(function(t){return J(t>=3?1:0)})),e("".concat(s," Died."))),I(On,U(c,(function(t){return J(t>=4?1:0)})),Un,e(R(e("Retry"),x((function(){f.get()||(f.set(!0),setTimeout((function(){u()}),2e3),n.button())})))," ",R(e("Menu"),x((function(){f.get()||(f.set(!0),setTimeout((function(){o()}),2e3),n.button())}))))),I(Ln,U(f,(function(n){return t(J(n?1:0),Nn(!n))})))))}(c,n.round,{menu:function(){k.set({t:"title"})},retry:function(){k.set({t:"prePlay",round:Yn()})}}):"title"===n.t?function(n,r){var i=r.play,o=function(){u.set(u.get()+1),u.get()<4&&setTimeout(o,2e3)},u=rt(0),a=rt(!1),c=$n(),l=_n();return setTimeout(o,1e3),I(Hn,e(T(On,U(u,(function(t){return J(t>=1?1:0)})),e('"'.concat(c,' in Threes"'))),I(On,U(u,(function(t){return J(t>=2?1:0)})),jn,Y("96px"),e(C(e("- Some ".concat(l))))),I(On,U(u,(function(t){return J(t>=3?1:0)})),Un,e(R(e("Play"),U(a,s),x((function(){a.get()||(a.set(!0),setTimeout((function(){i()}),2e3),n.button())})))," ",R(U(n.muted,(function(t){return f(t?"Unmute":"Mute")})),U(a,s),x((function(){n.muted.set(!n.muted.get()),n.button()}))))),I(zn,j(0),Y(".5em"),On,U(u,(function(t){return J(t>=4?1:0)})),e(C(e("Arrow Keys to Move")))),I(Ln,U(a,(function(n){return t(J(n?1:0),Nn(!n))})))))}(c,{play:function(){k.set({t:"prePlay",round:Yn()})}}):"play"===n.t?function(n,r,i){return I(zn,Y(0),tt("100%"),V(0),e(K(r,(function(){return I(N("#fff"),Bn,qn,e(Wt(90,90,Zt(Yt("rgba(0, 0, 0, .125)"),Vt(0,0,30,90),Vt(60,0,30,90)))))})),I(zn,Kn,Y("10px"),Z("top left"),V("10px"),U(i.ttl,(function(n){var e=n<5?(5-Math.floor(n))/5:0;return t(N(n>0?"hsl(0, ".concat(100*e,"%, ").concat(40*e,"%)"):""),Gn(0===n),f("".concat(n.toFixed(1),"s")),X("scale(".concat(1+e,")")))}))),I(zn,Kn,Q("10px"),V("10px"),U(i.score,(function(t){return f(t)}))),I(zn,Y("10px"),j("10px"),e(R(Fn,U(n.muted,(function(t){return f(t?"Unmute":"Mute")})),x((function(){n.muted.set(!n.muted.get()),n.button()}))))),I(zn,Q("10px"),j("10px"),e(R(Fn,U(r,(function(t){return f(t?"Unpause":"Pause")})),x((function(){r.set(!r.get()),n.button()})))))))}(c,n.paused,n.round):(r=function(){k.set({t:"play",paused:rt(!1),round:n.round})},i=rt(!1),setTimeout((function(){i.set(!0),setTimeout(r,1500)})),I(Ln,On,U(i,(function(t){return J(t?0:1)}))));var r,i})))))},M((function(){var t=P().start();q((function(){!function(t){t.textContent=""}(Dt),Pt()(Dt)})),t.stop()}))(window)}();
