import mongoose from "mongoose";

// Destination Schema
const destinationShema = new mongoose.Schema({
    name: {type: String,required: true},
    country: { type: String, required: true },
    destination: { type: String, required: true },
});

destinationShema.index({name: 1})


export default mongoose.model("Destination", destinationShema);