// Restaurant home page

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    
    // create and append image element

    const image = document.createElement('img');
    image.src = 'https://www.dreamstime.com/royalty-free-stock-image-cozy-restaurant-tables-ready-dinner-image39875776'
    image.height = '250';
    pageContent.appendChild(image);

    // create and append headline element

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to The Odin Restaurant';
    pageContent.appendChild(headline);

    //create and appened 'p' element 

    const copy = document.createElement('p');
    pageContent.textContent = 'A local run family business, serving the best produce for over 30 years';
    pageContent.appendChild(copy)
    content.appendChild(pageContent);

};


export default createRestaurantHomePage;