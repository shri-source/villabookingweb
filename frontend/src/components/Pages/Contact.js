import React from 'react';
import "../style/Contact.css";

const Contact = () => {
  return (
    <>
      <div className='get-in'>
        <h1>GET IN TOUCH</h1>
        <p>Unlike other hospitality firms, all the properties are owned and run by the SWARU-VILLA management itself. You can thus be rest assured about the consistency in all aspects of your voyage whether it is the stay, food, or service. We are simply here to uplift your villa experience to make it more memorable!</p>
      </div>
      <hr className='hr1'/>
      <div style={styles.container}>
        <div className="form-container">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30276.37464815354!2d73.81975039999999!3d18.4588737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724578301684!5m2!1sen!2sin"
            className="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

export default Contact;
