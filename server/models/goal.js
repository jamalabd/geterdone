import mongoose from 'mongoose';

const tiptoeSchema = new mongoose.Schema({
    tiptoe: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const stepSchema = new mongoose.Schema({
    step:{
        type: String,
        required: true,
        tiptoes: [tiptoeSchema],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const goalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: true,
    },
    steps: [stepSchema],
    tags: [String],
    createdAt: {
        type: Date,
        default: ()=> Date.now(),
    },
    updatedAt: {
        type: Date,
        default: ()=> Date.now(),
    }, completedAt:{
        type: Date,
        default: null,
    },
     completed: {
        type: Boolean,
        default: false,
    },
});

const Goal = mongoose.model('Goal', goalSchema);