const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hllllooooooooooooooooo");
});

app.listen(port, () => {
  console.log(`Your server is open at http://localhost:${port}`);
});
