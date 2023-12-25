import mongoose from "mongoose";
import express from "express";
import { addHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelControls.js";
import { verifyAdmin } from "../utilis/verifyToken.js";

const hotelRouter = express.Router();


// add hotels
hotelRouter.post("/", verifyAdmin,  addHotel);
// update hotels
hotelRouter.put("/:id", verifyAdmin,  updateHotel);
// delete hotels
hotelRouter.delete("/:id", verifyAdmin,  deleteHotel);
// get hotels
hotelRouter.get("/:id",  getHotel);
// get all hotels
hotelRouter.get("/",  getAllHotel);

export default hotelRouter