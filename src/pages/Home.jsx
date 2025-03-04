import React from "react";
import HorizontalCardList from "../utils/components/Home/cardLayout.jsx";
import "./Styles/Home.css";
import ReviewComponent from "../utils/components/Home/Review.jsx"

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Video Section */}
      <section className="hero-video-section">
        <div className="video-overlay overflow-hidden p-5" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dufxj1sau/video/upload/v1741068132/skillup_institute_of_learning_5_1_online-video-cutter.com_ylonqx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-courses p-6">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Trending Courses</h2>
          <p className="section-subtitle">Explore our most popular Courses to get industry ready</p>
        </div>

        <HorizontalCardList /> {/* Enhance this component with card hover effects */}

        {/* Stats Section */}
        <div className="stats-grid">
          {[
            { number: '50+', label: 'Active Learners', icon: '👩🎓' },
            { number: '250+', label: 'Course Hours', icon: '⏳' },
            { number: '98%', label: 'Satisfaction Rate', icon: '❤️' }
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-card animate-slide-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section p-6">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">Discover the unique benefits of our learning platform</p>
        </div>

        <div className="features-grid">
          {[
            {
              icon: '📁',
              title: 'Project-Based Learning',
              description: 'Build real-world projects and portfolio pieces that demonstrate your skills'
            },
            {
              icon: '👨',
              title: 'Expert Mentors',
              description: 'Get guidance from industry professionals with real-world experience'
            },
            {
              icon: '🎛️',
              title: 'Flexible Schedule',
              description: 'Learn at your own pace with lifetime access to course materials'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="feature-card animate-slide-up"
            >
              <div className="feature-icon-container">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="features-section">
      <div className="section-header animate-fade-in">
          <h2 className="section-title">Review Us</h2>
          <p className="section-subtitle">Shear Your Thoughs about Skillup</p>
        </div>
        <ReviewComponent/>
      </section>
    </div>
  );
};

export default Home;