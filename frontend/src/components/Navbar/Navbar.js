import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import villas from '../Assets/villa.pdf';
import Swaru from "../image/Swaru (3).png";
import BookingForm from '../Pages/BookingForm.jsx';
import LoginForm from '../Pages/LoginForm.jsx';
import './Navbar.css';

const Navbar = () => {
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const openBookingForm = () => setBookingFormOpen(true);
  const closeBookingForm = () => setBookingFormOpen(false);
  const openLoginForm = () => setLoginFormOpen(true);
  const closeLoginForm = () => setLoginFormOpen(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-brand'>
          <img src={Swaru} alt='Brand' className='navbar-logo' />
          <button className='navbar-toggle' onClick={toggleNav}>
            {isNavOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className={`navbar-list ${isNavOpen ? 'navbar-list-open' : ''}`}>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/">Home</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/about">About</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/services">Services</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/contact">Contact</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-link' to="/gallery">Gallery</Link>
          </li>
          <li className='navbar-item'>
            <Link className='navbar-btn' to="/book-now" onClick={openBookingForm}>Book Now</Link>
          </li>
          <li className='navbar-item'>
            <button className='navbar-btn' onClick={openLoginForm}>Login</button>
          </li>
          <li className='navbar-item'>
            <button className='download'>
              <a href={villas} download="villa.pdf">Download PDF</a>
            </button>
          </li>
        </ul>
      </div>

      {isBookingFormOpen && <BookingForm closeModal={closeBookingForm} />}
      {isLoginFormOpen && <LoginForm closeModal={closeLoginForm} />}
    </>
  );
}

export default Navbar;
