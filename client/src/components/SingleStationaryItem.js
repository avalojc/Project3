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
            stationId,
            tripId,
            methodOfStay,
            costOfStay,
            permitOrReservation,
            lengthOfStay,
            eating,
            amenities,
            eatCost,
            eatYes,
            accessElectric,
            accessH2O,
            accessRS,
            accessWeb
        } = this.props;
        return (
            <div className="singleStationDetail">
                <h2> Title: {name}  </h2>
                <p> Station: {stationId} </p>
                <p> Trip:{tripId} </p>
                <p> {methodOfStay} </p>
                <p> {costOfStay} </p>
                <p> {permitOrReservation} </p>
                <p> {lengthOfStay} </p>
                <p> {eating} </p>
                <p> {amenities} </p>
                <p> {eatYes} </p>
                <p> {eatCost}</p>
                <p> {accessH2O}</p>
                <p> {accessElectric}</p>
                <p> {accessWeb}</p>
                <p> {accessRS}</p>
            </div>
        )
    }
}

export default SingleStationElement