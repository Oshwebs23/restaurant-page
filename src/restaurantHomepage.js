// Restaurant home page

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    
    // create and append image element

    const image = document.createElement('img');
    image.src = 'https://thumbs.dreamstime.com/b/cozy-restaurant-tables-ready-dinner-39875776.jpg?w=992'
    image.height = '450';
    pageContent.appendChild(image);
    content.appendChild(image);

    // create and append headline element

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to The Odin Restaurant';
    pageContent.appendChild(headline);
    content.appendChild(headline);

    //create and appened 'p' element 

    const copy = document.createElement('p');
    pageContent.textContent = 'A local run family business, serving the best produce for over 30 years';
    pageContent.appendChild(copy)
    content.appendChild(pageContent);

};


export default createRestaurantHomePage;