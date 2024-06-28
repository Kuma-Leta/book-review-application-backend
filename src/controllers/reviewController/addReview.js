const bookModel = require('../../models/bookModel');
const reviewModel=require('../../models/reviewModel')
const addReview=async (req,res)=>{
try {
    const {rating,comment,bookId}=req.body
    const bookByBookId=await bookModel.findById(bookId)
if(bookByBookId){
  return res.status(404).json({
    status: "fail",
    message: "no book found ",
  
    
  });  
  
}
console.log(bookByBookId)
const bookOwner = bookByBookId.bookOwnerId;
if (bookOwner === req.user._id) {
  return res.status(404).json({
    status: "fail",
    message: "you can't review your self ",
  });
}
const bookReview= await reviewModel.create({
  rating,
  comment,
  bookId,
  reviewGiver:req.user._id
})
if(!bookReview){
  return res.status(400).json({
    status: "fail",
    message: "failed to create review ",
  });
}
    res.status(200).json({
      status:"success",
      bookReview
    })
} catch (error) {
 return res.status(500).json({
   status: "fail",
   message: "internal server Error",
   error: error.message,
 });   
}
}
module.exports=addReview