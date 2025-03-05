import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaImage,
  FaUserPlus,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserCheck,
  FaBriefcase,
  FaSignInAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import "./Styles/Landing-page.css";

const videos = [
  { className: "desktop", src: "https://res.cloudinary.com/dufxj1sau/video/upload/v1740031225/Background_videos/fpkv1rwjhmuhixhaven0.mp4" },
  { className: "tablet", src: "https://res.cloudinary.com/dufxj1sau/video/upload/v1740031225/Background_videos/fpkv1rwjhmuhixhaven0.mp4" },
  { className: "mobile", src: "https://res.cloudinary.com/dufxj1sau/video/upload/v1740038221/Background_videos/p3e102ttunokguxhceih.mp4" },
];

const dropdowns = [
  {
    icon: <MdCastForEducation />,
    label: "Online Courses",
    links: [
      { path: "/Online-Exam/Register", text: "Register" },
      { path: "/Online-Exam/Course-Videos", text: "Course Videos" },
    ],
  },
  {
    icon: <FaGraduationCap />,
    label: "Exam",
    links: [
      { path: "/Exams/Weekly-Exam", text: "Weekly Exam" },
      { path: "/Exams/Exam-Result", text: "Exam Result" },
      { path: "/Exams/Final-Exam", text: "Final Exams" },
    ],
  },
  {
    icon: <FaUserCheck />,
    label: "Verification",
    links: [
      { path: "/Verification/Verify-Student", text: "Student Verification" },
      { path: "/Verification/Verify-Staff", text: "Staff Verification" },
    ],
  },
  {
    icon: <FaBriefcase />,
    label: "Job",
    links: [
      { path: "/Job/Job-Apply", text: "Apply Job" },
      { path: "/Job/Career-Guidance", text: "Career Guidance" },
    ],
  },
  {
    icon: <FaSignInAlt />,
    label: "Login",
    links: [
      { path: "/StudentLogin", text: "Student Login" },
      { path: "/Staff/Login", text: "Staff Login" },
    ],
  },
];

const buttons = [
  { path: "/Courses", icon: <FaBook />, text: "Courses" },
  { path: "/Gallery", icon: <FaImage />, text: "Gallery" },
  { path: "/Register", icon: <FaUserPlus />, text: "Register" },
  { path: "/About", icon: <FaInfoCircle />, text: "About" }
];

const LandingPage = () => {
  return (
    <div className="Landing-container">
      {/* Background Videos */}
      {videos.map((video, index) => (
        <video key={index} autoPlay muted loop playsInline className={`background-video ${video.className}`}>
          <source src={video.src} type="video/mp4" />
        </video>
      ))}

      {/* Buttons and Menu */}
      <div className="content">
        <div className="row single-row">
          <Link to="/Home" className="btn">
            <FaHome className="icon" /> Home
          </Link>
        </div>

     

        {/* Single Buttons */}
        <div className="row multi-row">
          {buttons.map((btn, index) => (
            <Link key={index} to={btn.path} className="btn">
              {btn.icon} {btn.text}
            </Link>
          ))}
        </div>

           {/* Dropdown Menus */}
           <div className="row multi-row">
          {dropdowns.map((dropdown, index) => (
            <div key={index} className="dropdown">
              <button className="btn">
                {dropdown.icon} {dropdown.label}
              </button>
              <div className="dropdown-content">
                {dropdown.links.map((link, idx) => (
                  <Link key={idx} to={link.path}>{link.text}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
