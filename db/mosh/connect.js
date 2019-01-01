const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost/playground",
    { useNewUrlParser: true }
  )
  .then(() => console.log("success connect to db !"))
  .catch(err => console.error("could not connect to the database ", err));

//schema

const coursSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Cours = mongoose.model("Cours", coursSchema);
const createCours = async () => {
  const cours = new Cours({
    name: "node js cours",
    author: "Mosh",
    tags: ["node", "backend"],
    isPublished: true
  });
  const result = await cours.save();
  console.log(result);
};

//createCours();

const getCours = async () => {
  let details = await Cours.find();
  console.log(details);
};
getCours();
