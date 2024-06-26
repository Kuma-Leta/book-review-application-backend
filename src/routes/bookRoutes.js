const express=require('express')
const Router = require("router");
const router=express.Router()
router.get('/getBooksByISBN',getBookByISBN)
router.get('getBooksByAuthor',getBooksByAuthor)
router.get('/getBooksByTitle',getBooksByTitle)
router.get('/getBookReview',getBookReview)
