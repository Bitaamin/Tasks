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
        row += `<div class="card shadow-lg" style="width: 18rem;">
                     <img src="${thumbnail}" class="card-img-top" alt="...">
                     <div class="card-body">
                        <h5 class="card-title title">${title}</h5>
                        <p class="discount">${discountPercentage}% OFF</p>
                        <p class="card-text price">$${price}.00</p>
                        <p class="card-text description">${description}</p>
                        <div class="d-flex justify-content-around">
                        <p>5/${rating}</p>
                        <a href="#" class="btn btn-primary">Got it</a>
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
