Model=function a(g,m,l,k){function h(){var b=this,c={};b.on=function(e,d){(c[e]||(c[e]=[])).push(d)},b.trigger=function(f,e){for(var o=c[f],n=0;o&&n<o.length;){o[n++](e)}},b.off=function(e,d){for(l=c[e]||[];d&&(m=l.indexOf(d))>-1;){l.splice(m,1)}c[e]=d?l:[]};for(m in g){l=g[m],b[m]=typeof l=="function"?function(){return(l=this.apply(b,arguments))===k?b:l}.bind(l):l}b.init&&b.init.apply(b,arguments)}return h.extend=function(b){l={};for(m in g){l[m]=g[m]}for(m in b){l[m]=b[m],g[m]!==k&&(l["__"+m]=g[m])}return a(l)},h},typeof module=="object"&&(module.exports=Model);/^u/.test(typeof define)&&function(d){var c=this.require=function(e){return d[e]};this.define=function(e,b){d[e]=d[e]||b(c)}}({}),define("minified",function(){function an(b){return b!=H?""+b:""}function am(b){return/^str/.test(typeof b)}function al(b){return b&&b.nodeType}function ak(b){return b}function aj(d,c){ae(d,function(b){b(c)})}function ai(e,d){for(var f in e){d(f,e[f])}}function ah(e,d){var f=[];return ae(e,function(c,b){d.call(e,c,b)&&f.push(c)}),f}function ag(f,e,h){var g=[];return f(e,function(b,c){ae(h.call(e,b,c),function(d){g.push(d)})}),g}function af(e,g,f){return an(e).replace(g,f||"")}function ae(e,d){if(ac(e)){for(var f=0;f<e.length;f++){d.call(e,e[f],f)}}else{e!=H&&d(e,0)}return e}function ad(b){return"function"==typeof b&&!b.item}function ac(b){return b&&b.length!=H&&!am(b)&&!al(b)&&!ad(b)&&b!==X}function ab(b){return parseFloat(af(b,/^[^\d-]+/))}function aa(b){return b.Nia=b.Nia||++R}function Z(g,f){var l,k=[],h={};return ae(g,function(b){ae(f(b),function(c){h[l=aa(c)]||(k.push(c),h[l]=!0)})}),k}function Y(f,e){var h={$position:"absolute",$visibility:"hidden",$display:"block",$height:H},g=f.get(h),h=f.set(h).get("clientHeight");return f.set(g),h*e+"px"}function W(b){P?P.push(b):setTimeout(b,0)}function U(b){return ag(ae,b,function(c){return ac(c)?U(c):(al(c)&&(c=c.cloneNode(!0),c.removeAttribute&&c.removeAttribute("id")),c)})}function S(e,d,f){return ad(e)?W(e):new J(Q(e,d,f))}function Q(b,k,h){function g(d){return ac(d)?ag(ae,d,g):d}function c(d){return ah(ag(ae,d,g),function(e){for(;e=e.parentNode;){if(e==k[0]||h){return e==k[0]}}})}return k?1!=(k=Q(k)).length?Z(k,function(d){return Q(b,d,h)}):am(b)?1!=al(k[0])?[]:h?c(k[0].querySelectorAll(b)):k[0].querySelectorAll(b):c(b):am(b)?document.querySelectorAll(b):ag(ae,b,g)}function O(b,o){function n(e,d){var f=RegExp("(^|\\s+)"+e+"(?=$|\\s)","i");return function(g){return e?f.test(g[d]):!0}}var m,l,k={},c=k;return ad(b)?b:/^num/.test(typeof b)?function(d,e){return e==b}:!b||"*"==b||am(b)&&(c=/^([\w-]*)\.?([\w-]*)$/.exec(b))?(m=n(c[1],"tagName"),l=n(c[2],"className"),function(d){return 1==al(d)&&m(d)&&l(d)}):o?function(d){return S(b,o).find(d)!=H}:(S(b).each(function(d){k[aa(d)]=!0}),function(d){return k[aa(d)]})}function M(d){var c=O(d);return function(b){return c(b)?H:!0}}function K(){function g(b,c){e==H&&(e=b,l=c,setTimeout(function(){aj(k)},0))}var e,l,k=[],h=g.then=function(b,m){function d(){var p,o;try{p=e?b:m,ad(p)?(o=p.apply(I,l),o&&o.then?o.then(function(f){c(!0,[f])},function(f){c(!1,[f])}):c(!0,[o])):c(e,l)}catch(n){c(!1,[n])}}var c=K();return e==H?k.push(d):setTimeout(d,0),c};return g.error=function(b){return h(0,b)},g}function J(e){for(var d=this.length=e.length,f=0;d>f;f++){this[f]=e[f]}}var I,H=null,X=this,V={},T={},R=1,P=/^[ic]/.test(document.readyState)?H:[],N={},L=0;return ai({each:function(b){return ae(this,b)},filter:function(b){return new J(ah(this,b))},collect:function(b){return new J(ag(ae,this,b))},sub:function(f,e){var h=0>f?this.length+f:f,g=e>=0?e:this.length+(e||0);return new J(ah(this,function(d,c){return c>=h&&g>c}))},find:function(g,f){for(var l,k=ad(g)?g:function(d,e){return g===d?e:void 0},h=f||0;h<this.length;h++){if((l=k.call(this,this[h],h))!=H){return l}}},remove:function(){ae(this,function(b){b.parentNode.removeChild(b)})},text:function(){return ag(ae,this,function(b){return b.textContent}).join("")},trav:function(h,g,n){var m=/^num/.test(typeof g),l=O(m?H:g),k=m?g:n;return new J(Z(this,function(d){for(var e=[];(d=d[h])&&e.length!=k;){l(d)&&e.push(d)}return e}))},next:function(d,c){return this.trav("nextSibling",d,c||1)},up:function(d,c){return this.trav("parentNode",d,c||1)},select:function(d,c){return S(d,this,c)},is:function(b){return !this.find(M(b))},only:function(b){return new J(ah(this,O(b)))},not:function(b){return new J(ah(this,M(b)))},get:function(b,p){var o,n,m,l=this,f=l[0];return f?am(b)?(o=/^(\W*)(.*)/.exec(af(b,/^%/,"@data-")),n=o[1],f=T[n]?T[n](this,o[2]):"$"==b?l.get("className"):"$$"==b?l.get("@style"):"$$slide"==b?l.get("$height"):"$$fade"==b||"$$show"==b?"hidden"==l.get("$visibility")||"none"==l.get("$display")?0:"$$fade"==b?isNaN(l.get("$opacity",!0))?1:l.get("$opacity",!0):1:"$"==n?X.getComputedStyle(f,H).getPropertyValue(af(o[2],/[A-Z]/g,function(c){return"-"+c.toLowerCase()})):"@"==n?f.getAttribute(o[2]):f[o[2]],p?ab(f):f):(m={},(ac(b)?ae:ai)(b,function(c){m[c]=l.get(c,p)}),m):void 0},set:function(b,l){var k,h,f=this;return l!==I?(k=/^(\W*)(.*)/.exec(af(af(b,/^\$float$/,"cssFloat"),/^%/,"@data-")),h=k[1],V[h]?V[h](this,k[2],l):"$$fade"==b?this.set({$visibility:l?"visible":"hidden",$opacity:l}):"$$slide"==b?f.set({$visibility:l?"visible":"hidden",$overflow:"hidden",$height:/px/.test(l)?l:function(e,c,g){return Y(S(g),l)}}):"$$show"==b?l?f.set({$visibility:l?"visible":"hidden",$display:""}).set({$display:function(c){return"none"==c?"block":c}}):f.set({$display:"none"}):"$$"==b?f.set("@style",l):ae(this,function(c,e){var d=ad(l)?l(S(c).get(b),e,c):l;"$"==h?k[2]?c.style[k[2]]=d:ae(d&&d.split(/\s+/),function(g){var o=af(g,/^[+-]/),n=c.className||"",m=af(n,RegExp("(^|\\s+)"+o+"(?=$|\\s)"));(/^\+/.test(g)||o==g&&n==m)&&(m+=" "+o),c.className=af(m,/^\s+/g)}):"$$scrollX"==b?c.scroll(d,S(c).get("$$scrollY")):"$$scrollY"==b?c.scroll(S(c).get("$$scrollX"),d):"@"==h?d==H?c.removeAttribute(k[2]):c.setAttribute(k[2],d):c[k[2]]=d})):am(b)||ad(b)?f.set("$",b):ai(b,function(d,c){f.set(d,c)}),f},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(d,c){return this.each(function(l,k){function h(e){ac(e)?ae(e,h):ad(e)?h(e(l,k)):e!=H&&(e=al(e)?e:document.createTextNode(e),b?b.parentNode.insertBefore(e,b.nextSibling):c?c(e,l,l.parentNode):l.appendChild(e),b=e)}var b;h(k&&!ad(d)?U(d):d)})},fill:function(b){return this.each(function(c){S(c.childNodes).remove()}).add(b)},addAfter:function(b){return this.add(b,function(e,d,f){f.insertBefore(e,d.nextSibling)})},addBefore:function(b){return this.add(b,function(e,d,f){f.insertBefore(e,d)})},addFront:function(b){return this.add(b,function(d,c){c.insertBefore(d,c.firstChild)})},replace:function(b){return this.add(b,function(e,d,f){f.replaceChild(e,d)})},clone:function(){return new J(U(this))},animate:function(k,f,q){var p,o=K(),n=this,h=ag(ae,this,function(c,s){var r,m=S(c),l={};return ai(r=m.get(k),function(g,d){var b=k[g];l[g]=ad(b)?b(d,s,c):"$$slide"==g?Y(m,b):b}),m.dial(r,l,q)}),e=f||500;return o.stop=function(){return o(!1),p()},p=S.loop(function(b){aj(h,b/e),b>=e&&(p(),o(!0,[n]))}),o},dial:function(f,p,o){function n(d,c){return/^#/.test(d)?parseInt(6<d.length?d.substr(2*c+1,2):(d=d.charAt(c+1))+d,16):ab(d.split(",")[c])}var m=this,l=o||0,k=ad(l)?l:function(e,d,g){return g*(d-e)*(l+(1-l)*g*(3-2*g))+e};return function(b){ai(f,function(c,g){var e=p[c],d=0;m.set(c,0>=b?g:b>=1?e:/^#|rgb\(/.test(e)?"rgb("+Math.round(k(n(g,d),n(e,d++),b))+","+Math.round(k(n(g,d),n(e,d++),b))+","+Math.round(k(n(g,d),n(e,d++),b))+")":af(e,/-?[\d.]+/,an(k(ab(g),ab(e),b))))})}},toggle:function(l,k,r,q){var p,o,n=this,m=!1;return k?(n.set(l),function(b){b!==m&&(o=(m=!0===b||!1===b?b:!m)?k:l,r?(p=n.animate(o,p?p.stop():r,q)).then(function(){p=H}):n.set(o))}):n.toggle(af(l,/\b(?=\w)/g,"-"),af(l,/\b(?=\w)/g,"+"))},values:function(d){var e=d||{};return this.each(function(c){var h=c.name||c.id,g=an(c.value);if(/form/i.test(c.tagName)){for(h=0;h<c.elements.length;h++){S(c.elements[h]).values(e)}}else{!h||/ox|io/i.test(c.type)&&!c.checked||(e[h]=e[h]==H?g:ag(ae,[e[h],g],ak))}}),e},offset:function(){for(var d=this[0],c={x:0,y:0};d;){c.x+=d.offsetLeft,c.y+=d.offsetTop,d=d.offsetParent}return c},on:function(m,k,h,d,b){return ad(k)?this.on(H,m,k,h,d):am(d)?this.on(m,k,h,H,d):this.each(function(c,e){ae(m?Q(m,c):c,function(f){ae(an(k).split(/\s/),function(l){function u(n,w,v){var p,o=!b;if(v=b?v:f,b){for(p=O(b,f);v&&v!=f&&!(o=p(v));){v=v.parentNode}}return !o||g!=n||h.apply(S(v),d||[w,e])&&"?"==t||"|"==t}function r(n){u(g,n,n.target)||(n.preventDefault(),n.stopPropagation())}var g=af(l,/[?|]/g),t=af(l,/[^?|]/g),s=("blur"==g||"focus"==g)&&!!b,q=R++;f.addEventListener(g,r,s),f.M||(f.M={}),f.M[q]=u,h.M=ag(ae,[h.M,function(){f.removeEventListener(g,r,s),delete f.M[q]}],ak)})})})},onOver:function(f,e){var h=this,g=[];return ad(e)?this.on(f,"|mouseover |mouseout",function(b,k){var d=b.relatedTarget||b.toElement,c="mouseout"!=b.type;g[k]===c||!c&&d&&(d==h[k]||S(d).up(h[k]).length)||(g[k]=c,e.call(this,c,b))}):this.onOver(H,f)},onFocus:function(e,d,f){return ad(d)?this.on(e,"|blur",d,[!1],f).on(e,"|focus",d,[!0],f):this.onFocus(H,e,d)},onChange:function(e,d,f){return ad(d)?this.on(e,"|input |change |click",function(b,k){var h=this[0],g=/ox|io/i.test(h.type)?h.checked:h.value;h.NiaP!=g&&d.call(this,h.NiaP=g,k)},f):this.onChange(H,e,d)},onClick:function(f,e,h,g){return ad(e)?this.on(f,"click",e,h,g):this.onClick(H,f,e,h)},trigger:function(d,c){return this.each(function(g){for(var f=!0,b=g;b&&f;){ai(b.M,function(k,h){f=f&&h(d,c,g)}),b=b.parentNode}})}},function(d,c){J.prototype[d]=c}),ai({request:function(t,s,r,q){q=q||{};var p,o=0,n=K(),h=r&&r.constructor==q.constructor;try{n.xhr=p=new XMLHttpRequest,n.stop=function(){p.abort()},h&&(r=ag(ai,r,function(d,c){return ag(ae,c,function(e){return encodeURIComponent(d)+(e!=H?"="+encodeURIComponent(e):"")})}).join("&")),r==H||/post/i.test(t)||(s+="?"+r,r=H),p.open(t,s,!0,q.user,q.pass),h&&/post/i.test(t)&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),ai(q.headers,function(d,c){p.setRequestHeader(d,c)}),ai(q.xhr,function(d,c){p[d]=c}),p.onreadystatechange=function(){4!=p.readyState||o++||(200==p.status?n(!0,[p.responseText,p]):n(!1,[p.status,p.responseText,p]))},p.send(r)}catch(f){o||n(!1,[0,H,an(f)])}return n},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:W,loop:function(k){function f(b){ai(N,function(d,e){e(b)}),L&&l(f)}function p(){return N[m]&&(delete N[m],L--),n}var o,n=0,m=R++,l=X.requestAnimationFrame||function(b){setTimeout(function(){b(+new Date)},33)};return N[m]=function(c){o=o||c,k(n=c-o,p)},L++||l(f),p},off:function(b){aj(b.M),b.M=H}},function(d,c){S[d]=c}),document.addEventListener("DOMContentLoaded",function(){aj(P),P=H},!1),{$:S,$$:function(e,d,f){return Q(e,d,f)[0]},EE:function(e,d,f){return e=S(document.createElement(e)),ac(d)||!/^ob/.test(typeof d)?e.add(d):e.set(d).add(f)},M:J,getter:T,setter:V}});var AIBoard=Model({isPlayerATurn:true,isMovePlayerState:true,playerAPosX:2,playerAPosY:0,playerBPosX:2,playerBPosY:4,_boardSizeX:5,_boardSizeY:5,_FREE_BLOCK:0,_PLAYER_A_BLOCK:1,_PLAYER_B_BLOCK:2,_REMOVED_BLOCK:3,_RECURSION_DEPTH_ALPHA_BETA_ALGORITHM:3,init:function(d){if(this._isAttributeDefined(d,"board")){var c=d.board;this.isPlayerATurn=c.isPlayerATurn;this._boardSizeX=c._boardSizeX;this._boardSizeY=c._boardSizeY;this.playerAPosX=c.playerAPosX;this.playerAPosY=c.playerAPosY;this.playerBPosX=c.playerBPosX;this.playerBPosY=c.playerBPosY;this._matrix=new Array(this._boardSizeX);for(var b=0;b<this._boardSizeX;b++){this._matrix[b]=new Array(this._boardSizeY);for(var e=0;e<this._boardSizeY;e++){this._matrix[b][e]=c._matrix[b][e]}}}else{if(this._isAttributeDefined(d,"isPlayerATurn")){this.isPlayerATurn=d.isPlayerATurn}if(this._isAttributeDefined(d,"boardSizeX")){this._boardSizeX=d.boardSizeX}if(this._isAttributeDefined(d,"boardSizeY")){this._boardSizeY=d.boardSizeY}if(this._isAttributeDefined(d,"playerAPosX")){this.playerAPosX=d.playerAPosX}if(this._isAttributeDefined(d,"playerAPosY")){this.playerAPosY=d.playerAPosY}if(this._isAttributeDefined(d,"playerBPosX")){this.playerBPosX=d.playerBPosX}if(this._isAttributeDefined(d,"playerBPosY")){this.playerBPosY=d.playerBPosY}this._matrix=new Array(this._boardSizeX);for(var b=0;b<this._boardSizeX;b++){this._matrix[b]=new Array(this._boardSizeY);for(var e=0;e<this._boardSizeY;e++){this._matrix[b][e]=this._FREE_BLOCK}}this._matrix[this.playerAPosX][this.playerAPosY]=this._PLAYER_A_BLOCK;this._matrix[this.playerBPosX][this.playerBPosY]=this._PLAYER_B_BLOCK}},calculateNextDoubleMoveOfPlayer:function(){if(!this.isMovePlayerState){return null}return this._calculateNextDoubleMoveOfPlayer(this._RECURSION_DEPTH_ALPHA_BETA_ALGORITHM,-1000,+1000)},calculateAllPossibleMovesOfPlayer:function(){var c=[];if(this.isMovePlayerState){for(var b=0;b<this._boardSizeX;b++){for(var d=0;d<this._boardSizeY;d++){if(this.isPlayerATurn&&this._canPlayerAMoveTo(b,d)){c.push({moveToXPos:b,moveToYPos:d})}else{if(!this.isPlayerATurn&&this._canPlayerBMoveTo(b,d)){c.push({moveToXPos:b,moveToYPos:d})}}}}}return c},calculateStonesThatCanBeRemoved:function(){var c=[];if(!this.isMovePlayerState){for(var b=0;b<this._boardSizeX;b++){for(var d=0;d<this._boardSizeY;d++){if(this._isStoneFree(b,d)){c.push({removeXPos:b,removeYPos:d})}}}}return c},removeRandomStone:function(){var c=this._getAllStonesOfType(this._FREE_BLOCK);if(c.length<1){return null}var b=this._randomIntFromInterval(0,c.length-1);var d=c[b];this._matrix[d.x][d.y]=this._REMOVED_BLOCK;return d},movePlayer:function(c,b){if(this.isMovePlayerState&&this._isPossibleMoveOfPlayer(c,b)){if(this.isPlayerATurn){this._matrix[this.playerAPosX][this.playerAPosY]=this._FREE_BLOCK;this.playerAPosX=c;this.playerAPosY=b;this._matrix[c][b]=this._PLAYER_A_BLOCK}else{this._matrix[this.playerBPosX][this.playerBPosY]=this._FREE_BLOCK;this.playerBPosX=c;this.playerBPosY=b;this._matrix[c][b]=this._PLAYER_B_BLOCK}this.isMovePlayerState=false;return true}return false},removeStoneFromBoard:function(c,b){if(!this.isMovePlayerState&&this._isPossibleToRemoveStoneFromBoard(c,b)){this._matrix[c][b]=this._REMOVED_BLOCK;this.isMovePlayerState=true;this.isPlayerATurn=!this.isPlayerATurn;return true}return false},hasPlayerAWon:function(){return this.hasPlayerBLost()},hasPlayerBWon:function(){return this.hasPlayerALost()},hasPlayerALost:function(){return this._hasPlayerLost(true)},hasPlayerBLost:function(){return this._hasPlayerLost(false)},hasPlayerWonGame:function(){if(this.isPlayerATurn){return this.hasPlayerAWon()}return this.hasPlayerBWon()},hasPlayerLostGame:function(){if(this.isPlayerATurn){return this.hasPlayerALost()}return this.hasPlayerBLost()},hasGameEnded:function(){if(this.hasPlayerLostGame()){return true}if(this.hasPlayerWonGame()){return true}return false},_hasPlayerLost:function(c){for(var b=0;b<this._boardSizeX;b++){for(var d=0;d<this._boardSizeY;d++){if(c){if(this._canPlayerAMoveTo(b,d)){return false}}else{if(this._canPlayerBMoveTo(b,d)){return false}}}}return true},_canPlayerAMoveTo:function(b,c){if(this._isStoneFree(b,c)&&this._isStoneNextToStoneOfType(b,c,this._PLAYER_A_BLOCK)&!this._isStoneNextToStoneOfType(b,c,this._PLAYER_B_BLOCK)){return true}return false},_canPlayerBMoveTo:function(b,c){if(this._isStoneFree(b,c)&&this._isStoneNextToStoneOfType(b,c,this._PLAYER_B_BLOCK)&!this._isStoneNextToStoneOfType(b,c,this._PLAYER_A_BLOCK)){return true}return false},_isAttributeDefined:function(c,b){if(typeof c==="undefined"){return false}if(typeof c[b]==="undefined"){return false}return true},_calculateNextDoubleMoveOfPlayer:function(g,f,l){var m=0;if(g===0||this.hasGameEnded()){m=this._evaluateBoard(g);return m}var b=this._calculatePossibleDoubleMoves();var e=-1001;for(var h=0;h<b.length;h++){var c=b[h];var k=this._makeDoubleMove(c);c.value=-(k._calculateNextDoubleMoveOfPlayer(g-1,-l,-f));if(c.value>e){e=c.value}if(e>f){f=e}if(e>=l){break}}if(g===this._RECURSION_DEPTH_ALPHA_BETA_ALGORITHM){var d=[];for(var h=0;h<b.length;h++){var c=b[h];if(c.value==e){return c}}}return e},_randomIntFromInterval:function(c,b){if(b<=c){return c}return Math.floor(Math.random()*(b-c+1)+c)},_makeDoubleMove:function(b){var c=new AIBoard({board:this});c.movePlayer(b.moveToXPos,b.moveToYPos);c.removeStoneFromBoard(b.removeXPos,b.removeYPos);return c},_calculatePossibleDoubleMoves:function(){var b=[];var d=this.calculateAllPossibleMovesOfPlayer();var o=this._PLAYER_A_BLOCK;if(this.isPlayerATurn){o=this._PLAYER_B_BLOCK}for(var l=0;l<d.length;l++){var m=d[l];var h=m.moveToXPos;var c=m.moveToYPos;var p=new AIBoard({board:this});p.movePlayer(h,c);var n=p._getAllFreeStonesNextToOtherPlayer();for(var g=0;g<n.length;g++){var f=n[g];var k=f.x;var e=f.y;b.push({moveToXPos:h,moveToYPos:c,removeXPos:k,removeYPos:e})}}return b},_evaluateBoard:function(g){var f=100+(10*g);if(this.isPlayerATurn){if(this.hasPlayerAWon()){return f}else{if(this.hasPlayerBWon()){return -f}}}else{if(this.hasPlayerBWon()){return f}else{if(this.hasPlayerAWon()){return -f}}}var d=0;var e=0;var c=0;for(var b=0;b<this._boardSizeX;b++){for(var h=0;h<this._boardSizeY;h++){if(this._canPlayerAMoveTo(b,h)){e+=1}if(this._canPlayerBMoveTo(b,h)){c+=1}}}if(this.isPlayerATurn){d=e+(e-c)}else{d=c+(c-e)}return d},_isPossibleMoveOfPlayer:function(e,c){var d=this.calculateAllPossibleMovesOfPlayer();for(var b=0;b<d.length;b++){if(d[b].moveToXPos===e&&d[b].moveToYPos===c){return true}}return false},_isPossibleToRemoveStoneFromBoard:function(e,c){var d=this.calculateStonesThatCanBeRemoved();for(var b=0;b<d.length;b++){if(d[b].removeXPos===e&&d[b].removeYPos===c){return true}}return false},_isStoneNextToStoneOfType:function(c,b,d){if(c>0&&this._matrix[c-1][b]===d){return true}else{if(c>0&&b>0&&this._matrix[c-1][b-1]===d){return true}else{if(b>0&&this._matrix[c][b-1]===d){return true}else{if(c+1<this._boardSizeX&&b>0&&this._matrix[c+1][b-1]===d){return true}else{if(c+1<this._boardSizeX&&this._matrix[c+1][b]===d){return true}else{if(c+1<this._boardSizeX&&b+1<this._boardSizeY&&this._matrix[c+1][b+1]===d){return true}else{if(b+1<this._boardSizeY&&this._matrix[c][b+1]===d){return true}else{if(c>0&&b+1<this._boardSizeY&&this._matrix[c-1][b+1]===d){return true}}}}}}}}return false},_getAllFreeStonesNextToOtherPlayer:function(){var e=[];var c=this._getAllStonesOfType(this._FREE_BLOCK);for(var b=0;b<c.length;b++){var d=c[b];var f=this._PLAYER_A_BLOCK;if(this.isPlayerATurn){f=this._PLAYER_B_BLOCK}if(this._isStoneNextToStoneOfType(d.x,d.y,f)){e.push({x:d.x,y:d.y})}}return e},_getAllStonesOfType:function(d){var c=[];for(var b=0;b<this._boardSizeX;b++){for(var e=0;e<this._boardSizeY;e++){if(this._matrix[b][e]===d){c.push({x:b,y:e})}}}return c},_isStoneFree:function(c,b){return this._matrix[c][b]===this._FREE_BLOCK}});var Field=Model({id:"#field",stones:{},init:function(b){this.size=[b[0],b[1]];this.initView()},initView:function(){this.view=$(this.id);this.view.set("$width",PIECESIZE*this.size[0]+10+"px");this.view.set("$height",PIECESIZE*this.size[1]+10+"px");for(i=0;i<this.size[0];i++){for(j=0;j<this.size[1];j++){var b=new Stone([i,j]);this.stones[i+"_"+j]=b;this.view.add(b.getView())}}},deselectFields:function(){for(var b in this.stones){this.stones[b].setIsSelected(false)}},selectFields:function(c,b){var e=this,d;c.forEach(function(f){d=e.getStoneByPosition([f.moveToXPos,f.moveToYPos]);d.setIsSelected(true,b)})},getStoneByPosition:function(b){return this.stones[b[0]+"_"+b[1]]},enableDestroy:function(c,b){var f,d;for(var e in c){d=c[e];f=this.stones[d.removeXPos+"_"+d.removeYPos];if(b===true){f.enableDestruction()}}},disableDestroy:function(){for(var b in this.stones){stone=this.stones[b];this.stones[b].disableDestruction()}}});var Game=Model({player:{},currentPlayerId:null,playerStartedId:null,aiDoubleMove:null,isPlayerTwoAI:false,HELPTEXT:"<h2>Help</h2><br /><b>Goal</b> of the game is to isolate your opponent.<br /><br />Every turn consists of two moves.<br /><b>First</b> you move your ship one step on water. There always has to be one free field of water between yourself and your opponent.<br />In the <b>second</b> move you build an island and thereby decrease the fields of water.<br /><br />At the end of every round a firestorm will take a random field of water.",init:function(c){var e=this;this.isPlayerTwoAI=c;this.messageOverlay=$("#message-overlay");$(".close",this.messageOverlay).onClick(function(){e.messageOverlay.hide()});this.console=$("#console");this.console.show();$(".help").onClick(function(){$(".content",e.messageOverlay).set("innerHTML",e.HELPTEXT);e.messageOverlay.show()});var b=$('select[name="grid"]').get("value").split("_");this.field=new Field(b);var f=e.calculatePlayerPositionsX(b);var d=(c)?"Computer":$('input[name="player2"]').get("value");this.initPlayers($('input[name="player1"]').get("value"),d,f,(b[1]-1));this.initEventBinding();this.initAIBoard(b,f);this.startGame()},initAIBoard:function(b,c){this.aiBoard=new AIBoard({boardSizeX:b[0],boardSizeY:b[1],playerAPosX:c,playerAPosY:0,playerBPosX:c,playerBPosY:b[1]-1})},calculatePlayerPositionsX:function(b){return Math.floor((b[0]-1)/2)},initEventBinding:function(){this.on("positionBeforeChange",this.onChangePosition);this.on("onDestruction",this.onDestroyField)},initPlayers:function(d,c,e,b){this.player[0]=new Player(d,1,"orange",[e,0],false);this.player[1]=new Player(c,2,"#09a909",[e,b],this.isPlayerTwoAI)},startGame:function(){this.playerStartedId=this.currentPlayerId=Math.round(Math.random());this.aiBoard.isPlayerATurn=false;if(this.currentPlayerId===0){this.aiBoard.isPlayerATurn=true}this.startNextRound()},startNextRound:function(){var b=this.player[this.currentPlayerId],f=this.player[this.getOtherPlayerId()],c=this;b.setIsSelected(true);if(c.aiBoard.hasGameEnded()){c.onGameEnd();return}if(b.getisAI()){var e=new Date().getTime();this.setConsoleMessage("Computer: is calculating next move of the ship ..");window.setTimeout(function(){c.aiDoubleMove=c.aiBoard.calculateNextDoubleMoveOfPlayer();var g=new Date().getTime();var h=g-e;window.setTimeout(function(){game.trigger("positionBeforeChange",{position:[game.aiDoubleMove.moveToXPos,game.aiDoubleMove.moveToYPos]});c.setConsoleMessage("Computer: is calculating position of new island ..");window.setTimeout(function(){game.field.getStoneByPosition([game.aiDoubleMove.removeXPos,game.aiDoubleMove.removeYPos]).onDestructionClick(true)},3000)},3000-h)},100)}else{var d=c.aiBoard.calculateAllPossibleMovesOfPlayer();c.field.selectFields(d,true);this.setConsoleMessage("Your turn "+b.getName()+": Move your ship one step.")}},enableFieldDestroy:function(){var c=this.player[this.currentPlayerId];var b=this.aiBoard.calculateStonesThatCanBeRemoved();this.field.enableDestroy(b,!c.getisAI())},disableFieldDestroy:function(){this.field.disableDestroy()},getOtherPlayerId:function(){return Math.abs(this.currentPlayerId-1)},onFinishRound:function(){var b=this.player[this.currentPlayerId];var d=(b.getisAI())?3000:100;var c=this;if(this.currentPlayerId!=this.playerStartedId){this.setConsoleMessage("A firestorm is comming ..","red")}window.setTimeout(function(){if(c.currentPlayerId!=c.playerStartedId){var e=c.aiBoard.removeRandomStone();if(e!=null){c.field.getStoneByPosition([e.x,e.y]).disableStone(true,true)}c.currentPlayerId=c.getOtherPlayerId();window.setTimeout(function(){c.startNextRound()},3000)}else{c.currentPlayerId=c.getOtherPlayerId();c.startNextRound()}},d)},onChangePosition:function(b){var c=this.player[this.currentPlayerId];c.setPosition(b.position);this.aiBoard.movePlayer(b.position[0],b.position[1]);this.field.deselectFields();this.enableFieldDestroy();if(!c.getisAI()){this.setConsoleMessage("Your turn "+c.getName()+": Build an island by selecting one field of water.")}},onDestroyField:function(b){var c=this.player[this.currentPlayerId];c.setIsSelected(false);this.aiBoard.removeStoneFromBoard(b.position[0],b.position[1]);this.disableFieldDestroy();this.onFinishRound()},onGameEnd:function(){var b=this.player[0];if(this.aiBoard.hasPlayerBWon()){b=this.player[1]}content='<div style="text-align:center"><h3>'+b.getName()+' wins!</h3><a href="">start again</a></div>';$(".content",this.messageOverlay).set("innerHTML",content);this.messageOverlay.show()},setConsoleMessage:function(c,b){if(typeof b==="undefined"){b=this.player[this.currentPlayerId].getColor()}var d=this.console.get("innerHTML")+'<div style="color:'+b+'">'+c+"</div>";this.console.set("innerHTML",d);this.console.set("scrollTop",this.console.get("scrollHeight"))}});var Player=Model({isAi:false,init:function(d,f,c,b,e){this.name=d;this.id=f;this.color=c;this.initView(b);this.isAI=e},initView:function(b){this.tokenView=EE("div",{"@class":"stone player","@id":"player"+this.id});$("#field").add(this.tokenView);this.setPosition(b)},getisAI:function(){return this.isAI},getName:function(){return this.name},getColor:function(){return this.color},setPosition:function(b){this.tokenView.set("$left",PIECESIZE*b[0]+"px");this.tokenView.set("$top",PIECESIZE*b[1]+"px")},setIsSelected:function(d){var c=(d===true)?"+":"-";this.tokenView.set("$",c+"selected");var b=(d===true)?this.color:"transparent";this.tokenView.set("$backgroundColor",b)}});var Stone=Model({init:function(b){this.position=b;this.isSelected=false;this.initView()},initView:function(){this.view=EE("div",{"@class":"stone posX_"+this.position[0]+" posY_"+this.position[1]});this.view.set("$left",PIECESIZE*this.position[0]+"px");this.view.set("$top",PIECESIZE*this.position[1]+"px")},getView:function(){return this.view},setIsSelected:function(d,b){var c=(d===true)?"+":"-";this.view.set("$",c+"selected");this.isSelected=d;if(this.isSelected===true&&b){this.view.on("click",this.onSelectedClicked)}else{$.off(this.onSelectedClicked)}},onSelectedClicked:function(){game.trigger("positionBeforeChange",{position:this.position})},enableDestruction:function(){this.view.set("$","+destroyable");this.view.on("click",this.onDestructionClick)},disableDestruction:function(){this.view.set("$","-destroyable");$.off(this.onDestructionClick)},onDestructionClick:function(b){if(!b){b=false}this.disableStone(false,b);game.trigger("onDestruction",{position:this.position})},disableStone:function(c,b){if(c===true){this.view.set("$","+fireball")}if(b===true){this.view.set("$","+blink")}this.view.set("$","+destroyed")}});