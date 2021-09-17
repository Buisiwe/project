import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import React, { useState } from 'react';
import '../styles/right-side-bar.css';


export default function RightSideBar() {

    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }
    return (
        <div className="right-column">
            <div className="logout-container">
                <ExitToAppIcon fontSize="small" />
                <span id="logout-text">Log Out</span>
            </div>
            <div className="doctorName">
            <p>Hello Doc.</p>
            </div>
            <div className="calender-container">
                <span>Calender</span>
                <Calendar className="calendar" onChange={onChange} value={calDate} />
            </div>


        </div>
        
    )

}