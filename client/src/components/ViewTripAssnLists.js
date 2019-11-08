import React, { Component } from 'react'
import axios from 'axios'
import SingleStationElement from './SingleStationaryItem'

class ViewTripAssn extends Component {
    state = {
        stationaryList: [],
        newStationName: '',
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/stationary/byTripId/5dc1d9381e7ef24a68864f4c')
        .then((response)=> {
            console.log(response)
            this.setState({
                stationaryList: response.data
            })
            
        })
    }
//need create new station/mobile
//need on station/ mobile add

    render() {

        //correct render to return single state and single mobile
        const stationaryListElements = this.state.stationaryList.map((station) => {
            return(
                <SingleStationElement 
                    name={station.name}
                    stationId={station._id}
                    tripId={station.tripId}

                />
            )
        })

        return (
            //correct to show {singleMobile/single Station}
            <div className="singleTripDetail">
                <p> { stationaryListElements ||'aqui'}</p>

            </div>
        )
    }
}

export default ViewTripAssn