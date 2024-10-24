import mongoose from "mongoose";

// Note Schema
const noteSchema = new mongoose.Schema({
    
});


noteSchema.index({ email: 1 })


export default mongoose.model("User", noteSchema);