import React, { useState } from 'react';
import { getAllDiseases } from './Disease';


const DiseaseList = () => {
    const [selectedDisease, setSelectedDisease] = useState(null);
    const diseases = getAllDiseases();

    return (
        <div className="disease-list-container">
            <h1>Funky Diseases</h1>
            <div className="disease-list">
                {diseases.map(disease => (
                    <div 
                        key={disease.id} 
                        className="disease-summary" 
                        onClick={() => setSelectedDisease(disease)}
                    >
                        {disease.name}
                    </div>
                ))}
            </div>
            {selectedDisease && (
                <div className="disease-detail">
                    <h2>{selectedDisease.name}</h2>
                    <p><strong>Information:</strong> {selectedDisease.information}</p>
                    <p><strong>Symptoms:</strong> {selectedDisease.symptoms.join(', ')}</p>
                    <p><strong>Treatment:</strong> {selectedDisease.treatment}</p>
                </div>
            )}
        </div>
    );
};

export default DiseaseList;