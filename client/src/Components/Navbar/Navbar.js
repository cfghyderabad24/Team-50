import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { CounterContext } from '../CounterContext';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let { user, setUser } = useContext(CounterContext);
  let navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/')
  }

  return (
    <div className='shadow-sm position-sticky top-0 z-3 glass-morphism'>
      <nav className='px-3 pe-5 py-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-3 align-items-center'>
            <img style={{ height: '55px', width: "55px", marginLeft: "20px" }} className='rounded-circle' src="data:image/jpeg;base64,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" alt="" />
            <h3>
              Website
            </h3>
          </div>
          <div className='d-flex gap-5 text-dark'>
            <NavLink className='nav-link' to='/'><b className='fs-5'>Home</b></NavLink>
            <NavLink className='nav-link' to='/about'><b className='fs-5'>About Us</b></NavLink>
          </div>
          <div>
            {
              user === null ? (
                <>
                  {/* <NavLink className='nav-link' to='/signup'><b className='fs-5'>SignUp</b></NavLink> */}
                  <NavLink className='nav-link' to='/login'><b className='fs-5'>LogIn</b></NavLink>
                </>
              ) : (
                <div className='d-flex flex-row-reverse gap-4 '>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-gradient rounded-4 p-1 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <CgProfile size={'25px'} className="mb-1" /> <span className="fs-5"><b>{user.firstname}</b></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/profile">Profile</a></li>
                       <li className="dropdown-item" style={{cursor:"pointer"}}  onClick={handleLogout} >Logout</li>
                    </ul>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
