import express, { json } from "express";
import mongoose from "mongoose";
import Hotel from "../models/Hotel.js";


// create new hotel
export const addHotel = async (req,res) => {

    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).send(err);
    }
};

// update new hotel
export const updateHotel = async (req,res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
        {$set: req.body},
        {new: true})
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).send(err);
    }
}
