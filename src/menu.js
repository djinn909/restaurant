const createMenu =() => {

const menu = document.createElement('div');
menu.classList.add('menu');
const menuHead= document.createElement('h1');

menu.appendChild(createItem( "Chicken Curry", "Chicken, Onions, Cream")); 

menu.appendChild(createItem( "Lamb Curry", "Lamb, Onions, Cream"));

menu.appendChild(createItem( "Chicken Badami", "Chicken, Onions, Cream, Almonds"));

return menu; 
}

function createItem (name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuitem');

    const foodName = document.createElement('h2');
    foodName.classList.add('foodname');
    foodName.textContent= name;

    const foodDesc = document.createElement('p');
    foodDesc.classList.add('fooddesc');
    foodDesc.textContent= description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDesc);

    return menuItem;
}

const loadMenu = () => {
    const main= document.querySelector('#main');
    main.innerHTML= 'zdzdzd';
    main.appendChild(createMenu());
}

export default loadMenu;