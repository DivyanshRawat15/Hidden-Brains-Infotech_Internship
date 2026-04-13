// 6. Middleware Example

const express = require("express");
const PORT = 3000;
const app = express();

// Middleware displaying request recieved at timing in project terminal.
app.use((req,res,next)=>{
    console.log("Request received at:", new Date().toLocaleTimeString());
    next();
});

app.get("/",(req,res)=> {
    res.send("Hello")
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});