import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import villa from "../Assets/villavideo.mp4";
import bath from "../image/bath.png";
import bed from "../image/bed.png";
import bhira from "../image/Bhira.jpg";
import caram from "../image/caram.png";
import chirag from "../image/chirag.png";
import circle from "../image/circle.png";
import color1 from "../image/color1.png";
import color2 from "../image/color2.png";
import color3 from "../image/color3.png";
import color4 from "../image/color4.png";
import river from "../image/divegar.jpeg";
import extra from "../image/extra.png";
import games from "../image/game.png";
import theme from "../image/imagica.jpg";
import kitchen from "../image/kitchen.png";
import light from "../image/light.png";
import man from "../image/man.png";
import more from "../image/more.png";
import nature from "../image/nature.png";
import orchard from "../image/orchard.png";
import raigad from "../image/Raigad.webp";
import sai from "../image/sai.png";
import shivraj from "../image/shivraj.png";
import tv from "../image/tv.png";
import "../style/Home.css";
import BookingForm from './BookingForm';



const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
const images = [
  'url(../image/home1.png)',
  'url(../image/home2.png)',
  'url(../image/home3.png)'
  // Add more image URLs as needed
];
  const reviews = [
    {
        name: "PRIYANKA PATIL",
        rating: 5,
        review: "Swaru Farm villa ... You can call it asyour second home where you will getLuxury accommodation at an affordableprice. Lush green surroundings wellmaintained lawn. Villa is surrounded bywonderful hills. . If you want to spendfew days in lap of Nature then this place        is perfect for you.",
        date: "2024-08-16",
    },
    {
        name: "BHAGVAN AHIRRAO",
        rating: 4,
        review: "Swaru villa is located very near toTamhini ghat and easily accessible.Place is really quite and you canspent very good time with family.Basic kitchen stuff are available invilla so that you can cook your foodand also restaurant is available justoutside the gated community.",
        date: "2024-08-10",
    },
    {
        name: "AMOL MAGAR",
        rating: 3,
        review: "This is a must visit property..situated amidst dense mountains oftamhini ghat . Was been here forovernight stay with family. House iswell maintained with lovely interiorand all the things you need for aperfect stay. This property is sereneand very peaceful . Will definitely plan to visit in rainy season again🙂",
        date: "2024-08-10",
    },
    {
        name: "KUSHAN MAJUMDER",
        rating: 4,
        review: "A wonderful experience with luxuriousamenities. Me along with my threefriends and a pet travelled fromHyderabad by road but the wholejourney was worth it. The beauty ofmountains and roar of water will makeyou fall in love with the place. The perfect furnished villa with everything that you need is present there. I would recommend everyone to give it a shot and you won’t regret”",
        date: "2024-08-10",
    },
];


const nextReview = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
};

const prevReview = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length));
};

const handleClosePopup = () => {
  setShowPopup(false);
};
const handleOpenBookingForm = () => {
  setShowPopup(false);
  setShowBookingForm(true);
};

const handleCloseBookingForm = () => {
  setShowBookingForm(false);
};

