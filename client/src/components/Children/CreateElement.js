import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'




class CreateElement extends Component {
            state = {
            ///////////////mobile
            createMobile: '',
            MCreateEat: '',
            MCreateCost: '',
            MCreateIsTechnical: '',
            MCreateLevelOfDifficulty: '',
            MCreateMethodOfTransport: '',
            MCreateCostOfTransport: '',//holding
            MCreatePermitOrPaperWork: '',
            MCreateLengthOfTravel: '',
            MCreatePackWeight: '',
            MCreatePassportRequired: '',
            //////////////stationary
            createStationary: '',
            SCreateEat: '',
            SCreateCost: '',
            SCreateWaterAccess: '',
            SCreateElectricalAccess: '',
            SCreateMethodOfStay: '',
            SCreateCostOfStay: '',//holding
            SCreatePermitOrReservation: '',
            SCreateLengthOfStay: '',
            SCreateAmenities: '',
            SCreateInternetAccess: '',
            SCreateRoomServiceAccess: '',
            redirectMeToAllElements: '',
            tripId: `${this.props.match.params.tripId}`
        }
/////////////////////////////CREATENEWELEMENT
    createNewMobile=()=> {
        const newMobile = {
            name: this.state.createMobile,
            eating: {
                eat: this.state.MCreateEat,
                cost: this.state.MCreateCost,
            },
            technicalSkill: {
                isTechnical: this.state.MCreateIsTechnical,
                levelOfDifficulty: this.state.MCreateLevelOfDifficulty,
            },
            tripId: `${this.state.tripId}`,
            methodOfTransport: this.state.MCreateMethodOfTransport,
            costOfTransport: this.state.MCreateCostOfTransport,
            permitOrPaperwork: this.state.MCreatePermitOrPaperWork,
            lengthOfTravel: this.state.MCreateLengthOfTravel,
            packWeight: this.state.MCreatePackWeight,
            passportRequired: this.state.MCreatePassportRequired,
        };
        axios.post(`/api/mobile/`, newMobile)
    }
    onNewMobileAdd = (event) => {
        const createMobile = event.target.value;
        this.setState({createMobile: createMobile})
    }
    onNewEatAdd = (event) => {
        const MCreateEat = event.target.value;
        this.setState({MCreateEat: MCreateEat})
    }
    onNewEatCostAdd = (event) => {
        const MCreateCost = event.target.value;
        this.setState({MCreateCost: MCreateCost})
    }
    onNewTechSkillAdd = (event) => {
        const MCreateIsTechnical = event.target.value;
        this.setState({MCreateIsTechnical: MCreateIsTechnical})
    }
    onNewDiffLevelAdd = (event) => {
        const MCreateLevelOfDifficulty = event.target.value;
        this.setState({MCreateLevelOfDifficulty: MCreateLevelOfDifficulty})
    }
    onNewMethodOfTransportationAdd = (event) => {
        const MCreateMethodOfTransport = event.target.value;
        this.setState({MCreateMethodOfTransport: MCreateMethodOfTransport})
    }
    onNewCostOfTransportAdd = (event) => {
        const MCreateCostOfTransport = event.target.value;
        this.setState({MCreateCostOfTransport: MCreateCostOfTransport})
    }
    onNewPermitOrPaperWorkAdd = (event) => {
        const MCreatePermitOrPaperWork = event.target.value;
        this.setState({MCreatePermitOrPaperWork: MCreatePermitOrPaperWork})
    }
    onNewLengthOfTravelAdd = (event) => {
        const MCreateLengthOfTravel = event.target.value;
        this.setState({MCreateLengthOfTravel: MCreateLengthOfTravel})
    }
    onNewPackWeightAdd = (event) => {
        const MCreatePackWeight = event.target.value;
        this.setState({MCreatePackWeight: MCreatePackWeight})
    }
    onNewPassportReqAdd = (event) => {
        const MCreatePassportRequired = event.target.value;
        this.setState({MCreatePassportRequired: MCreatePassportRequired})
    }
    createNewStation=()=> {
        const newStation = {
            name: this.state.createStation,
            eating: {
                eat: this.state.SCreateEat,
                cost: this.state.SCreateCost,
            },
            access: {
                waterAccess: this.state.SCreateWaterAccessl,
                electricalAccess: this.state.SCreateElectricalAccess,
                internetAccess: this.state.SCreateInternetAccess,
                roomService: this.state.SCreateRoomService,
            },
            tripId: `${this.state.tripId}`,
            methodOfStay: this.state.SCreateMethodOfStay,
            costOfStay: this.state.SCreateCostOfStay,
            permitOrReservation: this.state.SCreatePermitOrReservation,
            lengthOfStay: this.state.SCreateLengthOfStay,
            amenities: this.state.SCreateAmenities,
        };
        axios.post(`/api/stationary/`, newStation)
    }
    onNewStationAdd = (event) => {
        const createStation = event.target.value;
        this.setState({createStationary: createStation})
    }
    onNewSCreateEatAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateEat: createStation})
    }
    onNewSCreateEatCostAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateCost: createStation})
    }
    onNewSCreateWaterAccessAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateWaterAccess: createStation})
    }
    onNewSCreateElectricalAccessAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateElectricalAccess: createStation})
    }
    onNewSCreateMethodOfStayAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateMethodOfStay: createStation})
    }
    onNewSCreateCostOfStayAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateCostOfStay: createStation})
    }
    onNewSCreatePermitOrReservationAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreatePermitOrReservation: createStation})
    }
    onNewSCreateLengthOfStayAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateLengthOfStay: createStation})
    }
    onNewSCreateAmenitiesAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateAmenities: createStation})
    }
    onNewSCreateInternetAccessAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateInternetAccess: createStation})
    }
    onNewSCreateRoomServiceAccessAdd = (event) => {
        const createStation = event.target.value;
        this.setState({SCreateRoomServiceAccess: createStation})
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
            {return <Redirect to={`/mobiles/${tripId}`} />}
    }
    render() {


        return (
            //correct to show {singleMobile/single Station}
            <div className="elementField">
            {this.renderRedirect()}
            <div className="mobileBackground">
            <h1>Create New Mobile</h1>
            <form> Name Mobile: 
                <input type="string"
                    name="newMobileName"
                    placeholder="Add a Mobile"
                    required="required"
                    onChange={this.onNewMobileAdd}
                    value={this.state.createMobile}
                    maxLength={10}
                /><br></br> Will you need to eat on this leg?  
                <input type="boolean"
                    name="newMobileName"
                    placeholder="Will You Be Eating"
                    required="required"
                    onChange={this.onNewEatAdd}
                    value={this.state.MCreateEat}
                    maxLength={10}
                /><br></br> How much will it cost? 
                <input type="number"
                    name="newMobileName"
                    placeholder="Cost Of Food"
                    required="required"
                    onChange={this.onNewEatCostAdd}
                    value={this.state.MCreateCost}
                    maxLength={10}
                /><br></br>Technical Skills required? 
                <input type="boolean"
                    name="newMobileName"
                    placeholder="Does This Trip Require Technical Skills"
                    required="required"
                    onChange={this.onNewTechSkillAdd}
                    value={this.state.MCreateIsTechnical}
                    maxLength={10}
                /><br></br>Level of Difficulty? 
                <input type="string"
                    name="newMobileName"
                    placeholder="What Level Of Difficulty Is The Trip"
                    required="required"
                    onChange={this.onNewDiffLevelAdd}
                    value={this.state.MCreateLevelOfDifficulty}
                    maxLength={10}
                /><br></br>MethodOfTransportation: 
                <input type="string"
                    name="newMobileName"
                    placeholder="What Is Your Method Of Transportation"
                    required="required"
                    onChange={this.onNewMethodOfTransportationAdd}
                    value={this.state.MCreateMethodOfTransport}
                    maxLength={10}
                /><br></br>Cost of MethodOfTransportation? 
                <input type="number"
                    name="newMobileName"
                    placeholder="How Much Does This Method Of Transport Cost"
                    required="required"
                    onChange={this.onNewCostOfTransportAdd}
                    value={this.state.MCreateCostOfTransport}
                    maxLength={10}
                /><br></br>Do you need a permit or paperwork? 
                <input type="string"
                    name="newMobileName"
                    placeholder="Do You Need A Permit Or Paperwork"
                    required="required"
                    onChange={this.onNewPermitOrPaperWorkAdd}
                    value={this.state.MCreatePermitOrPaperWork}
                    maxLength={10}
                /><br></br> How many hours will you be Traveling? 
                <input type="number"
                    name="newMobileName"
                    placeholder="How Many Hours Will You Be Traveling"
                    required="required"
                    onChange={this.onNewLengthOfTravelAdd}
                    value={this.state.MCreateLengthOfTravel}
                    maxLength={10}
                /><br></br> Pack Weight? 
                <input type="number"
                    name="newMobileName"
                    placeholder="What Is Your Pack Weight"
                    required="required"
                    onChange={this.onNewPackWeightAdd}
                    value={this.state.MCreatePackWeight}
                    maxLength={10}
                /><br></br> Passport? 
                <input type="string"
                name="newMobileName"
                placeholder="Do You Need A Passport"
                required="required"
                onChange={this.onNewPassportReqAdd}
                value={this.state.MCreatePassportRequired}
                maxLength={10}
            /><br></br>
                <input type="submit"
                    onClick={ () => this.comboCreateAndRedirect() }
                />
            </form> 
        
            </div>
            <div className="stationaryBackground">
            <h1>Create New Stationary</h1>
            <form> Name Stationary: 
                <input type="string"
                    name="newStationName"
                    placeholder="Add a Station"
                    required="required"
                    onChange={this.onNewStationAdd}
                    value={this.state.createStationary}
                    maxLength={10}
                /><br></br> Will you need to eat on this leg?  
                <input type="boolean"
                    name="newStationName"
                    placeholder="Will You Be Eating"
                    required="required"
                    onChange={this.onNewSCreateEatAdd}
                    value={this.state.SCreateEat}
                    maxLength={10}
                /><br></br> How much will it cost? 
                <input type="number"
                    name="newStationName"
                    placeholder="Cost Of Food"
                    required="required"
                    onChange={this.onNewSCreateEatCostAdd}
                    value={this.state.SCreateCost}
                    maxLength={10}
                /><br></br>Do you need a permit or reservations? 
                <input type="boolean"
                    name="newStationName"
                    placeholder="Does This Trip Require permit or reservations"
                    required="required"
                    onChange={this.onNewSCreatePermitOrReservationAdd}
                    value={this.state.SCreatePermitOrReservation}
                    maxLength={10}
                /><br></br>What is your method of staying? 
                <input type="string"
                    name="newStationName"
                    placeholder="What Level Of Difficulty Is The Trip"
                    required="required"
                    onChange={this.onNewSCreateMethodOfStayAdd}
                    value={this.state.SCreateMethodOfStay}
                    maxLength={10}
                /><br></br>Length of stay: 
                <input type="string"
                    name="newStationName"
                    placeholder="What Is Your Length Of Stay"
                    required="required"
                    onChange={this.onNewSCreateLengthOfStayAdd}
                    value={this.state.SCreateLengthOfStay}
                    maxLength={10}
                /><br></br>Cost of method of staying? 
                <input type="number"
                    name="newStationName"
                    placeholder="How Much Does This Method Of Transport Cost"
                    required="required"
                    onChange={this.onNewSCreateCostOfStayAdd}
                    value={this.state.SCreateCostOfStay}
                    maxLength={10}
                /><br></br>What amenities? 
                <input type="string"
                    name="newStationName"
                    placeholder="Do You Have Amenities"
                    required="required"
                    onChange={this.onNewSCreateAmenitiesAdd}
                    value={this.state.SCreateAmenities}
                    maxLength={10}
                /><br></br> H20 access?
                <input type="boolean"
                    name="newStationName"
                    placeholder="H2O?"
                    required="required"
                    onChange={this.onNewSCreateWaterAccessAdd}
                    value={this.state.SCreateWaterAccess}
                    maxLength={10}
                /><br></br> Electrical access?
                <input type="boolean"
                    name="newStationName"
                    placeholder="Electric?"
                    required="required"
                    onChange={this.onNewSCreateElectricalAccessAdd}
                    value={this.state.SCreateElectricalAccess}
                    maxLength={10}
                /><br></br> Internet access?
                <input type="boolean"
                    name="newStationName"
                    placeholder="Internet?"
                    required="required"
                    onChange={this.onNewSCreateInternetAccessAdd}
                    value={this.state.SCreateInternetAccess}
                    maxLength={10}
                /><br></br> Room Service access?
                <input type="boolean"
                    name="newStationName"
                    placeholder="Room Service?"
                    required="required"
                    onChange={this.onNewSCreateRoomServiceAccessAdd}
                    value={this.state.SCreateRoomServiceAccess}
                    maxLength={10}
                />






            <br></br>
                <input type="submit"
                    onClick={ () => this.comboCreateAndRedirect() }
                />
            </form> 
        
            </div>





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