function mainLoop(){switch(currentGameState){case GameStates.PROGRESS:updateGameMovement(),hitDetectionAndEndGame();break;case GameStates.WIN:updateVictoryMovement();break;case GameStates.LOSS:updateLossMovement()}draw()}function updateLossMovement(){var e=0;if(!(Math.abs(arrFleet[0].x-fleetOriginX)<2*fleetSpeed&&Math.abs(arrFleet[0].y-fleetOriginY)<2*fleetSpeed)){Math.abs(arrFleet[0].x-fleetOriginX)<2*fleetSpeed?(e=1,fleetDirX=0):fleetDirX=arrFleet[0].x>fleetOriginX?-1:1;for(var t=0;fleetSize>t;t++)arrFleet[t].x+=fleetSpeed*fleetDirX,arrFleet[t].y+=fleetSpeed*e}}function updateVictoryMovement(){var e=0;Math.abs(arrFleet[0].x-fleetOriginX)<2*fleetSpeed?(e=-1,fleetDirX=0):fleetDirX=arrFleet[0].x>fleetOriginX?-1:1;for(var t=0;fleetSize>t;t++)arrFleet[t].x+=fleetSpeed*fleetDirX,arrFleet[t].y+=fleetSpeed*e}function updateGameMovement(){if(isShooting&&(shipY-=launchSpeed),shipX+=moveDirection*sideSpeed,-spriteSize>=shipY&&resetShip(),fleetAscendTicks>0){for(var e=0;fleetSize>e;e++)arrFleet[e].y-=fleetSpeed;fleetAscendTicks--}else{for(var t=0,e=0;fleetSize>e;e++){var r=arrFleet[e];r.x+=fleetDirX*fleetSpeed,!r.active&&(r.x+spriteSize>screenWidth*edgeBuffer||r.x<screenWidth*(1-edgeBuffer))&&(t=1)}t&&(fleetDirX*=-1,fleetAscendTicks=spriteSize/fleetSpeed)}}function hitDetectionAndEndGame(){for(var e=!0,t=0;fleetSize>t;t++){var r=arrFleet[t];Math.abs(shipX-r.x)<hitThreshold&&Math.abs(shipY-r.y<hitThreshold&&!r.active)&&(r.active=1,r.colour=shipColour,resetShip()),r.y<0&&!r.active&&(currentGameState=GameStates.LOSS),e&=r.active}e&&(currentGameState=GameStates.WIN)}function resetShip(){isShooting=!1,shipY=shipStartY,moveDirection=0,shipColour=arrShipColours[~~(Math.random()*arrShipColours.length)]}function resetGame(){currentGameState=GameStates.READY,shipX=shipStartX,resetShip(),fleetDirX=1,fleetAscendTicks=0;for(var e=0;fleetSize>e;e++)arrFleet[e]={x:e%8*2*spriteSize+fleetOriginX,y:2*Math.floor(e/8)*spriteSize+fleetOriginY,active:0,colour:0}}function draw(){drawMap();for(var e=0;fleetSize>e;e++)if(arrFleet[e].active)drawSprite(shipSprite,arrFleet[e].x,arrFleet[e].y,arrFleet[e].colour);else{var t=!0,r=230;currentGameState==GameStates.LOSS&&(t=!1,r=0),drawSprite(shipSprite,arrFleet[e].x,arrFleet[e].y,r,t)}switch(drawSprite(shipSprite,shipX,shipY,shipColour),currentGameState){case GameStates.READY:return void drawReadyState();case GameStates.WIN:return void drawWinState();case GameStates.LOSS:return void drawLossState()}drawStrokedText("P: Pause",screenWidth-150,25)}function drawSprite(e,t,r,i,a){void 0==a&&(a=!1);for(var s=0;s<e.length;s++){var o=parseInt(e.charAt(s));if(o){var S=1-o/9;setFill(a?"hsla("+i+",10%,"+100*S+"%,0.3)":"hsla("+i+",80%,"+100*S+"%,1)");var n=2,f=t+s%16*n,d=r+Math.floor(s/16)*n;drawRect(f,d,n,n)}}}function drawStrokedText(e,t,r){ctx.font="28px Lucida Console",ctx.strokeStyle="black",ctx.lineWidth=4,ctx.strokeText(e,t,r),ctx.fillStyle="white",ctx.fillText(e,t,r)}function drawMap(){setFill("#111111"),drawRect(0,0,screenWidth,screenHeight);for(var e=0;e<arrStars.length;e++){var t=arrStars[e];setFill(t.colour),drawRect(t.x,t.y,t.size,t.size)}}function drawReadyState(){drawStrokedText("W: LAUNCH",shipX-60,shipY-10),drawStrokedText("A <",shipX-60,shipY+25),drawStrokedText("> D",shipX+40,shipY+25),setFill("white");var e=arrFleet[0].x,t=arrFleet[0].y,r=arrFleet[fleetSize-1].x+spriteSize,i=arrFleet[fleetSize-1].y+spriteSize;drawRect(e-5,t-5,5*spriteSize,1),drawRect(e-5,t-5,1,3*spriteSize),drawRect(r+5-5*spriteSize,i+5,5*spriteSize,1),drawRect(r+5,i+5-3*spriteSize,1,3*spriteSize),drawStrokedText("ASSEMBLE THE FLEET",(r+e)/2-150,(i+t)/2+7),t>50&&drawStrokedText("EARTH MUST BE DESTROYED!",screenWidth/2-200,50)}function drawLossState(){drawStrokedText("GAME OVER",screenWidth/2-75,100),drawStrokedText("THE FLEET WAS NOT PREPARED",screenWidth/2-220,150),drawStrokedText("R: RESTART",screenWidth/2-80,200)}function drawWinState(){drawStrokedText("VICTORY!",screenWidth/2-58,200),drawStrokedText("THE FLEET HEADS FOR EARTH!",screenWidth/2-200,250),drawStrokedText("R: RESTART",screenWidth/2-80,300)}function setFill(e){ctx.fillStyle=e}function drawRect(e,t,r,i){ctx.fillRect(e,t,r,i)}for(var spriteSize=32,sideSpeed=5,launchSpeed=10,screenWidth=800,screenHeight=500,hitThreshold=spriteSize/3,edgeBuffer=.99,shipSprite="0000070000700000000075000057000000075000000570000075000000005700075000000000057075000000000000577500000000000057075000055000057000750055550057000777775335777770777555555555577775553357753355577775335775335777077555577555577000077555555770000000007557000000",shipStartX=screenWidth/2-spriteSize/2,shipStartY=screenHeight-screenHeight/13,fleetOriginX=160,fleetOriginY=250,fleetSize=24,fleetSpeed=1.5,GameStates={READY:0,PROGRESS:1,WIN:2,LOSS:3},arrStarColours=["#9db4ff","#a2b9ff","#a7bcff","#aabfff","#afc3ff","#baccff","#c0d1ff","#cad8ff","#e4e8ff","#edeeff","#fbf8ff","#fff9f9","#fff5ec","#fff4e8","#fff1df","#ffebd1","#ffd7ae","#ffc690","#ffbe7f","#ffbb7b"],arrShipColours=[],i=80;130>=i;i+=10)arrShipColours.push(i);for(var shipX=0,shipY=0,moveDirection=0,isShooting=!1,shipColour=130,arrFleet=[],fleetDirX=0,fleetAscendTicks=0,currentGameState=GameStates.READY,arrStars=[],i=0;500>i;i++)arrStars[i]={x:~~(Math.random()*screenWidth),y:~~(Math.random()*screenHeight),size:~~(2*Math.random())+1,colour:arrStarColours[~~(Math.random()*arrStarColours.length)]};window.onload=function(){canvas=document.getElementById("main"),ctx=canvas.getContext("2d"),ctx.lineWidth=1,resetGame(),setInterval(mainLoop,16)},window.onkeydown=function(e){e=e||window.event;var t=e.keyCode;return currentGameState===GameStates.READY?void(currentGameState=GameStates.PROGRESS):82!=t||currentGameState!==GameStates.WIN&&currentGameState!==GameStates.LOSS?void(currentGameState===GameStates.PROGRESS&&(80==t&&(currentGameState=GameStates.READY),(87==t||119==t)&&(isShooting=!0,moveDirection=0),isShooting||((65==t||97==t)&&(moveDirection=-1),(68==t||100==t)&&(moveDirection=1)))):void resetGame()},window.onkeyup=function(e){e=e||window.event;var t=e.keyCode;65!=t&&97!=t||-1!=moveDirection||(moveDirection=0),68!=t&&100!=t||1!=moveDirection||(moveDirection=0)};