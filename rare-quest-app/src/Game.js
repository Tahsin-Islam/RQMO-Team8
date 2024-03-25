// Game.js

import React from 'react';

import Card from './card';
import femalePatientAsset from './Assets/avatar-svgrepo-com 1.png';
import sadEmojiAsset from './Assets/slightly_frowning_face_.png';
import './css/Game.css'
import TreatmentOptions from './TreatmentOptions';

function Game() {

    const funds = 10;
    
    const patient = {
        name: 'Sam',
        age: 46,
        occupation: 'Park Ranger',
        background: "Sam spends most days outdoors, leading hikes and educational tours. Recently, they've been experiencing short, involuntary intakes of breath that sound like whispers, causing concern among tour groups. Sam has also noted a decrease in physical stamina and occasional lightheadedness, particularly after rapid movements or longer hikes."
      };

    return (
        <div className='game-area'>
            
        
        <div className='game-item'><Card name={patient.name} age={patient.age} occupation={patient.occupation} background={patient.background} imageUrl={femalePatientAsset} patientState={sadEmojiAsset}/></div>
        <div className='game-item-2'> What is best next step towards the patients well-being ?<TreatmentOptions /></div>

        </div>


      
    );
}

export default Game;
