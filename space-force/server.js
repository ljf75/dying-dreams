"use strict";const matches=[],users=[];let matchID=0,removeUser=s=>{s.match&&-1!==s.match.users.indexOf(s)&&s.end()};function findMatch(s){let t=0;if(matches.forEach(e=>{t||e.users&&e.users.length<4&&!s.match&&(s.join(e),t++)}),!t){let t=new Match;t.id=matchID++,matches.push(t),s.join(t)}}class Match{constructor(){this.users=[],this.game=new Game(!0)}join(s){this.users.push(s),this.game.addPlayer(s.socket.id,s)}leave(s){this.users.splice(this.users.indexOf(s),1),this.game.removeObj(s.socket.id),0===this.users.length&&(this.game.GL.stop(),matches.splice(matches.indexOf(this)))}}class User{constructor(s){this.socket=s,this.match=null,this.ship=""}start(){this.match=match,this.socket.emit("start")}join(s){this.socket.emit("joined"),this.match=s,s.join(this)}end(){this.match.leave(this),this.match=null,this.socket.emit("end")}}module.exports={io:s=>{const t=new User(s);users[s.id]=t,s.on("disconnect",()=>{removeUser(t)}),s.on("join",s=>{t.ship=s,findMatch(t)}),s.on("input",s=>{t.match&&t.match.game.receiveInput(s)})}};