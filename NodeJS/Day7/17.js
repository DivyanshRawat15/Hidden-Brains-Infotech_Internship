// 17. Even or Odd API

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/number/:num",(req,res)=>{
    const num = Number(req.params.num);
    res.send(num%2===0 ? "Even Number":"Odd Number");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});