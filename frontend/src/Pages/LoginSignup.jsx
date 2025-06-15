import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import api from '../api/api'; // ✅ use shared axios client
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/register/', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess('Registration successful!');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Unexpected server response');
      }
    } catch (err) {
      setError(
        err.response?.data?.error || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className='logInSignUp'>
      <div className="logInSignUp-container">
        <h1>Sign Up</h1>
        <div className="logInSignUp-fields">
          <input
            type="text"
            placeholder='Your Name'
            value={username}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignUp}>Continue</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        <p className='logInSignUp-login'>
          Already have an account? <span onClick={() => navigate('/login')} style={{color: 'blue', cursor: 'pointer'}}>Log In Here</span>
        </p>
        <div className="logInSignUp-agree">
          <input type="checkbox" /> <span>I agree to the terms & conditions</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
