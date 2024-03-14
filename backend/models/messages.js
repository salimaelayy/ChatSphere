const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  room: { type: String, required: true },
  time: { type: String},
})

module.exports = mongoose.model('Message', MessageSchema)
