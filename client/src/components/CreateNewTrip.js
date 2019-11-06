import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'



class Trips extends Component {
    state = {
        tripList: [],
        newTripName: '',
        redirect: false
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
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    createNewTrip=()=> {
        const newTrip = {
            name: this.state.newTripName,
        };
        axios.post('/api/trip', newTrip)
        if (this.state.redirect)
            {return <Redirect to='/' />}
    }
    onNewTripAdd = (event) => {
        const newTripName = event.target.value;
        this.setState({newTripName: newTripName})
    }



  render () {



    return (
        <div>
            <h1>Create New Trip</h1>
            <form>
                <input type="string"
                    name="newTripName"
                    placeholder="Add a Trip"
                    required="required"
                    onChange={this.onNewTripAdd}
                    value={this.state.newTripName}
                />

                <input type="submit"
                    onClick={ () => this.createNewTrip() }
                />
            </form> 

        </div>
        )
    }
}

export default Trips