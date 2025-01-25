import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const RemoveTask = () => {

  const { employeeData, assignTask, assignTaskLists, setAssignTaskLists,
  } = useContext(AppContext);


  useEffect(() => {
    employeeData.forEach((elem) => {
      if (assignTask.firstName === elem.firstName) {
        setAssignTaskLists(elem.taskList.assignTaskList);
      }
    })
  })


  function removeTaskHandler(task)
  {
    employeeData.forEach((elem) => {
      if (assignTask.firstName === elem.firstName) {
        let deleteArray = elem.taskList.assignTaskList;
        
        
        deleteArray = deleteArray.filter((item) => item !== task);
        elem.taskList.assignTaskList = deleteArray;
        localStorage.setItem("employees", JSON.stringify(employeeData));
        toast.success("Task Removed Successfully");
        elem.employeeTaskCount.assignTaskNo = elem.taskList.assignTaskList.length;
      }
    })
  }


  return (
    <div className='w-11/12 mx-auto max-w-[1160px]'>
      <div className='py-4 mx-auto text-[#acaeef] text-3xl'>Remove Task of {assignTask.firstName} {assignTask.lastName} </div>
      <div className='bg-[#002d62] p-4 mb-4 flex flex-col gap-5 box-border'>

        {
          Array.isArray(assignTaskLists) && assignTaskLists.length > 0 ?
            (assignTaskLists.map((task, index) => {
              return (
                <div className='bg-[#1d919c]  rounded-lg '
                  key={index}>

                  <div className='m-4'>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-2 items-center text-[#e5e5e5] font-bold text-2xl'>
                        <h3>Title : </h3>
                        <p>{task.title}</p>
                      </div>
                      <button onClick={() => removeTaskHandler(task)} className='bg-[#EB3678] hover:bg-[#fc4e8e] pt-1 pb-1 pl-2 pr-2 text-[#e5e5e5]'>
                        Remove Task
                      </button>
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

            })


            ) :
            (<div> No Task was assigned to {assignTask.firstName} </div>)
        }
      </div>

    </div>

  )
}

export default RemoveTask