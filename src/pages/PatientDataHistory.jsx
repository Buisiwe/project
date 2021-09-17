import React, { useState, useEffect } from 'react';
import PatientData from '../components/patientData';
import FamilyMedicalHistory from '../components/familyMedicalHistory';
import DoctorIcon from '../components/doctorIcon';
import TestResults from '../components/testResults';
import data from '../components/data'; //REMEMBER TO DELETE
import '../styles/patientData.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://localhost:5001/api/v1/Patient?patientId=:id';

function PatientDataHistory( ) {

  const [patient, setPatient] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState('');
  const [doctorIcon, setDoctorIcon] = useState();
  const [testResults, setTestResults] = useState(data);

//   const { id } = useParams();

  const fetchPatient = async () => {
    try {
      const response = await fetch(url);
      const patient = await response.json();
      setPatient(patient);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPatient()
  }, [])

  return (
    <main id="patient-history-page">
        <section>
          <div className="logout">
              <i className="fas fa-sign-out-alt logout-icon"></i>
              <p>Log Out</p>
          </div>
          <div className="top-row">
              <PatientData patient={patient} />
              <FamilyMedicalHistory medicalHistory = {medicalHistory} />
              <DoctorIcon doctorIcon = {doctorIcon} />
          </div>
          <div className="bottom-row">
              <TestResults testResults = {testResults} />
              <section>
                  <div className="patient-history-title">
                      <p>Calendar</p>
                  </div>
                  <Calendar />
              </section>
          </div>
        </section>
    </main>
  )
}

export default PatientDataHistory;
