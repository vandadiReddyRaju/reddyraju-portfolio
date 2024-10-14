import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import "./App.css"; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                {!isLoggedIn ? (
                    <header className="app-header">
                        <h1>Portfolio App</h1>
                        <nav className="app-nav">
                            <Link to="/" className="nav-button">Home</Link>
                            <Link to="/signup" className="nav-button">Signup</Link>
                            <Link to="/login" className="nav-button">Login</Link>
                            <button onClick={toggleTheme} className="theme-toggle">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                        </nav>
                    </header>
                ) : null}

                

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
                        <Route path="/signup" element={<Signup isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
                        <Route
                            path="/portfolio"
                            element={isLoggedIn ? <Portfolio isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> : <Navigate to="/" />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
