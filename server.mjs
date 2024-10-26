import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import destinationRoutes from './routes/destinationRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs'
import noteRoutes from './routes/noteRoutes.mjs'
//import bcrypt from 'bcrypt';


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
app.use('/user', userRoutes);
app.use('/note', noteRoutes);



// app.get('/seed', async (req, res) => {

//   await User.deleteMany({})

//   // Create items in database
//     await User.create(User)

//   res.send('Sending database')
// });



app.listen(PORT, () =>{
    console.log(`Server is runnig on PORT: ${PORT}`)
});