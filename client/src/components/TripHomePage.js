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
        <div>
            <h1>Homepage</h1>
            <a href="/CreateNewTrip"><img src='' alt='hike'></img></a>
            <a href="/CreateNewTrip"><img src='' alt='bike'></img></a>
            <a href="/CreateNewTrip"><img src='' alt='paddle'></img></a>
            <a href="/CreateNewTrip"><img src='' alt='ski'></img></a>


            <form>
                <input type="string"
                    name="newTripName"
                    placeholder="Add a Trip"
                    required="required"
                    onChange={this.onNewTripAdd}
                    value={this.state.newTripName}
                />

                <input type="submit"
                    onClick={() => this.createNewTrip()}
                />
            </form>
            <a href="/Trips">View All Trips</a>
            {/* <div>{tripListElements}</div> */}
        </div>
        )
    }
}

export default Trips