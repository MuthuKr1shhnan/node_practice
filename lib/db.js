import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  const mongodb_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(mongodb_URI);
    console.log(`MongoDB connected...`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
E
export default connectDB;
