const express = require("express");
const cors = require("cors");
const { generateSystems } = require("./simulator");

const app = express();
app.use(cors());

let systems = generateSystems();

setInterval(() => {
  systems = generateSystems();
}, 2000);

app.get("/api/systems", (req, res) => {
  res.json(systems);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
