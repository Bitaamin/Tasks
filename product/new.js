let btnEl = document.getElementById("btn")
let titleEl = document.getElementById("")
let catEl = document.getElementById("")
let priceEl = document.getElementById("")
let fileEl = document.getElementById("")


let radio = document.getElementsByName("isSpecial")
let checkMul = document.getElementsByName("days")

btnEl.addEventListener("click", onSave);

function onSave(event) {

    let ispe = false;
    let daysStr = "";

    for (let i = 0; i < radio.length; i++) {
        console.log(radio[i]);
        if (radio[i].checked) {
            ispe == radio[i].value == "yes" ? true : false
        }
    }


    fetch("http://192.168.1.198:4040/product", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            title: titleEl.value,
            category: catEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: true,
            days: "",

        })
    });
}
