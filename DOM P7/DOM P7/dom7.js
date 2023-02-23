// task 1
let sec1 = Array.from(document.querySelectorAll(".main__languages > a"));
sec1.forEach(hello => {
    if (hello .innerText.includes("2.0")) {
        hello .style.display = "none"
    }
})

// task2
let sec2 = document.querySelector(".main__form-input");
sec2.placeholder = "iNeuron";

// task3
let sec3 = document.querySelector(".main__form");
let h = document.createElement("h1");
h.textContent = "After writing the text submit the form";
h.style.backgroundColor = "#D70040";
h.style.marginTop = "10px"
sec3.appendChild(h);


