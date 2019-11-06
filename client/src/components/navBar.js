import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render () {

        return (
            <div className="fullNavUnit">
                <div className="navWrapper">
                    <Link to="/" ><div className="linkBucket" >Home</div> </Link>
                    <Link to="/trips"><div className="linkBucket" >All Trips</div></Link>
                    <Link to="/trips/createTrip"><div className="linkBucket" >Create Trip</div></Link>
                </div>
            </div>
            )
        }
}

export default NavBar