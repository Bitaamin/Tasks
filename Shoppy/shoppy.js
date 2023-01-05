let catyg = document.getElementById("menu");
let products = document.getElementById("products");
let searchInput = document.getElementById("search")

let shopData = [];
let category = [];

function fillData() {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            shopData = [...data.products]
            console.log(shopData);
            cate()
            allItems()
        })
        .catch((err) => console.log(err));
}

fillData()

function cate() {
    let row = "";
    shopData.map((c) => {
        if (!category.includes(c.category)) {
            category.push(c.category)
            // console.log(category)
        }
    })
    category.map((Categories) => {
        row += `<li>${Categories}</li>`

        catyg.innerHTML = row
    })
}

function allItems(param) {
    let row = "";
    (param ? param : shopData).map(({ thumbnail, title, discountPercentage, price, description, rating }, index) => {
        row += `<div class="card  col-3">
                    <div class="border rounded">
                    <div class="myImg ratio ratio-4x3">
                       <img src="${thumbnail}">
                    </div>
                    <div class ="p-3">
                       <h5 class="">${title}</h5>
                       <p class="discount">${discountPercentage}% OFF</p>
                       <p>$${price}.00</p>
                       <p class=" description">${description}</p>
                       <div class="d-flex justify-content-around">
                       <p>5/${rating}</p>
                       <a href="#" class="btn btn-primary">Got it</a></div>
                   </div>
                    </div>
                </div>`
        products.innerHTML = row;
        
    })
}

searchInput.addEventListener("input", (searching) => {
    let filterData = shopData.filter(filtering => {
        return filtering.title.includes(searching.target.value) == true})
    console.log(filterData);
    allItems(filterData)
})
