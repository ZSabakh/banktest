import React from 'react';
import logo from './logo.svg';
import Dashboard from './Dashboard';
import Login from './Login';
import Mainp from './Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<div>
<Router>
 <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Mainp />
    </Route>
    <Route exact path="/dashboard">
      <Dashboard />
    </Route>
 </Switch>
</Router>
    </div>
  );
}

export default App;
