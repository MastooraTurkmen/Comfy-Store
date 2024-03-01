import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = getElement('.input-form');
    const nameInput = getElement(".search-input");
    form.addEventListener('keyup', function () {
        const value = nameInput.value;
        if (value) {
            const newStore = value.filter((product) => {
                let { name } = product;
                name.toLowerCase();
                if (name.startWith(value)) {
                    return product;
                }
            });

            if (newStore.length < 1) {
                const product = getElement(".products-container");
                product.innerHTML = `sorry, no products matched your search`
            }
            display(newStore, getElement(".products-container"))
        } else {
            display(store, getElement(".products-container"));
        }
    })
};

export default setupSearch;
