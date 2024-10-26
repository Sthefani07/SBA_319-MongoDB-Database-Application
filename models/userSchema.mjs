import mongoose from "mongoose";

// Users Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
});


userSchema.index({ firstName: -1})


export default mongoose.model('User', userSchema);