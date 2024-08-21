import Fade from "react-reveal"
import { Link } from 'react-router-dom'
import dog from "../image/dog.png"
import home9 from "../image/home9.png"
import service1 from "../image/service1.png"
import service2 from "../image/service2.png"
import service3 from "../image/service3.png"
import service4 from "../image/service4.png"
import service5 from "../image/service5.png"
import service6 from "../image/service6.png"

import "../style/Services.css"
const Services = () => {
  return (
    <>
    <div className='service'>
      <div className='service-item'>
        <img src={home9} alt=''></img>
        <h1>"India's Most  Exclusive villa"</h1>
      </div>
    </div>
    
    <h1>SWARU-VILLA SERVICES</h1>
    <div className='service-list'>
    <div className='service-list1'>
          <Link to="/villa-details">
            <img src={service1} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
      </div>
      <div className='service-list1'>
      <Link to="/villa-details">
            <img src={service4} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
      </div>
      <div className='service-list1'>
      <Link to="/villa-details">
            <img src={service2} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
      </div>
      <div className='service-list1'>
      <Link to="/villa-details">
            <img src={service3} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GSTPer Day</p>
      </div>
      <div className='service-list1'>
      <Link to="/villa-details">
            <img src={service5} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
      </div>
      <div className='service-list1'>
      <Link to="/villa-details">
            <img src={service6} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
      </div>
    </div>
    <div className='villa-rates'>
      <h1>Villa Rates Swaru </h1>
    </div>
    <hr className='hr1'/>
    <div className='villa-item'>
      <Fade left>
        <div className='villa-item1'>
          <img src={dog} alt='Villa' />
        </div>
      </Fade>
      <Fade right>
        <div className='villa-item1'>
          <p>1. Meals are not included in the above rates.</p>
          <p>2. Additional guests can be accommodated
              with an extra charge of Rs. 650/- per
              person per day.</p>
          <p>3. Child (up to 4 years) no charges, 6-11 Y - 500
              per child, above 11Y adult charges applicable.</p>
          <p>4. Pets are allowed with a Pet fee of Rs 50.</p>
          <p>5. Our villa has the capacity to accommodate a group
              of 15 people easily.</p>
          <p>6. The above rates are not applicable for Diwali,
              Xmas, New Year, or special holidays.</p>
        </div>
      </Fade>
    </div>
    </>
  )
}

export default Services