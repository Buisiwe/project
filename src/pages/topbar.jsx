import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Topbar()
{
    const [calDate, setCalDate] = useState(new Date())

    function onChange (calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }
    return (
        <div className = "topbar">
            <div className = "topbarWrapper">

                <div className = "topleft">
                    <span className= "logo">Envisio</span>
                </div>

                

                <div className= "topRight">
                    <div className = "topContainer">
                         <ExitToAppIcon/>
                        <label>Log Out</label>
                    </div>
                </div>


                <div className="sidebarLeft">
                <br />
                    <div>
                        <Link className="dashboard-link" to="/dashboard"> Dashboard</Link>
                    </div>
                <br />
                    <div>
                        <Link className="patienthistory-link" to="/patient"> Patient History</Link>
                    </div>
                <br />
                    <div>
                        <Link className="prediction-link" to="/prediction"> Prediction</Link>
                    </div>
                <br />
                </div>

                <div className= "mainMiddle">
                    <div>

                    </div>

                </div>

                <div className = "sidebarRight">
                    <div className= "sidebarRightContainer">
                        <div className= "doctorName">

                        </div>

                        <div className = "calender">
                            <label>Calender</label>
                            <Calendar onChange={onChange} value={calDate} />
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
