import React from 'react';
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import "../styles/patientProfile.css";

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
    return (
        <div className="dashboard-container">
            <LeftSideBar />
            <div className="add-patient-form-container column">
                <h2 className="edit-profile-title">Edit Profile</h2>
                <div className= "profile-grid-container">
                    <h4 className="personal-details-title">Personal Details</h4>
                    <div className="profile-form">
                        <div className="profile-input-container">
                            <label>First Name</label>
                            <input className="profile-input"
                                id="fname"
                                className="input"
                                type="text"
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>Last Name</label>
                            <input className="profile-input"
                                id="lname"
                                className="input"
                                type="text"
                            />

                        </div>
                        <div className="profile-input-container">
                            <label>Marital Status</label>
                            <input className="profile-input"
                                id="maritalStatus"
                                className="input"
                                type="text"
                            />

                        </div>
                        <div className="profile-input-container">
                            <label>Date of Birth</label>
                            <input className="profile-input"
                                id="DOB"
                                className="input"
                                type="text"
                            />

                        </div>
                        <br />
                        <div className="profile-input-container">
                            <label>Height</label>
                            <input className="profile-input"
                                id="height"
                                className="input"
                                type="text"
                            />

                        </div>
                        <br />
                        <div className="profile-input-container">
                            <label>Weight</label>
                            <input className="profile-input"
                                id="weight"
                                className="input"
                                type="text"
                            />
                        </div >
                        <div className="input-text-area">
                            <label>Family Medical History</label>
                            <textarea id="profile-textarea">
                                Enter notes...
                            </textarea>
                            
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="form-submit">
                            Save
                        </button>
                    </div>


                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default Patient;