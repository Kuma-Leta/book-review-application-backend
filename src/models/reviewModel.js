const mongoose =require('mongoose')
const Schema=mongoose.Schema
const reviewSchema=new Schema({
    rating:{
        type:Number,
        
    },
    comment:String,
    user:mongoose.Schema.Types.ObjectId,
    bookISBN:String
})
const reviewModel= mongoose.model('review',reviewSchema)
module.exports={reviewSchema,reviewModel}