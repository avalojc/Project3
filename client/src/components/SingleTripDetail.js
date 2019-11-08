import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


class SingleTripDetail extends Component {
    state = {
        tripList: [],
        newTripName: '',
        name: '',
        legId: ''
    }
    refreshTrip=() => {
        axios.get('/api/trip')
        .then((response)=> {
            this.setState({
                tripList: response.data
            })
        })
    }
    componentDidMount() {
        this.refreshTrip()
    }
    deleteTrip = (tripId) => {
        axios.delete(`/api/trip/${this.props.tripId}`, tripId)
            .then(() => { this.refreshTrip() })
            .then(() => { this.refreshTrip() })
    }
    render() {
        const {
            name,
            legId,
            // tripId
        } = this.props;



        return (
            <div className="singleTripDetail">
                <h3> {name || 'Peter Piper'} </h3>
                <p> {legId || 'Yeet Id'} </p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <Link to={`/trips/${this.props.match.params.tripId}`}>See Assn</Link> <br></br>
                <button onClick={() => this.deleteTrip()}>Delete Trip</button>
            </div>
        )
    }
}

export default SingleTripDetail