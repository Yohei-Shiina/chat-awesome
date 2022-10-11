import mongoose from 'mongoose'

const connectMongo = async() => {
  const MONGODB_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/chat-awesome';
  await mongoose.connect(MONGODB_URI);
}

export default connectMongo;

