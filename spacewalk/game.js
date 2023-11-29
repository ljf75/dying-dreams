var It={};function W(i,...t){(It[i]||[]).map(s=>s(...t))}var Q,Z;function V(){return Z}function P(i){if(Q=document.getElementById(i)||i||document.querySelector("canvas"),!Q)throw Error("You must provide a canvas element for the game");return Z=Q.getContext("2d"),Z.imageSmoothingEnabled=!1,W("init"),{canvas:Q,context:Z}}var F=class{constructor({spriteSheet:t,frames:s,frameRate:e,loop:n=!0}){this.spriteSheet=t,this.frames=s,this.frameRate=e,this.loop=n;let{width:h,height:a,margin:r=0}=t.frame;this.width=h,this.height=a,this.margin=r,this._f=0,this._a=0}clone(){return new F(this)}reset(){this._f=0,this._a=0}update(t=1/60){if(!(!this.loop&&this._f==this.frames.length-1))for(this._a+=t;this._a*this.frameRate>=1;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate}render({x:t,y:s,width:e=this.width,height:n=this.height,context:h=V()}){let a=this.frames[this._f]/this.spriteSheet._f|0,r=this.frames[this._f]%this.spriteSheet._f|0;h.drawImage(this.spriteSheet.image,r*this.width+(r*2+1)*this.margin,a*this.height+(a*2+1)*this.margin,this.width,this.height,t,s,e,n)}};function pt(){return new F(...arguments)}pt.prototype=F.prototype;pt.class=F;var Nt=/(jpeg|jpg|gif|png)$/,Kt=/(wav|mp3|ogg|aac)$/,kt=/^\//,qt=/\/$/,Et=new WeakMap,Wt="",zt="",Bt="";function b(i,t){return new URL(i,t).href}function yt(i,t){return[i.replace(qt,""),i?t.replace(kt,""):t].filter(s=>s).join("/")}function wt(i){return i.split(".").pop()}function mt(i){let t=i.replace("."+wt(i),"");return t.split("/").length==2?t.replace(kt,""):t}function Jt(i){return{wav:i.canPlayType('audio/wav; codecs="1"'),mp3:i.canPlayType("audio/mpeg;"),ogg:i.canPlayType('audio/ogg; codecs="vorbis"'),aac:i.canPlayType("audio/aac;")}}var S={},m={},$={};function xt(){window.__k||(window.__k={dm:Et,u:b,d:$,i:S})}function Qt(i){return xt(),new Promise((t,s)=>{let e,n,h;if(e=yt(Wt,i),S[e])return t(S[e]);n=new Image,n.onload=function(){h=b(e,window.location.href),S[mt(i)]=S[e]=S[h]=this,W("assetLoaded",this,i),t(this)},n.onerror=function(){s("Unable to load image "+e)},n.src=e})}function Zt(i){return new Promise((t,s)=>{let e=i,n,h,a,r;if(n=new Audio,h=Jt(n),i=[].concat(i).reduce((u,d)=>u||(h[wt(d)]?d:null),0),!i)return s("cannot play any of the audio formats provided "+e);if(a=yt(zt,i),m[a])return t(m[a]);n.addEventListener("canplay",function(){r=b(a,window.location.href),m[mt(i)]=m[a]=m[r]=this,W("assetLoaded",this,i),t(this)}),n.onerror=function(){s("Unable to load audio "+a)},n.src=a,n.load()})}function Vt(i){xt();let t,s;return t=yt(Bt,i),$[t]?Promise.resolve($[t]):fetch(t).then(e=>{if(!e.ok)throw e;return e.clone().json().catch(()=>e.text())}).then(e=>(s=b(t,window.location.href),typeof e=="object"&&Et.set(e,s),$[mt(i)]=$[t]=$[s]=e,W("assetLoaded",e,i),e))}function Ct(...i){return xt(),Promise.all(i.map(t=>{let s=wt([].concat(t)[0]);return s.match(Nt)?Qt(t):s.match(Kt)?Zt(t):Vt(t)}))}function bt(i,t){let s=Math.sin(t),e=Math.cos(t),n=i.x*e-i.y*s,h=i.x*s+i.y*e;return{x:n,y:h}}function _t(i,t){return Math.floor(Math.random()*(t-i+1))+i}function Rt(i,t,s){return Math.min(Math.max(i,s),t)}function j(i,t){return i.rotation||t.rotation?null:([i,t]=[i,t].map(s=>jt(s)),i.x<t.x+t.width&&i.x+i.width>t.x&&i.y<t.y+t.height&&i.y+i.height>t.y)}function jt(i){let{x:t=0,y:s=0,width:e,height:n}=i.world||i;return i.mapwidth&&(e=i.mapwidth,n=i.mapheight),i.anchor&&(t-=e*i.anchor.x,s-=n*i.anchor.y),e<0&&(t+=e,e*=-1),n<0&&(s+=n,n*=-1),{x:t,y:s,width:e,height:n}}var A=class{constructor(t=0,s=0,e={}){this.x=t,this.y=s,e._c&&(this.clamp(e._a,e._b,e._d,e._e),this.x=t,this.y=s)}add(t){return new A(this.x+t.x,this.y+t.y,this)}subtract(t){return new A(this.x-t.x,this.y-t.y,this)}scale(t){return new A(this.x*t,this.y*t)}normalize(t=this.length()){return new A(this.x/t,this.y/t)}dot(t){return this.x*t.x+this.y*t.y}length(){return Math.hypot(this.x,this.y)}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}angle(t){return Math.acos(this.dot(t)/(this.length()*t.length()))}clamp(t,s,e,n){this._c=!0,this._a=t,this._b=s,this._d=e,this._e=n}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?Rt(this._a,this._d,t):t}set y(t){this._y=this._c?Rt(this._b,this._e,t):t}};function E(){return new A(...arguments)}E.prototype=A.prototype;E.class=A;var Yt=class{constructor(t){return this.init(t)}init(t={}){this.position=E(),this.velocity=E(),this.acceleration=E(),this.ttl=Infinity,Object.assign(this,t)}update(t){this.advance(t)}advance(t){let s=this.acceleration;t&&(s=s.scale(t)),this.velocity=this.velocity.add(s);let e=this.velocity;t&&(e=e.scale(t)),this.position=this.position.add(e),this._pc(),this.ttl--}get dx(){return this.velocity.x}get dy(){return this.velocity.y}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}isAlive(){return this.ttl>0}_pc(){}},gt=()=>{},te="position:absolute;left:-9999px";function Mt(i,t){let s=t.parentNode;if(i.setAttribute("data-kontra",""),s){let e=s.querySelector("[data-kontra]:last-of-type")||t;s.insertBefore(i,e.nextSibling)}else document.body.appendChild(i)}var tt=class extends Yt{init({width:t=0,height:s=0,context:e=V(),render:n=this.draw,update:h=this.advance,children:a=[],anchor:r={x:0,y:0},sx:u=0,sy:d=0,opacity:_=1,rotation:D=0,scaleX:T=1,scaleY:g=1,...O}={}){this.children=[],super.init({width:t,height:s,context:e,anchor:r,sx:u,sy:d,opacity:_,rotation:D,scaleX:T,scaleY:g,...O}),this._di=!0,this._uw(),a.map(l=>this.addChild(l)),this._rf=n,this._uf=h}update(t){this._uf(t),this.children.map(s=>s.update&&s.update(t))}render(t){let s=this.context;s.save(),(this.x||this.y)&&s.translate(this.x,this.y),this.rotation&&s.rotate(this.rotation),(this.sx||this.sy)&&s.translate(-this.sx,-this.sy),(this.scaleX!=1||this.scaleY!=1)&&s.scale(this.scaleX,this.scaleY);let e=-this.width*this.anchor.x,n=-this.height*this.anchor.y;(e||n)&&s.translate(e,n),this.context.globalAlpha=this.opacity,this._rf(),(e||n)&&s.translate(-e,-n);let h=this.children;t&&(h=h.filter(t)),h.map(a=>a.render&&a.render()),s.restore()}draw(){}_pc(t,s){this._uw(),this.children.map(e=>e._pc())}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t,this._pc()}set y(t){this.position.y=t,this._pc()}get width(){return this._w}set width(t){this._w=t,this._pc()}get height(){return this._h}set height(t){this._h=t,this._pc()}_uw(){if(!this._di)return;let{_wx:t=0,_wy:s=0,_wo:e=1,_wr:n=0,_wsx:h=1,_wsy:a=1}=this.parent||{};this._wx=this.x,this._wy=this.y,this._ww=this.width,this._wh=this.height,this._wo=e*this.opacity,this._wr=n+this.rotation;let{x:r,y:u}=bt({x:this.x,y:this.y},n);this._wx=r,this._wy=u,this._wsx=h*this.scaleX,this._wsy=a*this.scaleY,this._wx=this.x*h,this._wy=this.y*a,this._ww=this.width*this._wsx,this._wh=this.height*this._wsy,this._wx+=t,this._wy+=s}get world(){return{x:this._wx,y:this._wy,width:this._ww,height:this._wh,opacity:this._wo,rotation:this._wr,scaleX:this._wsx,scaleY:this._wsy}}addChild(t,{absolute:s=!1}={}){this.children.push(t),t.parent=this,t._pc=t._pc||gt,t._pc()}removeChild(t){let s=this.children.indexOf(t);s!==-1&&(this.children.splice(s,1),t.parent=null,t._pc())}get opacity(){return this._opa}set opacity(t){this._opa=t,this._pc()}get rotation(){return this._rot}set rotation(t){this._rot=t,this._pc()}setScale(t,s=t){this.scaleX=t,this.scaleY=s}get scaleX(){return this._scx}set scaleX(t){this._scx=t,this._pc()}get scaleY(){return this._scy}set scaleY(t){this._scy=t,this._pc()}};function X(){return new tt(...arguments)}X.prototype=tt.prototype;X.class=tt;var et=class extends X.class{init({image:t,width:s=t?t.width:void 0,height:e=t?t.height:void 0,...n}={}){super.init({image:t,width:s,height:e,...n})}get animations(){return this._a}set animations(t){let s,e;this._a={};for(s in t)this._a[s]=t[s].clone(),e=e||this._a[s];this.currentAnimation=e,this.width=this.width||e.width,this.height=this.height||e.height}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){super.advance(t),this.currentAnimation&&this.currentAnimation.update(t)}draw(){this.image&&this.context.drawImage(this.image,0,0,this.image.width,this.image.height),this.currentAnimation&&this.currentAnimation.render({x:0,y:0,width:this.width,height:this.height,context:this.context}),this.color&&(this.context.fillStyle=this.color,this.context.fillRect(0,0,this.width,this.height))}};function G(){return new et(...arguments)}G.prototype=et.prototype;G.class=et;var ee=/(\d+)(\w+)/;function ie(i){let t=i.match(ee),s=+t[1],e=t[2];return{size:s,unit:e,computed:s}}var it=class extends X.class{init({text:t="",textAlign:s="",lineHeight:e=1,font:n=V().font,...h}={}){t=""+t,super.init({text:t,textAlign:s,lineHeight:e,font:n,...h}),this._p()}get width(){return this._w}set width(t){this._d=!0,this._w=t,this._fw=t}get text(){return this._t}set text(t){this._d=!0,this._t=t}get font(){return this._f}set font(t){this._d=!0,this._f=t,this._fs=ie(t).computed}get lineHeight(){return this._lh}set lineHeight(t){this._d=!0,this._lh=t}render(){this._d&&this._p(),super.render()}_p(){this._s=[],this._d=!1;let t=this.context;if(t.font=this.font,!this._s.length&&this._fw){let s=this.text.split(" "),e=0,n=2;for(;n<=s.length;n++){let h=s.slice(e,n).join(" ");t.measureText(h).width>this._fw&&(this._s.push(s.slice(e,n-1).join(" ")),e=n-1)}this._s.push(s.slice(e,n).join(" "))}if(!this._s.length&&this.text.includes(`
`)){let s=0;this.text.split(`
`).map(e=>{this._s.push(e),s=Math.max(s,t.measureText(e).width)}),this._w=this._fw||s}this._s.length||(this._s.push(this.text),this._w=this._fw||t.measureText(this.text).width),this.height=this._fs+(this._s.length-1)*this._fs*this.lineHeight,this._uw()}draw(){let t=0,s=this.textAlign,e=this.context;s=this.textAlign||(e.canvas.dir==="rtl"?"right":"left"),t=s==="right"?this.width:s==="center"?this.width/2|0:0,this._s.map((n,h)=>{e.textBaseline="top",e.textAlign=s,e.fillStyle=this.color,e.font=this.font,e.fillText(n,t,this._fs*this.lineHeight*h)})}};function C(){return new it(...arguments)}C.prototype=it.prototype;C.class=it;function se(i){let t=i.canvas;i.clearRect(0,0,t.width,t.height)}function Xt({fps:i=60,clearCanvas:t=!0,update:s=gt,render:e,context:n=V()}={}){if(!e)throw Error("You must provide a render() function");let h=0,a=1e3/i,r=1/i,u=t?se:gt,d,_,D,T,g;function O(){if(_=requestAnimationFrame(O),D=performance.now(),T=D-d,d=D,!(T>1e3)){for(W("tick"),h+=T;h>=a;)g.update(r),h-=a;u(n),g.render()}}return g={update:s,render:e,isStopped:!0,start(){d=performance.now(),this.isStopped=!1,requestAnimationFrame(O)},stop(){this.isStopped=!0,cancelAnimationFrame(_)},_frame:O,set _last(l){d=l}},g}var ne={set(i,t,s){return t.startsWith("_")||(i._d=!0),Reflect.set(i,t,s)}},Dt={start(i){return i?1:0},center(){return .5},end(i){return i?0:1}},st=class extends X.class{init({flow:t="column",align:s="start",justify:e="start",colGap:n=0,rowGap:h=0,numCols:a=1,dir:r="",breakpoints:u=[],...d}={}){return super.init({flow:t,align:s,justify:e,colGap:n,rowGap:h,numCols:a,dir:r,breakpoints:u,...d}),this._p(),new Proxy(this,ne)}addChild(t){this._d=!0,super.addChild(t)}removeChild(t){this._d=!0,super.removeChild(t)}render(){this._d&&this._p(),super.render()}destroy(){this.children.map(t=>t.destroy&&t.destroy())}_p(){this._d=!1,this.breakpoints.map(l=>{l.metric.call(this)&&this._b!==l&&(this._b=l,l.callback.call(this))});let t=this._g=[],s=this._cw=[],e=this._rh=[],n=this.children,h=this._nc=this.flow==="column"?1:this.flow==="row"?n.length:this.numCols,a=0,r=0;for(let l=0,f;f=n[l];l++){t[a]=t[a]||[],f._p&&f._p(),e[a]=Math.max(e[a]||0,f.height);let N=f.colSpan||1,p=N;do s[r]=Math.max(s[r]||0,f.width/p),t[a][r]=f;while(p+r++<=h&&--N);r>=h&&(r=0,a++)}for(;r>0&&r<h;)t[a][r++]=!1;let u=t.length,d=[].concat(this.colGap),_=[].concat(this.rowGap);this._w=s.reduce((l,f)=>l+=f,0);for(let l=0;l<h-1;l++)this._w+=d[l%d.length];this._h=e.reduce((l,f)=>l+=f,0);for(let l=0;l<u-1;l++)this._h+=_[l%_.length];this._uw();let T=this.context.canvas.dir==="rtl"&&!this.dir||this.dir==="rtl";this._rtl=T,T&&(this._g=t.map(l=>l.reverse()),this._cw=s.reverse());let g=-this.anchor.y*this.height,O=[];this._g.map((l,f)=>{let N=-this.anchor.x*this.width;l.map((p,L)=>{if(p&&!O.includes(p)){O.push(p);let B=Dt[p.justifySelf||this.justify](this._rtl),J=Dt[p.alignSelf||this.align](),dt=p.colSpan||1,Ot=s[L];if(dt>1&&L+dt<=this._nc)for(let k=1;k<dt;k++)Ot+=s[L+k]+d[(L+k)%d.length];let Y=Ot*B,M=e[f]*J,K=0,q=0,{width:ut,height:ft}=p;if(p.anchor&&(K=p.anchor.x,q=p.anchor.y),B===0)Y=Y+ut*K;else if(B===.5){let k=K<.5?-1:K===.5?0:1;Y=Y+k*ut*B}else Y=Y-ut*(1-K);if(J===0)M=M+ft*q;else if(J===.5){let k=q<.5?-1:q===.5?0:1;M=M+k*ft*J}else M=M-ft*(1-q);p.x=N+Y,p.y=g+M}N+=s[L]+d[L%d.length]}),g+=e[f]+_[f%_.length]})}};function nt(){return new st(...arguments)}nt.prototype=st.prototype;nt.class=st;var St={},At={},ht={},H={Enter:"enter",Escape:"esc",Space:"space",ArrowLeft:"left",ArrowUp:"up",ArrowRight:"right",ArrowDown:"down"};function he(i){let t=H[i.code];ht[t]=!0,St[t]&&St[t](i)}function ae(i){let t=H[i.code];ht[t]=!1,At[t]&&At[t](i)}function re(){ht={}}function Lt(){let i;for(i=0;i<26;i++)H[i+65]=H["Key"+String.fromCharCode(i+65)]=String.fromCharCode(i+97);for(i=0;i<10;i++)H[48+i]=H["Digit"+i]=""+i;window.addEventListener("keydown",he),window.addEventListener("keyup",ae),window.addEventListener("blur",re)}function Pt(i,t,s="keydown"){let e=s=="keydown"?St:At;[].concat(i).map(n=>e[n]=t)}function v(i){return!!ht[i]}function vt(i){let t=[];return i._dn?t.push(i._dn):i.children&&i.children.map(s=>{t=t.concat(vt(s))}),t}var at=class extends X.class{init({id:t,name:s=t,cullObjects:e=!0,cullFunction:n=j,...h}){let a=this._dn=document.createElement("section");a.tabIndex=-1,a.style=te,a.id=t,a.setAttribute("aria-label",s),super.init({id:t,name:s,cullObjects:e,cullFunction:n,...h}),Mt(a,this.context.canvas);let r=this.context.canvas;this.camera=X({x:r.width/2,y:r.height/2,width:r.width,height:r.height,anchor:{x:.5,y:.5}}),this.camera._pc=()=>{super._pc.call(this.camera);let u=this.context.canvas;this.camera._wx=this.camera.x*this.scaleX,this.camera._wy=this.camera.y*this.scaleY}}show(){this.hidden=this._dn.hidden=!1;let t=this.children.find(s=>s.focus);t?t.focus():this._dn.focus(),this.onShow()}hide(){this.hidden=this._dn.hidden=!0,this.onHide()}addChild(t,s){super.addChild(t,s),vt(t).map(e=>{this._dn.appendChild(e)})}removeChild(t){super.removeChild(t),vt(t).map(s=>{Mt(s,this.context.canvas)})}destroy(){this._dn.remove(),this.children.map(t=>t.destroy&&t.destroy())}update(t){this.hidden||super.update(t)}lookAt(t){t=t.world||t;let s=t.x,e=t.y;t.scaleX&&(s/=t.scaleX,e/=t.scaleY),this.camera.x=s,this.camera.y=e,this._pc()}_pc(){super._pc(),this.camera&&this.camera._pc()}render(){let{x:t,y:s,width:e,height:n}=this.camera;this.sx=t*this.scaleX-e/2,this.sy=s*this.scaleY-n/2,this.hidden||super.render(h=>this.cullObjects?this.cullFunction(h,this.camera):!0)}onShow(){}onHide(){}};function R(){return new at(...arguments)}R.prototype=at.prototype;R.class=at;function oe(i){if(+i===i)return i;let t=[],s=i.split(".."),e=+s[0],n=+s[1],h=e;if(e<n)for(;h<=n;h++)t.push(h);else for(;h>=n;h--)t.push(h);return t}var rt=class{constructor({image:t,frameWidth:s,frameHeight:e,frameMargin:n,animations:h}={}){if(!t)throw Error("You must provide an Image for the SpriteSheet");this.animations={},this.image=t,this.frame={width:s,height:e,margin:n},this._f=t.width/s|0,this.createAnimations(h)}createAnimations(t){let s,e;for(e in t){let{frames:n,frameRate:h,loop:a}=t[e];if(s=[],n===void 0)throw Error("Animation "+e+" must provide a frames property");[].concat(n).map(r=>{s=s.concat(oe(r))}),this.animations[e]=pt({spriteSheet:this,frames:s,frameRate:h,loop:a})}}};function ot(){return new rt(...arguments)}ot.prototype=rt.prototype;ot.class=rt;var c={START:"start",STARTED:"started",TOO_FAST:"too fast",TOO_FAR:"too far",DOCKED:"docked",NO_OXYGEN:"no oxygen"},Ft={state:c.START,fuel:80,oxygen:90,distance:5},o=Ft,y=i=>{i.state===c.START?o=Ft:o={...o,...i}};var U={color:"white",font:"20px Arial, sans-serif"};var{canvas:w}=P(),I=C({text:"Start hit spacebar",...U,textAlign:"center"}),x=nt({x:w.width/2,y:w.height/2,anchor:{x:.5,y:.5},rowGap:15,justify:"center",children:[I]}),$t=R({id:"menu",onShow(){console.log("menu showed")},render:()=>{o.state===c.START&&(I.text=`Get back to the green hatch

Hit spacebar to start`,x.x=w.width/2,x.y=w.height/2),o.state===c.TOO_FAR&&(I.text=`Way to far from the hatch,
you lost to space!!!!`,x.x=w.width/2,x.y=w.height/2),o.state===c.TOO_FAST&&(I.text=`Hit the ship to fast,
you dead!!!!`,x.x=w.width/2,x.y=w.height/2),o.state===c.DOCKED&&(I.text=`Yay you docked with
${Math.round(o.fuel)}% fuel and ${Math.round(o.oxygen)}% oxygen left!`,x.x=w.width/2,x.y=w.height/2),o.state===c.NO_OXYGEN&&(I.text=`No more oxygen
you dead!!!!`,x.x=w.width/2,x.y=w.height/2)},children:[x]});var{canvas:le}=P(),Oe=C({text:"",...U}),lt=C({text:"Fuel Left: 0",...U,x:5,y:5}),Gt=C({text:"0m",...U,textAlign:"right",anchor:{x:1,y:0},x:le.width-5,y:5}),Ht=R({id:"info",render:()=>{o.fuel<10||o.oxygen<10?lt.color="red":lt.color="white",lt.text=`Fuel Left: ${Math.round(o.fuel)}% Oxygen Left: ${Math.round(o.oxygen)}%`,Gt.text=`${Math.round(o.distance)}m`},children:[Gt,lt]});var{canvas:z}=P(),Ut=2,ce=.4,de=700,ct=.5,ue=.05,Tt={w:10,h:30};Lt();Ct("assets/astronaut-sprite.png","assets/ship.png","assets/crash.wav","assets/jump.wav","assets/done2.wav").then(()=>{let i=G({x:z.width/3,y:z.height/2,anchor:{x:.5,y:.5},image:S["assets/ship.png"]}),t=G({x:i.x-i.width/2-Tt.w/2,y:z.height/2,anchor:{x:0,y:.5},color:"green",width:Tt.w,height:Tt.h}),s=ot({image:S["assets/astronaut-sprite.png"],frameWidth:15,frameHeight:20,animations:{idle:{frames:0}}});s.createAnimations({left:{frames:0},right:{frames:1}});let e=G({x:z.width/3*2,y:z.height/2,anchor:{x:.5,y:.5},animations:s.animations}),n=()=>{e.dx=0,e.dy=0,e.x=i.x+i.width/2+_t(0,200),e.y=i.y+_t(100,100),e.playAnimation("idle")},h=R({id:"game",children:[i,e,t],update:()=>{let r=E(e.x,e.y).distance(E(t.x,t.y))-e.width/2;if(o.state===c.STARTED&&y({distance:r,oxygen:o.oxygen-ue}),j(e,i)){if(e.dx=e.x>=i.x+i.width/2||e.x<=i.x-i.width/2?-1*e.dx:e.dx,e.dy=e.y>=i.y+i.height/2||e.y<=i.y-i.height/2?-1*e.dy:e.dy,e.velocity.length()>Ut){m["assets/crash.wav"].play(),y({state:c.TOO_FAST}),n();return}else if(o.state===c.STARTED){m["assets/jump.wav"].play();return}}if(j(e,t)){e.velocity.length()<ce?(m["assets/done2.wav"].play(),y({state:c.DOCKED})):e.velocity.length()>Ut?(m["assets/crash.wav"].play(),y({state:c.TOO_FAST}),n()):(m["assets/jump.wav"].play(),e.dx=e.x>=i.x+i.width/2||e.x<=i.x-i.width/2?-1*e.dx:e.dx,e.dy=e.y>=i.y+i.height/2||e.y<=i.y-i.height/2?-1*e.dy:e.dy);return}if(de<r){y({state:c.TOO_FAR});return}if(o.oxygen<=0){y({state:c.NO_OXYGEN});return}o.fuel<=0||(v("left")||v("a")?(y({fuel:o.fuel-ct}),e.playAnimation("left"),e.dx=e.dx-.1):(v("right")||v("d"))&&(e.playAnimation("right"),y({fuel:o.fuel-ct}),e.dx=e.dx+.1),v("up")||v("w")?(y({fuel:o.fuel-ct}),e.dy=e.dy-.1):(v("down")||v("s"))&&(y({fuel:o.fuel-ct}),e.dy=e.dy+.1))}});Pt("space",function(r){o.state===c.START&&(n(),y({state:c.STARTED})),(o.state===c.TOO_FAR||o.state===c.TOO_FAST||o.state===c.DOCKED||o.state===c.NO_OXYGEN)&&(n(),y({state:c.START}))}),Xt({update:function(){h.update()},render:function(){o.state!==c.STARTED?$t.render():(h.lookAt(e),h.render()),Ht.render()}}).start()});