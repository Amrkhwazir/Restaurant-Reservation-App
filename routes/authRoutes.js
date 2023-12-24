import mongoose from "mongoose";
import express from "express";
import { register, signIn } from "../controllers/authControls.js";

const authRouter = express.Router();

authRouter.get("/signin", signIn);
authRouter.get("/register", register);

export default authRouter