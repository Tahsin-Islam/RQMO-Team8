import './css/HowToPlay.css'

function HowToPlay() {
    return(
        <div className='instructions'>
            <h1>HOW TO PLAY</h1>
            <ol>
                <li className='instruction-step'><b>Meet Your Patient</b><br></br>
                    You'll be introduced to a patient, complete with a background story and a list of symptoms. 
                    Pay close attention to the details – they're crucial for your decisions ahead.
                </li>
                <li className='instruction-step'><b>Conduct Research</b><br></br>
                    Before making any treatment decisions, use the "Research" option to gather more information about the patient's condition. 
                    This will unlock new insights and treatment options, enhancing your ability to care for the patient effectively.
                </li>
                <li className='instruction-step'><b>Select Healing Actions</b><br></br>
                    Based on the symptoms and the information you've gathered, choose from a list of healing actions. 
                    Each action has a percentage effectiveness, indicating how likely it is to improve the patient's condition.
                </li>
                <li className='instruction-step'><b>Observe and Adjust</b><br></br>
                    After selecting a treatment, observe its impact on the patient's wellness. 
                    You can adjust your approach based on the patient's response and any new information you uncover through research.
                </li>
                <li className='instruction-step'><b>Progress Through the Game</b><br></br>
                    Successfully managing one patient's care unlocks the next patient case. 
                    Each new case presents unique challenges and learning opportunities.
                </li>
            </ol>

        </div>
    )
}

export default HowToPlay;