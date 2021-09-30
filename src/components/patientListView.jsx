import { useHistory } from 'react-router';
import '../styles/patientListView.css';

function ListItem({ item }) {
        const history = useHistory();

    function viewPatientData(){
        let path = `/patient-data`;
        history.push(path);
    }
    return (
        <li className="patient-item-view">
            <span className='patient-list-title'>{item.name}</span>
            <span className='View' onClick={viewPatientData}>View</span>
        </li>
    );
}

export default ListItem;