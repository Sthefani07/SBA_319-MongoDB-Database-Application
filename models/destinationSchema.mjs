import mongoose from "mongoose";

// Destination Schema
const destinationSchema = new mongoose.Schema({
    city: {type: String},
    country: { type: String},
    description: { type: String }
    
});


destinationSchema.index({name: 1})


export default mongoose.model('Destination', destinationSchema); 