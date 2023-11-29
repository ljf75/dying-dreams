define(["element","svg","electronics/powerSourceElement","electronics/switchElement","electronics/consumerElement","electronics/circuitElement"],function(a,b,c,d,e,f){"use strict";var g,h,i,j,k,l,m,n,o,p,q,r,s,t;h=[[0,0,25,25],[25,0,50,25],[50,0,75,25],[75,0,100,25],[0,25,25,50],[25,25,50,50],[50,25,75,50],[75,25,100,50],[0,50,25,75],[25,50,50,75],[50,50,75,75],[75,50,100,75],[0,75,25,100],[25,75,50,100],[50,75,75,100],[75,75,100,100]],i=function(a){return a[Math.floor(a.length*Math.random(a.length))]},m=[],l={PowerSourceElement:new c.PowerSourceElement,SwitchElement:new d.SwitchElement,ConsumerElement:new e.ConsumerElement},t=new f.CircuitElement,l.SwitchElement.setInput(l.PowerSourceElement).setOutput(l.ConsumerElement);for(k in l)if(l.hasOwnProperty(k)){do j=i(h);while(-1!==m.indexOf(j+""));m.push(j+""),t.add(l[k]),b.el.appendChild(b.render(l[k],{bb:j}))}for(b.el.appendChild(b.tie({from:l.PowerSourceElement,to:l.SwitchElement})),b.el.appendChild(b.tie({from:l.SwitchElement,to:l.ConsumerElement})),g=document.getElementById("game"),g.appendChild(b.el),n=function(){var a,b,c,d;for(a=document.getElementsByTagName("path"),c=0,d=a.length;d>c;c+=1)b=a[c],t.isClosed()?b.setAttribute("class","live"):b.setAttribute("class","")},g.addEventListener("click",function(a){var b;b=a.target.parentElement;try{"g"===b.nodeName&&"switch"===b.getAttribute("class")&&l.SwitchElement.useSwitch()}catch(a){}n()}),b.el.outerHTML=b.el.outerHTML,o=document.getElementsByClassName("explanation"),r=0,s=o.length;s>r;r+=1)p=o[r],q=p.firstElementChild,q.appendChild(b.render(l[p.dataset.electronic+"Element"],{bb:[0,0,25,25]})),q.outerHTML=q.outerHTML;return{}});