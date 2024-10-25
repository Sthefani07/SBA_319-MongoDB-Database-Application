import mongoose from "mongoose";

// Users Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
});


userSchema.index({name: 1})


export default mongoose.model("User", userSchema);