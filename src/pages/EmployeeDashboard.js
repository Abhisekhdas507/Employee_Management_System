import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react';
import { useEffect } from 'react';

const EmployeeDashboard = () => {

  const { loggedInUser, employeeData, setEmployeeData } = useContext(AppContext);

  const [taskList, setTaskList] = useState({});
  const [assignTaskList, setAssignTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);
  const [failedTaskList, setFailedTaskList] = useState([]);



  useEffect(() => {
    employeeData.forEach((elem) => {
      if (loggedInUser.firstName === elem.firstName) {
        setAssignTaskList(elem.taskList.assignTaskList);
        setCompletedTaskList(elem.taskList.completedTaskList);
        setFailedTaskList(elem.taskList.failedTaskList);
      }
    })
  })

  function completedHandler(task) {

    employeeData.forEach((elem) => {
      if (elem.firstName === loggedInUser.firstName) {
        elem.taskList.completedTaskList.push(task);
        elem.employeeTaskCount.completedTask = elem.employeeTaskCount.completedTask + 1;
        elem.employeeTaskCount.assignTaskNo = elem.employeeTaskCount.assignTaskNo - 1;
        let deleteArray = elem.taskList.assignTaskList;
        deleteArray = deleteArray.filter((item) => item !== task);
        elem.taskList.assignTaskList = deleteArray;

        localStorage.setItem('employees', JSON.stringify(employeeData));
        setEmployeeData(employeeData);
      }
    })
  }


  function faildedHandler(task) {

    employeeData.forEach((elem) => {
      if (elem.firstName === loggedInUser.firstName) {
        elem.taskList.failedTaskList.push(task);
        elem.employeeTaskCount.failedTask = elem.employeeTaskCount.failedTask + 1;
        elem.employeeTaskCount.assignTaskNo = elem.employeeTaskCount.assignTaskNo - 1;
        let deleteArray = elem.taskList.assignTaskList;
        deleteArray = deleteArray.filter((item) => item !== task);
        elem.taskList.assignTaskList = deleteArray;

        localStorage.setItem('employees', JSON.stringify(employeeData));
        setEmployeeData(employeeData);
      }
    })
  }

  return (
    <div className='w-11/12 mx-auto max-w-[1160px] overflow-x-hidden box-border'>
      <div className='py-4 mx-auto text-[#acaeef] text-3xl'>

        Hello  {loggedInUser?.firstName} {loggedInUser?.lastName} 👋
      </div>
      <div>
        <div className='bg-[#002d62] p-4 mb-4 flex flex-col gap-5 box-border'>
          <p className='text-[#8CABFF] font-semibold'>Due Assigned Task List</p>
          {
            Array.isArray(assignTaskList) && assignTaskList.length > 0 ?
              (assignTaskList.map((task, index) => {
                return (
                  <div key={index} className='bg-[#1d919c]  rounded-lg'>
                    <div className='m-4'>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center text-[#e5e5e5] font-bold text-2xl'>
                          <h3>Title : </h3>
                          <p>{task.title}</p>
                        </div>
                        <div className='flex gap-2'>
                          <button onClick={() => completedHandler(task)} className='bg-[#9EC8B9] hover:bg-[#c6fbe9] pt-1 pb-1 pl-2 pr-2 text-[#3b3131]'>
                            Mark As Completed
                          </button>
                          <button onClick={() => faildedHandler(task)} className='bg-[#EB3678] hover:bg-[#fc4e8e] pt-1 pb-1 pl-2 pr-2 text-[#e5e5e5]'>
                            Mark As Failed
                          </button>
                        </div>

                      </div>

                      <div className='flex justify-between mt-4 text-[#002d62] font-semibold'>
                        <div className='flex gap-2'>
                          <h2>Category : </h2>
                          <p>{task.category}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Task Assigned Date : </h2>
                          <p>{task.assignData}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Last Date of Submitting Task : </h2>
                          <p>{task.submitingDate}</p>
                        </div>
                      </div>

                      <div className='flex gap-2 mt-4 text-[#002d62] font-semibold'>
                        <h2>Description : </h2>
                        <p>{task.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })) :

              (<div className='text-[#8CABFF] font-semibold'>No Task Assigned</div>)
          }
        </div>
        <div className='bg-[#03C988] p-4 mb-4 flex flex-col gap-5 box-border'>
          <p className='text-[#00337C] font-semibold'>Completed Task List</p>
          {
            Array.isArray(completedTaskList) && completedTaskList.length > 0 ?
              (completedTaskList.map((task, index) => {
                return (
                  <div key={index} className='bg-[#1d919c]  rounded-lg'>
                    <div className='m-4'>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center text-[#e5e5e5] font-bold text-2xl'>
                          <h3>Title : </h3>
                          <p>{task.title}</p>
                        </div>


                      </div>

                      <div className='flex justify-between mt-4 text-[#002d62] font-semibold'>
                        <div className='flex gap-2'>
                          <h2>Category : </h2>
                          <p>{task.category}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Task Assigned Date : </h2>
                          <p>{task.assignData}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Last Date of Submitting Task : </h2>
                          <p>{task.submitingDate}</p>
                        </div>
                      </div>

                      <div className='flex gap-2 mt-4 text-[#002d62] font-semibold'>
                        <h2>Description : </h2>
                        <p>{task.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })) :

              (<div className='text-[#00337C] font-semibold'>No Task Assigned</div>)
          }
        </div>
        <div className='bg-[#E94560] p-4 mb-4 flex flex-col gap-5 box-border'>
          <p className='text-[#0F3460] font-semibold'>Failed Task List</p>
          {
            Array.isArray(failedTaskList) && failedTaskList.length > 0 ?
              (failedTaskList.map((task, index) => {
                return (
                  <div key={index} className='bg-[#1d919c]  rounded-lg'>
                    <div className='m-4'>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center text-[#e5e5e5] font-bold text-2xl'>
                          <h3>Title : </h3>
                          <p>{task.title}</p>
                        </div>


                      </div>

                      <div className='flex justify-between mt-4 text-[#002d62] font-semibold'>
                        <div className='flex gap-2'>
                          <h2>Category : </h2>
                          <p>{task.category}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Task Assigned Date : </h2>
                          <p>{task.assignData}</p>
                        </div>
                        <div className='flex gap-2'>
                          <h2>Last Date of Submitting Task : </h2>
                          <p>{task.submitingDate}</p>
                        </div>
                      </div>

                      <div className='flex gap-2 mt-4 text-[#002d62] font-semibold'>
                        <h2>Description : </h2>
                        <p>{task.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })) :

              (<div className='text-[#0F3460] font-semibold'>No Task Assigned</div>)
          }
        </div>
      </div>

    </div>
  )
}

export default EmployeeDashboard