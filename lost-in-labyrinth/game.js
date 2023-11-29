let Enemy=function(a,b,c,d){this.x=a,this.y=b,this.dmg=0,this.update=null,this.draw=null,this.anims=[[0]],this.anim=0,this.flip=0,this.dead=!1,this.sx=c,this.sy=d},EnemyManager=function(){function a(){afor(b.enemylist,(a,c)=>{a&&a.dead&&b.enemylist.splice(c,1)})}let b={enemylist:[]},c=this;return b.clear=function(){delete b.enemylist,b.enemylist=[]},b.add=function(a){b.enemylist.push(a)},b.update=function(){afor(b.enemylist,(a)=>{a&&a.update&&isOnScreen(a.sx,a.sy)&&a.update(a)}),a()},b.draw=function(){afor(b.enemylist,(a)=>{a&&a.draw&&isOnScreen(a.sx,a.sy)&&a.draw(a)})},b}();function update_skeleton(a){const b=0.5;if(0===a.flip){let c=getTile(a.x-b,a.y+15),d=getTile(a.x-b,a.y+16);c===TILE.AIR&&d!==TILE.AIR?a.x-=b:a.flip=1}else{let c=getTile(a.x+16+b,a.y+15),d=getTile(a.x+16+b,a.y+16);c===TILE.AIR&&d!==TILE.AIR?a.x+=b:a.flip=0}player.hit(a,!0,()=>{playerdata.state===player.STATES.DASH||playerdata.state===player.STATES.ATTACK?(a.dead=!0,aud_seq([220,110],0.2),playerdata.score+=100,efx_explosion(a.x,a.y,a.sx,a.sy)):playerdata.hp-=a.dmg})}function draw_snake(a){var b=Math.floor;let c=a.anims[a.anim];drawsprite(c,b(a.x),b(a.y),0.1,-a.flip)}function draw_skeleton(a){var b=Math.floor;let c=a.anims[a.anim];drawsprite(c,b(a.x),b(a.y),0.1,-a.flip)}function enm_skeleton(a,b,c,d){let e=new Enemy(a,b,c,d);return e.dmg=1,e.update=update_skeleton,e.draw=draw_skeleton,e.anims=[[10,11]],e.anim=0,e}function enm_snake(a,b,c,d){let e=new Enemy(a,b,c,d);return e.dmg=1.5,e.update=update_skeleton,e.draw=draw_snake,e.anims=[[6,7]],e.anim=0,e}function draw_effect(a){var b=Math.floor;let c=a.anims[0];a.frame+=0.25,a.frame>=c.length&&(0<a.times?(a.times--,a.frame=0):(a.dead=!0,a.cb&&a.cb())),drawsprite([c[b(a.frame)]],b(a.x),b(a.y),0.1,0)}function efx_explosion(a,b,c,d,e){let f=new Enemy(a,b);return e|=null,f.dmg=0,f.update=null,f.draw=draw_effect,f.anims=[[18,19,20]],f.anim=0,f.frame=0,f.sx=c,f.sy=d,f.cb=e,EnemyManager.add(f),f}function efx_burn(a,b,c,d,e){let f=new Enemy(a,b);return f.sx=c,f.sy=d,f.update=null,f.draw=draw_effect,f.anims=[[48,49]],f.times=4,f.anim=0,f.frame=0,EnemyManager.add(f),f.cb=e,f}function update_bridge(a){var b=Math.floor;player.hit(a,!1,()=>{playerdata.hasTorch&&(efx_burn(a.x,a.y,a.sx,a.sy,()=>{let c=b(a.x/16),d=b(a.y/16);WORLD.SCREENS[a.sy*SCREENS_W+a.sx][16*d+c]=TILE.AIR}),a.dead=!0,aud_seq([220,110],0.2))})}function draw_bridge(a){var b=Math.floor;drawsprite([25],b(a.x),b(a.y),0.1,-a.flip)}function obj_bridge(a,b,c,d){let e=new Enemy(a,b);return e.dmg=0,e.update=update_bridge,e.draw=draw_bridge,e.sx=c,e.sy=d,e.burning=!1,EnemyManager.add(e),e}function random_enemy(){let a=Math.floor(2*Math.random());return 0===a?enm_skeleton:1===a?enm_snake:void 0}const TICKS=1e3/60,SCREENS_W=8,SCREENS_H=19,ROOM_WIDTH=16,ROOM_HEIGHT=13,PROOM_WIDTH=16*ROOM_WIDTH,PROOM_HEIGHT=16*ROOM_HEIGHT,GRAVITY=1;let TILE={AIR:0,FLOOR:1,WALL:2},afor=(a,b)=>{for(let c=0;c<a.length;c++)b(a[c],c)},rfor=(a,b)=>{for(let c=0;c<a;c++)b(c)},KEYS=[],PRKS=[];for(let a=0;255>a;a++)KEYS[a]=0,PRKS[a]=0;onkeydown=(a)=>{KEYS[a.keyCode]=1},onkeyup=(a)=>{KEYS[a.keyCode]=0,PRKS[a.keyCode]=0};function pressed(b){let c=KEYS[b];return 0===PRKS[b]&&1===c?PRKS[b]=1:c=!1,c}function held(a){return 0<KEYS[a]}const NATIVE_WIDTH=256,NATIVE_HEIGHT=212;let PALETTE=[[0,0,0],[157,157,157],[255,255,255],[190,38,51],[224,111,139],[73,60,43],[164,100,34],[235,137,49],[247,226,107],[47,72,78],[68,137,26],[163,206,39],[27,38,50],[0,87,132],[49,162,242],[178,220,239]];function palette_match(a){for(let b=0;16>b;b++)if(PALETTE[b][0]===a[0]&&PALETTE[b][1]===a[1]&&PALETTE[b][2]===a[2])return b;return 0}function load_spritemap(){console.log("Loading sprites...");let a=new Image;a.src="./sprites.png",a.onload=()=>{DATA.sprites=a,DATA.flipped_sprites=document.createElement("canvas"),DATA.flipped_sprites.width=256,DATA.flipped_sprites.height=256;let b=DATA.flipped_sprites.getContext("2d");b.scale(-1,1),b.drawImage(DATA.sprites,-256,0),console.log("Done loading sprites!")}}function load_tilemap(){console.log("Loading tilemap...");let a=new Image;a.src="./tiles.png",a.onload=()=>{DATA.tiles=a,console.log("Done loading tilemap!")}}function drawsprite(a,b,c,d,e){var f=Math.floor;if(null!==DATA.sprites){let g=16,h=f(GTICK*d)%a.length,i=a[h]%g*g,j=f(a[h]/g)*g;0<=(1|e)?ctx.drawImage(DATA.sprites,i,j,g,g,b,c,g,g):ctx.drawImage(DATA.flipped_sprites,256-i-16,j,g,g,b,c,g,g)}}function drawrect(a,b,c,d,e){ctx.fillStyle=e,ctx.fillRect(a,b,c,d),ctx.fillStyle="rgba(0,0,0,1.0)"}function drawtext(a,b,c){if(null!==DATA.sprites){afor(c,(d,e)=>{let f=d.charCodeAt(0)-65;ctx.drawImage(DATA.sprites,8*f,248,8,8,a+8*e,b,8,8)})}}function drawnum(a,b,c){if(null!==DATA.sprites){afor(c,(d,e)=>{let f=d.charCodeAt(0)-48;ctx.drawImage(DATA.sprites,8*f,240,8,8,a+8*e,b,8,8)})}}let playerdata={x:0,y:0,cx:0,cy:0,spawnx:0,spawny:0,flip:1,state:0,animstate:[[0],[0,1],[3,4,5,5],[2]],vert_velocity:0,horz_velocity:0,dash:0,cframe:0,nframe:0,score:0,stamina:100,hp:100,lives:2,dead:!1,hasTorch:!0},kp_jump=!1,kp_dash=!1,player=function(){function a(){drawtext(0,0,"HP"),drawtext(0,8,"ST"),drawrect(16,1,playerdata.hp,6,"rgb(190, 38, 51)"),drawrect(16,9,playerdata.stamina,6,"rgb(68, 137, 26)"),drawtext(136,0,"SCORE"),drawtext(136,8,"LIVES X"),drawnum(184,0,playerdata.score.toString()),drawnum(192,8,playerdata.lives.toString())}function b(){i.cx=playerdata.x+8,i.cy=playerdata.y+16,i.cxl=i.cx-4,i.cxr=i.cx+4,i.t=getTile(i.cx,i.cy),i.tl=getTile(i.cxl,i.cy),i.tr=getTile(i.cxr,i.cy),playerdata.cframe+=0.2,100>playerdata.stamina&&(playerdata.stamina+=1),i.t===TILE.AIR&&i.tl===TILE.AIR&&i.tr===TILE.AIR?playerdata.vert_velocity+=0.28:playerdata.vert_velocity=0;let a=0>playerdata.vert_velocity?-15:0;i.t=getTile(i.cx,i.cy+2+playerdata.vert_velocity+a),i.tl=getTile(i.cxl,i.cy+2+playerdata.vert_velocity+a),i.tr=getTile(i.cxr,i.cy+2+playerdata.vert_velocity+a),0!==playerdata.vert_velocity&&(i.t===TILE.AIR&&i.tl===TILE.AIR&&i.tr===TILE.AIR?playerdata.y+=f(playerdata.vert_velocity):0<playerdata.vert_velocity?playerdata.y=16*(Math.round((playerdata.y+playerdata.vert_velocity+16)/16)-1):0>playerdata.vert_velocity&&(playerdata.vert_velocity/=2)),3<playerdata.vert_velocity&&(playerdata.vert_velocity=3)}function c(){let a=0,b=1;0===playerdata.dash?a=KEYS[39]-KEYS[37]:(a=0<playerdata.dash?1:-1,b=3.5),0<playerdata.dash?playerdata.dash-=1:0>playerdata.dash?playerdata.dash+=1:playerdata.state===h.DASH&&(playerdata.state=h.NEUTRAL),0==a?playerdata.state=0:(playerdata.flip=a,playerdata.state!==h.DASH&&(playerdata.state=1)),0==a?playerdata.horz_velocity=0:playerdata.horz_velocity+=0.075*a*b,playerdata.horz_velocity<-2*b&&(playerdata.horz_velocity=-2*b),playerdata.horz_velocity>2*b&&(playerdata.horz_velocity=2*b);let c=0<playerdata.horz_velocity?8:-8;i.t=getTile(i.cx+playerdata.horz_velocity+c,i.cy-1),i.tr=getTile(i.cxr+playerdata.horz_velocity+4,i.cy-1),i.tl=getTile(i.cxl+playerdata.horz_velocity-4,i.cy-1),i.t===TILE.AIR?0<playerdata.horz_velocity?i.tr===TILE.AIR?playerdata.x+=playerdata.horz_velocity:playerdata.horz_velocity=0:0>playerdata.horz_velocity&&(i.tl===TILE.AIR?playerdata.x+=playerdata.horz_velocity:playerdata.horz_velocity=0):0<c?playerdata.x=16*f((playerdata.x+playerdata.horz_velocity+c)/16):playerdata.x=16*(f((playerdata.x+playerdata.horz_velocity)/16)+1)}function d(){if(pressed(32)){let a=KEYS[39]-KEYS[37];0===playerdata.dash&&100<=playerdata.stamina&&(playerdata.dash=15*a,0!==playerdata.dash&&(playerdata.stamina-=100)),0===playerdata.dash?playerdata.state!==h.ATTACK&&(playerdata.state=h.ATTACK,playerdata.cframe=0):playerdata.state=h.DASH}}function e(){let a=getTile(i.cx,i.cy);pressed(38)&&a!==TILE.AIR&&(playerdata.vert_velocity-=5,playerdata.y-=2,aud_seq([110,220],0.2))}var f=Math.floor;let g={},h={NEUTRAL:0,DASH:3,ATTACK:2};g.STATES=h,g.reset=function(a){a|=!1,playerdata.flip=1,playerdata.state=0,playerdata.vert_velocity=0,playerdata.horz_velocity=0,playerdata.dash=0,a&&(playerdata.score=0,playerdata.lives=2),playerdata.hp=100,playerdata.stamina=100,playerdata.dead=!1},g.draw=function(){a();let b=f(playerdata.cframe),c=playerdata.animstate[playerdata.state].length;playerdata.nframe=c;let d=playerdata.animstate[playerdata.state][b%c];drawsprite([d],f(playerdata.x),f(playerdata.y),0.2,playerdata.flip)};let i={cx:0,cy:0,cxl:0,cxr:0,t:0,tr:0,tl:0};return g.update=function(){0>=playerdata.hp&&!1===playerdata.dead?(playerdata.hp=0,playerdata.dead=!0,playerdata.lives-=1,efx_explosion(playerdata.x,playerdata.y,CAMERA.x,CAMERA.y),setTimeout(()=>{0<=playerdata.lives?(player.reset(!1),DATA.gamestate=GAMESTATES.READY,playerdata.x=playerdata.spawnx,playerdata.y=playerdata.spawny,CAMERA.x=playerdata.cx,CAMERA.y=playerdata.cy):(DATA.gamestate=GAMESTATES.GAMEOVER,setTimeout(()=>{DATA.gamestate=GAMESTATES.TITLE},2e3))},2e3)):(b(),playerdata.state!==h.ATTACK&&c(),e(),d(),playerdata.state===h.ATTACK&&4<playerdata.cframe&&(playerdata.state=h.NEUTRAL),playerdata.state===h.DASH&&efx_explosion(playerdata.x,playerdata.y,CAMERA.x,CAMERA.y))},g.hit=function(a,b,c){let d=b,e=!1,f=d?4:0,g=d?12:16;e=!(a.x>playerdata.x+g||a.x+16<playerdata.x+f||a.y>playerdata.y+g||a.y+16<playerdata.y+f),e&&c(a)},g}(),AUDIO={context:new AudioContext,osc:null,gain:null};function aud_init(){AUDIO.osc=AUDIO.context.createOscillator(),AUDIO.gain=AUDIO.context.createGain(),AUDIO.gain.gain.exponentialRampToValueAtTime(1e-5,AUDIO.context.currentTime+0.04),AUDIO.osc.type="square",AUDIO.osc.connect(AUDIO.gain),AUDIO.gain.connect(AUDIO.context.destination),AUDIO.gain.gain.value=0,AUDIO.osc.start(0)}function aud_beep(a,b){AUDIO.osc.frequency.value=a,AUDIO.gain.gain.value=0.5,AUDIO.gain.gain.exponentialRampToValueAtTime(1e-5,AUDIO.context.currentTime+b)}function aud_seq(a,b){for(let c=0;c<a.length;c++)setTimeout(()=>{aud_beep(a[c],b)},1e3*(c*b))}let GTICK=0,GAMESTATES={TITLE:0,GAME:1,GAMEOVER:2,READY:3},DATA={sprites:null,flipped_sprites:null,tiles:document.getElementById("img-tiles"),gamestate:GAMESTATES.TITLE};load_spritemap();let WORLD={SCREENS:[],ready:!1},CAMERA={x:3,y:0};function isOnScreen(a,b){return a===CAMERA.x&&b===CAMERA.y}function build_levels(){if(null===DATA.tiles)return void requestAnimationFrame(build_levels);console.log("Building world map");let a=document.createElement("canvas");a.width=128,a.height=256;let b=a.getContext("2d",{alpha:!1});b.drawImage(DATA.tiles,128,0,128,256,0,0,128,256);for(let a=0;a<SCREENS_H;a++)for(let c=0;c<SCREENS_W;c++){let d=16*c,e=13*a,f=[];for(let a=0;a<208;a++)f[a]=0;for(let g=0;13>g;g++)for(let h=0;16>h;h++){let i=b.getImageData(d+h,e+g,1,1).data,j=0<g?16*(g-1)+h:-1,k=palette_match([i[0],i[1],i[2]]),l=0<=j?f[j]:-1;0===k?f[16*g+h]=TILE.AIR:2===k?f[16*g+h]=l===TILE.AIR?TILE.FLOOR:TILE.WALL:7===k?(f[16*g+h]=TILE.FLOOR,obj_bridge(16*h,16*g,c,a)):11===k?(CAMERA.x=c,CAMERA.y=a,playerdata.cx=c,playerdata.cy=a,playerdata.x=16*h,playerdata.y=16*g,playerdata.spawnx=16*h,playerdata.spawny=16*g):3===k?EnemyManager.add(random_enemy()(16*h,16*g,c,a)):void 0}WORLD.SCREENS[a*SCREENS_W+c]=f}WORLD.ready=!0,console.log("World map built!")}build_levels(),aud_init();function getTile(a,b){var c=Math.floor;let d=CAMERA.x,e=CAMERA.y,f=c(a/16),g=c(b/16);if(0>f||15<f||0>g||12<g)return TILE.AIR;return WORLD.SCREENS[e*SCREENS_W+d][16*g+f]}let canvas=document.querySelector("#gcanvas"),ctx=canvas.getContext("2d",{alpha:!0});ctx.imageSmoothingEnabled=!1;function drawtile(a,b,c,d){var e=Math.floor;if(null!==DATA.tiles){let f=e(a/2),g=e(b/4);ctx.drawImage(DATA.tiles,64*(a%2)+16*(b%4),32*f+16*g,16,16,c,d,16,16)}}function irandom(a){return Math.floor(Math.random()*a)}function drawroom(){let a=CAMERA.x,b=CAMERA.y,c=2*b+(4<a?1:0);rfor(13,(d)=>{rfor(16,(e)=>{let f=WORLD.SCREENS[b*SCREENS_W+a][16*d+e];if(f!==TILE.AIR){f=f===TILE.FLOOR?(e+d)%4:(e+d)%4+4,drawtile(c,f,16*e,16*d)}})})}function switchstate_game(){EnemyManager.clear(),build_levels(),player.reset(!0),DATA.gamestate=GAMESTATES.READY}function update(){var a=Math.abs;if(ctx.fillStyle="rgb(0,0,0);",ctx.fillRect(0,0,256,212),WORLD.ready)switch(DATA.gamestate){case GAMESTATES.TITLE:drawtext(52,16,"LOST  IN  LABYRINTH"),drawtext(48,72,"PRESS SPACE TO BEGIN"),drawtext(92,120,"CONTROLS"),drawtext(56,136,"ARROW KEYS TO MOVE"),drawtext(68,144,"SPACE TO ATTACK"),drawtext(24,152,"SPACE WHILE MOVING TO DASH"),pressed(32)&&(aud_seq([370,155.6,69.3],1.5,2.25),switchstate_game());break;case GAMESTATES.GAMEOVER:drawtext(96,16,"YOU DIED"),drawtext(92,24,"GAME OVER");break;case GAMESTATES.READY:{drawtext(92,120,"GET READY"),drawsprite([0],108,128,1,!0),drawtext(124,136,"X"),drawnum(132,136,playerdata.lives.toString());let a=null;a=setTimeout(()=>{DATA.gamestate=GAMESTATES.GAME,clearTimeout(a)},1500)}break;case GAMESTATES.GAME:drawroom(),EnemyManager.update(),EnemyManager.draw(),player.update(),0<playerdata.hp&&player.draw(),0>playerdata.x+4&&(playerdata.x=PROOM_WIDTH-a(playerdata.x),CAMERA.x-=1),playerdata.x+4>PROOM_WIDTH&&(playerdata.x=PROOM_WIDTH-playerdata.x,CAMERA.x+=1),0>playerdata.y+4&&(playerdata.y=PROOM_HEIGHT-a(playerdata.y),CAMERA.y-=1),playerdata.y+4>PROOM_HEIGHT&&(playerdata.y=PROOM_HEIGHT-playerdata.y,CAMERA.y+=1),pressed(82)&&switchstate_game();}GTICK++,window.setTimeout(update,TICKS)}update();