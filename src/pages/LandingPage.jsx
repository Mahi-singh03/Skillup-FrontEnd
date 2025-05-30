import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaImage,
  FaUserPlus,
  FaInfoCircle,
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
      { path: "/OnlineCourse/Register", text: "Register" },
      { path: "/OnlineCourse/Course-Videos", text: "Course Videos" },
    ],
  },
  {
    icon: <FaGraduationCap />,
    label: "Exam",
    links: [
      { path: "/Exams/Weekly-Exam", text: "Weekly Exam" },
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
      { path: "/Admin/login", text: "Admin Login" },
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
      {videos.map((video, index) => (
        <video key={index} autoPlay muted loop playsInline className={`background-video ${video.className}`}>
          <source src={video.src} type="video/mp4" />
        </video>
      ))}


      <div className="content">
        <div className="iso-banner">
          ISO 9001 : 2015 Certified & IAF Certified
        </div>

        <div className="row single-row">
          <Link to="/Home" className="nav-btn">
            <FaHome className="icon" /> Home
          </Link>
        </div>

        <div className="hidden-on-mobile">
          <div className="row multi-row">
            {buttons.map((btn, index) => (
              <Link key={index} to={btn.path} className="nav-btn">
                <span className="icon-class">{btn.icon}</span> {btn.text}
              </Link>
            ))}
          </div>



          <div className="row multi-row">
            {dropdowns.map((dropdown, index) => (
              <div key={index} className="dropdown-container">
                <button className="dropdown-btn">
                  {dropdown.icon} {dropdown.label}
                </button>
                <div className="dropdown-menu">
                  {dropdown.links.map((link, idx) => (
                    <Link key={idx} to={link.path} className="dropdown-link">
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default LandingPage;