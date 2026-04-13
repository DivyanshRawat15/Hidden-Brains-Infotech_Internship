// 7. Custom Middleware for Authentication

const express = require("express");
const PORT = 3000;
const app = express();

function auth(req,res,next){
    if(req.query.token==="12345"){
        next();
    } else {
        res.send("Unauthorized Access");
    }
}

app.get("/secure",auth,(req,res) => {
    res.send("Authorized");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});