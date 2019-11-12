import React, { Component } from 'react'
import axios from 'axios'


class SingleStationElement extends Component {
    state = {
        stationaryList: [],
        newStationName: '',
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/stationary/byTripId/5dc598bbd01fd54300eafaab')
        .then((response)=> {

            this.setState({
                stationaryList: response.data
            })
            // .then(console.log(this.state))
        })
    }


    render() {
        const {
            name,
            // stationId,
            // tripId,
            // methodOfStay,
            // costOfStay,
            // permitOrReservation,
            // lengthOfStay,
            // amenities,
            // eatCost,
            // eatYes,
            // accessElectric,
            // accessH2O,
            // accessRS,
            // accessWeb
        } = this.props;
        return (
            <div className="singleStationDetail">
                <h4>{name}</h4>

            </div>
        )
    }
}

export default SingleStationElement