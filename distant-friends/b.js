!function t(e,i,s){function a(o,r){if(!i[o]){if(!e[o]){var h="function"==typeof require&&require;if(!r&&h)return h(o,!0);if(n)return n(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[o]={exports:{}};e[o][0].call(d.exports,function(t){var i=e[o][1][t];return a(i||t)},d,d.exports,t,e,i,s)}return i[o].exports}for(var n="function"==typeof require&&require,o=0;o<s.length;o++)a(s[o]);return a}({1:[function(t,e,s){const a=80,n=1e3,o=130,r=6,h=5,l=n+o*r;zzfx=((...t)=>zzfxP(zzfxG(...t))),zzfxP=((...t)=>{let e=zzfxX.createBufferSource(),i=zzfxX.createBuffer(t.length,t[0].length,zzfxR);return t.map((t,e)=>i.getChannelData(e).set(t)),e.buffer=i,e.connect(zzfxX.destination),e.start(),e}),zzfxG=((t=1,e=.05,i=220,s=0,a=0,n=.1,o=0,r=1,h=0,l=0,d=0,c=0,f=0,u=0,p=0,x=0,y=0,w=1,g=0,M=0)=>{let m,b,v=2*Math.PI,Q=h*=500*v/zzfxR**2,z=(0<p?1:-1)*v/4,k=i*=(1+2*e*Math.random()-e)*v/zzfxR,L=[],S=0,C=0,P=0,I=1,A=0,T=0,R=0;for(s=99+zzfxR*s,g*=zzfxR,a*=zzfxR,n*=zzfxR,y*=zzfxR,l*=500*v/zzfxR**3,p*=v/zzfxR,d*=v/zzfxR,c*=zzfxR,f=zzfxR*f|0,b=s+g+a+n+y|0;P<b;L[P++]=R)++T%(100*x|0)||(R=o?1<o?2<o?3<o?Math.sin((S%v)**3):Math.max(Math.min(Math.tan(S),1),-1):1-(2*S/v%2+2)%2:1-4*Math.abs(Math.round(S/v)-S/v):Math.sin(S),R=(f?1-M+M*Math.sin(2*Math.PI*P/f):1)*(0<R?1:-1)*Math.abs(R)**r*t*zzfxV*(P<s?P/s:P<s+g?1-(P-s)/g*(1-w):P<s+g+a?w:P<b-y?(b-P-y)/n*w:0),R=y?R/2+(y>P?0:(P<b-y?1:(b-P)/y)*L[P-y|0]/2):R),S+=(m=(i+=h+=l)*Math.sin(C*p-z))-m*u*(1-1e9*(Math.sin(P)+1)%2),C+=m-m*u*(1-1e9*(Math.sin(P)**2+1)%2),I&&++I>c&&(i+=d,k+=d,I=0),!f||++A%f||(i=k,h=Q,I=I||1);return L}),zzfxV=.3,zzfxR=44100,zzfxM=((t,e,i,s=125)=>{let a,n,o,r,h,l,d,c,f,u,p,x,y,w,g,M=0,m=[],b=[],v=[],Q=0,z=0,k=1,L={},S=zzfxR/s*60>>2;for(;k;Q++)m=[k=c=p=y=0],i.map((s,p)=>{for(d=e[s][Q]||[0,0,0],k|=!!e[s][Q],g=y+(e[s][0].length-2-!c)*S,w=p==i.length-1,n=2,r=y;n<d.length+w;c=++n){for(h=d[n],f=n==d.length+w-1&&w||u!=(d[0]||0)|h|0,o=0;o<S&&c;o++>S-99&&f?x+=(x<1)/99:0)l=(1-x)*m[M++]/2||0,b[r]=(b[r]||0)-l*z+l,v[r]=(v[r++]||0)+l*z+l;h&&(x=h%1,z=d[1]||0,(h|=0)&&(m=L[[u=d[M=0]||0,h]]=L[[u,h]]||((a=[...t[u]])[2]*=2**((h-12)/12),h>0?zzfxG(...a):[])))}y=g});return[b,v]});const d=[[[[,0,441,.06,.01,.7,,,,,,,,.5,,,1.05],[.9,0,221,,,,,.7,,,,,,.1,.1,,.17],[,0,221,,,,,,,,,,,.3,,.05],[,0,109,,.12,.3,,.9,,,,.2,,.2,,,.7,.9],[.9,0,221,.01,.12,.3,,.9,,,,.2,,.2,,,.7,.9]],[[[,-1,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,1,32,,,,27,,,,32,,,,34,,,,31,,,,27,,,,31,,,,32,,,,29,,,,27,,,,25,,,,27,,,,29,,,,27,,,,25,,,,27,,,,],[2,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,],[3,1,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,27,,,,,,,,24,,,,,,,,24,,,,,,,-1],[4,-1,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,27,,,,,,,,24,,,,,,,,24,,,,,-1,,-1]],[[,-1,12,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,],[1,1,32,,,,27,,,,25,,,,27,,,,31,,,,27,,,,25,,,,27,,,,27,,,,25,,,,24,,,,25,,,,32,,,,31,,,,25,,,,24,,,,],[2,,20,,,,,,,,,,,,,,,,22,,,,,,,,2,,,,,,,,24,,,,,,,,2,,,,,,,,24,,,,,,,,24,,,,36,,,,],[3,1,,,,,,,,,20,,,,,,,,,,,,,,,,24,,-1,,27,,,,25,,,,,,,,-1,,,,24,,,,25,,-1,,24,,,,20,,-1,,8,,,,],[3,-1,,,,,,,,,,,,,32,,,,-1,,,,36,,,,,,-1,,36,,,,29,,,,,,,,-1,,,,29,,,,30,,-1,,27,,,,27,,-1,,29,,,,]],[[,-1,8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,12,,,,,,,,],[1,1,32,,,,27,,,,,,,,,,34,,31,,,,,,,,,,,,27,,,,25,,,,,,,,27,,,,,,24,,22,,,,25,,,,,,20,,24,,25,,],[2,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,,,,,,,,,2,,,,,,,,,,,,,,,,2,,,,2,,,,],[3,1,,,,,,,,,20,,,,24,,,,-1,,,,,,,,,,,,24,,,,25,,,,,,,,-1,,,,24,,,,25,,,,24,,,,20,,,,8,,,,],[3,-1,,,,,,,,,24,,,,27,,,,-1,,,,,,,,,,,,27,,,,29,,,,,,,,-1,,,,29,,,,30,,,,34,,,,27,,,,29,,,,]]],[0,1,2,1],170],[[[.9,0,109,,,.5,1,,,,,,,.2,,,1],[.7,0,439,.01,.1,,,,,,,,,.05,,,.5],[.9,0,219,,.05,,1,,,,,,,.2,,,.5],[1.7,0,119,,.05,,,,,,20,.1,,.7],[.15,0,221,.4,.2,2,1,2,,,,,.5,.2,.1,,.6]],[[[,-.5,13,,17,,20,,,,,,,,,,,,12,,17,,20,,,,,,,,,,,,13,,17,,20,,,,,,,,,,,,8,,12,,15,,,,,,,,,,,,],[1,1,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,24,,,,],[2,-1,,,32,,,,32,,,,30,,,,29,,,,29,,,,29,,,,24,,,,27,,,,32,,,,32,,,,34,,,,32,,,,32,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,29,,,,,,27,,,,,,25,,,,25,,,,,,25,,,,,,29,,,,29,,,,,,30,,,,,,29,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,1,,,,,,,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,17,,20,,,,,,,,,,,,13,,17,,20,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,20,,,,,,29,,25,,,,27,,,,32,,,,,,29,,25,,,,27,,,,24,,,,],[2,-1,,,29,,,,29,,,,27,,29,,30,,,,32,,,,32,,,,30,,32,,34,,,,25,,,,36,,,,36,,,,27,,,,27,,,,27,,,,27,,,,25,,],[2,1,,,25,,,,25,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,20,,,,20,,,,20,,,,20,,,,24,,,,24,,,,22,,,,20,,],[3,,1,,,,,,,,1,,,,1,,,,1,,,,,,1,,1,,,,1,,,,1,,,,,,,,1,,,,1,,,,1,,,,,,,,,,,,1,,1,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,15,,20,,,,,,,,,,,,10,,13,,18,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,24,,32,,,,,,29,,25,,27,,29,,30,,32,,,,,,29,,25,,27,,36,,,,34,,,,32,,,,30,,32,,29,,30,,27,,25,,],[2,-1,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,32,,,,32,,,,32,,,,32,,,,32,,],[2,1,,,25,,,,25,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,20,,,,20,,,,20,,,,20,,,,24,,,,24,,,,22,,,,20,,],[3,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,15,,20,,,,,,,,,,,,10,,13,,18,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,24,,32,,,,,,29,,25,,27,,29,,30,,32,,,,,,29,,25,,27,,36,,,,34,,,,32,,,,30,,32,,29,,30,,27,,25,,],[2,-1,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,32,,,,32,,,,32,,,,32,,,,32,,],[2,1,,,25,,,,25,,,,25,,,,25,,,,24,,,,24,,,,24,,,,24,,,,22,,,-1,22,,,,22,,,,22,,,,20,,,,20,,,,20,,,,20,,],[3,,1,,-1,,1,,-1,,,,,,,,-1,,1,,-1,,1,,-1,,,,,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,,,1,-1,1,,-1,,1,,-1,,-1,,-1,,1,,-1,,]],[[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[2,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[3,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,17,,20,,,,,,,,,,,,13,,17,,20,,,,,,,,,,,,8,,12,,15,,,,,,,,,,,,],[1,1,,,29,,,,,,,,,,20,,,,,,27,,,,,,20,,,,25,,,,,,24,,,,,,,,20,,,,,,,,25,,-1,,,,,,,,24,,,,],[2,-1,,,32,,,,32,,,,30,,,,29,,,,29,,,,29,,,,24,,,,27,,,,32,,,,32,,,,34,,,,32,,,,32,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,29,,,,,,27,,,,,,25,,,,25,,,,,,25,,,,,,29,,,,29,,,,,,30,,,,,,29,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-.5,13,,,,,,,,,,,,,,,,12,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,],[1,1,,,29,,,,,,,,,,20,,,,,,27,,,,,,20,,,,25,,,,,,24,,,,,,,,20,,,,,,,,,,,,,,,,,,24,,,,],[2,-1,,,32,,,,,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,,,,,,,,,,,,,25,,,,25,,,,,,,,,,,,29,,,,,,,,,,,,,,,,,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]],[[,-.5,13,,,,,,,,,,,,,,,,12,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,],[1,1,,,29,,,,,,,,,,20,,,,,,27,,,,,,20,,,,25,,,,,,24,,,,,,,,20,,,,,,,,,,,,,,,,,,24,,,,],[2,-1,,,32,,,,,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,,,,,,,,,,,,,25,,,,25,,,,,,,,,,,,29,,,,,,,,,,,,,,,,,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[4,-1,,,20,,,,,,,,,,,,,,,,18,,,,,,,,,,,,,,,,,,,,,,20,,,,,,,,,,,,,,,,,,,,,,,,],[4,1,,,25,,,,,,,,,,,,,,,,30,,,,,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,,,,,20,,,,,,,,]],[[,-.5,13,,,,,,,,,,,,,,,,12,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,8,,,,,,,,,,,,,,,,],[1,1,,,29,,,,,,,,,,20,,,,,,27,,,,,,20,,,,25,,,,,,24,,,,,,,,20,,,,,,,,,,,,,,,,,,24,,,,],[2,-1,,,32,,,,,,,,,,,,,,,,29,,,,29,,,,,,,,,,,,32,,,,,,,,,,,,,,,,,,,,29,,,,25,,,,27,,],[2,1,,,29,,,,,,,,,,,,,,,,25,,,,25,,,,,,,,,,,,29,,,,,,,,,,,,,,,,,,,,25,,,,20,,,,12,,],[3,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],[4,,8,,,,,,,,,,,,,,,,17,,,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,12,,,,,,,,15,,,,,,,,]],[[,-.5,13,,17,,20,,,,,,,,,,,,12,,15,,20,,,,,,,,,,,,10,,13,,18,,,,,,,,,,,,8,,12,,15,,,,,,,,12,,,,],[1,1,,,29,,25,,,,27,,24,,32,,,,,,29,,25,,27,,29,,30,,32,,,,,,29,,25,,27,,36,,,,34,,,,32,,,,30,,32,,29,,30,,27,,25,,],[2,-1,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,29,,,,30,,,,32,,,,32,,,,32,,,,32,,,,32,,],[2,1,,,25,,,,25,,,,25,,,,25,,,,24,,,,24,,,,24,,,,24,,,,22,,,-1,22,,,,22,,,,22,,,,20,,,,20,,,,20,,,,20,,],[3,,1,,-1,,1,,-1,,,,,,,,-1,,1,,-1,,1,,-1,,,,,,1,,-1,,1,,-1,,1,,-1,,1,,-1,,,,1,-1,1,,-1,,1,,-1,,-1,,-1,,1,,-1,,],[4,,17,,,,,,,,,,,,,,,,20,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,15,,,,,,,,,,,,,,,,]]],[7,0,1,5,2,3,6,3,8,9,1,2],89]];let c,f;function u(t){c&&c.stop(),(c=zzfxP(...f[t])).loop=!0}var p=!1;setTimeout(()=>{f=d.map(t=>zzfxM(...t)),p=!0},50);const g=[[.15,2,,.02,.03,.04,,,,170,100,10,,1,4,,.14,,.06],[,.5,,.02,.03,.15,,.8,,-401.1,-200,10,,.9,-4,,.23,.8,.03],[.8,,200,,.08,.22,,.3,1,-50,,,,1.3,1,,,,,1],[,,40,.02,.08,.3,4,0,,,-200,10,.99,1.7,,.4,.7,,.02],[,,500,.04,.1,.2,1,1.54,-4,30,,,,1.3,1,,,.9,.01],[1.1,,440,,,.09,,,.5,.6,250,.06,,.2,,.03,.1,1.5],[,,2,,,2,,,.8,.5,100,.06,,.3,,.06,.16],[.6,-2,300,.02,.3,.5,,,5,4,1,,,1,,.01,.1,.7],[.7,.4,350,,.09,,,,-20,50,10,10,,1,1,,.07,,.2],[.4,,40,,.04,.3,,,1,400,4,.1,,,1,,,,.06],[1.3,.3,800,,.07,.19,,.6,,,100,.09,.04,.4,,,.13,.88,.02]];function M(t){zzfx(...g[t])}var m={int:function(t){return Math.random()*(t||268435455)|0},range:function(t,e){return this.int(e-t)+t},b(t=50){return this.range(0,100)<t}};var b,v=(b=13312,function(){return(2147483647&(b=0|Math.imul(16807,b)))/2147483648}),Q={int:function(t){return v()*(t||268435455)|0},range:function(t,e){return t===e?t:this.int(e-t)+t},b(){return this.range(0,100)<50}};function z(t,e){var i=t.x-e.x,s=t.y-e.y;return Math.sqrt(i*i+s*s)}function k(t,e){z(t,e)<t.size+e.size&&t.collide(e)}var L,S={},C={};function P(t){return S[t]||L==t}function I(t,e){C[t]=e}window.onkeydown=(t=>S[t.code]=!0),window.onkeyup=(t=>S[t.code]=!1),window.addEventListener("keypress",function(t){C[t.code]&&C[t.code]()}),window.addEventListener("keydown",t=>{[32,37,38,39,40].indexOf(t.keyCode)>-1&&t.preventDefault()});var A=document.querySelector("canvas");A.onclick=(t=>{2!=at&&3!=at&&C.Enter(),pk=sk(t),pk&&C[pk]&&C[pk]()}),sk=(t=>(x=(t.pageX-A.offsetLeft)*tt,y=(t.pageY-A.offsetTop)*tt,low=st-200,x<it/3?y>low?"GearUp":"ArrowLeft":x>2*it/3?y>low?"GearDown":"ArrowRight":y>low?13:"Space")),A.onpointerdown=(t=>{pk=sk(t),pk&&(L=pk)}),A.onpointerup=(t=>{L=!1});var T={x:0,y:0},R={x:0,y:0};function q(t,e){return e-t.x+it/2}function E(t,e){return e-t.y+st/2}const F={renderShapes(t,e,i,s,a,n,o,r,h,l,d){l||(l=R),t.lineCap="round",e.forEach(e=>{"C"==e[0]?(this.renderCircle(t,e[3],e[4],e[5],e[6],e[1]*a+i,e[2]*a+s,a,r,h,!1,l,d),e[7]||this.renderCircle(t,e[3],e[4],e[5],e[6],-e[1]*a+i,e[2]*a+s,a,r,h,!0,l,d)):(this.renderPath(t,e[0],e[1],e[2],e[3],i,s,a,n,o,r,h,!1,l,d),e[4]||this.renderPath(t,e[0],e[1],e[2],e[3],i,s,a,1-n+1,o,r,h,!0,l,d))})},renderPath(t,e,i,s,a,n,o,r,h,l,d,c,f,u,p){t.strokeStyle=i,t.lineWidth=s,t.fillStyle=a,p||(n=q(u,n),o=E(u,o));let x=r/h;d*=x,c*=r;const y=f?n+d:n-d;t.translate(y,o-c);const w=f?-d:d;t.translate(w,c),t.rotate(l+Math.PI/2),t.translate(-w,-c),t.scale(x*(f?-1:1),r);const g=new Path2D(e);t.stroke(g),a&&t.fill(g),t.setTransform(1,0,0,1,0,0)},renderCircle(t,e,i,s,a,n,o,r,h,l,d,c,f){t.strokeStyle=i,t.lineWidth=s,t.fillStyle=a,f||(n=q(c,n),o=E(c,o)),h*=r,l*=r;const u=d?n+h:n-h;t.translate(u,o-l),t.scale(r*(d?-1:1),r),t.beginPath(),t.arc(0,0,e,0,2*Math.PI),t.stroke(),t.fill(),t.setTransform(1,0,0,1,0,0)}};class B{constructor(t,e){this.app=mt[t],this.dv=this.av=0,this.rotation=0,this.turnScale=0,ht.push(this),e.forEach(t=>t.push(this)),this.lists=e}u(t){this.dv+=this.av*t,this._dx=Math.cos(this.rotation)*this.dv,this._dy=Math.sin(this.rotation)*this.dv,this.x+=this._dx*t,this.y+=this._dy*t}destroy(){this.dead=!0,nt=!0}}class H extends B{constructor(t){super("coolStar",[rt[0]]),this.size=t,this.rotation=m.range(0,2*Math.PI),this.scale=t/5,this.koo=!0,this.camera=T}destroy(t){super.destroy();var e=m.range(1,3),i=new H(e);switch(t){case"kob":i.x=m.range(T.x-it/2,T.x+it/2),i.y=T.y-st/2-e;break;case"kot":i.x=m.range(T.x-it/2,T.x+it/2),i.y=T.y+st/2+e;break;case"kol":i.x=T.x+it/2-e,i.y=m.range(T.y-st/2,T.y+st/2);break;case"kor":i.x=T.x-it/2+e,i.y=m.range(T.y-st/2,T.y+st/2)}}}class D extends B{constructor(t,e,i){super(t,e),this.name=i}}class G extends B{constructor(t,e,i){super(t,e),this.name=i}specialRender(t){t.save();const e=q(R,this.x),i=E(R,this.y);t.translate(e,i),t.rotate(this.rotation+Math.PI/2),t.font=$(24),t.textAlign="center",t.fillStyle="#fff",t.fillText(this.name,0,30),t.restore()}}class N extends B{constructor(t,e,i,s){super("asteroid1",[dt,rt[2]]),this.isAsteroid=!0,this.x=t,this.y=e,this.size=30*i,this.scale=i,this.hits="p",this.hp=4*i,s||(this.deathInterval=setInterval(()=>{z(this,Kt)>l&&(0,clearInterval(this.deathInterval),this.destroy())},1e3)),this.rotSpeed=m.range(.5,1)*(m.b()?1:-1)}u(t){this.rotation+=this.rotSpeed*t}collide(t){t.crash(this)}}class Z extends B{constructor(){super(null,[rt[2]]),this.cities=[]}specialRender(t){t.globalAlpha=1;const e=q(R,this.x),i=E(R,this.y);var s=t.createLinearGradient(e-this.gax,i-this.gay,e+this.gax,i+this.gay);s.addColorStop(0,this.color1),s.addColorStop(1,this.color2),t.fillStyle=s,t.beginPath(),t.arc(e,i,this.visibleSize,0,2*Math.PI,!0),t.fill()}addCity(t,e,i){const s=new D(e,[rt[1]],i);s.x=this.x+this.visibleSize*Math.cos(t),s.y=this.y+this.visibleSize*Math.sin(t),s.scale=2,s.rotation=t,this.cities.push(s);const a=new G(e,[rt[2]],i);a.x=s.x,a.y=s.y,a.rotation=s.rotation}nearbyCity(t){return this.cities.find(e=>z(e,t)<100)}collide(t){if(t.landed);else if(t.dv<=0){t.landed=!0,Tt=1,t.dv=0,t.r=0,M(2),t.rotation=t.touch(this);const e=this.nearbyCity(t);e&&t.landOnCity(this,e)}else Mt("Use the reverse thrusters to land."),t.crash(this)}}class K{constructor(t){this.sf=t,this.s0=t/5,this.runTime=0}update(t){this.runTime+=t}render(t){var e=this.runTime/.2;if(e>1)lt.splice(lt.indexOf(this),1);else{if(e<.4){var i=e/.4,s=this.s0+i*(this.sf-this.s0);t.fillStyle="#eecc00",t.beginPath(),t.arc(q(R,this.x),E(R,this.y),s,0,2*Math.PI,!0),t.fill()}else{s=(i=(e-.4)/.6)*this.sf;t.fillStyle="#bb9900",t.beginPath(),t.arc(q(R,this.x),E(R,this.y),this.sf,0,2*Math.PI,!0),t.arc(q(R,this.x),E(R,this.y),s,0,2*Math.PI,!1),t.fill()}}}}class J extends B{constructor(t,e){super(null,[rt[1]]),this.x=t,this.y=e,this.radius=m.range(15,20),this.alpha=1,setTimeout(()=>{this.destroy()},m.range(300,600))}u(t){this.radius-=8*t,this.alpha-=2*t}specialRender(t){if(this.radius<=0||this.alpha<=0)return;const e=t.globalAlpha;t.globalAlpha=this.alpha;var i=flameColor();F.renderCircle(t,this.radius,i,1,i,this.x,this.y,1,0,0,!1,R),t.globalAlpha=e}}class _ extends B{constructor(t,e){super("mineral",[rt[1]]),this.x=t,this.y=e,this.isMineral=!0,this.hits="p",this.scale=1,this.size=40,this.dv=m.range(100,300),this.rotation=m.range(0,2*Math.PI),setTimeout(()=>{this.destroy()},m.range(3e3,5e3))}collide(){Et++,M(10),this.destroy()}}class O extends B{collide(){Ct=!0,fws[1]=Jt=Xt.find(t=>"Ceres"==t.name),this.rotSpeed=5,M(6)}reset(){Ct=!1,this.rotSpeed=0}u(t){this.rotation+=this.rotSpeed*t}}class U extends B{constructor(t,e){super("booster",[rt[1]]),this.x=t,this.y=e,this.hits="p",this.scale=1,this.size=60,this.rotSpeed=3}collide(){Kt.boost=5,M(7)}u(t){this.rotation+=this.rotSpeed*t}}class X extends B{constructor(){super("booster",[rt[1]]),this.x=Kt.x,this.y=Kt.y,this.scale=1,this.size=60,this.dv=-800,this.rotation=Kt.rotation+Math.PI}destroy(){this.dead||(super.destroy(),Pt=void 0)}pull(){this.rotation=Math.atan2(Kt.y-this.y,Kt.x-this.x),this.dv=100,Yt&&(z(Pt,Yt)<30?(Yt.hp--,Yt.scale-=.05,Yt.rotation=m.range(0,2*Math.PI),Yt.dv=m.range(100,200),Yt.hp<0&&Yt.catch(),this.dv=0):z(Pt,Yt)<100&&(Yt.rotation=Math.atan2(this.y-Yt.y,this.x-Yt.x)+m.range(0,Math.PI/20),Yt.dv=m.range(100,200),this.dv=0)),z(Kt,this)<50&&this.destroy()}u(t){if(super.u(t),0!==this.dv&&(this.dv-=2*this.dv*t),z(Kt,this)>300){let t=Math.atan2(this.y-Kt.y,this.x-Kt.x);this.x=300*Math.cos(t)+Kt.x,this.y=300*Math.sin(t)+Kt.y}}}FC=["#89C3CA","#C6EC8E","#FFCB4B","#E84583","#FA8072"];class W extends B{constructor(t,e){super("lake",[rt[1]]),this.x=t,this.y=e,this.scale=10}spawnFish(){Yt=new Y(Pt.x+m.range(-200,200),Pt.y+m.range(-200,200),FC[m.range(0,4)]),0==fishes&&Mt("Pull the rod to lure and catch the fish."),fishes>=3&&!At&&(Yt.gx=!0,Yt.scale=2,Yt.hp=10)}}class Y extends B{constructor(t,e,i){super(null,[rt[2]]),this.x=t,this.y=e,this.scale=.6,this.app=[["M49 17Q34 20 31 39Q31 59 42 70Q41 79 31 85Q40 90 49 88",i,2,i]],this.ai=setInterval(()=>this.act(),1e3),this.hp=4,setTimeout(()=>this.flee(),m.range(1e4,3e4))}flee(){this.dead||(this.destroy(),Mt("The fish dives into deep space"))}destroy(){this.dead||(super.destroy(),Yt=void 0,clearInterval(this.ai))}catch(){this.destroy(),fishes++,this.gx?(Mt("You capture Galaxian!"),At=!0,It=void 0,fishes=0,Pt.destroy()):Mt("You capture the space fish.")}act(){m.b(70)||(this.rotation=m.range(0,2*Math.PI),this.dv=m.range(50,100))}}class V extends B{collide(){At||It||(It=90,this.rotSpeed=5,M(6),Mt("Cast the fishing rod into the space cloud."))}reset(){Ct=!1,this.rotSpeed=0}u(t){this.rotation+=this.rotSpeed*t,It||(this.rotSpeed=0)}}const $=t=>t+"px Courier New";let tt,et,it=A.width,st=A.height;!function(){function t(){ih=window.innerHeight,iw=window.innerWidth,ih>iw?(rat=iw/ih,ih=Math.max(Math.min(ih,n),800),iw=ih*rat,et=!0):(rat=ih/iw,iw=Math.max(Math.min(iw,n),1200),ih=iw*rat,et=!1),tt=ih/A.scrollHeight,A.width=iw,A.height=ih,it=A.width,st=A.height}window.addEventListener("resize",t,!1),t()}();var at=0,nt=!1,ot=0;var rt=[[],[],[]],ht=[],lt=[],dt=[],ct=A.getContext("2d");function ft(t,e){if(!t.dead){t.specialRender&&t.specialRender(ct);(t.turnScale>0&&e||t.turnScale<0&&!e)&&1-Math.abs(t.turnScale),t.specialRender||F.renderShapes(ct,t.app,t.x,t.y,t.scale,1,t.rotation,49,49,t.camera)}}!function(t){function e(t){return window.requestAnimationFrame(function(){var e=Date.now(),i=e-ot;i>999?i=1/60:i/=1e3,ot=e,t(i)})}e(function i(s){t(s),e(i)})}(function(t){ct.fillStyle="#012247",ct.fillRect(0,0,A.width,A.height),rt.forEach(e=>e.forEach(e=>{let i;e.k&&e.k(),e.u&&e.u(t),ft(e),ft(e,!0),e.hits&&("p"===e.hits?k(e,Kt):dt.length&&dt.forEach(t=>k(e,t))),e.koo&&(e.y>T.y+st/2+e.size?i="kob":e.y<T.y-st/2-e.size?i="kot":e.x>T.x+it/2+e.size?i="kor":e.x<T.x-it/2-e.size&&(i="kol")),i&&e.destroy(i)})),nt&&(ht.filter(t=>1==t.dead).forEach(t=>{t.lists.forEach(e=>e.splice(e.indexOf(t),1))}),nt=!1,ht=ht.filter(t=>void 0===t.dead)),lt.forEach(e=>{e.update(t),e.render(ct)}),function(t,e){if(0==at)t.font=$(18),t.fillStyle="#00ff00",t.fillText("Loading...",10,50),p&&t.fillText(yt()+" to start",10,70);else if(1==at)t.font="64px 'Brush Script MT'",t.textAlign="center",t.fillStyle="#cf3436",t.fillText("Distant Friends",it/2,80),t.font=$(20),t.fillStyle="#ffffff",t.fillText(yt()+" to start",it/2,350),t.fillText("by Slashie, Mapedorr and QuietGecko",it/2,st-50),t.fillText("js13k21",it/2,st-30);else if(2==at||3==at||10==at){t.font=$(16),t.textAlign="left",t.fillStyle="#ffffff";for(let e=0;e<3;e++)t.fillText((e==_t?"> ":" ")+friendNames[e]+": "+friendHints[e],30,30+20*e);Et&&t.fillText("Selenium: "+Et,30,120),fishes&&t.fillText("Fishes: "+fishes,30,140),St>0&&t.fillText("Kestrel Run: "+St,30,160),It>0&&t.fillText("Galaxian Gate: "+It,30,180),t.textAlign="right",Kt.won&&t.fillText("Game Completed: "+Ut,it-30,30),t.textAlign="center",gt>0&&(gt-=e,t.fillText(wt,it/2,st/2-150));const i=Math.atan2(Kt.y-Jt.y,Kt.x-Jt.x)+Math.PI;F.renderShapes(t,mt.triangle,it/2,st-60,1,1,i,50,50,void 0,!0),t.fillStyle="#ffffff",t.fillText("to "+Jt.name+": "+Math.floor(z(Kt,Jt)-Jt.size),it/2,st-20),t.fillText(yt()+" to change",it/2,st-5),10!=at&&(et?(low=st-200,t.lineWidth=2,t.strokeStyle="#5b5e8b",t.beginPath(),t.moveTo(it/3,0),t.lineTo(it/3,st),t.moveTo(0,low),t.lineTo(it,low),t.moveTo(2*it/3,0),t.lineTo(2*it/3,st),t.stroke(),t.fillText("[Turn]",60,low-20),t.fillText("[Turn]",it-60,low-20),t.fillText("[Fire]",it/2,low-20),t.fillText("[Forward]",60,low+20),t.fillText("[Back]",it-60,low+20)):(t.textAlign="left",t.fillText("[Arrow Keys, Spacebar]",60,st-30)))}10==at&&(t.fillStyle="#000",t.globalAlpha=.5,t.fillRect(0,st-(et?250:180),it,et?195:125),t.globalAlpha=1,F.renderShapes(t,conversationApp,150,st-(et?190:120),2,1,-Math.PI/2,49,49,void 0,!0),t.font=$(24),t.fillStyle="#FFF",t.textAlign="left",function(t){wi=Math.floor((it-270)/ct.measureText("m").width),y=st-(et?220:150),words=t.split(" "),line="";for(;words.length;)w=words.splice(0,1)[0],line.length+w.length>wi&&(ct.fillText(line,250,y),y+=30,line=""),line+=w+" ",words.length||ct.fillText(line,250,y)}(Ht),t.textAlign="right",t.fillText("["+yt()+"]",it-20,st-65))}(ct,t)});const ut=[["Ceres",0,0,2e3,[["Cape Santos",.25,"capital"],["Los Pinos",1.25,"industrial"],["Creta",1.1,"town"],["Arkadia",3,"town"]],"#3C4258","#8CB1DE"],["Ilaria",4e3,4e3,400,[["Ilaria",.25,"capital"]],"#8CB1DE","#3B5D38"],["Juno",-1e4,13600,800,[["Havanna",.3,"town"],["Laandor",1.3,"town"],["Jamaza",.5,"town"]],"#B5A7A7","#CECCD1"],["Calisto",-1500,32e3,1e3,[["New Havanna",.1,"capital"]],"#65868B","#BBE1E4"],["Arland",17500,8800,1300,[["New Athenia",.1,"industrial"],["Moria",.3,"town"],["Andoban",.5,"town"],["Yandor",.7,"town"]],"#C3A171","#C5AB6E"]],pt=[{name:"Kori",findSequence:[{planet:"Ceres",city:"Creta",person:"dog",sequence:["Kori left Creta years ago... he said he was tired of the hectic life here.","He always wanted to live in the town of Arkadia, with some luck you'll find him there!"]},{planet:"Ceres",city:"Arkadia",person:"fox",sequence:["I heard you are looking for Kori. He used to mine the nearby Selenium fields... until he got tired of it.","I'm almost out of Selenium. If you bring me 10 orbs I'll tell you where I think he went."],quest:"getSel",questHint:"Bring 10 selenium orbs to Arkadia",reward:["Kori spent entire nights looking at Ilaria,\nthe green moon. If I where you I'd look for him\nthere."],hint:"Ilaria"},{planet:"Ilaria",city:"Ilaria",person:"lizard",sequence:["Bandi, is it really you? I feel like it's been a lifetime since we last met!","Please, stay at my place tonight! let's play some games and have fun like in the old times.","<The other day>","Ah... that was so fun. I recalled the old times, life was simpler then.","I hope to see you back sometime... don't forget me!"]}]},{name:"Ponchi",findSequence:[{planet:"Ceres",city:"Cape Santos",person:"rabbit",sequence:["I'm so bored here... my life feels empty.","I'll let you know about Ponchi... if you complete the Kestrel Run!","Reach the pinwheel near Juno and come back here in less than 80 seconds...","Go now!"],quest:"race",questHint:"Complete the Kestrel Run",reward:["Amazing, I feel alive again!","Ponchi's father got a job at an industrial plant in Arland","I bet they are still living there. Good luck!"],hint:"Arland?"},{planet:"Arland",city:"New Athenia",person:"cat",sequence:["I'm sorry, I don't recognize this person, but you may want to ask around the nearby towns"],hint:"Arland mining towns"},{planet:"Arland",city:"Andoban",person:"rabbit",sequence:["Are you the guy from Ceres, looking for my kid Kori?","It saddens me deeply to let you know that he is no longer with us.","Some years ago there was a great accident at the plant I was working on, in New Athenia.","That day Kori wanted to see what dad's job was like, he was always so curious.","I regret not having him stay at home. But nothing can be done now.","All we have now are the memories of the good times.","Here, please take this, so you never forget him.","<Received Kori's drum>"]}]},{name:"Patty",findSequence:[{planet:"Ceres",city:"Los Pinos",person:"cat",sequence:["Ah, Patty was only living here for school,","She returned to her hometown in Juno, Havanna."]},{planet:"Juno",city:"Havanna",person:"lizard",sequence:["All of my life I've looked for Galaxian...","I'll let you know about Patty if you bring him to me!"],quest:"fish",questHint:"Bring Galaxian to Havanna",reward:["I recall little Patty. She had to flee Juno after the second impact.","Those were hard times, the entire planet was flooded for years.","The few people that remained here relied heavily on the shipments from Ceres and Arland,","I believe Patty went with the group of settlers bound to Calisto."]},{planet:"Calisto",city:"New Havanna",person:"fox",sequence:["Hello my old friend!","I have fond memories of us at school.","Thank you for coming all the way to here. Let's celebrate!"]}]}],xt=[["Arland","Moria","dog","Most industrial complexes in this planet can be found around New Athenia."],["Arland","Yandor","dog","I can't wait to finish school so I start working at New Athenia."],["Juno","Laandor","dog","The Asterion pinwheel can summon Galaxian. It hovers far over Jamaza."],["Juno","Jamaza","dog","Galaxian will surface when 3 spacefish are captured."]];friendNames=["Kori","Ponchi","Patty"],friendHints=["Creta","Cape Santos","Los Pinos"],fws=[];const yt=()=>et?"Tap":"Enter";let wt,gt;function Mt(t){gt=5,wt=t}const mt={coolStar:[["M44 41Q49 14 56 41Q85 30 65 49Q77 73 55 59Q32 74 45 52Q18 50 44 41","#131047",2,"#5b5e8b","noflip"]],triangle:[["M24 59L50 13L73 56L44 49Z","#131047",2,"#5b5e8b","noflip"]],booster:[["M50 26Q43 51 17 50Q44 59 50 83Q52 56 77 49Q52 51 50 26Z","white",2,"white","noflip"]],pinwheel:[["M42 41L42 9L64 23L56 41L82 41L75 60L56 54L56 80L33 72L43 53L19 53L24 34L42 41L12 8L42 9M56 41L81 10L82 41M56 54L80 80L55 80M19 53L19 78L43 53L56 41M42 41L55 53","black",2,"red","noflip"]],rocket:[["M42 30L42 69L57 69L54 30","black",2,"white","noflip"],["M44 69L45 96L48 96L46 68","black",2,"brown","noflip"],["M54 69Q50 72 53 76Q60 76 58 81Q55 83 57 85","black",2,"none","noflip"],["M54 38L42 49L42 58L56 49Z","black",2,"red","noflip"],["M49 15L36 30L59 30Z","black",2,"red","noflip"],["M49 30L42 38L42 29L48 30","black",2,"red","noflip"],["M57 58L42 69L57 69Z","black",2,"red","noflip"]],mineral:[["C",50,50,14,"#e700dd",3,"#9a007e","noflip"]],ship:[["M49 82L28 82L26 88L49 88Z","#131047",2,"#5b5e8b"],["M49 77L26 77L24 85L49 85Z","#131047",2,"#5b5e8b"],["M28 71L15 69Q16 53 31 46Z","#b82782",2,"#eb29a4"],["M49 13Q33 17 30 35L25 73L28 76Q30 79 49 79Z","#dadde2",2,"#dadde2"],["C",50,50,14,"#6772dc",3,"#100e1b","noflip"],["M27 58L36 67L49 58L49 81L21 80Z","#b82782",2,"#eb29a4"]],gato:[["M37 15Q36 11 27 10Q22 19 29 26Z","#e7ad3f",2,"#e7ad3f"],["M34 18Q33 14 29 14Q26 18 31 25Z","#d66ead",2,"#d66ead"],["M50 10Q28 15 24 37A4 6 0 0 0 24 52Q34 59 50 58Z","#eeeaeb",2,"#eeeaeb"],["M50 10Q28 16 24 37Q47 33 57 14Z","#ecae41",2,"#ecae41"],["M42 34Q38 20 31 34","#733621",2,!1],["M50 38Q40 41 50 44","#dc7ab7",2,"#dc7ab7"],["M50 47Q45 47 42 45Q40 54 50 55","#c52c5a",2,"#c52c5a"]],lizard:[["M50 31L39 31Q36 22 28 22Q18 23 17 33Q9 42 9 52Q8 67 50 67Q91 68 92 52Q92 44 83 32Q81 22 72 22Q65 22 61 31L50 31","#477238",2,"#8FD032",1],["C",28,34,8,"#33272A",2,"#F8E398"],["M28 29Q26 33 28 38Q31 33 28 28","#33272A",2,"#33272A"],["M20 49Q22 58 49 57","#477238",2,"#8FD032"],["M40 48Q40 50 41 51Q42 53 45 53Q46 52 43 50Q43 48 39 48","#293F21",2,"#293F21"]],fox:[["M34 30Q26 21 11 16Q6 33 16 46M27 32","#673931",2,"#673931"],["M28 33Q24 27 17 25Q15 36 20 40","#e88a36",2,"#e88a36"],["M50 27Q16 27 15 51Q15 65 8 64Q1 86 50 86","#673931",2,"#e88a36"],["M50 58Q41 58 41 68Q19 69 8 64Q4 71 11 78Q20 86 50 86","#673931",2,"#fcf7be"],["M25 68Q20 68 19 64Q16 66 18 71","#673931",2,"#fcf7be"],["C",32,58,4,"#673931",2,"#673931"],["M50 67Q48 71 44 68","#673931",2,"#fcf7be"],["M50 61Q44 61 46 64Q48 67 50 67","#673931",2,"#673931"]],asteroid1:[["M63 23Q56 18 45 19Q38 26 32 27Q21 31 20 42Q30 51 29 58Q29 70 48 69Q52 60 59 61Q71 66 78 56Q68 45 80 36Q88 21 77 21Q68 19 63 23","#25242a",2,"#858390","noflip"]],city:[["M79 84L79 45L72 45L72 47L68 47L68 32L63 32L63 41L57 41L57 45L53 45L53 28A2 3 0 0 0 46 28L46 37L41 37L41 42L33 42A5 8 0 0 0 23 42L19 42L19 85","#59778f",2,"#59778f"]],lake:[["M73 18Q53 16 32 32Q26 46 30 58Q39 71 20 83Q12 93 28 93Q60 91 73 73Q95 53 83 33Q84 22 73 18","#021431",2,"#021431","noflip"]]},bt={fox:"head2,38,49,mouth1,f3a319,eff2f3,4c0c0c,,1,49,49",cat:"head1,38,49,mouth1,fff,fec8df,fec8df,,,",dog:"head1,38,49,mouth1,ffc556,fec8df,,,1,49,49",rabbit:"rabbitHead,35,50,mouth2,fff,FAD6FF,FAD6FF,FAD6FF,rabbitNose"},vt={head1:["M49 34Q34 34 28 42Q25 48 27 54Q29 60 49 61"],head2:["M49 33Q32 32 27 38L21 53Q29 62 49 61"],rabbitHead:["M49 31Q25 31 24 50Q9 52 8 67Q7 88 33 83Q41 81 50 81"],foxBeard:["M49 48Q46 49 46 51Q46 54 43 54L21 53Q30 62 49 61"],catBeard:["C",33,52,2],dogBeard:["C",33,52,2],rabbitBeard:["C",25,66,11],foxEars:["M38 32Q17 6 28 42","M35 34Q24 19 31 39"],catEars:["M37 36Q31 29 27 30Q24 36 27 44","M33 37Q27 31 29 41"],dogEars:["M37 35L33 31L24 32Q19 40 21 48Q29 46 32 37"],rabbitEars:["M36 34Q33 32 21 11Q14 0 8 8Q5 17 13 27Q20 36 27 42","M33 36Q26 25 21 17Q12 5 11 16Q11 25 29 41"],rabbitNose:["M50 67Q44 75 38 70"],mouth1:["M49 52Q47 55 47 54"],mouth2:["M50 60Q42 60 42 62Q45 67 50 67"]};function Qt(t){if(mt[t])return mt[t];var e=bt[t].split(","),i=[],s="#"+e[4];return i.push([vt[t+"Ears"][0],"#4c0c0c",2,s]),vt[t+"Ears"].length>1&&i.push([vt[t+"Ears"][1],"#"+e[6],1,"#"+e[6]]),i.push([vt[e[0]][0],"#4c0c0c",2,s]),vt[t+"Beard"]&&(path=vt[t+"Beard"],"C"==path[0]?i.push(["C",path[1],path[2],path[3],"#"+e[5],1,"#"+e[5]]):i.push([path[0],"#"+e[5],1,"#"+e[5]])),i.push(["C",e[1],e[2],2,"#4c0c0c",2,"#4c0c0c"]),i.push([vt[e[3]][0],"#4c0c0c",2,"#"+e[7]]),"1"==e[8]?i.push(["C",e[9],e[10],1,"#4c0c0c",2,"#4c0c0c","noFlip"]):e[8]&&i.push([vt[e[8]][0],"#4c0c0c",2,s]),i}const zt=3,kt=.2,Lt=.015;let St,Ct,Pt,It,At,Tt,Rt,qt=!1,Et=fishes=thrsfx=0;questCompleted=(t=>{if("getSel"==t){if(Et>=10)return Et-=10,!0}else if("race"==t){if(Ct&&St>0)return St=0,!0;St=0}else if("fish"==t)return At;return!1}),restartQuest=(t=>{"race"==t&&(St=80,Jt=fws[1]=junoPod,_t=1,junoPod.reset(),Mt("Reach the pinwheel and return."))}),setInterval(()=>{St>0&&St--,It>0&&!At&&--It<=0&&(fishes=0,It=void 0,Pt&&Pt.destroy(),Yt&&Yt.flee())},1e3),flameColor=(()=>Kt.boost?"#5555ff":"#ffe203");class Ft extends B{isCruising(){return!St&&!this.nearPlanet()&&this.dv>250}nearPlanet(){return Xt.find(t=>z(t,this)<l+t.size)}specialRender(t){if(Pt&&(t.lineWidth=3,t.strokeStyle="#fff",t.beginPath(),t.moveTo(it/2,st/2),t.lineTo(q(R,Pt.x),E(R,Pt.y)),t.stroke()),this.blastRadius>0){const e=this.x-75*Math.cos(this.rotation),i=this.y-75*Math.sin(this.rotation);F.renderCircle(t,Math.max(1,this.blastRadius+m.range(-5,5)),flameColor(),m.range(.5,2),flameColor(),e,i,1,0,0,!1,R)}F.renderShapes(t,mt.ship,this.x,this.y,this.scale,1+this.turnScale,this.rotation,50,50),F.renderShapes(t,mt.gato,this.x,this.y,.3*this.scale,1,this.rotation,50,30)}crash(t){let e=500*-Math.sign(this.dv);this.touch(t),this.boost=0,this.dv=e,Tt=1,M(3)}touch(t){let e=this.size+t.size+1;const i=Math.atan2(this.y-t.y,this.x-t.x);return this.x=t.x+Math.cos(i)*e,this.y=t.y+Math.sin(i)*e,this.av=0,this.dv=0,i}u(t){switch(super.u(t),2==Tt?this.cmd="t":this.landed||0!=Tt||(this.cmd="b"),this.cmd){case"n":this.av>0&&!this.boost&&M(1),this.av=0,Rt=1;break;case"t":0==this.av&&M(8),thrsfx>-1&&(M(0),thrsfx=0),Rt=1,this.av+=2e3*t,this.landed=!1,this.av>1e3&&(this.av=1e3);break;case"b":this.av-=200*t,(Rt-=t)<0&&(M(9),Rt=1)}if(this.boost&&(this.boost-=t,this.boost<=0&&(this.boost=0),this.av+=1,this.dv+=1500*t),Math.abs(this.av>0))if(this.blastRadius+=80*t,this.blastRadius=Math.min(30,this.blastRadius),this.blastRadius>20){const e=this.x+-70*Math.cos(this.rotation),i=this.y+-70*Math.sin(this.rotation);new J(e-4*this._dx*t,i-4*this._dy*t)}else thrsfx+=t*this.av;else this.blastRadius-=40*t,this.blastRadius=Math.max(0,this.blastRadius);this.rotation+=this.r*zt*t;var e=2*t;0!==this.dv&&(this.dv-=this.dv*e),Math.abs(this.turnScale)<.01?this.turnScale=0:this.turnScale<0?this.turnScale+=.01:this.turnScale>0&&(this.turnScale-=.01),!this.boost&&this.dv>2e3&&(this.dv=2e3),R.x=this.x,R.y=this.y,T.x+=.5*this._dx*t,T.y+=.5*this._dy*t}k(){2==at||3==at?(P(this.keys[0])?this.cmd="t":!this.landed&&P(this.keys[1])?this.cmd="b":this.cmd="n",this.landed||(this.r=0,P(this.keys[2])?(this.flipped=!0,this.turnScale-=Lt,this.turnScale<-kt&&(this.turnScale=-kt),this.r=-1):P(this.keys[3])&&(this.flipped=!0,this.turnScale+=Lt,this.turnScale>kt&&(this.turnScale=kt),this.r=1),P(this.keys[4])&&this.fire())):this.cmd="n"}fire(){if(!this.fireBlocked){if(this.fireBlocked=!0,setTimeout(()=>this.fireBlocked=!1,300),It)Pt?Pt.pull():Pt=new X;else{const t=50*(qt?1:-1);qt=!qt;let e=this.x+Math.sin(this.rotation)*t,i=this.y-Math.cos(this.rotation)*t;e+=15*Math.cos(this.rotation),i+=15*Math.sin(this.rotation),this.dv-=10,new jt(e,i,this.rotation+(qt?-1:1)*(Math.PI/30))}M(4)}}async landOnCity(t,e){const i=Zt[t.name+"-"+e.name];if(i){var s=i.quest&&questCompleted(i.quest);if(i.quest&&s||(await Gt(Qt(i.person),i.sequence),i.quest&&(restartQuest(i.quest),friendHints[i.friendIndex]=i.questHint)),i.friendIndex>=0&&(!i.quest||s)){delete Zt[t.name+"-"+e.name],i.reward&&await Gt(Qt(i.person),i.reward);var a="✅";if(i.next){const t=i.next;a=i.hint||t.planet+", "+t.city,Zt[t.planet+"-"+t.city]=t,fws[i.friendIndex]=Xt.find(e=>e.name==t.planet),_t==i.friendIndex&&(Jt=fws[_t])}else{M(6);let t=0;friendHints.forEach(e=>{e==a&&t++}),2==t&&(Kt.won=!0,Ut=Math.floor((Date.now()-Ot)/10)/100)}friendHints[i.friendIndex]=a}at=2}else await Dt(mt.gato,"Nothing interesting here."),at=2}}let Bt,Ht="Test";function Dt(t,e){return M(5),at=10,conversationApp=t,Ht=e,new Promise(t=>{Bt=t})}async function Gt(t,e){for(let i=0;i<e.length;i++)await Dt(t,e[i])}class jt extends B{constructor(t,e,i){super("rocket",[rt[2]]),this.x=t,this.y=e,this.rotation=i,setTimeout(()=>{this.av=800},m.range(400,500)),this.dv=-100,this.size=40,this.hits="a",this.scale=1,setTimeout(()=>this.explode(),m.range(3100,3300))}explode(){if(!this.dead){M(3);var t=new K(40);t.x=this.x,t.y=this.y,lt.push(t),this.destroy()}}collide(t){t.hp--,0==t.hp&&(new _(t.x,t.y),t.destroy()),this.explode()}}function Nt(){Xt=ut.map(t=>(function(t){var e=new Z;e.name=t[0],e.isPlanet=!0,e.x=t[1],e.y=t[2],e.size=t[3],e.visibleSize=e.size-72;var i=v()*(2*Math.PI);return e.gax=Math.cos(i)*e.size,e.gay=Math.sin(i)*e.size,e.color1=t[5],e.color2=t[6],e.scale=t[3],e.hits="p",t[4].forEach(t=>{e.addCity(Math.PI*t[1],"city",t[0])}),e})(t)),junoPod=new O("pinwheel",[rt[1]]),junoPod.name="Juno Pinwheel",junoPod.x=-11800,junoPod.y=13600,junoPod.size=30,junoPod.hits="p",junoPod.scale=1,junoPod.rotSpeed=0,gxPod=new V("pinwheel",[rt[1]]),gxPod.name="Galaxian Pinwheel",gxPod.x=Xt[2].x,gxPod.y=Xt[2].y+3e3,gxPod.size=30,gxPod.hits="p",gxPod.scale=1,gxPod.rotSpeed=0,(Wt=[]).push(new W(gxPod.x,gxPod.y+500)),function(t,e,s){point={x:t.x,y:t.y},angle=Math.atan2(e.y-t.y,e.x-t.x),point.x=point.x+Math.cos(angle)*(t.size+1e3),point.y=point.y+Math.sin(angle)*(t.size+1e3),j=0;for(;a=point,n=e,Math.abs(a.x-n.x)+Math.abs(a.y-n.y)>e.size+1e3;)for(j++,point.x=point.x+1200*Math.cos(angle),point.y=point.y+1200*Math.sin(angle),i=0;i<10;i++)x=point.x+Math.cos(angle+Math.PI/2)*(i+1-5)*300,y=point.y+Math.sin(angle+Math.PI/2)*(i+1-5)*300,x+=Q.range(-200,200),y+=Q.range(-200,200),Q.int(100)<Math.max(100-10*j,10)?new U(x,y):new N(x,y,m.range(1,3),!0);var a,n}(Xt[0],Xt[2])}const Zt={};var Kt;let Jt,_t,Ot,Ut,Xt,Wt,Yt;function Vt(){var t,e,i;Nt(),pt.forEach((t,e)=>{const i=t.findSequence[0];Zt[i.planet+"-"+i.city]=i,fws[e]=Xt.find(t=>t.name==i.planet),t.findSequence.forEach((i,s)=>{i.friendIndex=e,s<t.findSequence.length-1&&(i.next=t.findSequence[s+1])})}),xt.forEach(t=>Zt[t[0]+"-"+t[1]]={person:t[2],sequence:[t[3]]}),Jt=fws[0],_t=0,t=it/2,e=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"],(i=new Ft("ship",[rt[2]])).dv=480,i.x=t,i.y=st-20,i.size=8,i.scale=2,i.keys=e,i.rotation=-Math.PI/2,i.blastRadius=0,Tt=1,Kt=i;const s=Math.PI/2;Kt.x=3e3*Math.cos(s)+Xt[0].x,Kt.y=3e3*Math.sin(s)+Xt[0].y,R.x=Kt.x,R.y=Kt.y,T.x=Kt.x,T.y=Kt.y,function(){for(var t=0;t<50;t++){var e=new H(m.range(1,3));e.x=m.range(Kt.x-it/2,Kt.x+it/2),e.y=m.range(Kt.y-st/2,Kt.y+st/2)}}(),Ot=Date.now(),setTimeout(async()=>{await Gt(Qt("gato"),["I'm getting close to Ceres, can't wait to see my friends again!","The panel in the top shows their last known location",yt()+" to change the waypoint for the compass at the bottom","Let's fly into Ceres and land into a city!"]),Mt("Land on a city in Ceres"),at=2},1)}I("Enter",()=>{0==at?p&&(zzfxX=new(window.AudioContext||webkitAudioContext),u(0),R.x=it/2,R.y=st/2,at=1):1==at?(zzfxX=new(top.AudioContext||webkitAudioContext),u(1),M(4),Vt(),at=2):2==at?(++_t>=fws.length&&(_t=0),Jt=fws[_t]):10==at&&Bt()}),I("GearDown",()=>Tt=Math.max(--Tt,0)),I("GearUp",()=>Tt=Math.min(++Tt,2)),setInterval(()=>{2==at&&Kt.isCruising()&&!Pt&&m.b(30)&&function(t){for(let e=0;e<r;e++)for(let i=0;i<h;i++){const i=n+m.range(-40,40)+o*e,s=t+m.range(-a,a)*(Math.PI/180),r=Kt.x+i*Math.cos(s),h=Kt.y+i*Math.sin(s);new N(r,h,m.range(1,3)),0}}(Kt.rotation)},2e3),function t(){if(2==at&&Pt&&!Yt){const t=Wt.find(t=>z(Pt,t)<500);t&&t.spawnFish()}setTimeout(()=>t(),m.range(4e3,8e3))}()},{}]},{},[1]);