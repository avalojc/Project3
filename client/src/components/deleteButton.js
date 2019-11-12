import React, { Component } from 'react'
import axios from 'axios'


class deleteItem extends Component {

    deleteTrip = (tripId) => {
        axios.delete(`/api/trip/${this.props.tripId}`, tripId)
            .then(() => { this.refreshTrip() })
            .then(() => { this.refreshTrip() })
    }
    render() {
        return (
            <div> 
                <button onClick={() => this.deleteTrip()}>Delete</button>
            </div>
        )
    }
}

export default deleteItem