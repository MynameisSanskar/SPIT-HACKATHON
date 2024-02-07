const express=require('express')
const {updateProfile, getProfile}=require('../controllers/userController')
const requireAuth=require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)

router.get('/', getProfile)

router.patch('/update', updateProfile)


module.exports= router