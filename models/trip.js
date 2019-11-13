const mongoose = require('./connection.js')
const TripModelSchema = new mongoose.Schema({
  name: String,
  description: String,
  tripType: String
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
const updateTrip = (Qid, tripData) => {
  return TripCollection.updateOne({_id: Qid}, tripData)
}//delete 
const deleteTrip = (Qid) => {
  return TripCollection.deleteOne({_id: Qid})
}
module.exports = {
  getAllTrip,
  getOneTrip,
  createTrip,
  updateTrip,
  deleteTrip
}
