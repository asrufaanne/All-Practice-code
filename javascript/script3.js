//////CREATE ELEMENT////

/*let div= document.createElement('div');
div.innerHTML='<p>Hi, I am asrufa anne </p>';
document.body.appendChild(div);*/

let div=document.createElement('div');
div.id='java';
div.ClassName='element';

let text=document.createTextNode('create element etc etc');
div.appendChild(text);

document.body.appendChild(div);

const ul=document.querySelector('#list');

let li=document.createElement('li');
li.textContent='Home';
ul.appendChild(li);

/*let ul = document.getElementById("list");

let li = document.createElement("li");
li.textContent = "Item 1";

ul.appendChild(li);*/