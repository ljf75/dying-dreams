var d=null,f=null,k=!0,l=600,m=600,n=4,p=100,r=[10,25,50,100],t=0,u=2,v=2,w=[1,1.25,1.5,2],x=[1,1.25,1.5,2];function y(a){for(var b=0,c,e,g;b<a.length;b++){if("string"==typeof a[b][0]){e=a[b][0].split(",");c=z[e[0]];for(g=1;g<e.length;g++)c=c[1][e[g]];a[b]=A(B(c),a[b].splice(1))}if(a[b][5])a[b][5](a[b]);y(a[b][1])}}
var z=[[[],[],[0,0],[0,0]],[[],[],[1,0],[0,0,960,540]],[[],[],[2,0,.5],[0,0,16384,2048,1]],[[],[[[0],[],[5,0],[16080,1552,32,32,1],function(a,b,c){9===C(z[8][3][0],z[8][3][1],z[8][3][2],z[8][3][3])&&Math.floor((z[8][3][0]+z[8][3][2]/2)/64)==Math.floor(a[3][0]/64)&&Math.floor((z[8][3][1]+z[8][3][3]/2)/64)==Math.floor(a[3][1]/64)&&1!=a[2][1]&&(l-=10,a[2][1]=1);1!=a[2][1]&&(a[0][0]+=c,.75<=a[0][0]&&(a[0][0]=0,a[2][1]=a[2][1]?0:2))}],["3,0",,,,[15376,1680]],["3,0",,,,[15312,976]],["3,0",,,,[14928,1808]],
    ["3,0",,,,[14672,1808]],["3,0",,,,[14288,1040]],["3,0",,,,[14160,1040]],["3,0",,,,[13136,1616]],["3,0",,,,[12944,912]],["3,0",,,,[12816,912]],["3,0",,,,[12368,1680]],["3,0",,,,[11472,1680]],["3,0",,,,[11024,1616]],["3,0",,,,[10256,1552]],["3,0",,,,[9424,1680]],["3,0",,,,[8592,1808]],["3,0",,,,[7568,1744]],["3,0",,,,[7440,1744]],["3,0",,,,[7952,336]],["3,0",,,,[7824,336]],["3,0",,,,[7696,336]],["3,0",,,,[7568,336]],["3,0",,,,[7440,336]],["3,0",,,,[6544,1744]],["3,0",,,,[6416,1744]],["3,0",,,,[5968,
        1104]],["3,0",,,,[5072,1744]],["3,0",,,,[4560,1296]],["3,0",,,,[848,336]],["3,0",,,,[784,336]]],[0,0],[0,0,0,0],function(){}],[[],[],[6,-1],[,0,16,20,0,1],function(){},function(a){a[3][2]*=a[3][5];a[3][3]*=a[3][5]}],[["",function(){},""],[],[0,0,1],[0,0,0,0,0,1],function(a,b,c){a[0][1](a,c);if(a[0][0]!=a[0][2]){a[1].splice(0,a[0][2].length);for(b=0;b<a[0][0].length;b++){c=A(B(z[4]),[,,[,"abcdefghijklmnopqrstuvwxyz0123456789/:><-+?!', ".indexOf(a[0][0][b])],[(z[4][3][2]*a[3][5]+2)*b,,,,,a[3][5]]]);
    if(c[5])c[5](c);a[1].unshift(c)}a[3][2]=(z[4][3][2]*a[3][5]+2)*b;a[3][3]=z[4][3][3]*a[3][5];a[0][2]=a[0][0]}}],[[0,0,0],[],[0,0],[0,0,0,0],function(a,b,c){a[0][0]-=c;a[3][0]+=a[0][1]*c;a[3][1]+=a[0][2]*c}],[[0,2,2,2,["b","c","d","e"],.4,.5,0,0,-10,0],[],[0,0],[0,0,960,540],function(a,b,c){for(b=0;b<a[1].length;b++)0>=a[1][b][0][0]&&a[1].splice(b--,1);for(b=Math.round(Math.random()*a[0][0]*c);b--;)a[1].push(A(B(z[6]),[[Math.random()*a[0][1],Math.random()*(a[0][8]-a[0][7])+a[0][7],Math.random()*(a[0][10]-
a[0][9])+a[0][9]],,[{b:7,c:8,d:9,e:8}[a[0][4][Math.floor(Math.random()*a[0][4].length)]],0,Math.random()*(a[0][6]-a[0][5])+a[0][5]],[Math.random()*a[3][2],Math.random()*a[3][3],a[0][2],a[0][3]]]))}],[[1,0,0,250,400,0,500,500,0,0],[[[5,6,1,0,0,1],[[[6,0,22,0,5,.5],[],[4,0],[6,22,20,12],function(a,b){a[0][1]=0<b[0][3]?D(a[0][1]+a[0][5],0,a[0][4]):0>b[0][3]?D(a[0][1]-a[0][5],-a[0][4]):a[0][1]?D(Math.abs(a[0][1])-a[0][5],0)*Math.abs(a[0][1])/a[0][1]:0;a[3][0]=a[0][0]+a[0][1];a[0][3]=0<b[0][4]?D(a[0][3]+
    a[0][5],0,a[0][4]):0>b[0][4]?D(a[0][3]-a[0][5],-a[0][4]):a[0][3]?D(Math.abs(a[0][3])-a[0][5],0)*Math.abs(a[0][3])/a[0][3]:0;a[3][1]=a[0][2]+a[0][3]}]],[3,0],[0,1,32,46],function(a,b,c){a[0][3]=b[0][0];a[0][4]=b[0][2]?Math.abs(b[0][2])/b[0][2]:0;b[0][5]&&!b[0][9]&&(a[3][1]+=a[0][0]*a[0][2]*c,0<a[0][0]&&a[3][1]>=a[0][1]||0>a[0][0]&&1>=a[3][1])&&(a[0][0]*=-1)}]],[0,0,1],[15383,200,32,52,1],function(a,b,c){if(E.a[1]||E.d[1])E.a[1]&&(a[0][0]=-1),E.d[1]&&(a[0][0]=1),a[0][1]=D(a[0][1]+a[0][3],0,a[0][3]);
    E.w[1]&&a[0][5]&&(a[0][2]=a[0][4]*w[u],a[0][5]=!1);if(a[0][5])for(a[0][2]=0,a[3][1]=Math.floor(a[3][1]);1===C(a[3][0],a[3][1],a[3][2],0);)a[3][1]++;else{if(1===C(a[3][0],a[3][1]+a[3][3],a[3][2],1))for(a[0][2]=0,a[3][1]=Math.floor(a[3][1]);1===C(a[3][0],a[3][1]+a[3][3],a[3][2],1);)a[3][1]--;else a[3][1]+=a[0][2]*c;a[0][2]-=a[0][6]*(E.s[1]?4:1)*c;a[0][2]=D(a[0][2],-a[0][4],a[0][4])}b=Math.round(a[3][0]+a[0][0]*a[0][1]*(a[0][5]?1:.75)*x[v]*c);1===C(b,a[3][1],a[3][2],a[3][3]-1)?a[0][1]=0:(a[3][0]=b,a[0][1]-=
        a[0][7]*(a[0][5]?3:1)*c,a[0][1]=D(a[0][1],0));a[0][1]||(a[0][0]=0);a[0][5]=1===C(a[3][0],a[3][1]-1,a[3][2],1)?1:0;400>a[3][0]&&(a[0][9]+=c,z[20][3][0]=a[3][0]+10,z[20][3][1]=a[3][1],1>=a[0][9]?(k=!0,F(),z[20][0][0]=500,z[20][3][0]=a[3][0]+10,z[20][3][1]=a[3][1]):(z[20][0][0]=0,1==n&&0==p&&0==l?(a[1][0][2][1]=1,a[1][0][3][1]=0,a[1][0][1][0][2][1]=-1,z[21][0][2]=135):z[19][0][2]=135))}],["5",[,function(a){if(m!=l){var b=l-m+"";m=l;a[1].push(A(B(z[5]),[[b,function(a,b){a[2][2]-=2*b;a[2][2]=D(a[2][2],
    0);a[3][1]+=40*b}],,,[(z[4][3][2]*a[3][5]+2)*(3-b.length),5,,,0,a[3][5]]]))}a[0][0]=l+" coins";a[3][0]=950-(z[4][3][2]*a[3][5]+2)*a[0][0].length}],,[,,0],[,10]],["5",[,function(a){a[0][0]="level "+n}],,[,,0],[10,40]],["5",[,function(a){a[0][0]="exp "+p+"/"+r[n-1]}],,[,,0],[10,10]],[,[[[2,234,13],[["7",[200,.2,2,2,["b","c","d","e"],.5,.75,0,0,-150,-200],,,[0,0,,,0]]],[7,0,.25],[],function(a,b,c){a[0][0]-=.75*c;1<a[0][0]?(G[2][3][a[0][2]][a[0][1]]=0,a[3][1]=64*(a[0][2]+1),a[3][3]=0,a[1][0][0][0]=0):
    0<=a[0][0]?(G[2][3][a[0][2]][a[0][1]]=1,a[3][1]=64*(a[0][2]+1-a[0][0]),a[3][3]=64*a[0][0],a[1][0][0][0]=200):a[0][0]=2;a[1][0][3][2]=a[3][2];a[1][0][3][3]=1},function(a){a[3][0]=64*a[0][1];a[3][1]=64*a[0][2];a[3][2]=a[3][3]=64}],["12,0",[1,230,13],[],[]],["12,0",[2,226,13],[],[]],["12,0",[1,190,13],[],[]],["12,0",[2,188,13],[],[]],["12,0",[1,186,13],[],[]],["12,0",[2,184,13],[],[]],["12,0",[1,177,2],[],[]],["12,0",[2,173,2],[],[]],["12,0",[1,137,2],[],[]],["12,0",[2,134,2],[],[]],["12,0",[1,131,2],
    [],[]],["12,0",[1,85,25],[],[]],["12,0",[2,79,25],[],[]]],[0,0],[0,0,0,0,1]],[[0,0,640],[[[0,0,640],[],[8,0,.5],[10,10,460,250]],["5",["level down!"],,,[130,190,,,,1.25]],["5",["",function(a){a[0][0]="you have reached level "+n}],,,[125,160,,,,.5]],["5",["please downgrade"],,,[130,90,,,,.8]],["5",["jump",function(a){u||(a[2][2]=.5)}],,,[130,50,,,,.8],,function(a){H.push(a)},function(a,b){t&&u&&(t=0,u--,b[0][2]=640,b[0][0]=1)}],["5",["or"],,,[230,50,,,,.8]],["5",["speed",function(a){v||(a[2][2]=.5)}],
    ,,[290,50,,,,.8],,function(a){H.push(a)},function(a,b){t&&v&&(t=0,v--,b[0][2]=640,b[0][0]=1)}]],[7,0,.5],[240,640,480,270],function(a,b,c){a[0][0]?a[3][1]<=a[0][2]?(a[0][1]+=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2]):a[3][1]>=a[0][2]?(a[0][1]-=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2])}],[[],[[[0],[["5",["checkpoint disabled",function(a,b){a[0][3]&&(a[2][2]-=.75*b,a[2][2]=D(a[2][2],0),a[3][1]+=30*b)}],,[,,0],[-110,70,,,,.8]]],[11,0],[13120,320,64,64,1],function(a,b,c){8===
C(z[8][3][0],z[8][3][1],z[8][3][2],z[8][3][3])&&Math.floor((z[8][3][0]+z[8][3][2]/2)/64)==Math.floor(a[3][0]/64)&&1!=a[0][0]&&(a[0][0]=1);1==a[0][0]&&(a[3][3]=D(a[3][3]-100*c,0),a[0][1]||(a[1][0][2][2]=1,a[1][0][0][3]=1,l-=100,a[0][1]=1))}],["14,0",,,,[9536,256]],["14,0",,,,[2240,1664]]],[0,0],[0,0,0,0],function(){}],[[],[[[0],[],[12,0],[15184,208,32,32,1],function(a,b,c){7===C(z[8][3][0],z[8][3][1],z[8][3][2],z[8][3][3])&&Math.floor((z[8][3][0]+z[8][3][2]/2)/64)==Math.floor(a[3][0]/64)&&Math.floor((z[8][3][1]+
    z[8][3][3]/2)/64)==Math.floor(a[3][1]/64)&&1!=a[2][1]&&(p-=5,a[2][1]=1);1!=a[2][1]?(a[0][0]+=c,.75<=a[0][0]&&(a[0][0]=0,a[2][1]=a[2][1]?0:2)):0>=p&&1<n&&(p=r[--n-1],t=1,z[13][0][0]=0,z[13][0][2]=135)}],["15,0",,,,[14288,400]],["15,0",,,,[14096,400]],["15,0",,,,[13904,400]],["15,0",,,,[14160,1680]],["15,0",,,,[12432,400]],["15,0",,,,[12240,400]],["15,0",,,,[12176,1040]],["15,0",,,,[11920,1040]],["15,0",,,,[10704,400]],["15,0",,,,[10576,400]],["15,0",,,,[9936,400]],["15,0",,,,[9744,400]],["15,0",,,
    ,[9360,400]],["15,0",,,,[9168,400]],["15,0",,,,[7504,1808]],["15,0",,,,[6480,272]],["15,0",,,,[6480,1808]],["15,0",,,,[4688,208]],["15,0",,,,[4432,1296]],["15,0",,,,[4112,1744]],["15,0",,,,[3920,1680]],["15,0",,,,[3664,464]],["15,0",,,,[3600,1808]],["15,0",,,,[2384,1744]],["15,0",,,,[2128,528]],["15,0",,,,[2128,1744]],["15,0",,,,[1744,336]],["15,0",,,,[1104,336]],["15,0",,,,[976,336]],["15,0",,,,[912,1168]],["15,0",,,,[848,1168]],["15,0",,,,[784,1104]],["15,0",,,,[720,1104]],["15,0",,,,[656,1104]],
    ["15,0",,,,[592,1168]],["15,0",,,,[528,1168]]],[0,0],[0,0,0,0],function(){}],[,[[,[["7",[100,.4,2,2,["b","c","d","e"],.5,.75,0,0,5,100],,,[0,60,64,4,0]]],[13,0,.5],[15552,0,64,64],function(a,b,c){5===C(z[8][3][0],z[8][3][1],z[8][3][2],z[8][3][3])&&Math.floor((z[8][3][0]+z[8][3][2]/2)/64)==Math.floor(a[3][0]/64)&&Math.floor((z[8][3][1]+z[8][3][3]/2)/64)==Math.floor(a[3][1]/64)&&(z[8][0][1]=z[8][0][2]=z[8][0][3]=z[8][0][4]=0,z[8][2][2]=D(z[8][2][2]-3*c,0),z[17][0][2]=135)}],["16,0",,,,[15616,0]],["16,0",
    ,,,[15104,1536]],["16,0",,,,[15040,1536]],["16,0",,,,[14528,64]],["16,0",,,,[11392,0]],["16,0",,,,[11328,0]],["16,0",,,,[11264,0]],["16,0",,,,[11200,0]],["16,0",,,,[11136,0]],["16,0",,,,[11072,0]],["16,0",,,,[11008,0]],["16,0",,,,[10752,1344]],["16,0",,,,[10304,64]],["16,0",,,,[8896,1472]],["16,0",,,,[8832,1472]],["16,0",,,,[8448,1472]],["16,0",,,,[8384,1472]],["16,0",,,,[8832,0]],["16,0",,,,[8768,0]],["16,0",,,,[8704,0]],["16,0",,,,[8640,0]],["16,0",,,,[8576,0]],["16,0",,,,[8512,0]],["16,0",,,,[8448,
    0]],["16,0",,,,[8384,0]],["16,0",,,,[8320,0]],["16,0",,,,[8256,0]],["16,0",,,,[6208,0]],["16,0",,,,[6144,0]],["16,0",,,,[5696,0]],["16,0",,,,[5632,0]],["16,0",,,,[5440,0]],["16,0",,,,[5376,0]],["16,0",,,,[5312,0]],["16,0",,,,[5120,0]],["16,0",,,,[5056,0]],["16,0",,,,[4992,0]],["16,0",,,,[4544,64]],["16,0",,,,[4480,64]],["16,0",,,,[4416,64]],["16,0",,,,[4352,64]],["16,0",,,,[4288,64]],["16,0",,,,[2880,256]],["16,0",,,,[2816,256]],["16,0",,,,[2752,256]],["16,0",,,,[1472,64]],["16,0",,,,[1408,64]],["16,0",
    ,,,[1344,64]],["16,0",,,,[832,192]],["16,0",,,,[768,192]]],[0,0],[0,0,0,0,1]],[[0,0,640],[[[0,0,640],[],[8,0,.5],[10,10,460,250]],["5",["game over"],,,[30,190,,,,2.75]],["5",["sad, you've died again"],,,[73,140,,,,.8]],["5",["click to restart"],,,[100,50],,function(a){H.push(a)},function(){location.reload()}]],[7,0,.5],[240,640,480,270],function(a,b,c){a[0][0]?a[3][1]<a[0][2]?(a[0][1]+=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2]):a[3][1]>a[0][2]?(a[0][1]-=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=
    0,a[3][1]=a[0][2])}],[[0,0,150],[[[0,0,640],[],[8,0,.5],[10,10,920,280]],["5",["backwards adventure"],,,[30,220,,,,2.75]],["5",["you've died a horrible death, however, you've made a deal"],,,[50,160,,,,.8]],["5",["with a god to revive you in exchange for placing"],,,[100,130,,,,.8]],["5",["everything back to it's original position."],,,[150,100,,,,.8]],["5",["click to start"],,,[340,30],,function(a){H.push(a)},function(a,b){b[0][0]=1;b[0][2]=640;z[9][2][2]=z[10][2][2]=z[11][2][2]=1;k=!1}]],[7,0,.5],
    [10,640,940,300],function(a,b,c){a[0][0]?a[3][1]<a[0][2]?(a[0][1]+=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2]):a[3][1]>a[0][2]?(a[0][1]-=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2])}],[[0,0,640],[[[0,0,640],[],[8,0,.5],[10,10,460,250]],["5",["game over"],,,[30,190,,,,2.75]],["5",["sad, you didn't placed"],,,[73,160,,,,.8]],["5",["everything to it's"],,,[110,130,,,,.8]],["5",["original place"],,,[140,100,,,,.8]],["5",["click to restart"],,,[100,50],,function(a){H.push(a)},function(){location.reload()}]],
    [7,0,.5],[240,640,480,270],function(a,b,c){a[0][0]?a[3][1]<a[0][2]?(a[0][1]+=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2]):a[3][1]>a[0][2]?(a[0][1]-=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2])}],["7",[0,1,5,5,["e"],.5,.9,-50,50,0,100],,,[0,60,5,4,1]],[[0,0,640],[[[0,0,640],[],[8,0,.5],[10,10,460,250]],["5",["you won"],,,[70,190,,,,2.75]],["5",["you have been revived"],,,[75,140,,,,.8]],["5",["click to replay"],,,[100,50],,function(a){H.push(a)},function(){location.reload()}]],
    [7,0,.5],[240,640,480,270],function(a,b,c){a[0][0]?a[3][1]<a[0][2]?(a[0][1]+=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2]):a[3][1]>a[0][2]?(a[0][1]-=1500*c,a[3][1]+=a[0][1]*c):(a[0][1]=0,a[3][1]=a[0][2])}],[[],[],[14,0],[0,0,960,540]]],G=[[1,1,1],[960,540,1,0,function(a){var b=a[6].createLinearGradient(0,0,0,720);b.addColorStop(0,I.d);b.addColorStop(1,I.c);a[6].fillStyle=b;a[6].fillRect(0,0,1280,720);for(var b=0,c;518400>b;b++)c=.05>Math.random()?0:255,a[6].fillStyle="rgba("+c+", "+c+", "+
    c+", "+Math.random()/(c?50:15)+")",a[6].fillRect(b%960,Math.floor(b/960),2,2)}],[256,32,1,"b78.f3.b2.f3.b2.f2.b6.f2.b31.f10.b33.f7.b64.f2.b32.f3.b43.f5.b3.a25.b29.a10.b22.f.b9.a9.b47.f.b10.a9.b28.a7.b36.f2.b3.a35.b24.a5.g.a2.g.a2.g.a2.b17.a6.b6.a4.g.a3.g.a11.b37.a3.b4.a15.b20.f2.b4.a11.b23.a3.b6.a4.b.a2.b3.a2.h.a18.b2.a9.b12.a26.b15.a8.b4.a22.b35.a12.h.a11.b18.a19.b13.f3.b.a3.b.a5.b5.a19.b.a9.b6.a5.h.a2.b8.a37.i.a52.b14.a34.b17.a.j2.a.h.a.h.a9.h.a4.b10.a15.b.a21.b3.a7.b10.a6.b5.a6.j.a.j.a.j.a.j.a.j.a24.i.a19.b2.a34.i.a45.b15.a25.b6.a10.b.a13.b.a5.b4.a3.b25.a40.h.a2.h.a2.i.a2.h.a2.h.a9.h.a.h.a23.h.a2.h.a10.i.a11.h.a2.h.a2.h.a29.b12.a27.b4.a10.b3.a4.h.a6.b2.a5.b33.a45.i.a22.b2.a31.i.a42.b2.a3.b12.a24.h.a3.b3.a9.b5.a9.b4.a3.b33.a46.i.a46.b14.a43.b13.a28.b.a10.b6.a5.b42.a47.i.a25.b2.a18.b18.a32.b2.a6.b17.a34.b52.a49.i.a44.b20.a39.b18.a31.b53.a50.i.a28.b2.a13.b22.a7.b2.a18.b2.a8.b23.a26.b53.a51.i.a42.b8.a3.b12.a6.b4.a27.b24.a23.b45.a2.b7.a52.i.a31.b2.a.g.a.g.a.g.a.g.a3.b4.a8.b10.a4.b5.a.g.a3.g.a3.g.a3.b3.a11.b27.a19.b43.a6.b5.a53.i.a50.j.a.j.a4.b9.a35.b29.a16.b18.a5.b21.a65.i.a59.b8.a22.j.a9.b15.a7.b13.a9.b17.a12.b11.a72.i.a36.h.a3.h.a2.b2.a2.b4.a9.b7.a4.j.a.j.a24.b11.a7.h3.a4.b14.a4.b17.a15.b6.a20.j.a55.i.a6.b4.a4.b8.a20.b12.a7.b7.a29.b11.a6.h2.a3.h2.a3.b14.a2.b17.a85.b6.a5.b5.a.b55.a4.b10.a25.b10.a19.b30.a71.b6.a5.b76.a5.b11.a3.b4.a10.b16.a25.b23.a20.h.a.j.a27.b2.a17.b92.a4.b18.a8.b17.a26.b21.a5.b6.a6.b.a31.b7.a12.b52.f.b29.a5.b8.a4.b42.a27.b19.a3.b17.a27.b13.a3.b48.a5.b4.a5.b11.a5.b8.a8.b5.a7.b33.a4.b5.a27.b16.a4.b19.a24.b30.a3.b.a3.b2.f2.b5.f2.b12.a3.b.a17.b6.a2.b.a8.b5.a10.b2.a12.b27.a8.b5.a29.b11.a9.b9.a.b7.a30.b21.a13.b4.a10.b.a12.j.a16.b.a13.b3.a26.b3.a3.b9.f2.b8.a6.j.a3.b5.a29.b5.a15.b6.a4.b7.a2.b2.a2.b2.a.g.a.b2.a2.g.a2.b2.a10.b19.a15.b2.a36.j.a32.j.a21.b8.a20.b7.a29.i.a20.b.a4.h.a5.b2.a34.b13.a18.b.a12.j.a31.j.a13.j.a27.h.a7.b5.a6.j.a14.b11.a23.h.a.i.a.h.a26.h.a14.j.a20.j.a.j.a.b11.a.j.a.j.a28.b.a23.b.a26.b.a16.b3.a37.b15.a21.i.a11.b2.a7.h.a44.h.a2.b11.a2.h.a7.b.a8.j.a4.b2.a4.b7.a7.b3.a8.b8.a19.b15.a2.b7.a8.j.a3.j.a19.b20.a11.b.a6.i.a7.b9.a21.b.a9.b8.a12.b13.a8.b6.a8.b4.a2.b8.a6.b5.a3.b14.a2.b.a11.b28.a3.b.a14.b.a5.b2.a3.b26.a5.b4.a5.i.a5.b13.a5.b5.a2.b9.a5.b14.a2.b3.a.b17.a4.b11.a5.b16.a3.b28.a6.b37.a3.b2.a3.b277"],
    [16,23,2,"a6.c4.a12.c.e2.c.a6.c3.a.c3.e2.c3.a.c4.e.c.a.c.e6.c.a.c.e.c2.e.c3.e6.c3.e.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c2.e14.c4.e10.c3.a2.c.e10.c.a4.c12.a2.b4.c.d.b2.c.d.b.a.b.c.b.a2.b.c2.b2.c.d.b2.a2.b.c.b.a.b.c.b.c.d2.c.d3.b3.c.b.a.b.d2.e.d.c.e.c.d4.b.c.b.a.b.d2.c.d.c.e2.c.d3.b.e.b.a2.b2.d2.e4.d2.b2.c.b.a2.b.d2.e5.b2.a.b.d.b.a3.b2.e.d.e2.d.b.a2.b.d.b.a3.b.e.d.c.d2.c.b.a2.b.e.b.a3.b.e.d.c.d2.c.b.a2.b3.a.b4.e2.d2.e.b.a2.b.e.b2.a2.b5.e.b.e.b.a.b.d.e.b2.a2.b.c2.d.c.d.b3.a.b2.a2.b2.c3.d2.e.b.a7.b.c2.d2.e2.b.a9.b6.a120"],
    [10,6,1,"a4.b2.a8.b2.a24.b4.a2.b8.a2.b4"],[16,16,3,"a5.c6.a8.c2.a6.c2.a5.c.a10.c.a3.c.a12.c.a2.c.a12.c.a.c.a14.c2.a14.c2.a14.c2.a14.c2.a14.c2.a14.c.a.c.a12.c.a2.c.a12.c.a3.c.a10.c.a5.c2.a6.c2.a8.c6.a10.b6.a8.b4.d2.e2.b2.a5.b.c.b.d6.e2.b.a3.b.c.b.d9.e.b.a2.b.c.b.d9.e.b.a.b.c.b.d4.c2.b.d4.e.b2.c.b.d3.c.d3.b.d3.e.b2.c.b.d3.c.d7.e.b2.c.b.d3.c.d7.e.b2.c.b.d3.c.d3.b.d3.e.b2.c.b.d4.c2.b.d4.e.b.a.b.c.b.d9.e.b.a2.b.c.b.d9.e.b.a3.b.c.b.d6.e2.b.a5.b4.d2.e2.b2.a8.b6.a5"],[4,5,47,"e.a2.e2.a2.e6.a2.e.a.e2.a.e3.a.e.a2.e4.a.e.a2.e4.a2.e4.a3.e.a3.e.a4.e6.a.e.a2.e2.a2.e2.a2.e4.a.e5.a3.e3.a.e.a3.e5.a3.e.a3.e3.a.e.a3.e4.a.e4.a2.e2.a.e3.a4.e4.a2.e2.a2.e6.a2.e2.a2.e.a.e.a3.e.a3.e.a3.e.a3.e.a3.e2.a.e.a2.e.a3.e.a3.e.a3.e2.a2.e2.a.e.a.e2.a2.e.a.e.a.e.a2.e4.a.e.a3.e.a3.e.a3.e.a3.e.a2.e2.a2.e2.a2.e6.a2.e2.a2.e2.a2.e2.a.e4.a.e2.a2.e.a.e2.a.e.a2.e2.a2.e2.a2.e.a.e2.a.e.a3.e.a3.e3.a.e.a2.e4.a2.e4.a.e3.a2.e2.a2.e.a.e2.a.e.a2.e2.a.e.a.e3.a.e.a2.e4.a.e3.a4.e.a.e2.a.e.a4.e3.a.e.a3.e.a3.e.a3.e.a2.e3.a.e5.a2.e2.a2.e2.a2.e2.a2.e.a.e2.a.e.a2.e2.a2.e2.a2.e2.a2.e.a.e2.a.e5.a2.e2.a2.e2.a2.e2.a2.e.a.e2.a2.e2.a.e.a2.e2.a2.e.a.e.a3.e.a2.e3.a.e.a.e.a.e.a.e.a.e4.a.e.a4.e.a4.e5.a.e2.a.e.a2.e2.a2.e2.a2.e.a.e2.a3.e.a3.e.a3.e.a2.e2.a3.e.a.e4.a.e.a4.e.a.e.a2.e.a.e2.a.e3.a4.e.a.e3.a3.e4.a4.e.a3.e.a.e4.a2.e2.a2.e4.a4.e4.a.e.a3.e4.a.e2.a.e.a2.e4.a.e.a4.e3.a.e.a3.e.a4.e.a4.e10.a2.e6.a2.e8.a4.e.a.e4.a2.e.a.e2.a.e.a4.e.a4.e.a4.e.a9.e.a7.e.a6.e.a4.e.a4.e.a2.e.a2.e.a6.e.a2.e.a2.e.a4.e.a4.e.a8.e3.a14.e.a2.e3.a2.e.a8.e.a7.e.a.e.a2.e.a.e2.a2.e.a7.e.a3.e.a3.e.a15.e.a3.e.a3.e.a3.e.a14"],
    [1,1,1,"b"],[1,1,1,"c"],[1,1,1,"d"],[1,1,1,"e"],[32,32,1,"a14.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a30.b2.a4.c.d5.a20.b2.c2.d.c.d5.e.d.e3.a16.b2.c3.d.c.d5.e.d.e2.a16.b2.c2.d.c.d5.e.d.e3.a16.b2.c3.d.c.d5.e.d.e2.a16.b2.c2.d.c.d5.e.d.e3.a16.b2.c3.d.c.d5.e.d.e2.a16.b2.c2.d.c.d5.e.d.e3.a16.b2.c3.d.c.d5.e.d.e2.a16.b2.c2.d.c.d5.e.d.e3.a16.b2.c3.d.a6.e.d.e2.a66"],[16,16,3,"a7.c2.a13.c.a2.c.a11.c.a4.c.a9.c.a6.c.a7.c.a8.c.a5.c.a10.c.a3.c.a12.c.a.c.a14.c2.a14.c.a.c.a12.c.a3.c.a10.c.a5.c.a8.c.a7.c.a6.c.a9.c.a4.c.a11.c.a2.c.a13.c2.a14.c.e.a13.c.d2.e.a11.c.d4.e.a9.c.d6.e.a7.b.d8.e.a5.b.d4.c2.b.d3.e.a3.b.d4.c.d7.e.a.b.d5.c2.b.d6.e.b.d5.c.d8.e.a.b.d5.c2.b.d4.e.a3.b.d10.e.a5.b.d8.e.a7.c.d6.e.a9.c.d4.e.a11.c.d2.e.a13.c.e.a7"],
    [32,32,1,"c32.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c2.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d2.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d33.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d.c.d97.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d33.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e2.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d2.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e2.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e33.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e233.d.e.d.e.d.e.d.e.d.e.d.e12.d.e.d.e4.d.e14.d.e.d.e.d.e.d.e.d.e6.d.e4.d.e.d.e.d.e.d.e.d.e14.d.e.d.e5.d.e.d.e.d.e.d.e.d.e.d.e.d.e.d.e3.d.e.d.e.d2.e.d.e.d.e.d.e.d.e.d9.e.d.e.d.e.d.e.d.e.d.e.d.e.c2.d2.e.d.e.d3.c2.a6.c2.d4.e.d.e.d.e.d.c2.a3.c2.d2.c2.a13.c2.d.e2.d2.c.a26.c4.a4"],
    [960,540,1,0,function(a){a[6].fillStyle="rgba(255, 255, 255, 0.1)";for(var b=0;540>b;b+=4)a[6].fillRect(0,b,960,1)}]],I={a:"transparent",b:"#232d32",c:"#386265",d:"#75a493",e:"#c0dbb4",f:"transparent",X:"#00f"},J="abcdefghij".split("");function K(){window.rFA(K);d=Date.now();if(!f||d-f>1E3/15)F(),f=d;L=(d-f)/1E3;f=d;M=Math.round(-z[8][3][0]+480);N=Math.round(-z[8][3][1]+270);O(z,z[0]);P(z,0,0)}function O(a,b){for(var c=a.length;c--;){if(a[c][4])a[c][4](a[c],b,L);O(a[c][1],a[c])}}
