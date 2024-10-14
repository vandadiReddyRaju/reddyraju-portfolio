import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login({ onLogin, isDarkMode, toggleTheme }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedDetails = JSON.parse(localStorage.getItem('userDetails'));

        if (storedDetails && storedDetails.email === email && storedDetails.password === password) {
            onLogin(storedDetails.token);
            setEmail('');
            setPassword('');
            navigate('/portfolio'); 
        } else {
            alert('Login failed: Invalid credentials.');
        }
    };

    return (
        <div className={`login-container ${isDarkMode ? 'dark' : ''}`}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
