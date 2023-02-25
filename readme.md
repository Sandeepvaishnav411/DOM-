# _DOM Assignment - 1_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

## _Task 1_:

### **Solution :**
```JavaScript
const ul = document.getElementsByTagName("ul")[0];
let list = document.createElement("li");
list.textContent = "Hire me"
ul.appendChild(list);
```



## _Task 2_:

### **Solution :**
```JavaScript
const removess = document.getElementsByTagName("ul")[1];
removess.style.display = "none";
```


## _Task 3_:

### **Solution :**
```JavaScript
let text = Array.from(document.querySelectorAll(".hero-left-section > p > span"));
text[1].innerText = "an Employee";
text[2].innerText = "iNeuron Intelligence Pvt. Ltd.";

//  show social media app
removess.style.display = "flex";
```


## _Task 4_:

### **Solution :**
```JavaScript
let img = document.querySelector(".hero-right-section > img");
img.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
```

## _Task 5_:

### **Solution :**
```JavaScript
let support = document.querySelector(".hero-right-section-btns");
let x = document.createElement("button");
x.textContent = "Support Me"
support.appendChild(x)
```
---



# _DOM Assignment - 2_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)


## _Task 1_:

### **Solution :**
```JavaScript
let changebgc = Array.from(document.querySelectorAll(".accordian-wrapper > div > h3"));
changebgc.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
})
```


## _Task 2_:

### **Solution :**
```JavaScript
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

```


----

# _DOM Assignment - 3_

___
### _After Update Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

## _Task 1_:

### **Solution :**
```JavaScript
let sec1 = document.querySelector(".enterName");
sec1.placeholder ="FSJS 2.O";

let sec2 = document.querySelector(".userName");
sec2.placeholder = "FSJS 2.O";

let sec3 = document.querySelector(".enterMail");
sec3.placeholder ="fsjs@ineuron.ai";

let sec4 = document.querySelector(".userEmail");
sec4.placeholder ="fsjs@ineuron.ai";

let sec5 = document.querySelector(".enterMessage");
sec5.placeholder = "Hello World"

let sec6 = document.querySelector(".userMessage");
sec6.placeholder = "Hello World"
```




----

# _DOM Assignment - 4_

___
### _After Update Final Output_ :

![Output Image](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

## _Task 1_:

### **Solution :**
```JavaScript
let clashcard = document.querySelector(".clash-card__unit-stats--barbarian");
clashcard.style.backgroundColor= "#ec9b3b";

let clashcard1 = document.querySelector(".clash-card__unit-stats--archer");
clashcard1.style.backgroundColor ="#ee5487";

let clashcard2 =document.querySelector(".clash-card__unit-stats--giant");
clashcard2.style.backgroundColor ="#f6901a";

let clashcard3 =document.querySelector(".clash-card__unit-stats--goblin");
clashcard3.style.backgroundColor ="#82bb30";

let clashcard4 =document.querySelector(".clash-card__unit-stats--wizard");
clashcard4.style.backgroundColor ="#4facff";

let sec1 = document.querySelector(".one");
sec1.innerText = "The Archer"

let sec2 = document.querySelector(".two");
sec2.innerText = "The goblin"

let sec3 = document.querySelectorAll(".one-third");
section3 = [...sec3];
section3.map((white) => white.style.color = "#fff");

```


----

# _DOM Assignment - 5_

___
### _After Update Final Output_ :

![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

## _Task 1_:

### **Solution :**
```JavaScript
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

```

----

# _DOM Assignment - 6_

___
### _After Update Final Output_ :

![Output Image](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)


## _Task 1_:

### **Solution :**
```JavaScript
//logo
// add logo 

let sec1 = document.querySelector(".logo");
sec1.src = "./assets/ineuron-logo.png";



```

## _Task 2_:

### **Solution :**
```JavaScript
//add price 
let sec2 =document.querySelector(".app_price > span");
sec2.innerText = "$10"
```



----

# _DOM Assignment - 7_

___
### _After Update Final Output_ :

![Output Image](./DOM%20P7/DOM%20P7/ass7.2-after.png)
![Output Image](./DOM%20P7/DOM%20P7/ass7.1-after.png)


## _Task 1_:

### **Solution :**
```JavaScript
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
```



----

# _DOM Assignment - 8_

___
### _After Update Final Output_ :


3.![Output Image](./DOM%20P8/DOM%20P8/ass8.3-after.png)

## _Task 1_:

### **Solution :**
```JavaScript
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


```


----

# _DOM Assignment - 9_

___
### _After Update Final Output_ :

![Output Image](./DOM%20P9/DOM%20P9/ass9.2-before.png)

## _Task 1_:

### **Solution :**
```JavaScript
// task 1
let sec1 = document.querySelector(".caption > h1");
sec1.style.color = "#dc143c";

// task2 
let sec2 = document.querySelector(".add-to-cart");
sec2.style.backgroundColor = "#dc143c";

let sec3 = document.querySelector(".caption > h1");
sec3.style.color = "#000000";

```