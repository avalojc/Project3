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
    setTheRedirect = () => {
        this.setState({
            redirect: true
        })
    }        
    renderRedirect = () => {
    if (this.state.redirect === true)
            {return <Redirect to='/trips' />}}

    createNewTrip=()=> {
        const newTrip = {
            name: this.state.newTripName,
        };
        axios.post('/api/trip', newTrip)
    }
    onNewTripAdd = (event) => {
        const newTripName = event.target.value;
        this.setState({newTripName: newTripName})
    }
    comboCreateAndRedirect= () => {
        this.createNewTrip()
        this.setTheRedirect()
        // .then(()=>{this.setTheRedirect()})
    }


  render () {
    return (
        <div>
            {this.renderRedirect()}
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
                    onClick={ () => this.comboCreateAndRedirect() }
                />
            </form> 

        </div>
        )
    }
}

export default Trips