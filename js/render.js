import { formatPrice } from "./format.js";
import jsondb from "./json.js";
import { redirect } from "./redirect.js";

let json = jsondb();

function render() {
    const mainContent = document.getElementById('main-content')

    if (localStorage.getItem('data')) {
        json = JSON.parse(localStorage.getItem('data'))
    }
    else {
        localStorage.setItem('data', JSON.stringify(json))
    }
    let html = getDataFlower('hoabo', 'Hoa bó')
    mainContent.innerHTML = html
    html += getDataFlower('binhhoa', 'Bình Hoa')
    mainContent.innerHTML = html
    mapItemProduct()
}

function mapItemProduct() {
    const list = document.querySelectorAll(".item-redirect")
    for (const item of list) {
        item.onclick = () => {
            redirect({
                name: item.getAttribute('data-name'),
                price: item.getAttribute('data-price'),
                dir: item.getAttribute('data-dir'),
                image: item.getAttribute('image'),
            })
        }
    }
}

function getDataFlower(dir, header) {
    let html = `<div class="main-item"><h2>${header}</h2>`
    let item = ''
    let length = json[dir].length
    for (let i = 0; i < length; i++) {
        item += `
            <li>
                <div class="item-redirect" data-name="${json[dir][i].name}" data-dir="${dir}" image="${json[dir][i].id}"  data-price="${json[dir][i].price}">
                    <img src="./assets/images/${json[dir][i].id}.jpg" alt="hinh"/>
                    <h3>${json[dir][i].name}</h3>
                    <p>${formatPrice(json[dir][i].price, 'đ')}</p>
                </div>
            </li>`
    }
    html += '<ul class="main-list">' + item + '</ul></div>'
    return html
}



render()
