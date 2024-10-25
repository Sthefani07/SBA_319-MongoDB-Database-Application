import express from 'express';
import User from '../models/userSchema.mjs';


const router = express.Router();

//Create -------------------------------------------------
router.post('/', async (req, res, next) =>{
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ msg: "Missing required field: Name, email, or password" });
        } 

        // Check if the username already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ msg: 'Email Already Taken' });
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

    
        let newUser = new User(req.body);
        await newUser.save();

        res.json(newUser);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})




// Read --------------------------------------------------
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({});

        res.json(allUsers)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
})

// Update -----------------------------------------------
router.put('/', async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
})

//Delete ---------------------------------------------
router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
})

export default router;