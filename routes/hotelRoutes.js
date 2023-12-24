import mongoose from "mongoose";
import express from "express";
import { addHotel, updateHotel } from "../controllers/hotelControls.js";

const hotelRouter = express.Router();

hotelRouter.post("/",  addHotel);
hotelRouter.put("/:id",  updateHotel);

export default hotelRouter