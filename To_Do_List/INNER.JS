let sectionDiv1 = document.getElementById("container1")

let sectionDiv2 = document.getElementById("container2")

let head = document.getElementById("headtitle");
head.innerHTML = "To Do List";

let list = document.getElementById("listTitle");
list.innerHTML = "Жагсаалт";

let btn = document.getElementById("add");
btn.innerHTML = "+ADD";
btn.addEventListener("click", funcAddTask);



let input = document.getElementById("task");
input.placeholder = "Та таскаа оруулна уу.";

function funcAddTask(){
    let listDiv = document.createElement("div");
    listDiv.className = "taskCheck";

    let listInput = document.createElement("input");
    listInput.className = "BottomInput"
    listInput.readOnly = true;
    listInput.value = input.value;

    let iconsDiv = document.createElement("div");
    iconsDiv.className = "icons"

    let editBtn = document.createElement("image");
    editBtn.className = "editI"
    // editBtn.innerHTML = "Засах";
    editBtn.addEventListener("click", function () {
        listInput.readOnly = !listInput.readOnly
    });

    let delBtn = document.createElement("image");
    // delBtn.innerHTML = "Устгах";
    delBtn.addEventListener("click", function () {
        sectionDiv2.removeChild(listDiv)
    });

    iconsDiv.appendChild(editBtn);
    iconsDiv.appendChild(delBtn);

    listDiv.appendChild(listInput);
    listDiv.appendChild(iconsDiv);

    sectionDiv2.appendChild(listDiv);

    
}

// let inputDB = document.createElement("input")
// let 