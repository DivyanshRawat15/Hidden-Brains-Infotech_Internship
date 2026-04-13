// 16. Student API

const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

let students=[];

app.get("/students",(req,res)=>res.json(students));

app.get("/students/:id",(req,res)=>{
    res.json(students[req.params.id]);
});

app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send("Student added");
});

app.put("/students/:id",(req,res)=>{
    students[req.params.id]=req.body;
    res.send("Updated");
});

app.delete("/students/:id",(req,res)=>{
    students.splice(req.params.id,1);
    res.send("Deleted");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});