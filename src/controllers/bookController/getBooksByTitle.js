const bookModel = require("../../models/bookModel");
const getBooksByTitle = async (req, res) => {
    try {
        const { title } = req.body;
        const booksByTitle = await bookModel.find({ title });
        if (booksByTitle.length === 0) {
          return res.status(404).json({
            status: "fail",
            message: "no books available by this title",
          });
        }
        res.status(200).json({
          status: "success",
          booksByTitle,
        }); 
    } catch (error) {
         return res.status(500).json({
           status: "fail",
           message: "internal server Error",
           error: error.message,
         });
    }
};
module.exports = getBooksByTitle;
