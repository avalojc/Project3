const express = require('express')

const stationaryApi = require('../models/stationary.js')

const stationaryRouter = express.Router()
//*************************This is a weird thing that i need to ask about************************************/
stationaryRouter.get('/new', (req, res) => {
  res.render('/createStationaryForm') //*************What is this create stationary Form**********/
}) //this form in react with this id

//*****************************This is where you pass the parent into the child*******************************************/
stationaryRouter.get('/byTripId/:tripId', (req, res) => {
  stationaryApi.getAllStationaryByTripId(req.params.tripId) //*************What is this create stationary Form**********/
    .then((stationeries) => {
      res.json(stationeries)
    })
})

//getAll
stationaryRouter.get('/', (req, res) => {
  stationaryApi.getAllStationary()
  .then((allStationary) => {
    res.json(allStationary)
  })
})//getOne
stationaryRouter.get('/:id', (req, res) => {
  stationaryApi.getOneStationary(req.params.id)
   .then((singleStationary) => {
     res.json(singleStationary)
   })
})//create
stationaryRouter.post('/', (req, res) => {
  stationaryApi.createStationary(req.body)
   .then((createdStationary) => {
     res.json(createdStationary)
   })
})//update
stationaryRouter.put('/:id', (req, res) => {
  stationaryApi.updateStationary(req.params.id, req.body)
   .then((updateStationary) => {
     res.json(updateStationary)
   })
})//delete
stationaryRouter.delete('/:id', (req, res) => {
  stationaryApi.deleteStationary(req.params.id)
   .then((deleteStationary) => {
     res.json(deleteStationary)
   })
})

module.exports = {
  stationaryRouter
}
