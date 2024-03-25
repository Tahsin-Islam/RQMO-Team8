import React, { useState } from 'react';
import Card from './card'; // Adjust path as necessary
import TreatmentOptions from './TreatmentOptions'; // Adjust path as necessary
import TreatmentHistory from './TreatmentHistory'; // Ensure this component is created and path is correct
import treatmentOptionsData from './TreatmentOptionsData'; // Importing the treatment options data
import femalePatientAsset from './Assets/avatar-svgrepo-com 1.png';
import sadEmojiAsset from './Assets/slightly_frowning_face_.png';
import './css/Game.css'; // Ensure CSS is set up for layout and styling

function Game() {
    const [selectedHistory, setSelectedHistory] = useState([]);

    // Function to handle selection of a treatment option
    const handleSelectTreatment = (optionId) => {
        // Find the selected option by its id from the treatmentOptionsData
        const selectedOption = treatmentOptionsData.find(option => option.id === optionId);
        if (selectedOption) {
            // Update the history with relevant details from the selected option
            setSelectedHistory(prevHistory => [...prevHistory, {
                // You might adjust what properties to include based on your UI needs
                title: selectedOption.title,
                cost: selectedOption.cost,
                effectiveness: selectedOption.effectiveness,
            }]);
        }
    };

    const patient = {
        name: 'Sam',
        age: 46,
        occupation: 'Park Ranger',
        background: "Sam spends most days outdoors, leading hikes and educational tours. Recently, they've been experiencing short, involuntary intakes of breath that sound like whispers, causing concern among tour groups. Sam has also noted a decrease in physical stamina and occasional lightheadedness, particularly after rapid movements or longer hikes."
    };

    return (
        <div className='game-area'>
            {/* First Row: Profile and Treatment Options */}
            <div className="game-row">
                <div className='game-profile'>
                    <Card 
                        name={patient.name} 
                        age={patient.age} 
                        occupation={patient.occupation} 
                        background={patient.background} 
                        imageUrl={femalePatientAsset} 
                        patientState={sadEmojiAsset}/>
                </div>
                <div className='game-treatment-options'>
                    <h2>What is the best next step towards the patient's well-being?</h2>
                    <TreatmentOptions onSelectTreatment={handleSelectTreatment} />
                </div>
            </div>
            
            {/* Second Row: Treatment History */}
            <div className='game-history'>
                <TreatmentHistory history={selectedHistory} />
            </div>
        </div>
    );
}

export default Game;
