// task 1 change background color
let changebgc = Array.from(document.querySelectorAll(".accordian-wrapper > div > h3"));
changebgc.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
})

// task 2 
let add1 = document.querySelector(".accordian-wrapper");
let div = document.createElement("div");
div.className = "accordian"
let h = document.createElement("h3");
let para = document.createElement("p");
h.innerText = "Skills";
para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";

div.appendChild(h);
div.appendChild(para);
add1.appendChild(div);
para.style.display = "flex"

let changebgcq = Array.from(document.querySelectorAll(".accordian-wrapper > div > h3"));
changebgcq.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
})



