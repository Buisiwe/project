import "../styles/dashboard.css";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function AddPatientIcon() {

    return(
    <div id="add-patient-icon">
        <PersonAddIcon/>
        <span>Add Patient</span>
    </div>
    )
}