import "@fontsource/mulish";
import "./styles/index.css";
import React, { useState } from "react";
import Register from "./pages/register";
import Header from './components/header';
import Login from "./pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Password from './pages/password';
import ResetPassword from "./pages/resetpassword";
import Onboarding from "./pages/onboarding";
import LandingPage from './pages/landingpage';
import ContactPage from './pages/contactpage';
import Prediction from './pages/prediction';
import Topbar from "./pages/topbar";
import Dashboard from "./pages/dashboard";
import Patient from "./pages/patient";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/register" exact={true}>
              <Register />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/password" exact={true}>
              <Password />
            </Route>
<Route path="/reset_password" exact={true}>
							<ResetPassword />
						</Route>
      <Route exact path = '/'>
        <LandingPage />
      </Route>
<Route exact path='/onboarding'>
							<Onboarding />
						</Route>
            <Route exact path='/contactpage'>
							<ContactPage />
						</Route>
      <Route exact path = '/prediction'>
        <Prediction />
      </Route>
      <Route exact path = '/topbar'>
        <Topbar />
      </Route>
      <Route exact path = '/dashboard'>
        <Dashboard />
      </Route>
       <Route exact path = '/patient'>
        <Patient />
      </Route>
      </Switch>
      </div>
      </div>
      </Router>


	)
}

export default App;
