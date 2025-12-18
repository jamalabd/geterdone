import express from 'express';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from '../../models/user.js';

const router = express.Router();

router.post('/login', async (req, res)=> {
    const  { email, password } = req.body;
    if (!email || !password ) return res.status(400).json({ error: 'Email and password are required'});
    if( !validator.isEmail(email)) return res.status(400).json({ error: 'Invalid email address'});
    const emailToLowerCase = email.toLowerCase();
    try {
        const user = await User.findOne({email: emailToLowerCase});
        if(!user) return res.status(401).json({error: 'User not found'});
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash); 
        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid password'});
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { email, name, _id, goals, paths, notifications } = user;

        return res.status(200).json({ message: 'Login Successful', token, user: { email, name, _id, goals, paths, notifications } });
        
    } catch (error) {
        res.status(500).json({error: 'Error logging in'});
    }
});
export default router;
