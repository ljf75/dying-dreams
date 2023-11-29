(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const H=document.querySelector("#game-canvas"),e=H.getContext("2d"),Y=window.innerWidth,A=window.innerHeight;H.width=Y;H.height=A;const F=Math.PI*2,n=32,M=new Image;M.src="spritesheet.png";const te=5;function w(){return Math.random()}var O=0,Q=0,U=0,R=0,ie=0,h=Date.now(),j=0,$=document.querySelector("#onscreen"),_=document.querySelector("#panel"),ne=document.querySelector("#startGame");ne.addEventListener("click",function(){$.style.display="none",R=1,D(),ie=Date.now()});var fe=["Live!","HAHAHA!","We'll heal you","bro come here"],d={},r={x:Y/2-100,y:A/2,r:1,ra:40,velX:0,velY:0,health:200,maxHealth:200,experience:0,experienceMax:200,level:0,color:"red",auraColor:"rgba(0,0,0,0.05)",speed:10,friction:.8,spriteFrame:0,spriteFrameY:1,spriteCount:2,power:1,powerType:0,powerA:0,powerTO:null,healSFXTime:null,draw:function(){var i=0;d[87]&&(this.velY>-this.speed&&this.velY--,i=1),d[83]&&(this.velY<this.speed&&this.velY++,i=1),d[68]&&(this.velX<this.speed&&this.velX++,i=1,this.spriteFrameY=2),d[65]&&(this.velX>-this.speed&&this.velX--,i=1,this.spriteFrameY=1),this.velY*=this.friction,this.y+=this.velY,this.velX*=this.friction,this.x+=this.velX,e.fillStyle=this.auraColor,e.beginPath(),e.arc(this.x,this.y,this.ra,0,F*2),e.closePath(),e.fill(),i&&this.spriteFrame>=this.spriteCount?this.spriteFrame=0:i&&j%te===0?this.spriteFrame++:i==0&&(this.spriteFrame=0),d[32]?(this.friction=.6,this.spriteFrameY=3):this.friction=.8,this.health>0?(e.filter="saturate("+this.level+")",e.drawImage(M,this.spriteFrame*n-.5,this.spriteFrameY*n+1,n,n,this.x-52/2,this.y-52/2,52,52)):g({x:this.x,y:this.y,color:"rgba(20, 204, 110, .75)",count:10}),e.filter="none"},drawBoards:function(){e.beginPath(),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(20,20,200,15),e.closePath(),e.beginPath(),e.fillStyle="red",e.fillRect(20,20,this.health,15),e.closePath(),e.beginPath(),e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(20,50,this.experienceMax,10),e.closePath(),e.beginPath(),e.fillStyle="yellow",e.fillRect(20,50,this.experience,10),e.closePath(),e.fillStyle="white",e.font="15px Georgia",e.fillText(`LEVEL ${this.level}`,20,80);for(var i=["Z","X","C"],a=0;a<3;a++)(!this.power||a>this.level)&&(e.filter="saturate(0)"),e.drawImage(M,a*n-.5,5*n,n,n,a*50+20,100,42,42),e.fillStyle="white",e.font="15px arial",e.fillText(i[a],a*50+25,160),(!this.power||a>this.level)&&(e.filter="none")},updateHealth:function(i){this.health+=i,this.health=this.health>=this.maxHealth?this.maxHealth:this.health},leveling:function(i){this.experience+=i,this.experience>=this.experienceMax&&(P(1.05,void 0,82,.02,.06,.09,1,1.98,23,-5,void 0,void 0,void 0,void 0,void 0,.1,void 0,.63,.06),this.experience=0,this.level++,this.ra+=5,this.power=1,this.level==3&&(y.ra=100))}};let l=[],ee=h+3e3;var ce={x:100,y:100,r:10,ra:100,velX:0,velY:0,color:"black",auraColor:"rgba(225,225,225, .5)",speed:5,friction:.8,followPlayer:1,followSpeed:1,health:100,inScope:0,spriteFrame:0,spriteFrameY:0,spriteCount:2,effect:0,ss:0,type:0,freeze:0,pawnTime:null,diaShow:null,diaHide:null,diaText:null,damageSFX:null,draw:function(){if(h<=this.pawnTime)return 0;let i=0,a=0;switch(this.type){case 0:this.effect=this.ss?1:.25,this.ss&&(this.auraColor="rgba(225,0,0,0.2)"),i=(r.x-this.x)*this.friction,a=(r.y-this.y)*this.friction;break;case 1:this.effect=this.ss?1:.25,e.filter="saturate(5)",this.ra=10,i=(y.x-this.x)*this.friction,a=(y.y-this.y)*this.friction;break}var s=Math.sqrt(i*i+a*a);s>this.followSpeed&&(i*=this.followSpeed/s,a*=this.followSpeed/s),this.x+=i,this.y+=a,e.fillStyle=this.auraColor,e.beginPath(),e.arc(this.x,this.y,this.ra,0,F*2),e.closePath(),e.fill(),e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.r,0,F*2),e.closePath(),e.fill(),this.diaShow<h&&this.diaHide>h&&(e.fillStyle="white",e.font="12px Georgia",e.fillText(this.diaText,this.x-25,this.y+50)),this.spriteFrame>=this.spriteCount?this.spriteFrame=0:j%(te+10)===0&&this.spriteFrame++,this.ss&&g({x:this.x-20,y:this.y-20,count:2,color:"rgba(225, 0, 0, 0.5)"}),e.drawImage(M,this.spriteFrame*n,this.spriteFrameY*n,n,n,this.x-52/2,this.y-52/2,52,52),e.filter="none"},pawn:function(){this.pawnTime=h+1e3,g({x:this.x,y:this.y,count:10,color:this.type==0?"yellow":"orange"}),Math.floor(w()*100)>50&&(this.diaShow=h+1e3,this.diaHide=h+2500,this.diaText=fe[Math.floor(w()*4)])}},z=[],ye={x:0,dx:0,y:0,r:15,color:"#111",removeAfter:null,create:function(i){this.x=i.x,this.y=i.y,this.r=i.r||10,this.color=i.color||"#111",this.dx=Math.sign(w()-.5)>=0?w()*1:w()*1*-1,this.removeAfter=h+1e3},draw:function(){return this.x-=this.dx,this.y-=Math.sign(w()-.5)>=0?-(w()*2):w()*2,this.r-=.5,this.r=Math.abs(this.r),e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.r,0,F*2),e.closePath(),e.fill(),this.removeAfter<=h}},y={x:Y/2,y:A/2,r:20,ra:25,health:100,maxHealth:100,draw:function(){e.fillStyle="rgba(225, 225, 225, 0.05)",e.beginPath(),e.arc(this.x,this.y,this.r+2.5,0,F*2),e.closePath(),e.fill(),e.fillStyle="rgba(225, 225, 225, 0.05)",e.beginPath(),e.arc(this.x,this.y,this.r+5,0,F*2),e.closePath(),e.fill(),e.fillStyle="rgba(225, 225, 225, 0.05)",e.beginPath(),e.arc(this.x,this.y,this.ra,0,F*2),e.closePath(),e.fill(),e.beginPath(),e.fillStyle="rgba(20, 204, 110, 1)",e.fillRect(this.x-this.health/2,this.y-50,this.health,7),e.closePath(),r.level>=1&&g({x:this.x,y:this.y-15,color:"rgba(20, 204, 110, .50)",count:1}),r.level>=2&&g({x:this.x-50,y:this.y,color:"rgba(20, 204, 110, .25)",count:1}),r.level>=5&&g({x:this.x+50,y:this.y,color:"rgba(20, 204, 110, .25)",count:1}),e.drawImage(M,0,4*n+1,n-3,n-3,this.x-45/2-3,this.y-45/2,45,45)},attack:function(i){return r.level<2?!1:(P(.5,void 0,320,.01,.08,.17,void 0,2.31,void 0,void 0,void 0,void 0,.12,.5,void 0,.1,.1,.53,.02),r.level>=2&&(e.beginPath(),e.moveTo(this.x-50,this.y),e.strokeStyle="rgba(20, 204, 110, 1)",e.lineTo(i.x,i.y),e.stroke(),i.health-=.5),r.level>=5&&(e.beginPath(),e.strokeStyle="rgba(20, 204, 110, 1)",e.moveTo(this.x+50,this.y),e.lineTo(i.x,i.y),e.stroke(),i.health-=.25),g({x:i.x,y:i.y,color:"rgba(20, 204, 110, .75)",count:1}),i.health<=0)}};function I(i,a){let s=a.x-i.x,f=a.y-i.y,o=Math.sqrt(s*s+f*f),t=i.r+a.r;return o<=t}function g(i){for(let a=0;a<i.count;a++){let s=Object.create(ye);s.create(i),z.push(s)}}function pe(){var i=0;if(h>=ee&&l.length<=3){for(let L=0;L<(r.maxHealth-r.health)/20+3;L++){var a=Object.create(ce);a.x=Math.floor(w()*Y),a.y=Math.floor(w()*A),a.ra=Math.floor(w()*100)+50,a.type=Math.floor(w()*2),a.ss=Math.floor(w()*99)>90,a.pawn(),l.push(a)}ee=h+3e3}var s=r.powerType==1?r.x:y.x,f=r.powerType==1?r.y:y.y;if(r.power&&(d[90]||d[88]&&r.level>=1||d[67]&&r.level>=2)&&(r.power=0,r.powerTO=h+1500,d[90]&&(r.powerType=1),d[88]&&(r.powerType=2),d[67]&&(r.powerType=3,y.ra+=30)),r.powerTO>h){r.powerA+=.01,e.fillStyle="white",e.font="12px Georgia";var o="";r.powerType==1&&(o="Magic: Dieeee"),r.powerType==2&&(o="Magic: Role switchi"),r.powerType==3&&(o="Magic: Totem expand"),e.fillText(o,r.x+15,r.y-20)}if(r.powerTO!=null&&r.powerTO<h){r.powerTO=null,r.powerA=0;for(var t=l.length-1;t>=0;t--)r.powerType==1?l[t].health=-1:r.powerType==2?(l[t].isP=0,l[t].type=0):r.powerType==3&&(l[t].health-=50)}for(var t=l.length-1;t>=0;t--)if(l[t].draw()!=0){r.powerTO>h&&(r.powerType==1||r.powerType==3?(e.beginPath(),e.moveTo(s,f),e.strokeStyle="rgba(20, 204, 110, "+r.powerA+")",e.lineTo(l[t].x,l[t].y),e.stroke(),s=l[t].x,f=l[t].y,P(.025,void 0,401,.01,.09,.07,2,1.82,27,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,.86,.1)):r.powerType==2&&l[t].type==1&&g({x:l[t].x,y:l[t].y,color:"orange",count:1}));var c=I({x:r.x,y:r.y,r:r.r},{x:l[t].x,y:l[t].y,r:l[t].ra});if(c?(r.updateHealth(l[t].effect),i=1,g({x:l[t].x-15,y:l[t].y-10,color:"rgba(225, 225, 0, .25)",count:1}),g({x:r.x,y:r.y,color:"rgba(225, 225, 225, 0.1)",count:1}),l[t].freeze=1,l[t].auraColor="rgba(225,225,0, .025)",(r.healSFXTime<h||r.healSFXTime==null)&&(r.healSFXTime=h+1e3,P(1.01,void 0,325,.03,.22,.33,1,1.17,1.4,void 0,void 0,void 0,.16,.1,17,void 0,void 0,.49,.23,.1))):(l[t].auraColor="rgba(225,225,225, .025)",l[t].freeze=0),c=I({x:r.x,y:r.y,r:r.ra},{x:l[t].x,y:l[t].y,r:l[t].r}),c&&d[32]||l[t].health<=0){r.leveling(15),g({x:l[t].x,y:l[t].y,color:"rgba(20, 204, 110, .50)",count:5}),l.splice(t,1),P(void 0,void 0,494,.03,.02,.19,void 0,2.37,-2.6,void 0,void 0,void 0,void 0,void 0,void 0,.1,void 0,.58,.05);continue}if(l[t].type==1&&(c=I({x:y.x,y:y.y,r:y.r},{x:l[t].x,y:l[t].y,r:l[t].r}),c&&(y.health-=l[t].effect,(l.damageSFX<h||l.damageSFX==null)&&(l.damageSFX=h+1e3,P(2.43,void 0,260,.02,.05,.08,1,2.98,void 0,void 0,void 0,void 0,void 0,.5,void 0,.3,.02,.62,.02)))),c=I({x:y.x,y:y.y,r:y.ra},{x:l[t].x,y:l[t].y,r:l[t].r}),c&&y.attack(l[t])){l.splice(t,1),P(void 0,void 0,494,.03,.02,.19,void 0,2.37,-2.6,void 0,void 0,void 0,void 0,void 0,void 0,.1,void 0,.58,.05);continue}}r.draw(),i==0&&r.updateHealth(-.1);for(var t=z.length-1;t>=0;t--)z[t].draw()&&z.splice(t,1);y.draw(),r.drawBoards()}const de=Math.ceil(Y/n)+1,xe=Math.ceil(A/n)+1;function ue(){for(let i=0;i<xe;i++)for(let a=0;a<de;a++)e.drawImage(M,(i%5==0?2:1)*n,4*n,n,n-2,a*52,i*52,52,52)}function D(){if(e.clearRect(0,0,H.width,H.height),ue(),pe(),h=Date.now(),j++,y.health<=0?(R=0,O=-1):r.health<=0&&!U?(U=1,Q=h+3e3,r.power=1,d[90]=1):r.health<=0&&h>=Q&&(R=0,O=1),R)window.requestAnimationFrame(D);else if(O==-1)_.innerHTML=`
				<div style='text-align:center;' >
				<h1 style='color: red;' >Totem Destroyed</h1>
				<p>You'll witness how cruel the world is.</p>
				<a onclick="window.location.reload()" class="button" >Play again</a>
				</div>
			`,$.style.display="block";else if(O==1){var i=Date.now();_.innerHTML=`
				<div style='text-align:center;' >
				<h1 style='color: #4add4a;' >You're now dead</h1>
				<p>Time: ${(i-ie)/1e3} | Level ${r.level}</p>
				<p>After 13k millions years, you're now in the multiverse.</p>
				<a onclick="window.location.reload()" class="button" >Play Again</a>
				</div>
			`,$.style.display="block"}}D();M.onload=D();window.addEventListener("keydown",i=>{d[i.keyCode]=1});window.addEventListener("keyup",i=>{d[i.keyCode]=0});var we=.3,P=(i=1,a=.05,s=220,f=0,o=0,t=.1,c=0,L=1,E=0,V=0,G=0,W=0,C=0,re=0,J=0,le=0,v=0,q=1,X=0,K=0)=>{let u=Math,x=44100,m=2*u.PI,ae=E*=500*m/x/x,Z=s*=(1-a+2*a*u.random(a=[]))*m/x,T=0,oe=0,p=0,k=1,se=0,he=0,b=0,B,S;for(f=x*f+9,X*=x,o*=x,t*=x,v*=x,V*=500*m/x**3,J*=m/x,G*=m/x,W*=x,C=x*C|0,S=f+X+o+t+v|0;p<S;a[p++]=b)++he%(100*le|0)||(b=c?1<c?2<c?3<c?u.sin((T%m)**3):u.max(u.min(u.tan(T),1),-1):1-(2*T/m%2+2)%2:1-4*u.abs(u.round(T/m)-T/m):u.sin(T),b=(C?1-K+K*u.sin(m*p/C):1)*(0<b?1:-1)*u.abs(b)**L*i*we*(p<f?p/f:p<f+X?1-(p-f)/X*(1-q):p<f+X+o?q:p<S-v?(S-p-v)/t*q:0),b=v?b/2+(v>p?0:(p<S-v?1:(S-p)/v)*a[p-v|0]/2):b),B=(s+=E+=V)*u.cos(J*oe++),T+=B-B*re*(1-1e9*(u.sin(p)+1)%2),k&&++k>W&&(s+=G,Z+=G,k=0),!C||++se%C||(s=Z,E=ae,k=k||1);return i=N.createBuffer(1,S,x),i.getChannelData(0).set(a),s=N.createBufferSource(),s.buffer=i,s.connect(N.destination),s.start(),s},N=new(window.AudioContext||webkitAudioContext);
