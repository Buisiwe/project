import "@fontsource/mulish";
import './styles/index.css';
import React, { useState } from 'react';
import Register from './pages/register';
import Header from './components/header';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Password from './pages/password';
import LandingPage from './pages/landingpage';
import Prediction from './pages/prediction';


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
      <Route exact path = '/'>
        <LandingPage />
      </Route>
      <Route exact path = '/prediction'>
        <Prediction />
      </Route>
      </Switch>
      </BrowserRouter>

  )
}

export default App;

