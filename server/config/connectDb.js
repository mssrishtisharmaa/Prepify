import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log("Connecting...");

    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Connected!");
    console.log(conn.connection.host);
  } 
  catch (error) {
    console.error("Database connection failed:", error);
   
}
};

export default connectDb;