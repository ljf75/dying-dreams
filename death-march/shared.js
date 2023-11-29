const MAX=5,SIZE=7,HEIGHT=732,WIDTH=412,CELL=412/7,rnd=(r,e)=>Math.floor(Math.random()*(e-r+1))+r,guid=()=>{const r=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()},setOrder=(r=[])=>{const e=rnd(0,1),t=rnd(0,1);return r[0][2]=e?"r":"b",r[1][2]=e?"b":"r",{users:r,turn:r[t][1]}},isValidIndex=(r,e)=>r>=0&&r<7&&e>=0&&e<7,eBoard=(r=[],e=0)=>{const t=[];for(let n=0;n<7;n++)for(let o=0;o<7;o++)r[n][o].v===e&&t.push({type:e,i:n,c:o});return t},isValidBoard=(r=[])=>{const e=eBoard(r,6),t=eBoard(r,7),n=eBoard(r,8),o=eBoard(r,9),l=(()=>{const e=[];for(let t=0;t<7;t++)for(let n=0;n<7;n++){const o=r[t][n].v,l=[[t-1,n,[t-2,n],[[t-2,n-1],[t-3,n],[t-2,n+1]]],[t,n-1,[t,n-2],[[t,n-3],[t-1,n-2],[t+1,n-2]]],[t+1,n,[t+2,n],[[t+3,n],[t+2,n-1],[t+2,n+1]]],[t,n+1,[t,n+2],[[t,n+3],[t-1,n+2],[t+1,n+2]]],[t-2,n,[t-1,n],[[t-1,n-1],[t-1,n+1]]],[t+2,n,[t+1,n],[[t+1,n-1],[t+1,n+1]]],[t,n+2,[t,n+1],[[t-1,n+1],[t+1,n+1]]],[t,n-2,[t,n-1],[[t-1,n-1],[t+1,n-1]]]].filter((r=>isValidIndex(r[2][0],r[2][1]))).filter((e=>r?.[e[0]]?.[e[1]]?.v===o)).map((e=>[e[0],e[1],e[2],e[3].filter((e=>r?.[e[0]]?.[e[1]]?.v===o))])).filter((r=>0!==r[3].length));0!==l.length&&e.push(l)}return e})(),a=(()=>{const e=[];for(let t=0;t<7;t++)for(let n=0;n<7;n++){const o=r[t][n].v,l=[[[[t-1,n],[t,n-1]],[t-1,n-1],[[[t-2,n-1],[t-1,n-2]]]],[[[t+1,n],[t,n-1]],[t+1,n-1],[[t+2,n-1],[t+1,n-2]]],[[[t+1,n],[t,n+1]],[t+1,n+1],[[t+2,n+1],[t+1,n+2]]],[[[t-1,n],[t,n+1]],[t-1,n+1],[[t-2,n+1],[t-1,n+2]]]].filter((r=>isValidIndex(r[1][0],r[1][1]))).filter((e=>r?.[e[0][0][0]]?.[e[0][0][1]]?.v===o&&r?.[e[0][1][0]]?.[e[0][1][1]]?.v===o)).map((e=>[e[0],e[1],e[2].filter((e=>r?.[e[0]]?.[e[1]]?.v===o))])).filter((r=>0!==r[2].length));0!==l.length&&e.push(l)}return e})();return{isValid:0!==[e,t,n,o,l,a].filter((r=>0!==r.length)).length,values:{axe:t,bomb:o,four:a,dynamite:e,rocket:n,three:l}}},genBoard=(r=[])=>{const e=[],t=(r,t,n)=>[e?.[r-2]?.[t]?.v,e?.[r-1]?.[t]?.v].every((r=>r===n))||[e?.[r]?.[t-2]?.v,e?.[r]?.[t-1]?.v].every((r=>r===n)),n=(r,t,n)=>0!==[[e?.[r-1]?.[t]?.v,e?.[r-1]?.[t+1]?.v,e?.[r]?.[t+1]?.v],[e?.[r+1]?.[t]?.v,e?.[r+1]?.[t+1]?.v,e?.[r]?.[t+1]?.v],[e?.[r-1]?.[t]?.v,e?.[r-1]?.[t+1]?.v,e?.[r]?.[t+1]?.v],[e?.[r-1]?.[t]?.v,e?.[r-1]?.[t-1]?.v,e?.[r]?.[t-1]?.v]].map((r=>r.every((r=>r===n)))).filter((r=>r)).length;for(let o=0;o<7;o++){e[o]=[];for(let l=0;l<7;l++){let a=rnd(1,5);for(;;){if(!(t(o,l,a)||n(o,l,a)||r.includes(a)))break;a=rnd(1,5)}e[o][l]={v:a,i:7*o+l,l:Math.round(CELL*l),t:Math.round(CELL*o),p:{i:o,c:l}}}}return e},newBoard=(r=[])=>{let e=genBoard(r);for(;;){if(isValidBoard(e).isValid)break;e=genBoard(r)}return e};