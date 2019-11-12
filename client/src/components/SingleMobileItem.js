import React, { Component } from 'react'
import axios from 'axios'


class SingleMobileElement extends Component {

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
            // mobileId,
            // tripId,
            // methodOfTransport,
            // costOfTransport,
            // permitOrPaperwork,
            // lengthOfTravel,
            // packWeight,
            // eatCost,
            // eatYes,
            // isTechnical,
            // levelOfDifficulty,
            // passportRequired,
        } = this.props;
        return (
            <div className="singleMobileDetail" >
                <h4> Title: {name}  </h4>

            </div>
        )
    }
}

export default SingleMobileElement