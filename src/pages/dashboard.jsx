// import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "../components/stateprovider";
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../styles/dashboard.css'
import SearchBar from "material-ui-search-bar";
import LeftSideBar from "../components/left-side-bar";
import RightSideBar from "../components/right-side-bar";
import AddPatientIcon from "../components/addPatientIcon";

function Dashboard() {
    // const context = useContext(AppContext);
    // const history = useHistory(); 

    return (
        <div className="dashboard-container">
            <LeftSideBar className="left-bar" />
            <div className="middle-column">
                <SearchBar className="dashboard-search" />
                <div style={{ display: "flex", marginTop: '2%' }}>
                    <div className="helloDoc">
                        <h2>Hello Doctor</h2>
                        <span>
                            Welcome to your Envisio Dashboard.
                        </span>
                    </div>
                    <div className="addPatientContainer">
                            <AddPatientIcon />
                    </div>

                </div>
            </div>
            <RightSideBar className="right-bar" />


        </div>
    )
}


export default Dashboard;