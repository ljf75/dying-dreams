!function(t){var i={};function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(n,s,function(i){return t[i]}.bind(null,s));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);const n=Math.pow,s=Math.sin,o=Math.exp,r=Math.abs,l=3.1415;function h(t){return 0|t}function a(t){var i=2147483648&t?-1:1,e=(t>>23&255)-127,s=8388607&t;if(128==e)return i*(s?NaN:1/0);if(-127==e){if(0==s)return 0*i;e=-126,s/=1<<22}else s=(s|1<<23)/(1<<23);return i*s*n(2,e)}let p=0;function c(t=1){let i=1e4*Math.sin(.8765111159592828+p++);return(i-Math.floor(i))*t}function f(t){return 0|c(t||268435455)}function u(t,i){return f(i-t)+t}function d(t,i){return c(i-t)+t}let y=0,x=1,g=2,w=3,v=.1,m=8,T="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",P="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");var b=function(t){let i,e,p,c,f,u,b,M,S,F,A=function(t,i){let e,n,s,o,r=[],l=[];for(e in t){if(n=0,(s=i.indexOf(t[e]))<0)return;for(s||l.length^e||l.push(0);n in r||s;)s=(o=(o=r[n])?58*o+s:s)>>8,r[n]=o%256,n++}for(;n--;)l.push(r[n]);return new Uint8Array(l)}(t,T),E={};for(let t in P){let i=P[t],e=4*(t-1)+1;if("A"===i)E[i]=A[0];else{let t=A[e]|A[e+1]<<8|A[e+2]<<16|A[e+3]<<24;E[i]=a(t)}}t={};for(let i in E)E.hasOwnProperty(i)&&(t[i]=E[i]);function I(){i=0,e=100/(t.F*t.F+.001),p=100/(t.G*t.G+.001),c=t.G>0,f=1-.01*n(t.H,3),u=1e-6*-n(t.I,3),b=.5-.5*t.N,M=5e-5*-t.O,S=t.L>=0?1-.9*n(t.L,2):1+10*n(t.L,2),F=h(2e4*n(1-t.M,2)+32),1===t.M&&(F=0)}I();let _=parseInt(t.A),O=.1*n(t.S,3),R=1!=t.S,C=1+1e-4*t.T,L=5/(1+20*n(t.U,2))*(.01+O);L>.8&&(L=.8);let V=.1*n(t.V,2),H=1+3e-4*t.X,W=.01*n(t.K,2),k=.5*t.J,N=[h(t.B*t.B*1e5),h(t.C*t.C*1e5),h(t.E*t.E*1e5)],B=t.D,j=1020*n(t.Q,2);t.Q<0&&(j=-j);let U=1*n(t.R,2);t.R<0&&(U=-U);let G=h(2e4*n(1-t.P,2)+32);0===t.P&&(G=0);let K=o(t.sound_vol||.5)-1,q=0,z=0,J=0,Y=Array(32);for(let t=0;t<32;++t)Y[t]=d(1,2);let Q=0,X=0,D=0,Z=0,$=0,tt=Array(1024);for(let t=0;t<1024;++t)tt[t]=0;let it=0,et=[],nt=0,st=0,ot=h(1);for(let t=0;0!=G&&++i>=G&&I(),0!=F&&t>=F&&(F=0,e*=S),!((e*=f+=u)>p&&(e=p,c));++t){let t=e;k>0&&(t=e*(1+s(D+=W)*k));let i,n=h(t);if(n<m&&(n=m),(b+=M)<0&&(b=0),b>.5&&(b=.5),++X>N[Q]&&(X=0,++Q>2))break;let o=X/N[Q];i=0===Q?o:1===Q?1+2*(1-o)*B:1-o;let a=r(h(j+=U));a>1023&&(a=1023),0!=H&&((V*=H)<1e-5&&(V=1e-5),V>.1&&(V=.1));let p=0;for(let t=0;t<m;++t){let t=0;if(++Z>=n&&(Z%=n,_===w))for(let t=0;t<32;++t)Y[t]=d(1,2);let e=Z/n;_===y?t=e<b?.5:-.5:_===x?t=e<b?2*e/b-1:1-2*(e-b)/(1-b):_===g?t=s(2*e*l):_===w&&(t=Y[h(32*Z/n)]);let o=q;(O*=C)<0&&(O=0),O>.1&&(O=.1),R?(z+=(t-q)*O,z-=z*L):(q=t,z=0),J+=(q+=z)-o,t=J-=J*V,tt[1023&$]=t,t+=tt[$-a+1024&1023],$=$+1&1023,p+=t*i}nt+=p,++st>=ot&&(st=0,p=nt/ot,nt=0,p=p/m*v,(p=h(128*(1+(p*=K))))>255?(p=255,++it):p<0&&(p=0,++it),et.push(p))}let rt={data:[],wav:[],dataURI:""},lt=[82,73,70,70],ht=0,at=[87,65,86,69],pt=[102,109,116,32],ct=8e3,ft=0,ut=0,dt=8,yt=[100,97,116,97],xt=0;function gt(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function wt(t){return[255&t,t>>8&255]}rt.Make=function(t){ft=1*ct*dt>>3,ut=1*dt>>3,xt=rt.data.length,ht=36+xt,rt.wav=lt.concat(gt(ht),at,pt,gt(16),wt(1),wt(1),gt(ct),gt(ft),wt(ut),wt(dt),yt,gt(xt),rt.data),rt.dataURI="data:audio/wav;base64,"+btoa(rt.wav)};let vt=new Float32Array(et.length);for(let t=0;t<et.length;t++)vt[t]=2*et[t]/n(2,8)-1;ct=44100,dt=8,rt.Make(vt),rt.clipping=it,rt.buffer=vt;let mt=null;if("AudioContext"in window?mt=new AudioContext:"webkitAudioContext"in window&&(mt=new webkitAudioContext),mt){let t=mt.createBuffer(1,rt.buffer.length,ct),i=t.getChannelData(0);for(let t=0;t<rt.buffer.length;t++)i[t]=rt.buffer[t];return{channels:[],play:function(){let i=mt.createBufferSource();i.buffer=t,i.connect(mt.destination),"AudioContext"in window?i.start():"webkitAudioContext"in window&&i.noteOn(0),this.channels.push(i)}}}{let t=new Audio;return t.src=rt.dataURI,t}};class M{constructor(t=0,i=0){this.x=t,this.y=i}norm(){var t=this.len();return new M(this.x/t,this.y/t)}resize(t){return this.norm().scale(t)}scale(t){return new M(this.x*t,this.y*t)}distance(t){var i=this.x-t.x,e=this.y-t.y;return Math.sqrt(i*i+e*e)}len(){return Math.sqrt(this.lenSqrt())}lenSqrt(){return this.x*this.x+this.y*this.y}copy(){return new M(this.x,this.y)}sub(t){return new M(this.x-t.x,this.y-t.y)}add(t){return new M(this.x+t.x,this.y+t.y)}vecTo(t){return t.sub(this)}*[Symbol.iterator](){yield this.x,yield this.y}}class S{constructor(t,i=new M(0,0)){this.max_velocity=40,this.pinned=!1,this.friction=.6,this.gravity=new M(0,.5),this.position=t.copy(),this.setVelocity(i)}get x(){return this.position.x}get y(){return this.position.y}set x(t){this.position.x=t}set y(t){this.position.y=t}setVelocity(t){this.prev_position=this.position.sub(t)}getVelocity(){return this.prev_position.vecTo(this.position)}setPinned(t){return this.pinned=t,this}updateFriction(){if(this.y==height){var t=this.getVelocity();t.x*=this.friction,this.setVelocity(t)}}updateBoundings(){var t=this.getVelocity();this.x>width&&(this.x=width,this.prev_position.x=this.x+t.x),this.x<0&&(this.x=0,this.prev_position.x=this.x+t.x),this.y<0&&(this.y=0,this.prev_position.y=this.y+t.y),this.y>height&&(this.y=height,this.prev_position.y=this.y+t.y)}update(){if(!this.pinned){var t=this.getVelocity();this.prev_position=this.position.copy(),this.position=this.position.add(t).add(this.gravity),(t=this.getVelocity()).len()>this.max_velocity&&this.setVelocity(t.resize(this.max_velocity))}}}class F{constructor(t,i){this.hidden=!1,this.length=t.position.vecTo(i.position).len(),this.P1=t,this.P2=i}setLength(t){return this.length=t,this}setHidden(t){return this.hidden=t,this}applyConstraint(t){var i=this.length/2,e=this.P1.position.vecTo(this.P2.position).scale(.5);e=this.P1.position.add(e),this.P1.pinned||(this.P1.position=e.add(e.vecTo(this.P1.position).resize(i))),this.P2.pinned||(this.P2.position=e.add(e.vecTo(this.P2.position).resize(i)))}update(){var t=this.P1.position.vecTo(this.P2.position).len();this.length!=t&&this.applyConstraint(t),this.P1.updateBoundings(),this.P2.updateBoundings()}render(t){t.moveTo(...this.P1.position),t.lineTo(...this.P2.position)}}let A=0;class E{constructor(t,i,e){this.index=++A,this.points=[],this.constraints=[],this.connections=[],this.position=t,this.rope_points=i,this.line_segment_length=e;for(var n=0;n<i;n++)this.points.push(new S(new M(t.x,t.y+n*e)));for(n=0;n<i-1;n++)this.constraints.push(new F(this.points[n],this.points[n+1]));this.setPinned(!0)}setPinned(t){this.pinned=t,this.points[0].pinned=t}getRopeEnd(){return this.points[this.points.length-1]}attach(t){this.constraints.unshift(new F(this.points[0],t).setLength(this.line_segment_length))}attachEnd(t){this.constraints.push(new F(this.getRopeEnd(),t).setLength(this.line_segment_length))}addPoint(t){this.points.push(new S(new M(t.position.x,t.position.y+this.points.length*this.line_segment_length)))}updatePoints(){for(var t of(this.points[0].position=this.position,this.points))t.update()}updateFriction(){for(var t of this.points)t.updateFriction()}updateConstraints(){for(var t of this.constraints)t.update()}render(t){for(var i of(t.beginPath(),t.lineTo(...this.points[0].position),this.constraints))i.render(t);t.closePath(),t.stroke()}}class I{constructor(t,i){this.points=[new S(new M(...t)),new S(new M(...t.add(new M(i,0)))),new S(new M(...t.add(new M(i,i)))),new S(new M(...t.add(new M(0,i))))],this.constraints=[new F(this.points[0],this.points[1]),new F(this.points[1],this.points[2]),new F(this.points[2],this.points[3]),new F(this.points[3],this.points[0]),new F(this.points[0],this.points[2]).setHidden(!0)]}updatePoints(){for(var t of this.points)t.update()}}const _=new Image;_.src="aim.png";const O=new Image,R=[b("7BMHBGGaSzarJeS7MiiRhykUpKV4wWpEZpdYH6pVwK37AGbh35bGS4Kq3LtjMFVd39pHRstQSpE3yrKF9C9e5qHfo5y753MhNFdGb8dMPboFMHdoAh23ywBAX"),b("12TTcYkj3oge3fiLF85vp5Wk6eVCSUs42gWSdefSWWJqa1juWJbyMbMJFVS4Mo546WdpoSAVAc8Qf8S3L8baXW13MTA8ojab2F4c1TsRUT29GFxaDLRYtNn3cH"),b("11111HH1xzWQ2n9NjPoeata2U7iAjRb4HNmh3T61D1hPrHyvEZ4AmJwMLG8p7eMPMyEgQby4atBXLYT1BSQ8JWC6sU8tzXLhiJdp2mz9pZPhmfzNKn9Kp4Ss")],C=[[]],L=10;function V(t){const i=t/L;return[Math.max(4*i,1),25+80*i,4,5,0|Math.max(4*i,1),10+20*i,u(0,5),0|Math.max(100*i,10),3,u(3,8),function(t,i,e,n,s,o,r,l,h){r=r||128,l=l||127,h=h||10;const a=[];for(let p=0;p<h;++p){const h=Math.sin(t*p+n)*l+r,c=Math.sin(i*p+s)*l+r,f=Math.sin(e*p+o)*l+r;a.push("#"+((1<<24)+(h<<16)+(c<<8)+f|0).toString(16).slice(1))}return a}(.2,.1,.1,u(0,100),u(0,100),u(0,100))]}for(let t=0;t<L;t++)C.push(V(t));let H=document.getElementById("game"),W=window.innerWidth,k=window.innerHeight,N=H.getContext("2d");H.width=W,H.height=k,window.width=W,window.height=k;const B=0,j=1,U=2,G=3,K=6,q=7,z=8,J=9,Y=10;let Q,X,D,Z,$,tt,it,et,nt,st,ot,rt,lt,ht=1,at=C[ht],pt=[],ct=[],ft=[],ut=[],dt=[],yt=[],xt=[],gt=0,wt="CLICK TO RESTART",vt=!1,mt=0,Tt=0;function Pt(){pt=[],ct=[],ft=[],ut=[],dt=[],yt=[],xt=[],Q=!1,X=!1,D=0,et=0,nt=0;for(let t=0;t<3;t++)Ft();ut[0].constraints=null,ut[0].points=null,ut.splice(0,1)}function bt(t,i,e){N.save(),N.fillStyle="#000",Mt(t,i,e),N.fillStyle="#FFF",Mt(t,i,e),N.restore()}function Mt(t,i,e){N.font="160px Impact",N.setTransform(1,-.07,-.3,1,0,0),N.fillText(t,270,300),N.setTransform(1.1,-.07,-.2,1,0,0),N.fillText(i,225,432),N.font="60px Impact",N.fillText(e||wt,225,492)}function St(t,i,e,n,s){t.beginPath(),t.arc(i,e,n,0,2*Math.PI,!0),t.closePath(),t.fillStyle=s||"#000",t.fill()}function Ft(){let t=d(16,W-16),i=new M(t,0),e=new E(i,30,5);e.position.vy=d(at[B]/2,at[B]);let n=new I(i,0);if(0===f(6)&&(n.magic=!0),Z){e.attach(n.points[0]);let t=Z;(t=t.points&&t.points[0]?t:Z)&&t.wires&&t.wires[0]&&(e.attachEnd(t.constraints[0].P1),e.connections.push(n,t),t.wires=t.wires||[],t.wires.push(e)),n.wires=n.wires||[],n.wires.push(e),ut.push(e),tt=Z,$=i}pt.push(n),Z=n,it=e}function At(t){N.fillStyle=at[Y][0],N.fillRect(0,0,W,k),N.save(),N.setTransform(1,.1,-.1,1,0,0);const i=D/2,e=D/1e3;let n=at[J];for(let t=0;t<n;t++){N.fillStyle=at[Y][t],N.beginPath();let s=k/n*t;N.moveTo(0,s+400+e),N.lineTo(0,s+e);let o=5;for(let n=0;n<o+10;n++){let r=W/o*n+(t%2?-i:i)-1e3;r>-400&&r<W+400&&N.quadraticCurveTo(r-W/o/2,s+(n%2?-30:30)+e,r,s+e)}N.lineTo(W+400,s),N.lineTo(W+400,s+400+e),N.closePath(),N.fill()}N.restore()}function Et(t){let i;if(et<at[j]){for(gt++,D++,nt+=1,At(),i=0;i<ct.length;i++){let t=ct[i];N.save(),N.translate(t.x-16,t.y-16),N.rotate(t.r+Math.PI),N.drawImage(O,32*at[G],0,32,32,0,0,32,32),N.restore(),t.x+=t.vx,t.y+=t.vy}N.save(),N.translate(W/2,k-16),N.rotate(lt+Math.PI),N.drawImage(O,32*at[U],0,32,32,-16,-16,32,32),N.restore()}st&&bt("","   LEVEL"+ht," "),function(t){t.fillStyle="#F00";for(let i=xt.length-1;i>=0;i--){let e=xt[i];if(e.vx*=.98,e.vy*=.98,e.a*=.85,e.x+=e.vx,e.y+=e.vy,e.a<0){xt.splice(i,1);continue}t.globalAlpha=e.a;const n="#000000",s=W*(nt/1e3);St(t,e.x,e.y,d(2*s,6*s),n)}t.globalAlpha=1}(N),function(t){t.fillStyle=(i=at[Y][at[K]],"#"+(16777215^parseInt(i.substr(1,6),16)).toString(16));var i;for(let i=dt.length-1;i>=0;i--){let e=dt[i];if(e.vx*=.98,e.vy*=1.5,e.a*=.97,e.x+=e.vx,e.y+=e.vy,e.a<0){dt.splice(i,1);continue}t.globalAlpha=e.a;let n=at[z];t.fillRect(e.x-n/2,e.y-n/2,n,n)}t.globalAlpha=1}(N);let e=null;t:for(i=0;i<ut.length;i++){let s=ut[i];s.position.y+=s.position.vy,s.position.x<W/2?s.position.x+=.25:s.position.x-=.25,s.updatePoints(),s.position.y>k-16&&!X&&(Q=!0,bt("GAME","OVER"),R[2].play());for(let e=0;e<ct.length;e++){let o=ct[e];if(o)for(var n of s.points){const r=o.x-n.position.x,l=o.y-n.position.y;if(Math.sqrt(r*r+l*l)<10){if(gt+=t/1e3|0,++et===at[j]){for(let t=0;t<ut.length;t++)ut[t].constraints.shift();_t()}else Ot(o.x,o.y),Ft(),e%3&&Ft();let n=!1;s.connections.forEach(t=>{pt.splice(pt.indexOf(t),1),t.hit=!0,t.magic&&(gt+=1e3,Rt("+1000",o.x,o.y),n=!0)}),n||Rt("+100",o.x,o.y),s.constraints=null,s.points=null,ut.splice(i,1),ct.splice(e,1),s.hit=!0,R[0].play(),i--,e--;continue t}}}if(!s.hit){for(let t=0;t<5;t++)s.updateConstraints();s.render(N),e&&e.connections[0]&&~e.connections[0].wires.indexOf(s)&&(N.beginPath(),N.moveTo(...s.constraints[s.constraints.length-1].P2.position),N.lineTo(...e.constraints[0].P1.position,5,5),N.closePath(),N.stroke()),et<at[j]&&(s.connections&&s.connections[1]&&s.connections[1].magic?N.drawImage(O,32,0,32,O.height,s.points[0].position.x-16,s.points[0].position.y-16,32,O.height):N.drawImage(O,32*u(0,3),0,32,O.height,s.points[0].position.x-16,s.points[0].position.y-16,32,O.height))}e=s}!function(t){t.strokeStyle="#000",t.font="20px Impact";for(let i=yt.length-1;i>=0;i--){let e=yt[i];e.vy*=1.1,e.a*=.97,e.y+=e.vy,e.a<0?yt.splice(i,1):(t.globalAlpha=e.a,t.fillStyle="#FFF",t.fillStyle="#000",t.fillText(e.text,e.x-40,e.y-20))}t.globalAlpha=1}(N),X&&!Q&&bt("NETWORK","DESTROYED","WE ARE OFFLINE!"),N.drawImage(_,mt-16,Tt-16),N.save(),N.fillStyle="#FFF",It(),N.fillStyle="#000",N.translate(-2,-2),It(),N.restore(),Q||requestAnimationFrame(Et)}function It(){N.font="20px Impact",N.setTransform(1,0,-.1,1,0,0);let t="SCORE: "+gt;N.fillText(t,20,35),Q||(t="LEVEL: "+ht,N.fillText(t,W-10-N.measureText(t).width,35),t="OFFLINE: "+(et/at[j]*100|0)+"%",N.fillText(t,W/2-N.measureText(t).width/2,35))}function _t(){++ht===C.length?(X=!0,setTimeout(()=>{Q=!0,At(),bt("YOU","WIN!"),R[1].play()},5e3)):(st=setTimeout(()=>{st=null},1e3),at=C[ht],Pt())}function Ot(t,i){for(let e=0;e<at[q];e++)dt.push({x:t,y:i,vx:d(-7,7),vy:d(-7,7),a:1})}function Rt(t,i,e){yt.push({x:i,y:e,vy:d(-1,-3),a:1,text:t})}H.onmousemove=function(t){ot=W/2,rt=k,mt=t.clientX,Tt=t.clientY,(lt=Math.atan2(rt-t.clientY,Math.abs(t.clientX-W)-ot))<0&&(lt+=2*Math.PI)},window.onkeyup=function(t){if(et>at[j])return;const i=-at[5];for(let t=0;t<at[4];t++){const t=at[4]/10,e=lt+d(-t,t);ct.push({x:W/2,y:k,vx:i*Math.cos(e),vy:i*Math.sin(e),r:e})}},H.onclick=function(){vt?Q?(at=C[ht=1],Pt(),gt=0,requestAnimationFrame(Et)):function(){let t,i=[];for(t=0;t<u(0|Math.min(pt.length*(nt/1e3),pt.length),pt.length);t++)pt.shift();for(t=0;t<u(0|Math.min(ft.length*(nt/1e3),ft.length),ft.length);t++)ft.shift();for(t=0;t<u(0|Math.min(ut.length*(nt/1e3),ut.length),ut.length);t++)ut.shift(),i.push({x:ut[t].points[0].position.x,y:ut[t].points[0].position.y});for(let t=0;t<40;t++)xt.push({x:mt,y:Tt,vx:d(-7,7),vy:d(-7,7),a:.5});nt=0}():(vt=!0,Et())},Pt(),O.onload=function(){At(),N.save(),N.fillStyle="#FFF",N.font="160px Impact",N.setTransform(1,-.07,-.3,1,0,0),N.fillText("TAKE THE",270,300),N.setTransform(1.1,-.07,-.2,1,0,0),N.fillText("NETWORK",225,432),N.setTransform(1.1,-.07,-.2,1,0,0),N.fillText("OFFLINE!",225,567),N.font="32px Impact",N.fillText("Use your mouse to aim, space to fire, click for special.",225,602),N.restore()},O.src="t.png"}]);