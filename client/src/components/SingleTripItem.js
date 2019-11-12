import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

class SingleTripItem extends Component {
    state = {
        name: '',
        legId: ''
    } //this will be used to edit eventually?
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip = () => {
        axios.get('/api/trip/')
            .then((response) => {
                console.log('here')
                this.setState({
                    tripList: response.data
                })
            })
    }
    deleteTrip = (tripId) => {
        axios.delete(`/api/trip/${this.props.tripId}`, tripId)
            .then(() => { this.refreshTrip() })
    }
    render() {
        const {
            name,
            legId,
            tripId
        } = this.props;



        return (
            <div className="singleTripUnit">
                <Link to={`/trips/single/${tripId}`}>
                <h3> {name || 'default'} </h3></Link>
                <p> {legId || 'SingleTripItem Id'} </p>
                <button onClick={() => this.deleteTrip()}>Delete Trip</button>
            </div>
        )
    }
}

export default SingleTripItem