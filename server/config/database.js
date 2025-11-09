import mongoose from 'mongoose';
import User from '../models/User.js';
import { config } from './config.js';

export const connectDb = async () => { 
    try {
        await mongoose.connect(config.mongoDB.uri);
        console.log('Connecteed to MongoDB')
        // create first user in the database
        if(!User.findOne({email: "jamalabdul47@gmail.com"})){
            User.create({
               email: "jamalabdul47@gmail.com",
               password: '1234'
           });
           console.log(             "first user created");
       } else {
           const firstUser = await User.findOne({email: "jamalabdul47@gmail.com"});
           console.log(firstUser);
       }
    } catch (error) {
        console.log(error);
    }
}