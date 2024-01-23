import React, { useEffect, useState } from "react";
import "../Styles/Dashboard.css";
import { Link } from "react-router-dom";
import data from "../RecentClient.json";



const Dashboard = () => {
    // const [client,setClient] =  useState(data);
     
    return(
        <div className="main">
            {/* <!-- Sidebar --> */}
            <div class="sidebar">
            <div className="navbar-section">
            <h1 className="navbar-title">
                <Link to="/Dashboard">
                Care <span className="navbar-sign">+</span>
                </Link>
            </h1>
            </div>
                <ul class="side-menu">
                    <li><a href="#"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
                    <li><a href="#"><i class='bx bx-store-alt'></i>Patients</a></li>
                    <li class="active"><a href="#"><i class='bx bx-analyse'></i>Doctors</a></li>
                    <li><a href="#"><i class='bx bx-message-square-dots'></i>Appointment</a></li>
                    <li><a href="#"><i class='bx bx-group'></i>Users</a></li>
                    <li><a href="#"><i class='bx bx-cog'></i>Settings</a></li>
                </ul>
                <ul class="side-menu">
                    <li>
                    <Link to="/"><a href="#" class="logout">
                            <i class='bx bx-log-out-circle'></i>
                            Logout
                        </a></Link>
                    </li>
                </ul>
            </div>
  
            <div class="content">
                {/* <!-- Navbar --> */}
                <nav>
                    <i class='bx bx-menu'></i>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..."/>
                            <button class="search-btn" type="submit"><i class='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="theme-toggle" hidden/>
                    <label for="theme-toggle" class="theme-toggle"></label>
                    <a href="#" class="notif">
                        <i class='bx bx-bell'></i>
                        <span class="count">12</span>
                    </a>
                    <a href="#" class="profile">
                        <img src="https://img.freepik.com/free-photo/3d-illustration-little-boy-with-glasses-lab-coat_1142-36675.jpg?size=626&ext=jpg&ga=GA1.1.448611922.1704946105&semt=ais"/>
                    </a>
                </nav>

                {/* <!-- End of Navbar --> */}

                <main className="main-body">
                
                    {/* <!-- Insights --> */}
                    <ul class="insights">
                        <li>
                            <i className="bx"><span class="material-symbols-outlined">stethoscope</span> </i>
                            <span class="info">
                                <h3>
                                    98
                                </h3>
                                <p>Doctors</p>
                            </span>
                        </li>
                        <li><i class='bx'><span class="material-symbols-outlined">personal_injury</span></i>
                            <span class="info">
                                <h3>
                                    1040
                                </h3>
                                <p>Site Visit</p>
                            </span>
                        </li>
                        <li><i class='bx'><span class="material-symbols-outlined">recent_patient</span></i>
                            <span class="info">
                                <h3>
                                    72
                                </h3>
                                <p>Attend</p>
                            </span>
                        </li>
                        <li><i class='bx'><span class="material-symbols-outlined">ecg_heart</span></i>
                            <span class="info">
                                <h3>
                                    89
                                </h3>
                                <p>Pending</p>
                            </span>
                        </li>
                    </ul>

                    {/* <!-- Recent Orders Table --> */}
                        <div class="recent-orders">
                            <h2>Appointments</h2>
                            <table>
                                <thead>
                                    <tr>
                                      <td>Name</td>
                                      <td>Contact</td>
                                      <td>Time</td>
                                      <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>

                                       
                                    
                                </tbody>
                            </table>
                            <a href="#">Show All</a>
                        </div>
                    

                   

                 
                </main>

            </div>

        </div>
    );
}
export default Dashboard;