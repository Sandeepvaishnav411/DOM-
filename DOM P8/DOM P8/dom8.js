// task 1 
let sec1 = document.querySelector(".new");
let heading = document.createElement("h2");
let para = document.createElement("p");
heading.className = "new-head";
para.className = "new-p"
heading.textContent = "This is my Custom Heading";
para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim massa ut";
sec1.style.overflow = "scroll";
sec1.style.border = "4px solid #FF5733 ";
sec1.appendChild(heading);
sec1.appendChild(para);


// task2
let sec2 = document.body;
sec2.style.backgroundImage = "none";

// task3
const navbar = document.getElementsByClassName('collapse')[0];
navbar.style.display = "flex";


