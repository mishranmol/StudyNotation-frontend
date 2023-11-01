import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLoggedIn }) => {

    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const [showPassword1, setshowPassword1] = useState(false);

    const [formData, setformData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [accountType, setaccountType] = useState("student");

    function changeHandler(event) {

        setformData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Not matched Password")
        }
        else {
            setLoggedIn(true);
            toast.success("Account Created Successfully");
            navigate("/dashboard");
        }
    }


    return (

        <div >
            <form className="" onSubmit={submitHandler} >

                <div className="flex  flex-row rounded-full bg-richblack-800 w-[300px] justify-evenly max-w-max p-1 gap-x-1 my-6 mt-6">
                    <button onClick={() => setaccountType("student")} className={`${accountType === "student"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-richblack-800 text-richblack-200"} py-2 px-5 rounded-full transition duration-200`}>Student</button>
                    <button className={`${accountType === "instructor"
                        ?
                        "bg-richblack-900 text-richblack-5"
                        : "bg-richblack-800 text-richblack-200"} py-2 px-5 rounded-full transition duration-200`} onClick={() => setaccountType("instructor")} >Instructor</button>
                </div>


                {/* contains firstName and lastName */}
                <div className="flex flex-row gap-8 mt-4">

                    <label className="w-full">
                        <p className="text-richblack-5  leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>

                        <input className="bg-richblack-800 mt-2 text-richblack-5 rounded-[0.5rem] border-[1px] border-none border-richblack-200 w-full p-[12px] h-[35px]" required type="text" name="firstname" onChange={changeHandler} placeholder="Enter first Name" value={formData.firstName}></input>
                    </label>




                    <label className="w-full" >
                        <p className="text-richblack-5  leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                        <input className="bg-richblack-800 text-richblack-5 p-[12px] mt-2 rounded-md border-[1px] border-none border-richblack-200 w-full h-[35px]" required type="text" name="lastname" onChange={changeHandler} placeholder="Enter last Name" value={formData.lastName}></input>
                    </label>


                </div>

                {/* contains email address */}
                <label className="w-full">
                    <p className="text-richblack-5 mt-6 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup></p>
                    <input className="bg-richblack-800 text-richblack-5 p-[12px] rounded-md border-[1px] border-none mt-2 border-richblack-200 w-full h-[35px]" required type="email" name="email" onChange={changeHandler} placeholder="Enter your email" value={formData.email}></input>
                </label>


                {/* contains password and confirmPassword */}
                <div className="flex flex-row justify-between gap-x-6 mt-4">


                    <label className="relative w-full">
                        <p className="text-richblack-5 mt-4  leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup></p>

                        <input className="bg-richblack-800 text-richblack-5 p-[12px] rounded-md border-[1px] border-none mt-2 border-richblack-200 w-full h-[35px]" required type={showPassword ? ("text") : ("password")} name="password" onChange={changeHandler} placeholder="Enter Password" value={formData.password} />

                        <span className="mt-[18px] top-[38px] right-3 absolute z-[100] text-richblack-100 cursor-pointer " onClick={() => setshowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}</span>
                    </label>


                    <label className="relative w-full">
                        <p className="text-richblack-5 mt-4 leading-[1.375rem]">ConfirmPassword<sup className="text-pink-200">*</sup></p>

                        <div className="flex flex-row z-[-10]">
                            <input className="bg-richblack-800 text-richblack-5 p-[12px] rounded-md border-[1px] border-none mt-2 border-richblack-200 w-full h-[35px]" required type={showPassword1 ? ("text") : ("password")} name="confirmPassword" onChange={changeHandler} placeholder="Confirm Password" value={formData.confirmPassword} />

                            <span className="mt-[18px] top-[38px] right-3 absolute z-[100] text-richblack-100 cursor-pointer " onClick={() => setshowPassword1((prev) => !prev)}>{showPassword1 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}</span>
                        </div>

                    </label>

                </div>


                <button className="bg-yellow-400 hover:bg-yellow-300 transition-all h-[35px] text-richblack-400 mx-auto w-full font-semibold rounded-md mt-6">Create Account</button>




            </form>

        </div>


    )
}

export default SignupForm;