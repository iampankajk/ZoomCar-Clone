// getting data

let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];
console.log(dropOffLocation);

// let dropoff = document.getElementById("top1");
top1.innerText = " Location :" + " " + dropOffLocation;


let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] + " " + start_Date[1];
console.log(start_Date);
top2.innerText = " start_Time :" + " " + start_Date;




// let pickup = document.getElementById("top2");

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
        // dropoff.innerHTML = null
        // pickup.innerHTML = null
    cars.forEach(function(car) {

        let div = document.createElement('div')


        let img = document.createElement('img')
        img.src = car.img

        let center = document.createElement('p')
        center.style.margin = "10px";
        center.style.gap = "5px";
        center.style.padding = "2px";

        let location = document.createElement('p')
        location.innerText = car.location


        let name = document.createElement('h4')
        name.innerText = car.name


        let fuel = document.createElement('p')
        fuel.innerText = car.fuel

        let Seater = document.createElement('p')
        Seater.innerText = car.Seater + " " + "Seater";

        let Rating = document.createElement('h4')
        Rating.innerText = "🌟" + " " + car.Rating;

        let left = document.createElement('h3')

        let price = document.createElement('h5')
        price.innerText = car.price

        let btn = document.createElement('button')
        btn.innerHTML = "Book Now";

        btn.onclick = () => {
                addtoBook(car);
            }
            // dropoff.append(dropOffLocation);
            // pickup.append(start_Date, dropOffLocation);
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

    let cars = data[city];

    cars.forEach((e) => {
        if (e.Seater == 5) {
            ninty.push(e);
        }
    });

    showData(ninty);
}

async function onetwontyfun() {
    let data = await fetch("http://localhost:5000/api/products/");

    data = await data.json();

    let cars = data[city];

    cars.forEach((e) => {
        if (e.Seater == 6) {
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

    let cars = data[city];

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

    let cars = data[city];

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

    let cars = data[city];

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

    let cars = data[city];

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

    let cars = data[city];

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

    let cars = data[city];

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

    let cars = data[city];

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

function addtoBook(car) {

    localStorage.setItem("carShow", JSON.stringify(car)); // storing products in the local storage
    window.location.href = "/Booking_Summary/bookingSummary.html";


}







// enable confirm button function
function confirm() {
    let btn = document.querySelector(".city-box-btn");
    btn.removeAttribute("disabled");
}


// after changing the city name
function confirmCity() {
    console.log("yes");
    let selected_city = document.getElementById("selected_city").value;
    localStorage.setItem("city", JSON.stringify([selected_city])); //setting selecting city to local storage
    let sm = document.querySelector(".sm");
    sm.innerText = selected_city;

    let city_box = document.querySelector(".city-box");
    city_box.style.display = "none";
    window.location.reload();
}

let sm = document.querySelector(".sm");

let selected_city = JSON.parse(localStorage.getItem("city"))[0]; //getting selecting city to local storage


// showing city name by getting 
sm.innerText = selected_city;

// show change city block function
function changeCity() {
    let city_box = document.querySelector(".city-box");
    city_box.style.display = "block";
    hideSideBar();
}


// Show SideBar Function
function showSideBar() {
    let sidebar_component = document.querySelector(".sidebar-component");
    sidebar_component.style.display = "block";

    let sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translate3d(0%, 0px, 0px)";

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity = "1";
    sidebar_ovl.style.pointerEvents = "auto";
    sidebar_ovl.addEventListener("click", hideSideBar);
}


// Hide SideBar Function
function hideSideBar() {
    let sidebar_component = document.querySelector(".sidebar-component");
    sidebar_component.style.display = "none";

    let sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translate3d(-102%, 0, 0)";

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity = "0";

    sidebar_ovl.removeEventListener("click", hideSideBar);
}