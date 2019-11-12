import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'


class SingleTripDetail extends Component {
    state = {
        redirect: false,
        redirectEdit: false
    }
    
    deleteTrip = (tripId) => {
        console.log('deleting')
        axios.delete(`/api/trip/${this.props.match.params.tripId}`, tripId)
    }

    comboDeleteAndRedirect= () => {
        this.deleteTrip()
        this.setTheRedirect()
    }
    setTheRedirect = () => {
        console.log('setting state')
        this.setState({
            redirect: true
        })
    }      
    renderRedirect = () => {
        if (this.state.redirect === true)
                {return <Redirect to='/trips/' />}}/////////////////////// need to add redirect to edit page
    setTheRedirectEdit = () => {
        console.log('setting state')
        this.setState({
            redirectEdit: true
        })
    }      
 renderRedirectEdit = () => {
        if (this.state.redirectEdit === true)
                {return <Redirect to='/trips/single/:tripId/edit' />}}


    render() {
        const {
            name,
            legId,
            // tripId
        } = this.props;



        return (
            <div className="singleTripDetail">
                {this.renderRedirect()}
                {this.renderRedirectEdit()}
                <h3> {name || 'Peter Piper'} 
                <button onClick={()=> {this.setTheRedirectEdit()}}>Edit</button> 
                </h3>
                <p> {legId || 'Yeet Id'} </p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <Link to={`/trips/assn/${this.props.match.params.tripId}`}>See Assn</Link> <br></br>
                <button onClick={() => this.comboDeleteAndRedirect()}>Delete Trip</button>
                
            </div>
        )
    }
}

export default SingleTripDetail