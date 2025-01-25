import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("employee");
  const {employeeData,adminData,setCurrentAdmin,setIsLoggedIn,
    setLoggedInUser} = useContext(AppContext);


  function employeeHandler()
  {
    if(employeeData)
    {
      const employee = employeeData.find((e) => formData.email === e.email && e.password === formData.password);
      if(employee)
      {
        localStorage.setItem('loggedInUser',JSON.stringify(employee));
        setLoggedInUser(employee);
        navigate("/employeeDashboard");
      } else {
        // alert("Invalid Employee");
        toast.error("Invalid User");
      }
    }
    else
    {
      // alert("Invalid Employee");
      toast.error("Invalid User");
    }

    
  }

  function adminHandler()
  {
    console.log(adminData);
    if(adminData)
      {
        const admin = adminData.find((e) => formData.email === e.email && e.password === formData.password);
        if(admin)
        {
          // console.log("Navigate to admin page");
          localStorage.setItem('loggedInUser',JSON.stringify(admin));
          setLoggedInUser(admin);
          setCurrentAdmin(admin);
          setIsLoggedIn(true);
          navigate("/adminDashboard");
        } else {
          // alert("Invalid Admin 1");
          toast.error("Invalid User");
        }
      }
      else
      {
        // alert("Invalid Admin 2");
        toast.error("Invalid User");
      }

    return;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (accountType === "employee")
      employeeHandler();
    else
      adminHandler();

    setFormData({
      email: "",
      password: ""
    });

  }

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-[#402E7A] rounded-xl p-5 w-[350px]'>
        <h2 className='font-bold text-[#65a2e9] text-3xl mb-7'>Log In</h2>
        <div className="flex bg-[#2E073F] p-1 gap-x-1 my-4 rounded-full max-w-max ">
          <button
            className={`${accountType === "employee" ?
              "bg-[#402E7A] text-[#b3d0f6]"
              : "bg-transparent text-[#7b7b7b]"} py-[4px] px-3 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("employee")}
          >
            Employee
          </button>
          <button
            className={`${accountType === "admin" ?
              "bg-[#402E7A] text-[#b3d0f6]"
              : "bg-transparent text-[#545454]"} py-[4px] px-3 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("admin")}
          >
            Admin
          </button>
        </div>
        <div>
          <form
            onSubmit={submitHandler}
          >
            <label className="w-full mt-5">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Email Address <sup className="text-pink-300"> *</sup></p>
              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full mb-3"
              />
            </label>
            <label className="w-full">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Password <sup className="text-pink-300"> *</sup></p>
              <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full"
              />

              <Link to="#">
                <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">
                  Forgot Password
                </p>
              </Link>
            </label>
            <button className="bg-[#7A1CAC] hover:bg-[#9a24d9] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
              Log In
            </button>
          </form>
        </div>

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-[#282828]"></div>
          <p className="text-[#282828] font-medium leading[1.375rem]">Or</p>
          <div className="w-full h-[1px] bg-[#282828]"></div>
        </div>

        <div>
          <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#a3a3a3]
                border border-[#282828] px-[12px] py-[8px] gap-x-2 mt-6">
            <FcGoogle />
            <p>Sign Up with Google</p>
          </button>
        </div>

        <p className='text-[12px] text-[#5f82af] mt-1 text-center'>
          Dont't have an account ? <Link to='/signup'> <span className='text-[#aa5ced]'>Sign up for free</span> </Link>
        </p>

      </div>
    </div>
  )
}

export default Login