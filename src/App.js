import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import { useState } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import AssignTask from './pages/AssignTask';
import RemoveTask from './pages/RemoveTask';

function App() {

  return (
    <div className='bg-[#2E073F] min-h-screen w-screen h-auto overflow-y-auto overflow-x-hidden'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/employeeDashboard' element={<EmployeeDashboard/>}/>
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/assignTask' element={<AssignTask/>}/>
        <Route path='/removeTask' element={<RemoveTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
