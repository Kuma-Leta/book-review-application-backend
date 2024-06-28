const jwt=require('jsonwebtoken');
const userModel = require('../models/userModel');
const protect=async(req,res,next)=>{
    let token;
    try {
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            //get token 
            token=req.headers.authorization.split(" ")[1]
            //verify token 
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=await userModel.findById(decoded.id).select('-password')
            next()
        }else{
            return res
              .status(401)
              .json({
                status: "fail",
                message: "Unauthorized, no token provided",
              });
        }
    } catch (error) {
        res.status(401).json({status:"fail",message:"unauthorized",error:error.message})
    }
}
module.exports=protect