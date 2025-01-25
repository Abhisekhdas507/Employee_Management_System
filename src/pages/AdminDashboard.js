import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {



  const {  employeeData, loggedInUser} = useContext(AppContext);

  console.log(employeeData);
  console.log(loggedInUser);

  function assignTaskHandler(employee) {

    if (!employee) {
      alert("Employee is undefined.");
      return;
    }

    console.log(employee);

    localStorage.setItem('assignTask', JSON.stringify(employee));
  }




  return (
    <div className='w-11/12 mx-auto max-w-[1160px] overflow-x-hidden box-border'>
      <div className='py-4 mx-auto text-[#acaeef] text-3xl'>

        Hello  {loggedInUser?.firstName} {loggedInUser?.lastName} 👋
      </div>
      <p className='text-[#1d919c] text-2xl pb-4 font-semibold'>Employees Informations</p>


      <div className='bg-[#002d62] p-4 mb-4 flex flex-col gap-5 box-border'>
        {Array.isArray(employeeData) && employeeData.length > 0 ? (

          employeeData.map((employee, index) => {
            return <div className='bg-[#1d919c]  rounded-lg'
              key={index}>
              <div className='m-4'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-[#e5e5e5] font-bold text-2xl'>{employee.firstName} {employee.lastName}</h2>
                  <div className='flex gap-2'>

                    <Link to="/assignTask">
                      <button onClick={() => assignTaskHandler(employee)} className='bg-[#9EC8B9] hover:bg-[#c6fbe9] pt-1 pb-1 pl-2 pr-2 text-[#3b3131]'>Assign Task</button>
                    </Link>
                    <Link to="/removeTask">
                      <button onClick={() => assignTaskHandler(employee)} className='bg-[#EB3678] hover:bg-[#fc4e8e] pt-1 pb-1 pl-2 pr-2 text-[#e5e5e5]'>Remove Task</button>
                    </Link>
                  </div>
                </div>

                <div className='flex justify-between mt-4 text-[#e5e5e5] font-semibold'>
                  <div>Total Task Assigned {employee.employeeTaskCount.totalTaskAssign}</div>
                  <div>Assigned Task {employee.employeeTaskCount.assignTaskNo}</div>
                  <div>Completed Task {employee.employeeTaskCount.completedTask}</div>
                  <div>Failed Task {employee.employeeTaskCount.failedTask}</div>
                </div>
              </div>
            </div>
          })
        ) : (<div> Non of Employee Enrolled </div>)

        }

      </div>
    </div>

  )
}

export default AdminDashboard