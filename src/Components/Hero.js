import React, { useEffect, useState } from "react";
// import Doctor from "../Assets/HomeDemo-6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container bubble">
      <div className="hero-section">
        <div className="text-section">
             <div class="loading">
                <svg height="48px" width="64px">
                    <polyline id="back" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></polyline>
                  <polyline id="front" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></polyline>
                </svg>
                <p className="text-headline">❤️ Health comes first</p>
              </div>
          
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>

          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <span> <p>Receive Patients</p> </span>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <span><p>Expert Doctors</p></span>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <span><p>Years of Experience</p></span>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg&uid=R132938727&ga=GA1.1.591161817.1704253166&semt=ais" alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
