let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let number =["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"];
let count=0;
function func(){
    count++
    let random = Math.floor(Math.random() * 6);
    let li = document.createElement("li")
    li.innerHTML = `Roll ${count}: <span>${number[random]}</span>`;
    ul.appendChild(li)
}