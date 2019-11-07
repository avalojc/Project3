//*****************************************WIP***********************//
import React, { Component } from 'react'
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
                <a href="/trips/createTrip"><img src={require('../img/hike.png')} alt='hike'></img></a>
                <a href="/trips/createTrip"><img src={require('../img/bike.png')} alt='bike'></img></a>
                <a href="/trips/createTrip"><img src={require('../img/paddle.png')} alt='paddle'></img></a>
                <a href="/trips/createTrip"><img src={require('../img/ski.png')} alt='ski'></img></a>
            </div>


        </div>
        )
    }
}

export default Trips