let car_data = JSON.parse(localStorage.getItem("carShow"));
console.log(car_data);
let rightData = document.getElementById("ranRightData");
let lefttData = document.getElementById("ranLeftData");
let carPrice=document.querySelector("ranCarPrice");
let carKm= document.querySelector("ranKm");
let carRating=document.querySelector("ranRating");

function showData() {


    car_data.forEach(function (car) {

        let div1 = document.createElement('div')


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
        div1.append(name, fuel)
        rightData.append(img);
        lefttData.append(div1);
        carPrice.append(price); 
        carKm.textContent="66Km"; 
        carRating.append(Rating);

    })
}
showData();
