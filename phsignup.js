var input = document.querySelector("#phone");
window.intlTelInput(input, {
    // utilsScript is useful for providing validation and pretty formatting
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
});


    
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

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    let user1 = {
        email,
    };


    let arr = JSON.parse(localStorage.getItem("users"))

    arr.push(user1);

    localStorage.setItem("users", JSON.stringify(arr));
    location.href="phdetails.html";



}