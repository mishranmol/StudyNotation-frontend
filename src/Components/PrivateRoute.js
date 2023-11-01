import React from "react";
import Dashboard from "../pages/Dashboard";
import { Navigate } from "react-router-dom";

//children by default aajate hai mtlb private route ka child dashboard hai to voh automatically/by default aajyega 
const PrivateRoute = ({isLoggedIn,children}) =>
{

       if(isLoggedIn==="true"){
          return children;
       }
       else{
       return <Navigate to="/dashboard"/>
    }
}

export default PrivateRoute;