// 1. Create a Simple Express Server

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Connection Established!");
});

app.get("/extra", (req, res) => {
    res.send("Welcome to Express Server.");
})

app.listen(port, () => {
    console.log(`App Listing on port ${port}`);
})