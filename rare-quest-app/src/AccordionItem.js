// AccordionItem.js
import React, { useRef } from 'react';
import './css/AccordionItem.css';

const AccordionItem = ({ option, isOpen, onClick, onSelect }) => {
    const contentRef = useRef(null);

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={onClick}>
                {option.title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
                className="accordion-content"
            >
                <div>
                    <p><strong>Symptoms Targeted:</strong> {option.symptoms}</p>
                    <p><strong>Visual Effect:</strong> {option.visualEffect}</p>
                    <p>{option.description}</p>
                    <div className='button-container'><button className="select-treatment-button" onClick={() => onSelect(option.id)}>Select Treatment</button></div>
                    
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
