let{init:init,Sprite:Sprite,GameLoop:GameLoop,initKeys:initKeys,keyPressed:keyPressed,Pool:Pool,Quadtree:Quadtree}=kontra,{canvas:canvas}=init(),lastWidth=0,lastHeight=0,canvasWidth=800,canvasHeight=600;canvas.width=canvasWidth,canvas.height=canvasHeight,d.style.webkitTransformOrigin=d.style.transformOrigin="0 0";let agePerSec=1.5;function initSize(){let t=window.innerWidth,a=window.innerHeight;if(t!=lastWidth||a!=lastHeight){lastWidth=t,lastHeight=a;var n=canvasWidth/t,e=canvasHeight/a;let r=1/Math.max(n,e);r=Math.min(r,1),d.style.webkitTransform=d.style.transform="scale("+r+")",d.style.left=(t-canvasWidth*r)/2+"px"}}function initTerrain(t,a){let n=array2d(t);for(let e=0;e<t;e++)for(let t=0;t<a;t++){let a=40+15*Math.random();n[e][t]=["hsl(22, 100%, "+a+"%)",0,0]}return n}function initSandColor(){return"hsl(22, 100%, "+(40+15*Math.random())+"%)"}function initGrassColor(){return"hsl(126, 100%, "+(35+25*Math.random())+"%)"}function initFlowers(t,a,n){let e=[],r=100+Math.random()*(t-200),i=100+Math.random()*(a-200);e.push(createFlower(r,i,7));for(let o=0;o<n-1;o++){let n=Math.random()*Math.PI*2,o=r+100*Math.cos(n),h=i+100*Math.sin(n);(o<100||h<100||o>t-100||h>a-100)&&(o=100+Math.random()*(t-200),h=100+Math.random()*(a-200)),e.push(createFlower(o,h,4)),r=o,i=h}return e}function createFlower(t,a,n=0){let e=[[3,55,65],[42,50,60],[64,50,60],[197,30,60],[249,55,65],[295,57,75],[359,70,80]],r=1+1*Math.random(),i=[];for(let t=0;t<r;t++){let t=Math.round(2+1*Math.random()),a=[];for(len=0;len<t;len++){let t=Math.random(),n=t<=.6?0:t<=.8?1:2;a.push(n)}let n=Math.random()>.5?1:-1;i.push([20*Math.random(),n,a])}let o=Math.round(Math.random()*(e.length-1)),h=e[o][0],d=e[o][2]-e[o][1],s=e[o][1]+Math.random()*d,l="hsl(123, 100%, "+(10+15*Math.random())+"%)",M="hsl(45, 100%, "+(40+20*Math.random())+"%)",m="hsl("+h+", 100%, "+s+"%)";return[t,a,0,Math.round(2+Math.random()),Math.round(20+30*Math.random()),Math.round(15+4*Math.random()),Math.round(5+4*Math.random()),i,[l,M,m],Date.now()-1e3*agePerSec*n,!0,11+3*Math.random()]}window.addEventListener("resize",function(){initSize()});