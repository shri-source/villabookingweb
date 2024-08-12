import '..style/Contact.css';
import React from 'react';

const Contact = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
