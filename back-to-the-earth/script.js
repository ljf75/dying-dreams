var objs=[{name:"Luna 2",nationality:"Soviet",year:"1959"},{name:"Luna 5",nationality:"Soviet",year:"1965"},{name:"Luna 7",nationality:"Soviet",year:"1965"},{name:"Luna 8",nationality:"Soviet",year:"1965"},{name:"Luna 9",nationality:"Soviet",year:"1966"},{name:"Luna 10",nationality:"Soviet",year:"1966"},{name:"Luna 11",nationality:"Soviet",year:"1966"},{name:"Luna 12",nationality:"Soviet",year:"1966"},{name:"Luna 13",nationality:"Soviet",year:"1966"},{name:"Luna 14",nationality:"Soviet",year:"1968"},{name:"Luna 15",nationality:"Soviet",year:"1969"},{name:"Luna 16 descent stage",nationality:"Soviet",year:"1970"},{name:"Luna 17",nationality:"Soviet",year:"1970"},{name:"Luna 18",nationality:"Soviet",year:"1971"},{name:"Luna 19",nationality:"Soviet",year:"1972"},{name:"Luna 20 descent stage",nationality:"Soviet",year:"1971"},{name:"Luna 21",nationality:"Soviet",year:"1973"},{name:"Luna 22",nationality:"Soviet",year:"1974"},{name:"Luna 23",nationality:"Soviet",year:"1974"},{name:"Luna 24 descent stage",nationality:"Soviet",year:"1976"},{name:"Hiten-Hagoromo",nationality:"Japan",year:"1990"},{name:"SELENE Rstar",nationality:"Japan",year:"2009"},{name:"LCROSS",nationality:"US",year:"2009"},{name:"GRAIL",nationality:"US",year:"2012"},{name:"LADEE",nationality:"US",year:"2013"},{name:"Chang'e 1",nationality:"China",year:"2009"},{name:"Chang'e 3",nationality:"China",year:"2013"},{name:"Chang'e 4",nationality:"China",year:"2019"},{name:"Longjiang-2",nationality:"China",year:"2019"},{name:"Beresheet",nationality:"Israel",year:"2019"},{name:"Yutu",nationality:"China",year:"2013"},{name:"SMART-1",nationality:"esa",year:"2006"},{name:"Chandrayaan-1",nationality:"India",year:"2008"},{name:"Lunokhod 1",nationality:"Soviet",year:"1970"},{name:"Lunokhod 2",nationality:"Soviet",year:"1973"},{name:"Lunar Orbiter 1",nationality:"US",year:"1966"},{name:"Lunar Orbiter 2",nationality:"US",year:"1966"},{name:"Lunar Orbiter 3",nationality:"US",year:"1966"},{name:"Lunar Orbiter 4",nationality:"US",year:"1967"},{name:"Lunar Orbiter 5",nationality:"US",year:"1967"},{name:"Vostok rocket",nationality:"Soviet",year:"1959"},{name:"Surveyor 1",nationality:"US",year:"1966"},{name:"Surveyor 2",nationality:"US",year:"1966"},{name:"Surveyor 3",nationality:"US",year:"1967"},{name:"Surveyor 4",nationality:"US",year:"1967"},{name:"Surveyor 5",nationality:"US",year:"1967"},{name:"Surveyor 6",nationality:"US",year:"1967"},{name:"Surveyor 7",nationality:"US",year:"1968"},{name:"Explorer 35 (IMP-E)",nationality:"US",year:"1967"},{name:"Apollo 10 LM-4",nationality:"US",year:"1967"},{name:"Apollo 11 LM-5 descent stage",nationality:"US",year:"1969"},{name:"Apollo 11 LM-5 ascent stage",nationality:"US",year:"1969"},{name:"Apollo 12 LM-6 descent stage",nationality:"US",year:"1969"},{name:"Apollo 12 LM-6 ascent stage",nationality:"US",year:"1969"},{name:"Apollo 13 S-IVB",nationality:"US",year:"1970"},{name:"Apollo 14 S-IVB",nationality:"US",year:"1971"},{name:"Apollo 14 LM-8 descent stage",nationality:"US",year:"1971"},{name:"Apollo 14 LM-8 ascent stage",nationality:"US",year:"1971"},{name:"Apollo 15 S-IVB",nationality:"US",year:"1971"},{name:"Apollo 15 LM-10 descent stage",nationality:"US",year:"1971"},{name:"Apollo 15 LM-10 ascent stage",nationality:"US",year:"1971"},{name:"Apollo 15 subsatellite",nationality:"US",year:"1971"},{name:"A 15 Lunar Roving Vehicle ",nationality:"US",year:"1971"},{name:"Apollo 16 S-IVB",nationality:"US",year:"1972"},{name:"Apollo 16 LM-11 descent stage",nationality:"US",year:"1972"},{name:"Apollo 16 LM-11 ascent stage",nationality:"US",year:"1972"},{name:"Apollo 16 subsatellite",nationality:"US",year:"1972"},{name:"A 16 Lunar Roving Vehicle ",nationality:"US",year:"1972"},{name:"Apollo 17 S-IVB",nationality:"US",year:"1972"},{name:"Apollo 17 LM-12 descent stage",nationality:"US",year:"1972"},{name:"Apollo 17 LM-12 ascent stage",nationality:"US",year:"1972"},{name:"A 17 Lunar Roving Vehicle ",nationality:"US",year:"1972"},{name:"Explorer 49",nationality:"US",year:"1973"},{name:"Ranger 6",nationality:"US",year:"1964"},{name:"Ranger 7",nationality:"US",year:"1964"},{name:"Ranger 8",nationality:"US",year:"1965"},{name:"Ranger 9",nationality:"US",year:"1965"},{name:"Ranger 4",nationality:"US",year:"1962"}],mem=[{name:"bag of human waste"},{name:"Apollo 12 plaque"},{name:"Apollo 13 plaque"},{name:"Apollo 14 plaque"},{name:"Apollo 15 plaque"},{name:"Apollo 16 plaque"},{name:"Apollo 17 plaque"},{name:"US flag"},{name:"golf ball"},{name:"retroreflector"},{name:"ALSEP"},{name:"EASEP"},{name:"footprint"},{name:"the Bible left by David Scott"},{name:"silver astronaut pin left by Alan Bean"},{name:"goodwill messages disc"},{name:"The Fallen Astronaut memorial"}],sEl=document.querySelector("a-scene"),entity=document.createElement("A-ENTITY");entity.position="-5 0.5 3",entity.rotation="90 0 0",sEl.appendChild(entity);var welcomeMsgDelete=document.getElementById("ok");welcomeMsgDelete.addEventListener("click",function(t){document.getElementById("welcomemsg").setAttribute("visible",!1)});var O2=80,nOFO=0,nOFM=0,obj=document.getElementById("objNr"),m=document.getElementById("memoNr"),t=document.getElementById("thing"),nation=document.getElementById("nation"),year=document.getElementById("year"),oP=[];function iTP(t){for(var e=0;e<oP.length-1;){if(oP[e].x==t.x&&oP[e].y==t.y&&oP[e].z==t.z)return!1;++e}return!0}oP.push({x:0,z:0});var cam=document.getElementById("cam");function moT(t,e,o){cam.setAttribute("position",{x:t,y:1,z:o}),O2>0&&(52==(O2-=1)&&document.getElementById("O1").setAttribute("material","wireframe: true"),26==O2&&document.getElementById("O2").setAttribute("material","wireframe: true")),oP.push({x:t,z:o}),nSG()}function sOI(){var id=Math.floor(Math.random()*objs.length);if(null!=objs[id]){with(t.setAttribute("text","value: "+objs[id].name),nation.setAttribute("text","value: "+objs[id].nationality),year.setAttribute("text","value: "+objs[id].year),delete objs[id],new AudioContext)with(G=createGain())for(i in D=[,,,,,,,,16,,15,,11,,10])with(createOscillator())D[i]&&(connect(G),G.connect(destination),start(.1*i),frequency.setValueAtTime(440*1.06**(13-D[i]),.1*i),gain.setValueAtTime(1,.1*i),gain.setTargetAtTime(1e-4,.1*i+.08,.005),stop(.1*i+.09));nOFO+=1}}function sMI(){var id=Math.floor(Math.random()*mem.length);if(null!=mem[id]){with(t.setAttribute("text","value: "+mem[id].name),nation.setAttribute("text","value: "),year.setAttribute("text","value: "),delete mem[id],new AudioContext)with(G=createGain())for(i in D=[,,,,,,,,14,13,12,,11])with(createOscillator())D[i]&&(connect(G),G.connect(destination),start(.1*i),frequency.setValueAtTime(440*1.06**(13-D[i]),.1*i),gain.setValueAtTime(1,.1*i),gain.setTargetAtTime(1e-4,.1*i+.08,.005),stop(.1*i+.09));nOFM+=1}}function nSG(e){if(O2>0&&objs.length>18){var o={x:oP[oP.length-1].x,y:-1,z:oP[oP.length-1].z};gT(o);gG(o);}else nation.setAttribute("text","value: "),year.setAttribute("text","value: "),O2<=0?t.setAttribute("text","value: GAME OVER \n you can't breath anymore"):t.setAttribute("text","value: YOU WON \n you can go back to the Earth \n your score is: "+nOFM)}function gG(t){for(var e={x:t.x,y:t.y,z:t.z-1},o={x:t.x-1,y:t.y,z:t.z},a={x:t.x,y:t.y,z:t.z+1},n={x:t.x+1,y:t.y,z:t.z},i=0;i<4;i++){if(Math.floor(100*Math.random()),0==i){var r=Math.floor(3*Math.random());if(0==r){var l= document.createElement("A-ENTITY");l.position=e,l.rotation="90 0 0",l.id=Math.floor(100*Math.random()),l.addEventListener("click",function(t){sEl.remove(document.getElementById(l.id)),obj.setAttribute("text","value: "+nOFO)}),l.innerHTML=' \t<a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>',sEl.appendChild(l)}else if(1==r){var y= document.createElement("A-ENTITY");y.position=e,y.rotation="90 0 0",y.id=Math.floor(100*Math.random()),y.addEventListener("click",function(t){sEl.remove(document.getElementById(y.id)),sMI(),m.setAttribute("text","value: "+nOFM)}),y.innerHTML='<a-entity position="'+e.x+" "+e.y+" "+e.z+'" rotation="90 0 0"><a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+e.x+" "+e.y+" "+e.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>',sEl.appendChild(y)}}if(1==i){var u=Math.floor(3*Math.random());if(0==u){var d= document.createElement("A-ENTITY");d.position=o,d.id=Math.floor(100*Math.random()),d.rotation="90 0 0",d.addEventListener("click",function(t){sEl.remove(document.getElementById(d.id)),obj.setAttribute("text","value: "+nOFO)}),d.innerHTML=' \t<a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>',sEl.appendChild(d)}else if(1==u){var s= document.createElement("A-ENTITY");s.position=o,s.rotation="90 0 0",s.id=Math.floor(100*Math.random()),s.addEventListener("click",function(t){sEl.remove(document.getElementById(s.id)),sMI(),m.setAttribute("text","value: "+nOFM)}),s.innerHTML='<a-entity position="'+o.x+" "+o.y+" "+o.z+'" rotation="90 0 0"><a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+o.x+" "+o.y+" "+o.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>',sEl.appendChild(s)}}if(2==i){var p=Math.floor(3*Math.random());if(0==p){var c= document.createElement("A-ENTITY");c.position=a,c.id=Math.floor(100*Math.random()),c.rotation="90 0 0",c.addEventListener("click",function(t){sEl.remove(document.getElementById(c.id)),sOI(),obj.setAttribute("text","value: "+nOFO)}),c.innerHTML=' \t<a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>',sEl.appendChild(c)}else if(1==p){var h= document.createElement("A-ENTITY");h.position=a,h.rotation="90 0 0",h.id=Math.floor(100*Math.random()),h.addEventListener("click",function(t){sEl.remove(document.getElementById(h.id)),sMI(),m.setAttribute("text","value: "+nOFM)}),h.innerHTML='<a-entity position="'+a.x+" "+a.y+" "+a.z+'" rotation="90 0 0"><a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+a.x+" "+a.y+" "+a.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>',sEl.appendChild(h)}}if(3==i){var x=Math.floor(3*Math.random());if(0==x){var b= document.createElement("A-ENTITY");b.id=Math.floor(100*Math.random()),b.position=n,b.addEventListener("click",function(t){sEl.remove(document.getElementById(b.id)),sOI(),obj.setAttribute("text","value: "+nOFO)}),b.rotation="90 0 0",b.innerHTML=' \t<a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="#4CC3D9"></a-box><a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="#4CC3D9"></a-box> <a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="#4CC3D9"></a-box>',sEl.appendChild(b)}else if(1==x){var v= document.createElement("A-ENTITY");v.position=n,v.rotation="90 0 0",v.id=Math.floor(100*Math.random()),v.addEventListener("click",function(t){sEl.remove(document.getElementById(v.id)),sMI(),m.setAttribute("text","value: "+nOFM)}),v.innerHTML='<a-entity position="'+n.x+" "+n.y+" "+n.z+'" rotation="90 0 0"><a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 360 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 45 0" color="red"></a-box><a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 360 0 0 ; loop: true; dur: 2000" height="0.5" rotation="45 0 90" color="red"></a-box><a-box position="'+n.x+" "+n.y+" "+n.z+'" animation="property: rotation; to: 0 360 0 ; loop: true; dur: 2000" height="0.5" rotation="0 0 0" color="red"></a-box></a-entity>',sEl.appendChild(v)}}}}function gT(t){var e= document.createElement("A-PLANE");o={x:t.x,y:t.y,z:t.z-1};e.setAttribute("position",o),e.setAttribute("rotation","-90 0 0"),e.addEventListener("click",function(t){moT(o.x,o.y,o.z)}),iTP(o)&&sEl.appendChild(e);var a= document.createElement("A-PLANE");n={x:t.x-1,y:t.y,z:t.z};a.setAttribute("position",n),a.setAttribute("rotation","-90 0 0"),a.addEventListener("click",function(t){moT(n.x,n.y,n.z)}),iTP(n)&&sEl.appendChild(a);var i= document.createElement("A-PLANE");r={x:t.x,y:t.y,z:t.z+1};i.setAttribute("position",r),i.setAttribute("rotation","-90 0 0"),i.addEventListener("click",function(t){moT(r.x,r.y,r.z)}),iTP(r)&&sEl.appendChild(i);var l= document.createElement("A-PLANE");y={x:t.x+1,y:t.y,z:t.z};l.setAttribute("position",y),l.setAttribute("rotation","-90 0 0"),l.addEventListener("click",function(t){moT(y.x,y.y,y.z)}),iTP(y)&&sEl.appendChild(l)}nSG();