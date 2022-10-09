// Task # 2
var myName = "Muhammad Osama"
document.write("Hello " + myName + ", would you like to learn some Python today?");

// Task # 3


function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

var sen = "I'm a little tea pot"

document.write("<br><br>Lower:" + sen.toLowerCase() + "<br>");
document.write("titlecase:" + titleCase(sen) + "<br>");
document.write("Upper:" + sen.toUpperCase() + "<br>");

// Task # 4
document.write('Albert Einstein once said, "A person who never made a mistake never tried anything new."');

// Task # 5
famous_person = 'Albert Einstein';
message = "A person who never made a mistake never tried anything new."
document.write(`<h1>${famous_person} once said : " ${message} "</h1>`);

// Task # 6
var myName = " \t  Muhammad Osama  \t PIAIC \n 009574     \t\n"
document.write("<pre>" + myName + "</pre><br>");
document.write(myName.trim());

// Task # 7
document.write(`<br/> Addition : ${5 + 3} ,  <br/>Multiplication : ${4 * 2} <br/>Division : ${16 / 2} , <br/>Subtraction : ${11 - 3}`)

// Task # 8
console.log(` Addition : ${5 + 3} ,  \n Multiplication : ${4 * 2} \n Division : ${16 / 2} , \n Subtraction : ${11 - 3}`)

// Task # 9 
var fav_num = 9
document.write(`<br/> Your Favorite number is: ${fav_num}`);

// Task # 10
/*
Muhammad Osama 
PIAIC 009574
*/

// Task # 11
var names = ["Osama", "Hamza", "Nasir", "Usman"];
for (let i in names) {
    document.write(`<br/>${names[i]}`);
}

// Task # 12

for (let i in names) {
    document.write(`<br/> Greetings ${names[i]}`);
}

// Task # 13
var transport = ["Heavy Bike", "Sports Car", "Jet", "Speed Boat"];
for (let i in transport) {
    document.write(`<br/> I would like to own a ${transport[i]}`);
}

// Task # 14
var names = ["Osama", "Hamza", "Nasir", "Usman"];
for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}

// Task # 15
var names = ["Osama", "Hamza", "Nasir", "Usman"];
document.write(`<br/><br/>${names[0]} can’t make it`)

names[0] = "Zia Khan"
for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}


// Task # 16
document.write(" <br/><br/>=========== We Found a Big Table ===========<br/><br/>")

names.unshift('Ehtisham Tanoli')
names.splice(Math.ceil(names.length / 2), 0, "Rizwan Ali wallara");
names.push('Waheed Zaman')

for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}

// Task # 17
document.write(" <br/><br/>=========== We can invite only two people for dinner ===========<br/><br/>")
for (var i = 0; i < names.length - 2; i++) {
    document.write(`<br/> Mr. ${names[i]} , you’re sorry you can’t invite them to dinner `)
}

names.splice(0, 5)

document.write('<br>')
for (var i = 0; i < names.length; i++) {
    document.write(`<br/> Mr. ${names[i]} , you’re still invited. `)
}


// Task # 18
var place_names = ['Murree', 'Clifton', 'NY', 'Lahore', 'Abbotabad']
document.write(`<p> Original order : ${place_names} || Sorted alphabets order : ${place_names.slice().sort()} </p>
<p> </p>
<p> Original order : ${place_names} || Rervese Alphabets order : ${place_names.slice().sort().reverse()} </p>
<p> Original order : ${place_names} || Reverse order : ${place_names.reverse()} </p>
<p> Reverse for Original order : ${place_names.reverse()} || Sorted Original aphabetical order : ${place_names.sort()}</p>
<p> reverse Alphabetical order : ${place_names.sort().reverse()} || Orignal order:  ${place_names}  </p>
`)


// Task # 19

document.write("<h3>Task # 19</h3>")

var names = ["Osama", "Hamza", "Nasir", "Usman"];
for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}

document.write(`<br/><br/>${names[0]} can’t make it`)

names[0] = "Zia Khan"
for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}

document.write(" <br/><br/>=========== We Found a Big Table ===========<br/><br/>")

names.unshift('Ehtisham Tanoli')
names.splice(Math.ceil(names.length / 2), 0, "Rizwan Ali wallara");
names.push('Waheed Zaman')

for (let i in names) {
    document.write(`<br/>${names[i]} : You are cordially invited`);
}

document.write(" <br/><br/>=========== We can invite only two people for dinner ===========<br/><br/>")
for (var i = 0; i < names.length - 2; i++) {
    document.write(`<br/> Mr. ${names[i]} , you’re sorry you can’t invite them to dinner `)
}

names.splice(0, 5)

document.write('<br>')
for (var i = 0; i < names.length; i++) {
    document.write(`<br/> Mr. ${names[i]} , you’re still invited. `)
}

document.write(`<br> <h4>Total Invited Guests : ${names.length}</h4>`)

// Task # 20 
var cities = ["Karachi", "Islamabad", "Faislabad", "Lahore"]

