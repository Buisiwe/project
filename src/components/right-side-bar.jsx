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
            <div className="topContainer">
                <ExitToAppIcon />
                <label>Log Out</label>
            </div>
            <div className="doctorName">

            </div>
            <div className="calender">
                <label>Calender</label>
                <Calendar className="calendar" onChange={onChange} value={calDate} />
            </div>


        </div>
        
    )

}