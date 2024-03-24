import React from 'react';
import './css/Home.css'; // Import your CSS file
import homePageAsset from './Assets/homePageAsset.png';
import Game from './Game';

function HomePage({ setContentText }) {
    const handlePlayClick = () => {
        setContentText(<Game />);
    };

    return (
        <div className="homePage">
            <div className='container'>
                <div className='message'>
                    <h1>PLAY AND SOLVE THE MEDICAL MYSTERY</h1>
                </div>
                <div className='image-container'>
                    <img className='homeImage' src={homePageAsset} alt='Online doctor appointment in health app' />
                </div>
            </div>
            <p>Are you ready to make a difference in the world of rare diseases?</p>
            <button className='playButton' onClick={handlePlayClick}>PLAY NOW</button>
        </div>
    );
}

export default HomePage;
