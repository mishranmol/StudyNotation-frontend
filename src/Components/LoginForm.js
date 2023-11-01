import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const LoginForm = ({ setLoggedIn }) => {

    //it is used to switch from one page to another page 
    const navigate = useNavigate();

    function submitHandler(event) {
        //sbbe phele yha pr default behavior ko prevent krte 
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    function clickHandler() {
        setshowPassword(!showPassword);
    }

    const [showPassword, setshowPassword] = useState(false);

    const [formData, setformData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {

        setformData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    return (

        //instead of using html for we will write input inside lable
        //onSubmit={submitHandler} yeah yha isloye likha hai kuki sign in wala button iss form k andar hai tbhi isko yha likha hai kuki button form k andar hai n

        <form className="flex flex-col w-full gap-y-4 mt-6" onSubmit={submitHandler}>

            <lable className="text-white w-full">
                <p className="text-richblack-5  leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
            </lable>
            <input className="bg-richblack-800 text-richblack-5 rounded-md border-[1px] border-none border-richblack-200 p-[12px] w-full h-[35px]" name="email" required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email id"></input>

            <lable className="text-white relative w-full">
                <p className="text-richblack-5 leading-[1.375rem]">Password<sup className="text-pink-200">*</sup></p>

                <div className="flex flex-row z-[-10]">

                    <input className="bg-richblack-800 mt-3 text-richblack-5 p-[12px] rounded-md border-[1px] border-richblack-200 border-none w-full h-[35px]" name="password" required type={showPassword ? ("text") : ("password")} value={formData.password} onChange={changeHandler} placeholder="Enter Password"></input>

                    <p className="mt-[7px] top-[38px] right-3 absolute z-[100] text-richblack-100 cursor-pointer " onClick={clickHandler}>
                        {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </p>




                </div>


                <Link to="#">
                    <p className="flex justify-end text-xs mt-2 text-blue-100">Forgot Password</p>
                </Link>
            </lable>

            <button className="bg-yellow-400 hover:bg-yellow-300 transition-all h-[35px] text-richblack-400 mx-auto w-full font-semibold rounded-md">Sign In</button>

        </form>

    )
}

export default LoginForm;