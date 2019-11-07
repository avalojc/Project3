const mongoose = require('./connection.js')
const MobileModelSchema = new mongoose.Schema({
  name: String,
  tripId: String,
  methodOfTransport: String,
  costOfTransport: Number,
  permitOrPaperwork: Boolean,
  lengthOfTravel: Number,
  eating: {eat: Boolean, cost: Number},
  packWeight: Number,
  // equipmentRequirable: {requireThis: Boolean, typeOfReq: String},
  technicalSkill: {isTechnical: Boolean, levelOfDifficulty: String},
  passportRequired: Boolean,
})
const MobileCollection = mongoose.model('Mobile', MobileModelSchema)
//getAll
const getAllMobile = () => {
  return MobileCollection.find({})
}//getOne
const getOneMobile = (id) => {
  return MobileCollection.findById(id)
}//create
const createMobile = (mobileData) => {
  return MobileCollection.create(mobileData)
}//update
const updateMobile = (id, mobileData) => {
  return MobileCollection.updateOne({_id: id}, mobileData)
}//delete 
const deleteMobile = (id) => {
  return MobileCollection.deleteOne({_id: id})
}
module.exports = {
  getAllMobile,
  getOneMobile,
  createMobile,
  updateMobile,
  deleteMobile
}
