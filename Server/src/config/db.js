import mongoose from "mongoose";

const url = process.env.MONGODB_URI.replace("<password>", process.env.PASSWORD);

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDB