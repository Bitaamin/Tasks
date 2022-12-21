let sectionDiv1 = document.getElementById("container1")

let sectionDiv2 = document.getElementById("container2")

let head = document.getElementById("headtitle");
head.innerHTML = "To Do List";

let list = document.getElementById("listTitle");
list.innerHTML = "Жагсаалт";

let btn = document.getElementById("add");
btn.innerHTML = "+ADD";
btn.addEventListener("click", funcAddTask);
function funcAddTask(){
    taskInput.readOnly = true;
    taskInput.value = task.value
}


let input = document.getElementById("task");
input.placeholder = "Та таскаа оруулна уу.";


let listDiv = document.createElement("div");
let listInput = document.createElement("input");
let editBtn = document.createElement("span");
let delBtn = document.createElement("span");

editBtn.innerHTML = "Засах";
editBtn.innerHTML = "Устгах";
// let inputDB = document.createElement("input")
// let 