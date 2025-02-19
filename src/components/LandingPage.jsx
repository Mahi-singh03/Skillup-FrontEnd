import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaImage, FaUserPlus, FaInfoCircle, FaPhoneAlt, FaUserCheck, FaBriefcase, FaSignInAlt, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import "./Styles/Landing-page.css";

const LandingPage = () => {
  return (
    <div className="Landing-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source 
          src="https://res.cloudinary.com/dufxj1sau/video/upload/v1739863634/y2bt3yavjqku4nhazip8.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Buttons and Menu */}
      <div className="content">
        <div className="row">
          <Link to="/Home" className="btn"><FaHome className="icon" /> Go to Home</Link>
        </div>
        <div className="row">
          <div className="dropdown">
            <button className="btn"><FaGraduationCap className="icon" /> Exam</button>
            <div className="dropdown-content">
              <Link to="/Exams/Exam-Instruction">Exam Instructions</Link>
              <Link to="/Exams/Weekly-Exam">Weekly Exam</Link>
              <Link to="/Exams/Exam-Result">Exam Result</Link>
              <Link to="/Exams/Final-Exam">Final Exams</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn"><FaUserCheck className="icon" /> Verification</button>
            <div className="dropdown-content">
              <Link to="/Verification/Verify-Student">Student Verification</Link>
              <Link to="/Verification/Verify-Staff">Staff Verification</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn"><FaBriefcase className="icon" /> Job</button>
            <div className="dropdown-content">
              <Link to="/Job/Job-Apply">Apply Job</Link>
              <Link to="/Job/Career-Guidance">Career Guidance</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn"><FaSignInAlt className="icon" /> Login</button>
            <div className="dropdown-content">
              <Link to="/Login">Student Login</Link>
              <Link to="/Login">Teacher Login</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/Courses" className="btn"><FaBook className="icon" /> Courses</Link>
          <Link to="/Gallery" className="btn"><FaImage className="icon" /> Gallery</Link>
          <Link to="/Register" className="btn"><FaUserPlus className="icon" /> Student Registration</Link>
          <Link to="/About" className="btn"><FaInfoCircle className="icon" /> About</Link>
          <Link to="/Contact" className="btn"><FaPhoneAlt className="icon" /> Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
