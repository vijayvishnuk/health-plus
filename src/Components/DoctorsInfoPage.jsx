import React from "react";
import { Link } from "react-router-dom";
import "../Styles/DoctorsInfoPage.css";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../doctorsData.json";




const DoctorsinfoPage = () => {

  const navigate = useNavigate();




    return(
        <div>
         <div className="navbar-section">
         <Link to="/searchItem"><button className="back-btn"> Back</button></Link>
          <h1 className="navbar-title">
            <Link to="/">
            Care <span className="navbar-sign">+</span>
            </Link>
          </h1>
          <h3><Link to="/searchItem"></Link></h3>
          </div>

        <div className="doctorMoreInfo">
              <div>
                {/* {
                  data.map((val)=>{
                    return(
                    <div key={val.id='1'}>
                    <img src={val.image} alt="" />
                    </div>

                    );
                  })
                } */}
              </div>
        </div>


        <div></div>
        <div>  

          </div>
        </div>
    );
}
export default DoctorsinfoPage