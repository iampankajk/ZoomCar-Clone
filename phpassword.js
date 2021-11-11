function signup(e){
    e.preventDefault();
let myForm= document.getElementById("myForm");
// console.log("myForm:",myForm)

let pass = myForm.pass.value;
//console.log("data:", name, email, password);


let all_users = JSON.parse(localStorage.getItem("users4"));

all_users.forEach(function (user) {

//console.log("user:",user.email,user.password);
//var flag=0;

if(pass!=user.pass){
//flag=1;
document.getElementById("text4").innerHTML="Incorrect Password"

}
else{
alert("ok")
//location.href ="main.html";

}
});
}


