import { getElement } from '../utils.js';
import display from '../displayProducts.js';
import { store } from '../store.js';

const setupCompanies = (store) => {
    const companies = ['all', new Set(store.map((product) => product.company))];
    const companiesDOM = getElement(".companies");
    companiesDOM.innerHTML = companies.map((company) => {
        return `<button class="company-btn">${company}</button>`
    })
};

companiesDOM.addEventListener('click', function (e) {
    const newCompany = e.target
    if (newCompany.classList.contains("company-btn")) {
        let newStore = [];
        if (newCompany.textContent === "all") {
            newStore = [...store];
        } else {
            newStore.filter((product) => product.company === e.target.textContent)
        }
        display(newStore, getElement(".products-container"));
    }
})

export default setupCompanies;
