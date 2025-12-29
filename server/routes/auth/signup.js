import express from 'express';
import {User} from '../../models/user.js';
import validator from 'validator';

const router = express.Router();

router.post('/signup', async (req, res)=>{
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' }); 
    if (password.length < 8) return res.status(400).json({ error: 'Password must be atleast 8 characters long' });
    if( !validator.isEmail(email)) return res.status(400).json({error: 'Invalid email address'}); 
    const emailToLowerCase = email.toLowerCase();
    if( await User.findOne({email: emailToLowerCase })) return res.status(400).json({error: 'Email already in use'});

        try {
            const user = await User.create({ email: emailToLowerCase, password });
            return res.status(201).json({ message: 'User created successfully', status: 'success'});
        } catch (error) {
            return res.status(500).json({error: 'Error creating user', status: 'error'});
        };
});

export default router;