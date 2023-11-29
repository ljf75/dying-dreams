window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)}}());var canvas,context,canvasWidth,canvasHeight,canvasXCenter,canvasYCenter,togglePul=true,spaceDown=false,gameover=false,menu=true,pulsate=0,puddlePulsate=0,gooseMove=0,goosePosition=[],SillyGooseMaxPosition=[450,450,450,350,350,270,270,270,270,270,270,270,450,450,450,450,450,450,270,270,210,210,210,210,210,210,210,350,450,450],duckOut=40,rescues=0,gooseRescues=0,gooseRescuesMove=0,waterSaved=0,grassArr=[],elementArr=[],segements=[],puddleCollected=false,left=false,right=false,notGoose=false,takeaway=-30,menuAlpha=1,dirtSaved=0,level=1,waterlevel=129,alert=false;function gameReset(){menu=false;notGoose=false;waterlevel=129;waterSaved=0;dirtSaved=0;gameover=false}function doKeyDown(a){switch(a.keyCode){case 37:if(!gameover&&!menu){left=true}break;case 39:if(!gameover&&!menu){right=true}break;case 32:if(!menu&&!gameover){if(duckOut<=80){gooseRescues+=1;spaceDown=true}}if(menu){menu=!menu}break;case 80:menu=!menu;break;case 13:if(gameover){gameReset()}break;default:break}}function doKeyUp(a){switch(a.keyCode){case 37:left=false;break;case 39:right=false;break;case 32:spaceDown=false;break}}function createBackgound(){var e,d,c,b,f,a;for(e=0;e<=2000;e+=1){d=[];b=Math.floor(Math.random()*(canvasWidth-1));f=Math.floor(Math.random()*(canvasHeight-1));a=!a;c=a?3:5;d.push(b,f,c);grassArr.push(d)}}function getRandomInt(c,a){var e,d,b;do{e=false;d=Math.floor(Math.random()*(a-c+1))+c;if(d===0){d+=1}if(elementArr[0]){for(b=0;b<elementArr.length;b+=1){if(d===elementArr[b][1]){e=true;break}}}}while(e);return d}function getRandomGooseInt(c,a){var d,b=a-c+1;b=b/20;d=Math.floor(Math.random()*b);return(d*20)+c}function createPuddles(){var c,e,d,a,b;for(c=0;c<6;c+=1){e=[];d=getRandomInt(0,29);a=getRandomGooseInt(200,SillyGooseMaxPosition[d]);b=getRandomInt(5,25);e.push(a,d,b);elementArr.push(e)}}function getSegements(){var a,c,b;for(a=0;a<=29;a+=1){c=(a/15*Math.PI);b=[];b.push(c,false);segements.push(b)}}function init(){canvasWidth=1000;canvasHeight=600;canvas=document.createElement("canvas");canvas.width=canvasWidth;canvas.height=canvasHeight;context=canvas.getContext("2d");context.fillStyle="rgb(117,153,90)";context.rect(0,0,canvasWidth,canvasHeight);context.fill();document.body.appendChild(canvas);window.addEventListener("keydown",doKeyDown,true);window.addEventListener("keyup",doKeyUp,true);canvasXCenter=canvasWidth/2;canvasYCenter=canvasHeight/2;createBackgound();createPuddles();getSegements()}function drawSegment(){var a=0,f=0,b=200,d=1,c,e;for(c=0;c<segements.length;c+=1){e=segements[c][0];context.save();context.translate(canvasXCenter,canvasYCenter);context.rotate(e);context.fillStyle="rgb(252,238,33)";context.beginPath();context.fillRect(a,f,b,d);context.closePath();context.fill();context.restore()}}function notification(a,d,c,b){context.save();context.translate(canvasXCenter,canvasYCenter);context.rotate(c);context.beginPath();context.arc(a,d,b+10,0,2*Math.PI,false);context.fillStyle="rgba(203,0,0,0.7)";context.fill();context.beginPath();context.arc(a,d,(b+13),0,2*Math.PI,false);context.fillStyle="rgba(203,0,0,0.7)";context.fill();context.restore();context.save();context.translate(canvasXCenter,canvasYCenter);context.rotate(c);context.font=b+"px Calibri";context.fillStyle="rgba(203,200,200,0.7)";context.textAlign="center";context.textBaseline="middle";context.fillText("Switch!",a,d);context.restore()}function puddle(a,d,c,b){context.save();context.translate(canvasXCenter,canvasYCenter);context.rotate(c);context.beginPath();context.arc(a,d,b,0,2*Math.PI,false);context.fillStyle="rgba(0,126,128,0.5)";context.fill();context.beginPath();context.arc(a,d,(b+3),0,2*Math.PI,false);context.fillStyle="rgba(0,126,128,0.5)";context.fill();context.restore()}function dirt(a,d,c,b){context.save();context.translate(canvasXCenter,canvasYCenter);context.rotate(c);context.fillStyle="rgba(110,85,56,0.7)";context.beginPath();context.fillRect(a-5,d-10,b,b);context.fill();context.beginPath();context.fillRect(a,d,b+5,b+5);context.fill();context.beginPath();context.fillRect(a-5,d,b+7,b+7);context.fill();context.beginPath();context.fillRect(a-3,d+10,b-5,b-5);context.fill();context.beginPath();context.fillRect(a-15,d-5,b+5,b+5);context.fill();context.restore()}function drawElement(){var e=0,c,d,a,b;for(c=0;c<elementArr.length;c+=1){d=segements[elementArr[c][1]][0];a=elementArr[c][0];b=elementArr[c][2];if(c===elementArr.length-1){alert=false;if(!notGoose&&waterlevel<80){notification(a,e,d,b);alert=true}else{if(notGoose&&waterlevel>120){notification(a,e,d,b);alert=true}}}else{if(notGoose){dirt(a,e,d,b)}else{puddle(a,e,d,b)}}}}function updateElement(){var d,c,a,b;for(c=0;c<elementArr.length;c+=1){a=elementArr[c][0];b=elementArr[c][2];if(b>3){b-=0.1;elementArr[c][2]=b}else{d=getRandomInt(0,29);a=getRandomGooseInt(200,SillyGooseMaxPosition[d]);elementArr[c][0]=a;elementArr[c][1]=d;elementArr[c][2]=getRandomInt(5,25)}}}function drawBackground(){var a;context.save();context.fillStyle="rgb(100,155,83)";context.rect(0,0,canvasWidth,canvasHeight);context.fill();context.fillStyle="rgb(50,205,0)";for(a=0;a<grassArr.length;a+=1){context.beginPath();context.rect(grassArr[a][0],grassArr[a][1],grassArr[a][2]/8,grassArr[a][2]);context.closePath();context.fill()}context.restore()}function updateSilly(){if(!spaceDown&&duckOut<=40){if(puddleCollected){rescues+=1;puddleCollected=false}}if(right&&!spaceDown&&duckOut<=80){gooseMove+=1;if(gooseMove===30){gooseMove=0}}if(left&&!spaceDown&&duckOut<=80){gooseMove-=1;if(gooseMove===-1){gooseMove=29}}if(!spaceDown&&duckOut>40){duckOut-=20}if(puddleCollected){spaceDown=false}if(spaceDown&&duckOut<500){duckOut+=20}}function goose(b,i,c,e,a,g,d,f){context.save();context.fillStyle="rgba(253,253,253,0.8)";context.translate(a,g);context.rotate(f);context.fillRect(b,i,c,e);context.fillRect(b-5,i+5,c+10,e-10);context.fillRect(b-5,i+15,c+30,e-30);context.fillRect(b-5,i+5,c-5,e-10);if(spaceDown){context.fillStyle="rgb(253,253,253)";context.fillRect(b,i+d,c-3,e);context.fillRect(b,i-d,c-3,e);context.fillRect(b-d*2,i+10,c-5,e-20)}context.fillStyle="rgb(253,203,0)";context.fillRect(b+45,i+17,c-10,e-34);context.restore()}function moose(b,g,c,d,a,f,e){context.save();context.fillStyle="rgba(72,48,48,0.9)";context.translate(a,f);context.rotate(e);context.fillRect(b-10,g,c,d);context.fillRect(b+40,g+10,c-45,d-20);context.fillRect(b+45,g+8,c-35,d-16);context.fillStyle="rgba(230,248,48,0.9)";context.fillRect(b+45,g+18,c-47,d-10);context.fillRect(b+45,g+30,c-36,d-27);context.fillRect(b+45,g+22,c-40,d-27);context.fillRect(b+45,g-8,c-47,d-10);context.fillRect(b+45,g-4,c-36,d-27);context.fillRect(b+45,g+4,c-40,d-27);context.restore()}function drawSilly(){var c,d,g,b=canvasXCenter,f=canvasYCenter,a=duckOut,e=(gooseMove/15*Math.PI);goosePosition=[gooseMove,a];if(notGoose){c=50;d=30;g=-13;moose(a,g,c,d,b,f,e)}else{c=20;d=40;g=-19;goose(a,g,c,d,b,f,pulsate,e)}}function drawPond(){context.save();context.beginPath();context.arc(canvasXCenter,canvasYCenter,(1.13*waterlevel),0,2*Math.PI,false);context.fillStyle="rgba(73,56,49,0.3)";context.fill();context.beginPath();context.arc(canvasXCenter,canvasYCenter,(1.1*waterlevel),0,2*Math.PI,false);context.fillStyle="rgba(73,56,49,0.5)";context.fill();context.beginPath();context.arc(canvasXCenter,canvasYCenter,(0.8*waterlevel)+pulsate,0,2*Math.PI,false);context.fillStyle="rgba(0,126,128,0.5)";context.fill();context.beginPath();context.arc(canvasXCenter,canvasYCenter,(0.9*waterlevel)+pulsate,0,2*Math.PI,false);context.fillStyle="rgba(0,126,128,0.5)";context.fill();context.beginPath();context.arc(canvasXCenter,canvasYCenter,(1.04*waterlevel)-pulsate,0,2*Math.PI,false);context.fillStyle="rgba(0,126,128,0.5)";context.fill();context.restore();if(togglePul){pulsate+=0.2;puddlePulsate+=0.02}else{pulsate-=0.2;puddlePulsate-=0.02}if(pulsate>=3){togglePul=false}if(pulsate<=0){togglePul=true}}function getMousePos(b,a){var c=b.getBoundingClientRect();return[a.clientX-c.left,a.clientY-c.top]}function showMenu(){context.save();context.beginPath();context.fillStyle="rgba(73,56,49,0.8)";context.fillRect(200,100,600,400);context.fillStyle="rgba(73,56,49,0.5)";context.fillRect(196,96,4,408);context.fillRect(800,96,4,408);context.fillRect(200,96,600,4);context.fillRect(200,500,600,4);context.closePath();context.fill();context.restore()}function showHowToPlay(){showMenu();context.save();context.fillStyle="rgb(253,203,0)";context.textAlign="center";context.font="40px Calibri";context.fillText("How to play",canvasXCenter,150);context.fillStyle="rgb(239,218,171)";context.font="20px Calibri";context.fillText("Silly Moose and Goose dont know they're causing each other trouble.",canvasXCenter,180);context.fillText("Silly Moose want to get rid of the pond so he can eat more grass!",canvasXCenter,210);context.fillText("But Silly Goose want a bigger pond!",canvasXCenter,240);context.fillText("For the goose the pond is draining, for the moose it is overflowing.",canvasXCenter,270);context.fillText("When you are Silly Goose, collect water for points.",canvasXCenter,300);context.fillText("When you are Silly Moose, collect earth for points.",canvasXCenter,330);context.fillText("Change to goose/moose by collecting the red 'Switch!' element.",canvasXCenter,360);context.fillText("Use left and right arrows to move.",canvasXCenter,420);context.fillText("HOLD spacebar until you hit the element to collect it.",canvasXCenter,450);context.fillStyle="rgb(239,70,70)";context.fillText("Press spacebar to start!",canvasXCenter,480);context.restore()}function gameOver(){showMenu();context.save();context.fillStyle="rgb(253,203,0)";context.textAlign="center";context.font="40px Calibri";context.fillText("Game Over",canvasXCenter,150);context.fillStyle="rgb(239,218,171)";context.font="20px Calibri";context.fillText("Well done you have collected "+waterSaved+"L of water",canvasXCenter,210);context.fillText("and collected "+dirtSaved+"KG of earth... giving you a score of",canvasXCenter,240);context.fillStyle="rgb(239,0,0)";context.font="30px Calibri";context.fillText(waterSaved+dirtSaved,canvasXCenter,270);context.fillStyle="rgb(239,218,171)";context.font="20px Calibri";if(waterlevel<70){context.fillText("... but sadly a goose lost its home :(",canvasXCenter,300)}else{context.fillText("... but sadly a moose lost its home :(",canvasXCenter,300)}context.fillText("Press ENTER to play again.",canvasXCenter,450);context.restore()}function increaseWaterlevel(a){if(notGoose){waterlevel-=a;dirtSaved+=a}else{waterlevel+=a;waterSaved+=a}}function checkSillyHit(){var c,a,b;if(goosePosition[0]){for(b=0;b<elementArr.length;b+=1){if(goosePosition[0]===elementArr[b][1]){if(goosePosition[1]===elementArr[b][0]){if((b===5&&waterlevel<70&&!notGoose)||(b===5&&waterlevel>130&&notGoose)){notGoose=!notGoose}increaseWaterlevel(elementArr[b][2]/10);c=getRandomInt(0,29);a=getRandomGooseInt(200,SillyGooseMaxPosition[c]);elementArr[b][0]=a;elementArr[b][1]=c;elementArr[b][2]=getRandomInt(5,25);puddleCollected=true}break}}}}function gameText(){waterSaved=Math.floor(waterSaved);dirtSaved=Math.floor(dirtSaved);context.save();context.beginPath();context.fillStyle="rgba(73,56,49,0.8)";context.fillRect(0,0,1000,70);context.fillRect(0,70,10,520);context.fillRect(990,70,10,520);context.fillRect(0,590,1000,10);if(alert){context.fillStyle="rgba(203,0,0,0.8)"}else{context.fillStyle="rgba(73,56,49,0.5)"}context.fillRect(10,70,980,4);context.fillRect(10,74,4,516);context.fillRect(986,74,4,516);context.fillRect(14,586,972,4);context.fillRect(14,550,846,4);context.fillRect(860,550,126,36);context.fillStyle="rgba(73,56,49,0.3)";context.fillRect(14,554,846,32);context.font="15px Calibri";context.fillStyle="rgb(250,250,250)";context.fillText("christoffee.com",880,575);context.closePath();context.fill();context.fillStyle="rgb(253,203,0)";context.font="40px Calibri";if(notGoose){context.fillText("Silly Moose",20,40);context.fillStyle="rgb(239,218,171)";context.font="12px Calibri";context.fillText("and Goose.",138,58)}else{context.fillText("Silly Goose",20,40);context.fillStyle="rgb(239,218,171)";context.font="12px Calibri";context.fillText("and Moose.",138,58)}context.font="20px Calibri";context.fillStyle="rgb(239,218,171)";context.fillText("Water Collected: "+waterSaved+"L",650,45);context.fillStyle="rgb(239,218,0)";context.fillText("Dirt Collected: "+dirtSaved+"KG",450,45);if(notGoose){context.fillStyle="rgb(110,85,56)";context.font="25px Calibri";context.fillText("Earth",850,45)}else{context.fillStyle="rgb(0,126,128)";context.font="25px Calibri";context.fillText("Water",850,45)}context.restore()}function drawWaterLevel(){context.save();if(waterlevel<70||waterlevel>129){context.fillStyle="rgba(103,6,9,0.6)"}else{context.fillStyle="rgba(0,126,128,0.7)"}context.translate(10,554);context.fillRect(4,0,(waterlevel-50)*8.47,32);context.fillStyle="rgba(250,0,0,0.7)";context.fillRect(172,0,4,32);context.fillRect(678,0,4,32);context.restore()}function updateWaterLevel(){if(!menu&&waterlevel>50&&waterlevel<150){if(notGoose){waterlevel+=(0.1+(dirtSaved/70))}else{waterlevel-=(0.1+(waterSaved/70))}}}function render(){if(context){context.clearRect(0,0,canvasWidth,canvasHeight);drawBackground();drawPond();drawElement();drawSilly();drawWaterLevel();gameText();if(menu){showHowToPlay()}if(waterlevel<=50||waterlevel>=150){gameover=true}if(gameover){gameOver()}}}function timestamp(){return window.performance&&window.performance.now?window.performance.now():new Date().getTime()}var now,dt=0,last=timestamp(),step=1/25;function update(){updateWaterLevel();updateSilly();updateElement();checkSillyHit()}function frame(){now=timestamp();dt=dt+Math.min(1,(now-last)/1000);while(dt>step){dt=dt-step;update(step)}render(dt);last=now;requestAnimationFrame(frame)}requestAnimationFrame(frame);