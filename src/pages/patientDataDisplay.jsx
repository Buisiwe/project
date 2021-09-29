import { useHistory } from 'react-router-dom';
// import { useContext } from "react";
// import { AppContext } from "../components/stateprovider";
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import Table from '../components/table';
import "../styles/patientDataDisplay.css";

function PatientList() {
    const history = useHistory();

    function changeRoute() {
        let path = `/prediction`;
        history.push(path);
    }

    const data = [
        {
            test: 'Breast Cancer',
            date: '26/9/2021',
            result: 'Benign',
        },
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
                                <li className="patient-data-list-item">FIRST NAME:<span className="list-item-data"> Amina</span></li>
                                <li className="patient-data-list-item">LAST NAME:<span className="list-item-data"> Farah</span></li>
                                <li className="patient-data-list-item">MARITAL STATUS:<span className="list-item-data"> Married</span></li>
                                <li className="patient-data-list-item">DOB:<span className="list-item-data"> 27/05/1985</span></li>
                                <li className="patient-data-list-item">HEIGHT:<span className="list-item-data"> 5'6 IN</span></li>
                                <li className="patient-data-list-item">WEIGHT:<span className="list-item-data"> 87 KG</span></li>
                            </ul>
                        </div>

                        <div className="patient-data-div">
                            <p id="medhistory-text">This patient has no history of breast cancer or any other form of cancer in the family.</p>
                        </div>
                    </div>
                    <span className="personal-details-title">Test results</span>
                    <div className="patient-data-test-container">
                        <Table
                            data={data}
                            columns={columns}
                        />
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