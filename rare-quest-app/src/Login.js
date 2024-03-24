// LoginPage.js
import React, { useState } from 'react';
import './css/Login.css'; // Import your CSS file

function LoginPage() {
    // State variables to store username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate username and password (you can add your validation logic here)
        console.log('Username:', username);
        console.log('Password:', password);
        // Reset the form fields
        setUsername('');
        setPassword('');
    };

    return (
        <div className='slide-in'>
            <div className="loginPage">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            placeholder='Enter username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
