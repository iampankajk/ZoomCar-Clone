// getting data

let city = JSON.parse(localStorage.getItem("city"))[0];
async function getData() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();
    // console.log(data.Mumbai);
    showData(data[city]);
}

getData();

let parent = document.getElementById('cont')

function showData(cars) {
    parent.innerHTML = null

    cars.forEach(function(car) {

        let div = document.createElement('div')


        let img = document.createElement('img')
        img.src = car.img

        let center = document.createElement('p')

        let location = document.createElement('p1')
        location.innerText = car.location


        let name = document.createElement('h4')
        name.innerText = car.name


        let fuel = document.createElement('p')
        fuel.innerText = car.fuel

        let Seater = document.createElement('p')
        Seater.innerText = car.Seater + " " + "Seater";

        let Rating = document.createElement('h4')
        Rating.innerText = car.Rating

        let left = document.createElement('h3')

        let price = document.createElement('h5')
        price.innerText = car.price

        let btn = document.createElement('button')
        btn.innerHTML = "Book Now";

        btn.onclick = () => {
            addtoBook(car);
        }

        center.append(location, name, fuel, Seater, Rating)
        left.append(price, btn)

        div.append(img, center, left)

        parent.append(div)


    })


}


// filter function
let ninty = [];
let onetwonty = [];

async function nintyfun() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.fuel == "Diesel") {
            ninty.push(e);
        }
    });

    showData(ninty);
}

async function onetwontyfun() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.fuel == "Petrol") {
            onetwonty.push(e);
        }
    });

    showData(onetwonty);
}


let fiveSeater = [];
let sixSeater = [];
let sevenSeater = [];

// five seater filter function
async function five() {
    fiveSeater.innerHTML = null
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 5) {
            fiveSeater.push(e);
        }
    });

    showData(fiveSeater);
}


// six Seater Filter Function
async function six() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 6) {
            sixSeater.push(e);
        }
    });

    showData(sixSeater);
}

// Seven Seater Filter Function

async function seven() {
    sevenSeater.innerHTML = null;
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 7) {
            sevenSeater.push(e);
        }
    });

    showData(sevenSeater);
}


let hatchback = [];
let Sedan = [];

async function hatchbackcar() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 6 || e.Seater == 7) {
            hatchback.push(e);
        }
    });

    showData(hatchback);
}

async function Sedancar() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 5) {
            Sedan.push(e);
        }
    });

    showData(Sedan);
}

let Home = [];
let Airport = [];

async function Homecar() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 6 || e.Seater == 7) {
            Home.push(e);
        }
    });

    showData(Home);
}

async function Airportcar() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data.Delhi;

    cars.forEach((e) => {
        if (e.Seater == 5) {
            Airport.push(e);
        }
    });

    showData(Airport);
}
//filter function End


if (localStorage.getItem("carShow") === null) {
    localStorage.setItem("carShow", JSON.stringify([]));
}

function addtoBook(c) {
    let products_cart = JSON.parse(localStorage.getItem("carShow"));
    products_cart.push(c);
    localStorage.setItem("carShow", JSON.stringify(products_cart)); // storing products in the local storage


}