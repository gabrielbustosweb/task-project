import express from "express";
import connectDB from "./config/db.js";

const app = express();

connectDB();

app.listen(4000, () => {
    console.log('App corriendo en puerto 4000');
})