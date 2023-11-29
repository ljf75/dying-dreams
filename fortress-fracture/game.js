function initialize(){var e,a;for(e=0;5>e;e++)for(bricks[e]=[],a=0;10>a;a++)bricks[e][a]=4-e+1}function drawTex(e,a,t){ctx.drawImage(assets[e],a/defaultX*canvas.width,t/defaultY*canvas.height,assets[e].width/defaultX*canvas.width,assets[e].height/defaultX*canvas.height)}function checkRectCol(e,a,t,n,l,i,d,c){return l+d>e&&e+t>l&&i+c>a&&n+a>i?!0:!1}function checkRectColArray(e,a){return checkRectCol(e[0],e[1],e[2],e[3],a[0],a[1],a[2],a[3])}function handleBallWalls(){var e=[0,0,1,defaultY],a=[defaultX,0,1,defaultY],t=[0,0,defaultX,1],n=[0,defaultY,defaultX,1],l=[ball.x,ball.y,64,64];checkRectColArray(l,e)&&(ball.dx=-1*ball.dx,bounce.play()),checkRectColArray(l,a)&&(ball.dx=-1*ball.dx,bounce.play()),checkRectColArray(l,t)&&(ball.dy=-1*ball.dy,bounce.play()),checkRectColArray(l,n)&&(gameOver=!0)}function handlePaddleBall(){Math.abs(paddle+128-(ball.x+32))>128||ball.y<defaultY-320||ball.y<defaultY-192&&(ball.dy=-1*ball.dy,bounce.play())}function handleBrickBall(){var e,a,t=[ball.x,ball.y,64,64],n=[0,0,128,64];for(e=0;5>e;e++)for(a=0;10>a;a++)n[0]=128*a,n[1]=64*e,checkRectColArray(t,n)&&0!==bricks[e][a]&&0>=hitCooldown&&(ball.dy=-1*ball.dy,bricks[e][a]=bricks[e][a]-1,hitCooldown=100,bounce.play(),0===bricks[e][a]&&(hits+=1))}function fixedUpdate(){right&&1024>=paddle&&(paddle+=6),left&&paddle>=0&&(paddle-=6),ball.x=ball.x+6*ball.dx,ball.y=ball.y+6*ball.dy,hitCooldown--}function update(e){handleBallWalls(),handlePaddleBall(),handleBrickBall(),fixedUpdateTime-=e,fixedUpdateTime>0||(fixedUpdateTime=10,fixedUpdate())}function render(e){var a,t;for(update(e),ctx.clearRect(0,0,canvas.width,canvas.height),drawTex("assets/paddle.png",paddle,defaultY-256),drawTex("assets/ball.png",ball.x,ball.y),a=0;5>a;a++)for(t=0;10>t;t++)0!==bricks[a][t]&&drawTex("assets/brick"+bricks[a][t]+".png",128*t,64*a);ctx.font="18px Arial",ctx.fillStyle="white",ctx.textAlign="left",ctx.fillText(hits+" Points",0,canvas.height-64),gameOver?(ctx.clearRect(0,0,canvas.width,canvas.height),alert("Game Over!\n\nYou scored "+hits+" points!\n\nThanks For Playing Fortress Fracture by UDXS\n\nI hope you enjoyed playing it as much as I did making it!\n\nFind out more about me, Davit Markarian @ udxs.me")):requestAnimationFrame(render)}function imgOnLoad(){loadingLeft--}function startGame(){ctx.clearRect(0,0,canvas.width,canvas.height),initialize(),window.requestAnimationFrame(render)}function onImgLoad(){clearInterval(loadcheck),setTimeout(startGame,3e3)}var defaultX,defaultY,canvas,ctx,bricks,paddle,ball,gameOver,hits,hitCooldown,fixedUpdateTime,loadingLeft,assets,bounce,k,loadcheck,left=!1,right=!1,down=!1;onpointerdown=function(e){down=!0,e.clientX>=innerWidth/2&&down?(left=!1,right=!0):e.clientX<innerWidth/2&&down&&(left=!0,right=!1)},onpointermove=function(e){e.clientX>=innerWidth/2&&down?(left=!1,right=!0):e.clientX<innerWidth/2&&down&&(left=!0,right=!1)},onpointereup=function(e){down=!1,left=!1,right=!1},onkeydown=function(e){"ArrowLeft"===e.key&&(left=!0,right=!1),"ArrowRight"===e.key&&(left=!1,right=!0)},onkeyup=function(e){"ArrowLeft"===e.key&&(left=!1),"ArrowRight"===e.key&&(right=!1)},defaultX=1280,defaultY=1024,canvas=document.getElementById("game"),ctx=canvas.getContext("2d"),canvas.height=innerHeight/10*9,canvas.width=canvas.height/4*5,onresize=function(){canvas.height=innerHeight/10*9,canvas.width=canvas.height/4*5,render(null)},bricks=[],paddle=defaultX/2,ball={x:defaultX/2-32,y:defaultY/2-32,dx:1,dy:1},gameOver=!1,hits=0,hitCooldown=100,fixedUpdateTime=10,ctx.font="24px Arial",ctx.fillStyle="white",ctx.textAlign="center",ctx.fillText("UDXS Fortress Fracture",canvas.width/2,canvas.height/2),loadingLeft=7,assets={"assets/ball.png":new Image,"assets/paddle.png":new Image,"assets/brick1.png":new Image,"assets/brick2.png":new Image,"assets/brick3.png":new Image,"assets/brick4.png":new Image,"assets/brick5.png":new Image},bounce=new Audio("assets/bounce.mp3"),bounce.play();for(k in assets)assets[k].onload=imgOnLoad,assets[k].src=k;loadcheck=setInterval(onImgLoad,100);