import React from 'react';
import './HomePage.css'; // Import any additional styles for this page
import sconti from './sconti.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Our Amazing App!</h1>
        <p>We offer various features to make your experience better.</p>
      </header>

      <section className="intro-section">
        <h2>What We Offer</h2>
        <p>Our app has a wide variety of features designed to help you achieve your goals:</p>
        <ul>
          <li><strong>User Info Page:</strong> Manage your personal data easily.</li>
          <li><strong>Data Page:</strong> View detailed data about your activity.</li>
          <li><strong>Form Submission:</strong> Fill out and submit forms with ease.</li>
          <li><strong>Conditional Rendering:</strong> See dynamic content based on your input.</li>
          <li><strong>Map Page:</strong> Explore interactive maps with useful features.</li>
        </ul>
      </section>

      <section className="image-section">
        <img 
          src={sconti} 
          alt="App Photo" 
          className="home-image"
        />
      </section>

      <section className="call-to-action">
        <h3>Get Started Today!</h3>
        <p>Explore all the amazing features our app has to offer.</p>
        <button 
          className="cta-button" 
          onClick={() => alert('Redirecting to Sign Up!')}
        >
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
