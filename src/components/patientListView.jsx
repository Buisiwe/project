import { useHistory } from 'react-router';
import '../styles/patientListView.css';

function ListItem({ item }) {
        const history = useHistory();

    function viewPatientData(){
        history.push({
            pathname: '/patient-data',
            search: "?" + item.id,  // query string
            state: {  // location state
            update: true,
            }
        });
    }
    return (
        <li className="patient-item-view">
            <span className='patient-list-title'>{item.firstName +" " + item.lastName}</span>
            <span className='View' onClick={viewPatientData}>View</span>
        </li>
    );
}

export default ListItem;