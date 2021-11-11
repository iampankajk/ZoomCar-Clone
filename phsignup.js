


    
// var des = localStorage.getItem("user1");
//console.log(des)
var data = JSON.parse(localStorage.getItem("users"));

//let arr =JSON.parse(localStorage.getItem("users"))  
document.getElementById("phone").placeholder=`${data[data.length-1].phone}`
function signup(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    // console.log("myForm:",myForm)
    let email = myForm.email.value;

    if (localStorage.getItem("users5") === null) {
        localStorage.setItem("users5", JSON.stringify([]));
    }

    let user1 = {
        email,
    };


    let arr = JSON.parse(localStorage.getItem("users5"))

    arr.push(user1);

    localStorage.setItem("users5", JSON.stringify(arr));
    location.href="phdetails.html";



}