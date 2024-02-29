import { getElement } from './utils.js';

const toggleNav = getElement(".toggle-nav");
const sidebarClose = getElement(".sidebar-close");
const navCenter = getElement(".sidebar-overlay");

toggleNav.addEventListener("click", function () {
    navCenter.classList.add("show");
});

sidebarClose.addEventListener("click", function () {
    navCenter.classList.remove("show");
});