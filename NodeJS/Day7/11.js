// 11. Error Handling Middleware

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/",()=>{
    throw new Error("Test Error");
});

app.use((err,req,res,next)=>{
    res.status(500).json({error:"Something went wrong"});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});