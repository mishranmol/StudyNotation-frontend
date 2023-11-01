import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";



const Navbar = ({isLoggedIn,setLoggedIn}) => {

    

    return (
        <div className="flex flex-row justify-between mt-1 w-11/12 max-w-[1160px] py-4 mx-auto ">
            <Link to="/" >
                <img src={logo} alt="logo" width={160} height={32} />
            </Link>

            <nav >
                <ul className="flex text-richblack-100 gap-x-6 ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>


            <div className="flex flex-row text-richblack-100 items-center gap-x-4">

                {
                  !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 rounded-[8px] py-[8px] px-[8px] border border-richblack-800 " >Login</button>
                    </Link>
                }

                {
                    !isLoggedIn  &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 rounded-[8px] py-[8px] px-[8px] border border-richblack-800 ">SignUp</button>
                    </Link>
                }

                {
                    
                    isLoggedIn  &&
                    <Link to="/">
                        <button className="bg-richblack-800 rounded-[8px] py-[8px] px-[8px] border border-richblack-800 " onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out");
                        }}>Log out</button>
                    </Link>
                }

                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 rounded-[8px] py-[8px] px-[8px] border border-richblack-800 ">Dashboard</button>
                    </Link>
                }


            </div>



        </div>
    )
}

export default Navbar;
