import React from 'react';
import '../styles/patientData.css';

const TestResults = ({ testResults }) => {
  return (
      <section>
       <div className="patient-history-title">
            <p>Test Results</p>
        </div>
        <div className="test-results-container">
            <table>
                <tr>
                    <th>Test</th>
                    <th>Date</th>
                    <th>Result</th>
                </tr>

            {testResults.map((testResult) => {
                const {Id, Test, Date, Result} = testResult;
                return(
                    <tr key={Id}>
                        <td>{Test}</td>
                        <td>{Date}</td>
                        <td>{Result}</td>
                    </tr>
                )
                })}
            </table>
        </div>

        <div className="buttons-row">
            <button id="download-btn">Download</button>
            <button id="start-test-btn">Start Test</button>
        </div>

      </section>
  );
};

export default TestResults;
