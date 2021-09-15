import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Patient() {
    //const { patient, handleSubmit } = useForm();
    //const addPatient = ({ fname, lname, maritalStatus, DOB, height, weight}) => {
    
    //}    
    //const [state, setState] = useState({
    //fname: "", 
    //lname:"",
    //maritalStatus:"",
    //DOB:"", 
    //height:"", 
    //weight:""})
    //}
    return(
        
        <div  id="grid-container">
          <div className="color-side column"></div>
            <div className="add-patient-form-container column">
                <div id="main_title">Edit Profile</div>
                   <div className = "form">
                     <label>Personal Details</label>
                      
                        <div className="input-container"> 
                        <label>First Name</label>
                            <input
                                id="fname"
                                className="input"
                                type="text"  
                            /> 
                        </div>
                        <br/>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                id="lname"
                                className="input"
                                type="text" 
                            />
                            
                        </div>
                        <br/>
                        <div className="input-container">
                            <label>Marital Status</label>
                            <input
                                id="maritalStatus"
                                className="input"
                                type="text"
                            />
                            
                        </div>
                        <br/>
                        <div className="input-container">
                            <label>Date of Birth</label>
                            <input
                                id="DOB"
                                className="input"
                                type="text"
                            />
                            
                        </div>
                        <br/>
                        <div className="input-container">
                            <label>Height</label>
                            <input
                                id="height"
                                className="input"
                                type="text"
                            />
                            
                        </div>
                        <br/>
                        <div className="input-container">
                            <label>Weight</label>
                            <input
                                id="weight"
                                className="input"
                                type="text"
                            />
                            
                        </div >
                        <br/>
                        <div className= "input-text-area">
                            <label>Family Medical History</label>
                            <input
                               className="input"
                               type="text"
                            />
                        </div>
                        <br/>
                        <div>
                            <button type="submit" className="form-submit">
                                Save
                            </button>
                        </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Patient;