// AccordionItem.js
import React, { useRef } from 'react';
import './css/AccordionItem.css';

const AccordionItem = ({ option, isOpen, onClick, onSelect }) => {
    const contentRef = useRef(null);

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={onClick}>
                <span className="title-text">{option.title}</span> {/* Title left-aligned */}
                <span className="cost-text">${option.cost}</span> {/* Cost right-aligned */}
                <span className="expand-collapse-icon">{isOpen ? '-' : '+'}</span> {/* Expand/Collapse indicator */}
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
                </div>
                <div className="button-container">
                    <button className="select-treatment-button" onClick={onSelect}>Select Treatment</button>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
