import React, { useState } from 'react';

import resume from "./images/resume.pdf";
import image from "./images/imagelogo.png";
import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import nodejs from "./images/nodejs.png";
import reactjs from "./images/reactjs.png";
import nxttrend from "./images/nxttrendz.png";
import todos from "./images/todos.png";
import netflix from "./images/netflix.png";
import camera from "./images/cameraapp.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.jpg";

import './Portfolio.css'; 

const Portfolio = ({ isDarkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`portfolio-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <nav className="portfolio-nav">
                <div className="nav-left">
                    <h1 className="nav-name">Reddy Raju</h1>
                    
                </div>
                <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#introduction">Introduction</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    
                </div>
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                    <span className="menu-icon-bar"></span>
                </div>
            </nav>

            <section id="introduction" className="introduction">
                <div className="intro-text">
                    <h1>Reddy Raju Vandadi</h1>
                    <p>I am Reddy Raju Vandadi with good foundation skills in React.js, Node.js, and Python. Passionate about building optimized and user-friendly web solutions.</p>
                    <div className="buttons">
                        <a href={resume} download className="btn">Download Resume</a>
                        <a href="#contact" className="btn">Get in Touch</a>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/reddy-raju-vandadi/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://x.com/ReddyRaju6309?t=xKzfqP5zXxuUDib-sEHUqQ&s=09" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/mr.v_raj_06/profilecard/?igsh=MTFqanRwZnRoeXJwMw==" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@ccbpreddyraju" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                    </div>



                </div>
                <div className="intro-image">
                    <img src={image} alt="Reddy Raju Vandadi" />
                </div>
            </section>


            <section id="about" className="about">
                <h2>About Me</h2>
                <hr className="grey-line" /> 
                <p className="new-para">
                    &nbsp;&nbsp;&nbsp;&nbsp;Hello, I’m Reddy Raju Vandadi, a passionate Full Stack Developer with a solid foundation in React JS and Node JS. I completed my B.Tech from VEMU Institute of Technology in stream of Electronics and Communication Engineering (ECE) with a CGPA of 8.1.
                </p>

                <p className="new-para">
                    &nbsp;&nbsp;&nbsp;&nbsp;My technical expertise lies in building responsive, dynamic, and scalable web applications, particularly focusing on frontend development with React.js, JavaScript, HTML, and CSS, along with backend technologies like Node.js, Express, and SQLite. I am also proficient in Python and have experience working with both relational databases like SQLite and implementing user authentication with technologies like JWT tokens.
                </p>

                <p className="new-para">
                    &nbsp;&nbsp;&nbsp;&nbsp;One of my notable projects is Nxt Trendz, an e-commerce platform inspired by Amazon and Flipkart, where I was responsible for designing and developing various key components, such as the login page, product listings, and individual product detail pages.
                </p>
            </section>
            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skill-list">
                    <div className="skill-item">
                        <img src={html} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <img src={css} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <img src={javascript} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <img src={reactjs} alt="React" />
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img src={nodejs} alt="Node.js" />
                        <p>Node.js</p>
                    </div>
                </div>
            </section>

     
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-list">
                    <div className="project-item">
                        <img src={nxttrend} alt="Nxt Trendz" />
                        <h3>Nxt Trendz (ECommerce Clone - Flipkart)</h3>
                        <p>Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart</p>
                        <a href="https://shopju.ccbp.tech" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                    
                    <div className="project-item">
                        <img src={todos} alt="Todos" />
                        <h3>Todos Application</h3>
                        <p>Developed persistent todo application with CRUD operations to track list of tasks</p>
                        <a href="https://vrrajutodosapp.ccbp.tech" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>

                    <div className="project-item">
                        <img src={camera} alt="Camera" />
                        <h3>Camera clone Application</h3>
                        <p>A simple camera clone developed using modern web APIs.</p>
                        <a href="https://admirable-nougat-a6debe.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>

                    <div className="project-item">
                        <img src={netflix} alt="Netflix" />
                        <h3>Netflix Home Page</h3>
                        <p>A Netflix home page website clone created using HTML, CSS, and Bootstrap</p>
                        <a href="https://cute-douhua-ec5768.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                </div>
            </section>

           
            <section id="contact" className="contact">
                
                <div className="social-icons">
                <div>
                <h2>Contact Me</h2>
                <p>Phone: +91 6309471005</p>
                <p>Email: reddyraju6309@example.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/reddy-raju-vandadi/" target="_blank" rel="noopener noreferrer"> Reddy Raju </a></p>
                <p>Twitter: <a href="https://x.com/ReddyRaju6309?t=xKzfqP5zXxuUDib-sEHUqQ&s=09" target="_blank" rel="noopener noreferrer">@reddy raju</a></p>
                </div>
                <div className="social-icons">
                        <a href="https://www.linkedin.com/in/reddy-raju-vandadi/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="https://x.com/ReddyRaju6309?t=xKzfqP5zXxuUDib-sEHUqQ&s=09" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/mr.v_raj_06/profilecard/?igsh=MTFqanRwZnRoeXJwMw==" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@ccbpreddyraju" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
