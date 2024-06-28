const reviewModel = require("../../models/reviewModel");

const getBookReview = async (req, res) => {
    try {
        const {bookId}=req.body
        const bookReview=await reviewModel.find({bookId})
        if(!bookReview){
          res.status(404).json({
            status: "fail",
            message: "no reviews yet",
            
          });     
        }
        res.status(200).json({status:"success",bookReview:bookReview})
    } catch (error) {
         return res.status(500).json({
           status: "fail",
           message: "internal server Error",
           error: error.message,
         });  
    }
};
module.exports = getBookReview;