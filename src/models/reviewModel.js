const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book", // Assuming you have a User model
      required: true,
    },
    reviewGiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"user"
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = reviewModel;
