// 13. Route Chaining

const express = require('express');
const PORT = 3000;
const app = express();

function m1(req,res,next){
    console.log("middleware1");
    next();
}

function m2(req,res,next){
    console.log("middleware2");
    next();
}

app.get("/profile",m1,m2,(req,res)=>{
    res.send("Profile Page");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});