import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate  } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };



  const handleLoginClick = () => {
    navigate("/login");
  };



  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
        Care <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
           <button className="newbutton"> <Link to="/" className="navbar-links">Home</Link></button> 
        </li>
        <li>
          <button className="newbutton"><a href="#services" className="navbar-links">
            Services
          </a></button>   
        </li>
        <li>
          <button className="newbutton"> <a href="#about" className="navbar-links">
            About
          </a></button>   
        </li>
        <li>
        <button className="newbutton"><a href="#reviews" className="navbar-links">
            Reviews
          </a></button> 
        </li>
        <li>
        <button className="newbutton"><a href="#doctors" className="navbar-links">
            Doctors
          </a></button>
        </li>
        <li>
        <button className="newbutton"><Link to="/searchItem" className="navbar-links">
            Search
          </Link></button>
        </li>
        
        &nbsp;&nbsp;&nbsp;

        <li>
        <button
          className="newbutton"
          type="button"
          onClick={handleLoginClick}
        >
         Login
        </button>
        </li>

      </ul>



      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
          <li>
            <Link to="/searchItem"><a onClick={openNav} href="#search">Search</a></Link>
          </li>
          <li>
            <a onClick={openNav} href="#notification">Notification</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
