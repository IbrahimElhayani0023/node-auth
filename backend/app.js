import express from "express";
import dotenv from "dotenv";
import router from "./router/auth.router.js";
import { connectDb } from "./db/connectDb.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", router);
app.use(express.json());

app.listen(PORT, () => {
    connectDb();
    console.log("Server is running on port 5000");
});