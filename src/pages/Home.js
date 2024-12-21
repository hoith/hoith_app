import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section: Full width, gradient + image background */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empower Your Cloud Journey</h1>
          <p>
            Hoith helps businesses modernize, migrate, and secure their data in Azure,
            ensuring compliance and excellence at every step.
          </p>
          <Link to="/services" className="btn-primary">Our Services</Link>
        </div>
      </section>

      {/* Services Overview: Full width, with icons */}
      <section className="services-overview">
        <h2>Expertise That Drives Results</h2>
        <p>
          From seamless migrations to advanced security measures, Hoith provides the expertise
          you need to thrive in the cloud.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=80&h=80&q=80" alt="Data Migration Icon" />
            <h3>Data Migration</h3>
            <p>Effortless transition to Azure with minimal downtime and data integrity assurance.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=80&h=80&q=80" alt="Security Icon" />
            <h3>Security & Compliance</h3>
            <p>Implement robust identity management, threat detection, and governance frameworks.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=80&h=80&q=80" alt="Managed Services Icon" />
            <h3>Managed Services</h3>
            <p>Ongoing monitoring, optimization, and proactive incident response.</p>
          </div>
        </div>
      </section>

      {/* Testimonials: Full width */}
      <section className="testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Hoith elevated our cloud capabilities and kept us secure from day one."</p>
            <span>- CIO, TechCorp Solutions</span>
          </div>
          <div className="testimonial">
            <p>"Their guidance and proactive support have transformed our Azure environment."</p>
            <span>- Director of IT, GreenData Inc.</span>
          </div>
        </div>
      </section>

      {/* CTA: Full width */}
      <section className="cta">
        <h2>Ready to Elevate Your Cloud Strategy?</h2>
        <p>Contact us to discover how Hoith can streamline your Azure journey.</p>
        <Link to="/contact" className="btn-secondary">Get in Touch</Link>
      </section>
    </>
  );
}

export default Home;
