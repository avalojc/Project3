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
    onEditTrip = (event) => {
        const updateName = event.target.value;
        this.setState({updateName: updateName})
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
                    onChange={this.onNewTripAdd}
                    value={this.state.newTripName}
                /><br></br>
                <input type="string"
                    name="edit creature name"
                    placeholder="Edit Trip Type"
                    required="required"
                    // onChange=
                    // value=
                /><br></br>
                <input type="string"
                    name="edit creature name"
                    placeholder="Edit Description"
                    required="required"
                    // onChange=
                    // value=
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