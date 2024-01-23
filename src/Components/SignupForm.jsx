import React, { useState, useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import "../Styles/Login.css";
import  axios from "axios"

function SignupForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const navigate = useNavigate();
   
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUpClick = () =>{
    navigate("/login")
  }
  
  const [name, SetName] = useState()
  const [email, SetEmail] = useState()
  const [password, SetPassword] = useState()
  
const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post('',{name,email,password})
  .then(result => console.log(result))
  .catch(err => console.log(err))
}




  return (
    <div>
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
        Care<span className="legal-siteSign">+</span>
        </Link>
      </h1>
      </div>
      <center>
      <div className="signin-page">
        
        <div class="container">
        <div class="heading">Sign Up</div>
            <form action="" class="form" onSubmit={handleSubmit}>
              <input required="true" class="input" type="text" name="name" id="name" placeholder="userName"
              onChange={(e) => SetName(e.target.value)}/>
              <input required="true" class="input" type="email" name="email" id="email" placeholder="E-mail"
              onChange={(e) => SetEmail(e.target.value)}/>
              <input required="true" class="input" type="password" name="password" id="password" placeholder="Password"
              onChange={(e) => SetPassword(e.target.value)}/>
              
             
              <button class="login-button" type="submit" value="Sign Up" onClick={handleSignUpClick}>Sign Up</button> 
              
            </form>
            <div class="social-account-container">
                <span class="title">Or</span>
                <p class="text-gray-900 mt-4"> Already have an account? 
               <a class="text-sm text-blue-500 -200 hover:underline mt-4" href="#" onClick={handleLoginClick}> Login</a></p>
            </div>
          </div>
          
    </div>
      </center>

    
    </div>
  );
}

export default SignupForm;
