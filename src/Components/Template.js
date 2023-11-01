import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc";

const template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
    return (
        <div className=" flex flex-row justify-evenly gap-x-12  ">

            <div className="w-11/12 max-w-[450px]" >
                <div>
                    <h1 className="text-richblack-5 font-semibold  text-[1.875rem] leading-[2.375rem]">{title}</h1>

                    <div className="text-[1.125rem] leading-[1.625rem] mt-4">
                        <p className="text-richblack-100">{desc1}</p>
                        <p className="text-blue-100 italic">{desc2}</p>
                    </div>

                </div>

                {formtype === "SignupForm" ? (<SignupForm setLoggedIn={setLoggedIn} />) : (<LoginForm setLoggedIn={setLoggedIn} />)}

                <div className="flex flex-row w-full my-4  items-center gap-x-2">

                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <span className="text-richblack-700 leading-[1.375rem] font-medium ">OR</span>
                    <div className="h-[1px] w-full bg-richblack-700"></div>

                </div>


                <button className="flex flex-row gap-x-2 justify-center items-center mt-6 w-[400px]  h-[40px] mx-auto rounded-[8px] border-[1px] border-richblack-100">
                <FcGoogle className="w-[30px] h-[20px]"/>
                <p className="text-richblack-100 ">Sign Up With Google</p></button>
            </div>

            <div className="relative w-11/12 mt-6 max-w-[450px]">
                <img className="absolute -top-2 right-2" src={frameImage} width={400} height={250} loading="lazy"></img>
                <img className="absolute -top-4 right-4" src={image} height={558} width={400}></img>
            </div>



        </div>


    )
}

export default template;