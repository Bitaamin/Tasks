
// let profile = {};
let div = document.getElementsByClassName("profile")
let image = document.getElementsByTagName("img");
let mail = document.createElement("p")
let phone = document.createElement("p")
let lname = document.createElement("p")
let fname = document.createElement("p")
let gender = document.createElement("p")
let adress = document.createElement("p")


fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);


        image[0].src = `${data.results[0].picture.large}`;
        fname.innerHTML = `${data.results[0].name}`
    })




