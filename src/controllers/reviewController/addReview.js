const bookModel = require("../../models/bookModel");
const reviewModel = require("../../models/reviewModel");

const addReview = async (req, res) => {
  try {
    const { rating, comment, bookId } = req.body;
    const bookByBookId = await bookModel.findById(bookId);

    if (!bookByBookId) {
      return res.status(404).json({
        status: "fail",
        message: "No book found",
      });
    }

    if (bookByBookId.bookOwnerId.toString() === req.user._id.toString()) {
      return res.status(403).json({
        status: "fail",
        message: "You can't review your own book",
      });
    }

    const bookReview = await reviewModel.create({
      rating,
      comment,
      bookId,
      reviewGiver: req.user._id,
    });

    if (!bookReview) {
      return res.status(400).json({
        status: "fail",
        message: "Failed to create review",
      });
    }

    bookByBookId.reviews.push(bookReview._id);
    await bookByBookId.save();
    const book = await bookModel.findById(bookId).populate("reviews");

    res.status(200).json({
      status: "success",
      bookReview,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = addReview;
