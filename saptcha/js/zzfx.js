function ZZFXLib(){this.x=new AudioContext,this.r=Date.now(),this.buffer=0,this.volume=.5,this.randomness=.1}ZZFXLib.prototype.z=function(t,e){var i,o=this.Generate(t);for(i in e)o[i]=e[i];return this.Z(o.volume,o.randomness,o.frequency,o.length,o.attack,o.slide,o.noise,o.modulation,o.modulationPhase)},ZZFXLib.prototype.Z=function(t,e,i,o,s,r,a,h,n){o=void 0===o?1:o,s=void 0===s?.1:s,r=void 0===r?0:r,a=void 0===a?0:a,h=void 0===h?0:h,n=void 0===n?0:n,t*=this.volume,i*=2*Math.PI/44100,i*=1+e*(2*this.R()-1),r*=1e3*Math.PI/Math.pow(44100,2),s*=0|(o=0<o?44100*(10<o?10:o)|0:1),h*=2*Math.PI/44100,n*=Math.PI,e=[];for(var u=0,d=0,p=0;p<o;++p)e[p]=t*Math.cos(u*i*Math.cos(d*h+n))*(p<s?p/s:1-(p-s)/(o-s)),u+=1+a*(2*this.R()-1),d+=1+a*(2*this.R()-1),i+=r;return this.buffer=e,t=this.x.createBuffer(1,e.length,44100),i=this.x.createBufferSource(),t.getChannelData(0).set(e),i.buffer=t,i.connect(this.x.destination),i.start(),i},ZZFXLib.prototype.Generate=function(t){var e=this.r;this.r=t;for(var i=9;i--;)this.R();return(i={}).seed=t,i.volume=1,i.randomness=t?this.randomness:0,i.frequency=t?2e3*Math.pow(this.R(),2)|0:220,i.slide=t?parseFloat((10*Math.pow(this.R(),3)).toFixed(1)):0,i.length=t?parseFloat((.1+this.R()).toFixed(1)):1,i.attack=t?parseFloat(this.R().toFixed(2)):.1,i.noise=t?parseFloat((5*Math.pow(this.R(),3)).toFixed(1)):0,i.modulation=t?parseFloat((99*Math.pow(this.R(),5)).toFixed(1)):0,i.modulationPhase=t?parseFloat(this.R().toFixed(2)):0,this.r=e,i},ZZFXLib.prototype.Note=function(t,e){return t*Math.pow(2,e/12)},ZZFXLib.prototype.R=function(){return this.r^=this.r<<13,this.r^=this.r>>7,this.r^=this.r<<17,Math.abs(this.r)%1e9/1e9};var ZZFX=new ZZFXLib;