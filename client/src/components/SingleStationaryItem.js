import React, { Component } from 'react'

// import ItemTypes from './ItemTypes'
// import { DragSource } from 'react-dnd'



class SingleStationElement extends Component {





    render() {
        const {
            name,
            // stationId,
            // tripId,
            methodOfStay,
            // costOfStay,
            // permitOrReservation,
            // lengthOfStay,
            // amenities,
            // eatCost,
            // eatYes,
            // accessElectric,
            // accessH2O,
            // accessRS,
            // accessWeb
        } = this.props;
        return (
            <div className="singleStationDetail" id={methodOfStay || "defaultId"}>
                <h4>{name}</h4>

            </div>
        )
    }
}

export default SingleStationElement