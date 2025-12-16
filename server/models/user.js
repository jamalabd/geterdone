import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: false,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  goals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal'
  }],
  paths: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Path'
  }],
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notification'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    // This makes the createdAt field immutable, so it cannot be changed after its set 
    immutable: true,
  },
}, {
  // timestamps: is a mongoose option that allows you to automatically add createdAt and UpdatedAt fields 
  // timestamps will automatically manage createdAt and updatedAt fields for you.
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

// pre save hoot to hash the password before saving the user to the database 
// doing this here instead of in the controller because we want to hash the password before saving the user to the database.
// isModified is a mongoose method that chekcs if the passwordHash field has been changed.
// if it has not been chanaged, we skip the hashiing process (next()).
// if it has been changed we hash the password 
// next() is a mongoose method that calls the next middleware function in the stack.

// Virtual for plaintext password (never persisted)
userSchema.virtual('password')
  .set(function setPassword(password) {
    this._password = password;
  });

// Pre-save hook to hash when a plaintext password was provided
userSchema.pre('save', async function (next) {
  if (!this._password) return next();
  try {
    this.passwordHash = await bcrypt.hash(this._password, 10);
    this._password = undefined; // hygiene: drop plaintext from the doc instance
    next();
  } catch (err) {
    next(err);
  }
});

export const User = mongoose.model('User', userSchema);