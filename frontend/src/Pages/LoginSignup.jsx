import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterApi } from 'apiClient';
import { apiConfig } from 'apiClient/config';

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
      const registerApi = new RegisterApi(apiConfig);
      await registerApi.registerCreate({
        username,
        email,
        password,
      });

      setSuccess('Registration successful!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(
        err.response?.data?.error || 'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className='logInSignUp'>
      <div className="logInSignUp-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        width: '300px',
        margin: '50px auto',
      }}>
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
