import LeftSideBar from "../components/left-side-bar";
import RightSideBar from "../components/right-side-bar";
import "../styles/result.css";


function Result(){


    return(
        <>
        <div className="dashboard-container">
        <LeftSideBar/>
            <div className="result-wrapper">
                <h3 id="result-title">Your test result is ready!</h3>
                <p id="disclaimer">This is a sample application and cannot be used as a substitute for real medical advice. Kindly consult a specialist for further assistance</p>
                <div className="result-container">
                    <p id="result-text">Based on the inputs provided, results show that patient may have a <span id="result-word">malignant</span> tumor and would require urgent medical attention </p>
                </div>

                    <button type="submit" className="form-submit3" id="download-test-btn">
                        Download
                    </button>
                    <button type="submit" className="form-submit" id="add-test-btn" >
                        Save
                    </button>
            </div>

            
        <RightSideBar/>
        </div>
        </>
    )
}

export default Result;