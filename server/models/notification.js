import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    notification: {
        type: string, 
        required: true,
    },
    emoji: {
        type: String,
        required: true,
    },
    goalId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Notification = mongoose.model('Notification', notificationSchema);