// 5. Send JSON Response

const express = require("express");
const app = express();
const PORT = 3000;
app.get("/api", (req, res) => {
    res.send("Enter the user in URL!");
});

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "John",
    email: "john@example.com"
  });
  res.json({
    id: 2,
    name: "Brian",
    emial: "br@10gmail.com"
  });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});