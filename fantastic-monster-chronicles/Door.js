var Door=function(o,t,i,e,s,h,r){this.ctx=o,this.image=t,this.tileId=i,this.width=e,this.height=s,this.x=h,this.y=r,this.isOpen=!1,this.toggledValue=!1};Door.prototype=new Sprite,Door.prototype.constructor=Door,Door.prototype.openDoor=function(){this.toggledValue||(this.toggledValue=!0,this.isOpen=!0,console.log("Door is open"),this.tileId=8)};