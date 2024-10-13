let newButton=document.createElement("button");
newButton.innerText="Click Me !";

newButton.style.backgroundColor="red"
newButton.style.color="white"

let Body=document.querySelector("body")
Body.prepend(newButton)

let para=document.querySelector("p")
para.classList.add("newClass")

// console.log(para.setAttribute("class","newClass"))