// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Calendar from 'react-calendar';
import '../styles/calendar.css'
import React, { useState } from 'react';
import '../styles/right-side-bar.css';
import DoctorIcon from './doctorIcon';
import { Link } from 'react-router-dom';


export default function RightSideBar() {

    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }
    return (
        <div className="right-column">
            <div className="logout-container">
                {/* <ExitToAppIcon fontSize="small" /> */}
                <img src="https://i.ibb.co/qrptfQY/log-out.png" alt="log-out"/>
                <Link id="logout-text" to="login">Log Out</Link>
            </div>
            <div className="main-container">
                <DoctorIcon/>
                <div className="calender-container">
                    <h4 style={{margin: '15% 4% 2% 10%', fontWeight: 'lighter'}}>
                        Calendar</h4>
                    <Calendar className="calendar" onChange={onChange} value={calDate} />
                </div>
            </div>
        </div>
    )
}
