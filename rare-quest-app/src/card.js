// Card.js
import React from 'react';
import './css/card.css'; // Make sure to create a Card.css file for styles

const Card = ({ name, age, occupation, background, imageUrl,patientState }) => {
    return (
        
      <div className="card">
        <h4 className='main-card-title'>Patient Profile</h4>


        <div className='card-body'>

            <div className="image-title-container">
                {imageUrl && <img src={imageUrl} alt="Card image" className="card-image" />}
                <h2 className="card-title">{name}</h2>
            </div>

            <div className="card-content">
                <p className="card-text"><b>Age:</b> {age}</p>
                <p className="card-text"><b>Occupation:</b> {occupation}</p>
                <p className="card-text">{background}</p>
                
            </div>

            <div className='card-state'>
            <p className="patientState card-text">State</p>
            <img className='patientState' src={patientState}/>
            
            </div>

        </div>

      </div>
    );
  };
  

export default Card;