function P(a,b,c){for(var e=0;e<a.length;e++){var g=b+a[e][3][0]+M*(a[e][3][4]||0),q=c+a[e][3][1]+N*(a[e][3][4]||0);Q.save();void 0!==a[e][2][2]&&(Q.globalAlpha=a[e][2][2]);Q.drawImage(G[a[e][2][0]][5],G[a[e][2][0]][0]*Math.floor(D(a[e][2][1],0,G[a[e][2][0]][2])),0,G[a[e][2][0]][0],G[a[e][2][0]][1],g,q,a[e][3][2],a[e][3][3]);P(a[e][1],g,q);Q.restore()}}var H=[],E={w:[[87,38],0],a:[[65,37],0],s:[[83,40],0],d:[[68,39],0]};function F(){for(var a in E)E[a][1]=0}
function R(a,b,c,e,g,q,U){for(var h=0;h<c.length;h++){if(0<=H.indexOf(c[h])&&g+c[h][3][0]<=a&&g+c[h][3][0]+c[h][3][2]>=a&&q+c[h][3][1]<=b&&q+c[h][3][1]+c[h][3][3]>=b)c[h][6](c[h],e);R(a,b,c[h][1],c[h],g+c[h][3][0],q+c[h][3][1],U+","+h)}}function S(a){a=a.split(".");var b,c,e="";for(b in a)for(c=isNaN(parseInt(a[b].substr(1),10))?1:parseInt(a[b].substr(1),10);c--;)e+=a[b][0];return e}function D(a,b,c){a=a<b?b:a;return c?a>c?c:a:a}
function C(a,b,c,e){return T(a,b)||T(a+c,b)||T(a,b+e)||T(a+c,b+e)||T(a+c/2,b+e/2)}function T(a,b){var c=Math.floor(b/64),e=Math.floor(a/64);return 0>e||0>c||c>=G[2][3].length||e>=G[2][3][0].length?0:G[2][3][c][e]}
function B(a){if(!a||"object"!=typeof a||"[object Function]"===Object.prototype.toString.call(a))return a;if(a.nodeType&&"cloneNode"in a)return a.cloneNode(!0);if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return new RegExp(a);var b,c,e;if(a instanceof Array)for(b=[],c=0,e=a.length;c<e;++c)c in a&&b.push(B(a[c]));else b=a.constructor?new a.constructor:{};c=B;var g,q={};for(g in a)e=a[g],g in b&&(b[g]===e||g in q&&q[g]===e)||(b[g]=c?c(e):e);return b}
function A(a,b){for(var c=0;c<b.length;c++)if(void 0!==b[c])if("object"!=typeof b[c])a[c]=b[c];else for(var e=0;e<b[c].length;e++)void 0!==b[c][e]&&(a[c][e]=b[c][e]);return a}var V,Q,L,M,N;
window.onload=function(){V=document.getElementById("c");Q=V.getContext("2d");Q.mozImageSmoothingEnabled=Q.webkitImageSmoothingEnabled=Q.msImageSmoothingEnabled=Q.imageSmoothingEnabled=!1;Q.scale(1,-1);Q.translate(0,-540);document.body.addEventListener("keydown",function(a){if(!k)for(var b in E)-1!==E[b][0].indexOf(a.which)&&(E[b][1]=D(++E[b][1],0,2))});document.body.addEventListener("keyup",function(a){if(!k)for(var b in E)-1!==E[b][0].indexOf(a.which)&&(E[b][1]=0)});V.addEventListener("click",function(a){R(a.pageX-
    V.offsetLeft,540-a.pageY+V.offsetTop,z,[],0,0,"")});for(var a=G.length,b,c,e,g;a--;){G[a][5]=document.createElement("canvas");G[a][5].width=G[a][0]*G[a][2];G[a][5].height=G[a][1];G[a][6]=G[a][5].getContext("2d");if(G[a][3]){c=[];G[a][3]=S(G[a][3]);for(b=0;b<G[a][3].length;b++)e=b%G[a][0]+Math.floor(b/(G[a][0]*G[a][1]))*G[a][0],g=Math.floor(b%(G[a][0]*G[a][1])/G[a][0]),e||(c[g]=[]),c[g][e]=J.indexOf(G[a][3][b]),G[a][6].fillStyle=I[G[a][3][b]],G[a][6].fillRect(e,g,1,1);G[a][3]=c}if(G[a][4])G[a][4](G[a]);
    document.getElementById("l").style.top="-9999px"}y(z);K()};window.rFA=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};