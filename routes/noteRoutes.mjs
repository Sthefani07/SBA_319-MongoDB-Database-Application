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
        const allnotes = await Note.find({})

        res.json(allnotes)

        
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});

// Updated --------------------------
router.put('/:id', async (req, res) => {
    try {
        let updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new:  true});


        res.json(updatedNote)
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});

//Delete ------------------------------
router.delete('/:id', async (req, res) => {
    try {
        let deletedNote = await Note.findByIdAndDelete(req.params.id);

        res.json(deletedNote)
    } catch (err) {
        console.error(err)
        res.status(500).json({ mgs: "Server error" })

    }
});


export default router;