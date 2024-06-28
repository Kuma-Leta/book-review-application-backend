const mongoose=require('mongoose')
const userRoutes=require('./src/routes/userRoutes')
const bookRoutes=require('./src/routes/bookRoutes')
const bodyParser=require('body-parser')
const express=require('express')
const {connect_db}=require('./connect_db')
const cors=require('cors')
require("dotenv").config();
const app = express();
connect_db()
app.use(bodyParser.json())
app.use(cors())
app.use('/api/users',userRoutes);
app.use('/api/books',bookRoutes)
app.use(express.json());
const port =5000
app.listen(port,()=>{
    console.log("the server is running on :",port)
});
