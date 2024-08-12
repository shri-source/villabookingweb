import React from 'react';
import '../style/BookingForm.css';

const BookingForm = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Villa Booking Form</h2>
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
            <label>Check-in Date:</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Check-out Date:</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>No. of Guests:</label>
            <input type="number" min="1" required />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal} className="close-btn">Close</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
