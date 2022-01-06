const mongoose = require('mongoose')

let mongodb = 'mongodb://127.0.0.1:27017/locationDatabase'

mongoose.
  connect(mongodb)
  .then(()=>{
    console.log('Connected')
  })
  .catch((error)=>{
    console.error('Connection error', error.message)
  })

  const db= mongoose.connection

  module.exports= db