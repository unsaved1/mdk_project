import slider from "./modules/slider";
import tabs from "./modules/tabs";
import modals from "./modules/modals";
import hamburger from "./modules/hamburger";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    slider();
    tabs('.produce__btn', '.produce__btns', '.produce__items');
    modals();
    hamburger();
})