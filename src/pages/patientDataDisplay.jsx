import { useHistory } from 'react-router-dom';
// import { useContext } from "react";
// import { AppContext } from "../components/stateprovider";
// import { useTable } from 'react-table';
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import "../styles/patientDataDisplay.css";

function PatientList() {
    const history = useHistory();

    function changeRoute() {
        let path = `/prediction`;
        history.push(path);
    }
    return (
        <>
            <div className="dashboard-container">
                <LeftSideBar />
                <div className="patient-data-wrapper">
                    <span className="personal-details-title">Personal Details</span>
                    <span className="personal-details-title" id="medhistory-title">Family Medical History</span>
                    <div className="patient-data-container">

                        <div className="patient-data-div"></div>

                        <div className="patient-data-div"></div>
                    </div>
                    <span className="personal-details-title">Test results</span>
                    <div className="patient-data-test-container">

                    </div>

                    <button type="submit" className="form-submit3" id="download-test-btn">
                        Download
                    </button>
                    <button type="submit" className="form-submit" id="add-test-btn" onClick={changeRoute}>
                        Start Test
                    </button>
                </div>


                <RightSideBar />
            </div>
        </>
    )
}

export default PatientList;