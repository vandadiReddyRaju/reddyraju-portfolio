import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 
function Signup({ isDarkMode, toggleTheme }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const userDetails = { username, email, password };
        localStorage.setItem('userDetails', JSON.stringify(userDetails)); 
        alert('Signup successful!');
        setUsername('');
        setEmail('');
        setPassword('');
        navigate('/portfolio'); 
    };

    return (
        <div className={`signup-container ${isDarkMode ? 'dark' : ''}`}>
            <h2>Signup</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="signup-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="signup-input"
                />
                <button type="submit" className="signup-button">Signup</button>
            </form>
            
        </div>
    );
}

export default Signup;
