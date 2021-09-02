// import './App.css';
import React, {useState} from 'react';
import Register from './pages/register';
import Header from './components/header';
import Login from './pages/login';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
return (
    <Router>
    <div className="App">
      <Header/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}

export default App;
