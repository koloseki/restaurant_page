import {generateContacts, generateHTML, generateMenu} from './generateHTML.js';

let home = document.querySelector("#hButton");
let menu = document.querySelector("#mButton");
let contacts = document.querySelector("#cButton");

home.addEventListener('click', generateHTML);

menu.addEventListener('click', generateMenu);

contacts.addEventListener('click', generateContacts);