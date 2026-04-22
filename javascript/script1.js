//////////DOM/////////

//Onclik Event
/*function Clickme(){
    //document.write('Hi anne, how are you?')  
    document.getElementById('ID1').innerHTML=Date()
}

//Traversing
//1.Child element
let parentdiv=document.querySelector(".parentdiv")
console.log(parentdiv.parentElementChild);*/

//2.sibling element
/*let Current=document.querySelector(".middlechild")
console.log(Current.nextElementSibling);*/

//////Manipulating Element//////
//Create element

let div=document.createElement('div');
div.id="anneid";
div.className="anne";
/*div.innerHTML= "<p>This is p tag</p>";*/
let text= document.createTextNode("Inner text into the div");
div.appendChild(text)
let h1= document.createElement("h1");
h1.textContent="Inner h1 tag";
div.appendChild(h1)
document.body.appendChild(div)

let ul= document.createElement("ul");
ul.id="menu";
let li1= document.createElement("li");
li1.textContent="Home" ; 
ul.appendChild(li1);

document.body.appendChild(ul);

let menu= document.querySelector("#menu")
function createElement(name){
    let li= document.createElement("li");
    li.textContent=name;
    return li;
}
menu.appendChild(createElement("anne"));
menu.appendChild(createElement("asrufa"));

//change

var isyellow=false;
var body=document.querySelector("body");

setInterval(function(){
    if(isyellow){
        body.style.background='red';
    } else{
        body.style.background='yellow';
        
    }
    isyellow=!isyellow;
},1000);

