import React, { Component } from 'react'
import axios from 'axios'
import SingleStationElement from './SingleStationaryItem'
import SingleMobileElement from './SingleMobileItem'
import {Link} from 'react-router-dom'



class ViewTripAssn extends Component {
    state = {
        stationaryList: [],
        mobileList: [],
        newStationName: '',
        newMobileName: '',
        sendToCreateElement: '',
        tripId:`${this.props.match.params.tripId}`,
        valueOfTrip: ''
        
    }
    //////////////////////mounting
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        this.stationaryItemPopulate()
        this.mobileItemPopulate()
    }

///////////////////populate stationary and mobile
    stationaryItemPopulate=()=>{
        axios.get(`/api/stationary/byTripId/${this.props.match.params.tripId}`)
        .then((response)=> {
            this.setState({
                stationaryList: response.data
            })
        })
    }
    mobileItemPopulate=()=>{
        axios.get(`/api/mobile/byTripId/${this.props.match.params.tripId}`)
        .then((response)=> {
            this.setState({
                mobileList: response.data
            })
        })
    }
    // addCosts=()=>{
    //     {this.state.valueOfTrip} 
    // }
 



    
//need create new station/mobile
//need on station/ mobile add

    render() {
        const 
            tripId
         =this.props.match.params.tripId

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
        const mobileListElements = this.state.mobileList.map((mobile) => {
            return(
                <SingleMobileElement
                    key={mobile._id}
                    name={mobile.name}
                    mobileId={mobile._id}
                    tripId={mobile.tripId}
                    costOfTransport={mobile.costOfTransport}
                    permitOrPaperwork={mobile.permitOrPaperwork}
                    lengthOfTravel={mobile.lengthOfTravel}
                    packWeight={mobile.packWeight}
                    eatCost={mobile.eating.eat}
                    eatYes={mobile.eating.cost}
                    isTechnical={mobile.technicalSkill.isTechnical}
                    levelOfDifficulty={mobile.technicalSkill.levelOfDifficulty}
                    passportRequired={mobile.passportRequired}
                />
            )
        })
        return (
            //correct to show {singleMobile/single Station}
            <div className="travelListAssn">
            <div id='thePathway'>
                The Pathway
            </div>
            <Link to={`/trips/createElement/${tripId}/`}>createElement</Link>
            
            <div className="stationaryList">
                <div> { stationaryListElements }</div>
            </div>
            <div className="mobileList">
                <div> { mobileListElements }</div>
            </div></div>
        )//
    }
}

export default ViewTripAssn