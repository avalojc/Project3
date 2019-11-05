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
        axios.get('/api/trip/:id')
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
            <a href='5dc1d9381e7ef24a68864f4c'><h3> {name || 'default'} </h3></a>
            <p> {legId || 'default Id'} </p>
        </div>

    )
        
} 
}

export default SingleTrip