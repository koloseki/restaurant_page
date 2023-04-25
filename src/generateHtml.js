const html = document.documentElement;
const body = document.body;
const content = document.querySelector("#content");


export function generateMain() {
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h2>Home</h2><p>Home is where the heart is</p>";


}

export function generateMenu(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h2>Menu</h2><p>Menu is where the food is</p>";


    content.appendChild(document.createElement('div')).innerHTML = "<h1><b>Margherita</b> <span class=\"w3-right w3-tag w3-dark-grey w3-round\">$12.50</span></h1>\n" +
        "<p class=\"w3-text-grey\">Fresh tomatoes, fresh mozzarella, fresh basil</p>\n"

}

export function generateContacts(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h2>Contacts</h2><p>Contacts is where the people are</p>";

    content.appendChild(document.createElement("div")).innerHTML = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.80118535455966!2d21.471497033565914!3d49.743553230808715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473db4735e0d70cb%3A0x4af53fef278d40c9!2sGlorietka!5e0!3m2!1spl!2spl!4v1682421632033!5m2!1spl!2spl\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>";

}