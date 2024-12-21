import React from 'react';

function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Contact Hoith</h1>
        <p>Let's Explore Your Cloud Potential</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="john@example.com" required />

          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Your Company Name" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us about your project..." required></textarea>

          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Contact;

