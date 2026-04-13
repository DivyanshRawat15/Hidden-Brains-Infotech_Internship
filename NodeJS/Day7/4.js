// 4. Query Parameter Handling

const express = require("express");
const app = express();
const PORT = 3000;
app.get("/product", (req, res) => {
  const { name, price } = req.query;
  res.json({ name, price });
});
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
