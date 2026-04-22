const Input=document.querySelector("#myinput");
myinput.addEventListener("focus",(e)=>{
    e.target.style.backgroundColor="yellow",
    e.target.style.color="black",
    console.log("focused")
})

myinput.addEventListener("blur",(e)=>{
    e.target.style.backgroundColor="red",
    e.target.style.color="yellow"
    
})

