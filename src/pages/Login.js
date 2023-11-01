import React from "react";
import loginImg from "../assets/login.png";
import Template from "../Components/Template";

const Login = ({setLoggedIn}) => {

    return (
    <div className="mt-4"> 
    <Template 
     title="Welcome Back"
     desc1="Build skills for today,tomorrow,and beyond."
     desc2="Education to future-proof your career."
     image={loginImg}
     formtype="login"
     setLoggedIn={setLoggedIn}
     />
    </div>
  
       
    )
}

export default Login;
