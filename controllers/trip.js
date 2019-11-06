const express = require('express')

const tripApi = require('../models/trip.js')

const tripRouter = express.Router()
//getAll
tripRouter.get('/', (req, res) => {
  tripApi.getAllTrip()
  .then((allTrip) => {
    res.json(allTrip)
  })
})//getOne
tripRouter.get('/:id', (req, res) => {
  tripApi.getOneTrip(req.params.id)
   .then((singleTrip) => {
     res.json(singleTrip)
   })
})//create
tripRouter.post('/', (req, res) => {
  tripApi.createTrip(req.body)
   .then((createdTrip) => {
     res.json(createdTrip)
   })
})//update
tripRouter.put('/:id', (req, res) => {
  tripApi.updateTrip(req.params.id, req.body)
   .then((updateTrip) => {
     res.json(updateTrip)
   })
})//delete
tripRouter.delete('/:id', (req, res) => {
  tripApi.deleteTrip(req.params.id)
   .then((deleteTrip) => {
     res.json(deleteTrip)
   })
})

module.exports = {
  tripRouter
}
