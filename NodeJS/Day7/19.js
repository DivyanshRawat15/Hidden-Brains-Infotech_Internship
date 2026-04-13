// 19. Request Counter

const express = require("express");
const PORT = 3000;
const app = express();

let count=0;

app.use((req,res,next)=>{
    count++;
    next();
});

app.get("/count",(req,res)=>{
    res.json({requests:count});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});