const bookModel = require("../../models/bookModel");

const getBooksByAuthor = async (req, res) => {
  try {
    const {author}=req.body
    const booksByAuthor=await bookModel.find({author})
if(booksByAuthor.length===0){
   return res.status(404).json({
     status: "fail",
     message: "no books available by this author",
     
   });  
}
 res.status(200).json({
   status: "success",
   booksByAuthor
 });  
  } catch (error) {
return res
  .status(500)
  .json({
    status: "fail",
    message: "internal server Error",
    error: error.message,
  });  }
};
module.exports = getBooksByAuthor;
