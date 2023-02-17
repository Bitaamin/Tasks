let menus = [{ id: 1, name: "Home", href: "#" },
{ id: 2, name: "Contact", href: "#" },
{ id: 3, name: "Services", href: "#" },
{ id: 4, name: "Blog", href: "#" }]
let ulEl = document.createElement("ul");
let container = document.getElementById("container");
for (i = 0; i < menus.length; i++) {
    let liEl = document.createElement("li");
    let aEl = document.createElement("a")
    aEl.innerHTML = menus[i].name;
    aEl.href = menus[i].href;
    liEl.appendChild(aEl);
    console.log(liEl);
    ulEl.appendChild(liEl);
}
container.appendChild(ulEl);
document.querySelectorAll("#container")[0].style.color = "orange";
document.querySelectorAll("#container")[0].style.cursor = "pointer";
document.querySelectorAll("#container")[0].style.textDecoration = "none";
document.querySelectorAll("#container")[0].style.display = "flex";
document.querySelectorAll("#container")[0].style.flexDirection = ""





div.title = menus[i].h1;
div.appendChild(img);
console.log(liEl);
ulEl.appendChild(liEl);
    // }
    // container.appendChild(ulEl);