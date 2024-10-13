let modebutton=document.querySelector("#mode")
let curmode="light"

modebutton.addEventListener("click",() =>{

    console.log("Change Mode")

    if(curmode === "light"){
       curmode="dark" 
       
       document.querySelector("body").style.backgroundColor="black"
       document.querySelector("body").style.color="white"
    }
    else{
        curmode="light"
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("body").style.color="black"

    }
console.log(curmode)

})