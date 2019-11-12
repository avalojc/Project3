import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'



class EditTrip extends Component {
    state = {
        tripList: [],
        redirect: false,
        updateName: '',
        updateDescription: '',
        updateTripType: ''
    }

    editExistingTrip=()=> {
        const newTrip = {
            updateName: this.state.newTripName,
            updateDescription:this.state.newTripName,
            updateTripType:this.state.newTripName,
        };
        axios.put('/api/trip', newTrip)
    }
    onEditTripName = (event) => {
        const updateName = event.target.value;
        this.setState({updateName: updateName})
    }
    onEditDescription = (event) => {
        const updateDescription = event.target.value;
        this.setState({updateDescription: updateDescription})
    }
    onEditTripType = (event) => {
        const updateTripType = event.target.value;
        this.setState({updateTripType: updateTripType})
    }
    ///////////////redirect on submit///////////////////
    comboEditAndRedirect= () => {
        this.editExistingTrip()
        this.setTheRedirect()
        // .then(()=>{this.setTheRedirect()})
    }
    setTheRedirect = () => {
        this.setState({
            redirect: true
        })
    }        
    renderRedirect = () => {
    if (this.state.redirect === true)
            {return <Redirect to='/trips/single/:tripId' />}}


  render () {

    return (
        <div>
            {this.renderRedirect()}
            <h1>Edit Trip {this.props.match.params.tripId}</h1>
            <form>
                <input type="string"
                    name="newTripName"
                    placeholder="Rename Trip"
                    required="required"
                    onChange={this.onEditTripName}
                    value={this.state.updateName}
                /><br></br>
                <input type="string"
                    name="edit creature name"
                    placeholder="Edit Trip Type"
                    required="required"
                    onChange={this.onEditDescription}
                    value={this.state.updateDescription}
                /><br></br>
                <input type="string"
                    name="edit creature name"
                    placeholder="Edit Description"
                    required="required"
                    onChange={this.onEditTripType}
                    value={this.state.updateTripType}
                /><br></br>
                <input type="submit"
                    onClick={ () => this.comboEditAndRedirect() }
                />
            </form> 

        </div>
        )
    }
}

export default EditTrip