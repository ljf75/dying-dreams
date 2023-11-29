!function t(e,i,h){function a(s,n){if(!i[s]){if(!e[s]){var o="function"==typeof require&&require;if(!n&&o)return o(s,!0);if(r)return r(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var l=i[s]={exports:{}};e[s][0].call(l.exports,(function(t){var i=e[s][1][t];return a(i||t)}),l,l.exports,t,e,i,h)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<h.length;s++)a(h[s]);return a}({1:[function(t,e,i){var h=t(7),a=t(8),r=t(4),s=t(6),n=t(3),o=t(2),d=t(5),l=0,c=new d;c.seed(Math.random());var g=document.querySelector("#game"),f=g.getContext("2d"),u=a(Math.random()),p=new n,x=new s,w=new o(g,320,.8),m=y(10,10);function y(t,e){l++,x.reset();const i=new r;i.mazeWidth=t,i.mazeHeight=e,i.playerRadius=i.blockSize*i.sizeFactor/2;var h=Array(i.mazeWidth/2).fill(0).map(()=>Array(i.mazeHeight/2).fill(0));return i.expandedGrid=Array(i.mazeWidth).fill(0).map(()=>Array(i.mazeHeight).fill(0)),i.divide(h,0,0,i.mazeWidth/2,i.mazeHeight/2,i.chooseOrientation(i.mazeWidth/2,i.mazeHeight/2,u),u),i.expandGrid(h),i}w.generateSky(f,c),h.start((function(t){f.clearRect(0,0,g.width,g.height),w.render(x,m),p.showMaze&&m.drawExpandedMaze(g,x,{x:x.x,y:x.y}),f.font="18px sans-serif",f.fillStyle="#BBBBBB",f.fillText("Stage "+l,10,20),f.fillText("Steps "+Math.round(x.totalSteps),10,45),p.states.left&&x.rotate(-Math.PI*t),p.states.right&&x.rotate(Math.PI*t),p.states.forward&&x.move(3*t,m),p.states.backward&&x.move(-3*t,m),x.exited&&(m=y(2*m.mazeWidth,2*m.mazeHeight))}))},{2:2,3:3,4:4,5:5,6:6,7:7,8:8}],2:[function(t,e,i){e.exports=class{constructor(t,e,i){this.canvas=t,this.ctx=t.getContext("2d"),this.width=t.width=.8*window.innerWidth,this.height=t.height=.8*window.innerHeight,this.resolution=e,this.spacing=t.width/e,this.focalLength=i||.8,this.range=14,this.lightRange=15,this.scale=(this.width+this.height)/1200,this.skyboxImage=null}render(t,e){this.drawSky(this.ctx,this.canvas.width,this.canvas.height),this.drawColumns(t,e)}drawColumns(t,e){this.ctx.save();for(var i=0;i<this.resolution;i++){var h=i/this.resolution-.5,a=Math.atan2(h,this.focalLength),r=e.cast(t,t.direction+a,this.range);this.drawColumn(i,r,a,e)}this.ctx.restore()}drawColumn(t,e,i,h){for(var a=this.ctx,r=h.wallTexture,s=h.exitTexture,n=Math.floor(t*this.spacing),o=Math.ceil(this.spacing),d=-1;++d<e.length&&e[d].height<=0;);for(var l=e.length-1;l>=0;l--){var c=e[l];if(l===d){var g=Math.floor(r.width*c.offset),f=this.project(c.height,i,c.distance);a.globalAlpha=1,"Wall"===f.type?a.drawImage(r.image,g,0,1,r.height,n,f.top,o,f.height):"Exit"===f.type&&a.drawImage(s.image,g,0,1,r.height,n,f.top,o,f.height),a.fillStyle="#000000",a.globalAlpha=Math.max((c.distance+c.shading)/this.lightRange-h.light,0),a.fillRect(n,f.top,o,f.height)}}}project(t,e,i){var h=i*Math.cos(e),a=2===t?1*this.height/h:this.height*t/h;return{top:this.height/2*(1+1/h)-a,height:a,type:2===t?"Exit":"Wall"}}generateSky(t,e){this.skyboxImage=t.createImageData(this.canvas.width,this.canvas.height);for(var i=this.skyboxImage.data,h=0;h<this.canvas.width;h++)for(var a=0;a<this.canvas.height;a++){var r=Math.abs(e.perlin2(h/100,a/50));r*=25;var s=4*(h+a*this.canvas.width);i[s]=i[s+1]=i[s+2]=r,i[s]+=Math.max(0,2*(25-r)),i[s+3]=255}}drawSky(t,e,i){t.fillStyle="#000000",t.fillRect(0,0,100,50),t.putImageData(this.skyboxImage,0,0),t.fillStyle="#21130A",t.fillRect(0,.5*i,e,.5*i)}}},{}],3:[function(t,e,i){e.exports=class{constructor(){this.codes={37:"left",39:"right",38:"forward",40:"backward"},this.states={left:!1,right:!1,forward:!1,backward:!1},this.showMaze=!1,document.addEventListener("keydown",this.onKey.bind(this,!0),!1),document.addEventListener("keyup",this.onKey.bind(this,!1),!1),document.addEventListener("touchstart",this.onTouch.bind(this),!1),document.addEventListener("touchmove",this.onTouch.bind(this),!1),document.addEventListener("touchend",this.onTouchEnd.bind(this),!1)}onKey(t,e){77===e.keyCode&&t&&(this.showMaze=!this.showMaze);var i=this.codes[e.keyCode];void 0!==i&&(this.states[i]=t,e.preventDefault&&e.preventDefault(),e.stopPropogation&&e.stopPropogation())}onTouch(t){var e=t.touches[0];this.onTouchEnd(t),console.log(e.pageX,e.pageY),e.pageY<.35*window.innerHeight?this.onKey(!0,{keyCode:38}):e.pageY>.7*window.innerHeight?this.onKey(!0,{keyCode:77}):e.pageX<.5*window.innerWidth?this.onKey(!0,{keyCode:37}):e.pageY>.5*window.innerWidth&&this.onKey(!0,{keyCode:39})}onTouchEnd(t){this.states={left:!1,right:!1,forward:!1,backward:!1},t.preventDefault(),t.stopPropagation()}}},{}],4:[function(t,e,i){e.exports=class{constructor(){this.blockSize=1,this.sizeFactor=8,this.playerRadius=15,this.expandedGrid=[],this.wallTexture={image:new Image,width:1,height:128},this.wallTexture.image.src="assets/wallSlice.png",this.exitTexture={image:new Image,width:1,height:128},this.exitTexture.image.src="assets/exitSlice.png",this.light=2}expandGrid(t){this.mazeHeight=2*t.length,this.mazeWidth=2*t[0].length;for(var e=0;e<t.length;e++)for(var i=0;i<t[e].length;i++){const h=t[e][i];0===h&&(this.expandedGrid[2*e][2*i]=0,this.expandedGrid[2*e+1][2*i]=0,this.expandedGrid[2*e][2*i+1]=0,this.expandedGrid[2*e+1][2*i+1]=0),1===h&&(this.expandedGrid[2*e][2*i]=0,this.expandedGrid[2*e+1][2*i]=1,this.expandedGrid[2*e][2*i+1]=0,this.expandedGrid[2*e+1][2*i+1]=1),2===h&&(this.expandedGrid[2*e][2*i]=0,this.expandedGrid[2*e+1][2*i]=0,this.expandedGrid[2*e][2*i+1]=1,this.expandedGrid[2*e+1][2*i+1]=1),3===h&&(this.expandedGrid[2*e][2*i]=0,this.expandedGrid[2*e+1][2*i]=1,this.expandedGrid[2*e][2*i+1]=1,this.expandedGrid[2*e+1][2*i+1]=1)}this.expandedGrid[this.mazeHeight-1][this.mazeWidth-1]=2}drawExpandedMaze(t,e,i){const h=t.getContext("2d"),a=this.blockSize*this.sizeFactor,r=t.width/2,s=t.height/2;h.strokeRect(r-i.x*a,s-i.y*a,this.mazeWidth*this.sizeFactor,this.mazeHeight*this.sizeFactor);for(var n=0;n<this.mazeHeight;n++)for(var o=0;o<this.mazeWidth;o++)this.expandedGrid[n][o]&&(1===this.expandedGrid[n][o]?(h.fillStyle="#999999",h.fillRect((o-i.x)*a+r,(n-i.y)*a+s,a,a)):2===this.expandedGrid[n][o]&&(h.fillStyle="#00FF00",h.fillRect((o-i.x)*a+r,(n-i.y)*a+s,a,a)));let d=this.sizeFactor;h.globalAlpha=.5,h.beginPath(),h.arc(r-this.playerRadius/2,s-this.playerRadius/2,this.playerRadius*d,e.direction-Math.PI/3,e.direction+Math.PI/3,!1),h.fillStyle="#009900",h.fill(),h.globalAlpha=1,h.beginPath(),h.arc(r-this.playerRadius/2,s-this.playerRadius/2,this.playerRadius,0,2*Math.PI,!0),h.closePath(),h.fillStyle="#990000",h.fill()}check(t,e){return t=Math.floor(t),e=Math.floor(e),t<0||t>this.mazeWidth-1||e<0||e>this.mazeHeight-1?1:this.expandedGrid[e][t]}divide(t,e,i,h,a,r,s){if(!(h<2||a<2)){var n=e+(r?0:Math.floor(s.float()*(h-2))),o=i+(r?Math.floor(s.float()*(a-2)):0),d=n+(r?Math.floor(s.float()*h):0),l=o+(r?0:Math.floor(s.float()*a)),c=r?1:0,g=r?0:1,f=r?h:a,u=r?1:2;for(let e=0;e<f;e++)o===l&&n===d||(t[o][n]|=u),n+=c,o+=g;var p=e,x=i,w=r?h:n-e+1,m=r?o-i+1:a;this.divide(t,p,x,w,m,this.chooseOrientation(w,m,s),s),p=r?e:n+1,x=r?o+1:i,w=r?h:e+h-n-1,m=r?i+a-o-1:a,this.divide(t,p,x,w,m,this.chooseOrientation(w,m,s),s)}}chooseOrientation(t,e,i){return t===e?Math.floor(2*i.float()):t<e?1:0}cast(t,e,i){var h=this,a=Math.sin(e),r=Math.cos(e),s={length2:1/0};return function t(e){var h=n(a,r,e.x,e.y),s=n(r,a,e.y,e.x,!0),d=h.length2<s.length2?o(h,1,0,e.distance,h.y):o(s,0,1,e.distance,s.x);return d.distance>i?[e]:[e].concat(t(d))}({x:t.x,y:t.y,height:0,distance:0});function n(t,e,i,h,a){if(0===e)return s;var r=e>0?Math.floor(i+1)-i:Math.ceil(i-1)-i,n=r*(t/e);return{x:a?h+n:i+r,y:a?i+r:h+n,length2:r*r+n*n}}function o(t,e,i,s,n){var o,d,l=r<0?e:0,c=a<0?i:0;return t.height=(o=t.x-l,d=t.y-c,o=Math.floor(o),d=Math.floor(d),o<0||o>h.mazeWidth-1||d<0||d>h.mazeHeight-1?1:h.expandedGrid[d][o]),t.distance=s+Math.sqrt(t.length2),t.shading=e?r<0?2:0:a<0?2:1,t.offset=n-Math.floor(n),t}}}},{}],5:[function(t,e,i){class h{constructor(t,e,i){this.x=t,this.y=e,this.z=i}dot2(t,e){return this.x*t+this.y*e}dot3(t,e,i){return this.x*t+this.y*e+this.z*i}}e.exports=class{constructor(){this.grad3=[new h(1,1,0),new h(-1,1,0),new h(1,-1,0),new h(-1,-1,0),new h(1,0,1),new h(-1,0,1),new h(1,0,-1),new h(-1,0,-1),new h(0,1,1),new h(0,-1,1),new h(0,1,-1),new h(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.F2=.5*(Math.sqrt(3)-1),this.G2=(3-Math.sqrt(3))/6,this.F3=1/3,this.G3=1/6}seed(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=0;e<256;e++){var i;i=1&e?this.p[e]^255&t:this.p[e]^t>>8&255,this.perm[e]=this.perm[e+256]=i,this.gradP[e]=this.gradP[e+256]=this.grad3[i%12]}}fade(t){return t*t*t*(t*(6*t-15)+10)}lerp(t,e,i){return(1-i)*t+i*e}perlin2(t,e){var i=Math.floor(t),h=Math.floor(e);t-=i,e-=h,i&=255,h&=255;var a=this.gradP[i+this.perm[h]].dot2(t,e),r=this.gradP[i+this.perm[h+1]].dot2(t,e-1),s=this.gradP[i+1+this.perm[h]].dot2(t-1,e),n=this.gradP[i+1+this.perm[h+1]].dot2(t-1,e-1),o=this.fade(t);return this.lerp(this.lerp(a,s,o),this.lerp(r,n,o),this.fade(e))}}},{}],6:[function(t,e,i){e.exports=class{constructor(){this.x=0,this.y=0,this.direction=0,this.totalSteps=0,this.exited=!1}move(t,e,i){var h=Math.cos(this.direction)*t,a=Math.sin(this.direction)*t;const r=e.check(this.x+h,this.y,i),s=e.check(this.x,this.y+a,i);0===r&&(this.x+=h),0===s&&(this.y+=a),2!==r&&2!==s||(this.exited=!0),this.totalSteps+=Math.abs(t)}reset(){this.x=0,this.y=0,this.direction=0,this.exited=!1}rotate(t){this.direction=(this.direction+t+2*Math.PI)%(2*Math.PI)}}},{}],7:[function(t,e,i){var h=0;function a(t){return window.requestAnimationFrame((function(){var e=Date.now(),i=e-h;i>999?i=1/60:i/=1e3,h=e,t(i)}))}e.exports={start:function(t){return a((function e(i){t(i),a(e)}))},stop:function(t){window.cancelAnimationFrame(t)}}},{}],8:[function(t,e,i){e.exports=function(t){function e(){var e=1e4*Math.sin(.8765111159592828+t++);return e-Math.floor(e)}var i={int:function(t){return e()*(t||268435455)|0},float:function(){return e()},bool:function(){return e()>.5},range:function(t,e){return i.int(e-t)+t},pick:function(t){return t[i.range(0,t.length)]}};return i}},{}]},{},[1]);