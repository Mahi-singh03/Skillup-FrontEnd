import React from "react";
import "./loader.css"; // Optional CSS for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <video autoPlay muted loop playsInline>
        <source src="/assets/loader.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Loader;
