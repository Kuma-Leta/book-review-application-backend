const userModel =require('../../models/userModel')
const addUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const userAlreadyExists=await userModel.findOne({email})
        if(userAlreadyExists){
            return  res.status(400).json({status:"fail",message:"user already exists"})

        }
        const user = await userModel.create({email,password})
        if(!user){
            return res.status(400).json({status:"fail",message:"user not found"})
        }
        res.status(200).json({
            status:"success",
            result:user
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
            message:"internal server error"
        })
    }
}
module.exports= addUser