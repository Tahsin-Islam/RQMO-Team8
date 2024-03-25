// Game.js

import React from 'react';
import './css/Game.css';
import Patient_profile from './Patient_profile';

function Game() {

    const funds = 10;
    
    const patient = {
        name: 'Sam',
        age: 46,
        occupation: 'Park Ranger',
        background: "Sam spends most days outdoors, leading hikes and educational tours. Recently, they've been experiencing short, involuntary intakes of breath that sound like whispers, causing concern among tour groups. Sam has also noted a decrease in physical stamina and occasional lightheadedness, particularly after rapid movements or longer hikes."
      };

    return (
        

        <Patient_profile patient={patient} />
      
    );
}

export default Game;
