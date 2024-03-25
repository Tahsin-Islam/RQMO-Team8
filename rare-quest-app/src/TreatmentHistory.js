// TreatmentHistory.js
import React from 'react';
import './css/TreatmentHistory.css'; // Ensure you have appropriate styles

const TreatmentHistory = ({ history }) => {
    return (
        <div className="treatment-history">
            <h2>Selected Treatments History</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <strong>{item.title}</strong>: Effectiveness - {item.effectiveness}, Cost - ${item.cost}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TreatmentHistory;
