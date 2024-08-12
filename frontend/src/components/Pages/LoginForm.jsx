import React from 'react';
import '../style/LoginForm.css';

const LoginForm = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={closeModal} className="close-btn">Close</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
