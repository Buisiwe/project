import "@fontsource/mulish";
import "./styles/index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StateProvider from "./components/stateprovider";
import Onboarding from "./pages/onboarding";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import LandingPage from './pages/landingpage';
import ContactPage from './pages/contactpage';
import Prediction from './pages/prediction';
import Topbar from "./pages/topbar";
import Dashboard from "./pages/dashboard";
import Patient from "./pages/patient";


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

							<Route exact path='/' component={LandingPage} />

							<Route exact path='/onboarding' component={Onboarding} />

							<Route exact path='/contactpage' component={ContactPage} />

							<Route exact path='/prediction' component={Prediction} />

							<Route exact path='/topbar' component={Topbar} />

							<Route exact path='/dashboard' component={Dashboard} />

							<Route exact path='/patient' component={Patient} />

						</Switch>
					</div>
				</div>
			</Router>
		</StateProvider>
	)
}

export default App;
