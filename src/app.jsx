import React from 'react';
import LandingPage from './pages/landingpage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "@fontsource/mulish";




function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = '/'>
        <LandingPage />
      </Route>
      </Switch>
      </BrowserRouter>

  )
}

export default App;
