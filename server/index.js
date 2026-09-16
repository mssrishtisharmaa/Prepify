
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./config/connectDb.js";

const app = express();

const PORT = process.env.PORT || 6000;

// Routes
app.get("/", (req, res) => {
    res.json({
        message: "Server started"
    });
});

// Connect DB first
await connectDb();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});











// import { MongoClient } from "mongodb";

// // MongoDB Atlas connection string
// const url = "mongodb://srishti52sharma_db_user:Qp0f5S7GXkYZqbcZ@ac-r7fjp0k-shard-00-00.x3n6bfg.mongodb.net:27017,ac-r7fjp0k-shard-00-01.x3n6bfg.mongodb.net:27017,ac-r7fjp0k-shard-00-02.x3n6bfg.mongodb.net:27017/?ssl=true&replicaSet=atlas-2mz6x5-shard-0&authSource=admin&appName=Cluster0";

// const client = new MongoClient(url);

// // Database name
// const dbName = "Programming_Knowledge";

// async function main() {
//     try {        // Connect to Atlas
//         await client.connect();
//         console.log("Connected to MongoDB Atlas");

//         const db = client.db(dbName);
//         // Example: list collections
//         const collections = await db.listCollections().toArray();
//         console.log("Collections:", collections);

//     } catch (error) {
//         console.error(error);
//     } finally {
//         await client.close();
//     }
// }

// main();

