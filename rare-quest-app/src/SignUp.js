import React, { useState } from 'react';
import './css/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
  };

  return (
    <div className='slide-in'>
        <div className="signUpPage">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="inputContainer">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="inputContainer">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="inputContainer">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button className="signUpPageButton" type="submit">Sign Up</button>
        </form>
        </div>
    </div>
  );
};

export default SignUp;
