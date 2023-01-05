let table = document.getElementById("productList");


function getData() {
    fetch("http://192.168.1.198:4040/product")
        .then(response => response.json())
        .then((data) => {
            console.log(data);

            data.product.map(({ _id, title, price, description, isSpecial }, index) => {
                let row = ""
                row = `<tr>
                <th scope="col">${index + 1}</th>
                <td>${title}</td>
                <td>${description}</td>
                <td>${price}</td>
                <td>
                ${isSpecial ? "Тийм" : "Үгүй"}
                </td>
                <td>
                    <a href="./productNemeh.html?id=${_id}" class="btn btn-secondary text-light">Засах</a>
                    <a onclick="deleteProduct('${_id}')" class="btn btn-danger">Устгах</a>
                </td>
            </tr>`
                table.innerHTML += row;
            })
        })

        .catch((err) => console.log(err));


}
getData()
