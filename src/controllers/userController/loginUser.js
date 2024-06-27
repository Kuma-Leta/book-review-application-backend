const userModel=require('../../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const generateToken=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}
const loginUser=async (req,res)=>{
    const {email,password}=req.body
try {
    const user=await userModel.findOne({email})
    if(!user){
                return res
                  .status(400)
                  .json({ status: "fail", message: "user not Found" });

    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({status: "fail", message: "incorrect password"})
    }
    res.status(200).json({
        email:user.email,
        id:user._id,
        password:user.password,
        token:generateToken(user._id)
    })
} catch (error) {
    res.status(500).json({status:"fail",message:"error",error:error.message})
}
}
module.exports=loginUser