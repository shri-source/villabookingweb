import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import villa from "../image/villa.png";
import BookingForm from '../Pages/BookingForm.jsx';
import LoginForm from '../Pages/LoginForm.jsx';
import './Navbar.css';

const Navbar = () => {
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const openBookingForm = () => {
    setBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setBookingFormOpen(false);
  };

  const openLoginForm = () => {
    setLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className='navbar-brand'>
          <img src={villa} alt='Brand' className='navbar-logo' />
        </div>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/">Home</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/about">About</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/contact">Contact</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/gallery">Gallery</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/services">Services</Link>
          </li>
          <li className='navbar-item'>
            <button className='navbar-btn' onClick={openBookingForm}>Book Now</button>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-btn'  onClick={openLoginForm}><button>Login</button></Link>
          </li>
        </ul>
      </div>

      {isBookingFormOpen && <BookingForm closeModal={closeBookingForm} />}
      {isLoginFormOpen && <LoginForm closeModal={closeLoginForm} />}
    </>
  );
}

export default Navbar;
