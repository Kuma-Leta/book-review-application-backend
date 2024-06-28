const reviewModel = require("../../models/reviewModel");
const bookModel = require("../../models/bookModel");

const deleteReview=async(req,res)=>{
try {
   const {reviewId}=req.body
   const reviewexists=await reviewModel.findById(reviewId) 
   if(!reviewexists){
     return res.status(404).json({
       status: "fail",
       message: "no reviews with this Id",
     });
   }
     if (reviewexists.reviewGiver.toString() !== req.user._id.toString()) {
       return res.status(403).json({
         status: "fail",
         message: "You can only delete your own reviews",
       });
     }
   console.log(reviewexists)
       ;
       const bookOwner = await bookModel.findOne({
         bookOwnerId: reviewexists.bookId,
       });
      
       if (bookOwner && bookOwner.bookOwnerId.toString() === req.user._id.toString()) {
         return res.status(404).json({
           status: "fail",
           message: "you can't delete review given for you ",
         });
       }
   const deletedReview=await reviewModel.findByIdAndDelete(reviewId) 
   res.status(200).json({status:"success",message:"successfully deleted"})
} catch (error) {
            return res
              .status(500)
              .json({
                status: "Error",
                message: "server Error",
                error: error.message,
              });

}
}
module.exports=deleteReview