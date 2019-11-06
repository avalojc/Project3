import React, { Component } from 'react'
import axios from 'axios'


class SingleTrip extends Component {
    state = {
        name: '',
        legId: ''
    }
    componentDidMount() {
        this.refreshTrip()
    }
    refreshTrip=() => {
        axios.get('/api/trip/:tripId')
        .then((response) => {
            this.setState({
                tripList: response.data
            })
            
        })
    }
    deleteTrip=() => {
        console.log(`${this}`)
    }

  render () {
      const {
          name,
          legId
      } = this.props;
    
 
    return (
        <div >
            <a href='5dc1d9381e7ef24a68864f4c'><h3> {name || 'default'} </h3></a>
            <p> {legId || 'default Id'} </p>
            <button onClick={() => this.deleteTrip()}>Delete Trip</button>
        </div>

    )
        
} 
}

export default SingleTrip