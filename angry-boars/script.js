window.onload=function(){var S,Y,Z,$,aa,ba;function K(a){a++;return k.floor(a*k.random())}function E(a,d){this.x=a||0;this.y=d||0}function la(a,d){d||(d=window.e);var c=d.keyCode;d.charCode&&0==c&&(c=d.charCode);37==c&&(S=a);39==c&&(Y=a);if(65==c||81==c)Z=a;if(90==c||87==c)$=a;83==c&&(aa=a);68==c&&(ba=a);a||(27==c&&F(G),32==c&&B==G&&(y++,7>=y?t=0:F(L)),82==c&&(B!=G&&B!=ca||F(L)))}function C(a,d,c){this.pos=new E;this.center=new E;this.dir=new E;this.t=a;this.w=d;this.h=c;H.push(this);this.setPos(0,
0)}function ma(){var a=new C(na,19,16);a.skin={x:0,y:0,w:21,h:32,dx:1,dy:16};a.skin2={x:0,y:48,w:41,h:18,dx:12,dy:2};da(a);v.push(a);a.speedX=1+0.2*k.random();a.speedY=1+0.2*k.random();a.repulsion=0.5+0.5*k.random();a.attraction=1+0.5*k.random();a.flySpeed=8;a.flying=!1;a.flyingDist=0}function da(a){!q.cat&&0.5<r()?a.setPos(m+(0.8+0.4*k.random())*s,0.5<k.random()?-50:w+20):a.setPos(m+s+20+0.5*s*k.random(),k.random()*w);a.flying=!1;a.attached=!1;q.cat||(q.cat=a)}function oa(){var a=new C(ea,35,20);
a.skin={x:0,y:67,w:39,h:35,dx:2,dy:15};a.skin2={x:2,y:35,w:22,h:10,dx:-6,dy:-5};bushes.push(a);pa(a)}function pa(a){var d=(r()+r())/2,d=0.5>d?0.5-d:1.5-d;a.destroyed=!1;a.setPos(s*(1+r())+m,d*(w-a.h))}function qa(){var a=new C(ra,33,21);a.skin={x:0,y:171,w:41,h:36,dx:5,dy:15};a.skin2={x:42,y:171,w:41,h:36,dx:5,dy:15};a.skin3={x:85,y:174,w:31,h:30,dx:0,dy:9};a.skin4={x:43,y:72,w:24,h:31,dx:-4,dy:10};a.skin5={x:97,y:122,w:18,h:5,dx:-7,dy:-16};z.push(a);sa(a)}function sa(a){a.destroyed=!1;a.exploCount=
0;a.setPos(s*(1+3*r())+m,(0.2+0.6*r())*(w-a.h))}function fa(a){if(!a.destroyed){a.destroyed=!0;a=a.pos;var d=ga,c=r();0.1>c?d=T:0.2>c?d=U:0.3>c&&(d=V);var b,e;for(e in I)c=I[e],c.t!=d||c.placed||(b=c);b||(e=q.skin,b=q.w,c=q.h,r(),d==T?(b=16,c=15,e={x:48,y:49,w:16,h:15,dx:0,dy:0}):d==U?(b=19,c=17,e={x:97,y:132,w:19,h:17,dx:0,dy:0}):d==V&&(b=19,c=18,e={x:97,y:151,w:19,h:18,dx:0,dy:0}),b=new C(d,b,c),b.skin=e,I.push(b));b.setPos(a.x+5,a.y);b.placed=!0}}function ta(){if(B==G){var a,d,c;e.fillStyle="#222";
e.fillRect(0,0,s,w);if(2<=y){e.save();var D=b.skin;d=0;c=w-8*D.h;2==y&&0.2>t/300&&(a=t/300/0.2,d=-4*D.w*(1-a),e.globalAlpha=a);e.translate(d,c);e.scale(8,8);e.drawImage(x,D.x,D.y,D.w,D.h,0,0,D.w,D.h);e.restore();3<=y&&7>=y&&(a=150>t?~~(t/10)%2:0,0!=a&&(e.fillStyle="#fff",e.fillRect(d+120,c+160,32,24),e.fillStyle="#000",e.fillRect(d+120,c+168,32,8)))}a=1;20>t?a=t/20:280<t&&(a=(300-t)/20);d=document.querySelectorAll("#intro span");for(c=0;c<d.length;c++)d[c].style.opacity=c==y?a:0;y<d.length-1?(t++,
300<=t&&(y++,7>=y?t=0:F(L))):150>t&&t++}if(B==L){var h,g,l,r;d=0;for(h in bushes)c=bushes[h],c.pos.x-m<-c.w?pa(c):!c.destroyed&&b.collides(c)&&(d=c);for(h in z)c=z[h],c.pos.x-m<-c.w&&sa(c);16>v.length&&(W++,100<W&&(ma(),W=0));100>bushes.length&&(X++,50<X&&(oa(),X=0));3>z.length&&(ha++,50<ha&&(qa(),ha=0));f.i();Z?f.x=-1:ba&&(f.x=1);$?f.y=-1:aa&&(f.y=1);0<b.growCount?(b.growCount--,b.grown||(b.grown=!0,b.setPos(b.pos.x,b.pos.y-b.h),b.w=2*b.sw,b.h=2*b.sh)):b.grown&&(b.grown=!1,b.w=b.sw,b.h=b.sh,b.setPos(b.pos.x,
b.pos.y+b.h));a=b.speed;0<b.catAttached&&!b.grown&&(a-=0.5*b.catAttached,0.2>a&&(a=0.2));0<b.beer&&(a*=1.5,b.beer-=1);b.grown&&(a*=1.4);d&&(b.grown?d.destroyed=!0:a*=0.5);f.x*=a;f.y*=a;0>f.y+b.pos.y?f.y=-b.pos.y:f.y+b.pos.y>w-b.w&&(f.y=w-b.w-b.pos.y);b.move(f);for(h in z)c=z[h],!c.destroyed&&b.collides(c)&&(b.grown?fa(c):(0==b.hurtCount&&b.hurt(),c.destroyed=!0));for(h in I)a=I[h],a.placed&&(a.pos.x+a.w<m?a.placed=!1:b.collides(a)&&(a.placed=!1,a.setPos(-100,-100),J=a,M=200,a.t==ga?M=b.beer=ia:a.t==
U?M=b.growCount=xa:a.t==V?r=!0:a.t==T&&4>b.luck&&b.luck++,N=M));for(h in v)a=v[h],a.flying||a.attached||!b.collides(a)||(a.attached=!0,b.catAttached++,q.cat==a&&(q.cat=null,b.beer=ia));a=!1;S||Y?(a=!0,!n.on&&n.val>n.min&&(n.on=!0,n.direction=S?-1:1)):n.on=!1;n.on?0<n.val?n.val--:n.on=!1:a||(n.val=n.max);for(h in v){a=v[h];f.diff(a.center,b.center);f.l();if(n.on||r)d=!1,r?(d=!0,a.attached&&(a.attached=!1,b.catAttached--),n.direction=-1):a.attached?(d=!0,a.attached=!1,b.catAttached--):a.pos.y<b.pos.y+
b.h&&a.pos.y+a.h>b.pos.y&&(-1==n.direction&&a.pos.x+a.w>b.pos.x-20&&a.pos.x+a.w<b.center.x?d=!0:1==n.direction&&a.pos.x<b.pos.x+b.w+20&&a.pos.x>b.center.x&&(d=!0)),d&&(u.n(),a.dir.x=n.direction,a.dir.y=0,a.flying||(a.flying=!0,d=new Audio("cat.mp3"),d.volume=0.5,d.play()));(a.pos.x<m-100||a.pos.x>m+2*s)&&da(a);if(a.attached)f.x=b.lastVx,f.y=b.lastVy,a.move(f);else if(a.flying){f.x=a.dir.x*a.flySpeed;f.y=a.dir.y*a.flySpeed;a.move(f);for(g in v)l=v[g],a!=l&&!l.flying&&a.collides(l)&&(l.flying=!0,l.dir.x=
a.dir.x,l.dir.y=10*-a.lastVy);for(g in A)d=A[g],a.collides(d)&&(d.move(f),d.rage=0,d.hurt());for(g in bushes)c=bushes[g],!c.destroyed&&a.collides(c)&&(c.destroyed=!0);for(g in z)c=z[g],a.collides(c)&&fa(c);a.pos.x>1.2*Math.WIDTH+m&&da(a)}else{f.n(a.attraction);p.i();for(g in v)h!=g&&(l=v[g],l.flying||(u.diff(l.center,a.center),c=u.l(),u.n(),300>c&&(c=(300-c)/c,c*=c,p.x+=u.x*c,p.y+=u.y*c)));0!=p.x&&0!=p.y&&(p.n(a.repulsion),f.x+=p.x,f.y+=p.y);d=a.speedY;f.x*=a.speedX;f.y*=d;a.move(f);f.x=0;f.y*=-1;
f.n(2);a.collides(b)&&a.move(f);for(g in A)d=A[g],a.collides(d)&&a.move(f)}}for(h in A){d=A[h];d.rage<d.rageMax&&(d.rage+=d.rageIncr);a=d.rage/d.rageMax;a=(1-a)*d.minSpeed+a*d.maxSpeed;f.diff(d.center,b.center);f.l();f.n();p.i();for(g in A)h!=g&&(r=A[g],u.diff(r.center,d.center),c=u.l(),u.n(),300>c&&(c=(300-c)/300,p.x+=u.x*c,p.y+=u.y*c));0!=p.y&&(p.n(0.5),f.sum(f,p));f.n(a);d.move(f);u.x=0;u.y=u.y;for(g in v)a=v[g],l.flying||a.collides(d)&&a.move(u);f.x*=3;f.y*=3;d.collides(b)&&(d.rage=0,b.grown||
(b.move(f),b.hurt()));for(g in bushes)c=bushes[g],!c.destroyed&&d.collides(c)&&(c.destroyed=!0);for(g in z)c=z[g],d.collides(c)&&fa(c);d.pos.x<m+d.minX&&d.setPos(m+d.minX,d.pos.y)}q.cat?q.setPos(q.cat.center.x,q.cat.center.y):q.setPos(-100,-100);m=k.max(m,~~(b.pos.x-s/2));0>m&&(m=0);e.drawImage(O,-m%s,0);H=H.sort(C.ySort);for(h in H)H[h].render();if(J||0<b.beer)e.save(),J?(N--,h=J,g=N/M,0==N&&(J=null)):(g=b.beer/ia,h=q),g=0.1>g?10*g:1,l=h.skin,e.translate(4,4),e.globalAlpha=g,e.scale(2,2),e.drawImage(x,
l.x,l.y,l.w,l.h,0,0,l.w,l.h),e.restore(),e.save(),e.globalAlpha=g,e.strokeStyle="black",e.fillStyle="white",e.lineWidth=4,e.font="bold 24px Georgia",e.textBaseline="top",e.strokeText(h.t,2*l.w+8,4),e.fillText(h.t,2*l.w+8,4),e.restore();e.save();e.translate(s-40,4);e.scale(2,2);h=0<b.hurtCount?P:x;e.drawImage(h,48+16*(4-b.luck),48,16,16,0,0,16,16);e.restore()}window.requestAnimationFrame(ta)}function F(a){B=a;a=document.querySelectorAll("div");for(var d=0;d<a.length;d++)a[d].style.display="none";if(B!=
L)document.getElementById(B).style.display="block",B==G?y=t=0:B==ca&&(a=document.getElementById("meters"),a.innerHTML=""+Math.round(100*(m/s)),a=document.getElementById("time"),a.innerHTML=""+Math.round((Date.now()-ua)/1E3));else{N=0;J=null;ua=Date.now();m=0;H=[b];W=X=0;b.setPos(s/2-b.w/2,w/2-b.h/2);b.speed=4;b.luck=4;b.hurtCount=0;b.beer=0;b.catAttached=0;b.growCount=0;b.grow=!1;b.w=b.sw;b.h=b.sh;q=new C(va,14,15);q.skin={x:96,y:96,w:14,h:15,dx:0,dy:0};q.cat=null;n={on:!1,val:0,max:20,min:18,recover:1};
n.val=n.max;for(v=[];10>v.length;)ma();for(A=[];12>A.length;)a=new C(wa,64,42),a.skin={x:0,y:102,w:97,h:67,dx:8,dy:22},a.minSpeed=b.speed*(0.6+0.2*k.random()),a.maxSpeed=b.speed*(1.2+0.1*r()),a.rage=1*r(),a.rageMax=4,a.rageIncr=0.003*(1+0.6*k.random()),a.minX=-20-60*r(),a.setPos(a.minX+m,k.random()*w),A.push(a);for(bushes=[];4>bushes.length;)oa();z=[];qa();I=[]}}(function(){for(var a=0,d=["webkit","moz"],b=0;b<d.length&&!window.requestAnimationFrame;++b)window.requestAnimationFrame=window[d[b]+"RequestAnimationFrame"],
window.cancelAnimationFrame=window[d[b]+"CancelAnimationFrame"]||window[d[b]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,d){var c=(new Date).getTime(),e=Math.max(0,16-(c-a)),f=window.setTimeout(function(){b(c+e)},e);a=c+e;return f});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})})();var k=Math,r=Math.random,ya=k.PI;E.prototype={i:function(){this.y=this.x=0},l:function(){return k.sqrt(this.x*this.x+this.y*
this.y)},n:function(a){var b=this.l();a=a||1;this.x=this.x/b*a;this.y=this.y/b*a},a:function(){return Math.atan2(this.y,this.x)},diff:function(a,b){this.x=b.x-a.x;this.y=b.y-a.y},sum:function(a,b){this.x=b.x+a.x;this.y=b.y+a.y}};document.onkeyup=function(a){la(0,a)};document.onkeydown=function(a){la(1,a)};C.prototype={move:function(a){a.x&&(this.pos.x+=a.x,this.center.x=this.pos.x+this.w/2,-0.5>a.x?this.flip=!0:0.5<a.x&&(this.flip=!1));a.y&&(this.pos.y+=a.y,this.center.y=this.pos.y+this.h/2);this.lastVx=
a.x;this.lastVy=a.y},setPos:function(a,b){this.pos.x=a;this.pos.y=b;this.center.x=this.pos.x+this.w/2;this.center.y=this.pos.y+this.h/2},collides:function(a){return k.abs(this.center.x-a.center.x)<0.5*this.w+0.5*a.w&&k.abs(this.center.y-a.center.y)<0.5*this.h+0.5*a.h},render:function(){var a=~~this.pos.x,d=~~this.pos.y,c=this.skin,f=this.flip,h=0.5*this.w,g=0.25*this.h,l=x;this.destroyed||(e.save(),e.beginPath(),e.translate(-m+a+0.5*this.w-h,d+this.h-g-2),e.scale(h,g),e.arc(1,1,1,0,2*Math.PI,!1),
e.fillStyle="rgba(0,0,0,0.3)",e.fill(),e.restore());if(this.t!=ea&&!this.destroyed){var p;isNaN(this.jumpCount)&&(this.jumpCount=K(24));p=k.sin(this.jumpCount*ya/24);d=~~(d-4*k.abs(p));this.jumpCount++;this.jumpCount%=24}if(0<this.beer||this.t==va||this.t==T||this.t==U||this.t==ga||this.t==V)e.save(),e.beginPath(),e.arc(-m+a+0.5*this.w,d+0.5*this.h,0.8*this.h,0,2*Math.PI,!1),e.globalAlpha=0.2+0.2*p,e.fillStyle="rgb(255,255,0)",e.fill(),e.restore();this.t==Q?n.on&&(f=-1==n.direction,c=this.skin2):
this.t==na?this.flying&&(c=this.skin2):this.t==ea?this.destroyed&&(c=this.skin2):this.t==ra&&this.destroyed&&(this.exploCount||(this.exploCount=30),1<this.exploCount?(c=20<this.exploCount?this.skin2:10<this.exploCount?this.skin3:this.skin4,this.exploCount--):c=this.skin5);e.save();e.translate(-m+a,d);this.t==Q&&this.grown&&e.scale(2,2);e.translate(-c.dx,-c.dy);f&&(e.translate(c.w,0),e.scale(-1,1));0<this.hurtCount&&(this.hurtCount--,l=P);e.drawImage(l,c.x,c.y,c.w,c.h,0,0,c.w,c.h);if(this.t==Q)e.drawImage(x,
48+16*(4-b.luck),48,16,16,-3,4,16,16);else if(this.t==wa)for(e.fillStyle="rgb(255,0,0)",a=~~this.rage,a*=a,l=0;l<a;l++)e.fillRect(67+12*(0.5*(k.random()+k.random())-0.5),20+8*(0.5*(k.random()+k.random())-0.5),2,1);e.restore()},hurt:function(){this.hurtCount=20;this.t==Q&&(b.luck--,0==b.luck&&F(ca))}};C.ySort=function(a,b){return a.pos.y+a.h-(b.pos.y+b.h)};var na="c",Q="p",wa="b",va="Cat Beer",ea="bu",ra="cr",U="Big Mushroom",V="A Hail of Cats",T="Lucky Clover",ga="Free Beer",G="intro",ca="gameOver",
L="game",B=null,y=0,t=0,ja=document.getElementById("c"),x=document.getElementById("img"),e=ja.getContext("2d"),O=document.createElement("canvas"),P=document.createElement("canvas"),R=P.getContext("2d"),ka=O.getContext("2d"),s=ja.width=800,w=ja.height=600,H=[],b=null,n=null;ba=aa=$=Z=Y=S=void 0;var v=[],A=[],f=new E,u=new E,p=new E,m=0,q=null,I=[],X=0,W=0,ha=0,z=null,ua,N,M=100,xa=200,ia=200,J;(function(){e.imageSmoothingEnabled=!1;e.mozImageSmoothingEnabled=!1;e.webkitImageSmoothingEnabled=!1;P.width=
x.width;P.height=x.height;R.drawImage(x,0,0);R.fillStyle="#f00";R.globalAlpha=0.5;R.globalCompositeOperation="source-atop";R.fillRect(0,0,x.width,x.height);O.width=2*s;O.height=w;var a=s/50,d,c,f=Math.ceil(s/8),h=Math.ceil(w/8);for(d=0;d<f;d++)for(c=0;c<h;c++)ka.drawImage(x,72+K(32),64+K(24),8,8,8*d,8*c,8,8);for(d=0;d<a;d++)for(c=0;50>c;c++)ka.drawImage(x,96+8*K(1),0+8*K(5),8,8,~~(50*d+42*k.random()),~~(k.random()*(w-3)),8,8);ka.drawImage(O,s,0);b=new C(Q,18,22);b.skin={x:24,y:0,w:32,h:47,dx:8,dy:24};
b.skin2={x:57,y:0,w:41,h:47,dx:8,dy:24};b.sw=b.w;b.sh=b.h})();F(G);ta()};