import { getStorageItem, setStorageItem } from './utils.js';
let store = [];

const setupStore = (products) => {
    store = products.map((product) => {
        const {
            id,
            field: {
                colors, company, featured, price, name, image: img
            },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, colors, company, featured, price, name, image }
    });
};
const findProduct = () => { };
export { store, setupStore, findProduct };
