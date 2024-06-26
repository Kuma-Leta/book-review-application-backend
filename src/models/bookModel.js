import mongoose from 'mongoose'

const  Mongoose = require('mongoose')
const reviewSchema=require('./reviewModel')
const Schema=Mongoose.Schema
const BookSchema=new Schema({
    author:{
        type:String,
        requred:true
    },
    title:{
        type:String,
        requred:true
    },
    review:[reviewSchema],
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
})
const bookModel= mongoose.model('book',BookSchema)
export default bookModel