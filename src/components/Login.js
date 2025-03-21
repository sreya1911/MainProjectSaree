import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Import useAuth
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();  // Get login function from AuthContext

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Email validation
    if (!email.includes('@gmail.com')) {
      setError('Email must be a valid @gmail.com address.');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    // Simulate login logic
    login(email);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-control"
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
