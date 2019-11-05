import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Trips from './components/Trips'
import SingleTrip from './components/SingleTrip'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Trips} />
          <Route exact path="/:tripId" component={SingleTrip}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
