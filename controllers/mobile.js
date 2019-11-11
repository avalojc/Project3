const express = require('express')

const mobileApi = require('../models/mobile.js')

const mobileRouter = express.Router()
//*************************This is a weird thing that i need to ask about************************************/
mobileRouter.get('/new', (req, res) => {
  res.render('/createMobileForm') //*************What is this create mobile Form**********/
}) //this form in react with this id

//*****************************This is where you pass the parent into the child*******************************************/
mobileRouter.get('/byTripId/:tripId', (req, res) => {
  mobileApi.getAllMobileByTripId(req.params.tripId) //*************What is this create mobile Form**********/
    .then((mobiles) => {
      res.json(mobiles)
    })
})

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
