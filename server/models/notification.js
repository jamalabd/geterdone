import mongoose from 'mongoose';

export const notificationSchema = new mongoose.Schema({
    notification: {
        type: String, 
        required: true,
    },
    emoji: {
        type: String,
        required: true,
    },
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Notification = mongoose.model('Notification', notificationSchema);