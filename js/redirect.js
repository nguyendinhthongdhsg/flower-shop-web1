import { formatPrice } from "./format.js";

export function redirect(data) {
    const content = document.getElementById("main-content")
    const html = `<div class="product-detail">
        <div class="product-detail-content">
            <div class="product-detail-img">
                <img src="./assets/images/${data.image}.jpg" alt="${data.name}" />
            </div>
            <div class="product-detail-info">
                <h3>${data.name}</h3>
                <p>Tình trạng 1 - 2 ngày</p>
                <p>${formatPrice(data.price, 'đ')}</p>
            </div>
        </div>
    </div>`
    content.innerHTML = html;
}