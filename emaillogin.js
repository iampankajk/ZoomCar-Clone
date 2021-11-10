function fun1(){
    var x=document.getElementById("heading").value;
  document.getElementById("btn").style.backgroundColor="red"
    }
    
    
    function signup(e) {
          e.preventDefault();
          let myForm= document.getElementById("myForm");
         // console.log("myForm:",myForm)
      let email = myForm.email.value;
      
      if (localStorage.getItem("users1") === null){
            localStorage.setItem("users1",JSON.stringify([]));
        }
     
      let user = {
        email,
      };
    
      
      let arr =JSON.parse(localStorage.getItem("users1"))  
      console.log(arr);
      let flag=0;
      for( var i=0; i<arr.length ; i++){
        if(arr[i].email==email){
          flag=1;
        }
      }
      if(flag==0){
        arr.push(user)
        localStorage.setItem("users1",JSON.stringify(arr));
        alert("HELLO");
        location.href="signup.html"
      }
      else {
        localStorage.setItem("users1",JSON.stringify(arr));
        location.href="password.html"
  
      }
      //
      
    //});
     
      
          }