// add button 

let btn1 = document.querySelector(".nav-center");
let div = document.createElement("div");
let a = document.createElement("a");
a.className = "btn";
a.textContent = "Pro Subscription";
div.appendChild(a);
btn1.appendChild(div);

// add tags

let china = document.querySelector(".tags-container > div");
let div1 = document.createElement("a");
div1.textContent= "Chinese(7)";
china.appendChild(div1);


// add card 

let card = document.querySelector(".recipe-gallery");
let div2 = document.createElement("div");
div2.className = "card";
div2.innerHTML = "<h1>Add 6th card here</h1>";
card.appendChild(div2);