const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex(prevIndex =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(prevIndex =>
      (prevIndex + 1) % images.length
    );
  };

  useEffect(() => {
    const items = document.querySelectorAll('.out-item1');

    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
      }, index * 500); 
    });
  }, []); 

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Special Offer!</h2>
            <p>Get 20% - 30% off on your next booking at Swaru Villa!</p>
            <div className="popup-buttons">
              <button onClick={handleClosePopup}>Close</button>
              <button onClick={handleOpenBookingForm} className="book-now-button">Book Now</button>
            </div>
          </div>
        </div>
      )}

      {showBookingForm && (
        <BookingForm closeModal={handleCloseBookingForm} />
      )}
    {/* <div className="welcome">
      <div className="header">
        <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
      </div>
      <div className="content">
        <h1 style={{fontSize:"60px"}}>WELCOME TO SWARU VILLA</h1>
        <p className="subtitle">
          "ESCAPE the city hustle
          <br />
          EXPLORE Swaru Villa in Tamhini ghat
          <br />
          in the heart of the Nature."
        </p>
      </div>
      <div className="sub-div">
        <h1>
          Tamhini Ghat, Gold Valley, Sanaswadi,
          <br />
          Maharashtra 402120
        </h1>
      </div>
    </div> */}
    <div
      className="welcome"
      style={{ backgroundImage: images[currentImageIndex] }}
    >
      <div>
      <Fade top duration={1000}>
        <div className="header">
          <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
        </div>
      </Fade>
      <Fade bottom duration={1000}>
        <div className="content">
          <h1 style={{ fontSize: '60px' }}>WELCOME TO SWARU VILLA</h1>
          <p className="subtitle">
            "ESCAPE the city hustle
            <br />
            EXPLORE Swaru Villa in Tamhini ghat
            <br />
            in the heart of the Nature."
          </p>
        </div>
      </Fade>
      <Slide bottom duration={1000}>
        <div className="sub-div">
          <h1>
            Tamhini Ghat, Gold Valley, Sanaswadi,
            <br />
            Maharashtra 402120
          </h1>
        </div>
      </Slide>
    </div>
      <button className="nav-button prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="nav-button next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
    <div className="host">
      <div className="host-item">
        <p>TamhiniGhat,GoldValley,Sanaswadi,
          <br />
        Maharashtra 402120</p>
        </div>
        </div>
        <div className="table-content">
      <Slide top>
        <h1>ABOUT SWARU VILLA</h1>
      </Slide>
      <Fade>
        <hr className="hr" />
      </Fade>

      <div className="img-item">
        <Zoom>
          <img src={color1} alt="" />
          <img src={color2} alt="" />
          <img src={color3} alt="" />
          <img src={color4} alt="" />
        </Zoom>
      </div>

      <div className="table-item">
        <Fade bottom>
          <div className="table-list">
            <img src={man} alt="" />
            <h3>4 PERSONS</h3>
          </div>
          <div className="table-list">
            <img src={light} alt="" />
            <h3>2 KINGSIZE BED</h3>
          </div>
          <div className="table-list">
            <img src={bed} alt="" />
            <h3>1 LIVING ROOM</h3>
          </div>
          <div className="table-list">
            <img src={bath} alt="" />
            <h3>2 BATH</h3>
          </div>
        </Fade>
      </div>

      <div className="table-item1">
        <Fade bottom>
          <div className="table-list1">
            <img src={more} alt="" />
            <h3>
              2 Persons can sleep
              <br />
              comfortably
            </h3>
          </div>
          <div className="table-list1">
            <img src={extra} alt="" />
            <h3>EXTRA-BEDS</h3>
          </div>
          <div className="table-list1">
            <img src={tv} alt="" />
            <h3>SMART-TV</h3>
          </div>
          <div className="table-list1">
            <img src={kitchen} alt="" />
            <h3>1 KITCHEN</h3>
          </div>
        </Fade>
      </div>
    <hr />
    </div>
    <div className="video-item">
        <Zoom>
          <video className="video" width="800" height="500" controls autoPlay loop preload="auto" muted>
            <source src={villa} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Zoom>
        <Fade right>
          <p className="p-text">
            Indulge in our luxurious suites with AC, Tata Sky, and a
            refreshing shower. Enjoy private moments in your own
            on a king-size bed and the flexibility of a sofa, all within
            <br /> the spacious haven.
          </p>
        </Fade>
      </div>
    <hr />
    <div className="games">
        <Zoom>
          <div className="games-item">
            <img src={games} alt="" />
            <h1>OUTDOOR GAMES</h1>
            <p>
              “Enhance your stay with a variety of <br />
              recreational activities with our badminton,
              volleyball, etc. Have a fantastic time!”
            </p>
          </div>
        </Zoom>

        <Zoom>
          <div className="games-item">
            <img src={caram} alt="" />
            <h1>CARROM BOARD</h1>
            <p>
              "Carrom board is a timeless indoor <br />
              game where players use wooden
              strikers to skillfully pocket opponent's <br />
              on a marked board."
            </p>
          </div>
        </Zoom>

        <Zoom>
          <div className="games-item">
            <img src={nature} alt="" />
            <h1>NATURE WALK</h1>
            <p>
              "Explore the 200-meter rustic walking <br />
              path around the property to reconnect
              with nature and maintain your
              fitness."
            </p>
          </div>
        </Zoom>
      </div>

      <hr />
      <div className='about'>
      <Fade top>
        <h1>AMENITIES</h1>
      </Fade>
      <Fade bottom>
        <p>SWARU-VILLA</p>
      </Fade>
      <Fade bottom>
        <hr className='hr' />
      </Fade>
    </div>
      <div className='outdoors'>
      {/* OUTDOORS Section */}
      <Fade left>
        
      <h1>OUTDOORS</h1>
        <div className='out-item'>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Kids Zone</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Private Lawn</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Celebration Zone</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Outdoor Sports</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Badminton</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Private Lawn</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Outdoor dining area</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Parking</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Mountain-view</p>
          </div>
          <div className='out-item1'>
            <img src={circle} alt='' />
            <p>Security cameras</p>
          </div>
        </div>
      </Fade>

      {/* INDOORS Section */}
      <Fade left>
      <h1>INDOORS</h1>
        <div className='out-item3'>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>AC Bedrooms</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Ensuite Bathrooms</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Mosquito net</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Wardrobe with lock</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Board Games</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Smart TV</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Geyser</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Fully Equipped Kitchen</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Bluetooth music system</p>
          </div>
          <div className='out-item2'>
            <img src={circle} alt='' />
            <p>Microwave</p>
          </div>
        </div>
      </Fade>
    </div>
    <hr/>
    <div className="attract-item">
      <h1>Nearby Attractions</h1>
      <hr className="hr1"/>

      <div className="nearby-attractions">
      <Fade bottom>
        <div className="near-item">
          <div className="near-item1">
            <img src={raigad} alt="" />
          </div>
          <div className="near-item1">
            <h1>Raigad Fort</h1>
            <p>
              “Raigad Fort is a historical icon symbolizing <br />
              the valor of Chhatrapati Shivaji Maharaj and <br />
              offering panoramic views of Maharashtra's <br />
              rugged landscapes.”
            </p>
          </div>
        </div>
        <hr />
      </Fade>
      
      <Fade bottom>
        <div className="near-item">
          <div className="near-item1">
            <h1>Bhira Dam</h1>
            <p>
              “Bhira Dam, situated in the Sahyadri mountains <br />
              near Bhira village, is a picturesque reservoir <br />
              on the Kundalika River.”
            </p>
          </div>
          <div className="near-item1">
            <img src={bhira} alt="" />
          </div>
        </div>
        <hr />
      </Fade>
      
      <Fade bottom>
        <div className="near-item">
          <div className="near-item1">
            <img src={theme} alt="" />
          </div>
          <div className="near-item1">
            <h1>IMAGICAA THEME PARK</h1>
            <p>
              “Imagicaa Theme Park is an immersive entertainment destination near Mumbai,
              India, offering a thrilling mix of rides, attractions, and live entertainment
              for a memorable and magical experience.”
            </p>
          </div>
        </div>
        <hr />
      </Fade>
      
      <Fade bottom>
        <div className="near-item">
          <div className="near-item1">
            <h1>DIVEAGAR BEACH</h1>
            <p>
              “Diveagar Beach, nestled along the Konkan coast in Maharashtra, India, captivates
              with its pristine shores and tranquil ambiance, providing a serene escape for beach lovers.”
            </p>
          </div>
          <div className="near-item1">
            <img src={river} alt="" />
          </div>
        </div>
      </Fade>
    </div>
    </div>
    < hr />
    <div className="local">
      <Fade top>
        <h1>Top 4 Local Restaurants</h1>
      </Fade>
      <Fade bottom>
        <hr className="hr"/>
      </Fade>
      <div className="local-item">
        <Fade left>
          <div className="local-item1">
            <img src={orchard} alt="Orchard Cafe" />
            <p>ORCHARD CAFE</p>
          </div>
        </Fade>
        <Fade left delay={200}>
          <div className="local-item1">
            <img src={sai} alt="Hotel Sai Krupa" />
            <p>HOTEL SAI KRUPA</p>
          </div>
        </Fade>
        <Fade left delay={400}>
          <div className="local-item1">
            <img src={chirag} alt="Hotel Chirag" />
            <p>HOTEL CHIRAG</p>
          </div>
        </Fade>
        <Fade left delay={600}>
          <div className="local-item1">
            <img src={shivraj} alt="Shivraj Family Hotel" />
            <p>SHIVRAJ FAMILY HOTEL</p>
          </div>
        </Fade>
      </div>
    </div>
    <hr />
    <div className="google-reviews-section">
            <h2>Reviews from our guests on Google</h2>
            <hr className='hr'/>
            <div className="carousel-container">
                <button className="prev-arrow" onClick={prevReview}>❮</button>
                <div className="reviews-container">
                    {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                        <div key={index} className="review-card">
                            <h3>{review.name}</h3>
                            <div className="review-rating">
                                {"★".repeat(review.rating)}{" "}
                                {"☆".repeat(5 - review.rating)}
                            </div>
                            <p>{review.review}</p>
                            <small>{review.date}</small>
                        </div>
                    ))}
                </div>
                <button className="next-arrow" onClick={nextReview}>❯</button>
            </div>
        </div>
        <hr />
    </>
  );
};

export default Home;