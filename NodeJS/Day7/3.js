// 3. Route with Parameters

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Express Server in NODE JS!");
});

app.get("/home", (req, res) => {
    res.send("HOME PAGE!");
});

app.get('/users/:userName', (req, res) => {
  const userName = req.params.userName;
  res.send(`Hello ${userName}`);
//   res.send(`User Name: ${userName}`);
});


app.listen(port, () => {
    console.log(`App Listing on port ${port}`);
}); 