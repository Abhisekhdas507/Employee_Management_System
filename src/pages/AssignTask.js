import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AssignTask = () => {

  const {  employeeData , setEmployeeData
    } = useContext(AppContext);

  const assignTask = JSON.parse(localStorage.getItem('assignTask')) || [];
  console.log(assignTask);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignData: "",
    submitingDate: "",
    category: ""
  })

  function changeHandler(event) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(employeeData);

    employeeData.forEach((elem) => {
      if(assignTask.firstName === elem.firstName)
      {
       
        elem.taskList.assignTaskList.push(formData);

        elem.employeeTaskCount.totalTaskAssign = elem.employeeTaskCount.totalTaskAssign + 1;
        elem.employeeTaskCount.assignTaskNo = elem.employeeTaskCount.assignTaskNo + 1;
        localStorage.setItem('employees',JSON.stringify(employeeData));
        setEmployeeData(employeeData);
        toast.success("Task Assigned Successfully");
      }
    })
    

    setFormData({
      title: "",
      description: "",
      assignData: "",
      submitingDate: "",
      category: ""
    });
  }


  return (
    <div className='w-11/12 mx-auto max-w-[1160px] bg-[#002d62] p-6'>
      <h2 className='text-[#b9a0c9] pb-4 font-bold text-2xl'>Assign Task To {assignTask.firstName} {assignTask.lastName}</h2>
      <form 
      onSubmit={submitHandler}
      >
        <div className='flex justify-between gap-6'>
        <div className='flex flex-col w-[50%] gap-8'>
        <label className="w-full">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Title <sup className="text-pink-300"> *</sup> </p>
              <input
                required
                type="text"
                name="title"
                onChange={changeHandler}
                placeholder="Title of Assigned Project"
                value={formData.title}
                className="bg-[#4C3BCF] w-[100%] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
              />
            </label>
            
            <div className='flex gap-4'>
            <label className="w-full">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Assigned Task Date <sup className="text-pink-300"> *</sup> </p>
              <input
                required
                type="date"
                name="assignData"
                onChange={changeHandler}
                placeholder="Assigned Task Date"
                value={formData.assignData}
                className="bg-[#4C3BCF] w-[100%] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
              />
            </label>
            <label className="w-full">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Submitting Task Date <sup className="text-pink-300"> *</sup> </p>
              <input
                required
                type="date"
                name="submitingDate"
                onChange={changeHandler}
                placeholder="Title of Assigned Project"
                value={formData.submitingDate}
                className="bg-[#4C3BCF] w-[100%] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
              />
            </label>
            </div>

           
            <label className="w-full">
              <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                Category <sup className="text-pink-300"> *</sup> </p>
              <input
                required
                type="text"
                name="category"
                onChange={changeHandler}
                placeholder="Task Category"
                value={formData.category}
                className="bg-[#4C3BCF] w-[100%] rounded-[0.5rem] text-[#b3d0f6]  p-[8px]"
              />
            </label>
        </div>

        <div className='w-[50%]'>
          <label className="w-full">
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Description <sup className="text-pink-300"> *</sup> </p>
            <textarea
              required
              name="description"
              onChange={changeHandler}
              placeholder="Description"
              value={formData.description}
              className="bg-[#4C3BCF] w-[100%] rounded-[0.5rem] text-[#b3d0f6] h-[90%]   p-[8px]"
            />
          </label>
        </div>

        </div>
       
        <div className='flex  justify-center pt-6'>
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-[60%]'>Create Task</button>
        </div>
        
      </form>
    </div>
  )
}

export default AssignTask