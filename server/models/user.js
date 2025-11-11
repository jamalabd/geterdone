import mongoose from 'mongoose';
import { goalSchema } from './goal.js'
import { pathSchema } from './path.js'
import { notificationSchema } from './notification.js'

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
    default: null
  },
  password: {
    type: String,
    required: true,
  },
  goals: goalSchema,
  paths: pathSchema,
  notifications: notificationSchema,
}
);

export const User = mongoose.model('User', userSchema);