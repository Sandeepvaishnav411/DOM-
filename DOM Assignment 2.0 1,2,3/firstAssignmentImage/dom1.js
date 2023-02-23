// project1 

// task 1 (add list item in first ul)

const ul = document.getElementsByTagName("ul")[0];
let list = document.createElement("li");
list.textContent = "Hire me"
ul.appendChild(list);

// task 1 ( remove social media app)
const removess = document.getElementsByTagName("ul")[1];
removess.style.display = "none";

// task2 ( add placeholder)
const btn = document.querySelector(".search-field > input");
btn.placeholder = "Search My Project";


// task 3 (change text)
let text = Array.from(document.querySelectorAll(".hero-left-section > p > span"));
text[1].innerText = "an Employee";
text[2].innerText = "iNeuron Intelligence Pvt. Ltd.";

//  show social media app
removess.style.display = "flex";

// task 4 (change profile image)
let img = document.querySelector(".hero-right-section > img");
img.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"

// task 5 (add button)
let support = document.querySelector(".hero-right-section-btns");
let x = document.createElement("button");
x.textContent = "Support Me"
support.appendChild(x)















 

