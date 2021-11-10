var input = document.querySelector("#phone");
window.intlTelInput(input, {
    // utilsScript is useful for providing validation and pretty formatting
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js",
});
function signup(e) {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    // console.log("myForm:",myForm)
    let phone = myForm.phone.value;

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    let user = {
        phone,
    };


    let arr = JSON.parse(localStorage.getItem("users"));
    let flag=0;
for( var i=0; i<arr.length ; i++){
  if(arr[i].phone==phone){
    flag=1;
  }
}
if(flag==0){
  arr.push(user)
  localStorage.setItem("users",JSON.stringify(arr));
  //alert("HELLO");
  location.href="phsignup.html"
}
else {
  localStorage.setItem("users",JSON.stringify(arr));
  location.href="phpassword.html"

}

    //arr.push(user1);

    //localStorage.setItem("users", JSON.stringify(arr));
    //location.href='phsignup.html'



}