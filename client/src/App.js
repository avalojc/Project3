import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TripList from './components/TripList'
import HomePage from './components/TripHomePage'
import CreateTrip from './components/CreateNewTrip'
import NavBar from './components/navBar';
import './App.css';
import SingleTripDetail from './components/SingleTripDetail';
import ViewTripAssn from './components/ViewTripAssnLists';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <h1>Hike, Bike, Paddle and Ski</h1>
        <div className='wrapper'>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/trips" component={TripList} />
            <Route exact path="/trips/createTrip" component={CreateTrip}/>
            <Route exact path="/trips/:tripId" component={SingleTripDetail}/>
            <Route exact path="/trips/assn/:tripId" component={ViewTripAssn}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
