const {mongoose,Schema} =require('mongoose')
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model('user',userSchema)
export default userModel