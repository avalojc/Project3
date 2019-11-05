const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/hike-bike-paddle-n-ski";

mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });

module.exports = mongoose
