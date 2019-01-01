exports.user = ("/",
(req, res) => {
  res.render("main", { title: "Howdy user", user: "" });
});
