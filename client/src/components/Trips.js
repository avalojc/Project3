import React, { Component } from 'react'
import axios from 'axios'
import SingleTrip from './SingleTrip'


class Trips extends Component {
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
        <div>
            <h1>Hello World</h1>
            {tripListElements}
        </div>
        )
    }
}

export default Trips