// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

// const cartItemsCount = getElement(".cart-items-counts");
const cartItems = getElement(".cart-items");
const cartTotal = getElement(".cart-total");

let cart = getElement(".cart")

export const addToCart = (id) => {
  let item = cart.find((cartItems) => cartItems.id === id);
  if (!item) {
    let product = findProduct(id);
    // add item to the
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM
    addToCartDOM(product);
  } else {

  }
  displayCartItemCount();
  displayCartTotal();
  setStorageItem('cart', cart);
  openCart();

};

displayCartItemCount(() => {
  const amount = cart.reduce((total, cartItem) => {
    return total += cartItem.amount;
  }, 0)
});

const init = () => {
  console.log(cart)
}

init()