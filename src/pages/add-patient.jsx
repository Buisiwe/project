import React from 'react';
// import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import { useForm } from "react-hook-form";
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import "../styles/patientProfile.css";

function AddPatient() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    // const history = useHistory();
    
    let userid = context.state.userData.id;
    function addPatient(data) {
        const { firstname, lastname, maritalstatus, dob, height, weight, med_history} = data;

        let newpatient = {
            FirstName: firstname,
            LastName: lastname,
            MaritalStatus: maritalstatus,
            DOB: dob,
            Height: height,
            Weight: weight,
            FamilyMedicalHistory: med_history,
            UserId: userid
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
                // console.log(result.message)
                // if (result.error === true) {
                //     return swal({
                //         title: result.message,
                //         text: " ",
                //         icon: "error",
                //         button: null,
                //     });
                // }
                // context.dispatch({
                //     type: "ADD_PATIENT",
                //     payload: result.body,
                // });
 
                // history.push('/patient-data')
            })
            .catch((err) => {
                console.log("this error occurred", err);
                alert("an error occurred. Please try again later");
            });
    }


    return (
        <div className="dashboard-container">
            <LeftSideBar />
            <form className="add-patient-form-container column" onSubmit={handleSubmit(addPatient)}>
                <h2 className="edit-profile-title">Edit Profile</h2>
                <div className="profile-grid-container" >
                    <h4 className="personal-details-title">Personal Details</h4>
                    <div className="profile-form" >
                        <div className="profile-input-container">
                            <label>FIRST NAME</label>
                            <input
                                value={context.state.firstname}
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
                            value={context.state.lastname}
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
                            value={context.state.maritalstatus}
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
                            value={context.state.dob}
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
                            value={context.state.height}
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
                            value={context.state.weight}
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
                            value={context.state.med_history}
                            id="profile-textarea"
                            {...register("med_history", {required:true})}
                                placeholder="Enter notes...">
                                
                            </textarea>
                        </div>
                    
                </div>
            
                    <button type="submit" className="form-submit" id="add-patient-submit-btn">
                        Save
                    </button>
            
            </form>
            <RightSideBar />
        </div>
    )
}

export default AddPatient;