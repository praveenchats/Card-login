import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginRegister.css"
const LoginRegister = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLogin = () => {
    if (username === 'praveen' && password === '1234') {
      localStorage.setItem('authenticated', 'true');
      navigate('/');
    } else if (username !== 'praveen') {
      setError('This account doesn’t exist. Enter a different account or create a new one.');
    } else if (username === 'praveen' && password !== '1234') {
      setError('Your password is incorrect. If you don’t remember your password, reset it now.');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = () => {
    // we can add the new user to a database or handle it through an API
    setError('Registration is not implemented yet.');
  };

  const handleFormToggle = () => {
    setError('');
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
      <div className="containers">
        <h2 className='hh'>{isLoginMode ? 'Login' : 'Register'} Page</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoginMode ? (
            <>
              <button className="login-button" onClick={handleLogin}>Login</button>
              <p className='pp'>
                Don't have an account?{' '}
                <span onClick={handleFormToggle}>Register</span>
              </p>
            </>
          ) : (
            <>
              <button className="register-button" onClick={handleRegister}>Register</button>
              <p className='pp'>
                Already have an account?{' '}
                <span onClick={handleFormToggle}>Login</span>
              </p>
            </>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
};

export default LoginRegister;
