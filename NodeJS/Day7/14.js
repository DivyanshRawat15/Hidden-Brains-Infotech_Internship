// 14. Return HTML Response

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/welcome",(req,res)=>{
    res.send("<h1>Welcome to Express</h1><br><p>This is a paragraph!</p>");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});