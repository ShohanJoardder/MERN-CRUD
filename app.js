const express=require('express');
const app= new express();
const router=require('./src/route/api');
const bodyParser=require('body-parser');
const path = require("path");
require("dotenv").config()

//Security Middleware
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss-clean');
const hpp=require('hpp');
const cors=require('cors');

//Database
const mongoose=require('mongoose');
app.use(express.static('client/build'))


//Security Middleware Implement
app.use(cors());
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Body parser
app.use(bodyParser.json())

//Rate Limiter
const limiter=rateLimit({windowMs:15*60*100,max:3000})
app.use(limiter)


// MongoDB Database Connection
mongoose.set('strictQuery', false);
//const OPTION = {user: "", Pass: "", autoIndex: true}
mongoose.connect(process.env.DATABASE, (error)=>{
    console.log("connection Success")
    console.log(error)
})


// Managing Front End Routing
// app.use(express.static('client/build'))
// app.get("*", (req,res)=>{
//     req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })


// Managing BackEnd API Routing
app.use("/api/v1", router)


module.exports=app;
