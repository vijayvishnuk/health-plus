import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DoctorsList from "./Pages/DoctorsList";
import Admin from "./Pages/Admin"




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/searchItem" element={<DoctorsList/>}/>
          {/* -------------------------DashBoard-------------------- */}

          <Route path="/Dashboard" element={<Admin/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
