import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import '../styles/dashboard.css'
import SearchBar from "material-ui-search-bar";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Dashboard() {
    const context = useContext(AppContext);
    const history = useHistory();

    return (
        <div className="dashboardContainer">
            <div className="topMiddler">
                {/* <div className ="middleContainer">

                        <TextField
                            label="Search"
                            {...Search({ required: true })}
                            InputProps={{
                            endAdornment: (
                            <InputAdornment>
                            <IconButton>
                            <SearchIcon />
                            </IconButton>
                            </InputAdornment>)
                            
                           }}
                           //onChange = {<Search />} 
                        />
                    </div> */}
                <SearchBar className="dashboard-search"/>
                <div><ExitToAppIcon/><a>Log Out</a></div>
            </div>


            <div>
                <label>
                    Welcome to your Envisio Dashboard.
                </label>

            </div>



            <div className="addPatientContainer">
                <PersonAddIcon />  
                <br />
                <label>Add Patient</label>
            </div>

            <div className="viewList">
                <p></p>
                <input />
            </div>



        </div>
    )
}


export default Dashboard;
