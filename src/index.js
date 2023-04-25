import {generateContacts, generateMain, generateMenu} from './generateHTML.js';
import './style.css';


let home = document.querySelector("#hButton");
let menu = document.querySelector("#mButton");
let contacts = document.querySelector("#cButton");

let content = document.querySelector("#content");

content.classList.add('home');

home.addEventListener('click', generateMain);

menu.addEventListener('click', generateMenu);

contacts.addEventListener('click', generateContacts);

generateMain();

