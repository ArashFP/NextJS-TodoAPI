import mongoose, { Schema, SchemaType, model } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  apiKey: {
    type: String,
    required: true
  }
}, { timestamps: true })


const User = mongoose.models.User || model('User', userSchema)

export default User;