function fun1(){
    var x=document.getElementById("heading").value;
  document.getElementById("btn").style.backgroundColor="red"
    }
    
    
    function signup(e) {
          e.preventDefault();
          let myForm= document.getElementById("myForm");
         // console.log("myForm:",myForm)
      let name = myForm.name.value;
      let pass=myForm.pass.value;
  
      
      if (localStorage.getItem("users3") === null){
            localStorage.setItem("users3",JSON.stringify([]));
        }
     
      let user = {
        name,
        pass,
      };
    
      
      let arr =JSON.parse(localStorage.getItem("users3"))  
      
      arr.push(user) ;
      
      localStorage.setItem("users3",JSON.stringify(arr));
      
     
      
          }