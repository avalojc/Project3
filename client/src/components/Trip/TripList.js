//*****************************************Trip List***********************//

import React, { Component } from 'react'
import axios from 'axios'
import SingleTripItem from './SingleTripItem'



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
            <SingleTripItem 
                key={trip._id}
                tripId={trip._id}
                name={trip.name}
                description={trip.description}
                tripType={trip.tripType}
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