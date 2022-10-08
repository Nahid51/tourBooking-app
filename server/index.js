import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("document");
})

app.listen(PORT, () => {
    console.log("server connected at port " + PORT);
})