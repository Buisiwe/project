import React from 'react';
import '../styles/patientData.css';

const DoctorIcon = ({ doctorIcon }) => {
  return (
    <section>
      <div className="top-row-container" id="doctor-icon">
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
