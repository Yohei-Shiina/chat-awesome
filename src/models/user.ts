import mongoose, { Schema, Document, Model, models } from "mongoose"; 

import { IUser } from '~/types/user';

export interface UserDocument extends Document {
  id: string // Not MongoDB ObjectId
  name: string
  email: string
  image: string
  lastLoginAt: Date
  createdAt: Date

  updateLastLoginAt: (lastLoginAt: Date) => Promise<void>
}

export interface UserModel extends Model<UserDocument> {}

const UserSchema = new Schema<IUser>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  lastLoginAt: { type: Date }
}, {
  timestamps: { createdAt: true, updatedAt: false }
});

UserSchema.methods.updateLastLoginAt = async function(lastLoginAt: Date) {
  this.lastLoginAt = lastLoginAt;
  this.save();
}

export default models.User 
  ? (models.User as UserModel) 
  : mongoose.model<UserDocument, UserModel>('User', UserSchema);
