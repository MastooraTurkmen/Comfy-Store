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

const cart = getElement(".cart")

const init = () => {
  console.log(cart)
}

init()

export const addToCart = (id) => {
  openCart(id)
};
