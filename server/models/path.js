import mongoose from 'mongoose';

const pathSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    goals: [goalSchema]
})


export const Path = mongoose.model('Path', pathSchema);