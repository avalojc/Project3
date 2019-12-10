import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'

class SingleTripItem extends Component {
    state = {
        name: '',
        description: '',
        tripId: '',
        sendMeToAllTrips: ''
    } 

    deleteTrip = (tripId) => {
        axios.delete(`/api/trip/${this.props.tripId}`, tripId)
            .then(<Redirect to={`/trips/`}/>)
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
            {return <Redirect to={`/trips/`} />}}




    render() {
        const {
            name,
            description,
            tripId,
            tripType
        } = this.props;



        return (
            <div className={`singleTripUnit ${tripType}`} >
                {this.renderRedirect()}
                <Link to={`/trips/single/${tripId}`}>
                    <h3> {name || 'default'} </h3>
                </Link>
                <p> {description || 'SingleTripItem Id'} </p>
                <button onClick={() => this.comboDeleteAndRedirect()}>Delete</button>
            </div>
        )
    }
}

export default SingleTripItem