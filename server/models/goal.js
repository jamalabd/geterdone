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

export const goalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    steps: [stepSchema],
    tags: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    completedAt: Date,
    completed: {
        type: Boolean,
        default: false,
    },

});

goalSchema.pre('save', function(next){
        this.updatedAt = Date.now();
        if(this.isModified('completed') && this.completed === true && !this.completedAt){
            this.completedAt = Date.now();
        }
        next();
    });

export const Goal = mongoose.model('Goal', goalSchema);