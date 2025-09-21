// filepath: c:\Users\GANESH\doctor-appointment-website\backend\config\mongodb.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "doctor-appointment", // Specify the database name here
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export default connectDB;