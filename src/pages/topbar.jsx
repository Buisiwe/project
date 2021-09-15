import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import '../styles/topbar.css'
import 'react-calendar/dist/Calendar.css'

export default function Topbar() {
    const [calDate, setCalDate] = useState(new Date())

    function onChange(calDate) {
        // change results based on calendar date click
        setCalDate(calDate)
    }
    return (
        <>
            <div className="topbarWrapper">
                <div className="topRight">
                    <div className="topContainer">
                        <ExitToAppIcon />
                        <label>Log Out</label>
                    </div>
                </div>
                <div className="middle-column">
                    <div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="sidebarRightContainer">
                        <div className="doctorName"></div>
                        <div className="calender">
                            <label>Calender</label>
                            <Calendar className="calendar" onChange={onChange} value={calDate} />
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}
