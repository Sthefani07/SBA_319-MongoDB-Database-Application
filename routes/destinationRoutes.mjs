import express from 'express';
import Destination from '../models/destinationSchema.mjs'
const router = express.Router();

// router.get('/',(req, res)=>{
//     res.send('Testing....')
// })


//Create ------------------------------------------------  http://localhost:3000/destination
router.post('/', async (req,res)=>{
    try {
        let newDestination = new Destination(req.body);
        await newDestination.save();

        res.json(newDestination);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
});
//Read ----------------------------------------------------
    router.get('/', async (req, res) => {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json({ msg: "Server Error" })
        }
    });


//Update -------------------------------------------------------
    router.put('/', async (req, res) => {
        try {

        } catch (error) {
            console.error(err)
            res.status(500).json({ msg: "Server Error" })
        }
    });


//Delete ------------------------------------------------------
    router.delete('/', async (req, res) => {
        try {

        } catch (err) {
            console.error(err)
            res.status(500).json({ msg: "Server Error" })
        }
    });

export default router;