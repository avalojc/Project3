const express = require('express')

const stationaryApi = require('../models/stationary.js')

const stationaryRouter = express.Router()
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
