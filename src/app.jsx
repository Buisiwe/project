import "@fontsource/mulish";
import "./styles/index.css";
import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StateProvider from "./components/stateprovider";
import Onboarding from "./pages/onboarding";
import Register from "./pages/signup";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import PasswordChange from "./pages/passwordchange";
import LandingPage from './pages/landingpage';
import ContactPage from './pages/contactpage';
import TeamPage from './pages/teampage';
import Prediction from './pages/prediction';
import Dashboard from "./pages/dashboard";
import AddPatient from "./pages/add-patient";
import PatientData from "./pages/patient-data";
// import PatientDataHistory from "./pages/PatientDataHistory";
import Result from "./pages/result";


function App() {

	const history = useHistory();
	useEffect(()=>{
		const accessToken = localStorage.getItem("accessToken")
		console.log("This is the ", accessToken)
		if(!accessToken){
			console.log("This worked")
			history.push("/login")
		}
	})
	return (
		<StateProvider>
			<Router>
				<div className="App">
					<div className="container d-flex align-items-center flex-column">
						<Switch>
							<Route path="/register" exact={true} component={Register} />

							<Route path="/login" exact={true} component={Login} />

							<Route path="/reset_password" exact={true} component={ResetPassword} />

							<Route path="/password_change" exact={true} component={PasswordChange} />

							<Route exact path='/' component={LandingPage} />

							<Route exact path='/onboarding' component={Onboarding} />

							<Route exact path='/contactpage' component={ContactPage} />

							<Route exact path='/teampage' component={TeamPage} />

							<Route exact path='/prediction' component={Prediction} />
							<Route exact path='/prediction-result' component={Result} />

							{/* <Route exact path='/topbar' component={Topbar} /> */}

							<Route exact path='/dashboard' component={Dashboard} />

							<Route exact path='/add-patient' component={AddPatient} />
							
							{/* <Route exact path='/patient-history' component={PatientDataHistory} /> */}
							<Route exact path='/patient-data' component={PatientData} />

						</Switch>
					</div>
				</div>
			</Router>
		</StateProvider>
	)
}

export default App;
