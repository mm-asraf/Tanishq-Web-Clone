
// for login page ---------------------------
function login(){
    let taking_email=document.getElementById("email").value;
    let taking_pasw=document.getElementById("password1").value;
  
   let fromlocal =localStorage.getItem("project_userdata") ;
   let forcheck=JSON.parse(fromlocal);
   console.log(forcheck)
   console.log(forcheck.email, forcheck.password)
   if(forcheck.email===taking_email && forcheck.password===taking_pasw){
       alert("Login Successfull")
       window.location.href="index.html"
   }
   else{
     let showerror =document.getElementById("showerror")
     showerror.textContent="Invalid Username or Password"
   }

}


function onclickaunty(){
    let welcome_aunty=document.getElementById("welcome_aunty")
    welcome_aunty.remove()
}

//for login page ---------------X------------------------X



//for signup page -----------------------------
function regsiterClick(){
    let title =document.getElementById("title1").value;
   let f_name=document.getElementById("firstname").value;
   let l_name=document.getElementById("lastname").value;
   let mob_num=document.getElementById("mobnumber").value;
   let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
   let checkdon=document.getElementById("checkboxid").checked;
  //   console.log(title,f_name,l_name,mob_num,email,password)

  const userdata =
      {
          title:title,
          first_name:f_name,
          last_name:l_name,
          mobile:mob_num,
          email:email,
          password:password,
          checkdon:checkdon,
      } ;
    console.log(userdata)
       if(title.trim()=="" || f_name.trim()=="" || l_name.trim()=="" || mob_num.trim()=="" || email.trim()=="" || password.trim()=="" || checkdon==false){
           let showerror =document.getElementById("showerror")
           showerror.textContent="Please fill all the detail fields and check on checkbox";
           showerror.style.color="red"
       }
       else{
          let showerror =document.getElementById("showerror")
            showerror.textContent="SignUp Successfull"
            showerror.style.color="green"
          // alert("Signup successfull")
          window.location.href="login.html";
          const userdata_projectjson=JSON.stringify(userdata);
          localStorage.setItem("project_userdata" ,userdata_projectjson)
       }
}

 //for signup page -------X--------------X