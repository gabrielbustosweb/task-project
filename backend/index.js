import express from "express";

const app = express();

app.listen(4000, () => {
    console.log('App corriendo en puerto 4000');
})