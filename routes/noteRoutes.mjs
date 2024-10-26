import  express from 'express';
import Note from '../models/noteShema.mjs';

const router = express.Router();

//Create -----------------------------
router.post('/', async(req, res) => {
    try {
        let newNote = new Note(req.body);
        await newNote.save();

        res.json(newNote)
    } catch (err) {
        console.error(err)
            res.status(500).json({mgs: "Server error"})
        
    }
});

//Read ------------------------------
router.get('/', async (req, res) => {
    try {


        res.json(newNote)
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});

// Updated --------------------------
router.put('/', async (req, res) => {
    try {


        res.json(newNote)
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});

//Delete ------------------------------
router.delete('/', async (req, res) => {
    try {


        res.json(newNote)
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});


export default router;