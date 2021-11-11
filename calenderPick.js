var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo");

output.innerHTML = `${slider.value} AM `;
output2.innerHTML = `${slider.value} AM `;


slider.oninput = function () {
    if (this.value > 12) {
        output.innerHTML = `${this.value}:00 PM`;
        output2.innerHTML = `${this.value}:00 PM`;

    }
    else {
        output.innerHTML = `${this.value}:00 AM`;
        output2.innerHTML = `${this.value}:00 AM`;

    }

}

// date format
let leftData = document.getElementById("leftBoxcal");
let rightData = document.getElementById("rightBoxcal");
let tempDate1 = document.getElementById("calendertemp");
let tempDate2 = document.getElementById("calendertemp2");



// dateData.innerHTML=tempDate.value; 
tempDate1.oninput = () => {
    leftData.innerHTML = null;
  
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div2.append(output2.innerText); 
    div2.style.marginTop="10px";
    div1.append(tempDate1.value); 
    leftData.append(div1, div2);

}

tempDate2.oninput = () => {
    rightData.innerHTML = null;
    let div3 = document.createElement("div");
    div3.append(tempDate2.value); 
    rightData.append(div3);
}

// function addTimeleft(){
//     let div2 = document.createElement("div");
//     div2.append(output2); 
//     leftData.append(div2); 
// }

// tempDate1.addEventListener("onclick", addTimeleft);

// tempDate1.removeEventListener("oninput", addTimeleft); 

function addTimeRight(){
    let div4 = document.createElement("div");
    div4.append(output); 
    rightData.append(div4); 
}
let btnContinue=document.getElementById("time"); 
btnContinue.addEventListener("click", addTimeRight); 




