let inputvalue = document.getElementById("container1");

let h1 = document.createElement("h1");
h1.className = "headtitle";

let Input = document.createElement("input");
Input.className = "ClassInput";

let btn = document.createElement("button");

btn.className = "button";

let p1 = document.createElement("p");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
p1.innerHTML = `${year} оны ${month}н сарын ${day}н`;

function setTimeout() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    p1.innerHTML = `${year} оны ${month}н сарын ${day}н`;
    console.log(p1);
    
}




inputvalue.appendChild(h1);
inputvalue.appendChild(p1);
inputvalue.appendChild(Input);
inputvalue.appendChild(btn)
Input.innerHTML = "Таскын нэрээ оруулна уу."
h1.innerHTML = "To Do List";
btn.innerHTML = "+Enter";
// Input.style.border = "2px solid teal";
// Input.style.boxShadow = "1px 2px 3px black"
// btn.style.boxShadow = "1px 2px 3px black"
// btn.style.background = "teal";
inputvalue.style.background = ""


let body2 = document.getElementById("container2");

console.log(Input.values);