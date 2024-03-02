// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

window.addEventListener("DOMContentLoaded", async function () {
    const urlID = window.loading.search;
    try {
        const response = await fetch(`${singleProductUrl}${urlID}`);
        if (response.status >= 200 && response.status <= 299) {
            const product = await response.json();
            const { id, fields } = product;
            productID = id;
            const { name, company, price, colors, description } = fields
            pageTitleDOM.textContent = `Home / ${name}`;
            document.title = `${name.toUpperCase()} | Comfy`;
            imgDOM.src = fields.image[0].thumbnails.large.url;
            companyDOM.textContent = `by ${company}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
            titleDOM.textContent = name;
            colors.forEach((color) => {
                const span = document.createElement('span');
                span.classList.add("product-color");
                span.style.backgroundColor = `${color}`;
                colorsDOM.appendChild(span)
            })

        } else {
            console.log(response.status, response.statusText);
            centerDOM.innerHTML = `
            <div>
            <h3 class="error">sorry, something went wrong</h3>
            <a href="index.html" class="btn">back home</a>
            </div>
            `
        }

    } catch (error) {
        console.log(error)
    }
    loading.style.display = 'none';
});

// show product when page loads

cartBtn.addEventListener('click', function () {
    addToCart()
})