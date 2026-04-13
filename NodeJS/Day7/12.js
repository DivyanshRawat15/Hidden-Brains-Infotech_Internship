// 12. URL Logger Middleware


const express = require("express");
const PORT = 3000;
const app = express();

// Middleware statement app.use to return hte request method and req.url
app.use((req,res,next)=>{
    console.log(`Method: ${req.method} URL: ${req.url}`);
    next();
});

app.get("/about",(req,res) => {
    res.send("THIS is an About PAGE!");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});