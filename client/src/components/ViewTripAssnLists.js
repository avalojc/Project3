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
        console.log(this.props.match.params.tripId)
        axios.get(`/api/stationary/byTripId/${this.props.match.params.tripId}`)
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
                    key={station._id}
                    name={station.name}
                    stationId={station._id}
                    tripId={station.tripId}
                    methodOfStay={station.methodOfStay} 
                    costOfStay={station.costOfStay} 
                    permitOrReservation={station.permitOrReservation} 
                    lengthOfStay={station.lengthOfStay} 
                    eatYes={station.eating.eat} //duo
                    eatCost={station.eating.cost} //duo
                    amenities={station.amenities}
                    accessH2O={station.access.waterAccess} //quad
                    accessElectric={station.access.electricalAccess} //quad
                    accessWeb={station.access.internetAccess} //quad
                    accessRS={station.access.roomService} //duo
                />
            )
        })

        return (
            //correct to show {singleMobile/single Station}
            <div className="stationaryList">
                <div> { stationaryListElements ||'aqui'}</div>

            </div>
        )
    }
}

export default ViewTripAssn