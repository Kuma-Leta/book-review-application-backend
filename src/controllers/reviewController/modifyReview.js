const bookModel = require("../../models/bookModel");
const reviewModel = require("../../models/reviewModel");
const modifyReview = async (req, res) => {
  try {
    const { reviewId,comment,rating,bookId } = req.body;
    const reviewsById = await reviewModel.findOne({_id:reviewId,reviewGiver:req.user._id});
    if (!reviewsById) {
      return res.status(404).json({
        status: "fail",
        message: "no reviews found ",
      });
    }
   
    const reviewOwner = reviewsById.bookId;
    const bookOwner= await bookModel.findOne({reviewOwner})
    if (bookOwner.bookOwnerId === req.user._id) {
      return res.status(404).json({
        status: "fail",
        message: "you can't edit review given for you ",
      });
    }
    const modifyReview = await reviewModel.findByIdAndUpdate(reviewId,{
      rating:rating,
      comment:comment,
      bookId:bookId,
      reviewGiver: req.user._id,
    },{new:true});
    if (modifyReview.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "failed to modify review ",
      });
    }
    res.status(200).json({
      status: "success",
      modifyReview,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "internal server Error",
      error: error.message,
    });
  }
};
module.exports = modifyReview;
