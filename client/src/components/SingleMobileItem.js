import React, { Component } from 'react'
import axios from 'axios'


class SingleMobileElement extends Component {
    state = {
        mobileList: [],
        newMobileName: '',
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/mobile/byTripId/5dc598bbd01fd54300eafaab')
        .then((response)=> {
            this.setState({
                mobileList: response.data
            })
            // .then(console.log(this.state))
        })
    }


    render() {
        const {
            name,
            mobileId,
            tripId,
            methodOfTransport,
            costOfTransport,
            permitOrPaperwork,
            lengthOfTravel,
            packWeight,
            eatCost,
            eatYes,
            isTechnical,
            levelOfDifficulty,
            passportRequired,
        } = this.props;
        return (
            <div className="singleMobileDetail">
                <h2> Title: {name}  </h2>
                <p> Station: {mobileId} </p>
                <p> Trip: {tripId} </p>
                <p> What is your method of stay?: {methodOfTransport} </p>
                <p> Cost of Stay: ${costOfTransport} </p>
                <p> Do you need a permit or reservation: {permitOrPaperwork} </p>
                <p> How long will you be staying(hours): {lengthOfTravel} </p>
                <p> What Amenities are available: {packWeight} </p>
                <p> Will you be eating: {eatYes} </p>
                <p> Cost to Eat: ${eatCost}</p>
                <p> Access Water: {isTechnical}</p>
                <p> Access Electric: {levelOfDifficulty}</p>
                <p> Internet Access: {passportRequired}</p>
            </div>
        )
    }
}

export default SingleMobileElement