import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World 123");
});


app.listen(5000, () => {
    connectDb();
    console.log("Server is running on port 5000");
});