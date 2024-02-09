import React from 'react';
import './LandingPage.css';

// Landing page component
function LandingPage() {
  return (
    <div className="landing-page">
      <header>
      <h1 style={{ color: 'white' }}>¡Bienvenidos a Aprende Purépecha!</h1>
      </header>
      <section className="hero">
        <h2 style={{ color: 'white' }}>Un espacio para aprender purépecha,</h2>
        <h2 style={{ color: 'white' }}> por la preservación de nuestra hermosa cultura e idioma.</h2>
        <h3>Tarjetas didácticas</h3>
        <button>Get Started</button>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best learning experience.</p>
      </section>
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;



