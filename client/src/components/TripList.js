//*****************************************Trip List***********************//

import React, { Component } from 'react'
import axios from 'axios'
import SingleTrip from './SingleTrip'

class TripList extends Component {
    state = {
        tripList: [],
        newTripName: '',
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/trip')
        .then((response)=> {
            this.setState({
                tripList: response.data
            })
        })
    }
    createNewTrip=()=> {
        const newTrip = {
            name: this.state.newTripName,
        };
        axios.post('/api/trip', newTrip)
        .then(()=> {this.refreshTrip()})
    }
    onNewTripAdd = (event) => {
        const newTripName = event.target.value;
        this.setState({newTripName: newTripName})
    }

  render () {
    const tripListElements = this.state.tripList.map((trip) => {
        return(
            <SingleTrip 
                key={trip._id}
                tripId={trip._id}
                name={trip.name}
                legId={trip.legId}
            />
        )
    })
    return (
        <div className='tripListWidth'>
            <h1>TripList</h1>
            <div className="tripField">{tripListElements}</div>
        </div>
        )
    }
}

export default TripList