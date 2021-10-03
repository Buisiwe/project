import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";
import '../styles/dashboard.css';
import SearchBar from 'material-ui-search-bar';
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
import ListItem from '../components/patientListView';

function Dashboard() {
	const context = useContext(AppContext);
	// console.log(context.state);
	const history = useHistory();
	const params = useParams();
	// let userid = context.state.userData.id;
	
	
	let hasNoPatient = false;
	function getPatientList(){

	fetch(
		`http://envisio-001-site1.itempurl.com/api/v1/all-patients?userId=${params.id}`,

	)
		.then(res => res.json())
		.then(result => {
			console.log(result)

			if (result.length !== 0){
				hasNoPatient = false;

				context.dispatch({
					type: "PATIENT LIST",
					payload: result,
				});

			}
			hasNoPatient = true;

		})
		.catch(err => {
			alert(
				'Unable to complete request. Please try again after some time'
			);
			console.log({ err });
		});
	}

		useEffect(() => {
			getPatientList()
		}, [params]);

	const routeChange = () => {
		let path = `/add-patient`;
		history.push(path);
	};

	const data = [
		{
			name: 'Amina Farah',
			id: 1
		},
		{
			name: 'Toyin Bankole',
			id: 2
		},
		{
			name: 'Fiyin Taiwo',
			id: 3
		},
		{
			name: 'Eze Feyin',
			id: 4
		},
		
	]

	
	
	return (
		<div className='dashboard-container'>
			<LeftSideBar className='left-bar' />
			<div className='middle-column'>
				<SearchBar className='dashboard-search' />

				<div style={{ display: 'flex', marginTop: '7%' }}>
					<div className='helloDoc'>
						<h2 style={{ fontSize: '30px' }}>Hello {context.state.userData.firstName}</h2>
						<span style={{ color: '#7A7A7A', fontSize: '20px' }}>
							Welcome to your Envisio Dashboard.
						</span>
					</div>
					<div className='addPatientContainer'>
						{/* <AddPatientIcon /> */}
						<button className='add-patient' type='submit' onClick={routeChange}>
							<img
								src='https://i.ibb.co/BgJsF2v/user-plus.png'
								alt='add-patient'
							/>
							<p style={{ color: '#ffff', padding: '8px', fontSize: '15px' }}>
								Add Patient</p>
						</button>
					</div>
				</div>

				{(hasNoPatient === true)
				?
				<div style={{ display: 'block', margin: '6% auto', width: '50%' }}>
					<img src='https://i.ibb.co/K0ksSkr/Empty-icon.png' alt='Empty-icon' />
				</div>
				:
				<div className="patient-list-view">
					<h4>List of Patients</h4>
					<ul id="patient-list-container">
							{data.map(function (patient) {
								return (
									<ListItem
										key={patient.id}
										item={patient}
									/>
								);
							})}
					</ul>
				</div>
				}
			</div>
			<RightSideBar className='right-bar' />
		</div>
	);
}

export default Dashboard;
