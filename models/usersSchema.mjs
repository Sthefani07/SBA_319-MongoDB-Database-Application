import mongoose from "mongoose";

// Destination Schema
const userScehma = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
});


userScehma.index({ email: 1 })


export default mongoose.model("User", userScehma);