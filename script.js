// let btn = document.querySelector(".btn-primary");
// btn.removeAttribute("disabled");


// enable confirm button function
function confirm() {
    let btn = document.querySelector(".city-box-btn");
    btn.removeAttribute("disabled");
}


// after changing the city name
function confirmCity() {
    let selected_city = document.getElementById("selected_city").value;
    localStorage.setItem("city",JSON.stringify([selected_city]));  //setting selecting city to local storage
    let city_name = document.querySelector(".city-name");
    let sm = document.querySelector(".sm");
    city_name.innerText = selected_city;
    sm.innerText = selected_city;

    let city_box = document.querySelector(".city-box");
    city_box.style.display = "none";
}
let city_name = document.querySelector(".city-name");
let sm = document.querySelector(".sm");

let selected_city = JSON.parse(localStorage.getItem("city"))[0]; //getting selecting city to local storage


// showing city name by getting 
city_name.innerText = selected_city;
sm.innerText = selected_city;

// show change city block function
function changeCity(){
    let city_box = document.querySelector(".city-box");
    city_box.style.display = "block";
    closePopup();
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


// function for choosing trip option
function showPopup() {
    let show_trip = document.querySelector(".show-popup");
    show_trip.style.display = "block";
    let trip_option1 = document.querySelector(".trip-option-select.o-1");
    trip_option1.addEventListener("click", roundTrip);
    let trip_option2 = document.querySelector(".trip-option-select.o-2");
    trip_option2.addEventListener("click", oneWay);
}


// close popup function
function closePopup() {
    let show_trip = document.querySelector(".show-popup");
    show_trip.style.display = "none";
}


// selecting round-trip from options function
function roundTrip() {
    localStorage.setItem("trip",JSON.stringify(["round"]));
    let trip_option = document.getElementById("trips");
    trip_option.innerText = "Round Trip";
    let drop = document.querySelector(".wrap-two");
    drop.style.display = "none";
    closePopup();

}
// selecting one-way-trip from options function
function oneWay() {
    localStorage.setItem("trip",JSON.stringify(["oneway"]));
    let trip_option = document.getElementById("trips");
    trip_option.innerText = "One Way Trip";
    let drop = document.querySelector(".wrap-two");
    drop.style.display = "block";
    closePopup();

}

if(JSON.parse(localStorage.getItem("trip"))[0]=="round"){
    roundTrip();
}else{
    oneWay();
}

// About display toggle function
function displayAbout(){
    let aInner = document.querySelector(".aInner");
    if(aInner.style.display=="block"){
        aInner.style.display="none";
    }else{
        aInner.style.display="block";
    }

}

function setPickUp(){
    localStorage.setItem("selectLocation",JSON.stringify(["pickup"]));
}
function setDropOff(){
    localStorage.setItem("selectLocation",JSON.stringify(["dropoff"]));
}

let pickUpLocation = JSON.parse(localStorage.getItem("pickUpLocation"))[0];
let pick_up = document.querySelector(".pick-up");
pick_up.innerText = pickUpLocation;

let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];
let drop_off = document.querySelector(".drop-off");
drop_off.innerText = dropOffLocation;

