import mongoose from 'mongoose';

export const pathSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true,
    }
})


export const Path = mongoose.model('Path', pathSchema);