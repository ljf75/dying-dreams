let state={ingredients:{a:{label:"Space Juice",inv:0,price:1},b:{label:"Meteorite on the Rocks",inv:0,price:4},c:{label:"Stardust Ice Cream",inv:0,price:9}},money:15,debt:150,interest:0,difficulty:"short",day:0,message:"",customersToday:0,customersScheduled:2};function buy(e,t){let a=t*state.ingredients[e].price;a<=state.money?(state.ingredients[e].inv=state.ingredients[e].inv+t,setMessage(`${t} ${state.ingredients[e].label} purchased`),updateStock(e),state.money=state.money-a,updateMoney()):setMessage(`Not enough money to buy ${t} ${state.ingredients[e].label}.`,"red")}function use(e,t,a){state.ingredients[e].inv>=t?(state.ingredients[e].inv=state.ingredients[e].inv-t,setMessage(`${t} ${state.ingredients[e].label} used`),state.money=parseInt(state.money)+parseInt(a),updateStock(e),updateMoney()):setMessage("Not enough in stock","red")}function updateStock(e){document.querySelector(`#${e}-stock`).innerHTML=`<span class="${e}">${state.ingredients[e].label}</span>: ${state.ingredients[e].inv}`}function serve(e){let t=document.querySelector(`#${e}`),a=t.attributes.price.value,n=t.attributes.requesting.value;state.ingredients[n].inv>0?(use(n,1,a),t.remove()):setMessage(`You don't have any ${state.ingredients[n].label} to sell`,"red"),checkEOD()}function dismiss(e){let t=document.querySelector(`#${e}`);t.attributes.requesting.value;t.remove(),checkEOD()}function setMessage(e,t="green"){state.message=e,document.querySelector("#message").innerHTML=`${e}`,document.querySelector("#message").className=`message ${t}`}function updateMoney(){document.querySelector("#money").innerHTML=state.money}function updateDebt(){document.querySelector("#debtAmount").innerHTML=state.debt}function payDebt(){const e=parseInt(document.querySelector("#paymentAmount").value);0===state.ingredients.a.inv&&0===state.ingredients.b.inv&&0===state.ingredients.c.inv&&e<state.debt&&e>=state.money-1?setMessage("You can't do that right now","red"):e<=state.money?(state.debt=state.debt-e,state.money=state.money-e,updateMoney(),updateDebt(),closeDialog(),state.debt<=0&&(state.debt=0,document.querySelector(".dialog-background").className="dialog-background",document.querySelector("#victory").className="dialog-open center",document.querySelector(".twitterbtn").focus(),document.querySelector("#victoryMessage").innerHTML=`You have paid off your debt to the Function keys in ${state.day} days!`)):setMessage("You don't have enough money to do that","red")}function closeDialog(){document.querySelector(".dialog-background").className="dialog-background hidden",document.querySelector("#debt").className="dialog-open center hidden",document.querySelector("#victory").className="dialog-open center hidden",document.querySelector("#buy-a").focus()}function openDialog(){document.querySelector(".dialog-background").className="dialog-background",document.querySelector("#debt").className="dialog-open center",document.querySelector("#paymentAmount").focus()}function checkEOD(){0===document.querySelectorAll(".seat").length&&state.customersToday>=state.customersScheduled&&(setMessage("Day Ended!"),document.querySelector("#purchasing").className="")}function newDay(){document.querySelector("#purchasing").className="hidden",state.day=state.day+1,state.debt=Math.floor(state.interest*parseInt(state.debt)),updateDebt(),state.customersToday=0;const e=Math.min(10,Math.max(-5,Math.ceil((Math.random()-.35)*state.customersScheduled)));state.customersScheduled=1===state.day?2:Math.min(50,Math.max(4,state.customersScheduled+e)),setMessage(`A new day has started! You will have ${state.customersScheduled} customers today!`),updateDay(),updatePricing("a"),updatePricing("b"),updatePricing("c"),startCustomers()}function updateDay(){document.querySelector("#day").innerHTML=state.day}async function startCustomers(){let e=1e3*Math.max(4,Math.min(1.5,Math.floor(5*Math.random())));await delay(e),seatCustomer();let t=parseInt(state.ingredients.a.inv)+parseInt(state.ingredients.b.inv)+parseInt(state.ingredients.c.inv);state.customersScheduled>state.customersToday&&0!=t?startCustomers():0==t&&(state.customersToday=state.customersScheduled)}function delay(e){return new Promise((t=>{setTimeout((()=>{t("resolved")}),e)}))}function generateCustomer(){let e=Math.random(),t=state.day>=5?["a","a","a","a","a","a","b","b","b","b","c","c"][Math.floor(12*Math.random())]:["a","a","a","a","a","a","b","b"][Math.floor(8*Math.random())];if(e<=.01&&state.day>=3){let e=["c","h","e","a","p"];const a=.5;return{letter:e[Math.floor(Math.random()*e.length)],multiplier:a,requesting:t,phrase:getPhrase()}}if(e<=.25){let e=["b","a","s","i","c","a","f"];const a=1.05;return{letter:e[Math.floor(Math.random()*e.length)],multiplier:a,requesting:t,phrase:getPhrase()}}if(e<=.76){let e=["a","v","e","r","a","g","e","j","o","e","u","k","n","o","w"];const a=1.25;return{letter:e[Math.floor(Math.random()*e.length)],multiplier:a,requesting:t,phrase:getPhrase()}}if(e<=.98){let e=["x","y","z","q","x","y","z","q","x","y","z","q","x","y","z","q","~"];const a=2;return{letter:e[Math.floor(Math.random()*e.length)],multiplier:a,requesting:t,phrase:getPhrase()}}{let e=["T","B","T","I","G","R"];const a=5;return{letter:e[Math.floor(Math.random()*e.length)],multiplier:a,requesting:t,phrase:getPhrase()}}}function getPhrase(){const e=[" and make it salty!"," shaken, not stirred."," please!"," with extra pizaazz!",".",".","!","!","... I think..."," - and quick!",", but no rush."," - put it on my tab!"," before I head home."," - it's delicious!"," to feel alive",". After all, I'm not driving!"," in a space cone, please."," with a side of moon rocks."," in a rainbow dish."," and a dog treat for Luna."];return e[Math.min(e.length-1,Math.floor(Math.random()*e.length))]}function seatCustomer(){const e=document.querySelectorAll(".seat");if(state.customersToday=parseInt(state.customersToday)+1,e.length>=3)setMessage("All seats filled! Customer left!","red");else{const e=state.customersToday;let t=generateCustomer();document.querySelector("#customers").innerHTML=document.querySelector("#customers").innerHTML+`\n    <div class="seat" id="seat-${e}" requesting="${t.requesting}" price="${Math.max(1,Math.round(t.multiplier*state.ingredients[t.requesting].price))}">\n      <div class="flex">\n      <div>\n      <div class="key">\n      ${t.letter}\n      </div>\n      </div>\n      <div class="quote grow">\n          <p>"I want <span class="${t.requesting}">${state.ingredients[t.requesting].label}</span> for $${Math.max(1,Math.round(t.multiplier*state.ingredients[t.requesting].price))}${t.phrase}"</p>\n      </div>\n      </div>\n      <div class="btnGroupSm">\n      <button onclick="serve('seat-${e}')" class="servebtn btn">Serve</button>\n      <button onclick="dismiss('seat-${e}')" class="dismissbtn btn">Dismiss</button>\n      </div>\n    </div>`,setMessage("A New Customer has arrived","green")}}function updatePricing(e){const t=Math.min(Math.random()-.33,.35);return state.ingredients[e].price=Math.max(state.ingredients[e].price+Math.round(state.ingredients[e].price*t),2),document.querySelector(`#buy-${e}`).innerHTML=`Buy 1 ${state.ingredients[e].label} ($${state.ingredients[e].price})`,state.ingredients[e].price}function shareVictory(){window.open(`https://twitter.com/intent/tweet?text=I%20just%20beat%20Spacebar%27s%20Space%20bar%20on%20${state.difficulty}%20in%20${state.day}%20days%21%20Can%20you%20finish%20faster%3F%20%0A%0ACreated%20by%20%40terabytetiger%0A%0Ahttps%3A%2F%2Fspacebar.terabytetiger.com%2F`,"newwindow","width=500, height=300, top="+(window.innerHeight-300)/2+", left="+(window.innerWidth-500)/2)}function mounted(){const e=document.querySelector("#buy-a"),t=document.querySelector("#buy-b"),a=document.querySelector("#buy-c");e.innerHTML=`Buy 1 <span class="a">${state.ingredients.a.label}</span> ($${state.ingredients.a.price})`,t.innerHTML=`Buy 1 <span class="b">${state.ingredients.b.label}</span> ($${state.ingredients.b.price})`,a.innerHTML=`Buy 1 <span class="c">${state.ingredients.c.label}</span> ($${state.ingredients.c.price})`;const n=window.location.search,s=new URLSearchParams(n);s.has("i")&&(state.interest=.01*parseInt(s.get("i"))+1),s.has("d")&&(state.debt=parseInt(s.get("d"))),s.has("m")&&(state.money=parseInt(s.get("m"))),s.has("f")&&(state.difficulty=s.get("f"))}mounted(),updateMoney(),updateDebt(),updateStock("a"),updateStock("b"),updateStock("c");