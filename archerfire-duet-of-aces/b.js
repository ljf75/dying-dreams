!function e(t,r,i){function a(n,h){if(!r[n]){if(!t[n]){var o="function"==typeof require&&require;if(!h&&o)return o(n,!0);if(s)return s(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[n]={exports:{}};t[n][0].call(c.exports,function(e){var r=t[n][1][e];return a(r||e)},c,c.exports,e,t,r,i)}return r[n].exports}for(var s="function"==typeof require&&require,n=0;n<i.length;n++)a(i[n]);return a}({1:[function(e,t,r){var i=new function(){var e,t,r,i,a,s,n,h,o,f,c,l;this.a=new function(){this.setSettings=function(e){for(var t=0;24>t;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var r=this.b+this.c+this.e;if(.18>r){var i=.18/r;this.b*=i,this.c*=i,this.e*=i}}},this.reset=function(){var e=this.a;i=100/(e.f*e.f+.001),a=100/(e.g*e.g+.001),s=1-e.h*e.h*e.h*.01,n=-e.i*e.i*e.i*1e-6,e.a||(c=.5-e.n/2,l=5e-5*-e.o),h=1+e.l*e.l*(e.l>0?-.9:10),o=0,f=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();var i=this.a;return e=i.b*i.b*1e5,t=i.c*i.c*1e5,r=i.e*i.e*1e5+12,3*((e+t+r)/3|0)},this.synthWave=function(d,u){var p=this.a,y=1024,v=1!=p.s||p.v,g=p.v*p.v*.1,x=1+3e-4*p.w,b=p.s*p.s*p.s*.1,w=1+1e-4*p.t,k=1!=p.s,m=p.x*p.x,M=p.g,S=p.q||p.r,A=p.r*p.r*p.r*.2,z=p.q*p.q*(p.q<0?-1020:1020),P=p.p?32+((1-p.p)*(1-p.p)*2e4|0):0,T=p.d,E=p.j/2,L=p.k*p.k*.01,I=p.a,C=e,D=1/e,R=1/t,q=1/r,N=5/(1+p.u*p.u*20)*(.01+b);N>.8&&(N=.8),N=1-N;var O,U,B,F,W,j,K,G=!1,V=0,Z=0,_=0,H=0,J=0,Q=0,X=0,Y=0,$=0,ee=0,te=new Array(y),re=new Array(32);for(K=te.length;K--;)te[K]=0;for(K=re.length;K--;)re[K]=2*Math.random()-1;for(K=0;u>K;K++){if(G)return K;if(P&&++$>=P&&($=0,this.reset()),f&&++o>=f&&(f=0,i*=h),(i*=s+=n)>a&&(i=a,M>0&&(G=!0)),U=i,E>0&&(ee+=L,U*=1+Math.sin(ee)*E),8>(U|=0)&&(U=8),I||(0>(c+=l)?c=0:c>.5&&(c=.5)),++Z>C)switch(Z=0,++V){case 1:C=t;break;case 2:C=r}switch(V){case 0:_=Z*D;break;case 1:_=1+2*(1-Z*R)*T;break;case 2:_=1-Z*q;break;case 3:_=0,G=!0}S&&(0>(B=0|(z+=A))?B=-B:B>y-1&&(B=y-1)),v&&x&&(1e-5>(g*=x)?g=1e-5:g>.1&&(g=.1)),j=0;for(var ie=8;ie--;){if(++X>=U&&(X%=U,3==I))for(var ae=re.length;ae--;)re[ae]=2*Math.random()-1;switch(I){case 0:W=c>X/U?.5:-.5;break;case 1:W=1-X/U*2;break;case 2:W=.225*((0>(W=1.27323954*(F=6.28318531*((F=X/U)>.5?F-1:F))+.405284735*F*F*(0>F?1:-1))?-1:1)*W*W-W)+W;break;case 3:W=re[Math.abs(32*X/U|0)]}v&&(O=Q,0>(b*=w)?b=0:b>.1&&(b=.1),k?(J+=(W-Q)*b,J*=N):(Q=W,J=0),H+=(Q+=J)-O,W=H*=1-g),S&&(te[Y%y]=W,W+=te[(Y-B+y)%y],Y++),j+=W}j*=.125*_*m,d[K]=j>=1?32767:-1>=j?-32768:32767*j|0}return u}};window.jsfxr=function(e){i.a.setSettings(e);var t=i.totalReset(),r=new Uint8Array(4*((t+1)/2|0)+44),a=2*i.synthWave(new Uint16Array(r.buffer,44),t),s=new Uint32Array(r.buffer,0,44);s[0]=1179011410,s[1]=a+36,s[2]=1163280727,s[3]=544501094,s[4]=16,s[5]=65537,s[6]=44100,s[7]=88200,s[8]=1048578,s[9]=1635017060,s[10]=a,a+=44;for(var n=0,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o="data:audio/wav;base64,";a>n;n+=3){var f=r[n]<<16|r[n+1]<<8|r[n+2];o+=h[f>>18]+h[f>>12&63]+h[f>>6&63]+h[63&f]}return o};var a,s=0,n=new function(){var e,t,r,i,a,s=function(e){return Math.sin(6.283184*e)},n=function(e){return.003959503758*Math.pow(2,(e-128)/12)},h=function(e,t,r){var i,a,s,h,f,c,l,d=o[e.i[0]],u=e.i[1],p=e.i[3],y=o[e.i[4]],v=e.i[5],g=e.i[8],x=e.i[9],b=e.i[10]*e.i[10]*4,w=e.i[11]*e.i[11]*4,k=e.i[12]*e.i[12]*4,m=1/k,M=e.i[13],S=r*Math.pow(2,2-e.i[14]),A=new Int32Array(b+w+k),z=0,P=0;for(i=0,a=0;i<b+w+k;i++,a++)a>=0&&(a-=S,c=n(t+(15&(M=M>>8|(255&M)<<4))+e.i[2]-128),l=n(t+(15&M)+e.i[6]-128)*(1+8e-4*e.i[7])),s=1,i<b?s=i/b:i>=b+w&&(s-=(i-b-w)*m),h=c,p&&(h*=s*s),f=d(z+=h)*u,h=l,g&&(h*=s*s),f+=y(P+=h)*v,x&&(f+=(2*Math.random()-1)*x),A[i]=80*f*s|0;return A},o=[s,function(e){return e%1<.5?1:-1},function(e){return e%1*2-1},function(e){var t=e%1*4;return t<2?t-1:3-t}];this.init=function(s){e=s,t=s.endPattern,r=0,i=s.rowLen*s.patternLen*(t+1)*2,a=new Int32Array(i)},this.generate=function(){var n,f,c,l,d,u,p,y,v,g,x,b,w,k,m=new Int32Array(i),M=e.songData[r],S=e.rowLen,A=e.patternLen,z=0,P=0,T=!1,E=[];for(c=0;c<=t;++c)for(p=M.p[c],l=0;l<A;++l){var L=p?M.c[p-1].f[l]:0;L&&(M.i[L-1]=M.c[p-1].f[l+A]||0,L<16&&(E=[]));var I=o[M.i[15]],C=M.i[16]/512,D=Math.pow(2,M.i[17]-9)/S,R=M.i[18],q=M.i[19],N=43.23529*M.i[20]*3.141592/44100,O=1-M.i[21]/255,U=1e-5*M.i[22],B=M.i[23]/32,F=M.i[24]/512,W=6.283184*Math.pow(2,M.i[25]-9)/S,j=M.i[26]/255,K=M.i[27]*S&-2;for(x=(c*A+l)*S,d=0;d<4;++d)if(u=p?M.c[p-1].n[l+d*A]:0){E[u]||(E[u]=h(M,u,S));var G=E[u];for(f=0,n=2*x;f<G.length;f++,n+=2)m[n]+=G[f]}for(f=0;f<S;f++)(g=m[y=2*(x+f)])||T?(b=N,R&&(b*=I(D*y)*C+.5),P+=(b=1.5*Math.sin(b))*(w=O*(g-P)-(z+=b*P)),g=3==q?P:1==q?w:z,U&&(g=(g*=U)<1?g>-1?s(.25*g):-1:1,g/=U),T=(g*=B)*g>1e-5,k=g*(1-(v=Math.sin(W*y)*F+.5)),g*=v):k=0,y>=K&&(k+=m[y-K+1]*j,g+=m[y-K]*j),m[y]=0|k,m[y+1]=0|g,a[y]+=0|k,a[y+1]+=0|g}return++r/e.numChannels},this.createWave=function(){var e=44+2*i-8,t=e-36,r=new Uint8Array(44+2*i);r.set([82,73,70,70,255&e,e>>8&255,e>>16&255,e>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&t,t>>8&255,t>>16&255,t>>24&255]);for(var s=0,n=44;s<i;++s){var h=a[s];h=h<-32767?-32767:h>32767?32767:h,r[n++]=255&h,r[n++]=h>>8&255}return r},this.getData=function(e,t){for(var r=2*Math.floor(44100*e),i=new Array(t),s=0;s<2*t;s+=1){var n=r+s;i[s]=e>0&&n<a.length?a[n]/32768:0}return i}};n.init({songData:[{i:[1,69,128,0,1,96,116,9,0,0,6,29,34,0,0,0,69,3,1,1,23,167,0,32,77,6,20,4],p:[1,1,3,3],c:[{n:[151,152,154,159,,151,154,159,157,,156,,154,,152,,151,152,154,147,,147,142,147,145,,144,,142,,140,,147,149,151,154,,147,151,154,152,,151,,149,,149,,147,149,151,142,,142,139,142,140,,139,,137,,137],f:[]},{n:[144,146,147,144,,147,146,144,146,149,147,146,,149,147,146,147,146,144,139,,147,146,144,139,,140,,142,,139],f:[]},{n:[147,146,144,139,,144,146,147,151,149,147,144,,147,149,151,152,151,149,144,,144,146,147,147,,146,,144,,142,,144,142,139,135,,139,140,142,147,146,144,139,,139,140,142,144,142,140,137,,137,139,140,142,,140,,139,,137],f:[]}]},{i:[0,100,128,0,3,201,128,0,0,0,0,19,29,0,0,0,195,4,1,3,50,184,119,244,147,6,84,6],p:[1,1,2,2],c:[{n:[111,,111,,111,111,,111,,111,,111,111,,111,,111,,111,,111,111,,111,,111,,111,111,,111],f:[]},{n:[108,,108,,108,108,,108,,108,,108,108,,108,,113,,113,,113,113,,118,,118,,118,118,,118],f:[]}]},{i:[2,91,128,0,2,93,140,18,0,0,158,119,158,0,0,0,0,0,0,2,5,0,0,32,0,0,24,8],p:[],c:[]},{i:[0,160,128,1,0,160,128,0,1,210,4,7,41,0,0,0,60,4,1,2,255,0,0,32,61,5,32,6],p:[1,1,1,1],c:[{n:[,,,,111,,,,,,,,111,,,,,,,,111,,,,,,,,111],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,60,4,10,34,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[1,1,1,1],c:[{n:[111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111,,111],f:[]}]}],rowLen:5088,patternLen:32,endPattern:3,numChannels:5});var h=!1;setInterval(function(){if(!h&&(h=n.generate()>=1)){var e=n.createWave();(a=document.createElement("audio")).loop=!0,a.src=URL.createObjectURL(new Blob([e],{type:"audio/wav"})),ae(),s=1}},100);let o=[[3,,.1179,.6428,.4267,.7061,,-.3837,,,,,,,,,,,1,,,,,.5],[1,,.1158,.1299,.2666,.5234,.0722,-.4074,,,,,,.8704,-.5509,,,,1,,,.2165,,.5],[3,,.1427,.2909,.2542,.2349,,-.2076,,,,-.3384,.7392,,,,,,1,,,,,.5],[3,,.3314,.7668,.64,.4086,,-.372,,,,-.0355,.8905,,,.3548,,,1,,,,,.5],[1,,.27,,.57,.22,,.3404,,,,,,,,.4458,,,1,,,,,.5]];var f=5;o=o.map(e=>jsfxr(e)).map(e=>[...Array(f).keys()].map(()=>new Audio(e)));let c={},l=[0,0,0,0,0];function d(e){if(!c[e]){c[e]=!0;var t=o[e][l[e]++];l[e]==f&&(l[e]=0),t.play(),setTimeout(()=>c[e]=!1,30)}}var u={int:function(e){return Math.random()*(e||268435455)|0},range:function(e,t){return this.int(t-e)+e},b(){return this.range(0,100)<50}};function p(e){return function(){return(2147483647&(e=0|Math.imul(16807,e)))/2147483648}}var y=p(13312),v={int:function(e){return y()*(e||268435455)|0},range:function(e,t){return e===t?e:this.int(t-e)+e},b(){return this.range(0,100)<50}},g={},x={};function b(e){return g[e]}window.onkeydown=(e=>g[e.code]=!0),window.onkeyup=(e=>g[e.code]=!1),window.addEventListener("keypress",function(e){x[e.which]&&x[e.which]()}),window.addEventListener("keydown",e=>{[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()});const w={render(e,t,r,i,a,s,n,h){var o=a;h&&(o=a*h);var f=n?-1:1;e.fillStyle=void 0!=s?s:t[0];var c=1;for(drawlLine=!1,e.globalAlpha=1;c<t.length+2;){let n=t[c++];switch(n){case"c":e.beginPath(),e.arc(r,i,t[c++]*a,0,2*Math.PI,!0),e.fill(),drawlLine=!1;break;case"p":e.strokeStyle=e.fillStyle,e.beginPath(),e.moveTo(t[c++]*o*f+r,t[c++]*a+i),n=t[c++],drawlLine=!0;break;case"f":e.fill(),drawlLine=!1;break;case"s":e.stroke(),drawlLine=!1;break;case"a":e.globalAlpha=t[c++];break;case"o":e.fillStyle=void 0!=s?s:t[c++];break;case"v":e.save(),e.beginPath(),e.translate(r+t[c++]*o*f,i+t[c++]*a),e.scale(1,t[c++]),e.arc(0,0,t[c++]*a,0,2*Math.PI,!1),e.restore();break;case"vh":e.save(),e.beginPath(),e.translate(r+t[c++]*a*f,i+t[c++]*a),e.scale(1,t[c++]),e.arc(0,0,t[c++]*a,t[c++],t[c++],!1),e.restore();break;case"m":n=t[c++],drawlLine=!0}drawlLine&&e.lineTo(n*o*f+r,t[c++]*a+i)}}};var k=!1;class m{constructor(e,t){this.app=_[e],this.dx=this.dy=this.ax=this.ay=0,this.turnScale=0,z.push(this),t.forEach(e=>e.push(this)),this.lists=t,this.ch=[]}u(e){this.dx+=this.ax*e,this.dy+=this.ay*e,this.x+=this.dx*e,this.y+=this.dy*e}destroy(){this.app=!1,this.dead=!0,k=!0,this.ch.forEach(e=>e.destroy())}collide(e){this.destroy(),e.destroy();for(var t=0;t<10;t++){var r=new V(50);r.x=this.x-this.size/2+u.range(0,this.size),r.y=this.y-this.size/2+u.range(0,this.size),P.push(r)}}}var M=0;function S(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}var A=[[],[],[]],z=[],P=[],T=[],E=[],L=document.querySelector("canvas"),I=L.getContext("2d");function C(e,t){e.specialRender&&e.specialRender(I);var r=1;(e.turnScale>0&&t||e.turnScale<0&&!t)&&(r=1-Math.abs(e.turnScale)),w.render(I,e.app,e.x,e.y,e.scale,e.blink?0:void 0,t,r)}var D=[];!function(e){function t(e){return window.requestAnimationFrame(function(){var t=Date.now(),r=t-M;r>999?r=1/60:r/=1e3,M=t,e(r)})}t(function r(i){e(i),t(r)})}(function(e){var t,r;D.length&&(D.forEach(t=>{t[1]-=e,t[1]<0&&(t[0](),t.d=!0)}),D=D.filter(e=>!e.d)),I.fillStyle="#000000",I.fillRect(0,0,L.width,L.height),A.forEach(i=>i.forEach(i=>{i.k&&i.k(),i.u(e),C(i),C(i,!0);const a="p"==i.hits?E:T;i.hits&&a.forEach(e=>(t=e,r=i,void(S(t,r)<t.size+r.size&&t.collide(r)))),(i.kob&&i.y>U+i.size||i.kot&&i.y<-i.size||i.kor&&i.x>O+i.size||i.kol&&i.x<-i.size)&&i.destroy()})),k&&(z.filter(e=>1==e.dead).forEach(e=>{e.lists.forEach(t=>t.splice(t.indexOf(e),1))}),k=!1,z=z.filter(e=>void 0===e.dead)),P.forEach(t=>{t.update(e),t.render(I)}),B(I)});const R=[[1,1,1,0,1,1,1],[0,0,1,0,0,1,0],[1,0,1,1,1,0,1],[1,0,1,1,0,1,1],[0,1,1,1,0,1,0],[1,1,0,1,0,1,1],[1,1,0,1,1,1,1],[1,0,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,1,0,1,1]];var q=3;function N(e,t,r,i){i.forEach((i,a)=>(function(e,t,r,i){const a=6*q+q,s=3*q+q,n=w.render.bind(w),h=R[i];n(e,h[0]?_.n3:_.n2,t,r-a,q),n(e,h[1]?_.n1:_.n0,t-s,r-s,q),n(e,h[2]?_.n1:_.n0,t+s,r-s,q),n(e,h[3]?_.n3:_.n2,t,r,q),n(e,h[4]?_.n1:_.n0,t-s,r+s,q),n(e,h[5]?_.n1:_.n0,t+s,r+s,q),n(e,h[6]?_.n3:_.n2,t,r+a,q)})(e,t+a*(12*q),r,i))}const O=L.width,U=L.height;function B(e){0==s?(e.font="20px Arial",e.fillStyle="#00ff00",e.fillText("Loading Music...",10,50)):1==s?(e.font="20px Arial",e.textAlign="center",e.fillStyle="#00ff00",e.fillText("ArcherFire",O/2,100),e.font="40px Arial",e.fillText("Duet of Aces",O/2,135),e.font="18px Arial",e.fillText("INSTRUCTIONS",O/2,300),e.fillStyle="#ffffff",e.fillText("Player 1 - WASD + Space",O/2,330),e.fillText("Player 2 - Numpad + 0",O/2,360),e.font="30px Arial",e.fillStyle="#00ff00",e.fillText("Press Enter to start",O/2,500),e.fillStyle="#ffffff",e.font="18px Arial",e.fillText("Programmed by Santiago Zapata for #js13k 2018",O/2,550),e.fillText("Theme music by Ryan Malm / @ryanmalm",O/2,580)):2!=s&&3!=s||(w.render(e,_.scoreBack,250,600,2.5*q,void 0,!0),N(e,50,550,H.scoreArray),w.render(e,_.scoreBack,530,600,2.5*q),N(e,600,550,J.scoreArray),N(e,380,50,Y)),3==s&&(e.font="30px Arial",e.fillStyle="#00ff00",e.fillText("GAME OVER",O/2,300),e.fillText("Press Enter to restart",O/2,350))}var F={i(){this.defs={d:{ap:"mine",hp:10,sp:300,sc:10,scale:5,size:15},c:{ap:"enemyFighter",hp:1,sp:100,sc:50,fp:!0,size:15,scale:4},p:{ap:"platform",hp:1,sp:20,sc:0,size:80,scale:25,t:[[2,-1],[2,1]],transparent:!0},t:{ap:"e1",hp:5,sp:0,sc:20,fp:!0,size:15}}},b(e,t,r,i,a,s=1){var n=this.defs[e];const h=[A[n.t?1:2]];n.transparent||h.push(T);var o=new class extends m{constructor(e,t,r,i){super(t,r),this.hp=e,this.reactionTime=i}nearestPlayer(){return E.length&&E.sort((e,t)=>S(e,this)-S(t,this))[0]}react(){this.dead||(this.fireAtPlayer&&this.fire(),D.push([()=>this.react(),this.reactionTime/1e3]))}fire(){var e=this.nearestPlayer();if(e){d(1);var t=new m("bullet",[A[1]]);t.x=this.x,t.y=this.y;var r=Math.atan2(e.y-this.y,e.x-this.x),i=u.range(250,300);t.dx=Math.cos(r)*i,t.dy=Math.sin(r)*i,t.size=5,t.hits="p",t.kob=!0,t.kot=!0,t.scale=1}}collide(e){this.hp--,this.blink=!0,setTimeout(()=>this.blink=!1,50),this.hp<=0&&(e.player.destroyed(this),super.collide(e)),d(0);var t=new V(20);t.x=e.x,t.y=e.y,P.push(t),e.destroy()}}(n.hp+n.hp*(s/2),n.ap,h);o.x=t,o.y=r,o.dy=a,o.dx=i,o.score=n.sc,o.reactionTime=n.rt||1e4,o.reactionTime-=2e3*s,o.reactionTime<1e3&&(o.reactionTime=1e3),o.fireAtPlayer=n.fp,o.size=n.size,n.transparent||(o.hits="p");var f=o.scale=n.scale||1;return n.t&&n.t.forEach(e=>{o.ch.push(this.b("t",t+e[0]*f,r+e[1]*f,i,a)),o.ch.push(this.b("t",t+e[0]*-f,r+e[1]*f,i,a))}),o.react(),this.kob=a>0,this.kot=a<0,this.kol=i<0,this.kor=i>0,o},horizontal(e,t,r,i){var a=this.defs[e],s=t?O+a.size:-a.size,n=this.b(e,s,r,a.sp*(t?-1:1),0,i);n.kor=!t,n.kol=t},vertical(e,t,r,i){var a=this.defs[e];this.b(e,r,t?-100:U+100,0,t?a.sp:-a.sp,i)},f(e,t,r,i,a){for(var s=this.defs[e],n=r-i/2,h=i/(t-1),o=0;o<t;o++)this.b(e,n+o*h,-100,0,s.sp,a)},hrow(e,t,r,i,a){var s=this.defs[e],n=s.size+20,h=-i*n-100;t&&(h=O+100);for(var o=0;o<i;o++)this.b(e,h+o*n,r,s.sp*(t?-1:1),0,a)},vrow(e,t,r,i,a){var s=this.defs[e],n=-(s.size+20),h=i*n-100;t||(h=U+100,n*=-1);for(var o=0;o<i;o++)this.b(e,r,h+o*n,0,s.sp*(t?1:-1),a)}};F.i();var W=2;class j extends m{u(e){if(super.u(e),this.scale>W)this.scale-=24*e;else{this.scale=W;var t=100*e;0!==this.dx&&(this.dx+=-Math.sign(this.dx)*t),0!==this.dy&&(this.dy+=-Math.sign(this.dy)*t),Math.abs(this.turnScale)<.01?this.turnScale=0:this.turnScale<0?this.turnScale+=.01:this.turnScale>0&&(this.turnScale-=.01),this.x<0&&(this.x=0),this.x>O&&(this.x=O),this.y<0&&(this.y=0),this.y>U&&(this.y=U)}}k(){if(!(this.scale>W)){var e=500;this.ay=0,this.ax=0,b(this.keys[0])?this.ay=-e:b(this.keys[1])&&(this.ay=e),b(this.keys[2])?(this.flipped=!0,this.ax=-e,this.turnScale-=.02,this.turnScale<-.5&&(this.turnScale=-.5)):b(this.keys[3])&&(this.flipped=!0,this.ax=e,this.turnScale+=.02,this.turnScale>.5&&(this.turnScale=.5)),b(this.keys[4])&&this.fire()}}fire(){if(!this.fireBlocked){this.fireBlocked=!0,setTimeout(()=>this.fireBlocked=!1,100);var e=new m("missile",[A[1]]);e.x=this.x,e.y=this.y,e.dy=-u.range(550,600),e.size=5,e.hits="e",e.kot=!0,e.scale=4,e.player=this,d(2)}}destroyed(e){d(3),this.score+=e.score,this.updateScoreArray()}updateScoreArray(){this.scoreArray=[];for(var e="0000000"+this.score,t=0,r=(e=e.substr(e.length-5)).length;t<r;t+=1)this.scoreArray.push(+e.charAt(t))}destroy(){if(this.energy>0)return this.energy--,void d(0);d(3),super.destroy(),this.dead=!0,E.filter(e=>!e.dead).length||(a.pause(),a.currentTime=0,s=3)}}class K extends m{destroy(e){super.destroy();var t=u.range(1,3),r=new K("star"+t,[A[0]]);r.x=u.range(0,O),r.y=-t,r.dy=u.range(50,100),r.size=t,r.kob=!0,r.scale=1}}class G extends m{specialRender(e){e.globalAlpha=1;var t=e.createLinearGradient(this.x-this.gax,this.y-this.gay,this.x+this.gax,this.y+this.gay);t.addColorStop(0,this.color1),t.addColorStop(1,this.color2),e.fillStyle=t,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI,!0),e.fill()}}class V{constructor(e){this.sf=e,this.s0=e/5,this.runTime=0}update(e){this.runTime+=e}render(e){var t=this.runTime/.2;if(t>1)P.splice(P.indexOf(this),1);else{if(t<.4){var r=t/.4,i=this.s0+r*(this.sf-this.s0);e.fillStyle="#eecc00",e.beginPath(),e.arc(this.x,this.y,i,0,2*Math.PI,!0),e.fill()}else{i=(r=(t-.4)/.6)*this.sf;e.fillStyle="#bb9900",e.beginPath(),e.arc(this.x,this.y,this.sf,0,2*Math.PI,!0),e.arc(this.x,this.y,i,0,2*Math.PI,!1),e.fill()}}}}const Z="#ffffff",_={ship:["#eeeeee","p",-2,2,-4,4,-6,0,-4,-1,-2,-4,0,-4,0,2,"f","o","#0000ff","p",-3,3,-4,4,-6,4,-8,0,-6,-3,-4,-4,-5,-1,"f","o","#dddddd","v",0,-6,2.2,2.2,"f","o","#888888","vh",0,1,2.5,2,Math.PI,2*Math.PI,"f","o","#ff3333","p",0,1,-2.5,1,-2.5,2,-1.5,3,0,3,"f","o","#000000","v",0,-6,2,1.5,"f","o","#ff0000","vh",0,-6,2,1.5,.5,Math.PI-.5,"f"],ship2:["#eeeeee","p",-2,2,-4,4,-6,0,-4,-1,-2,-4,0,-4,0,2,"f","o","#ff0000","p",-3,3,-4,4,-6,4,-8,0,-6,-3,-4,-4,-5,-1,"f","o","#dddddd","v",0,-6,2.2,2.2,"f","o","#888888","vh",0,1,2.5,2,Math.PI,2*Math.PI,"f","o","#ff3333","p",0,1,-2.5,1,-2.5,2,-1.5,3,0,3,"f","o","#000000","v",0,-6,2,1.5,"f","o","#ff0000","vh",0,-6,2,1.5,.5,Math.PI-.5,"f"],enemyFighter:["#33aa33","p",3,0,4,0,4,-6,2,-8,2,-6,3,-5,"f","o","#33ff33","p",2,0,2,-4,4,0,4,2,"f","o","#888888","v",0,0,1,3,"f","o","#000033","v",0,0,1,2,"f"],missile:["#ff3333","p",0,1,1.5,3.5,0,3.5,"f","o","#eecc00","p",0,4,.7,4,.85,4.5,0,5,"f","o","#dddddd","p",0,0,.5,1,.5,4,0,4,"f"],star1:[Z,"c",1],star2:[Z,"c",2],star3:[Z,"c",3],planet:["G1","c",10],bullet:["#ff0000","c",4],mine:["#888888","p",0,-3,1,-2,3,-3,2,-1,3,0,2,1,3,3,1,2,0,3,"f","o","#dd0000","c",1],e1:["#888888","c",15,"o","#dd0000","c",5],platform:["#888888","p",0,2,3,2,3,3,1,4,0,4,"f","o","#888888","p",0,0,1,0,1,-2,0,-2,"f","o","#bbbbbb","p",0,-3,2,-3,3,-2,3,-1.5,4,-1.5,4,-1.3,3,-1.3,3,1.3,4,1.4,4,1.6,3,1.6,3,2,2,2.5,2,4,1.8,4,1.8,2.5,1,3,0,3,0,1,1,1,1,-1,0,-1,"f","o","#0000dd","v",.5,-2.5,1,.2,"f","o","#0000dd","v",2.5,-1.8,1,.2,"f","o","#0000dd","v",2.5,.8,1,.2,"f","o","#0000dd","v",.5,2.2,1,.2,"f"],n0:["#003300","p",-1,-2,0,-3,1,-2,1,2,0,3,-1,2,"f"],n1:["#00ff00","p",-1,-2,0,-3,1,-2,1,2,0,3,-1,2,"f"],n2:["#003300","p",-2,-1,-3,0,-2,1,2,1,3,0,2,-1,"f"],n3:["#00ff00","p",-2,-1,-3,0,-2,1,2,1,3,0,2,-1,"f"],scoreBack:["#002200","a",.7,"p",0,0,4,-12,40,-12,40,0,"f"]};var H,J;function Q(){function e(e,t,r){var i=new j(e,[E,A[2]]);return i.energy=2,i.x=t,i.y=U+120,i.dy=-200,i.size=20,i.score=0,i.updateScoreArray(),i.scale=10,i.keys=r,i}a.play(),H=e("ship",O/2-100,["KeyW","KeyS","KeyA","KeyD","Space"]),J=e("ship2",O/2+100,["Numpad8","Numpad5","Numpad4","Numpad6","Numpad0"]),D.push([()=>(function e(){if(!E.filter(e=>!e.dead).length)return;te();te();v.range(0,100)<20&&F.vertical("p",v.b(),v.range(100,O-100),Math.floor(X/10)+1);if(X%20==1){var t=new G("planet",[A[0]]);t.x=v.range(100,O-100),t.y=-100,t.dy=10,t.size=v.range(2,10);var r=y()*(2*Math.PI);t.gax=Math.cos(r)*t.size,t.gay=Math.sin(r)*t.size,console.log(r,t.size,t.gax,t.gay),t.color1=ee(),t.color2=ee(),t.kob=!0,t.scale=1}X++;$();D.push([()=>e(),3])})(),5])}var X=1,Y=[];function $(){Y=[];for(var e="0000000"+(Math.floor(X/10)+1),t=0,r=(e=e.substr(e.length-2)).length;t<r;t+=1)Y.push(+e.charAt(t))}function ee(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*y())];return e}function te(){var e=v.range(0,10),t=Math.floor(X/10)+1;switch(e){case 0:F.vrow("d",v.b(),v.range(100,O-100),2*t,t);break;case 1:F.hrow("d",v.b(),v.range(100,U-100),2*t,t);break;case 2:F.vertical("c",v.b(),v.range(100,O-100),t);break;case 3:case 4:case 5:F.horizontal("c",v.b(),v.range(100,U-100),t);break;case 6:case 7:case 8:case 9:F.f("d",v.range(2,t+2),O/2,v.range(400,600),t)}}$();var re,ie=!1;function ae(){for(var e=0;e<50;e++){var t=u.range(1,3),r=new K("star"+t,[A[0]]);r.x=u.range(0,O),r.y=u.range(0,U),r.dy=u.range(50,100),r.size=t,r.kob=!0,r.scale=1}}re=(()=>{if(1==s){if(ie)return;ie=!0,d(4),setTimeout(()=>{Q(),ie=!1,s=2},1500)}else 3==s&&(y=p(13312),A=[[],[],[]],z=[],T=[],E=[],D=[],X=1,Y=[],$(),ae(),Q(),s=2)}),x[13]=re},{}]},{},[1]);