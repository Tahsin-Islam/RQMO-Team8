import React, { useState } from 'react';
import './css/ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contactUsPage">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder='Enter your name'value={formData.name} onChange={handleChange} required />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className="inputContainer">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder='How can we help you?' value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
