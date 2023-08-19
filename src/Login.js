import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/profile';
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <p>Welcome back! 👋</p>
        <h1>Sign in to your account</h1>
        <label>Your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">CONTINUE</button>
        <p id="forgot">Forget your password?</p>
      </form>
      <p id="signup">
        Don’t have an account?<span>Sign up</span>
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;

