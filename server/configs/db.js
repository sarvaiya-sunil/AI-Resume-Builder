import mongoose from "mongoose";

import "dotenv/config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfylly.");
    });
    let mongodbURI = process.env.MONGO_URI;
    const projectName = "AI-resume-builder";

    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`);
  } catch (error) {
    console.log("Error in connecting mongoDB", error);
  }
};

export default connectDB;
