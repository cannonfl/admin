'use strict'
const mongoose = require('mongoose')
const {Schema} = mongoose;

const userSchema = new Schema({
  provider: String,
  id: String,
  lastName: String,
  firstName: String,
  gender: String,
  email: String
})
mongoose.model('users', userSchema);
