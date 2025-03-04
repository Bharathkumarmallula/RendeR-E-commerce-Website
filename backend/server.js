import express from 'express';
import cors from "cors";
import "dotenv/config";
import { connect } from 'mongoose';
import connectDB from './config/monogdb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();


//middlewares

app.use(express.json())
app.use(cors()) //access backend from any IP

//api end points
app.use('/api/user',userRouter);




app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port, ()=>console.log("Server started at 4000"))