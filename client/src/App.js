import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
/////////////////////Trip Components/////////////////////////////////
import TripList from './components/Trip/TripList'
import CreateTrip from './components/Trip/CreateNewTrip'
import SingleTripDetail from './components/Trip/SingleTripDetail';
import EditTrip from './components/Trip/EditTrip'
/////////////////////Children Components/////////////////////////////////
import ViewTripAssn from './components/Children/ViewTripAssnLists';
import SingleStationElement from './components/Children/SingleStationaryItem'
/////////////////////App Items/////////////////////////////////
import NavBar from './components/navBar';
import HomePage from './components/TripHomePage'

import './App.css';

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
            <Route exact path="/trips/single/:tripId" component={SingleTripDetail}/>
            <Route exact path="/trips/single/:tripId/edit" component={EditTrip}/>
            <Route exact path="/trips/assn/:tripId" component={ViewTripAssn}/>
            <Route exact path="/trips/assn/:tripId/:stationId" component={SingleStationElement}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
