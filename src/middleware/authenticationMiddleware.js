const jwt=require('jsonwebtoken');
const userModel = require('../models/userModel');
const protect=async(req,res)=>{
    let token;
    try {
        
        if(req.header.authorization && req.headers.authorization.startsWith('Bearer')){
            //get token 
            token=req.headers.authorization.split(" ")[1]
            //verify token 
            const decodedId=jwt.verify(token,process.env.JWT_SECRET)
            req.user=await userModel.findById(decodedId).select('-password')
        }
    } catch (error) {
        res.status(401).json({status:"fail",message:"unauthorized"})
    }
}
module.exports=protect