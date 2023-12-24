import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";

const app = express();
dotenv.config();
const port = 8800;

// mongo db connect
const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        throw err 
    })
}

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/hotels", hotelRouter);

app.listen(port,()=>{
    console.log("server running on " + port)
    connect();
})