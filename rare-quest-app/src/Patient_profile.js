
import React from 'react';
import './css/Game.css'
import femalePatientAsset from './Assets/avatar-svgrepo-com 1.png';
import sadEmojiAsset from './Assets/slightly_frowning_face_.png';



const Patient_profile = ({ patient }) => {
    return (
      <div className="play-game">
      <div className="profile-section">
          <p>Patient Profile</p>
          <img className='patientImage' src={femalePatientAsset} alt='female-avatar' />
          <p className='state'>State: <span><img src={sadEmojiAsset} alt='slightly-frowning-face'></img></span></p>
      </div>
      <div className="information-section">
          <div>
              <p><b>Age:</b> {patient.age}</p>
              <p><b>Occupation:</b> {patient.occupation}</p>
              <p><b>Background:</b></p>
          </div>
          <p>
            {patient.background}
           </p>
      </div>

  </div>
      
    );
  };

  export default Patient_profile