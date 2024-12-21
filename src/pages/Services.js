import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="services-page">
      {/* Services Introduction */}
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>Secure, Compliant, and Scalable Azure Solutions</p>
      </div>

      {/* Service Cards */}
      <div className="service-cards">
        <div className="service-card">
          <h2>Azure Data Migration</h2>
          <p>
            We ensure a smooth path to Azure with meticulous planning, validation, and testing.
            Your data stays intact, secure, and ready for innovation.
          </p>
        </div>
        <div className="service-card">
          <h2>Cloud Security & Compliance</h2>
          <p>
            Our security experts implement multi-layered defense, identity management, and compliance
            frameworks to protect your data and reputation.
          </p>
        </div>
        <div className="service-card">
          <h2>Managed Security Services</h2>
          <p>
            Stay ahead of threats with continuous monitoring, proactive incident response, and monthly
            reports that keep you informed.
          </p>
        </div>
        <div className="service-card">
          <h2>Advisory & Optimization</h2>
          <p>
            From cost optimizations to performance enhancements, we help you leverage the best Azure
            has to offer.
          </p>
        </div>
      </div>
      
      {/* Optional CTA Section */}
    </div>
    
    
  );
}

export default Services;