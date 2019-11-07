const mongoose = require('./connection.js')
const TripModelSchema = new mongoose.Schema({
  name: String,
  legId: String,
})
const TripCollection = mongoose.model('Trip', TripModelSchema)
//getAll
const getAllTrip = () => {
  return TripCollection.find({})
}//getOne
const getOneTrip = (id) => {
  return TripCollection.findById(id)
}//create
const createTrip = (tripData) => {
  return TripCollection.create(tripData)
}//update
const updateTrip = (id, tripData) => {
  return TripCollection.updateOne({_id: id}, tripData)
}//delete 
const deleteTrip = (id) => {
  return TripCollection.deleteOne({_id: id})
}
module.exports = {
  getAllTrip,
  getOneTrip,
  createTrip,
  updateTrip,
  deleteTrip
}
