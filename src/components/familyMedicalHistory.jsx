import React from 'react';

const FamilyMedicalHistory = ({ medicalHistory }) => {
  return (
    <section>
      <div className="patient-history-title">
        <p>Family Medical History</p>
      </div>
      <form className="top-row-container" id="patient-history-textarea">
        <input placeholder='Enter notes...' type='text' />
      </form>
    </section>
  );
};

export default FamilyMedicalHistory;
