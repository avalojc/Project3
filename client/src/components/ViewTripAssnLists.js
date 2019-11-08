import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


class ViewTripAssn extends Component {
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
//need create new station/mobile
//need on station/ mobile add

    render() {

        //correct render to return single state and single mobile
        const {
            name,
            legId,
        } = this.props;



        return (
            //correct to show {singleMobile/single Station}
            <div className="singleTripDetail">
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>
                <p> {this.props.match.params.tripId || 'aqui'}</p>

            </div>
        )
    }
}

export default ViewTripAssn