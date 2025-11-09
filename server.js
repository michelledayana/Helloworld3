const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello World from Cloud!</h1><p>Deployed successfully 🚀</p>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
