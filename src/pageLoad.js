// initial page load 


import createRestaurantHomePage from './restaurantHomepage.js';
import contactPage from './contact.js';


function initialLoad () {
    createRestaurantHomePage ();
    contactPage();
};

export default initialLoad();