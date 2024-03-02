import { formatPrice, getElement } from '../utils.js';
const cartItemDOM = getElement(".cart-items")

const addToCartDOM = ({ id, name, image, price, amount }) => {
    const article = document.createElement("article");
    article.classList.add("cart-item");
    article.setAttribute("data-id", id);

};

export default addToCartDOM;
