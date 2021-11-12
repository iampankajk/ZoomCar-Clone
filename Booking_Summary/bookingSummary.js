let car_data = JSON.parse(localStorage.getItem("carShow"));
let pickUpLocation = JSON.parse(localStorage.getItem("pickUpLocation"))[0];

let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];


let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] +" "+start_Date[1];
let end_Date = JSON.parse(localStorage.getItem("end_Date"));

end_Date = end_Date[0] + " "+ end_Date[1];

console.log(end_Date);

let rightData = document.getElementById("ranRightData");
let lefttData = document.getElementById("ranLeftData");
let carPrice=document.querySelector("ranCarPrice");
let carKm= document.querySelector("ranKm");
let carRating=document.querySelector("ranRating");

function showData() {


    

        let div1 = document.createElement('div')


        let img = document.createElement('img')
        img.src = car_data.img

        let center = document.createElement('p')

        let location = document.createElement('p1')
        location.innerText = car_data.location


        let name = document.createElement('h4')
        name.innerText = car_data.name


        let fuel = document.createElement('p')
        fuel.innerText = car_data.fuel

        let Seater = document.createElement('p')
        Seater.innerText = car_data.Seater + " " + "Seater";

        let Rating = document.createElement('h4')
        Rating.innerText = car_data.Rating

        let left = document.createElement('h3')

        let price = document.createElement('h5')
        price.innerText = car_data.price

        let btn = document.createElement('button')
        btn.innerHTML = "Book Now";
        div1.append(name, fuel)
        rightData.append(img);
        lefttData.append(div1);
        carPrice.append(price); 
        carKm.textContent="66Km"; 
        carRating.append(Rating);


}
showData();
