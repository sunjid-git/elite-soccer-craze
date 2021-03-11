import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import TeamDetail from './Component/TeamDetail/TeamDetail';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/team/:teamId">
          <TeamDetail></TeamDetail>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
