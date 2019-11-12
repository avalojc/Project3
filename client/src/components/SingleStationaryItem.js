import React, { Component } from 'react'
import axios from 'axios'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'


class SingleStationElement extends Component {
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
    Card({ isDragging, text }) {
        const [{ opacity }, dragRef] = useDrag({
          item: { type: ItemTypes.CARD, text },
          collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
          }),
        })
        return (
          <div ref={dragRef} style={{ opacity }}>
            {text}
          </div>
        )
      }



    render() {
        const {
            name,
            // stationId,
            // tripId,
            // methodOfStay,
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
            <div className="singleStationDetail">
                <h4>{name}</h4>

            </div>
        )
    }
}

export default SingleStationElement