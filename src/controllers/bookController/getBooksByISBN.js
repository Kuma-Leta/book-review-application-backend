const bookModel = require("../../models/bookModel");

const getBookByISBN = async (req, res) => {
    try {
        const {ISBN}=req.body
        const booksByISBN=await bookModel.find({ISBN})
        if(booksByISBN.length===0){
 return res.status(404).json({
   status: "fail",
   message: "no books available by this ISBN",
 }); 
        }
         res.status(200).json({
           status: "success",
           booksByISBN,
         }); 
    } catch (error) {
        return res.status(500).json({
          status: "fail",
          message: "internal server Error",
          error: error.message,
        });
    }
};
module.exports = getBookByISBN;
