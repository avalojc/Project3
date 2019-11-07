const express = require('express')

const mobileApi = require('../models/mobile.js')

const mobileRouter = express.Router()
//getAll
mobileRouter.get('/', (req, res) => {
  mobileApi.getAllMobile()
  .then((allMobile) => {
    res.json(allMobile)
  })
})//getOne
mobileRouter.get('/:id', (req, res) => {
  mobileApi.getOneMobile(req.params.id)
   .then((singleMobile) => {
     res.json(singleMobile)
   })
})//create
mobileRouter.post('/', (req, res) => {
  mobileApi.createMobile(req.body)
   .then((createdMobile) => {
     res.json(createdMobile)
   })
})//update
mobileRouter.put('/:id', (req, res) => {
  mobileApi.updateMobile(req.params.id, req.body)
   .then((updateMobile) => {
     res.json(updateMobile)
   })
})//delete
mobileRouter.delete('/:id', (req, res) => {
  mobileApi.deleteMobile(req.params.id)
   .then((deleteMobile) => {
     res.json(deleteMobile)
   })
})

module.exports = {
  mobileRouter
}
