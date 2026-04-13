// 20. Simple Calculator App

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/calculate",(req,res)=>{

    const {num1,num2,op} = req.query;

    const a = Number(num1);
    const b = Number(num2);

    let result;

    switch(op){
        case "add": result=a+b; break;
        case "sub": result=a-b; break;
        case "mul": result=a*b; break;
        case "div": result=a/b; break;
        default: result="Invalid";
    }

    res.json({result});
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
// URL to get the OUTPUT = /calculate?num1=10&num2=5&op=mul