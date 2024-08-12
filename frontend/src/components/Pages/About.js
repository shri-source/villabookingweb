import React, { useEffect } from 'react';
import caram from "../image/caram.png";
import chech from "../image/chech.png";
import circle from "../image/circle.png";
import dog from "../image/dog.png";
import games from "../image/game.png";
import garden from "../image/garden.png";
import map from "../image/map.png";
import nature from "../image/nature.png";
import "../style/About.css";

const About = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.out-item1');

    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
      }, index * 1000); 
    });
  }, []); 

  return (
    <>
      <div className='about'>
        <h1>AMENITIES</h1>
        <p>SWARU-VILLA</p>
        <hr className='hr'/>
      </div>
      <div className='outdoors'>
        <div className='out-item'>
          <h1>OUTDOORS</h1>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Kids Zone</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Private Lawn</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Celebration Zone</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Outdoor Sports</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Badminton</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Private Lawn</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Outdoor dining area</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Parking</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Mountain-view</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Security cameras</p>
          </div>
        </div>
        <div className='out-item'>
          <h1>INDOORS</h1>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>AC Bedrooms</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Ensuite Bathrooms</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Mosquito net</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Wardrobe with lock</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Board Games</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Smart TV</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Geyser</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Fully Equiped Kitchen</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Bluetooth music system</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt=''></img>
            <p>Microwave</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='thing-to'>
        <h1>THINGS TO DO</h1>
        <p>SWARU VILLA</p>
        <hr className='hr'/>
      
        </div>
      <div className='games'>
        <div className='games-item'>
          <img src={games} alt=''></img>
          <h1>OUTDOOR GAMES</h1>
          <p>“Enhance your stay with a variety of  <br />
         recreational   activities with our badminton
           volleyball, etc Have fantastic time!”</p>
        </div>
        <div className='games-item'>
          <img src={caram} alt=''></img>
          <h1>CARROM BOARD</h1>
          <p>"Carom board is a timeless indoor <br /> 
              game    where players  use wooden
              strikers to skillfully pocket  opponent's  <br /> 
              on a marked board.</p>
        </div>
        <div className='games-item'>
          <img src={nature} alt=''></img>
          <h1>NATURE WALK</h1>
          <p>"Explore the 200-meter rustic walking <br />
              path around the property to reconnect
              with nature  and maintain your
              fitness."</p>
        </div>
      </div>

      <hr />

      <div className='info'>
        <p>Tamhini Ghat,Gold Valley, Sanaswadi, <br />
        Maharashtra 402120</p>
        <h1>INFORMATION</h1>
        <hr  className='hr'/>
      </div>

      <div className='info-item'>
        <div className='info-item1'>
          <p className='p'>CHECK-IN</p>
          <div className='info-item2'>
            <img src={map} alt=''></img>
            <p>Tamhini Ghat,Gold Valley, Sanaswadi, <br />
            Maharashtra 402120</p>
          </div>
          <p className='p1'>Check in time .... 11 am. <br />
              Check out at .... 10 am. <br />
              Late check-out, if available
              will be permitted at an extra
              charge.
        </p>
        </div>
        <img className='garden' src={garden} alt=''></img>
      </div>
      <hr className='hr'/>
      <div className='check'>
        <img src={chech} alt=''></img>
        <p>"Dear Guests, we're excited to
          share that a convenient self-check-in option is available at
          our property, providing you with
          a seamless and efficient arrival
          experience. Enjoy the flexibility
          and ease of checking in at your
          convenience.”
</p>
      </div>
      <hr />
      <div className='table'>
        <p>TamhiniGhat,GoldValley, Sanaswadi, <br/>
        Maharashtra 402120</p>
        <h2>Villa Rates</h2>
        <hr className='hr'/>
      </div>
      <div className='table-content'>
        <h2>Swaru (With Private Lawn)</h2>
      </div>
      <div className='table-content1'>
        <table>
          <tr>
            <th>Day / Rate</th>
            <th>No.Of Guests</th>
            <th>Rate Per Day</th>
          </tr>
          <tr>
            <td>Weekdays
            (Mon-Thu)</td>
            <td>2-4</td>
            <td>5000/- +GST</td>
          </tr>
          <tr>
            <td>Weekends
            (Fri-Sun)</td>
            <td>2-4</td>
            <td>5500/- +GST</td>
          </tr>
        </table>
      </div>
      <hr/>
      <div className='table-content'>
        <p>*Rate As Per Day</p>
        <h2>Swaru (With Outdoor Lawn)</h2>
      </div>
      <div className='table-content1'>
        <table>
          <tr>
            <th>Day / Rate</th>
            <th>No.Of Guests</th>
            <th>Rate Per Day</th>
          </tr>
          <tr>
            <td>Weekdays
            (Mon-Thu)</td>
            <td>2-4</td>
            <td>5000/- +GST</td>
          </tr>
          <tr>
            <td>Weekends
            (Fri-Sun)</td>
            <td>2-4</td>
            <td>5500/- +GST</td>
          </tr>
        </table>
      </div>
      <hr/>
      <div className='per-Day'>
        <p>TamhiniGhat,GoldValley, Sanaswadi, <br/>
        Maharashtra 402120</p>
        <hr className='hr'/>
      </div>
      <div className='per-day1'>
        <img src={dog} alt=''></img>
        <div className='per-day2'>
        <p>1. Meals are not included in the above rates.</p>
        <p>2. Additional guests can be accommodated
            with an extra charge of Rs. 650/- per
            person per day.
        </p>
        <p>3. Child (upto 4 years) no charges 6-11 Y - 500
            per child above 11Y adult charges applicable
        </p>
        <p>4. Pets are allowed with Pet fee of Rs-500</p>
        <p>5. Our villa has capacity to accommodate group
          of 15 people easily.</p>
          <p>6. The above rates are not applicable for Diwali/
          Xmas/New Year/Special holidays.</p>
      </div>
      </div>
    </>
  );
};

export default About;
