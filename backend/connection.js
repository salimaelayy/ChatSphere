require('dotenv').config()
const mongoose = require('mongoose')

mongoose
  .connect(process.env.URI,
    {
    socketTimeoutMS: 30000,
  })
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((err) => {
    console.log('Not connected to the database ' + err)
  })
 
  