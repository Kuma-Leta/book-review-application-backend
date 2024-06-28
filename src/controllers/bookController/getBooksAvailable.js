const bookModel=require('../../models/bookModel')
const getBooksAvailable=async(req,res)=>{
try {
    const booksAvailable=await bookModel.find().populate('reviews')
    if(!booksAvailable){
        return res.status(404).json({status:"fail",message:"no books available"})
    }
    
    res.status(200).json({ status: "success", booksAvailable });
} catch (error) {
       return res
  .status(500)
  .json({
    status: "fail",
    message: "internal server Error",
    error: error.message,
  }); 
   
}
}
module.exports = getBooksAvailable