import React, { useState } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('http://localhost:3000/user/login', formData);
      console.log(response.data); // Handle response data as needed

      // Save token to local storage upon successful login
      localStorage.setItem('token', response.data.token);
      
      // Redirect user to dashboard or another page
      // Example: history.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login'>
      <div className="login-container">
        <form onSubmit={handleSubmit} id='loginform'>
          <h1>Login to App</h1>

          <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' /><br /><br />

          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' /><br />

          <button type="submit">Login</button>

          <div className="userdata">
            <p><span>New user? </span><Link to="/signup">Sign-up now</Link></p>
            <p><a href="# ">Forgot password?</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
