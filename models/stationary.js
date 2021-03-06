const mongoose = require('./connection.js')
const StationaryModelSchema = new mongoose.Schema({
  name: String,
  tripId: mongoose.ObjectId, //*********************************Aqui************************ */
  methodOfStay: String,
  costOfStay: Number,
  permitOrReservation: Boolean,
  lengthOfStay: Number,
  eating: {eat: Boolean, cost: Number},
  amenities: String,
  access: { waterAccess: Boolean, electricalAccess: Boolean, internetAccess: Boolean, roomService: Boolean},
  
})
const StationaryCollection = mongoose.model('Stationary', StationaryModelSchema)
//getAll
const getAllStationary = () => {
  return StationaryCollection.find({})
}//getOne
const getOneStationary = (id) => {
  return StationaryCollection.findById(id)
}//create
const createStationary = (stationaryData) => {
  return StationaryCollection.create(stationaryData)
}//update
const updateStationary = (id, stationaryData) => {
  return StationaryCollection.updateOne({_id: id}, stationaryData)
}//delete 
const deleteStationary = (id) => {
  return StationaryCollection.deleteOne({_id: id})
}
//**********************************Get All by Id***********************************/
const getAllStationaryByTripId = (tripId) => {
  return StationaryCollection.find({tripId: tripId})
}





module.exports = {
  getAllStationary,
  getOneStationary,
  createStationary,
  updateStationary,
  deleteStationary,
  getAllStationaryByTripId //***************************Aqui********************* */
}
