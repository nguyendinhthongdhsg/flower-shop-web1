import { formatPrice } from "./format.js";
import jsondb from "./json.js";

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
}

function getDataFlower(dir, header) {
    let html = `<div class="main-item"><h2>${header}</h2>`
    let item = ''
    let length = json[dir].length
    for (let i = 0; i < length; i++) {
        item += `
            <li>
                <a href=${json[dir][i].name.replace(' ', '-')} >
                    <img src="./assets/images/${json[dir][i].id}.jpg" alt="hinh"/>
                    <h3>${json[dir][i].name}</h3>
                    <p>${formatPrice(json[dir][i].price, 'đ')}</p>
                </a>
            </li>`
    }
    html += '<ul class="main-list">' + item + '</ul></div>'
    return html
}

render()
