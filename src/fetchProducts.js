import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    const respons = await fetch(allProductsUrl).catch(error => console.log(error))
    if (respons) {
        return respons;
    }
};

export default fetchProducts;
