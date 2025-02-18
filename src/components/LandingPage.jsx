import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Landing-Page.css";

const LandingPage = () => {
  return (
    <div className="Landing-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source 
          src="https://res.cloudinary.com/dufxj1sau/video/upload/v1739861593/nx8mlzhznvaqoxwbnfie.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Buttons and Menu */}
      <div className="content">
        <div className="row">
          <Link to="/Home" className="btn">Go to Home</Link>
        </div>
        <div className="row">
          <div className="dropdown">
            <button className="btn">Exam</button>
            <div className="dropdown-content">
              <Link to="/Exams/Exam-Instruction">Exam Instructions</Link>
              <Link to="/Exams/Weekly-Exam">Weekly Exam</Link>
              <Link to="/Exams/Exam-Result">Exam Result</Link>
              <Link to="/Exams/Final-Exam">Final Exams</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn">Verification</button>
            <div className="dropdown-content">
              <Link to="/Verification/Verify-Student">Student Verification</Link>
              <Link to="/Verification/Verify-Staff">Staff Verification</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn">Job</button>
            <div className="dropdown-content">
              <Link to="/Job/Job-Apply">Apply Job</Link>
              <Link to="/Job/Career-Guidance">Career Guidance</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="btn">Login</button>
            <div className="dropdown-content">
              <Link to="/Login">Student Login</Link>
              <Link to="/Login">Teacher Login</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/Courses" className="btn">Courses</Link>
          <Link to="/Gallery" className="btn">Gallery</Link>
          <Link to="/Register" className="btn">Student Registration</Link>
          <Link to="/About" className="btn">About</Link>
          <Link to="/Contact" className="btn">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
