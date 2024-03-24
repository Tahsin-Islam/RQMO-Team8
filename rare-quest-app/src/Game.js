// Game.js

import React from 'react';
import './css/Game.css';
import femalePatientAsset from './Assets/avatar-svgrepo-com 1.png';
import sadEmojiAsset from './Assets/slightly_frowning_face_.png';

function Game() {
    return (
        <div className="play-game">
            <div className="profile-section">
                <p>Patient Profile</p>
                <img className='patientImage' src={femalePatientAsset} alt='female-avatar' />
                <p className='state'>State: <span><img src={sadEmojiAsset} alt='slightly-frowning-face'></img></span></p>
            </div>
            <div className="information-section">
                <div>
                    <p><b>Age:</b> 42</p>
                    <p><b>Occupation:</b> Park Ranger</p>
                    <p><b>Background:</b></p>
                </div>
                <p>
                    Sam spends most days outdoors, leading hikes and educational tours. Recently, they've been experiencing short, involuntary intakes of breath that sound like whispers, causing concern among tour groups. Sam has also noted a decrease in physical stamina and occasional lightheadedness, particularly after rapid movements or longer hikes.
                </p>
            </div>

        </div>
    );
}

export default Game;
