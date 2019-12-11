import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

// import ItemTypes from './ItemTypes'
// import { DragSource } from 'react-dnd'



class SingleStationElement extends Component {
    state = {
        stationId: this.props.stationId,
        tripId: this.props.tripId,
        sendMeToAllTrips: ''
    } 
    deleteTrip = (stationId) => {
        axios.delete(`/api/stationary/${this.props.stationId}`, stationId)
            .then(<Redirect to={`/trips/assn/${this.props.tripId}`}/>)
    }
    ///////////////redirect on submit///////////////////
    comboDeleteAndRedirect= () => {
        this.deleteTrip()
        this.setTheRedirect()
        // .then(()=>{this.setTheRedirect()})
    }
    setTheRedirect = () => {
        this.setState({
            sendMeToAllTrips: true
        })
    }        
    renderRedirect = () => {
    if (this.state.sendMeToAllTrips === true)
            {return <Redirect to={`/trips/assn/${this.props.tripId}`} />}}




    render() {
        const {
            name,
            // stationId,
            // tripId,
            methodOfStay,
            costOfStay,
            // permitOrReservation,
            lengthOfStay,
            // amenities,
            eatCost,
            // eatYes,
            // accessElectric,
            // accessH2O,
            // accessRS,
            // accessWeb,
            price = costOfStay + eatCost ,
            
        } = this.props;
        return (
            <div className="singleStationDetail" id={methodOfStay || "defaultId"}>
                <h4>{name}</h4>
                <p>T:{lengthOfStay}</p>
                <p>$:{price}</p>
                <button onClick={() => this.comboDeleteAndRedirect()}>x</button>
            </div>
        )
    }
}

export default SingleStationElement