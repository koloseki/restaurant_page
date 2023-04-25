const html = document.documentElement;
const body = document.body;
const content = document.querySelector("#content");


export function generateMain() {
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h1 style='font-size: 5rem; background-color: hsla(0, 0%, 0%, 0); ' >Thin crust pizza</h1><p>Home is where the heart is</p>";


}

export function generateMenu(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h1>Menu</h1><p>Menu is where the food is</p>";

    content.appendChild(document.createElement('div')).innerHTML = `<h1>...</h1>`

    content.appendChild(document.createElement('div')).innerHTML = `<h1><b>Margherita</b> <span>$12.50</span></h1>`
    content.appendChild(document.createElement('p')).innerHTML = 'Fresh tomatoes, fresh mozzarella, fresh basil'

    content.appendChild(document.createElement('div')).innerHTML = `<h1><b>Formaggio</b> <span >$15.50</span></h1>`
    content.appendChild(document.createElement('p')).innerHTML = 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)'

    content.appendChild(document.createElement('div')).innerHTML = "<h1><b>Meat Town</b> <span >$20.00</span></h1>\n"
    content.appendChild(document.createElement('p')).innerHTML = 'Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken'

    content.appendChild(document.createElement('div')).innerHTML = "<h1><b>Lasagna</b> <span >$13.50</span></h1>\n"
    content.appendChild(document.createElement('p')).innerHTML = 'Special sauce, mozzarella, parmesan, ground beef'

    content.appendChild(document.createElement('div')).innerHTML = "<h1><b>Ravioli</b> <span >$14.50</span></h1>\n"
    content.appendChild(document.createElement('p')).innerHTML = 'Ravioli filled with cheese'

    content.appendChild(document.createElement('div')).innerHTML = "<h1><b>Spaghetti Classica</b> <span >$11.00</span></h1>\n"
    content.appendChild(document.createElement('p')).innerHTML = 'Ravioli filled with cheese'

}

export function generateContacts(){
    content.innerHTML = "";

    content.appendChild(document.createElement("div")).innerHTML = "<h2>Contacts</h2><p>Contacts is where the people are</p>";

    content.appendChild(document.createElement('div')).innerHTML = `<h1>...</h1>`

    content.appendChild(document.createElement('div')).innerHTML = `<h1>Address</h1>`

    content.appendChild(document.createElement('div')).innerHTML = `<p>ul. Glorietki 1</p>`

    content.appendChild(document.createElement('div')).innerHTML = `<h1>Phone</h1><p>+48 12 345 67 89</p>`

    content.appendChild(document.createElement('div')).innerHTML = `<h1>Email</h1><p>`

    content.appendChild(document.createElement('div')).innerHTML = `<p>random@email.com</p>`

    content.appendChild(document.createElement("div")).innerHTML = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442.80118535455966!2d21.471497033565914!3d49.743553230808715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473db4735e0d70cb%3A0x4af53fef278d40c9!2sGlorietka!5e0!3m2!1spl!2spl!4v1682421632033!5m2!1spl!2spl\" width=\"600\" height=\"450\"  style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" ></iframe>";

}