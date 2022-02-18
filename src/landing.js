import restaurant from './restaurant.jpg';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const landingPage = () => {
    const container = document.querySelector('#content');
    const head = document.createElement('h1'); 
    head.style.fontSize= "14px";
    head.textContent= "THE HIMALAYAN";

    const restImage = new Image();
    restImage.src = restaurant;

    const desc = document.createElement('div');
    desc.textContent= "Welcome to the Himalayan, the Greatest Nepalese Restaurant!"; 

    const main = document.createElement('div');
    main.id= "main";

    const buttons= document.createElement('div');
    const homeButton = document.createElement('button');
    homeButton.textContent = "HOME";
    const menuButton = document.createElement('button');
    menuButton.textContent= 'MENU';
    const contactButton = document.createElement('button');
    contactButton.textContent= 'CONTACT';

    buttons.appendChild(homeButton);
    buttons.appendChild(menuButton);
    buttons.appendChild(contactButton);
    

    container.appendChild(head);
    container.appendChild(buttons);
    container.appendChild(main);
    main.appendChild(restImage);
    main.appendChild(desc);

    
    container.appendChild(main);


    menuButton.addEventListener("click", loadMenu);
    contactButton.addEventListener("click", loadContact);

};

export default landingPage;