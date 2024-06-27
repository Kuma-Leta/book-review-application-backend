const bookModel=require('../../models/bookModel')
const getBooksAvailable=async(req,res)=>{
try {
    const booksAvailable=await bookModel.find()
    if(!booksAvailable){
        return res.status(404).json({status:"fail",message:"no books available"})
    }
    res.status(200).json({ status: "success", booksAvailable });
} catch (error) {
         return res
           .status(404)
           .json({ status: "fail", message: "no books available" ,error:error.message});
   
}
}
module.exports = getBooksAvailable