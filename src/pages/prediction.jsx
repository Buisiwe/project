import React from 'react';
import '../styles/prediction.css';


function Prediction(){
    return(
        <>
        <div>
        <h2>Prediction Test</h2>
        <p>Please fill the form below for your prediction. 
            Note that this is a sample application <br /> and cannot be used as a substitute for real medical advice.</p>
        </div>

        <div className='input-section'>
        <p>radius-mean</p>
        <input />
        </div>
        </>
    )
}

export default Prediction;