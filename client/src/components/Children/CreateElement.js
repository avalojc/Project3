import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'




class CreateElement extends Component {
            state = {
            createMobile: '',
            McreateEat: '',
            McreateCost: '',
            McreateIsTechnical: '',
            McreateLevelOfDifficulty: '',
            McreateMethodOfTransport: '',
            McreateCostOfTransport: '',
            McreatePermitOrPaperWork: '',
            McreateLengthOfTravel: '',
            McreatePackWeight: '',
            McreatePassportRequired: '',
            createStationary: '',
            redirectMeToAllElements: '',
            tripId: `${this.props.match.params.tripId}`
        }
/////////////////////////////CREATENEWELEMENT
    createNewMobile=()=> {
        const newMobile = {
            name: this.state.createMobile,
            eating: {
                eat: this.state.McreateEat,
                cost: this.state.McreateCost,
            },
            technicalSkill: {
                isTechnical: this.state.McreateIsTechnical,
                levelOfDifficulty: this.state.McreateLevelOfDifficulty,
            },
            tripId: `${this.state.tripId}`,
            methodOfTransport: this.state.McreateMethodOfTransport,
            costOfTransport: this.state.McreateCostOfTransport,
            permitOrPaperwork: this.state.McreatePermitOrPaperWork,
            lengthOfTravel: this.state.McreateLengthOfTravel,
            packWeight: this.state.McreatePackWeight,
            passportRequired: this.state.McreatePassportRequired,
        };
        axios.post(`/api/mobile/`, newMobile)
    }
        onNewMobileAdd = (event) => {
        const createMobile = event.target.value;
        this.setState({createMobile: createMobile})
    }
    ///////////////redirect on submit///////////////////
    comboCreateAndRedirect= () => {
        this.createNewMobile()
        this.setTheRedirect()
        // .then(()=>{this.setTheRedirect()})
    }
    setTheRedirect = () => {
        this.setState({
            redirectMeToAllElements: true
        })
    }        
    renderRedirect = () => {
        const tripId = this.state.tripId
    if (this.state.redirect === true)
            {return <Redirect to={`/mobiles/${tripId}`} />}}
    render() {


        return (
            //correct to show {singleMobile/single Station}
            <div>
            {this.renderRedirect()}
            <h1>Create New Mobile</h1>
            <form>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.McreateEat}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br>
                <input type="submit"
                    onClick={ () => this.comboCreateAndRedirect() }
                />
            </form> 
            </div>
        )
    }
}

export default CreateElement






//   render () {
//     return (
//         <div>


//         </div>
//         )
//     }
// }

// export default Mobiles

//     createNewStationary=()=> {
//         const newStationary = {
//             name: this.state.newStationaryName,
//         };
//         axios.post('/api/stationary', newStationary)
//     }
//     onNewStationaryAdd = (event) => {
//         const newStationaryName = event.target.value;
//         this.setState({newStationaryName: newStationaryName})
//     }
//     ///////////////redirect on submit///////////////////
//     comboCreateAndRedirect= () => {
//         this.createNewStationary()
//         this.setTheRedirect()
//         // .then(()=>{this.setTheRedirect()})
//     }
//     setTheRedirect = () => {
//         this.setState({
//             redirect: true
//         })
//     }
//     renderRedirect = () => {
//     if (this.state.redirect === true)
//             {return <Redirect to='/stationarys' />}}


//   render () {
//     return (
//         <div>
//             {this.renderRedirect()}
//             <h1>Create New Stationary</h1>
//             <form>
//                 <input type="string"
//                     name="newStationaryName"
//                     placeholder="Add a Stationary"
//                     required="required"
//                     onChange={this.onNewStationaryAdd}
//                     value={this.state.newStationaryName}
//                     maxLength={10}
//                 />

//                 <input type="submit"
//                     onClick={ () => this.comboCreateAndRedirect() }
//                 />
//             </form> 

//         </div>
//         )
//     }
// }

// export default Stationarys