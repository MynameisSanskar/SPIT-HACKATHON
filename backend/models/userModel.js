const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username:{
    type:String,
    required:false
  },
  userType:{
    type: String,
    required:true
  },
  img:{
    type: String,
    default:"https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
  },
  mobile: {
    type:String ,
    unique: true
  },
  gender: {
    type: String
  },

  password: {
    type: String,
    required: true
  }
})

// static signup method
userSchema.statics.signup = async function(userType,email, password,username) {

  // validation
  if (!email || !password||!userType) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email })

  if (exists && exists.userType==userType) {
    throw Error('Already have an account')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ userType, email, password: hash ,username})

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)