import "./Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Main About Section */}
      <h1 className="main-heading">About</h1>
      <section className="main-about">
        <div className="about-content animate-slideIn">
          <h1 className="main-title">Skillup Institute of Learning</h1>
          <p className="tagline">Empowering Futures Through Quality Education</p>
          <p className="about-text">
            At Skill Up Institute, we believe in transforming lives through comprehensive learning experiences. 
            Established with a vision to bridge the gap between education and industry requirements, we offer 
            cutting-edge courses taught by experienced professionals. Our student-centric approach ensures 
            every learner achieves their full potential in a supportive, technology-driven environment.
          </p>
        </div>
      </section>

      {/* Motto Section */}
      <section className="motto-section">
        <div className="motto-content animate-fadeIn">
          <h2 className="motto-text">"Learn Today, Lead Tomorrow"</h2>
          <p className="motto-subtext">Building Competence & Confidence</p>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-section">
        <h2 className="section-title animate-slideIn">Visit Us</h2>
        <p className="section-tagline">Your Journey to Excellence Starts Here</p>
        
        <div className="location-container">
          <div className="address-card animate-fadeIn">
            <p className="address-text">
              📍 Chandigarh Chownk, Garhshankar, Hoshiarpur, Punjab
            </p>
          </div>

          <div className="media-grid">
            <div className="image-wrapper animate-fadeIn">
              <img 
                src="https://res.cloudinary.com/dufxj1sau/image/upload/v1740739144/Home/uug7bg4ltspvkfzlcmbx.jpg" 
                alt="Modern campus facilities" 
                className="location-image"
              />
            </div>

            <div className="map-wrapper">
              <iframe
                title="Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297.2833250180151!2d76.14618661509465!3d31.21245878727104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391abff81b0f5a21%3A0xa7b8d37a0c200b2e!2sSkill%20Up%20Institute%20of%20learning!5e0!3m2!1sen!2sin!4v1738394711503!5m2!1sen!2sin"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Staff Section */}

        <section className="staff-section">
                <h2 className="section-title animate-slideIn">Our Staff</h2>

                <div className="staff-grid">
                    {/* Staff Card 1 */}
                    <div className="staff-card animate-fadeIn">
                        <div className="card-image-wrapper">
                            <img
                                src="https://res.cloudinary.com/dufxj1sau/image/upload/v1739439468/Staff/zweu20epysgcp6y3uoh4.jpg"
                                alt="Manoj Barhpagga"
                                className="staff-image"
                            />
                        </div>
                        <div className="staff-details">
                            <h3 className="staff-name">Manoj Barhpagga</h3>
                            <p className="staff-role">Website Designer</p>
                        </div>
                    </div>

                    {/* Staff Card 2 */}
                    <div className="staff-card animate-fadeIn">
                        <div className="card-image-wrapper">
                            <img
                                src="https://res.cloudinary.com/dufxj1sau/image/upload/v1739439468/Staff/af29pvtnivzhzdp9hhwj.jpg"
                                alt="Neha"
                                className="staff-image"
                            />
                        </div>
                        <div className="staff-details">
                            <h3 className="staff-name">Neha</h3>
                            <p className="staff-role">Computer Teacher</p>
                        </div>
                    </div>

                    {/* Staff Card 3 */}
                    <div className="staff-card animate-fadeIn">
                        <div className="card-image-wrapper">
                            <img
                                src="https://res.cloudinary.com/dufxj1sau/image/upload/v1739439468/Staff/hormuhfj4unhu13l3kr9.jpg"
                                alt="Partiksha"
                                className="staff-image"
                            />
                        </div>
                        <div className="staff-details">
                            <h3 className="staff-name">Parteeksha</h3>
                            <p className="staff-role">PTE Teacher</p>
                        </div>
                    </div>

                    {/* Staff Card 4 */}
                    <div className="staff-card animate-fadeIn">
                        <div className="card-image-wrapper">
                            <img
                                src="https://res.cloudinary.com/dufxj1sau/image/upload/v1739439469/Staff/awmrrqsdjsxfyzcxmtz5.jpg"
                                alt="Aditya"
                                className="staff-image"
                            />
                        </div>
                        <div className="staff-details">
                            <h3 className="staff-name">Aditya Sharma</h3>
                            <p className="staff-role">Social Media Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   
  );
};

export default About;