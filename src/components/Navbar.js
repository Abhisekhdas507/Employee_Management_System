import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Das brand logo.png";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

  const {isLoggedIn,setIsLoggedIn,currentUser,loggedInUser,setLoggedInUser} = useContext(AppContext);
  console.log("is this a man");
  console.log(loggedInUser);


  useEffect(() => {
    if(loggedInUser && loggedInUser.length !== 0)
      {
        console.log("garam");
        setIsLoggedIn(true);
      }
      else
      {
        setIsLoggedIn(false);
        console.log("bar bar ye disturb kr raha hai");
        console.log(loggedInUser);
      }
  });

 

  console.log(isLoggedIn);

  function logoutHandler()
  {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser('');
    // alert("Log Out");
  }

  console.log(isLoggedIn);
  console.log("yo");
  return (
    <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
      
        <img src={logo} width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex gap-6 text-[#EBD3F8]'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-4'>
        {!isLoggedIn &&
          <Link to="/login">
            <button className='bg-[#7A1CAC] text-[#EBD3F8] py-[6px] px-[12px] rounded-[8px] border border-[#AD49E1]'>
              Log in
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/signup">
            <button className='bg-[#7A1CAC] text-[#EBD3F8] py-[6px] px-[12px] rounded-[8px] border border-[#AD49E1]'>
              Sign up
            </button>
          </Link>
        }
        {isLoggedIn &&
           <Link to="/">
            <button onClick={logoutHandler} className='bg-[#7A1CAC] text-[#EBD3F8] py-[6px] px-[12px] rounded-[8px] border border-[#AD49E1]'>
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
        <Link to={`${currentUser}` === "admin" ? ("/adminDashboard") : ("/employeeDashboard")}>
            <button  className='bg-[#7A1CAC] text-[#EBD3F8] py-[6px] px-[12px] rounded-[8px] border border-[#AD49E1]'>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar