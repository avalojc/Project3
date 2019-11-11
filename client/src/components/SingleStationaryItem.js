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
                <p> Trip: {tripId} </p>
                <p> What is your method of stay?: {methodOfStay} </p>
                <p> Cost of Stay: ${costOfStay} </p>
                <p> Do you need a permit or reservation: {permitOrReservation} </p>
                <p> How long will you be staying(hours): {lengthOfStay} </p>
                <p> What Amenities are available: {amenities} </p>
                <p> Will you be eating: {eatYes} </p>
                <p> Cost to Eat: ${eatCost}</p>
                <p> Access Water: {accessH2O}</p>
                <p> Access Electric: {accessElectric}</p>
                <p> Internet Access: {accessWeb}</p>
                <p> Room Service Access: {accessRS}</p>
            </div>
        )
    }
}

export default SingleStationElement