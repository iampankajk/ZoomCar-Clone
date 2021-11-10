  
  function signup(e) {
    e.preventDefault();
    let myForm= document.getElementById("myForm");
   // console.log("myForm:",myForm)
let name = myForm.name.value;
let pass=myForm.pass.value;


if (localStorage.getItem("users4") === null){
      localStorage.setItem("users4",JSON.stringify([]));
  }

let user = {
  name,
  pass,
};


let arr =JSON.parse(localStorage.getItem("users4"))  

arr.push(user) ;

localStorage.setItem("users4",JSON.stringify(arr));



    }