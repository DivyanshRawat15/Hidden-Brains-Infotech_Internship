// 18. Current Server Time API

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/time",(req,res)=>{
    res.json({time:new Date()});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});