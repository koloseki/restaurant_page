const html = document.documentElement;
const body = document.body;
const content = document.querySelector("#content");

export function generateHTML() {
    content.innerHTML = "";

    content.appendChild(document.createElement("div").appendChild(document.createElement("h2").appendChild(document.createTextNode("Hello World"))));
    content.appendChild(document.createElement("div").appendChild(document.createElement("h3").appendChild(document.createTextNode("Hello World"))));
}

export function generateMenu(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div").appendChild(document.createElement("h2").appendChild(document.createTextNode("Menu"))));
    content.appendChild(document.createElement("div").appendChild(document.createElement("h3").appendChild(document.createTextNode("Menu"))));
}

export function generateContacts(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div").appendChild(document.createElement("h2").appendChild(document.createTextNode("Contacts"))));
    content.appendChild(document.createElement("div").appendChild(document.createElement("h3").appendChild(document.createTextNode("Contacts"))));
}