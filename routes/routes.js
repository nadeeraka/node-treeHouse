const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.post("/admin", (req, res) => {
  console.log(req.body);
  res.render("admin");
});
router.use((req, res) => {
  res.render("404");
});

module.exports = router;
