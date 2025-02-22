import React from "react";
import "../components/Styles/Home.css";
import HorizontalCard from "../utils/components/Home/cardLayout.jsx";

const Home = () => {
  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="relative w-full h-screen overflow-hidden border-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dufxj1sau/video/upload/v1740204620/Well_trained_facilitymmemeber_20250222_104253_0001_4_wktlrt.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Home Content */}
      <div className="Home-div flex flex-col items-center justify-center">
        <div className="Course-offerings-heading text-3xl font-bold mb-6">
          <h1>Available Courses</h1>
        </div>
        <div className="course-offerings-content flex flex-wrap justify-center gap-6">
          <HorizontalCard />
        </div>

      </div>

    </div>
  );
};

export default Home;