// Task # 21
var student = {
    'ID': "AIC009574",
    'name': "Muhammad Osama",
    'fname': "Muhammad Usman",
    'age': 23
}

for (const property in student) {
    document.write(`${property}: ${student[property]} <br/>`);
}


// Task # 22
var cities = ["Karachi", "Islamabad", "Faislabad", "Lahore"]
var value = cities[9];
console.log(value);

// Task # 23
let car = 'subaru';
//True 5 test
console.log("=========True===========")
console.log(car == 'subaru' ? true : false);
console.log(car != 'audi' ? true : false);
console.log(car.length > 'audi'.length ? true : false);
console.log(car !== 'Subarn' ? true : false);
console.log(car.toLowerCase() !== 'subarn'.toUpperCase() ? true : false);
console.log("=========False===========")
//False Test
console.log(car != 'subaru' ? true : false);
console.log(car == 'audi' ? true : false);
console.log(car.length < 'audi'.length ? true : false);
console.log(car === 'Subarn' ? true : false);
console.log(car.toLowerCase() === 'subarn'.toUpperCase() ? true : false);



// Task # 24
console.log("=====================")
let text = '1';
//True 5 test
// • Tests for equality and inequality with strings
console.log(text == '1' ? true : false);
console.log(text == 1 ? true : false);
console.log('Karachi' == 'Karachi');
console.log('Karachi' === 'Pakistan');

// • Tests using the lower case function
console.log("Karachi".toLowerCase() == "kAraChi".toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(1 == 1)
console.log(1 >= 2)
console.log(1 <= 9)
console.log(1 != 1)

// • Tests using "and" and "or" operators
var user = 'admin';
var password = 'admin'

console.log(`user and password ${user === 'admin' && password === 'admin'}`)
console.log(`user and password ${user === 'admin' || password === 'admin'}`)

// • Test whether an item is in a array
var cities = ["Karachi", "Islamabad", "Faislabad", "Lahore"]
console.log("Array item check: ", cities.includes('multan'))

// • Test whether an item is not in a array
console.log("Array item check: ", !cities.includes('multan'))

// Task # 25
var alien_color = 'green';

if (alien_color == 'green') {
    document.write("the player just earned 5 points");
}

var alien_color = 'red';
if (alien_color == 'green') {
    document.write("the player just earned 5 points");
}

// Task # 26

var alien_color = 'green';

if (alien_color == 'green') {
    document.write("<h1>the player just earned 5 points for shooting the alien</h1>");
} else {
    document.write("<h1>the player just earned 10 points</h1>");
}

var alien_color = 'red';
if (alien_color == 'green') {
    document.write("<h1>the player just earned 5 points for shooting the alien</h1>");
} else {
    document.write("<h1>the player just earned 10 points</h1>");
}


// Task # 27

document.write("========================")

alien_color = 'yellow'

if (alien_color == 'green') {
    document.write("<h1> he player earned 5 points</h1>");
} else if (alien_color == 'yellow') {
    document.write("<h1>the player earned 10 points</h1>");
} else if (alien_color == 'red') {
    document.write("<h1>the player earned 15 points</h1>");
}

// Task # 28

var age = 23

if (age < 2) {
    document.write("<h1>the person is a baby</h1>");
} else if (age >= 2 && age < 4) {
    document.write("<h1>the person is a toddler</h1>");
} else if (age >= 4 && age < 13) {
    document.write("<h1>the person is a kid</h1>");
} else if (age >= 13 && age < 20) {
    document.write("<h1>the person is a teenager</h1>");
} else if (age >= 20 && age < 65) {
    document.write("<h1>the person is a adult</h1>");
} else if (age >= 65) {
    document.write("<h1>the person is a elder</h1>");
}

// Task # 29
favorite_fruits = ['blueberries', 'orange', 'apple']

if (favorite_fruits.includes("blueberries")) {
    console.log("You really like blueberries!")
}
if (favorite_fruits.includes("coconut")) {
    console.log("You really like coconut!")
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like orange!")
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana!")
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apple!")
}

// Task # 30
var users = ['admin', 'sir ameen chahjro', 'sir azeem inam', 'sir asif ali']

for (let i in users) {
    if (users[i] == 'admin') {
        document.write("<h1>Hello " + users[i] + ", would you like to see a status report?</h1>")
    } else {
        document.write("<h1>Hello " + users[i] + ", thank you for logging in again</h1>")
    }
}

// Task # 31
for (let i in users) {
    if (users.length == 0) {
        document.write("<h1>We need to find some users!</h1>")
    }
    else if (users[i] == 'admin') {
        document.write("<h1>Hello " + users[i] + ", would you like to see a status report?</h1>")
    } else {
        document.write("<h1>Hello " + users[i] + ", thank you for logging in again</h1>")
    }
}
// Task # 32

var current_users = ['Ali', 'Basit', 'Daniyal', 'Ejaz']
var new_users = ['ali', 'Ertaza', 'Ghufran', 'Xameer', 'Yasir', 'basit']


for (i = 0; i < new_users.length; i++) {
    for (j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            document.write("<h1>'" + new_users[i] + "', enter a new username</h1>");
            break;
        } else if (j == current_users.length - 1 && new_users[i].toLowerCase() != current_users[j].toLowerCase()) {
            document.write("<h1>'" + new_users[i] + "' username is available........</h1>");
            break;
        }
    }
}

