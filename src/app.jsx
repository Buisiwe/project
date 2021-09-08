import React from 'react';
import LandingPage from './pages/landingpage';
import Prediction from './pages/prediction';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "@fontsource/mulish";




function App() {
  return (
    <BrowserRouter>
    <Switch>
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
