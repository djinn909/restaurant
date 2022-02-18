const createContact = () => {
    const contact=document.createElement('div');
    contact.classList.add('contact');

    const phone= document.createElement('div');
    phone.textContent= '0656253256';

    const address= document.createElement('div');
    address.textContent= '18 Queen Road 45784 Columbia';

    contact.appendChild(phone);
    contact.appendChild(address);

    return contact;
}

const loadContact = () => {
    const main = document.querySelector('#main');
    main.innerHTML='';
    main.appendChild(createContact())
}

export default loadContact;