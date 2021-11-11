


    
// var des = localStorage.getItem("user1");
//console.log(des)


function signup(e) {
    e.preventDefault();
    
    let myForm = document.getElementById("myForm");
    // console.log("myForm:",myForm)
    let phone = myForm.phone.value;

    if (localStorage.getItem("users2") === null) {
        localStorage.setItem("users2", JSON.stringify([]));
    }

    let user1 = {
        phone,
    };


    let arr = JSON.parse(localStorage.getItem("users2"))

    arr.push(user1);

    localStorage.setItem("users2", JSON.stringify(arr));
    location.href="details.html";



}
