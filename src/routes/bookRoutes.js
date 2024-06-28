const express=require('express')
const addBook=require('../controllers/bookController/addBook')
const getBooksAvailable = require("../controllers/bookController/getBooksAvailable");
const getBooksByAuthor=require('../controllers/bookController/getBooksByAuthor')
const getBookByISBN=require('../controllers/bookController/getBooksByISBN')
const getBookReview=require('../controllers/reviewController/getBookReview')
const getBooksByTitle = require("../controllers/bookController/getBooksByTitle");
const protect=require("../middleWare/authenticationMiddleware");
const addReview = require('../controllers/reviewController/addReview');
const modifyReview = require('../controllers/reviewController/modifyReview');
const deleteReview = require("../controllers/reviewController/deleteReview");
//import for registered user

const router=express.Router()
router.post('/addBook',protect,addBook)
//general users 
router.get('/getAllBooksAvailable',getBooksAvailable)
router.get('/getBooksByISBN',getBookByISBN)
router.get('/getBooksByAuthor',getBooksByAuthor)
router.get('/getBooksByTitle',getBooksByTitle)
router.get('/getBookReview',getBookReview)
//registered users
router.post('/addReview',protect,addReview)
router.patch('/modifyBookReview',protect,modifyReview)
router.delete("/deleteReview",protect, deleteReview);
module.exports= router
