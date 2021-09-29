import React from 'react';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import "../styles/patientProfile.css";

function Patient() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const history = useHistory();

    function addPatient(firstname, lastname, maritalstatus, dob, height, weight, med_history) {
        

        let newpatient = {
            firstName: firstname,
            lastName: lastname,
            maritalStatus:maritalstatus,
            dob: dob,
            height: height,
            weight: weight,
            familyMedicalHistory:med_history,
            UserId: "730c1e72-e362-4a52-840d-8ff827d60e0f"
        };
        console.log(newpatient);
        fetch(`http://envisio-001-site1.itempurl.com/api/v1/register-patient`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newpatient),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                console.log(result.message)
                if (result.error === true) {
                    return swal({
                        title: result.message,
                        text: " ",
                        icon: "error",
                        button: null,
                    });
                }
                context.dispatch({
                    type: "ADD_PATIENT",
                    payload: result.body,
                });
                swal({
                    title: 'Registration Successful',
                    text: " ",
                    icon: "success",
                    button: "Close",
                }); 
                history.push('/patient-data')
            })
            .catch((err) => {
                console.log("this error occurred", err);
                alert("an error occurred. Please try again later");
            });
    }


    return (
        <div className="dashboard-container">
            <LeftSideBar />
            <div className="add-patient-form-container column">
                <h2 className="edit-profile-title">Edit Profile</h2>
                <div className="profile-grid-container">
                    <h4 className="personal-details-title">Personal Details</h4>
                    <div className="profile-form" onSubmit={handleSubmit(addPatient)}>
                        <div className="profile-input-container">
                            <label>FIRST NAME</label>
                            <input
                                id="firstname"
                                className="profile-input"
                                type="text"
                                {...register("firstname", { required: true })}
                                placeholder=" "
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>LAST NAME</label>
                            <input
                                id="lastname"
                                className="profile-input"
                                type="text"
                                {...register("lastname", { required: true })}
                                placeholder=" "
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>MARITAL STATUS</label>
                            <input
                                id="maritalstatus"
                                className="profile-input"
                                type="text"
                                {...register("maritalstatus", { required: true })}
                                placeholder=" "
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>DATE OF BIRTH (DD/MM/YYYY)</label>
                            <input
                                id="dob"
                                className="profile-input"
                                type="text"
                                {...register("dob", { required: true })}
                                placeholder=" "
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>HEIGHT</label>
                            <input
                                id="height"
                                className="profile-input"
                                type="number"
                                {...register("height", { required: true })}
                                placeholder=" "
                            />
                        </div>
                        <div className="profile-input-container">
                            <label>WEIGHT</label>
                            <input
                                id="weight"
                                className="profile-input"
                                type="number"
                                {...register("weight", { required: true })}
                                placeholder=" "
                            />
                        </div>
                    </div>

                        <div className="input-text-area">
                            <label>Family Medical History</label>
                            <textarea 
                            id="profile-textarea"
                            {...register("med_history", {required:true})}
                                placeholder="Enter notes...">
                                
                            </textarea>
                        </div>
                    
                </div>
                <div>
                    <button type="submit" className="form-submit" id="add-patient-submit-btn">
                        Save
                    </button>
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}

export default Patient;