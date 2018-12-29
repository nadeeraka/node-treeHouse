const express = require("express");
const app = express();

app.set("view engine", "ejs");
// ! app set allow to set values globally on express application

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
