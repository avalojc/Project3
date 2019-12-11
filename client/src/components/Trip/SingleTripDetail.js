import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'


class SingleTripDetail extends Component {
    state = {
        redirect: false,
        redirectEdit: false,
        alltrips: []

    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get(`/api/trip/`)
        .then((response)=> {
            this.setState({
                alltrips: [response.data]
            })
            console.log(response.data)
        })
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
                {return <Redirect to={`/trips/single/${this.props.match.params.tripId}/edit`} />}}


    render() {
        const {
            name= this.state.name,
            description,
            //  tripId
        } = this.props;



        return (
            <div className="singleTripDetail">

                {this.renderRedirect()}
                {this.renderRedirectEdit()}
                <br></br>
                <h3> Trip Id: {name} </h3>

                
                <p> {description } </p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <Link to={`/trips/assn/${this.props.match.params.tripId}`}>See Trip Steps</Link> <br></br>
                <button onClick={()=> {this.setTheRedirectEdit()}}>Edit</button> 
                <button onClick={() => this.comboDeleteAndRedirect()}>Delete Trip</button>
                
            </div>
        )
    }
}

export default SingleTripDetail