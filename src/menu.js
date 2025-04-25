
const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'The Menu';

    const menuList = document.createElement('ul');
    const menuItem = document.createElement('li');
    menuItem.textContent = 'BLT Sandwich';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Ham and Cheese Sandwich';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Nutella sandwich';
    menuList.appendChild(menuItem);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(menuHeading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);


};

export default createMenuPage;
