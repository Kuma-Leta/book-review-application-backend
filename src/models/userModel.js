const mongoose =require('mongoose')
const Schema=mongoose.Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  username:{
    type:String,
required:true,
unique:true
  },
  password: {
    type: String,
    required: true,
  },
});
const userModel=mongoose.model('user',userSchema)
module.exports = userModel;