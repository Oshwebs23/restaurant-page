import createRestaurantHomePage from './restaurantHomepage.js';
import contactPage from './contact.js';
import createMenuPage from './menu.js';

function initialLoad () {
    createRestaurantHomePage ();

function reset () {
    document.querySelector("#content").innerHTML = ""

}

document.querySelector("#home").addEventListener("click", () => {
    reset()
    createRestaurantHomePage() 
})

document.querySelector("#contact").addEventListener("click", () => {
    reset()
    contactPage() 
})

document.querySelector("#menu").addEventListener("click", () => {
    reset()
    createMenuPage() 
})

};

export default initialLoad();

