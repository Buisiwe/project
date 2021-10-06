import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import Table from '../components/table';
import "../styles/patientDataDisplay.css";

function PatientData() {
  const context = useContext(AppContext);
    const history = useHistory();
    const { patientId } = useParams();
    const { patient, setPatient } = useState({});

    console.log(patientId);

    fetch(
        `http://envisio-001-site1.itempurl.com/api/v1/Patient?patientId=${patientId}`, 
    )
        .then(res => res.json())
        .then(result => {
            setPatient({ ...result })
            console.log(result)
            console.log(patient)

        })
        .catch(err => {
            alert(
                'Unable to complete request. Please try again after some time'
            );
            console.log({ err });
        });



    function changeRoute() {
        let path = `/prediction`;
        history.push(path);
    }

    const data = [
        {
            test: 'Breast Cancer',
            date: '27/9/2021',
            result: 'Malignant',
        },
        {
            test: 'Breast Cancer',
            date: '28/9/2021',
            result: 'Benign',
        },
        {
            test: 'Breast Cancer',
            date: '28/9/2021',
            result: 'Benign',
        }
    ]

    const columns = [
        {
            Header: 'Test',
            accessor: 'test'
        }, {
            Header: 'Date',
            accessor: 'date'
        }, {
            Header: 'Result',
            accessor: 'result'
        }
    ]

    return (
        <>
            <div className="dashboard-container">
                <LeftSideBar />
                <div className="patient-data-wrapper">
                    <span className="personal-details-title">Personal Details</span>
                    <span className="personal-details-title" id="medhistory-title">Family Medical History</span>
                    <div className="patient-data-container">

                        <div className="patient-data-div">
                            <ul id="patient-data-list">
                                <li className="patient-data-list-item">FIRST NAME:<span className="list-item-data">{patient.firstName}</span></li>
                                <li className="patient-data-list-item">LAST NAME:<span className="list-item-data"> {patient.lastName}</span></li>
                                <li className="patient-data-list-item">MARITAL STATUS:<span className="list-item-data"> {patient.maritalStatus}</span></li>
                                <li className="patient-data-list-item">DOB:<span className="list-item-data"> {patient.dob}</span></li>
                                <li className="patient-data-list-item">HEIGHT:<span className="list-item-data"> {patient.height} CM</span></li>
                                <li className="patient-data-list-item">WEIGHT:<span className="list-item-data"> {patient.weight} KG</span></li>

                            </ul>
                        </div>

                        <div className="patient-data-div">
                            <p id="medhistory-text">{patient.familyMedicalHistory}</p>
                        </div>
                    </div>
                    <span className="personal-details-title">Test results</span>
                    <div className="patient-data-test-container">
                        <Table
                            data={data}
                            columns={columns}
                        />
                    </div>

                    {/* <button type="submit" className="form-submit3" id="download-test-btn">
                        Download
                    </button> */}
                    <button type="submit" className="form-submit" id="add-test-btn" onClick={changeRoute}>
                        Start Test
                    </button>
                </div>


                <RightSideBar />
            </div>
        </>
    )
}

export default PatientData;