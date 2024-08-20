import { useState } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import balkani from "../image/balkani.jpg";
import home1 from "../image/home1.png";
import home8 from "../image/home9.png";
import mission from "../image/mission.png";
import owner from "../image/owner.png";
import vision from "../image/vision.png";
import "../style/About.css";

const About = () => {
  const [activeYear, setActiveYear] = useState("2019");

  const handleScroll = (year) => {
    setActiveYear(year);
  };

  return (
    <>
      <div className="about-img">
        <Fade bottom>
          <h1>
            "Welcome to your slice of paradise! Just 2.5 hours from Mumbai or 2
            hours from Pune. Discover the finest Homestay in Tamhini Ghat. Your
            perfect weekend escape with friends or family awaits!"
          </h1>
        </Fade>
      </div>

      <div className="about-content">
        <div className="content">
          <Fade left>
            <img src={home1} alt="EkoStay" />
          </Fade>
        </div>
        <div className="content1">
          <Slide right>
            <p>
              Welcome to Swaru-Villa. SWARU VILLA is the vanguard provider of
              professionally managed vacation homes, committed to curating
              exceptional homestay encounters across diverse destinations pan
              India. Founded in 2018 by a visionary cadre of hospitality
              aficionados, EKO STAY swiftly ascended as a luminary in the
              alternative accommodation domain. Boasting a portfolio of over
              150+ meticulously curated villas spanning 12 cities, EKO STAY sets
              the gold standard for personalized hospitality. Driven by
              innovation, customer-centricity, and sustainable expansion, EKO
              STAY continues to redefine the homestay milieu, offering guests
              comfort, convenience, and indelible memories.
            </p>
          </Slide>
        </div>
      </div>

      <div className="owner">
        <h1>MEET YOUR HOST</h1>
      </div>
      <hr className="hr1" />
      <div className="owner-content">
        <div className="owner-content1">
          <Fade left>
            <img src={owner} alt="Swanil D" />
          </Fade>
        </div>
        <div className="owner-content2">
          <Slide right>
            <h1>Swanil D</h1>
            <h4>Managing Director & Founder</h4>
            <p>
              A multipotentialite and an avid traveller, Swanil D thrives on
              exploring new avenues that can help elevate his organisation to
              the next level. A graduate in Mass Media from Mumbai University,
              Swanil started his career in the marketing field, where he learnt
              the skills of strategizing and implementing online & offline
              creative marketing strategies. Mantra - Life is happening, all you
              gotta do is show up!
            </p>
          </Slide>
        </div>
      </div>

      <div className="journey">
        <Zoom>
          <h1>OUR JOURNEY SO FAR...</h1>
        </Zoom>
        <Fade bottom>
          <p>
            Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
            Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with a
            vision to tailor the needs of the holiday goers on experiencing a
            cozy & private stay of a home away from home. EKOSTAY now offers
            guests a selection of over 100+ villas spread across 12 cities.
          </p>
        </Fade>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {["2019", "2020", "2021", "2022", "2023", "2024"].map((year) => (
            <div
              key={year}
              className={`timeline-dot ${activeYear === year ? "active" : ""}`}
              onClick={() => handleScroll(year)}
            >
              <span className="timeline-year">{year}</span>
            </div>
          ))}
        </div>
        <div className="timeline-content">
          {activeYear === "2019" && (
            <div className="lounch">
              <Zoom>
                <h1>2019 Launch</h1>
              </Zoom>
              <Fade bottom>
                <p>
                  Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
                  Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
                  a vision to tailor the needs of the holiday goers on
                  experiencing a cozy & private stay of a home away from home.
                  EKOSTAY now offers guests a selection of over 100+ villas
                  spread across 12 cities.
                </p>
              </Fade>
              <Fade bottom>
                <img src={balkani} alt="Launch" />
              </Fade>
            </div>
          )}
          {activeYear === "2020" && (
            <div className="lounch">
            <Zoom>
              <h1>2019 Launch</h1>
            </Zoom>
            <Fade bottom>
              <p>
                Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
                Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
                a vision to tailor the needs of the holiday goers on
                experiencing a cozy & private stay of a home away from home.
                EKOSTAY now offers guests a selection of over 100+ villas
                spread across 12 cities.
              </p>
            </Fade>
            <Fade bottom>
              <img src={balkani} alt="Launch" />
            </Fade>
          </div>
          )}
          {activeYear === "2021" && (
            <div className="lounch">
            <Zoom>
              <h1>2019 Launch</h1>
            </Zoom>
            <Fade bottom>
              <p>
                Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
                Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
                a vision to tailor the needs of the holiday goers on
                experiencing a cozy & private stay of a home away from home.
                EKOSTAY now offers guests a selection of over 100+ villas
                spread across 12 cities.
              </p>
            </Fade>
            <Fade bottom>
              <img src={balkani} alt="Launch" />
            </Fade>
          </div>
          )}
          {activeYear === "2022" && (
            <div className="lounch">
            <Zoom>
              <h1>2019 Launch</h1>
            </Zoom>
            <Fade bottom>
              <p>
                Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
                Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
                a vision to tailor the needs of the holiday goers on
                experiencing a cozy & private stay of a home away from home.
                EKOSTAY now offers guests a selection of over 100+ villas
                spread across 12 cities.
              </p>
            </Fade>
            <Fade bottom>
              <img src={balkani} alt="Launch" />
            </Fade>
          </div>
          )}
          {activeYear === "2023" && (
           <div className="lounch">
           <Zoom>
             <h1>2019 Launch</h1>
           </Zoom>
           <Fade bottom>
             <p>
               Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
               Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
               a vision to tailor the needs of the holiday goers on
               experiencing a cozy & private stay of a home away from home.
               EKOSTAY now offers guests a selection of over 100+ villas
               spread across 12 cities.
             </p>
           </Fade>
           <Fade bottom>
             <img src={balkani} alt="Launch" />
           </Fade>
         </div>
          )}
          {activeYear === "2024" && (
           <div className="lounch">
           <Zoom>
             <h1>2019 Launch</h1>
           </Zoom>
           <Fade bottom>
             <p>
               Founded in 2018 by the Entrepreneurial Fantastic Four - Husain
               Khatumdi, Sohail Mirchandani, Varun Arora & Zishan Khan, with
               a vision to tailor the needs of the holiday goers on
               experiencing a cozy & private stay of a home away from home.
               EKOSTAY now offers guests a selection of over 100+ villas
               spread across 12 cities.
             </p>
           </Fade>
           <Fade bottom>
             <img src={balkani} alt="Launch" />
           </Fade>
         </div>
          )}
        </div>
      </div>

      <div className="mission">
        <Zoom>
          <h1>OUR MISSION & VISION</h1>
        </Zoom>
      </div>
      <div className="mission1">
        <div className="mission-item">
          <Fade left>
            <img src={home8} alt="Home" />
          </Fade>
        </div>
        <div className="mission-item1">
          <Slide right>
            <img src={mission} alt="Our Vision" />
            <h1>OUR VISION</h1>
            <p>
              Our vision is to be a pioneer in the alternative accommodation
              space by providing value-for-money homes across nations. We thrive
              to be the recognized benchmark in providing the most beneficial
              services to all our stakeholders, homeowners, clients, as well as
              employees.
            </p>
          </Slide>
        </div>
      </div>
      <div className="vision">
        <div className="vision-item">
          <Fade left>
            <img src={vision} alt="Our Vision" />
          </Fade>
        </div>
        <div className="vision-item1">
          <Slide right>
            <h1>OUR MISSION</h1>
            <p>
              To provide standardized yet personalized Homestay experiences by
              redesigning properties with a customer-centric approach. We
              collaborate & help homeowners remove the hassle of hosting, better
              manage their property, and provide them with an alternate source
              of income.
            </p>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default About;
