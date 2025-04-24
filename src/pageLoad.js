// initial page load 


import createRestaurantHomePage from './restaurantHomepage.js';
import contactPage from './contact.js';
import createTabs from './tabs.js';
import createMenuPage from './menu.js';

function initialLoad () {
    createRestaurantHomePage ();
    contactPage();
    createTabs();
    createMenuPage();
};

export default initialLoad();