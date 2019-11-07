import React, { Component } from 'react'
import axios from 'axios'


class SingleTrip extends Component {
    state = {
        name: '',
        legId: ''
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/trip/')
        .then((response) => {
            this.setState({
                tripList: response.data
            })
            
        })
    }

    deleteTrip = (tripId) => {
        console.log('you clicked me')
        console.log(this.props)
        console.log(this)
        axios.delete(`/api/trip/${this.props.tripId}`, tripId)
        .then(() => {this.refreshTrip()})
    }




  render () {
      const {
          name,
          legId
      } = this.props;
    return (
        <div className="singleTripUnit">
            <a href='5dc1d9381e7ef24a68864f4c'>
            <h3> {name || 'default'} </h3></a>
            <p> {legId || 'default Id'} </p>
            <button onClick={() => this.deleteTrip()}>Delete Trip</button>
        </div>
    )
} 
}

export default SingleTrip