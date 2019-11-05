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
        axios.get('/api/trip/')
        .then((response) => {
            this.setState({
                tripList: response.data
            })
            
        })
    }

  render () {
      const {
          name,
          legId
      } = this.props;

    return (
        <div>
            <h3> {name || 'default'} </h3>
            <p> {legId || 'default Id'} </p>
        </div>

    )
        
} 
}

export default SingleTrip