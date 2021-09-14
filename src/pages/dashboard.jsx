import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Search from "@material-ui/icons/Search";
import { useForm } from 'react-hook-form';
//import Search from './search';

  function Dashboard(){
     //const { search, handleSubmit } = useForm();
    
    return(
        <div className="dashboardContainer">
            <div className = "topMiddler">
                    <div className ="middleContainer">
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
                    </div>
                  
                </div>


            <div>
                <label>
                Welcome to your Envisio Dashboard.
                </label>
                
            </div>
                
            

            <div className="addPatientContainer">
                 <PersonAddIcon />  
                 <br/>
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
 