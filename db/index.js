const mongoose = require('mongoose');
const { MongoClient } = require('mongodb')
const ATLAS_URI = 'mongodb+srv://Terra0n3:Jamminonthe%29n%23@sandbox.ti29f.mongodb.net/Review_Lab?retryWrites=true&w=majority'


mongoose
   .connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Successfully connected to MongoDB.')
   })
   .catch((error) => {
      console.error('Connection error', error.message)
   })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db