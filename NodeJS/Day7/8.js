// 8. POST Request Handling

const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

app.post("/login",(req,res) => {
    const {username,password} = req.body;

    if(username==="admin" && password==="123"){
        res.send("Login Successful");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});