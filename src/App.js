import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import Mainp from './Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
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
  );
}

export default App;
