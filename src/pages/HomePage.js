import React from 'react';

import "./HomePage.css"

function HomePage({ isLoggedIn }) {
    return (
        <div>
            <h1 >Home Page</h1>
            {isLoggedIn ? (
                <p>You are logged in!</p>
            ) : (
                <p>Please sign up or log in to access more features.</p>
            )}
        </div>
    );
}

export default HomePage;
