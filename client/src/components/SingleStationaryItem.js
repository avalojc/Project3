import React, { Component } from 'react'
import axios from 'axios'


class SingleStationElement extends Component {
    state = {
        stationaryList: [],
        newStationName: '',
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/stationary/byTripId/5dc598bbd01fd54300eafaab')
        .then((response)=> {

            this.setState({
                stationaryList: response.data
            })
            // .then(console.log(this.state))
        })
    }


    render() {
        const {
            name,
            stationId,
            tripId
        } = this.props;



        return (
            <div className="singleStationDetail">
                <p> {name}</p>
                <p> {stationId}</p>
                <p> {tripId}</p>
            </div>
        )
    }
}

export default SingleStationElement