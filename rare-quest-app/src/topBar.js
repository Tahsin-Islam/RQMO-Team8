import React from "react";
import './css/topBar.css';
import LoginPage from './Login';
import HomePage from "./Home";
import HowToPlay from "./HowToPlay";

function TopBar({setContentText}){

    const handleLoginClick = () => {
        setContentText(<LoginPage />);
    };

    const handleHomeClick = () => {
        setContentText(<HomePage />)
    }

    const handleHowToPlayClick = () => {
        setContentText(<HowToPlay />)
    }

    return (
        <div className="topBar">
            <div className="companyName">Rare<span className='quest'>Quest</span></div>
            <div className="topBar-middle">
                <a onClick={handleHomeClick}>Home</a>
                <a onClick={handleHowToPlayClick}>How To Play</a>
                <a href="#">Contact Us</a>
            </div>
            <div className='topBar-right'>
                <a className='login' onClick={handleLoginClick}>Login</a>
                <a className='signup'>Sign Up</a>
            </div>
        </div>
    );
}

export default TopBar;
