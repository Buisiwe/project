import "@fontsource/mulish";
import "./styles/index.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateProvider from "./components/stateprovider";
import Onboarding from "./pages/onboarding";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import PasswordChange from "./pages/passwordchange";
import LandingPage from './pages/landingpage';
import ContactPage from './pages/contactpage';
import TeamPage from './pages/teampage';
import Prediction from './pages/prediction';
import Topbar from "./pages/topbar";
import Dashboard from "./pages/dashboard";
import Patient from "./pages/patientProfile";
import PatientDataHistory from "./pages/PatientDataHistory"


function App() {
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

							<Route exact path='/topbar' component={Topbar} />

							<Route exact path='/dashboard' component={Dashboard} />

							<Route exact path='/patient' component={Patient} />
							
							<Route exact path='/patient-history' component={PatientDataHistory} />

						</Switch>
					</div>
				</div>
			</Router>
		</StateProvider>
	)
}

export default App;
