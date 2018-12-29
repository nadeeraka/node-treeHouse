const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
// ! app set allow to set values globally on express application

app.use(router);
app.get("/", (req, res) => {
  res.render("main");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/admin", (req, res) => {
  console.log(req.body);
  res.render("admin");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
