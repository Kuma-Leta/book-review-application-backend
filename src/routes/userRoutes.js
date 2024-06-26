const express=require('express')
const router=express.Router()
const addUser=require('../controllers/userController/addUser')
//general users
router.post('/addUser' ,addUser)
// router.post('/loginUser',loginUser)
module.exports=router