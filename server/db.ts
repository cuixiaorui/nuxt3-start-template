import mongoose from "mongoose";
import * as models from "~/models";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your-database-name");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
};

export const db = {
  ...models,
};
