(function(){function rb(){this.setSettings=function(a){for(var b=0;24>b;b++)this[String.fromCharCode(97+b)]=a[b]||0;0.01>this.c&&(this.c=0.01);a=this.b+this.c+this.e;0.18>a&&(a=0.18/a,this.b*=a,this.c*=a,this.e*=a)}}function Sa(a){null==ya&&(ja=ya=a);S=(ja-ya)/16|0;var b=q(3,(a-ja)/16);ja=a;ka=0.9*ka+0.1*la;V=Ta(ka);ma=0.9*ma+0.1*na;OffsetY=Ta(ma);e.setTransform(1,0,0,1,0-V,0-OffsetY);e.clearRect(V,OffsetY,m,p);a=Ua(I,V-m/2,OffsetY-p/2,2*m,2*p);f.update(f,b);r(a,function(a){a.update&&a.update(a,b)});
Va=Ua(a,V,OffsetY,m,p);var c=[],d=[];r(Va,function(a){var b=f;(a.y+a.d<=b.y+3?0:b.y+b.d<=a.y+3||a.z+a.h<=b.z+3||a.x+a.w<=b.x+3)?c.push(a):d.push(a)});r(c,function(a){a.draw(a)});f.draw(f);r(d,function(a){a.isCoin?C(1):a.sx-10<f.sx+f.sw&&a.sx+10+a.sw>f.sx&&a.y+a.d<f.y&&a.sy-10<f.sy+f.sh&&a.sy+10+a.sh>f.sy?C(0.3):C(1);a.draw(a)});C(1);sb();oa(Sa)}var ea=document,r=function(a,b){for(var c=0;c<a.length;c++)b(a[c],c)},F=[];r(["b","c","d"],function(a){F.push(ea.getElementById(a))});var m=F[0].width,p=F[0].height,
Wa=F[1].getContext("2d"),e=Wa,M=F[0].getContext("2d"),n=F[2].getContext("2d"),N=Math.random,O=Math.abs,q=Math.min,v=Math.max,Ta=Math.round,P=2*Math.PI,I=[],x=0;BgCStyle="#222";M.fillStyle=BgCStyle;M.fillRect(0,0,m,p);var za=function(a,b,c){c=c||1;for(var d=0;d<a;d+=c)b(d)},tb=function(a,b,c){c=c||1;for(var d=0;d<a;d+=c){var g=b(d);if(g)return g}},r=function(a,b){for(var c=0;c<a.length;c++)b(a[c],c)},ub=function(a,b){return tb(a.length,function(c){return b(a[c],c)})},oa=window.requestAnimationFrame||
window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame;if(!oa)var Xa=0,oa=function(a){var b=Date.now(),c=Math.max(0,16-(b-Xa));window.setTimeout(function(){a(b+c)},c);Xa=b+c};var ka,ma,V=OffsetY=0,W=function(a,b,c){var d=ea.createElement("canvas");d.width=a;d.height=b;c(d.getContext("2d"),d);d.draw=function(a,b,c,d){e.drawImage(this,a,b,c,d)};return d},T=function(a,b,c,d){return"rgba("+a+","+b+","+c+","+(d||1)+")"},Ya=T(15,15,15,0.3),pa=function(a,b){for(k in b)a[k]=b[k]},Za=function(a,
b){for(var c=[],d=0;d<a.length;d++)c[d]=a[d];pa(c,b);return c};BW=27;BH=0;B=4095;BC=Ya;var Aa=new function(){this._params=new rb;var a,b,c,d,g,s,e,f,Q,t,J,h;this.reset=function(){var a=this._params;d=100/(a.f*a.f+0.001);g=100/(a.g*a.g+0.001);s=1-0.01*a.h*a.h*a.h;e=1E-6*-a.i*a.i*a.i;a.a||(J=0.5-a.n/2,h=5E-5*-a.o);f=0<a.l?1-0.9*a.l*a.l:1+10*a.l*a.l;Q=0;t=1==a.m?0:2E4*(1-a.m)*(1-a.m)+32};this.totalReset=function(){this.reset();var d=this._params;a=1E5*d.b*d.b;b=1E5*d.c*d.c;c=1E5*d.e*d.e+10;return a+
b+c|0};this.synthWave=function(m,n){var l=this._params,p=1!=l.s||l.v,r=0.1*l.v*l.v,v=1+3E-4*l.w,q=0.1*l.s*l.s*l.s,x=1+1E-4*l.t,y=1!=l.s,E=l.x*l.x,I=l.g,w=l.q||l.r,D=0.2*l.r*l.r*l.r,z=l.q*l.q*(0>l.q?-1020:1020),G=l.p?(2E4*(1-l.p)*(1-l.p)|0)+32:0,S=l.d,F=l.j/2,V=0.01*l.k*l.k,N=l.a,P=a,W=1/a,aa=1/b,ba=1/c,l=5/(1+20*l.u*l.u)*(0.01+q);0.8<l&&(l=0.8);for(var l=1-l,T=!1,Z=0,L=0,H=0,R=0,C=0,M,A=0,K,fa=0,ha,ca=0,u,ea=0,ga,da=0,$=Array(1024),U=Array(32),X=$.length;X--;)$[X]=0;for(X=U.length;X--;)U[X]=2*Math.random()-
1;for(X=0;X<n;X++){if(T)return X;G&&++ea>=G&&(ea=0,this.reset());t&&++Q>=t&&(t=0,d*=f);s+=e;d*=s;d>g&&(d=g,0<I&&(T=!0));K=d;0<F&&(da+=V,K*=1+Math.sin(da)*F);K|=0;8>K&&(K=8);N||(J+=h,0>J?J=0:0.5<J&&(J=0.5));if(++L>P)switch(L=0,++Z){case 1:P=b;break;case 2:P=c}switch(Z){case 0:H=L*W;break;case 1:H=1+2*(1-L*aa)*S;break;case 2:H=1-L*ba;break;case 3:H=0,T=!0}w&&(z+=D,ha=z|0,0>ha?ha=-ha:1023<ha&&(ha=1023));p&&v&&(r*=v,1E-5>r?r=1E-5:0.1<r&&(r=0.1));ga=0;for(var ia=8;ia--;){fa++;if(fa>=K&&(fa%=K,3==N))for(M=
U.length;M--;)U[M]=2*Math.random()-1;switch(N){case 0:u=fa/K<J?0.5:-0.5;break;case 1:u=1-2*(fa/K);break;case 2:u=fa/K;u=6.28318531*(0.5<u?u-1:u);u=0>u?1.27323954*u+0.405284735*u*u:1.27323954*u-0.405284735*u*u;u+=0.225*(u*O(u)-u);break;case 3:u=U[Math.abs(32*fa/K|0)]}p&&(M=A,q*=x,0>q?q=0:0.1<q&&(q=0.1),y?(C+=(u-A)*q,C*=l):(A=u,C=0),A+=C,R+=A-M,u=R*=1-r);w&&($[ca%1024]=u,u+=$[(ca-ha+1024)%1024],ca++);ga+=u}ga=0.125*ga*H*E;m[X]=1<=ga?32767:-1>=ga?-32768:32767*ga|0}return n}},da=function(a){Aa._params.setSettings(a);
var b=Aa.totalReset();a=new Uint8Array(4*((b+1)/2|0)+44);var b=2*Aa.synthWave(new Uint16Array(a.buffer,44),b),c=new Uint32Array(a.buffer,0,44);c[0]=1179011410;c[1]=b+36;c[2]=1163280727;c[3]=544501094;c[4]=16;c[5]=65537;c[6]=44100;c[7]=88200;c[8]=1048578;c[9]=1635017060;c[10]=b;for(var b=b+44,c=0,d="data:audio/wav;base64,";c<b;c+=3)var g=a[c]<<16|a[c+1]<<8|a[c+2],d=d+("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g>>18]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g>>
12&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g>>6&63]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[g&63]);c-=b;a=new Audio;a.src=d.slice(0,d.length-c)+"==".slice(0,c);return a},$a=[0,,0.14,0.445,0.4616,0.6,,,,,,0.587,0.5406,,,,,,1,,,,,0.45],z=[];za(5,function(a){z.push(da(Za($a,{5:0.6+0.05*a})))});za(4,function(a){z.push(da(Za($a,{5:0.8-0.05*a})))});var y=0,Z=0,Ba=[],vb=function(a){a.sx>=f.sx-4&&a.sx<f.sx+E+4&&a.sy>=f.sy-4&&a.sy<f.sy+E+4&&(3E3<S-
Z&&(y=0),z[y++].play(),y%=z.length,Z=S,Ba.push(a.id))},wb=function(a){e.drawImage(Ca[(S+a.t)%Ca.length],a.sx-A/2,a.sy-A/2)},sb=function(){r(Ba,function(a){for(var b=0;b<I.length;b++)if(I[b].id==a){I.splice(b,1);break}});Ba=[]},A=80,Ca=[];za(128,function(a){var b=O(Math.sin(P*a/128));0.1<b&&Ca.push(W(A,A,function(c){c.strokeStyle="#aa6";c.shadowBlur=30;c.lineWidth=2;c.shadowColor="#ff2";c.beginPath();c.setTransform(b,0,0,1,A/2,A/2);c.fillStyle="#fe4";c.arc(0,0,10,0,P);c.fill();c.fillStyle="#aa6";63<
a?c.fillText("1",-3,3.5):c.fillText("\u265b",-5,3.5);c.stroke()}))});var xb=function(a,b){var c={x:a,z:b,y:IPY,h:10,w:10,d:0,sh:10,sw:10,t:0+100*N()<<0,update:vb,draw:wb,isCoin:!0};w(c);$(c)},Da=function(a,b,c,d,g,s,e,f,Q){b=a.createImageData(b,c);c=b.data;for(var t=0;t<c.length;t+=4){var J=c,h=t,q=d+N()*g,m=s+N()*e,l=f+N()*Q;J[h]=q;J[h+1]=m;J[h+2]=l;J[h+3]=255}a.putImageData(b,0,0)},h=20,yb=W(h,h,function(a){Da(a,h,h,80,20,180,40,80,40)}),zb=W(h,h,function(a){Da(a,h,h,120,20,110,20,40,30)}),Ab=W(h,
h,function(a){Da(a,h,h,140,25,120,25,50,40)}),Ea=function(a){var b=e.createPattern(W(3*h,3*h,function(b){b.drawImage(a,0,0,3*h,3*h)}),"repeat");b.draw=function(a,b,g,s){e.fillStyle=this;e.fillRect(a,b,g,s)};return b},Bb=Ea(yb),Cb=Ea(zb),Db=Ea(Ab),la=0,na=0,w=function(a){a.sx=a.x+a.y/2;a.sy=p-a.y/2-a.h-a.z},qa,ra,Fa,Ga,sa,aa,L=function(a,b,c,d){var g=ab(a,b,c,d);if(Y+h<IPY||Y>IPY)a={};else{var s={};16<h&&16<d&&(s.CL={y:Y,z:b,d:h,h:d,w:0,x:a},qa.push(s.CL),s.CR={y:Y,z:b,d:h,h:d,w:0,x:a+c},ra.push(s.CR));
if(16<h&&16<c){s.CT={x:a,y:Y,w:c,d:h,h:0,z:b+d,sprite:g};if(!g)debugger;Fa.push(s.CT);s.CB={x:a,y:Y,w:c,d:h,h:0,z:b};Ga.push(s.CB)}a=s}g.collisionFaces=a;return g},Eb=function(a,b,c,d){a=ab(a,b,c,d);a.draw=function(a){e.fillStyle="#000";e.strokeStyle="#ff0";e.lineWidth=5;e.fillRect(a.sx,a.sy+a.d,a.w,a.h);e.strokeRect(a.sx,a.sy+a.d,a.w,a.h)};a.update=function(a){if(!a.hit&&f.sx+E>=a.sx-10&&f.sx<a.sx+a.sw+10&&f.sy+E>=a.sy-10&&f.sy<a.sy+a.sh+10){a.hit=!0;ta++;ta>bb.length&&(alert("You win..."),ta=0);
cb(bb[ta]);y=0;var b=function(){z[y++].play();y%=z.length;Z=S;6>y&&setTimeout(b,200)};b()}}},Fb=function(a,b,c,d,g){var s,e,f;c>d?(s=q(c,40),e=d,f=0,g=v(d/5,g||10)):(s=c,e=q(d,40),f=v(c/5,g||20),g=0);for(var Q=a;Q+s<=a+c;Q+=s)for(var t=b;t+e<=b+d;t+=e)L(Q+(0+(f-0)*N()),t+(0+(g-0)*N()),s,e),Ha--;Ha++;if(Q!=a+c||t!=b+d)t==b+d?(c=c-Q+a,a=Q):(d=d-t+b,b=t),L(a+(0+(f-0)*N()),b+(0+(g-0)*N()),c,d)},Ia=function(a,b,c,d,g){return ub(g,function(g,e){if(a+d>g.x&&a<g.x+g.w&&b+d>g.y&&b<g.y+g.d&&c+d>g.z&&c<g.z+
g.h)return g})},db=function(a,b,c,d,g,e){pa(a,{vx:(d-b)/160*e/10,vz:(g-c)/160*e/10,maxZ:v(c,g),minZ:q(c,g),maxX:v(b,d),minX:q(b,d),update:function(a,b){var d=a.x,c=a.z;a.x+=a.vx*b;if(a.x>a.maxX||a.x<a.minX)a.x=v(q(a.x,a.maxX),a.minX),a.vx*=-1;a.z+=a.vz*b;if(a.z>a.maxZ||a.z<a.minZ)a.z=v(q(a.z,a.maxZ),a.minZ),a.vz*=-1;d=a.x-d;c=a.z-c;r(a.subCubes||[a],function(a){a.sx+=d;a.sy-=c;a=a.collisionFaces;a.CL&&(a.CL.z+=c,a.CL.x+=d,a.CR.z+=c,a.CR.x+=d);a.CT&&(a.CT.x+=d,a.CT.z+=c,a.CB.x+=d,a.CB.z+=c)});a.subCubes&&
(a.sx+=d,a.sy-=c)}})},ua=function(a,b,c,d){var g={z:-1E10};r(Fa,function(e){e.z>g.z&&c+d>e.z&&a+d>e.x&&a<e.x+e.w&&b+d>e.y&&b<e.y+e.d&&(g=e)});return g},Ha=0,$=function(a){a.id=Ha++;I.push(a)},ab=function(a,b,c,d){BH=BH||0.3*BW;a={x:a,y:Y,z:b,w:c,h:d,d:h,sw:c+h/2,sh:d+h/2,uncachedDraw:Gb,draw:Ja};w(a);0<c&&0<d&&(a.front={col1:Hb,col2:Ib,texture:Cb,dim1:c,dim2:d,bw:BW,bh:BH,bc:BC,borders:B,draw:DR[0]||DR});0<h&&0<d&&(a.right={col1:Jb,col2:Kb,texture:Db,dim1:h,dim2:d,bw:BW,bh:BH,bc:BC,borders:B>>4,draw:DR[1]||
DR});0<c&&0<h&&(a.top={col1:Lb,col2:Mb,texture:Bb,dim1:c,dim2:h,bw:BW,bh:BH,bc:BC,borders:B>>8,draw:DR[2]||DR});$(a);return a},Gb=function(a,b,c){b=b||0;c=c||0;var d=a.d/2;a.front&&(e.setTransform(1,0,0,1,b,c+d),a.front.draw(a.front));a.top&&(e.setTransform(1,0,-0.5,0.5,b+0.4+d,c),a.top.draw(a.top));a.right&&(e.setTransform(0.5,-0.5,0,1,b+a.w,c+d),a.right.draw(a.right))},Ja=function(a){var b=aa.indexOf(a.id);-1!=b?b<aa.length-1&&(aa.splice(b,1),aa.push(a.id)):(50<=aa.length&&(b=aa.shift(),delete sa[b]),
aa.push(a.id),b=W(a.sw,a.sh,function(b){var d=e;e=b;a.uncachedDraw(a);e=d}),sa[a.id]=b);sa[a.id].draw(a.sx,a.sy-a.d/2,a.sw,a.sh)},Ua=function(a,b,c,d,g){var e=[],f=b+d,h=c+g;r(a,function(a){a.sx+a.sw>=b&&a.sx<=f&&a.sy+a.sh-a.d/2>=c&&a.sy-a.d/2<=h&&e.push(a)});return e},Lb="#e86",Mb="#eda",Hb="#d74",Ib="#dc8",Jb="#b52",Kb="#ba6",eb=function(a){var b=a.borders,c=a.dim1,d=a.dim2;b&15&&(e.strokeStyle=a.bc,e.beginPath(),b&1&&(e.moveTo(0,0),e.lineTo(c,0)),b&2&&(e.moveTo(c,0),e.lineTo(c,d)),b&4&&(e.moveTo(c,
d),e.lineTo(0,d)),b&8&&(e.moveTo(0,d),e.lineTo(0,0)),e.stroke())},fb=1,C=function(a){a!=fb&&(fb=e.globalAlpha=a)},U=function(a){var b=a.dim1,c=a.dim2,d=a.col2,g=a.bw,f=a.bh;e.fillStyle=a.col1;e.fillRect(0,0,b,c);e.strokeStyle=d;d=0;e.lineWidth=f/5;y0=0;y1=f;for(e.beginPath();y1<=c;){d++;e.moveTo(0,y1);e.lineTo(b,y1);for(x0=d&1?g:g/2;x0<b;)e.moveTo(x0,y0),e.lineTo(x0,y1),x0+=g;y0=y1;y1+=f}e.stroke();eb(a)},va=function(a){a.texture.draw(0,0,a.dim1,a.dim2);eb(a)},gb=function(a,b,c){e.setTransform(1,
0,0,1,b||0,c||0);e.fillStyle=T(190,190,190);e.strokeStyle=T(40,40,40);e.lineWidth=1;for(b=a.d/2-5;0<=b;b-=10){c=a.sh-b;e.beginPath();for(var d=0;d<=a.w;d+=20)e.moveTo(d+b,c),e.lineTo(d+b+5,c-a.h),e.lineTo(d+b+10,c);e.stroke();e.fill()}},hb=function(a,b){var c,d,g,e,f,h,m,t,n,p;c=d=g=e=f=Infinity;h=m=t=n=p=-Infinity;r(a,function(a){e=q(e,a.sx);n=v(n,a.sx+a.sw);f=q(f,a.sy);p=v(p,a.sy+a.sh);c=q(c,a.x);h=v(h,a.x+a.w);d=q(d,a.y);m=v(m,a.y+a.d);g=q(g,a.z);t=v(t,a.z+a.h)});pa(b,{sx:e,sy:f,sw:n-e+1,sh:p-
f+1,x:c,y:d,z:g,w:h-c+1,h:t-g+1,d:m-d+1})},Nb=function(a){var b={subCubes:a,uncachedDraw:function(a){r(a.subCubes,function(b){b.uncachedDraw(b,b.sx-a.sx,b.sy-a.sy)})},draw:Ja,toScreenSpace:function(a){r(a.subCubes,function(a){w(a)});hb(a.subCubes,a)}};hb(a,b);$(b);return b},Ka=0,Ob=function(a,b,c){a={x:a,z:b,y:IPY+10,h:c,w:10,d:0,sh:c,sw:10,hit:!1,flagY:-1,draw:function(a){e.fillStyle="#a73";e.fillRect(a.sx,a.sy,a.sw,a.sh);a.hit&&(Ka||(Ka=W(50,30,function(a){a.fillStyle="#aaf";a.strokeStyle="#000";
a.fillRect(0,0,50,30);a.strokeRect(0,0,50,30);a.fillStyle="#fe7";a.font="24px arial";a.fillText("\u265b",12,12);a.drawImage(f.rightImg,15,8,20,20)})),a.flagY>a.sy&&(a.flagY-=2),e.drawImage(Ka,a.sx-50,a.flagY))},update:function(a){!a.hit&&a.sx>=f.sx-4&&a.sx<f.sx+E+4&&a.sy+a.sh>=f.sy-4&&a.sy<f.sy+E+4&&(3E3<S-Z&&(y=0),z[y++].play(),y%=z.length,Z=S,a.flagY=a.sy+a.sh-30,a.hit=!0,IPX=a.x,IPZ=a.z)}};w(a);$(a)},Pb=function(a,b,c,d,g,s,h){e.font=s+"pt "+g;var m=0;h=h.split("\\n");r(h,function(a){a=e.measureText(a);
m=v(m,a.width)});var n=1.2*s*(h.length+1);a={x:a,z:b,y:Y,h:n,w:m,d:0,sh:n,sw:m,lines:h,dy:1.2*s,color:c,stroke:d,fam:g,size:s,uncachedDraw:function(a,b,c){e.font=a.size+"px "+a.fam;e.textAlign="center";e.fillStyle="#"+a.color;e.strokeStyle="#"+a.stroke;var d=a.dy,g=a.w/2;r(a.lines,function(b){e.fillText(b,g,d);e.strokeText(b,g,d);d+=a.dy})},draw:function(a){var b=O(f.sx-(a.sx+a.sw/2));if(!(b>a.sw+100)){var c=O(f.sy-(a.sy+a.sh/2));c>a.sh+100||(C(v(0,q(1,1.4-c/(a.sh+100)-b/(a.sw+100)))),Ja(a),C(1))}}};
w(a);$(a)},cb=function(a){I=[];qa=[];ra=[];Fa=[];Ga=[];V=OffsetY=0;aa=[];sa={};IPX=0;IPY=50;IPZ=0;BW=27;BC=Ya;B=4095;Y=0;h=100;for(var b=0;b<a.length;){var c=a[b++];switch(c){case 0:IPX=a[b++];IPZ=a[b++];wa();break;case 1:xb(a[b++],a[b++]);break;case 2:ib(a[b++],a[b++]);break;case 3:case 4:DR=3==c?U:va;L(a[b++],a[b++],a[b++],a[b++]);break;case 10:var d=L(a[b++],a[b++],a[b++],a[b++]);d.collisionFaces.CT.spikes=!0;d.uncachedDraw=gb;break;case 5:Y=a[b++];h=a[b++];break;case 11:var e=a[b++],f=a[b++],
m=a[b++],n=a[b++],p=a[b++];case 6:var t=a;a=a[b++];var x=b,y=[],E=I;I=y;var w,l;if(11==c){var z=1E7,D=z;l=w=-1E7;for(b=0;b<a.length;){b++;var d=a[b++],C=a[b++],z=q(z,d),D=q(D,C);w=v(w,d+a[b++]);l=v(l,C+a[b++])}w=w-z+1;l=l-D+1;f-=l;n-=l;l/=2}for(b=0;b<a.length;){var C=a[b++],d=a[b++],A=a[b++],G=a[b++],H=a[b++];11==c&&(d=d-z+e-w,A=A-D+f-l);switch(C){case 3:case 4:DR=3==C?U:va;L(d,A,G,H);break;case 10:d=L(d,A,G,H),d.collisionFaces.CT.spikes=!0,d.uncachedDraw=gb}}a=t;b=x;I=E;var F=Nb(y);11==c&&(r(F.subCubes,
function(a){a.collisionFaces.CT&&(a.collisionFaces.CT.sprite=F)}),db(F,e-w,f-l,m-w,n-l,p));break;case 7:case 8:DR=7==c?U:va;e=a[b++];f=a[b++];m=a[b++];n=a[b++];c=a[b++];t=a[b++];p=a[b++];d=e-c/2;A=f-t/2;d=L(d,A,c,t);db(d,e,f,m,n,p);break;case 9:ib(a[b++],a[b++],a[b++]);break;case 12:case 13:DR=12==c?U:va;Fb(a[b++],a[b++],a[b++],a[b++]);break;case 14:Pb(a[b++],a[b++],a[b++],a[b++],a[b++],a[b++],a[b++]);break;case 15:Ob(a[b++],a[b++],a[b++]);break;case 16:Qb(a[b++],a[b++]);break;case 17:Eb(a[b++],a[b++],
a[b++],a[b++])}}},La=e.createRadialGradient(15,-9,3,15,-9,32);La.addColorStop(0,"#67B6FE");La.addColorStop(1,"#535CB3");var xa=0,Qb=function(a,b){var c={x:a+16,y:IPY+16,z:b+16,h:64,vx:0,vz:4,h:32,w:32,d:32,sw:64,sh:64,radius:32,draw:function(a){e.strokeStyle="#221";e.fillRect(0,0,50,30);e.strokeRect(0,0,50,30);e.fillStyle="#fe7";e.font="36px arial";e.fillText("\u265b",a.sx+15,a.sy+2);Ma(a)},update:function(a,b){a.floor||(a.floor=ua(a.x+16,a.y+16,a.z+16,32),a.floorZ=a.floor.z+16);Na(a,b);a.z<=a.floorZ&&
(a.z=a.floorZ,a.vz=O(a.vz));w(a);a.sx-=16;a.sy-=8},color:La,face:"\u0ca0 \u0c8e \u0ca0",mouth:"\u2054",mx:-8,my:9};w(c);xa||(xa=ia(64,64,c,!0));c.leftImg=xa;c.rightImg=xa;I.push(c)},jb,Oa=!1,ib=function(a,b,c){a={x:a+G,y:IPY+G,z:b+G,h:ba,vx:c?c/-10:-1,vz:0,h:D,w:D,d:D,sw:ba,sh:ba,radius:D,draw:Ma,update:Rb,color:Pa,face:"\u25d5` \u141f\u25d5 \u30ce",mouth:"\u2054",mx:-8,my:9};w(a);Oa||(Oa=ia(ba,ba,a,!0),jb=ia(ba,ba,a,!1));a.leftImg=Oa;a.rightImg=jb;I.push(a)},Pa=e.createRadialGradient(15,-9,3,15,
-9,32);Pa.addColorStop(0,"#FFD6CE");Pa.addColorStop(1,"#B34C80");var D=22,ba=2*D,G=ba/4,Rb=function(a,b){a.floor||(a.floor=ua(a.x+G,a.y+G,a.z+G,D),a.floorZ=a.floor.z+G);Na(a,b);var c=0;0>a.vx&&a.x+D<=a.floor.x?c=1:0<a.vx&&a.x>a.floor.x+a.floor.w&&(c=2);if(0!=c){var d=ua(a.x,a.y,a.z,D);a.floor!=d&&10>O(d.z-a.floor.z)&&(a.floor=d,a.floorZ=a.floor.z+G);d!=a.floor&&(a.x=1==c?a.floor.x-D+1:a.floor.x+a.floor.w-1,a.vx*=-1)}a.z<=a.floorZ&&(a.z=a.floorZ,a.vz=2);if(c=Ia(a.x,a.y,a.z,D,0<a.vx?qa:ra))a.x=0<a.vx?
c.x-D:c.x+c.w+D,a.vx*=-1;w(a);a.sx-=G;a.sy-=G/2;a.sx+a.sw-10>=f.sx&&a.sx+10<f.sx+f.sw&&a.sy+a.sh-10>=f.sy&&a.sy+10<f.sy+f.sh&&(180<S-Z&&(y=0),z[y++].play(),y%=z.length,Z=S,wa())},kb=[5,100,10,14,614,-320,"0026ff","aaffff","serif",50,"The unlucky King",14,609,-382,"fff600","d8cf24","serif",14,"The king has asked for you - press \u2190 to go see him",14,7,-351,"bf5f00","ffaa56","serif",14,'Ahh Sir BluBall, thank you for coming so quickly!\\n\\nEver since the Goblins stole my lucky coin I have the worst luck!\\n\\nWhen I play poker I get the worst cards! \\nwhen I play backgammon my dice roll the worst numbers! \\nand when I play monopolly  always land on "go to jail!" !!!\\n\\nIt cannot go on this way!\\nSir BluBall, I order you to go to the goblin kingdom,\\n get back the coins they stole\\n and don\'t return until you get back my lucky coin!!!',
14,1489,-358,"0026ff","56ffff","serif",20,"A game by Iftah Haimovitch",14,1622,-402,"0026ff","56ffff","serif",20,"For JS13k contest, 2013",14,964,-383,"fff600","d8cf24","serif",14,"Press Space to jump",14,2032,-386,"0026ff","56ffff","serif",20,"Thanks to Yaron for helping testing and designing levels",3,573,-419,61,145,14,1141,-308,"ff0000","ff5656","serif",14,"Beware the Goblin",14,3598,-397,"fff600","d8cf24","serif",14,"Some places are secret",14,3856,-391,"fff600","d8cf24","serif",14,"check point!",
14,2121,-591,"ff0000","ff5656","serif",14,"Beware the spikes",3,4621,-431,62,125,17,5855,-431,53,74,5,0,100,3,528,-276,32,263,3,3362,-639,323,50,3,3351,-586,40,125,3,3412,-557,40,48,1,3492,-557,4,3551,-492,105,27,3,3658,-588,40,125,3,3,-464,642,45,3,1616,-663,1061,28,10,1875,-632,110,48,10,2507,-631,115,47,13,645,-465,964,39,0,784,-369,1,1154,-347,1,1573,-394,1,2205,-576,1,1863,-342,1,2467,-333,1,3586,-418,1,3614,-554,1,3436,-334,3,1581,-651,33,184,3,1616,-633,143,66,3,1616,-564,56,66,3,8,-420,33,
417,3,560,-274,89,28,3,1115,-424,65,50,16,143,-336,7,1872,-467,1650,-467,184,28,10,3,2068,-458,98,28,7,2513,-461,2166,-464,184,28,10,3,2678,-656,52,196,4,2689,-458,702,33,2,2879,-334,9,3134,-329,15,2,1301,-364,3,1224,-334,103,28,1,1268,-279,4,3656,-458,698,33,15,3789,-426,125,3,4358,-662,431,235,3,4792,-661,74,142,10,4788,-517,79,56,3,4870,-665,327,235,3,5200,-660,74,139,10,5199,-519,80,59,3,5279,-646,655,215,1,4989,-317,1,5023,-317,1,5057,-314,2,5075,-364,3,4351,-333,600,391,3,5087,-337,748,395,
3,4951,-4,135,62,5,0,10,3,4947,-338,140,390,3,571,-419,59,145,4,3546,-599,126,120,3,4569,-249,140,236,3,5296,-323,140,229,3,4442,-492,66,236,3,5546,-576,60,390],ca={},lb=function(a){ca[a.keyCode]="keydown"==a.type;f.left=ca[37];f.right=ca[39];f.up=ca[38];f.down=ca[40];f.jump=ca[32];(32==a.keyCode||37<=a.keyCode&&40>=a.keyCoe)&&a.preventDefault()};ea.addEventListener("keydown",lb);ea.addEventListener("keyup",lb);ea.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);n.fillStyle=T(140,
150,240,0.5);n.shadowColor=T(170,180,250,0.5);n.shadowBlur=30;n.lineWidth=7;n.strokeStyle=T(80,90,140,0.5);var H=F[2];H.addEventListener("touchstart",function(a){var b=null,c=null;r(a.changedTouches,function(a){var e=a.clientX-H.offsetLeft,f=a.clientY-H.offsetTop;e<m/2-20?b=[a.identifier,e,f]:e>m/2+20&&(c=[a.identifier,e,f])});null!=b&&mb(b);null!=c&&nb(c);a.preventDefault()});var mb=function(a){x.move=a;var b=a[1];a=a[2];n.clearRect(0,0,m/2,p);n.beginPath();n.arc(x.x,x.y,20,0,P);n.moveTo(x.x,x.y);
n.lineTo(b,a);n.arc(b,a,35,0,P);n.stroke();n.fill();b<x.x-15?(f.left=1,f.right=0,f.up=0,f.down=0):b>x.x+15?(f.left=0,f.right=1,f.up=0,f.down=0):(f.left=0,f.right=0);f.left||f.right||(a<x.y-15?(f.up=1,f.down=0):a>x.y+15?(f.up=0,f.down=1):(f.up=0,f.down=0));event.preventDefault()},nb=function(a){f.jump=1;x.button=a;n.clearRect(m/2,0,m/2,p);n.beginPath();n.arc(a[1],a[2],35,0,P);n.fill()};H.addEventListener("touchmove",function(a){var b=null,c=null;r(a.changedTouches,function(a){var e=a.clientX-H.offsetLeft,
f=a.clientY-H.offsetTop;e<m/2-20?b=[a.identifier,e,f]:e>m/2+20&&(c=[a.identifier,e,f])});null!=b&&mb(b);null!=c&&nb(c);a.preventDefault()});H.addEventListener("touchend",function(a){r(a.changedTouches,function(a){null!=x.move&&a.identifier==x.move[0]&&(x.move=null,f.left=0,f.right=0,f.up=0,f.down=0,n.beginPath(),n.clearRect(0,0,m/2,p),n.arc(x.x,x.y,30,0,P),n.fill());null!=x.button&&a.identifier==x.button[0]&&(x.button=null,f.jump=0,n.clearRect(m/2,0,m/2,p))})});var Qa=e.createRadialGradient(12,-7,
3,12,-7,28);Qa.addColorStop(0,"#8ED6FF");Qa.addColorStop(1,"#004CB3");var E=40,R=E/4,Sb=da([0,,0.1453,,0.225,0.3726,,0.12,0.22,,,,,0.1547,,,,,1,,,,,0.35]),Tb=da([0,,0.1,,0.22,0.3726,,0.14,0.2,,,,0.12,0.1547,,,,,1,,,,,0.26]),ob=da([0,,0.11,0.16,0.09,0.227,0.04,-0.18,0.34,,,,,0.23,0.12,,,,1,0.2,0.16,0.1,,0.32]),Ub=T(15,15,15,0.5),Na=function(a,b){a.vz=v(-9,a.vz-0.2*b);var c=a.vx,d=a.vz;a.floor&&a.floor.sprite.vx&&4>O(a.floorZ-a.floor.z-R)&&(c+=a.floor.sprite.vx,d+=a.floor.sprite.vz);a.x+=c*b;a.z+=d*
b},Vb=function(a,b){var c=a.left,d=a.right,e=a.jump,f=0.22*b;a.vx=c?a.vx-f:d?a.vx+f:a.vx*Math.pow(0.9,b);f=e?3.5:2.5;if(O(a.vx)>f){var h=Math.pow(0.95,b);a.vx=0>a.vx?q(a.vx*h,-f):v(a.vx*h,f)}Na(a,b);0<a.vz&&(f=Ia(a.x,a.y,a.z,20,Ga))&&(ob.play(),a.z=f.z-20,a.vz*=-0.8);-1E3>a.z&&wa();f=ua(a.x,a.y,a.z,20);a.floorZ=-Infinity;if(f.d){if(a.floor=f,a.floorZ=f.z+R,a.z<=a.floorZ||!a.floor.spikes&&e&&5>a.z-a.floorZ&&2>O(a.vz)){if(a.floor.spikes&&0>a.vz){wa();return}-2>a.vz||e?Sb.play():-1>a.vz&&Tb.play();a.z=
a.floorZ;a.vz=e?v(O(a.vz/2),6):v(O(a.vz/2),O(a.vx)/1.5)}}else a.floor=!1;if(f=Ia(a.x,a.y,a.z,20,0<a.vx?qa:ra))a.x=0<a.vx?f.x-20:f.x+f.w+20,ob.play(),a.vx=10<a.z-a.floorZ?-0.2*a.vx:-0.8*a.vx;w(a);a.sx-=R;a.sy-=R/2;if(c||d)la=a.sx-m*(0.5-a.vx/20);a.up&&(a.uplook-=0.01);a.down&&(a.uplook+=0.01);a.uplook=a.up||a.down?q(v(a.uplook,-0.5),0.5):q(v(a.uplook,-0.1),0.1);na=a.sy-p*(0.5-a.uplook)},ia=function(a,b,c,d){return W(a,b,function(a){var b=c.radius;a.translate(b,b);a.lineWidth=1;a.strokeStyle="#111";
a.fillStyle=c.color;a.beginPath();a.arc(0,0,b,0,P);a.fill();a.scale(d?1:-1,1);a.fillStyle="#222";a.fillText(c.face,-15,1);a.fillText(c.mouth,c.mx,c.my);a.stroke()})},Ma=function(a){e.save();-1E7<a.floorZ&&(e.setTransform(1,0,0,0.3,a.sx+a.radius-4-V,a.sy-a.floorZ+a.z+2*a.radius-1-OffsetY),e.beginPath(),e.arc(0,0,a.radius,0,P),e.fillStyle=Ub,e.fill());e.setTransform(1,0,0,1,a.sx-V,a.sy-OffsetY);e.drawImage(0>a.vx?a.leftImg:a.rightImg,0,0);e.restore()},pb,Ra=!1,f={},wa=function(){pa(f,{x:IPX+R,y:IPY+
R,z:IPZ+R,vx:0,vy:0,vz:0,h:20,w:20,d:20,sw:E,sh:E,radius:20,draw:Ma,color:Qa,face:"\uff61\u25d5  \u25d5\uff61",mouth:"\u203f",mx:-5,my:5,update:Vb,uplook:-0.2});Ra||(Ra=ia(E,E,f,!0),pb=ia(E,E,f,!1));f.leftImg=Ra;f.rightImg=pb;w(f);la=f.sx-0.5*m;na=f.sy-0.7*p},qb=function(){x={x:0.15*m,y:0.8*p,move:null,button:null}};qb();var bb=[kb,[5,100,10,17,5883,-704,85,123,15,1694,-599,149,5,0,100,3,42,-232,556,125,3,41,-108,97,449,1,171,-75,1,194,-46,1,221,-71,3,320,-64,59,106,3,141,42,237,79,3,138,247,335,
233,12,475,43,1355,297,1,426,94,3,598,-224,109,38,1,657,-15,1,887,-22,1,1155,-23,1,1350,-19,1,1688,-199,3,3292,-645,130,38,3,3488,-572,109,38,3,3667,-508,260,38,3,3931,-662,260,38,3,4278,-753,260,38,15,4645,-691,124,3,3138,-900,1419,54,10,3233,-838,1349,75,1,4411,-685,9,3877,-421,38,9,4135,-569,42,9,4315,-674,30,9,4499,-678,34,15,3328,-606,149,3,4792,-521,1264,270,3,6064,-940,151,697,1,2120,-635,1,2375,-643,1,2658,-637,9,3997,-576,25,10,601,-182,110,33,3,1710,-954,194,88,10,1717,-868,179,95,12,713,
-233,114,125,3,830,-223,109,38,10,831,-181,110,33,3,947,-234,150,125,3,1101,-214,109,38,10,1097,-172,110,33,12,1214,-236,79,125,3,1294,-216,109,38,10,1295,-175,110,33,3,1409,-725,245,617,3,1656,-723,103,125,3,3121,-842,109,113,12,1859,-727,1372,54,9,3132,-595,47,9,2213,-621,38,9,1935,-621,29,9,2811,-628,20,9,2548,-616,10,3,4592,-747,1474,48,3,1835,-324,1458,478,10,5120,-698,54,51,10,5424,-695,63,50,10,5611,-694,101,47,10,4924,-696,94,44,10,5275,-698,54,51,0,201,172,3,2302,-598,148,38,3,2795,-593,
148,38,5,0,10,3,46,-110,337,236],[5,100,10,15,502,78,127,15,2068,143,127,17,1996,484,65,105,15,1993,-433,68,5,0,100,3,54,-45,255,28,3,365,-137,203,28,3,36,-245,274,28,3,369,-348,197,28,12,969,200,1001,28,3,411,439,157,28,12,90,-452,2101,28,0,254,-378,1,1784,437,3,2141,-422,53,1032,3,370,55,197,28,7,523,109,264,397,67,28,10,2,515,-249,2,512,-57,4,728,219,76,33,4,734,-7,68,33,1,773,540,1,774,499,1,772,454,1,771,399,1,774,352,1,776,311,1,658,-34,1,669,45,1,654,9,1,678,-139,1,688,-172,1,696,-210,1,704,
-241,3,141,361,102,28,7,192,396,455,597,67,28,10,3,499,587,67,28,1,1735,316,1,1600,573,1,1325,408,1,1200,314,3,1915,461,197,28,3,1863,-344,197,28,3,1641,-269,197,28,10,1709,-240,76,51,3,1323,-179,302,28,2,1573,-65,3,1062,37,905,28,2,1648,137,2,1789,131,2,1918,140,2,1504,134,3,1987,116,155,28,3,1030,292,131,28,3,1234,295,197,28,3,1495,298,197,28,3,1783,298,197,28,9,1467,272,30,3,929,349,67,28,3,1003,432,67,28,3,1097,389,67,28,3,1185,440,67,28,3,1287,350,67,28,3,1404,398,67,28,3,1476,464,67,28,3,1560,
524,67,28,3,1644,593,67,28,3,1745,374,67,28,3,1826,437,67,28,10,420,470,139,44,12,566,-422,49,1069,4,612,560,76,33,10,621,591,66,44,12,804,-303,67,1054,3,872,264,67,28,10,1044,317,119,33,10,1231,317,197,33,10,1493,329,197,33,10,1782,329,197,33,3,871,-314,197,34,10,873,-278,54,51,1,1050,-220,1,1041,-256,1,1088,-222,1,1094,-258,3,952,516,67,28,3,910,603,67,28,3,872,684,67,28,1,763,132,1,761,96,1,762,59,3,545,734,324,23,10,611,-422,76,51,3,1119,-314,13,136,1,1925,-406,4,1758,-423,76,33,2,188,68,2,178,
-137,10,1175,-228,167,33,3,1132,-253,225,28,3,969,-179,221,28,2,1065,-101,3,865,-83,197,28,3,931,-57,71,56,5,0,10,3,1439,-152,120,89,3,986,-315,134,146,3,130,-23,124,87,3,1914,-438,121,99,3,126,-220,124,87]],ta=0;DR=U;cb(kb);window.onresize=function(){var a=F[0].parentElement,b=m,c=p;m=q(960,a.offsetWidth);p=q(760,a.offsetHeight);var d=a.offsetLeft+(a.offsetWidth-m)/2+"px";r(F,function(a){a.style.top=0;a.style.left=d;if(b!=m||c!=p)a.width=m,a.height=p});M.fillStyle=BgCStyle;M.fillRect(0,0,m,p);if(b!=
m||c!=p)r(I,function(a){a.toScreenSpace?a.toScreenSpace(a):w(a)}),qb()};onresize();navigator.userAgent.match(/Android/i)&&(window.scrollTo(0,1),M.fillStyle=BgCStyle,M.fillRect(0,0,m,p));ka=la=f.sx-0.5*m;ma=na=f.sy-0.8*p;var e=Wa,ya=null,S,ja,Va=[];oa(Sa)})();
