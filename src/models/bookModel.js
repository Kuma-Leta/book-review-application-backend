

const  Mongoose = require('mongoose')
const reviewSchema=require('./reviewModel')
const Schema=Mongoose.Schema
const BookSchema = new Schema({
  ISBN: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    requred: true,
  },
  title: {
    type: String,
    requred: true,
  },
  reviews: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  bookOwnerId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});
const bookModel= Mongoose.model('book',BookSchema)
module.exports=bookModel