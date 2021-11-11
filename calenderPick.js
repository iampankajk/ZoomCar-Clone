function startDate() {
    let start = document.getElementById("calendertemp").value;
    let lbd = document.querySelector(".lbd");
    lbd.innerText = start;
}

function timeChange() {
    let demo = document.getElementById("demo");
    let myRange = document.getElementById("myRange").value;


    if (myRange > 12) {
        demo.innerText = `${myRange}:00 PM`;

    }
    else {
        demo.innerText = `${myRange}:00 AM`;

    }
}


function startTrip(){
    let myRange = document.getElementById("myRange").value;
    let lbd_time = document.querySelector(".lbd-time");
    let lbd = document.querySelector(".lbd").innerText;

    let start = [];
    start.push(lbd);
    

    if (myRange > 12) {
        lbd_time.innerText = `${myRange}:00 PM`;
        start.push(`${myRange}:00 PM`);

    }
    else {
        lbd_time.innerText = `${myRange}:00 AM`;
        start.push(`${myRange}:00 AM`);

    }

    localStorage.setItem("start_Date",JSON.stringify(start));

    let getContinue2 = document.querySelector(".getContinue2");
    getContinue2.style.display = "block";

    let getContinue1 = document.querySelector(".getContinue");
    getContinue1.style.display = "none";


}

function endDate() {
    let end = document.getElementById("calendertemp2").value;
    let rbd = document.querySelector(".rbd");
    rbd.innerText = end;
}


function endTrip(){
    let myRange = document.getElementById("myRange").value;
    let rbd_time = document.querySelector(".rbd-time");

    let rbd = document.querySelector(".rbd").innerText;

    let end = [];
    end.push(rbd);

    if (myRange > 12) {
        rbd_time.innerText = `${myRange}:00 PM`;
        end.push(`${myRange}:00 PM`);

    }
    else {
        rbd_time.innerText = `${myRange}:00 AM`;
        end.push(`${myRange}:00 AM`);

    }

    localStorage.setItem("end_Date",JSON.stringify(end));


}
    






