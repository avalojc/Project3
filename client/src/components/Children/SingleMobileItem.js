import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class SingleMobileElement extends Component {
    state = {
        name: '',
        methodOfTransport: '',
        tripId: this.props.tripId,
        mobileId: this.props.mobileId,
        sendMeToAllTrips: ''
    }


    deleteTrip = (mobileId) => {
        axios.delete(`/api/mobile/${this.props.mobileId}`, mobileId)
            .then(<Redirect to={`/trips/assn/${this.props.tripId}`}/>)
    }
    ///////////////redirect on submit///////////////////
    comboDeleteAndRedirect= () => {
        this.deleteTrip()
        this.setTheRedirect()
        // .then(()=>{this.setTheRedirect()})
    }
    setTheRedirect = () => {
        this.setState({
            sendMeToAllTrips: true
        })
    }        
    renderRedirect = () => {
    if (this.state.sendMeToAllTrips === true)
            {return <Redirect to={`/trips/assn/${this.props.tripId}`} />}}


    render() {
        const {
            name,
            // mobileId,
            // tripId,
             methodOfTransport,
            costOfTransport,
            // permitOrPaperwork,
            lengthOfTravel,
            // packWeight,
            eatCost,
            // eatYes,
            // isTechnical,
            // levelOfDifficulty,
            // passportRequired,
            price = costOfTransport+ eatCost
        } = this.props;
        return (
            <div className={`singleMobileDetail ${methodOfTransport}`} >
                <h4> {name}  </h4>
                <p>T:{lengthOfTravel}</p>
                <p>$:{price}</p>
                <button onClick={() => this.comboDeleteAndRedirect()}>x</button>
            </div>
        )
    }
}

export default SingleMobileElement