// Task # 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        document.write("<h2>" + numbers[i] + "st</h2>")
    } else if (numbers[i] == 2) {
        document.write("<h2>" + numbers[i] + "nd</h2>")
    } else if (numbers[i] == 3) {
        document.write("<h2>" + numbers[i] + "rd</h2>")
    } else {
        document.write("<h2>" + numbers[i] + "th</h2>")
    }
}

// Task # 34
var pizzas = ['phentom', 'tikka', 'fajida', 'pepperoni']
for (let i in pizzas) {
    if (i == 0) {
        document.write("<h1>I love to eat," + pizzas[i] + " pizza.</h1>")
    } else if (i == 1) {
        document.write("<h1>My second priority " + pizzas[i] + " pizza.</h1>")
    } else {
        document.write("<h1>I also like ," + pizzas[i] + " pizza.</h1>")
    }
}
document.write("<h1>I really love pizza</h1>")

// Task # 35

var pets = ['tiger', 'loin', 'lepord']
for (let i in pets) {
    pet = pets[i]
    if (pet == 'tiger') {
        document.write("<h2>I love Bangal Tiger</h2>")
    } else if (pet == 'loin') {
        document.write("<h2>Usman has a dream to have a loin pet</h2>")
    } else if (pet == "lepord") {
        document.write("<h2>Saudi king always love to keep 'Lepord' as a pet!</h2>")
    }
}
document.write("These animals are the kings in jungle")

// Task # 36
function make_shirt(size, text) {
    return `<h1> ${size} </h1> <p> ${text}</p>`
}
document.write(make_shirt('Large', "Java and Javascript are like car and carpet!"))

// Task # 37
function make_shirt(size = "Large", text = "I love JavaScript") {
    return `<h1> ${size} </h1> <p> ${text}</p>`
}

document.write(make_shirt())
document.write(make_shirt('Medium', "JS is the king"))

// Task # 38
function describe_city(city, country = "Pakistan") {
    document.write(`<h1> ${city} is in ${country}</h1>`);
}
describe_city("Lahore");
describe_city("Dubai", "UAE");
describe_city("Rajistan", "India");

// Task # 39

function city_country(city, country) {
    return (`<h1>${city} , ${country}</h1>`);
}

document.write(city_country("Karachi", "Pakistan"));
document.write(city_country("New york", "USA"));
document.write(city_country("Mubbai", "India"));

// Task #40
var album;
function make_album(artist, title) {
    var album_dict;
    album_dict = {
        "artist": artist,
        "title": title
    };
    return album_dict;
}

album = make_album("Arjit Singh", "Tu hi hai Ashiqui");
console.log(album);
album = make_album("Guri", "Billiyan Billyan akhiyan");
console.log(album);
album = make_album("Imran Khan", "Rider");
console.log(album);


// Task # 41
var magician = ["Tom", "Dick", "Herry"];

function show_magicians(mgs) {
    for (i in mgs) {
        document.write(`<h1>${magician[i]}</h1>`)
    }
}

show_magicians(magician);

// Task # 42
var magician = ["Tom", "Dick", "Herry"];

function show_magicians(mgs) {
    for (i in mgs) {
        document.write("<h1>" + mgs[i] + "</h1>")
    }
}
function make_great(mgs) {
    for (i in mgs) {
        mgs[i] = "Great " + mgs[i];
    }
}
make_great(magician);
show_magicians(magician);

// Task # 43
let magicians = ['Joker', 'Pinkro', 'Neuro'];

function show_magicians(magicians) {
    console.log(`${magicians}`);
}

function make_great(magicians) {
    great_magicians = [];
    while (magicians) {

        let magician = magicians.pop();
        great_magician = magician + ' the Great';
        great_magicians.push(great_magician);
    }

    for (great_magician of great_magicians) {
        magicians.push(great_magician);
    }
}
show_magicians(magicians);
make_great(magicians);

// Task # 44
function make_sandwich(...items) {
    document.write("<h1>This sandwich has following items : </h1><ul>");
    items.forEach(
        (item) => {
            document.write("<li>" + item + "</li>");
        }
    );
    document.write("</ul>")
}

make_sandwich("Salt", "Cheese", "Ketchup", "Bread");
make_sandwich("Cheese", "Ketchup", "Bread");
make_sandwich("Salt", "Cheese", "Ketchup", "Bread", "Aginomoto");

// Task # 45

function store_car(manufacturer, model, ...args) {
    var car = {
        manufacturer: manufacturer,
        model: model,
        others: args
    }
    return car
}

let car1 = store_car("Honda", 2020, { color: "Blue" });
console.log(car1);
let car2 = store_car("Civic", "2021", { color: "Blue", price: 80 });
console.log(car2);
