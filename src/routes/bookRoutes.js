const express=require('express')
const addBook=require('../controllers/bookController/addBook')
const getBooksAvailable = require("../controllers/bookController/getBooksAvailable");
const getBooksByAuthor=require('../controllers/bookController/getBooksByAuthor')
const getBookByISBN=require('../controllers/bookController/getBooksByISBN')
const getBookReview=require('../controllers/bookController/getBooksByReview')
const getBooksByTitle = require("../controllers/bookController/getBooksByTitle");
const protect=require("../middleWare/authenticationMiddleware")
//import for registered user

const router=express.Router()
router.post('/addBook',protect,addBook)
//general users 
router.get('/getAllBooksAvailable',getBooksAvailable)
router.get('/getBooksByISBN',getBookByISBN)
router.get('getBooksByAuthor',getBooksByAuthor)
router.get('/getBooksByTitle',getBooksByTitle)
router.get('/getBookReview',getBookReview)
//registered users
// router.patch('/modifyBookReview',modifyBookReview)
// router.delete('/deleteBookReviewAdded',deleteBookReviewAdded)
module.exports= router
