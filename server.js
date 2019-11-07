const express = require('express')
const app = express()

const { tripRouter } = require('./controllers/trip.js')
const { mobileRouter } = require('./controllers/mobile.js')
const { stationaryRouter } = require('./controllers/stationary.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())


app.use(express.static(`${__dirname}/client/build`))

app.use('/api/trip', tripRouter)
app.use('/api/mobile', mobileRouter)
app.use('/api/stationary', stationaryRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
