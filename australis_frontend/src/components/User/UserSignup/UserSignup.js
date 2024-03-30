import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserSignup.css';
import axios from 'axios';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("===========================================================================>>")
      const response = await axios.post('http://localhost:3000/user/register', formData);
      console.log(response.data); // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h1>Sign-up to App</h1>

          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter Your Name' /><br /><br />

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' /><br /><br />

          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' /><br />   <br />

          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' /><br />  <br />

          <button type="submit">Submit</button>

          <div className="userdata">
            <p><span>Already have an account </span><Link to='/login'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
