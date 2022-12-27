let catyg = document.getElementById("menu");

let shopData = [];
let category = [];

function fillData(){
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        shopData = [...data.products]
       console.log(shopData);
       cate()
       Catygo()
    })
    .catch((err) => console.log(err));
}

fillData()

function cate(){
    shopData.map((c) => {
        if(!category.includes(c.category)){
            category.push(c.category)
        }
        let row = "";
    row += `<li class= "nav-item">
                <a href="#">${category}</a>
              </li>`;
              catyg.innerHTML = row;
              console.log(row);       

    })
    console.log(category)
}

    


// function Category(caty){
//     if(shopData.Category).map((cat) => {
//         row += `<div class="col">
//         <span>${shopData.Category}</span>
//         </div>`
// 


// shopData.map((c) => {
//     category.push(c.category);
//     console.log(category);
// })
