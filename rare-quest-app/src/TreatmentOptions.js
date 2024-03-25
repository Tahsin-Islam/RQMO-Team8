// TreatmentOptions.js
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import treatmentOptionsData from './TreatmentOptionsData'; // Adjust the import path as needed
import './css/TreatmentOptions.css';

const TreatmentOptions = () => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (id) => {
        // If the clicked item is already open, close it. Otherwise, open the clicked item.
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div className="treatment-options">
            {treatmentOptionsData.map((option) => (
                <AccordionItem
                    key={option.id}
                    option={option}
                    isOpen={openItemId === option.id}
                    onClick={() => toggleItem(option.id)}
                />
            ))}
        </div>
    );
};

export default TreatmentOptions;
