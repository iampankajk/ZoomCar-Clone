let car_check = JSON.parse(localStorage.getItem("carShow"));

let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] +" "+start_Date[1];
console.log(start_Date);

let end_Date = JSON.parse(localStorage.getItem("end_Date"));

end_Date = end_Date[0] + " "+ end_Date[1];
console.log(end_Date);

let carCheck=document.getElementById("carNavCheck");
let navStartCheck = document.getElementById("navStartCheck");
let navEnd = document.getElementById("navEndCheck");
let tripFare = document.getElementById("tripFare");
let totFare = document.getElementById("totFare");
let finalFare=document.getElementById("finalFare");
let pay = document.getElementById("pay");

let str="";
function showPay() {
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let name = document.createElement('h4');
      
        name.innerText = car_check.name;
        let price = document.createElement('h3');
        let price1 = document.createElement('h3');
        let price2 = document.createElement('h3');
        let price3 = document.createElement('h3');

        carCheck.append(name);
        navStartCheck.append(start_Date);
        navEndCheck.append(end_Date);
        price.innerHTML = car_check.price;
        price1.innerHTML = car_check.price;
        price2.innerHTML = car_check.price;
        price3.innerHTML = car_check.price;


     let demo_price = car_check.price;
     console.log(demo_price);

        
        for(let i=0;i<demo_price.length; i++){
          if(demo_price[i]==="₹"){
            continue; 
          } else{
            str+=demo_price[i]; 
          }
        }

        str = Number(str);

       

       

        
        tripFare.append(price);
        totFare.append(price1);
        finalFare.append(price2)
        pay.append(price3);




}
showPay(); 


        