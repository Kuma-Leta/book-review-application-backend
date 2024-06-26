const mongoose=require('mongoose')
const express=require('express')
const {connect_db}=require('./connect_db')
const cors=require('cors')
require("dotenv").config();
const app = express();
connect_db()
app.use(cors())
// app.use('/api',routes);
app.use(express.json());
const port =5000
app.listen(port,()=>{
    console.log("the server is running on :",port)
});
