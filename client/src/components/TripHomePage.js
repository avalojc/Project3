//*****************************************WIP***********************//
import React, { Component } from 'react'
import {    Link  } from "react-router-dom";
import axios from 'axios'

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
    createNewTrip=()=> {
        const newTrip = {
            name: this.state.newTripName,
        };
        axios.post('/api/trip', newTrip)
        .then(()=> {this.refreshTrip()})
    }
    onNewTripAdd = (event) => {
        const newTripName = event.target.value;
        this.setState({newTripName: newTripName})
    }
  render () {
    return (
        <div className='homepage'>
            <div className='imageLinks'>
                <Link to="/trips/createTrip"><img className="tinyIcon" src={require('../img/hike.png')} alt='hike'></img></Link>
                <Link to="/trips/createTrip"><img className="tinyIcon" src={require('../img/bike.png')} alt='bike'></img></Link>
                <Link to="/trips/createTrip"><img className="tinyIcon" src={require('../img/paddle.png')} alt='paddle'></img></Link>
                <Link to="/trips/createTrip"><img className="tinyIcon" src={require('../img/ski.png')} alt='ski'></img></Link>
            </div>
        </div>
        )
    }
}

export default Trips