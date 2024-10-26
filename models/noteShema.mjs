import mongoose from "mongoose";

// Note Schema
const noteSchema = new mongoose.Schema({
    city: {type: String},
    notes: {type: String}
});


noteSchema.index({ city: -1 })


export default mongoose.model("Note", noteSchema);