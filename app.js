const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Updated Version 🔥");
  res.send("In this we are running whole flow again. 🔥");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

