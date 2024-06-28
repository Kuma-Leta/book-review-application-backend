const express=require('express')
const router=express.Router()
const addUser=require('../controllers/userController/addUser')
const loginUser=require('../controllers/userController/loginUser')
//general users
router.post('/addUser' ,addUser)
router.post('/loginUser',loginUser)
module.exports=router