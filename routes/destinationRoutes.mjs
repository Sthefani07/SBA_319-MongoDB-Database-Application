import express from 'express';
import Destination from '../models/destinationSchema.mjs'
const router = express.Router();




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
            const allDestinations = await Destination.find({})

            res.json(allDestinations);
        } catch (err) {
            console.error(err)
            res.status(500).json({ msg: "Server Error" })
        }
    });


//Update -------------------------------------------------------
    router.put('/:id', async (req, res) => {
        try {
            let UpdatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, {new: true});

            res.json(UpdatedDestination);
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