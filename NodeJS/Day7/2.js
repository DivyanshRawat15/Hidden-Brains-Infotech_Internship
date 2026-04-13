// 2. Create Multiple Routes

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Server in NODE JS!");
});

app.get("/home", (req, res) => {
    res.send("HOME PAGE!");
});

app.get("/about", (req, res) => {
    res.send("ABOUT PAGE!");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(port, () => {
    console.log(`App Listing on port ${port}`);
}); 