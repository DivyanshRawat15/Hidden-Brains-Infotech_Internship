// 15. 404 Page

const express = require("express");
const PORT = 3000;
const app = express();

app.use((req,res)=>{
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});