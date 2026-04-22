const group= document.querySelector(".group");
const output= document.querySelector(".output");

const size=["XS","S","M","L","XL","XXL"];

group.innerHTML=size.map((size)=>
    `<div>
    <input type="radio" id="${size}" value="${size}" name="size">
    <label for="${size}">${size}</label>
    </div>`

).join("");

const Radiobutton=document.querySelectorAll("input");
for(const radioBtn of radioBtn){
    radioBtn.addEventListener("change",ShowOutput)
}

function ShowOutput(e){
  console.log(e);
  if(this.checked){
    document.querySelector(".output").innerHTML=`You selected ${this.value}`
  }  
}