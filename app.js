const express = require("express");
const app = express();

app.set("name", "value");
// ! app set allow to set values globally on express application

app.get("/", (req, res) => {
  res.sendFile("main");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
