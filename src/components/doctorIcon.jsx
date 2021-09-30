import React from 'react';
// import { useContext } from "react";
// import { AppContext } from "../components/stateprovider";
import '../styles/patientData.css';

const DoctorIcon = ({ doctorIcon }) => {
  // const context = useContext(AppContext);
  return (
    <section>
      <div className="top-row-container" id="doctor-icon" style={{marginTop: '5%'}}>
        <div id="doctor-info">
          <div id="doctor-name">
            <p>Dr. Kehinde Adesina</p>
            <div className="circle"></div>
          </div>
          <p id="hosp-name">Green Hospital, Abuja</p>
        </div>
      </div>
    </section>
  );
};

export default DoctorIcon;
