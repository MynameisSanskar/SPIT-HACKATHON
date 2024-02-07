const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const axios =require("axios")
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)
let secret =user.password;
    // create a token
    const token = createToken(user._id)
 
    res.status(200).json({userType: user.userType,email, token, secret})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {userType,email, password,username} = req.body
let secret=password
  try {
    const user = await User.signup(userType,email, password,username)
    // const secret=user.password;
    // let pass =user.password;
    console.log(secret)
      const r = await axios.post(
        "https://api.chatengine.io/users/",
        { username, secret, email, first_name:username, last_name:"" },
        { headers: { "Private-Key": "d8757ea5-7b8f-4abb-939f-f4faf210b000"} }
      );
       // create a token
    const token = createToken(user._id)


     res.status(200).json({userType,email, token,secret})
      // return res.status(r.status).json(r.data);

   

    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateProfile = async(req,res)=>{
 const id= req.user._id
  const user= await User.findOneAndUpdate({_id:id},{...req.body})
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)

}
const getProfile=async(req,res)=>{
  const id= req.user._id;
  const user=await User.findOne({_id:id})
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)
}


module.exports = { signupUser, loginUser,updateProfile ,getProfile}