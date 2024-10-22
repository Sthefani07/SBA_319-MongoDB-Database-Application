import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import destinationRoutes from './routes/destinationRoutes.mjs'

// Setup----------------------------------
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;


//DB connection-----------------------------------
connectDB();


//Middleware--------------------------------
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));



//Routes-----------------------------------
app.use('/destination', destinationRoutes);





app.listen(PORT, () =>{
    console.log(`Server is runnig on PORT: ${PORT}`)
});