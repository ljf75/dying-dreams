!function t(e,n,i){function o(r,a){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[r]={exports:{}};e[r][0].call(d.exports,function(t){var n=e[r][1][t];return o(n?n:t)},d,d.exports,t,e,n,i)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(t){var e=t(5),n=t(7),i=t(15),o=t(8),s=t(2),r=t(14),a=t(3);window.levelIndex=0,window.gamesLength=0;var c={begin:function(){n(document.body);var t=document.querySelector(".start .btn"),e=document.body.classList;document.getElementById("life").innerHTML="",e.add("start-screen");var i=function(){t.removeEventListener("click",i,!1),e.contains("start-screen")&&e.remove("start-screen"),c.startGame()};t.addEventListener("click",i,!1)},startGame:function(){this.levels=[e,i,o,s],window.gamesLength=this.levels.length,this.scoreElement=document.querySelector("#score span"),window.levelIndex=0,this.scoreElement.innerHTML=this.score=0,this.lifeLeft=2,this.createLife(),this.nextLevel()},createLife:function(){var t,e,n=document.querySelector("#life");for(e=2;e>=0;e--)t=document.createElement("div"),t.id="life-"+e,t.className="dead",t.innerHTML=a.getSvg(),n.appendChild(t)},nextLevel:function(){this.levels[window.levelIndex%window.gamesLength](function(t){console.log("level : "+window.levelIndex%window.gamesLength+" finished -> levelState : "+(t?"win":"lose")),window.levelIndex++,t?this.scoreElement.innerHTML=++this.score:document.querySelector("#life-"+this.lifeLeft--).classList.remove("dead"),this.lifeLeft<0?(alert("GAME OVER"),window.levelIndex=0,this.begin()):this.animNextLevel()}.bind(this))},animNextLevel:function(t){var t=t||null,e=document.querySelector(".next"),n=e.querySelector(".btn");t&&(e.backgroundColor=t),e.classList.add("on");var i=function(){n.removeEventListener(r.endEvent(),i,!1),e.classList.remove("on"),c.nextLevel()};n.addEventListener(r.endEvent(),i,!1)},end:function(){}};document.addEventListener("DOMContentLoaded",function(){c.begin()},!1)},{}],2:[function(t,e){var n=t(14),i=t(13),o=t(3),s=t(9),r=t(10),a=t(6),c={start:function(t){this.callBackEnd=t,r.lockPortrait(),this.setListener(),s.setHint("Swipe on the hero to get crushed by the fan !")},setListener:function(){var t,e,s,c=window.screen.availWidth,l=document.getElementById("air"),d=document.getElementById("fanPlace"),h=o.getAvatar(),u=a.getFan(),v=.5,m=this.callBackEnd,f=!1,p=null,g=!1;l.style.left=1*c/3+"px",u.start(),l.insertBefore(h,l.firstChild),d.insertBefore(u,d.firstChild),d.style.display="block";var E=function(){l.style.left=parseInt(l.style.left)-v+"px",g||requestAnimationFrame(E)},w=function(t){t.preventDefault(),p=t},y=function(e){t=e.touches?e.touches[0].pageX:e.pageX,l.addEventListener(n.moveEvent(),w,!1)},C=function(){document.body.removeEventListener(n.startEvent(),y,!1),document.body.removeEventListener(n.moveEvent(),w,!1),document.body.removeEventListener(n.endEvent(),k,!1),i.stop(),u.stop(),r.unlock(),v=0,cancelAnimationFrame(s),g=!0,s=null,m(f),d.style.display="none",l.removeChild(h),d.removeChild(u)},k=function(){e=p.touches?p.touches[0].pageX:p.pageX;var i=e-t,o=(parseInt(l.style.left),window.levelIndex+1);p.touches?parseInt(i)<=50&&parseInt(i)>0&&(l.style.left=parseInt(l.style.left)+3*i/o+"px",parseInt(l.style.left)>c-50&&(f=!0,C())):i===parseInt(i)&&(l.style.left=parseInt(l.style.left)+2*i/o+"px",parseInt(l.style.left)>c-document.getElementById("air").offsetWidth&&(f=!0,C())),l.removeEventListener(n.moveEvent(),w,!1)};l.addEventListener(n.startEvent(),y,!1),l.addEventListener(n.endEvent(),k,!1),s=requestAnimationFrame(E),i.start(10,function(){f=!1,C()})}};e.exports=function(t){c.start(t)}},{}],3:[function(t,e){var n=function(){var t=document.createElement("div"),e='<svg class="left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="161px" height="233px" viewBox="0 0 161 233" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g sketch:type="MSLayerGroup" transform="translate(3.000000, -2.000000)"><g sketch:type="MSShapeGroup"><path d="M124.7 106.7 C124.1 53.7 129.6 -2.3 81 1.9 C44.4 5.1 44.5 39 33.8 95.4 C29 120.4 22 155.9 31 172.9 C39.5 189 55.9 192.9 81 188.9 C103.4 182.5 125.4 154.2 124.7 106.7 Z" fill="#EC7EA5"/><path d="M123.5 77.5 C123.5 77.5 137.1 90.7 148.6 80.6 C154.392578 76.3 154.6 70.1 154.6 70.1" stroke="#EC7EA5" stroke-width="5" stroke-linecap="square"/><path d="M0.106445313 62.8 C0.106445313 62.8 1.9 71 11.4 74.5 C20.8388672 78 38.1 76.5 38.1 76.5" stroke="#EC7EA5" stroke-width="5" stroke-linecap="square"/><path class="pied1" d="M46.1279297 186.2 C46.1279297 186.2 55.4 203.9 55.9 231.5 C60.7495117 232.6 71.8 232.4 71.8 232.4" stroke="#EC7EA5" stroke-width="5" stroke-linecap="square"/><path class="pied2" d="M75.5 186.4 C75.5 186.4 80.4 193.3 83.8 206.1 C85.5 212.5 86.8 220.4 87 229.6 C91.8 230.7 102.9 230.5 102.9 230.5 " stroke="#EC7EA5" stroke-width="5" stroke-linecap="square"/></g><g stroke="#470F20" sketch:type="MSShapeGroup" stroke-linecap="square"><path class="mouth" d="M72.4 70.9 C72.4 70.9 84.6 78.6 100.4 76.3 C110 74.6 117.5 68.5 117.5 68.5 " stroke-width="2"/><path d="M74.5 49.5 C74.5 49.5 81.5 52.9 86.5 52.3 C91 52.1 93.5 49.5 93.5 49.5 "/><path d="M101.4 49.5 C101.4 49.5 106.2 52.9 110.6 52.3 C114 52.1 116 49.5 116 49.5 "/></g></g></g></svg>';if(t.id="avatar",t.innerHTML=e,this.getAvatar=function(){return t},this.getSvg=function(){return e},n.caller!==n.getInstance)throw new Error("This object cannot be instanciated")};n.instance=null,n.getInstance=function(){return null===this.instance&&(this.instance=new n),this.instance},e.exports=n.getInstance()},{}],4:[function(t,e){var n=function i(){return this instanceof i?(this.htmlCloud=document.createElement("div"),void(this.htmlCloud.className="cloud")):new i};n.prototype.getCloud=function(t,e){return e=e||100,this.htmlCloud.style.webkitTransform="translate("+Math.round(Math.random()*(document.body.offsetWidth-100))+"px, "+Math.round(Math.random()*e*2)+"px) scale("+t+")",this.htmlCloud},e.exports=n},{}],5:[function(t,e){var n=t(12),i=t(11),o=t(3),s=t(13),r=t(4),a=t(10),c=t(9);e.exports=function(t){var e=function(t,e,i){var o=n().randHex();return this.div=document.createElement("div"),this.div.innerHTML='<div class="e-ball" style="background:'+o+"; border-bottom-color:"+o+"; border-top-color:"+o+'"></div>',this.div.style.webkitTransform="scale(."+(Math.round(2*Math.random(),1)+5)+")",this.div.style.top=e+"px",this.div.style.left=t+"px",this.div.style.zIndex="999",this.div.className="e-ball-wrap",this.used=!1,this.div.addEventListener("click",function(){this.used||(this.div.classList.add("used"),i(this.div)),this.used=!0}.bind(this)),this.div},l={size:100,numb:3,balls:[],aniDie:function(){o.getAvatar().removeEventListener("webkitAnimationEnd",this.aniDieFn),o.getAvatar().classList.add("die"),o.getAvatar().classList.add("run"),this.win(!0)},destroyBall:function(t){var e=0,n=t.querySelector(".e-ball");n.classList.add("e-boom"),n.classList.add("scale");var s=i.start(function(){30===e?(t.remove(this),1===this.life&&(o.getAvatar().classList.add("die"),o.getAvatar().classList.add("run"),this.earthCloud.classList.add("up"),this.aniDieFn=this.aniDie.bind(this),o.getAvatar().addEventListener("webkitAnimationEnd",this.aniDieFn)),this.life--,i.stop(s)):15===e?(n.classList.remove("e-end"),n.style.background="none",n.classList.add("e-end")):10===e&&n.classList.add("e-boom"),e++}.bind(this))},orientation:function(){window.removeEventListener("orientationChange",this.orientationFn),window.removeEventListener("resize",this.orientationFn),c.setHint("Pop the balloon as fast as you can"),this.earth=document.getElementById("earth"),this.earthCloud=this.earth.querySelector(".earth-cloud"),this.bWrap=this.earth.querySelector(".balloon"),this.setAvatar(),this.initGame(parseInt(window.levelIndex+10)),this.earth.classList.remove("hidden"),s.start(10,function(){this.win(!1)}.bind(this))},init:function(){a.locklandscape(),this.orientationFn=this.orientation.bind(this),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.innerWidth>window.innerHeight?(window.addEventListener("orientationChange",this.orientationFn),window.addEventListener("resize",this.orientationFn)):this.orientation()},win:function(e){a.unlock(),s.stop(),this.earth.classList.add("hidden"),this.remove.call(this),t(e)},remove:function(){this.balls.forEach(function(t){t=null})},initGame:function(t){this.life=t;var n;for(n=0;10>=n;n++){var i=new r;this.earthCloud.appendChild(i.getCloud(Math.random()*(n/10)+n/10,1500))}for(n=0;t>n;n++){var o=document.body.offsetWidth/2+Math.round(100*Math.random())-50-60,s=Math.round(20*Math.random())-40,a=new e(o,s,this.destroyBall.bind(this));this.balls.push(a),this.bWrap.appendChild(a)}},setAvatar:function(){var t=o.getAvatar();this.earth.appendChild(t)}};return l.init(),l}},{}],6:[function(t,e){var n=function(){var t=document.createElement("div");if(t.id="fan",t.innerHTML='<svg id="fan" width="47px" height="168px" viewBox="0 0 47 168" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="fan" sketch:type="MSLayerGroup" transform="translate(0.000000, 1.000000)"><path d="M22 150.5 L22 163.5" id="Line" stroke="#979797" stroke-width="2" stroke-linecap="square" sketch:type="MSShapeGroup"/><path d="M21.8738281 166 C23.3476562 165.8 34 166.8 34 164 C34 161.2 28.6 159 22 159 C15.372583 159 10 161.2 10 164 C10 166.8 20.1 165.8 21.9 166 Z" id="Oval-1" fill="#979797" sketch:type="MSShapeGroup"/><path d="M21.5029297 -0.3 C13.3833008 -0.3 12 4 12 4 L12 146 C12 146 13.7 150.3 21.5 150.3 C29.2563477 150.3 31 146 31 146 L31 4 C31 4 29.6 -0.3 21.5 -0.3 Z" id="Rectangle-1" fill="#1E5DA7" sketch:type="MSShapeGroup"/><path d="M31 130 L41.6704427 130 C41.6704427 130 46.6 91 46.6 71 C46.6104349 54 41.7 19 41.7 19 L31 19 L31 130 Z" id="Rectangle-2" fill="#979797" sketch:type="MSShapeGroup"/><rect id="fan-t" fill="#4990E2" sketch:type="MSShapeGroup" x="0" y="10" width="11" height="64"/><rect id="fan-b" fill="#143F71" sketch:type="MSShapeGroup" x="0" y="74" width="11" height="64"/></g></g></svg>',this.getFan=function(){return t},t.start=function(){t.classList.add("anim")},t.stop=function(){t.classList.remove("anim")},n.caller!==n.getInstance)throw new Error("This object cannot be instanciated")};n.instance=null,n.getInstance=function(){return null===this.instance&&(this.instance=new n),this.instance},e.exports=n.getInstance()},{}],7:[function(t,e){!function(){"use strict";function t(e,i){function o(t,e){return function(){return t.apply(e,arguments)}}var s;if(i=i||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=i.touchBoundary||10,this.layer=e,this.tapDelay=i.tapDelay||200,!t.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,c=0,l=r.length;l>c;c++)a[r[c]]=o(a[r[c]],a);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(s=e.onclick,e.addEventListener("click",function(t){s(t)},!1),e.onclick=null)}}var n=navigator.userAgent.indexOf("Android")>0,i=/iP(ad|hone|od)/.test(navigator.userAgent),o=i&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=i&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),r=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(i&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;i&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,s;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],i){if(s=window.getSelection(),s.rangeCount&&!s.isCollapsed)return!0;if(!o){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,r,a,c,l,d=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,r=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(l=t.changedTouches[0],d=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||d,d.fastClickScrollParent=this.targetElement.fastClickScrollParent),a=d.tagName.toLowerCase(),"label"===a){if(e=this.findControl(d)){if(this.focus(d),n)return!1;d=e}}else if(this.needsFocus(d))return t.timeStamp-r>100||i&&window.top!==window&&"input"===a?(this.targetElement=null,!1):(this.focus(d),this.sendClick(d,t),i&&"select"===a||(this.targetElement=null,t.preventDefault()),!1);return i&&!o&&(c=d.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(d)||(t.preventDefault(),this.sendClick(d,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,i,o;if("undefined"==typeof window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(r&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),o[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction?!0:!1},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof e&&e.exports?(e.exports=t.attach,e.exports.FastClick=t):window.FastClick=t}()},{}],8:[function(t,e){var n=t(14),i=t(11),o=t(3),s=t(13),r=t(9),a=t(10),c=t(4);e.exports=function(t){var e=function(t,e){e="undefined"!=typeof e?e.div:document.body,this.div=document.createElement("div"),e.appendChild(this.div),this.div.className=t,this.div.id=t};e.prototype.changePositionLeft=function(t){this.div.style.left=this.getLeft()+t+"px"},e.prototype.getLeft=function(){return this.div.getBoundingClientRect().left},e.prototype.getWidth=function(){return this.div.getBoundingClientRect().width};var l={sceneElem:null,fireElem:null,avatarElem:null,callBackEnd:null,decalPxl:35,canWin:!1,scaleCloud:[1,.7],checkOrientation:function(){a.lockPortrait(),this.initFn=this.init.bind(this),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.innerWidth<window.innerHeight?(window.addEventListener("orientationChange",this.initFn),window.addEventListener("resize",this.initFn)):this.init()},init:function(){window.removeEventListener("orientationChange",this.initFn),window.removeEventListener("resize",this.initFn),this.sceneElem=new e("sceneFire"),this.fireElem=new e("fire",this.sceneElem),this.avatarElem=new e("avatar",this.sceneElem),this.callBackEnd=t,this.initAvatar(),this.initFire(),this.setFireMoving(-.5),"ontouchend"in document&&(this.decalPxl=10,this.scaleCloud=[.7,.4],this.setDeviceSpec(80,117)),this.initClouds(6),this.setListener(-8),r.setHint("Tap to catch fire")},initAvatar:function(){this.avatarElem.div.innerHTML=o.getSvg(),this.avatarElem.div.style.right="10px",this.avatarElem.div.style.left="auto"},initFire:function(){var t='<svg class="fireSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="205px" height="246px" viewBox="0 0 205 246" version="1.1"><path d="M198.90613,157.677914 C206.662141,124.161969 182.003806,82.8312871 182.003806,82.8312871 C182.003806,82.8312871 169.140336,123.257432 146.376266,132.154102 C161.591453,108.108824 151.544222,79.0762405 133.494077,64.5397377 C76.3069369,14.7208591 70.5106752,-31.9507589 76.3069368,29.8158746 C60.3672194,99.6098993 13.9773158,121.460983 0.899273955,157.677914 C-1.12902977,205.982305 52.0929773,244.5 99.9027019,244.5 C147.712427,244.5 185.467068,215.751947 198.90613,157.677914 Z" class="flame" id="a" /><path d="M198.90613,157.677914 C206.662141,124.161969 182.003806,82.8312871 182.003806,82.8312871 C182.003806,82.8312871 169.140336,123.257432 146.376266,132.154102 C161.591453,108.108824 151.544222,79.0762405 133.494077,64.5397377 C76.3069369,14.7208591 70.5106752,-31.9507589 76.3069368,29.8158746 C60.3672194,99.6098993 13.9773158,121.460983 0.899273955,157.677914 C-1.12902977,205.982305 52.0929773,244.5 99.9027019,244.5 C147.712427,244.5 185.467068,215.751947 198.90613,157.677914 Z" class="flame" id="b" /><path d="M198.90613,157.677914 C206.662141,124.161969 182.003806,82.8312871 182.003806,82.8312871 C182.003806,82.8312871 169.140336,123.257432 146.376266,132.154102 C161.591453,108.108824 151.544222,79.0762405 133.494077,64.5397377 C76.3069369,14.7208591 70.5106752,-31.9507589 76.3069368,29.8158746 C60.3672194,99.6098993 13.9773158,121.460983 0.899273955,157.677914 C-1.12902977,205.982305 52.0929773,244.5 99.9027019,244.5 C147.712427,244.5 185.467068,215.751947 198.90613,157.677914 Z" class="flame" id="c" /><path d="M198.90613,157.677914 C206.662141,124.161969 182.003806,82.8312871 182.003806,82.8312871 C182.003806,82.8312871 169.140336,123.257432 146.376266,132.154102 C161.591453,108.108824 151.544222,79.0762405 133.494077,64.5397377 C76.3069369,14.7208591 70.5106752,-31.9507589 76.3069368,29.8158746 C60.3672194,99.6098993 13.9773158,121.460983 0.899273955,157.677914 C-1.12902977,205.982305 52.0929773,244.5 99.9027019,244.5 C147.712427,244.5 185.467068,215.751947 198.90613,157.677914 Z" class="flame" id="d" /></svg>';this.fireElem.div.innerHTML=t},initClouds:function(t){for(var e=0;t>e;e++){var n=new c;this.sceneElem.div.appendChild(n.getCloud(Math.random()*this.scaleCloud[0]+this.scaleCloud[1],0))}},setListener:function(t){this.touchEndEvent=function(){this.avatarElem.div.className=""}.bind(this),this.touchStartEvent=function(){this.avatarElem.changePositionLeft(t),this.avatarElem.div.style.right="auto",this.avatarElem.div.className="run",this.canWin&&(this.avatarElem.div.style.webkitTransition="left 300ms",this.checkCollision()),this.canWin=!0}.bind(this),document.body.addEventListener(n.startEvent(),this.touchStartEvent,!1),document.body.addEventListener(n.endEvent(),this.touchEndEvent,!1)},setFireMoving:function(t){var e=0;i.start(function(){e%1===0&&(this.fireElem.changePositionLeft(t),this.fireElem.div.style.right="auto"),e++}.bind(this))},checkCollision:function(){this.avatarElem.getLeft()-(this.fireElem.getLeft()+this.fireElem.getWidth()-this.decalPxl)<=0&&this.destroyGame(!0)},setDeviceSpec:function(t,e){var n=document.querySelector(".sceneFire .fireSvg"),i=document.querySelector(".sceneFire .left");n.style.width=t,n.style.height=e,i.style.width=t,i.style.height=e},destroyGame:function(t){r.setHint(""),document.body.removeEventListener(n.startEvent(),this.touchStartEvent,!1),document.body.removeEventListener(n.endEvent(),this.touchEndEvent,!1),this.sceneElem.div.parentNode.removeChild(this.sceneElem.div),this.callBackEnd(t),s.stop()}};return s.start([12,9,6,5,4,3,2,1][parseInt(window.levelIndex/window.gamesLength)],function(){l.destroyGame(!1)}),l.checkOrientation(),l}},{}],9:[function(t,e){e.exports={setHint:function(t){document.getElementById("hint").innerHTML=t}}},{}],10:[function(t,e){e.exports={desktop:function(){return!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},lockPortrait:function(){if(console.log(this.desktop()),!this.desktop()){var t=document.body;t.classList.contains("lock-p")||t.classList.add("lock-p")}},locklandscape:function(){if(console.log(this.desktop()),!this.desktop()){var t=document.body;t.classList.contains("lock-l")||t.classList.add("lock-l")}},unlock:function(){if(!this.desktop()){var t=document.body;t.classList.contains("lock-l")&&t.classList.remove("lock-l"),t.classList.contains("lock-p")&&t.classList.remove("lock-p")}}}},{}],11:[function(t,e){function n(t){return window.requestAnimationFrame(function(){var e=Date.now(),n=e-i;n>999?n=1/60:n/=1e3,i=e,t(n)})}var i=0;e.exports={start:function(t){return n(function e(i){t(i),n(e)})},stop:function(t){window.cancelAnimationFrame(t)}}},{}],12:[function(t,e){function n(t){t||(t=Date.now());var e=t%30268+1;t=(t-t%30268)/30268;var n=t%30306+1;t=(t-t%30306)/30306;var i=t%30322+1;return t=(t-t%30322)/30322,function(){return e=171*e%30269,n=172*n%30307,i=170*i%30323,(e/30269+n/30307+i/30323)%1}}e.exports=function(t){var e=n(t),i={"int":function(t){return e()*(t||268435455)|0},"float":function(){return e()},bool:function(){return e()>.5},range:function(t,e){return i.int(e-t)+t},pick:function(t){return t[i.range(0,t.length)]},randHex:function(){return function(t,e,n){return(n?arguments.callee(t,e,n-1):"#")+e[t.floor(t.random()*e.length)]}(Math,"0123456789ABCDEF",5)}};return i}},{}],13:[function(t,e){e.exports={timer:null,timerElement:null,create:function(){this.timerElement=document.createElement("div"),this.timerElement.id="counter-time",document.body.appendChild(this.timerElement)},start:function(t,e){this.timerElement||this.create(),this.timer&&this.stop();var n=this.timerElement;this.timerElement.innerHTML=0,this.timer=setInterval(function(){n.innerHTML=t,t--<0&&e()},1e3)},stop:function(){this.timerElement.innerHTML="",clearInterval(this.timer),this.timer=null}}},{}],14:[function(t,e){e.exports={touch:"ontouchend"in document,startEvent:function(){return this.touch?"touchstart":"mousedown"},moveEvent:function(){return this.touch?"touchmove":"mousemove"},endEvent:function(){return this.touch?"touchend":"mouseup"}}},{}],15:[function(t,e){var n=t(14),i=t(13),o=t(3),s=t(9),r=[15,10,7],a={start:function(t){this.callBackEnd=t,this.ocean=document.getElementById("ocean"),document.body.classList.add("water"),this.setListener(),this.createWave(),s.setHint("Swipe and release to tease piranhas !")},stop:function(){this.removeListener()},destroyWave:function(){for(;this.ocean.hasChildNodes();)this.ocean.removeChild(this.ocean.lastChild)},createWave:function(){var t=10,e=Math.floor(window.innerWidth/t),n=document.createDocumentFragment();a.destroyWave();for(var i=0;e>i;i++){var o=document.createElement("div");o.className+=" wave",n.appendChild(o),o.style.left=i*t+"px",o.style.webkitAnimationDelay=i/100+"s",o.style.animationDelay=i/100+"s"}this.ocean.appendChild(n)},addFish:function(t){t.innerHTML='<svg width="56px" height="37px" viewBox="0 0 56 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g sketch:type="MSLayerGroup" transform="translate(-3.000000, -6.000000)"><path d="M58.8828123,23.479248 C57.3488511,22.5564312 46.7842473,28.9466052 46.5249023,28.4672852 C44.6475157,24.9975092 39.2845478,16.7891955 31.0158617,9.83110781 C23.1499023,3.21191406 7.184655,6.50878227 3.756348,14.9941399 C3.49320506,15.6454415 16.7949214,16.5286118 23.578125,22.0722656 C26.0390625,24.0834961 5.05343177,19.3847346 5.35819767,20.8674701 C6.57518416,26.7883069 13.8939811,30.5446441 22.7749023,31.9672852 C32.5671719,33.5359157 41.9631187,32.0045908 45.8999023,30.2260742 C46.3046003,30.0432443 51.844737,42.0668246 53.3203135,42.4167477 C55.122234,42.8440612 52.2024006,31.1555224 52.2749023,30.9760742 C52.322745,30.8576595 60.2590818,24.3071989 58.8828123,23.479248 Z" fill="#EB6B33" sketch:type="MSShapeGroup"></path><path d="M19.0004064,16.9110771 C20.3811183,16.9110771 21.5004064,15.791789 21.5004064,14.4110771 C21.5004064,13.0303653 20.3811183,11.9110771 19.0004064,11.9110771 C17.6196945,11.9110771 16.5004064,13.0303653 16.5004064,14.4110771 C16.5004064,15.791789 17.6196945,16.9110771 19.0004064,16.9110771 Z" fill="#000000" sketch:type="MSShapeGroup"></path></g></svg>'},setListener:function(){var t,e,a=window.innerHeight,c=o.getAvatar(),l=c.querySelector("#avatar svg"),d=document.getElementById("fish-1"),h=document.getElementById("fish-2"),u=document.getElementById("water"),v=this.callBackEnd,m=0,f="left",p=!1,g=!1,E=0,w=0;c.className="",c.style.left=c.style.right=0,c.querySelector("svg").style.width="100%",c.querySelector("svg").style.height="auto",u.insertBefore(c,u.firstChild),h.style.bottom=d.style.bottom=h.style.left=d.style.right="0px",this.addFish(d),this.addFish(h);var y=function(){return m>.45*a?m>.75*a?"-heavy":"-hard":""},C=function(){var t=y();c.classList.contains("bounce")&&c.classList.remove("bounce"),c.classList.contains("bounce-hard")&&c.classList.remove("bounce-hard"),c.classList.contains("bounce-heavy")&&c.classList.remove("bounce-heavy"),c.classList.add("bounce"+t);var e=setTimeout(function(){c.classList.remove("bounce"+t),clearTimeout(e)},50)},k=function(t){t.preventDefault(),t.stopPropagation();var e=E>(t.touches?t.touches[0].pageX:t.pageX)?"left":"right";E=t.touches?t.touches[0].pageX:t.pageX,f!==e&&(l.classList.remove(f),f=e,w=E,l.classList.add(f),C()),m=w>E?-Math.abs(E-w):Math.abs(E-w),g=Math.abs(m)>0*window.innerWidth},L=function(t){t.preventDefault(),E=w=t.touches?t.touches[0].pageX:t.pageX,document.addEventListener(n.moveEvent(),k,!1)},b=function(){document.removeEventListener(n.moveEvent(),k,!1)},x=function(){s.setHint(""),document.removeEventListener(n.startEvent(),L,!1),document.removeEventListener(n.moveEvent(),k,!1),document.removeEventListener(n.endEvent(),b,!1),i.stop(),p=!0,cancelAnimationFrame(e),e=null,v(t),document.body.classList.remove("water")},M=function(){var e=.2*window.innerHeight,n=.4*window.innerWidth,i=window.innerWidth<400?.7:.4,o=parseInt(h.style.bottom),s=Math.ceil(Math.abs(m/100)),r=parseInt(d.style.right)+s;g?(h.style.left=parseInt(h.style.left)+s+"px",d.style.right=r+"px"):(h.style.left=parseInt(h.style.left)-i+"px",d.style.right=parseInt(d.style.right)-i+"px"),e>o&&(h.style.bottom=d.style.bottom=o+s+"px"),!p&&r>n&&(t=!0,x()),p||requestAnimationFrame(M)};e=requestAnimationFrame(M),document.addEventListener(n.startEvent(),L,!1),document.addEventListener(n.endEvent(),b,!1),window.addEventListener("orientationchange",this.createWave,!1),window.addEventListener("resize",this.createWave,!1),i.start(r[parseInt(window.levelIndex/window.gamesLength)],function(){t=!1,x()})},removeListener:function(){window.removeEventListener("orientationchange",this.createWave,!1),window.removeEventListener("resize",this.createWave,!1)}};e.exports=function(t){a.start(t)}},{}]},{},[1]);