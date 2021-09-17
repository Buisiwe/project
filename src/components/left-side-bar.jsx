import Logo from '../components/logo';
import { Link } from 'react-router-dom';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import HistoryIcon from '@material-ui/icons/History';

import '../styles/left-side-bar.css';

export default function LeftSideBar() {

    return (
        <div className="left-column">

            <Logo />
            <ul className="links">
                
                <div classname="sidebar-item">
                <DashboardOutlinedIcon className="sidebar-icon"/>
                <Link className="sidebar-link" to="/dashboard"> Dashboard</Link>
                </div>
                <div classname="sidebar-item">
                    <HistoryIcon className="sidebar-icon"/>
                <Link className="sidebar-link" to="/patient"> Patient History</Link>
                </div>
                <div classname="sidebar-item">
                <Link className="sidebar-link" to="/prediction"> Prediction</Link>
                </div>
            </ul>
        </div>
    )

}