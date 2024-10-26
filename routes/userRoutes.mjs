import express from 'express';
import User from '../models/userSchema.mjs';
import { UserData } from '../data/userData.mjs';

import bcrypt from 'bcrypt'



const router = express.Router();

// another Simple way to use my data from file UserData.mjs
router.get('/', (req, res) => {
    res.json(UserData); 
});
 
//Create -------------------------------------------------
router.post('/', async (req, res, next) =>{
    try {
        let newUser = new User({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save();
        res.json(newUser);

        if (!req.body.firstName || !req.body.email || !req.body.password) {
            return res.status(400).json({ msg: "Missing required field: Name, email, or password" });
        } 


        //Check if the username already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ msg: 'Email Already Taken' });
        }

    //     hash the password is nor working. 
    //     const salt = await bcrypt.genSalt(10);
    //    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    
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
router.put('/:id', async (req, res) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true });

        res.json(updatedUser)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
})

//Delete ---------------------------------------------
router.delete('/:id', async (req, res) => {
    try {
        let deletedUser = await User.findByIdAndDelete(req.params.id);

        res.json(deletedUser)
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server Error" })
    }
})

export default router;