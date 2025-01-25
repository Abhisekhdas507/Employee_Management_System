import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const SignupForm = () => {

  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }


  const [accountType, setAccountType] = useState("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [adminData, setAdminData] = useState([]);
  const [employeesData, setEmployeesData] = useState([]);
  const [newData, setNewData] = useState({});
  
  
 

  // console.log(accountType);
  let profile = "employees";

  const submitHandler = (e) => {

    if (formData.password != formData.confirmPassword) {
      e.preventDefault();

      // alert("Password and confirm Password do not match");
      toast.error("Password and confirm Password did not match");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      return;
    }

    e.preventDefault();

    if (accountType == "employee") {
      profile = "employees";
      const existingEmployees = JSON.parse(localStorage.getItem(profile)) || [];
      let employeeTaskCount = {totalTaskAssign : 0, assignTaskNo : 0 ,completedTask : 0, failedTask : 0};
      let taskList = { assignTaskList : [] , completedTaskList : [] , failedTaskList : [] };
      console.log(employeeTaskCount);
    
      // const mergedObj = { ...formData, ...employeeTaskCount };

     

      const newFormData = {
        ...formData,
        ...{employeeTaskCount : employeeTaskCount},
        ...{taskList : taskList},
      }

      console.log(newFormData.taskList.assignTaskList);

      localStorage.setItem(profile, JSON.stringify([...existingEmployees,newFormData]));
    }
    else {
      profile = "admin";
      const existingEmployees = JSON.parse(localStorage.getItem(profile)) || [];
      localStorage.setItem(profile, JSON.stringify([...existingEmployees, formData]));
    }

    // alert("User data saved successfully!");
    toast.success("User data saved Successfully !");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <div>
      <div className='text-[#b3d0f6] '>
        <p className='font-bold text-xl'>Get Start</p>
        <p className='font-semibold text-md'>Already a member?<Link to="/login"><span className='text-[#aa5ced]'> Log in</span></Link> </p>
      </div>

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

      <form
        onSubmit={submitHandler}
      >
        {/* First name and Last name */}
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-300"> *</sup> </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-300">*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
            />
          </label>
        </div>

        {/* email */}
        <div className="mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-300">*</sup></p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter your Email Address"
              value={formData.email}
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
            />
          </label>
        </div>

        {/* createPassword and confirm password */}
        <div className="flex gap-x-4 mt-[10px]">
          <label>
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-300">*</sup></p>

            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              onChange={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-300">*</sup></p>

            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
            />
          </label>
        </div>

        {/* Button */}
        <div className='flex pt-[20px] justify-center'>
          <button className="w-full bg-[#7A1CAC] rounded-[8px] font-medium text-[#EBD3F8] px-[12px] py-[8px] mt-6 hover:bg-[#9e25df]">
            Create Account
          </button>
        </div>


      </form>
    </div>
  )
}

export default SignupForm