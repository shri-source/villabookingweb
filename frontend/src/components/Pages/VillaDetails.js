import React from 'react';
import { Link } from "react-router-dom";
import service1 from "../image/service1.png";
import service2 from "../image/service2.png";
import service4 from "../image/service4.png";
import "../style/VillaDetails.css";

function VillaDetails() {
  return (
    <>
    <div className="villa-details">
      <div className="images">
        <img src={service1} alt="" />
        <img src={service4} alt="" />
        <img src={service2} alt="" />
      </div>
      <Link to="/services" className="back">Back to Home</Link>
      <div className="details">
        <div className="about-villa">
          <h2>About the Villa</h2>
          <p>
            upto 14 people Awas Beach house is a property set in a 7-acre plot,
            overlooking the sound Awas beach. This beach house is just under 30
            minutes from Alibaug town. This magnificent property has 6 bedrooms
            with 4 of its bedrooms having a stunning sea view. The space Awas
            beach House is a villa with 5 fully air conditioned rooms and a
            village to be present during your stay. Awas Beach house is a
            property set in a 7-acre plot, overlooking the sound Awas beach.
            This beach house is just under 30 minutes from Alibaug town. There
            are 2 ways of getting to the property: <br /> 1. Three hours drive from
            Mumbai. <br /> 2. Approximately an hour by a ferry from Gateway of India
            and 20-25 minutes ride by our own personal speedboat from Gateway of
            India at an extra cost. Our luxury villa is very close to Mandwa
            jetty.
          </p>
        </div>
        <div className="offers">
          <h2>Rent ₹5500/Per Day</h2>
          <p>Offers: 10% - 20% Discount</p>
          <form className="enquiry-form">
            <label>
              Check-in:
              <input type="date" name="checkin" />
            </label>
            <label>
              Check-out:
              <input type="date" name="checkout" />
            </label>
            <label>
              Guests:
              <input type="number" name="guests" min="1" />
            </label>
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default VillaDetails;
