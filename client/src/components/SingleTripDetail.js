import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom'


class SingleTripDetail extends Component {
    state = {
        redirect: false
    }
    refreshTrip=() => {
        axios.get('/api/trip')
        .then((response)=> {
            this.setState({
                tripList: response.data
            })
        })
    }
    componentDidMount() {
        this.refreshTrip()
    }
    
    deleteTrip = (tripId) => {
        console.log('deleting')
        axios.delete(`/api/trip/${this.props.match.params.tripId}`, tripId)
    }
    comboDeleteAndRedirect= () => {
        this.deleteTrip()
        this.setTheRedirect()
        this.refreshTrip()
    }
    setTheRedirect = () => {
        console.log('setting state')
        this.setState({
            redirect: true
        })
    }      
    renderRedirect = () => {
        if (this.state.redirect === true)
                {return <Redirect to='/trips' />}}



    render() {
        const {
            name,
            legId,
            // tripId
        } = this.props;



        return (
            <div className="singleTripDetail">
                <h3> {name || 'Peter Piper'} 
                    <button onClick={()=> {console.log('click edit')}}>Edit</button> 
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