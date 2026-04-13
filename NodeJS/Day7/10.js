// 10. Create Simple REST API

const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let users = [];

app.get("/users",(req,res)=>res.json(users));

app.post("/users",(req,res)=>{
    users.push(req.body);
    res.send("User added");
});

app.delete("/users/:id",(req,res)=>{
    users.splice(req.params.id,1);
    res.send("User deleted");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});